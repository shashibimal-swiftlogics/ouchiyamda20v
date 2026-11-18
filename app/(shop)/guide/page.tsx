import type { Metadata } from 'next';
import Link from 'next/link';
import { shop } from '../../../lib/shop';
import { Pill, SectionHead, T } from '../../../components/shop/parts';

export const metadata: Metadata = { title: 'ご利用ガイド' };

export default function Guide() {
  return (
    <div className="s-page">
      <SectionHead kicker="GUIDE" title={{ ja: 'ご利用ガイド', en: 'Shopping guide' }} lead={{ ja: '内容は確認・承認後に掲載します。法律上の表記は、法務の確認前には掲載しません。', en: 'Content will be added after review. Legal notices are not published before legal approval.' }} />
      <ul className="s-links">
        {shop.guide.map((g) => (
          <li key={g.slug}><span><T t={g.title} /></span> <Pill tone="soon">準備中</Pill></li>
        ))}
      </ul>
      <p><Link href="/">← トップへ</Link></p>
    </div>
  );
}
