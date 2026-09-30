export type City = {
  slug: string;
  name: string;
  county: string;
  // Straight-line miles from our Apopka base (5844 Round Lake Rd) to the
  // place's center — recomputed 2026-09-30 from geocoded coordinates. Used to
  // keep the list inside the 50-mile radius and for "~N mi" labels; it is
  // not a drive time.
  miles: number;
  // Tier 1 places carry the service × city matrix (see `matrixServices` in
  // services.ts). Tier 2 places get a single service-area page. Tiering is
  // driven by real quote data (docs/service-area-data-2026-09.md — 494
  // quotes, Jan–Sep 2026), not guesses: tier 1 = a place we demonstrably
  // work and earn in.
  tier: 1 | 2;
  // Set on Orlando neighborhood pages. Orlando is 41% of revenue and was one
  // page; its best ZIPs are named neighborhoods, which is also how people
  // search ("tree removal dr phillips", not "tree removal orlando 32819").
  neighborhoodOf?: string;
  zip?: string;
  // A one-line local hook. Required on tier 1 — it is what keeps a
  // service × city page from being a doorway page.
  hook?: string;
  // 2–3 sentence unique lead paragraph: canopy character, terrain, neighborhood
  // feel, what kind of work is typical. Expands the hook with real local color.
  intro?: string;
  // 3–6 tree/palm species genuinely common to this area. Safe regional botany only.
  species?: string[];
  // 2–4 real, verifiable local references (lakes, historic districts, major parks/roads).
  landmarks?: string[];
};

// Date the service-area and service × city templates were last materially
// changed. Rendered as dateModified on those pages and as sitemap lastmod.
// Bump it only when the pages actually change.
export const SERVICE_AREA_UPDATED = '2026-09-30';

