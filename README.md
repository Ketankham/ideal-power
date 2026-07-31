# Ideal Engineering

Corporate site for **Ideal Engineering & Infrastructure Limited** — a listed Indian
infrastructure group operating power generation, transmission, highway and
industrial-district assets.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16.2.12 (App Router) |
| UI | React 19.2.4 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 — CSS-first config, no `tailwind.config.js` |
| Type | Red Hat Display via `next/font/google` |
| Deployment target | AWS ECS Fargate — see [`docs/ADMIN-PLAN.md`](docs/ADMIN-PLAN.md) |

> ⚠️ Next.js 16 has breaking changes from earlier versions. Middleware is now
> `proxy.ts`, and caching moved to the Cache Components model. Read
> `node_modules/next/dist/docs/` before writing code — see [`AGENTS.md`](AGENTS.md).

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint.config.mjs`) |

There is no test suite yet.

## Layout

```
src/
├── app/                     one directory per route
│   ├── layout.tsx           root layout, font, global metadata + title template
│   ├── page.tsx             home
│   ├── about-us/  businesses/  businesses/[slug]/  projects/
│   ├── investors/  sustainability/  newsroom/  careers/  contact/
│   ├── not-found.tsx
│   └── globals.css          design tokens + custom utilities
├── components/              presentational; see docs/DESIGN-SYSTEM.md
└── lib/
    ├── site.ts              17 content collections
    └── businesses.ts        5 business entities + getBusiness()
```

## Content — read this before editing copy

**All site content is currently hardcoded in TypeScript.** Copy, statistics, navigation,
leadership, news and financial figures live in `src/lib/site.ts` and
`src/lib/businesses.ts`. A few arrays are still inline in their page component (for
example `values` in `src/app/about-us/page.tsx`).

Per-page SEO is an `export const metadata` in each `page.tsx`;
`/businesses/[slug]` uses `generateMetadata`. The root layout sets the
`%s | Ideal Engineering` title template.

Editing content therefore requires a code change and a deploy. Replacing this with a
database-backed content layer and an admin panel is planned in
**[`docs/ADMIN-PLAN.md`](docs/ADMIN-PLAN.md)** — start there before adding new content types.

### Imagery

There are no photographic assets. Every hero, band and map is drawn as inline SVG in
`src/components/Art.tsx` (`SceneArt`, `SkylineBand`, `IndiaMap`), selected by an `ArtKey`
of `energy` · `highway` · `urban` · `metering` · `grid`. `public/` holds only the
unused stock Next.js icons.

## Documentation

- [`docs/ADMIN-PLAN.md`](docs/ADMIN-PLAN.md) — admin panel and AWS platform plan
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — brand tokens, type scale, components
- [`AGENTS.md`](AGENTS.md) — rules for AI coding agents
