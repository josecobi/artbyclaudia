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
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 text-lg font-semibold transition-colors hover:text-[var(--color-accent)]"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30 shadow-lg">
            <Image
              src="/images/about/claudia_bio.jpg"
              alt={siteConfig.author}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <span
            className="font-heading text-white"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.4), 0 0 12px rgba(0,0,0,0.6)'
            }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation - centered on desktop */}
        <div className="hidden flex-1 md:flex md:justify-center">
          <Navigation />
        </div>

        {/* Right side: Theme Toggle (desktop only) and Mobile Menu */}
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
