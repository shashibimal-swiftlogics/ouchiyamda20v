# WEB-07 — AI co-creation and in-house development
AI共創(きょうそう)・内製(ないせい)開発力

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /ai-capability (proposed) |
| Build slice | Slice 2 |
| Approver | Shashi (情報企画部) |
| Depends on | Verified repo facts |

## 1. Purpose and audience
Answers: can this team deliver? Shows the workflow and the tools.

## 2. Content (every fact needs a named source before it is shown)
- Workflow: human direction, multi-AI research and planning, creative design, Claude Code / Codex development, testing, human approval
- Every item carries one label: Working now, Reported but unverified, or Proposed
- Working now: only what can be shown and tested (e.g. the shell, tests that pass)

## 3. Real or demo
Real, honestly labelled.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Screenshots of real work, approved

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. No capability claim without evidence.

## 6. Build tasks
- Status-label component
- Evidence links to repo or demo

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
- PR #2 and test status must be verified on GitHub first (REC-07)
