/**
 * Gallery data structure
 * Contains all gallery collections with images
 *
 * TO USE LOCAL IMAGES:
 * 1. Add images to /public/images/galleries/human-nature/ or /public/images/galleries/behind-scenes/
 * 2. Recommended sizes: 1200-2400px on longest side
 * 3. Name files: hn-001.jpg, hn-002.jpg... or bs-001.jpg, bs-002.jpg...
 * 4. Uncomment local paths and comment out Unsplash URLs
 * 5. Update alt text to describe your actual artwork
 * 6. Adjust width/height to match your image dimensions
 *
 * Currently using Unsplash placeholders for development.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Gallery {
  title: string;
  slug: string;
  description: string;
  images: GalleryImage[];
}

export type GalleryKey = "human-nature" | "behind-scenes";

export const galleries: Record<GalleryKey, Gallery> = {
  "human-nature": {
    title: "Human & Nature",
    slug: "human-nature",
    description:
      "An exploration of the intimate connection between humanity and the natural world. These works celebrate the harmony, contrast, and symbiosis between human forms and organic elements.",
    images: [
      {
        id: "hn-1",
        src: "/images/galleries/human-nature/a_humanandnature_01.jpg",
        alt: "Human & Nature Art",
        width: 750,
        height: 750,
      },
      {
        id: "hn-2",
        src: "/images/galleries/human-nature/a_humanandnature_02.jpg",
        alt: "Human & Nature Art",
        width: 750,
        height: 750,
      },
      {
        id: "hn-3",
        src: "/images/galleries/human-nature/a_humanandnature_03.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 701,
      },
      {
        id: "hn-4",
        src: "/images/galleries/human-nature/humanandnature_01.jpg",
        alt: "Human & Nature Art",
        width: 999,
        height: 750,
      },
      {
        id: "hn-5",
        src: "/images/galleries/human-nature/humanandnature_02.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 743,
      },
      {
        id: "hn-6",
        src: "/images/galleries/human-nature/humanandnature_03.jpg",
        alt: "Human & Nature Art",
        width: 563,
        height: 750,
      },
      {
        id: "hn-7",
        src: "/images/galleries/human-nature/humanandnature_04.jpg",
        alt: "Human & Nature Art",
        width: 595,
        height: 750,
      },
      {
        id: "hn-8",
        src: "/images/galleries/human-nature/humanandnature_05.jpg",
        alt: "Human & Nature Art",
        width: 608,
        height: 750,
      },
      {
        id: "hn-9",
        src: "/images/galleries/human-nature/humanandnature_06.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 683,
      },
      {
        id: "hn-10",
        src: "/images/galleries/human-nature/humanandnature_07.jpg",
        alt: "Human & Nature Art",
        width: 999,
        height: 750,
      },
      {
        id: "hn-11",
        src: "/images/galleries/human-nature/humanandnature_08.jpg",
        alt: "Human & Nature Art",
        width: 932,
        height: 750,
      },
      {
        id: "hn-12",
        src: "/images/galleries/human-nature/humanandnature_09.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 683,
      },
      {
        id: "hn-13",
        src: "/images/galleries/human-nature/humanandnature_10.jpg",
        alt: "Human & Nature Art",
        width: 958,
        height: 768,
      },
      {
        id: "hn-14",
        src: "/images/galleries/human-nature/humanandnature_11.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 714,
      },
      {
        id: "hn-15",
        src: "/images/galleries/human-nature/humanandnature_12.jpg",
        alt: "Human & Nature Art",
        width: 523,
        height: 750,
      },
      {
        id: "hn-16",
        src: "/images/galleries/human-nature/humanandnature_13.jpg",
        alt: "Human & Nature Art",
        width: 933,
        height: 750,
      },
      {
        id: "hn-17",
        src: "/images/galleries/human-nature/humanandnature_14.jpg",
        alt: "Human & Nature Art",
        width: 941,
        height: 750,
      },
      {
        id: "hn-18",
        src: "/images/galleries/human-nature/humanandnature_16.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 683,
      },
      {
        id: "hn-19",
        src: "/images/galleries/human-nature/humanandnature_17.jpg",
        alt: "Human & Nature Art",
        width: 521,
        height: 750,
      },
      {
        id: "hn-20",
        src: "/images/galleries/human-nature/humanandnature_18.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 712,
      },
      {
        id: "hn-21",
        src: "/images/galleries/human-nature/humanandnature_19.jpg",
        alt: "Human & Nature Art",
        width: 525,
        height: 750,
      },
      {
        id: "hn-22",
        src: "/images/galleries/human-nature/humanandnature_20.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 716,
      },
      {
        id: "hn-23",
        src: "/images/galleries/human-nature/humanandnature_21.jpg",
        alt: "Human & Nature Art",
        width: 523,
        height: 750,
      },
      {
        id: "hn-24",
        src: "/images/galleries/human-nature/humanandnature_22.jpg",
        alt: "Human & Nature Art",
        width: 495,
        height: 750,
      },
      {
        id: "hn-25",
        src: "/images/galleries/human-nature/humanandnature_23.jpg",
        alt: "Human & Nature Art",
        width: 1024,
        height: 655,
      },
      {
        id: "hn-26",
        src: "/images/galleries/human-nature/humanandnature_24.jpg",
        alt: "Human & Nature Art",
        width: 810,
        height: 750,
      },
      {
        id: "hn-27",
        src: "/images/galleries/human-nature/humanandnature_25.jpg",
        alt: "Human & Nature Art",
        width: 600,
        height: 750,
      },
      {
        id: "hn-28",
        src: "/images/galleries/human-nature/humanandnature_26.jpg",
        alt: "Human & Nature Art",
        width: 631,
        height: 750,
      },
      {
        id: "hn-29",
        src: "/images/galleries/human-nature/humanandnature_27.jpg",
        alt: "Human & Nature Art",
        width: 557,
        height: 750,
      },
      {
        id: "hn-30",
        src: "/images/galleries/human-nature/humanandnature_28.jpg",
        alt: "Human & Nature Art",
        width: 999,
        height: 750,
      },
      {
        id: "hn-31",
        src: "/images/galleries/human-nature/humanandnature_29.jpg",
        alt: "Human & Nature Art",
        width: 718,
        height: 750,
      },
    ],
  },
  "behind-scenes": {
    title: "Behind the Scenes",
    slug: "behind-scenes",
    description:
      "A glimpse into the creative process. From studio setups to spontaneous moments, these images reveal the artistry, experimentation, and passion that bring each piece to life.",
    images: [
      {
        id: "bs-1",
        src: "/images/galleries/behind-scenes/bts_01.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 578,
      },
      {
        id: "bs-2",
        src: "/images/galleries/behind-scenes/bts_02.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 573,
      },
      {
        id: "bs-3",
        src: "/images/galleries/behind-scenes/bts_03.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 551,
      },
      {
        id: "bs-4",
        src: "/images/galleries/behind-scenes/bts_04.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 582,
      },
      {
        id: "bs-5",
        src: "/images/galleries/behind-scenes/bts_05.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 533,
      },
      {
        id: "bs-6",
        src: "/images/galleries/behind-scenes/bts_06.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 537,
      },
      {
        id: "bs-7",
        src: "/images/galleries/behind-scenes/bts_07.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-8",
        src: "/images/galleries/behind-scenes/bts_08.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-9",
        src: "/images/galleries/behind-scenes/bts_09.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 600,
      },
      {
        id: "bs-10",
        src: "/images/galleries/behind-scenes/bts_10.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-11",
        src: "/images/galleries/behind-scenes/bts_11.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-12",
        src: "/images/galleries/behind-scenes/bts_12.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 600,
      },
      {
        id: "bs-13",
        src: "/images/galleries/behind-scenes/bts_13.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-14",
        src: "/images/galleries/behind-scenes/bts_14.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-15",
        src: "/images/galleries/behind-scenes/bts_15.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 600,
      },
      {
        id: "bs-16",
        src: "/images/galleries/behind-scenes/bts_16.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 600,
      },
      {
        id: "bs-17",
        src: "/images/galleries/behind-scenes/bts_17.jpg",
        alt: "Behind the Scenes",
        width: 799,
        height: 600,
      },
      {
        id: "bs-18",
        src: "/images/galleries/behind-scenes/bts_18.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-19",
        src: "/images/galleries/behind-scenes/bts_19.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-20",
        src: "/images/galleries/behind-scenes/bts_20.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-21",
        src: "/images/galleries/behind-scenes/bts_21.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-22",
        src: "/images/galleries/behind-scenes/bts_22.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
      {
        id: "bs-23",
        src: "/images/galleries/behind-scenes/bts_23.jpg",
        alt: "Behind the Scenes",
        width: 800,
        height: 600,
      },
      {
        id: "bs-24",
        src: "/images/galleries/behind-scenes/bts_24.jpg",
        alt: "Behind the Scenes",
        width: 450,
        height: 600,
      },
    ],
  },
};

export function getGallery(key: GalleryKey): Gallery | undefined {
  return galleries[key];
}

export function getAllGalleries(): Gallery[] {
  return Object.values(galleries);
}
