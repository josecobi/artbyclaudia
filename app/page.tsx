import type { Metadata } from "next";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
};

// JSON-LD Structured Data for Homepage
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#homepage`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#artist`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteConfig.url}${siteConfig.ogImage}`,
    width: 1200,
    height: 630,
  },
};

/**
 * Homepage
 * Features a stunning full-width hero carousel
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroCarousel />
    </>
  );
}
