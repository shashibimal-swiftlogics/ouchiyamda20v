# WEB-10 — Executive decision centre
経営判断(けいえいはんだん)センター

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /proposal/decision |
| Build slice | Slice 1 |
| Approver | Shashi (情報企画部) |
| Depends on | Shashi final wording |

## 1. Purpose and audience
States exactly what approval is requested. A controlled next stage only.

## 2. Content (every fact needs a named source before it is shown)
- Draft ask: approve talks with the departments involved, checking needed data, and setting the team and a cost ceiling
- Not approval for full production development or investment
- Decision gates and what happens after each

## 3. Real or demo
Real.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- None

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Decision page from content file

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
- Final wording by Shashi
- Cost ceiling
