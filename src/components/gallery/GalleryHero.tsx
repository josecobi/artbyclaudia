"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface GalleryHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundAlt?: string;
}

/**
 * Premium Gallery Hero Section
 * Features:
 * - Stunning parallax background with landscape image
 * - Elegant gradient overlays
 * - Smooth scroll-based animations
 * - Fully responsive design
 * - Optimized for performance with Next/Image
 */
export function GalleryHero({
  title,
  description,
  backgroundImage,
  backgroundAlt = "Gallery background",
}: GalleryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect - background moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(400px, 70vh, 800px)" }}
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 h-[130%] w-full"
      >
        <div className="relative h-full w-full">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "center 40%",
            }}
          />
        </div>
      </motion.div>

      {/* Multi-layered Gradient Overlays for Artistic Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/50 via-transparent to-transparent" />

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl text-center">
          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              textShadow:
                "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3), 0 3px 6px rgba(0,0,0,0.6), 0 6px 16px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.2), 3px 3px 8px rgba(0,0,0,0.7)",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.15)",
            }}
          >
            {title}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/95 sm:text-xl md:text-2xl"
            style={{
              textShadow:
                "0 0 6px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4), 0 6px 16px rgba(0,0,0,0.3), 0 0 24px rgba(255,255,255,0.2), 1px 1px 4px rgba(0,0,0,0.6)",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.1)",
            }}
          >
            {description}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mx-auto mt-8 h-[2px] max-w-md bg-gradient-to-r from-transparent via-white/80 to-transparent"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex cursor-pointer hover:opacity-100 transition-opacity"
        onClick={() => {
          const heroHeight = containerRef.current?.offsetHeight || window.innerHeight * 0.7;
          window.scrollTo({
            top: heroHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span className="text-sm font-medium text-white/90 tracking-wider uppercase">
          Explore
        </span>
        <svg
          className="h-6 w-6 text-white/90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

      {/* Bottom Fade Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--color-bg-primary)]/60 to-transparent pointer-events-none" />
    </div>
  );
}
