# WEB-03 — Future EC storefront demo
未来(みらい)のECストア・デモ

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /, /new, /p/[slug] (existing shell; protected preview in Phase P) |
| Build slice | Slice 2 |
| Approver | Shashi (情報企画部) |
| Depends on | V3-Q3, C-Q5 |

## 1. Purpose and audience
Working demonstration of the proposed shop. Answers: what could the future look like?

## 2. Content (every fact needs a named source before it is shown)
- Whole preview is protected in Phase P (Deployment Protection), not only noindex
- Existing shell: home, /new per release (第N弾), product page
- Simulated shopping journey with no real orders
- Catalogue data in content/shop.json

## 3. Real or demo
DEMO. Persistent 試作 band. No orders, payments or customer data. noindex.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Approved names, prices and photos (none yet)
- Logo

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. Customer wording is 第N弾, never バッチ. Remove the Punch sentence from the hero until CIN-Q1 is decided.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Keep storefront styles scoped under .shop
- Simulated cart is client-side only, labelled demo

## 7. Tests and checks
- Build passes (pnpm build); existing tests pass
- Add a test for any new data rule or redirect
- Check light and dark mode: every CSS variable used must exist
- Visibility rule tests (exist)
- Add redirect tests

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- Which products appear (V3-Q3)
