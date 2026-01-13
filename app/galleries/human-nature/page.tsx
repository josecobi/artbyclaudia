import type { Metadata } from "next";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { getGallery } from "@/data/galleries";
import { siteConfig } from "@/data/site-config";

const gallery = getGallery("human-nature");

export const metadata: Metadata = {
  title: `${gallery?.title} - ${siteConfig.name}`,
  description: gallery?.description,
};

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
        {/* Artist Statement */}
        <section className="mx-auto mb-16 max-w-4xl">
          <blockquote className="border-l-4 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-8 py-6 italic sm:px-12 sm:py-8">
            <p className="mb-4 text-lg leading-relaxed sm:text-xl">
              "I believe nature is sacred and that humans are gorgeous animals. My greatest joy is in reintegrating the human form and the beauty of nature. We all share in this living planet and I seek to touch deep nerves within our psyches through my visual offerings. I hope that on some subconscious level my efforts stir our instinctual desire to be one-with-nature. It is a spiritual joy to create and share these images."
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
