"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { footerNav, offices, serviceAreas, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-ink-700 bg-ink-900">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-400">
              {site.description}
            </p>
            <div className="mt-6 flex flex-col gap-1.5">
              <a
                href={`tel:${site.phone}`}
                className="font-mono text-sm tracking-wide text-steel-200 transition-colors hover:text-copper-300"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-steel-200 transition-colors hover:text-copper-300"
              >
                {site.email}
              </a>
              <p className="mt-1 text-xs text-steel-500">{site.serviceHours}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.linkedin}
                rel="noopener noreferrer me"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-ink-600 text-steel-300 transition-colors hover:border-copper-500 hover:text-copper-300"
                aria-label="Mavron Protection Group on LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21h-4z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                rel="noopener noreferrer me"
                target="_blank"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-ink-600 text-steel-300 transition-colors hover:border-copper-500 hover:text-copper-300"
                aria-label="Mavron Protection Group on Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a3.8 3.8 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.38c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 2.25a4.15 4.15 0 110 8.3 4.15 4.15 0 010-8.3zm6.65-3.9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-copper-400">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-steel-300 transition-colors hover:text-steel-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-ink-700 pt-10 md:grid-cols-3">
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel-400">
                {office.label}
              </h3>
              <address className="mt-2.5 text-sm not-italic leading-relaxed text-steel-300">
                {office.street}
                <br />
                {office.locality}, {office.region} {office.postalCode}
                <br />
                <a
                  href={`tel:${office.phone}`}
                  className="font-mono text-xs tracking-wide transition-colors hover:text-copper-300"
                >
                  {office.phone}
                </a>
              </address>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-ink-800 pt-8">
          <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-steel-500">
            Service areas
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-steel-500">
            {serviceAreas.join(" · ")} and throughout British Columbia.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-800 pt-8 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-steel-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-steel-300">
              Contact
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-steel-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
