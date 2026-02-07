import type { Metadata } from "next";
import { PressContent } from "@/components/press/PressContent";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Press & Recognition - ${siteConfig.name}`,
  description: `${siteConfig.author}'s groundbreaking environmental art has garnered international attention. Featured in Z!NK Magazine, her avant-garde body painting and nature photography explores the profound connection between humanity and the natural world.`,
  openGraph: {
    title: `Press & Recognition - ${siteConfig.name}`,
    description: `Featured in Z!NK Magazine: ${siteConfig.author}'s avant-garde environmental body painting and fine art photography.`,
    url: `${siteConfig.url}/press`,
    images: [
      {
        url: `${siteConfig.url}/images/press/zink-mag-claudia.jpg`,
        width: 1200,
        height: 800,
        alt: "Claudia Humburg featured in Z!NK Magazine",
      },
    ],
  },
};

// JSON-LD Structured Data for Press Page
const pressJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteConfig.url}/press#page`,
  url: `${siteConfig.url}/press`,
  name: "Press & Recognition",
  description: `${siteConfig.author}'s press coverage and media features`,
  about: {
    "@id": `${siteConfig.url}/#artist`,
  },
  mainEntity: {
    "@type": "Article",
    "@id": `${siteConfig.url}/press/zink-magazine#article`,
    headline: "Claudia Humburg Featured in Z!NK Magazine",
    description:
      "Feature article about Claudia Humburg's avant-garde environmental body painting and fine art photography",
    image: [
      `${siteConfig.url}/images/press/zink-mag-claudia.jpg`,
      `${siteConfig.url}/images/press/zink-mag-comp-21.jpg`,
      `${siteConfig.url}/images/press/TVY6330.jpg`,
    ],
    author: {
      "@id": `${siteConfig.url}/#artist`,
    },
    publisher: {
      "@type": "Organization",
      name: "Z!NK Magazine",
    },
    about: {
      "@type": "Thing",
      name: "Environmental Body Painting",
      description:
        "Avant-garde art exploring the connection between humanity and nature",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Press",
        item: `${siteConfig.url}/press`,
      },
    ],
  },
};

/**
 * Press Page
 * Showcases Z!NK Magazine feature with premium layout
 * Features large-format magazine spreads with elegant presentation
 */
export default function PressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressJsonLd) }}
      />
      <PressContent />
    </>
  );
}
