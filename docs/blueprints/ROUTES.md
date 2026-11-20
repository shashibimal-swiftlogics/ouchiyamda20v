# Route crosswalk (draft v0.2, 2026-11-20)
Documentation only. No route or redirect is changed by this file.

Two code states exist:
- **main** (verified in git): `/`, `/[section]`, `/[section]/[code]` (the original proposal at the root).
- **PR #2 branch feature/claude-web-01-storefront-shell** (open, not merged; reported by Claude, status to be verified on GitHub): storefront under `app/(shop)`; proposal under `/proposal`; 308 redirects from old root paths.

| Blueprint | Showcase route | Exists on main | Exists on PR #2 branch | Action when approved |
|---|---|---|---|---|
| WEB-01 | /proposal/showcase | no | no | new |
| WEB-02 | /proposal, /proposal/opportunity | / (old proposal home) | /proposal | extend; add opportunity |
| WEB-03 | /, /new, /p/[slug] | no | yes (also /c/[cat], /guide, /products, /story) | label as demo; protect |
| WEB-04 | /proposal/innovation | no | no | new |
| WEB-05 | /proposal/digital-place | no | no | new |
| WEB-06 | /proposal/capabilities, /proposal/engines | /capabilities, /engines | yes under /proposal | reuse; optional overview page |
| WEB-07 | /proposal/ai-team | no | no | new |
| WEB-08 | /proposal/roadmap (+ Future section) | /roadmap | yes | reuse; extend |
| WEB-09 | /proposal/evidence | /evidence | yes | reuse; extend; redacted by default |
| WEB-10 | /proposal/decisions | /decisions | yes | reuse; extend |
| WEB-11 | /proposal/admin-demo | no | no | new, optional |
| (existing) | /proposal/projects, /proposal/lines/[code] | /projects, /products/[code] | yes | preserve |

**Existing redirects (PR #2 branch).** capabilities, engines, projects, roadmap, decisions, evidence move to /proposal/...; /products/:code goes to /proposal/lines/:code. Redirect tests do not exist yet.

**Note on GPT v1.5.** GPT suggested /proposal/decision (singular). The existing page is /proposal/decisions, so this crosswalk keeps the existing name to avoid a duplicate route.
