// Vision 2.6.2 explainer — renders content.json with hash routing.
// Japanese first, English beneath. {漢字|かな} becomes <ruby>.
const main = document.querySelector('main');
const nav = document.querySelector('#nav');
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ruby = (s) => esc(s).replace(/\{([^{}|]+)\|([^{}|]+)\}/g, '<ruby>$1<rt>$2</rt></ruby>');
const plain = (s) => String(s ?? '').replace(/\{([^{}|]+)\|([^{}|]+)\}/g, '$1');
const ja = (v) => ruby(v?.ja);
const en = (v) => esc(v?.en);
const bi = (v, tag = 'p', cls = '') => `<${tag} class="ja ${cls}">${ja(v)}</${tag}><${tag} class="en ${cls}">${en(v)}</${tag}>`;
const link = (id, label, cls = '') => `<a class="${cls}" href="#${esc(id)}">${label}</a>`;
const STATUS = { done: ['資料あり', 'Package ready', 'st-done'], old: ['旧版のみ', 'Old version only', 'st-old'], todo: ['準備中', 'In preparation', 'st-todo'] };
let data, units = [], order = [];

const tagPill = (tag) => tag ? `<span class="tag tag-${esc(tag.toLowerCase())}" title="${esc(data.tags[tag]?.en)}">${esc(tag)}</span>` : '';
const statusPill = (s) => { const [j, e, c] = STATUS[s] || STATUS.todo; return `<span class="pill ${c}">${j} · ${e}</span>`; };

function cell(cl, head) {
  const tag = cl.tag ? ` ${tagPill(cl.tag)}` : '';
  const second = cl.en && cl.en !== cl.ja ? `<span class="en">${en(cl)}</span>` : '';
  return `<${head ? 'th' : 'td'}><span class="ja">${ja(cl)}</span>${tag}${second}</${head ? 'th' : 'td'}>`;
}

function unitCard(u) {
  return `<a class="card card-${u.code[0].toLowerCase()}" href="#${esc(u.id)}"><span class="code">${esc(u.code)}</span><span class="name ja">${ja(u.name)}</span><span class="name en">${en(u.name)}</span><span class="explain">${ja(u.explain)}</span>${statusPill(u.status)}</a>`;
}

