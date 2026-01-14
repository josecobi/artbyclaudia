"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Mobile Theme Toggle - Sticky Bottom Right
 * Only visible on mobile devices
 * Features:
 * - Sticky positioning at bottom right
 * - Enhanced visibility with shadow
 * - Smooth animations
 */
export function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-[100] h-12 w-12 rounded-full bg-black/40 backdrop-blur-md shadow-2xl hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent md:hidden"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4)'
      }}
    >
      <div className="flex h-full w-full items-center justify-center">
        {/* Sun icon for light mode */}
        <motion.svg
          className="absolute h-6 w-6 text-white"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </motion.svg>

        {/* Moon icon for dark mode */}
        <motion.svg
          className="absolute h-6 w-6 text-white"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </div>
    </motion.button>
  );
}
