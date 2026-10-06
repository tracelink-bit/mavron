import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, ButtonLink, Card, CTABand, PageHero, Section, SectionHead } from "@/components/ui";
import { services } from "@/content/services";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/services" },
];

export const metadata: Metadata = pageMeta({
  title: "Capabilities — Mechanical Contracting Services",
  description:
    "Six mechanical scopes under one accountable contractor: HVAC-R, commercial plumbing, VDC/BIM, prefabrication, warranty and aftercare, and coordinated trade partners.",
  path: "/services",
  keywords: [
    "mechanical contracting services",
    "commercial plumbing contractor",
    "HVAC-R services",
    "BIM coordination services",
    "mechanical prefabrication",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "ItemList",
          name: "Mavron Mechanical Group capabilities",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: `/services/${s.slug}`,
          })),
        })}
      />
      <PageHero
        kicker="Capabilities"
        title="Six scopes. One accountable contractor."
        lead="We design, model, fabricate, install and maintain complete mechanical systems. Taking all six scopes means the seams between them are ours to solve rather than ours to argue about."
      />
      <Breadcrumbs items={crumbs} />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.slug}
              href={`/services/${s.slug}`}
              image={s.image}
              imageAlt={s.imageAlt}
              eyebrow={s.navLabel}
              title={s.heroLine}
              body={s.summary}
              footer={`Explore ${s.navLabel}`}
            />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHead
          kicker="Why one contractor"
          title="The seam is where buildings fail."
          lead="A penetration nobody fire-stopped. A riser that clashes with structure on level fourteen. An interceptor sized for half the load. None of these are hard engineering problems — they are ownership problems, and they only appear where one party's scope ends and another's begins."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 md:grid-cols-3">
          {[
            {
              t: "One coordination model",
              b: "Every scope we carry — including partner scopes — lives in the same federated model with the same sign-off gates and the same issue log.",
            },
            {
              t: "One fabrication release",
              b: "Coordination closure releases to our own shop. Shop output and field installation stay on the same version of the truth.",
            },
            {
              t: "One warranty route",
              b: "After handover, every scope routes through our standing aftercare team. The owner never has to identify which subcontractor owns a problem.",
            },
          ].map((x) => (
            <div key={x.t} className="bg-ink-900 p-7">
              <h3 className="text-base font-semibold text-copper-300">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{x.b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/process" variant="ghost">
            How we run a project
          </ButtonLink>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
