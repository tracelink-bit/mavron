"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (pathname === "/") return (
    <header className={`home-header ${scrolled ? "home-header-scrolled" : ""}`}>
      <Logo />
      <span className="header-location">British Columbia, CA</span>
      <nav className="home-desktop-nav" aria-label="Primary">
        <div><Link href="/services">Capabilities</Link><Link href="/projects">Projects</Link></div>
        <div><Link href="/process">Our process</Link><Link href="/about">About</Link></div>
        <div><Link href="/culture">People</Link><Link href="/contact">Contact <span aria-hidden="true">↗</span></Link></div>
      </nav>
      <button className="home-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="home-mobile-nav" onClick={() => setOpen(v=>!v)}>{open ? "Close −" : "Menu +"}</button>
      {open && <nav id="home-mobile-nav" className="home-mobile-nav" aria-label="Mobile">{[["Capabilities","/services"],["Projects","/projects"],["Our process","/process"],["About","/about"],["People","/culture"],["Contact","/contact"]].map(([label,href])=><Link key={href} href={href}>{label}<span aria-hidden="true">↗</span></Link>)}</nav>}
    </header>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-ink-700 bg-ink-950/92 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
            >
              <Link
                href={item.href}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-[0.85rem] font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-copper-300"
                    : "text-steel-200 hover:text-steel-50"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full w-[300px] pt-2">
                  <div className="surface animate-fade overflow-hidden rounded-sm shadow-lift">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group block border-b border-ink-700 px-4 py-3 last:border-0 transition-colors hover:bg-ink-800"
                      >
                        <span className="block text-[0.85rem] font-medium text-steel-100 transition-colors group-hover:text-copper-300">
                          {child.label}
                        </span>
                        {child.blurb && (
                          <span className="mt-0.5 block text-[0.75rem] text-steel-400">
                            {child.blurb}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="font-mono text-[0.72rem] tracking-wider text-steel-400 transition-colors hover:text-copper-300"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-forge-500 px-4 py-2.5 text-[0.8rem] font-semibold text-white transition-colors hover:bg-forge-400"
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink-600 text-steel-100 lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-ink-700 bg-ink-950 lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x py-6">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-ink-800 py-1">
                <Link
                  href={item.href}
                  className="block py-3 font-display text-lg font-semibold text-steel-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-steel-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-forge-500 px-5 py-3 text-sm font-semibold text-white"
              >
                Start a project
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center justify-center rounded-sm border border-ink-600 px-5 py-3 text-sm text-steel-200"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
