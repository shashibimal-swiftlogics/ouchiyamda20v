# WEB-06 — 10 wheels and 12 revenue engines
10の車輪(しゃりん)と12の収益(しゅうえき)エンジン

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /proposal/capabilities (W, exists) and /proposal/engines (P, exists); optional overview /proposal/operating-model |
| Build slice | Slice 2 |
| Approver | Shashi (情報企画部) |
| Depends on | Business master (W/P definitions) |

## 1. Purpose and audience
Explains the operating model. W01–W10 and P01–P12 keep their business meaning here and only here.

## 2. Content (every fact needs a named source before it is shown)
- Wheel and engine names and descriptions from the business master, supplied by Shashi
- Relationships between wheels and engines

## 3. Real or demo
Real model description; no financial figures unless sourced.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Business master extract

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. Do not reuse W/P codes for pages.

> Existing page on PR #2's branch: reuse and extend it; do not create a parallel route. See ROUTES.md.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Data file for wheels and engines
- Interactive diagram

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
- I have not seen the business master; content must be supplied
