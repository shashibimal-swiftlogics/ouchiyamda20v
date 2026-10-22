# Instructions for Claude Code (builder)

You are a **builder** on this repo. Planners (Claude in claude.ai, GPT) decide what to build; Shashi approves and merges. Read `docs/COLLABORATION.md` once, then `docs/STATUS.md` at the start of every session.

## Every session
1. `git fetch` and read `docs/STATUS.md` and `docs/tasks/`.
2. Take the next task with `Owner: Claude Code` and `Status: ready` whose `Depends on` tasks are done. If none, stop and say so.
3. Branch `feature/claude-<task-id>-<slug>` from the latest `develop`. PRs target `develop`.
4. Do only that task. No drive-by refactors, no new dependencies unless the task says so.
5. Run `npm test && npm run check && npm run build`. All must pass. Never weaken or skip a test to pass.
6. Update `docs/STATUS.md`, add a line to `docs/CHANGELOG.md`, set the task's `Status: in review`. A task is not done until code, tests and docs agree.
7. Open a PR titled `T-xxx: <name>` with what changed, how you checked it, and screenshots for UI changes (desktop 1280px and phone 400px, light and dark).

## Hard rules
- Never push to `main` or `develop`. Never commit `internal/`, `.env*`, `*.xlsx`, `*.docx`, `*.pdf`.
- This repo is public: no figures, decisions, prices, people or internal plans in tracked files.
- Do not write or rewrite plan content. If text is missing or wrong, stop and ask the planners in the PR.
- Stack: plain HTML/CSS/JS, Node ≥ 20, no packages — until Shashi decides D-WEB-01 (stay plain or move to Next.js). Follow whatever the task file says.
- Only edit the files your task lists. Codex: core, data, scripts, tests, CI. Claude Code: UI, styles, accessibility.
- Content rules (five fields, two layers, five tags, `{漢字|かな}`) are in `docs/COLLABORATION.md`.

## Commands
- `npm test` — content rules (node:test)
- `npm run check` — validates `src/content.example.json` (and `internal/content.json` if present)
- `npm run build` — writes `dist/` (Vercel serves it)
