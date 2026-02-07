import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { getAllGalleries } from "@/data/galleries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Get all galleries dynamically
  const galleries = getAllGalleries();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  // Gallery pages - dynamically generated
  const galleryPages = galleries.map((gallery) => ({
    url: `${baseUrl}/galleries/${gallery.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...galleryPages];
}
