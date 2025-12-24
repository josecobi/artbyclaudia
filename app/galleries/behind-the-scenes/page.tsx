import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
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
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {gallery.title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-70 sm:text-xl">
          {gallery.description}
        </p>
      </header>

      {/* Masonry Gallery */}
      <MasonryGallery images={gallery.images} />
    </div>
  );
}
