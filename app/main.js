// Bargain Beacon router and controls. Hash routes: #/ (deal list, with filters
// in memory), #/deal/<id>, #/compare, #/method, #/cat/<category> (list filtered
// to one category — used by the phone screenshot). Compare choices live in
// memory and localStorage so a refresh keeps them.

import { deals, META, discountOf, savingOf } from "./data.js";
import { listPage, dealPage, comparePage, methodPage, missingPage, rows } from "./views.js";

const app = document.getElementById("app");
const tray = document.getElementById("compare-tray");
const countEl = document.getElementById("compare-count");
const LINK_KEY = "bargain-beacon-compare";

const state = {
  q: "",
  cat: "",
  store: "",
  min: 0,
  signal: "",
  sort: "discount",
  compare: new Set(JSON.parse(localStorage.getItem(LINK_KEY) || "[]")),
};

function saveCompare() {
  localStorage.setItem(LINK_KEY, JSON.stringify([...state.compare].slice(0, 3)));
}

function filtered() {
  const q = state.q.trim().toLowerCase();
  const out = deals.filter(
    (d) =>
      (q === "" || `${d.title} ${d.store} ${d.category}`.toLowerCase().includes(q)) &&
      (state.cat === "" || d.category === state.cat) &&
      (state.store === "" || d.store === state.store) &&
      discountOf(d) >= state.min &&
      (state.signal === "" || d.signal === state.signal),
  );
  const by = {
    discount: (a, b) => discountOf(b) - discountOf(a) || savingOf(b) - savingOf(a),
    saving: (a, b) => savingOf(b) - savingOf(a) || discountOf(b) - discountOf(a),
    price: (a, b) => a.price - b.price || discountOf(b) - discountOf(a),
    newlow: (a, b) => (a.signal === "new-low" ? 0 : 1) - (b.signal === "new-low" ? 0 : 1) || discountOf(b) - discountOf(a),
  };
  return out.sort(by[state.sort] || by.discount);
}

function stats() {
  const newLows = deals.filter((d) => d.signal === "new-low").length;
  const avg = Math.round(deals.reduce((s, d) => s + discountOf(d), 0) / deals.length);
  return { total: deals.length, newLows, totalSaving: avg };
}

function renderTray() {
  const n = state.compare.size;
  countEl.textContent = String(n);
  tray.hidden = n === 0;
}

function renderList() {
  const list = filtered();
  app.innerHTML = listPage({ deals: list, categories: META.categories, stores: META.stores, state, ...stats() });
  wireFilters();
  wireCompareButtons();
}

function wireFilters() {
  const bind = (id, key, parse) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      state[key] = parse ? parse(el.value) : el.value;
      rerenderResults();
    });
    el.addEventListener("change", () => {
      state[key] = parse ? parse(el.value) : el.value;
      rerenderResults();
    });
  };
  bind("f-q", "q");
  bind("f-cat", "cat");
  bind("f-store", "store");
  bind("f-min", "min", (v) => Number(v));
  bind("f-signal", "signal");
  bind("f-sort", "sort");
  app.querySelectorAll("[data-clear-filters]").forEach((b) =>
    b.addEventListener("click", () => {
      Object.assign(state, { q: "", cat: "", store: "", min: 0, signal: "", sort: "discount" });
      renderList();
    }),
  );
}

function rerenderResults() {
  const list = filtered();
  const box = document.getElementById("results");
  const count = document.getElementById("result-count");
  if (!box || !count) return;
  box.innerHTML = rows(list, state.compare);
  count.textContent = `${list.length} of ${deals.length} deals`;
  wireCompareButtons();
  const clear = box.querySelector("[data-clear-filters]");
  if (clear) clear.addEventListener("click", () => {
    Object.assign(state, { q: "", cat: "", store: "", min: 0, signal: "", sort: "discount" });
    renderList();
  });
}

function wireCompareButtons() {
  app.querySelectorAll("[data-compare]").forEach((b) =>
    b.addEventListener("click", () => {
      const id = b.getAttribute("data-compare");
      if (state.compare.has(id)) state.compare.delete(id);
      else if (state.compare.size < 3) state.compare.add(id);
      saveCompare();
      renderTray();
      render();
    }),
  );
  const clear = app.querySelector("[data-clear-compare]");
  if (clear) clear.addEventListener("click", () => {
    state.compare.clear();
    saveCompare();
    renderTray();
    render();
  });
}

function render() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  if (parts[0] === "deal" && parts[1]) {
    const d = deals.find((x) => x.id === parts[1]);
    if (!d) { app.innerHTML = missingPage(); }
    else {
      const same = deals.filter((x) => x.title === d.title);
      const similar = deals.filter((x) => x.category === d.category && x.id !== d.id).sort((a, b) => discountOf(b) - discountOf(a)).slice(0, 3);
      app.innerHTML = dealPage(d, same, similar, state.compare.has(d.id));
      wireCompareButtons();
    }
  } else if (parts[0] === "compare") {
    // A shareable compare link: #/compare/airpods-pro-3,sony-xm5,dyson-v9
    if (parts[1]) {
      state.compare = new Set(parts[1].split(",").filter((id) => deals.some((x) => x.id === id)).slice(0, 3));
      saveCompare();
    }
    const items = [...state.compare].map((id) => deals.find((x) => x.id === id)).filter(Boolean);
    app.innerHTML = comparePage(items);
    wireCompareButtons();
  } else if (parts[0] === "method") {
    app.innerHTML = methodPage();
  } else if (parts[0] === "cat" && parts[1]) {
    state.cat = META.categories.includes(parts[1]) ? parts[1] : "";
    renderList();
  } else {
    renderList();
  }
  renderTray();
  window.scrollTo(0, 0);
  document.body.dataset.shotReady = "true";
}

window.addEventListener("hashchange", render);
render();
