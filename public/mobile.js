// ============================================================
// NITRO MUSIC — mobile.js
// 햄버거 메뉴 토글 + 모바일 전용 인터랙션
// ============================================================

(function () {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  if (!hamburger || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', '메뉴 닫기');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', '메뉴 열기');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  }

  hamburger.addEventListener('click', toggleMenu);

  // 메뉴 내 링크 탭 시 닫기
  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });

  // ESC 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });

  // 뷰포트가 데스크탑(768+)으로 커지면 강제로 닫기
  const mq = window.matchMedia('(min-width: 768px)');
  const handleResize = (e) => {
    if (e.matches) closeMenu();
  };
  if (mq.addEventListener) mq.addEventListener('change', handleResize);
  else mq.addListener(handleResize);

  // 모바일(≤767): 칼럼 섹션 순서 조정
  // 데스크탑: [필터] [Top5 + 새로발행] (col-layout 2열)
  // 모바일:   [Top5] [새로발행(2개)] [필터]  ← 필터를 col-layout 맨 끝으로
  function placeColumnFilters() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const filters = document.getElementById('col-filters');
    const colSection = document.getElementById('column');
    const colLayout = document.querySelector('.col-layout');
    const colNew = document.querySelector('.col-new');
    if (!filters || !colSection || !colLayout) return;

    if (isMobile) {
      // col-layout의 마지막 자식으로 이동 (= col-new 뒤)
      if (filters.parentElement !== colLayout) {
        colLayout.appendChild(filters);
      }
    } else {
      // 데스크탑 원위치: col-layout 직전 (section 자식)
      if (filters.parentElement !== colSection) {
        colSection.insertBefore(filters, colLayout);
      }
    }
  }

  // 모바일(≤767): Contact 섹션에서 form을 channels 바로 앞으로 이동
  // 모바일 요구 순서: eyebrow → title → sub → FORM → channels
  function placeContactForm() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const contactInner = document.querySelector('.contact-inner');
    const contactLeft = document.querySelector('.contact-left');
    const contactForm = document.querySelector('.contact-form');
    const channels = document.getElementById('co-channels');
    if (!contactInner || !contactLeft || !contactForm || !channels) return;

    if (isMobile) {
      // form을 co-channels 바로 앞에 (contact-left 내부로 이동)
      if (contactForm.parentElement !== contactLeft || contactForm.nextElementSibling !== channels) {
        contactLeft.insertBefore(contactForm, channels);
      }
    } else {
      // 원위치: contact-inner의 자식으로 되돌림 (contact-left 뒤 = 오른쪽 컬럼)
      if (contactForm.parentElement !== contactInner) {
        contactInner.appendChild(contactForm);
      }
    }
  }

  // 콘텐츠 렌더(i18n) 완료 대기
  function runWhenReady() {
    if (document.getElementById('col-filters') && document.querySelector('.col-new')) {
      placeColumnFilters();
      placeContactForm();
    } else {
      setTimeout(runWhenReady, 50);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady);
  } else {
    runWhenReady();
  }
  window.addEventListener('resize', () => {
    placeColumnFilters();
    placeContactForm();
  });
})();
