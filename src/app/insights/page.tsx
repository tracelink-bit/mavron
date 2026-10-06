import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { InsightList } from "@/components/InsightList";
import { Breadcrumbs, CTABand, PageHero, Section } from "@/components/ui";
import { insights } from "@/content/insights";
import { SITE_URL } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/insights" },
];

export const metadata: Metadata = pageMeta({
  title: "Resources & Insights — Mechanical Construction Articles",
  description:
    "Articles, project updates and technical notes from Mavron: prefabrication, VDC coordination, electrification and hydronic strategy, safety and the trades.",
  path: "/insights",
  keywords: [
    "mechanical construction articles",
    "prefabrication insights",
    "BIM coordination blog",
    "HVAC electrification",
  ],
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "Blog",
          name: "Mavron Resources & Insights",
          url: `${SITE_URL}/insights`,
          blogPost: insights.map((i) => ({
            "@type": "BlogPosting",
            headline: i.title,
            url: `${SITE_URL}/insights/${i.slug}`,
            datePublished: i.date,
            description: i.excerpt,
            image: `${SITE_URL}${i.image}`,
          })),
        })}
      />
      <PageHero
        kicker="Resources & insights"
        title="What we have been working out."
        lead="Technical notes, project updates and the occasional argument. Written by the people doing the work rather than by a marketing department reading over their shoulder."
      />
      <Breadcrumbs items={crumbs} />
      <Section>
        <InsightList items={[...insights]} />
      </Section>
      <CTABand
        title="Have a question we have not written about?"
        lead="Ask it directly. If the answer is useful to more than one person, it usually ends up on this page."
        primaryLabel="Ask us"
        secondaryHref="/services"
        secondaryLabel="Our capabilities"
      />
    </>
  );
}
