/**
 * Site-wide configuration
 * Centralizes all content and settings for easy management
 */

export const siteConfig = {
  name: "Art by Claudia Humburg",
  description: "Contemporary art exploring the connection between humanity and nature",
  author: "Claudia",

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
      { label: "Contact", href: "/contact" },
    ],
  },

  // Footer content
  footer: {
    copyright: `© ${new Date().getFullYear()} Art by Claudia Humburg. All rights reserved.`,
  },

  // Social media (for future use)
  social: {
    instagram: "",
    email: "claudiah1@mac.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
