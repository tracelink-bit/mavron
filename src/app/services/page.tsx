import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ServicesMotion } from "@/components/ServicesMotion";
import { services } from "@/content/services";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";
import styles from "./services.module.css";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/services" },
];

export const metadata: Metadata = pageMeta({
  title: "Capabilities — Mechanical Contracting Services",
  description:
    "Six mechanical scopes under one accountable contractor: HVAC-R, commercial plumbing, VDC/BIM, prefabrication, warranty and aftercare, and coordinated trade partners.",
  path: "/services",
  keywords: [
    "mechanical contracting services",
    "commercial plumbing contractor",
    "HVAC-R services",
    "BIM coordination services",
    "mechanical prefabrication",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(breadcrumbSchema(crumbs), {
          "@type": "ItemList",
          name: "Mavron Mechanical Group capabilities",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.name,
            url: `/services/${service.slug}`,
          })),
        })}
      />

      <div id="mav-services" className={styles.page}>
        <ServicesMotion />

        <section className={styles.hero} aria-labelledby="services-title">
          <div className={styles.heroRing} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroTitleBlock}>
              <p className={styles.heroKicker}>Mavron capabilities</p>
              <h1 id="services-title" className={styles.heroTitle}>
                Built together.<br />
                <span>Built to last.</span>
              </h1>
            </div>
            <div className={styles.heroAside}>
              <p>Six mechanical capabilities. One accountable team. Explore how every scope connects from model to maintenance.</p>
              <a href="#hvac-r" className={styles.textLink}>
                View capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Capabilities</span>
          </nav>
        </section>

        <section className={styles.catalog} aria-label="Mechanical capabilities">
          <aside className={styles.catalogIntro}>
            <div className={styles.introContent}>
              <p className={styles.overline}>Complete mechanical delivery</p>
              <h2>Everything<br />works <em>together.</em></h2>
              <div className={styles.redRule} aria-hidden="true" />
              <p className={styles.introLead}>
                From heating and plumbing to digital coordination, fabrication and aftercare, Mavron carries the work as one connected mechanical scope.
              </p>
              <p className={styles.introSecondary}>
                One model. One fabrication release. One team that answers after handover.
              </p>
            </div>
            <a href="#hvac-r" className={styles.introExplore}>
              Explore capabilities <span aria-hidden="true">↓</span>
            </a>
          </aside>

          <div className={styles.panels}>
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className={styles.panel}
                data-service-panel
                aria-labelledby={`${service.slug}-title`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1000px) 50vw, 100vw"
                  priority={index === 0}
                  className={styles.panelImage}
                />
                <div className={styles.panelShade} aria-hidden="true" />
                <nav className={styles.panelDots} aria-label="Capability sections">
                  {services.map((item, itemIndex) => (
                    <a
                      key={item.slug}
                      href={`#${item.slug}`}
                      aria-label={`Jump to ${item.name}`}
                      aria-current={itemIndex === index ? "location" : undefined}
                      className={itemIndex === index ? styles.activeDot : styles.dot}
                    />
                  ))}
                </nav>
                <div className={styles.panelCopy}>
                  <div className={styles.panelMeta}>
                    <span className={styles.panelIcon} aria-hidden="true">M</span>
                    <span>{String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
                    <span className={styles.panelMetaRule} aria-hidden="true" />
                    <span>{service.navLabel}</span>
                  </div>
                  <h3 id={`${service.slug}-title`}>{service.name}</h3>
                  <p>{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className={styles.panelLink}>
                    Explore capability <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div>
            <p className={styles.overline}>One contractor. Every connection.</p>
            <h2 id="closing-title">The seams are<br /><em>ours to solve.</em></h2>
          </div>
          <div className={styles.closingAside}>
            <p>Every scope lives in the same coordination model, releases through the same fabrication process and routes back to Mavron for aftercare.</p>
            <Link href="/contact" className={styles.closingButton}>Start a project <span aria-hidden="true">↗</span></Link>
            <Link href="/process" className={styles.closingSecondary}>See how we work <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>
    </>
  );
}
