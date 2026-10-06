import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "base" | "raised" | "deep";
}) {
  const tones = {
    base: "bg-ink-950",
    raised: "bg-ink-900",
    deep: "bg-ink-850",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function SectionHead({
  kicker,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <Tag className="mt-4 text-3xl leading-[1.1] text-steel-50 md:text-[2.6rem]">
        {title}
      </Tag>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-steel-300 md:text-lg">{lead}</p>
      )}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "quiet";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-forge-500 text-white hover:bg-forge-400",
    ghost:
      "border border-ink-600 text-steel-100 hover:border-copper-500 hover:text-copper-300",
    quiet: "text-copper-300 hover:text-copper-200 px-0",
  } as const;

  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const content = (
    <>
      {children}
      <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
        <path
          d="M2 7h10M8 3l4 4-4 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (external) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}

export function StatGrid({
  items,
}: {
  items: readonly { value: string; label: string; detail?: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink-700 bg-ink-700 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="bg-ink-900 px-5 py-7 md:px-7 md:py-9">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-3xl font-bold tracking-tight text-copper-300 md:text-4xl">
              {s.value}
            </span>
            <span className="mt-2 block text-sm font-medium text-steel-100">
              {s.label}
            </span>
            {s.detail && (
              <span className="mt-1 block text-xs leading-relaxed text-steel-500">
                {s.detail}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink-800 bg-ink-950 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, #b5231f, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] text-steel-50 md:text-6xl text-balance-tight">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-300 md:text-lg">
            {lead}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-800 bg-ink-900">
      <div className="container-x">
        <ol className="flex flex-wrap items-center gap-1.5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-500">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true" className="text-ink-500">/</span>}
              {i === items.length - 1 ? (
                <span className="text-steel-300" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-copper-300">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function CTABand({
  title = "Let's talk about your mechanical scope.",
  lead = "Design-assist, hard bid, or a plant replacement in an occupied building — start the conversation before the drawings are fixed.",
  primaryHref = "/contact",
  primaryLabel = "Start a project",
  secondaryHref = "/projects",
  secondaryLabel = "See our work",
}: {
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-ink-700 bg-ink-900">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle at 70% 50%, #c87137, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="text-2xl leading-tight text-steel-50 md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-steel-300 md:text-base">{lead}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          <ButtonLink href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Card({
  href,
  eyebrow,
  title,
  body,
  footer,
  image,
  imageAlt,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  body: string;
  footer?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Link
      href={href}
      className={`surface surface-hover group flex flex-col overflow-hidden rounded-sm ${image ? "" : "p-6 md:p-7"}`}
    >
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
          <Image src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
          <span className="absolute bottom-3 left-3 rounded-sm bg-ink-950/80 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-100 backdrop-blur-sm">
            Illustrative image
          </span>
        </div>
      )}
      <div className={image ? "flex flex-1 flex-col p-6 md:p-7" : "flex flex-1 flex-col"}>
      {eyebrow && (
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-copper-400">
          {eyebrow}
        </span>
      )}
      <h3 className="mt-3 text-lg font-semibold text-steel-50 transition-colors group-hover:text-copper-300">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-copper-300">
        {footer ?? "Read more"}
        <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      </div>
    </Link>
  );
}
