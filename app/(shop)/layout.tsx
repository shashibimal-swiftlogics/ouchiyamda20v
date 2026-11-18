import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ShopShell } from '../../components/shop/shell';
import './shop.css';

export const metadata: Metadata = {
  title: { default: 'おうち山田うどん | 新商品（試作）', template: '%s | おうち山田うどん（試作）' },
  description: 'おうち山田うどん 新しいオンラインストアの試作画面。注文・決済はできません。',
  robots: { index: false, follow: false },
};

export default function ShopLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <ShopShell>{children}</ShopShell>;
}
