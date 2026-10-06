import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CTABand, PageHero, Section } from "@/components/ui";
import { insightBySlug, insightSlugs, insights } from "@/content/insights";
import { articleSchema, breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = insightBySlug(slug);
  if (!a) return {};
  return pageMeta({
    title: a.title,
    description: a.metaDescription,
    path: `/insights/${a.slug}`,
    type: "article",
    publishedTime: a.date,
    keywords: [a.category, "mechanical contracting", "Mavron"],
    image: a.image,
    imageAlt: a.imageAlt,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = insightBySlug(slug);
  if (!a) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/insights" },
    { label: a.title, href: `/insights/${a.slug}` },
  ];
  const more = insights.filter((i) => i.slug !== a.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          articleSchema({
            title: a.title,
            description: a.metaDescription,
            slug: a.slug,
            date: a.date,
            author: a.author,
            image: a.image,
          })
        )}
      />
      <PageHero kicker={`${a.category} · ${a.readingTime} read`} title={a.title} lead={a.excerpt} />
      <Breadcrumbs items={crumbs} />

      <Section className="!py-10 md:!py-14">
        <figure>
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-ink-800 md:aspect-[2.15]">
            <Image src={a.image} alt={a.imageAlt} fill priority sizes="(max-width: 767px) 100vw, 85vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-steel-400">
            Illustrative image for this article. This is not a photograph of a Mavron jobsite or employee.
          </figcaption>
        </figure>
      </Section>

      <Section className="!pt-0">
        <article className="mx-auto max-w-3xl">
          <p className="border-b border-ink-700 pb-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel-500">
            {a.author} ·{" "}
            <time dateTime={a.date}>
              {new Date(a.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
          <div className="prose-mav mt-8">
            {a.body.map((block, i) => {
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-2 border-copper-500 pl-6 font-display text-xl leading-snug text-steel-100"
                >
                  {block.text}
                </blockquote>
              );
            })}
          </div>
        </article>
      </Section>

      <Section tone="raised">
        <h2 className="kicker">Keep reading</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {more.map((m) => (
            <Link
              key={m.slug}
              href={`/insights/${m.slug}`}
              className="surface surface-hover group overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
                <Image src={m.image} alt={m.imageAlt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                <span className="absolute bottom-3 left-3 rounded-sm bg-ink-950/80 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-100 backdrop-blur-sm">
                  Illustrative image
                </span>
              </div>
              <div className="p-6">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                  {m.category}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-steel-50 transition-colors group-hover:text-copper-300">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{m.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
