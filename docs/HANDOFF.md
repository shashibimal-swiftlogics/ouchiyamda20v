# HANDOFF — Yamada web (storefront + proposal)
Updated: 2026-11-18 · Branch: `feature/claude-web-01-storefront-shell` · Public-safe (no prices, real product names, photos or sales figures).

## State
- `/` = storefront prototype (おうち山田うどん). Stage A: no orders, no payments, no customer data. `noindex`.
- `/proposal/...` = Vision 2.6.x management proposal (moved from root). Old root paths 308-redirect here.
- Storefront data: `content/shop.json` (types in `lib/shop.ts`). Proposal data: `content/vision.json`.
- Six fixed categories CAT-01..06; 新商品 is a collection; releases are 第1弾/第2弾 (never 「バッチ」).
- New products only are visible in proposal mode. Existing products: add data with `lineage:"existing"`, `visible:true`; no code change.
- Zone switch links use plain `<a>` (separate layouts/CSS).

## Done
Route split, storefront shell (LP-01..05, 07, 10, 12, 13, 14), category/new/products/guide/story pages, 8 tests, redirects, favicon.

## Next (in order)
1. S04 shared parts · S05 page templates · S06 visual assets (need original photos/logo, C-Q5) · S07 admin · S08 data/KPI/security/engine · S09 text · S10 lock.
2. Finish LP-06, 08, 09, 11 once the first release is decided.
3. Relabel proposal area "Vision 2.6.4 r3" (still shows 2.6.2).

## Open decisions (Shashi)
L-Q6 what is Betrend? · S3-Q1..Q5 · C-Q5 photos/logo originals · C-Q6 EC engine (S08) · upgrade Next.js 16.4.2 → ≥16.4.5 (2 moderate advisories, `pnpm audit --prod`).

## Rules
Never add prices, real product names, photos, logos, legal text or third-party (e.g. おめん) images until approved. Run `pnpm test && pnpm check && pnpm build` (first build may fail on a Next security notice; retry). Update this file and MASTER.md after every step.
