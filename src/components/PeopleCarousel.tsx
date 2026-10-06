"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const portraits = [
  { slug: "hvac-r", title: "HVAC-R", line: "Performance in every space.", image: "/images/people/hvac-r.webp", alt: "Illustrative portrait of an HVAC technician beside rooftop equipment" },
  { slug: "plumbing", title: "Plumbing", line: "Built at every connection.", image: "/images/people/plumbing.webp", alt: "Illustrative portrait of a plumber in a commercial plant room" },
  { slug: "vdc-bim", title: "VDC / BIM", line: "Precision begins in the model.", image: "/images/people/vdc-bim.webp", alt: "Illustrative portrait of a mechanical design coordinator at work" },
  { slug: "prefabrication", title: "Prefabrication", line: "Made right before it reaches site.", image: "/images/people/prefabrication.webp", alt: "Illustrative portrait of a pipe fabrication specialist in a workshop" },
  { slug: "warranty-aftercare", title: "Warranty & Aftercare", line: "Care that carries on.", image: "/images/people/aftercare.webp", alt: "Illustrative portrait of a mechanical aftercare technician beside plant equipment" },
  { slug: "trade-partners", title: "Trade Partners", line: "Every trade working together.", image: "/images/people/trade-partners.webp", alt: "Illustrative portrait of a construction coordination lead on site" },
] as const;

const loopCards = [...portraits, ...portraits.slice(0, 4)];

export function PeopleCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [stride, setStride] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [focusPaused, setFocusPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const first = track?.querySelector<HTMLElement>(".portrait-card");
    if (!track || !first) return;
    const measure = () => setStride(first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || "0"));
    const observer = new ResizeObserver(measure);
    observer.observe(first);
    measure();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (focusPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (document.hidden || document.querySelector(".mav-home.motion-paused")) return;
      setIndex((current) => current + 1);
    }, 4100);
    return () => window.clearInterval(timer);
  }, [focusPaused, reducedMotion]);

  const goTo = (next: number) => {
    setAnimate(true);
    setIndex((next + portraits.length) % portraits.length);
  };

  const goNext = () => {
    setAnimate(true);
    setIndex((current) => reducedMotion ? (current + 1) % portraits.length : current + 1);
  };

  const goPrevious = () => {
    if (index % portraits.length === 0) {
      setAnimate(false);
      setIndex(portraits.length - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    } else {
      setAnimate(true);
      setIndex((current) => current - 1);
    }
  };

  const onSlideEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform" || index !== portraits.length) return;
    setAnimate(false);
    setIndex(0);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
  };

  return (
    <section className="people-carousel" aria-label="Mavron service portraits" aria-roledescription="carousel" onFocus={() => setFocusPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false); }}>
      <div className="people-carousel-heading home-pad">
        <div>
          <span className="people-carousel-kicker" data-reveal>THE CRAFT BEHIND THE WORK</span>
          <h2 data-reveal>People make<br />the difference.</h2>
        </div>
        <div className="people-carousel-intro" data-reveal>
          <p>Six connected disciplines. The knowledge and care to make every system work.</p>
          <div className="people-carousel-arrows">
            <button type="button" onClick={goPrevious} aria-label="Previous portrait">←</button>
            <button type="button" onClick={goNext} aria-label="Next portrait">→</button>
          </div>
        </div>
      </div>

      <div className="people-carousel-viewport">
        <div ref={trackRef} className={`people-carousel-track ${animate && !reducedMotion ? "is-animated" : ""}`} style={{ transform: `translate3d(${-index * stride}px, 0, 0)` }} onTransitionEnd={onSlideEnd} aria-live="off">
          {loopCards.map((portrait, position) => {
            const duplicate = position >= portraits.length;
            const active = position === index;
            const content = <>
              <Image src={portrait.image} alt={duplicate ? "" : portrait.alt} fill sizes="(max-width: 767px) 78vw, (max-width: 1100px) 35vw, 27vw" />
              <span className="portrait-card-shade" aria-hidden="true" />
              <span className="portrait-card-copy"><span className="portrait-card-number">0{position % portraits.length + 1} / 06</span><strong>{portrait.title}</strong><span>{portrait.line}</span></span>
            </>;
            return duplicate ? <div key={`copy-${portrait.slug}`} className={`portrait-card ${active ? "is-active" : ""}`} aria-hidden="true">{content}</div> : <Link key={portrait.slug} href={`/services/${portrait.slug}`} className={`portrait-card ${active ? "is-active" : ""}`} aria-label={`Explore ${portrait.title} services`}>{content}</Link>;
          })}
        </div>
      </div>

      <div className="people-carousel-bottom home-pad">
        <div className="people-carousel-progress" aria-label="Choose a portrait">
          {portraits.map((portrait, position) => <button key={portrait.slug} type="button" onClick={() => goTo(position)} aria-label={`Show ${portrait.title} portrait`} aria-current={index % portraits.length === position ? "true" : undefined} className={index % portraits.length === position ? "is-active" : ""} />)}
        </div>
        <p>Illustrative portraits · Explore our <Link href="/services">capabilities ↗</Link></p>
      </div>
    </section>
  );
}
