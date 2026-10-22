# Verification — 22 October 2026

- Original Vercel failure inspected: expected public output, while the previous build generated dist.
- Next.js production build: successful, 46 generated pages including framework routes.
- TypeScript no-emit check: passed.
- Four content/configuration tests: passed (canonical counts, bilingual content, status and references, cross-links, deployment output).
- HTTP smoke check: all 44 application routes returned 200 with a main heading; three invalid/cross-group routes returned 404.
- Desktop browser: inspected home layout, directory search (W08 produced 1/10), detail page, bilingual toggle and navigation.
- Calculator: sample inputs 3000, 1000, 500, 100, 100, 0, 200 produced CM I 1300 and CM II 1100; clear restored blank inputs and results. These were test assumptions, not company metrics.
- Responsive browser: inspected homepage and navigation inside a 390px-wide iframe; menu opened and closed after selecting Product lines.

No live integrations or corporate approvals were verified. Source PDFs remain outside the public repository. Full assistive-technology and real-device certification were not performed.
