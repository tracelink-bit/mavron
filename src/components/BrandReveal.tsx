import Image from "next/image";

export function BrandReveal() {
  return (
    <section className="brand-reveal" aria-label="Mavron Mechanical Group">
      <div className="brand-reveal-sticky">
        <p className="brand-reveal-kicker">Mechanical excellence, built to last.</p>
        <Image
          src="/brand/mavron-wordmark-black.svg"
          alt="Mavron Mechanical Group"
          width={1995}
          height={480}
          sizes="100vw"
          className="brand-reveal-wordmark"
        />
        <div className="brand-reveal-bottom"><span>British Columbia · Canada</span><span>Built to hold.</span></div>
      </div>
    </section>
  );
}
