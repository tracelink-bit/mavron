/** PLACEHOLDER company data — replace with Mavron's real numbers, people and history. */

export const stats = [
  { value: "16", label: "Years building", detail: "Mechanical delivery since 2009" },
  { value: "240+", label: "People", detail: "Tradespeople, apprentices and engineers" },
  { value: "1.4M", label: "sq ft delivered", detail: "Mechanical scope in the last five years" },
] as const;

export const promise =
  "We design, install, commission and maintain complete mechanical systems — and we stay on the phone long after the ribbon is cut.";

export const values = [
  {
    title: "Plan the details",
    body: "Good mechanical work starts with clear routes, access and sequencing before installation begins.",
  },
  {
    title: "Own the seam",
    body: "Most failures live between trades. We take the seams into our scope rather than arguing about who owned them afterwards.",
  },
  {
    title: "Work safely",
    body: "We plan each task around safe access, trained crews and careful coordination with everyone on site.",
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
    year: "2020",
    title: "HVAC-R in house",
    body: "Mechanical, refrigeration and hydronics joined the plumbing scope, making Mavron a single-source mechanical contractor.",
  },
  {
    year: "Today",
    title: "Three offices, one team",
    body: "Burnaby, Victoria and Kelowna, delivering mechanical projects with a shared commitment to service and aftercare.",
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
    bio: "Runs delivery across all three branches and keeps field teams and project schedules aligned.",
    initials: "VO",
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
    bio: "Owns the safety programme across project sites, including training, safe access and incident prevention.",
    initials: "HS",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    name: "Early planning",
    subtitle: "Before the drawings are fixed",
    body: "We review the mechanical scope, equipment choices, access, budget and construction risks while there is still time to make useful changes.",
    outputs: ["Budget review", "Equipment options", "Constructability review", "Risk register"],
  },
  {
    number: "02",
    name: "Site coordination",
    subtitle: "Making room for every system",
    body: "Our project and field teams coordinate routes, supports, access and installation sequence with the other trades before work begins.",
    outputs: ["Installation sequence", "Trade coordination", "Access review", "Site plan"],
  },
  {
    number: "03",
    name: "Installation",
    subtitle: "Built with care",
    body: "Qualified crews install HVAC-R and plumbing systems, verify field conditions and document quality and safety checks as the work progresses.",
    outputs: ["Installation records", "Pressure tests", "Safety reporting", "Progress updates"],
  },
  {
    number: "04",
    name: "Commissioning & handover",
    subtitle: "Proving it works",
    body: "We test, balance and commission each system, then train building operators and provide a clear handover package.",
    outputs: ["Balancing reports", "Commissioning records", "Operator training", "As-built records"],
  },
  {
    number: "05",
    name: "Aftercare",
    subtitle: "Support beyond opening day",
    body: "A dedicated team handles warranty response, seasonal reassessment and planned maintenance to keep the building performing.",
    outputs: ["Warranty route", "Seasonal reassessment", "Maintenance programme", "Closure record"],
  },
] as const;

export const cultureBlocks = [
  {
    title: "Apprenticeship",
    body: "PLACEHOLDER — describe Mavron's real apprenticeship intake. We support apprentices across plumbing, refrigeration and sheet metal with supervised field experience and technical training.",
  },
  {
    title: "Training",
    body: "Ticket support, manufacturer training, equipment familiarisation and practical coaching from experienced field crews.",
  },
  {
    title: "Safety",
    body: "Safe access, clear work plans and active supervision guide every site activity. Crews review risks before work starts and raise issues as conditions change.",
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
      "Install coordinated plumbing systems on commercial and residential projects across the Lower Mainland, working from coordinated drawings and verified site conditions.",
    requirements: [
      "Red Seal or BC Certificate of Qualification",
      "Commercial or high-rise experience",
      "Comfortable reading construction drawings",
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
    slug: "apprentice-intake",
    title: "Apprentice Intake — Plumbing & Refrigeration",
    type: "Apprenticeship",
    location: "Burnaby, BC",
    department: "Field Operations",
    summary:
      "Sponsored apprenticeship with supervised field experience and technical training. No prior experience required.",
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
