// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

const SITE = 'https://sacredtreeservice.com';
const BUILD_DATE = new Date().toISOString();

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
      // /book-a-call/ is a hidden ad landing page (noindex). Keep it out of the
      // sitemap entirely so crawlers are never even pointed at it.
      filter: (page) => !page.replace(SITE, '').replace(/\/+$/, '').endsWith('/book-a-call'),
      serialize(item) {
        const t = tier(item.url);
        item.priority = t.priority;
        item.changefreq = t.changefreq;
        item.lastmod = BUILD_DATE;
        return item;
      },
    }),
    icon({ include: { lucide: ['*'] } }),
  ],
  // Prefetch on hover only — `prefetchAll: true` was firing requests for every
  // link in viewport (incl. dead ones), hammering the dev server and adding
  // perceived nav lag on real navigation.
  prefetch: { defaultStrategy: 'hover' },
});
