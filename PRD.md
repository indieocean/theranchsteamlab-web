# The Ranch STEAM Lab — Microsite PRD

Oct 21, 2026 · @Michael · Status: Draft v1

## Overview and goals

A one-page microsite that tells visitors who The Ranch STEAM Lab, LLC is and sends them to its products: Ripple Pool, Snakedoku and Hunchwell. It is the parent-brand home that each product's footer can point to.

The Ranch STEAM Lab is a small, veteran-owned, family-owned "thinkers company" based in Babcock Ranch, FL. It builds SaaS products, games and AI experiments, and supports the local STEAM community.

Goals:

1. Explain the company in one screen: what it makes and who is behind it.
2. Drive clicks to each product: play Ripple Pool, try Snakedoku, join the Hunchwell waitlist.
3. Give the LLC a credible public face for app stores, partners, press and the legal footer on product sites.
4. Ship fast and stay cheap: static, no CMS, under a day to build.

## Audience

| Visitor | Arrives from | Wants | Primary action |
| --- | --- | --- | --- |
| Player | Ripple Pool or Snakedoku footer, social posts | More games from the same maker | Play another game |
| Hunchwell prospect | Hunchwell footer, privacy or terms pages | To check the company is real before sharing health data | Join the waitlist |
| Reviewer or partner | App Store listing, search for the LLC name | Proof of a legitimate business and a contact | Email the company |
| Local community | Babcock Ranch word of mouth | STEAM classes and events | Get in touch |

## Scope

V1 is one static page plus a short legal page. Anything that needs a backend waits.

**In scope (v1)**

- Single scrolling page: hero, products, about, contact, footer
- Three product cards with image, one-line pitch, status badge and outbound link
- Contact by `mailto:` link (no form backend)
- Privacy page covering this site only (no cookies, no tracking beyond privacy-friendly analytics)
- Light and dark mode, mobile-first layout
- Open Graph image and meta tags for link previews

**Out of scope (v1)**

- Blog, news or CMS
- Shop or listings for the reused-tech resale business (stays on Facebook Marketplace)
- STEAM course catalog, booking or payments
- Accounts, newsletter or waitlist hosting (Hunchwell keeps its own waitlist)
- Embedded playable games

## Site structure and content

One page, five sections, top to bottom. Draft copy is a starting point.

1. **Header** — wordmark "The Ranch STEAM Lab", anchor links: Products, About, Contact.
2. **Hero** — headline: "Small tools. Calm games. Built at the Ranch." Subline: "We're a family-owned lab in Babcock Ranch, Florida, making games, apps and AI experiments." Button: "See what we make" (scrolls to Products).
3. **Products** — three cards, games first:
   1. **Ripple Pool** — "A calming physics puzzle. Clear the noise, one collision at a time." Badge: Live on iPhone and web. Links: [Play on the web](https://ripplepool.app/), [App Store](https://apps.apple.com/us/app/ripple-pool/id6758126436).
   2. **Snakedoku** — one-line pitch, status and link to be supplied (see open questions).
   3. **Hunchwell** — "A voice health diary. Say what you ate, did and felt; it looks for patterns." Badge: Waitlist, launching early 2027. Link: [Get an invite](https://hunchwell.app/).
4. **About** — two or three sentences: veteran-owned and family-owned, a "thinkers company" that builds tools, games and AI experiments, and supports the local STEAM community. Optional founder photo or illustration.
5. **Contact and footer** — email link, social links (if any), "© 2026 The Ranch STEAM Lab, LLC", Privacy link.

## Brand and imagery

The parent brand stays quiet and neutral so each product's own look can stand out on its card.

- **Tone:** warm, curious, plain-spoken. Short sentences. No hype.
- **Palette:** warm off-white background, deep ink text, one accent color (proposal: a sunset orange nodding to Southwest Florida). Product cards use each product's own colors: Ripple Pool's dark night (#100f19) and Hunchwell's deep green (#15201B).
- **Type:** one rounded or humanist sans for headings, a clean sans for body.
- **Logo:** text wordmark for v1; a simple mark (for example a barn or ranch gate merged with a beaker or circuit) is optional.

**Images to generate (AI, per owner: ElevenLabs)**

| Asset | Size | Prompt direction |
| --- | --- | --- |
| Hero illustration | 1600 × 900 | Flat, warm illustration of a small workshop-lab at golden hour, palm trees and a ranch fence, laptop and puzzle pieces on the bench |
| Ripple Pool card | 1200 × 800 | Use the existing app screenshot or brand mark rather than a new image |
| Snakedoku card | 1200 × 800 | Game screenshot once available; placeholder art until then |
| Hunchwell card | 1200 × 800 | Use the existing hunchwell.app OG image |
| Open Graph image | 1200 × 630 | Wordmark over the hero illustration, cropped |
| Favicon | 512 × 512 | Simplified mark or "RSL" monogram |

## Technical requirements

Plain static HTML and CSS, deployed to a free static host. No framework needed for one page.

| Area | Requirement |
| --- | --- |
| Stack | Single `index.html` + `privacy.html`, inline or one CSS file, no build step (Astro is fine if reuse is wanted later) |
| Hosting | Cloudflare Pages, Netlify or Vercel free tier; HTTPS; deploy from a GitHub repo |
| Domain | To be decided (see open questions) |
| Performance | Lighthouse 95+ on mobile; page weight under 500 KB; images in WebP/AVIF with explicit sizes |
| Accessibility | WCAG 2.2 AA: contrast, alt text, keyboard focus, `prefers-reduced-motion` |
| SEO | Title, description, Open Graph and Twitter tags; `Organization` JSON-LD with legal name; sitemap.xml |
| Analytics | Optional, cookie-free (Plausible or Cloudflare Web Analytics); outbound clicks tracked per product |
| Links | Product links open in the same tab with UTM tags, e.g. `?utm_source=ranchsteamlab` |

## Success, milestones and open questions

**Success measures (first 90 days)**

- Every product site footer links to the microsite
- At least 30% of visitors click through to a product
- Site passes Lighthouse 95+ and WCAG AA checks at launch

**Milestones**

1. PRD approved
2. Images generated and copy final
3. Build and review (about half a day)
4. Deploy, connect domain, add footer links on Ripple Pool and Hunchwell

**Open questions**

- [x] Domain: which one (for example theranchsteamlab.com, or a .studio or .app)? already have theranchsteamlab.com
- [x] Snakedoku: URL, one-line pitch, platforms and status (live, beta, coming soon)? No website just this one.
- [x] Contact email to publish? no email for now.
- [x] Mention the reused-tech resale and STEAM classes in About, or keep the site to software only? No
- [x] Use the "veteran-owned" line publicly? No
- [x] Social accounts for the company itself, or link only product accounts? Non for now.
