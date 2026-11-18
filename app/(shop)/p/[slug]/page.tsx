import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isProposalMode, shop, visibleProducts } from '../../../../lib/shop';
import { PhotoFrame, Pill } from '../../../../components/shop/parts';

// Product template: one product, one canonical URL. No products are published yet,
// so no pages are generated until content/shop.json lists a visible product.
export const dynamicParams = false;
export function generateStaticParams() {
  return visibleProducts().map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = visibleProducts().find((x) => x.slug === slug);
  return { title: p?.name?.ja ?? '商品' };
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = visibleProducts().find((x) => x.slug === slug);
  if (!p) notFound();
  const cat = shop.categories.find((c) => c.code === p.categoryCode);
  return (
    <div className="s-page s-product">
      <p className="s-small"><Link href="/">トップ</Link> / <Link href={`/c/${cat?.slug}`}>{cat?.name.ja}</Link></p>
      <PhotoFrame label="商品写真の枠" tall />
      <div>
        <h1>{p.name?.ja ?? '商品名 未定'}</h1>
        <p>{p.summary?.ja ?? '商品の説明は準備中です。'}</p>
        <p>{isProposalMode || p.price === null ? '価格 未定' : `${p.price}`}</p>
        <button type="button" disabled>カートに入れる（準備中）</button>
        <Pill tone="soon">試作表示</Pill>
      </div>
    </div>
  );
}
