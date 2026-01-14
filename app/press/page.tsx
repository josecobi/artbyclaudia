import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Press - ${siteConfig.name}`,
  description: `Featured press coverage of ${siteConfig.author}'s groundbreaking environmental art in Z!NK Magazine`,
};

/**
 * Press Page
 * Showcases Z!NK Magazine feature with premium layout
 * Features large-format magazine spreads with elegant presentation
 */
export default function PressPage() {
  const pressImages = [
    {
      src: "/images/press/zink-mag-comp-11.jpg",
      alt: "Z!NK Magazine feature on Claudia Humburg - Page 1",
    },
    {
      src: "/images/press/zink-mag-comp-21.jpg",
      alt: "Z!NK Magazine feature on Claudia Humburg - Page 2",
    },
    {
      src: "/images/press/TVY6330.jpg",
      alt: "Z!NK Magazine feature showcasing Claudia Humburg's avant-garde environmental art",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[var(--color-bg-secondary)] bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Press Badge */}
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                </svg>
                Featured in Z!NK Magazine
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Press & Recognition
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed opacity-80 sm:text-xl">
              Claudia Humburg&apos;s groundbreaking environmental art has garnered international
              attention. Featured in Z!NK Magazine, her avant-garde body painting and nature
              photography explores the profound connection between humanity and the natural world.
            </p>

            {/* Decorative line */}
            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-50" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl" />
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
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
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
