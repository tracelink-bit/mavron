import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs, Section, SectionHead } from "@/components/ui";
import { offices, serviceAreas, site } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const metadata: Metadata = pageMeta({
  title: "Contact — Start a Project, Careers & Partnerships",
  description:
    "Three routes into Mavron Mechanical Group: start a project, careers, or partnerships. Offices in Burnaby, Victoria and Kelowna, serving all of British Columbia.",
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
    image: "/images/home-field/installation-team.webp",
    alt: "Illustrative mechanical installation team at work",
  },
  {
    title: "Careers",
    body: "Apprenticeships, journeypersons, HVAC-R technicians and project delivery. General applications welcome.",
    contact: site.careersEmail,
    image: "/images/people/hvac-r-portrait.webp",
    alt: "Illustrative portrait of an HVAC-R professional",
  },
  {
    title: "Partnerships",
    body: "Trade partners, suppliers, consultants and owners' representatives who want to work with our mechanical teams.",
    contact: site.partnersEmail,
    image: "/images/people/trade-partners.webp",
    alt: "Illustrative portrait of a mechanical trade partner",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "ContactPage",
          name: "Contact Mavron Mechanical Group",
        })}
      />
      <header className="tm-page-hero">
        <Image src="/images/home-field/installation-overhead.webp" alt="Illustrative overhead mechanical installation" fill priority sizes="100vw" className="tm-page-hero-image" />
        <div className="tm-page-hero-shade" />
        <div className="container-x tm-page-hero-content">
          <p className="tm-eyebrow">Contact / Mavron Mechanical Group</p>
          <h1>Let&apos;s make<br />it happen.</h1>
          <p>From first conversation to final commissioning, we&apos;re ready to hear what you&apos;re building.</p>
          <a href="#contact-routes" className="tm-hero-link">Find your way in <span aria-hidden="true">↘</span></a>
        </div>
      </header>
      <Breadcrumbs items={crumbs} />

      <Section id="contact-routes" className="tm-mint-section">
        <div className="tm-section-intro"><span>01 / Get in touch</span><h2>The right conversation starts here.</h2><p>Choose the team that fits your enquiry. We&apos;ll get it to the right people.</p></div>
        <div className="tm-route-grid">
          {routes.map((r) => (
            <article key={r.title} className="tm-route-card">
              <div className="tm-route-image"><Image src={r.image} alt={r.alt} fill sizes="(max-width: 767px) 100vw, 33vw" /></div>
              <div className="tm-route-copy"><h3>{r.title}</h3><p>{r.body}</p>
              <a
                href={`mailto:${r.contact}`}
                className="tm-route-link"
              >
                {r.contact} <span aria-hidden="true">↗</span>
              </a></div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="tm-contact-detail">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHead kicker="Enquiry form" title="Send us the details." />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside>
            <div className="tm-aside-image"><Image src="/images/services/hvac-r.webp" alt="Illustrative HVAC-R mechanical work" fill sizes="(max-width: 1023px) 100vw, 40vw" /></div>
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
