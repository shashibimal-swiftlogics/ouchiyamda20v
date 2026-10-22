# T-002 Stronger content guard in the validator
Owner: Codex
Status: ready
Depends on: T-001
Source: Blueprint Vision 2.6.2 §2 (naming standard), §7 (check.py list)

## Goal
The build refuses content that breaks the naming standard, so planners' mistakes are caught before review.

## Do
- In `scripts/validate.mjs` add checks, each with a test in `scripts/content.test.mjs`:
  1. Unit `links` must not point to the unit itself.
  2. A page's `chapter` must be unique.
  3. `nickname` must differ from the official `name` (a nickname is never the title).
  4. A `{漢字|かな}` ruby marker must be well-formed (no empty parts, no nested braces).
  5. No `http://` links inside content (https only).
- Error messages say what to fix and where (ID and field).

## Do not
- Touch `src/app.js` or `src/style.css` (T-003 / T-004 work there).
- Relax any existing check.

## Done when
- New tests fail on bad samples and pass on `src/content.example.json`.
