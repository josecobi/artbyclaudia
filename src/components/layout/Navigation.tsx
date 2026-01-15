"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface NavigationProps {
  hasDarkText?: boolean;
  /** Force dark text regardless of theme (for pages with light backgrounds) */
  forcesDarkText?: boolean;
}

/**
 * Navigation component
 * Features:
 * - Desktop horizontal menu with dropdown
 * - Mobile hamburger menu with animation
 * - Keyboard navigation support
 * - Accessible ARIA labels
 */
export function Navigation({ hasDarkText = false, forcesDarkText = false }: NavigationProps) {
  // Determine text color class
  const textColorClass = forcesDarkText
    ? "text-gray-900"
    : hasDarkText
      ? "text-[var(--color-text-primary)]"
      : "text-white";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="flex items-center" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-8 md:flex">
        {siteConfig.navigation.main.map((item) => (
          <li key={item.label} className="relative">
            {"dropdown" in item ? (
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
                    textColorClass,
                    openDropdown === item.label && "text-[var(--color-accent)]"
                  )}
                  style={hasDarkText ? undefined : { textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.4)' }}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === item.label && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-[var(--color-bg-secondary)] shadow-lg ring-1 ring-black ring-opacity-5"
                    >
                      <ul className="py-2">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-accent)] hover:text-white"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${textColorClass}`}
                style={hasDarkText ? undefined : { textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.4)' }}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden ${forcesDarkText ? "bg-gray-200 hover:bg-gray-300" : hasDarkText ? "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-secondary)]/80" : "bg-black/20 backdrop-blur-sm hover:bg-black/30"}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        style={hasDarkText ? undefined : { boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
      >
        <motion.span
          className={`h-0.5 w-5 ${forcesDarkText ? "bg-gray-900" : hasDarkText ? "bg-[var(--color-text-primary)]" : "bg-white"}`}
          style={hasDarkText ? undefined : { filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
          animate={{
            rotate: isMobileMenuOpen ? 45 : 0,
            y: isMobileMenuOpen ? 6 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`h-0.5 w-5 ${forcesDarkText ? "bg-gray-900" : hasDarkText ? "bg-[var(--color-text-primary)]" : "bg-white"}`}
          style={hasDarkText ? undefined : { filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
          animate={{
            opacity: isMobileMenuOpen ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`h-0.5 w-5 ${forcesDarkText ? "bg-gray-900" : hasDarkText ? "bg-[var(--color-text-primary)]" : "bg-white"}`}
          style={hasDarkText ? undefined : { filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
          animate={{
            rotate: isMobileMenuOpen ? -45 : 0,
            y: isMobileMenuOpen ? -6 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute left-0 right-0 top-full mt-2 overflow-hidden shadow-2xl md:hidden ${forcesDarkText ? "bg-white" : hasDarkText ? "bg-[var(--color-bg-secondary)]" : "bg-black/90 backdrop-blur-lg"}`}
          >
            <ul className="space-y-1 p-4">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.label}>
                  {"dropdown" in item ? (
                    <div>
                      <button
                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${forcesDarkText ? "text-gray-900 hover:bg-gray-100" : hasDarkText ? "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)]" : "text-white hover:bg-white/10"}`}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <svg
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openDropdown === item.label && "rotate-180"
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-sm transition-colors ${forcesDarkText ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900" : hasDarkText ? "text-[var(--color-text-primary)]/80 hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-text-primary)]" : "text-white/90 hover:bg-white/10 hover:text-white"}`}
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${forcesDarkText ? "text-gray-900 hover:bg-gray-100" : hasDarkText ? "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)]" : "text-white hover:bg-white/10"}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
