# T-004 Site search (client-side)
Owner: Claude Code
Status: ready
Depends on: T-003
Source: Blueprint Vision 2.6.2 §3 (site map); WEB AUDIT lesson (no search box)

## Goal
A reader types 「送料」, "freight", "P07" or a nickname and jumps to the right unit or page.

## Do
- Build a small index at load time from `content.json` (codes, names, nicknames, explainers, page titles, briefs). Match Japanese and English, ignore ruby markup, case-insensitive.
- Search box in the header; results list with code, official name and one line; Enter opens the first result; Esc clears.
- Accessible: label, `aria-live` result count, works with keyboard only.

## Do not
- Add a search library or any server.

## Done when
- Searching 「会社にも売る」, "B2B", "W05" each finds the right unit. Screenshots desktop and phone.
