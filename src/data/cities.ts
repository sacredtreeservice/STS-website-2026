export type City = {
  slug: string;
  name: string;
  county: string;
  // distance from HQ in Orlando, miles (approx — used to keep us inside the 50mi radius)
  miles: number;
  // a one-line local hook to keep service × city pages from being doorway pages
  hook?: string;
  // 2–3 sentence unique lead paragraph: canopy character, terrain, neighborhood
  // feel, storm exposure. Expands the hook with real local color.
  intro?: string;
  // 3–6 tree/palm species genuinely common to this area. Safe regional botany only.
  species?: string[];
  // 2–4 real, verifiable local references (lakes, historic districts, major parks/roads).
  landmarks?: string[];
};

// Central Florida cities within ~50 miles of our Apopka, FL base.
// Order: closest-out, alphabetized within each ring.
export const cities: City[] = [
  // Inner Orlando ring (≤10 mi)
  {
    slug: 'orlando',
    name: 'Orlando',
    county: 'Orange',
    miles: 0,
    hook: 'Live oaks and southern magnolias define Orlando’s historic neighborhoods — and storm season tests them every year.',
    intro:
      'Orlando’s older neighborhoods — College Park, Delaney Park, Thornton Park, and the streets ringing Lake Eola — carry a mature live oak and laurel oak canopy that shades much of the urban core. The city sits low among dozens of small lakes, so wet soils and root-plate stability come up often on the lakeside lots. Summer thunderstorms and the occasional tropical system put that big spreading canopy to the test most years, which is why structural pruning is steady work here.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm', 'camphor'],
    landmarks: ['Lake Eola', 'College Park', 'Delaney Park', 'Leu Gardens'],
  },
  {
    slug: 'pine-hills',
    name: 'Pine Hills',
    county: 'Orange',
    miles: 4,
    hook: 'Pine Hills’ residential streets carry mature water oaks and laurel oaks — both species especially vulnerable to storm wind.',
    intro:
      'Pine Hills grew through the mid-century housing boom, and many of those original lots are now shaded by full-grown water oaks and laurel oaks planted decades ago. Both species are fast-growing and relatively short-lived, so they tend to develop weak branch unions and interior decay as they age. That combination makes routine crown cleaning and structural pruning the practical priority across these established streets.',
    species: ['water oak', 'laurel oak', 'live oak', 'slash pine', 'sabal palm'],
    landmarks: ['Barnett Park', 'Silver Star Road'],
  },
  {
    slug: 'ocoee',
    name: 'Ocoee',
    county: 'Orange',
    miles: 5,
    hook: 'Ocoee’s mature oak canopy needs proactive pruning to handle Florida summer storms.',
    intro:
      'Ocoee blends older homes near downtown and Starke Lake with newer subdivisions that filled in along the SR-429 corridor. The established sections carry a healthy live oak and laurel oak canopy, while the lakefront lots add cypress at the water’s edge. As the West Orange area keeps growing, a lot of the work here is balancing preserved mature shade trees against new construction nearby.',
    species: ['live oak', 'laurel oak', 'water oak', 'bald cypress', 'sabal palm'],
    landmarks: ['Starke Lake', 'West Orange Trail', 'Lake Apopka'],
  },
  {
    slug: 'winter-park',
    name: 'Winter Park',
    county: 'Orange',
    miles: 7,
    hook: 'Winter Park’s tree-lined brick streets and lakeside estates demand careful, preservation-minded tree care.',
    intro:
      'Winter Park is one of the most heavily canopied communities in the metro, with arching live oaks over its brick streets and grand specimen trees on the estates ringing the Winter Park Chain of Lakes. The city protects its trees seriously, and many of these oaks are decades to a century old. Work here is almost always preservation-minded — crown cleaning, deadwood removal, and careful structural pruning rather than removal.',
    species: ['live oak', 'laurel oak', 'southern magnolia', 'bald cypress', 'sabal palm', 'camphor'],
    landmarks: ['Park Avenue', 'Winter Park Chain of Lakes', 'Lake Virginia', 'Mead Botanical Garden'],
  },
  {
    slug: 'maitland',
    name: 'Maitland',
    county: 'Orange',
    miles: 8,
    hook: 'Maitland’s lakeside neighborhoods carry decades-old live oaks and cypress along the chain of lakes — preservation-pruning territory.',
    intro:
      'Maitland’s neighborhoods wrap around Lake Maitland, Lake Sybelia, and the connected chain, and the shoreline lots carry mature live oaks paired with bald cypress at the water. It is an older, established community where the canopy has had decades to fill in. Lakeside root zones and overhanging limbs over docks and homes make thoughtful, preservation-focused pruning the usual approach here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'southern magnolia', 'sabal palm'],
    landmarks: ['Lake Maitland', 'Lake Lily', 'Maitland Art Center'],
  },
  {
    slug: 'apopka',
    name: 'Apopka',
    county: 'Orange',
    miles: 9,
    hook: 'Known as the “Indoor Foliage Capital,” Apopka properties often feature specimen trees worth preserving.',
    intro:
      'Apopka — our home base — earned its “Indoor Foliage Capital” reputation from a deep local nursery industry, and that horticultural character shows in the variety of specimen trees and ornamentals on local properties. The land north of Lake Apopka runs from established in-town lots to newer subdivisions pushing toward Wekiva. Live oaks, laurel oaks, and slash pine make up the bulk of the canopy, with sabal palms throughout.',
    species: ['live oak', 'laurel oak', 'water oak', 'slash pine', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Apopka', 'Wekiwa Springs State Park', 'Kit Land Nelson Park'],
  },
  {
    slug: 'belle-isle',
    name: 'Belle Isle',
    county: 'Orange',
    miles: 9,
    hook: 'Belle Isle’s lakeside lots blend mature oaks with cypress along Lake Conway — almost every property has a tree story.',
    intro:
      'Belle Isle is built around the Lake Conway chain, and water is never far from any lot. The shorelines carry mature live oaks and laurel oaks with bald cypress standing right at the edge. Lakefront soils, exposed root plates, and limbs reaching out over docks and water make stability assessment and careful pruning a regular part of the work here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Conway', 'Cornelia Avenue'],
  },
  {
    slug: 'edgewood',
    name: 'Edgewood',
    county: 'Orange',
    miles: 9,
    hook: 'Edgewood sits between Lake Holden and the downtown canopy, with established oaks and sabal palms on most properties.',
    intro:
      'Edgewood is a small, established city tucked along the Orange Avenue corridor between Lake Holden and Lake Conway. Its lots carry a settled canopy of live oaks and laurel oaks with sabal palms mixed in, and the lakeside parcels add cypress at the shoreline. The mature, close-set trees here make routine crown cleaning and deadwood work the steady need.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'bald cypress'],
    landmarks: ['Lake Holden', 'Orange Avenue'],
  },

  // Mid ring (10–20 mi)
  {
    slug: 'altamonte-springs',
    name: 'Altamonte Springs',
    county: 'Seminole',
    miles: 11,
    hook: 'Altamonte’s older subdivisions feature dense laurel oak canopy that needs proactive pruning to weather hurricane season.',
    intro:
      'Altamonte Springs filled in heavily through the 1970s and 80s, and the subdivisions around Lake Orienta and Cranes Roost carry a dense laurel oak canopy from that era. Those laurel oaks are now reaching the age where interior decay and weak unions become a concern. Sitting in the I-4 corridor, the city sees its share of storm wind, so proactive structural pruning is a routine ask here.',
    species: ['laurel oak', 'water oak', 'live oak', 'sabal palm', 'slash pine'],
    landmarks: ['Cranes Roost Park', 'Lake Orienta', 'Lake Lotus Park'],
  },
  {
    slug: 'casselberry',
    name: 'Casselberry',
    county: 'Seminole',
    miles: 12,
    hook: 'Casselberry’s lake-dotted neighborhoods carry mature oaks and bald cypress — and the wet soils that come with them.',
    intro:
      'Casselberry is dotted with small lakes — Lake Concord, Lake Howell, Triplet Lake — and the neighborhoods built around them sit on noticeably wetter ground than the metro average. The canopy runs to mature oaks with bald cypress along the water. Those saturated lakeside soils affect root anchorage, so stability and drainage come up often when we assess trees here.',
    species: ['laurel oak', 'water oak', 'live oak', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Concord', 'Lake Howell', 'Secret Lake Park'],
  },
  {
    slug: 'longwood',
    name: 'Longwood',
    county: 'Seminole',
    miles: 13,
    hook: 'Longwood’s heritage live oaks define the historic downtown grid — many require careful structural pruning to preserve.',
    intro:
      'Longwood’s historic district holds one of the oldest street grids in Seminole County, shaded by heritage live oaks that have stood for generations. The surrounding neighborhoods carry mature oak hammock canopy typical of the area’s older lakeside development. Heritage tree protection matters here, so the work leans toward careful structural pruning and preservation rather than removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm'],
    landmarks: ['Longwood Historic District', 'Reiter Park', 'Big Tree Park'],
  },
  {
    slug: 'winter-garden',
    name: 'Winter Garden',
    county: 'Orange',
    miles: 13,
    hook: 'Winter Garden’s growing residential developments mix new builds with mature native canopy.',
    intro:
      'Winter Garden pairs a restored brick-street historic downtown with fast-growing residential development spreading toward Horizon West. The older sections near Plant Street carry mature live oaks, while the newer master-planned communities mix preserved oak hammock with fresh palm and shade-tree plantings. That split — heritage canopy alongside young trees entering their structural-pruning window — defines much of the work here.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'southern magnolia'],
    landmarks: ['Plant Street', 'West Orange Trail', 'Lake Apopka', 'Newton Park'],
  },
  {
    slug: 'fern-park',
    name: 'Fern Park',
    county: 'Seminole',
    miles: 12,
    hook: 'Fern Park’s mature laurel and water oak canopy south of 434 means routine storm-season pruning matters here.',
    intro:
      'Fern Park is a compact, established community south of SR-434 along the US-17/92 corridor, near Lake Lotus and the headwaters of the Little Wekiva. Its lots carry mature laurel oaks and water oaks settled in from earlier decades of development. Those aging fast-growing oaks make routine crown cleaning and storm-season pruning the practical focus here.',
    species: ['laurel oak', 'water oak', 'live oak', 'sabal palm', 'slash pine'],
    landmarks: ['Lake Lotus Park', 'US-17/92'],
  },
  {
    slug: 'goldenrod',
    name: 'Goldenrod',
    county: 'Orange',
    miles: 13,
    hook: 'Goldenrod sits in a transitional belt of pine flatwoods and mature oak — both common species and both common storm casualties.',
    intro:
      'Goldenrod sits on the Orange–Seminole line in a transitional belt where remnant pine flatwoods meet established oak neighborhoods. The mix of slash pine and mature laurel and water oak is typical of this part of the metro. Both pine and fast-growing oak are common storm casualties, so proactive thinning and structural pruning are steady needs across these lots.',
    species: ['slash pine', 'laurel oak', 'water oak', 'live oak', 'sabal palm'],
    landmarks: ['Goldenrod Road', 'Aloma Avenue'],
  },
  {
    slug: 'oviedo',
    name: 'Oviedo',
    county: 'Seminole',
    miles: 16,
    hook: 'Oviedo’s growing residential developments mix preserved native oaks with newer landscape plantings.',
    intro:
      'Oviedo grew quickly from former farm and grove land near the Econlockhatchee River, and its newer subdivisions often preserve stands of native oak alongside fresh landscape plantings. The river corridor and surrounding hammocks add bald cypress and a richer mix of hardwoods. Much of the work here balances mature preserved oaks against the young trees filling in around new construction.',
    species: ['live oak', 'laurel oak', 'water oak', 'bald cypress', 'sabal palm', 'longleaf pine'],
    landmarks: ['Econlockhatchee River', 'Oviedo on the Park', 'Black Hammock'],
  },
  {
    slug: 'lake-mary',
    name: 'Lake Mary',
    county: 'Seminole',
    miles: 17,
    hook: 'Lake Mary’s master-planned communities preserve mature oak canopy alongside ornamental palms — HOA compliance is part of every job.',
    intro:
      'Lake Mary built much of its growth around master-planned communities that preserved mature oak hammock canopy and layered in ornamental palms. The neighborhoods around Lake Mary itself and the Heathrow area carry established live oaks alongside maintained landscape standards. HOA species-and-form requirements are part of nearly every job here, so the pruning has to keep both the tree and the community guidelines in mind.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'queen palm', 'southern magnolia'],
    landmarks: ['Lake Mary Boulevard', 'Heathrow', 'Central Park'],
  },
  {
    slug: 'windermere',
    name: 'Windermere',
    county: 'Orange',
    miles: 14,
    hook: 'Windermere’s lakefront estates often have mature oaks and palms requiring specialty equipment.',
    intro:
      'Windermere sits among the Butler Chain of Lakes, and its estate lots carry grand live oaks paired with sabal and queen palms across large, often heavily landscaped grounds. The town’s signature unpaved roads run beneath a settled oak canopy. Large specimen trees, lakefront access, and tight estate sites mean a lot of this work calls for careful rigging and specialty equipment.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia', 'bald cypress'],
    landmarks: ['Butler Chain of Lakes', 'Lake Down', 'Main Street'],
  },
  {
    slug: 'dr-phillips',
    name: 'Dr. Phillips',
    county: 'Orange',
    miles: 12,
    hook: 'Dr. Phillips estate lots blend mature live oaks with sabal and queen palms — high property values make preservation paramount.',
    intro:
      'Dr. Phillips takes its name from the citrus pioneer whose groves once covered this area near the Big Sand Lake chain, and today it is one of the metro’s premier residential districts. The estate lots blend mature live oaks with sabal and queen palms across well-kept landscapes. With high property values and prominent specimen trees, preservation pruning and tree health are usually the priority over removal.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia'],
    landmarks: ['Big Sand Lake', 'Restaurant Row (Sand Lake Road)', 'Dr. P. Phillips Community Park'],
  },
  {
    slug: 'hunters-creek',
    name: 'Hunters Creek',
    county: 'Orange',
    miles: 14,
    hook: 'Hunters Creek’s planned community pairs mature shade oaks with HOA-managed landscape standards we work within on every job.',
    intro:
      'Hunters Creek is a large planned community in south Orange County where the original landscape plantings have now matured into a full shade-oak canopy. Live oaks and laurel oaks line the streets alongside palms set to community design standards. HOA landscape rules shape nearly every job, so the pruning is done to keep trees healthy and structurally sound while meeting the neighborhood’s form requirements.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'queen palm'],
    landmarks: ['Hunters Creek Boulevard', 'Town Center'],
  },
  {
    slug: 'meadow-woods',
    name: 'Meadow Woods',
    county: 'Orange',
    miles: 14,
    hook: 'Meadow Woods residential lots see laurel and water oaks that need regular structural pruning to handle Florida storm winds.',
    intro:
      'Meadow Woods is a sprawling residential community in south Orange County built largely from the 1980s onward, with the kind of fast-growing oak canopy that comes with that era of development. Laurel and water oaks dominate the streets, with sabal palms throughout. Because both oak species are prone to weak unions as they mature, regular structural pruning to handle Florida storm winds is the steady work here.',
    species: ['laurel oak', 'water oak', 'live oak', 'sabal palm', 'slash pine'],
    landmarks: ['Meadow Woods Park', 'Landstar Boulevard'],
  },
  {
    slug: 'lake-buena-vista',
    name: 'Lake Buena Vista',
    county: 'Orange',
    miles: 14,
    hook: 'Lake Buena Vista properties — residential and resort-adjacent — carry professional landscape standards and large specimen palms.',
    intro:
      'Lake Buena Vista sits in the resort district near the Walt Disney World area, where landscaping is held to a high professional standard. Properties here carry large specimen palms and maintained shade trees suited to high-visibility, high-traffic settings. The work tends toward palm care and structured pruning that keeps trees clean, safe, and consistent with those landscape expectations.',
    species: ['sabal palm', 'queen palm', 'washingtonia palm', 'live oak', 'southern magnolia'],
    landmarks: ['Walt Disney World area', 'Lake Buena Vista'],
  },
  {
    slug: 'kissimmee',
    name: 'Kissimmee',
    county: 'Osceola',
    miles: 17,
    hook: 'Kissimmee’s mix of established neighborhoods and new construction means everything from heritage oaks to fresh palm plantings.',
    intro:
      'Kissimmee runs from a historic downtown near Lake Tohopekaliga out to fast-growing new construction along the US-192 corridor. The older neighborhoods carry heritage live oaks, magnolias, and mature palms, while the newer subdivisions add fresh palm plantings by the hundreds. That range — from century-old shade trees to young landscape stock — means the work here spans the full spectrum of tree care.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia', 'bald cypress'],
    landmarks: ['Lake Tohopekaliga', 'Downtown Kissimmee', 'Lakefront Park'],
  },
  {
    slug: 'sanford',
    name: 'Sanford',
    county: 'Seminole',
    miles: 19,
    hook: 'Sanford’s historic district carries some of the oldest live oaks in the Orlando area, including specimen trees over a century old.',
    intro:
      'Sanford’s historic district on the south shore of Lake Monroe holds some of the oldest live oaks in the Orlando area, many over a century old and central to the city’s character. The brick streets and early-1900s homes are shaded by a heritage canopy that the community works to protect. Preservation pruning — crown cleaning, deadwood removal, careful structural work — is the routine here, not removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Monroe', 'Sanford Historic District', 'Downtown / First Street', 'St. Johns River'],
  },

  // Outer ring (20–35 mi)
  {
    slug: 'celebration',
    name: 'Celebration',
    county: 'Osceola',
    miles: 22,
    hook: 'Celebration’s planned-community design specifies which species go where — palm care and structured pruning are routine here.',
    intro:
      'Celebration was master-planned from the ground up, and its landscape architecture specifies which species go where down to the street. The result is a consistent canopy of live oaks, southern magnolias, and carefully placed palms throughout the town. That design discipline means the work here is structured pruning and palm care that keeps each tree true to the community’s original landscape intent.',
    species: ['live oak', 'southern magnolia', 'sabal palm', 'queen palm', 'bald cypress'],
    landmarks: ['Celebration Town Center', 'Celebration Lake'],
  },
  {
    slug: 'lake-nona',
    name: 'Lake Nona',
    county: 'Orange',
    miles: 17,
    hook: 'Lake Nona’s newer developments emphasize sabal palms and shade-tree plantings now hitting the 5–10 year structural-pruning window.',
    intro:
      'Lake Nona is one of the metro’s newest large-scale developments, built out around the Medical City area over the past two decades. Its streetscapes emphasize sabal palms and young shade-tree plantings that are now hitting the 5–10 year window where structural pruning shapes their long-term form. Getting that early structure right is the defining work here — setting these trees up to mature strong.',
    species: ['sabal palm', 'live oak', 'southern magnolia', 'queen palm', 'bald cypress'],
    landmarks: ['Lake Nona Medical City', 'Boxi Park', 'Lake Nona Town Center'],
  },
  {
    slug: 'st-cloud',
    name: 'St. Cloud',
    county: 'Osceola',
    miles: 25,
    hook: 'St. Cloud’s older lakeside lots carry mature oaks and cypress along East Lake Toho, with newer subdivisions adding palms.',
    intro:
      'St. Cloud sits along the shore of East Lake Tohopekaliga, and its older lakeside lots carry mature live oaks with bald cypress standing in the shallows. Beyond the established core, newer subdivisions stretch into former ranch land with palm-heavy landscaping. The contrast between heritage lakeside oaks and fresh suburban plantings shapes the range of work here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['East Lake Tohopekaliga', 'St. Cloud Lakefront Park', 'Lake Toho'],
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    county: 'Lake',
    miles: 20,
    hook: 'Clermont’s elevation — among Florida’s highest — gives it a different oak community than the metro, with sand-soil drainage to match.',
    intro:
      'Clermont sits among rolling hills near the highest natural ground in peninsular Florida, on sandy, well-drained soils that set its canopy apart from the flat metro. Sand pine and longleaf pine hold the higher ground while live oaks fill the hammocks and bald cypress lines the Clermont Chain of Lakes. That elevation and drainage profile change how trees root and how plant health care is approached here.',
    species: ['live oak', 'laurel oak', 'sand pine', 'longleaf pine', 'bald cypress', 'sabal palm'],
    landmarks: ['Clermont Chain of Lakes', 'Lake Minneola', 'Citrus Tower', 'Waterfront Park'],
  },
  {
    slug: 'mount-dora',
    name: 'Mount Dora',
    county: 'Lake',
    miles: 25,
    hook: 'Mount Dora’s historic district features mature live oaks and camphors — many over a century old.',
    intro:
      'Mount Dora’s hilltop historic district above Lake Dora is famous for its mature canopy of live oaks and camphor trees, many over a century old and woven into the town’s identity. The rolling terrain and lakeside setting give it a character distinct from the flatter metro. Preservation pruning on these heritage trees is the routine ask here, protecting a canopy the community is proud of.',
    species: ['live oak', 'laurel oak', 'camphor', 'southern magnolia', 'sabal palm', 'bald cypress'],
    landmarks: ['Lake Dora', 'Mount Dora Historic District', 'Donnelly Park', 'Palm Island Park'],
  },
  {
    slug: 'eustis',
    name: 'Eustis',
    county: 'Lake',
    miles: 28,
    hook: 'Eustis’s lakeside historic homes carry century-old live oaks, magnolias, and remnants of the area’s citrus-grove heritage.',
    intro:
      'Eustis lines the shore of Lake Eustis, and its historic homes are shaded by century-old live oaks and southern magnolias rooted in the town’s early lakeside development. Reminders of the area’s deep citrus-grove heritage still turn up on older properties. The mature canopy and lakefront setting make careful preservation pruning the steady work here.',
    species: ['live oak', 'laurel oak', 'southern magnolia', 'sabal palm', 'bald cypress', 'longleaf pine'],
    landmarks: ['Lake Eustis', 'Ferran Park', 'Eustis Historic District'],
  },
  {
    slug: 'tavares',
    name: 'Tavares',
    county: 'Lake',
    miles: 28,
    hook: 'Tavares — the seaplane city — has lakeside oak hammocks and mature cypress that define its waterfront character.',
    intro:
      'Tavares brands itself “America’s Seaplane City,” and its identity is built around the waterfront on Lake Dora and Lake Eustis. The shoreline oak hammocks and stands of mature bald cypress define that waterfront character. Lakeside root zones and limbs reaching out over the water make stability and careful pruning regular considerations on these lots.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Dora', 'Wooton Park', 'Lake Eustis'],
  },
  {
    slug: 'leesburg',
    name: 'Leesburg',
    county: 'Lake',
    miles: 35,
    hook: 'Leesburg’s older neighborhoods and lakeside lots carry mature live oaks, longleaf pines, and the occasional century-old magnolia.',
    intro:
      'Leesburg sits on a neck of land between Lake Harris and Lake Griffin, and its older neighborhoods carry mature live oaks, longleaf pines, and the occasional century-old magnolia. The lakeside lots add bald cypress along the shorelines. With a settled canopy across these established streets, the work runs to crown cleaning, deadwood removal, and structural pruning on aging trees.',
    species: ['live oak', 'laurel oak', 'longleaf pine', 'southern magnolia', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Harris', 'Lake Griffin', 'Venetian Gardens'],
  },
  {
    slug: 'deltona',
    name: 'Deltona',
    county: 'Volusia',
    miles: 28,
    hook: 'Deltona’s wooded subdivisions feature dense laurel oak and slash pine canopy that needs storm-season pruning.',
    intro:
      'Deltona was platted across pine flatwoods, and its wooded subdivisions carry a dense mix of laurel oak, slash pine, and sand pine that grew in with the homes. Those tall pines and fast-growing oaks are common storm casualties when tropical weather pushes inland from the coast. Proactive thinning and storm-season pruning to reduce wind load are the steady work across these lots.',
    species: ['laurel oak', 'slash pine', 'sand pine', 'water oak', 'live oak', 'sabal palm'],
    landmarks: ['Lake Monroe', 'Gemini Springs', 'Lyonia Preserve'],
  },
  {
    slug: 'debary',
    name: 'DeBary',
    county: 'Volusia',
    miles: 25,
    hook: 'DeBary’s mix of established and new homes runs from oak-canopied historic streets to palm-and-oak suburban lots.',
    intro:
      'DeBary sits along the St. Johns River near the historic DeBary Hall, blending older oak-canopied streets with newer palm-and-oak suburban subdivisions. The riverfront and surrounding wetlands add bald cypress to the mix. The range from heritage trees near the historic core to young plantings in newer neighborhoods shapes the variety of work here.',
    species: ['live oak', 'laurel oak', 'slash pine', 'bald cypress', 'sabal palm'],
    landmarks: ['St. Johns River', 'DeBary Hall', 'Gemini Springs'],
  },
  {
    slug: 'deland',
    name: 'DeLand',
    county: 'Volusia',
    miles: 32,
    hook: 'DeLand’s Stetson-era streets and historic district carry a heritage oak canopy worth protecting — preservation work, not removal.',
    intro:
      'DeLand’s historic district, anchored by Stetson University, carries a heritage live oak canopy that shades its early-1900s downtown and surrounding streets. The mature oaks here are central to the town’s well-preserved character. As with the rest of the historic core, the work leans toward preservation — careful structural pruning and tree health — rather than removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm', 'longleaf pine'],
    landmarks: ['Stetson University', 'Downtown DeLand', 'Earl Brown Park'],
  },
  {
    slug: 'orange-city',
    name: 'Orange City',
    county: 'Volusia',
    miles: 28,
    hook: 'Orange City’s namesake citrus history gives way to mature oak canopy and sabal palms in established neighborhoods.',
    intro:
      'Orange City takes its name from the citrus that once defined the area, and that history gives way today to a mature oak canopy and sabal palms across its established neighborhoods. Nearby Blue Spring and the St. Johns corridor add cypress and a wetter edge to the local landscape. The settled in-town canopy makes routine crown cleaning and structural pruning the practical focus here.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'bald cypress'],
    landmarks: ['Blue Spring State Park', 'Valentine Park', 'Dickinson Memorial Library'],
  },

  // Edge ring (35–50 mi)
  {
    slug: 'titusville',
    name: 'Titusville',
    county: 'Brevard',
    miles: 40,
    hook: 'Titusville’s Space Coast location means salt-tolerant sabal and washingtonia palms alongside scrub oak hammocks — and hurricane exposure.',
    intro:
      'Titusville sits on the Indian River across from Kennedy Space Center, and its Space Coast setting changes the species mix toward salt-tolerant palms and scrub oak hammocks. Sabal, washingtonia, and queen palms stand alongside the hardier coastal oaks. Hurricane exposure is among the highest in our service area, which makes pre-storm structural pruning a recurring conversation here.',
    species: ['sabal palm', 'washingtonia palm', 'queen palm', 'live oak', 'sand pine', 'southern magnolia'],
    landmarks: ['Indian River', 'Kennedy Space Center area', 'Sand Point Park', 'Space View Park'],
  },
  {
    slug: 'cocoa',
    name: 'Cocoa',
    county: 'Brevard',
    miles: 47,
    hook: 'Cocoa’s coastal properties carry salt-spray-tolerant palms — sabal, queen, washingtonia — that need specific care to thrive.',
    intro:
      'Cocoa lines the Indian River Lagoon, with the restored shops of Cocoa Village at its heart and salt spray a constant factor for the local landscape. Coastal properties here lean heavily on salt-tolerant palms — sabal, queen, and washingtonia — that need specific care to thrive in that environment. Palm health, including watch for lethal bronzing, and storm-season pruning are the steady work along this stretch of coast.',
    species: ['sabal palm', 'queen palm', 'washingtonia palm', 'live oak', 'southern magnolia'],
    landmarks: ['Indian River Lagoon', 'Cocoa Village', 'Riverfront Park'],
  },
  {
    slug: 'haines-city',
    name: 'Haines City',
    county: 'Polk',
    miles: 42,
    hook: 'Haines City’s mix of citrus-grove history and new residential developments features mature oaks and the palms lining newer subdivisions.',
    intro:
      'Haines City grew up as a citrus and rail town in the Polk County ridge country, and that grove history still frames the area between its lakes and rolling terrain. Older neighborhoods carry mature live oaks while new residential developments line their streets with palms. The work here ranges from heritage shade-tree care to keeping fresh subdivision plantings on a healthy footing.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'longleaf pine', 'sand pine'],
    landmarks: ['Lake Eva Park', 'Lake Hamilton', 'Ridge Scenic Highway'],
  },
  {
    slug: 'davenport',
    name: 'Davenport',
    county: 'Polk',
    miles: 32,
    hook: 'Davenport’s rapid-growth corridor pairs preserved oak hammocks with the palm-heavy landscaping of newer master-planned communities.',
    intro:
      'Davenport sits in one of the fastest-growing corridors in the region, on former citrus land near the Four Corners area. New master-planned communities and vacation-rental neighborhoods have filled in around preserved oak hammocks, layering palm-heavy landscaping over native canopy. The result is a steady mix of heritage oak preservation and regular palm-trim cadence for HOAs and rental managers.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'sand pine', 'longleaf pine'],
    landmarks: ['Four Corners area', 'Posner Park', 'Lake Davenport'],
  },
  {
    slug: 'four-corners',
    name: 'Four Corners',
    county: 'Lake',
    miles: 26,
    hook: 'Four Corners’ resort-adjacent neighborhoods feature heavy ornamental palm plantings and mature shade oaks across short-term-rental properties.',
    intro:
      'Four Corners is the resort-adjacent area where Lake, Orange, Osceola, and Polk counties meet near the Disney corridor, dense with vacation homes and short-term-rental neighborhoods. The landscaping runs heavy on ornamental palms set against pockets of mature shade oaks. With so many rental properties on managed schedules, regular palm trimming and tidy structural pruning are the defining work here.',
    species: ['sabal palm', 'queen palm', 'washingtonia palm', 'live oak', 'laurel oak'],
    landmarks: ['US-192', 'ChampionsGate area', 'Disney corridor'],
  },
  {
    slug: 'minneola',
    name: 'Minneola',
    county: 'Lake',
    miles: 24,
    hook: 'Minneola’s hill-country setting near Lake Minneola features pine flatwoods, mature oak hammocks, and a different soil profile than the metro.',
    intro:
      'Minneola climbs the hills just north of Clermont along Lake Minneola, with some of the higher elevation in the Central Florida ridge country. Pine flatwoods and mature oak hammocks share the slopes, on sandier and better-drained soils than the flat metro. That hill-country terrain and soil profile shape how trees root and how plant health care is approached here.',
    species: ['live oak', 'laurel oak', 'sand pine', 'longleaf pine', 'sabal palm', 'bald cypress'],
    landmarks: ['Lake Minneola', 'Clermont Chain of Lakes', 'Lake Hiawatha Preserve'],
  },
  {
    slug: 'groveland',
    name: 'Groveland',
    county: 'Lake',
    miles: 30,
    hook: 'Groveland’s growing neighborhoods sit on former citrus land, with a mix of remnant grove trees, mature oaks, and new ornamental palms.',
    intro:
      'Groveland sits in the rolling country south of the Clermont chain, where former citrus land is steadily giving way to new residential development. The landscape mixes remnant grove trees and mature oak hammocks with the fresh ornamental palm plantings of newer subdivisions. That transition — from agricultural roots to growing neighborhoods — defines the range of tree work here.',
    species: ['live oak', 'laurel oak', 'longleaf pine', 'sand pine', 'sabal palm', 'queen palm'],
    landmarks: ['Lake David', 'Green Swamp area', 'Lake Catherine'],
  },
];

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
