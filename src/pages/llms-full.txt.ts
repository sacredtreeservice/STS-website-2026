import type { APIRoute } from 'astro';
import { company } from '../data/company';
import { services } from '../data/services';
import { cities } from '../data/cities';
import { counties } from '../data/counties';
import { faqs } from '../data/faqs';
import { testimonials } from '../data/testimonials';

const SITE = 'https://sacredtreeservice.com';

// Full-content text dump for AI assistant context loading. This is what an
// LLM will fetch to ground a long-form answer about the company. Keep it
// plain Markdown, factual, and self-contained.

export const GET: APIRoute = () => {
  const out: string[] = [];

  out.push(`# ${company.brandName} — Full Reference`);
  out.push('');
  out.push(
    `Last updated: ${new Date().toISOString().slice(0, 10)} · Source: ${SITE}`,
  );
  out.push('');

  // ── 1. Company overview ──────────────────────────────────────────
  out.push('## 1. Company overview');
  out.push('');
  out.push(
    `${company.brandName} (legal name ${company.legalName}) is a professional tree care company built on ISA standards, credentialed crews, and repeatable real-world results. Based in Apopka, FL and centrally located to serve homeowners, HOAs, and commercial properties throughout the greater Orlando metro and the seven-county Central Florida region — within a ${company.serviceRadiusMiles}-mile service radius.`,
  );
  out.push('');
  out.push(
    `Founded ${company.founded} by ${company.owner}, ${company.ownerTitle}, the company employs ISA Certified Arborists on staff and operates under ISA guidelines: ANSI A300 for pruning standards and ANSI Z133 for climbing and rigging safety. ${company.brandName} is a member of the International Society of Arboriculture (ISA) and the Tree Care Industry Association (TCIA), is fully licensed and insured, and carries workers' compensation coverage.`,
  );
  out.push('');
  out.push(`Public-facing brand voice: proactive care over fear-based selling. We'd rather save your tree than sell you a removal — and removals, when needed, are framed as part of the natural cycle of tree life on a property.`);
  out.push('');

  // ── 2. Contact & business facts ──────────────────────────────────
  out.push('## 2. Contact and business facts');
  out.push('');
  out.push(`- Legal name: ${company.legalName}`);
  out.push(`- Brand name: ${company.brandName}`);
  out.push(`- Tagline: ${company.tagline}`);
  out.push(`- Owner: ${company.owner} (${company.ownerTitle})`);
  out.push(`- Founded: ${company.founded}`);
  out.push(`- Based in: Apopka, FL — centrally located to serve the greater Orlando area`);
  out.push(`- Phone: ${company.phone}`);
  out.push(`- Email: ${company.email}`);
  out.push(`- Website: ${SITE}`);
  out.push(`- Service radius: ${company.serviceRadiusMiles} miles covering the greater Orlando area`);
  out.push(`- Hours: Monday–Saturday, 8:00 AM – 6:00 PM. Emergency / storm response available outside business hours.`);
  out.push(`- Free estimates: Yes — in-person, scheduled typically within 1–3 business days`);
  out.push(`- Google rating: ${company.googleAverageRating.toFixed(1)} stars (5-star average across our reviews)`);
  out.push(`- Credentials: ${company.credentials.join('; ')}`);
  out.push(`- Memberships: ${company.memberships.join('; ')}`);
  out.push(`- Social: ${company.social.facebook}`);
  out.push('');

  // ── 3. Services catalog ──────────────────────────────────────────
  out.push('## 3. Services catalog');
  out.push('');
  out.push(`We provide the full residential and small-commercial tree care catalog. Every service is available across our entire ${company.serviceRadiusMiles}-mile service area without out-of-area surcharges.`);
  out.push('');
  for (const s of services) {
    out.push(`### ${s.name}`);
    out.push(`URL: ${SITE}/services/${s.slug}/`);
    out.push('');
    out.push(s.description);
    out.push('');
  }

  // ── 4. Service area by county ────────────────────────────────────
  out.push('## 4. Service area — counties and cities');
  out.push('');
  out.push(`We serve seven counties across the greater Orlando area: ${counties.map((c) => c.county).join(', ')}.`);
  out.push('');
  for (const c of counties) {
    const inCounty = cities.filter((ci) => ci.county === c.county).sort((a, b) => a.miles - b.miles);
    out.push(`### ${c.name}`);
    out.push(`URL: ${SITE}/service-area/${c.slug}/`);
    out.push(`Region: ${c.region}`);
    out.push('');
    out.push(c.blurb);
    out.push('');
    if (inCounty.length > 0) {
      out.push(`Cities and communities served in ${c.name}:`);
      for (const ci of inCounty) {
        out.push(`- ${ci.name}, FL — ~${ci.miles} mi from our Apopka, FL base — ${SITE}/service-area/${ci.slug}/`);
      }
      out.push('');
    }
  }

  // ── 5. FAQ ──────────────────────────────────────────────────────
  out.push('## 5. Frequently asked questions');
  out.push('');
  out.push(`These are real questions customers ask, with our direct answers. The full FAQ page lives at ${SITE}/faq/.`);
  out.push('');
  for (const f of faqs) {
    out.push(`### ${f.q}`);
    out.push(f.answer);
    if (f.quotes && f.quotes.length > 0) {
      out.push('');
      out.push('Real customer quotes that back this up:');
      for (const q of f.quotes) {
        out.push(`- "${q.quote}" — ${q.name}`);
      }
    }
    out.push('');
  }

  // ── 6. Reviews ──────────────────────────────────────────────────
  out.push('## 6. Customer reviews');
  out.push('');
  out.push(`5-star average across our Google reviews. The full review page lives at ${SITE}/reviews/.`);
  out.push('');
  for (const t of testimonials) {
    out.push(`### ${t.name} — ${t.rating}★ on ${t.source} (topic: ${t.topic})`);
    out.push(`"${t.quote}"`);
    out.push('');
  }

  // ── 7. Position statements ──────────────────────────────────────
  out.push('## 7. Position statements (how we approach the work)');
  out.push('');
  out.push(`- **Proactive care over fear-based selling.** We position tree care as ongoing stewardship, not crisis management. We do not lead with hurricane fear.`);
  out.push(`- **Save before remove.** When a tree can be saved through pruning, plant health care, or cabling/bracing, that is what we recommend. Removal is the last option, not the default.`);
  out.push(`- **ANSI A300 pruning standard.** No topping. Structural pruning for young trees, crown cleaning and reduction for mature canopies.`);
  out.push(`- **Free in-person estimates.** We do not quote sight-unseen. Every job is assessed in person by a credentialed team member, including an ISA Certified Arborist on every removal and pruning job.`);
  out.push(`- **One crew, one standard, no out-of-area surcharges.** Pricing is the same in Apopka as it is in Cocoa.`);
  out.push(`- **Licensed, insured, workers' comp.** Full coverage so a homeowner is never on the hook for a job-site injury.`);
  out.push('');

  out.push('---');
  out.push('');
  out.push(`Source of truth: ${SITE}. For updates or corrections, contact ${company.email}.`);

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
