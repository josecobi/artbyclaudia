import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { getGallery } from "@/data/galleries";
import { siteConfig } from "@/data/site-config";

const gallery = getGallery("behind-scenes");

export const metadata: Metadata = {
  title: `${gallery?.title} - ${siteConfig.name}`,
  description: gallery?.description,
  openGraph: {
    title: `${gallery?.title} Gallery`,
    description: gallery?.description,
    url: `${siteConfig.url}/galleries/behind-the-scenes`,
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

// JSON-LD Structured Data for Behind the Scenes Gallery
const galleryJsonLd = gallery
  ? {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": `${siteConfig.url}/galleries/behind-the-scenes#gallery`,
      url: `${siteConfig.url}/galleries/behind-the-scenes`,
      name: gallery.title,
      description: gallery.description,
      creator: {
        "@id": `${siteConfig.url}/#artist`,
      },
      about: {
        "@type": "Thing",
        name: "Artistic Process",
        description:
          "Behind the scenes of environmental body painting and fine art photography",
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
            item: `${siteConfig.url}/galleries/behind-the-scenes`,
          },
        ],
      },
    }
  : null;

/**
 * Behind the Scenes Gallery Page
 * Showcases the creative process, studio work, and artistic journey
 */
export default function BehindTheScenes() {
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
        />
      )}

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Masonry Gallery */}
        <MasonryGallery images={gallery.images} />
      </div>
    </>
  );
}
