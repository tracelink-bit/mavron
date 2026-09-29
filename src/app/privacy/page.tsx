import type { Metadata } from "next";
import { Breadcrumbs, PageHero, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbSchema, graph, pageMeta } from "@/lib/seo";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Mavron Protection Group collects, uses, stores and protects personal information, and how to exercise your privacy rights under PIPA and PIPEDA.",
  path: "/privacy",
});

const UPDATED = "20 September 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        lead={`Last updated ${UPDATED}. This policy explains what we collect, why, and what you can ask us to do about it.`}
      />
      <Breadcrumbs items={crumbs} />

      <Section>
        <div className="prose-mav mx-auto max-w-3xl">
          <div className="surface rounded-sm p-5 text-sm text-steel-300">
            <strong className="text-copper-300">Template notice —</strong> this page is a
            starting structure, not legal advice. Have it reviewed by a Canadian privacy
            lawyer and updated to reflect the tools Mavron actually uses before launch.
          </div>

          <h2>Who we are</h2>
          <p>
            {site.legalName} (&ldquo;Mavron&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
            mechanical contractor operating in British Columbia, Canada. We are responsible
            for the personal information described in this policy. You can reach our privacy
            contact at <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Information you give us.</strong> Name, email address, phone number,
              organisation and the content of any enquiry, application or message you send
              through this website or by email.
            </li>
            <li>
              <strong>Recruitment information.</strong> Where you apply for a role: résumé,
              qualifications, tickets and certifications, work history and references.
            </li>
            <li>
              <strong>Technical information.</strong> Standard server log data such as IP
              address, browser type and pages requested, used to keep the site secure and
              working.
            </li>
            <li>
              <strong>Analytics.</strong> If analytics are enabled on this site, aggregate
              usage data about how pages are used. Name the specific provider here.
            </li>
          </ul>

          <h2>Why we use it</h2>
          <ul>
            <li>To respond to project, careers and partnership enquiries</li>
            <li>To assess job applications and manage recruitment</li>
            <li>To deliver, administer and support contracted work</li>
            <li>To meet legal, regulatory, insurance and safety obligations</li>
            <li>To keep this website secure and functioning</li>
          </ul>
          <p>
            We rely on your consent, on the necessity of processing to enter into or perform
            a contract, and on our legitimate business interests, in each case as permitted
            by British Columbia&rsquo;s <em>Personal Information Protection Act</em> (PIPA)
            and Canada&rsquo;s <em>PIPEDA</em>.
          </p>

          <h2>What we do not do</h2>
          <p>
            We do not sell personal information. We do not share it with third parties for
            their own marketing. We do not use enquiry content for any purpose other than
            responding to the enquiry and the work that follows from it.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We share personal information only with service providers who process it on our
            behalf — for example email delivery, hosting and recruitment tools — and only to
            the extent needed to provide that service. List those providers here. We may also
            disclose information where required by law or to protect our legal rights.
          </p>

          <h2>Where it is stored</h2>
          <p>
            Some service providers may store or process information outside Canada. Where
            that is the case, the information is subject to the laws of that jurisdiction.
            Name the relevant jurisdictions here once your providers are confirmed.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry correspondence is retained for as long as needed to respond and for a
            reasonable period afterwards for business records. Recruitment information is
            retained for the duration of the hiring process and for a defined period after,
            unless you ask us to remove it sooner. Project records are retained for the
            periods required by contract, insurance and statute.
          </p>

          <h2>Cookies</h2>
          <p>
            This site uses only the cookies needed for it to function. If analytics or
            marketing cookies are added later, this section must be updated and an
            appropriate consent mechanism provided.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>Ask what personal information we hold about you</li>
            <li>Ask us to correct information that is wrong or incomplete</li>
            <li>Withdraw consent, subject to legal and contractual limits</li>
            <li>Ask us to delete information we no longer need</li>
            <li>Complain to the Office of the Information and Privacy Commissioner for British Columbia</li>
          </ul>
          <p>
            To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a>. We
            will respond within the timeframe required by law.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical and physical safeguards appropriate
            to the sensitivity of the information. No system is perfectly secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page
            shows when it was last revised.
          </p>
        </div>
      </Section>
    </>
  );
}
