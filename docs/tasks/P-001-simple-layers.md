# P-001 Write the simple layer for the 9 finished units (planners)
Owner: Planner (Claude + GPT)
Status: ready
Depends on: none
Source: unit packages W08, W09, P01, P02, P03, P05, P06, P07, P08 (4-page and 1-page explainers)

## Goal
Each finished unit gets its 2–3 sentence `simple` text (JA + EN, everyday comparison, no new numbers).

## Deliver
- One JSON patch per unit: `{ "id": "p07", "simple": { "ja": "...", "en": "..." } }`, attached to a task for a builder to apply (public-safe wording only).
