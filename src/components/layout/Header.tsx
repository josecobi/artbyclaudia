"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/site-config";

/**
 * Header component
 * Features:
 * - Sticky positioning
 * - Clean, minimal design
 * - Logo placeholder on the left
 * - Navigation in the center
 * - Theme toggle on the right
 * - Responsive layout
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)] bg-opacity-95 backdrop-blur supports-[backdrop-filter]:bg-opacity-90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 text-lg font-semibold transition-colors hover:text-[var(--color-accent)]"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/about/claudia_bio.jpg"
              alt={siteConfig.author}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span className="font-heading">{siteConfig.name}</span>
        </Link>

        {/* Navigation - centered on desktop */}
        <div className="flex-1 md:flex md:justify-center">
          <Navigation />
        </div>

        {/* Theme Toggle - right aligned */}
        <div className="ml-auto md:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
