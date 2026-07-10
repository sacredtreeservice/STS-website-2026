import { company, fullAddress } from '../data/company';
import { counties } from '../data/counties';
import { services } from '../data/services';

const SITE = 'https://sacredtreeservice.com';

// E.164 phone for machine consumption (schema.org best practice). The
// display format stays human everywhere else — this is derived from the
// tel: href so there is exactly one source of truth in company.ts.
const phoneE164 = company.phoneHref.replace('tel:', '');

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
    telephone: phoneE164,
    email: company.email,
    image: {
      '@type': 'ImageObject',
      url: `${SITE}/assets/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/assets/logo.jpg`,
      width: 500,
      height: 500,
      caption: company.brandName,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phoneE164,
      email: company.email,
      contactType: 'customer service',
      areaServed: 'US-FL',
      availableLanguage: 'en',
    },
    hasMap: company.social.google,
    priceRange: '$$',
    foundingDate: company.founded,
    // No founder node, deliberately — the brand leads with the company
    // (professional service positioning), not the person.
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

  // NOTE: no aggregateRating / review markup here, deliberately. Google's
  // review-snippet guidelines treat LocalBusiness review markup about
  // yourself, on your own site, sourced from Google's own platform, as
  // "self-serving" — ignored for stars since 2019, and marked-up reviews
  // must be visible on the page (they aren't on ~575 of ours). The rating
  // facts still live where they're actually consumed: visible testimonials,
  // the GBP link in sameAs, and llms.txt for AI engines.

  return schema;
};

// Top-level WebSite node. Consolidates the domain as an entity and links it
// to the business as publisher — helps Google/AI engines tie pages, brand,
// and organization together. No SearchAction: there is no on-site search
// results page, so advertising one would be a false signal.
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}#website`,
  url: SITE,
  name: company.brandName,
  alternateName: company.legalName,
  description: company.tagline,
  publisher: { '@id': `${SITE}#business` },
  inLanguage: 'en-US',
});

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
  // Optional named offers (e.g. care-plan tiers). Rendered as an
  // OfferCatalog on the Service node. Deliberately no prices — plans are
  // quoted per property, and schema.org Offers are valid without price.
  offers?: { name: string; description: string }[];
}) => {
  const schema: Record<string, any> = {
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
  };
  if (svc.offers && svc.offers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${svc.name} — plans`,
      itemListElement: svc.offers.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o.name, description: o.description },
      })),
    };
  }
  return schema;
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const articleSchema = (a: {
  title: string;
  description: string;
  url: string;
  published?: string;
  modified?: string;
  author?: string;
  image?: string;
}) => {
  const url = new URL(a.url, SITE).toString();
  // Entity-correct author: the brand is an Organization (linked by @id to
  // the LocalBusiness node); human bylines are plain Person nodes.
  const author =
    !a.author || a.author === company.brandName || a.author === company.legalName
      ? { '@type': 'Organization', '@id': `${SITE}#business`, name: company.brandName }
      : { '@type': 'Person', name: a.author };
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: a.published,
    dateModified: a.modified ?? a.published,
    author,
    publisher: { '@id': `${SITE}#business` },
  };
  if (a.image) schema.image = [new URL(a.image, SITE).toString()];
  return schema;
};

export { fullAddress };
