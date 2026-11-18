import type { ReactNode } from 'react';
import type { Bi as BiText } from '../../lib/shop';

export function T({ t }: { t: BiText }) {
  return (
    <>
      {t.ja}
      <span className="s-en" lang="en">{t.en}</span>
    </>
  );
}

/** Empty frame shown until original photography is approved (no stock or third-party images). */
export function PhotoFrame({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={tall ? 's-photo s-photo-tall' : 's-photo'} role="img" aria-label={label}>
      <span>写真準備中<span className="s-en" lang="en">Photo coming soon</span></span>
    </div>
  );
}

export function Pill({ children, tone = 'plain' }: { children: ReactNode; tone?: 'plain' | 'soon' }) {
  return <span className={tone === 'soon' ? 's-pill s-pill-soon' : 's-pill'}>{children}</span>;
}

export function SectionHead({ kicker, title, lead }: { kicker?: string; title: BiText; lead?: BiText }) {
  return (
    <div className="s-head">
      {kicker && <p className="s-kicker">{kicker}</p>}
      <h2><T t={title} /></h2>
      {lead && <p className="s-lead"><T t={lead} /></p>}
    </div>
  );
}
