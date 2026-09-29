import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  ButtonLink,
  CTABand,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui";
import { cultureBlocks, values } from "@/content/company";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "People & Culture", href: "/culture" },
];

export const metadata: Metadata = pageMeta({
  title: "People & Culture — Apprenticeships, Training & Community",
  description:
    "Inside Mavron: team values, the workplace, sponsored apprenticeships, ongoing training, safety and the community work we put our people and our mechanical scope behind.",
  path: "/culture",
  keywords: [
    "mechanical apprenticeship BC",
    "trades training",
    "construction safety culture",
    "Mavron culture",
  ],
});

export default function CulturePage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        kicker="People & culture"
        title="Every apprentice starts on the shop floor."
        lead="Not because the shop needs the hands. Because the bench is the only place where an apprentice can see the whole assembly at once, and understanding why a spool breaks where it breaks is the difference between a tradesperson and a pair of hands."
      />
      <Breadcrumbs items={crumbs} />

      <Section>
        <SectionHead kicker="How we work" title="Six rules, applied to people as well as pipe." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-ink-900 p-7">
              <h3 className="text-base font-semibold text-copper-300">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-10 md:grid-cols-2">
          {cultureBlocks.map((b) => (
            <div key={b.title} className="surface rounded-sm p-8">
              <h2 className="text-xl text-steel-50">{b.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-steel-400">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Safety"
          title="Our safety case and our prefabrication case are the same case."
          lead="The serious incidents in mechanical construction cluster in a handful of activities: work at height, hot works in congested overhead space, manual handling of awkward loads. Every one of those is something the shop removes. We report the shop-to-site hours ratio alongside incident data, not alongside cost data."
        />
        <div className="mt-10">
          <ButtonLink href="/insights/prefabrication-is-a-safety-programme" variant="ghost">
            Read the argument in full
          </ButtonLink>
        </div>
      </Section>

      <CTABand
        title="Want to build here?"
        lead="Apprenticeships, journeypersons, VDC coordinators, fabricators and project managers. Tickets matter; so does being the kind of person the crew wants on the job."
        primaryHref="/careers"
        primaryLabel="Open roles"
        secondaryHref="/about"
        secondaryLabel="About Mavron"
      />
    </>
  );
}
