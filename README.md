# Mavron Mechanical Group

Marketing site for Mavron Mechanical Group — a mechanical contractor
delivering plumbing, HVAC-R, VDC/BIM, prefabrication, aftercare and
coordinated trade scopes.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

> **Read `CONTENT.md` before deploying.** Company details, projects, people and
> job listings are placeholders.

## Run it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production
npm run typecheck                # tsc --noEmit
npm run lint                     # eslint
```

Node 20+ required.

## Pages

16 routes, 37 pre-rendered pages.

| Route | |
| --- | --- |
| `/` | Cinematic homepage with the supplied M artwork in an interactive WebGL relief, scroll-responsive text, capabilities, and three project imagery panels |
| `/about` | Story timeline, values, leadership, monogram, offices |
| `/services` | Capability overview |
| `/services/plumbing` · `/hvac-r` · `/vdc-bim` · `/prefabrication` · `/warranty-aftercare` · `/trade-partners` | Six service pages with capabilities, deliverables, related work and FAQs |
| `/process` | The Mavron Method — six stages with outputs |
| `/projects` | Filterable gallery (sector × status) |
| `/projects/[slug]` | Case study: challenge, approach, outcome, numbers |
| `/insights` | Category-filtered article index |
| `/insights/[slug]` | Article |
| `/culture` | Values, apprenticeships, training, safety, community |
| `/careers` | Open roles with `JobPosting` schema |
| `/contact` | Three routed enquiry types, offices, form |
| `/privacy` | Legal template |
| `/sitemap.xml` · `/robots.txt` · `/manifest.webmanifest` · `/opengraph-image` | Generated |

## SEO

- Per-page `title`, `description`, keywords and **canonical URL** via the
  `pageMeta()` helper in `src/lib/seo.ts`
- Open Graph + Twitter cards on every page, backed by a generated
  1200×630 OG image (`src/app/opengraph-image.tsx`)
- **JSON-LD** as a single `@graph` per page: `Organization` (typed as
  `GeneralContractor`/`HVACBusiness`/`Plumber`), `WebSite`, three
  `LocalBusiness` nodes with geo and opening hours, plus per-page
  `BreadcrumbList`, `Service` + `OfferCatalog`, `FAQPage`, `HowTo`,
  `Article`, `JobPosting`, `CollectionPage` and `CreativeWork`
- `sitemap.ts` and `robots.ts` generated from the content modules — new
  services, projects and articles appear automatically
- Exactly one `<h1>` per page; semantic landmarks; breadcrumb trails
- Security headers (HSTS, nosniff, frame options, permissions policy) in
  `next.config.ts`

## Performance

- Fonts self-hosted (`@fontsource-variable`) — no Google Fonts request, no
  render-blocking stylesheet, no layout shift
- The homepage uses the supplied M artwork as its visual source. A lightweight
  WebGL relief adds depth and responds to scrolling and pointer movement.
  Motion can be paused, and reduced-motion users see the original still image.
- Three generated editorial images are stored locally as compressed WebP files.
- `model-viewer` remains self-hosted under `/vendor` for model content elsewhere.

## Accessibility

The homepage includes a pause-motion control and honours
`prefers-reduced-motion`. Keyboard navigation and contrast should be reviewed
again whenever content or colours change.

## Structure

```
src/
  app/          routes, sitemap, robots, manifest, OG image, enquiry API
  components/   Header, Footer, ModelViewer, ProjectGallery, InsightList,
                ContactForm, JsonLd, ui primitives
  content/      services · projects · insights · company  (typed, no CMS)
  lib/          site.ts (config) · seo.ts (metadata + JSON-LD builders)
public/
  models/       M-Forge GLBs
  images/       compressed renders
  vendor/       self-hosted model-viewer
```

Content lives in typed modules under `src/content/`. Adding a service,
project or article is a new object in an array — routes, sitemap entries,
structured data and cross-links follow automatically.

## Deploy

Works unchanged on Vercel. For any other host, `npm run build` then
`npm run start` behind a reverse proxy. Set `NEXT_PUBLIC_SITE_URL` in the
environment — canonicals and structured data depend on it.

## Licence

`public/vendor/model-viewer.min.js` is @google/model-viewer 4.1.0,
BSD-3-Clause, with its licence notices retained in the bundle. The M-Forge
geometry and all site code are yours.
