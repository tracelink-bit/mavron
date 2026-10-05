/**
 * Central site configuration.
 *
 * Every value marked PLACEHOLDER is invented for layout purposes and must be
 * replaced with Mavron's real details before launch. See CONTENT.md.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mavron-blue.vercel.app"
).replace(/\/$/, "");

export const site = {
  name: "Mavron Mechanical Group",
  shortName: "Mavron",
  legalName: "Mavron Mechanical Group", // PLACEHOLDER — confirm registered legal name
  tagline: "Mechanical systems, built to hold.",
  description:
    "Mavron Mechanical Group is a mechanical contractor delivering commercial plumbing, HVAC-R, VDC/BIM, prefabrication and lifetime aftercare across British Columbia.",
  founded: "2009", // PLACEHOLDER
  url: SITE_URL,
  email: "hello@mavronprotection.ca", // PLACEHOLDER
  careersEmail: "careers@mavronprotection.ca", // PLACEHOLDER
  partnersEmail: "partners@mavronprotection.ca", // PLACEHOLDER
  phone: "+1-604-555-0142", // PLACEHOLDER
  phoneDisplay: "604 555 0142", // PLACEHOLDER
  serviceHours: "Mon–Fri 07:00–17:00 PT · 24/7 warranty response",
  social: {
    linkedin: "https://www.linkedin.com/company/mavron-protection-group", // PLACEHOLDER
    instagram: "https://www.instagram.com/mavronprotection", // PLACEHOLDER
  },
} as const;

export type Office = {
  id: string;
  label: string;
  role: string;
  street: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  geo: { lat: number; lng: number };
};

/** PLACEHOLDER — replace with Mavron's real offices and shop addresses. */
export const offices: Office[] = [
  {
    id: "burnaby",
    label: "Burnaby — Head Office & Fabrication Shop",
    role: "Head office, VDC studio, 40,000 sq ft fabrication floor",
    street: "8420 Meridian Way",
    locality: "Burnaby",
    region: "BC",
    postalCode: "V5J 0A1",
    country: "CA",
    phone: "+1-604-555-0142",
    geo: { lat: 49.2288, lng: -122.9805 },
  },
  {
    id: "victoria",
    label: "Victoria — Island Operations",
    role: "Island project delivery and service crews",
    street: "1176 Rockbay Avenue",
    locality: "Victoria",
    region: "BC",
    postalCode: "V8T 1Y2",
    country: "CA",
    phone: "+1-250-555-0178",
    geo: { lat: 48.4372, lng: -123.3663 },
  },
  {
    id: "kelowna",
    label: "Kelowna — Interior Branch",
    role: "Okanagan projects, warranty and aftercare",
    street: "2190 Enterprise Way",
    locality: "Kelowna",
    region: "BC",
    postalCode: "V1Y 6H9",
    country: "CA",
    phone: "+1-250-555-0190",
    geo: { lat: 49.8836, lng: -119.4562 },
  },
];

export const serviceAreas = [
  "Vancouver",
  "Burnaby",
  "Surrey",
  "Richmond",
  "Coquitlam",
  "North Vancouver",
  "Victoria",
  "Nanaimo",
  "Kelowna",
  "Kamloops",
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", blurb: "Who we are and how we got here" },
      { label: "Our Process", href: "/process", blurb: "The Mavron Method, stage by stage" },
      { label: "Culture", href: "/culture", blurb: "People, apprenticeships, community" },
    ],
  },
  {
    label: "Capabilities",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", blurb: "The full mechanical scope" },
      { label: "Plumbing", href: "/services/plumbing", blurb: "Water, gas, drainage" },
      { label: "HVAC-R", href: "/services/hvac-r", blurb: "Heating, cooling, refrigeration" },
      { label: "VDC / BIM", href: "/services/vdc-bim", blurb: "Model-first coordination" },
      { label: "Prefabrication", href: "/services/prefabrication", blurb: "Built in the shop" },
      { label: "Warranty & Aftercare", href: "/services/warranty-aftercare", blurb: "After handover" },
      { label: "Trade Partners", href: "/services/trade-partners", blurb: "Coordinated scopes" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "Capabilities",
    links: [
      { label: "Plumbing", href: "/services/plumbing" },
      { label: "HVAC-R", href: "/services/hvac-r" },
      { label: "VDC / BIM", href: "/services/vdc-bim" },
      { label: "Prefabrication", href: "/services/prefabrication" },
      { label: "Warranty & Aftercare", href: "/services/warranty-aftercare" },
      { label: "Trade Partners", href: "/services/trade-partners" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Culture", href: "/culture" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Resources & Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;
