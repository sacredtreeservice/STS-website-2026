import { company, fullAddress } from '../data/company';

const SITE = 'https://sacredtreeservice.com';

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TreeRemovalService',
  '@id': `${SITE}#business`,
  name: company.legalName,
  alternateName: company.brandName,
  url: SITE,
  telephone: company.phone,
  email: company.email,
  image: `${SITE}/assets/logo.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postal,
    addressCountry: company.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: company.geo.lat,
    longitude: company.geo.lng,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    geoRadius: `${company.serviceRadiusMiles * 1609}`, // meters
  },
  hasCredential: company.credentials.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c,
  })),
  memberOf: company.memberships.map((m) => ({
    '@type': 'Organization',
    name: m,
  })),
  sameAs: [company.social.facebook],
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
