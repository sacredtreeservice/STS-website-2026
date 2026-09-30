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
  // Public business address. Owner decision 2026-09-30: publish the full
  // street address everywhere (site, schema, /llms.txt) so every directory
  // listing can be matched to one record. Ships to the public site verbatim.
  address: {
    street: '5844 Round Lake Rd',
    city: 'Apopka',
    region: 'FL',
    postal: '32712',
    country: 'US',
  },
  // HQ geo = the published address (US Census geocoder, 2026-09-30). Used
  // for LocalBusiness schema and as the center of the service-area circle.
  geo: { lat: 28.7699, lng: -81.5934 },
  serviceRadiusMiles: 50,
  // Public-facing review aggregate. Refreshed monthly from the actual GBP.
  // Last verified: 2026-05-20. Bump this number whenever new reviews land
  // — if schema undercounts the real GBP, AI engines flag the mismatch and
  // lose trust in our data.
  googleReviewCount: 63 as number | undefined,
  googleAverageRating: 5.0,
  memberships: ['ISA — International Society of Arboriculture', 'TCIA — Tree Care Industry Association'],
  // Order matters — licensed/insured lead; the credential story supports the
  // brand, it isn't the brand. Certified arborists are staff (assessment
  // role), the company itself is an ISA/TCIA *member*.
  credentials: ['Licensed', 'Insured', 'Workers’ Comp', 'ISA Certified Arborists on Staff'],
  // Each URL here is published in LocalBusiness.sameAs — they're the
  // entity-consistency signals AI engines and Google cross-reference. Order
  // is for our own readability; search engines don't care about order.
  // Set to '' to omit from sameAs (filter happens in lib/schema.ts).
  social: {
    google: 'https://maps.app.goo.gl/7n6ZtyxKdpcjnHuUA',
    facebook: 'https://www.facebook.com/p/Sacred-Tree-Service-100092987485731/',
    bbb: 'https://www.bbb.org/us/fl/hiawassee/profile/tree-service/sacred-tree-service-llc-0733-235964623',
    nextdoor: 'https://nextdoor.com/pages/sacred-tree-service-orlando-fl/',
    yelp: 'https://www.yelp.com/biz/sacred-tree-service-apopka',
    instagram: '',
  },
} as const;

// Full postal address as one line — the single NAP string used on the
// contact page, quick facts, footer and /llms.txt.
export const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.region} ${company.address.postal}`;

// Marketing one-liner — drop into footers, "about" copy, and contact cards.
export const publicLocationLine =
  `${fullAddress} — centrally located to serve the greater Orlando area.`;
