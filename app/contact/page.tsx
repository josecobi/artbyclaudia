"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { HeroContact } from "@/components/contact/HeroContact";
import { siteConfig } from "@/data/site-config";
import { useEffect } from "react";

/**
 * Contact Page
 * Two-column layout: contact form on left, contact info on right
 */
export default function ContactPage() {
  // Parallax effect
  useEffect(() => {
    const scrollEl = document.documentElement;
    const root = document.documentElement;
    let scrollPos = 0;

    function animation() {
      if (scrollPos !== scrollEl.scrollTop) {
        scrollPos = scrollEl.scrollTop;
        root.style.setProperty('--scrollPos', scrollPos + 'px');
      }
      window.requestAnimationFrame(animation);
    }

    window.requestAnimationFrame(animation);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Landscape */}
      <HeroContact />

      {/* Main Content Section */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left Column - Contact Form */}
        <section>
          <ContactForm />
        </section>

        {/* Right Column - Contact Information */}
        <section>
          

          <div className="relative rounded-2xl bg-[var(--color-bg-secondary)] p-8 md:sticky md:top-24">
            <h2 className="mb-6 font-heading text-2xl font-bold">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold">{siteConfig.author}</span>
                </div>
              </div>

              {/* Email */}
              {siteConfig.social.email && (
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="mb-1 text-sm opacity-70">Email</span>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
                    >
                      {siteConfig.social.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="mb-1 text-sm opacity-70">Phone</span>
                  <a
                    href="tel:+18182812487"
                    className="font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
                  >
                    +1 (818) 281-2487
                  </a>
                </div>
              </div>

              {/* Instagram */}
              {/* {siteConfig.social.instagram && (
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="mb-1 text-sm opacity-70">Instagram</span>
                    <a
                      href={`https://instagram.com/${siteConfig.social.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
                    >
                      @{siteConfig.social.instagram}
                    </a>
                  </div>
                </div>
              )} */}

              {/* Professional Website */}
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="mb-1 text-sm opacity-70">Professional Portfolio</span>
                  <a
                    href="https://claudiahumburg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
                  >
                    claudiahumburg.com
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 border-t border-[var(--color-bg-primary)] pt-6">
                <p className="text-sm leading-relaxed opacity-70">
                  I typically respond within 24-48 hours. For urgent inquiries,
                  please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}
