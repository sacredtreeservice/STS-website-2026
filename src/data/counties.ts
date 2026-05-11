// County landing page metadata. Each entry powers a /service-area/[county]/
// page and the AdministrativeArea entries inside the LocalBusiness schema.

export type County = {
  slug: string;        // url segment, e.g. 'orange-county'
  county: string;      // matches City.county, e.g. 'Orange'
  name: string;        // display name, e.g. 'Orange County, FL'
  region: string;      // editorial label, e.g. 'Greater Orlando metro'
  blurb: string;       // 1–2 sentence description for hero/meta
  highlights: string[]; // notable cities, neighborhoods, or districts
};

export const counties: County[] = [
  {
    slug: 'orange-county',
    county: 'Orange',
    name: 'Orange County, FL',
    region: 'Greater Orlando metro — core service ring',
    blurb:
      'Our home county. From historic Winter Park and Maitland to fast-growing Lake Nona and Winter Garden, we cover the full Orlando metro under one ISA-credentialed crew.',
    highlights: [
      'Orlando',
      'Winter Park',
      'Maitland',
      'Apopka',
      'Ocoee',
      'Winter Garden',
      'Windermere',
      'Dr. Phillips',
      'Hunters Creek',
      'Lake Nona',
    ],
  },
  {
    slug: 'seminole-county',
    county: 'Seminole',
    name: 'Seminole County, FL',
    region: 'North metro — I-4 corridor',
    blurb:
      'Seminole County sits at the north edge of the Orlando metro along I-4 — Sanford, Lake Mary, and Oviedo are routine stops on our weekly schedule.',
    highlights: [
      'Lake Mary',
      'Sanford',
      'Oviedo',
      'Altamonte Springs',
      'Longwood',
      'Casselberry',
    ],
  },
  {
    slug: 'osceola-county',
    county: 'Osceola',
    name: 'Osceola County, FL',
    region: 'South metro — Kissimmee, St. Cloud, Celebration',
    blurb:
      'Osceola County stretches from Kissimmee’s mature neighborhoods through Celebration’s planned canopy to St. Cloud’s ranch country — every corner is inside our service radius.',
    highlights: ['Kissimmee', 'Celebration', 'St. Cloud'],
  },
  {
    slug: 'lake-county',
    county: 'Lake',
    name: 'Lake County, FL',
    region: 'Northwest — the Central Florida lakes region',
    blurb:
      'Lake County’s rolling hills and 1,400+ named lakes shape the local canopy. From historic Mount Dora to the Clermont Chain of Lakes, we serve the whole Lake County region.',
    highlights: [
      'Clermont',
      'Mount Dora',
      'Eustis',
      'Tavares',
      'Leesburg',
      'Minneola',
      'Groveland',
      'Four Corners',
    ],
  },
  {
    slug: 'volusia-county',
    county: 'Volusia',
    name: 'Volusia County, FL',
    region: 'Northeast — DeLand, Deltona, the St. Johns corridor',
    blurb:
      'Volusia County’s mix of pine flatwoods and oak hammocks meets the St. Johns River corridor. We work DeLand, Deltona, DeBary, and Orange City year-round.',
    highlights: ['Deltona', 'DeBary', 'DeLand', 'Orange City'],
  },
  {
    slug: 'brevard-county',
    county: 'Brevard',
    name: 'Brevard County, FL',
    region: 'Space Coast — Titusville, Cocoa, the Indian River',
    blurb:
      'On the Space Coast, salt spray, hurricane exposure, and sandy soils all change how trees behave. Our Brevard service area covers Titusville and Cocoa within our 50-mile radius.',
    highlights: ['Titusville', 'Cocoa'],
  },
  {
    slug: 'polk-county',
    county: 'Polk',
    name: 'Polk County, FL',
    region: 'Southwest — Davenport, Haines City, the Four Corners area',
    blurb:
      'Northern Polk County borders the Disney-area Four Corners region. We serve Davenport, Haines City, and the surrounding rural-residential mix from our Apopka, FL base.',
    highlights: ['Davenport', 'Haines City'],
  },
];

export const getCountyBySlug = (slug: string) => counties.find((c) => c.slug === slug);
export const getCountyByName = (name: string) => counties.find((c) => c.county === name);
