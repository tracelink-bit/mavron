"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createMonogramRenderer } from "@/lib/monogram-renderer";

const clamp=(n:number)=>Math.max(0,Math.min(1,n));
const mix=(a:number,b:number,t:number)=>a+(b-a)*t;

export function HomeMotion({children}:{children:React.ReactNode}) {
  const root=useRef<HTMLDivElement>(null), sculpture=useRef<HTMLDivElement>(null), canvas=useRef<HTMLCanvasElement>(null);
  const heroVideo=useRef<HTMLVideoElement>(null), videoLoaded=useRef(false);
  const [paused,setPaused]=useState(false), [loadVideo,setLoadVideo]=useState(false);
  useEffect(()=> {
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer=window.setTimeout(()=>setLoadVideo(true),300);
    return()=>window.clearTimeout(timer);
  },[]);
  useEffect(()=> {
    const video=heroVideo.current;
    if(!loadVideo || !video) return;
    if(!videoLoaded.current){video.load();videoLoaded.current=true;}
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync=()=>{if(paused || media.matches || document.hidden)video.pause();else void video.play().catch(()=>{});};
    sync();
    media.addEventListener("change",sync);
    document.addEventListener("visibilitychange",sync);
    return()=>{media.removeEventListener("change",sync);document.removeEventListener("visibilitychange",sync);};
  },[loadVideo,paused]);
  useEffect(()=> {
    const el=root.current, figure=sculpture.current, surface=canvas.current;
    if(!el||!figure||!surface) return;
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced=media.matches, frame=0, active=true, last=0, time=0;
    const pointer={x:0,y:0}, smooth={x:0,y:0,scroll:window.scrollY};
    const renderer=createMonogramRenderer(surface,()=>figure.classList.add("is-rendered"));
    const sections={services:el.querySelector<HTMLElement>("#capabilities")!,about:el.querySelector<HTMLElement>("#our-story")!,method:el.querySelector<HTMLElement>("#method")!,benefits:el.querySelector<HTMLElement>("#benefits")!,footer:el.querySelector<HTMLElement>("#home-contact")!};
    const text=Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    const words=Array.from(el.querySelectorAll<HTMLElement>("[data-scroll-words]"));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12});
    el.classList.add("motion-enabled");text.forEach(t=>observer.observe(t));
    const change=()=>{reduced=media.matches;};
    const move=(event:PointerEvent)=>{pointer.x=(event.clientX/window.innerWidth-.5)*2;pointer.y=(event.clientY/window.innerHeight-.5)*2;};
    const visibility=()=>{active=!document.hidden;last=0;if(active)frame=requestAnimationFrame(draw);else cancelAnimationFrame(frame);};
    function draw(now:number) {
      if(!active) return;
      const dt=last?Math.min(now-last,40):16;last=now;
      if(!paused&&!reduced)time+=dt*.001;
      const vh=window.innerHeight, vw=window.innerWidth, mobile=vw<768, scroll=window.scrollY;
      smooth.scroll=mix(smooth.scroll,scroll,.1);smooth.x=mix(smooth.x,pointer.x,.045);smooth.y=mix(smooth.y,pointer.y,.045);
      const y=smooth.scroll;
      const about=sections.about.offsetTop, method=sections.method.offsetTop, benefits=sections.benefits.offsetTop, footer=sections.footer.offsetTop;
      let opacity=1,x=0,scale=1,vertical=0;
      const servicesProgress=clamp((y-vh*.35)/(about-vh*.9));
      scale=mix(1,.68,servicesProgress);x=mix(0,vw*.02,servicesProgress);
      if(y>about-vh)opacity=1-clamp((y-(about-vh))/(vh*.45));
      if(y>method-vh*.7&&y<benefits-vh*.3){
        opacity=clamp((y-(method-vh*.7))/(vh*.45));
        opacity*=1-clamp((y-(benefits-vh))/(vh*.6));
        x=mobile?-vw*.14:-vw*.19;scale=mobile?.68:.9;vertical=vh*.03;
      }
      if(y>footer-vh*.6){opacity=clamp((y-(footer-vh*.6))/(vh*.45));scale=mobile?.34:.40;x=-vw*.31;vertical=vh*.16;}
      if(mobile&&y>vh*.8&&y<method-vh*.7)opacity=0;
      figure!.style.opacity=String(opacity);
      figure!.style.transform=`translate3d(${x}px,${vertical}px,0) scale(${scale})`;
      if(opacity>.01) {
        const motion=paused||reduced?0:1;
        renderer?.render(motion*(Math.sin(time*.37)*.045+smooth.y*.065),motion*(Math.sin(time*.3)*.14+Math.sin(y/vh*1.6)*.38+smooth.x*.10),motion*(Math.sin(y/vh*.85)*-.065+Math.sin(time*.4)*.02));
      }
      words.forEach(block=> {
        const bounds=block.getBoundingClientRect();
        const progress=reduced?1:clamp((vh*.87-bounds.top)/(vh*.56));
        const spans=block.querySelectorAll<HTMLElement>(".scroll-word");
        spans.forEach((word,i)=>{const fill=clamp(progress*(spans.length+3)-i);word.style.opacity=String(.24+fill*.76);word.style.transform=`translateY(${reduced?0:(1-fill)*12}px)`;});
      });
      el!.style.setProperty("--hero-shift",`${reduced?0:Math.min(scroll*.10,80)}px`);
      frame=requestAnimationFrame(draw);
    }
    media.addEventListener("change",change);window.addEventListener("pointermove",move,{passive:true});document.addEventListener("visibilitychange",visibility);
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();renderer?.dispose();media.removeEventListener("change",change);window.removeEventListener("pointermove",move);document.removeEventListener("visibilitychange",visibility);};
  },[paused]);
  return <div ref={root} className={`mav-home ${paused?"motion-paused":""}`}>
    <div className="mav-hero-video" aria-hidden="true">
      <video ref={heroVideo} autoPlay={loadVideo&&!paused} muted loop playsInline preload="none" poster="/images/mavron-home-video-poster.webp">
        {loadVideo && <source src="/videos/mavron-home-hero.mp4" type="video/mp4" />}
      </video>
      <div className="mav-hero-video-shade" />
    </div>
    <div ref={sculpture} className="mav-sculpture" role="img" aria-label="Mavron red metal M, animated in perspective from the supplied artwork">
      <div className="mav-sculpture-fallback"><Image src="/images/mavron-original.png" alt="" fill priority sizes="70vw" /></div>
      <canvas ref={canvas} aria-hidden="true" />
    </div>
    {children}
    <button className="motion-toggle" onClick={()=>setPaused(v=>!v)} aria-pressed={paused} aria-label={paused?"Resume homepage motion":"Pause homepage motion"}>{paused?"▶":"Ⅱ"}<span>{paused?"Resume motion":"Pause motion"}</span></button>
  </div>;
}
