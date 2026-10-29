(function () {
  function header() {
    return `<header class="site-header"><div class="header-inner">
      <a class="logo" href="index.html"><span class="logo-mark">🍳</span><span>太太菜譜站</span></a>
      <nav class="nav" aria-label="主選單">
        <a href="index.html">首頁</a>
        <a href="week.html">每日推介</a>
        <a href="hk.html">港式主庫</a>
        <a href="nz.html">NZ 西餐</a>
        <a href="about.html">說明</a>
      </nav>
    </div></header>`;
  }
  function footer() {
    return `<footer class="site-footer">
      <p>太太菜譜站 · 初形預覽 · <strong>草稿・未驗證・未試煮</strong></p>
      <p>材料超市標註：CD＝Countdown　NW＝New World　PnS＝Pak'nSave　＋ Costco　＋ Asian／太平</p>
      <p>未公開部署 · 總經理自行上 GitHub 檢查 · <a href="about.html">免責與擴充說明</a></p>
    </footer>`;
  }
  const mountH = document.getElementById("site-header");
  const mountF = document.getElementById("site-footer");
  if (mountH) mountH.outerHTML = header();
  if (mountF) mountF.outerHTML = footer();
  if (window.RecipeApp) RecipeApp.setActiveNav();
})();
