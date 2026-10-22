# Status — Vision 2.6.2 explainer

## Team (from 2026-10-22)
Lead architect: GPT · Co-architect: Claude (claude.ai) · Builders: Codex (core, data, tests) + Claude Code (UI, accessibility) · Director: Shashi. See `docs/COLLABORATION.md`.

**Waiting on Shashi:** D-WEB-01 stack decision (plain vs Next.js) — see `docs/DECISIONS-WEB.md`.

## Task board
| ID | Task | Owner | Status | Depends on |
|---|---|---|---|---|
| T-000 | Next.js foundation (only if D-WEB-01 = B) | Codex | blocked | D-WEB-01 |
| T-001 | CI checks on every PR | Codex | ready | — |
| T-002 | Stronger content guard | Codex | ready | T-001 |
| T-003 | "Your division" entry | Claude Code | ready after D-WEB-01 | D-WEB-01 |
| T-004 | Site search | Claude Code | ready | T-003 |
| P-001 | Simple layer for 9 finished units | Planners | ready | — |

Files this round — Codex: `.github/`, `scripts/` (T-000: the new app shell). Claude Code: `src/app.js`, `src/style.css`, `src/index.html`. No overlap.

## 2026-10-22 · Claude (branch `claude/vision-2.6.2-structure`, PR #1)
**Changed**
- Content model rebuilt to the Vision 2.6.2 structure: W01–W10, P01–P12, chapter pages 0–12 and appendices.
- Five-field names, simple / professional layers, five evidence tags, `{漢字|かな}` furigana, Japanese first with English beneath.
- Validator rejects missing English, bad codes or links, unknown tags and untagged ¥/% figures. 8 tests.
- Renderer: W/P card grids, unit pages, chapter pages, pager, light/dark, collapsible phone menu.
- `vercel.json` (build to `dist/`, `noindex` header). Vercel preview builds green.
- Team setup: `CLAUDE.md`, `AGENTS.md`, `docs/COLLABORATION.md`, `docs/tasks/`.

**Public demo pages:** 0 overview, 2 structure, 5 product lines, 7 roadmap, 9 gates, all 22 W/P units.
**Internal-only pages (not in Git):** 1 why now, 6 Phase 1 projects, 8 money & baseline, 10 risks, 11 divisions, 12 decisions, benchmarks, glossary.

**Open questions (Shashi)**
- Turn on Vercel Deployment Protection → All Deployments before internal content is deployed.
- How internal content reaches Vercel (private repo, or a manual deploy from Shashi's computer).
- One metaphor for the whole site (bicycle / 10-wheel truck / rice-ball shop).
- Is showing W/P names and plain explainers in this public repo acceptable? (Assumed yes; no figures included.)
