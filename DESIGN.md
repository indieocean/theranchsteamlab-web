---
name: The Ranch STEAM Lab
description: A family lab's home seen as Babcock Ranch's solar field from the air, under a Florida noon sky.
colors:
  sky: "#CDE8FA"
  sky-line: "#A7D2F2"
  ground: "#EEF6FC"
  ink: "#0B1E3F"
  ink-soft: "#2C4468"
  navy: "#0E2A5C"
  cell: "#1F4E9C"
  monitor: "#0B1E3F"
  monitor-ink: "#E6F2FC"
  monitor-soft: "#9DB9DC"
  sun: "#FFC93C"
  sun-halo: "#FDE7A6"
  field: "#7F9C8A"
  trees: "#3B6066"
  band-ripple: "#163A72"
  band-deep: "#0F2A57"
  band-bright: "#1D4A8C"
  band-ink: "#EAF3FF"
  band-accent: "#8EC1FF"
  band-accent-hover: "#B9D9FF"
  night-sky: "#0F2448"
  night-ground: "#0A1A36"
  night-monitor: "#061127"
  night-button: "#2E64C2"
  night-button-hover: "#3D74D4"
  duotone-shadow: "#081733"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, min(6.4vw, 8.5svh), 5.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline-section:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.55
  status:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
rounded:
  none: "0px"
  focus: "2px"
  lamp: "50%"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "4rem"
  space-6: "clamp(4.5rem, 9vw, 8rem)"
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.monitor}"
    textColor: "{colors.monitor-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cell}"
    textColor: "{colors.monitor-ink}"
  button-primary-dark:
    backgroundColor: "{colors.night-button}"
    textColor: "#FFFFFF"
  button-primary-dark-hover:
    backgroundColor: "{colors.night-button-hover}"
  button-product:
    backgroundColor: "{colors.band-accent}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.4rem"
    height: "48px"
  button-product-hover:
    backgroundColor: "{colors.band-accent-hover}"
  monitor-reading:
    backgroundColor: "{colors.monitor}"
    textColor: "{colors.monitor-ink}"
    typography: "{typography.title}"
    padding: "1.1rem clamp(0.75rem, 2vw, 1.75rem) 1.25rem"
  status-lamp:
    size: "12px"
    rounded: "{rounded.lamp}"
  status-lamp-live:
    backgroundColor: "{colors.sun}"
    size: "12px"
    rounded: "{rounded.lamp}"
  product-band:
    backgroundColor: "{colors.band-ripple}"
    textColor: "{colors.band-ink}"
    padding: "clamp(3rem, 7vw, 6rem) 0"
  panel-frame:
    rounded: "{rounded.none}"
    padding: "8px"
  facts-row:
    textColor: "{colors.ink}"
    padding: "0.9rem 0"
---

# Design System: The Ranch STEAM Lab

## Overview

**Creative North Star: "The Solar Field at Noon"**

The lab is Babcock Ranch's solar field seen from the air under a bright Florida sky. Everything is a panel: rectangular, square-cornered, set in rows, shaded by where the sun is. The page reads top to bottom as sky, horizon, array and inverter monitor, then a run of deep-blue product bands, then sky again for the facts. The cursor is the sun. The hero panels follow it, the panels that spell RSL throw white glints, and each product image sits in a panel frame that tilts toward the pointer.

Density is calm and generous. Large heavy display type sits on open sky, and status reads in a plain monitor voice ("Live on iPhone and web", "In development", "Waitlist, launching early 2027"). There is one palette family. The whole site lives in sky and photovoltaic blues, and products are told apart by name, pitch and image, never by their own colours. The only warm colour is sunlight.

Motion is slow, eased and physical: panels track, glints travel, rows reveal once. Nothing bounces, and nothing animates for decoration alone. When the visitor asks for reduced motion, the field renders one still frame and every loop stops.

**Key Characteristics:**
- Sky, field and navy-monitor bands stacked like an aerial view.
- Square-cornered panels everywhere; the only round shapes are the sun and the status lamps, plus Ripple Pool's round board image.
- One family of blues; sun yellow appears only as light.
- Heavy Bricolage Grotesque display set tight against a plain Hanken Grotesk body.
- Status shown by lamp shape as well as colour: a solid pulsing sun for live, half-filled for waitlist, dashed for in development.

