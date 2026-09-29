import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { serviceSlugs } from "@/content/services";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = ([
    { url: "/", changeFrequency: "monthly", priority: 1 },
    { url: "/about", changeFrequency: "yearly", priority: 0.8 },
    { url: "/services", changeFrequency: "monthly", priority: 0.9 },
    { url: "/process", changeFrequency: "yearly", priority: 0.8 },
    { url: "/projects", changeFrequency: "monthly", priority: 0.9 },
    { url: "/insights", changeFrequency: "weekly", priority: 0.8 },
    { url: "/culture", changeFrequency: "yearly", priority: 0.6 },
    { url: "/careers", changeFrequency: "weekly", priority: 0.8 },
    { url: "/contact", changeFrequency: "yearly", priority: 0.9 },
    { url: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ] as const).map((e) => ({
    ...e,
    url: `${SITE_URL}${e.url === "/" ? "" : e.url}`,
    lastModified: now,
  })) satisfies MetadataRoute.Sitemap;

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const insightPages: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...core, ...servicePages, ...projectPages, ...insightPages];
}
