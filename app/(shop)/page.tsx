import Link from 'next/link';
import { isProposalMode, productsIn, shop, visibleProducts } from '../../lib/shop';
import { PhotoFrame, Pill, SectionHead, T } from '../../components/shop/parts';

export default function Landing() {
  const on = shop.sections;
  const batch = shop.batches[0];
  const products = visibleProducts();
  return (
    <>
      {/* LP-04 hero */}
      <section className="s-hero">
        <div>
          <p className="s-kicker">おうち山田うどん</p>
          <h1><T t={shop.hero.title} /></h1>
          <p className="s-lead"><T t={shop.hero.text} /></p>
          <div className="s-actions">
            <Link className="s-btn s-btn-primary" href="/new"><T t={shop.hero.primary} /></Link>
            <Link className="s-btn" href="/#categories"><T t={shop.hero.secondary} /></Link>
          </div>
        </div>
        <PhotoFrame label="メイン写真の枠（原本の写真が届くまで空欄）" tall />
      </section>

      {/* LP-05 quick shopping actions */}
      {on.quick && (
        <section className="s-quick" aria-label="かんたんリンク">
          <Link href="/new">新商品<span className="s-en" lang="en">New products</span></Link>
          <Link href="/products">商品一覧<span className="s-en" lang="en">All products</span></Link>
          <Link href="/#categories">カテゴリー<span className="s-en" lang="en">Categories</span></Link>
          <Link href="/guide">ご利用ガイド<span className="s-en" lang="en">Shopping guide</span></Link>
        </section>
      )}

      {/* LP-06 + LP-08 (Stage A): featured area shows new products only */}
      {on.featured && (
        <section className="s-section" id="new">
          <SectionHead kicker="NEW PRODUCTS" title={{ ja: '新商品・これからの山田', en: 'New products — the next Yamada' }} lead={{ ja: '新しい山田の味を、もっと身近に。', en: 'New Yamada flavours, closer to home.' }} />
          <article className="s-batch">
            <div className="s-batch-head">
              <h3><T t={batch.label} /></h3>
              <Pill tone="soon"><T t={shop.statusLabels[batch.status]} /></Pill>
            </div>
            {products.length === 0 ? (
              <div className="s-grid s-grid-2">
                {shop.slots.map((s) => (
                  <div className="s-card" key={s.label.ja}>
                    <PhotoFrame label={s.label.ja} />
                    <h4>{s.label.ja}</h4>
                    <p className="s-muted">商品名 未定 ・ 発売日 未定<span className="s-en" lang="en">Name and launch date to be decided</span></p>
                  </div>
                ))}
              </div>
            ) : null}
            <p className="s-muted">決まり次第、お知らせします。<span className="s-en" lang="en">We will update this as soon as it is decided.</span></p>
            <p className="s-small">表示枠は予定であり、発売が承認された商品を示すものではありません。</p>
          </article>
        </section>
      )}

      {/* LP-07 six permanent categories (empty ones are marked 準備中) */}
      {on.categories && (
        <section className="s-section" id="categories">
          <SectionHead kicker="CATEGORIES" title={{ ja: 'カテゴリーから探す', en: 'Shop by category' }} />
          <ul className="s-grid s-grid-3 s-cats">
            {shop.categories.map((c) => {
              const count = productsIn(c.code).length;
              return (
                <li key={c.code}>
                  <Link href={`/c/${c.slug}`} className="s-card s-cat">
                    <span className="s-code">{c.code}</span>
                    <strong><T t={c.name} /></strong>
                    <span className="s-muted"><T t={c.intro} /></span>
                    <Pill tone={count ? 'plain' : 'soon'}>{count ? `${count}点` : '準備中'}</Pill>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* LP-09 sets & gifts: hidden until CAT-03 has a visible product (CMS flag) */}
      {on.sets && productsIn('CAT-03').length > 0 && (
        <section className="s-section"><SectionHead title={{ ja: '贈ってうれしい、山田の味。', en: 'Gifts they will enjoy' }} /></section>
      )}

      {/* LP-10 brand story */}
      {on.story && (
        <section className="s-section s-story">
          <SectionHead title={{ ja: '山田の味を、もっと身近に。', en: 'Yamada flavours, closer to you.' }} />
          <p className="s-muted"><T t={shop.story.note} /></p>
          <Link className="s-btn" href="/story">山田のこだわり<span className="s-en" lang="en">Our approach</span></Link>
        </section>
      )}

      {/* LP-12 proposal entrance: proposal mode only; removed (or login-gated) when the shop goes live */}
      {isProposalMode && on.proposal && (
        <section className="s-section s-proposal" id="proposal">
          <SectionHead kicker="FOR MANAGEMENT" title={{ ja: 'おうち山田うどんの、これから。', en: 'The road ahead for Ouchi Yamada' }} lead={{ ja: '経営検討用のプロジェクト提案と、改善の記録です。', en: 'The management proposal and improvement record.' }} />
          <ul className="s-links">
            {shop.proposalLinks.map((l) => (
              <li key={l.href}><a href={l.href}><T t={l.title} /></a></li>
            ))}
          </ul>
        </section>
      )}

      {/* LP-13 news & guidance */}
      {on.guidance && (
        <section className="s-section">
          <SectionHead kicker="GUIDE" title={{ ja: 'お知らせ・ご利用案内', en: 'News and shopping guide' }} />
          <ul className="s-links">
            {shop.guide.map((g) => (
              <li key={g.slug}><Link href="/guide"><T t={g.title} /> <Pill tone="soon">準備中</Pill></Link></li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
