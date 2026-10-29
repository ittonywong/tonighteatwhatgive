/* 今晚食乜餸 — header/footer + language select (members-shop pattern) */
(function () {
  var KEY_LANG = "recipe.lang";
  var LANGS = ["en", "zh-Hant", "zh-Hans", "ja", "mi", "ko"];
  var L = window.I18N || {};

  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k);
      else localStorage.setItem(k, v);
    } catch (e) { return null; }
  }

  var lang = store(KEY_LANG);
  if (LANGS.indexOf(lang) < 0) lang = "zh-Hant";

  function t(k) {
    return (L[lang] && L[lang][k]) || (L.en && L.en[k]) || k;
  }

  function isZh() {
    return String(lang).indexOf("zh") === 0;
  }

  function header() {
    return '<header class="site-header"><div class="header-inner">' +
      '<a class="logo" href="index.html"><span class="logo-mark" aria-hidden="true">🍳</span>' +
      '<span data-i18n="appName">' + t("appName") + '</span></a>' +
      '<nav class="nav" aria-label="main">' +
      '<a href="index.html" data-i18n="navHome">' + t("navHome") + '</a>' +
      '<a href="week.html" data-i18n="navWeek">' + t("navWeek") + '</a>' +
      '<a href="hk.html" data-i18n="navHk">' + t("navHk") + '</a>' +
      '<a href="nz.html" data-i18n="navNz">' + t("navNz") + '</a>' +
      '<a href="about.html" data-i18n="navAbout">' + t("navAbout") + '</a>' +
      '</nav>' +
      '<div class="langw"><label class="sr" for="lang" data-i18n="langLabel">' + t("langLabel") + '</label>' +
      '<select id="lang" aria-label="' + t("langLabel") + '">' +
      '<option value="en" lang="en">English</option>' +
      '<option value="zh-Hant" lang="zh-Hant">繁體中文</option>' +
      '<option value="zh-Hans" lang="zh-Hans">简体中文</option>' +
      '<option value="ja" lang="ja">日本語</option>' +
      '<option value="mi" lang="mi">Te reo Māori</option>' +
      '<option value="ko" lang="ko">한국어</option>' +
      '</select></div>' +
      '</div></header>';
  }

  function footer() {
    return '<footer class="site-footer">' +
      '<p><span data-i18n="footerTag">' + t("footerTag") + '</span> · <strong data-i18n="footerDraft">' + t("footerDraft") + '</strong></p>' +
      '<p data-i18n="footerStores">' + t("footerStores") + '</p>' +
      '<p><span data-i18n="footerNoDeploy">' + t("footerNoDeploy") + '</span><a href="about.html" data-i18n="footerAboutLink">' + t("footerAboutLink") + '</a></p>' +
      '</footer>';
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    var sel = document.getElementById("lang");
    if (sel) sel.value = lang;
    document.title = document.title.replace(/太太菜譜站|今晚食乜餸|Tonight Eat What Give/g, t("appName"));
    if (window.RecipeApp && typeof window.RecipeApp.onLangChange === "function") {
      window.RecipeApp.onLangChange(lang, t, isZh());
    }
  }

  function setActiveNav() {
    var page = (location.pathname.split("/").pop() || "index.html") || "index.html";
    document.querySelectorAll(".nav a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
    });
  }

  var mountH = document.getElementById("site-header");
  var mountF = document.getElementById("site-footer");
  if (mountH) mountH.outerHTML = header();
  if (mountF) mountF.outerHTML = footer();
  applyI18n();
  setActiveNav();

  var sel = document.getElementById("lang");
  if (sel) {
    sel.addEventListener("change", function () {
      lang = sel.value;
      store(KEY_LANG, lang);
      applyI18n();
      setActiveNav();
    });
  }

  window.RecipeI18n = { t: t, lang: function () { return lang; }, isZh: isZh, applyI18n: applyI18n };
})();
