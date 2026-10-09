import { mkdir, readFile, writeFile, copyFile, access } from 'node:fs/promises';
import { validate } from './validate.mjs';
let source = 'src/content.example.json';
try { await access('internal/content.json'); source = 'internal/content.json'; } catch {}
const data = JSON.parse(await readFile(source, 'utf8'));
validate(data);
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'app.js', 'style.css']) await copyFile(`src/${file}`, `dist/${file}`);
await writeFile('dist/content.json', JSON.stringify(data));
console.log(`Built ${data.phases.length} phases and 33 sections from ${source}.`);
