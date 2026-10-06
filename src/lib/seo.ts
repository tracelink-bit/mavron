import type { Metadata } from "next";
import { SITE_URL, offices, serviceAreas, site } from "./site";

export const OG = {
  default: "/opengraph-image",
  width: 1200,
  height: 630,
};

/** Builds consistent, canonical-safe metadata for every route. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  noIndex = false,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_CA",
      images: image
        ? [{ url: image, alt: imageAlt ?? title }]
        : [{ url: OG.default, width: OG.width, height: OG.height, alt: site.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? OG.default],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD builders                                                    */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "GeneralContractor", "HVACBusiness", "Plumber"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg`, width: 512, height: 512 },
    image: `${SITE_URL}${OG.default}`,
    description: site.description,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.social.linkedin, site.social.instagram],
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a,
      containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: offices[0].street,
      addressLocality: offices[0].locality,
      addressRegion: offices[0].region,
      postalCode: offices[0].postalCode,
      addressCountry: offices[0].country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: site.phone,
        email: site.email,
        areaServed: "CA",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: site.phone,
        email: site.email,
        areaServed: "CA",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: site.careersEmail,
        areaServed: "CA",
        availableLanguage: ["en"],
      },
    ],
  };
}

export function localBusinessSchemas() {
  return offices.map((o) => ({
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/contact#${o.id}`,
    name: `${site.name} — ${o.locality}`,
    parentOrganization: { "@id": ORG_ID },
    url: `${SITE_URL}/contact`,
    telephone: o.phone,
    email: site.email,
    image: `${SITE_URL}${OG.default}`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: o.street,
      addressLocality: o.locality,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: o.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: o.geo.lat, longitude: o.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
  }));
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-CA",
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string[];
}) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}#service`,
    name,
    description,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "British Columbia, Canada",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: serviceType.map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: t },
      })),
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  date,
  author,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}/insights/${slug}#article`,
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: author, url: SITE_URL },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}${image ?? OG.default}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/insights/${slug}` },
    inLanguage: "en-CA",
  };
}

export function jobPostingSchema(job: {
  slug: string;
  title: string;
  summary: string;
  type: string;
  location: string;
  department: string;
}) {
  const office = offices[0];
  return {
    "@type": "JobPosting",
    "@id": `${SITE_URL}/careers#${job.slug}`,
    title: job.title,
    description: job.summary,
    employmentType:
      job.type.toLowerCase() === "apprenticeship" ? "INTERN" : "FULL_TIME",
    hiringOrganization: { "@id": ORG_ID },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street,
        addressLocality: job.location.split(",")[0]?.trim(),
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
    industry: "Mechanical Contracting",
    occupationalCategory: job.department,
    directApply: true,
  };
}

export function caseStudySchema(p: {
  slug: string;
  name: string;
  summary: string;
  location: string;
  year: string;
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${p.slug}#case-study`,
    name: p.name,
    abstract: p.summary,
    creator: { "@id": ORG_ID },
    locationCreated: { "@type": "Place", name: p.location },
    dateCreated: p.year,
    inLanguage: "en-CA",
  };
}

/** Wraps a set of nodes in a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
