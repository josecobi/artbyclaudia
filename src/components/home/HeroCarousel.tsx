"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import { carouselSlides } from "@/data/carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

/**
 * Hero Carousel Component
 * Features:
 * - Full viewport height with responsive adjustments
 * - Autoplay with 7s delay, pauses on hover
 * - Smooth 1.2s fade transition (Tesla-style)
 * - Mobile: Cinematic zoom effect (alternating zoom in/out)
 * - Desktop: Ken Burns pan effect (vertical panning)
 * - Subtle parallax scroll effect
 * - Elegant pagination dots
 * - Theme-aware overlay and text
 * - Optimized images with Next/Image
 */
export function HeroCarousel() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effect: slower scroll for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative h-[calc(100vh-4rem)] md:h-[95vh] w-full overflow-hidden">
      {/* Parallax container - disabled on mobile */}
      <motion.div
        style={{ y: isMobile ? 0 : y }}
        className="absolute inset-0 w-full h-full md:h-[120%]"
      >
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
          speed={1200}
          loop={true}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          className="h-full w-full"
        >
          {carouselSlides.map((slide, index) => {
            // Use mobile image if available and on mobile
            const imageSrc = isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src;
            const hasBottomRightZoom = isMobile && slide.mobileZoomFocus === 'bottom-right';

            // Custom pan directions based on image
            let panDirection;
            if (slide.src.includes("humanandnature_06")) {
              panDirection = "down";
            } else if (slide.src.includes("humanandnature_10")) {
              panDirection = "down";
            } else {
              panDirection = index % 2 === 0 ? "up" : "down";
            }

            return (
            <SwiperSlide
              key={slide.id}
              data-pan={panDirection}
              data-zoom-focus={hasBottomRightZoom ? 'bottom-right' : undefined}
            >
              <div className="relative h-full w-full">
                {/* Blurred background image - no Ken Burns, always fills viewport */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    priority={slide.id === "1"}
                    quality={50}
                    sizes="100vw"
                    className="object-cover blur-3xl scale-110"
                    style={hasBottomRightZoom ? { objectPosition: 'right bottom' } : undefined}
                    aria-hidden="true"
                  />
                </div>

                {/* Main image - Mobile: cinematic zoom, Desktop: Ken Burns pan */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="ken-burns-wrapper absolute inset-0">
                    <Image
                      src={imageSrc}
                      alt={slide.alt}
                      fill
                      priority={slide.id === "1"}
                      quality={90}
                      sizes="100vw"
                      className="object-cover md:object-contain"
                      style={hasBottomRightZoom ? { objectPosition: 'right bottom' } : undefined}
                    />
                  </div>
                </div>

                {/* Theme-aware gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 dark:from-black/40 dark:via-transparent dark:to-black/50" />

                {/* Slide content */}
                {(slide.title || slide.subtitle) && (
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="max-w-4xl text-center">
                      {slide.title && (
                        <h2 className="slide-text-title mb-4 font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                            style={{
                              textShadow: '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.4), 0 0 32px rgba(255,255,255,0.2), 2px 2px 6px rgba(0,0,0,0.7)',
                              WebkitTextStroke: '0.5px rgba(0,0,0,0.15)'
                            }}>
                          {slide.title}
                        </h2>
                      )}
                      {slide.subtitle && (
                        <p className="slide-text-subtitle text-lg text-white sm:text-xl md:text-2xl"
                           style={{
                             textShadow: '0 0 6px rgba(255,255,255,0.4), 0 0 12px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.4), 0 6px 16px rgba(0,0,0,0.3), 0 0 24px rgba(255,255,255,0.2), 1px 1px 4px rgba(0,0,0,0.6)',
                             WebkitTextStroke: '0.5px rgba(0,0,0,0.1)'
                           }}>
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination-custom absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex sm:bottom-8 cursor-pointer hover:opacity-100 transition-opacity"
        onClick={() => {
          const heroHeight = isMobile ? window.innerHeight - 64 : window.innerHeight * 0.95;
          window.scrollTo({
            top: heroHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span className="text-sm text-white/80">Scroll</span>
        <svg
          className="h-6 w-6 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* Custom styles for pagination bullets and animations */}
      <style jsx global>{`
        @keyframes slideTextFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Cinematic zoom effect for mobile */
        @keyframes cinematicZoomIn {
          0% {
            transform: scale(1.0);
          }
          100% {
            transform: scale(1.15);
          }
        }

        @keyframes cinematicZoomOut {
          0% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.0);
          }
        }

        /* Bottom-right zoom focus for specific images */
        @keyframes cinematicZoomBottomRight {
          0% {
            transform: scale(1.0);
          }
          100% {
            transform: scale(1.35);
          }
        }

        /* Ken Burns pan effect for desktop */
        @keyframes kenBurnsPanUp {
          0% {
            transform: scale(1.3) translateY(0%);
          }
          100% {
            transform: scale(1.3) translateY(-25%);
          }
        }

        @keyframes kenBurnsPanDown {
          0% {
            transform: scale(1.3) translateY(-25%);
          }
          100% {
            transform: scale(1.3) translateY(0%);
          }
        }

        .swiper-slide-active .slide-text-title {
          animation: slideTextFadeIn 0.8s ease-out 0.2s both;
        }

        .swiper-slide-active .slide-text-subtitle {
          animation: slideTextFadeIn 0.8s ease-out 0.4s both;
        }

        .swiper-slide:not(.swiper-slide-active) .slide-text-title,
        .swiper-slide:not(.swiper-slide-active) .slide-text-subtitle {
          opacity: 0;
        }

        /* MOBILE: Cinematic zoom effect (below 768px) */
        @media (max-width: 767px) {
          .ken-burns-wrapper {
            transform: scale(1.0);
            will-change: transform;
            transform-origin: center center;
          }

          /* Bottom-right zoom focus (overrides default zoom) */
          .swiper-slide[data-zoom-focus="bottom-right"] .ken-burns-wrapper {
            transform-origin: 75% 75%;
          }

          .swiper-slide-active[data-zoom-focus="bottom-right"] .ken-burns-wrapper {
            animation: cinematicZoomBottomRight 7000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          /* Keep final state for bottom-right zoom on non-active slides */
          .swiper-slide:not(.swiper-slide-active)[data-zoom-focus="bottom-right"] .ken-burns-wrapper {
            transform: scale(1.35);
            animation: none;
          }

          /* All regular slides zoom in (simplified for smooth transitions) */
          .swiper-slide-active:not([data-zoom-focus]) .ken-burns-wrapper {
            animation: cinematicZoomIn 7000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          /* Keep final scale on non-active slides to prevent snap-back during transition */
          .swiper-slide:not(.swiper-slide-active):not([data-zoom-focus]) .ken-burns-wrapper {
            transform: scale(1.15);
            animation: none;
          }
        }

        /* DESKTOP: Ken Burns pan effect (768px and above) */
        @media (min-width: 768px) {
          /* Default: Pan Down slides start showing BOTTOM */
          .ken-burns-wrapper {
            transform: scale(1.3) translateY(-25%);
          }

          /* Pan Up slides start at center */
          .swiper-slide[data-pan="up"] .ken-burns-wrapper {
            transform: scale(1.3) translateY(0%);
          }

          /* Apply Pan Down animation */
          .swiper-slide-active[data-pan="down"] .ken-burns-wrapper {
            animation: kenBurnsPanDown 6000ms ease-in-out 1000ms forwards;
          }

          /* Apply Pan Up animation */
          .swiper-slide-active[data-pan="up"] .ken-burns-wrapper {
            animation: kenBurnsPanUp 6000ms ease-in-out 1000ms forwards;
          }

          /* Keep final position on previous slide during fade-out */
          /* Pan Down slides end at center */
          .swiper-slide-prev[data-pan="down"] .ken-burns-wrapper,
          .swiper-slide-duplicate-prev[data-pan="down"] .ken-burns-wrapper {
            transform: scale(1.3) translateY(0%);
          }

          /* Pan Up slides end showing BOTTOM */
          .swiper-slide-prev[data-pan="up"] .ken-burns-wrapper,
          .swiper-slide-duplicate-prev[data-pan="up"] .ken-burns-wrapper {
            transform: scale(1.3) translateY(-25%);
          }
        }

        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-active-custom {
          background: white;
          width: 28px;
          border-radius: 5px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 12px;
            height: 12px;
          }

          .swiper-pagination-bullet-active-custom {
            width: 32px;
          }
        }
      `}</style>
    </div>
  );
}
