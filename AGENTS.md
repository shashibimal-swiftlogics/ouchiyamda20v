# AGENTS.md — read this first (Codex, Claude Code, Cursor, Antigravity, humans)

Project: Yamada Udon EC/DX Vision 2.6.4 — Proposal Showcase. Owner: Shashi (情報企画部). Draft v0.1, 2026-11-20.

## Goal now (Phase P)
Win management approval (経営承認) for the next stage. The site is a showcase, not a live shop. Phase C (real shop) starts only after approval.

## Start of every session
1. Read this file, then docs/blueprints/README.md and the blueprint for your task.
2. Read docs/TASKS.md. Take only a task that is free; write your tool name as owner and your branch name.
3. If HANDOFF.md / MASTER.md exist on your branch, read them. (They currently live on PR #2's branch.)

## Working rules
- One task, one branch, one owner. Never edit files another open task owns.
- Branch names: `<tool>/<slice>-<short-name>`, e.g. `codex/s1-decision-centre`.
- Every change goes by pull request. Build and tests must pass. A different tool or person reviews. No tool merges its own PR. Nobody merges without Shashi's yes.
- Do not start work that a blueprint marks as blocked or that needs an open decision.
- End of every session: update docs/TASKS.md (status), HANDOFF and CHANGELOG if present, and note anything you could not verify.
- Never type, store or commit passwords, keys, card numbers or customer data.

## Guardrails (all tools)
- No prices, real product names, photos, logos, legal text, sales figures or unverified claims until Shashi approves them and supplies originals.
- No third-party or stock images. Other companies' images are mood reference only.
- No internal figures in the public repo (e.g. ¥11.86M, HrP/HrQ).
- Customer wording is 第N弾, never 「バッチ」.
- Demos and mocks are always visibly labelled (試作 / DEMO). Never build a lookalike login or payment form.
- noindex is not authentication. Internal content needs Vercel Deployment Protection before it goes online.
- Motion over 5 s needs Pause; always Skip; honour reduced motion; no new animation library; no hard-coded colours (use tokens; check a variable exists before using it).
- Page codes are WEB-xx. W01–W10 and P01–P12 are business codes (wheels, revenue programmes) only.

## Claims on hold (unsourced — do not publish)
年248万食 · 昭和十年創業 · 入間工場 −18℃ · 湯煎8分 · 一番人気 · 81.7% mobile · 変わらないおいしさ · 冷凍でお届け · 手でつくる · 埼玉のソウルフード

## Stack
Next.js 16.4.2 App Router, TypeScript, Tailwind 4, pnpm, Vercel. Storefront styles scoped `.shop` (app/(shop)/shop.css); proposal uses globals.css. Cross-zone links are plain `<a>`. Catalogue data: content/shop.json via lib/shop.ts.

## Language
Documents: Japanese main text with furigana on key words, English beneath. Public-page language behaviour is an open decision (REC-05).

## Who decides
Shashi. Tools propose; they do not decide open items (see MASTER section 15 and v3.1 V3-Q1..Q6).
