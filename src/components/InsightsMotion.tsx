"use client";

import { useEffect } from "react";

export function InsightsMotion() {
  useEffect(() => {
    const root = document.getElementById("mav-insights");
    if (!root) return;

    const panels = [...root.querySelectorAll<HTMLElement>("[data-insight-panel]")];
    const reveals = [...root.querySelectorAll<HTMLElement>("[data-insight-reveal]")];
    const links = [...root.querySelectorAll<HTMLAnchorElement>("[data-insight-nav]")];
    const motionAllowed = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) (entry.target as HTMLElement).dataset.visible = "true";
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    panels.forEach((panel) => revealObserver.observe(panel));
    reveals.forEach((element) => revealObserver.observe(element));

    let frame = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight * 0.52;
      const nearest = panels.reduce<{ id: string; distance: number } | null>((best, panel) => {
        const rect = panel.getBoundingClientRect();
        const distance = Math.abs((rect.top + rect.bottom) / 2 - center);
        return !best || distance < best.distance ? { id: panel.id, distance } : best;
      }, null);
      links.forEach((link) => {
        if (link.dataset.insightNav === nearest?.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });

      if (motionAllowed) {
        const hero = root.querySelector<HTMLElement>("[data-insight-hero]");
        if (hero) hero.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.13, 130)}px`);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    if (motionAllowed) root.dataset.motionReady = "true";

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
