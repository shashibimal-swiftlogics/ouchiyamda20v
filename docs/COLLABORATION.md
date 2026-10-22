# Working together: 2 architects, 2 builders, 1 director

| Role | Who | Primary areas | Reviews |
|---|---|---|---|
| **Project director** | Shashi | Final approval, merges to `main`, Vercel settings, keeps `internal/content.json` | — |
| **Lead architect** | GPT (ChatGPT) | Vision 2.6.2 strategy, master blueprint, requirements, QA governance | UX/UI design |
| **Co-architect** | Claude (claude.ai) | UX/UI design, independent technical review, content text (JA/EN), improvement proposals | Strategy, blueprint |
| **Builder** | Codex | Core application, data structure, W/P page generation, validation, tests, CI, integration | Claude Code's UI work |
| **Builder** | Claude Code | UI components, interaction, responsive design, accessibility, visual polish | Codex's core work |

Architects write task files; builders build them. Builders do not change the plan or invent content.

Builders read `CLAUDE.md` (Claude Code) or `AGENTS.md` (Codex) automatically. Both files carry the same rules.

## The loop
1. **Plan** — a planner writes a task file in `docs/tasks/` (template below) and sets `Owner: Claude Code` or `Owner: Codex`. Shashi approves by merging the task file (or says "go").
2. **Build** — the builder creates its branch, does only that task, runs `npm test && npm run check && npm run build`, opens a PR that names the task ID.
3. **Review** — the other builder or a planner reviews. Content and wording: planners. Code: either builder.
4. **Merge** — Shashi merges. Vercel deploys `main`.
5. **Record** — a task is done only when code, tests and docs agree. The builder updates in the same PR: `docs/STATUS.md` (task board, done, next, open questions), `docs/CHANGELOG.md` (one line per change), and any public doc the change affects (sitemap, design notes).

One task = one branch = one PR. If two tasks touch the same file, the planner sets the order with `Depends on:`.

## Branches
```
main                         production (Vercel). Merged only from develop, by Shashi.
  └── develop                integration. Every feature PR targets develop.
        ├── feature/codex-<task-id>-<slug>    Codex
        ├── feature/claude-<task-id>-<slug>   Claude Code
        └── docs/<slug>                       architects' task files and public docs
```
- Vercel builds a preview for every PR. Shashi checks the preview, then merges.
- Codex and Claude Code never edit the same file in the same round. The task board in `docs/STATUS.md` lists each task's files.

## Task file template (`docs/tasks/T-000-short-name.md`)
```
# T-000 Short name
Owner: Claude Code | Codex
Status: ready | in progress | in review | done
Depends on: (task IDs or none)
Source: (plan section, e.g. Blueprint Vision 2.6.2 §4 P07)

## Goal
One or two sentences.

## Do
- concrete steps

## Do not
- limits

## Done when
- checks that prove it (tests, screenshots, pages)
```

## Content rules (Vision 2.6.2) — builders enforce, planners write
- Five fields, in order: code → Japanese official name → English official name → simple Japanese explainer → simple English explainer. The easy nickname never replaces the official name.
- Each W/P unit: `simple` (2–3 sentences, no new numbers) and `pro` (purpose, scope, tagged figures, links, decision).
- Every ¥ or % figure in a table carries one tag: FACT, EXT, ASSUMPTION, PROPOSED, UNCONFIRMED.
- `{漢字|かんじ}` for furigana. Japanese first, English beneath.
- W = how we run (no revenue). P = where revenue comes from. Never invent a code.

## Where each document lives
| Document | Where | Why |
|---|---|---|
| AGENTS.md, CLAUDE.md, COLLABORATION, STATUS, CHANGELOG, task files, sitemap, design notes | this repo | public-safe working rules |
| Master Blueprint, Master Handover, Vision 2.6.2 content master, decision log, QA and evidence registers | Shashi's OneDrive folder and the Claude project | they contain internal figures, decisions and plans; this repo is public |

## Public vs internal
This repository is **public**. `src/content.example.json` holds names and plain explanations only — no figures, decisions, prices, people or plans. Real content lives in `internal/content.json` (git-ignored, kept by Shashi). Builders never commit internal content and never ask for it to be pasted into a PR. Before internal content is deployed, Vercel **Deployment Protection → All Deployments** must be on.

## Content model (short)
```
version, title, audience, status, mode, tags
groups[]  -> W and P: { id, code, title, intro, items[] }
  items[] -> { id, code, name, explain, nickname, simple?, pro, links[], status, phase? }
pages[]   -> { id, chapter, title, brief, blocks[] }
  blocks  -> p | h | note | table | journey | groups
```
Bilingual values are `{ "ja": "...", "en": "..." }`. Table cells may add `"tag"`.
