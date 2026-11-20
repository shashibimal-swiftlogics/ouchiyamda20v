# WEB-09 — Financial and evidence dashboard
財務(ざいむ)・エビデンス・ダッシュボード

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Showcase |
| Phase | P |
| Proposed route | /proposal/evidence (redacted by default; stronger authorisation) |
| Build slice | Slice 4 |
| Approver | Shashi (情報企画部) |
| Depends on | V3-Q4, Deployment Protection |

## 1. Purpose and audience
Supports the business case with traceable data.

## 2. Content (every fact needs a named source before it is shown)
- Each figure: value, source, date, owner
- Illustrative figures labelled DEMO DATA
- Internal figures never in the public repo or in client-side bundles
- Redacted by default: show source, date, period, owner, confidence, privacy class, open items and approval state; no figures until approved
- D-19 stays OPEN; ¥11.86M is not approved as audited or reconciled

## 3. Real or demo
Real only when sourced and approved; otherwise labelled demo.

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Approved datasets

## 5. Guardrails that apply
See AGENTS.md. In particular: No unverified claims, no prices, no real product names or photos until approved; no internal figures in the public repo. Must be behind Vercel Deployment Protection before online. 81.7% mobile is unsourced.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Data loaded from protected source, not committed
- Source column mandatory

## 7. Tests and checks
- Build passes (pnpm build); existing tests pass
- Add a test for any new data rule or redirect
- Check light and dark mode: every CSS variable used must exist
- Check no internal figures in git history

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- Who approves the numbers (V3-Q4)
