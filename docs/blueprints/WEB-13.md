# WEB-13 — Security and protection
セキュリティと保護

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Shared |
| Phase | P |
| Proposed route | all |
| Build slice | Slice 0 |
| Approver | Shashi (情報企画部) |
| Depends on | V-2 |

## 1. Purpose and audience
Protect internal proposal content; keep demos safe.

## 2. Content (every fact needs a named source before it is shown)
- Vercel Deployment Protection on before internal content is online
- noindex is not authentication
- Upgrade Next.js to 16.4.5 or later (V-2, awaiting approval)
- No secrets in repo; no customer data
- Stage B gate: security review, EC engine chosen, approved products, 301 table

## 3. Real or demo
n/a

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- None

## 5. Guardrails that apply
See AGENTS.md. In particular: Never commit internal figures or secrets.

## 5a. To write when this blueprint is approved
- User story
- Draft copy, Japanese and English (Japanese with furigana on key words)
- Wireframe sequence
- Mock or data contract (field names, sample data labelled SAMPLE)

## 6. Build tasks
- Checklist before each deploy
- Dependency audit

## 7. Tests and checks
- pnpm audit result recorded

## 8. Definition of done
- [ ] Content approved by Shashi, sources recorded
- [ ] Japanese main text with furigana on key words; English beneath (public-language rule still open, REC-05)
- [ ] Mobile width checked; tap targets 44px or more; keyboard and focus work
- [ ] Demo or concept items are visibly labelled
- [ ] Build and tests pass; reviewed by a different tool or person
- [ ] HANDOFF, MASTER and CHANGELOG updated

## 9. Open questions
- V-2
