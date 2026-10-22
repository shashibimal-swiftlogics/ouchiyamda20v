import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../content/vision.json',import.meta.url)));
test('complete canonical sequences and unique codes',()=>{
 assert.deepEqual(data.units.map(x=>x.id),[...Array.from({length:10},(_,i)=>`W${String(i+1).padStart(2,'0')}`),...Array.from({length:12},(_,i)=>`P${String(i+1).padStart(2,'0')}`)]);
 assert.deepEqual(data.lines.map(x=>x.id),['L0','L1','L2','L3']);
 assert.deepEqual(data.projects.map(x=>x.id),Array.from({length:10},(_,i)=>`PJ-OY2-${String(i+1).padStart(2,'0')}`));
 assert.equal(new Set([...data.units,...data.lines,...data.projects].map(x=>x.id)).size,36);
});
test('bilingual content, references, proposal labels and cross-links',()=>{
 const ids=new Set(data.units.map(x=>x.id));
 for(const x of [...data.units,...data.lines,...data.projects]){
  for(const key of ['ja','en','simpleJa','simpleEn'])assert.ok(x[key]?.trim(),`${x.id}: ${key}`);
  assert.ok(x.page>=1&&x.page<=124);
  for(const id of x.related)assert.ok(ids.has(id),`${x.id} -> ${id}`);
  assert.ok(['PROPOSED','RESEARCH','FUTURE'].includes(x.status));
 }
 for(const x of data.units){assert.ok(x.professionalJa);assert.ok(x.professionalEn);}
});
test('critical canonical labels and future maturity',()=>{
 assert.equal(data.units.find(x=>x.id==='W08').en,'Yamada AI Data Hub');
 assert.equal(data.lines.find(x=>x.id==='L3').ja,'新商品');
 for(const id of ['P11','P12'])assert.equal(data.units.find(x=>x.id===id).status,'FUTURE');
});
test('deployment output matches the Next.js build',()=>{
 const v=JSON.parse(readFileSync(new URL('../vercel.json',import.meta.url)));
 const p=JSON.parse(readFileSync(new URL('../package.json',import.meta.url)));
 assert.equal(v.framework,'nextjs');assert.equal(v.outputDirectory,'.next');assert.equal(p.scripts.build,'next build');
});
