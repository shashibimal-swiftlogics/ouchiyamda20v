import data from '../content/shop.json';

export type Bi = { ja: string; en: string };
export type CategoryCode = 'CAT-01' | 'CAT-02' | 'CAT-03' | 'CAT-04' | 'CAT-05' | 'CAT-06';
export type BatchStatus = 'plan' | 'prototype' | 'prelaunch' | 'live';

export type Category = { code: CategoryCode; slug: string; name: Bi; intro: Bi };
export type Batch = { n: number; label: Bi; status: BatchStatus; launchDate: string | null; productSlugs: string[] };
export type Product = {
  slug: string;
  lineage: 'new' | 'existing';
  batch: number | null;
  categoryCode: CategoryCode;
  visible: boolean;
  name: Bi | null;
  summary: Bi | null;
  price: number | null; // never rendered while mode === 'proposal'
  image: string | null;
  status: 'sample' | 'confirmed';
};

export const shop = data as unknown as {
  mode: 'proposal' | 'live';
  announcement: Bi;
  hero: { title: Bi; text: Bi; primary: Bi; secondary: Bi };
  sections: Record<string, boolean>;
  slots: { label: Bi }[];
  categories: Category[];
  batches: Batch[];
  products: Product[];
  statusLabels: Record<BatchStatus, Bi>;
  guide: { slug: string; title: Bi }[];
  story: { title: Bi; note: Bi };
  proposalLinks: { href: string; title: Bi }[];
};

export const isProposalMode = shop.mode === 'proposal';

/** Products customers may see. In proposal mode only new products are shown (Shashi, 2026-11-17). */
export function visibleProducts(): Product[] {
  return shop.products.filter((p) => p.visible && (isProposalMode ? p.lineage === 'new' : true));
}

export function productsIn(code: CategoryCode): Product[] {
  return visibleProducts().filter((p) => p.categoryCode === code);
}
