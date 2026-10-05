export type ServiceSection = {
  heading: string;
  body: string;
  points?: string[];
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroLine: string;
  intro: string;
  capabilities: { title: string; body: string }[];
  sections: ServiceSection[];
  deliverables: string[];
  sectors: string[];
  faqs: { q: string; a: string }[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "plumbing",
    name: "Commercial Plumbing",
    navLabel: "Plumbing",
    summary:
      "Water supply, gas piping, drainage and wastewater — designed, prefabricated and installed by our own crews.",
    metaTitle: "Commercial Plumbing Contractor | Mavron Mechanical Group",
    metaDescription:
      "Commercial plumbing across BC: potable water supply, natural gas piping, drainage and wastewater systems, mechanical design, preconstruction, installation and maintenance.",
    heroLine: "Every litre accounted for.",
    intro:
      "Plumbing is the scope that gets blamed when something goes wrong three years after handover. So we treat it as a permanent installation rather than a rough-in. Mavron designs, fabricates and installs the complete wet scope — supply, gas, drainage and waste — with our own tradespeople and our own shop, which means one accountable party from the first coordination model to the last pressure test.",
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
        body: "Self-performed installation by ticketed plumbers and apprentices, sequenced against the fabrication schedule rather than against hope.",
      },
      {
        title: "Maintenance",
        body: "Planned maintenance, recommissioning and reactive service for buildings we built and buildings we inherited.",
      },
    ],
    sections: [
      {
        heading: "Designed once, built twice",
        body: "Every system is modelled to installation tolerance before it reaches the floor. That model drives the fabrication drawings, the spool tickets, the hanger layouts and the field survey points — so the pipe that arrives on site was already installed, digitally, weeks earlier.",
        points: [
          "Coordinated to the federated model, not to a 2D riser diagram",
          "Spool-level fabrication tickets with QR-tracked delivery",
          "Hanger and sleeve layouts set out from model coordinates",
          "Pressure-test records captured against the same part IDs",
        ],
      },
      {
        heading: "Where it earns its keep",
        body: "Wet scopes fail at the joints between trades: the penetration nobody fire-stopped, the riser that clashes with structure on level 14, the interceptor specified for half the load. Model-first plumbing removes those failure points before they exist, and our warranty team — not a subcontractor's — is the one that answers when they don't.",
      },
    ],
    deliverables: [
      "Coordinated plumbing model (LOD 350–400)",
      "Fabrication and spool drawings",
      "Prefabricated risers, water-entry and pump packages",
      "Pressure-test and chlorination records",
      "As-built model and O&M handover pack",
    ],
    sectors: ["Residential towers", "Commercial", "Institutional", "Healthcare"],
    faqs: [
      {
        q: "Do you self-perform plumbing installation?",
        a: "Yes. Plumbing installation is performed by Mavron's own ticketed plumbers and apprentices. We do not subcontract the core wet scope, which is what lets us stand behind the warranty without pointing at somebody else.",
      },
      {
        q: "Can you take a project on design-assist rather than hard bid?",
        a: "Design-assist is our preferred route. Bringing our preconstruction and VDC teams in during design development typically removes the largest cost surprises before drawings are issued for tender.",
      },
      {
        q: "Do you handle gas piping and certification?",
        a: "We install and test natural gas and fuel piping to code, including purging and certified pressure testing, with documentation issued as part of the handover pack.",
      },
    ],
    relatedProjects: ["meridian-tower", "fraser-health-pavilion"],
  },
  {
    slug: "hvac-r",
    name: "HVAC-R",
    navLabel: "HVAC-R",
    summary:
      "Heating, ventilation, air conditioning, refrigeration and hydronic systems — from central plant to the last diffuser.",
    metaTitle: "HVAC-R Contractor — Heating, Cooling & Refrigeration | Mavron",
    metaDescription:
      "Commercial HVAC-R across British Columbia: heating and cooling plant, ventilation, refrigeration, hydronic systems, heat pumps and low-carbon retrofits, installed and maintained by Mavron.",
    heroLine: "Comfort is an engineering outcome.",
    intro:
      "A building's mechanical plant is the loudest thing about it when it is wrong and invisible when it is right. Mavron delivers the complete HVAC-R scope — central heating and cooling, ventilation, refrigeration and hydronics — sized, modelled, prefabricated and commissioned as one system rather than as a set of separately procured pieces.",
    capabilities: [
      {
        title: "Heating & cooling plant",
        body: "Boilers, chillers, heat pumps, heat-recovery chillers and thermal storage, delivered as tested skids wherever the geometry allows.",
      },
      {
        title: "Ventilation",
        body: "Make-up air, exhaust, pressurisation, DOAS and ERV systems, with ductwork coordinated to the architectural ceiling void rather than fought into it.",
      },
      {
        title: "Refrigeration",
        body: "Commercial and process refrigeration, low-charge ammonia and CO₂ systems, cold rooms and specialist process cooling.",
      },
      {
        title: "Hydronic systems",
        body: "Primary and secondary loops, in-floor radiant, fan-coil and VRF distribution, glycol systems, balancing and hydraulic modelling.",
      },
      {
        title: "Low-carbon retrofit",
        body: "Electrification pathways, heat-pump conversions, plant replacement in occupied buildings and staged decarbonisation plans.",
      },
      {
        title: "Commissioning",
        body: "Pre-functional checks, functional testing, air and water balancing and a documented seasonal reassessment.",
      },
    ],
    sections: [
      {
        heading: "Plant rooms that were built before they were built",
        body: "Central plant is the highest-risk, highest-density part of any mechanical scope. We build it in the shop: pump skids, boiler packages, heat-exchanger assemblies and headers are fabricated, pressure-tested and electrically pre-wired on the shop floor, then delivered as a unit that lands in a day instead of a month.",
        points: [
          "Skid-mounted boiler, pump and heat-exchanger packages",
          "Factory pressure and leak testing before dispatch",
          "Rigging and access studies run against the model",
          "Shorter, safer, quieter work in occupied buildings",
        ],
      },
      {
        heading: "Refrigeration, done properly",
        body: "Refrigeration carries regulatory weight that general mechanical work does not — charge limits, leak detection, machinery-room ventilation and monitoring. Our refrigeration crews hold the tickets for it, and our designs are built around the compliance case rather than retrofitted to it afterwards.",
      },
    ],
    deliverables: [
      "Load modelling and plant selection review",
      "Coordinated HVAC and ductwork model",
      "Prefabricated plant skids and risers",
      "Air and water balancing reports",
      "Commissioning records and operator training",
    ],
    sectors: ["Commercial", "Institutional", "Industrial", "Healthcare"],
    faqs: [
      {
        q: "Do you work in occupied buildings?",
        a: "Regularly. Plant replacement in live buildings is one of the strongest arguments for prefabrication — a skid that lands in one shift replaces weeks of disruptive on-site assembly.",
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
    slug: "vdc-bim",
    name: "VDC / BIM",
    navLabel: "VDC / BIM",
    summary:
      "Full 3D mechanical models, trade coordination, clash detection and digital site measurement — the project built twice.",
    metaTitle: "VDC & BIM Services for Mechanical Construction | Mavron",
    metaDescription:
      "Virtual Design and Construction from Mavron: LOD 400 mechanical models, multi-trade coordination, clash detection, laser scanning, digital layout and virtual construction planning.",
    heroLine: "We build it twice. The first one is free.",
    intro:
      "Virtual Design and Construction is not a drafting service. It is the act of constructing the building once, in a model, where mistakes cost hours instead of months — and then constructing it again on site from what that model proved. Mavron's VDC studio sits at the centre of every project we take, not at the edge of it.",
    capabilities: [
      {
        title: "Full 3D mechanical models",
        body: "LOD 350–400 models of the complete mechanical scope — pipe, duct, plant, hangers, valves and access clearances, modelled to the fitting.",
      },
      {
        title: "Multi-trade coordination",
        body: "Federated coordination with architecture, structure, electrical, sprinkler and specialty trades, run on a published cadence with signed sign-offs.",
      },
      {
        title: "Clash detection & resolution",
        body: "Hard, soft and workflow clash testing with tracked issue resolution — the clash report matters far less than the closure record.",
      },
      {
        title: "Digital measurement & scanning",
        body: "Laser scanning and reality capture of existing conditions, scan-to-BIM registration and as-built verification against the design model.",
      },
      {
        title: "Digital layout",
        body: "Robotic total-station layout of hangers, sleeves and penetrations straight from model coordinates, with field verification loops.",
      },
      {
        title: "Virtual construction planning",
        body: "4D sequencing, rigging and access studies, crane and hoist planning and prefabrication break-down driven by the install sequence.",
      },
    ],
    sections: [
      {
        heading: "Finding problems while they are still cheap",
        body: "A clash resolved in the model costs a coordination hour. The same clash found on level 22 costs a crane, a crew, a change order and a schedule slip. Our coordination process is deliberately front-loaded: we would rather spend an extra three weeks in coordination than an extra three months in the field.",
        points: [
          "Weekly federated coordination with published issue logs",
          "Hard, soft and constructability clash testing",
          "Access, maintenance and replacement clearances enforced",
          "Model sign-off gates before any fabrication release",
        ],
      },
      {
        heading: "The model is the contract with the shop",
        body: "Once coordination closes, the model becomes the fabrication instruction. Spools, hangers, sleeves, supports and rack assemblies are extracted directly, which is how we keep shop output and field installation on the same version of the truth.",
      },
    ],
    deliverables: [
      "Federated coordination model and issue log",
      "Clash detection and closure reports",
      "Fabrication-ready spool and rack drawings",
      "Digital layout point files",
      "Laser scan registration and as-built model",
    ],
    sectors: ["All sectors"],
    faqs: [
      {
        q: "Can you coordinate a project you are not installing?",
        a: "Yes. We take standalone VDC and coordination engagements, including scan-to-BIM and as-built verification for owners and other contractors.",
      },
      {
        q: "Which platforms do you work in?",
        a: "Our studio works in the standard mechanical VDC stack and adapts to the project's specified environment and CDE. Tell us what the team is using and we will meet it.",
      },
      {
        q: "What LOD do you model to?",
        a: "LOD 350 for coordination and LOD 400 where the scope is released to fabrication — modelled to the fitting, including hangers, supports and service clearances.",
      },
    ],
    relatedProjects: ["meridian-tower", "cascadia-exchange", "harbourline-transit"],
  },
  {
    slug: "prefabrication",
    name: "Prefabrication",
    navLabel: "Prefabrication",
    summary:
      "Pipe modules, risers, pump and boiler skids fabricated, tested and delivered from our own shop floor.",
    metaTitle: "Mechanical Prefabrication & Modular Assemblies | Mavron",
    metaDescription:
      "Off-site mechanical prefabrication: pipe modules, multi-service racks, gas and hydronic risers, water-entry systems, boiler and pump skids, fixture mock-ups — tested in the shop, delivered to site.",
    heroLine: "Site work is the most expensive place to build.",
    intro:
      "Site is the worst workshop anyone ever invented: it is cold, crowded, at height, weather-dependent and shared with six other trades. So we move as much of the work as possible into a controlled shop, where the same assembly is built on a bench, tested, and shipped to site as a finished unit.",
    capabilities: [
      {
        title: "Pipe modules & racks",
        body: "Multi-service overhead racks carrying pipe, duct, hangers and supports as a single lift, coordinated to the ceiling void.",
      },
      {
        title: "Risers",
        body: "Gas, hydronic, domestic water and drainage risers prefabricated floor-by-floor and set as complete stacks.",
      },
      {
        title: "Pump & boiler skids",
        body: "Plant packages assembled, piped, insulated, pre-wired and pressure-tested before they leave the shop.",
      },
      {
        title: "Water-entry systems",
        body: "Complete service entry assemblies — meters, backflow, strainers, valving and supports — as one tested unit.",
      },
      {
        title: "Fixture & suite mock-ups",
        body: "Full-scale bathroom and suite mock-ups, shower diverter assemblies and repeatable residential pods.",
      },
      {
        title: "Testing & delivery",
        body: "Hydrostatic and pneumatic testing, QA sign-off, protective packaging and just-in-time delivery sequenced to the install programme.",
      },
    ],
    sections: [
      {
        heading: "What moving the work off site actually buys",
        body: "Prefabrication is usually sold as a cost saving. The real returns are safety, schedule certainty and quality consistency — fewer people working at height, fewer hot works in occupied space, and assemblies built to the same bench standard every single time.",
        points: [
          "Fewer working-at-height and hot-work hours on site",
          "Weather-independent production that protects the programme",
          "Repeatable QA on a bench instead of on a ladder",
          "Compressed site install windows in occupied buildings",
        ],
      },
      {
        heading: "Tested before it ships",
        body: "Nothing leaves the shop untested. Assemblies are pressure- or leak-tested, photographed, tagged against their model part ID and signed off, so the field crew installs a unit that has already proven it works rather than one that still has to.",
      },
    ],
    deliverables: [
      "Shop fabrication drawings and spool tickets",
      "Tested pipe modules, racks and risers",
      "Skid-mounted plant packages",
      "QA and pressure-test documentation per assembly",
      "Sequenced just-in-time delivery schedule",
    ],
    sectors: ["Residential towers", "Commercial", "Institutional", "Special projects"],
    faqs: [
      {
        q: "Do you prefabricate for other contractors?",
        a: "Yes. Our shop takes third-party fabrication packages, including skid builds and riser production, provided the coordination model is at a fabrication-ready standard.",
      },
      {
        q: "How far ahead does prefabrication need to start?",
        a: "The shop needs a coordinated, signed-off model before production begins. In practice, that means VDC has to be brought in early — prefabrication is a consequence of good coordination, not a substitute for it.",
      },
      {
        q: "How do modules get to site?",
        a: "Delivery is sequenced to the install programme, with rigging and access routes checked against the model before anything is loaded.",
      },
    ],
    relatedProjects: ["meridian-tower", "fraser-health-pavilion", "cascadia-exchange"],
  },
  {
    slug: "warranty-aftercare",
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
        body: "We train the operators who will run the building, on the plant they will run, with recorded sessions and annotated model views they can return to when the person we trained has moved on.",
      },
    ],
    deliverables: [
      "Warranty response commitment and contact route",
      "Operator training sessions, recorded",
      "O&M manuals and as-built model access",
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
    name: "Trade Partners",
    navLabel: "Trade Partners",
    summary:
      "Sheet metal, controls and BMS, insulation, fire-stopping and heat trace, and fire protection — coordinated under one mechanical scope.",
    metaTitle: "Trade Partner Coordination — Sheet Metal, Controls, Fire Protection | Mavron",
    metaDescription:
      "Mavron coordinates specialist mechanical trades under a single scope: sheet-metal HVAC, controls and BMS, insulation, fire-stopping and heat trace, and fire protection.",
    heroLine: "One scope. One model. One accountable contractor.",
    intro:
      "Some scopes are best delivered by specialists. The failure mode is not the specialist — it is the seam between them, where three parties each believe the fourth owned the penetration. Mavron carries those scopes inside our coordination model and inside our accountability, so the owner has one contractor to call.",
    capabilities: [
      {
        title: "Sheet-metal HVAC",
        body: "Ductwork fabrication and installation coordinated to the same federated model as the pipe scope, with shared rack and hanger strategies.",
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
        body: "Sprinkler and fire-protection coordination integrated into the mechanical model, resolved alongside pipe and duct instead of after them.",
      },
    ],
    sections: [
      {
        heading: "We only list what we actually deliver",
        body: "This page is deliberately short. Every scope above is one Mavron either self-performs or carries under a long-standing partner agreement with shared coordination obligations and shared model access. We do not list capabilities we would have to go shopping for after award.",
        points: [
          "Partner scopes sit inside our federated coordination model",
          "Shared issue log, shared sign-off gates, shared schedule",
          "Single point of accountability to the owner and GC",
          "Warranty routes through our aftercare team, not the partner's",
        ],
      },
      {
        heading: "Fire-stopping is a record, not a product",
        body: "Penetrations are tracked by location and assembly type against the model, photographed and logged. When an inspector asks which assembly was used on level nine, the answer is a lookup rather than an investigation.",
      },
    ],
    deliverables: [
      "Integrated multi-trade coordination model",
      "Partner scope matrix and responsibility map",
      "Fire-stopping location and assembly register",
      "Controls points list and commissioning support",
      "Single-route warranty for all coordinated scopes",
    ],
    sectors: ["All sectors"],
    faqs: [
      {
        q: "Are trade partners subcontractors or part of Mavron?",
        a: "Both arrangements exist depending on scope. What does not change is accountability: partner scopes sit inside our coordination model and warranty route, so the owner deals with Mavron.",
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
