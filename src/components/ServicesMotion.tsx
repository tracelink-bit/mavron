"use client";

import { useEffect } from "react";

export function ServicesMotion() {
  useEffect(() => {
    const root = document.getElementById("mav-services");
    if (!root || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

    const panels = [...root.querySelectorAll<HTMLElement>("[data-service-panel]")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    panels.forEach((panel) => observer.observe(panel));
    root.dataset.motionReady = "true";

    return () => {
      observer.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);

  return null;
}
