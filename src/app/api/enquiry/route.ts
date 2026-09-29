import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Route = "project" | "careers" | "partnerships";

const ROUTES: Route[] = ["project", "careers", "partnerships"];
const MAX = 5000;

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Enquiry endpoint.
 *
 * TODO BEFORE LAUNCH — wire this to a real delivery mechanism. Options:
 *   • Resend / Postmark / SendGrid  → send to process.env.CONTACT_INBOX
 *   • A CRM webhook                 → forward the JSON payload
 *   • A form service (Formspree…)   → proxy the request
 * Also consider adding Turnstile or reCAPTCHA verification here.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real people leave this empty.
  if (clean(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const route = clean(payload.route) as Route;
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160);
  const organisation = clean(payload.organisation, 160);
  const phone = clean(payload.phone, 40);
  const message = clean(payload.message, MAX);

  const errors: Record<string, string> = {};
  if (!ROUTES.includes(route)) errors.route = "Choose an enquiry type.";
  if (name.length < 2) errors.name = "Tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "A valid email, please.";
  if (message.length < 10) errors.message = "A little more detail would help.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = {
    route,
    name,
    email,
    organisation,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  };

  // Replace this with real delivery. Until then the enquiry is only logged.
  console.info("[mavron] enquiry received", enquiry);

  return NextResponse.json({ ok: true });
}
