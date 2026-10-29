/* 太太菜譜站 preview — shared helpers */
(function () {
  const STORE_CLASS = {
    CD: "cd", Countdown: "cd",
    NW: "nw", "New World": "nw",
    PnS: "pns", "Pak'nSave": "pns",
    Costco: "costco",
    Asian: "asian", "太平": "asian",
    "各大超市": "",
  };

  function storeClass(s) {
    if (STORE_CLASS[s] !== undefined) return STORE_CLASS[s];
    if (/Costco/i.test(s)) return "costco";
    if (/Asian|太平/.test(s)) return "asian";
    if (/CD|Countdown/.test(s)) return "cd";
    if (/NW|New World/.test(s)) return "nw";
    if (/PnS|Pak/.test(s)) return "pns";
    return "";
  }

  function renderStores(stores, costcoNote) {
    const bits = (stores || []).map((s) => {
      const cls = storeClass(s);
      return `<span class="store ${cls}">${escapeHtml(s)}</span>`;
    });
    let html = bits.join("");
    if (costcoNote) {
      const major = /【主要 Costco】/.test(costcoNote);
      html += ` <span class="store ${major ? "major" : "costco"}">${escapeHtml(costcoNote)}</span>`;
    }
    return html;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function iconPath(name) {
    const safe = name || "default";
    return `assets/icons/${safe}.svg`;
  }

  function recipeCard(r) {
    const tags = (r.tags || []).slice(0, 3).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    return `<article class="card" data-category="${escapeHtml(r.category || "")}" data-section="${escapeHtml(r.section)}">
      <a class="cover-link" href="recipe.html?id=${encodeURIComponent(r.id)}">
        <div class="card-visual"><img src="${iconPath(r.hero_icon)}" alt="" width="72" height="72"></div>
        <div class="card-body">
          <h3>${escapeHtml(r.name_zh)}</h3>
          <div class="en">${escapeHtml(r.name_en || "")}</div>
          <div class="card-meta">${escapeHtml(r.category || "")} · ${escapeHtml(r.time_cook || "")}</div>
          <div class="card-tags">${tags}<span class="tag">草稿</span></div>
        </div>
      </a>
    </article>`;
  }

  async function loadJSON(path) {
    const url = new URL(path, document.baseURI).href;
    const res = await fetch(url);
    if (!res.ok) throw new Error("載入失敗：" + url);
    return res.json();
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function setActiveNav() {
    const page = (location.pathname.split("/").pop() || "index.html") || "index.html";
    document.querySelectorAll(".nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === page || (page === "" && href === "index.html")) a.classList.add("active");
    });
  }

  window.RecipeApp = {
    renderStores,
    escapeHtml,
    iconPath,
    recipeCard,
    loadJSON,
    qs,
    setActiveNav,
  };
})();
