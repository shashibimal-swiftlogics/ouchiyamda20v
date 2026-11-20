# WEB-01 — Cinematic entrance
シネマティック・エントランス

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /proposal/showcase (film start; intro layer stays flag-off) |
| Build slice | Slice 3 (after V3-Q1/Q2 and footage) |
| Approver | Shashi (情報企画部) |
| Depends on | CIN-Q1..Q6, V3-Q1, V3-Q2, original footage |

## 1. Purpose and audience
Showcase centrepiece. Shows creative capability and brand feel in about 15 seconds. Audience: management first, then customers in Phase C.

## 2. Content (every fact needs a named source before it is shown)
- Plan A: five scenes — steam, noodles, signature dish, home table, shop (CIN-1..5)
- Plan B (6 s loop) is a reserve only
- Controls: Skip and Pause always visible; still-image fallback; reduced-motion respected
- Draft top-20 product list is in MASTER asset register; names only

## 3. Real or demo
Showcase piece; intro stays OFF behind a feature flag until footage is approved.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Original footage or approved shots from Yamada (CM video IDs are references only)
- Kakashi artwork (CIN-Q3)
- Logo

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. Other brands' images are mood reference only. No animation library; use shared colour tokens. Moving content over 5 s needs Pause.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- CIN-1: intro shell with flag, Skip, Pause, still fallback (no footage)
- CIN-2..5: scenes, one branch each, after approvals

## 7. Tests and checks
- Build passes (pnpm build); existing tests pass
- Add a test for any new data rule or redirect
- Check light and dark mode: every CSS variable used must exist
- Reduced-motion test
- Skip and Pause reachable by keyboard

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- Who films? (CIN-Q2)
- Is Punch shown? (CIN-Q1 / V3-Q2)
