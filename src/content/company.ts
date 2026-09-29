/** PLACEHOLDER company data — replace with Mavron's real numbers, people and history. */

export const stats = [
  { value: "16", label: "Years building", detail: "Mechanical delivery since 2009" },
  { value: "240+", label: "People", detail: "Tradespeople, apprentices and engineers" },
  { value: "40,000", label: "sq ft shop", detail: "Fabrication floor in Burnaby" },
  { value: "1.4M", label: "sq ft delivered", detail: "Mechanical scope in the last five years" },
] as const;

export const promise =
  "We design, model, prefabricate, install and maintain complete mechanical systems — and we stay on the phone long after the ribbon is cut.";

export const values = [
  {
    title: "Build it twice",
    body: "Every project is constructed in the model before it is constructed on site. The first build is where mistakes are supposed to happen.",
  },
  {
    title: "Own the seam",
    body: "Most failures live between trades. We take the seams into our scope rather than arguing about who owned them afterwards.",
  },
  {
    title: "Shop over site",
    body: "If an assembly can be built on a bench instead of on a ladder, it should be. Safer, faster, and the same every time.",
  },
  {
    title: "Answer the phone",
    body: "Warranty is a standing team with its own number, not an overhead to be minimised until the client gives up.",
  },
  {
    title: "Train the next crew",
    body: "Apprenticeship is a commitment, not a staffing tactic. The trade only survives if somebody teaches it.",
  },
  {
    title: "Say the hard thing early",
    body: "A budget problem raised in design development is advice. The same problem raised at handover is an excuse.",
  },
] as const;

export const story = [
  {
    year: "2009",
    title: "Two vans and a rented bay",
    body: "Mavron started as a plumbing contractor working residential mid-rise in the Lower Mainland, with a stubborn conviction that coordination drawings were worth paying for before anyone else thought so.",
  },
  {
    year: "2014",
    title: "The first shop",
    body: "A 6,000 sq ft fabrication bay in Burnaby. The first riser stacks came off the bench that year and never went back on site in pieces.",
  },
  {
    year: "2017",
    title: "VDC becomes the centre",
    body: "The coordination team stopped being a service the projects borrowed and became the department the projects were run through.",
  },
  {
    year: "2020",
    title: "HVAC-R in house",
    body: "Mechanical, refrigeration and hydronics joined the plumbing scope, making Mavron a single-source mechanical contractor.",
  },
  {
    year: "2023",
    title: "40,000 sq ft",
    body: "The current Burnaby fabrication floor opened, with skid production, riser lines and a full-scale mock-up bay.",
  },
  {
    year: "Today",
    title: "Three offices, one model",
    body: "Burnaby, Victoria and Kelowna, running projects out of a single coordination environment and a single warranty team.",
  },
] as const;

/** PLACEHOLDER leadership — replace with real names, roles and bios. */
export const leadership = [
  {
    name: "PLACEHOLDER — Name",
    role: "President",
    bio: "Red Seal plumber who started the company out of a rented bay and still reads every coordination sign-off.",
    initials: "MP",
  },
  {
    name: "PLACEHOLDER — Name",
    role: "Vice President, Operations",
    bio: "Runs delivery across all three branches and owns the relationship between the shop schedule and the site schedule.",
    initials: "VO",
  },
  {
    name: "PLACEHOLDER — Name",
    role: "Director, Virtual Design & Construction",
    bio: "Built the VDC studio from one workstation to the department every project is now run through.",
    initials: "VD",
  },
  {
    name: "PLACEHOLDER — Name",
    role: "Director, Fabrication",
    bio: "Responsible for the Burnaby shop floor, from spool production to skid testing and dispatch.",
    initials: "DF",
  },
  {
    name: "PLACEHOLDER — Name",
    role: "Director, Warranty & Aftercare",
    bio: "Leads the standing aftercare crew and the response commitments that go into every project agreement.",
    initials: "WA",
  },
  {
    name: "PLACEHOLDER — Name",
    role: "Health, Safety & Environment Manager",
    bio: "Owns the safety programme across shop and site, including the prefabrication case for reducing work at height.",
    initials: "HS",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    name: "Early planning",
    subtitle: "Before the drawings are fixed",
    body: "We join at design development wherever the procurement route allows. Budget modelling, plant option studies, constructability review and risk mapping happen while changes are still free.",
    outputs: ["Budget model", "Option studies", "Constructability review", "Risk register"],
  },
  {
    number: "02",
    name: "Design & coordination",
    subtitle: "Building it the first time",
    body: "The mechanical scope is modelled to LOD 350–400 and coordinated against every other trade on a published cadence, with hard, soft and workflow clash testing and tracked closure.",
    outputs: ["Federated model", "Clash closure log", "Sign-off gates", "Digital layout points"],
  },
  {
    number: "03",
    name: "Fabrication",
    subtitle: "Built on a bench, not a ladder",
    body: "Once coordination closes, the model releases directly to the shop. Spools, racks, risers and skids are produced, pressure-tested, tagged and staged against the install sequence.",
    outputs: ["Spool tickets", "Tested assemblies", "QA records", "Delivery sequence"],
  },
  {
    number: "04",
    name: "Site installation",
    subtitle: "Building it the second time",
    body: "Crews install from model coordinates with robotic layout, receiving tested assemblies just in time. Progress is tracked against the same part IDs used in the shop.",
    outputs: ["Layout verification", "Install progress by part ID", "Test records", "Safety reporting"],
  },
  {
    number: "05",
    name: "Commissioning & handover",
    subtitle: "Proving it works",
    body: "Pre-functional and functional testing, air and water balancing, operator training and a documented handover pack built from the as-built model rather than reconstructed afterwards.",
    outputs: ["Balancing reports", "Commissioning records", "Operator training", "As-built model"],
  },
  {
    number: "06",
    name: "Aftercare",
    subtitle: "The part most people skip",
    body: "A standing warranty team, documented response commitments, seasonal reassessment after the first full heating and cooling cycles, and planned maintenance for as long as the owner wants it.",
    outputs: ["Warranty route", "Seasonal reassessment", "Maintenance programme", "Closure record"],
  },
] as const;

