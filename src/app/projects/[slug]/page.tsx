import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CTABand, Kicker, PageHero, Section, SectionHead } from "@/components/ui";
import { projectBySlug, projectSlugs, projects } from "@/content/projects";
import { serviceBySlug } from "@/content/services";
import { breadcrumbSchema, caseStudySchema, graph, pageMeta } from "@/lib/seo";

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
    description: p.metaDescription,
    path: `/projects/${p.slug}`,
    keywords: [p.sector, p.location, ...p.scope],
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
      <JsonLd data={graph(breadcrumbSchema(crumbs), caseStudySchema(p))} />
      <PageHero kicker={`${p.sector} · ${p.status}`} title={p.name} lead={p.summary} />
      <Breadcrumbs items={crumbs} />

      <Section className="!py-14">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 md:grid-cols-4">
          {[
            ["Location", p.location],
            ["Completion", p.year],
            ["Client", p.client],
            ["Value", p.value],
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
                  Scopes delivered
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
              className="surface surface-hover group rounded-sm p-6"
            >
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                {o.sector}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-steel-50 transition-colors group-hover:text-copper-300">
                {o.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{o.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
