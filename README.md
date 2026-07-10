# Jack -- 3D Creator Portfolio

A dark-themed 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/sections/` -- HeroSection, MarqueeSection, AboutSection, ServicesSection, ProjectsSection
- `src/components/` -- FadeIn, Magnet, ContactButton, LiveProjectButton, AnimatedText
- `src/index.css` -- global resets, background, and the `.hero-heading` gradient text class

## Notes

- All images are pulled from the external URLs specified in the brief (Figma-hosted portrait/decorative art, motionsites.ai marquee GIFs, higgs.ai project renders). An internet connection is required at runtime to load them.
- The Marquee section listens to scroll position (passive listener) to drive the two rows in opposite directions.
- The Projects section uses `useScroll` + `useTransform` per card for the sticky-stacking scale effect.
