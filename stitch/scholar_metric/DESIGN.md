# Design System Specification: The Academic Curator

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Atheneum"**
This design system rejects the cluttered, "gamified" aesthetic of traditional e-learning in favor of a high-end editorial experience. We treat educational content with the same reverence as a curated museum exhibit or a premium broadsheet. 

To break the "template" look, we utilize **intentional asymmetry**—offsetting headers and using generous, uneven white space to guide the eye. We favor **Tonal Depth** over structural lines, creating a layout that feels grown and organic rather than boxed and confined. The goal is to reduce cognitive load by allowing the content to breathe within a sophisticated, "Glass-and-Paper" architecture.

---

## 2. Colors & Surface Architecture
The palette is anchored in a deep, authoritative `primary` (#00475e) that evokes trust, balanced by a breathable, high-key `surface` (#f8f9fc).

### The "No-Line" Rule
**Strict Mandate:** 1px solid borders are prohibited for sectioning or containment. 
Boundaries must be defined solely through background color shifts. Use `surface_container_low` for secondary sections sitting on a `surface` background. If you feel the need to "box" something, you have failed the layout; use white space (Spacing `8` or `10`) to create the separation instead.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#f8f9fc)
- **Content Cards:** `surface_container_lowest` (#ffffff)
- **In-Page Navigation/Sidebars:** `surface_container` (#eceef0)
- **Nested Controls:** `surface_container_high` (#e7e8ea)

### The "Glass & Gradient" Rule
For floating elements like video overlays or sticky navigation, use **Glassmorphism**. Apply `surface` with 70% opacity and a `backdrop-blur` of 20px. 
To add "soul" to CTAs, apply a subtle linear gradient: `primary` (#00475e) to `primary_container` (#1a5f7a) at a 135-degree angle. This prevents the "flat-and-cheap" look of standard hex fills.

---

## 3. Typography: The Editorial Voice
We use a dual-sans pairing to distinguish between "Display" (The Hook) and "Utility" (The Learning).

- **Headlines (Manrope):** Chosen for its geometric precision and modern authority. Use `display-lg` for hero course titles to create a high-contrast, editorial feel.
- **Body & Labels (Lexend):** Specifically designed to reduce visual stress and improve reading proficiency. Use `body-lg` for course descriptions and `body-md` for lesson content.

**Hierarchy Strategy:** 
Always lead with a `headline-lg` in `on_surface`. Follow with a `label-md` in `on_surface_variant` (all-caps, tracked out 5%) to create a sophisticated metadata layer.

---

## 4. Elevation & Depth
Depth in this system is a result of **Tonal Layering**, not heavy dropshadows.

- **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section. The delta between #ffffff and #f2f4f6 provides a sophisticated "lift" that feels integrated into the environment.
- **Ambient Shadows:** For high-importance floating elements (Modals/Popovers), use a shadow with a 40px blur, 0px offset, and 6% opacity. The shadow color must be a tinted version of `on_surface` (#191c1e), never pure black.
- **The "Ghost Border" Fallback:** If a border is required for AA accessibility in form fields, use `outline_variant` at **15% opacity**. 

---

## 5. Components

### Buttons & CTAs
- **Primary:** Gradient fill (`primary` to `primary_container`), `DEFAULT` (8px) roundedness. 
- **Secondary:** `secondary_container` fill with `on_secondary_container` text. No border.
- **States:** On hover, increase the container luminance by 5%. On press, scale the component to 98%.

### Progress & Performance
- **Progress Bars:** Use a thick 8px track (`surface_container_highest`). The active fill should be a gradient from `primary` to `primary_fixed_dim`. 
- **Micro-Progress:** For lesson lists, use a 4px vertical "pulse" line on the left edge of the active card using `surface_tint`.

### Video Player Controls
- **The "Glass Tray":** Controls should sit on a floating glass bar (`surface` at 60% opacity, 32px blur) with `xl` (24px) roundedness.
- **Icons:** Use `on_surface` for controls. Scrubber knobs should use the `primary` color with a `surface_container_lowest` glow.

### Nested Navigation
- **Architecture:** Forbid the use of "folders." Use indented typography levels. 
- **Selection:** An active parent node should be indicated by a weight change (Medium to Bold) and a subtle `secondary_container` background pill with `md` (12px) corners.

### Cards & Lists
- **Forbid Dividers:** Use `3` (1rem) or `4` (1.4rem) spacing tokens to separate list items. 
- **Visual Grouping:** Group related lessons inside a `surface_container_low` parent container to create a "nested nest."

---

## 6. Do's and Don'ts

### Do:
- **Do** use `20` (7rem) spacing between major sections to emphasize the "clean and focused" mandate.
- **Do** use `tertiary` (#693100) sparingly for "Success" or "Achievement" states to provide a warm, organic counterpoint to the cool indigo.
- **Do** align text-heavy containers to the left but allow imagery or quotes to break the grid and bleed into the margins.

### Don't:
- **Don't** use 100% black text. Use `on_surface` (#191c1e) for better readability and a more premium feel.
- **Don't** use standard "Alert Red" for errors. Use the `error` (#ba1a1a) token inside an `error_container` for a more integrated, less "alarming" notification style.
- **Don't** use 90-degree corners. Everything must adhere to the **0.5rem (DEFAULT)** to **1.5rem (xl)** roundedness scale to maintain the "Inviting" brand persona.