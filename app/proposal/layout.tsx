import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Shell } from '../../components/shell';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: '山田うどん | Vision 2.6.2', template: '%s | Yamada Vision 2.6.2' },
  description: 'Yamada Udon EC & Digital Growth — bilingual management proposal, capabilities, revenue paths and evidence.',
  robots: { index: false, follow: false },
};

export default function ProposalLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <Shell>{children}</Shell>;
}
