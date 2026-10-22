import { mkdir, readFile, writeFile, copyFile, access } from 'node:fs/promises';
import { validate } from './validate.mjs';

// internal/content.json is used only when present (it is git-ignored).
let source = 'src/content.example.json';
try { await access('internal/content.json'); source = 'internal/content.json'; } catch {}
const data = JSON.parse(await readFile(source, 'utf8'));
validate(data);
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'app.js', 'style.css']) await copyFile(`src/${file}`, `dist/${file}`);
await writeFile('dist/content.json', JSON.stringify(data));
const units = data.groups.reduce((n, g) => n + g.items.length, 0);
console.log(`Built ${data.version}: ${data.pages.length} pages, ${units} W/P units from ${source}.`);
