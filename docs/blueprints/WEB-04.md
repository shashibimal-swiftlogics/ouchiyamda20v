# WEB-04 — Product innovation gallery
商品(しょうひん)イノベーション・ギャラリー

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /gallery (proposed) |
| Build slice | Slice 2 |
| Approver | Shashi (情報企画部) |
| Depends on | V3-Q3, asset approvals |

## 1. Purpose and audience
Presents existing assets and new product concepts side by side so management sees where innovation could go.

## 2. Content (every fact needs a named source before it is shown)
- Existing products (data flag lineage=existing) only if V3-Q3 is yes
- New concepts clearly marked CONCEPT
- Draft top 20 list for the film is separate and not approved

## 3. Real or demo
Concepts are labelled; no real prices.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Approved product photos
- Approved concept visuals (original only)

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo.

## 6. Build tasks
- Gallery grid from catalogue data
- Concept badge component

## 7. Tests and checks
- Build passes (pnpm build); existing tests pass
- Add a test for any new data rule or redirect
- Check light and dark mode: every CSS variable used must exist

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- Existing products in the showcase? (V3-Q3)
