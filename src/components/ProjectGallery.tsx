"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  projectSectors,
  projectStatuses,
  type Project,
} from "@/content/projects";

type Filter = "All" | (typeof projectSectors)[number];
type StatusFilter = "All" | (typeof projectStatuses)[number];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [sector, setSector] = useState<Filter>("All");
  const [status, setStatus] = useState<StatusFilter>("All");

  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === "All" || p.sector === sector) &&
          (status === "All" || p.status === status)
      ),
    [projects, sector, status]
  );

  const chip = (active: boolean) =>
    `rounded-sm border px-3.5 py-2 text-[0.78rem] font-medium transition-colors ${
      active
        ? "border-copper-500 bg-copper-500/10 text-copper-300"
        : "border-ink-600 text-steel-300 hover:border-ink-500 hover:text-steel-100"
    }`;

  return (
    <div>
      <p className="mb-8 max-w-3xl border-l-2 border-copper-500 pl-4 text-sm leading-relaxed text-steel-300">
        These are illustrative project concepts. The images and project details are examples, not photographs or records of completed Mavron work.
      </p>
      <div className="flex flex-col gap-5 border-b border-ink-700 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-500">
            Sector
          </span>
          {(["All", ...projectSectors] as Filter[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              aria-pressed={sector === s}
              className={chip(sector === s)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-500">
            Status
          </span>
          {(["All", ...projectStatuses] as StatusFilter[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              aria-pressed={status === s}
              className={chip(status === s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-steel-500">
        {visible.length} {visible.length === 1 ? "project concept" : "project concepts"}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-sm text-steel-400">
          No projects match that combination yet. Try widening the filters.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="surface surface-hover group flex flex-col overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-ink-800">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-ink-950/80 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-100 backdrop-blur-sm">
                  Illustrative image
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-copper-400">
                  {p.sector}
                </span>
                <span className="rounded-full border border-ink-600 px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-steel-400">
                  {p.status}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-steel-50 transition-colors group-hover:text-copper-300">
                {p.name}
              </h2>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-steel-500">
                {p.location} · {p.year}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-400">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.scope.map((s) => (
                  <li
                    key={s}
                    className="rounded-sm bg-ink-800 px-2 py-1 text-[0.65rem] text-steel-400"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
