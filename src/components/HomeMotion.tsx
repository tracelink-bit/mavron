"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createMonogramRenderer } from "@/lib/monogram-renderer";

const clamp=(n:number)=>Math.max(0,Math.min(1,n));

export function HomeMotion({children}:{children:React.ReactNode}) {
  const root=useRef<HTMLDivElement>(null), sculpture=useRef<HTMLDivElement>(null), canvas=useRef<HTMLCanvasElement>(null);
  const heroVideo=useRef<HTMLVideoElement>(null), videoLoaded=useRef(false);
  const [paused,setPaused]=useState(false), [loadVideo,setLoadVideo]=useState(false);
  const [introPhase,setIntroPhase]=useState<"show"|"exit"|"done">("show");
  const introDone=introPhase==="done";
  useEffect(()=> {
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exit=window.setTimeout(()=>setIntroPhase("exit"),reduced?350:1550);
    const done=window.setTimeout(()=>setIntroPhase("done"),reduced?700:2250);
    return()=>{window.clearTimeout(exit);window.clearTimeout(done);};
  },[]);
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
    if(introDone) return;
    const figure=sculpture.current, surface=canvas.current;
    if(!figure||!surface) return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer=createMonogramRenderer(surface,()=>figure.classList.add("is-rendered"));
    let frame=0;
    const start=performance.now();
    const draw=(now:number)=>{
      const time=(now-start)*.001;
      renderer?.render(reduced?0:Math.sin(time*1.2)*.045,reduced?0:Math.sin(time*.9)*.13,0);
      frame=requestAnimationFrame(draw);
    };
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);renderer?.dispose();};
  },[introDone]);
  useEffect(()=> {
    const el=root.current;
    if(!el) return;
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced=media.matches, frame=0, active=true;
    const text=Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    const words=Array.from(el.querySelectorAll<HTMLElement>("[data-scroll-words]"));
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12});
    el.classList.add("motion-enabled");text.forEach(t=>observer.observe(t));
    const change=()=>{reduced=media.matches;};
    const visibility=()=>{active=!document.hidden;if(active)frame=requestAnimationFrame(draw);else cancelAnimationFrame(frame);};
    function draw() {
      if(!active) return;
      const vh=window.innerHeight, scroll=window.scrollY;
      words.forEach(block=> {
        const bounds=block.getBoundingClientRect();
        const progress=reduced?1:clamp((vh*.87-bounds.top)/(vh*.56));
        const spans=block.querySelectorAll<HTMLElement>(".scroll-word");
        spans.forEach((word,i)=>{const fill=clamp(progress*(spans.length+3)-i);word.style.opacity=String(.24+fill*.76);word.style.transform=`translateY(${reduced?0:(1-fill)*12}px)`;});
      });
      el!.style.setProperty("--hero-shift",`${reduced?0:Math.min(scroll*.10,80)}px`);
      frame=requestAnimationFrame(draw);
    }
    media.addEventListener("change",change);document.addEventListener("visibilitychange",visibility);
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();media.removeEventListener("change",change);document.removeEventListener("visibilitychange",visibility);};
  },[paused]);
  return <div ref={root} className={`mav-home ${paused?"motion-paused":""} ${!introDone?"intro-active":""}`}>
    {!introDone && <div className={`mav-intro ${introPhase==="exit"?"is-exiting":""}`} aria-hidden="true">
      <div ref={sculpture} className="mav-intro-mark" role="img" aria-label="Mavron copper M">
        <div className="mav-intro-fallback"><Image src="/brand/mavron-mark-white.svg" alt="" fill priority sizes="70vw" /></div>
        <canvas ref={canvas} aria-hidden="true" />
      </div>
      <span className="mav-intro-caption">MAVRON <span>MECHANICAL GROUP</span></span>
    </div>}
    <div className="mav-hero-video" aria-hidden="true">
      <video ref={heroVideo} autoPlay={loadVideo&&!paused} muted loop playsInline preload="none" poster="/images/mavron-home-video-poster.webp">
        {loadVideo && <source src="/videos/mavron-home-hero.mp4" type="video/mp4" />}
      </video>
      <div className="mav-hero-video-shade" />
    </div>
    {children}
    <button className="motion-toggle" onClick={()=>setPaused(v=>!v)} aria-pressed={paused} aria-label={paused?"Resume homepage motion":"Pause homepage motion"}>{paused?"▶":"Ⅱ"}<span>{paused?"Resume motion":"Pause motion"}</span></button>
  </div>;
}
