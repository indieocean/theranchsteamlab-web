---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["privacy.html"]
---

# Homepage (index.html)

Scope: the single-page microsite at theranchsteamlab.com, plus privacy.html in the same world. Mode: Persuade.

Audience and job: players arriving from a product footer, Hunchwell prospects checking the company is real, and reviewers looking for a legitimate LLC. The action is a click through to a product: play Ripple Pool, join the Hunchwell waitlist. Snakedoku is shown as in development, with no link.

Constraints: static HTML/CSS plus a small amount of vanilla JS for the hero canvas; mobile-first; light/dark; under 500 KB; WCAG 2.2 AA; respect prefers-reduced-motion. No email yet: contact slot says it's coming soon.

User inputs: likes blue; wants one big hero animation; RSL monogram logo made in ElevenLabs; avoid corporate, generic-startup and busy.

## Direction contract

THESIS: The lab as Babcock Ranch's own solar field seen from the air, with the RSL monogram spelled out by panels that catch the sun. It refuses the split hero with a headline beside a product row of cards.

OWN-WORLD: Florida noon sky blue (#CDE8FA ground), photovoltaic navy (#0E2A5C) and cell blue (#1F4E9C) panels with fine silver cell lines, white specular glint as the only "light" accent, sun yellow (#FFC93C) used only for the sun and live status. Components are panels: rectangular, cell-gridded, square-cornered; status reads like an inverter monitor (Live: generating; Waitlist: commissioning 2027; In development: under construction).

STORY: The visitor sees a calm, sunny field that answers their cursor, reads who builds it in one line, and leaves through one of the product rows to play or join.

FIRST VIEWPORT: Sky band across the top third with nav and a large two-line headline at left. Below a horizon line, the solar array fills the full width to the bottom edge; RSL is spelled in the right two-thirds of the field by panels at a steeper tilt. A navy monitor strip pinned to the bottom edge lists the three products with status and their direct actions; "See what we make" sits under the headline.

FORM: Solar Field, candidate 2 on my ordered list (chosen by the user after re-rolls). seed:80fc9096ce3f9ba6. Signature interaction: the cursor is the sun; every panel's shading follows it, the RSL panels flash white glints as the sun passes, and on load the rows wake in a sweep from flat to tracking. Motion grammar: slow eased tracking, one load sweep, nothing else animates on the page except a quiet reveal of product rows.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Hosting provider. (Contact is hello@theranchsteamlab.com via Cloudflare Email Routing; the Snakedoku pitch came from the owner.)

## Owner changes after the first review (2026-10-21)

- Every product section is in the lab's blues: band backgrounds #163A72 / #0F2A57 / #1D4A8C, blue inks, #8EC1FF buttons with navy text. All product images are baked into a blue duotone (#081733 / #2E64C2 / #E6F2FC). This replaces each product keeping its own colors.
- Snakedoku uses the owner's banner (duotoned) and its tagline "A calm puzzle with a bite."
- Product images sit in solar-panel frames: a sun glint travels around each frame (7s, staggered), and the panel tilts toward the cursor with a sheen. Reduced motion stops both.
- The intro line sits between the headline and the button, giving the order "who we are, then the action".
