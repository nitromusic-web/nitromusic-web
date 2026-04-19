# NitroMusic Web

Marketing site for **NitroMusic** — short-form music marketing for labels,
distributors, and artist teams. Korean / English bilingual.

## Stack

- **Landing page** — static HTML/CSS/JS shipped from Claude Design, served
  from `public/home.html` via a rewrite on `/`.
- **Contact API** — `src/app/api/contact/route.ts` (Next.js 16 App Router)
  with Zod validation, per-IP rate limiting, CSRF-style origin check, and
  Resend delivery.
- **Security headers** — CSP-adjacent set applied in `next.config.ts`.

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Environment variables

Copy `.env.example` → `.env.local` and fill in:

| Key | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key (from https://resend.com/api-keys) |
| `RESEND_FROM` | Verified sender address for Resend |
| `CONTACT_TO_EMAIL` | Where contact-form submissions are delivered |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (used in metadata and CSRF check) |

Without a valid `RESEND_API_KEY`, form submissions fall back to
`.submissions/*.json` on the server (dev only).

## Deployment

Hosted on Vercel. Pushing to `main` triggers an auto-deploy.

## Editing content

- **Text / copy / numbers** — edit `public/content.js`
- **Layout / design** — edit `public/styles.css` or `public/home.html`
- **API / server logic** — edit files under `src/`

For large design overhauls, re-export from Claude Design and replace the
three files in `public/` (home.html, styles.css, app.js, content.js).
