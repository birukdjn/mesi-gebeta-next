# Mesi Gebeta — Next.js Website

A responsive, mobile-first restaurant website for Mesi Gebeta, built with:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom semantic color-token system
- **next-themes** for a light/dark mode toggle
- **lucide-react** for icons
- Google Fonts via `next/font`: Fraunces (display), Work Sans (body), Space Mono (labels/prices)

## Pages

- `/` — Home
- `/about` — About Us
- `/menu` — Food & Beverage Menu (tabbed categories)
- `/lounge` — Lounge Services
- `/gallery` — Gallery
- `/events` — Promotions & Events
- `/contact` — Contact, Google Maps embed, Reservation Inquiry form

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Things to replace before launch

- **Placeholder content**: menu items/prices, team bios, event dates, and all gallery tiles are placeholders (`components/*`, `app/**/page.tsx`).
- **Address & map**: update the Google Maps embed URL in `app/contact/page.tsx` (search for `output=embed`) with your real address.
- **Phone / email / hours**: update in `app/contact/page.tsx` and `components/footer.tsx`.
- **Social links**: replace the `href="#"` placeholders in `components/navbar.tsx`, `components/footer.tsx`, `app/gallery/page.tsx`, and `app/contact/page.tsx`.
- **Reservation form**: `components/reservation-form.tsx` currently only shows a success message on submit. Wire it up to a real backend or a service like Formspree / Netlify Forms / a serverless function to actually receive inquiries by email.
- **Real photography**: swap the gradient placeholder tiles in `app/gallery/page.tsx`, `app/about/page.tsx`, and the hero illustration in `app/page.tsx` for real images (the `next/image` component is recommended for optimized loading).
- **Domain**: update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `public/robots.txt` once you have a real domain.

## Design system

Colors are defined as CSS variables (RGB channel triplets) in `app/globals.css` and mapped to Tailwind's color palette in `tailwind.config.ts`, so the whole site restyles automatically when the theme toggles between `.light` and `.dark`. The hero and footer intentionally always use the dark "espresso" band regardless of the toggle — this is the brand's signature dark accent.

The recurring diagonal-weave divider (`.weave` in `app/globals.css`) is the site's signature visual element, a nod to the "gebeta" — the woven table at the center of an Ethiopian meal that gives the restaurant its name.
