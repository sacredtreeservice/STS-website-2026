import { company, fullAddress } from '../data/company';
import { counties } from '../data/counties';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

const SITE = 'https://sacredtreeservice.com';

// ── Aggregate rating ───────────────────────────────────────────────────
// Source of truth: company.googleAverageRating (the actual Google star
// average) and company.googleReviewCount (the actual current count).
// Review *count* drives whether we publish the AggregateRating at all,
// because Google requires a count to render rich-result stars and
// publishing a too-low count under-represents the business.
const avgRating = company.googleAverageRating;
const reviewCountForSchema = company.googleReviewCount;

// ── areaServed: GeoCircle (radius) + named AdministrativeAreas (counties) ──
// Google parses both. The AdministrativeArea entries are what surface in
// "tree service [county] FL" map results; the GeoCircle defines the radius
// for prospective coverage in adjacent neighborhoods.
const areaServed: Record<string, any>[] = [
  {
    '@type': 'GeoCircle',
    name: `${company.serviceRadiusMiles}-mile service radius covering the greater Orlando area`,
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    geoRadius: `${company.serviceRadiusMiles * 1609}`,
  },
  ...counties.map((c) => ({
    '@type': 'AdministrativeArea',
    name: c.name,
    containedInPlace: { '@type': 'State', name: 'Florida' },
  })),
];

// ── Hours: appointment-based, 7 days, with emergency response noted ────
const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday'],
    opens: '00:00',
    closes: '23:59',
    description: 'Emergency / storm response only',
  },
];

export const localBusinessSchema = () => {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'TreeRemovalService',
    '@id': `${SITE}#business`,
    name: company.legalName,
    alternateName: company.brandName,
    slogan: company.tagline,
    url: SITE,
    telephone: company.phone,
    email: company.email,
    image: `${SITE}/assets/og-image.jpg`,
    logo: `${SITE}/assets/logo.jpg`,
    priceRange: '$$',
    foundingDate: company.founded,
    // Person schema for the founder — gives AI engines a real human entity
    // with credentials and a domain of expertise, which is one of the main
    // E-E-A-T signals AI Overviews look for in service-business citations.
    founder: {
      '@type': 'Person',
      '@id': `${SITE}#alex-satoski`,
      name: company.owner,
      jobTitle: company.ownerTitle,
      worksFor: { '@id': `${SITE}#business` },
      url: `${SITE}/about/`,
      description:
        'ISA-trained arborist who founded Sacred Tree Service in 2023 to bring credentialed, standards-driven tree care to Central Florida property owners.',
      knowsAbout: [
        'Arboriculture',
        'ANSI A300 pruning standards',
        'ANSI Z133 climbing and rigging safety',
        'Tree risk assessment',
        'Plant health care',
        'Florida palm care',
        'Large tree transplanting',
        'Storm and hurricane response',
      ],
      hasCredential: company.credentials.map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        name: c,
      })),
      memberOf: company.memberships.map((m) => ({
        '@type': 'Organization',
        name: m,
      })),
    },
    address: {
      '@type': 'PostalAddress',
      // streetAddress + postalCode intentionally omitted — we publish city
      // and region only to keep the precise HQ location off the public web.
      ...(company.address.street ? { streetAddress: company.address.street } : {}),
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      ...(company.address.postal ? { postalCode: company.address.postal } : {}),
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    areaServed,
    openingHoursSpecification,
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tree Care Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.blurb,
          serviceType: s.name,
          url: `${SITE}/services/${s.slug}/`,
        },
      })),
    },
    hasCredential: company.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    })),
    memberOf: company.memberships.map((m) => ({
      '@type': 'Organization',
      name: m,
    })),
    sameAs: Object.values(company.social).filter((u): u is string => Boolean(u)),
  };

  if (reviewCountForSchema && reviewCountForSchema > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviewCountForSchema,
      bestRating: 5,
      worstRating: 1,
    };
  }
  // Lift up to 5 individual review snippets into the global schema for
  // richer per-page coverage. The full review set lives on /reviews/.
  if (testimonials.length > 0) {
    schema.review = testimonials.slice(0, 5).map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      publisher: { '@type': 'Organization', name: t.source },
    }));
  }

  return schema;
};

export const breadcrumbSchema = (trail: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: new URL(t.url, SITE).toString(),
  })),
});

export const serviceSchema = (svc: {
  name: string;
  description: string;
  slug: string;
  city?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: svc.city ? `${svc.name} in ${svc.city}, FL` : svc.name,
  description: svc.description,
  provider: { '@id': `${SITE}#business` },
  serviceType: svc.name,
  areaServed: svc.city
    ? { '@type': 'City', name: svc.city, containedInPlace: { '@type': 'State', name: 'Florida' } }
    : { '@type': 'State', name: 'Florida' },
  url: svc.city ? `${SITE}/services/${svc.slug}/${svc.city.toLowerCase().replace(/\s+/g, '-')}/` : `${SITE}/services/${svc.slug}/`,
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleSchema = (a: { title: string; description: string; url: string; published?: string; modified?: string; author?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  url: new URL(a.url, SITE).toString(),
  datePublished: a.published,
  dateModified: a.modified ?? a.published,
  author: { '@type': 'Person', name: a.author ?? company.brandName },
  publisher: { '@id': `${SITE}#business` },
});

export { fullAddress };
