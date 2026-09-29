"use client";

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

      <div className="mt-10 divide-y divide-ink-700 border-b border-ink-700">
        {visible.map((a) => (
          <article key={a.slug}>
            <Link
              href={`/insights/${a.slug}`}
              className="group grid gap-4 py-8 md:grid-cols-[minmax(0,10rem)_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                  {a.category}
                </p>
                <time
                  dateTime={a.date}
                  className="mt-2 block font-mono text-[0.68rem] text-steel-500"
                >
                  {new Date(a.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <p className="mt-1 font-mono text-[0.68rem] text-steel-600">{a.readingTime}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold leading-snug text-steel-50 transition-colors group-hover:text-copper-300 md:text-2xl">
                  {a.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-400">
                  {a.excerpt}
                </p>
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
