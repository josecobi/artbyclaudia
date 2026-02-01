import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileThemeToggle } from "@/components/layout/MobileThemeToggle";
import { siteConfig } from "@/data/site-config";

// Font configurations
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Site-wide metadata
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.social.website }],
  creator: siteConfig.author,
  publisher: siteConfig.name,

  // Base URL for all relative URLs
  metadataBase: new URL(siteConfig.url),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Open Graph metadata (Facebook, WhatsApp, Instagram, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.social.twitter}`,
    site: `@${siteConfig.social.twitter}`,
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons and app manifest
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",

  // Additional metadata
  other: {
    // Pinterest
    "pinterest-rich-pin": "true",
    // Format detection
    "format-detection": "telephone=no",
  },

  // App links (for mobile deep linking)
  appLinks: {
    web: {
      url: siteConfig.url,
      should_fallback: true,
    },
  },

  // Category
  category: "art",
};

// JSON-LD Structured Data for the entire site
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // WebSite schema
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#artist`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    // Organization/Artist schema
    {
      "@type": ["Person", "Organization"],
      "@id": `${siteConfig.url}/#artist`,
      name: siteConfig.author,
      alternateName: siteConfig.shortName,
      description:
        "German-American avant-garde artist specializing in environmental body painting and fine art photography, exploring the profound connection between humanity and the natural world.",
      url: siteConfig.social.website,
      image: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
      },
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/about/claudia_bio.jpg`,
      },
      sameAs: [
        siteConfig.social.website,
        `https://instagram.com/${siteConfig.social.instagram}`,
        `https://twitter.com/${siteConfig.social.twitter}`,
      ],
      email: siteConfig.social.email,
      jobTitle: "Environmental Body Painting Artist",
      knowsAbout: [
        "Body Painting",
        "Environmental Art",
        "Fine Art Photography",
        "Avant-garde Art",
        "Nature Photography",
      ],
      nationality: {
        "@type": "Country",
        name: "Germany",
      },
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          addressCountry: siteConfig.location.country,
        },
      },
    },
    // ImageGallery schema for the art portfolio
    {
      "@type": "ImageGallery",
      "@id": `${siteConfig.url}/#gallery`,
      name: "Art by Claudia Humburg Gallery",
      description:
        "A collection of avant-garde body paintings and fine art photography exploring the connection between humanity and nature",
      url: `${siteConfig.url}/galleries/human-nature`,
      creator: {
        "@id": `${siteConfig.url}/#artist`,
      },
      about: {
        "@type": "Thing",
        name: "Human-Nature Connection",
        description:
          "The profound relationship between humanity and the natural world",
      },
    },
    // BreadcrumbList schema
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileThemeToggle />
          </div>
        </Providers>
      </body>
    </html>
  );
}
