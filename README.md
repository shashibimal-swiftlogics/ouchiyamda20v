# Yamada Udon — Vision 2.6.2

Bilingual management presentation using Next.js App Router, TypeScript and Tailwind CSS. Updates the existing shashibimal-swiftlogics/ouchiyamda20v repository and Vercel project.

## Development

Node 24.x; pnpm 11.25.0. Run `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm test`, `pnpm check`, `pnpm build`, `pnpm start`.
On restricted Windows environments: `pnpm install --frozen-lockfile --store-dir .pnpm-store --node-linker=hoisted`.

## Pages

- `/`: overview and connected plan map
- `/capabilities/W01` through W10: permanent capabilities
- `/engines/P01` through P12: revenue paths
- `/products/L0` through L3: product lines
- `/projects/PJ-OY2-01` through PJ-OY2-10: execution proposals
- `/roadmap`: three phases and separate gate systems
- `/decisions`: source-era open items and assumption-only contribution calculator
- `/evidence`: source references, confidence taxonomy and limitations

Directories support bilingual search and status filters. Mobile navigation, keyboard focus, skip link, English visibility toggle and bilingual print styles are included. No external fonts or image services are required.

## Sources and public content

The supplied Vision 2.6.2 All-in-One Master Plan (19 October 2026): official names pp.6–8, roadmap and financial definitions p.29, management decisions p.32. Operating descriptions also draw on Poster Review Draft v1.0. `content/vision.json` holds curated summaries. Page references identify the internal original; PDFs and internal financial figures are not published.

All programme states remain proposals, research or future concepts. No corporate approvals, live integrations or actual results are implied. Open decisions are source-era records, not live approval records. The calculator uses browser memory only; inputs are not saved or transmitted. `noindex` is not authentication. Do not add confidential content without appropriate access controls.

## Vercel repair

Deployment FesQYit3gKKCprAVpXi3858zacDp at commit 7421658 failed because Vercel expected `public` while the old build emitted `dist`. `vercel.json` explicitly selects Next.js, `pnpm build`, a frozen lockfile and `.next` output. Node is pinned to 24.x. No replacement repository or Vercel project is required.

The former vanilla-JavaScript demo remains in Git history. Its automatic internal-content fallback is removed from the production build.

See docs/content-workflow.md and docs/verification.md.
