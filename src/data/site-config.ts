/**
 * Site-wide configuration
 * Centralizes all content and settings for easy management
 */

export const siteConfig = {
  // Base URL - update when deploying
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://claudiahumburg.com",

  // Site identity
  name: "Art by Claudia Humburg",
  shortName: "Claudia Humburg Art",
  description:
    "Avant-garde environmental body painting and fine art photography by Claudia Humburg. Exploring the profound connection between humanity and the natural world through transformative visual art.",
  author: "Claudia Humburg",
  authorShort: "Claudia",

  // Default OG image for social sharing
  ogImage: "/images/press/zink-mag-claudia.jpg",
  ogImageAlt:
    "Claudia Humburg with her avant-garde body painting artwork in Joshua Tree desert",

  // SEO keywords
  keywords: [
    "Claudia Humburg",
    "body painting artist",
    "environmental art",
    "avant-garde art",
    "nature photography",
    "human nature art",
    "contemporary artist",
    "Los Angeles artist",
    "German artist",
    "fine art photography",
    "body art",
    "nature and human connection",
  ],

  // Navigation menu structure
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Galleries",
        href: "/galleries",
        dropdown: [
          { label: "Human & Nature", href: "/galleries/human-nature" },
          { label: "Behind the Scenes", href: "/galleries/behind-the-scenes" },
        ],
      },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // Footer content
  footer: {
    copyright: `© ${new Date().getFullYear()} Art by Claudia Humburg. All rights reserved.`,
  },

  // Social media
  social: {
    instagram: "claudiahumburgart",
    twitter: "claudiahumburg",
    email: "claudiah1@mac.com",
    website: "https://www.claudiahumburg.com",
  },

  // Location info for local SEO
  location: {
    city: "Los Angeles",
    state: "California",
    country: "USA",
    nationality: "German-American",
  },
} as const;

export type SiteConfig = typeof siteConfig;
