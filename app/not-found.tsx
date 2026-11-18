export default function NotFound() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '48px 24px', maxWidth: 640, margin: '0 auto' }}>
      <p style={{ letterSpacing: '.08em', fontSize: 13 }}>404 / NOT FOUND</p>
      <h1>ページが見つかりません</h1>
      <p>This page could not be found.</p>
      <p>
        <a href="/">トップへ / Back to the top</a> ｜ <a href="/proposal">提案 / Proposal</a>
      </p>
    </main>
  );
}
