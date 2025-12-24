"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { GalleryImage } from "@/data/galleries";
import { Lightbox } from "./Lightbox";

interface MasonryGalleryProps {
  images: GalleryImage[];
}

/**
 * Masonry Gallery Component
 * Features:
 * - Responsive masonry layout with breakpoint columns
 * - Hover effects with zoom and overlay
 * - Click to open lightbox
 * - Lazy loading images
 * - Stagger fade-in animation on load
 * - Theme-aware styling
 * - Fully accessible
 */
export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  // Responsive breakpoints for masonry columns
  const breakpointColumnsObj = {
    default: 4,
    1536: 3,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.alt} in lightbox`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
          >
            {/* Image container with hover effect */}
            <div className="relative overflow-hidden rounded-lg bg-[var(--color-bg-secondary)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-auto w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* View icon on hover */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                  <svg
                    className="h-6 w-6 text-[var(--color-text-primary-dark)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Focus ring for accessibility */}
              <div className="absolute inset-0 rounded-lg ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg-primary)] opacity-0 transition-opacity group-focus-visible:opacity-100" />
            </div>
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <Lightbox
        images={images}
        open={lightboxOpen}
        index={photoIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Masonry grid styles */}
      <style jsx global>{`
        .masonry-grid {
          display: flex;
          margin-left: -1rem;
          width: auto;
        }

        .masonry-grid-column {
          padding-left: 1rem;
          background-clip: padding-box;
        }

        .masonry-grid-column > div {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
