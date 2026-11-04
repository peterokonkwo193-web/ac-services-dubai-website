---
name: Precision Climate Engineering
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#00aeef'
  on-primary-container: '#003e58'
  inverse-primary: '#82cfff'
  secondary: '#515f7a'
  on-secondary: '#ffffff'
  secondary-container: '#cfddfd'
  on-secondary-container: '#53617d'
  tertiary: '#a04100'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff7e38'
  on-tertiary-container: '#642600'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#82cfff'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#b9c7e6'
  on-secondary-fixed: '#0d1b33'
  on-secondary-fixed-variant: '#394761'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects immediate reliability, engineering precision, and rapid premium service. Tailored for property owners, commercial facility managers, and residents across Dubai, the interface merges the meticulous clarity of high-end SaaS (Linear, Stripe) with the high-stakes responsiveness of an emergency home-services brand.

The aesthetic leans on a modern technical-utility baseline:
- **Crisp Structural Discipline:** Subtle translucent borders, hairline grid rules, and high contrast against crisp white and deep navy foundations.
- **Atmospheric Climate Accents:** Cooling ice-blue gradients and crystalline tones contrasted with urgent, high-visibility hazard orange for immediate emergency dispatch.
- **Conversion-Forward Layouts:** High-density technician availability indicators, real-time response counters, transparent pricing blocks, and single-click WhatsApp/Call actions.

## Colors

The palette establishes an immediate sensation of climate control—cooling down the intense desert heat while maintaining high corporate credibility.

- **Primary Ice Blue (`#00AEEF`):** Represents cooling air, technical fluid dynamics, and core interactive states (active tabs, primary booking actions, focal metrics).
- **Deep Dark Navy (`#0A1931`):** The structural anchor. Used for primary typography, hero containers, night-mode service modules, and foundational UI weight.
- **Emergency Accent Orange (`#FF6B00`):** Used exclusively for high-intent conversion actions, 24/7 rapid dispatch indicators, emergency banner alerts, and critical warnings.
- **Surface Canvas Light Blue (`#F2F9FC`):** Soft, non-glare background surface conveying cleanliness and chilled airflow.
- **Surface Crisp Pure White (`#FFFFFF`):** High-level card backgrounds, elevated sheets, and popovers to sustain high readability in bright outdoor sunlight.
- **Slate Gray (`#64748B`):** Supporting technical metadata, secondary descriptions, specifications, and deactivated indicators.
- **Border Hairline Tint (`#E2E8F0`):** Precise sub-pixel boundaries on structural cards, table rows, and modular cells.

## Typography

The type system blends the geometric authority of **Outfit** (selected to deliver modern geometric weights with tight kerning and high-impact structural forms) with the utilitarian, ultra-legible clarity of **Inter** for dense scheduling data, diagnostic readouts, and pricing specifications.

- **Headlines & Metric Titles:** Use `Outfit` at `600` and `700` weights. Letter-spacing should track at `-0.02em` on sizes above 24px to enforce a cohesive tech-editorial tone.
- **Body & Longform:** Use `Inter` at `400` weight with relaxed line-heights (`1.5` to `1.6`) to ensure effortless reading across mobile devices in harsh daylight.
- **Labels, Badges, and Micro-Data:** Set in `Inter` at `500` or `600` weight, with uppercase transforms and `+0.04em` tracking for technical status badges (e.g., `AC_CHILLER_FAULT`, `EST_ARRIVAL_15M`).

## Layout & Spacing

The layout is built around a rigorous 8px baseline rhythm across an adaptive 12-column grid on desktop and a 4-column system on mobile devices.

- **Desktop (1200px+):** Max-width container capped at `1280px` centered, 24px gutters, and 32px canvas margins. Side-by-side modules pair diagnostic breakdowns with fast booking rails.
- **Tablet (768px - 1199px):** 8-column layout, collapsing multi-tier forms into progressive step wizards, gutters unified at 20px.
- **Mobile (320px - 767px):** 4-column layout, 16px margins and gutters. Conversion actions, quick call dialers, and technician GPS tracking bars stick to the bottom viewport with an iOS safe-area offset.
- **Section Spacing:** Major structural sections maintain a minimum gap of `space-xl` (40px) on mobile and `4rem` (64px) on desktop to sustain an open, premium breathing room.

## Elevation & Depth

Depth is treated with architectural precision, relying on crisp border strokes layered over ambient, directional shadows rather than heavy blurs.

