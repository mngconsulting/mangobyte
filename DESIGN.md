<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: MangoByte
description: We build it and we run it — software development and DevOps as one integrated capability.
---

# Design System: MangoByte

## 1. Overview

**Creative North Star: "The Mango at 2am"**

A ripe mango on a dark counter under a single warm light — the fruit itself is the only color in the room, and it's enough. MangoByte is a two-person studio that builds software and runs it: the visual system should feel like the calm confidence of a well-run system (dark, precise, unhurried) carrying the one literal, unapologetic brand color the name promises — real mango orange — with a leaf-green accent as its natural, quieter companion. This is not a warm consultancy brochure and not a loud startup pitch; it's closer to a terminal you'd trust at 3am that happens to be lit by a single piece of fruit.

It explicitly rejects: the generic AI-consulting-template look (centered hero, gradient-text wordmark, tiny uppercase tracked eyebrows over every section, identical icon+heading+text card grids), corporate stock-photo warmth (handshakes, laptops-in-cafes), and the cream/sand/beige "warm SaaS" default. Software dev and DevOps read as one integrated offering, not two menu items, and the two founders read as one studio, not two freelancers sharing a page.

**Key Characteristics:**
- Near-black surface, Mango Flesh orange as the one identity color carrying 30–60% of the page (headlines, key rules, primary CTA) — the literal, deliberate payoff of the company name
- Leaf Green as a second, distinct accent — used sparingly for contrast (the "we run it"/DevOps beat, hover states, status highlights)
- Display + mono typography: confident headlines paired with a monospace voice for labels and small technical details
- Responsive motion only — real feedback and transitions, no orchestrated scroll choreography

## 2. Colors

A dark, committed palette built around real mango tones: a ripe-mango-orange anchor carries most of the identity, with a leaf-green accent held in reserve as its natural companion color.

### Primary
- **Mango Flesh** (oklch(0.72 0.17 55)): The identity color — a real, ripe mango orange, not a muted corporate amber. Headlines, the primary CTA (email link), section rules, active nav state, key numbers ("7 years combined"). Carries 30–60% of any given section.

### Secondary
- **Leaf Green** (oklch(0.68 0.14 155)): The mango's natural companion — a leaf/stem green, distinct in hue and lightness from Mango Flesh. Used for the "we run it" / DevOps beat, hover states on secondary actions, and small status-style highlights. Never the dominant color of a section; it's the leaf, not the fruit.

### Neutral
- **Near-Black** (oklch(0.10 0 0)): Page background. Pure neutral, zero chroma — the mood lives in Mango Flesh and Leaf Green, not in a tinted surface. Also the practical reason the mango pops instead of reading as a fruit-stand orange-on-yellow.
- **Charcoal Surface** (oklch(0.18 0.006 55)): Card/panel background, pulled slightly toward the brand hue at very low chroma. Used for bio cards, service panels.
- **Paper White** (oklch(0.96 0 0)): Primary body text. ≥7:1 contrast against Near-Black.
- **Muted Warm-Gray** (oklch(0.62 0.02 55)): Secondary text (captions, footer copy, meta lines). ≥4.5:1 contrast against Near-Black.

### Named Rules
**The One Fruit Rule.** Mango Flesh is the only color allowed to carry a headline or a primary action. Leaf Green never leads a section — it accents one, the way a leaf accents a mango.

## 3. Typography

**Display Font:** Space Grotesk Variable (with system-ui, sans-serif fallback) — carries display, headline, title, and body roles at different weights, per the "one family, multiple weights" pairing principle.
**Body Font:** Space Grotesk Variable, regular weight (400) — same family as display; its geometric-but-slightly-quirky letterforms stay legible at body sizes without needing a second typeface.
**Label/Mono Font:** JetBrains Mono (weight 500) — the genuine-contrast pairing for labels, meta text, and technical details.

**Character:** A confident, unornamented display face for the headline moments, paired with a monospace voice for anything label-like — section markers, the years-of-experience stat, contact details — so the "built by engineers" feel comes through in small details rather than a gimmick.

