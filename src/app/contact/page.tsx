import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs, PageHero, Section, SectionHead } from "@/components/ui";
import { offices, serviceAreas, site } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = pageMeta({
  title: "Contact — Start a Project, Careers & Partnerships",
  description:
    "Three routes into Mavron Protection Group: start a project, careers, or partnerships. Offices in Burnaby, Victoria and Kelowna, serving all of British Columbia.",
  path: "/contact",
  keywords: [
    "mechanical contractor contact",
    "Burnaby mechanical contractor",
    "Victoria BC mechanical",
    "Kelowna HVAC contractor",
  ],
});

const routes = [
  {
    title: "Start a project",
    body: "Tenders, design-assist packages, plant replacement in occupied buildings, or a problem you want a second opinion on.",
    contact: site.email,
  },
  {
    title: "Careers",
    body: "Apprenticeships, journeypersons, VDC coordinators, fabricators and project delivery. General applications welcome.",
    contact: site.careersEmail,
  },
  {
    title: "Partnerships",
    body: "Trade partners, suppliers, consultants and owners' representatives who want to work alongside our coordination model.",
    contact: site.partnersEmail,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "ContactPage",
          name: "Contact Mavron Protection Group",
        })}
      />
      <PageHero
        kicker="Contact"
        title="Three ways in. Pick the one that fits."
        lead={`Or just call ${site.phoneDisplay}. ${site.serviceHours}`}
      />
      <Breadcrumbs items={crumbs} />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {routes.map((r) => (
            <div key={r.title} className="surface rounded-sm p-6">
              <h2 className="text-lg font-semibold text-copper-300">{r.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{r.body}</p>
              <a
                href={`mailto:${r.contact}`}
                className="mt-5 inline-block text-sm text-steel-200 underline underline-offset-4 transition-colors hover:text-copper-300"
              >
                {r.contact}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHead kicker="Enquiry form" title="Send us the details." />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside>
            <h2 className="kicker">Offices</h2>
            <div className="mt-6 space-y-5">
              {offices.map((o) => (
                <div key={o.id} className="surface rounded-sm p-5">
                  <h3 className="text-sm font-semibold text-steel-50">{o.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-steel-500">{o.role}</p>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-steel-300">
                    {o.street}
                    <br />
                    {o.locality}, {o.region} {o.postalCode}
                  </address>
                  <a
                    href={`tel:${o.phone}`}
                    className="mt-2 inline-block font-mono text-xs tracking-wide text-copper-300"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-ink-700 pt-6">
              <h2 className="kicker">Service areas</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">
                {serviceAreas.join(" · ")} and throughout British Columbia.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
