"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type Lang, ui } from "@/lib/i18n";

type Photo = { src: string; alt: string };

/** Hero photos shown one at a time, cross-fading every few seconds. */
export function HeroCarousel({ photos, lang = "fr" }: { photos: Photo[]; lang?: Lang }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, photos.length]);

  return (
    <div
      className="lt-hero-media is-carousel"
      aria-roledescription="carrousel"
      aria-label={lang === "en" ? "Foundation photos" : "Photos de la Fondation"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((photo, photoIndex) => (
        <div
          className={`lt-hero-slide${photoIndex === index ? " on" : ""}`}
          key={photo.src}
          aria-hidden={photoIndex !== index}
          role="group"
          aria-roledescription="diapositive"
          aria-label={`${photoIndex + 1} ${ui[lang].of} ${photos.length}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={photoIndex === 0}
            sizes="(max-width: 980px) 100vw, 50vw"
            className="cover"
          />
        </div>
      ))}
    </div>
  );
}
