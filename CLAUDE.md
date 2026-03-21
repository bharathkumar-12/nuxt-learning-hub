# CLAUDE.md — AI Style Guide for nuxt-learning-hub

This file is the authoritative reference for any AI assistant (LLM) working in this codebase.
Read it fully before making any UI or code changes.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 3 (file-based routing) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Fonts | Google Fonts — Manrope + Lexend + Material Symbols Outlined |
| Utilities | VueUse (`@vueuse/nuxt`) |
| Language | TypeScript (pages/composables), JS (data files) |

---

## Design Philosophy — "The Digital Atheneum"

The UI is a **high-end editorial experience**, not a gamified e-learning dashboard.
Think museum-quality presentation: breathing space, typographic hierarchy, and tonal depth over decorative noise.

**Three rules to never break:**
1. No 1px solid borders for sectioning — use background color shifts and whitespace instead.
2. Never pure black (`#000`) or pure red — use `on-surface` (`#191c1e`) and `error` (`#ba1a1a`).
3. No 90-degree corners anywhere — minimum `border-radius: 0.5rem`.

---

## Color Tokens

All tokens are registered in `assets/css/main.css` under `@theme` and are available as Tailwind utilities (e.g. `bg-primary`, `text-on-surface`).

### Primary
| Token | Hex | Use |
|---|---|---|
| `primary` | `#00475e` | CTAs, active states, icons, accents |
| `primary-container` | `#1a5f7a` | Gradient pair for primary CTA |
| `primary-fixed` | `#c0e8ff` | Light accent on dark surfaces |
| `primary-fixed-dim` | `#92cfee` | Progress bar fill end, muted accents |
| `on-primary` | `#ffffff` | Text/icons on primary backgrounds |

### Secondary
| Token | Hex | Use |
|---|---|---|
| `secondary` | `#4c616c` | Metadata, badges, secondary labels |
| `secondary-container` | `#cfe6f2` | Chip backgrounds, secondary CTA fill |
| `on-secondary-container` | `#526772` | Text inside secondary containers |

### Tertiary (use sparingly — success/achievement only)
| Token | Hex | Use |
|---|---|---|
| `tertiary` | `#693100` | Warm accent text |
| `tertiary-fixed` | `#ffdcc6` | Warm chip/badge backgrounds |

### Surface (layering system)
Stack surfaces to create depth without borders:

```
surface-container-lowest (#ffffff)   ← content cards
  on top of
surface-container-low   (#f2f4f6)   ← section backgrounds
  on top of
surface-container       (#eceef0)   ← sidebars
  on top of
surface                 (#f8f9fc)   ← page base / body bg
```

| Token | Hex |
|---|---|
| `surface` | `#f8f9fc` |
| `surface-container-lowest` | `#ffffff` |
| `surface-container-low` | `#f2f4f6` |
| `surface-container` | `#eceef0` |
| `surface-container-high` | `#e7e8ea` |
| `surface-container-highest` | `#e1e2e5` |
| `surface-dim` | `#d8dadc` |

### Text
| Token | Hex | Use |
|---|---|---|
| `on-surface` | `#191c1e` | Primary body text |
| `on-surface-variant` | `#40484d` | Secondary/metadata text |
| `outline` | `#70787d` | Timestamps, captions |
| `outline-variant` | `#c0c8cd` | Divider color (background shift preferred) |

### Feedback
| Token | Hex |
|---|---|
| `error` | `#ba1a1a` |
| `error-container` | `#ffdad6` |

---

## Typography

### Fonts loaded in `nuxt.config.ts` → `app.head.link`
- **Manrope** (wght 400, 500, 700, 800) — headlines, section titles, card headings
- **Lexend** (wght 300, 400, 500, 600) — body text, labels, UI copy
- **Material Symbols Outlined** — icon font (ligature-based)

### Rules
- `h1–h6` → `font-family: Manrope` (set globally in `main.css`)
- `body` → `font-family: Lexend` (set globally in `main.css`)
- Metadata labels → all-caps, `letter-spacing: 0.05em`, `on-surface-variant` color
- Never use `font-black` on body text — reserve `font-extrabold` / `font-bold` for Manrope display use

### Type scale (inline style approach)
```
Display hero:       font-size: 3.5rem–4.5rem, Manrope 800
Section headline:   font-size: 2rem–2.5rem,  Manrope 700
Card title:         font-size: 1.125rem,      Manrope 700
Body large:         font-size: 1rem,          Lexend 400
Body small / meta:  font-size: 0.75rem–0.875rem, Lexend 400–500
Label / eyebrow:    font-size: 0.7rem, Lexend 500, uppercase, letter-spacing 0.05em
```

---

## Spacing & Layout

- **Max content width:** `1440px` with `px-8` horizontal padding
- **Section vertical padding:** `6rem 0` (≈ `py-24`)
- **Between major sections:** minimum `6rem` gap
- **Card inner padding:** `2rem` standard, `1.5rem` compact
- **Grid gaps:** `1.25rem` (cards), `1.5rem` (bento), `2rem` (large feature grids)

---

## Border Radius Scale

Always use rounded corners. The scale is in `@theme`:

| Class | Value | Use |
|---|---|---|
| `rounded` | `0.25rem` | Micro inputs, tags |
| `rounded-lg` | `0.5rem` | Buttons, small chips |
| `rounded-xl` | `0.75rem` | Standard cards, inputs |
| `rounded-2xl` | `1rem` | Feature cards |
| `rounded-3xl` | `1.5rem` | Hero panels, large containers |
| `rounded-[2rem]` | `2rem` | Course/topic cards |
| `rounded-[2.5rem]` | `2.5rem` | Large hero cards |

