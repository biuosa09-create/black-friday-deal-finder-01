// HTML for the Bargain Beacon pages, built from the deal data. Every value is
// escaped before it goes into the page. Views return strings; main.js wires
// the controls and the compare tray.

import { discountOf, savingOf, SIGNAL_LABEL, SIGNAL_BLURB } from "./data.js";

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const usd = (n) =>
  `$${Number(n).toLocaleString("en-US", {
    minimumFractionDigits: Number(n) % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;

const day = (iso) =>
  new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }) + " UTC";

export function signalBadge(d) {
  return `<span class="sig sig-${d.signal}">${escape(SIGNAL_LABEL[d.signal])} · ${discountOf(d)}% off</span>`;
}

export function card(d, inCompare) {
  return `<article class="card" data-id="${escape(d.id)}">
  <div class="card-top"><span class="store">${escape(d.store)}</span><span class="cat">${escape(d.category)}</span></div>
  <h3><a href="#/deal/${encodeURIComponent(d.id)}">${escape(d.title)}</a></h3>
  <p class="price">${usd(d.price)} <s>${usd(d.was)}</s> <span class="save">save ${usd(savingOf(d))}</span></p>
  <p>${signalBadge(d)}</p>
  <p class="note">${escape(d.note)}</p>
  <div class="card-actions">
    <a class="btn" href="#/deal/${encodeURIComponent(d.id)}">Deal detail</a>
    <a class="btn ghost" href="${escape(d.url)}" rel="noopener" target="_blank">At ${escape(d.store)} ↗</a>
    <button class="btn ghost compare-toggle" data-compare="${escape(d.id)}" type="button">${inCompare ? "✓ Comparing" : "+ Compare"}</button>
  </div>
  <p class="checked">Checked ${day(d.checked)}</p>
</article>`;
}

export function rows(list, compareSet) {
  if (list.length === 0) {
    return `<p class="empty">No deal matches those filters. <button class="btn ghost" type="button" data-clear-filters>Clear filters</button></p>`;
  }
  return `<div class="grid">${list.map((d) => card(d, compareSet.has(d.id))).join("")}</div>`;
}

function optionList(values, current, allLabel) {
  return [`<option value="">${allLabel}</option>`]
    .concat(values.map((v) => `<option value="${escape(v)}"${v === current ? " selected" : ""}>${escape(v)}</option>`))
    .join("");
}

export function listPage({ deals, categories, stores, state, total, newLows, totalSaving }) {
  return `<section class="hero">
  <h1>Black Friday deals, checked today</h1>
  <p class="lede">${total} real deals from ${stores.length} stores, checked ${escape("Fri 27 Nov 2026, 11:00 UTC")}. Every price was read at the store or in a deals report that names the store — and every deal carries an honest verdict, including the ones that are only a routine sale.</p>
  <p class="stats"><strong>${newLows} new lows</strong> · average ${Math.round(totalSaving)}% off across the board${deals.length ? ` · up to ${Math.max(...deals.map((d) => discountOf(d)))}% off` : ""}</p>
</section>
<section class="filters" aria-label="Find a deal">
  <label>Search <input id="f-q" type="search" value="${escape(state.q)}" placeholder="e.g. airpods, tv, dyson"></label>
  <label>Category <select id="f-cat">${optionList(categories, state.cat, "All categories")}</select></label>
  <label>Store <select id="f-store">${optionList(stores, state.store, "All stores")}</select></label>
  <label>Min discount <select id="f-min">
    <option value="0"${state.min === 0 ? " selected" : ""}>Any discount</option>
    <option value="25"${state.min === 25 ? " selected" : ""}>25% off or more</option>
    <option value="40"${state.min === 40 ? " selected" : ""}>40% off or more</option>
    <option value="50"${state.min === 50 ? " selected" : ""}>50% off or more</option>
  </select></label>
  <label>Verdict <select id="f-signal">
    <option value=""${state.signal === "" ? " selected" : ""}>All verdicts</option>
    <option value="new-low"${state.signal === "new-low" ? " selected" : ""}>New lows only</option>
    <option value="strong"${state.signal === "strong" ? " selected" : ""}>Strong deals only</option>
    <option value="routine"${state.signal === "routine" ? " selected" : ""}>Routine sales only</option>
  </select></label>
  <label>Sort by <select id="f-sort">
    <option value="discount"${state.sort === "discount" ? " selected" : ""}>Biggest discount %</option>
    <option value="saving"${state.sort === "saving" ? " selected" : ""}>Biggest saving $</option>
    <option value="price"${state.sort === "price" ? " selected" : ""}>Lowest price</option>
    <option value="newlow"${state.sort === "newlow" ? " selected" : ""}>New lows first</option>
  </select></label>
  <button class="btn ghost" type="button" data-clear-filters>Clear</button>
</section>
<p class="count" id="result-count">${deals.length} of ${total} deals</p>
<div id="results">${rows(deals, state.compare)}</div>`;
}

export function dealPage(d, sameProduct, similar, inCompare) {
  const others = sameProduct.length
    ? `<section class="same">
  <h2>Same product at other stores</h2>
  <table class="compare-table"><thead><tr><th>Store</th><th>Price</th><th>Usual</th><th>Off</th><th></th></tr></thead><tbody>
  ${sameProduct.map((o) => `<tr${o.id === d.id ? ' class="current"' : ""}><td>${escape(o.store)}</td><td><strong>${usd(o.price)}</strong></td><td><s>${usd(o.was)}</s></td><td>${discountOf(o)}%</td><td>${o.id === d.id ? "← this one" : `<a href="#/deal/${encodeURIComponent(o.id)}">View</a>`}</td></tr>`).join("")}
  </tbody></table>
  <p class="best">Best price: <strong>${escape(sameProduct.reduce((a, b) => (a.price <= b.price ? a : b)).store)} — ${usd(Math.min(...sameProduct.map((o) => o.price)))}</strong></p>
