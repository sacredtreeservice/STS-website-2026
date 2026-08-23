#!/usr/bin/env node
// Deterministic post-build QA for the Sacred Tree Service site.
//
//   npm run build && node scripts/qa/check-dist.mjs
//
// Walks dist/**/*.html and fails (exit 1) on anything that would hurt
// search / AI visibility. Designed so a smaller model (or a human) can run
// it blind and trust the result: every failure prints file + exact value.
//
// Checks
//   meta      title 15–65 chars, description 70–160 chars, exactly one <h1>,
//             canonical present and self-referencing, <html lang>
//   schema    every JSON-LD block parses; every @type is a known schema.org
//             type (allowlist below — extend when you add a type, AFTER
//             confirming https://schema.org/<Type> is a real page);
//             at most one LocalBusiness-ish node per page; @id graph sane
//   links     every internal href resolves to a file in dist (or a known
//             non-HTML asset); no links to /book-a-call/ or /workflow/ from
//             indexable pages
//   images    every <img> has alt (empty alt allowed only with role=presentation)
//   robots    noindex pages are NOT in the sitemap; sitemap URLs exist in dist
//   freshness company.ts review-count "Last verified" date < 60 days old
//
// Warnings (exit 0) for soft limits. Use --strict to turn warnings into errors.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://sacredtreeservice.com';
const STRICT = process.argv.includes('--strict');
const QUIET = process.argv.includes('--quiet');

// Valid schema.org types we intentionally use. TreeRemovalService is NOT a
// schema.org type (schema.org/TreeRemovalService → 404) — never add it back.
const KNOWN_TYPES = new Set([
  'LocalBusiness', 'HomeAndConstructionBusiness', 'ProfessionalService', 'Organization',
  'WebSite', 'WebPage', 'BreadcrumbList', 'ListItem', 'Service', 'Offer', 'OfferCatalog',
  'FAQPage', 'Question', 'Answer', 'Article', 'BlogPosting', 'NewsArticle', 'Person',
  'ImageObject', 'PostalAddress', 'GeoCoordinates', 'GeoCircle', 'AdministrativeArea',
  'City', 'State', 'Country', 'Place', 'ContactPoint', 'OpeningHoursSpecification',
  'EducationalOccupationalCredential', 'AggregateRating', 'Review', 'Rating',
  'CollectionPage', 'ItemList', 'Blog', 'AboutPage', 'ContactPage', 'SearchAction',
  'EntryPoint', 'PriceSpecification', 'UnitPriceSpecification', 'Thing', 'Event',
  'VideoObject', 'HowTo', 'HowToStep', 'DefinedTerm', 'Brand', 'JobPosting',
  'MonetaryAmount', 'QuantitativeValue', 'PropertyValue', 'Certification',
]);
const BUSINESS_TYPES = new Set(['LocalBusiness', 'HomeAndConstructionBusiness', 'ProfessionalService', 'Organization']);
const HIDDEN = ['/book-a-call/', '/workflow/'];
const ASSET_EXT = /\.(jpg|jpeg|png|webp|avif|svg|gif|ico|css|js|mjs|xml|txt|json|webmanifest|pdf|woff2?|mp4|webm)$/i;

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => (STRICT ? errors : warnings).push(`${file}: ${msg}`);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function urlForFile(file) {
  let rel = '/' + relative(DIST, file).split('\\').join('/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'index.html'.length);
  else if (rel.endsWith('.html')) rel = rel.slice(0, -'.html'.length) + '/';
  return rel;
}

function fileForUrl(path) {
  // /foo/ -> dist/foo/index.html ; /foo -> dist/foo/index.html or dist/foo.html
  const clean = path.split('#')[0].split('?')[0];
  if (ASSET_EXT.test(clean)) return existsSync(join(DIST, clean)) ? join(DIST, clean) : null;
  const candidates = [
    join(DIST, clean, 'index.html'),
    join(DIST, clean.replace(/\/$/, '') + '.html'),
    join(DIST, clean.replace(/\/$/, ''), 'index.html'),
  ];
  return candidates.find((c) => existsSync(c)) ?? null;
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? (m[2] ?? m[3] ?? m[4] ?? '') : null;
};
const textOf = (html, tag) => {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return m ? m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : null;
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(2);
}

const files = walk(DIST);
const sitemapFile = join(DIST, 'sitemap-0.xml');
const sitemapUrls = existsSync(sitemapFile)
  ? [...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, ''))
  : [];
const sitemapSet = new Set(sitemapUrls);
if (!sitemapUrls.length) err('sitemap-0.xml', 'missing or empty');

