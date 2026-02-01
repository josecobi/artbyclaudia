import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

// Press page specific metadata
const pressMetadata = {
  title: "Press & Recognition",
  description:
    "Claudia Humburg's avant-garde environmental art featured in Z!NK Magazine. Explore her groundbreaking body painting and nature photography that explores the profound connection between humanity and the natural world.",
  image: "/images/press/zink-mag-claudia.jpg",
  imageAlt:
    "Claudia Humburg posing with her avant-garde body painting artwork featuring a figure in the Joshua Tree desert",
  publishedTime: "2014-11-15T00:00:00.000Z",
  articleAuthor: "Katrina Woolverton",
};

// Page-specific metadata (inherits from root layout)
export const metadata: Metadata = {
  title: pressMetadata.title,
  description: pressMetadata.description,
  keywords: [
    ...siteConfig.keywords,
    "Z!NK Magazine",
    "press coverage",
    "art magazine feature",
  ],

  alternates: {
    canonical: "/press",
  },

  openGraph: {
    type: "article",
    title: pressMetadata.title,
    description: pressMetadata.description,
    url: "/press",
    images: [
      {
        url: pressMetadata.image,
        width: 1200,
        height: 630,
        alt: pressMetadata.imageAlt,
      },
    ],
    article: {
      publishedTime: pressMetadata.publishedTime,
      authors: [pressMetadata.articleAuthor],
      section: "Art & Culture",
      tags: ["body painting", "environmental art", "avant-garde", "Z!NK Magazine"],
    },
  },

  twitter: {
    title: pressMetadata.title,
    description: pressMetadata.description,
    images: [pressMetadata.image],
  },
};

// Press page specific JSON-LD
const pressJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claudia Humburg: Avant-Garde",
  description: pressMetadata.description,
  image: `${siteConfig.url}${pressMetadata.image}`,
  datePublished: pressMetadata.publishedTime,
  dateModified: pressMetadata.publishedTime,
  author: {
    "@type": "Person",
    name: pressMetadata.articleAuthor,
  },
  publisher: {
    "@type": "Organization",
    name: "Z!NK Magazine",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/press`,
  },
  about: {
    "@type": "Person",
    name: siteConfig.author,
    "@id": `${siteConfig.url}/#artist`,
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Press page specific JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressJsonLd) }}
      />
      {children}
    </>
  );
}
