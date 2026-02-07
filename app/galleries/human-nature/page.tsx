import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { getGallery } from "@/data/galleries";
import { siteConfig } from "@/data/site-config";

const gallery = getGallery("human-nature");

export const metadata: Metadata = {
  title: `${gallery?.title} - ${siteConfig.name}`,
  description: gallery?.description,
  openGraph: {
    title: `${gallery?.title} Gallery`,
    description: gallery?.description,
    url: `${siteConfig.url}/galleries/human-nature`,
    images: gallery?.heroImage
      ? [
          {
            url: `${siteConfig.url}${gallery.heroImage}`,
            width: 1200,
            height: 800,
            alt: `${gallery.title} Gallery`,
          },
        ]
      : undefined,
  },
};

// JSON-LD Structured Data for Human Nature Gallery
const galleryJsonLd = gallery
  ? {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": `${siteConfig.url}/galleries/human-nature#gallery`,
      url: `${siteConfig.url}/galleries/human-nature`,
      name: gallery.title,
      description: gallery.description,
      creator: {
        "@id": `${siteConfig.url}/#artist`,
      },
      about: {
        "@type": "Thing",
        name: "Human-Nature Connection",
        description:
          "The profound relationship between humanity and the natural world",
      },
      image: gallery.images.slice(0, 10).map((img) => ({
        "@type": "ImageObject",
        "@id": `${siteConfig.url}${img.src}`,
        url: `${siteConfig.url}${img.src}`,
        contentUrl: `${siteConfig.url}${img.src}`,
        name: img.alt,
        description: img.alt,
        width: img.width,
        height: img.height,
        creator: {
          "@id": `${siteConfig.url}/#artist`,
        },
        copyrightHolder: {
          "@id": `${siteConfig.url}/#artist`,
        },
        copyrightYear: new Date().getFullYear(),
        license: "All Rights Reserved",
      })),
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
            name: "Galleries",
            item: `${siteConfig.url}/galleries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: gallery.title,
            item: `${siteConfig.url}/galleries/human-nature`,
          },
        ],
      },
    }
  : null;

/**
 * Human & Nature Gallery Page
 * Displays a masonry gallery of portraits exploring the connection
 * between humanity and the natural world
 */
export default function HumanNaturePage() {
  if (!gallery) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Gallery not found</h1>
      </div>
    );
  }

  return (
    <>
      {galleryJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
        />
      )}
      {/* Premium Hero Section */}
      {gallery.heroImage && (
        <GalleryHero
          title={gallery.title}
          description={gallery.description}
          backgroundImage={gallery.heroImage}
          backgroundAlt={`${gallery.title} gallery background`}
          overlay
        />
      )}

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Artist Statement */}
        <section className="mx-auto mb-16 max-w-4xl">
          <blockquote className="border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-8 py-6 italic sm:px-12 sm:py-8">
            <p className="mb-4 text-lg leading-relaxed sm:text-xl">
              &ldquo;I believe nature is sacred and that humans are gorgeous animals. My greatest joy is in reintegrating the human form and the beauty of nature. We all share in this living planet and I seek to touch deep nerves within our psyches through my visual offerings. I hope that on some subconscious level my efforts stir our instinctual desire to be one-with-nature. It is a spiritual joy to create and share these images.&rdquo;
            </p>
            <footer className="text-right text-lg font-medium not-italic">
              — Claudia Humburg
            </footer>
          </blockquote>
        </section>

        {/* Masonry Gallery */}
        <MasonryGallery images={gallery.images} />
      </div>
    </>
  );
}
