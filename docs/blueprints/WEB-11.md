# WEB-11 — Demonstration admin
デモ管理画面(かんりがめん)

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /proposal/admin-demo (optional) |
| Build slice | Slice 4 |
| Approver | Shashi (情報企画部) |
| Depends on | WEB-03, WEB-09 |

## 1. Purpose and audience
Shows the future CMS and approval flow as polished mock screens. Optional, high visual value.

## 2. Content (every fact needs a named source before it is shown)
- Mock product, release and approval screens
- Approval flow: draft, review, approved, published
- Five illustrative desks: Catalogue and Merchandising; Fulfilment and Logistics; Finance and D-19 (redacted); Three-Change Governance; AI Data Hub and BI (synthetic or redacted)
- UI states only; no real accounts, endpoints or data

## 3. Real or demo
MOCK. Every screen labelled DEMO. No real login, no real data, no real save.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- None

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. Must not look like a real login form. No password fields.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Static mock screens

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
- Is it needed for Phase P?
