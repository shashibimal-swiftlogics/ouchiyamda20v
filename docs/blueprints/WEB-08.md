# WEB-08 — Implementation roadmap
実行(じっこう)ロードマップ

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /roadmap (proposed) |
| Build slice | Slice 2 |
| Approver | Shashi (情報企画部) |
| Depends on | Shashi plan and cost ceiling |

## 1. Purpose and audience
Shows stages, controls and responsibilities, and where management can stop.

## 2. Content (every fact needs a named source before it is shown)
- Stage A and Stage B gates; Phase P vs Phase C
- Responsibilities by role
- Cost and time only if supplied and sourced

## 3. Real or demo
Plan, labelled as proposal.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- None beyond text

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo.

## 6. Build tasks
- Timeline component from data

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
- Cost ceiling and dates not supplied
