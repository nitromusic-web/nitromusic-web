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

  // 모바일(≤767): 칼럼 섹션의 필터 탭을 Top5 바로 밑으로 이동
  function placeColumnFilters() {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const filters = document.getElementById('col-filters');
    const top5 = document.querySelector('.col-top5');
    const colSection = document.getElementById('column');
    const colLayout = document.querySelector('.col-layout');
    if (!filters || !top5 || !colSection || !colLayout) return;

    if (isMobile) {
      // Top5 뒤 (= col-new 앞)에 삽입
      const colNew = document.querySelector('.col-new');
      if (colNew && filters.nextElementSibling !== colNew.previousElementSibling) {
        colLayout.insertBefore(filters, colNew);
      }
    } else {
      // 데스크탑 원위치: col-layout 직전
      if (filters.parentElement !== colSection) {
        colSection.insertBefore(filters, colLayout);
      }
    }
  }

  // 초기 실행은 콘텐츠 렌더 이후 필요. app.js가 renderAll 완료한 뒤 실행되도록
  // 약간 지연시키고, 리사이즈에도 반응.
  function runWhenReady() {
    if (document.getElementById('col-filters') && document.querySelector('.col-top5')) {
      placeColumnFilters();
    } else {
      setTimeout(runWhenReady, 50);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runWhenReady);
  } else {
    runWhenReady();
  }
  window.addEventListener('resize', placeColumnFilters);
})();