export const cultureBlocks = [
  {
    title: "Apprenticeship",
    body: "PLACEHOLDER — describe Mavron's real apprenticeship intake. We sponsor apprentices across plumbing, steamfitting, refrigeration and sheet metal, with shop rotations built into the first two years so every apprentice learns fabrication before they learn shortcuts.",
  },
  {
    title: "Training",
    body: "Ticket support, manufacturer training, VDC platform training for field crews, and a standing internal programme on model reading and digital layout.",
  },
  {
    title: "Safety",
    body: "The prefabrication case is a safety case first: fewer hours at height, fewer hot works, fewer people in congested overhead space. Our shop-versus-site hour ratio is a safety metric before it is a cost metric.",
  },
  {
    title: "Community",
    body: "PLACEHOLDER — describe Mavron's real community work: trades outreach in secondary schools, mechanical scope donated to community facilities, and support for local skilled-trades bursaries.",
  },
] as const;

/** PLACEHOLDER job listings — replace with Mavron's live vacancies. */
export const jobs = [
  {
    slug: "journeyperson-plumber",
    title: "Journeyperson Plumber",
    type: "Full-time",
    location: "Burnaby, BC",
    department: "Field Operations",
    summary:
      "Install coordinated plumbing systems on commercial and residential projects across the Lower Mainland, working from model-derived layout and prefabricated assemblies.",
    requirements: [
      "Red Seal or BC Certificate of Qualification",
      "Commercial or high-rise experience",
      "Comfortable working from 3D coordination models",
      "Valid driver's licence",
    ],
  },
  {
    slug: "hvac-r-technician",
    title: "HVAC-R Technician",
    type: "Full-time",
    location: "Burnaby, BC",
    department: "Field Operations",
    summary:
      "Install, service and commission commercial HVAC and refrigeration plant, including heat-pump conversions and low-charge ammonia systems.",
    requirements: [
      "Refrigeration and Air Conditioning Mechanic certification",
      "Gas ticket an asset",
      "Commissioning and service experience",
      "Valid driver's licence",
    ],
  },
  {
    slug: "vdc-coordinator",
    title: "VDC Coordinator",
    type: "Full-time",
    location: "Burnaby, BC",
    department: "Virtual Design & Construction",
    summary:
      "Model and coordinate mechanical scopes to fabrication level, run clash detection cycles and release production packages to the shop.",
    requirements: [
      "Mechanical modelling experience at LOD 350+",
      "Multi-trade coordination and clash workflows",
      "Understanding of fabrication and spool logic",
      "Trades background an asset",
    ],
  },
  {
    slug: "fabrication-welder",
    title: "Fabrication Welder",
    type: "Full-time",
    location: "Burnaby, BC",
    department: "Fabrication",
    summary:
      "Produce pipe spools, racks and skid assemblies on the shop floor to fabrication drawings, with pressure testing and QA sign-off.",
    requirements: [
      "B-pressure or equivalent ticket",
      "Pipe fabrication experience",
      "Comfortable reading isometrics and spool tickets",
    ],
  },
  {
    slug: "apprentice-intake",
    title: "Apprentice Intake — Plumbing & Refrigeration",
    type: "Apprenticeship",
    location: "Burnaby, BC",
    department: "Field Operations",
    summary:
      "Sponsored apprenticeship with rotations through the fabrication shop, VDC studio and field crews. No prior experience required.",
    requirements: [
      "Eligible to work in Canada",
      "Willing to attend technical training",
      "Reliable and safety-minded",
    ],
  },
  {
    slug: "project-manager-mechanical",
    title: "Project Manager — Mechanical",
    type: "Full-time",
    location: "Victoria, BC",
    department: "Project Delivery",
    summary:
      "Own delivery of mechanical scopes on Island projects, from preconstruction through commissioning and handover.",
    requirements: [
      "Mechanical contracting project management experience",
      "Commercial and institutional project background",
      "Comfortable owning budget, schedule and client relationship",
    ],
  },
] as const;
