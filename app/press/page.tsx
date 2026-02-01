"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import MagazineArticle from "@/components/press/MagazineArticle";

/**
 * Press Page
 * Showcases Z!NK Magazine feature with premium layout
 * Features large-format magazine spreads with elegant presentation
 */
export default function PressPage() {
  const pressImages = [
    {
      src: "/images/press/zink-mag-comp-21.jpg",
      alt: "Z!NK Magazine feature on Claudia Humburg - Page 2",
      aspectRatio: "aspect-[1244/768]", // Match actual image dimensions
    },
    {
      src: "/images/press/TVY6330.jpg",
      alt: "Z!NK Magazine feature showcasing Claudia Humburg's avant-garde environmental art",
      aspectRatio: "aspect-16/10",
    },
  ];

  // Scroll tracking for parallax effect
  useEffect(() => {
    const root = document.documentElement;
    let scrollPos = 0;
    let rafId: number;

    function animation() {
      const newPos = document.documentElement.scrollTop;
      if (scrollPos !== newPos) {
        scrollPos = newPos;
        root.style.setProperty('--scrollPos', scrollPos + 'px');
      }
      rafId = window.requestAnimationFrame(animation);
    }

    rafId = window.requestAnimationFrame(animation);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Parallax Background Layer - nature.jpg */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: 'translateY(calc(var(--scrollPos, 0px) * 0.4))',
          }}
        >
          <Image
            src="/images/press/nature.png"
            alt="Nature background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Parallax Foreground Layer - humans.svg - Golden ratio positioning (61.8%) */}
        <div
          className="absolute inset-0 flex items-end will-change-transform"
          style={{
            transform: 'translateY(calc(var(--scrollPos, 0px) * 0.15))',
            paddingLeft: '61.8%',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/press/humans-inset.svg"
            alt="Human forms in nature"
            className="h-[90%] w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-white opacity-10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Scattered decorative dots */}
        {[
          { left: 15, top: 25, opacity: 0.3, yOffset: -25, duration: 5, delay: 0.2 },
          { left: 85, top: 35, opacity: 0.4, yOffset: -30, duration: 6, delay: 0.8 },
          { left: 25, top: 70, opacity: 0.25, yOffset: -20, duration: 4.5, delay: 1.2 },
          { left: 75, top: 60, opacity: 0.35, yOffset: -35, duration: 7, delay: 0.5 },
          { left: 45, top: 15, opacity: 0.3, yOffset: -28, duration: 5.5, delay: 1.5 },
          { left: 60, top: 80, opacity: 0.4, yOffset: -22, duration: 6.5, delay: 0.3 },
          { left: 10, top: 50, opacity: 0.28, yOffset: -32, duration: 4, delay: 1.8 },
          { left: 90, top: 20, opacity: 0.32, yOffset: -26, duration: 5.8, delay: 0.6 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              opacity: dot.opacity,
            }}
            animate={{
              y: [0, dot.yOffset, 0],
              opacity: [dot.opacity, dot.opacity + 0.15, dot.opacity],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Press Badge */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-[var(--color-accent)]/25">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                </svg>
                Featured in Z!NK Magazine
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-6 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)'
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Press & Recognition
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.5)'
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Claudia Humburg&apos;s groundbreaking environmental art has garnered international
              attention. Featured in Z!NK Magazine, her avant-garde body painting and nature
              photography explores the profound connection between humanity and the natural world.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              className="flex items-center justify-center gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white opacity-60" />
              <div className="h-2 w-2 rounded-full bg-white opacity-70" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white opacity-60" />
            </motion.div>
          </div>
        </div>

        {/* Organic wave bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
          <svg
            viewBox="0 0 1440 80"
            className="h-16 w-full sm:h-20 lg:h-24"
            preserveAspectRatio="none"
            fill="var(--color-bg-primary)"
          >
            <path d="M0,48 C240,80 480,0 720,48 C960,96 1200,16 1440,48 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Magazine Article Component */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <MagazineArticle
            imageSrc="/images/press/zink-mag-claudia.jpg"
            imageAlt="Claudia Humburg posing with her avant-garde body painting artwork featuring a figure in the Joshua Tree desert"
          />
        </div>
      </section>

      {/* Magazine Spreads Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-20 lg:space-y-32">
          {pressImages.map((image, index) => (
            <article
              key={image.src}
              className="group relative"
            >
              {/* Image Container with Premium Shadow */}
              <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] shadow-2xl transition-all duration-700 hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)]">
                {/* Subtle border effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

                {/* Magazine Image */}
                <div className={`relative w-full overflow-hidden ${image.aspectRatio}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    quality={95}
                    priority={index === 0}
                  />
                </div>

                {/* Subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Image Number Badge */}
              <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-xl font-bold text-white shadow-lg">
                {index + 1}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="border-t border-[var(--color-bg-secondary)] bg-[var(--color-bg-secondary)] py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
            Interested in featuring this work?
          </h2>
          <p className="mb-8 text-lg opacity-70">
            For press inquiries, interviews, or feature opportunities
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]"
          >
            Get in Touch
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
