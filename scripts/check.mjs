import { readFile, access } from 'node:fs/promises';
import { validate } from './validate.mjs';

const files = ['src/content.example.json'];
try { await access('internal/content.json'); files.push('internal/content.json'); } catch {}
for (const f of files) {
  const ids = validate(JSON.parse(await readFile(f, 'utf8')));
  console.log(`${f}: ${ids.size} destinations valid.`);
}
