import type { Metadata } from 'next';
import Link from 'next/link';
import { shop, visibleProducts } from '../../../lib/shop';
import { Pill, SectionHead, T } from '../../../components/shop/parts';

export const metadata: Metadata = { title: '新商品' };

export default function NewProducts() {
  const products = visibleProducts().filter((p) => p.lineage === 'new');
  return (
    <div className="s-page">
      <SectionHead kicker="NEW PRODUCTS" title={{ ja: '新商品', en: 'New products' }} lead={{ ja: '新しい山田の味を、発売の順にご紹介します。', en: 'New Yamada products, in order of release.' }} />
      {shop.batches.map((b) => {
        const items = products.filter((p) => p.batch === b.n);
        return (
          <section className="s-batch" key={b.n}>
            <div className="s-batch-head">
              <h3><T t={b.label} /></h3>
              <Pill tone="soon"><T t={shop.statusLabels[b.status]} /></Pill>
            </div>
            <p className="s-muted">発売日：{b.launchDate ?? '未定'}<span className="s-en" lang="en">Launch date: {b.launchDate ?? 'to be decided'}</span></p>
            {items.length === 0 && <p>商品は準備中です。<span className="s-en" lang="en">Products are in preparation.</span></p>}
          </section>
        );
      })}
      <p><Link href="/">← トップへ</Link></p>
    </div>
  );
}
