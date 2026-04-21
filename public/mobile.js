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

})();