- **Level 0 (Flat Ground):** Base background `#F2F9FC` with no shadow.
- **Level 1 (Structural Cards & Modules):** Pure white surface `#FFFFFF`, wrapped in a crisp 1px stroke of `#E2E8F0`, accompanied by an ambient shadow: `0 1px 3px 0 rgba(10, 25, 49, 0.04), 0 1px 2px -1px rgba(10, 25, 49, 0.02)`.
- **Level 2 (Hovered Cards & Interactive Controls):** 1px border highlighted to `#00AEEF` at 30% opacity, shadow transitioning to `0 10px 15px -3px rgba(10, 25, 49, 0.06), 0 4px 6px -4px rgba(10, 25, 49, 0.03)`.
- **Level 3 (Modals, Dispatch Trays, Emergency Drawers):** `#FFFFFF` surface with a 1px border of `#0A1931` at 8% opacity, elevated by a high-definition blur shadow: `0 20px 25px -5px rgba(10, 25, 49, 0.1), 0 8px 10px -6px rgba(10, 25, 49, 0.05)`.
- **Dark Mode / Deep Contrast Pods:** Deep Dark Navy `#0A1931` containers utilize an internal 1px top-highlight border `rgba(255, 255, 255, 0.08)` to replicate machine-machined hardware edges.

## Shapes

The design uses balanced, rounded edges (`0.5rem` / `8px` baseline) reflecting modern engineered hardware—neither overly sharp nor excessively bubbly.

- **Interactive Elements (Buttons, Inputs):** `8px` (`0.5rem`) corner radius for standard touch targets.
- **Structural Modules (Cards, Modals):** `16px` (`rounded-lg` / `1rem`) corner radius to create self-contained applets.
- **Technical Tags & Badges:** `9999px` (Pill shape) to provide distinct visual contrast against rectangular cards.
- **Micro-Indicators (Status pips, checkmarks):** Fully rounded circles (`50%`) with pulse animations.

## Components

### Buttons
- **Primary Action (Call to Action / Book AC Service):** `#00AEEF` fill, white `#FFFFFF` text, subtle inset highlight `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25)`, hover state shifts to a rich deepened cyan (`#0096CE`). Height: 48px desktop / 52px mobile.
- **Emergency Dispatch Button:** `#FF6B00` fill, white `#FFFFFF` text, high-visibility glow on hover (`0 0 16px rgba(255, 107, 0, 0.35)`). Includes a dynamic lightning or siren micro-icon.
- **Secondary Action:** Ghost style with `#FFFFFF` background, 1px border `#E2E8F0`, `#0A1931` text. On hover: border tints to `#00AEEF`, text shifts to `#00AEEF`.

### Badges & Status Chips
- **Emergency Pill:** `#FF6B00` background at 10% opacity, `#FF6B00` text, 1px solid border at 20% opacity. Incorporates a pulsing green/orange indicator dot.
- **Cooling Performance Pill:** `#00AEEF` background at 10% opacity, `#00AEEF` text, used for warranty terms and certifications (e.g., `DEWA COMPLIANT`, `SAME DAY GUARANTEE`).

### Cards & Service Tiles
- Standard surface is `#FFFFFF` with a 1px `#E2E8F0` border and `16px` radius.
- Includes a dedicated header section featuring a top-pinned category badge, a bold pricing line (e.g., `From AED 150`), a check-list of inclusions, and an immediate book button.
- Subtle inner gradient hover: linear fade from `rgba(0, 174, 239, 0.02)` to transparent.

### Inputs & Selectors
- Background: `#FFFFFF`. Border: 1px solid `#E2E8F0`. Height: 48px.
- Focus State: Border color transitions sharply to `#00AEEF`, with a ring offset `0 0 0 3px rgba(0, 174, 239, 0.15)`.
- Integrated quick-select chips for Dubai zones (e.g., *Dubai Marina*, *Downtown*, *Jumeirah*, *Arabian Ranches*).

### Checkboxes & Radios
- Square with a `4px` radius for checkboxes; full circle for radios.
- Unchecked: 1.5px `#CBD5E1` border.
- Checked: `#00AEEF` solid fill with crisp `#FFFFFF` tick or center dot.

### Domain-Specific Components
- **Live Tech Dispatch Bar:** Sticky mobile bottom sheet featuring real-time technician count in the user's specific district, estimated arrival time (e.g., `⚡ 2 Technicians available in Business Bay - 25m ETA`), and dual quick-actions: `Call Now` and `WhatsApp Us`.
- **BTU & Room Size Calculator Card:** Interactive range slider mapping square footage directly to recommended AC tonnage and estimated service package.