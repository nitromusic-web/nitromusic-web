// ============================================================
// NITRO MUSIC — content.js  (한/영 i18n + 데이터)
// ============================================================

window.NITRO_I18N = {
  kr: {
    nav: {
      services: "서비스",
      network: "네트워크",
      cases: "캠페인",
      pilot: "파일럿",
      column: "칼럼",
      faq: "FAQ",
      contact: "문의하기"
    },
    hero: {
      // --- Variant 1: 강렬한 메인 카피 ---
      v1_kicker: "NITRO MUSIC × KBK CONSULTING",
      v1_title_line1: "청취 구조를",
      v1_title_line2: "설계하다.",
      v1_sub: "레이블과 유통사, 아티스트 팀을 위한 숏폼 시스템.<br>단순 재생수가 아닌 ‘전환’을 설계합니다.",
      v1_cta_primary: "파일럿 상담 예약",
      v1_cta_secondary: "성과 사례 보기",
      // --- Variant 2: 문제 제기형 ---
      v2_kicker: "SHORT-FORM MUSIC MARKETING",
      v2_title_line1: "뷰는 찼는데,",
      v2_title_line2: "스트리밍은 그대로.",
      v2_sub: "그 간극을 좁히는 포맷이 있습니다. NitroMusic은 앵커 제작 + 롱테일 크리에이터 운영으로, 재생수가 아닌 듣는 행동까지 설계합니다.",
      v2_cta_primary: "미팅 요청",
      v2_cta_secondary: "4주 파일럿 구조 보기",
      // --- Variant 3: 레이블 직설형 ---
      v3_kicker: "FOR LABELS, DISTRIBUTORS & ARTIST TEAMS",
      v3_title_line1: "메이저 레이블이",
      v3_title_line2: "선택한 숏폼 엔진.",
      v3_sub: "Warner Music Korea, RGB Company, Cosm Company, Paul Kim 등 주요 레이블/아티스트 캠페인 — 6개월간 23.5M+ 뷰, 163건의 숏폼을 운영한 실력.",
      v3_cta_primary: "상담 예약",
      v3_cta_secondary: "클라이언트 보기",
      // --- Foot metrics ---
      m1_k: "23.5M",
      m1_l: "Total views / 6 months",
      m2_k: "4",
      m2_l: "Major campaigns · 163 posts",
      m3_k: "100M",
      m3_l: "META ad spend managed (KRW)",
      m4_k: "15+",
      m4_l: "Owned short-form channels",
      status_live: "LIVE · 2026 Q2 캠페인 모집",
      date_tag: "SEOUL / 26.04"
    },
    ticker: [
      "WARNER MUSIC KOREA", "NOEN — HOLD ME", "RGB / COSM COMPANY", "PAUL KIM — WANNA LOVE YOU",
      "PURPLE PEPPER AGENCY", "DAEHAK NAEIL", "INDEPENDENT ARTIST TEAMS"
    ],
    service: {
      eyebrow: "WHAT WE DO",
      title: "숏폼 레이어 시스템,<br>처음부터 끝까지.",
      sub: "트렌드를 잡는 감각과 전환을 만드는 구조.<br>NitroMusic은 재생수가 아닌 듣는 행동까지<br>설계하는 4단계 레이어로 움직입니다.",
      cards: [
          { n: "01", t: "포맷 엔지니어링", d: "앵커 포맷 설계부터 숏폼 내 음원 결합 구간까지.<br>소리와 컷의 배치를 공학적으로 설계합니다.", list: [
          { k: "비주얼 미스매치 타겟팅", v: "01" },
          { k: "오디오 스니펫 배치 설계", v: "02" },
          { k: "네이티브 UI 훅", v: "03" }
        ]},
        { n: "02", t: "앵커 + 롱테일 운영", d: "자체 채널의 앵커 포스트와 크리에이터 롱테일을 포맷 규율 아래 동시에 운영합니다." },
        { n: "03", t: "주간 포맷 규율", d: "매주 포맷 규율 점검, 위너 포맷 확산, 주간 리포트 자동 생성." },
        { n: "04", t: "성과 리포팅", d: "Shazam, Spotify, IG Reels 지표를 통합한 한 장 요약과 데이터 부록을 전달합니다." }
      ],
      feature: {
        big: "×6.3",
        t: "단순 재생 대비 전환율",
        d: "앵커 포스트와 크리에이터 운영을 규율 단위로 결합했을 때, 단순 뷰 광고 대비 실제 ‘듣기 전환’이 평균 6.3배 향상됩니다."
      }
    },
    network: {
      eyebrow: "NETWORK & INFRASTRUCTURE",
      title: "Major-Grade Network.",
      sub: "메이저 레이블이 요구하는 볼륨, 품질, 속도를 컨트롤합니다.",
      stats: [
        { v: "15", u: "+", l: "자체 채널", d: "Instagram / TikTok / YouTube 운영 채널" },
        { v: "800K", u: "+", l: "통합 도달", d: "누적 팔로워 리치" },
        { v: "100M", u: "+", l: "광고 집행액", d: "META 광고 누적 집행 (KRW)" },
        { v: "10K", u: "+", l: "포스트당 최소 뷰", d: "캠페인 포스트 최소 뷰 기준선" }
      ],
      platforms: {
        label: "활동 플랫폼",
        list: ["Instagram Reels", "TikTok", "YouTube Shorts", "Spotify", "Apple Music", "YouTube Music"]
      }
    },
    cases: {
      eyebrow: "CAMPAIGNS / 2025–2026",
      title: "장르와 레이블을 가리지 않는\n검증된 실행력.",
      sub: "클릭하여 상세 보기",
      rows: [
        {
          no: "C-001",
          client: "Warner Music Korea",
          sub: "Ed Sheeran, Kehlani, Benson Boone, sombr",
          period: "2025.08 — 2025.10",
          posts: "27",
          views: "2.77M",
          highlight: "923K single post peak",
          strategy: "글로벌 메이저 4인의 한국 시장 런칭 캠페인. 아티스트별 비주얼 톤을 로컬라이즈한 앵커 포스트 + 리스너 층을 가진 롱테일 크리에이터 동시 운영. 숏폼 내 음원 결합 구간을 훅 단위로 재설계.",
          chips: ["Global Major", "Multi-Artist", "Localization"],
          metrics: [
            { v: "2.77M", l: "Total views" },
            { v: "118K", l: "Likes" },
            { v: "37K", l: "Shares" }
          ]
        },
        {
          no: "C-002",
          client: "Noen — Hold me",
          sub: "Zero-base re-viral of dormant track",
          period: "2025.11 — 2026.01",
          posts: "94",
          views: "13.3M",
          highlight: "1.9M single post, 266K shares",
          strategy: "발매 후 동면 상태였던 트랙을 제로베이스에서 재바이럴 시키는 3개월 캠페인. 숏폼 내 결합 구간을 세 번 리디자인, 쉐어 지향 포맷으로 최적화. 앵커 1건에서 1.9M 달성.",
          chips: ["Zero-base", "Re-viral", "Share-first"],
          metrics: [
            { v: "13.3M", l: "Total views" },
            { v: "266K", l: "Shares" },
            { v: "12.9K", l: "Saves" }
          ]
        },
        {
          no: "C-003",
          client: "RGB / Cosm Company",
          sub: "Giwon, Cosmic Boy, Ryul",
          period: "2025.07 & 11",
          posts: "18",
          views: "2.79M",
          highlight: "508K Casanova single post",
          strategy: "인디 힙합/알앤비 아티스트 3인의 동시 런칭. 좁은 포스트 수량 대비 집중도 있는 포맷 규율로 운영, 단일 포스트 508K 달성. Saves 지표 집중 최적화.",
          chips: ["Hip-hop / R&B", "Indie", "Saves-optimized"],
          metrics: [
            { v: "2.79M", l: "Total views" },
            { v: "123K", l: "Likes" },
            { v: "21.3K", l: "Saves" }
          ]
        },
        {
          no: "C-004",
          client: "Paul Kim — Wanna Love You",
          sub: "Visual-mismatch targeting strategy",
          period: "2026.01",
          posts: "24",
          views: "4.6M",
          highlight: "1.19M + 2.17M anchor posts",
          strategy: "국내 메인스트림 발라드 아티스트의 신곡 런칭. Visual-mismatch 전략으로 리스너 외곽의 층까지 포착. 앵커 2건 각각 1.19M / 2.17M, 전체 24건 운영.",
          chips: ["Ballad", "Visual-mismatch", "Anchor-driven"],
          metrics: [
            { v: "4.6M", l: "Total views" },
            { v: "277K", l: "Likes" },
            { v: "99.5K", l: "Shares" }
          ]
        }
      ]
    },
    aggregate: {
      eyebrow: "AGGREGATE PERFORMANCE",
      title: "4개 메이저 캠페인, 163건.",
      caption: "단기간 내 <b>23,511,262 뷰</b>를 만든 실전 데이터. 장르와 레이블의 프로파일이 달라도, 포맷 규율 하나로 재현된 성과입니다.",
      breakdown: [
        { v: "623,847", l: "TOTAL LIKES" },
        { v: "425,156", l: "TOTAL SHARES" },
        { v: "76,435", l: "TOTAL SAVES" },
        { v: "4 / 4", l: "CAMPAIGN WINS" }
      ]
    },
    pilot: {
      eyebrow: "4-WEEK PILOT",
      title: "처음 만나는 팀과는,<br>4주 파일럿으로.",
      sub: "작게 시작해 위닝 포맷을 찾고, 검증된 것만 확장합니다.",
      steps: [
        { wk: "WEEK 0", t: "준비", d: "스코프 확정, 브리프 작성, 앵커 크리에이터 선정." },
        { wk: "WEEK 1", t: "검증", d: "앵커 크리에이터의 레퍼런스 포스트 3–5건으로 포맷 가설을 검증합니다." },
        { wk: "WEEK 2", t: "확산", d: "위닝 포맷의 롱테일 확산. 크리에이터 규율 점검, 캠페인 규모 확대." },
        { wk: "WEEK 3–4", t: "정착", d: "위너 확장, 주간 리포팅, 데이터 이관 및 다음 단계 플랜 수립." }
      ],
      deliverables: {
        k: "주간 전달물",
        items: ["한 장 요약 리포트", "앵커 릴스 포멧 라이브러리", "데이터 부록 (Shazam, Spotify, IG Reels 스냅샷)"]
      }
    },
    why: {
      eyebrow: "WHY NITROMUSIC",
      title_1: "Taste, Structure,",
      title_em: "and Discipline.",
      sub: "감각만으로도, 구조만으로도 안 됩니다.<br>두 가지를 주간 단위 규율로 묶는 것 —<br>그게 NitroMusic이 메이저 레이블의 실행 파트너로 선택된 이유입니다.",
      items: [
        { n: "01 / TASTE", t: "Korea-based trend sensitivity", d: "한국 기반 트렌드 감도와, 글로벌 메이저가 요구하는 실행 품질을 동시에 갖췄습니다." },
        { n: "02 / STRUCTURE", t: "Conversion-first design", d: "바닐라 조회수 최적화가 아닌, 듣기 전환까지를 디자인하는 숏폼 설계." },
        { n: "03 / SCALE", t: "Anchor + Long-tail ops", d: "앵커 채널과 롱테일 크리에이터를 포맷 규율 아래 동시 운영합니다." },
        { n: "04 / DISCIPLINE", t: "Weekly reporting rhythm", d: "매주 리포트, 매주 포맷 점검 — 캠페인 전 기간에 걸쳐 규율을 유지합니다." }
      ]
    },
    clients: {
      eyebrow: "TRUSTED BY",
      title: "함께한 고객.",
      logos: [
        { src: "images/logos/warner.png", name: "Warner Music Korea" },
        { src: "images/logos/dnation.png", name: "D-Nation Entertainment" },
        { src: "images/logos/cosm.png", name: "Cosm Company" },
        { src: "images/logos/route.png", name: "Route Company" },
        { src: "images/logos/whyes.png", name: "Whyes Entertainment" },
        { src: "images/logos/howtoouse.png", name: "How to Use" }
      ]
    },
    column: {
      eyebrow: "COLUMN",
      title: "Nitro 인사이트.",
      sub: "한국 숏폼 마케팅 현장의 관찰, 데이터, 캠페인 노트.",
      filters_label: "AUDIENCE",
      filters: ["전체", "프로모터 담당자", "CEO", "시니어 아티스트", "신예 아티스트", "신입 마케터"],
      top5_title: "Nitro 인기 Top 5",
      top5_sub: "[5월] 가장 많이 읽힌 칼럼",
      top5: [
        { cat: "음원 마케팅 기초다지기", t: "음원 마케팅, 처음이시라구요?", em: "'숏폼 + 광고'는 가장 어려운 조합입니다.", views: "24,531", thumb: "#E63946" },
        { cat: "음원 프로모션 실전편", t: "스트리밍 성과가 안 나온다면,", em: "지금 점검해 봐야 할 3가지 체크리스트", views: "19,204", thumb: "#1a1a1a" },
        { cat: "음원 마케팅 기초다지기", t: "마케팅 효과가 없던 2가지 이유,", em: "플랫폼에 대한 이해가 부족한 당신…", views: "17,882", thumb: "#2a0d12" },
        { cat: "음원 프로모션 실전편", t: "팀장의 보고는 이렇게 다르다: 상향 커뮤니케이션 스킬 (좋은 예 vs 나쁜 예)", em: "", views: "14,107", thumb: "#3a5bbc" },
        { cat: "음원 홍보 콘텐츠 정밀 분석", t: "일센스를 키우는 직장인의 문해력 2편: 구성하기, 쓰기 실전편", em: "", views: "12,366", thumb: "#f5efe4" }
      ],
      new_title: "새로 발행된 마케팅 콘텐츠",
      new_more: "전체 보기 →",
      new_cards: [
        { thumb_t: "100만 조회수,", thumb_em: "그걸로 뭐하시게요?", thumb_bg: "#1a1a1a", audience: ["senior", "promoter"], cat: "음원 프로모션 실전편", t: "스트리밍 성과가 안 나온다면, 당장 점검해 봐야 할 3가지 체크리스트", read: "3분 분량", date: "5월 9일, 2026", views: "8,421" },
        { thumb_t: "공들여 만든 릴스,", thumb_em: "떡상 못한 2가지 이유", thumb_bg_img: "images/hero-live.png", audience: ["promoter", "ceo"], cat: "음원 마케팅 기초다지기", t: "존재감 없는 팀의 체질을 바꾸는 5가지 원칙 (ft. 크리에이티브 팀 빌딩)", read: "5분 분량", date: "4월 26일, 2026", views: "6,892" },
        { thumb_t: "나도 글을", thumb_em: "쓸 수 있을까?", thumb_bg: "#eef1f6", audience: ["rookie", "senior"], cat: "음원 마케팅 기초다지기, 엔터테인먼트 정밀 분석", t: "평범한 직장인이 콘텐츠를 만들기까지는: 15초 메모로 시작하는 기록의 확장법 (템플릿 제공)", read: "5분 분량", date: "4월 26일, 2026", views: "5,117" },
        { thumb_t: "결제 직전,", thumb_em: "왜 고객은 떠날까?", thumb_bg: "#f7e8c8", audience: ["promoter", "rookie"], cat: "음원 마케팅 기초다지기", t: "전환율을 높이고 싶다면? 고객의 행동을 바꾼 작은 실험들 | 쉽게 시작하는 데이터 분석(4)", read: "5분 분량", date: "4월 26일, 2026", views: "4,503" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "자주 묻는 질문.",
      sub: "파일럿 이전 단계에서 가장 많이 받는 질문 6가지.",
      items: [
        { q: "최소 캠페인 단위는 어떻게 되나요?", a: "4주 파일럿이 최소 단위입니다. WEEK 0–4 동안 Prep → Seed → Scale → Consolidate를 1사이클 돌리며 위닝 포맷을 확정합니다." },
        { q: "자체 채널 외에 외부 크리에이터도 운영하나요?", a: "네. 자체 앵커 채널 15+와 함께, 장르/리스너 매치가 맞는 롱테일 크리에이터를 포맷 규율 하에 동시에 운영합니다." },
        { q: "플랫폼은 어디까지 커버되나요?", a: "Instagram Reels, TikTok, YouTube Shorts 전체. 스트리밍 연결은 Spotify / Apple Music / YouTube Music을 우선합니다." },
        { q: "리포팅 주기는 어떻게 되나요?", a: "매주 1회 원페이지 요약 리포트 + 에셋 라이브러리 + 데이터 부록(Shazam, Spotify, IG Reels 스냅샷)을 전달합니다." },
        { q: "글로벌 메이저 레이블 건도 가능한가요?", a: "Warner Music Korea 캠페인 등 글로벌 메이저 실행 경험이 있습니다. 아티스트별 비주얼 로컬라이즈와 포맷 재설계를 전담합니다." },
        { q: "기존 대행사와 중복 운영이 가능한가요?", a: "가능합니다. 기존 디지털/ATL 대행사와 RACI를 명확히 나누어 숏폼 단위만 우리가 전담하는 구조가 가장 일반적입니다." }
      ]
    },
    contact: {
      eyebrow: "LET'S TALK",
      title_1: "다음 앵커 포스트를,",
      title_em: "함께 설계하시죠.",
      sub: "프로젝트 개요만 간단히 보내주시면, 영업일 기준 2일 내에 파일럿 제안과 레퍼런스를 회신드립니다.",
      channels: [
        { k: "EMAIL", v: "nitro@nitromusic.pro" },
        { k: "INSTAGRAM", v: "@audio_room_" },
        { k: "TELEGRAM", v: "@NitroMusic" }
      ],
      form: {
        head: "캠페인 요청서",
        seq: "FORM / 01",
        f_name: "담당자명",
        f_company: "소속",
        f_role: "직함/역할",
        f_email: "이메일",
        f_artist: "아티스트 / 트랙",
        f_goal: "캠페인 목표",
        f_budget: "예산 규모",
        f_budget_opts: ["~ 1천만원", "1–3천만원", "3–5천만원", "5천만원+"],
        f_vertical: "앵커 버티컬",
        f_vertical_opts: ["Concert", "VS", "Meme", "Choreo", "Behind"],
        f_msg: "추가 설명 / 타임라인",
        submit: "요청서 제출",
        privacy: "개인정보 수집·이용 동의"
      }
    },
    footer: {
      tag: "Signature short-form systems for labels, distributors, and artist teams.",
      col1: { h: "서비스", items: ["Format Engineering", "Anchor + Long-tail Ops", "Deep-link Conversion", "Weekly Reporting"] },
      col2: { h: "회사", items: ["About", "Team", "Careers", "Press Kit"] },
      col3: { h: "리소스", items: ["Column", "Case Studies", "Corporate Deck", "Media"] },
      copyright: "© 2026 KBK CONSULTING · NITRO MUSIC",
      meta: "SEOUL / BUSAN"
    }
  },
  en: {
    nav: { services: "Services", network: "Network", cases: "Campaigns", pilot: "Pilot", column: "Column", faq: "FAQ", contact: "Contact" },
    hero: {
      v1_kicker: "NITRO MUSIC × KBK CONSULTING",
      v1_title_line1: "We make",
      v1_title_line2: "tracks break.",
      v1_sub: "Single-format systems for labels, distributors, and artist teams.<br>We engineer conversion — not vanity views.",
      v1_cta_primary: "Book a pilot consult",
      v1_cta_secondary: "See campaign results",
      v2_kicker: "SHORT-FORM MUSIC MARKETING",
      v2_title_line1: "Views are up.",
      v2_title_line2: "Streams aren't.",
      v2_sub: "That gap is what we close. Anchor production + long-tail creator ops — NitroMusic designs not just plays, but the act of listening.",
      v2_cta_primary: "Request a meeting",
      v2_cta_secondary: "See the 4-week pilot",
      v3_kicker: "FOR LABELS, DISTRIBUTORS & ARTIST TEAMS",
      v3_title_line1: "The short-form engine",
      v3_title_line2: "majors run on.",
      v3_sub: "Warner Music Korea, RGB Company, Cosm Company, Paul Kim — 23.5M+ views across 163 short-form posts in six months.",
      v3_cta_primary: "Book a consult",
      v3_cta_secondary: "View clients",
      m1_k: "23.5M",
      m1_l: "Total views / 6 months",
      m2_k: "4",
      m2_l: "Major campaigns · 163 posts",
      m3_k: "100M",
      m3_l: "META ad spend managed (KRW)",
      m4_k: "15+",
      m4_l: "Owned short-form channels",
      status_live: "LIVE · Q2 2026 slots open",
      date_tag: "SEOUL / 26.04"
    },
    ticker: [
      "WARNER MUSIC KOREA", "NOEN — HOLD ME", "RGB / COSM COMPANY", "PAUL KIM — WANNA LOVE YOU",
      "PURPLE PEPPER AGENCY", "DAEHAK NAEIL", "INDEPENDENT ARTIST TEAMS"
    ],
    service: {
      eyebrow: "WHAT WE DO",
      title: "A four-layer short-form system, end to end.",
      sub: "Taste that catches trends; structure that drives conversion.<br>NitroMusic operates across four disciplined layers — from snippet placement to weekly reporting.",
      cards: [
        { n: "01", t: "Format Engineering", d: "Anchor-format design, in-post audio placement — we engineer the sound-and-cut architecture of every edit.", list: [
          { k: "Visual-mismatch targeting", v: "01" },
          { k: "Audio snippet placement", v: "02" },
          { k: "Native UI hooks", v: "03" }
        ]},
        { n: "02", t: "Anchor + Long-tail Ops", d: "Our owned anchor posts run in lockstep with long-tail creators — one set of format rules across every asset." },
        { n: "03", t: "Weekly Format Discipline", d: "Weekly format audit, winner replication, and auto-generated weekly reports." },
        { n: "04", t: "Performance Reporting", d: "Shazam, Spotify, and IG Reels indicators unified into a one-page summary with full data appendix." }
      ],
      feature: {
        big: "×6.3",
        t: "Lift over vanilla view-buys",
        d: "When anchor posts and creator ops run under shared format discipline, listen-conversion averages 6.3× over vanilla view-optimized spend."
      }
    },
    network: {
      eyebrow: "NETWORK & INFRASTRUCTURE",
      title: "Major-Grade Network.",
      sub: "We control the volume, quality, and velocity major labels demand.",
      stats: [
        { v: "15", u: "+", l: "OWNED CHANNELS", d: "Across Instagram / TikTok / YouTube" },
        { v: "800K", u: "+", l: "COMBINED REACH", d: "Total follower reach" },
        { v: "100M", u: "+", l: "AD SPEND MANAGED", d: "Cumulative META spend (KRW)" },
        { v: "10K", u: "+", l: "MIN VIEWS / POST", d: "Per campaign post floor" }
      ],
      platforms: {
        label: "RUNNING ON",
        list: ["Instagram Reels", "TikTok", "YouTube Shorts", "Spotify", "Apple Music", "YouTube Music"]
      }
    },
    cases: {
      eyebrow: "CAMPAIGNS / 2025–2026",
      title: "Proven across genres\nand labels.",
      sub: "Click any row to expand",
      rows: [
        { no: "C-001", client: "Warner Music Korea", sub: "Ed Sheeran, Kehlani, Benson Boone, sombr", period: "Aug — Oct 2025", posts: "27", views: "2.77M", highlight: "923K single post peak",
          strategy: "Korea launch campaign for four global majors. Artist-level tone localization across anchor posts + listener-matched long-tail creators. Snippet placement redesigned around the hook.",
          chips: ["Global Major", "Multi-Artist", "Localization"],
          metrics: [{ v: "2.77M", l: "Total views" }, { v: "118K", l: "Likes" }, { v: "37K", l: "Shares" }]
        },
        { no: "C-002", client: "Noen — Hold me", sub: "Zero-base re-viral of dormant track", period: "Nov 2025 — Jan 2026", posts: "94", views: "13.3M", highlight: "1.9M single post, 266K shares",
          strategy: "Three-month zero-base re-viral on a dormant track. Snippet junction redesigned three times, optimized for share-first format. 1.9M from a single anchor.",
          chips: ["Zero-base", "Re-viral", "Share-first"],
          metrics: [{ v: "13.3M", l: "Total views" }, { v: "266K", l: "Shares" }, { v: "12.9K", l: "Saves" }]
        },
        { no: "C-003", client: "RGB / Cosm Company", sub: "Giwon, Cosmic Boy, Ryul", period: "Jul & Nov 2025", posts: "18", views: "2.79M", highlight: "508K Casanova single post",
          strategy: "Simultaneous launch for three indie hip-hop / R&B artists. Tight post count, high-discipline format — single post hit 508K. Heavily optimized for Saves.",
          chips: ["Hip-hop / R&B", "Indie", "Saves-optimized"],
          metrics: [{ v: "2.79M", l: "Total views" }, { v: "123K", l: "Likes" }, { v: "21.3K", l: "Saves" }]
        },
        { no: "C-004", client: "Paul Kim — Wanna Love You", sub: "Visual-mismatch targeting strategy", period: "Jan 2026", posts: "24", views: "4.6M", highlight: "1.19M + 2.17M anchor posts",
          strategy: "Mainstream ballad launch. Visual-mismatch targeting pulled in listeners outside core demographics. Two anchors: 1.19M / 2.17M; 24 total posts.",
          chips: ["Ballad", "Visual-mismatch", "Anchor-driven"],
          metrics: [{ v: "4.6M", l: "Total views" }, { v: "277K", l: "Likes" }, { v: "99.5K", l: "Shares" }]
        }
      ]
    },
    aggregate: {
      eyebrow: "AGGREGATE PERFORMANCE",
      title: "4 major campaigns, 163 posts.",
      caption: "<b>23,511,262 views</b> generated in six months. Different genres, different label profiles — reproducible under a single format discipline.",
      breakdown: [
        { v: "623,847", l: "TOTAL LIKES" },
        { v: "425,156", l: "TOTAL SHARES" },
        { v: "76,435", l: "TOTAL SAVES" },
        { v: "4 / 4", l: "CAMPAIGN WINS" }
      ]
    },
    pilot: {
      eyebrow: "4-WEEK PILOT",
      title: "New team?<br>We start with a 4-week pilot.",
      sub: "Start small, find the winning format, scale only what converts.",
      steps: [
        { wk: "WEEK 0", t: "PREP", d: "Scope, briefs, anchor creator selection." },
        { wk: "WEEK 1", t: "SEED", d: "3–5 reference posts from anchor creators. Format hypotheses validated." },
        { wk: "WEEK 2", t: "SCALE", d: "Long-tail replication of winning formats. Discipline audit, campaign scale-up." },
        { wk: "WEEK 3–4", t: "CONSOLIDATE", d: "Expand winners, weekly reporting, data handoff and next-phase plan." }
      ],
      deliverables: {
        k: "WEEKLY DELIVERABLES",
        items: ["One-page summary", "Asset library of top edits", "Data appendix (Shazam, Spotify, IG Reels snapshots)"]
      }
    },
    why: {
      eyebrow: "WHY NITROMUSIC",
      title_1: "Taste, Structure,",
      title_em: "and Discipline.",
      sub: "Taste alone doesn't scale. Structure alone doesn't catch trends.<br>Binding both under a weekly discipline —<br>that's why majors pick NitroMusic as their execution partner.",
      items: [
        { n: "01 / TASTE", t: "Korea-based trend sensitivity", d: "Local trend sensitivity combined with the execution quality global majors require." },
        { n: "02 / STRUCTURE", t: "Conversion-first design", d: "Not vanity view optimization — we design the entire path to the listen." },
        { n: "03 / SCALE", t: "Anchor + Long-tail ops", d: "Owned anchor channels and creator long-tail, running under one format rulebook." },
        { n: "04 / DISCIPLINE", t: "Weekly reporting rhythm", d: "Weekly reports, weekly format audits — discipline held across the full campaign." }
      ]
    },
    clients: {
      eyebrow: "TRUSTED BY",
      title: "Clients we've worked with.",
      logos: [
        { src: "images/logos/warner.png", name: "Warner Music Korea" },
        { src: "images/logos/dnation.png", name: "D-Nation Entertainment" },
        { src: "images/logos/cosm.png", name: "Cosm Company" },
        { src: "images/logos/route.png", name: "Route Company" },
        { src: "images/logos/whyes.png", name: "Whyes Entertainment" },
        { src: "images/logos/howtoouse.png", name: "How to Use" }
      ]
    },
    column: {
      eyebrow: "COLUMN",
      title: "Nitro Insights.",
      sub: "Observations, data, and field reports on Korean short-form music marketing.",
      filters_label: "AUDIENCE",
      filters: ["All", "Promoters", "CEO", "Senior artists", "New artists", "New marketers"],
      top5_title: "Nitro Top 5",
      top5_sub: "[May] most-read columns",
      top5: [
        { cat: "Music marketing basics", t: "New to music marketing?", em: "'Short-form + paid' is one of the hardest combinations.", views: "24,531", thumb: "#E63946" },
        { cat: "Promotion playbook", t: "Streaming numbers flat?", em: "The 3-point checklist to audit right now.", views: "19,204", thumb: "#1a1a1a" },
        { cat: "Music marketing basics", t: "Two reasons your marketing isn't landing —", em: "you don't understand the platform yet.", views: "17,882", thumb: "#2a0d12" },
        { cat: "Promotion playbook", t: "Managers report up differently: upstream communication (good vs bad examples)", em: "", views: "14,107", thumb: "#3a5bbc" },
        { cat: "Content teardown", t: "Literacy for marketers, Part 2 — structure and the act of writing.", em: "", views: "12,366", thumb: "#f5efe4" }
      ],
      new_title: "Newly published",
      new_more: "See all →",
      new_cards: [
        { thumb_t: "1M views —", thumb_em: "what's the plan?", thumb_bg: "#1a1a1a", audience: ["senior", "promoter"], cat: "Promotion playbook", t: "Streams aren't landing — the 3-point checklist to audit right now.", read: "3 min read", date: "May 9, 2026", views: "8,421" },
        { thumb_t: "You made the reel,", thumb_em: "so why didn't it pop?", thumb_bg_img: "images/hero-live.png", audience: ["promoter", "ceo"], cat: "Music marketing basics", t: "Five principles to rebuild an overlooked team (ft. creative team building).", read: "5 min read", date: "Apr 26, 2026", views: "6,892" },
        { thumb_t: "Can I really", thumb_em: "write something?", thumb_bg: "#eef1f6", audience: ["rookie", "senior"], cat: "Music marketing basics · Teardown", t: "From ordinary to writer: the 15-second memo expansion method (template included).", read: "5 min read", date: "Apr 26, 2026", views: "5,117" },
        { thumb_t: "Right before checkout,", thumb_em: "why do they leave?", thumb_bg: "#f7e8c8", audience: ["promoter", "rookie"], cat: "Music marketing basics", t: "Lift conversion: small experiments that moved customer behavior | easy data analysis (4).", read: "5 min read", date: "Apr 26, 2026", views: "4,503" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked.",
      sub: "The six questions we hear most before a pilot.",
      items: [
        { q: "What's the minimum campaign unit?", a: "A 4-week pilot is the minimum. Across Week 0–4, we run one full Prep → Seed → Scale → Consolidate loop to lock the winning format." },
        { q: "Do you run external creators beyond owned channels?", a: "Yes. Our 15+ anchor channels run alongside genre- and listener-matched long-tail creators — all under shared format rules." },
        { q: "Which platforms do you cover?", a: "Instagram Reels, TikTok, and YouTube Shorts in full. Streaming destinations: Spotify, Apple Music, YouTube Music as the priority stack." },
        { q: "What's the reporting cadence?", a: "Weekly — one-page summary, asset library, and a data appendix (Shazam, Spotify, IG Reels snapshots)." },
        { q: "Do you work with global major labels?", a: "Yes — Warner Music Korea among others. We handle artist-level visual localization and per-campaign format redesign." },
        { q: "Can you run alongside an existing agency?", a: "Absolutely. A clean RACI split with existing digital/ATL agencies — NitroMusic owning the short-form layer — is the most common setup." }
      ]
    },
    contact: {
      eyebrow: "LET'S TALK",
      title_1: "Let's design",
      title_em: "your next anchor post.",
      sub: "Send a brief project outline and we'll return a pilot proposal plus references within 2 business days.",
      channels: [
        { k: "EMAIL", v: "nitro@nitromusic.pro" },
        { k: "INSTAGRAM", v: "@audio_room_" },
        { k: "TELEGRAM", v: "@NitroMusic" }
      ],
      form: {
        head: "Campaign brief",
        seq: "FORM / 01",
        f_name: "Your name",
        f_company: "Company / Label",
        f_role: "Role",
        f_email: "Email",
        f_artist: "Artist / Track",
        f_goal: "Campaign goal",
        f_budget: "Budget range",
        f_budget_opts: ["~ 10M KRW", "10–30M KRW", "30–50M KRW", "50M KRW+"],
        f_vertical: "Anchor vertical",
        f_vertical_opts: ["Concert", "VS", "Meme", "Choreo", "Behind"],
        f_msg: "Notes / timeline",
        submit: "Submit brief",
        privacy: "I agree to the privacy policy"
      }
    },
    footer: {
      tag: "Signature short-form systems for labels, distributors, and artist teams.",
      col1: { h: "Services", items: ["Format Engineering", "Anchor + Long-tail Ops", "Deep-link Conversion", "Weekly Reporting"] },
      col2: { h: "Company", items: ["About", "Team", "Careers", "Press Kit"] },
      col3: { h: "Resources", items: ["Column", "Case Studies", "Corporate Deck", "Media"] },
      copyright: "© 2026 KBK CONSULTING · NITRO MUSIC",
      meta: "SEOUL / BUSAN"
    }
  }
};
