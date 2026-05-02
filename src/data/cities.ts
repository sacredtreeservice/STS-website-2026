export type City = {
  slug: string;
  name: string;
  county: string;
  // distance from HQ in Orlando, miles (approx — used to keep us inside the 50mi radius)
  miles: number;
  // a one-line local hook to keep service × city pages from being doorway pages
  hook?: string;
};

// Central Florida cities within ~50 miles of HQ (7421 Grovewood Ct, Orlando 32818).
// Order: closest-out, alphabetized within each ring.
export const cities: City[] = [
  // Inner Orlando ring (≤10 mi)
  { slug: 'orlando', name: 'Orlando', county: 'Orange', miles: 0, hook: 'Live oaks and southern magnolias define Orlando’s historic neighborhoods — and storm season tests them every year.' },
  { slug: 'pine-hills', name: 'Pine Hills', county: 'Orange', miles: 4 },
  { slug: 'ocoee', name: 'Ocoee', county: 'Orange', miles: 5, hook: 'Ocoee’s mature oak canopy needs proactive pruning to handle Florida summer storms.' },
  { slug: 'winter-park', name: 'Winter Park', county: 'Orange', miles: 7, hook: 'Winter Park’s tree-lined brick streets and lakeside estates demand careful, preservation-minded tree care.' },
  { slug: 'maitland', name: 'Maitland', county: 'Orange', miles: 8 },
  { slug: 'apopka', name: 'Apopka', county: 'Orange', miles: 9, hook: 'Known as the “Indoor Foliage Capital,” Apopka properties often feature specimen trees worth preserving.' },
  { slug: 'belle-isle', name: 'Belle Isle', county: 'Orange', miles: 9 },
  { slug: 'edgewood', name: 'Edgewood', county: 'Orange', miles: 9 },

  // Mid ring (10–20 mi)
  { slug: 'altamonte-springs', name: 'Altamonte Springs', county: 'Seminole', miles: 11 },
  { slug: 'casselberry', name: 'Casselberry', county: 'Seminole', miles: 12 },
  { slug: 'longwood', name: 'Longwood', county: 'Seminole', miles: 13 },
  { slug: 'winter-garden', name: 'Winter Garden', county: 'Orange', miles: 13, hook: 'Winter Garden’s growing residential developments mix new builds with mature native canopy.' },
  { slug: 'fern-park', name: 'Fern Park', county: 'Seminole', miles: 12 },
  { slug: 'goldenrod', name: 'Goldenrod', county: 'Orange', miles: 13 },
  { slug: 'oviedo', name: 'Oviedo', county: 'Seminole', miles: 16 },
  { slug: 'lake-mary', name: 'Lake Mary', county: 'Seminole', miles: 17 },
  { slug: 'windermere', name: 'Windermere', county: 'Orange', miles: 14, hook: 'Windermere’s lakefront estates often have mature oaks and palms requiring specialty equipment.' },
  { slug: 'dr-phillips', name: 'Dr. Phillips', county: 'Orange', miles: 12 },
  { slug: 'hunters-creek', name: 'Hunters Creek', county: 'Orange', miles: 14 },
  { slug: 'meadow-woods', name: 'Meadow Woods', county: 'Orange', miles: 14 },
  { slug: 'lake-buena-vista', name: 'Lake Buena Vista', county: 'Orange', miles: 14 },
  { slug: 'kissimmee', name: 'Kissimmee', county: 'Osceola', miles: 17 },
  { slug: 'sanford', name: 'Sanford', county: 'Seminole', miles: 19 },

  // Outer ring (20–35 mi)
  { slug: 'celebration', name: 'Celebration', county: 'Osceola', miles: 22 },
  { slug: 'lake-nona', name: 'Lake Nona', county: 'Orange', miles: 17 },
  { slug: 'st-cloud', name: 'St. Cloud', county: 'Osceola', miles: 25 },
  { slug: 'clermont', name: 'Clermont', county: 'Lake', miles: 20 },
  { slug: 'mount-dora', name: 'Mount Dora', county: 'Lake', miles: 25, hook: 'Mount Dora’s historic district features mature live oaks and camphors — many over a century old.' },
  { slug: 'eustis', name: 'Eustis', county: 'Lake', miles: 28 },
  { slug: 'tavares', name: 'Tavares', county: 'Lake', miles: 28 },
  { slug: 'leesburg', name: 'Leesburg', county: 'Lake', miles: 35 },
  { slug: 'deltona', name: 'Deltona', county: 'Volusia', miles: 28 },
  { slug: 'debary', name: 'DeBary', county: 'Volusia', miles: 25 },
  { slug: 'deland', name: 'DeLand', county: 'Volusia', miles: 32 },
  { slug: 'orange-city', name: 'Orange City', county: 'Volusia', miles: 28 },

  // Edge ring (35–50 mi)
  { slug: 'titusville', name: 'Titusville', county: 'Brevard', miles: 40 },
  { slug: 'cocoa', name: 'Cocoa', county: 'Brevard', miles: 47 },
  { slug: 'haines-city', name: 'Haines City', county: 'Polk', miles: 42 },
  { slug: 'davenport', name: 'Davenport', county: 'Polk', miles: 32 },
  { slug: 'four-corners', name: 'Four Corners', county: 'Lake', miles: 26 },
  { slug: 'minneola', name: 'Minneola', county: 'Lake', miles: 24 },
  { slug: 'groveland', name: 'Groveland', county: 'Lake', miles: 30 },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
