import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { HomeMotion } from "@/components/HomeMotion";
import { PeopleCarousel } from "@/components/PeopleCarousel";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { graph, pageMeta, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Mechanical Contractor in British Columbia",
  description: "Mavron Mechanical Group designs, installs, commissions and maintains complete mechanical systems across British Columbia.",
  path: "/", keywords: ["mechanical contractor BC", "HVAC-R", "commercial plumbing", "mechanical commissioning", "building maintenance"],
});

function Arrow({className=""}:{className?:string}) { return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.4" /></svg>; }
function SplitLink({href,children,outline=false}:{href:string;children:React.ReactNode;outline?:boolean}) {return <Link href={href} className={`split-link ${outline?"split-link-outline":""}`}><span>{children}</span><span><Arrow /></span></Link>;}
function Words({children}:{children:string}) {return <span data-scroll-words>{children.split(" ").map((word,i)=><span className="scroll-word" key={`${word}-${i}`}>{word}{" "}</span>)}</span>;}
const fieldPhotos = [
  { src: "/images/home-field/installation-overhead.webp", alt: "Illustrative view of a mechanic on a scissor lift inspecting overhead mechanical pipework", label: "Overhead installation" },
  { src: "/images/home-field/commissioning-inspection.webp", alt: "Illustrative view of an HVAC technician inspecting an open air-handling unit", label: "System inspection" },
  { src: "/images/home-field/air-distribution.webp", alt: "Illustrative view of suspended fabric-jacketed air distribution ducts", label: "Air distribution" },
  { src: "/images/home-field/installation-team.webp", alt: "Illustrative view of two mechanics installing supported overhead pipework", label: "Coordinated installation" },
  { src: "/images/home-field/rooftop-unit.webp", alt: "Illustrative view of tradespeople positioning a rooftop HVAC unit", label: "Rooftop plant" },
  { src: "/images/home-field/commissioning-gauges.webp", alt: "Illustrative view of a technician checking HVAC commissioning gauges", label: "Testing and balancing" },
];

export default function HomePage() {
  return <HomeMotion>
    <JsonLd data={graph(faqSchema([{q:"What does Mavron do?",a:"Mavron delivers HVAC-R, plumbing, trade partner coordination and lifetime aftercare across British Columbia."}]))}/>
    <section className="mav-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-location"><span className="status-dot"/>Mechanical contracting · British Columbia</div>
      <div className="hero-outline" aria-hidden="true" />
      <h1 className="hero-title" id="hero-title"><span className="hero-title-left">Mechanical</span><span className="hero-title-right">Excellence.</span></h1>
      <div className="hero-bottom">
        <div className="hero-intro" data-reveal><p className="hero-promise">Commercial HVAC-R.<br/>Built to perform.</p><p className="muted">Heating, cooling, ventilation and refrigeration, coordinated from design through commissioning.</p><SplitLink href="/contact">Discuss an HVAC-R project</SplitLink></div>
        <a href="#hvac-r" className="scroll-down"><span>Scroll to explore</span><span>↓</span></a>
      </div>
      <div className="hero-index" aria-hidden="true">M / 01</div>
    </section>

    <section className="services-marquee" aria-label="Mavron services">
      <div className="services-marquee-track">
        <ul className="services-marquee-set">
          {services.map((service) => (
            <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.navLabel}</Link></li>
          ))}
        </ul>
        <ul className="services-marquee-set" aria-hidden="true">
          {services.map((service) => (
            <li key={service.slug}><span>{service.navLabel}</span></li>
          ))}
        </ul>
      </div>
    </section>

    <section className="home-field-gallery" id="hvac-r" aria-labelledby="field-gallery-title">
      <div className="home-field-heading">
        <div>
          <p className="home-field-kicker" data-reveal>01 / HVAC-R in focus</p>
          <h2 id="field-gallery-title" data-reveal>Built for the way buildings work.</h2>
        </div>
        <div className="home-field-intro" data-reveal>
          <p>From plant rooms and rooftop units to air distribution and final balancing, we bring the full HVAC-R scope together with one accountable team.</p>
          <div className="home-field-actions">
            <SplitLink href="/contact">Discuss an HVAC-R project</SplitLink>
            <Link href="/services/hvac-r" className="home-field-secondary">Explore our HVAC-R scope <Arrow /></Link>
          </div>
        </div>
      </div>
      <div className="home-field-grid">
        {fieldPhotos.map((photo, index) => (
          <figure className="home-field-photo" key={photo.src} data-reveal>
            <div className="home-field-frame">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" />
            </div>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><span>{photo.label}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="home-field-note">Illustrative scenes of HVAC-R and mechanical work; these are not photographs of Mavron projects.</p>
    </section>

    <section className="mav-capabilities home-pad" id="capabilities">
      <div className="section-label" data-reveal><span>02 / Our capabilities</span><span>Connected by design.</span></div>
      <h2 className="statement"><Words>Every system. Every connection. One accountable team.</Words></h2>
      <div className="service-columns">
        {[services.slice(0,2),services.slice(2,4)].map((column,c)=><div className="service-column" key={c}>{column.map((s,i)=><Link href={`/services/${s.slug}`} className="service-row" key={s.slug} data-reveal><div className="service-row-title"><span className="circle-number">0{c*2+i+1}</span><h3>{s.navLabel}</h3><Arrow/></div><div className="service-row-description"><span>Expertise</span><p>{s.summary}</p></div></Link>)}</div>)}
      </div>
      <div className="capabilities-note" data-reveal><p>From climate control and plumbing to ongoing building care. The details work together. So do we.</p><Link href="/services" className="square-arrow" aria-label="Explore all services"><Arrow/></Link></div>
    </section>

    <section className="mav-story" id="our-story">
      <Image src="/images/construction.webp" alt="Tower cranes and a modern construction site against a copper sunset" fill sizes="100vw" className="story-image"/>
      <div className="story-shade" />
      <div className="story-top home-pad"><p className="section-label" data-reveal>● Who we are</p><h2><Words>Behind every great building is a system built to last.</Words></h2></div>
      <div className="story-bottom" data-reveal><p>We bring the thinking, the craft and the follow-through to complex mechanical projects.</p><SplitLink href="/about" outline>Meet Mavron</SplitLink></div>
      <span className="photo-caption">Precision at every scale.</span>
    </section>

    <PeopleCarousel />

    <section className="mav-method home-pad" id="method">
      <div className="section-label" data-reveal><span>03 / The Mavron method</span><span>Think ahead. Build better.</span></div>
      <h2 className="method-title"><Words>Plan with care. Install with precision. Prove performance.</Words></h2>
      <div className="method-copy" data-reveal><span className="small-label">From first plan to lasting performance</span><p>Plan. Install.<br/>Commission. Care.</p><div className="muted">Every connection is considered before a crew touches the building. Our crews turn careful planning into efficient installations and systems that perform.</div><SplitLink href="/process" outline>Discover our process</SplitLink></div>
      <div className="method-footnote">One accountable team.<br/>A complete mechanical vision.</div>
    </section>

    <footer className="mav-home-footer home-pad" id="home-contact">
      <div className="footer-top"><a className="back-top" href="#top"><span className="round-arrow">↑</span>Back to top</a><div className="footer-contact-intro"><span className="small-label">Start a conversation</span><a href={`mailto:${site.email}`}>{site.email}</a></div><nav aria-label="Footer"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/culture">Culture</Link><Link href="/process">Our process</Link><Link href="/careers">Careers</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></nav></div>
      <div className="footer-main"><Image src="/brand/mavron-logo-white.svg" alt="Mavron Mechanical Group" width={670} height={500} className="home-footer-brand"/><div className="footer-cta"><h2 data-reveal>Let’s build<br/>what comes next.</h2><SplitLink href="/contact">Start your project</SplitLink></div></div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} Mavron Mechanical Group</span><Link href="/privacy">Privacy policy</Link><span>Built to hold.</span></div>
      <div className="footer-giant-signoff" aria-label="Mavron Mechanical Group">
        <div className="footer-giant-top"><span>Mechanical excellence, built to last.</span><span>British Columbia · Canada</span></div>
        <div className="footer-giant-wordmark" data-reveal><Image src="/brand/mavron-wordmark-black.svg" alt="Mavron" width={665} height={160} sizes="100vw" /></div>
        <div className="footer-giant-bottom"><span>Mavron Mechanical Group</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  </HomeMotion>;
}