---

## Elevation & Shadow

**Ambient shadow formula** (not a hard drop shadow):
```css
box-shadow: 0 0 40px rgba(25, 28, 30, 0.04);   /* resting */
box-shadow: 0 0 40px rgba(25, 28, 30, 0.10);   /* hover   */
```

- Shadow color is always tinted `on-surface` (#191c1e), never pure black.
- Shadow offset is always `0 0` — no directional bias.
- Modals / floating elements: `0 0 40px rgba(25, 28, 30, 0.06)`.
- Never use `shadow-2xl` or larger Tailwind preset shadows — they look too heavy.

---

## Glassmorphism

```css
background: rgba(248, 249, 252, 0.6);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

Use for: fixed nav, video control trays, floating overlays.
Always keep opacity at 60–70% — never fully opaque.

---

## Buttons & CTAs

### Primary CTA
```html
style="background: linear-gradient(135deg, #00475e, #1a5f7a); color: #fff; ..."
```
Hover: `filter: brightness(1.08)`, Press: `transform: scale(0.98)`

### Secondary CTA
```html
style="background: #cfe6f2; color: #00475e; font-weight: 600; ..."
```

### Button shape
Minimum `border-radius: 0.5rem`. Pill buttons use `border-radius: 9999px`.

---

## Icons — Material Symbols Outlined

The `.material-symbols-outlined` class is defined globally in `main.css`.
Icons are rendered by writing the icon ligature name as text content:

```html
<span class="material-symbols-outlined" style="font-size: 1.25rem; color: #00475e;">
  play_circle
</span>
```

The font is loaded via `nuxt.config.ts → app.head.link` (not via CSS `@import`).
Never use `@import url(...)` inside `main.css` for Google Fonts — it conflicts with the Tailwind Vite plugin.

---

## Animations & Motion

### CSS transitions (Tailwind)
```
transition-all duration-300   → card hover states
transition-transform duration-500–700 → image zoom, rotations
transition-colors duration-200 → text/bg color changes
```

### SVG animations — use SMIL, not CSS transforms
For SVG elements, use `<animateTransform>` and `<animate>` instead of CSS `animation` with `transform-origin`. More reliable cross-browser in SSR/Nuxt context:

```xml
<!-- Rotation around a center point -->
<animateTransform attributeName="transform" type="rotate"
  from="0 250 250" to="360 250 250" dur="12s" repeatCount="indefinite"/>

<!-- Float (translate up/down) -->
<animateTransform attributeName="transform" type="translate"
  values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite"/>

<!-- Blinking -->
<animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
```

### Hover pattern for cards
```html
onmouseover="this.style.boxShadow='0 0 40px rgba(25,28,30,0.10)'"
onmouseout="this.style.boxShadow='0 0 40px rgba(25,28,30,0.04)'"
```

---

## Inline Styles vs Tailwind Classes

This project uses a **deliberate hybrid approach**:

- **Tailwind classes** → layout, spacing, grid, flex, responsive breakpoints, font weight/size
- **Inline `style` attributes** → exact color values (from design tokens), custom shadows, gradients, precise pixel values not in the Tailwind scale

This is intentional. Do not refactor inline styles into Tailwind unless the exact token exists as a configured utility.

---

## Component Conventions

### Naming
- Pages: `pages/[name].vue` or nested dynamic routes
- Components: PascalCase filenames, e.g. `LessonCompleteButton.client.vue`
- `.client.vue` suffix = client-only component (no SSR)

### Script style
- Use `<script setup>` with TypeScript where possible
- Use `defineProps<{...}>()` generic syntax for type-safe props
- Use `defineEmits<{(e: 'name', value: Type): void}>()` for typed emits

### Composables
- Stored in `composables/` — auto-imported by Nuxt
- Return plain objects or `computed` refs, not reactive proxies where avoidable

---

## File Structure Quick Reference

```
assets/css/main.css        ← Tailwind import + @theme tokens + global styles
composables/courseData.js  ← Raw course data (chapters, lessons, slugs)
composables/useCourse.ts   ← Typed composable — maps data, builds lesson paths
layouts/default.vue        ← Root layout wrapper
pages/index.vue            ← Home / landing page
pages/course.vue           ← Course shell: sidebar nav + <NuxtPage> content area
pages/course/chapter/[chapterSlug]/lesson/[lessonSlug].vue ← Lesson detail view
components/VideoPlayer.vue ← YouTube iframe embed
components/LessonCompleteButton.client.vue ← Progress toggle, localStorage
nuxt.config.ts             ← Vite plugin, CSS, modules, Google Fonts head links
```

---

## What NOT to Do

| Avoid | Instead |
|---|---|
| `border: 1px solid` for sectioning | Shift background color between surface tokens |
| `color: #000` or `color: black` | Use `#191c1e` (`on-surface`) |
| `box-shadow` with a directional offset | Use `0 0 40px rgba(25,28,30,0.06)` ambient glow |
| `border-radius: 0` (sharp corners) | Minimum `0.5rem` |
| `@import url(...)` in `main.css` for Google Fonts | Load via `nuxt.config.ts → app.head.link` |
| CSS `animation` with `transform-origin` on SVG elements | Use `<animateTransform>` SMIL attributes |
| Heavy Tailwind shadows (`shadow-2xl`, `shadow-xl`) | Custom ambient shadow via inline `style` |
| Adding features or refactoring not asked for | Only change exactly what was requested |
