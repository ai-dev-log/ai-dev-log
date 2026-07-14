(function () {
  "use strict";

  const TAG_ORDER = [
    "Claude Code",
    "Claude Desktop",
    "Claude in Chrome",
    "Subagent",
    "MCP/Plugin",
    "Skill",
    "コードレビュー",
    "コンテンツ制作",
  ];

  const data = ENTRIES.map((e) => {
    const m = e.file.match(/^(\d{4}-\d{2}-\d{2})_(\d{2})(\d{2})(\d{2})\.png$/);
    return {
      ...e,
      date: m[1],
      time: `${m[2]}:${m[3]}`,
      sortKey: `${m[1]}${m[2]}${m[3]}${m[4]}`,
    };
  }).sort((a, b) => (a.sortKey < b.sortKey ? -1 : 1));

  const state = {
    view: "timeline",
    activeTags: new Set(),
  };

  const els = {
    stats: document.getElementById("stats"),
    filters: document.getElementById("filters"),
    output: document.getElementById("galleryOutput"),
    empty: document.getElementById("emptyState"),
    viewBtns: document.querySelectorAll(".view-btn"),
    navViewLinks: document.querySelectorAll("[data-view-link]"),
    lightbox: document.getElementById("lightbox"),
    lbImage: document.getElementById("lbImage"),
    lbTitle: document.getElementById("lbTitle"),
    lbCaption: document.getElementById("lbCaption"),
    lbDate: document.getElementById("lbDate"),
    lbTags: document.getElementById("lbTags"),
    lbClose: document.getElementById("lbClose"),
    lbPrev: document.getElementById("lbPrev"),
    lbNext: document.getElementById("lbNext"),
  };

  let visibleOrder = []; // flat list of files in current render order, for lightbox prev/next
  let lightboxIndex = -1;

  function renderStats() {
    const dates = [...new Set(data.map((d) => d.date))].sort();
    const tagCount = new Set(data.flatMap((d) => d.tags)).size;
    const range =
      dates.length > 1
        ? `${dates[0].slice(5).replace("-", "/")} – ${dates[dates.length - 1].slice(5).replace("-", "/")}`
        : dates[0];

    const tiles = [
      { n: data.length, l: "記録スクリーンショット" },
      { n: dates.length, l: "検証した日" },
      { n: tagCount, l: "検証カテゴリ" },
      { n: range, l: "期間（2026年）" },
    ];

    els.stats.innerHTML = tiles
      .map((t) => `<div class="stat"><div class="n">${t.n}</div><div class="l">${t.l}</div></div>`)
      .join("");
  }

  function tagCounts() {
    const counts = {};
    for (const tag of TAG_ORDER) counts[tag] = 0;
    for (const d of data) for (const t of d.tags) counts[t] = (counts[t] || 0) + 1;
    return counts;
  }

  function renderFilters() {
    const counts = tagCounts();
    const allChip = `<button type="button" class="chip is-active" data-tag="__all__">すべて<span class="count">${data.length}</span></button>`;
    const tagChips = TAG_ORDER.filter((t) => counts[t] > 0)
      .map(
        (t) =>
          `<button type="button" class="chip" data-tag="${escapeHtml(t)}">${escapeHtml(t)}<span class="count">${counts[t]}</span></button>`
      )
      .join("");
    els.filters.innerHTML = allChip + tagChips;

    els.filters.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".chip");
      if (!btn) return;
      const tag = btn.dataset.tag;
      if (tag === "__all__") {
        state.activeTags.clear();
      } else {
        if (state.activeTags.has(tag)) state.activeTags.delete(tag);
        else state.activeTags.add(tag);
      }
      syncFilterChips();
      render();
    });
  }

  function syncFilterChips() {
    const chips = els.filters.querySelectorAll(".chip");
    chips.forEach((chip) => {
      const isAll = chip.dataset.tag === "__all__";
      const active = isAll ? state.activeTags.size === 0 : state.activeTags.has(chip.dataset.tag);
      chip.classList.toggle("is-active", active);
    });
  }

  function filteredData() {
    if (state.activeTags.size === 0) return data;
    return data.filter((d) => d.tags.some((t) => state.activeTags.has(t)));
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function cardHtml(d) {
    return `
      <button type="button" class="card" data-file="${escapeHtml(d.file)}">
        <div class="card-thumb"><img src="images/${encodeURIComponent(d.file)}" alt="${escapeHtml(d.title)}" loading="lazy"></div>
        <div class="card-body">
          <div class="card-time">${d.date} ${d.time}</div>
          <p class="card-title">${escapeHtml(d.title)}</p>
          <div class="card-tags">${d.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
        </div>
      </button>`;
  }

  function renderTimeline(items) {
    const byDate = new Map();
    for (const d of items) {
      if (!byDate.has(d.date)) byDate.set(d.date, []);
      byDate.get(d.date).push(d);
    }
    const dates = [...byDate.keys()].sort();
    visibleOrder = [];
    let html = "";
    for (const date of dates) {
      const entries = byDate.get(date);
      visibleOrder.push(...entries.map((e) => e.file));
      html += `
        <div class="day-group">
          <div class="day-heading"><span class="date">${date}</span><span class="count">${entries.length}件</span></div>
          <div class="grid">${entries.map(cardHtml).join("")}</div>
        </div>`;
    }
    return html;
  }

  function renderCategory(items) {
    visibleOrder = [];
    let html = "";
    for (const tag of TAG_ORDER) {
      const entries = items.filter((d) => d.tags.includes(tag));
      if (entries.length === 0) continue;
      visibleOrder.push(...entries.map((e) => e.file));
      html += `
        <div class="category-group">
          <div class="category-heading"><span class="tagname">${escapeHtml(tag)}</span><span class="count">${entries.length}件</span></div>
          <div class="grid">${entries.map(cardHtml).join("")}</div>
        </div>`;
    }
    return html;
  }

  function render() {
    const items = filteredData();
    els.empty.hidden = items.length > 0;
    els.output.innerHTML =
      items.length === 0 ? "" : state.view === "timeline" ? renderTimeline(items) : renderCategory(items);
  }

  function setView(view) {
    state.view = view;
    els.viewBtns.forEach((b) => {
      const active = b.dataset.view === view;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    render();
  }

  els.viewBtns.forEach((b) => b.addEventListener("click", () => setView(b.dataset.view)));
  els.navViewLinks.forEach((a) =>
    a.addEventListener("click", () => setView(a.dataset.viewLink))
  );

  els.output.addEventListener("click", (ev) => {
    const card = ev.target.closest(".card");
    if (!card) return;
    openLightbox(card.dataset.file);
  });

  function openLightbox(file) {
    lightboxIndex = visibleOrder.indexOf(file);
    if (lightboxIndex === -1) return;
    showLightbox();
  }

  function showLightbox() {
    const file = visibleOrder[lightboxIndex];
    const d = data.find((x) => x.file === file);
    if (!d) return;
    els.lbImage.src = `images/${encodeURIComponent(d.file)}`;
    els.lbImage.alt = d.title;
    els.lbTitle.textContent = d.title;
    els.lbCaption.textContent = d.caption;
    els.lbDate.textContent = `${d.date} ${d.time}`;
    els.lbTags.innerHTML = d.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("");
    els.lightbox.hidden = false;
  }

  function closeLightbox() {
    els.lightbox.hidden = true;
    els.lbImage.src = "";
  }

  function step(delta) {
    if (visibleOrder.length === 0) return;
    lightboxIndex = (lightboxIndex + delta + visibleOrder.length) % visibleOrder.length;
    showLightbox();
  }

  els.lbClose.addEventListener("click", closeLightbox);
  els.lbPrev.addEventListener("click", () => step(-1));
  els.lbNext.addEventListener("click", () => step(1));
  els.lightbox.addEventListener("click", (ev) => {
    if (ev.target === els.lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (ev) => {
    if (els.lightbox.hidden) return;
    if (ev.key === "Escape") closeLightbox();
    if (ev.key === "ArrowLeft") step(-1);
    if (ev.key === "ArrowRight") step(1);
  });

  renderStats();
  renderFilters();
  render();
})();
