import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productsIn, shop } from '../../../../lib/shop';
import { Pill, SectionHead, T } from '../../../../components/shop/parts';

export const dynamicParams = false;
export function generateStaticParams() {
  return shop.categories.map((c) => ({ cat: c.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const c = shop.categories.find((x) => x.slug === cat);
  return { title: c ? c.name.ja : 'カテゴリー' };
}

export default async function Category({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = shop.categories.find((x) => x.slug === cat);
  if (!c) notFound();
  const items = productsIn(c.code);
  return (
    <div className="s-page">
      <p className="s-small"><Link href="/">トップ</Link> / {c.code}</p>
      <SectionHead kicker={c.code} title={c.name} lead={c.intro} />
      {items.length === 0 ? (
        <p><Pill tone="soon">準備中</Pill> このカテゴリーの商品は、準備ができ次第掲載します。<span className="s-en" lang="en">Products will be listed here when ready.</span></p>
      ) : (
        <ul className="s-grid s-grid-3">
          {items.map((p) => (
            <li key={p.slug}><Link className="s-card" href={`/p/${p.slug}`}>{p.name?.ja ?? '商品名 未定'}</Link></li>
          ))}
        </ul>
      )}
      <p><Link href="/#categories">← カテゴリー一覧</Link></p>
    </div>
  );
}
