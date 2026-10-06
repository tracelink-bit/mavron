/** PLACEHOLDER articles — replace with Mavron's real posts. Body is simple block content. */

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: "Technology" | "Project Update" | "Safety" | "Industry";
  date: string;
  readingTime: string;
  author: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  body: InsightBlock[];
};

export const insightCategories = [
  "Technology",
  "Project Update",
  "Safety",
  "Industry",
] as const;

export const insights: Insight[] = [
  {
    slug: "prefabrication-is-a-safety-programme",
    title: "Prefabrication is a safety programme that happens to save money",
    category: "Safety",
    date: "2026-07-14",
    readingTime: "6 min",
    author: "Mavron HSE",
    excerpt:
      "The business case for off-site fabrication is usually written in dollars. The stronger case is written in hours spent at height.",
    metaDescription:
      "Why mechanical prefabrication should be justified as a safety programme first: fewer hours at height, fewer hot works, and more consistent QA.",
    image: "/images/insights/prefabrication-safety.webp",
    imageAlt: "Tradesperson assembling a pipe spool at bench height in a mechanical fabrication shop",
    body: [
      {
        type: "p",
        text: "Ask most mechanical contractors why they prefabricate and you will get a productivity answer: shop hours are cheaper than field hours, weather does not stop a bench, and a repeated assembly gets faster every time. All true. None of it is the best argument.",
      },
      {
        type: "h2",
        text: "Count the hours, not the dollars",
      },
      {
        type: "p",
        text: "The serious incidents in mechanical construction cluster in a small number of activities: working at height, hot works in congested overhead space, manual handling of awkward loads, and work adjacent to other trades in shared voids. Every one of those is an activity that prefabrication moves off site or removes entirely.",
      },
      {
        type: "ul",
        items: [
          "A riser stack built on a bench is a riser stack not assembled from a lift",
          "A shop weld is a weld not performed above an occupied floor",
          "A tested skid is a plant room not assembled piece by piece in a confined space",
          "A single rigged lift replaces hundreds of individual overhead fixings",
        ],
      },
      {
        type: "h2",
        text: "The metric that matters",
      },
      {
        type: "p",
        text: "We track the ratio of shop hours to site hours on every project, and we report it alongside incident data rather than alongside cost data. When the ratio moves in the right direction, exposure hours in the highest-risk activities fall. The cost saving is real, but it is a consequence.",
      },
      {
        type: "quote",
        text: "If an assembly can be built on a bench instead of on a ladder, it should be.",
      },
      {
        type: "h2",
        text: "What it demands in return",
      },
      {
        type: "p",
        text: "Prefabrication is not free. It requires coordination to close early, a model at fabrication standard, and a client willing to hold design decisions still long enough for the shop to produce. Projects that want prefabrication benefits without the coordination discipline get neither.",
      },
    ],
  },
  {
    slug: "clash-reports-are-not-the-deliverable",
    title: "Clash reports are not the deliverable. Closure is.",
    category: "Technology",
    date: "2026-05-28",
    readingTime: "5 min",
    author: "Mavron VDC",
    excerpt:
      "A 4,000-clash report proves the model was tested. It proves nothing about whether the building can be built.",
    metaDescription:
      "Why clash closure records matter more than clash counts in mechanical VDC coordination, and what a functioning coordination cadence looks like.",
    image: "/images/insights/clash-closure.webp",
    imageAlt: "Mechanical coordinators reviewing duct and pipe routes in a building services model",
    body: [
      {
        type: "p",
        text: "Every coordination meeting eventually produces a slide with a large number on it. Four thousand clashes detected. Six thousand. The number is meant to demonstrate rigour. It mostly demonstrates that somebody ran a test.",
      },
      {
        type: "h2",
        text: "Detection is the cheap half",
      },
      {
        type: "p",
        text: "Running a clash test is a button. Deciding which of those clashes is real, which is a modelling artefact, which trade moves, whether the move breaks a clearance somewhere else, and then confirming the change landed in the published model — that is the work. It is slow, it is unglamorous, and it is the entire value of the exercise.",
      },
      {
        type: "h3",
        text: "What we publish instead",
      },
      {
        type: "ul",
        items: [
          "Open issues by trade, with an owner and a date",
          "Closed issues with the resolution and the model version that carries it",
          "Soft-clash and access-clearance failures, tracked separately from hard clashes",
          "Sign-off gates that must clear before any fabrication release",
        ],
      },
      {
        type: "h2",
        text: "The gate that actually protects the project",
      },
      {
        type: "p",
        text: "Nothing releases to our shop until the relevant zone has cleared coordination sign-off. That gate is occasionally unpopular, because it puts the pressure on the design and coordination phase rather than the field. That is the point — pressure in coordination costs hours, pressure in the field costs cranes.",
      },
    ],
  },
  {
    slug: "all-electric-needs-a-hydronic-answer",
    title: "All-electric buildings need a hydronic answer, not just a heat pump",
    category: "Industry",
    date: "2026-04-09",
    readingTime: "7 min",
    author: "Mavron Engineering",
    excerpt:
      "Swapping a boiler for a heat pump without rethinking distribution temperatures is how an electrification project quietly fails.",
    metaDescription:
      "Electrification and heat-pump conversions require low-temperature hydronic distribution. Why the distribution strategy, not the plant, decides the outcome.",
    image: "/images/insights/hydronic-electrification.webp",
    imageAlt: "Heat-pump equipment and hydronic pipework in a commercial mechanical plant room",
    body: [
      {
        type: "p",
        text: "Electrification conversations tend to start and end at the plant: which heat pump, what capacity, where does it sit. The plant is the easy decision. The distribution system is the one that determines whether the building works.",
      },
      {
        type: "h2",
        text: "Temperature is the constraint",
      },
      {
        type: "p",
        text: "A gas boiler will happily produce high supply temperatures, which means emitters and coils can be small. A heat pump's efficiency falls as supply temperature climbs. Drop the supply temperature to keep efficiency and the existing emitters, sized for a much hotter loop, can no longer deliver the heat on a design day.",
      },
      {
        type: "ul",
        items: [
          "Emitter and coil resizing is usually the real project cost",
          "Flow rates rise as delta-T narrows, which loads pumps and pipe",
          "Risers sized for a high-temperature loop may not carry the new flow",
          "Domestic hot water often needs its own answer entirely",
        ],
      },
      {
        type: "h2",
        text: "Decide it in design development",
      },
      {
        type: "p",
        text: "On new build, the hydronic strategy has to be settled before drawings are fixed, because riser sizing follows from it. On retrofit, the honest first step is a survey of what the existing distribution can actually carry — before anybody selects a machine.",
      },
      {
        type: "quote",
        text: "A budget problem raised in design development is advice. The same problem raised at handover is an excuse.",
      },
    ],
  },
  {
    slug: "meridian-tower-topping-out",
    title: "Project update: Meridian Tower mechanical complete",
    category: "Project Update",
    date: "2026-02-20",
    readingTime: "3 min",
    author: "Mavron Projects",
    excerpt:
      "Four hundred and eighty prefabricated suite pods, 126 riser stacks, and a mechanical scope that came off the critical path at level nine.",
    metaDescription:
      "Project update from Mavron: mechanical scope complete at Meridian Tower, Burnaby — 480 prefabricated suite pods and 126 riser stacks.",
    image: "/images/insights/mechanical-completion.webp",
    imageAlt: "Illustrative high-rise mechanical floor with installed risers and workers in the distance",
    body: [
      {
        type: "p",
        text: "The mechanical scope at Meridian Tower is complete. Forty-two storeys, four hundred and eighty suites, and a delivery model built almost entirely around repetition.",
      },
      {
        type: "h2",
        text: "One suite, modelled to the fitting",
      },
      {
        type: "p",
        text: "We modelled a single suite to fabrication level, built it as a full-scale mock-up in the shop, tore it apart, fixed what was wrong, and then produced it four hundred and eighty times. The mock-up bay is the cheapest place in the business to discover that a diverter is two inches from where the tiler needs it.",
      },
      {
        type: "h2",
        text: "Risers as stacks",
      },
      {
        type: "p",
        text: "Domestic water, drainage and hydronic risers were prefabricated as floor-height stacks and set as complete units. A hundred and twenty-six of them. Each one replaced a day of in-shaft assembly with a single rigged lift.",
      },
      {
        type: "p",
        text: "Warranty and aftercare handover is underway, with operator training sessions recorded and issued alongside the as-built model.",
      },
    ],
  },
  {
    slug: "scan-to-bim-below-grade",
    title: "What laser scanning is actually for below grade",
    category: "Technology",
    date: "2025-11-06",
    readingTime: "5 min",
    author: "Mavron VDC",
    excerpt:
      "Reality capture is sold as a documentation tool. On below-grade work it is a risk instrument.",
    metaDescription:
      "How scan-to-BIM and reality capture reduce risk on below-grade mechanical installation, from as-built verification to fabrication release.",
    image: "/images/insights/laser-scanning.webp",
    imageAlt: "Tripod-mounted laser scanner measuring a below-grade mechanical corridor",
    body: [
      {
        type: "p",
        text: "Concrete does not land where the drawings said it would. On a tower this is an annoyance. Below grade, in a structure with no spare void, it is the difference between a mechanical scope that installs and one that gets cut out and redone.",
      },
      {
        type: "h2",
        text: "Scan first, fabricate second",
      },
      {
        type: "p",
        text: "On Harbourline we scanned the constructed shell, registered the point cloud against the design model, and resolved the deviations before releasing anything to the shop. The fabrication package was built against reality rather than against intent.",
      },
      {
        type: "ul",
        items: [
          "As-built verification of structure before fabrication release",
          "Deviation reporting that flags where design assumptions broke",
          "Layout points derived from the corrected model",
          "A permanent record of what was actually built",
        ],
      },
      {
        type: "h2",
        text: "The cost comparison nobody runs",
      },
      {
        type: "p",
        text: "Scanning a level costs a day. Fabricating a rack that does not fit costs the rack, the crane time, the re-fabrication and the float. The comparison is not close, and it gets less close the deeper the structure goes.",
      },
    ],
  },
  {
    slug: "training-the-next-crew",
    title: "Why every apprentice starts in the shop",
    category: "Industry",
    date: "2025-09-18",
    readingTime: "4 min",
    author: "Mavron People",
    excerpt:
      "Two years of shop rotation before the field looks slow. It produces tradespeople who understand why the assembly is shaped the way it is.",
    metaDescription:
      "Mavron's apprenticeship model: shop rotations before field placement, and why fabrication-first training produces better mechanical tradespeople.",
    image: "/images/insights/apprentice-shop.webp",
    imageAlt: "Apprentice and mentor measuring a pipe assembly together in a fabrication shop",
    body: [
      {
        type: "p",
        text: "Apprentices at Mavron spend their first rotations on the fabrication floor. Not because the shop needs the hands, but because the shop is where the work is visible.",
      },
      {
        type: "h2",
        text: "The shop teaches the why",
      },
      {
        type: "p",
        text: "On a bench, an apprentice can see the whole assembly at once: why the spool breaks where it breaks, why the support sits where it sits, why the valve faces the way it faces. In a ceiling void, at height, in the dark, they can see eighteen inches of pipe.",
      },
      {
        type: "h2",
        text: "What it produces",
      },
      {
        type: "p",
        text: "Field crews who came through the shop install faster and ask better questions, because they understand what the fabrication package was trying to achieve. They also tend to report model problems instead of quietly working around them, which is worth more than any single install efficiency.",
      },
      {
        type: "quote",
        text: "The trade only survives if somebody teaches it.",
      },
    ],
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
export const insightSlugs = insights.map((i) => i.slug);
