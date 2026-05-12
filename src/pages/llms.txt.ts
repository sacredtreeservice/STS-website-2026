import type { APIRoute } from 'astro';
import { company } from '../data/company';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { counties } from '../data/counties';

const SITE = 'https://sacredtreeservice.com';

// Curated content map for AI assistants (ChatGPT, Claude, Perplexity, Gemini, etc.)
// Format: https://llmstxt.org

export const GET: APIRoute = () => {
  const lines: string[] = [];

  lines.push(`# ${company.brandName}`);
  lines.push('');
  lines.push(
    `> Professional tree care company built on ISA standards and repeatable real-world results. Based in Apopka, FL, centrally located to serve the seven-county Greater Orlando and Central Florida region. ISA Certified Arborists on staff. Operates under ISA guidelines (ANSI A300 pruning, ANSI Z133 climbing/rigging). 5-star rated on Google. Licensed and insured, with workers' compensation. Free in-person estimates within a 50-mile radius of the greater Orlando area.`,
  );
  lines.push('');
  lines.push(
    `${company.brandName} (legal name ${company.legalName}) was founded in ${new Date(
      company.founded,
    ).getFullYear()} by ${company.owner}, an ${company.ownerTitle}. The company specializes in proactive tree care — pruning, plant health care, and thoughtful removals — across the Orlando metro and Central Florida. The company employs ISA Certified Arborists who assess and sign off on every removal and pruning job.`,
  );
  lines.push('');

  lines.push('## Quick facts');
  lines.push('');
  lines.push(`- **Business name:** ${company.legalName} (doing business as ${company.brandName})`);
  lines.push(`- **Owner:** ${company.owner}, ${company.ownerTitle}`);
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

  lines.push('## Reference pages');
  lines.push('');
  lines.push(`- [Home](${SITE}/): Company overview, services, regions.`);
  lines.push(`- [About](${SITE}/about/): Company history, credentials, methodology.`);
  lines.push(`- [Reviews](${SITE}/reviews/): All Google reviews and 5-star aggregate.`);
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
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