// Central Florida places within ~50 miles of our Apopka, FL base.
export const cities: City[] = [
  // ── Tier 1 · cities (ordered by nine-month converted revenue) ──────
  {
    slug: 'orlando',
    name: 'Orlando',
    county: 'Orange',
    miles: 20,
    tier: 1,
    hook: 'Live oaks and southern magnolias define Orlando’s historic neighborhoods, on lots that were platted long before the canopy reached its current size.',
    intro:
      'Orlando’s older neighborhoods — College Park, Delaney Park, Thornton Park, and the streets ringing Lake Eola — carry a mature live oak and laurel oak canopy that shades much of the urban core. The city sits low among dozens of small lakes, so wet soils and root-plate stability come up often on the lakeside lots. Summer thunderstorms and the occasional tropical system put that big spreading canopy to the test most years, which is why structural pruning is steady work here.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm', 'camphor'],
    landmarks: ['Lake Eola', 'College Park', 'Delaney Park', 'Leu Gardens'],
  },
  {
    slug: 'winter-garden',
    name: 'Winter Garden',
    county: 'Orange',
    miles: 14,
    tier: 1,
    hook: 'Winter Garden’s growing residential developments mix new builds with mature native canopy left standing between them.',
    intro:
      'Winter Garden pairs a restored brick-street historic downtown with fast-growing residential development spreading toward Horizon West. The older sections near Plant Street carry mature live oaks, while the newer master-planned communities mix preserved oak hammock with fresh palm and shade-tree plantings. That split — heritage canopy alongside young trees entering their structural-pruning window — defines much of the work here.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'southern magnolia'],
    landmarks: ['Plant Street', 'West Orange Trail', 'Lake Apopka', 'Newton Park'],
  },
  {
    slug: 'apopka',
    name: 'Apopka',
    county: 'Orange',
    miles: 8,
    tier: 1,
    hook: 'Known as the “Indoor Foliage Capital,” Apopka properties often feature specimen trees worth preserving — and it’s where we’re based.',
    intro:
      'Apopka — our home base — earned its “Indoor Foliage Capital” reputation from a deep local nursery industry, and that horticultural character shows in the variety of specimen trees and ornamentals on local properties. The land north of Lake Apopka runs from established in-town lots to newer subdivisions pushing toward Wekiva. Live oaks, laurel oaks, and slash pine make up the bulk of the canopy, with sabal palms throughout.',
    species: ['live oak', 'laurel oak', 'water oak', 'slash pine', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Apopka', 'Wekiwa Springs State Park', 'Kit Land Nelson Park'],
  },
  {
    slug: 'gotha',
    name: 'Gotha',
    county: 'Orange',
    miles: 17,
    tier: 1,
    hook: 'Gotha’s protected rural settlement keeps a century-old canopy along Hempel Avenue beside newer lakefront subdivisions — mature trees needing careful preservation work and young trees needing early structure.',
    intro:
      'Gotha is a small unincorporated community in west Orange County, tucked between Ocoee and Windermere and protected by the county as a rural settlement and, since 1995, a historic preservation district. Its historic core along Hempel Avenue and Gotha Road keeps a century-old canopy — including the six-acre Nehrling Gardens, one of Florida’s earliest experimental botanical gardens, running down to Lake Nally — while the subdivisions that have grown up around Lake Fischer and along Old Winter Garden Road carry much younger plantings. Work here splits accordingly: crown cleaning, deadwood removal, and preservation pruning on the old settlement trees, and structural pruning on the newer stock.',
    species: ['live oak', 'laurel oak', 'camphor', 'sabal palm', 'southern magnolia', 'bald cypress'],
    landmarks: ['Nehrling Gardens', 'Hempel Avenue', 'Lake Nally', 'Lake Fischer'],
  },
  {
    slug: 'winter-park',
    name: 'Winter Park',
    county: 'Orange',
    miles: 19,
    tier: 1,
    hook: 'Winter Park’s tree-lined brick streets and lakeside estates demand careful, preservation-minded tree care.',
    intro:
      'Winter Park is one of the most heavily canopied communities in the metro, with arching live oaks over its brick streets and grand specimen trees on the estates ringing the Winter Park Chain of Lakes. The city protects its trees seriously, and many of these oaks are decades to a century old. Work here is almost always preservation-minded — crown cleaning, deadwood removal, and careful structural pruning rather than removal.',
    species: ['live oak', 'laurel oak', 'southern magnolia', 'bald cypress', 'sabal palm', 'camphor'],
    landmarks: ['Park Avenue', 'Winter Park Chain of Lakes', 'Lake Virginia', 'Mead Botanical Garden'],
  },
  {
    slug: 'ocoee',
    name: 'Ocoee',
    county: 'Orange',
    miles: 14,
    tier: 1,
    hook: 'Ocoee’s mature oak canopy sits close to homes across much of the city, which makes structural pruning the difference between a long-lived tree and a liability.',
    intro:
      'Ocoee blends older homes near downtown and Starke Lake with newer subdivisions that filled in along the SR-429 corridor. The established sections carry a healthy live oak and laurel oak canopy, while the lakefront lots add cypress at the water’s edge. As the West Orange area keeps growing, a lot of the work here is balancing preserved mature shade trees against new construction nearby.',
    species: ['live oak', 'laurel oak', 'water oak', 'bald cypress', 'sabal palm'],
    landmarks: ['Starke Lake', 'West Orange Trail', 'Lake Apopka'],
  },
  {
    slug: 'sanford',
    name: 'Sanford',
    county: 'Seminole',
    miles: 20,
    tier: 1,
    hook: 'Sanford’s historic downtown grid is shaded by live oaks planted over a century ago, many now competing with sidewalks, sewer lines, and utility corridors.',
    intro:
      'Sanford’s historic district on the south shore of Lake Monroe holds some of the oldest live oaks in the Orlando area, many over a century old and central to the city’s character. The brick streets and early-1900s homes are shaded by a heritage canopy that the community works to protect. Preservation pruning — crown cleaning, deadwood removal, careful structural work — is the routine here, not removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Monroe', 'Sanford Historic District', 'Downtown / First Street', 'St. Johns River'],
  },
  {
    slug: 'longwood',
    name: 'Longwood',
    county: 'Seminole',
    miles: 16,
    tier: 1,
    hook: 'Longwood — home to Big Tree Park, where “The Senator” stood for some 3,500 years — carries heavy mature canopy through its older subdivisions.',
    intro:
      'Longwood’s historic district holds one of the oldest street grids in Seminole County, shaded by heritage live oaks that have stood for generations. The surrounding neighborhoods carry mature oak hammock canopy typical of the area’s older lakeside development. Heritage tree protection matters here, so the work leans toward careful structural pruning and preservation rather than removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm'],
    landmarks: ['Longwood Historic District', 'Reiter Park', 'Big Tree Park'],
  },
  {
    slug: 'altamonte-springs',
    name: 'Altamonte Springs',
    county: 'Seminole',
    miles: 14,
    tier: 1,
    hook: 'Altamonte Springs’ 1970s-era subdivisions are full of laurel oaks now reaching the end of a naturally short lifespan — a species that tends to fail with little warning.',
    intro:
      'Altamonte Springs filled in heavily through the 1970s and 80s, and the subdivisions around Lake Orienta and Cranes Roost carry a dense laurel oak canopy from that era. Those laurel oaks are now reaching the age where interior decay and weak unions become a concern. Sitting in the I-4 corridor, the city sees its share of storm wind, so proactive structural pruning is a routine ask here.',
    species: ['laurel oak', 'water oak', 'live oak', 'sabal palm', 'slash pine'],
    landmarks: ['Cranes Roost Park', 'Lake Orienta', 'Lake Lotus Park'],
  },
  {
    slug: 'windermere',
    name: 'Windermere',
    county: 'Orange',
    miles: 19,
    tier: 1,
    hook: 'Windermere’s lakefront estates often have mature oaks and palms that need specialty rigging and crane access rather than a bucket truck.',
    intro:
      'Windermere sits among the Butler Chain of Lakes, and its estate lots carry grand live oaks paired with sabal and queen palms across large, often heavily landscaped grounds. The town’s signature unpaved roads run beneath a settled oak canopy. Large specimen trees, lakefront access, and tight estate sites mean a lot of this work calls for careful rigging and specialty equipment.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia', 'bald cypress'],
    landmarks: ['Butler Chain of Lakes', 'Lake Down', 'Main Street'],
  },
  {
    slug: 'groveland',
    name: 'Groveland',
    county: 'Lake',
    miles: 22,
    tier: 1,
    hook: 'Groveland’s rapid growth has put new construction against old citrus windbreaks and sand pine stands, which need different care than planted landscape trees.',
    intro:
      'Groveland sits in the rolling country south of the Clermont chain, where former citrus land is steadily giving way to new residential development. The landscape mixes remnant grove trees and mature oak hammocks with the fresh ornamental palm plantings of newer subdivisions. That transition — from agricultural roots to growing neighborhoods — defines the range of tree work here.',
    species: ['live oak', 'laurel oak', 'longleaf pine', 'sand pine', 'sabal palm', 'queen palm'],
    landmarks: ['Lake David', 'Green Swamp area', 'Lake Catherine'],
  },
  {
    slug: 'oviedo',
    name: 'Oviedo',
    county: 'Seminole',
    miles: 24,
    tier: 1,
    hook: 'Oviedo’s older neighborhoods sit under dense live oak hammock — canopy that grew in before the streets did.',
    intro:
      'Oviedo grew quickly from former farm and grove land near the Econlockhatchee River, and its newer subdivisions often preserve stands of native oak alongside fresh landscape plantings. The river corridor and surrounding hammocks add bald cypress and a richer mix of hardwoods. Much of the work here balances mature preserved oaks against the young trees filling in around new construction.',
    species: ['live oak', 'laurel oak', 'water oak', 'bald cypress', 'sabal palm', 'longleaf pine'],
    landmarks: ['Econlockhatchee River', 'Oviedo on the Park', 'Black Hammock'],
  },
  {
    slug: 'mount-dora',
    name: 'Mount Dora',
    county: 'Lake',
    miles: 4,
    tier: 1,
    hook: 'Mount Dora’s historic district features mature live oaks and camphors — many over a century old, and many under overhead utility lines.',
    intro:
      'Mount Dora’s hilltop historic district above Lake Dora is famous for its mature canopy of live oaks and camphor trees, many over a century old and woven into the town’s identity. The rolling terrain and lakeside setting give it a character distinct from the flatter metro. Preservation pruning on these heritage trees is the routine ask here, protecting a canopy the community is proud of.',
    species: ['live oak', 'laurel oak', 'camphor', 'southern magnolia', 'sabal palm', 'bald cypress'],
    landmarks: ['Lake Dora', 'Mount Dora Historic District', 'Donnelly Park', 'Palm Island Park'],
  },

  // ── Tier 1 · Orlando neighborhoods (by ZIP; Orlando is 41% of revenue) ─
  {
    slug: 'dr-phillips',
    name: 'Dr. Phillips',
    county: 'Orange',
    miles: 22,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32819',
    hook: 'Dr. Phillips’ large lots and lakefront properties hold some of the biggest specimen live oaks in Orange County, often with structural defects hidden high in the canopy.',
    intro:
      'Dr. Phillips takes its name from the citrus pioneer whose groves once covered this area near the Big Sand Lake chain, and today it is one of the metro’s premier residential districts. The estate lots blend mature live oaks with sabal and queen palms across well-kept landscapes. With high property values and prominent specimen trees, preservation pruning and tree health are usually the priority over removal.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia'],
    landmarks: ['Big Sand Lake', 'Restaurant Row (Sand Lake Road)', 'Dr. P. Phillips Community Park'],
  },
  {
    slug: 'millenia',
    name: 'Millenia',
    county: 'Orange',
    miles: 22,
    tier: 1,
    neighborhoodOf: 'Orlando',
    // Job data pocket was ZIP 32811; the Mall at Millenia / Conroy Rd core is 32839.
    zip: '32839',
    hook: 'Most of the canopy around the mall and along Millenia Boulevard went in with the post-2002 build-out and is still young — the stage where structural pruning sets a tree’s long-term form.',
    intro:
      'Millenia is a City of Orlando neighborhood southwest of downtown, centered on The Mall at Millenia where Conroy Road meets I-4 near its interchange with Florida’s Turnpike. It is a dense, mixed district — apartments, condos, offices, and retail along Millenia Boulevard, Conroy Road, and Americana Boulevard — with the Shingle Creek channel and its stormwater ponds threading the low ground on the southwest side, where bald cypress does well. Around the mall and the commercial streetscapes, where the planting is only a couple of decades old, the typical work is structural pruning of young live oaks, clearance over parking and drive aisles, and palm maintenance.',
    species: ['live oak', 'sabal palm', 'laurel oak', 'bald cypress', 'southern magnolia', 'crape myrtle'],
    landmarks: ['The Mall at Millenia', 'Conroy Road', 'Millenia Boulevard', 'Millenia Lake'],
  },
  {
    slug: 'delaney-park',
    name: 'Delaney Park',
    county: 'Orange',
    miles: 22,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32806',
    hook: 'Delaney Park’s brick streets run under a live oak canopy that has been growing for the better part of a century — the work here is keeping it healthy and well-structured.',
    intro:
      'Delaney Park is a historic neighborhood just south of downtown Orlando — 1920s-era bungalows and colonial revivals on brick streets under mature live oaks, laurel oaks, and camphors, wrapped around Lake Lancaster, with Lake Davis and the Lake Cherokee Historic District a few blocks north. SoDo, the commercial corridor along South Orange Avenue anchored by Orlando Health, lies a few blocks west beyond Lake Copeland, where street trees and parking-lot plantings need routine clearance pruning. In the residential blocks the work is preservation-minded — crown cleaning and structural pruning on old oaks, and candid assessments of aging laurel oaks and camphors, which are shorter-lived than the live oaks beside them.',
    species: ['live oak', 'laurel oak', 'camphor', 'southern magnolia', 'sabal palm', 'crape myrtle'],
    landmarks: ['Delaney Park', 'Lake Lancaster', 'Lake Davis', 'Lake Cherokee Historic District'],
  },
  {
    slug: 'audubon-park',
    name: 'Audubon Park',
    county: 'Orange',
    miles: 21,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32803',
    hook: 'Audubon Park’s bird-named streets and Colonialtown’s 1920s bungalow blocks share a mature canopy where the work is mostly about keeping established oaks in good form.',
    intro:
      'Audubon Park is a mid-century Orlando neighborhood northeast of downtown, developed through the 1950s and ’60s with streets named after birds and anchored by the independent shopping strip along Corrine Drive between Leu Gardens and Baldwin Park. The neighboring Colonialtown blocks along Colonial Drive are older still — 1920s bungalows and craftsman cottages under a canopy that has had nearly a century to fill in. Across both, the trees are mostly mature live oaks, laurel oaks, and camphors (invasive, but long established here) on modest lots, so typical work is crown cleaning, clearance over roofs and driveways, and honest assessments of aging laurel oaks rather than new planting.',
    species: ['live oak', 'laurel oak', 'camphor', 'southern magnolia', 'sabal palm', 'crape myrtle'],
    landmarks: ['Corrine Drive', 'Harry P. Leu Gardens', 'East End Market', 'Colonial Drive'],
  },
  {
    slug: 'metrowest',
    name: 'MetroWest',
    county: 'Orange',
    miles: 19,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32835',
    hook: 'MetroWest’s original plantings from its 1980s build-out have matured into full shade canopy on some of Orange County’s higher, rolling ground — trees now in their routine-maintenance years.',
    intro:
      'MetroWest is a master-planned district of southwest Orlando, developed from the 1980s around an 18-hole golf course between Kirkman Road and Florida’s Turnpike, with Turkey Lake at its southeast corner and Bill Frederick Park just to the south. The ground rolls more than most of the metro, with elevation change across the course and views toward downtown from the crest. Street trees, common-area plantings around the condos and townhomes, and the oaks along the fairways are now mature, so the typical work is crown cleaning, clearance pruning over roads and roofs, and routine palm maintenance in association-managed landscapes.',
    species: ['live oak', 'laurel oak', 'slash pine', 'sabal palm', 'queen palm', 'southern magnolia'],
    landmarks: ['MetroWest Golf Club', 'Bill Frederick Park at Turkey Lake', 'Valencia College West Campus', 'South Kirkman Road'],
  },
  {
    slug: 'hunters-creek',
    name: 'Hunters Creek',
    county: 'Orange',
    miles: 30,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32837',
    hook: 'Hunters Creek’s HOA-managed streetscapes need consistent clearance pruning and uniform care across large numbers of similar trees.',
    intro:
      'Hunters Creek is a large planned community in south Orange County where the original landscape plantings have now matured into a full shade-oak canopy. Live oaks and laurel oaks line the streets alongside palms set to community design standards. HOA landscape rules shape nearly every job, so the pruning is done to keep trees healthy and structurally sound while meeting the neighborhood’s form requirements.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'queen palm'],
    landmarks: ['Hunters Creek Boulevard', 'Town Center'],
  },
  {
    slug: 'bay-hill',
    name: 'Bay Hill',
    county: 'Orange',
    miles: 22,
    tier: 1,
    neighborhoodOf: 'Orlando',
    // Job data pocket was ZIP 32836; the neighborhood core (Bay Hill Club) is 32819.
    zip: '32819',
    hook: 'Bay Hill grew up around a 1961 golf course, and the oaks planted along Bay Hill Boulevard in the decades that followed now arch over sidewalks and fairway lots alike.',
    intro:
      'Bay Hill is an established neighborhood in the Dr. Phillips area of southwest Orlando, built out around its golf course on the eastern shore of the Butler Chain of Lakes. Lots along Bay Hill Boulevard and the fairways carry mature live and laurel oaks, tall slash pines, and the occasional camphor, with bald cypress and sabal palms holding the shoreline on Lake Tibet-Butler (Lake Tibet), Lake Chase, and Lake Blanche. Most work here is on large, mature trees over roofs, pools, and lake frontage — crown cleaning, deadwood removal, and weight reduction over structures — along with routine palm care on the sabal palms common at entries and lake lots.',
    species: ['live oak', 'laurel oak', 'slash pine', 'camphor', 'bald cypress', 'sabal palm'],
    landmarks: ['Bay Hill Club & Lodge', 'Butler Chain of Lakes', 'Lake Tibet-Butler', 'Apopka-Vineland Road'],
  },
  {
    slug: 'lake-nona',
    name: 'Lake Nona',
    county: 'Orange',
    miles: 33,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32827',
    hook: 'Lake Nona’s newer developments are full of young trees still in their establishment years — the window where structural pruning does the most long-term good.',
    intro:
      'Lake Nona is one of the metro’s newest large-scale developments, built out around the Medical City area over the past two decades. Its streetscapes emphasize sabal palms and young shade-tree plantings that are now hitting the 5–10 year window where structural pruning shapes their long-term form. Getting that early structure right is the defining work here — setting these trees up to mature strong.',
    species: ['sabal palm', 'live oak', 'southern magnolia', 'queen palm', 'bald cypress'],
    landmarks: ['Lake Nona Medical City', 'Boxi Park', 'Lake Nona Town Center'],
  },
  {
    slug: 'college-park',
    name: 'College Park',
    county: 'Orange',
    miles: 18,
    tier: 1,
    neighborhoodOf: 'Orlando',
    zip: '32804',
    hook: 'College Park’s 1920s bungalow streets run under mature live and laurel oaks — trees that are now decades to a century old and call for careful, preservation-minded work.',
    intro:
      'College Park is one of Orlando’s oldest inner-ring neighborhoods, platted in the 1920s just north of downtown and built out with Craftsman and Mediterranean Revival bungalows on brick streets on either side of Edgewater Drive. Mature live and laurel oaks arch over those streets, camphors and magnolias fill the older yards, and lakefront lots on Lake Adair and Lake Ivanhoe hold some of the neighborhood’s largest specimen trees. With houses set close together on modest lots, most work here is crown cleaning, deadwood removal, and clearance pruning over roofs, driveways, and sidewalks — measured pruning that keeps old trees sound rather than removal.',
    species: ['live oak', 'laurel oak', 'camphor', 'southern magnolia', 'sabal palm', 'water oak'],
    landmarks: ['Edgewater Drive', 'Dubsdread Golf Course', 'Lake Adair', 'Lake Ivanhoe'],
  },

  // ── Tier 2 · service-area page only, nearest first ─────────────────
  {
    slug: 'eustis',
    name: 'Eustis',
    county: 'Lake',
    miles: 8,
    tier: 2,
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
    miles: 9,
    tier: 2,
    hook: 'Tavares — the seaplane city — has lakeside oak hammocks and mature cypress that define its waterfront character.',
    intro:
      'Tavares brands itself “America’s Seaplane City,” and its identity is built around the waterfront on Lake Dora and Lake Eustis. The shoreline oak hammocks and stands of mature bald cypress define that waterfront character. Lakeside root zones and limbs reaching out over the water make stability and careful pruning regular considerations on these lots.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Dora', 'Wooton Park', 'Lake Eustis'],
  },
  {
    slug: 'montverde',
    name: 'Montverde',
    county: 'Lake',
    miles: 13,
    tier: 2,
    hook: 'Montverde’s rolling hills above Lake Apopka carry mature oaks on sloped, sandy lots — terrain where access planning and careful rigging shape every job.',
    intro:
      'Montverde is a small Lake County town on the west shore of Lake Apopka, roughly 24 miles northwest of Orlando, and its name — Spanish for green mountain — comes from the rolling hills that set it apart from most of the metro. Large-lot homes, the Montverde Academy campus, and the estates around Bella Collina sit on well-drained sandy uplands where live oaks are the anchor trees, with pines on the higher ground and bald cypress along the lakeshore. Work here tends to be mature-oak pruning on sloped lots where equipment access matters, along with pine care and shoreline cypress cleanup.',
    species: ['live oak', 'laurel oak', 'longleaf pine', 'sabal palm', 'bald cypress', 'southern magnolia'],
    landmarks: ['Lake Apopka', 'Montverde Academy', 'Kirk Park', 'Bella Collina'],
  },
  {
    slug: 'oakland',
    name: 'Oakland',
    county: 'Orange',
    miles: 15,
    tier: 2,
    hook: 'Oakland’s historic town center sits in an old oak grove on a ridge above Lake Apopka, and its towering live oaks call for patient, preservation-minded care.',
    intro:
      'Oakland is a small historic town on the south shore of Lake Apopka, just west of Winter Garden in west Orange County. Incorporated in 1887, it was laid out on a ridge between Lake Apopka and Johns Lake that early settlers described as a natural oak grove, and mature live and laurel oaks still shade the town center along the West Orange Trail. Work here splits between careful crown cleaning and deadwood removal on those old oaks and structural pruning for the young trees going in around the newer neighborhoods on former citrus and farm land.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'southern magnolia', 'camphor', 'sweetgum'],
    landmarks: ['Lake Apopka', 'Oakland Nature Preserve', 'West Orange Trail', 'Speer Park'],
  },
  {
    slug: 'pine-hills',
    name: 'Pine Hills',
    county: 'Orange',
    miles: 15,
    tier: 2,
    hook: 'Pine Hills’ residential streets carry mature water oaks and laurel oaks — both species especially vulnerable to storm wind.',
    intro:
      'Pine Hills grew through the mid-century housing boom, and many of those original lots are now shaded by full-grown water oaks and laurel oaks planted decades ago. Both species are fast-growing and relatively short-lived, so they tend to develop weak branch unions and interior decay as they age. That combination makes routine crown cleaning and structural pruning the practical priority across these established streets.',
    species: ['water oak', 'laurel oak', 'live oak', 'slash pine', 'sabal palm'],
    landmarks: ['Barnett Park', 'Silver Star Road'],
  },
  {
    slug: 'lake-mary',
    name: 'Lake Mary',
    county: 'Seminole',
    miles: 16,
    tier: 2,
    hook: 'Lake Mary’s master-planned communities preserve mature oak canopy alongside ornamental palms — HOA compliance is part of every job.',
    intro:
      'Lake Mary built much of its growth around master-planned communities that preserved mature oak hammock canopy and layered in ornamental palms. The neighborhoods around Lake Mary itself and the Heathrow area carry established live oaks alongside maintained landscape standards. HOA species-and-form requirements are part of nearly every job here, so the pruning has to keep both the tree and the community guidelines in mind.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'queen palm', 'southern magnolia'],
    landmarks: ['Lake Mary Boulevard', 'Heathrow', 'Central Park'],
  },
  {
    slug: 'minneola',
    name: 'Minneola',
    county: 'Lake',
    miles: 16,
    tier: 2,
    hook: 'Minneola’s hill-country setting near Lake Minneola features pine flatwoods, mature oak hammocks, and a different soil profile than the metro.',
    intro:
      'Minneola climbs the hills just north of Clermont along Lake Minneola, with some of the higher elevation in the Central Florida ridge country. Pine flatwoods and mature oak hammocks share the slopes, on sandier and better-drained soils than the flat metro. That hill-country terrain and soil profile shape how trees root and how plant health care is approached here.',
    species: ['live oak', 'laurel oak', 'sand pine', 'longleaf pine', 'sabal palm', 'bald cypress'],
    landmarks: ['Lake Minneola', 'Clermont Chain of Lakes', 'Lake Hiawatha Preserve'],
  },
  {
    slug: 'casselberry',
    name: 'Casselberry',
    county: 'Seminole',
    miles: 17,
    tier: 2,
    hook: 'Casselberry’s lake-dotted neighborhoods carry mature oaks and bald cypress — and the wet soils that come with them.',
    intro:
      'Casselberry is dotted with small lakes — Lake Concord, Lake Howell, Triplet Lake — and the neighborhoods built around them sit on noticeably wetter ground than the metro average. The canopy runs to mature oaks with bald cypress along the water. Those saturated lakeside soils affect root anchorage, so stability and drainage come up often when we assess trees here.',
    species: ['laurel oak', 'water oak', 'live oak', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Concord', 'Lake Howell', 'Secret Lake Park'],
  },
  {
    slug: 'fern-park',
    name: 'Fern Park',
    county: 'Seminole',
    miles: 17,
    tier: 2,
    hook: 'Fern Park’s mature laurel and water oak canopy south of 434 means routine storm-season pruning matters here.',
    intro:
      'Fern Park is a compact, established community south of SR-434 along the US-17/92 corridor, near Lake Lotus and the headwaters of the Little Wekiva. Its lots carry mature laurel oaks and water oaks settled in from earlier decades of development. Those aging fast-growing oaks make routine crown cleaning and storm-season pruning the practical focus here.',
    species: ['laurel oak', 'water oak', 'live oak', 'sabal palm', 'slash pine'],
    landmarks: ['Lake Lotus Park', 'US-17/92'],
  },
  {
    slug: 'leesburg',
    name: 'Leesburg',
    county: 'Lake',
    miles: 17,
    tier: 2,
    hook: 'Leesburg’s older neighborhoods and lakeside lots carry mature live oaks, longleaf pines, and the occasional century-old magnolia.',
    intro:
      'Leesburg sits on a neck of land between Lake Harris and Lake Griffin, and its older neighborhoods carry mature live oaks, longleaf pines, and the occasional century-old magnolia. The lakeside lots add bald cypress along the shorelines. With a settled canopy across these established streets, the work runs to crown cleaning, deadwood removal, and structural pruning on aging trees.',
    species: ['live oak', 'laurel oak', 'longleaf pine', 'southern magnolia', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Harris', 'Lake Griffin', 'Venetian Gardens'],
  },
  {
    slug: 'maitland',
    name: 'Maitland',
    county: 'Orange',
    miles: 17,
    tier: 2,
    hook: 'Maitland’s lakeside neighborhoods carry decades-old live oaks and cypress along the chain of lakes — preservation-pruning territory.',
    intro:
      'Maitland’s neighborhoods wrap around Lake Maitland, Lake Sybelia, and the connected chain, and the shoreline lots carry mature live oaks paired with bald cypress at the water. It is an older, established community where the canopy has had decades to fill in. Lakeside root zones and overhanging limbs over docks and homes make thoughtful, preservation-focused pruning the usual approach here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'southern magnolia', 'sabal palm'],
    landmarks: ['Lake Maitland', 'Lake Lily', 'Maitland Art Center'],
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    county: 'Lake',
    miles: 18,
    tier: 2,
    hook: 'Clermont’s elevation — among Florida’s highest — gives it a different oak community than the metro, with sand-soil drainage to match.',
    intro:
      'Clermont sits among rolling hills near the highest natural ground in peninsular Florida, on sandy, well-drained soils that set its canopy apart from the flat metro. Sand pine and longleaf pine hold the higher ground while live oaks fill the hammocks and bald cypress lines the Clermont Chain of Lakes. That elevation and drainage profile change how trees root and how plant health care is approached here.',
    species: ['live oak', 'laurel oak', 'sand pine', 'longleaf pine', 'bald cypress', 'sabal palm'],
    landmarks: ['Clermont Chain of Lakes', 'Lake Minneola', 'Citrus Tower', 'Waterfront Park'],
  },
  {
    slug: 'winter-springs',
    name: 'Winter Springs',
    county: 'Seminole',
    miles: 18,
    tier: 2,
    hook: 'Winter Springs’ established neighborhoods around Tuscawilla have a mature mix of oaks and pines now at the age where routine, preservation-minded care pays off.',
    intro:
      'Winter Springs is a Seminole County city on the southern shore of Lake Jesup, northeast of Orlando along State Road 434 between Longwood and Oviedo. Its older neighborhoods — Tuscawilla’s country-club streets especially, laid out around a golf course in the early 1970s — now carry mature live oaks, laurel oaks, and slash pines, while low ground toward the lake runs to bald cypress and water oak. The city has held Tree City USA status for more than three decades and requires an arbor permit for removals, so most work is routine maintenance — crown cleaning, deadwood removal, and careful reductions on large oaks over homes and streets.',
    species: ['live oak', 'laurel oak', 'water oak', 'slash pine', 'bald cypress', 'sabal palm'],
    landmarks: ['Lake Jesup', 'Tuscawilla', 'Central Winds Park', 'Cross Seminole Trail'],
  },
  {
    slug: 'debary',
    name: 'DeBary',
    county: 'Volusia',
    miles: 19,
    tier: 2,
    hook: 'DeBary’s mix of established and new homes runs from oak-canopied historic streets to palm-and-oak suburban lots.',
    intro:
      'DeBary sits along the St. Johns River near the historic DeBary Hall, blending older oak-canopied streets with newer palm-and-oak suburban subdivisions. The riverfront and surrounding wetlands add bald cypress to the mix. The range from heritage trees near the historic core to young plantings in newer neighborhoods shapes the variety of work here.',
    species: ['live oak', 'laurel oak', 'slash pine', 'bald cypress', 'sabal palm'],
    landmarks: ['St. Johns River', 'DeBary Hall', 'Gemini Springs'],
  },
  {
    slug: 'orange-city',
    name: 'Orange City',
    county: 'Volusia',
    miles: 22,
    tier: 2,
    hook: 'Orange City’s namesake citrus history gives way to mature oak canopy and sabal palms in established neighborhoods.',
    intro:
      'Orange City takes its name from the citrus that once defined the area, and that history gives way today to a mature oak canopy and sabal palms across its established neighborhoods. Nearby Blue Spring and the St. Johns corridor add cypress and a wetter edge to the local landscape. The settled in-town canopy makes routine crown cleaning and structural pruning the practical focus here.',
    species: ['live oak', 'laurel oak', 'water oak', 'sabal palm', 'bald cypress'],
    landmarks: ['Blue Spring State Park', 'Valentine Park', 'Dickinson Memorial Library'],
  },
  {
    slug: 'deltona',
    name: 'Deltona',
    county: 'Volusia',
    miles: 24,
    tier: 2,
    hook: 'Deltona’s wooded subdivisions feature dense laurel oak and slash pine canopy that needs storm-season pruning.',
    intro:
      'Deltona was platted across pine flatwoods, and its wooded subdivisions carry a dense mix of laurel oak, slash pine, and sand pine that grew in with the homes. Those tall pines and fast-growing oaks are common storm casualties when tropical weather pushes inland from the coast. Proactive thinning and storm-season pruning to reduce wind load are the steady work across these lots.',
    species: ['laurel oak', 'slash pine', 'sand pine', 'water oak', 'live oak', 'sabal palm'],
    landmarks: ['Lake Monroe', 'Gemini Springs', 'Lyonia Preserve'],
  },
  {
    slug: 'deland',
    name: 'DeLand',
    county: 'Volusia',
    miles: 25,
    tier: 2,
    hook: 'DeLand’s Stetson-era streets and historic district carry a heritage oak canopy worth protecting — preservation work, not removal.',
    intro:
      'DeLand’s historic district, anchored by Stetson University, carries a heritage live oak canopy that shades its early-1900s downtown and surrounding streets. The mature oaks here are central to the town’s well-preserved character. As with the rest of the historic core, the work leans toward preservation — careful structural pruning and tree health — rather than removal.',
    species: ['live oak', 'laurel oak', 'water oak', 'southern magnolia', 'sabal palm', 'longleaf pine'],
    landmarks: ['Stetson University', 'Downtown DeLand', 'Earl Brown Park'],
  },
  {
    slug: 'belle-isle',
    name: 'Belle Isle',
    county: 'Orange',
    miles: 26,
    tier: 2,
    hook: 'Belle Isle’s lakeside lots blend mature oaks with cypress along Lake Conway — almost every property has a tree story.',
    intro:
      'Belle Isle is built around the Lake Conway chain, and water is never far from any lot. The shorelines carry mature live oaks and laurel oaks with bald cypress standing right at the edge. Lakefront soils, exposed root plates, and limbs reaching out over docks and water make stability assessment and careful pruning a regular part of the work here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['Lake Conway', 'Cornelia Avenue'],
  },
  {
    slug: 'osteen',
    name: 'Osteen',
    county: 'Volusia',
    miles: 27,
    tier: 2,
    hook: 'Osteen’s acreage lots run from pine flatwoods down to the St. Johns River floodplain, so one property can carry upland pines, hammock oaks, and low-ground cypress — each with different needs.',
    intro:
      'Osteen is an unincorporated rural community in southwest Volusia County, with Deltona to the north, Lake Monroe to the west, the St. Johns River to the south, and State Road 415 as its main road. Lots here are large — acreage, pasture, and horse properties — and the native cover shifts from pine flatwoods and oak hammock on the higher ground to cypress and floodplain swamp toward the river. Typical work is practical: taking down pines and crowded oaks near homes, barns, and driveways, clearing along fence lines and pasture edges, and cleaning up the big hammock oaks that shade older homesteads.',
    species: ['live oak', 'slash pine', 'longleaf pine', 'bald cypress', 'sabal palm', 'laurel oak'],
    landmarks: ['State Road 415', 'Lemon Bluff Park', 'Hickory Bluff Preserve', 'Lake Monroe Conservation Area'],
  },
  {
    slug: 'four-corners',
    name: 'Four Corners',
    county: 'Lake',
    miles: 29,
    tier: 2,
    hook: 'Four Corners’ resort-adjacent neighborhoods feature heavy ornamental palm plantings and mature shade oaks across short-term-rental properties.',
    intro:
      'Four Corners is the resort-adjacent area where Lake, Orange, Osceola, and Polk counties meet near the Disney corridor, dense with vacation homes and short-term-rental neighborhoods. The landscaping runs heavy on ornamental palms set against pockets of mature shade oaks. With so many rental properties on managed schedules, regular palm trimming and tidy structural pruning are the defining work here.',
    species: ['sabal palm', 'queen palm', 'washingtonia palm', 'live oak', 'laurel oak'],
    landmarks: ['US-192', 'ChampionsGate area', 'Disney corridor'],
  },
  {
    slug: 'celebration',
    name: 'Celebration',
    county: 'Osceola',
    miles: 31,
    tier: 2,
    hook: 'Celebration’s planned-community design specifies which species go where — palm care and structured pruning are routine here.',
    intro:
      'Celebration was master-planned from the ground up, and its landscape architecture specifies which species go where down to the street. The result is a consistent canopy of live oaks, southern magnolias, and carefully placed palms throughout the town. That design discipline means the work here is structured pruning and palm care that keeps each tree true to the community’s original landscape intent.',
    species: ['live oak', 'southern magnolia', 'sabal palm', 'queen palm', 'bald cypress'],
    landmarks: ['Celebration Town Center', 'Celebration Lake'],
  },
  {
    slug: 'kissimmee',
    name: 'Kissimmee',
    county: 'Osceola',
    miles: 35,
    tier: 2,
    hook: 'Kissimmee’s mix of established neighborhoods and new construction means everything from heritage oaks to fresh palm plantings.',
    intro:
      'Kissimmee runs from a historic downtown near Lake Tohopekaliga out to fast-growing new construction along the US-192 corridor. The older neighborhoods carry heritage live oaks, magnolias, and mature palms, while the newer subdivisions add fresh palm plantings by the hundreds. That range — from century-old shade trees to young landscape stock — means the work here spans the full spectrum of tree care.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'southern magnolia', 'bald cypress'],
    landmarks: ['Lake Tohopekaliga', 'Downtown Kissimmee', 'Lakefront Park'],
  },
  {
    slug: 'st-cloud',
    name: 'St. Cloud',
    county: 'Osceola',
    miles: 41,
    tier: 2,
    hook: 'St. Cloud’s older lakeside lots carry mature oaks and cypress along East Lake Toho, with newer subdivisions adding palms.',
    intro:
      'St. Cloud sits along the shore of East Lake Tohopekaliga, and its older lakeside lots carry mature live oaks with bald cypress standing in the shallows. Beyond the established core, newer subdivisions stretch into former ranch land with palm-heavy landscaping. The contrast between heritage lakeside oaks and fresh suburban plantings shapes the range of work here.',
    species: ['live oak', 'laurel oak', 'bald cypress', 'sabal palm', 'southern magnolia'],
    landmarks: ['East Lake Tohopekaliga', 'St. Cloud Lakefront Park', 'Lake Toho'],
  },
  {
    slug: 'davenport',
    name: 'Davenport',
    county: 'Polk',
    miles: 42,
    tier: 2,
    hook: 'Davenport’s rapid-growth corridor pairs preserved oak hammocks with the palm-heavy landscaping of newer master-planned communities.',
    intro:
      'Davenport sits in one of the fastest-growing corridors in the region, on former citrus land near the Four Corners area. New master-planned communities and vacation-rental neighborhoods have filled in around preserved oak hammocks, layering palm-heavy landscaping over native canopy. The result is a steady mix of heritage oak preservation and regular palm-trim cadence for HOAs and rental managers.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'sand pine', 'longleaf pine'],
    landmarks: ['Four Corners area', 'Posner Park', 'Lake Davenport'],
  },
  {
    slug: 'haines-city',
    name: 'Haines City',
    county: 'Polk',
    miles: 46,
    tier: 2,
    hook: 'Haines City’s mix of citrus-grove history and new residential developments features mature oaks and the palms lining newer subdivisions.',
    intro:
      'Haines City grew up as a citrus and rail town in the Polk County ridge country, and that grove history still frames the area between its lakes and rolling terrain. Older neighborhoods carry mature live oaks while new residential developments line their streets with palms. The work here ranges from heritage shade-tree care to keeping fresh subdivision plantings on a healthy footing.',
    species: ['live oak', 'laurel oak', 'sabal palm', 'queen palm', 'longleaf pine', 'sand pine'],
    landmarks: ['Lake Eva Park', 'Lake Hamilton', 'Ridge Scenic Highway'],
  },
  {
    slug: 'titusville',
    name: 'Titusville',
    county: 'Brevard',
    miles: 49,
    tier: 2,
    hook: 'Titusville’s Space Coast location means salt-tolerant sabal and washingtonia palms alongside scrub oak hammocks — and hurricane exposure.',
    intro:
      'Titusville sits on the Indian River across from Kennedy Space Center, and its Space Coast setting changes the species mix toward salt-tolerant palms and scrub oak hammocks. Sabal, washingtonia, and queen palms stand alongside the hardier coastal oaks. Hurricane exposure is among the highest in our service area, which makes pre-storm structural pruning a recurring conversation here.',
    species: ['sabal palm', 'washingtonia palm', 'queen palm', 'live oak', 'sand pine', 'southern magnolia'],
    landmarks: ['Indian River', 'Kennedy Space Center area', 'Sand Point Park', 'Space View Park'],
  },
];

// Places that carry the full service × city matrix.
export const matrixCities = cities.filter((c) => c.tier === 1);

// Tier-1 cities (not neighborhoods) — the footer/nav short list.
export const primaryCities = matrixCities.filter((c) => !c.neighborhoodOf);

// Orlando neighborhood pages.
export const orlandoNeighborhoods = cities.filter((c) => c.neighborhoodOf === 'Orlando');

export const getCityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
