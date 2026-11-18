# MASTER — Yamada web (public-safe)
One codebase, one design system: proposal explainer now, EC storefront later; no framework change.

## Route map
Storefront: `/`, `/new`, `/products`, `/c/[cat]` (cat-01..06), `/p/[slug]`, `/guide`, `/story`.
Proposal: `/proposal`, `/proposal/{capabilities,engines,lines,projects,roadmap,decisions,evidence}[/code]`.
Later: `/cart /checkout /account` (Stage B), `/admin`.

## Landing sections
LP-01 announcement · 02 header · 03 nav · 04 hero · 05 quick links · 06 featured · 07 categories · 08 new-product slots · 09 hidden · 10 story · 11 reserved · 12 proposal entrance (proposal mode only) · 13 guidance · 14 footer.

## Data model
Category{code,name}; Batch{n,label,status plan|prototype|prelaunch|live,launchDate,productSlugs}; Product{slug,lineage,batch,categoryCode,visible,name,summary,price,image,status}. `mode: proposal|live` controls the prototype band and LP-12.

## Locked decisions
Direction A (storefront first); new products only in Stage A; six categories; W/P codes (no "10 Wheels/12 Engines"); S01–S10 planning steps.
