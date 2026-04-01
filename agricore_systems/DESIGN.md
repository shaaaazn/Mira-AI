# Design System Document: The Precision Harvest Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Agronomist"
This design system moves beyond the utility of a standard dashboard into the realm of high-end editorial agtech. It is designed to feel like a premium scientific journal—authoritative, clean, and meticulously organized—while maintaining the organic warmth of the earth. 

We break the "template" look by eschewing rigid, bordered grids in favor of **intentional asymmetry** and **tonal depth**. The interface should feel like a series of sophisticated, layered surfaces rather than a flat digital screen. By utilizing high-contrast typography scales and generous "white space" (which we treat as "breathing room"), we elevate data from mere numbers to actionable intelligence.

---

## 2. Colors

The palette is rooted in the deep forest and sky, balanced by clinical neutrals that ensure data remains the protagonist.

### The "No-Line" Rule
**Explicit Instruction:** Use of 1px solid borders for sectioning or containment is prohibited. 
Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` card should sit on a `surface` background to define its edges naturally.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper or frosted glass. 
*   **Base:** `surface` (#f9f9ff)
*   **Low Priority/Large Sections:** `surface-container-low` (#f0f3ff)
*   **Standard Cards:** `surface-container-lowest` (#ffffff)
*   **Elevated/Interacted States:** `surface-container-high` (#e2e8f8)

### The "Glass & Gradient" Rule
To achieve a signature look, floating elements (like navigation bars or modals) must utilize **Glassmorphism**. Use semi-transparent versions of `surface` with a `backdrop-blur` (e.g., 12px-20px). Main CTAs should avoid flat fills; instead, use a subtle linear gradient from `primary` (#00652C) to `primary-container` (#15803D) to provide depth and "soul."

---

## 3. Typography

The system utilizes **Inter** exclusively to maintain a modern, technical aesthetic. The editorial feel is achieved through a dramatic scale between display and body text.

*   **Display (lg/md/sm):** Used for "Big Data" hero moments—crop yields or weather alerts. Tight letter-spacing (-0.02em) to feel authoritative.
*   **Headline & Title:** Used to narrate the user journey. Titles should feel grounded and clear.
*   **Body (lg/md/sm):** Optimized for long-form agronomy reports or data descriptions. High legibility is the priority.
*   **Label (md/sm):** Reserved for metadata and technical tags, often in `on-surface-variant` (#3f493f) to keep them secondary.

---

## 4. Elevation & Depth

We reject traditional box-shadows in favor of **Tonal Layering**.

### The Layering Principle
Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural "lift" that mimics high-end editorial stationery.

### Ambient Shadows
When a floating effect is required (e.g., a primary action FAB), use **Ambient Shadows**:
*   **Blur:** 24px–40px.
*   **Opacity:** 4%–8%.
*   **Color:** Use a tinted version of `on-surface` (#151C27) rather than pure black to simulate natural light.

### The "Ghost Border" Fallback
If accessibility requires a border, use a **Ghost Border**: The `outline-variant` (#becabc) token at **15% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** Gradient-fill (`primary` to `primary-container`), `xl` roundedness (1.5rem). High contrast text in `on-primary`.
*   **Secondary:** Glassmorphic background with a "Ghost Border."
*   **Tertiary:** Pure text with `primary` color, used for low-emphasis actions.

### Data Cards (Bespoke)
Cards must not have borders. Use `surface-container-lowest` and an `xl` corner radius (1.5rem). For critical status (e.g., "Need Attention"), use a 4px left-accent vertical bar in `tertiary` (#9A3500) rather than coloring the whole card.

### Chips
*   **Selection:** Use `secondary-fixed` (#dbe1ff) for active states.
*   **Filter:** `surface-container-high` with `on-surface` text. Shape: `full` (pill).

### Input Fields
*   **Styling:** Soft-filled `surface-container-low` rather than outlined. On focus, transition to `surface-container-highest` with a subtle `primary` ghost-border.
*   **Forbid:** Standard 1px high-contrast borders.

### Weather/Status Indicators
Use the "Sky Blue" `secondary` (#0051D5) for weather-related data and "Earthy Orange" `tertiary` (#9A3500) for alerts. These should be presented as soft, semi-transparent glows or high-contrast labels.

---

## 6. Do's and Don'ts

### Do
*   **DO** use asymmetric layouts. Align a headline to the left and a data viz element slightly offset to the right to create a professional, "designed" feel.
*   **DO** use "surface-tint" (#006d30) at 5% opacity for large background areas to give the "white" a hint of chlorophyll-rich green.
*   **DO** use the Spacing Scale strictly. Use `spacing-16` (4rem) to separate major content blocks to ensure the UI feels "expensive."

### Don't
*   **DON'T** use dividers. If you need to separate two list items, use `spacing-4` (1rem) of empty space or a subtle shift from `surface-container-lowest` to `surface-container-low`.
*   **DON'T** use 100% black text. Always use `on-surface` (#151C27) to maintain a soft, premium legibility.
*   **DON'T** crowd the screen. If a view feels busy, increase the padding using `spacing-10` or `spacing-12`. In AgTech, clarity equals trust.