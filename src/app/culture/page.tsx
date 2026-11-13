import type { Metadata } from "next";
import Image from "next/image";
import { EditorialPhoto } from "@/components/EditorialPhoto";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  CTABand,
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
      <header className="tm-page-hero tm-culture-hero">
        <Image src="/images/home-field/installation-team.webp" alt="Illustrative mechanical crew working together on overhead installation" fill priority sizes="100vw" className="tm-page-hero-image" />
        <div className="tm-page-hero-shade" />
        <div className="container-x tm-page-hero-content">
          <p className="tm-eyebrow">People & culture</p>
          <h1>Every apprentice<br />learns from the crew.</h1>
          <p>Practical field experience, technical training and a strong safety culture shape how our people grow.</p>
        </div>
      </header>
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
        <div className="editorial-pair mt-12">
          <EditorialPhoto
            src="/images/people/hvac-r-portrait.webp"
            alt="Illustrative portrait of an HVAC-R professional near rooftop equipment"
            caption="Knowledge shared on the job"
            className="editorial-photo-portrait"
          />
          <EditorialPhoto
            src="/images/people/plumbing-portrait.webp"
            alt="Illustrative portrait of a plumbing professional in a mechanical room"
            caption="Skill built through practice"
            className="editorial-photo-portrait"
          />
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
          title="Safety is part of every work plan."
          lead="Mechanical construction involves work at height, lifting and complex shared spaces. Our crews plan access, review risks and coordinate with other trades before work begins."
        />
        <EditorialPhoto
          src="/images/home-field/commissioning-inspection.webp"
          alt="Illustrative technician inspecting HVAC equipment while wearing safety gear"
          caption="Careful checks are part of the work"
          className="editorial-photo-wide mt-10"
          sizes="100vw"
        />
      </Section>

      <CTABand
        title="Want to build here?"
        lead="Apprenticeships, journeypersons, HVAC-R technicians and project managers. Tickets matter; so does being the kind of person the crew wants on the job."
        primaryHref="/careers"
        primaryLabel="Open roles"
        secondaryHref="/about"
        secondaryLabel="About Mavron"
      />
    </>
  );
}
