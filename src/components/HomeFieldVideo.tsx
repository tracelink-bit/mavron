"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type HomeFieldVideoProps = {
  src: string;
  alt: string;
  label: string;
  videoSrc: string;
  index: number;
};

export function HomeFieldVideo({ src, alt, label, videoSrc, index }: HomeFieldVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  function playVideo() {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setShowVideo(false));
  }

  function stopVideo() {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setShowVideo(false);
  }

  return (
    <figure className="home-field-photo" data-reveal>
      <button
        className={`home-field-frame home-field-video-frame${showVideo ? " is-playing" : ""}`}
        type="button"
        aria-label={`${label}: ${showVideo ? "pause" : "play"} video`}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse" || event.pointerType === "pen") playVideo();
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== "touch") stopVideo();
        }}
        onBlur={stopVideo}
        onClick={(event) => {
          if (event.detail !== 0 && window.matchMedia("(hover: hover)").matches) return;
          if (videoRef.current?.paused) playVideo();
          else stopVideo();
        }}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={() => setShowVideo(true)}
          onError={() => setShowVideo(false)}
        />
        <span className="home-field-video-indicator" aria-hidden="true">Play footage</span>
      </button>
      <figcaption><span>{String(index + 1).padStart(2, "0")}</span><span>{label}</span></figcaption>
    </figure>
  );
}
