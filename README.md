# Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **three.js**. Fully statically generated.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run typecheck
```

## Editing content

All content is typed data in `src/content/` — no component changes needed:

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, role, tagline, email, socials, hero stats |
| `clients.ts` | Client grid. `type: "shopify" \| "other"` drives the badge and filter tabs; `url` makes the card link out; `headless: true` adds a Headless tag. |
| `experience.ts` | Work history timeline and tech stack |
| `services.ts` | Services and testimonials (section hidden while empty) |

Types live in `src/lib/types.ts`, so the compiler flags missing or misspelled fields.

## Architecture

- **Server Components by default.** Only `Nav` (scroll state) and `ClientGrid` (filtering) are client components.
- **Derived stats:** hero numbers (brands, Shopify, custom) are computed from `clients.ts`, so they never drift.
- **SEO:** per-page metadata, generated Open Graph image (`opengraph-image.tsx`), `sitemap.ts`, `robots.ts`.
- **3D (React Three Fiber + drei):** an interactive hero orb and a draggable client globe in `src/components/three/`. Scenes are code-split with `next/dynamic` (`ssr: false`), pause rendering when off-screen, and are skipped entirely without WebGL or when `prefers-reduced-motion` is set — the page falls back to the static design and the client grid.
- **Styling:** CSS Modules per component plus design tokens in `globals.css`. Scroll reveals use CSS scroll-driven animations as progressive enhancement, so content is never hidden behind JavaScript.
- **Accessibility:** semantic landmarks, `aria-pressed` filter buttons, visible focus states, `prefers-reduced-motion` support.

## Deploying

Import the repo into [Vercel](https://vercel.com/new) and set `NEXT_PUBLIC_SITE_URL` to your domain (used for canonical URLs, the sitemap and OG images).
