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
      "A 42-storey residential project where careful sequencing kept the mechanical scope moving floor by floor.",
    metaDescription:
      "Project update from Mavron: HVAC-R and plumbing work completed at Meridian Tower in Burnaby.",
    image: "/images/insights/mechanical-completion.webp",
    imageAlt: "Illustrative high-rise mechanical floor with installed risers and workers in the distance",
    body: [
      {
        type: "p",
        text: "The mechanical scope at Meridian Tower is complete. Forty-two storeys, four hundred and eighty suites, and a delivery model built almost entirely around repetition.",
      },
      {
        type: "h2",
        text: "One clear installation sequence",
      },
      {
        type: "p",
        text: "The team established a clear installation sequence for the repeating suites. Plumbing and ventilation routes were checked against the architectural layout and adjusted before work reached the upper floors.",
      },
      {
        type: "h2",
        text: "Risers as stacks",
      },
      {
        type: "p",
        text: "Domestic water, drainage and hydronic risers were installed in sequence through the tower, with inspection and testing completed as each level progressed.",
      },
      {
        type: "p",
        text: "Warranty and aftercare handover is underway, with operator training sessions recorded and issued alongside the as-built records.",
      },
    ],
  },

];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);
export const insightSlugs = insights.map((i) => i.slug);
