"use client";

import { useState } from "react";

const ROUTES = [
  {
    id: "project",
    label: "Start a project",
    blurb: "Tenders, design-assist, plant replacement, service work.",
  },
  {
    id: "careers",
    label: "Careers",
    blurb: "Apprenticeships, trades, VDC, fabrication, project delivery.",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    blurb: "Trade partners, suppliers, consultants and owners' reps.",
  },
] as const;

type RouteId = (typeof ROUTES)[number]["id"];
type Errors = Partial<Record<string, string>>;

export function ContactForm({ initialRoute = "project" }: { initialRoute?: RouteId }) {
  const [route, setRoute] = useState<RouteId>(initialRoute);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, route }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setStatus("error");
        return;
      }
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-sm border border-ink-600 bg-ink-950 px-4 py-3 text-sm text-steel-100 placeholder:text-steel-600 transition-colors focus:border-copper-500";
  const label =
    "block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel-400";

  if (status === "sent") {
    return (
      <div className="surface rounded-sm p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-copper-500 text-copper-300">
          <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5l3.2 3.2L13 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 text-xl text-steel-50">Received. Thank you.</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-steel-400">
          Someone from the right team will come back to you. If it is urgent, call us
          rather than waiting on email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-copper-300 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface rounded-sm p-6 md:p-8">
      <fieldset>
        <legend className={label}>Enquiry type</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {ROUTES.map((r) => (
            <label
              key={r.id}
              className={`cursor-pointer rounded-sm border p-4 transition-colors ${
                route === r.id
                  ? "border-copper-500 bg-copper-500/10"
                  : "border-ink-600 hover:border-ink-500"
              }`}
            >
              <input
                type="radio"
                name="route"
                value={r.id}
                checked={route === r.id}
                onChange={() => setRoute(r.id)}
                className="sr-only"
              />
              <span
                className={`block text-sm font-semibold ${
                  route === r.id ? "text-copper-300" : "text-steel-100"
                }`}
              >
                {r.label}
              </span>
              <span className="mt-1 block text-[0.72rem] leading-snug text-steel-500">
                {r.blurb}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={`mt-2 ${field}`} placeholder="Jordan Ellis" />
          {errors.name && <p className="mt-1.5 text-xs text-forge-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={`mt-2 ${field}`} placeholder="you@company.ca" />
          {errors.email && <p className="mt-1.5 text-xs text-forge-300">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className={label}>
            Organisation
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" className={`mt-2 ${field}`} placeholder="Company or authority" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={`mt-2 ${field}`} placeholder="604 555 0142" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={label}>
          {route === "careers"
            ? "Tell us about your trade, tickets and what you are looking for *"
            : route === "partnerships"
              ? "Tell us about your scope and where you think we fit *"
              : "Tell us about the project — scope, schedule, and the constraint that worries you most *"}
        </label>
        <textarea id="message" name="message" required rows={6} className={`mt-2 ${field} resize-y`} />
        {errors.message && <p className="mt-1.5 text-xs text-forge-300">{errors.message}</p>}
      </div>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-sm bg-forge-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-forge-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-xs text-steel-500">
          We reply to every enquiry. See our{" "}
          <a href="/privacy" className="text-copper-300 underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
      </div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <p role="alert" className="mt-4 text-sm text-forge-300">
          Something went wrong sending that. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
