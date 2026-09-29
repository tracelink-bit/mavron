import { ButtonLink, PageHero, Section } from "@/components/ui";
import { services } from "@/content/services";
import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="404"
        title="That page is not where the model said it would be."
        lead="Which is exactly the sort of thing we spend our working lives preventing. Here are some places that do exist."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact us
          </ButtonLink>
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="surface surface-hover rounded-sm px-5 py-4 text-sm text-steel-200"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
