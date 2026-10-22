# T-000 Next.js foundation (only if D-WEB-01 = B)
Owner: Codex
Status: blocked (waits for D-WEB-01)
Depends on: D-WEB-01
Source: GPT plan 2026-10-22; docs/DECISIONS-WEB.md

## Goal
A static-export Next.js site that renders the same `content.json` with real URLs: `/`, `/w`, `/w/w01` … `/p/p12`, `/chapter/<id>`.

## Do
- Next.js (App Router, static export), no server features. Read content at build time from `internal/content.json` if present, else `src/content.example.json`.
- Keep `scripts/validate.mjs` and its tests; run validation before the Next build.
- Minimal unstyled components only (Header, Nav, UnitPage, ChapterPage, Table, Tag). Claude Code styles them in later tasks.
- `vercel.json` / build settings updated; `noindex` header kept.

## Do not
- Change the content model or rewrite content. Port, do not redesign.

## Done when
- Every current page exists at its URL; `npm test` and the build pass; Vercel preview green.
