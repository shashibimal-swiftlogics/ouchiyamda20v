# T-001 CI: run checks on every pull request
Owner: Codex
Status: ready
Depends on: none
Source: docs/COLLABORATION.md (the loop, step 2)

## Goal
Every PR runs the same checks a builder runs locally, so a red PR never reaches Shashi.

## Do
- Add `.github/workflows/checks.yml`: on `pull_request` and `push` to `main`, Node 20, run `npm test`, `npm run check`, `npm run build`.
- No secrets, no deploy step (Vercel deploys on its own).

## Do not
- Add packages or change any script behaviour.

## Done when
- The workflow runs green on its own PR.
