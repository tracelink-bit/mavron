"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { insightCategories, type Insight } from "@/content/insights";

export function InsightList({ items }: { items: Insight[] }) {
  const [cat, setCat] = useState<"All" | Insight["category"]>("All");

  const visible = useMemo(
    () => (cat === "All" ? items : items.filter((i) => i.category === cat)),
    [items, cat]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-b border-ink-700 pb-8">
        {(["All", ...insightCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`rounded-sm border px-3.5 py-2 text-[0.78rem] font-medium transition-colors ${
              cat === c
                ? "border-copper-500 bg-copper-500/10 text-copper-300"
                : "border-ink-600 text-steel-300 hover:border-ink-500 hover:text-steel-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((a) => (
          <article key={a.slug} className="min-w-0">
            <Link
              href={`/insights/${a.slug}`}
              className="surface surface-hover group flex h-full flex-col overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-ink-950/80 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-100 backdrop-blur-sm">
                  Illustrative image
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
                  <span className="text-copper-400">{a.category}</span>
                  <time dateTime={a.date} className="text-steel-500">
                    {new Date(a.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-steel-500">{a.readingTime} read</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug text-steel-50 transition-colors group-hover:text-copper-300">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">
                  {a.excerpt}
                </p>
                <span className="mt-5 text-sm font-medium text-copper-300">Read article →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-10 text-sm text-steel-400">Nothing in that category yet.</p>
      )}
    </div>
  );
}
