/* =========================================================
   Nitro Insights — i18n (KR/EN runtime toggle)
   No reload · localStorage-persisted · CustomEvent-driven
   ========================================================= */
(function () {
  var STORAGE_KEY = "nitro-lang";
  var DEFAULT_LANG = "en";
  var SUPPORTED = ["ko", "en"];

  var initial = localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.indexOf(initial) === -1) initial = DEFAULT_LANG;
  window.NITRO_LANG = initial;

  /**
   * Pick the language-appropriate field from a data object.
   * Falls back to the Korean field if the English one is missing.
   */
  function t(obj, field) {
    if (!obj) return "";
    if (window.NITRO_LANG === "en") {
      var enVal = obj[field + "_en"];
      if (enVal !== undefined && enVal !== null && enVal !== "") return enVal;
    }
    return obj[field] != null ? obj[field] : "";
  }

  /**
   * Swap every [data-kr][data-en] node to the current language.
   * Use textContent by default; attribute opt-in via data-i18n-attr="placeholder".
   */
  function applyI18n(root) {
    var scope = root || document;
    var lang = window.NITRO_LANG;
    var nodes = scope.querySelectorAll("[data-kr][data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var value = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-kr");
      if (value == null) continue;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    }
    document.documentElement.setAttribute("lang", lang);
    syncToggleUI();
  }

  function syncToggleUI() {
    var lang = window.NITRO_LANG;
    var toggles = document.querySelectorAll(".lang-toggle button, .lang button");
    for (var i = 0; i < toggles.length; i++) {
      var btn = toggles[i];
      var btnLang = btn.getAttribute("data-lang") || (btn.textContent.trim().toLowerCase() === "en" ? "en" : "ko");
      var active = btnLang === lang;
      btn.classList.toggle("on", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    }
  }

  function setLang(nextLang) {
    if (SUPPORTED.indexOf(nextLang) === -1) return;
    if (nextLang === window.NITRO_LANG) return;
    window.NITRO_LANG = nextLang;
    try { localStorage.setItem(STORAGE_KEY, nextLang); } catch (_) { /* sandbox/private-mode */ }
    applyI18n();
    document.dispatchEvent(new CustomEvent("nitro-lang-change", { detail: { lang: nextLang } }));
  }

  function initToggle() {
    var toggles = document.querySelectorAll(".lang-toggle button, .lang button");
    for (var i = 0; i < toggles.length; i++) {
      var btn = toggles[i];
      if (!btn.hasAttribute("data-lang")) {
        btn.setAttribute("data-lang", btn.textContent.trim().toLowerCase() === "en" ? "en" : "ko");
      }
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        setLang(this.getAttribute("data-lang"));
      });
    }
  }

  // Public API
  window.NITRO_I18N = {
    t: t,
    applyI18n: applyI18n,
    setLang: setLang,
    get lang() { return window.NITRO_LANG; }
  };

  // Init on DOM ready
  function boot() {
    document.documentElement.setAttribute("lang", window.NITRO_LANG);
    initToggle();
    applyI18n();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