const noindexPages = new Set();
const stats = { pages: 0, links: 0, imgs: 0, schemaNodes: 0 };

for (const file of files) {
  const url = urlForFile(file);
  const rel = relative(ROOT, file);
  const html = readFileSync(file, 'utf8');
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const is404 = url === '/404/' || file.endsWith('404.html');
  stats.pages++;

  const robotsTag = head.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0];
  const noindex = robotsTag ? /noindex/i.test(attr(robotsTag, 'content') ?? '') : false;
  if (noindex) noindexPages.add(url);

  // ── meta (skipped for noindex pages — they are not search surfaces) ──
  if (!/<html[^>]*\slang=/i.test(html)) err(rel, 'missing <html lang>');
  const title = decode(textOf(head, 'title') ?? '');
  if (!title) err(rel, 'missing <title>');
  else if (noindex) { /* hidden page — length rules don't apply */ }
  else if (title.length > 65) warn(rel, `title ${title.length} chars (>65): "${title}"`);
  else if (title.length < 15) warn(rel, `title ${title.length} chars (<15): "${title}"`);

  const descTag = head.match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0];
  const desc = descTag ? decode(attr(descTag, 'content') ?? '') : null;
  if (!desc && !noindex) err(rel, 'missing meta description');
  else if (!desc) { /* noindex page without description — fine */ }
  else if (desc.length > 160) warn(rel, `description ${desc.length} chars (>160)`);
  else if (desc.length < 70) warn(rel, `description ${desc.length} chars (<70)`);

  const h1s = [...body.matchAll(/<h1[\s>]/gi)].length;
  if (h1s !== 1 && !is404 && !noindex) err(rel, `${h1s} <h1> elements (want exactly 1)`);

  const canonTag = head.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  const canonical = canonTag ? attr(canonTag, 'href') : null;
  if (!canonical && !is404 && !noindex) err(rel, 'missing canonical');
  else if (canonical && !is404) {
    const expected = SITE + url;
    if (canonical !== expected && !noindex) warn(rel, `canonical ${canonical} ≠ ${expected}`);
  }

  // ── JSON-LD ─────────────────────────────────────────────────────────
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  let businessNodes = 0;
  const ids = new Map();
  for (const b of blocks) {
    let data;
    try { data = JSON.parse(b[1]); } catch (e) { err(rel, `JSON-LD parse error: ${e.message}`); continue; }
    const nodes = Array.isArray(data) ? data : data['@graph'] ? data['@graph'] : [data];
    const visit = (node, depth = 0) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) return node.forEach((n) => visit(n, depth));
      const types = node['@type'] ? (Array.isArray(node['@type']) ? node['@type'] : [node['@type']]) : [];
      if (types.length) stats.schemaNodes++;
      for (const t of types) {
        if (!KNOWN_TYPES.has(t)) err(rel, `unknown/unsupported schema.org @type "${t}" (verify https://schema.org/${t}; add to KNOWN_TYPES only if it is a real page)`);
      }
      if (depth === 0 && types.some((t) => BUSINESS_TYPES.has(t))) businessNodes++;
      if (depth === 0 && node['@id']) {
        const id = node['@id'];
        if (ids.has(id) && JSON.stringify(ids.get(id)) !== JSON.stringify(node)) err(rel, `conflicting nodes share @id ${id}`);
        ids.set(id, node);
      }
      if (types.includes('FAQPage')) {
        const q = node.mainEntity;
        if (!Array.isArray(q) || !q.length) err(rel, 'FAQPage with no mainEntity');
      }
      if (types.includes('Article') || types.includes('BlogPosting')) {
        for (const k of ['headline', 'datePublished', 'author']) if (!node[k]) err(rel, `Article missing ${k}`);
        if (node.headline && node.headline.length > 110) warn(rel, `Article headline ${node.headline.length} chars (>110)`);
      }
      for (const [k, v] of Object.entries(node)) if (k !== '@context' && typeof v === 'object') visit(v, depth + 1);
    };
    nodes.forEach((n) => visit(n, 0));
  }
  if (businessNodes > 1) err(rel, `${businessNodes} top-level business nodes on one page (want ≤1)`);
  if (!blocks.length && !is404 && !noindex) warn(rel, 'no JSON-LD on page');

  // ── links ────────────────────────────────────────────────────────────
  for (const m of body.matchAll(/<a\s[^>]*href=("([^"]*)"|'([^']*)')/gi)) {
    const href = decode(m[2] ?? m[3] ?? '');
    if (!href || href.startsWith('#') || /^(mailto|tel|sms|https?|javascript):/i.test(href)) continue;
    stats.links++;
    const path = href.startsWith('/') ? href : new URL(href, SITE + url).pathname;
    if (!fileForUrl(path)) err(rel, `broken internal link ${href}`);
    if (!noindex && path.startsWith('/workflow/')) err(rel, `indexable page links to staff page ${href}`);
    if (!noindex && path.startsWith('/book-a-call/') && url !== '/contact/') warn(rel, `links to hidden ad page ${href} (only /contact/ does this by design)`);
    if (!ASSET_EXT.test(path) && !path.endsWith('/') && !path.includes('#')) warn(rel, `internal link without trailing slash: ${href}`);
  }

  // ── images ───────────────────────────────────────────────────────────
  for (const m of body.matchAll(/<img\s[^>]*>/gi)) {
    stats.imgs++;
    const tag = m[0];
    const hasAlt = /\salt(\s|=|>|\/)/i.test(tag); // `alt` alone = empty alt (decorative) — valid
    if (!hasAlt) err(rel, `<img> without alt: ${tag.slice(0, 80)}…`);
    if (!attr(tag, 'width') || !attr(tag, 'height')) warn(rel, `<img> without width/height (CLS): ${(attr(tag, 'src') ?? '').slice(0, 80)}`);
  }

  // ── sitemap consistency ─────────────────────────────────────────────
  if (noindex && sitemapSet.has(url)) err(rel, `noindex page present in sitemap: ${url}`);
  if (!noindex && !is404 && !sitemapSet.has(url) && sitemapUrls.length) warn(rel, `indexable page missing from sitemap: ${url}`);
}

