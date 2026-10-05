import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, ButtonLink, CTABand, PageHero, Section, SectionHead } from "@/components/ui";
import { jobs } from "@/content/company";
import { site } from "@/lib/site";
import { breadcrumbSchema, graph, jobPostingSchema, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

export const metadata: Metadata = pageMeta({
  title: "Careers — Mechanical Trades, VDC & Fabrication Jobs in BC",
  description:
    "Open roles at Mavron Mechanical Group: journeyperson plumbers, HVAC-R technicians, VDC coordinators, fabrication welders, project managers and sponsored apprenticeships across British Columbia.",
  path: "/careers",
  keywords: [
    "plumber jobs Vancouver",
    "HVAC technician jobs BC",
    "VDC coordinator job",
    "mechanical apprenticeship BC",
    "fabrication welder job",
  ],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs), ...jobs.map(jobPostingSchema))} />
      <PageHero
        kicker="Careers"
        title="We are hiring people who want to be tradespeople, not staff."
        lead="Sponsored apprenticeships, ticket support, shop rotations and a coordination environment that expects field crews to read models and argue with them."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="#roles">See open roles</ButtonLink>
          <ButtonLink href={`mailto:${site.careersEmail}`} variant="ghost">
            Send a general application
          </ButtonLink>
        </div>
      </PageHero>
      <Breadcrumbs items={crumbs} />

      <Section>
        <SectionHead
          kicker="What you get"
          title="What working here actually involves."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Shop rotations", "Apprentices spend their first rotations on the fabrication floor before field placement."],
            ["Ticket support", "Sponsored technical training, manufacturer training and exam support."],
            ["Model literacy", "Field crews are trained to read and challenge the coordination model, not just install from it."],
            ["Real aftercare", "A standing warranty team means nobody gets pulled off a project to fix last year's."],
          ].map(([t, b]) => (
            <div key={t} className="bg-ink-900 p-7">
              <h3 className="text-base font-semibold text-copper-300">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="roles" tone="raised">
        <SectionHead kicker="Open roles" title={`${jobs.length} positions open`} />
        <div className="mt-12 divide-y divide-ink-700 border-y border-ink-700">
          {jobs.map((job) => (
            <article key={job.slug} className="grid gap-6 py-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-ink-800 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-copper-300">
                    {job.type}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-steel-500">
                    {job.department} · {job.location}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-steel-50">{job.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-400">
                  {job.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.requirements.map((r) => (
                    <li
                      key={r}
                      className="rounded-sm border border-ink-600 px-2.5 py-1 text-[0.72rem] text-steel-400"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:self-center">
                <ButtonLink
                  href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(
                    `Application — ${job.title}`
                  )}`}
                  variant="ghost"
                >
                  Apply
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand
        title="Nothing here that fits?"
        lead="Send a résumé anyway. We take on apprentices and experienced trades outside the posted roles when the right person turns up."
        primaryHref={`mailto:${site.careersEmail}`}
        primaryLabel="Email careers"
        secondaryHref="/culture"
        secondaryLabel="People & culture"
      />
    </>
  );
}
