# Ouchi Yamada 2.0 Project Explanation Website — Vision 2.6.2

A bilingual (Japanese first, English beneath) website that explains the Yamada Udon EC & Digital Growth plan to executives, directors and division heads, following the Vision 2.6.2 structure: W01–W10 (how we run), P01–P12 (where we earn), L0–L3 (what we sell), PJ (what we do now).

Builders: see `docs/COLLABORATION.md` (branches, rules, content model) and `docs/STATUS.md` (latest handover).

## Project status

Framework and content structure are ready for development. The demonstration content is a generic planning example. It is not an approved company plan, actual performance report or evidence of project completion.

## Develop

Use Node.js 20 or later. No external packages are required.

- `npm run check` validates navigation, IDs and content.
- `npm test` verifies content validation and missing-content handling.
- `npm run build` produces the website in `dist/`.
- Serve `dist/` with a local static server to review the result.

## Content

`src/content.example.json` is the public demonstration. For the internal site, use a reviewed `internal/content.json` with the same structure. The build uses this internal file when present and labels its output accordingly. Internal content is excluded from Git, as are generated pages.

Content is a list of W/P units (five-field names, simple and professional layers, links, package status) and chapter pages (one-minute why, tables with evidence tags). The validator rejects missing English, unknown tags and untagged ¥/% figures.

The framework is file-based. It does not store comments, approve decisions, connect to customer systems or collect personal data. A future authenticated content editor requires a separate specification.

## Access and publishing

This repository is public. Do not commit internal company documents, financial information, personal data or credentials. Build internal content only in an authorized environment and publish its output to an access-controlled site. Do not enable public GitHub Pages for internal content. Repository visibility and site access are separate controls.

## Planning documents

Detailed company blueprints and source documents are maintained separately until the content-storage and access approach is confirmed. `docs/content-workflow.md` describes review and editing.

## Deploy (Vercel)

`vercel.json` builds with `npm run build` into `dist/` and sends a `noindex` header. Before any internal content is deployed, enable **Settings → Deployment Protection → All Deployments** with Vercel Authentication (available on every plan).
