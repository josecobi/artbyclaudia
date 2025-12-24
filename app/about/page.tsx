import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.author} and the artistic journey behind ${siteConfig.name}`,
};

/**
 * About Page
 * Features artist bio with photo in split layout
 * Includes scroll-triggered fade-in animations
 */
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-16 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About {siteConfig.author}
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-70 sm:text-xl">
          Exploring the intersection of humanity and nature through contemporary art
        </p>
      </header>

      {/* Bio Section - Split Layout */}
      <section className="mb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Artist Photo - Left Side */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] shadow-2xl lg:sticky lg:top-24 lg:self-start">
            <Image
              src="/images/about/claudia_bio.jpg" 
              alt={`Portrait of ${siteConfig.author}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Bio Text - Right Side */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">
                The Artist&apos;s Journey
              </h2>

              <div className="space-y-4 text-lg leading-relaxed opacity-80">
                <p>
                  Claudia Humburg grew up in Germany near a wilderness preserve. The forest was her
                  playground and her horses, her friends. Enjoying nature and interacting with wildlife
                  was profoundly important to her and enjoyed continuously by her family.
                </p>

                <p>
                  Among other schools, she graduated from Art School "Die Maske" in Germany and quickly
                  gained a reputation as a top make-up artist and hairstylist. Her professional successes
                  in Germany created a business trip to Hollywood and Southern California. Her professional
                  life blossomed immediately, but it was the breadth, scope and quality of California&apos;s
                  eco-system that stole her heart. America&apos;s magnificent eco-systems, national parks and
                  its nature-conservation culture emotionally overwhelmed her.
                </p>

                <p>
                  Claudia&apos;s craftsmanship has graced the covers of multiple publications including Vanity
                  Fair, Vogue and InStyle. Her work has supported brand names like Avon, Bacardi, Coca Cola,
                  Disney and Mercedes Benz to just name a few. She has collaborated with some of the world&apos;s
                  most renowned photographers including Annie Leibovitz, Patrick Demarchelier, Sheri Belafonte
                  and Mario Testino. Additionally, she reinforced the attractiveness of countless celebrities
                  including, Salma Hayek, Uma Thurman, Kate Winslet, Cate Blanchett, Liza Minnelli, Milla
                  Jovovich. In short, she has reached the pinnacle of mainstream media content creation. Few
                  people have had the privilege of being so intimate with the world&apos;s beauty and glamour elite,
                  as has Ms. Humburg. Yet she has found even greater fulfillment, in an art form that celebrates
                  the eternal interdependence of nature and humanity.
                </p>

                <p>
                  She lives and works in southern California while balancing her time between the entertainment
                  industry as a makeup and hair stylist, and the pursuit of her artistic vision.
                </p>
              </div>
            </div>

            {/* Artistic Vision */}
            <div className="space-y-6 border-t border-[var(--color-bg-secondary)] pt-8">
              <div>
                <h3 className="mb-4 font-heading text-2xl font-semibold">
                  Human / Nature - An Art Series by Claudia Humburg
                </h3>

                <blockquote className="my-6 border-l-4 border-[var(--color-accent)] pl-6 italic">
                  <p className="text-xl leading-relaxed">
                    "Just as Woman and Man merge to create life, I desire to ignite our spirits
                    by reuniting Mankind and Mother Nature."
                  </p>
                  <footer className="mt-2 text-lg font-medium not-italic">— Claudia</footer>
                </blockquote>
              </div>

              <div>
                <h4 className="mb-3 font-heading text-xl font-semibold text-[var(--color-accent)]">
                  Environmental Art - Ethos
                </h4>
                <p className="text-lg leading-relaxed opacity-80">
                  Directing my creative energy to address ecological issues like climate change,
                  extinction threats, and energy concerns.
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-heading text-xl font-semibold text-[var(--color-accent)]">
                  The Vision
                </h4>
                <div className="space-y-4 text-lg leading-relaxed opacity-80">
                  <p>
                    There was a time when the Human animal was one with the earth. But the evolution
                    of the species Homo sapiens has seen a move away from direct contact with its
                    intended eco-system. With the advent of Civilization, mankind has fallen further
                    out of harmony with our natural environment.
                  </p>
                  <p>
                    Claudia Humburg&apos;s art series, Human / Nature, inspires us to reflect on the value
                    of mankind&apos;s return to the womb of life. Her visual musings celebrate a return to
                    that resonant harmony with nature that is our birthright. Utilizing her world-renowned
                    body-art and make-up talents, she melodically merges the human form with exalted
                    natural atmospheres, the effect of which, can be sublime.
                  </p>
                </div>

                <blockquote className="my-6 text-center italic">
                  <p className="text-lg leading-relaxed">
                    "Organic, yet designed.<br />
                    Natural, yet refined.<br />
                    Perfect in style, a beauty sublime,<br />
                    Seemingly random, yet always divine."
                  </p>
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="rounded-full bg-[var(--color-accent)] bg-opacity-10 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                  Environmental Art
                </span>
                <span className="rounded-full bg-[var(--color-accent)] bg-opacity-10 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                  Body Art
                </span>
                <span className="rounded-full bg-[var(--color-accent)] bg-opacity-10 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                  Make-up Artistry
                </span>
                <span className="rounded-full bg-[var(--color-accent)] bg-opacity-10 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                  Nature Photography
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-2xl bg-[var(--color-bg-secondary)] p-8 text-center sm:p-12">
        <h2 className="mb-4 font-heading text-3xl font-bold sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mb-8 text-lg opacity-70">
          Interested in collaborating or learning more about my work?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 font-medium text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]"
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
      </section>
    </div>
  );
}
