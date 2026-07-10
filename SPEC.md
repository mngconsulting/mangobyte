# MangoByte Presentation Website — Spec

## Problem Statement

MangoByte (domain: mngconsulting.tech) is a two-person IT company — a software developer and a DevOps engineer, married, based in Cluj, with 7 years of combined professional experience across multiple industries. Right now the company has no public web presence. Potential clients and collaborators have no way to look the company up, understand what it does, see who's behind it, or find a way to get in touch. Without a site, credibility has to be established entirely through word of mouth or direct introductions, which limits reach and makes the company look less established than its experience warrants.

## Solution

A single-page, static presentation (portfolio/credibility) website for MangoByte that introduces the company, tells the founders' combined story plus individual bios, presents the two core service lines (software development and DevOps/infrastructure), and provides a way to get in touch. The site's job is to establish legitimacy and make a strong first impression — it is not built around a hard conversion funnel (no lead form or booking flow is required), though basic contact information must be easy to find.

## User Stories

1. As a prospective client researching MangoByte, I want to see a clear statement of what the company does, so that I can quickly judge whether it fits my need.
2. As a prospective client, I want to see that MangoByte offers both software development and DevOps/infrastructure services, so that I understand the breadth of what they can help with.
3. As a prospective client, I want to see how many years of experience the founders have, so that I can gauge seniority.
4. As a prospective client, I want to see that the founders have worked across different industries, so that I can judge whether they'd adapt well to my domain.
5. As a prospective client, I want to see individual bios/photos for each founder, so that I know who I'd actually be working with.
6. As a prospective client, I want a short "company story" that ties the two founders together as one studio, so that the company feels like a coherent brand and not just two freelancers.
7. As a visitor, I want to find contact information (e.g. email) easily, so that I can reach out if I'm interested.
8. As a visitor on a phone, I want the site to be fully readable and usable on a small screen, so that I'm not forced to view it on desktop.
9. As a visitor, I want the page to load quickly, so that my first impression of a company selling technical competence isn't undermined by a slow site.
10. As a visitor using a screen reader or keyboard-only navigation, I want the site to be accessible, so that I'm not excluded from viewing the content.
11. As the company owner, I want to be able to update copy (bios, services, contact info) without redeploying a complex system, so that the site stays cheap to maintain.
12. As the company owner, I want the site hosted cheaply and reliably, so that a low-traffic presentation site doesn't incur unnecessary running costs.
13. As a visitor arriving via a search engine, I want the page to have basic SEO metadata (title, description, Open Graph tags), so that MangoByte shows up sensibly in search results and link previews.
14. As a visitor, I want to see the company's location (Cluj), so that I know MangoByte's rough working timezone/geography.
15. As a visitor, I want to see the services section explain software development and DevOps/infrastructure as one combined offering ("we build it and we run it"), rather than as two unrelated menu items, so that the pitch reads as an integrated capability.
16. As the company owner, I want the site's visual identity (colors, typography) to be easily swappable later once a logo/brand palette is finalized, so that I'm not blocked from launching today by the lack of finished branding.
17. As a visitor, I want a footer with the company name, domain, and copyright/year, so that the page feels complete and professional.
18. As the company owner, I want the site built as a static site with no backend/database, so that there is no server to maintain and no attack surface beyond static hosting.
19. As the company owner, I want the site deployable via a simple CI step (push to main → deploy), so that publishing an update is a one-command/one-push action.
20. As a visitor, I want smooth navigation between the page's sections (e.g. a simple anchor nav: Home / About / Services / Contact), so that I can jump to the part I care about without endless scrolling.

## Implementation Decisions

- **Site type**: Single static page (one HTML document, one route `/`) with in-page anchor sections: Hero, About (company story + two founder bios), Services, Contact/Footer. No multi-page routing needed at this stage.
- **Stack**: Static site generator suited to a small marketing page — Astro (or Next.js static export) — outputting pure static HTML/CSS/JS, no server runtime, no database.
- **Styling**: Component-level CSS (or a utility framework like Tailwind) using a small set of design tokens (colors, spacing, type scale) isolated in one config/theme file, so the palette can be swapped once a logo/brand palette exists without touching markup.
- **Content model**: Page content (bios, services list, contact details) lives in a small number of structured content files (e.g. JSON/YAML/Markdown frontmatter) separate from layout components, so copy edits don't require touching component code.
- **Sections**:
  - Hero: company name (MangoByte), one-line positioning statement, Cluj location.
  - About: a short unified company narrative (7 years combined experience, cross-industry background) followed by two individual bio cards (software developer, DevOps engineer) with placeholder photo slots.
  - Services: two entries — Software Development and DevOps/Infrastructure — framed as a combined "build it and run it" capability rather than a menu of unrelated services.
  - Contact/Footer: contact email, company name, domain (mngconsulting.tech), copyright line.
- **Branding placeholder**: No logo/visual identity exists yet. Use the company name as text-based branding (styled wordmark) and a neutral placeholder color palette, structured so it can be swapped for real brand colors/logo later without a rewrite.
- **SEO/meta**: Page-level `<title>`, meta description, and Open Graph tags (title, description, og:image placeholder) set from the same content model as the body copy.
- **Hosting/deploy**: Static hosting on a CDN platform (e.g. Vercel, Netlify, or Cloudflare Pages) with the mngconsulting.tech domain pointed at it; deploy triggered by push to the main branch of the site's git repository.
- **Accessibility**: Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`), sufficient color contrast even with placeholder palette, keyboard-navigable anchor nav, alt text on all images/photo placeholders.

## Testing Decisions

- Since this is a static marketing site with no business logic, favor a small number of high-value checks over unit tests of markup:
  - **Build check**: the static build completes without errors as part of CI (this is the primary regression guard for a content-driven static site).
  - **Link/anchor check**: an automated check (e.g. a broken-link checker or simple script) verifies all in-page anchor links (`#about`, `#services`, `#contact`) resolve to an existing section.
  - **Accessibility smoke test**: run an automated accessibility audit (e.g. axe-core or Lighthouse CI) against the built page and fail CI on serious violations (contrast, missing landmarks, missing alt text).
  - **Responsive smoke test**: a visual check (manual or Percy/Chromatic-style snapshot if budget allows) at mobile and desktop breakpoints before each deploy, since there's no dynamic behavior to unit test.
- No component unit tests are expected to be needed given the site has no interactive state/logic beyond navigation; if any interactive component (e.g. a mobile nav toggle) is added, it should get a focused test for its open/close behavior only.

## Out of Scope

- Lead capture forms, contact form backends, or newsletter signups — contact is via a plain email link only.
- Booking/scheduling integrations (e.g. Calendly).
- Blog, case studies, or portfolio/project detail pages — this spec covers only the single presentation page.
- CMS or admin UI for editing content — content is edited by committing to the content files directly.
- Multi-language/i18n support.
- Analytics/tracking integration.
- Final logo design and brand color palette — the site must be built to accept these later, but choosing them is not part of this spec.
- User accounts, authentication, or any backend/database functionality.

## Further Notes

- Company name: **MangoByte**. Domain currently held: **mngconsulting.tech**.
- Founders: one software developer, one DevOps engineer (married couple), based in Cluj, 7 years of combined experience across multiple industries.
- Because branding (logo, colors) isn't final, the highest priority technical decision is keeping the visual theme centralized and swappable — this should be treated as a near-term follow-up once brand assets exist, not deferred indefinitely.
- This spec was produced without an issue tracker configured for this effort; once a repo/tracker exists for the MangoByte site, move this file's content into that tracker as the initial issue (label `ready-for-agent`) rather than treating this Markdown file as the permanent source of truth.
