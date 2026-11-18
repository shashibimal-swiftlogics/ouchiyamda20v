import type { Metadata } from 'next';
import Link from 'next/link';
import { shop } from '../../../lib/shop';
import { SectionHead, T } from '../../../components/shop/parts';

export const metadata: Metadata = { title: '山田のこだわり' };

export default function Story() {
  return (
    <div className="s-page">
      <SectionHead kicker="OUR APPROACH" title={shop.story.title} />
      <p><T t={shop.story.note} /></p>
      <p><Link href="/">← トップへ</Link></p>
    </div>
  );
}
