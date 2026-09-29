import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { HomeMotion } from "@/components/HomeMotion";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { graph, pageMeta, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Mechanical Contractor in British Columbia",
  description: "Mavron Protection Group designs, models, prefabricates, installs and maintains complete mechanical systems across British Columbia.",
  path: "/", keywords: ["mechanical contractor BC", "commercial plumbing", "HVAC-R", "VDC BIM", "prefabrication"],
});

function Arrow({className=""}:{className?:string}) { return <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.4" /></svg>; }
function SplitLink({href,children,outline=false}:{href:string;children:React.ReactNode;outline?:boolean}) {return <Link href={href} className={`split-link ${outline?"split-link-outline":""}`}><span>{children}</span><span><Arrow /></span></Link>;}
function Words({children}:{children:string}) {return <span data-scroll-words>{children.split(" ").map((word,i)=><span className="scroll-word" key={`${word}-${i}`}>{word}{" "}</span>)}</span>;}
const benefits = [
  ["One accountable team", "From early design to the final pressure test, your mechanical scope stays with people who know the whole project."],
  ["Precision before installation", "Coordinated digital models resolve the difficult details before they become difficult days on site."],
  ["Built better in the shop", "Prefabricated assemblies arrive tested, sequenced and ready. Less time at height. More certainty on the programme."],
  ["People who know the trade", "Experienced tradespeople, engineers and apprentices bring care and practical intelligence to every connection."],
  ["Support beyond handover", "Commissioning, maintenance and a dedicated aftercare team keep your building performing long after opening day."],
];

export default function HomePage() {
  return <HomeMotion>
    <JsonLd data={graph(faqSchema([{q:"What does Mavron do?",a:"Mavron delivers plumbing, HVAC-R, VDC/BIM, prefabrication and lifetime aftercare across British Columbia."}]))}/>
    <section className="mav-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-location"><span className="status-dot"/>Mechanical contracting · British Columbia</div>
      <div className="hero-outline" aria-hidden="true" />
      <h1 className="hero-title" id="hero-title"><span className="hero-title-left">Mechanical</span><span className="hero-title-right">Excellence.</span></h1>
      <div className="hero-bottom">
        <div className="hero-intro" data-reveal><p className="hero-promise">Built with precision.<br/>Built to hold.</p><p className="muted">Complete mechanical systems, from the first coordinated model to a lifetime of performance.</p><SplitLink href="/services">Explore our capabilities</SplitLink></div>
        <a href="#capabilities" className="scroll-down"><span>Scroll to explore</span><span>↓</span></a>
      </div>
      <div className="hero-index" aria-hidden="true">M / 01</div>
    </section>

    <section className="mav-capabilities home-pad" id="capabilities">
      <div className="section-label" data-reveal><span>01 / Our capabilities</span><span>Connected by design.</span></div>
      <h2 className="statement"><Words>Every system. Every connection. One accountable team.</Words></h2>
      <div className="service-columns">
        {[services.slice(0,3),services.slice(3,6)].map((column,c)=><div className="service-column" key={c}>{column.map((s,i)=><Link href={`/services/${s.slug}`} className="service-row" key={s.slug} data-reveal><div className="service-row-title"><span className="circle-number">0{c*3+i+1}</span><h3>{s.navLabel}</h3><Arrow/></div><div className="service-row-description"><span>Expertise</span><p>{s.summary}</p></div></Link>)}</div>)}
      </div>
      <div className="capabilities-note" data-reveal><p>From plumbing and climate control to digitally coordinated fabrication. The details work together. So do we.</p><Link href="/services" className="square-arrow" aria-label="Explore all services"><Arrow/></Link></div>
    </section>

    <section className="mav-story" id="our-story">
      <Image src="/images/construction.webp" alt="Tower cranes and a modern construction site against a copper sunset" fill sizes="100vw" className="story-image"/>
      <div className="story-shade" />
      <div className="story-top home-pad"><p className="section-label" data-reveal>● Who we are</p><h2><Words>Behind every great building is a system built to last.</Words></h2></div>
      <div className="story-bottom" data-reveal><p>We bring the thinking, the craft and the follow-through to complex mechanical projects.</p><SplitLink href="/about" outline>Meet Mavron</SplitLink></div>
      <span className="photo-caption">Precision at every scale.</span>
    </section>

    <section className="mav-method home-pad" id="method">
      <div className="section-label" data-reveal><span>02 / The Mavron method</span><span>Think ahead. Build better.</span></div>
      <h2 className="method-title"><Words>First, we build it in the model. Then, we make it real.</Words></h2>
      <div className="method-copy" data-reveal><span className="small-label">From digital precision to physical craft</span><p>Plan. Coordinate.<br/>Fabricate. Deliver.</p><div className="muted">Every connection is considered before a crew touches the building. Our coordinated models become tested assemblies, efficient installations and systems that perform.</div><SplitLink href="/process" outline>Discover our process</SplitLink></div>
      <div className="method-footnote">A shared model.<br/>A complete mechanical vision.</div>
    </section>

    <section className="mav-benefits" id="benefits">
      <div className="benefits-heading"><span className="small-label" data-reveal>03 / A better way to build</span><h2><span data-reveal>The value</span><span data-reveal>of Mavron.</span></h2></div>
      <ol className="benefits-list">{benefits.map(([title,body],i)=><li key={title} data-reveal><span className="circle-number">{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      <div className="benefits-bottom"><span>Designed with purpose. Delivered with care.</span><Link href="/contact">Let’s talk <Arrow/></Link></div>
    </section>

    <section className="home-image-grid home-pad" aria-label="Explore our work and people">
      <Link className="home-image-card" href="/projects"><Image src="/images/mechanical.webp" alt="Precision pipework and red valves in a commercial mechanical plant room" fill sizes="(max-width:767px) 100vw, 50vw"/><div className="card-shade"/><div className="image-card-top"><h2 data-reveal>Our work.</h2><span className="round-arrow"><Arrow/></span></div><div className="image-card-bottom"><span className="small-label">Systems that make buildings work</span><p>Complex projects.<br/>Considered solutions.</p></div></Link>
      <Link className="home-image-card" href="/culture"><Image src="/images/fabrication.webp" alt="A fabricator in protective equipment welding a steel pipe assembly" fill sizes="(max-width:767px) 100vw, 50vw"/><div className="card-shade"/><div className="image-card-top"><h2 data-reveal>Our people.</h2><span className="round-arrow"><Arrow/></span></div><div className="image-card-bottom"><span className="small-label">The craft behind every connection</span><p>Built by people<br/>who care.</p></div></Link>
    </section>

    <footer className="mav-home-footer home-pad" id="home-contact">
      <div className="footer-top"><a className="back-top" href="#top"><span className="round-arrow">↑</span>Back to top</a><div className="footer-contact-intro"><span className="small-label">Start a conversation</span><a href={`mailto:${site.email}`}>{site.email}</a></div><nav aria-label="Footer"><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/culture">Culture</Link><Link href="/process">Our process</Link><Link href="/careers">Careers</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></nav></div>
      <div className="footer-main"><span className="footer-wordmark">MAVRON<span>PROTECTION GROUP</span></span><div className="footer-cta"><h2 data-reveal>Let’s build<br/>what comes next.</h2><SplitLink href="/contact">Start your project</SplitLink></div></div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} Mavron Protection Group</span><Link href="/privacy">Privacy policy</Link><span>Built to hold.</span></div>
    </footer>
  </HomeMotion>;
}
