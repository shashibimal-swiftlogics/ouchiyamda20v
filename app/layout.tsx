import type { ReactNode } from 'react';

// Root layout: html/body only. The storefront (app/(shop)) and the management
// proposal (app/proposal) each bring their own layout and stylesheet.
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
