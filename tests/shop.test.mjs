import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const raw=readFileSync(new URL('../content/shop.json',import.meta.url),'utf8');
const shop=JSON.parse(raw);

test('six fixed customer categories, stable codes and slugs',()=>{
 assert.deepEqual(shop.categories.map(c=>c.code),['CAT-01','CAT-02','CAT-03','CAT-04','CAT-05','CAT-06']);
 assert.deepEqual(shop.categories.map(c=>c.slug),['cat-01','cat-02','cat-03','cat-04','cat-05','cat-06']);
 for(const c of shop.categories){for(const k of ['ja','en']){assert.ok(c.name[k]);assert.ok(c.intro[k]);}}
});

test('public repo safety: no prices, third-party names or external URLs in storefront content',()=>{
 assert.ok(!/[¥￥円]|\d{1,3},\d{3}/.test(raw),'no prices');
 assert.ok(!/omen|おめん/i.test(raw),'no third-party product references');
 assert.ok(!/https?:\/\//i.test(raw),'no external URLs or images');
 for(const p of shop.products){assert.equal(p.price,null);assert.equal(p.image,null);}
});

test('customer-facing wording and proposal-mode rules',()=>{
 for(const b of shop.batches){assert.ok(!/バッチ/.test(b.label.ja));assert.match(b.label.ja,/^第\d+弾$/);assert.ok(['plan','prototype','prelaunch','live'].includes(b.status));}
 if(shop.mode==='proposal'){
  for(const p of shop.products)if(p.lineage==='existing')assert.equal(p.visible,false,'existing products stay hidden in Stage A');
  assert.ok(shop.announcement.ja.includes('試作'));
 }
 for(const c of shop.categories)assert.ok(!/新商品/.test(c.code),'new products is a collection, not a category');
});

test('proposal links point to routes that exist',()=>{
 const ok=['/proposal/capabilities','/proposal/engines','/proposal/projects','/proposal/roadmap','/proposal/decisions','/proposal/evidence','/proposal/lines'];
 for(const l of shop.proposalLinks)assert.ok(ok.includes(l.href),l.href);
});
