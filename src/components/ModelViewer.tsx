"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > &
        Record<string, unknown>;
    }
  }
}

type Props = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
  autoplay?: boolean;
};

const SCRIPT_SRC = "/vendor/model-viewer.min.js";

/**
 * Lazily mounts the self-hosted <model-viewer> web component.
 *
 * The 3D runtime is ~1MB, so nothing loads until the canvas is near the
 * viewport AND the browser is idle. Until then — and permanently for visitors
 * who prefer reduced motion, or whose browser has no WebGL — the static studio
 * render is shown instead. That render is the LCP element, so first paint never
 * waits on the 3D runtime.
 */
export function ModelViewer({
  src,
  poster,
  alt,
  className = "",
  autoplay = true,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || startedRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    try {
      const probe = document.createElement("canvas");
      if (!(probe.getContext("webgl2") ?? probe.getContext("webgl"))) return;
    } catch {
      return;
    }

    let alive = true;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const done = () => alive && setReady(true);

      const existing = document.querySelector<HTMLScriptElement>(
        'script[data-model-viewer="true"]'
      );
      if (existing) {
        if (existing.dataset.loaded === "true") done();
        else existing.addEventListener("load", done, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.type = "module";
      script.src = SCRIPT_SRC;
      script.dataset.modelViewer = "true";
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true";
          done();
        },
        { once: true }
      );
      document.head.appendChild(script);
    };

    const idle = (fn: () => void) => {
      const w = window as Window &
        typeof globalThis & {
          requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
        };
      if (typeof w.requestIdleCallback === "function") {
        w.requestIdleCallback(fn, { timeout: 2500 });
      } else {
        window.setTimeout(fn, 1200);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          idle(start);
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(host);

    return () => {
      alive = false;
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef} className={`relative ${className}`}>
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className={`object-cover transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {ready && (
        <model-viewer
          src={src}
          alt={alt}
          camera-controls=""
          touch-action="pan-y"
          shadow-intensity="1"
          exposure="1.05"
          environment-image="neutral"
          interaction-prompt="none"
          disable-zoom=""
          {...(autoplay ? { autoplay: "" } : {})}
          class="absolute inset-0 h-full w-full animate-fade"
          style={{ backgroundColor: "transparent" }}
        />
      )}
    </div>
  );
}
