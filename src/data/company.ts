export const company = {
  legalName: 'Sacred Tree Service LLC',
  brandName: 'Sacred Tree Service',
  tagline: 'Central Florida tree care, done right.',
  founded: '2023-01-13',
  owner: 'Alexander Satoski',
  phone: '(321) 204-8459',
  phoneHref: 'tel:+13212048459',
  email: 'sacredtreeservice@gmail.com',
  address: {
    street: '7421 Grovewood Court',
    city: 'Orlando',
    region: 'FL',
    postal: '32818',
    country: 'US',
  },
  // HQ approx geo, used for LocalBusiness schema & service-area circle
  geo: { lat: 28.5567, lng: -81.4731 },
  serviceRadiusMiles: 50,
  memberships: ['ISA — International Society of Arboriculture', 'TCIA — Tree Care Industry Association'],
  credentials: ['ISA Certified Arborists on Staff', 'Licensed', 'Insured', 'Workers’ Comp'],
  social: {
    facebook: 'https://www.facebook.com/p/Sacred-Tree-Service-100092987485731/',
  },
} as const;

export const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.region} ${company.address.postal}`;
