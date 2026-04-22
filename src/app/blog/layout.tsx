import type { Metadata } from "next";
import "./blog.css";

export const metadata: Metadata = {
  title: "Nitro Music 인사이트",
  description:
    "한국 숏폼 음원 마케팅 현장의 관찰, 데이터, 캠페인 노트.",
};

/**
 * 블로그 섹션 공용 레이아웃.
 * 루트 <html><body>는 src/app/layout.tsx에서 관리.
 * 여기서는 블로그 전용 nav + 본문 래퍼만 제공한다.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-root">
      <nav className="blog-nav">
        <a href="/" className="blog-logo" aria-label="NitroMusic 홈으로">
          <img src="/images/logo.png" alt="NitroMusic" />
        </a>
        <div className="blog-nav-links">
          <a href="/" className="blog-nav-link">HOME</a>
          <a href="/blog" className="blog-nav-link">BLOG</a>
          <a href="/#contact" className="blog-nav-cta">
            문의하기 <span aria-hidden>→</span>
          </a>
        </div>
      </nav>
      <main className="blog-main">{children}</main>
      <footer className="blog-foot">
        <p>서울특별시 마포구 양화로 120</p>
        <p>대표자 : 최보건 Logan Choi&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 : 623-16-01889</p>
        <p className="blog-foot-copy">
          Copyright © 2022 KBK Consulting. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
