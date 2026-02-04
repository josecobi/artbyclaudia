import Link from "next/link";
import { siteConfig } from "@/data/site-config";

/**
 * Premium Footer Component
 * Features:
 * - Website name/branding
 * - Multi-column navigation
 * - Contact information
 * - Social links
 * - Attribution to cobitek.com
 * - Fully responsive design
 */
export function Footer() {
  return (
    <footer className="border-t border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
                {siteConfig.name}
              </Link>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              {siteConfig.description}
            </p>
            <a
              href="https://claudiahumburg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
            >
              <svg
                className="h-4 w-4 flex-shrink-0"
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
              <span>Professional Portfolio</span>
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Navigate</h4>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.main.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
                  >
                    {item.label}
                  </Link>
                  {"dropdown" in item && item.dropdown && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="text-sm opacity-60 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Column 3: Galleries */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Galleries</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/galleries/human-nature"
                className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
              >
                Human & Nature
              </Link>
              <Link
                href="/galleries/behind-the-scenes"
                className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
              >
                Behind the Scenes
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact</h4>
            <div className="flex flex-col space-y-3">
              {/* Email */}
              {siteConfig.social.email && (
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
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
                  <span className="break-all">{siteConfig.social.email}</span>
                </a>
              )}

              {/* Phone */}
              <a
                href="tel:+18182812487"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
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
                <span>+1 (818) 281-2487</span>
              </a>

              {/* Instagram (if available) */}
              {/* {siteConfig.social.instagram && (
                <a
                  href={`https://instagram.com/${siteConfig.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--color-accent)] transition-all"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@{siteConfig.social.instagram}</span>
                </a>
              )} */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[var(--color-bg-secondary)]" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm opacity-70 sm:text-left">
            {siteConfig.footer.copyright}
          </p>
          <p className="text-center text-sm opacity-70 sm:text-right">
            Created by{" "}
            <a
              href="https://cobitek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--color-accent)] hover:underline transition-all"
            >
              cobitek.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