### Hierarchy
- **Display** (600–700 weight, clamp(2.5rem, 6vw, 4.5rem), tight line-height ~1.05): Hero headline only.
- **Headline** (600 weight, clamp(1.75rem, 3.5vw, 2.5rem), line-height ~1.15): Section titles (About, Services, Contact).
- **Title** (500 weight, ~1.25rem, line-height ~1.3): Founder names, service names.
- **Body** (400 weight, ~1.0625rem, line-height ~1.6, max 65–75ch): Company story, bios, service descriptions.
- **Label** (500 weight, mono, ~0.8125rem, letter-spacing ~0.02em, no forced uppercase-tracking on every section): Meta details — dates, locations, contact labels.

### Named Rules
**The No-Eyebrow Rule.** Section headers do not get a small tracked uppercase kicker by default. If a label appears above a headline, it must earn its place (e.g. a real status-style tag), not decorate an otherwise plain section.

## 4. Elevation

Flat by default, in keeping with Responsive motion energy — this is a dark, calm system, not a layered card stack. Depth comes from the Near-Black / Charcoal Surface contrast and from Mango Flesh rules/borders, not from shadow. A very subtle ambient glow is permitted around the primary CTA on hover, as the one deliberate exception.

### Shadow Vocabulary
- **cta-hover-glow** (`box-shadow: 0 0 24px oklch(0.72 0.17 55 / 0.35)`): Primary CTA hover only — a soft mango-orange glow suggesting warmth/ripeness, not a generic elevation shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow in the system is the CTA hover glow; nothing else casts one.

## 5. Components

Components should feel deliberate and a little terminal-native: sharp or lightly rounded, never soft-and-bouncy.

### Buttons
- **Shape:** Minimal rounding (4px) — not fully square, not pill-shaped.
- **Primary:** Mango Flesh background, Near-Black text (dark text passes on this saturated mid-lightness orange; verify at implementation — fall back to Paper White text if it doesn't), padding 14px 32px.
- **Hover / Focus:** cta-hover-glow shadow plus a slight brightness lift; focus-visible gets a 2px Mango Flesh outline offset 2px.
- **Secondary / Ghost:** Transparent background, 1px Mango Flesh border, Paper White text; hover fills with Charcoal Surface.

### Cards / Containers
- **Corner Style:** 8px radius — the founder bio cards and service panels.
- **Background:** Charcoal Surface.
- **Shadow Strategy:** None (see Elevation) — separation comes from the Near-Black/Charcoal contrast and spacing, not shadow.
- **Border:** None by default; avoid any colored `border-left`/`border-right` accent stripes.
- **Internal Padding:** Generous, ~32-40px, to keep the dark palette from feeling cramped.

### Navigation
- **Style:** Simple anchor nav (Home / About / Services / Contact), mono-labeled, Paper White at rest, Mango Flesh for the active/current section.
- **Mobile:** Collapses to a single-row horizontal scroll or a minimal top bar; no hamburger-hidden nav on a 4-item single-page site unless space genuinely requires it.

## 6. Do's and Don'ts

### Do:
- **Do** let Mango Flesh carry headlines, the primary CTA, and key stats — per the One Fruit Rule.
- **Do** use Leaf Green as the natural companion accent (DevOps beat, hover states) — never as the lead color of a section.
- **Do** keep the surface flat and dark; depth comes from Near-Black/Charcoal contrast, not shadow.
- **Do** use the mono label font for small technical/meta details (dates, location, contact label) to reinforce "built by engineers."
- **Do** treat software development and DevOps as one integrated "build it and run it" capability in copy and layout, never as two separate menu items.
- **Do** keep body text at Paper White or better against Near-Black to guarantee ≥7:1 contrast.

### Don't:
- **Don't** use a cream/sand/beige body background — the mood lives in Mango Flesh and Leaf Green, not a warm-tinted surface.
- **Don't** let the palette drift into fruit-stand literalism (no yellow gradients, no illustrated mango graphics, no skeuomorphic fruit iconography) — the color does the work, not a mango clipart.
- **Don't** add a tiny uppercase tracked eyebrow above every section — per the No-Eyebrow Rule, it must earn its place.
- **Don't** use identical icon+heading+text card grids for the two services — they are one integrated offering, framed together.
- **Don't** use corporate stock photography (handshakes, laptop-in-cafe imagery) for the founder bios.
- **Don't** use `border-left`/`border-right` colored stripes as a card or callout accent.
- **Don't** let Leaf Green lead a section — it's the accent, never the base.
