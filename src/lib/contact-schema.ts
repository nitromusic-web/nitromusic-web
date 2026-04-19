import { z } from "zod";

/**
 * Shared schema for the Contact form. Used by client-side validation
 * (react-hook-form) and by the server route (/api/contact) for re-validation
 * before any email dispatch.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해 주세요.").max(80),
  company: z.string().trim().min(1, "소속을 입력해 주세요.").max(120),
  role: z.string().trim().max(80),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("올바른 이메일을 입력해 주세요."),
  artist: z.string().trim().min(1, "아티스트·트랙을 입력해 주세요.").max(120),
  goal: z
    .string()
    .trim()
    .min(10, "캠페인 목표를 10자 이상으로 적어 주세요.")
    .max(600),
  budget: z.enum(
    ["under-10m", "10-30m", "30-50m", "over-50m"],
    { message: "예산 구간을 선택해 주세요." }
  ),
  vertical: z.enum(
    ["concert", "vs", "meme", "choreo", "behind"],
    { message: "앵커 버티컬을 선택해 주세요." }
  ),
  message: z.string().trim().max(1200),
  privacy: z.literal(true, {
    message: "개인정보 수집·이용 동의가 필요합니다.",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Friendly English labels, used by the email composer on the server. */
export const BUDGET_LABEL: Record<ContactInput["budget"], string> = {
  "under-10m": "~ 10M KRW",
  "10-30m": "10–30M KRW",
  "30-50m": "30–50M KRW",
  "over-50m": "50M KRW+",
};

export const VERTICAL_LABEL: Record<ContactInput["vertical"], string> = {
  concert: "Concert",
  vs: "VS",
  meme: "Meme",
  choreo: "Choreo",
  behind: "Behind",
};
