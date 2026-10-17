// Fails if anything that looks like a phone number ends up in the source or the built site.
// Usage: npm run check:pii   (runs automatically in CI before deploy)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { execFileSync } from 'node:child_process';

const roots = ['src', 'public', 'dist'];
const textExt = new Set(['.astro', '.ts', '.js', '.mjs', '.md', '.mdx', '.html', '.xml', '.txt', '.json', '.css']);
// US (xxx-xxx-xxxx, (xxx) xxx-xxxx, +1 ...) and Indian (+91 / 10-digit mobile) formats.
const phone = /(\+?1[\s.-]?)?\(?\b[2-9]\d{2}\)?[\s.-]\d{3}[\s.-]\d{4}\b|\+91[\s-]?\d{5}[\s-]?\d{5}|\btel:/gi;

const hits = [];
const walk = (dir) => {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (textExt.has(extname(p))) scan(p, readFileSync(p, 'utf8'));
    else if (extname(p) === '.pdf') scanPdf(p);
  }
};
const scan = (file, text) => {
  for (const m of text.matchAll(phone)) hits.push(`${file}: "${m[0].trim()}"`);
};
const scanPdf = (file) => {
  try { scan(file, execFileSync('pdftotext', [file, '-'], { encoding: 'utf8' })); }
  catch { /* pdftotext not installed: PDFs are compressed, so fall back to raw bytes */ scan(file, readFileSync(file, 'latin1')); }
};

roots.forEach(walk);
if (hits.length) {
  console.error('✖ Possible phone numbers found:\n  ' + hits.join('\n  '));
  process.exit(1);
}
console.log('✔ No phone numbers found in', roots.join(', '));
