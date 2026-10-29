(function () {
  "use strict";
  var T = {
    zh: { title: "我的網站", sub: "撳圖示就可以去個網站", foot: "加網站：改 sites.js", btn: "EN", aria: "Switch to English", html: "zh-HK" },
    en: { title: "My Sites", sub: "Tap an icon to open the site", foot: "To add a site, edit sites.js", btn: "繁", aria: "切換至繁體中文", html: "en" }
  };
  var KEY = "home.lang";
  var lang = "zh";
  try { if (localStorage.getItem(KEY) === "en") lang = "en"; } catch (e) {}

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function render() {
    var t = T[lang];
    document.documentElement.lang = t.html;
    document.getElementById("title").textContent = t.title;
    document.getElementById("sub").textContent = t.sub;
    document.getElementById("foot").textContent = t.foot;
    document.title = lang === "zh" ? "我的網站 · My Sites" : "My Sites · 我的網站";
    var b = document.getElementById("langBtn");
    b.textContent = t.btn;
    b.setAttribute("aria-label", t.aria);

    var html = (window.SITES || []).map(function (s) {
      var main = lang === "zh" ? s.zh : s.en;
      var second = lang === "zh" ? s.en : s.zh;
      var icon = (window.ICONS || {})[s.icon] || window.ICONS.globe;
      return '<li><a class="tile" href="' + esc(s.url) + '" aria-label="' + esc(main + " – " + second) + '">' +
        '<span class="ico" style="background:' + esc(s.color || "#0b3c5d") + '">' +
        '<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">' + icon + '</svg>' +
        (s.tag ? '<span class="tag">' + esc(s.tag) + '</span>' : "") +
        '</span><span class="names"><span class="n1">' + esc(main) + '</span>' +
        '<span class="n2">' + esc(second) + '</span></span></a></li>';
    }).join("");
    document.getElementById("grid").innerHTML = html;
    moved();
  }

  /* 九巴已搬到 /kmb/：只俾以前用過舊九巴頁（有 kmb 設定）而未開過新版嘅人睇 */
  function moved() {
    var el = document.getElementById("moved"), show = false;
    try {
      var old = localStorage.getItem("kmbFavs") || localStorage.getItem("kmbLang") || localStorage.getItem("kmb284names");
      show = !!old && !localStorage.getItem("kmb.v2seen") && !localStorage.getItem("home.kmbMovedClosed");
    } catch (e) {}
    if (!el) return;
    if (!show) { el.hidden = true; return; }
    var t = lang === "zh"
      ? { m: "九巴到站已搬到新網址：", c: "（收藏會保留）", x: "關閉" }
      : { m: "KMB arrivals have moved to: ", c: " (your favourites are kept)", x: "Close" };
    el.innerHTML = esc(t.m) + '<a href="https://ittonywong.github.io/kmb/">ittonywong.github.io/kmb/</a>' + esc(t.c) +
      '<button type="button" id="movedX" aria-label="' + esc(t.x) + '">✕</button>';
    el.hidden = false;
    document.getElementById("movedX").onclick = function () {
      try { localStorage.setItem("home.kmbMovedClosed", "1"); } catch (e) {}
      el.hidden = true;
    };
  }

  document.getElementById("langBtn").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    render();
  });
  render();
})();
