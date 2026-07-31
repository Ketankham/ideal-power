# Design System

The visual vocabulary of the site. Everything here is defined in
`src/app/globals.css` (tokens and utilities) and `src/components/` (primitives).

This doubles as the reference for the admin panel: several of these values become
**editor-facing dropdowns** (tone, art variant, icon), so the names below are the names
content editors will eventually see. See [`ADMIN-PLAN.md`](ADMIN-PLAN.md) §2.

Tailwind CSS v4 is configured **CSS-first** via `@theme` — there is no
`tailwind.config.js`. Tokens declared there are automatically available as utility
classes (`--color-navy-900` → `bg-navy-900`, `text-navy-900`, …).

---

## Colour

A navy spine, gold accent, and warm ember reserved for data and eyebrows.

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#16181d` | Body text |
| `navy-950` | `#071b31` | Deepest backgrounds |
| `navy-900` | `#0a2540` | Primary dark surface, headings |
| `navy-800` | `#0f3a6b` | Borders, secondary dark |
| `navy-700` | `#14538f` | Links on light |
| `navy-600` | `#2a6fb5` | Hover / lighter accent |
| `gold-600` | `#e0a02c` | Gold pressed |
| `gold-500` | `#f5b841` | **Primary CTA**, selection highlight |
| `gold-400` | `#fbc85c` | Gold hover, eyebrow on dark |
| `gold-100` | `#fdeecd` | Gold tint background |
| `ember-600` | `#d1531f` | Ember pressed |
| `ember-500` | `#e8622c` | Eyebrows on light, data accents |
| `cream` | `#fdf3e0` | Warm tint panel |
| `mist` | `#e4ebf7` | Cool tint panel |
| `sand` | `#f7f4ee` | Neutral tint panel |

Default border colour is set globally to `rgb(15 58 107 / 0.12)` — a navy hairline, not grey.

**Shadows:** `--shadow-card` (resting card) and `--shadow-lift` (hover/elevated). Both are
navy-tinted and heavily offset downward — do not substitute neutral black shadows.

### The `tone` vocabulary

Three separate `tone` props exist and they are **not interchangeable** — worth knowing
before it becomes an admin dropdown:

| Where | Values | Meaning |
| --- | --- | --- |
| `sectors[].tone` (`src/lib/site.ts`) | `gold` · `navy` · `ember` | Which brand colour the sector card carries |
| `GhostButton`, `SectionHeading` | `dark` · `light` | Whether the component sits on a light or dark background |
| `KnowMore` | `gold` · `navy` | Link colour |

---

## Typography

Red Hat Display, loaded via `next/font/google` in `src/app/layout.tsx` with weights
300–900 and `display: swap`, exposed as `--font-red-hat` → `--font-sans`.

The display scale deliberately uses **light weights at large sizes**. All three steps are
fluid `clamp()` — they need no responsive variants.

| Utility | Size | Weight | Tracking |
| --- | --- | --- | --- |
| `display-1` | `clamp(2.5rem, 6.2vw, 4.75rem)` | 400 | `-0.028em` |
| `display-2` | `clamp(2rem, 4vw, 3.25rem)` | 400 | `-0.024em` |
| `display-3` | `clamp(1.5rem, 2.4vw, 2.125rem)` | 500 | `-0.018em` |
| `eyebrow` | `0.75rem` | 700 | `0.18em`, uppercase |

`display-1` is for page heroes only. `display-2` is the section heading — it is what
`SectionHeading` renders. Body copy runs `~1.02rem` at `leading-[1.75]`, with muted text
as `text-ink/68` on light and `text-white/72` on dark.

## Layout

`container-x` — the single page container. `max-width: 84rem`, centred, with padding that
steps `1.25rem → 2rem` at 768px `→ 2.5rem` at 1280px. Use it rather than re-deriving
widths; every section on the site is wrapped in it.

`hairline-grid` — faint white 88px grid overlay for dark hero panels.

---

## Motion

Keyframes are namespaced `ie-*`: `ie-fade-up`, `ie-slow-zoom`, `ie-spin`, `ie-marquee`,
`ie-pulse-dot`. Bound to classes `.reveal`, `.slide-art`, `.marquee-track`, `.spin-slow`.

The signature easing is `cubic-bezier(0.22, 1, 0.36, 1)` over `0.85s` — a decelerating
rise used for every scroll reveal. Hover transitions are `300ms`.

**Accessibility:** a `prefers-reduced-motion: reduce` block disables all of it and forces
`.reveal` to `opacity: 1`. Any new animation must be added to that block too — otherwise
it silently bypasses the user's OS-level preference.

---

## Components

### Primitives — `src/components/ui.tsx`

| Component | Notes |
| --- | --- |
| `GoldButton` | Solid gold pill. **The primary action across the site** — one per view. Arrow nudges right on hover. |
| `GhostButton` | Outlined secondary. `tone="light"` on dark backgrounds. |
| `KnowMore` | Understated inline card link with chevron. Default label `"Know More"`. |
| `SectionHeading` | Eyebrow + `display-2` title + body. Supports `align="center"`. The eyebrow renders with a leading 2rem hairline rule at 60% opacity. |
| `RichText` | See below. |
| `ArrowRight` `Chevron` `ChevronDown` | Inline SVG, `aria-hidden`, `currentColor`, `1.8–2` stroke. |

### `RichText` — the only inline formatting

```tsx
<RichText text="an **engine of growth** for India" />
```

Splits on `/(\*\*[^*]+\*\*)/g` and renders `**…**` as `<strong>`. **That is the entire
supported syntax** — no italics, links, or lists. Hero and body copy in `src/lib/site.ts`
rely on it.

This is the constraint behind open question #2 in `ADMIN-PLAN.md`: a full WYSIWYG editor
would emit markup this renderer cannot display. Either keep the editor constrained to bold,
or upgrade the renderer deliberately.

### Composition — `src/components/`

`Reveal` (client) wraps content in an IntersectionObserver fade-rise; `threshold: 0.12`,
`rootMargin: "0px 0px -8% 0px"`, fires once then disconnects, and falls back to visible
when JS or `IntersectionObserver` is unavailable. Accepts `delay` for staggering and
`as` to render as `div` · `li` · `section` · `article`.

`Counter` animates a numeric string on view. `PageHero` is the standard inner-page header
(eyebrow, title, body, art, breadcrumb `crumbs`). `Header` / `Footer` / `QuickLinks` are
mounted globally in the root layout.

### Art — `src/components/Art.tsx`

All illustration is code-drawn SVG; there are no image files.

- `SceneArt({ variant })` — hero artwork, where `variant` is an `ArtKey`:
  `energy` · `highway` · `urban` · `metering` · `grid`
- `SkylineBand()` — decorative horizon divider
- `IndiaMap()` — plots `locations` from `src/lib/site.ts` using `x`/`y` **percentage**
  coordinates within the map viewport

Because these are generated rather than uploaded, the admin panel's image field will
initially govern *new* photographic content, not this existing art. Whether editors should
be able to swap generated art for photography is an open product question.

---

## Conventions

- Compose with Tailwind utilities; reach for `@utility` in `globals.css` only when a
  pattern repeats across many files (as `container-x` and the display scale do).
- Prefer tokens over raw hex. If a colour is worth using twice, it is worth a token.
- Keep components Server Components unless they need state or effects — currently only
  `Reveal`, `Counter` and the nav interactions are `"use client"`.
- Every interactive element needs a visible focus state; `GoldButton` models it with
  `focus-visible:outline-2 focus-visible:outline-offset-3`.
