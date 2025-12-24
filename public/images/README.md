# Image Assets Guide

This directory contains all image assets for the Art by Claudia portfolio site.

## 📁 Folder Structure

```
images/
├── carousel/              # Homepage hero carousel (5 images)
├── galleries/
│   ├── human-nature/     # Human & Nature gallery (10 images)
│   └── behind-scenes/    # Behind the Scenes gallery (8 images)
└── about/                # Artist portrait
```

## 📸 Image Requirements

### Carousel Images (`/carousel/`)
- **Quantity:** 5 images (slide-1.jpg through slide-5.jpg)
- **Dimensions:** 1920×1080px (16:9 aspect ratio recommended)
- **Format:** JPG or PNG
- **Quality:** 80-85% compression
- **File size:** Target < 500KB per image

### Gallery Images

#### Human & Nature (`/galleries/human-nature/`)
- **Quantity:** 10 images (hn-001.jpg through hn-010.jpg)
- **Dimensions:** 1200-2400px on longest side
- **Aspect ratios:** Mixed (portrait and landscape)
- **Format:** JPG
- **Quality:** 80-85% compression
- **File size:** Target < 800KB per image

#### Behind the Scenes (`/galleries/behind-scenes/`)
- **Quantity:** 8 images (bs-001.jpg through bs-008.jpg)
- **Dimensions:** 1200-2400px on longest side
- **Aspect ratios:** Mixed
- **Format:** JPG
- **Quality:** 80-85% compression
- **File size:** Target < 800KB per image

### Artist Portrait (`/about/`)
- **Filename:** claudia-portrait.jpg
- **Dimensions:** 800×1200px (2:3 aspect ratio)
- **Format:** JPG
- **Quality:** 85-90% compression
- **File size:** Target < 600KB

## 🎨 Naming Conventions

**Follow these patterns strictly:**

- Carousel: `slide-1.jpg`, `slide-2.jpg`, etc.
- Human & Nature: `hn-001.jpg`, `hn-002.jpg`, etc.
- Behind Scenes: `bs-001.jpg`, `bs-002.jpg`, etc.
- About: `claudia-portrait.jpg`

## 🔧 Optimization Tips

### Before Adding Images:

1. **Resize** images to recommended dimensions
   - Use Photoshop, GIMP, or online tools like [Squoosh](https://squoosh.app)

2. **Compress** without losing quality
   - Mac: [ImageOptim](https://imageoptim.com)
   - Windows: [FileOptimizer](https://nikkhokkho.sourceforge.io/static.php?page=FileOptimizer)
   - Online: [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)

3. **Save** as JPG
   - Let Next.js automatically convert to WebP/AVIF
   - Use 80-85% quality setting
   - sRGB color space

### Automated Optimization

Next.js automatically:
- Converts JPG to WebP and AVIF for modern browsers
- Generates responsive image sizes
- Lazy loads images below the fold
- Serves optimized images based on device size

## 🚀 How to Add Your Images

1. **Export your artwork** at recommended sizes
2. **Optimize** using tools mentioned above
3. **Name files** according to conventions
4. **Drop into** appropriate folder
5. **Update data files:**
   - `src/data/carousel.ts` - Update alt text for carousel
   - `src/data/galleries.ts` - Update alt text for galleries
   - Uncomment local paths, comment out Unsplash URLs

## 📝 Updating Image References

### Example: Switching to Local Images

**In `src/data/carousel.ts`:**
```typescript
{
  id: "1",
  src: "/images/carousel/slide-1.jpg", // ✅ Uncomment this
  // src: "https://images.unsplash.com/...", // ❌ Comment out placeholder
  alt: "Your actual artwork description here", // Update this!
  title: "Human & Nature",
  subtitle: "...",
}
```

**In `src/data/galleries.ts`:**
```typescript
{
  id: "hn-1",
  src: "/images/galleries/human-nature/hn-001.jpg", // ✅ Uncomment
  // src: "https://images.unsplash.com/...", // ❌ Comment out
  alt: "Description of your artwork", // Update this!
  width: 1200, // Adjust to match your image
  height: 1800, // Adjust to match your image
}
```

## 🌐 Future: CDN Migration

For production at scale, consider migrating to a CDN:

### Recommended CDNs:
1. **Cloudinary** - Best for art portfolios
   - Image transformations
   - Automatic format optimization
   - Free tier: 25GB storage

2. **Vercel Blob Storage** - Integrates with deployment
   - Automatic optimization
   - Global CDN
   - Pay as you go

3. **AWS S3 + CloudFront** - Enterprise solution
   - Full control
   - Highly scalable

## ✅ Checklist

Before going live:
- [ ] All carousel images added and optimized
- [ ] All gallery images added and optimized
- [ ] Artist portrait added
- [ ] All alt texts updated with actual descriptions
- [ ] Image dimensions updated in data files
- [ ] Tested on mobile and desktop
- [ ] Checked loading performance
- [ ] Verified images display correctly in both themes

## 📚 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Squoosh - Image Compression](https://squoosh.app)
- [ImageOptim - Mac Image Optimizer](https://imageoptim.com)
- [TinyPNG - PNG/JPG Compression](https://tinypng.com)

---

**Note:** The `.gitkeep` files in each folder ensure empty directories are tracked by Git. You can delete them once you add your images.
