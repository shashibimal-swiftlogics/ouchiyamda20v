import type { Metadata } from 'next';
import Link from 'next/link';
import { visibleProducts } from '../../../lib/shop';
import { SectionHead } from '../../../components/shop/parts';

export const metadata: Metadata = { title: '商品一覧' };

export default function Products() {
  const items = visibleProducts();
  return (
    <div className="s-page">
      <SectionHead kicker="ALL PRODUCTS" title={{ ja: '商品一覧', en: 'All products' }} />
      {items.length === 0 ? (
        <p>新商品を準備しています。<span className="s-en" lang="en">New products are in preparation.</span></p>
      ) : (
        <ul className="s-grid s-grid-3">
          {items.map((p) => (
            <li key={p.slug}><Link className="s-card" href={`/p/${p.slug}`}>{p.name?.ja ?? '商品名 未定'}</Link></li>
          ))}
        </ul>
      )}
      <p><Link href="/#categories">カテゴリーから探す →</Link></p>
    </div>
  );
}