## Colors

A cool, sunlit range of sky and photovoltaic blues with one warm light source.

### Primary
- **Photovoltaic Navy** (`navy`): headline and section-title ink on sky, and the 2px rule on top of the facts table. It is the colour of the panels themselves.
- **Cell Blue** (`cell`): the hover state of the primary button and the scrollbar thumb; the lit face of a panel.

### Secondary
- **Monitor Night** (`monitor`): the inverter strip under the hero, the primary button at rest, and the footer. Text on it is **Monitor Ink** (`monitor-ink`), with secondary readings in **Monitor Haze** (`monitor-soft`).
- **Band Blues** (`band-ripple`, `band-deep`, `band-bright`): one per product band, in page order, so the run reads as three neighbouring rows of panels. Band text is **Band Ink** (`band-ink`). Each band also sets a soft ink tuned to its own background (#A9C3E3, #B4C9EA, #BCD3F0).
- **Tracker Blue** (`band-accent`): the action button on every product band (navy text), the lamp colour inside product status lines, and the cool edge of the frame glint. Hover lifts to `band-accent-hover`.

### Tertiary
- **Noon Sun** (`sun`) with **Sun Halo** (`sun-halo`): the sun disc and its ring, the live lamp and its pulse, the warm core of the frame glint, the skip link and text selection, and the focus ring in dark mode.

### Neutral
- **Noon Sky** (`sky`): the hero, the About section and the privacy page header. **Sky Line** (`sky-line`) divides the facts rows.
- **Ground** (`ground`): the page body and the Contact section.
- **Ink** (`ink`) and **Ink Soft** (`ink-soft`): body text, and secondary text such as the intro, fact labels, the contact note and the date line.
- **Field Grass** (`field`) and **Treeline** (`trees`): drawn only in the hero canvas, under the panels and along the horizon.
- **Duotone Shadow** (`duotone-shadow`): the dark end of the image duotone (#081733 / #2E64C2 / #E6F2FC). Every product image is baked to this ramp before it ships.

### Dark mode
The same world at dusk. The sky becomes `night-sky`, the ground becomes `night-ground`, and the monitor and footer sink to `night-monitor`. Ink inverts to #E6F2FC / #A9C3E3. The `--navy` custom property also flips to #E6F2FC so headlines stay legible, which means it acts as "headline ink" rather than a fixed navy. The primary button becomes `night-button` (white text, `night-button-hover` on hover), and the focus ring turns sun yellow. Product bands keep their blues in both schemes.

### Named Rules
**The Sunlight Only Rule.** Yellow is light, never paint. It appears only where the sun would: the sun, the live lamp, the glint core, selection, the skip link and the dark-mode focus ring. It never fills a surface, a button or a heading.

**The One Sky Rule.** Every product is shown in the lab's blues: band backgrounds, inks, buttons and duotoned images. A product's own brand colour never appears on this site.

## Typography

**Display Font:** Bricolage Grotesque (with Hanken Grotesk, system-ui), weights 600 and 800 loaded, 800 used
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI), weights 400 / 500 / 600

**Character:** A heavy, slightly quirky grotesque, set tight like signage painted on a panel, over a clear, friendly sans that speaks in short plain sentences.

### Hierarchy
- **Display** (800, `display` clamp, 0.95, -0.035em): the hero headline only, one phrase per line ("Small tools. / Calm games. / Built at the Ranch.").
- **Headline** (800, clamp(2.5rem, 6vw, 5rem), 0.95): product names on the bands.
- **Headline, section** (800, clamp(2rem, 4.2vw, 3.5rem), 1, balanced wrap): About and Contact titles. The privacy H1 runs a little larger (clamp(2.25rem, 5vw, 3.75rem)) and its H2s use 1.5rem.
- **Title** (800, 1.25rem, -0.01em): monitor reading names and the wordmark (1.125rem).
- **Lead** (400, clamp(1.125rem, 1.6vw, 1.375rem)): product pitches at 30ch, About copy at 38ch (up to 1.3125rem), hero intro at 46ch (up to 1.25rem).
- **Body** (400, 1.0625rem, 1.55): running text; long-form privacy text capped at 68ch.
- **Label** (600): buttons, reading links, text links, fact labels. Nav links use 500.
- **Status** (400, 0.95rem): monitor status lines in Monitor Haze. Product status lines use 500 at body size.

### Named Rules
**The Plain Voice Rule.** Status and labels are set in sentence case in the body face. There are no uppercase tracked labels and no small lines above headings. The display face is only for names and titles.

## Layout

A single centred column: width `min(100% - 2 × gutter, max)` with a fluid gutter (`gutter`, 16px to 56px) and a 1320px cap. The hero fills the viewport (`min-height: 100svh`) as a four-row grid: masthead, sky with the headline, the field (clamp(220px, 32svh, 420px)), and the monitor strip pinned to the bottom. The monitor is a three-column grid of readings divided by 1px Monitor Haze rules at 25% opacity.

Product bands are full-bleed, each a two-column grid (1fr / 1.1fr, gap clamp(2rem, 6vw, 6rem)) with the copy and image swapping sides on the middle band. About is a two-column grid with the title spanning both columns, then copy beside the facts table. Vertical rhythm uses the `space-*` scale; major sections breathe at `space-6`.

Breakpoints: at 860px the monitor stacks into rows (name and link on one line, status beneath), product bands and About collapse to one column, and the image moves above the copy. At 560px the brand mark shrinks to 44px and the nav tightens. At 400px the wordmark text hides, leaving the monogram.

## Elevation & Depth

Depth comes from the aerial stack of colour bands and from light, not from floating cards. Surfaces are flat, with one exception: product image panels are physical objects. They carry an inset 1px frame highlight and a long, soft drop shadow, and they deepen while tracking the cursor.

### Shadow Vocabulary
- **Panel at rest** (`box-shadow: inset 0 0 0 1px rgba(188,211,240,0.28), 0 2px 0 rgba(255,255,255,0.05), 0 28px 56px -18px rgba(3,10,28,0.7)`): every product image frame.
- **Panel tracking** (`box-shadow: inset 0 0 0 1px rgba(188,211,240,0.45), 0 2px 0 rgba(255,255,255,0.05), 0 40px 70px -20px rgba(3,10,28,0.8)`): while the pointer is over the panel.
- **Sun halo** (`box-shadow: 0 0 0 clamp(10px, 1.4vw, 18px) var(--sun-halo)`): the sun disc only.
- **Lamp glow** (`box-shadow: 0 0 0 4px rgba(255,201,60,0.22)`): the live lamp at rest; on product bands the glow is the accent at 25%.

### Named Rules
**The Only Panels Lift Rule.** Only framed product images cast drop shadows. Bands, buttons, the monitor and the facts table stay flat; the sun halo and lamp glows are light, not lift.

## Shapes

Square corners are the law. The only rounding is a 2px softening on the focus ring and fully round shapes for the sun and status lamps. Ripple Pool's image panel is circular because the game board is a round pool; that is a property of the product image, not a licence for rounded cards. Panels are framed by an 8px aluminium ring (the band colour mixed 70% with black). Hairline cell lines and lit top edges appear only in the hero canvas, where they are drawn. The button arrow is drawn from two 2px borders, rotated (pointing right for outbound links, down for in-page anchors).

## Components

### Buttons
Solid, square and confident, like a labelled switch on equipment.
- **Shape:** square corners (`rounded.none`), min-height 48px, padding 0.8rem 1.4rem, label weight 600, followed by a drawn chevron.
- **Primary:** Monitor Night with Monitor Ink; hover moves to Cell Blue. In dark mode it becomes Night Button with white text.
- **Product:** Tracker Blue with ink-navy text on every band; hover lifts to `band-accent-hover`.
- **Hover / Focus / Active:** background eases over 200ms (`ease-out`); press nudges down 1px; focus is a 3px outline offset 3px in the band's focus colour.
- **Text link:** band ink, weight 600, 1px underline offset 0.22em that thickens to 2px on hover.

### Monitor Reading (signature)
The inverter display under the hero. It shows the three products as readings: a lamp, the product name in Title, the status in Monitor Haze, and an optional 600-weight link underlined in Monitor Haze that brightens to full ink on hover. A product with no destination (Snakedoku) shows no link.

### Status Lamp (signature)
A 12px circle whose shape carries the state, so colour is never the only signal.
- **Live:** solid fill (sun on the monitor, Tracker Blue on bands) with a soft ring. On the monitor it pulses outward ("generating": 2.4s, `ease-out`, infinite, ring 0 to 10px fading to transparent). The pulse is gated by `prefers-reduced-motion: no-preference`.
- **Waitlist:** a 2px ring, half filled by a conic gradient.
- **In development:** a 2px dashed ring.

### Product Band
A full-bleed block of one band blue holding the product name, pitch, status line and actions on one side and a framed image on the other. Each band sets its own background, ink, soft ink and accent so focus rings and lamps follow the band.

### Panel Frame (signature)
Every product image is a solar panel.
- **Frame:** 8px padding in the darkened band colour, inset highlight, long soft shadow (see Elevation).
- **Glint orbit:** a conic sweep (transparent, Tracker Blue, white, sun core, Tracker Blue) masked to the frame ring. It travels around the frame every 7s, linear, staggered by -2.3s and -4.6s across bands, with a soft blue drop-shadow glow.
- **Tilt and sheen:** with a fine pointer, the panel rotates toward the cursor (up to ±5° on Y and ±4° on X; perspective 1000px) and shows a screen-blended radial sheen that follows the pointer. The tilt eases out over 600ms at rest and follows the pointer with a 120ms linear transition while tracking.
- **Reveal:** on scripted pages the image wipes up from the bottom (clip-path plus a 24px rise, 900ms `ease-out`) the first time its band enters the viewport. Content is visible by default without JavaScript.
- **Reduced motion:** the glint parks at 140°, the tilt is removed and the reveal is skipped.

### Facts Table
A definition list with a 2px navy top rule and 1px Sky Line row dividers. Labels (600, Ink Soft) sit in a 9rem column (7.5rem on narrow screens) and values use weight 500. It shows plain legal facts, never claims.

### Navigation
The masthead holds the RSL monogram (56px; the light variant in dark mode) with the wordmark, and three anchor links at weight 500 that underline on hover. The footer is Monitor Night with the light monogram (64px), the copyright line in Monitor Haze and a Privacy link.

### Solar Field Hero (signature)
A canvas array in aerial perspective: rows compress toward a seeded pine-and-palm treeline, and panels are shaded between deep navy and cell blue. RSL is spelled in a lighter range at a steeper tilt in the lower right of the field (centred on narrow screens). The sun follows the pointer with a 0.06 ease and drifts slowly on its own when nobody is steering. On load, columns wake in a left-to-right sweep (14ms per column, 700ms cubic ease) and RSL panels flash once. Near the sun, RSL panels throw additive white glints. The canvas pauses when it is off-screen or the tab is hidden. Under reduced motion it draws one still frame and only redraws in response to the pointer.

## Do's and Don'ts

### Do:
- **Do** build new surfaces from square panels in rows, with corners at `rounded.none`.
- **Do** keep every product in the lab's blues and duotone its imagery to #081733 / #2E64C2 / #E6F2FC before shipping.
- **Do** show status with lamp shape plus plain words (live, waitlist, in development), never with colour alone.
- **Do** give each dark band its own `--focus` colour so the 3px focus ring stays visible.
- **Do** gate every loop and tilt behind `prefers-reduced-motion` and leave a still, complete state.
- **Do** use `ease-out` (cubic-bezier(0.16, 1, 0.3, 1)) for all state and reveal transitions.

### Don't:
- **Don't** use sun yellow as a surface, button or text colour; it is light only.
- **Don't** round cards, buttons or bands. The sun, the lamps and the Ripple Pool board are the only circles.
- **Don't** introduce a product's own brand colours on this site.
- **Don't** add drop shadows to anything except framed product images; the sun halo and lamp glows are light, not elevation.
- **Don't** add uppercase tracked labels or small lines above headings; status speaks in sentence case.
- **Don't** add animation beyond the field, the glint, the tilt, the one-time reveal and the live-lamp pulse.
