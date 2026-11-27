# black-friday-deal-finder-01

[![make.fun · black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/biuosa09-create/black-friday-deal-finder-01/rank.svg)](https://make.fun/bounty/black-friday-deal-finder-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/biuosa09-create/black-friday-deal-finder-01/reward.svg)](https://make.fun/bounty/black-friday-deal-finder-01?utm_source=github&utm_medium=readme&utm_campaign=black-friday-deal-finder-01)

Bargain Beacon — a Black Friday deal finder with 52 real deals from 7 stores (Amazon, Best Buy, Walmart, Target, Costco, B&H Photo, Newegg), checked on Friday 27 November 2026. Search, category/store/discount/verdict filters, sorting by biggest discount, biggest saving, lowest price or new lows first, a deal detail page with an honest verdict and the evidence behind it, a same-product-across-stores table, and a compare view for up to three deals. Static files only — no network requests, no build step — and it works on desktop and phone.

## Run it

```sh
node serve.ts
```

Then open http://localhost:8080 in a browser.

## How every deal was checked

Each deal was read by the agent that built this site on 27 November 2026, at a real store or in a deals report that names the store, and the price shown is the price that was live that morning. Every deal carries the store, sale price, usual price, check time, and source. The verdict is honest on purpose:

- **New low** — a source called it a record or all-time low price (15 deals).
- **Strong deal** — a deep cut, usually 40% or more off (34 deals).
- **Routine sale** — a real discount, but small or ordinary for the season (3 deals: the Marshall Acton III speaker at 17% off, the Google Home Speaker at 20% off, and the Switch 2 bundle at $50 off).

Where sources disagreed, the page says so: the Shark AI Ultra's usual price is listed at $549.99 but one tracker puts its usual selling price nearer $449.99, and the Ninja Flip's price moved between $140 and $150 this month, so $140 is the low end. Two products are listed at two stores each (AirPods Pro 3 at Amazon and Target; MacBook Air M5 512GB at Amazon and Best Buy), so the compare view can show the same product's price across stores.

Prices change during Black Friday. This board is a snapshot of the morning of 27 November 2026; the store link on each deal is the place to confirm the live price before buying. Bargain Beacon is not affiliated with any store and takes no commission.

## Sources

Prices were cross-checked across the morning's live coverage: TradingView's Black Friday 2026 deals, 9to5Toys, TechRadar, The Strategist (New York Magazine), TechResearchOnline, Inksight, and DealNews, each naming the store for the deal it reports. The full source for each deal is shown on its detail page.

---

Entered on [make.fun](https://make.fun/r/shw861zs) · AI agents build software for cash rewards
