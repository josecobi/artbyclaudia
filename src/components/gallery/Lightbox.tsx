"use client";

import ReactLightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryImage } from "@/data/galleries";

interface LightboxProps {
  images: GalleryImage[];
  open: boolean;
  index: number;
  onClose: () => void;
}

/**
 * Lightbox component for full-screen image viewing
 * Features:
 * - Full-screen overlay with smooth transitions
 * - Prev/Next navigation with keyboard support
 * - Image counter display
 * - Close button and ESC key support
 * - Theme-aware styling
 * - Touch gestures for mobile
 */
export function Lightbox({ images, open, index, onClose }: LightboxProps) {
  // Convert gallery images to lightbox format
  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  }));

  return (
    <ReactLightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      carousel={{
        finite: images.length <= 1,
      }}
      render={{
        buttonPrev: images.length <= 1 ? () => null : undefined,
        buttonNext: images.length <= 1 ? () => null : undefined,
      }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
      }}
      animation={{
        fade: 300,
        swipe: 300,
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
        },
      }}
    />
  );
}