for (const u of sitemapUrls) if (!fileForUrl(u)) err('sitemap-0.xml', `sitemap URL has no file in dist: ${u}`);

// ── privacy: no EXIF/GPS in committed or raw-served JPEGs ─────────────
// Astro's pipeline strips metadata from processed variants, but public/ is
// served raw and src/ sources live in a PUBLIC GitHub repo. See strip-exif.mjs.
{
  const roots = ['public', 'src/assets', 'src/content'];
  const jpgs = [];
  const walkJpg = (dir) => { for (const n of readdirSync(dir)) { const p = join(dir, n); if (statSync(p).isDirectory()) walkJpg(p); else if (/\.jpe?g$/i.test(n)) jpgs.push(p); } };
  roots.forEach((r) => existsSync(join(ROOT, r)) && walkJpg(join(ROOT, r)));
  for (const f of jpgs) {
    const buf = readFileSync(f);
    let i = 2, hit = false;
    while (i + 4 <= buf.length && buf[i] === 0xff) {
      const marker = buf[i + 1]; if (marker === 0xda) break;
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xe1 && marker <= 0xef && marker !== 0xe2) { hit = true; break; }
      i += 2 + len;
    }
    if (hit) err(relative(ROOT, f), 'JPEG carries EXIF/XMP metadata (possible GPS) — run: node scripts/qa/strip-exif.mjs <file>');
  }
}

// ── freshness of hand-maintained facts ───────────────────────────────
try {
  const company = readFileSync(join(ROOT, 'src/data/company.ts'), 'utf8');
  const m = company.match(/Last verified:\s*(\d{4}-\d{2}-\d{2})/);
  if (m) {
    const age = (Date.now() - new Date(m[1]).getTime()) / 86400000;
    if (age > 60) warn('src/data/company.ts', `review count last verified ${m[1]} (${Math.round(age)} days ago) — refresh from GBP`);
  }
} catch {}

// ── report ───────────────────────────────────────────────────────────
if (!QUIET) {
  console.log(`QA: ${stats.pages} pages, ${stats.links} internal links, ${stats.imgs} images, ${stats.schemaNodes} schema nodes, ${sitemapUrls.length} sitemap URLs`);
  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    const shown = warnings.slice(0, 60);
    shown.forEach((w) => console.log('  ⚠ ' + w));
    if (warnings.length > shown.length) console.log(`  … ${warnings.length - shown.length} more (run with --all to print)`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} error(s):`);
    errors.forEach((e) => console.log('  ✖ ' + e));
  }
}
if (process.argv.includes('--all') && warnings.length > 60) warnings.slice(60).forEach((w) => console.log('  ⚠ ' + w));
console.log(errors.length ? `\nQA FAILED (${errors.length} errors)` : '\nQA PASSED');
process.exit(errors.length ? 1 : 0);
