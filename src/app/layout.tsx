import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NitroMusic — Signature short-form systems for music",
  description:
    "Korea-based short-form music marketing. Signature single-format systems for labels, distributors, and artist teams.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nitromusic.pro"
  ),
  robots: { index: true, follow: true },
};

/**
 * Root layout. The real landing page is the static HTML at public/home.html
 * (Claude Design export). Next.js exists here to host /api/contact and to
 * apply security headers via next.config.ts. A rewrite on "/" serves the
 * static file directly, so this layout is only used by any future React
 * pages (e.g. dashboards).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
