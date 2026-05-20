// County landing page metadata. Each entry powers a /service-area/[county]/
// page and the AdministrativeArea entries inside the LocalBusiness schema.

export type County = {
  slug: string;        // url segment, e.g. 'orange-county'
  county: string;      // matches City.county, e.g. 'Orange'
  name: string;        // display name, e.g. 'Orange County, FL'
  region: string;      // editorial label, e.g. 'Greater Orlando metro'
  blurb: string;       // 1–2 sentence description for hero/meta
  highlights: string[]; // notable cities, neighborhoods, or districts
  /** 2–3 sentences of county-specific canopy/storm/permit context.
   *  Rendered as a unique paragraph on the county page to differentiate
   *  it from sibling counties — keeps Google from treating them as
   *  near-duplicate doorway pages. */
  localContext?: string;
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
    localContext:
      'Orange County’s canopy is a mix of live oaks, water oaks, southern magnolias, and sabal palms — heavy in historic neighborhoods (Winter Park, Maitland, College Park) and lighter in the newer master-planned communities (Lake Nona, Horizon West). The county and City of Orlando both protect mature live oaks under tree ordinances, so most removals require a permit and an arborist’s written justification. The 2004 hurricane season (Charley, Frances, Jeanne) still shapes how local property owners think about pre-storm structural pruning here.',
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
    localContext:
      'Seminole County’s lakefront neighborhoods carry a denser oak hammock canopy than the metro average — Lake Mary, Longwood, and Sanford all feature century-old live oaks and bald cypress along the lakes. Sanford’s historic district holds some of the oldest specimen trees in the Orlando area, and heritage tree protection is taken seriously here. The I-4 corridor through the county is a well-defined storm path, which makes proactive structural pruning a routine ask from local property owners.',
  },
  {
    slug: 'osceola-county',
    county: 'Osceola',
    name: 'Osceola County, FL',
    region: 'South metro — Kissimmee, St. Cloud, Celebration',
    blurb:
      'Osceola County stretches from Kissimmee’s mature neighborhoods through Celebration’s planned canopy to St. Cloud’s ranch country — every corner is inside our service radius.',
    highlights: ['Kissimmee', 'Celebration', 'St. Cloud'],
    localContext:
      'Osceola County’s tree work mixes established Kissimmee neighborhoods (mature oaks, palms, magnolias) with the new-construction palm plantings of Celebration and the lakeside oak-and-cypress lots of St. Cloud along East Lake Tohopekaliga. The county sits in a hurricane corridor that has shaped both building codes and the local appetite for proactive pruning. HOA-managed communities here (Celebration especially) have specific species-and-form requirements we work within on every job.',
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
    localContext:
      'Lake County’s terrain — rolling hills, 1,400+ named lakes, sandy soils — produces an unusual local canopy: bald cypress along the lake edges, live oaks in the hammocks, longleaf pine on the higher ground. Clermont’s elevation (the highest natural point in peninsular Florida) gives it a distinct micro-climate and drainage profile. Mount Dora and Eustis historic districts carry some of the oldest specimen trees in Central Florida — preservation pruning, not removal, is the routine ask here.',
  },
  {
    slug: 'volusia-county',
    county: 'Volusia',
    name: 'Volusia County, FL',
    region: 'Northeast — DeLand, Deltona, the St. Johns corridor',
    blurb:
      'Volusia County’s mix of pine flatwoods and oak hammocks meets the St. Johns River corridor. We work DeLand, Deltona, DeBary, and Orange City year-round.',
    highlights: ['Deltona', 'DeBary', 'DeLand', 'Orange City'],
    localContext:
      'Volusia County’s canopy mixes Deltona’s pine flatwoods (laurel oak, slash pine, sand pine) with DeLand’s oak hammocks and the St. Johns River corridor cypress. DeLand’s Stetson-era historic district carries a heritage live oak canopy worth protecting — preservation work, not removal, is what we do most here. Storm exposure increases moving east toward the Atlantic coast, which shapes pre-hurricane structural pruning priorities for properties closer to Daytona.',
  },
  {
    slug: 'brevard-county',
    county: 'Brevard',
    name: 'Brevard County, FL',
    region: 'Space Coast — Titusville, Cocoa, the Indian River',
    blurb:
      'On the Space Coast, salt spray, hurricane exposure, and sandy soils all change how trees behave. Our Brevard service area covers Titusville and Cocoa within our 50-mile radius.',
    highlights: ['Titusville', 'Cocoa'],
    localContext:
      'Brevard County’s Space Coast position changes the species mix dramatically: sabal, washingtonia, and queen palms dominate, while oak species are scrub varieties more salt-tolerant than their inland cousins. Lethal bronzing pressure is significant in this corridor — preventive oxytetracycline (OTC) trunk injections are routine palm-care here. Hurricane exposure is among the highest in our service area, which makes pre-storm structural pruning a recurring conversation.',
  },
  {
    slug: 'polk-county',
    county: 'Polk',
    name: 'Polk County, FL',
    region: 'Southwest — Davenport, Haines City, the Four Corners area',
    blurb:
      'Northern Polk County borders the Disney-area Four Corners region. We serve Davenport, Haines City, and the surrounding rural-residential mix from our Apopka, FL base.',
    highlights: ['Davenport', 'Haines City'],
    localContext:
      'Northern Polk County’s Four Corners region pairs Disney-area residential development with citrus-grove remnants and rural-residential mix. Mature oak hammocks border new master-planned communities and short-term rental properties, so jobs range from heritage tree preservation in older neighborhoods to fresh palm-trim cadence for HOAs and vacation-rental managers. Soil profile here is sandier and better-drained than the metro, which changes how we approach plant health care.',
  },
];

export const getCountyBySlug = (slug: string) => counties.find((c) => c.slug === slug);
export const getCountyByName = (name: string) => counties.find((c) => c.county === name);