function blocks(list) {
  return (list || []).map(b => {
    if (b.type === 'p') return `<div class="para">${bi(b.text)}</div>`;
    if (b.type === 'h') return `<h2>${ja(b.text)}<span class="en sub">${en(b.text)}</span></h2>`;
    if (b.type === 'note') return `<div class="note ${b.kind === 'warn' ? 'warn' : ''}">${bi(b.text)}</div>`;
    if (b.type === 'table') return `<div class="scroll"><table><thead><tr>${b.head.map(h => cell(h, true)).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(x => cell(x)).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (b.type === 'journey') return `<ol class="journey">${b.steps.map((s, i) => `<li><b>${i + 1}</b><span class="ja">${ja(s)}</span><span class="en">${en(s)}</span></li>`).join('')}</ol>`;
    if (b.type === 'groups') return data.groups.map(g => `<section class="group"><h2>${esc(g.code)} ${ja(g.title)}<span class="en sub">${en(g.title)}</span></h2>${bi(g.intro)}<div class="cards">${g.items.map(unitCard).join('')}</div></section>`).join('');
    return '';
  }).join('');
}

function pager(id) {
  const i = order.indexOf(id);
  const prev = i > 0 ? order[i - 1] : null, next = i >= 0 && i < order.length - 1 ? order[i + 1] : null;
  const label = (x) => { const pg = data.pages.find(p => p.id === x); const u = units.find(u => u.id === x); const g = data.groups.find(g => g.id === x); return pg ? `${esc(pg.chapter)} ${ja(pg.title)}` : u ? `${esc(u.code)} ${ja(u.name)}` : g ? `${esc(g.code)} ${ja(g.title)}` : x; };
  return `<nav class="pager" aria-label="前後のページ / Page navigation">${prev ? link(prev, '← ' + label(prev)) : '<span></span>'}${link('home', '目次 Index')}${next ? link(next, label(next) + ' →') : '<span></span>'}</nav>`;
}

function renderUnit(u, group) {
  const linked = (u.links || []).map(id => units.find(x => x.id === id)).filter(Boolean);
  const pj = group.id === 'p' ? `<p class="meta">段階（だんかい） Phase: ${esc(u.phase)}</p>` : '';
  return `<div class="eyebrow"><a href="#${group.id}">${esc(group.code)} ${ja(group.title)}</a></div>
  <header class="fivefield">
    <span class="code big">${esc(u.code)}</span>
    <h1 class="ja">${ja(u.name)}</h1><p class="en title-en">${en(u.name)}</p>
    <p class="ja explain">${ja(u.explain)}</p><p class="en">${en(u.explain)}</p>
    <p class="nick">やさしい呼び名 Easy name：${ja(u.nickname)} / ${en(u.nickname)}</p>
    ${statusPill(u.status)}
  </header>
  <section class="layer simple"><h2>かんたん説明<span class="en sub">Simple explanation</span></h2>${u.simple ? bi(u.simple) : `<p class="ja todo">2〜3文のかんたん説明は、このユニットの資料（4ページ版・1ページ版）から追加予定です。</p><p class="en todo">The two-to-three-sentence simple explanation will be added from this unit's 4-page and 1-page explainers.</p>`}</section>
  <section class="layer pro"><h2>プロの説明<span class="en sub">Professional explanation</span></h2>${bi(u.pro)}${pj}</section>
  ${linked.length ? `<section><h2>つながり<span class="en sub">Linked units</span></h2><div class="cards">${linked.map(unitCard).join('')}</div></section>` : ''}
  ${pager(u.id)}`;
}

function render() {
  const id = decodeURIComponent(location.hash.slice(1)) || 'home';
  document.querySelectorAll('[aria-current]').forEach(x => x.removeAttribute('aria-current'));
  nav.querySelector(`a[href="#${CSS.escape(id)}"]`)?.setAttribute('aria-current', 'page');
  const page = data.pages.find(p => p.id === id);
  const group = data.groups.find(g => g.id === id);
  const u = units.find(x => x.id === id);
  let title;
  if (page) {
    title = plain(page.title.ja);
    main.innerHTML = `<div class="eyebrow">${esc(page.chapter)} · ${esc(data.version)}</div><h1>${ja(page.title)}</h1><p class="en title-en">${en(page.title)}</p>
      <div class="statusline"><span class="pill st-prop">${ja(data.status)} · ${en(data.status)}</span><span class="pill st-mode">${ja(data.mode)}</span></div>
      <section class="brief"><h2>1分でわかる・なぜ<span class="en sub">One-minute why</span></h2>${bi(page.brief)}</section>${blocks(page.blocks)}${page.id === 'home' ? legend() : ''}${pager(page.id)}`;
  } else if (group) {
    title = plain(group.title.ja);
    main.innerHTML = `<div class="eyebrow">${esc(group.code)}</div><h1>${ja(group.title)}</h1><p class="en title-en">${en(group.title)}</p>${bi(group.intro)}<div class="cards">${group.items.map(unitCard).join('')}</div>${pager(group.id)}`;
  } else if (u) {
    title = `${u.code} ${plain(u.name.ja)}`;
    main.innerHTML = renderUnit(u, data.groups.find(g => g.items.includes(u)));
  } else {
    title = 'Not found';
    main.innerHTML = `<h1>ページが見つかりません</h1><p class="en">Page not found.</p>${link('home', '目次へ / Go to index', 'button')}`;
  }
  document.title = `${title} · ${plain(data.title.ja)}`;
}

function legend() {
  return `<section><h2>数字の見方（区分）<span class="en sub">How to read the tags</span></h2><dl class="legend">${Object.entries(data.tags).map(([k, v]) => `<dt>${tagPill(k)}</dt><dd><span class="ja">${ja(v)}</span><span class="en">${en(v)}</span></dd>`).join('')}</dl></section>`;
}

function buildNav() {
  const pageLink = (p) => link(p.id, `<span class="num">${esc(p.chapter)}</span>${ja(p.title)}`);
  const before = data.pages.filter(p => ['home', 'why', 'structure'].includes(p.id));
  const after = data.pages.filter(p => !['home', 'why', 'structure'].includes(p.id));
  nav.innerHTML = `<details class="mnav"${matchMedia('(min-width: 801px)').matches ? ' open' : ''}><summary class="eyebrow">目次 CONTENTS</summary>${before.map(pageLink).join('')}
  ${data.groups.map(g => `<details><summary>${link(g.id, `<span class="num">${esc(g.code.slice(0, 1))}</span>${ja(g.title)}`)}</summary>${g.items.map(u => link(u.id, `<span class="num">${esc(u.code)}</span>${ja(u.name)}`)).join('')}</details>`).join('')}
  ${after.map(pageLink).join('')}</details>`;
  order = [...before.map(p => p.id), ...data.groups.flatMap(g => [g.id, ...g.items.map(u => u.id)]), ...after.map(p => p.id)];
}

fetch('content.json').then(r => { if (!r.ok) throw new Error('Content unavailable'); return r.json(); }).then(d => {
  data = d;
  units = data.groups.flatMap(g => g.items);
  document.querySelector('.brand-title').innerHTML = ja(data.title);
  buildNav();
  render();
  addEventListener('hashchange', () => { render(); main.focus(); scrollTo({ top: 0, behavior: 'instant' }); });
}).catch(() => { main.innerHTML = '<h1>内容を読み込めませんでした</h1><p class="en">Project content could not load. Reload the page or ask the site owner to check the release.</p>'; });

// Theme toggle (per-viewer convenience only).
(() => {
  const root = document.documentElement;
  try { const s = localStorage.getItem('oy-theme'); if (s === 'light' || s === 'dark') root.dataset.theme = s; } catch {}
  document.getElementById('theme')?.addEventListener('click', () => {
    const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.dataset.theme = cur === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('oy-theme', root.dataset.theme); } catch {}
  });
})();
