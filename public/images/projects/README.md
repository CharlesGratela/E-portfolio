# Project Images Directory

This directory contains images for your portfolio projects. Each project has its own subdirectory.

## Folder Structure:

```
public/images/projects/
├── pigconnect/            # PigConnect - Agricultural marketplace platform
└── artisanhub/           # ArtisanHub - Artisan marketplace platform
```

## Image Requirements:

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1200x800px or similar aspect ratio
- **Naming**: Use descriptive names like:
  - `homepage.png`
  - `dashboard.png`
  - `features.png`
  - `mobile-view.png`

## For Each Project, Add:

1. **Homepage/Main View** - The main landing page or primary interface
2. **Dashboard/Admin Panel** - Management or control interface
3. **Features/Functionality** - Key features or functionality screenshots
4. **Mobile View** (optional) - Responsive design on mobile devices

## Example for PigConnect:

```
pigconnect/
├── homepage.png          # Main platform landing page
├── marketplace.png      # Livestock marketplace view
├── livestock-tracking.png # Tracking dashboard
└── dashboard.png         # User dashboard
```

## Example for ArtisanHub:

```
artisanhub/
├── homepage.png          # Main marketplace homepage
├── marketplace.png      # Product marketplace view
├── artisan-profile.png  # Artisan profile page
└── product-gallery.png # Product showcase gallery
```

## After Adding Images:

1. Update the `images` array in `src/components/Projects.tsx`
2. Replace placeholder URLs with your actual image paths
3. Example: `"/images/projects/laravel-ecommerce/homepage.png"`

## Image Optimization Tips:

- Compress images for web (use tools like TinyPNG)
- Use WebP format for better performance
- Keep file sizes under 500KB per image
- Ensure images are high quality but optimized
