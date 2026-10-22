# Website build decisions (public-safe)

Business decisions (D-19, D-38 … D-45) live in the internal Vision 2.6.2 documents, not here.

## D-WEB-01 Stack: stay plain HTML/JS or move to Next.js — OPEN (Shashi decides)

| | A. Stay plain (current) | B. Next.js (GPT's proposal) |
|---|---|---|
| What exists | Working site, validator, 8 tests, Vercel preview green | Codex rebuilds the shell; content JSON and validator carry over |
| Each page has its own URL | Hash links (`#p07`) — fine behind a login, weaker for sharing and search | Real URLs (`/p/p07`), static pages, better previews |
| Components and animation | Hand-written in `app.js` | React components; easier for UI work at scale |
| Packages to maintain | None | Next.js, React and their updates |
| Time to first useful site | Now | One Codex task (T-000) before UI tasks can start |
| Fits a later login / content editor | Needs extra work | Easier |

Architects' note (Claude): either works on Vercel. B is worth it if the site will grow beyond an explainer (login, editing, many pages); A is enough for a read-only explainer for directors. Whichever is chosen, keep `src/content.example.json`, `scripts/validate.mjs` and the tests as the content contract.

## D-WEB-02 Branch model — ADOPTED
`main` ← `develop` ← `feature/codex-*`, `feature/claude-*`, `docs/*`. PR #1 merges to `main` as the baseline; `develop` is created from it.

## D-WEB-03 Where documents live — ADOPTED
Working rules in this repo; master blueprint, handover, content master, decision log, QA and evidence registers stay internal (OneDrive + Claude project), because this repo is public.
