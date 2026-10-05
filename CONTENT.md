# Content checklist — replace before launch

Everything below is invented for layout and demonstration. None of it is
Mavron's real information. Search the codebase for `PLACEHOLDER` to find the
same list inline.

## 1. Critical — the site is misleading until these are real

| Where | What to replace |
| --- | --- |
| `src/lib/site.ts` → `site` | `legalName`, `founded`, `email`, `careersEmail`, `partnersEmail`, `phone`, `phoneDisplay`, `social.linkedin`, `social.instagram` |
| `src/lib/site.ts` → `offices` | All three addresses, phone numbers and lat/lng. Delete any office that does not exist. The `geo` values feed LocalBusiness schema — wrong coordinates hurt local SEO. |
| `src/lib/site.ts` → `serviceAreas` | The cities you actually serve. |
| `src/content/company.ts` → `stats` | Years, headcount, shop size, area delivered. |
| `src/content/company.ts` → `leadership` | Real names, roles, bios, initials. Add photos if you have them. |
| `src/content/company.ts` → `jobs` | Live vacancies only. **Delete roles you are not hiring for** — they emit `JobPosting` structured data and Google indexes them. |
| `src/content/projects.ts` | Every project. `client` and `value` are literal `PLACEHOLDER` strings. |
| `.env.local` | `NEXT_PUBLIC_SITE_URL` must be the real production origin before the first deploy — it drives canonicals, the sitemap and all JSON-LD `@id` values. |

## 2. Important — true but unverified

| Where | What to check |
| --- | --- |
| `src/content/services.ts` | Only list what Mavron genuinely delivers. The Trade Partners page in particular says "we only list what we actually deliver" — make that true. |
| `src/content/company.ts` → `story` | The 2009–today timeline is invented. |
| `src/content/company.ts` → `cultureBlocks` | Apprenticeship and community paragraphs are marked PLACEHOLDER. |
| `src/content/insights.ts` | Six articles written in Mavron's voice. Keep, rewrite or delete — but do not publish claims about your own projects that are not true. |
| `src/app/privacy/page.tsx` | Template only. Have a Canadian privacy lawyer review it, name your real service providers and storage jurisdictions, and update `UPDATED`. |

## 3. Functional wiring

| What | Where |
| --- | --- |
| Enquiry delivery | `src/app/api/enquiry/route.ts` currently only logs to the server console. Wire it to Resend / Postmark / SendGrid or a CRM webhook, and add Turnstile or reCAPTCHA. |
| Google verification | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and submit `/sitemap.xml` in Search Console. |
| Analytics | Not installed. If you add it, update the cookies section of the privacy policy. |
| Project imagery | The gallery is typographic — there are no project photos. Add real site photography and wire it through `next/image`. |

## 4. Brand assets in use

| Asset | Source |
| --- | --- |
| `public/brand/mavron-*.svg` | Scalable transparent black and white versions of the logo supplied by the client, including the full lockup, symbol and wordmark. |
| `public/brand/mavron-logo-*-hd.png` | 3200 px transparent PNG exports of the supplied logo for high resolution use. |
| `public/models/M-Forge-Animated.glb` | Your M-Forge build (10 s assembly animation) |
| `public/models/M-Forge-Static.glb` | Assembled, no animation — spare |
| `public/images/m-forge-hero.webp` | Studio render, resized and compressed to 54 KB |
| `public/images/m-forge-exploded.webp` | Exploded render, 67 KB — used on About |
| `public/images/people/*.webp` | Six AI-generated illustrative portraits for the homepage carousel. They represent service disciplines, not actual Mavron employees. Replace with consented staff photography when available. |
| `public/vendor/model-viewer.min.js` | @google/model-viewer 4.1.0, BSD-3-Clause, self-hosted |
| `src/app/icon.svg` | Favicon drawn to match the monogram |
