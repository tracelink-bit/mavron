export type ServiceSection = {
  heading: string;
  body: string;
  points?: string[];
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  image: string;
  imageAlt: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroLine: string;
  intro: string;
  capabilities: { title: string; body: string; image?: string; imageAlt?: string }[];
  sections: ServiceSection[];
  deliverables: string[];
  sectors: string[];
  faqs: { q: string; a: string }[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "hvac-r",
    image: "/images/services/hvac-r.webp",
    imageAlt: "Heat-pump and air-handling equipment on a commercial rooftop beneath an overcast sky",
    name: "HVAC-R",
    navLabel: "HVAC-R",
    summary:
      "Heating, ventilation, air conditioning, refrigeration and hydronic systems — from central plant to the last diffuser.",
    metaTitle: "HVAC-R Contractor — Heating, Cooling & Refrigeration | Mavron",
    metaDescription:
      "Commercial HVAC-R across British Columbia: heating and cooling plant, ventilation, refrigeration, hydronic systems, heat pumps and low-carbon retrofits, installed and maintained by Mavron.",
    heroLine: "Comfort is an engineering outcome.",
    intro:
      "A building's mechanical plant is the loudest thing about it when it is wrong and invisible when it is right. Mavron delivers the complete HVAC-R scope — central heating and cooling, ventilation, refrigeration and hydronics — designed, installed and commissioned as one system rather than as a set of separately procured pieces.",
    capabilities: [
      {
        title: "Heating & cooling plant",
        body: "Boilers, chillers, heat pumps, heat-recovery chillers and thermal storage, installed and tested as complete plant systems.",
        image: "/images/hvac-scope/heating-cooling-plant.webp",
        imageAlt: "Pumps, chillers and connected pipework in a commercial mechanical plant room",
      },
      {
        title: "Ventilation",
        body: "Make-up air, exhaust, pressurisation, DOAS and ERV systems, with ductwork coordinated to the architectural ceiling void rather than fought into it.",
        image: "/images/hvac-scope/ventilation.webp",
        imageAlt: "Galvanized ventilation ductwork and air-handling equipment in a mechanical room",
      },
      {
        title: "Refrigeration",
        body: "Commercial and process refrigeration, low-charge ammonia and CO₂ systems, cold rooms and specialist process cooling.",
        image: "/images/hvac-scope/refrigeration.webp",
        imageAlt: "Commercial refrigeration compressors and insulated process piping",
      },
      {
        title: "Hydronic systems",
        body: "Primary and secondary loops, in-floor radiant, fan-coil and VRF distribution, glycol systems, balancing and hydraulic modelling.",
        image: "/images/hvac-scope/hydronic-systems.webp",
        imageAlt: "Hydronic water distribution pipes, pumps and gauges in a plant room",
      },
      {
        title: "Low-carbon retrofit",
        body: "Electrification pathways, heat-pump conversions, plant replacement in occupied buildings and staged decarbonisation plans.",
        image: "/images/hvac-scope/low-carbon-retrofit.webp",
        imageAlt: "Modern heat-pump equipment installed alongside existing building plant",
      },
      {
        title: "Commissioning",
        body: "Pre-functional checks, functional testing, air and water balancing and a documented seasonal reassessment.",
        image: "/images/hvac-scope/commissioning.webp",
        imageAlt: "Technician checking an air-handling unit with a handheld instrument",
      },
    ],
    sections: [
      {
        heading: "Plant rooms built for performance",
        body: "Central plant is the most demanding part of a mechanical scope. We plan access, sequence installation and test boilers, pumps, heat exchangers and connected systems carefully before commissioning.",
        points: [
          "Boiler, pump and heat-exchanger installation",
          "Pressure and leak testing on site",
          "Rigging and access planning",
          "Safe sequencing in occupied buildings",
        ],
      },
      {
        heading: "Refrigeration, done properly",
        body: "Refrigeration carries regulatory weight that general mechanical work does not — charge limits, leak detection, machinery-room ventilation and monitoring. Our refrigeration crews hold the tickets for it, and our designs are built around the compliance case rather than retrofitted to it afterwards.",
      },
    ],
    deliverables: [
      "Load modelling and plant selection review",
      "Coordinated HVAC and ductwork installation plans",
      "Plant equipment and riser installation",
      "Air and water balancing reports",
      "Commissioning records and operator training",
    ],
    sectors: ["Commercial", "Institutional", "Industrial", "Healthcare"],
    faqs: [
      {
        q: "Do you work in occupied buildings?",
        a: "Yes. We plan access, shutdowns and installation around building operations to limit disruption to occupants.",
      },
      {
        q: "Can you support heat-pump conversions and electrification?",
        a: "Yes. We deliver heat-pump conversions, heat-recovery chiller installations and staged decarbonisation plans, including the hydronic re-engineering that low-temperature systems usually require.",
      },
      {
        q: "Is commissioning included?",
        a: "Pre-functional and functional testing, air and water balancing and operator training are part of our standard delivery, with a documented seasonal reassessment after handover.",
      },
    ],
    relatedProjects: ["cascadia-exchange", "northfield-ice-centre"],
  },
  {
    slug: "plumbing",
    image: "/images/services/plumbing.webp",
    imageAlt: "Copper water lines, valves and circulation pumps in a commercial plumbing plant room",
    name: "Commercial Plumbing",
    navLabel: "Plumbing",
    summary:
      "Water supply, gas piping, drainage and wastewater — designed and installed by our own crews.",
    metaTitle: "Commercial Plumbing Contractor | Mavron Mechanical Group",
    metaDescription:
      "Commercial plumbing across BC: potable water supply, natural gas piping, drainage and wastewater systems, mechanical design, preconstruction, installation and maintenance.",
    heroLine: "Every litre accounted for.",
    intro:
      "Plumbing is the scope that gets blamed when something goes wrong three years after handover. So we treat it as a permanent installation rather than a rough-in. Mavron designs and installs the complete wet scope — supply, gas, drainage and waste — with our own tradespeople, giving clients one accountable team from planning to the last pressure test.",
    capabilities: [
      {
        title: "Potable water supply",
        body: "Service entries, booster sets, pressure zoning, recirculation, backflow prevention and full domestic distribution for high-rise and horizontal builds.",
      },
      {
        title: "Natural gas & fuel piping",
        body: "Metered services, rooftop distribution, boiler and generator feeds, seismic restraint, purging and certified pressure testing.",
      },
      {
        title: "Drainage & wastewater",
        body: "Sanitary and storm systems, grease and oil interceptors, sump and ejector packages, trap priming and acoustic isolation where it matters.",
      },
      {
        title: "Design & preconstruction",
        body: "Design-assist and design-build routes, budget modelling, constructability review and value engineering before the first pipe is cut.",
      },
      {
        title: "Installation",
        body: "Self-performed installation by ticketed plumbers and apprentices, sequenced with the work of other trades.",
      },
      {
        title: "Maintenance",
        body: "Planned maintenance, recommissioning and reactive service for buildings we built and buildings we inherited.",
      },
    ],
    sections: [
      {
        heading: "Planned carefully, installed precisely",
        body: "Every system is reviewed against the building conditions before installation. Our crews coordinate routes, supports and access with the other trades, then document testing and verification as the work progresses.",
        points: [
          "Coordinated routes and access with adjacent trades",
          "Clear installation and delivery sequencing",
          "Hanger and sleeve locations verified on site",
          "Pressure-test records captured at each stage",
        ],
      },
      {
        heading: "Where it earns its keep",
        body: "Wet scopes fail at the joints between trades: the penetration nobody fire-stopped, the riser that clashes with structure on level 14, the interceptor specified for half the load. Early field coordination helps prevent those failure points, and our warranty team — not a subcontractor's — is the one that answers when they don't.",
      },
    ],
    deliverables: [
      "Coordinated plumbing installation plans",
      "Installation drawings and field documentation",
      "Risers, water-entry systems and pump installations",
      "Pressure-test and chlorination records",
      "As-built records and O&M handover pack",
    ],
    sectors: ["Residential towers", "Commercial", "Institutional", "Healthcare"],
    faqs: [
      {
        q: "Do you self-perform plumbing installation?",
        a: "Yes. Plumbing installation is performed by Mavron's own ticketed plumbers and apprentices. We do not subcontract the core wet scope, which is what lets us stand behind the warranty without pointing at somebody else.",
      },
      {
        q: "Can you take a project on design-assist rather than hard bid?",
        a: "Design-assist is our preferred route. Bringing our preconstruction and field teams in during design development typically removes the largest cost surprises before drawings are issued for tender.",
      },
      {
        q: "Do you handle gas piping and certification?",
        a: "We install and test natural gas and fuel piping to code, including purging and certified pressure testing, with documentation issued as part of the handover pack.",
      },
    ],
    relatedProjects: ["meridian-tower", "fraser-health-pavilion"],
  },
  {
    slug: "warranty-aftercare",
    image: "/images/services/warranty-aftercare.webp",
    imageAlt: "Maintenance technician inspecting mechanical equipment in a commercial plant room",
    name: "Warranty & Aftercare",
    navLabel: "Warranty & Aftercare",
    summary:
      "A dedicated post-installation team: handover training, warranty response, maintenance and the awkward jobs nobody else wants.",
    metaTitle: "Mechanical Warranty & Aftercare Services | Mavron",
    metaDescription:
      "Mavron's dedicated warranty team handles post-project issue resolution, system handover and operator training, planned maintenance, temporary water, demolition and show-suite services.",
    heroLine: "Handover is the middle of the job, not the end.",
    intro:
      "Most mechanical contractors treat warranty as an overhead to be minimised. We treat it as the part of the relationship where reputation is actually decided — so it has its own team, its own phone number and its own response commitments, staffed by people who are not being pulled off a live project to attend.",
    capabilities: [
      {
        title: "Dedicated warranty team",
        body: "A standing crew whose only job is post-installation work — not project crews borrowed between milestones.",
      },
      {
        title: "Post-project issue resolution",
        body: "Logged, tracked and closed warranty items with a documented response commitment and a single point of contact.",
      },
      {
        title: "Handover & operator training",
        body: "Practical system training for building operators, recorded walkthroughs and O&M documentation people can actually use.",
      },
      {
        title: "Planned maintenance",
        body: "Scheduled maintenance programmes for mechanical plant, including seasonal changeover and performance reassessment.",
      },
      {
        title: "Temporary water & site services",
        body: "Temporary water, heat and site mechanical services during construction and phased occupancy.",
      },
      {
        title: "Demolition, relocation & show suites",
        body: "Mechanical demolition, service relocations, and show-suite fit-outs delivered on sales-programme timelines.",
      },
    ],
    sections: [
      {
        heading: "The first twelve months",
        body: "A building behaves differently once people are in it. The first year surfaces balancing drift, control sequences that looked right on paper, and occupancy patterns nobody modelled. Our aftercare programme plans for that year rather than reacting to it.",
        points: [
          "Documented response times by issue severity",
          "Seasonal reassessment after the first heating and cooling cycles",
          "Rebalancing and control tuning against real occupancy",
          "A closure record the owner keeps, not one we keep",
        ],
      },
      {
        heading: "Training that outlives the handover binder",
        body: "We train the operators who will run the building, on the plant they will run, with recorded sessions and practical system documentation they can return to later.",
      },
    ],
    deliverables: [
      "Warranty response commitment and contact route",
      "Operator training sessions, recorded",
      "O&M manuals and as-built records",
      "Seasonal reassessment report",
      "Planned maintenance programme",
    ],
    sectors: ["All sectors"],
    faqs: [
      {
        q: "What is your warranty response time?",
        a: "Response commitments are set by issue severity and confirmed in the project agreement, with a 24/7 route for anything affecting occupancy or life safety.",
      },
      {
        q: "Do you maintain buildings you did not install?",
        a: "Yes. We take on planned maintenance and service for inherited mechanical plant, usually starting with a condition survey and a documented baseline.",
      },
      {
        q: "Is operator training included?",
        a: "It is part of standard handover. Sessions are recorded and issued alongside the O&M pack so future operators are not dependent on institutional memory.",
      },
    ],
    relatedProjects: ["fraser-health-pavilion", "northfield-ice-centre"],
  },
  {
    slug: "trade-partners",
    image: "/images/services/trade-partners.webp",
    imageAlt: "Construction tradespeople coordinating ductwork, pipework and cable trays on site",
    name: "Trade Partners",
    navLabel: "Trade Partners",
    summary:
      "Sheet metal, controls and BMS, insulation, fire-stopping and heat trace, and fire protection — coordinated under one mechanical scope.",
    metaTitle: "Trade Partner Coordination — Sheet Metal, Controls, Fire Protection | Mavron",
    metaDescription:
      "Mavron coordinates specialist mechanical trades under a single scope: sheet-metal HVAC, controls and BMS, insulation, fire-stopping and heat trace, and fire protection.",
    heroLine: "One scope. One team. One accountable contractor.",
    intro:
      "Some scopes are best delivered by specialists. The challenge is the seam between them, where three parties each believe the fourth owned the penetration. Mavron coordinates those scopes and remains accountable, so the owner has one contractor to call.",
    capabilities: [
      {
        title: "Sheet-metal HVAC",
        body: "Ductwork installation coordinated with piping, controls and structure, with shared access and support planning.",
      },
      {
        title: "Controls & BMS",
        body: "Control system integration, sequence development, points-list coordination and commissioning support against the mechanical design intent.",
      },
      {
        title: "Insulation",
        body: "Thermal and acoustic insulation for pipe, duct and plant, scheduled against the install programme rather than chased after it.",
      },
      {
        title: "Fire-stopping & heat trace",
        body: "Penetration fire-stopping with documented assemblies and tracked locations, plus freeze-protection and process heat-trace systems.",
      },
      {
        title: "Fire protection",
        body: "Sprinkler and fire-protection coordination resolved alongside pipe and duct installation instead of after them.",
      },
    ],
    sections: [
      {
        heading: "We only list what we actually deliver",
        body: "Every scope above is one Mavron either self-performs or carries under a long-standing partner agreement with shared coordination responsibilities. We plan access, sequencing and accountability with those partners before work begins.",
        points: [
          "Partner scopes are planned with the mechanical installation",
          "Shared issue log, shared sign-off gates, shared schedule",
          "Single point of accountability to the owner and GC",
          "Warranty routes through our aftercare team, not the partner's",
        ],
      },
      {
        heading: "Fire-stopping is a record, not a product",
        body: "Penetrations are tracked by location and assembly type, photographed and logged. When an inspector asks which assembly was used on level nine, the answer is a lookup rather than an investigation.",
      },
    ],
    deliverables: [
      "Multi-trade installation coordination",
      "Partner scope matrix and responsibility map",
      "Fire-stopping location and assembly register",
      "Controls points list and commissioning support",
      "Single-route warranty for all coordinated scopes",
    ],
    sectors: ["All sectors"],
    faqs: [
      {
        q: "Are trade partners subcontractors or part of Mavron?",
        a: "Both arrangements exist depending on scope. What does not change is accountability: partner scopes are coordinated with our work and supported through our warranty route, so the owner deals with Mavron.",
      },
      {
        q: "Can partner scopes be procured separately?",
        a: "They can, and sometimes should. We will say so when it is the right call — but we will also be clear about which coordination seams the project then has to manage itself.",
      },
    ],
    relatedProjects: ["harbourline-transit", "cascadia-exchange"],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
