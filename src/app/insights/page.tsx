import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { InsightsMotion } from "@/components/InsightsMotion";
import { insights } from "@/content/insights";
import { SITE_URL } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";
import styles from "./insights.module.css";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/insights" },
];

const chapterLabels = [
  "Safety through fabrication",
  "Clash closure",
  "Hydronic strategy",
  "Mechanical complete",
  "Scan to BIM",
  "Training the next crew",
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
          blogPost: insights.map((insight) => ({
            "@type": "BlogPosting",
            headline: insight.title,
            url: `${SITE_URL}/insights/${insight.slug}`,
            datePublished: insight.date,
            description: insight.excerpt,
            image: `${SITE_URL}${insight.image}`,
          })),
        })}
      />

      <div id="mav-insights" className={styles.page}>
        <InsightsMotion />

        <section className={styles.hero} aria-labelledby="insights-title">
          <div className={styles.heroImageWrap} data-insight-hero>
            <Image
              src="/images/insights/mechanical-completion.webp"
              alt="Mechanical systems being completed inside a commercial building"
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroShade} aria-hidden="true" />
          <span className={styles.heroImageNote}>Illustrative image</span>
          <div className={styles.curtain} aria-hidden="true"><span /><span /><span /><span /></div>
          <div className={styles.heroContent}>
            <p className={styles.heroKicker}>Mavron resources &amp; insights</p>
            <h1 id="insights-title">What the work<br />teaches us.</h1>
            <a href="#our-thinking" className={styles.heroExplore}>Discover the thinking <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="our-thinking" className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.introInner}>
            <div className={styles.introText}>
              <h2 id="intro-title" data-insight-reveal>Built in the shop.<br />Proven on site.<br />Shared here.</h2>
              <div className={styles.introAside} data-insight-reveal>
                <p>We write about the decisions that shape a mechanical project: where coordination prevents rework, where fabrication improves safety, and what a building needs after handover.</p>
                <p>Technical notes and project updates from the people doing the work.</p>
              </div>
            </div>
            <div className={styles.introPhotos}>
              <div className={styles.introPhotoLarge} data-insight-reveal>
                <Image src="/images/insights/clash-closure.webp" alt="Mechanical coordinators reviewing a building services model" fill sizes="(min-width: 1000px) 65vw, 65vw" />
              </div>
              <div className={styles.introPhotoSmall} data-insight-reveal>
                <Image src="/images/insights/apprentice-shop.webp" alt="Apprentice and mentor measuring a pipe assembly in the fabrication shop" fill sizes="(min-width: 1000px) 30vw, 35vw" />
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className={styles.stories} aria-label="Mavron articles and updates">
          <aside className={styles.storyNav}>
            <div className={styles.storyNavInner}>
              <p>In this collection</p>
              <nav aria-label="Insights sections">
                {insights.map((insight, index) => (
                  <a key={insight.slug} href={`#${insight.slug}`} data-insight-nav={insight.slug}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{chapterLabels[index]}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className={styles.storyPanels}>
            {insights.map((insight, index) => (
              <article
                id={insight.slug}
                key={insight.slug}
                className={styles.story}
                data-insight-panel
                aria-labelledby={`${insight.slug}-title`}
              >
                <div className={styles.storyImageWrap}>
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    fill
                    sizes="100vw"
                    className={styles.storyImage}
                  />
                </div>
                <div className={styles.storyShade} aria-hidden="true" />
                <span className={styles.storyImageNote}>Illustrative image</span>
                <div className={styles.storyContent}>
                  <div className={styles.storyMeta}>
                    <span>{insight.category}</span>
                    <i aria-hidden="true" />
                    <span>{String(index + 1).padStart(2, "0")} / {String(insights.length).padStart(2, "0")}</span>
                  </div>
                  <h2 id={`${insight.slug}-title`}>{insight.title}</h2>
                  <p className={styles.storyExcerpt}>{insight.excerpt}</p>
                  <div className={styles.storyFoot}>
                    <Link href={`/insights/${insight.slug}`} aria-label={`Read article: ${insight.title}`}>Read article <span aria-hidden="true">↗</span></Link>
                    <span><time dateTime={insight.date}>{new Date(`${insight.date}T00:00:00Z`).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</time> · {insight.readingTime} read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <div className={styles.closingInner}>
            <div>
              <p className={styles.closingKicker}>The conversation continues</p>
              <h2 id="closing-title">Good questions<br />build better work.</h2>
            </div>
            <div className={styles.closingAside}>
              <p>Have a question we have not written about? Ask the team behind the work.</p>
              <Link href="/contact">Ask us <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
