import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validate } from './validate.mjs';
const example = JSON.parse(await readFile('src/content.example.json', 'utf8'));
test('every phase and section has a distinct destination', () => assert.equal(validate(example).size, 36));
test('duplicate destinations cannot be published', () => { const d = structuredClone(example); d.phases[1].sections[0].id = d.phases[0].sections[0].id; assert.throws(() => validate(d), /duplicate/); });
test('missing explanation content cannot be published', () => { const d = structuredClone(example); delete d.phases[0].sections[0].explanation; assert.throws(() => validate(d), /Incomplete/); });
