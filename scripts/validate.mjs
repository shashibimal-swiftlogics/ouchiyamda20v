// Content validation for the Vision 2.6.2 explainer.
// Rules come from the Vision 2.6.2 standard: five-field names, bilingual text,
// five evidence tags, valid links, stable lowercase IDs.

export const TAGS = ['FACT', 'EXT', 'ASSUMPTION', 'PROPOSED', 'UNCONFIRMED'];
const STATUS = ['done', 'old', 'todo'];
const BLOCKS = ['p', 'h', 'note', 'table', 'journey', 'groups'];

const fail = (msg) => { throw new Error(msg); };
const bi = (v, where) => {
  if (!v || typeof v.ja !== 'string' || typeof v.en !== 'string' || !v.ja.trim() || !v.en.trim()) fail(`Missing Japanese or English text: ${where}`);
};
const stripRuby = (s) => s.replace(/\{([^{}|]+)\|([^{}|]+)\}/g, '$1');

export function validate(data) {
  if (!data || data.version !== 'Vision 2.6.2') fail('Content must declare version "Vision 2.6.2".');
  for (const k of ['title', 'audience', 'status', 'mode']) bi(data[k], k);
  for (const tag of TAGS) bi(data.tags?.[tag], `tags.${tag}`);
  if (!Array.isArray(data.groups) || !Array.isArray(data.pages)) fail('groups and pages are required.');

  const ids = new Set();
  const add = (id) => {
    if (!/^[a-z0-9-]+$/.test(id) || ids.has(id)) fail(`Invalid or duplicate ID: ${id}`);
    ids.add(id);
  };

  const units = [];
  for (const g of data.groups) {
    add(g.id); bi(g.title, `${g.id}.title`); bi(g.intro, `${g.id}.intro`);
    for (const u of g.items) {
      add(u.id);
      if (!/^[WP]\d{2}$/.test(u.code) || u.id !== u.code.toLowerCase()) fail(`Invalid unit code: ${u.code}`);
      // Five fields: code, ja name, en name, ja explainer, en explainer.
      bi(u.name, `${u.code}.name`); bi(u.explain, `${u.code}.explain`);
      bi(u.pro, `${u.code}.pro`);
      if (u.nickname) bi(u.nickname, `${u.code}.nickname`);
      if (u.simple) bi(u.simple, `${u.code}.simple`);
      if (!STATUS.includes(u.status)) fail(`Invalid status for ${u.code}: ${u.status}`);
      units.push(u);
    }
  }
  for (const u of units) for (const l of u.links || []) if (!ids.has(l)) fail(`${u.code} links to unknown unit: ${l}`);

  for (const page of data.pages) {
    add(page.id); bi(page.title, `${page.id}.title`); bi(page.brief, `${page.id}.brief`);
    for (const [i, b] of (page.blocks || []).entries()) {
      const where = `${page.id}.blocks[${i}]`;
      if (!BLOCKS.includes(b.type)) fail(`Unknown block type at ${where}: ${b.type}`);
      if (['p', 'h', 'note'].includes(b.type)) bi(b.text, where);
      if (b.type === 'table') {
        b.head.forEach((h, j) => bi(h, `${where}.head[${j}]`));
        b.rows.forEach((row, r) => {
          if (row.length !== b.head.length) fail(`Row length mismatch at ${where}.rows[${r}]`);
          row.forEach((cell, j) => {
            bi(cell, `${where}.rows[${r}][${j}]`);
            if (cell.tag && !TAGS.includes(cell.tag)) fail(`Unknown tag "${cell.tag}" at ${where}`);
            // Yen and percentage figures must carry an evidence tag.
            const text = stripRuby(cell.ja);
            if (/\d[\d,.]*\s*(万|億|兆)?\s*(円|%|％)/.test(text) && !cell.tag) fail(`Untagged figure "${text}" at ${where}.rows[${r}][${j}]`);
          });
        });
      }
    }
  }
  if (data.pages[0]?.id !== 'home') fail('The first page must be "home".');
  return ids;
}
