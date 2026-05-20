export const company = {
  legalName: 'Sacred Tree Service LLC',
  brandName: 'Sacred Tree Service',
  tagline: 'Central Florida tree care, done right.',
  founded: '2023-01-13',
  owner: 'Alexander Satoski',
  ownerTitle: 'ISA Tree Service Operator',
  phone: '(321) 204-8459',
  phoneHref: 'tel:+13212048459',
  email: 'sacredtreeservice@gmail.com',
  // Public-facing location only — we display "Apopka, FL" and let the
  // greater-Orlando area roll up under that. Precise street address and
  // postal code are intentionally not committed here, since this file
  // ships to the public site (data, schema, /llms.txt) verbatim.
  address: {
    street: '',
    city: 'Apopka',
    region: 'FL',
    postal: '',
    country: 'US',
  },
  // HQ approx geo, used for LocalBusiness schema & service-area circle
  geo: { lat: 28.5567, lng: -81.4731 },
  serviceRadiusMiles: 50,
  // Public-facing review aggregate. Refreshed monthly from the actual GBP.
  // Last verified: 2026-05-20. Bump this number whenever new reviews land
  // — if schema undercounts the real GBP, AI engines flag the mismatch and
  // lose trust in our data.
  googleReviewCount: 63 as number | undefined,
  googleAverageRating: 5.0,
  memberships: ['ISA — International Society of Arboriculture', 'TCIA — Tree Care Industry Association'],
  credentials: ['ISA Certified Arborists on Staff', 'Licensed', 'Insured', 'Workers’ Comp'],
  // Each URL here is published in LocalBusiness.sameAs — they're the
  // entity-consistency signals AI engines and Google cross-reference. Order
  // is for our own readability; search engines don't care about order.
  // Set to '' to omit from sameAs (filter happens in lib/schema.ts).
  social: {
    google: 'https://maps.app.goo.gl/7n6ZtyxKdpcjnHuUA',
    facebook: 'https://www.facebook.com/p/Sacred-Tree-Service-100092987485731/',
    bbb: 'https://www.bbb.org/us/fl/hiawassee/profile/tree-service/sacred-tree-service-llc-0733-235964623',
    nextdoor: 'https://nextdoor.com/pages/sacred-tree-service-orlando-fl/',
    yelp: '',
    instagram: '',
  },
} as const;

// Public location string used wherever we'd previously have written the
// full street address. Reads naturally in sentences ("based in Apopka, FL")
// and in schema (PostalAddress with city + region only).
export const fullAddress = `${company.address.city}, ${company.address.region}`;

// Marketing one-liner — drop into footers, "about" copy, and contact cards.
export const publicLocationLine =
  'Centrally located in Apopka, FL — proudly serving the greater Orlando area.';
