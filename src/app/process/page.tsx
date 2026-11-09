import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CTABand, PageHero, Section, SectionHead } from "@/components/ui";
import { processSteps } from "@/content/company";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/process" },
];

export const metadata: Metadata = pageMeta({
  title: "The Mavron Method — Our Process",
  description:
    "Five stages from early planning to aftercare: site coordination, installation, commissioning, handover and ongoing service.",
  path: "/process",
  keywords: [
    "mechanical construction process",
    "design assist mechanical",
  ],
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "HowTo",
          name: "The Mavron Method",
          description:
            "How Mavron Mechanical Group delivers a mechanical scope, from early planning through to aftercare.",
          step: processSteps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.body,
          })),
        })}
      />
      <PageHero
        kicker="The Mavron Method"
        title="Plan carefully. Build with purpose."
        lead="Five connected stages from planning to aftercare. The discipline is not the stages — everybody has stages. The discipline is refusing to release anything to the next one until the current one has actually closed."
      />
      <Breadcrumbs items={crumbs} />

      <Section>
        <div className="space-y-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 bg-ink-900 p-7 md:grid-cols-[auto_1fr_minmax(0,16rem)] md:gap-10 md:p-10"
            >
              <div className="flex md:block">
                <span className="font-display text-4xl font-bold tracking-tight text-steel-600 md:text-5xl">
                  {step.number}
                </span>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-copper-400">
                  {step.subtitle}
                </p>
                <h2 className="mt-2 text-2xl text-steel-50">{step.name}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel-400 md:text-base">
                  {step.body}
                </p>
              </div>
              <div className="border-t border-ink-700 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-steel-500">
                  Outputs
                </p>
                <ul className="mt-3 space-y-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="text-sm leading-snug text-steel-300">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHead
          kicker="The gate that matters"
          title="Resolve the details before installation begins."
          lead="Early decisions about equipment, routes and access help crews work safely and reduce avoidable changes during construction."
        />
      </Section>

      <CTABand
        title="Bring us in at design development."
        lead="The method works best when it starts before the drawings are fixed. That is also when it is cheapest."
      />
    </>
  );
}
