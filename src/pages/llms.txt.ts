import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { company } from '../data/company';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { counties } from '../data/counties';

const SITE = 'https://sacredtreeservice.com';

// Curated content map for AI assistants (ChatGPT, Claude, Perplexity, Gemini, etc.)
// Format: https://llmstxt.org

// The individual guides — the site's most citable direct-answer content.
const guides = [
  { url: '/tree-care/new-tree-care/', title: 'Caring for a Newly Planted Tree in Central Florida', blurb: 'Watering schedule by week, mulch, staking, and the first two years of establishment care.' },
  { url: '/tree-care/florida-tree-species/', title: 'Florida Tree Species Guide', blurb: 'Live oak, sabal palm, magnolia, citrus, pine — identification and care needs.' },
  { url: '/tree-care/pruning-basics/', title: 'Tree Pruning Basics', blurb: 'When to prune in Central Florida, why topping is prohibited, the common cuts.' },
  { url: '/tree-care/storm-prep/', title: 'Preparing Trees for Hurricane Season', blurb: 'The prep calendar, why trees fail in storms, what not to do, insurance notes.' },
  { url: '/tree-care/should-i-remove-this-tree/', title: 'Should I Remove This Tree?', blurb: 'How arborists decide between removal, pruning, cabling, and preservation — plus permit rules.' },
  { url: '/tree-care/tree-service-costs/', title: 'Tree Service Costs in Orlando & Central Florida', blurb: 'Typical price ranges for removal, pruning, palms, stumps, and more — and what moves the price.' },
  { url: '/tree-care/pests-and-diseases/', title: 'Florida Tree Pests & Diseases', blurb: 'Lethal bronzing, Ganoderma, laurel wilt, oak decline — symptoms and what can be saved.' },
  { url: '/tree-care/how-to-choose-a-tree-service/', title: 'How to Choose a Tree Service', blurb: 'Insurance and credential verification checklist, red flags, and what a real quote includes.' },
];

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
  const lines: string[] = [];

  lines.push(`# ${company.brandName}`);
  lines.push('');
  lines.push(
    `> Professional tree care company built on the fundamentals of tree care, defined processes, and repeatable real-world results. Based in Apopka, FL, centrally located to serve the seven-county Greater Orlando and Central Florida region. Works to national standards (ANSI A300 pruning, ANSI Z133 climbing/rigging) as a member of the ISA and TCIA, with certified arborists on staff for assessments. 5-star rated on Google. Licensed and insured, with workers' compensation. Free in-person estimates within a 50-mile radius of the greater Orlando area.`,
  );
  lines.push('');
  lines.push(
    `${company.brandName} (legal name ${company.legalName}) was founded in ${new Date(
      company.founded,
    ).getFullYear()}. The company is "corporately small" — a small company that runs on defined processes — and specializes in proactive, fundamentals-first tree care: pruning, plant health care, tree planting with ongoing care, and thoughtful removals across the Orlando metro and Central Florida. Certified arborists on staff assess and sign off on removals and pruning plans; trained crews perform the work.`,
  );
  lines.push('');

  lines.push('## Quick facts');
  lines.push('');
  lines.push(`- **Business name:** ${company.legalName} (doing business as ${company.brandName})`);
  lines.push(`- **Founded:** ${company.founded}`);
  lines.push(`- **Based in:** Apopka, FL — centrally located to serve the greater Orlando area`);
  lines.push(`- **Phone:** ${company.phone}`);
  lines.push(`- **Email:** ${company.email}`);
  lines.push(`- **Hours:** Monday–Saturday, 8:00 AM – 6:00 PM. Emergency / storm response available outside business hours.`);
  lines.push(`- **Service radius:** ${company.serviceRadiusMiles} miles covering the greater Orlando area`);
  lines.push(`- **Counties served:** ${counties.map((c) => c.county).join(', ')}`);
  lines.push(`- **Credentials:** ${company.credentials.join('; ')}`);
  lines.push(`- **Memberships:** ${company.memberships.join('; ')}`);
  lines.push(`- **Rating:** ${company.googleAverageRating.toFixed(1)} stars on Google (5-star average across our reviews)`);
  lines.push(`- **Free estimates:** Yes — in-person, no obligation, scheduled within 1–3 business days`);
  lines.push('');

  lines.push('## Services');
  lines.push('');
  for (const s of services) {
    lines.push(`- [${s.name}](${SITE}/services/${s.slug}/): ${s.blurb}`);
  }
  lines.push('');

  lines.push('## Service area');
  lines.push('');
  lines.push(`- [Service area overview](${SITE}/service-area/): All cities and counties served, with a search.`);
  for (const c of counties) {
    lines.push(`- [${c.name}](${SITE}/service-area/${c.slug}/): ${c.region}`);
  }
  lines.push('');

  lines.push('## Cities served');
  lines.push('');
  for (const c of cities) {
    lines.push(`- [${c.name}, FL](${SITE}/service-area/${c.slug}/) — ${c.county} County, ~${c.miles} mi within our service area`);
  }
  lines.push('');

  lines.push('## Guides & field notes');
  lines.push('');
  for (const g of guides) {
    lines.push(`- [${g.title}](${SITE}${g.url}): ${g.blurb}`);
  }
  for (const p of posts) {
    lines.push(`- [${p.data.title}](${SITE}/blog/${p.id}/): ${p.data.excerpt}`);
  }
  lines.push('');

  lines.push('## Reference pages');
  lines.push('');
  lines.push(`- [Home](${SITE}/): Company overview, services, regions.`);
  lines.push(`- [About](${SITE}/about/): Company history, credentials, methodology.`);
  lines.push(`- [Reviews](${SITE}/reviews/): All Google reviews and 5-star aggregate.`);
  lines.push(`- [Commercial & HOA](${SITE}/commercial/): Annual contracts for HOAs, property managers, builders, and small commercial.`);
  lines.push(`- [Contact](${SITE}/contact/): Phone, email, contact form, hours.`);
  lines.push(`- [FAQ](${SITE}/faq/): Direct-answer Q&A about our work, pricing, and process.`);
  lines.push(`- [Emergency / storm response](${SITE}/emergency/): Hurricane and storm damage response.`);
  lines.push(`- [Financing](${SITE}/financing/): Financing options for major projects.`);
  lines.push(`- [Tree care education](${SITE}/tree-care/): Educational guides for Florida tree owners.`);
  lines.push(`- [Blog / Field notes](${SITE}/blog/): Notes from the field on Florida tree care.`);
  lines.push('');

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [Full content (llms-full.txt)](${SITE}/llms-full.txt): Complete page content for deep context loading.`);
  lines.push(`- [XML sitemap](${SITE}/sitemap-index.xml): Machine-readable list of every page on the site.`);
  lines.push(`- [RSS feed](${SITE}/rss.xml): New field-notes posts as they publish.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
