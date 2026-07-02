// ============================================================
// NITRO MUSIC — content.js  (한/영 i18n + 데이터)
// ============================================================

window.NITRO_I18N = {
  kr: {
    nav: {
      live: "라이브 데모",
      network: "네트워크",
      cases: "캠페인",
      pilot: "파일럿",
      column: "칼럼",
      faq: "FAQ",
      contact: "문의하기"
    },
    hero: {
      // --- Variant 1: 포지셔닝 선언 (v2 문서 ①) ---
      v1_kicker: "NITRO MUSIC × KBK CONSULTING",
      v1_title_line1: "조회수를 팔지 않는다,",
      v1_title_line2: "팬에게 각인시킨다.",
      v1_sub: "숏폼 바이럴을 팬 각인과 검증된 스트리밍 상승으로 전환합니다.<br>레이블·유통사·아티스트 팀을 위한 숏폼 시스템.",
      v1_cta_primary: "내 곡 분석받기",
      v1_cta_secondary: "성과 사례 보기",
      // --- Variant 2: 문제 제기형 ---
      v2_kicker: "SHORT-FORM MUSIC MARKETING",
      v2_title_line1: "뷰는 찼는데,",
      v2_title_line2: "스트리밍은 그대로.",
      v2_sub: "그 간극을 좁히는 포맷이 있습니다. NitroMusic은 앵커 제작 + 롱테일 크리에이터 운영으로, 재생수가 아닌 듣는 행동까지 설계합니다.",
      v2_cta_primary: "바이럴 진단 리포트 받기",
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
      status_live: "LIVE · 2026 Q3 캠페인 모집",
      date_tag: "SEOUL / 26.07"
    },
    ticker: [
      "WARNER MUSIC KOREA", "NOEN — HOLD ME", "RGB / COSM COMPANY", "PAUL KIM — WANNA LOVE YOU",
      "PURPLE PEPPER AGENCY", "DAEHAK NAEIL", "INDEPENDENT ARTIST TEAMS"
    ],
    live: {
      eyebrow: "WHAT WE DO / LIVE",
      title: "설명은 75초면<br>충분합니다.",
      sub: "우리가 무엇을 하는지, 왜 조회수를 팔지 않는지 —<br>말보다 직접 보여드리는 게 빠릅니다.",
      video_fallback_k: "FILM — IN PRODUCTION",
      video_fallback_t: "조회수를 팔지 않는다,<br>팬에게 각인시킨다.",
      report_eyebrow: "SOUND TRACKER — LIVE REPORT",
      report_title: "실제 추적 리포트를 직접 만져보세요.",
      report_sub: "FUNK TAKA — 릴스·틱톡 확산과 스트리밍 상승을 한 타임라인에 정렬한 실제 리포트입니다. 모든 클립을 매일 수집하고, 삭제된 영상까지 보존합니다. 고객은 캠페인 기간 내내 이 화면을 읽기전용 링크로 받습니다 — 리포트가 곧 ROI 증빙입니다.",
      report_open: "전체 화면으로 열기",
      report_url: "https://nitrotrack.xyz/preview/funk",
      mobile_note: "이 리포트는 PC 화면에 최적화되어 있습니다.<br><b>PC에서 nitromusic.pro</b>를 열면 임베드된 리포트를 직접 만져볼 수 있습니다.",
      mobile_open: "그래도 새 탭에서 열어보기 →"
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
          sub: "13.3M views, ~7.5K monthly streams — the lesson",
          period: "2025.11 — 2026.01",
          posts: "94",
          views: "13.3M",
          highlight: "13.3M views → ~7.5K monthly streams",
          strategy: "자비로 집행한 실험 캠페인. 94포스트로 1,340만 조회를 만들었지만, 스트리밍 전환은 월 7천 수준에 그쳤다. 유기적 신호가 없는 곡은 조회수만으로 터지지 않는다 — 이 실패 데이터가 지금의 앵커 시스템과 곡 선정 기준(2주 킬 크라이테리아)의 출발점이다. 우리는 이 사례를 숨기지 않는다. 조회수를 팔지 않는 이유가 여기 있다.",
          chips: ["Self-funded", "Reach ≠ Conversion", "Origin of Anchor System"],
          metrics: [
            { v: "13.3M", l: "Total views" },
            { v: "266K", l: "Shares" },
            { v: "~7.5K", l: "Monthly streams" }
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
      caption: "단기간 내 <b>23,511,262 뷰</b>를 만든 실전 데이터. 하지만 조회수는 주목을 여는 증거일 뿐 — 돈이 걸리는 지표는 저장·공유·포맷 복제 같은 <b>각인 신호</b>이고, 스트리밍은 그 뒤를 따라옵니다.",
      breakdown: [
        { v: "623,847", l: "TOTAL LIKES" },
        { v: "425,156", l: "TOTAL SHARES" },
        { v: "76,435", l: "TOTAL SAVES" },
        { v: "×6.3", l: "LISTEN CONVERSION" }
      ]
    },
    pilot: {
      eyebrow: "4-WEEK PILOT",
      title: "처음 만나는 팀과는,<br>4주 파일럿으로.",
      sub: "작게 시작해 위닝 포맷을 찾고, 검증된 것만 확장합니다. 2주차 킬 크라이테리아 내장 — 재생·공유·저장 신호가 없으면 저희가 먼저 중단을 제안합니다.",
      steps: [
        { wk: "WEEK 0", t: "준비", d: "스코프 확정, 브리프 작성, 앵커<br>크리에이터 선정." },
        { wk: "WEEK 1", t: "검증", d: "앵커 크리에이터의 레퍼런스 포스트<br>3–5건으로 포맷 가설을 검증합니다." },
        { wk: "WEEK 2", t: "확산", d: "위닝 포맷의 롱테일 확산. 크리에이터 지속 점검, 캠페인 규모 확대, 아웃라이어 영상 생성." },
        { wk: "WEEK 3–4", t: "정착", d: "주간 리포팅, 바이럴 연료 추가 투입." }
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
      sub: "감각만으로도, 구조만으로도 안 됩니다.<br>두 가지를 주간 단위 규율로 묶는 것 —<br>그게 NitroMusic이 메이저 레이블의<br>실행 파트너로 선택된 이유입니다.",
      items: [
        { n: "01 / TASTE", t: "Korea-based trend sensitivity", d: "한국 기반 트렌드 감도와, 글로벌 메이저가 요구하는<br>실행 품질을 동시에 갖췄습니다." },
        { n: "02 / STRUCTURE", t: "Conversion-first design", d: "바닐라 조회수 최적화가 아닌, 듣기 전환까지를 디자인하는 숏폼 설계." },
        { n: "03 / SCALE", t: "Anchor + Long-tail ops", d: "앵커 채널과 롱테일 크리에이터를 포맷 규율 아래 동시 운영합니다." },
        { n: "04 / DISCIPLINE", t: "Weekly reporting rhythm", d: "매주 리포트, 매주 포맷 점검 — 캠페인 전 기간에 걸쳐 규율을 유지합니다." }
      ]
    },
    clients: {
      eyebrow: "TRUSTED BY",
      title: "함께한 고객.",
      logos: [
        { src: "images/logos/frame-779.png", name: "Warner Music Korea" },
        { src: "images/logos/dnation.png", name: "D-Nation Entertainment" },
        { src: "images/logos/cosm.png", name: "Cosm Company" },
        { src: "images/logos/yg-plus.png", name: "YG Plus" },
        { src: "images/logos/route.png", name: "Route Company" },
        { src: "images/logos/whyes.png", name: "Whyes Entertainment" },
        { src: "images/logos/howtoouse.png", name: "How to Use" },
        { src: "images/logos/image-1064.png", name: "Client" },
        { src: "images/logos/image-1066.png", name: "Client" },
        { src: "images/logos/image-1067.png", name: "Client" },
        { src: "images/logos/image-1068.png", name: "Client" },
        { src: "images/logos/image-1069.png", name: "DXD Dance Crew" },
        { src: "images/logos/frame-791.png", name: "VIVIE" }
      ]
    },
    column: {
      eyebrow: "COLUMN",
      title: "Nitro Music 인사이트.",
      sub: "한국 숏폼 마케팅 현장의 관찰, 데이터, 캠페인 노트.",
      filters_label: "AUDIENCE",
      filters: ["전체", "프로모터 담당자", "CEO", "시니어 아티스트", "신예 아티스트", "신입 마케터"],
      top5_title: "Nitro 인기 Top 5",
      top5_sub: "[5월] 가장 많이 읽힌 칼럼",
      top5: [
        { id: "c002", cat: "음원 프로모션 실전편", t: "2026년 랩 음악 홍보 가이드", em: "", views: "4,801", thumb: "#0a0a0b", thumb_bg_img: "column/images/c002-hero.jpg" },
        { id: "c003", cat: "음원 프로모션 실전편", t: "2026년 EDM 음악 홍보 가이드", em: "", views: "4,471", thumb: "#E63946", thumb_bg_img: "column/images/c003-hero.jpg" },
        { id: "c004", cat: "음원 마케팅 기초다지기", t: "뮤지션을 위한 Patreon — 지속가능한 수익을 만드는 6단계", em: "", views: "3,527", thumb: "#3a5bbc", thumb_bg_img: "column/images/c004-hero.jpg" },
        { id: "c005", cat: "음원 프로모션 실전편", t: "2026년 실제로 먹히는 Spotify 플레이리스트 홍보 팁 16가지", em: "", views: "3,092", thumb: "#1a1a1a", thumb_bg_img: "column/images/c005-hero.jpg" },
        { id: "c007", cat: "음원 마케팅 기초다지기", t: "2026년 아티스트를 위한 DAW TOP 10", em: "", views: "2,863", thumb: "#2a0d12", thumb_bg_img: "column/images/c007-hero.jpg" }
      ],
      new_title: "새로 발행된 마케팅 콘텐츠",
      new_more: "전체 보기 →",
      new_cards: [
        { id: "c017", thumb_t: "the real", thumb_em: "cost.", thumb_bg_img: "column/images/c017-hero.jpg", audience: ["ceo", "promoter"], cat: "음원 프로모션 실전편", t: "2026년 Spotify 음원 홍보 비용은? 솔직한 내역", read: "8분 분량", date: "6월 29일, 2026", views: "103" },
        { id: "c021", thumb_t: "clips break", thumb_em: "songs.", thumb_bg_img: "column/images/c021-hero.jpg", audience: ["promoter", "new"], cat: "음원 프로모션 실전편", t: "클립 이코노미 — 클립이 2026년 새 음악을 어떻게 터뜨리는가", read: "6분 분량", date: "6월 19일, 2026", views: "100" },
        { id: "c020", thumb_t: "the", thumb_em: "algorithm.", thumb_bg_img: "column/images/c020-hero.jpg", audience: ["senior", "promoter"], cat: "음원 홍보 콘텐츠 정밀 분석", t: "스파이크 이후 — Spotify 알고리즘이 계속 밀어주는 방법", read: "7분 분량", date: "6월 22일, 2026", views: "89" },
        { id: "c019", thumb_t: "1,000", thumb_em: "true fans.", thumb_bg_img: "column/images/c019-hero.jpg", audience: ["new", "rookie"], cat: "음원 프로모션 실전편", t: "제로에서 1,000명의 진정한 팬까지 — 90일 시스템", read: "6분 분량", date: "6월 24일, 2026", views: "72" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "자주 묻는 질문.",
      sub: "파일럿 이전 단계에서 가장 많이 받는 질문.",
      items: [
        { q: "조회수를 보장해주시나요?", a: "아니요. 조회수는 주목을 여는 증거로만 보여드리고, 돈이 걸리는 KPI로는 쓰지 않습니다. 과금·성과 기준은 각인 신호(저장·공유·포맷 복제)와 스트리밍 지표뿐이며, 조회수 보장·팔로워 단가 딜은 하지 않습니다." },
        { q: "최소 캠페인 단위는 어떻게 되나요?", a: "4주 파일럿이 최소 단위입니다. WEEK 0–4 동안 Prep → Seed → Scale → Consolidate를 1사이클 돌리며 위닝 포맷을 확정합니다." },
        { q: "자체 채널 외에 외부 크리에이터도 운영하나요?", a: "네. 자체 앵커 채널 15+와 함께, 장르/리스너 매치가 맞는 롱테일 크리에이터를 포맷 규율 하에 동시에 운영합니다." },
        { q: "플랫폼은 어디까지 커버되나요?", a: "Instagram Reels, TikTok, YouTube Shorts 전체. 스트리밍 연결은 Spotify / Apple Music / YouTube Music을 우선합니다." },
        { q: "리포팅 주기는 어떻게 되나요?", a: "매주 1회 원페이지 요약 리포트 + 에셋 라이브러리 + 데이터 부록을 전달하고, Sound Tracker 라이브 대시보드(읽기전용 링크)는 캠페인 기간 내내 언제든 직접 열어보실 수 있습니다." },
        { q: "글로벌 메이저 레이블 건도 가능한가요?", a: "Warner Music Korea 캠페인 등 글로벌 메이저 실행 경험이 있습니다. 아티스트별 비주얼 로컬라이즈와 포맷 재설계를 전담합니다." },
        { q: "기존 대행사와 중복 운영이 가능한가요?", a: "가능합니다. 기존 디지털/ATL 대행사와 RACI를 명확히 나누어 숏폼 단위만 우리가 전담하는 구조가 가장 일반적입니다." }
      ]
    },
    contact: {
      eyebrow: "LET'S TALK",
      title_1: "다음 앵커 포스트를,",
      title_em: "함께 설계하시죠.",
      sub: "곡 링크만 간단히 보내주시면,<br>영업일 기준 2일 내에 <b>바이럴 진단 리포트</b>와 레퍼런스를 회신드립니다.<br>분기당 진행 슬롯은 제한되어 있습니다.",
      channels: [
        { k: "EMAIL", v: "nitro@nitromusic.pro" },
        { k: "INSTAGRAM", v: "@audio_room_" },
        { k: "TELEGRAM", v: "@NitroMusic" }
      ],
      form: {
        head: "바이럴 진단 신청",
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
        notice: "※ 미발매 곡일 경우, 음성 파일은 <b>nitro@nitromusic.pro</b> 로 별도 전송 부탁드립니다.",
        submit: "진단 신청하기",
        privacy: "개인정보 수집·이용 동의"
      }
    },
    footer: {
      tag: "Signature short-form systems for labels, distributors, and artist teams.",
      col1: { h: "서비스", items: ["Format Engineering", "Anchor + Long-tail Ops", "Deep-link Conversion", "Weekly Reporting"] },
      col2: { h: "회사", items: ["About", "Team", "Careers", "Press Kit"] },
      col3: { h: "리소스", items: ["Column", "Case Studies", "Corporate Deck", "Media"] },
      address: "서울특별시 마포구 양화로 120",
      owner: "대표자 : 최보건 Logan Choi  |  사업자등록번호 : 623-16-01889",
      copyright: "Copyright © 2022 KBK Consulting. All rights reserved."
    }
  },
  en: {
    nav: { live: "Live demo", network: "Network", cases: "Campaigns", pilot: "Pilot", column: "Column", faq: "FAQ", contact: "Contact" },
    hero: {
      v1_kicker: "NITRO MUSIC × KBK CONSULTING",
      v1_title_line1: "We don't sell views.",
      v1_title_line2: "We make songs stick.",
      v1_sub: "We turn short-form virality into fan imprinting and verified streaming growth.<br>Short-form systems for labels, distributors, and artist teams.",
      v1_cta_primary: "Get your track analyzed",
      v1_cta_secondary: "See campaign results",
      v2_kicker: "SHORT-FORM MUSIC MARKETING",
      v2_title_line1: "Views are up.",
      v2_title_line2: "Streams aren't.",
      v2_sub: "That gap is what we close. Anchor production + long-tail creator ops — NitroMusic designs not just plays, but the act of listening.",
      v2_cta_primary: "Get a viral diagnostic report",
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
      status_live: "LIVE · Q3 2026 slots open",
      date_tag: "SEOUL / 26.07"
    },
    ticker: [
      "WARNER MUSIC KOREA", "NOEN — HOLD ME", "RGB / COSM COMPANY", "PAUL KIM — WANNA LOVE YOU",
      "PURPLE PEPPER AGENCY", "DAEHAK NAEIL", "INDEPENDENT ARTIST TEAMS"
    ],
    live: {
      eyebrow: "WHAT WE DO / LIVE",
      title: "75 seconds is<br>all we need.",
      sub: "What we do, and why we don't sell views —<br>it's faster to just show you.",
      video_fallback_k: "FILM — IN PRODUCTION",
      video_fallback_t: "We don't sell views.<br>We make songs stick.",
      report_eyebrow: "SOUND TRACKER — LIVE REPORT",
      report_title: "Explore a real tracking report.",
      report_sub: "FUNK TAKA — reels and TikTok spread aligned with streaming growth on one timeline. Every clip collected daily, deleted videos preserved. Clients get this exact screen as a read-only link for the entire campaign — the report is the ROI proof.",
      report_open: "Open full screen",
      report_url: "https://nitrotrack.xyz/preview/funk?lang=en",
      mobile_note: "This report is built for desktop screens.<br>Open <b>nitromusic.pro on a PC</b> to explore the embedded report hands-on.",
      mobile_open: "Open in a new tab anyway →"
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
        { no: "C-002", client: "Noen — Hold me", sub: "13.3M views, ~7.5K monthly streams — the lesson", period: "Nov 2025 — Jan 2026", posts: "94", views: "13.3M", highlight: "13.3M views → ~7.5K monthly streams",
          strategy: "A self-funded experiment. 94 posts generated 13.3M views — yet streaming stalled around 7.5K a month. A track with zero organic signal doesn't break on reach alone. This failure dataset became the origin of our anchor system and our song-selection kill criteria. We don't hide this case: it's exactly why we don't sell views.",
          chips: ["Self-funded", "Reach ≠ Conversion", "Origin of Anchor System"],
          metrics: [{ v: "13.3M", l: "Total views" }, { v: "266K", l: "Shares" }, { v: "~7.5K", l: "Monthly streams" }]
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
      caption: "<b>23,511,262 views</b> generated in six months — but views only open attention. Money rides on <b>imprint signals</b>: saves, shares, format replications. Streaming follows.",
      breakdown: [
        { v: "623,847", l: "TOTAL LIKES" },
        { v: "425,156", l: "TOTAL SHARES" },
        { v: "76,435", l: "TOTAL SAVES" },
        { v: "×6.3", l: "LISTEN CONVERSION" }
      ]
    },
    pilot: {
      eyebrow: "4-WEEK PILOT",
      title: "New team?<br>We start with a 4-week pilot.",
      sub: "Start small, find the winning format, scale only what converts. Kill criteria built into week 2 — if play, share, and save signals aren't there, we're the first to call a stop.",
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
        { src: "images/logos/frame-779.png", name: "Warner Music Korea" },
        { src: "images/logos/dnation.png", name: "D-Nation Entertainment" },
        { src: "images/logos/cosm.png", name: "Cosm Company" },
        { src: "images/logos/yg-plus.png", name: "YG Plus" },
        { src: "images/logos/route.png", name: "Route Company" },
        { src: "images/logos/whyes.png", name: "Whyes Entertainment" },
        { src: "images/logos/howtoouse.png", name: "How to Use" },
        { src: "images/logos/image-1064.png", name: "Client" },
        { src: "images/logos/image-1066.png", name: "Client" },
        { src: "images/logos/image-1067.png", name: "Client" },
        { src: "images/logos/image-1068.png", name: "Client" },
        { src: "images/logos/image-1069.png", name: "DXD Dance Crew" },
        { src: "images/logos/frame-791.png", name: "VIVIE" }
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
        { id: "c002", cat: "Promotion playbook", t: "How to Promote Rap Music in 2026", em: "", views: "4,801", thumb: "#0a0a0b", thumb_bg_img: "column/images/c002-hero.jpg" },
        { id: "c003", cat: "Promotion playbook", t: "How to Promote EDM Music in 2026", em: "", views: "4,471", thumb: "#E63946", thumb_bg_img: "column/images/c003-hero.jpg" },
        { id: "c004", cat: "Music marketing basics", t: "Patreon for Musicians: 6 Steps to a Sustainable Income", em: "", views: "3,527", thumb: "#3a5bbc", thumb_bg_img: "column/images/c004-hero.jpg" },
        { id: "c005", cat: "Promotion playbook", t: "16 Spotify Playlist Promotion Tips That Actually Work in 2026", em: "", views: "3,092", thumb: "#1a1a1a", thumb_bg_img: "column/images/c005-hero.jpg" },
        { id: "c007", cat: "Music marketing basics", t: "10 Best DAWs for Artists in 2026", em: "", views: "2,863", thumb: "#2a0d12", thumb_bg_img: "column/images/c007-hero.jpg" }
      ],
      new_title: "Newly published",
      new_more: "See all →",
      new_cards: [
        { id: "c017", thumb_t: "the real", thumb_em: "cost.", thumb_bg_img: "column/images/c017-hero.jpg", audience: ["ceo", "promoter"], cat: "Promotion playbook", t: "How Much Does Spotify Promotion Cost in 2026? An Honest Breakdown", read: "8 min read", date: "Jun 29, 2026", views: "103" },
        { id: "c021", thumb_t: "clips break", thumb_em: "songs.", thumb_bg_img: "column/images/c021-hero.jpg", audience: ["promoter", "new"], cat: "Promotion playbook", t: "The Clip Economy — How Clips Break New Music in 2026", read: "6 min read", date: "Jun 19, 2026", views: "100" },
        { id: "c020", thumb_t: "the", thumb_em: "algorithm.", thumb_bg_img: "column/images/c020-hero.jpg", audience: ["senior", "promoter"], cat: "Content teardown", t: "After the Spike — How Spotify’s Algorithm Keeps Pushing You", read: "7 min read", date: "Jun 22, 2026", views: "89" },
        { id: "c019", thumb_t: "1,000", thumb_em: "true fans.", thumb_bg_img: "column/images/c019-hero.jpg", audience: ["new", "rookie"], cat: "Promotion playbook", t: "From Zero to 1,000 True Fans — A 90-Day System", read: "6 min read", date: "Jun 24, 2026", views: "72" }
      ]

    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked.",
      sub: "The questions we hear most before a pilot.",
      items: [
        { q: "Do you guarantee views?", a: "No. We'll show views as proof of attention, but never bill against them. Money only rides on imprint signals (saves, shares, format replications) and streaming metrics — no view guarantees, no follower-rate deals." },
        { q: "What's the minimum campaign unit?", a: "A 4-week pilot is the minimum. Across Week 0–4, we run one full Prep → Seed → Scale → Consolidate loop to lock the winning format." },
        { q: "Do you run external creators beyond owned channels?", a: "Yes. Our 15+ anchor channels run alongside genre- and listener-matched long-tail creators — all under shared format rules." },
        { q: "Which platforms do you cover?", a: "Instagram Reels, TikTok, and YouTube Shorts in full. Streaming destinations: Spotify, Apple Music, YouTube Music as the priority stack." },
        { q: "What's the reporting cadence?", a: "Weekly — one-page summary, asset library, and data appendix. Plus a read-only Sound Tracker live dashboard you can open anytime, for the entire campaign." },
        { q: "Do you work with global major labels?", a: "Yes — Warner Music Korea among others. We handle artist-level visual localization and per-campaign format redesign." },
        { q: "Can you run alongside an existing agency?", a: "Absolutely. A clean RACI split with existing digital/ATL agencies — NitroMusic owning the short-form layer — is the most common setup." }
      ]
    },
    contact: {
      eyebrow: "LET'S TALK",
      title_1: "Let's design",
      title_em: "your next anchor post.",
      sub: "Send us your track link and we'll return<br>a <b>viral diagnostic report</b> plus references within 2 business days.<br>Slots per quarter are limited.",
      channels: [
        { k: "EMAIL", v: "nitro@nitromusic.pro" },
        { k: "INSTAGRAM", v: "@audio_room_" },
        { k: "TELEGRAM", v: "@NitroMusic" }
      ],
      form: {
        head: "Viral diagnostic request",
        seq: "FORM / 01",
        f_name: "Your name",
        f_company: "Company / Label",
        f_role: "Role",
        f_email: "Email",
        f_artist: "Artist / Track",
        f_goal: "Campaign goal",
        f_budget: "Budget range",
        f_budget_opts: ["< $10K", "$10K – $25K", "$25K – $40K", "$40K+"],
        f_vertical: "Anchor vertical",
        f_vertical_opts: ["Concert", "VS", "Meme", "Choreo", "Behind"],
        f_msg: "Notes / timeline",
        notice: "※ For unreleased tracks, please email the audio file to <b>nitro@nitromusic.pro</b> separately.",
        submit: "Request diagnostic",
        privacy: "I agree to the privacy policy"
      }
    },
    footer: {
      tag: "Signature short-form systems for labels, distributors, and artist teams.",
      col1: { h: "Services", items: ["Format Engineering", "Anchor + Long-tail Ops", "Deep-link Conversion", "Weekly Reporting"] },
      col2: { h: "Company", items: ["About", "Team", "Careers", "Press Kit"] },
      col3: { h: "Resources", items: ["Column", "Case Studies", "Corporate Deck", "Media"] },
      address: "120 Yanghwa-ro, Mapo-gu, Seoul, Republic of Korea",
      owner: "Representative : Logan Choi (최보건)  |  Business No. : 623-16-01889",
      copyright: "Copyright © 2022 KBK Consulting. All rights reserved."
    }
  }
};
