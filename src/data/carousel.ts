/**
 * Hero carousel slide data
 *
 * TO USE LOCAL IMAGES:
 * 1. Add your images to /public/images/carousel/ (recommended: 1920×1080px)
 * 2. Name them: slide-1.jpg, slide-2.jpg, etc.
 * 3. Update alt text to describe your actual artwork
 *
 * Currently using Unsplash placeholders for development.
 */

export interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: "1",
    src: "/images/carousel/humanandnature_02.jpg",
    alt: "Human & Nature Art",
    title: "Nature's Canvas",
    subtitle: "Where art meets the elements",
  },
  {
    id: "2",
    src: "/images/carousel/humanandnature_06.jpg",
    alt: "Human & Nature Art",
    title: "Contemporary Expression",
    subtitle: "Bold strokes and vivid imagination",
  },
  {
    id: "3",
    src: "/images/carousel/humanandnature_01.jpg",
    alt: "Human & Nature Art",
    title: "Human & Nature",
    subtitle: "Exploring the connection between humanity and the natural world",
  },
  {
    id: "4",
    src: "/images/carousel/humanandnature_10.jpg",
    alt: "Human & Nature Art",
    title: "Inspired by Earth",
    subtitle: "Natural beauty captured in time",
  },
  {
    id: "5",
    src: "/images/carousel/humanandnature_14.jpg",
    alt: "Human & Nature Art",
    title: "Creative Journey",
    subtitle: "Every piece tells a story",
  },
];
