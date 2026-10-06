import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Breadcrumbs, CTABand, PageHero, Section } from "@/components/ui";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export const metadata: Metadata = pageMeta({
  title: "Project Concepts — Residential, Commercial, Institutional & Special",
  description:
    "Illustrative mechanical project concepts across residential, commercial, healthcare, arena and transit settings.",
  path: "/projects",
  noIndex: true,
  keywords: [
    "mechanical construction projects BC",
    "high rise plumbing project",
    "healthcare HVAC project",
    "mechanical case studies",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "CollectionPage",
          name: "Mavron Mechanical Group projects",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.name,
            url: `${SITE_URL}/projects/${p.slug}`,
            abstract: p.summary,
          })),
        })}
      />
      <PageHero
        kicker="Projects"
        title="Towers, plant rooms, hospitals and holes in the ground."
        lead="Explore the kinds of mechanical challenges we build for. These project concepts and images are illustrative; real Mavron case studies will replace them."
      />
      <Breadcrumbs items={crumbs} />
      <Section>
        <ProjectGallery projects={[...projects]} />
      </Section>
      <CTABand
        title="Your project could be the next one on this page."
        lead="Send us the scope, the schedule and the constraint that worries you most."
      />
    </>
  );
}
