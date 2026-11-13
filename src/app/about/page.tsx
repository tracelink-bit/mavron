import type { Metadata } from "next";
import Image from "next/image";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  ButtonLink,
  CTABand,
  Section,
  SectionHead,
  StatGrid,
} from "@/components/ui";
import { leadership, stats, story, values } from "@/content/company";
import { offices } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export const metadata: Metadata = pageMeta({
  title: "About Us — Company, Leadership & Values",
  description:
    "Mavron Mechanical Group started in 2009 with two vans and a rented bay. Today its mechanical teams serve projects across British Columbia.",
  path: "/about",
  keywords: ["mechanical contractor history", "Mavron leadership", "BC mechanical company"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), { "@type": "AboutPage", name: "About Mavron Mechanical Group" })} />
      <header className="tm-page-hero tm-about-hero">
        <Image src="/images/construction.webp" alt="Illustrative British Columbia construction site at sunset" fill priority sizes="100vw" className="tm-page-hero-image" />
        <div className="tm-page-hero-shade" />
        <div className="container-x tm-page-hero-content">
          <p className="tm-eyebrow">Company / About Mavron</p>
          <h1>Built on better<br />coordination.</h1>
          <p>From a rented bay in Burnaby to complex mechanical work across British Columbia, careful coordination has shaped how we build.</p>
        </div>
      </header>
      <Breadcrumbs items={crumbs} />

      <Section tone="raised" className="!py-16">
        <StatGrid items={stats} />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHead
              kicker="Our story"
              title="How we got from a bay in Burnaby to here."
            />
            <EditorialPhoto
              src="/images/home-field/installation-overhead.webp"
              alt="Illustrative mechanics coordinating overhead pipe installation on site"
              caption="The work behind every connection"
              className="editorial-photo-tall mt-10"
            />
          </div>
          <ol className="relative border-l border-ink-600 pl-8">
            {story.map((s) => (
              <li key={s.year} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[2.35rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-copper-600 bg-ink-950"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                </span>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-copper-400">
                  {s.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-steel-50">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-400">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              kicker="The monogram"
              title="A logo that comes apart the way our work does."
              lead="The Mavron M is a mechanical assembly: red armour plating, a graphite chassis, copper reveals and steel actuator rods. It opens in a staggered sequence, holds, and reassembles — which is a reasonably honest description of how we build a mechanical scope."
            />
            <div className="mt-8">
              <ButtonLink href="/process" variant="ghost">
                The Mavron Method
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[8/7] w-full overflow-hidden rounded-sm border border-ink-700 bg-ink-950">
            <Image
              src="/images/m-forge-exploded.webp"
              alt="The Mavron monogram shown as an exploded assembly, with armour panels, actuator rods and bearing details separated to reveal the internal structure."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          kicker="Values"
          title="Six rules we actually run the company on."
          lead="Not a poster in the lunchroom. These are the decisions we defend when defending them costs us something."
        />
        <EditorialPhoto
          src="/images/home-field/air-distribution.webp"
          alt="Illustrative finished overhead air distribution in a bright commercial space"
          caption="Details that become part of the building"
          className="editorial-photo-wide mt-10"
          sizes="100vw"
        />
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
        <SectionHead kicker="Leadership" title="The people who sign things." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.role} className="surface rounded-sm p-6">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-copper-600 bg-ink-850 font-display text-sm font-bold text-copper-300"
                aria-hidden="true"
              >
                {p.initials}
              </div>
              <h3 className="mt-5 text-base font-semibold text-steel-50">{p.name}</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-copper-400">
                {p.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{p.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead kicker="Where we are" title="Three locations, one coordination environment." />
        <EditorialPhoto
          src="/images/home-field/rooftop-unit.webp"
          alt="Illustrative mechanics positioning a rooftop HVAC unit"
          caption="Coordinated work across British Columbia"
          className="editorial-photo-wide mt-10"
          sizes="100vw"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {offices.map((o) => (
            <div key={o.id} className="surface rounded-sm p-6">
              <h3 className="text-base font-semibold text-steel-50">{o.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{o.role}</p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-steel-300">
                {o.street}
                <br />
                {o.locality}, {o.region} {o.postalCode}
              </address>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        title="Community work and partnerships."
        lead="Trades outreach, bursaries and donated mechanical scope for community facilities. If you are building something for a community and the mechanical budget is the problem, talk to us."
        primaryLabel="Get in touch"
        secondaryHref="/culture"
        secondaryLabel="Inside Mavron"
      />
    </>
  );
}
