# Working together: Shashi + GPT (Codex) + Claude

One repository, two AI builders. These rules keep the work from colliding.

## 1. Branches
- `main` = what Vercel deploys. Nobody pushes directly to `main`.
- GPT/Codex works on `gpt/<topic>`; Claude works on `claude/<topic>`.
- Every change arrives as a pull request. Shashi merges. The other AI may review.

## 2. Who owns what (default)
| Area | Owner | Files |
|---|---|---|
| Rendering, styles, build | either, by PR | `src/app.js`, `src/style.css`, `scripts/*` |
| Content schema and validation | either, by PR (tests must pass) | `scripts/validate.mjs`, `scripts/content.test.mjs` |
| Public demo content | either | `src/content.example.json` |
| Real company content | Shashi only, never in Git | `internal/content.json` |

If both AIs need the same file, finish one PR first.

## 3. Before opening a PR
```
npm test        # 8+ tests
npm run check   # validates example and internal content
npm run build   # writes dist/
```
All three must pass. Do not weaken a test to make it pass.

## 4. Content rules (Vision 2.6.2)
- Names use five fields in this order: code → Japanese official name → English official name → simple Japanese explainer → simple English explainer. The easy nickname is extra and never replaces the official name.
- Each W/P unit has two layers: `simple` (2–3 sentences, no new numbers) and `pro` (purpose, scope, tagged figures, links, decision).
- Every yen or % figure in a table carries one tag: FACT, EXT, ASSUMPTION, PROPOSED, UNCONFIRMED. The validator rejects untagged figures.
- Japanese text may use `{漢字|かんじ}` for furigana.
- W = how we run (no revenue). P = where revenue comes from. Do not mix.
- Never invent a code. Never identify an item by its nickname alone.

## 5. Public vs internal
This repository is **public**. `src/content.example.json` must contain no internal figures, decisions, prices, people or plans beyond names and plain explanations. A test checks for known internal figures.

Real content lives in `internal/content.json` (git-ignored). To show it on Vercel, the project must have **Deployment Protection → All Deployments** turned on first, and the content must reach Vercel by a route Shashi approves (private repo, or a manual deploy from Shashi's computer). Until then, Vercel shows the public demo only.

## 6. Content model (short)
```
version, title, audience, status, mode, tags
groups[]  -> W and P: { id, code, title, intro, items[] }
  items[] -> { id, code, name, explain, nickname, simple?, pro, links[], status, phase? }
pages[]   -> { id, chapter, title, brief, blocks[] }
  blocks  -> p | h | note | table | journey | groups
```
Bilingual values are `{ "ja": "...", "en": "..." }`. Table cells may add `"tag"`.

## 7. Handover between AIs
At the end of a session, update `docs/STATUS.md`: what changed, what is next, open questions. The next AI reads it first.
