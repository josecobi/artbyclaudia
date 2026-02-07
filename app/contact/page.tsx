import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.author} for collaborations, commissions, press inquiries, or questions about environmental body painting and fine art photography.`,
  openGraph: {
    title: `Contact ${siteConfig.author}`,
    description: `Reach out for collaborations, commissions, or inquiries about ${siteConfig.author}'s environmental body painting and fine art photography.`,
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
};

// JSON-LD Structured Data for Contact Page
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteConfig.url}/contact#page`,
  url: `${siteConfig.url}/contact`,
  name: "Contact",
  description: `Contact ${siteConfig.author} for collaborations, commissions, and inquiries`,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}/#artist`,
    name: siteConfig.author,
    email: siteConfig.social.email,
    telephone: "+1-818-281-2487",
    url: siteConfig.social.website,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Artist Inquiries",
      email: siteConfig.social.email,
      telephone: "+1-818-281-2487",
      availableLanguage: ["English", "German"],
      areaServed: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
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
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  },
};

/**
 * Contact Page
 * Two-column layout: contact form on left, contact info on right
 */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
