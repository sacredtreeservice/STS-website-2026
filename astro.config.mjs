// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

const SITE = 'https://sacredtreeservice.com';

// Crawl-priority tiers. The site builds ~580 pages; ~430 of them are the
// long-tail service×city combos. A flat sitemap tells crawlers everything
// matters equally, which buries the money pages and muddies crawl budget.
// We rank money/topic pages above the long tail so Google spends its budget
// where it counts. (Priority is a relative hint within our own site only.)
function tier(url) {
  const path = url.replace(SITE, '').replace(/\/+$/, '') || '/';
  const segs = path.split('/').filter(Boolean);

  if (path === '/') return { priority: 1.0, changefreq: 'weekly' };

  // Top-level hubs + key conversion pages
  if (['/services', '/service-area', '/contact', '/reviews', '/faq', '/emergency', '/about', '/blog'].includes(path))
    return { priority: 0.9, changefreq: 'weekly' };

  // Individual service pages (/services/tree-removal/)
  if (segs[0] === 'services' && segs.length === 2) return { priority: 0.9, changefreq: 'monthly' };
  // Service × city combos (/services/tree-removal/orlando/) — the long tail
  if (segs[0] === 'services' && segs.length === 3) return { priority: 0.5, changefreq: 'monthly' };

  // County hubs (/service-area/orange-county/) vs city pages
  if (segs[0] === 'service-area' && segs.length === 2)
    return segs[1].endsWith('-county')
      ? { priority: 0.8, changefreq: 'monthly' }
      : { priority: 0.7, changefreq: 'monthly' };

  // Blog posts
  if (segs[0] === 'blog' && segs.length === 2) return { priority: 0.6, changefreq: 'monthly' };

  // Lower-intent static pages
  if (['/financing', '/careers'].includes(path)) return { priority: 0.5, changefreq: 'yearly' };

  return { priority: 0.6, changefreq: 'monthly' };
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  server: { port: 1234, host: true },
  integrations: [
    sitemap({
      // Hidden pages (noindex): /book-a-call/ is an ad landing page, /workflow/
      // is the staff field pricing guide. Keep both out of the sitemap entirely
      // so crawlers are never even pointed at them.
      filter: (page) => {
        const path = page.replace(SITE, '').replace(/\/+$/, '');
        return !['/book-a-call', '/workflow'].includes(path);
      },
      // No lastmod, deliberately: stamping the build time on all ~580 URLs
      // every deploy is a provably false freshness signal, and Google
      // ignores lastmod site-wide once it detects that. Honest silence
      // beats lying — add real per-page dates only if we ever wire them.
      serialize(item) {
        const t = tier(item.url);
        item.priority = t.priority;
        item.changefreq = t.changefreq;
        return item;
      },
    }),
    icon({ include: { lucide: ['*'] } }),
  ],
  // Prefetch on hover only — `prefetchAll: true` was firing requests for every
  // link in viewport (incl. dead ones), hammering the dev server and adding
  // perceived nav lag on real navigation.
  prefetch: { defaultStrategy: 'hover' },
  // Responsive content images: markdown/collection images emit srcset+sizes
  // automatically instead of shipping the full-resolution original into a
  // 760px column (blog photos are 2200px/1MB+ without this).
  // breakpoints: content images are never wider than ~1200px on this site;
  // without this Astro emitted 8 variants up to 2200w into a 760px column.
  image: { layout: 'constrained', breakpoints: [640, 768, 1024, 1280, 1600] },
});
