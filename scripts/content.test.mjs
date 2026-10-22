import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validate } from './validate.mjs';

const example = JSON.parse(await readFile('src/content.example.json', 'utf8'));
const units = (d) => d.groups.flatMap(g => g.items);

test('example content is valid and has 10 W and 12 P units', () => {
  validate(example);
  assert.equal(units(example).filter(u => u.code.startsWith('W')).length, 10);
  assert.equal(units(example).filter(u => u.code.startsWith('P')).length, 12);
});
test('every unit shows all five fields', () => {
  for (const u of units(example)) for (const k of ['name', 'explain']) { assert.ok(u[k].ja && u[k].en, `${u.code}.${k}`); }
});
test('duplicate destinations cannot be published', () => {
  const d = structuredClone(example); d.pages[1].id = d.pages[0].id;
  assert.throws(() => validate(d), /duplicate/);
});
test('missing English cannot be published', () => {
  const d = structuredClone(example); delete d.groups[0].items[0].name.en;
  assert.throws(() => validate(d), /Missing/);
});
test('a figure without an evidence tag cannot be published', () => {
  const d = structuredClone(example);
  d.pages[0].blocks[0].rows[0][1] = { ja: '月約90万円', en: '~¥0.9M a month' };
  assert.throws(() => validate(d), /Untagged figure/);
});
test('an unknown tag cannot be published', () => {
  const d = structuredClone(example);
  d.pages[0].blocks[0].rows[0][1] = { ja: '約2.4兆円', en: '~¥2.4T', tag: 'GUESS' };
  assert.throws(() => validate(d), /Unknown tag/);
});
test('links must point to real units', () => {
  const d = structuredClone(example); d.groups[0].items[0].links = ['p99'];
  assert.throws(() => validate(d), /unknown unit/);
});
test('public example carries no internal figures', () => {
  const text = JSON.stringify(example);
  for (const s of ['2,525', '1,100万', '41.6', '248万', 'D-19', 'D-44']) assert.ok(!text.includes(s), `found ${s}`);
});
