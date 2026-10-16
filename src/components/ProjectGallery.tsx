"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  projectSectors,
  projectStatuses,
  type Project,
} from "@/content/projects";
import styles from "@/app/projects/projects.module.css";

type Filter = "All" | (typeof projectSectors)[number];
type StatusFilter = "All" | (typeof projectStatuses)[number];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [sector, setSector] = useState<Filter>("All");
  const [status, setStatus] = useState<StatusFilter>("All");

  const visible = useMemo(
    () => projects.filter(
      (project) => (sector === "All" || project.sector === sector) &&
        (status === "All" || project.status === status)
    ),
    [projects, sector, status]
  );

  useEffect(() => {
    const root = document.getElementById("mav-projects");
    if (!root || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const elements = [...root.querySelectorAll<HTMLElement>("[data-project-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));
    root.dataset.motionReady = "true";
    return () => observer.disconnect();
  }, [sector, status, visible.length]);

  return (
    <section id="project-gallery" className={styles.catalog} aria-label="Project concepts">
      <aside className={styles.catalogIntro}>
        <div className={styles.introContent}>
          <p className={styles.overline} data-project-reveal>Across every environment</p>
          <h2 data-project-reveal>Every detail<br />has a <em>consequence.</em></h2>
          <div className={styles.redRule} aria-hidden="true" />
          <p className={styles.introLead} data-project-reveal>Different buildings. Different constraints. One connected way of thinking about mechanical work.</p>
          <p className={styles.disclaimer} data-project-reveal>These are illustrative project concepts. The images and details are examples, not photographs or records of completed Mavron work.</p>
          <div className={styles.filters} data-project-reveal>
            <fieldset>
              <legend>Sector</legend>
              <div className={styles.filterOptions}>
                {(["All", ...projectSectors] as Filter[]).map((item) => (
                  <button key={item} type="button" onClick={() => setSector(item)} aria-pressed={sector === item} className={sector === item ? styles.activeFilter : styles.filter}>{item}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Status</legend>
              <div className={styles.filterOptions}>
                {(["All", ...projectStatuses] as StatusFilter[]).map((item) => (
                  <button key={item} type="button" onClick={() => setStatus(item)} aria-pressed={status === item} className={status === item ? styles.activeFilter : styles.filter}>{item}</button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
        <p className={styles.resultCount} aria-live="polite">{String(visible.length).padStart(2, "0")} {visible.length === 1 ? "concept" : "concepts"} shown <span aria-hidden="true">↓</span></p>
      </aside>

      <div className={styles.panels}>
        {visible.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No concepts match these filters.</p>
            <button type="button" onClick={() => { setSector("All"); setStatus("All"); }}>Show all projects ↗</button>
          </div>
        ) : visible.map((project, index) => (
          <article key={project.slug} className={styles.panel} data-project-reveal aria-labelledby={`${project.slug}-title`}>
            <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1000px) 50vw, 100vw" priority={index === 0} className={styles.panelImage} />
            <div className={styles.panelShade} aria-hidden="true" />
            <div className={styles.panelContent}>
              <div className={styles.panelMeta}>
                <span className={styles.panelNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.sector}</span><span className={styles.metaRule} aria-hidden="true" /><span>{project.status}</span>
              </div>
              <h3 id={`${project.slug}-title`}>{project.name}</h3>
              <p className={styles.panelLocation}>{project.location} / {project.year}</p>
              <p className={styles.panelSummary}>{project.summary}</p>
              <div className={styles.panelBottom}>
                <Link href={`/projects/${project.slug}`} className={styles.panelLink}>Explore concept <span aria-hidden="true">↗</span></Link>
                <span className={styles.imageNotice}>Illustrative image</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
