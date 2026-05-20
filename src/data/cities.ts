export type City = {
  slug: string;
  name: string;
  county: string;
  // distance from HQ in Orlando, miles (approx — used to keep us inside the 50mi radius)
  miles: number;
  // a one-line local hook to keep service × city pages from being doorway pages
  hook?: string;
};

// Central Florida cities within ~50 miles of our Apopka, FL base.
// Order: closest-out, alphabetized within each ring.
export const cities: City[] = [
  // Inner Orlando ring (≤10 mi)
  { slug: 'orlando', name: 'Orlando', county: 'Orange', miles: 0, hook: 'Live oaks and southern magnolias define Orlando’s historic neighborhoods — and storm season tests them every year.' },
  { slug: 'pine-hills', name: 'Pine Hills', county: 'Orange', miles: 4, hook: 'Pine Hills’ residential streets carry mature water oaks and laurel oaks — both species especially vulnerable to storm wind.' },
  { slug: 'ocoee', name: 'Ocoee', county: 'Orange', miles: 5, hook: 'Ocoee’s mature oak canopy needs proactive pruning to handle Florida summer storms.' },
  { slug: 'winter-park', name: 'Winter Park', county: 'Orange', miles: 7, hook: 'Winter Park’s tree-lined brick streets and lakeside estates demand careful, preservation-minded tree care.' },
  { slug: 'maitland', name: 'Maitland', county: 'Orange', miles: 8, hook: 'Maitland’s lakeside neighborhoods carry decades-old live oaks and cypress along the chain of lakes — preservation-pruning territory.' },
  { slug: 'apopka', name: 'Apopka', county: 'Orange', miles: 9, hook: 'Known as the “Indoor Foliage Capital,” Apopka properties often feature specimen trees worth preserving.' },
  { slug: 'belle-isle', name: 'Belle Isle', county: 'Orange', miles: 9, hook: 'Belle Isle’s lakeside lots blend mature oaks with cypress along Lake Conway — almost every property has a tree story.' },
  { slug: 'edgewood', name: 'Edgewood', county: 'Orange', miles: 9, hook: 'Edgewood sits between Lake Holden and the downtown canopy, with established oaks and sabal palms on most properties.' },

  // Mid ring (10–20 mi)
  { slug: 'altamonte-springs', name: 'Altamonte Springs', county: 'Seminole', miles: 11, hook: 'Altamonte’s older subdivisions feature dense laurel oak canopy that needs proactive pruning to weather hurricane season.' },
  { slug: 'casselberry', name: 'Casselberry', county: 'Seminole', miles: 12, hook: 'Casselberry’s lake-dotted neighborhoods carry mature oaks and bald cypress — and the wet soils that come with them.' },
  { slug: 'longwood', name: 'Longwood', county: 'Seminole', miles: 13, hook: 'Longwood’s heritage live oaks define the historic downtown grid — many require careful structural pruning to preserve.' },
  { slug: 'winter-garden', name: 'Winter Garden', county: 'Orange', miles: 13, hook: 'Winter Garden’s growing residential developments mix new builds with mature native canopy.' },
  { slug: 'fern-park', name: 'Fern Park', county: 'Seminole', miles: 12, hook: 'Fern Park’s mature laurel and water oak canopy south of 434 means routine storm-season pruning matters here.' },
  { slug: 'goldenrod', name: 'Goldenrod', county: 'Orange', miles: 13, hook: 'Goldenrod sits in a transitional belt of pine flatwoods and mature oak — both common species and both common storm casualties.' },
  { slug: 'oviedo', name: 'Oviedo', county: 'Seminole', miles: 16, hook: 'Oviedo’s growing residential developments mix preserved native oaks with newer landscape plantings.' },
  { slug: 'lake-mary', name: 'Lake Mary', county: 'Seminole', miles: 17, hook: 'Lake Mary’s master-planned communities preserve mature oak canopy alongside ornamental palms — HOA compliance is part of every job.' },
  { slug: 'windermere', name: 'Windermere', county: 'Orange', miles: 14, hook: 'Windermere’s lakefront estates often have mature oaks and palms requiring specialty equipment.' },
  { slug: 'dr-phillips', name: 'Dr. Phillips', county: 'Orange', miles: 12, hook: 'Dr. Phillips estate lots blend mature live oaks with sabal and queen palms — high property values make preservation paramount.' },
  { slug: 'hunters-creek', name: 'Hunters Creek', county: 'Orange', miles: 14, hook: 'Hunters Creek’s planned community pairs mature shade oaks with HOA-managed landscape standards we work within on every job.' },
  { slug: 'meadow-woods', name: 'Meadow Woods', county: 'Orange', miles: 14, hook: 'Meadow Woods residential lots see laurel and water oaks that need regular structural pruning to handle Florida storm winds.' },
  { slug: 'lake-buena-vista', name: 'Lake Buena Vista', county: 'Orange', miles: 14, hook: 'Lake Buena Vista properties — residential and resort-adjacent — carry professional landscape standards and large specimen palms.' },
  { slug: 'kissimmee', name: 'Kissimmee', county: 'Osceola', miles: 17, hook: 'Kissimmee’s mix of established neighborhoods and new construction means everything from heritage oaks to fresh palm plantings.' },
  { slug: 'sanford', name: 'Sanford', county: 'Seminole', miles: 19, hook: 'Sanford’s historic district carries some of the oldest live oaks in the Orlando area, including specimen trees over a century old.' },

  // Outer ring (20–35 mi)
  { slug: 'celebration', name: 'Celebration', county: 'Osceola', miles: 22, hook: 'Celebration’s planned-community design specifies which species go where — palm care and structured pruning are routine here.' },
  { slug: 'lake-nona', name: 'Lake Nona', county: 'Orange', miles: 17, hook: 'Lake Nona’s newer developments emphasize sabal palms and shade-tree plantings now hitting the 5–10 year structural-pruning window.' },
  { slug: 'st-cloud', name: 'St. Cloud', county: 'Osceola', miles: 25, hook: 'St. Cloud’s older lakeside lots carry mature oaks and cypress along East Lake Toho, with newer subdivisions adding palms.' },
  { slug: 'clermont', name: 'Clermont', county: 'Lake', miles: 20, hook: 'Clermont’s elevation — among Florida’s highest — gives it a different oak community than the metro, with sand-soil drainage to match.' },
  { slug: 'mount-dora', name: 'Mount Dora', county: 'Lake', miles: 25, hook: 'Mount Dora’s historic district features mature live oaks and camphors — many over a century old.' },
  { slug: 'eustis', name: 'Eustis', county: 'Lake', miles: 28, hook: 'Eustis’s lakeside historic homes carry century-old live oaks, magnolias, and remnants of the area’s citrus-grove heritage.' },
  { slug: 'tavares', name: 'Tavares', county: 'Lake', miles: 28, hook: 'Tavares — the seaplane city — has lakeside oak hammocks and mature cypress that define its waterfront character.' },
  { slug: 'leesburg', name: 'Leesburg', county: 'Lake', miles: 35, hook: 'Leesburg’s older neighborhoods and lakeside lots carry mature live oaks, longleaf pines, and the occasional century-old magnolia.' },
  { slug: 'deltona', name: 'Deltona', county: 'Volusia', miles: 28, hook: 'Deltona’s wooded subdivisions feature dense laurel oak and slash pine canopy that needs storm-season pruning.' },
  { slug: 'debary', name: 'DeBary', county: 'Volusia', miles: 25, hook: 'DeBary’s mix of established and new homes runs from oak-canopied historic streets to palm-and-oak suburban lots.' },
  { slug: 'deland', name: 'DeLand', county: 'Volusia', miles: 32, hook: 'DeLand’s Stetson-era streets and historic district carry a heritage oak canopy worth protecting — preservation work, not removal.' },
  { slug: 'orange-city', name: 'Orange City', county: 'Volusia', miles: 28, hook: 'Orange City’s namesake citrus history gives way to mature oak canopy and sabal palms in established neighborhoods.' },

  // Edge ring (35–50 mi)
  { slug: 'titusville', name: 'Titusville', county: 'Brevard', miles: 40, hook: 'Titusville’s Space Coast location means salt-tolerant sabal and washingtonia palms alongside scrub oak hammocks — and hurricane exposure.' },
  { slug: 'cocoa', name: 'Cocoa', county: 'Brevard', miles: 47, hook: 'Cocoa’s coastal properties carry salt-spray-tolerant palms — sabal, queen, washingtonia — that need specific care to thrive.' },
  { slug: 'haines-city', name: 'Haines City', county: 'Polk', miles: 42, hook: 'Haines City’s mix of citrus-grove history and new residential developments features mature oaks and the palms lining newer subdivisions.' },
  { slug: 'davenport', name: 'Davenport', county: 'Polk', miles: 32, hook: 'Davenport’s rapid-growth corridor pairs preserved oak hammocks with the palm-heavy landscaping of newer master-planned communities.' },
  { slug: 'four-corners', name: 'Four Corners', county: 'Lake', miles: 26, hook: 'Four Corners’ resort-adjacent neighborhoods feature heavy ornamental palm plantings and mature shade oaks across short-term-rental properties.' },
  { slug: 'minneola', name: 'Minneola', county: 'Lake', miles: 24, hook: 'Minneola’s hill-country setting near Lake Minneola features pine flatwoods, mature oak hammocks, and a different soil profile than the metro.' },
  { slug: 'groveland', name: 'Groveland', county: 'Lake', miles: 30, hook: 'Groveland’s growing neighborhoods sit on former citrus land, with a mix of remnant grove trees, mature oaks, and new ornamental palms.' },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
