# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS: `index.html` + `privacy.html`, one CSS file (or inline), no build step. Deployed from a GitHub repo to a free static host (Cloudflare Pages, Netlify or Vercel). Host not yet chosen. Domain: theranchsteamlab.com (already owned).

## Users

| Visitor | Arrives from | Wants | Primary action |
| --- | --- | --- | --- |
| Player | Ripple Pool or Snakedoku footer, social posts | More games from the same maker | Play another game |
| Hunchwell prospect | Hunchwell footer, privacy or terms pages | To confirm the company is real before sharing health data | Join the waitlist |
| Reviewer or partner | App Store listing, search for the LLC name | Proof of a legitimate business and a contact | Email hello@theranchsteamlab.com |

Most visitors arrive from a product footer, so they already know one product and are checking out the maker.

## Product Purpose

A one-page microsite for The Ranch STEAM Lab, LLC. It explains who the company is and sends visitors to its products. It's the parent-brand home that each product's footer links to, and it gives the LLC a credible public face for app stores, partners, press and the legal footers on product sites.

Success (first 90 days): every product site's footer links here; at least 30% of visitors click through to a product; Lighthouse 95+ on mobile and WCAG 2.2 AA at launch.

## Positioning

A small, family-owned "thinkers company" in Babcock Ranch, Florida, that makes games, apps and AI experiments. The parent brand stays quiet so each product's own identity carries its card.

## Operating Context

- Page contents: header (wordmark, anchor links), hero, products, about, contact/footer. Plus a privacy page that covers this site only.
- Product links open in the same tab with UTM tags (`?utm_source=ranchsteamlab`).
- Analytics are optional and must be cookie-free (Plausible or Cloudflare Web Analytics), with outbound clicks tracked per product.

## Capabilities and Constraints

Products, games first:

1. **Ripple Pool**: "A calming physics puzzle. Clear the noise, one collision at a time." Live on iPhone and web. Links: https://ripplepool.app/ and https://apps.apple.com/us/app/ripple-pool/id6758126436. Brand color: dark night #100f19.
2. **Snakedoku**: "A calm puzzle with a bite." In development. It has no website, so its card has no outbound link. The owner supplied a banner (`.impeccable/sources/snakedoku-banner.png`).
3. **Hunchwell**: "A voice health diary. Say what you ate, did and felt; it looks for patterns." Waitlist, launching early 2027. Link: https://hunchwell.app/ ("Get an invite"). Brand color: deep green #15201B. Hunchwell runs its own waitlist.

Constraints:

- Static only. Anything that needs a backend waits.
- Mobile-first, light and dark mode.
- Page weight under 500 KB. Images in WebP/AVIF with explicit sizes.
- SEO: title, description, Open Graph and Twitter tags, `Organization` JSON-LD with the legal name, and sitemap.xml.
- No cookies and no tracking beyond privacy-friendly analytics.

Out of scope for v1: blog/CMS, the reused-tech resale business, STEAM classes or course catalog, booking or payments, accounts, newsletter, waitlist hosting, embedded playable games.

Open:

- Hosting provider.

## Brand Commitments

- Name: "The Ranch STEAM Lab" (legal: The Ranch STEAM Lab, LLC). Text wordmark for v1.
- Voice: warm, curious, plain-spoken. Short sentences. No hype.
- Leave out: "veteran-owned", the reused-tech resale business, and STEAM classes or community programs.
- On this site, every product section is in the lab's blues: backgrounds, text, buttons, and blue-duotone images. The owner decided this on 2026-10-21, replacing the PRD's plan to use each product's own colors.
- Footer: "© 2026 The Ranch STEAM Lab, LLC" + Privacy link.

## Evidence on Hand

- Draft copy and full brief: [PRD.md](PRD.md).
- Live products with real links: Ripple Pool (web + App Store) and the Hunchwell waitlist.
- Card art: an existing Ripple Pool screenshot or brand mark, and the existing hunchwell.app OG image. Neither file is in the repo yet. Snakedoku needs placeholder art.
- None of these exist, so future work must not invent them: testimonials, press, user counts, social accounts, a founder photo.

## Product Principles

1. **The products are the point.** Every section either explains the maker or leads to a product. Click-through is the measure of success.
2. **One family, one sky.** On this site the products share the lab's blue world, and each one is told apart by its name, its pitch and its image.
3. **Credible through plain facts.** Legitimacy comes from the legal name, real products and a clear privacy page, not from claims.
4. **Cheap and fast forever.** Static, small, no backend, easy to update by hand.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, alt text, visible keyboard focus, `prefers-reduced-motion` respected.