</section>`
    : "";
  return `<p class="crumb"><a href="#/">&larr; All deals</a></p>
<article class="detail">
  <div class="card-top"><span class="store">${escape(d.store)}</span><span class="cat">${escape(d.category)}</span></div>
  <h1>${escape(d.title)}</h1>
  <p class="price big">${usd(d.price)} <s>${usd(d.was)}</s> <span class="save">save ${usd(savingOf(d))} (${discountOf(d)}% off)</span></p>
  <p>${signalBadge(d)} — ${escape(SIGNAL_BLURB[d.signal])}</p>
  <p class="evidence"><strong>Why this verdict:</strong> ${escape(d.note)}</p>
  <dl class="facts">
    <dt>Store</dt><dd>${escape(d.store)}</dd>
    <dt>Category</dt><dd>${escape(d.category)}</dd>
    <dt>Price checked</dt><dd>${day(d.checked)}</dd>
    <dt>Read in</dt><dd>${escape(d.source)}</dd>
  </dl>
  <div class="card-actions">
    <a class="btn primary" href="${escape(d.url)}" rel="noopener" target="_blank">Find it at ${escape(d.store)} ↗</a>
    <button class="btn compare-toggle" data-compare="${escape(d.id)}" type="button">${inCompare ? "✓ Comparing" : "+ Compare"}</button>
  </div>
</article>
${others}
<section class="similar">
  <h2>More ${escape(d.category)} deals</h2>
  <div class="grid">${similar.map((s) => card(s, false)).join("")}</div>
</section>`;
}

export function comparePage(items) {
  if (items.length === 0) {
    return `<h1>Compare deals</h1>
<p class="empty">Nothing to compare yet. Pick deals with the <strong>+ Compare</strong> button on any deal card, then come back here.</p>
<p><a class="btn" href="#/">Browse deals</a></p>`;
  }
  const rowsHtml = [
    ["Price", (d) => `<strong>${usd(d.price)}</strong>`],
    ["Usual price", (d) => `<s>${usd(d.was)}</s>`],
    ["You save", (d) => `${usd(savingOf(d))} (${discountOf(d)}%)`],
    ["Store", (d) => escape(d.store)],
    ["Category", (d) => escape(d.category)],
    ["Verdict", (d) => escape(SIGNAL_LABEL[d.signal])],
    ["Checked", (d) => day(d.checked)],
  ];
  return `<h1>Compare deals</h1>
<p class="lede">${items.length} deal${items.length > 1 ? "s" : ""} side by side. Prices are the ones checked on Fri 27 Nov 2026.</p>
<table class="compare-table wide">
<thead><tr><th></th>${items.map((d) => `<th><a href="#/deal/${encodeURIComponent(d.id)}">${escape(d.title)}</a></th>`).join("")}</tr></thead>
<tbody>
${rowsHtml.map(([label, fn]) => `<tr><th scope="row">${label}</th>${items.map((d) => `<td>${fn(d)}</td>`).join("")}</tr>`).join("")}
<tr><th scope="row"></th>${items.map((d) => `<td><a class="btn ghost" href="${escape(d.url)}" rel="noopener" target="_blank">At ${escape(d.store)} ↗</a></td>`).join("")}</tr>
</tbody></table>
<p><button class="btn ghost" type="button" data-clear-compare>Clear comparison</button> <a class="btn" href="#/">Back to deals</a></p>`;
}

export function methodPage() {
  return `<h1>How every deal was checked</h1>
<p class="lede">Bargain Beacon is a hand-checked board, not a scrape. Every deal on it was read by the agent that built this site on Friday 27 November 2026, at a real store or in a deals report that names the store, and the price shown is the price that was live that morning.</p>
<h2>What "checked" means</h2>
<ul>
<li>Each deal carries the store, the sale price, the usual price, the time it was checked, and the report it was read in.</li>
<li>Where two sources disagreed — the Shark AI Ultra's usual price, or the Ninja Flip's price moving between $140 and $150 — the page says so instead of picking the flattering number.</li>
<li>Two products are listed at two stores each (AirPods Pro 3 and the MacBook Air M5 512GB), so the compare view can show the same product's price across stores.</li>
</ul>
<h2>The verdict</h2>
<ul>
<li><strong>New low</strong> — a source called it a record or all-time low price.</li>
<li><strong>Strong deal</strong> — a deep cut, usually 40% or more off, or far below the typical selling price.</li>
<li><strong>Routine sale</strong> — a real discount, but small or ordinary for the season. Three deals on this board carry this verdict, on purpose: a finder that calls everything a bargain is not finding anything.</li>
</ul>
<h2>Limits</h2>
<p>Prices change during Black Friday. The board is a snapshot of the morning of 27 November 2026; the store link on each deal is the place to confirm the live price before buying. Bargain Beacon is not affiliated with any store and takes no commission.</p>
<p><a class="btn" href="#/">Back to deals</a></p>`;
}

export function missingPage() {
  return `<h1>Not found</h1>
<p>There is no deal at this address. <a href="#/">See all deals</a>.</p>`;
}
