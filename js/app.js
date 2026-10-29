/* 今晚食乜餸 — shared helpers + i18n-aware cards */
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

  function t(k) {
    return (window.RecipeI18n && RecipeI18n.t(k)) || k;
  }
  function isZh() {
    return window.RecipeI18n ? RecipeI18n.isZh() : true;
  }

  function recipeName(r) {
    if (isZh()) return r.name_zh || r.name_en || r.id;
    return r.name_en || r.name_zh || r.id;
  }
  function recipeSub(r) {
    if (isZh()) return r.name_en || "";
    return r.name_zh || "";
  }
  function recipeIntro(r) {
    if (isZh()) return r.intro || r.intro_en || "";
    return r.intro_en || r.intro || "";
  }
  function recipeSteps(r) {
    if (!isZh() && r.steps_en && r.steps_en.length) return r.steps_en;
    return r.steps || [];
  }
  function ingName(i) {
    if (isZh()) return i.name || i.name_en || "";
    return i.name_en || i.name || "";
  }

  function recipeCard(r) {
    const tags = (r.tags || []).slice(0, 3).map((tg) => `<span class="tag">${escapeHtml(tg)}</span>`).join("");
    return `<article class="card" data-category="${escapeHtml(r.category || "")}" data-section="${escapeHtml(r.section)}">
      <a class="cover-link" href="recipe.html?id=${encodeURIComponent(r.id)}">
        <div class="card-visual"><img src="${iconPath(r.hero_icon)}" alt="" width="72" height="72"></div>
        <div class="card-body">
          <h3>${escapeHtml(recipeName(r))}</h3>
          <div class="en">${escapeHtml(recipeSub(r))}</div>
          <div class="card-meta">${escapeHtml(r.category || "")} · ${escapeHtml(r.time_cook || "")}</div>
          <div class="card-tags">${tags}<span class="tag">${escapeHtml(t("draftTag"))}</span></div>
        </div>
      </a>
    </article>`;
  }

  async function loadJSON(path) {
    const url = new URL(path, document.baseURI).href;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Load failed: " + url);
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

  function stepVisual(idx) {
    const n = idx + 1;
    return `<div class="step-visual" aria-hidden="true"><svg viewBox="0 0 64 64" width="56" height="56"><rect x="4" y="4" width="56" height="56" rx="14" fill="#f3ebe0"/><text x="32" y="40" text-anchor="middle" font-size="24" font-weight="700" fill="#c45c26" font-family="sans-serif">${n}</text></svg></div>`;
  }

  window.RecipeApp = {
    renderStores,
    escapeHtml,
    iconPath,
    recipeCard,
    recipeName,
    recipeSub,
    recipeIntro,
    recipeSteps,
    ingName,
    stepVisual,
    loadJSON,
    qs,
    setActiveNav,
    t,
    isZh,
    onLangChange: null,
  };
})();
