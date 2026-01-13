import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { getGallery } from "@/data/galleries";
import { siteConfig } from "@/data/site-config";

const gallery = getGallery("behind-scenes");

export const metadata: Metadata = {
  title: `${gallery?.title} - ${siteConfig.name}`,
  description: gallery?.description,
};

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
