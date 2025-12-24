import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.author}. Let's discuss your project or inquiry.`,
};

/**
 * Contact Page
 * Features contact form with validation and optional contact info
 */
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-70 sm:text-xl">
          Have a question or want to collaborate? I'd love to hear from you.
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form */}
      <section className="mb-16">
        <ContactForm />
      </section>

      {/* Additional Contact Info (Optional) */}
      <section className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-[var(--color-bg-secondary)] p-8">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold">
            Other Ways to Connect
          </h2>

          <div className="space-y-4">
            {/* Email (if available in config) */}
            {siteConfig.social.email && (
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] bg-opacity-10">
                  <svg
                    className="h-6 w-6 text-[var(--color-accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-70">Email</p>
                  <a
                    href={`mailto:${siteConfig.social.email}`}
                    className="font-medium text-[var(--color-accent)] hover:underline"
                  >
                    {siteConfig.social.email}
                  </a>
                </div>
              </div>
            )}

            {/* Instagram (if available in config) */}
            {siteConfig.social.instagram && (
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] bg-opacity-10">
                  <svg
                    className="h-6 w-6 text-[var(--color-accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-70">Instagram</p>
                  <a
                    href={`https://instagram.com/${siteConfig.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-accent)] hover:underline"
                  >
                    @{siteConfig.social.instagram}
                  </a>
                </div>
              </div>
            )}

            {/* Default message if no social links */}
            {!siteConfig.social.email && !siteConfig.social.instagram && (
              <p className="text-center opacity-70">
                Please use the contact form above to reach out.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
