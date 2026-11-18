import Link from 'next/link';
import type { ReactNode } from 'react';
import { isProposalMode, shop } from '../../lib/shop';
import { LangToggle } from './lang-toggle';
import { T } from './parts';

const nav = [
  { href: '/new', ja: '新商品', en: 'New' },
  { href: '/products', ja: '商品一覧', en: 'All products' },
  { href: '/#categories', ja: 'カテゴリー', en: 'Categories' },
  { href: '/guide', ja: 'ご利用ガイド', en: 'Guide' },
  { href: '/story', ja: '山田のこだわり', en: 'Our approach' },
];

export function ShopShell({ children }: { children: ReactNode }) {
  return (
    <div className="shop" data-en="off">
      <a className="s-skip" href="#main">本文へ</a>
      {/* LP-01 announcement bar: the prototype notice is always visible in proposal mode */}
      {isProposalMode && (
        <div className="s-announce" role="note">
          <span><T t={shop.announcement} /></span>
          <a href="/proposal">提案に戻る<span className="s-en" lang="en">Back to the proposal</span></a>
        </div>
      )}
      {/* LP-02 header: search, account and cart are inactive in Stage A */}
      <header className="s-header">
        <Link href="/" className="s-brand">
          <span className="s-mark" aria-hidden="true">山</span>
          <span>おうち山田うどん<small>YAMADA UDON ONLINE</small></span>
        </Link>
        <div className="s-tools">
          <label className="s-search">
            <span className="s-sr">商品を検索</span>
            <input type="search" disabled placeholder="商品を検索（準備中）" />
          </label>
          <button type="button" disabled className="s-tool">アカウント<small>準備中</small></button>
          <button type="button" disabled className="s-tool">カート<small>準備中</small></button>
          <LangToggle />
        </div>
      </header>
      {/* LP-03 navigation: only routes that exist; categories shown on the landing page grid */}
      <nav className="s-nav" aria-label="メインナビゲーション">
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>{n.ja}<span className="s-en" lang="en">{n.en}</span></Link>
            </li>
          ))}
          {isProposalMode && shop.sections.proposal && (
            <li className="s-nav-proposal"><a href="/proposal">EC 2.6 プロジェクト提案<span className="s-en" lang="en">EC 2.6 project proposal</span></a></li>
          )}
        </ul>
      </nav>
      <main id="main" tabIndex={-1}>{children}</main>
      {/* LP-14 footer */}
      <footer className="s-footer">
        <div>
          <strong>おうち山田うどん</strong>
          <p>山田食品産業株式会社</p>
          <p className="s-small">お問い合わせ・各種ポリシーは、内容の確認・承認後に掲載します。</p>
        </div>
        <ul>
          {shop.guide.map((g) => (
            <li key={g.slug}><Link href="/guide">{g.title.ja}</Link></li>
          ))}
        </ul>
        {isProposalMode && <p className="s-small">試作画面です。画像・価格・商品名は実在の商品を示すものではありません。</p>}
      </footer>
      {/* Phone tab bar (no gift / member tabs until those exist) */}
      <nav className="s-tabbar" aria-label="スマートフォン用ナビゲーション">
        <Link href="/">ホーム</Link>
        <Link href="/products">商品一覧</Link>
        <Link href="/new">新商品</Link>
        <Link href="/guide">ガイド</Link>
      </nav>
    </div>
  );
}
