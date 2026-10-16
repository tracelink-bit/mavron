import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";
import styles from "./projects.module.css";

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
          name: "Mavron Mechanical Group project concepts",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.name,
            url: `${SITE_URL}/projects/${p.slug}`,
            abstract: p.summary,
          })),
        })}
      />

      <main id="mav-projects" className={styles.page}>
        <section className={styles.hero} aria-labelledby="projects-title">
          <div className={styles.heroRing} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroTitleBlock}>
              <p className={styles.overline}>Mavron project concepts</p>
              <h1 id="projects-title" className={styles.heroTitle}>
                Built for the<br /><span>complex.</span>
              </h1>
            </div>
            <div className={styles.heroAside}>
              <p>Mechanical work across towers, plant rooms, healthcare spaces and infrastructure. See how the scopes connect.</p>
              <a href="#project-gallery" className={styles.textLink}>Explore projects <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Projects</span>
          </nav>
        </section>

        <ProjectGallery projects={[...projects]} />

        <section className={styles.closing} aria-labelledby="projects-closing-title">
          <div>
            <p className={styles.overline}>The next challenge</p>
            <h2 id="projects-closing-title">Bring us the<br /><em>hard part.</em></h2>
          </div>
          <div className={styles.closingAside}>
            <p>Bring us the scope, the schedule and the constraint that worries you most. We will start with the details.</p>
            <Link href="/contact" className={styles.closingButton}>Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
    </>
  );
}
