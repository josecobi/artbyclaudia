"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import { carouselSlides } from "@/data/carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Hero Carousel Component
 * Features:
 * - Full viewport height with responsive adjustments
 * - Autoplay with 5s delay, pauses on hover
 * - Fade transition effect
 * - Subtle parallax scroll effect
 * - Elegant navigation arrows and pagination dots
 * - Theme-aware overlay and text
 * - Optimized images with Next/Image
 */
export function HeroCarousel() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect: slower scroll for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch
    return (
      <div className="h-[95vh] w-full bg-[var(--color-bg-secondary)] animate-pulse" />
    );
  }

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      {/* Parallax container */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: false,
          }}
          speed={1200}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          className="h-full w-full"
        >
          {carouselSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                {/* Blurred background image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    priority={slide.id === "1"}
                    quality={50}
                    sizes="100vw"
                    className="object-cover blur-2xl scale-110"
                    aria-hidden="true"
                  />
                </div>

                {/* Main image (full artwork visible) */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={slide.id === "1"}
                    quality={90}
                    sizes="100vw"
                    className="object-contain"
                  />
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
                              textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.9), 0 8px 16px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1)',
                              WebkitTextStroke: '1px rgba(0,0,0,0.5)'
                            }}>
                          {slide.title}
                        </h2>
                      )}
                      {slide.subtitle && (
                        <p className="slide-text-subtitle text-lg text-white sm:text-xl md:text-2xl"
                           style={{
                             textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7), 1px 1px 3px rgba(0,0,0,1)',
                             WebkitTextStroke: '0.5px rgba(0,0,0,0.5)'
                           }}>
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Custom Navigation Arrows */}
      <button
        className="swiper-button-prev-custom group absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-6 md:left-8"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6 text-white transition-transform group-hover:-translate-x-1 sm:h-8 sm:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="swiper-button-next-custom group absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6 md:right-8"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6 text-white transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination-custom absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-12" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex sm:bottom-12"
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
