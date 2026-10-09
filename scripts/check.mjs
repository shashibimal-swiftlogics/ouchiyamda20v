import { readFile } from 'node:fs/promises';
import { validate } from './validate.mjs';
const data = JSON.parse(await readFile('src/content.example.json', 'utf8'));
const ids = validate(data);
console.log(`Validated ${ids.size} phase and section destinations.`);
