# Ouchi Yamada 2.0 Project Explanation Website

A website framework for explaining a three-phase project to executives, directors and division heads.

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

Every phase contains an overview and sections for models, projects, customers, operations, systems, economics, ownership, roadmap, evidence and discussions. Every section has a direct link and navigation button.

The framework is file-based. It does not store comments, approve decisions, connect to customer systems or collect personal data. A future authenticated content editor requires a separate specification.

## Access and publishing

This repository is public. Do not commit internal company documents, financial information, personal data or credentials. Build internal content only in an authorized environment and publish its output to an access-controlled site. Do not enable public GitHub Pages for internal content. Repository visibility and site access are separate controls.

## Planning documents

Detailed company blueprints and source documents are maintained separately until the content-storage and access approach is confirmed. `docs/content-workflow.md` describes review and editing.
