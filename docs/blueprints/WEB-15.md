# WEB-15 — Test, QA and deployment
テスト・QA・デプロイ

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Process |
| Phase | P |
| Proposed route | n/a |
| Build slice | Slice 0 |
| Approver | Shashi (情報企画部) |
| Depends on | none |

## 1. Purpose and audience
Make every change safe to merge.

## 2. Content (every fact needs a named source before it is shown)
- Build and tests pass on every pull request
- Phone-width visual check
- Reviewer is a different tool or person from the author
- Redirect tests to be added
- Preview deployment checked before merge

## 3. Real or demo
n/a

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- n/a

## 5. Guardrails that apply
See AGENTS.md. In particular: No tool merges its own pull request.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Add redirect tests
- Add accessibility check

## 7. Tests and checks
- As listed

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- Who is the reviewer for each task
