# Status — Vision 2.6.2 explainer

## 2026-10-22 · Claude (branch `claude/vision-2.6.2-structure`)
**Changed**
- Content model rebuilt from "3 phases × 11 sections" to the Vision 2.6.2 structure: W01–W10, P01–P12, pages for chapters 0–12 and appendices.
- Five-field names, simple / professional layers, five evidence tags, `{漢字|かな}` furigana, Japanese first with English beneath.
- Validator: bilingual text required, unit codes, links, unknown tags, untagged ¥/% figures rejected.
- Tests: 8 (incl. "public example carries no internal figures").
- Renderer: index with W and P card grids, unit pages, chapter pages, pager, light/dark, phone layout (menu collapses).
- `vercel.json`: build to `dist/`, `noindex` header.
- Kept GPT's approach: no dependencies, `internal/` git-ignored, file-based, no approvals recorded.

**Public demo pages:** 0 overview, 2 structure, 5 product lines, 7 roadmap, 9 gates, plus all 22 W/P units (names, one-line explainer, professional line).
**Internal-only pages (not in Git):** 1 why now, 6 Phase 1 projects, 8 money & baseline, 10 risks, 11 divisions, 12 decisions, benchmarks, glossary.

**Next (suggested split)**
- GPT/Codex: fill `simple` (2–3 sentences) for the 9 units whose packages are done: W08, W09, P01, P02, P03, P05, P06, P07, P08 — copy from each unit's 4-page / 1-page explainer.
- Claude: add a "your division" entry filter and the reference pages (EC model M1–M9, EC site health check under W02).
- Shashi: turn on Vercel Deployment Protection (All Deployments) before any internal content is deployed; decide how internal content reaches Vercel.

**Open questions**
- One metaphor for the whole site (bicycle / 10-wheel truck / rice-ball shop).
- Is showing W/P names and plain explainers in this public repo acceptable? (Assumed yes; no figures included.)
