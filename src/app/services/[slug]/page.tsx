import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  ButtonLink,
  CTABand,
  Kicker,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui";
import { serviceBySlug, serviceSlugs, services } from "@/content/services";
import { projectBySlug } from "@/content/projects";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  pageMeta,
  serviceSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.capabilities.map((c) => c.title),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Capabilities", href: "/services" },
    { label: service.navLabel, href: `/services/${service.slug}` },
  ];
  const related = service.relatedProjects
    .map(projectBySlug)
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const siblings = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            slug: service.slug,
            serviceType: service.capabilities.map((c) => c.title),
          }),
          faqSchema(service.faqs)
        )}
      />

      <PageHero kicker={service.navLabel} title={service.heroLine} lead={service.summary} />
      <Breadcrumbs items={crumbs} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-steel-200">{service.intro}</p>
            <div className="prose-mav mt-10">
              {service.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2>{sec.heading}</h2>
                  <p>{sec.body}</p>
                  {sec.points && (
                    <ul>
                      {sec.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface rounded-sm p-6">
              <Kicker>What you receive</Kicker>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-steel-300">
                    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="mt-1 shrink-0 text-copper-400">
                      <path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink-700 pt-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-500">
                  Sectors
                </p>
                <p className="mt-2 text-sm text-steel-300">{service.sectors.join(" · ")}</p>
              </div>
              <div className="mt-6">
                <ButtonLink href="/contact" className="w-full">
                  Discuss this scope
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHead kicker="Inside the scope" title={`What ${service.navLabel} covers`} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c) => (
            <div key={c.title} className="bg-ink-900 p-7">
              <h3 className="text-base font-semibold text-steel-50">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHead kicker="Related work" title="Where this scope has been delivered" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="surface surface-hover group rounded-sm p-6"
              >
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                  {p.sector} · {p.location}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-steel-50 transition-colors group-hover:text-copper-300">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{p.summary}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section tone="deep">
        <SectionHead kicker="Questions" title={`${service.navLabel} — common questions`} />
        <dl className="mt-10 divide-y divide-ink-700 border-y border-ink-700">
          {service.faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="text-base font-semibold text-steel-50">{f.q}</dt>
              <dd className="mt-3 max-w-3xl text-sm leading-relaxed text-steel-400">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <Kicker>Other capabilities</Kicker>
        <div className="mt-6 flex flex-wrap gap-3">
          {siblings.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-sm border border-ink-600 px-4 py-2.5 text-sm text-steel-200 transition-colors hover:border-copper-500 hover:text-copper-300"
            >
              {s.navLabel}
            </Link>
          ))}
        </div>
      </Section>

      <CTABand
        title={`Need ${service.navLabel.toLowerCase()} on your project?`}
        lead="Send us the drawings, the schedule, or just the problem. We will tell you honestly whether we are the right contractor for it."
      />
    </>
  );
}
