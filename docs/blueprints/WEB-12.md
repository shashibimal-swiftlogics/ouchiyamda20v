# WEB-12 — Design system and shared rules
デザインシステム

| Field | Value |
|---|---|
| Status | DRAFT v0.1 (2026-11-20) — not approved |
| Group | Shared |
| Phase | P |
| Proposed route | all |
| Build slice | Slice 0 (first) |
| Approver | Shashi (情報企画部) |
| Depends on | none |

## 1. Purpose and audience
One token set for the whole site; keeps every page consistent and accessible.

## 2. Content (every fact needs a named source before it is shown)
- Tokens: colour, type, spacing; light and dark
- Zones: storefront uses .shop scope; proposal uses globals.css
- Components: demo band, status label, concept badge, section header, bilingual text block
- Accessibility: 44px targets, focus, contrast, reduced motion

## 3. Real or demo
n/a

## 4. Assets needed (supplied and approved by Shashi; no third-party or stock images)
- Logo and brand colours supplied by Shashi

## 5. Guardrails that apply
See AGENTS.md. In particular: No hard-coded colours; no new animation library.

## 6. Build tasks
- Audit tokens; add missing ones
- Component docs

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
- Brand assets
