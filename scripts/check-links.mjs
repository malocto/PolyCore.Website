import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = ['index.html', 'features.html', 'formats.html', 'developers.html', 'pricing.html'];
const mdFiles = ['README.md', 'docs/PRODUCT-BRIEF.md', 'docs/SDK-API-CONCEPT.md', 'docs/SUPPORT.md', 'docs/LEGAL-PLACEHOLDER.md', 'docs/WEBSITE-ROADMAP.md', 'docs/FORMAT-MATRIX.md', 'docs/PLATFORM-COMPATIBILITY.md', 'docs/RELEASE-NOTES.md', 'docs/SECURITY-LICENSING.md', 'docs/ASSET-AUDIT.md'];
const stateLabels = ['state-concept', 'state-tested', 'state-internal', 'state-planned'];
const forbidden = ['released desktop', '0.4.0', 'binding terms', 'binding legal', 'EULA', 'Privacy Policy', 'Terms of Service'];

let errors = [];
let linkCount = 0;
let assetCount = 0;

function exists(rel) {
  const clean = rel.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('mailto:') || clean.startsWith('http') || clean.startsWith('//')) return true;
  return fs.existsSync(path.join(root, clean));
}

function checkLinks(file, content) {
  const re = /(?:href|src)\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(content)) !== null) {
    linkCount++;
    const target = m[1];
    if (target.startsWith('#')) continue;
    if (!exists(target)) errors.push(`${file}: broken link -> ${target}`);
    if (target.includes('assets/')) assetCount++;
  }
}

for (const f of htmlFiles) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { errors.push(`missing file: ${f}`); continue; }
  const content = fs.readFileSync(p, 'utf8');
  checkLinks(f, content);
  const lower = content.toLowerCase();
  for (const phrase of forbidden) {
    if (lower.includes(phrase.toLowerCase()) && !lower.includes(`no ${phrase.toLowerCase()}`) && !lower.includes(`non-${phrase.toLowerCase()}`)) errors.push(`${f}: forbidden phrase -> ${phrase}`);
  }
  const hasState = stateLabels.some(s => content.includes(s));
  if (!hasState) errors.push(`${f}: no explicit state label`);
}

for (const f of mdFiles) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) continue;
  const content = fs.readFileSync(p, 'utf8');
  checkLinks(f, content);
  const lower = content.toLowerCase();
  for (const phrase of forbidden) {
    if (lower.includes(phrase.toLowerCase()) && !lower.includes(`no ${phrase.toLowerCase()}`) && !lower.includes(`non-${phrase.toLowerCase()}`)) errors.push(`${f}: forbidden phrase -> ${phrase}`);
  }
}

console.log(`Checked ${linkCount} links, ${assetCount} asset references across ${htmlFiles.length} HTML + ${mdFiles.length} MD files.`);
if (errors.length) {
  console.error(`FAIL: ${errors.length} violation(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('PASS: all links/assets resolve, state labels present, no forbidden phrases.');
