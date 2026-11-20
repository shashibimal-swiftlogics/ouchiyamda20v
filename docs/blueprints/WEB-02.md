# WEB-02 — Executive landing
エグゼクティブ・ランディング

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | / or /proposal (decide with WEB-10) |
| Build slice | Slice 1 |
| Approver | Shashi (情報企画部) |
| Depends on | WEB-12 design system |

## 1. Purpose and audience
Answers: what is the opportunity? Presents Vision 2.6.4 in one page for management.

## 2. Content (every fact needs a named source before it is shown)
- Vision 2.6.4 summary (label to be confirmed, V-1)
- Four executive questions and where each is answered
- Links to the other showcase sections
- Every number: source named or omitted

## 3. Real or demo
Real explanatory text; any illustration is labelled.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Approved Vision 2.6.4 wording from Shashi
- Logo

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo.

## 6. Build tasks
- Page from content file, not hard-coded
- Section links and anchors

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
- Final headline wording
- Public language layout (REC-05)
