import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import {
  contactSchema,
  BUDGET_LABEL,
  VERTICAL_LABEL,
  type ContactInput,
} from "@/lib/contact-schema";

export const runtime = "nodejs";

/**
 * Allowed Origin header values for CSRF-style protection. Populated from
 * NEXT_PUBLIC_SITE_URL plus hardcoded production hosts. Requests whose
 * Origin doesn't match are rejected — only affects cross-site attackers;
 * same-origin form submissions send a matching Origin.
 */
const ALLOWED_ORIGINS: readonly string[] = [
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://nitromusic.pro",
  "https://www.nitromusic.pro",
].filter((v): v is string => typeof v === "string" && v.length > 0);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true; // same-origin requests don't set Origin
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  // In dev, allow any localhost / 127.0.0.1 port (Next.js may switch ports).
  if (process.env.NODE_ENV !== "production") {
    return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  }
  return false;
}

/**
 * Minimal per-IP rate limit (in-memory). Resets when the serverless instance
 * is recycled — sufficient for a contact form at launch volume, but will need
 * a shared store (Vercel KV / Redis) once traffic scales.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateBucket = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateBucket.get(ip);
  if (!record || record.resetAt < now) {
    rateBucket.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count += 1;
  return true;
}

function hasValidKey(apiKey: string | undefined): apiKey is string {
  // Real Resend keys follow the pattern `re_...` and are >20 chars. Anything
  // shorter or prefixed with REPLACE_ is treated as unset to protect against
  // accidental deployments with a placeholder value.
  if (!apiKey) return false;
  if (apiKey.length < 20) return false;
  if (apiKey.startsWith("REPLACE_")) return false;
  return apiKey.startsWith("re_");
}

export async function POST(request: Request) {
  // --- Origin check (cheap CSRF defense; blocks cross-site form posts) ---
  const origin = request.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    console.warn(`[contact] Rejected origin: ${origin}`);
    return NextResponse.json({ error: "Forbidden origin." }, { status: 403 });
  }

  // --- Rate limiting ---
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (!rateLimit(ip)) {
    console.warn(`[contact] Rate limit exceeded for IP: ${ip}`);
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  // --- Parse + re-validate ---
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // Log full issues server-side; return a generic message to the client
    // so we don't leak internal schema shape to attackers.
    console.warn(
      `[contact] Validation failed for IP ${ip}:`,
      parsed.error.issues
    );
    return NextResponse.json(
      { error: "Please check your input and try again." },
      { status: 400 }
    );
  }

  const input = parsed.data;

  // --- Deliver: Resend if configured, else filesystem fallback in dev. ---
  const apiKey = process.env.RESEND_API_KEY;
  const hasRealKey = hasValidKey(apiKey);

  if (hasRealKey) {
    const delivered = await sendViaResend(input, apiKey);
    if (!delivered.ok) {
      return NextResponse.json(
        { error: delivered.error },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, provider: "resend" });
  }

  // Fallback: write submission to local file (dev only).
  if (process.env.NODE_ENV !== "production") {
    await saveLocally(input).catch(() => {
      // Filesystem write failure in dev is non-fatal — we still acknowledge
      // the submission so the UX can be verified.
    });
    return NextResponse.json({ ok: true, provider: "local-fs" });
  }

  // Production with no key: fail loudly so ops notice.
  return NextResponse.json(
    { error: "Email delivery is not configured yet." },
    { status: 503 }
  );
}

type SendResult =
  | { ok: true }
  | { ok: false; error: string };

async function sendViaResend(
  input: ContactInput,
  apiKey: string
): Promise<SendResult> {
  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "NitroMusic <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? "nitro@nitromusic.pro";

  // Defensive: strip any CR/LF the Zod email check would already block.
  // Second layer — prevents header injection if the schema is ever relaxed.
  const safeEmail = input.email.replace(/[\r\n]+/g, "");
  // Subject travels through an SMTP header, so strip the same characters there.
  const safeSubject = `[NitroMusic Brief] ${input.company} · ${input.artist}`
    .replace(/[\r\n]+/g, " ");

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: safeEmail,
    subject: safeSubject,
    html: renderEmailHtml(input),
    text: renderEmailText(input),
    tags: [
      { name: "source", value: "contact-form" },
      { name: "budget", value: input.budget },
      { name: "vertical", value: input.vertical },
    ],
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { ok: false, error: error.message || "Delivery failed." };
  }
  console.log("[contact] Delivered via Resend:", data?.id);
  return { ok: true };
}

async function saveLocally(input: ContactInput): Promise<void> {
  const dir = path.join(process.cwd(), ".submissions");
  await fs.mkdir(dir, { recursive: true });
  const filename = `${Date.now()}-${sanitize(input.email)}.json`;
  const payload = {
    receivedAt: new Date().toISOString(),
    ...input,
    budgetLabel: BUDGET_LABEL[input.budget],
    verticalLabel: VERTICAL_LABEL[input.vertical],
  };
  await fs.writeFile(path.join(dir, filename), JSON.stringify(payload, null, 2), "utf8");
  console.log("[contact] Saved locally:", filename);
}

function sanitize(s: string): string {
  return s.replace(/[^a-z0-9_.@-]/gi, "_").slice(0, 80);
}

function renderEmailText(input: ContactInput): string {
  const lines = [
    `Name: ${input.name}`,
    `Company: ${input.company}`,
    input.role ? `Role: ${input.role}` : null,
    `Email: ${input.email}`,
    `Artist / Track: ${input.artist}`,
    `Budget: ${BUDGET_LABEL[input.budget]}`,
    `Anchor vertical: ${VERTICAL_LABEL[input.vertical]}`,
    "",
    "Goal:",
    input.goal,
    input.message ? "" : null,
    input.message ? "Notes / timeline:" : null,
    input.message || null,
  ].filter(Boolean);
  return lines.join("\n");
}

function renderEmailHtml(input: ContactInput): string {
  const rows: Array<[string, string]> = [
    ["Name", input.name],
    ["Company", input.company],
  ];
  if (input.role) rows.push(["Role", input.role]);
  rows.push(
    ["Email", input.email],
    ["Artist / Track", input.artist],
    ["Budget", BUDGET_LABEL[input.budget]],
    ["Anchor vertical", VERTICAL_LABEL[input.vertical]]
  );

  const rowsHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b6b72;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;font-family:ui-monospace,monospace;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;color:#0a0a0b;font-size:14px;">${escapeHtml(v)}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><title>New brief</title></head>
<body style="margin:0;background:#fafafa;font-family:system-ui,-apple-system,sans-serif;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:white;border:1px solid #e5e5e5;border-radius:6px;padding:28px;">
    <div style="font-size:11px;letter-spacing:0.2em;color:#E63946;font-family:ui-monospace,monospace;margin-bottom:10px;">NITROMUSIC · NEW BRIEF</div>
    <h1 style="font-size:20px;margin:0 0 20px;color:#0a0a0b;">${escapeHtml(input.company)} · ${escapeHtml(input.artist)}</h1>
    <table style="border-collapse:collapse;width:100%;">${rowsHtml}</table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e5e5e5;">
      <div style="font-size:11px;letter-spacing:0.2em;color:#6b6b72;font-family:ui-monospace,monospace;margin-bottom:8px;">GOAL</div>
      <div style="font-size:14px;line-height:1.6;color:#0a0a0b;white-space:pre-wrap;">${escapeHtml(input.goal)}</div>
    </div>
    ${
      input.message
        ? `<div style="margin-top:20px;padding-top:20px;border-top:1px solid #e5e5e5;">
            <div style="font-size:11px;letter-spacing:0.2em;color:#6b6b72;font-family:ui-monospace,monospace;margin-bottom:8px;">NOTES / TIMELINE</div>
            <div style="font-size:14px;line-height:1.6;color:#0a0a0b;white-space:pre-wrap;">${escapeHtml(input.message)}</div>
          </div>`
        : ""
    }
  </div>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
