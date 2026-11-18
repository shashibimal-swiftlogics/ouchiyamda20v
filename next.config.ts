import type { NextConfig } from 'next';

// The management proposal moved under /proposal when the storefront took over "/".
// Old addresses keep working. /products (product lines) is now /proposal/lines.
const moved = ['capabilities', 'engines', 'projects', 'roadmap', 'decisions', 'evidence'];

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      ...moved.flatMap((s) => [
        { source: `/${s}`, destination: `/proposal/${s}`, permanent: true },
        { source: `/${s}/:code`, destination: `/proposal/${s}/:code`, permanent: true },
      ]),
    ];
  },
};
export default config;
