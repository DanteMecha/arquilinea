"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/dictionary";
import type { GalleryImage } from "@/data/editions";

type GalleryProps = {
  images: GalleryImage[];
  locale: Locale;
  width: number;
  height: number;
};

export function Gallery({ images, locale, width, height }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  if (!active) {
    return null;
  }

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img
          src={active.src}
          alt={active.alt[locale]}
          width={width}
          height={height}
        />
      </div>

      <div className="gallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => setActiveIndex(index)}
            aria-label={image.alt[locale]}
            aria-pressed={index === activeIndex}
          >
            <img src={image.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
