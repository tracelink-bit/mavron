import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CTABand, Kicker, PageHero, Section, SectionHead } from "@/components/ui";
import { projectBySlug, projectSlugs, projects } from "@/content/projects";
import { serviceBySlug } from "@/content/services";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} — ${p.sector} Project, ${p.location}`,
    description: `${p.summary} Illustrative project concept.`,
    path: `/projects/${p.slug}`,
    keywords: [p.sector, p.location, ...p.scope],
    noIndex: true,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: p.name, href: `/projects/${p.slug}` },
  ];
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero kicker={`Project concept · ${p.sector}`} title={p.name} lead={p.summary} />
      <Breadcrumbs items={crumbs} />

      <Section className="!py-10 md:!py-14">
        <figure>
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-ink-800 md:aspect-[2.15]">
            <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 85vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-steel-400">
            Illustrative concept image. This is not a photograph of a Mavron jobsite; the project information below is sample content.
          </figcaption>
        </figure>
      </Section>

      <Section className="!pt-0 !pb-14">
        <dl className="grid gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 sm:grid-cols-3">
          {[
            ["Concept setting", p.location],
            ["Scenario", p.status],
            ["Mechanical focus", p.scope.slice(0, 2).join(" + ")],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink-900 px-5 py-6">
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-steel-500">
                {k}
              </dt>
              <dd className="mt-2 text-sm font-medium text-steel-100">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="prose-mav">
            <h2>The challenge</h2>
            <p>{p.challenge}</p>
            <h2>Our approach</h2>
            <p>{p.approach}</p>
            <h2>The outcome</h2>
            <p>{p.outcome}</p>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface rounded-sm p-6">
              <Kicker>By the numbers</Kicker>
              <dl className="mt-5 grid grid-cols-2 gap-5">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-500">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-display text-2xl font-bold text-copper-300">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 border-t border-ink-700 pt-5">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-steel-500">
                  Mechanical scope
                </p>
                <ul className="mt-3 space-y-2">
                  {p.services.map((s) => {
                    const svc = serviceBySlug(s);
                    if (!svc) return null;
                    return (
                      <li key={s}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="text-sm text-steel-200 underline-offset-4 transition-colors hover:text-copper-300 hover:underline"
                        >
                          {svc.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="raised">
        <SectionHead kicker="More work" title="Other projects" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/projects/${o.slug}`}
              className="surface surface-hover group overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
                <Image src={o.image} alt={o.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="p-6">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                {o.sector}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-steel-50 transition-colors group-hover:text-copper-300">
                {o.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{o.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
