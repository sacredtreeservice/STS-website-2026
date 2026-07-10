import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { company } from '../data/company';

const SITE = 'https://sacredtreeservice.com';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  return rss({
    title: `${company.brandName} — Field Notes`,
    description:
      'Notes from the field on Central Florida tree care: pruning, plant health, storm prep, and real jobs by the Sacred Tree Service crew in the greater Orlando area.',
    site: SITE,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.excerpt,
      pubDate: p.data.publishedAt,
      link: `/blog/${p.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
};
