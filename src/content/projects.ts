/**
 * PLACEHOLDER PROJECT DATA.
 * Every project below is invented to demonstrate the gallery, filters and
 * case-study template. Replace with Mavron's real projects before launch.
 * See CONTENT.md.
 */

export const projectSectors = [
  "Residential",
  "Commercial",
  "Institutional",
  "Special Projects",
] as const;

export type ProjectSector = (typeof projectSectors)[number];

export const projectStatuses = ["Complete", "In construction", "In design"] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export type Project = {
  slug: string;
  name: string;
  sector: ProjectSector;
  status: ProjectStatus;
  location: string;
  year: string;
  client: string;
  value: string;
  scope: string[];
  summary: string;
  metaDescription: string;
  challenge: string;
  approach: string;
  outcome: string;
  stats: { label: string; value: string }[];
  services: string[];
  accent: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-tower",
    image: "/images/projects/meridian-tower.webp",
    imageAlt: "Residential tower under construction with exposed mechanical services on its lower floors",
    name: "Meridian Tower",
    sector: "Residential",
    status: "Complete",
    location: "Burnaby, BC",
    year: "2024",
    client: "PLACEHOLDER Developer",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Plumbing"],
    summary:
      "A 42-storey residential tower with complex heating, ventilation and plumbing across 480 suites.",
    metaDescription:
      "Case study: 42-storey residential tower in Burnaby with HVAC-R and plumbing delivered across 480 suites.",
    challenge:
      "Four hundred and eighty repeating suites on an aggressive residential programme, with a single tower crane shared across every trade and a mechanical scope that could not be allowed to sit on the critical path.",
    approach:
      "We established a repeatable installation sequence for each suite, coordinated riser locations with the structure and verified supply, drainage and ventilation as work progressed floor by floor.",
    outcome:
      "Mechanical came off the critical path at level nine and stayed off it. Field labour hours per suite fell substantially against the baseline estimate, and rework attributable to mechanical coordination was close to eliminated.",
    stats: [
      { label: "Storeys", value: "42" },
      { label: "Suites", value: "480" },
      { label: "Mechanical suites", value: "480" },
      { label: "Riser locations", value: "126" },
    ],
    services: ["hvac-r", "plumbing"],
    accent: "forge",
  },
  {
    slug: "cascadia-exchange",
    image: "/images/projects/cascadia-exchange.webp",
    imageAlt: "Heat-recovery equipment, pumps and pipework inside a commercial mechanical plant room",
    name: "Cascadia Exchange",
    sector: "Commercial",
    status: "Complete",
    location: "Vancouver, BC",
    year: "2023",
    client: "PLACEHOLDER Owner",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Trade Partners"],
    summary:
      "A 310,000 sq ft office campus with a heat-recovery chiller plant serving the campus.",
    metaDescription:
      "Case study: Cascadia Exchange office campus in Vancouver — heat-recovery chiller plant and coordinated mechanical installation by Mavron.",
    challenge:
      "A central plant with a demanding energy target, a plant room that had to be finished before the building above it was watertight, and a rigging window measured in days rather than weeks.",
    approach:
      "The team planned plant-room access, lifting and installation around the building programme, then installed pumps, headers, heat exchangers and heat-recovery chiller connections with staged pressure testing.",
    outcome:
      "Plant room installation was completed inside the rigging window. Commissioning started ahead of schedule following staged testing and installation.",
    stats: [
      { label: "Floor area", value: "310k sq ft" },
      { label: "Plant systems", value: "6" },
      { label: "Site install", value: "4 days" },
    ],
    services: ["hvac-r", "trade-partners"],
    accent: "copper",
  },
  {
    slug: "fraser-health-pavilion",
    image: "/images/projects/fraser-health-pavilion.webp",
    imageAlt: "Hospital pavilion construction with installed ductwork beside an existing healthcare building",
    name: "Fraser Health Pavilion",
    sector: "Institutional",
    status: "In construction",
    location: "Surrey, BC",
    year: "2026",
    client: "PLACEHOLDER Health Authority",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Plumbing", "Warranty & Aftercare"],
    summary:
      "An acute-care pavilion built alongside a live hospital, with medical gas, isolation ventilation and zero tolerance for disruption.",
    metaDescription:
      "Case study: acute-care pavilion in Surrey — medical gas and isolation room ventilation delivered by Mavron adjacent to a live hospital.",
    challenge:
      "Building against a functioning hospital means noise limits, infection-control protocols, restricted delivery windows and services that cannot be interrupted for any reason at any time.",
    approach:
      "The team planned corridor work, isolation-room ventilation and utility tie-ins around the hospital's operating schedule. Each connection was reviewed with facilities staff and completed within an agreed shutdown window.",
    outcome:
      "In progress. To date, every planned tie-in has been completed inside its agreed window with no unplanned service interruption to the adjacent facility.",
    stats: [
      { label: "Beds", value: "180" },
      { label: "Isolation rooms", value: "24" },
      { label: "Unplanned outages", value: "0" },
    ],
    services: ["hvac-r", "plumbing", "warranty-aftercare"],
    accent: "steel",
  },
  {
    slug: "harbourline-transit",
    image: "/images/projects/harbourline-transit.webp",
    imageAlt: "Underground transit construction with tunnel ventilation equipment and exposed concrete",
    name: "Harbourline Transit Exchange",
    sector: "Special Projects",
    status: "In construction",
    location: "North Vancouver, BC",
    year: "2026",
    client: "PLACEHOLDER Transit Authority",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Trade Partners"],
    summary:
      "Below-grade transit infrastructure with tunnel ventilation, smoke control and a coordination problem in three dimensions.",
    metaDescription:
      "Case study: Harbourline Transit Exchange — tunnel ventilation, smoke control and below-grade mechanical work.",
    challenge:
      "Below-grade infrastructure has no spare space. Tunnel ventilation, smoke control, drainage and structure compete for the same void, and a clash discovered in the field is a concrete problem rather than a pipe problem.",
    approach:
      "The mechanical team reviewed built conditions and access before installation, coordinating tunnel ventilation, smoke control and drainage with the structural and electrical trades.",
    outcome:
      "In progress. Field coordination has so far avoided structural conflicts in the mechanical scope.",
    stats: [
      { label: "Field structural conflicts", value: "0" },
      { label: "Levels below grade", value: "4" },
    ],
    services: ["hvac-r", "trade-partners"],
    accent: "copper",
  },
  {
    slug: "northfield-ice-centre",
    image: "/images/projects/northfield-ice-centre.webp",
    imageAlt: "Community ice arena seen from the concourse with overhead ventilation and an empty rink",
    name: "Northfield Ice Centre",
    sector: "Institutional",
    status: "Complete",
    location: "Kelowna, BC",
    year: "2022",
    client: "PLACEHOLDER Municipality",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Warranty & Aftercare"],
    summary:
      "Twin-pad community arena with low-charge ammonia refrigeration and waste-heat recovery into the building's hydronics.",
    metaDescription:
      "Case study: twin-pad arena in Kelowna with low-charge ammonia refrigeration and waste-heat recovery, delivered and maintained by Mavron.",
    challenge:
      "Arena refrigeration is an energy problem disguised as a comfort problem: enormous continuous cooling load, enormous rejected heat, and a municipal operating budget that has to survive both.",
    approach:
      "A low-charge ammonia plant with heat recovery feeding the building's hydronic loop, dehumidification and domestic hot water. Machinery-room ventilation, detection and monitoring were designed around the compliance case from day one.",
    outcome:
      "The arena recovers a large share of its rejected refrigeration heat into building loads. Mavron holds the ongoing planned maintenance contract.",
    stats: [
      { label: "Ice pads", value: "2" },
      { label: "Refrigerant", value: "Low-charge NH₃" },
      { label: "Heat recovery", value: "Hydronic + DHW" },
      { label: "Maintained since", value: "2022" },
    ],
    services: ["hvac-r", "warranty-aftercare"],
    accent: "forge",
  },
  {
    slug: "alder-quay-residences",
    image: "/images/projects/alder-quay-residences.webp",
    imageAlt: "Mid-rise residential building under construction beside a coastal waterfront",
    name: "Alder Quay Residences",
    sector: "Residential",
    status: "In design",
    location: "Victoria, BC",
    year: "2027",
    client: "PLACEHOLDER Developer",
    value: "PLACEHOLDER $M",
    scope: ["HVAC-R", "Plumbing"],
    summary:
      "An all-electric mid-rise on a design-assist route, with central heat pumps and a hydronic strategy set during design development.",
    metaDescription:
      "Case study: all-electric mid-rise residential in Victoria — central heat-pump plant and hydronic strategy developed with Mavron on a design-assist basis.",
    challenge:
      "All-electric residential only works if the hydronic strategy suits low-temperature heat sources. Getting that wrong at design stage is not recoverable at construction stage.",
    approach:
      "Mavron joined at design development on a design-assist basis, modelling plant options, distribution temperatures and riser strategies against both capital cost and operating cost before the drawings were fixed.",
    outcome:
      "In design. The hydronic strategy and plant selection were settled before issue-for-tender, removing the single largest pricing risk from the mechanical scope.",
    stats: [
      { label: "Storeys", value: "12" },
      { label: "Homes", value: "164" },
      { label: "Plant", value: "All-electric" },
      { label: "Route", value: "Design-assist" },
    ],
    services: ["hvac-r", "plumbing"],
    accent: "steel",
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
