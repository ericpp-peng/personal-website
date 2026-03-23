# Personal Website Design Doc

## 1) Purpose

This document describes the design goals, system boundaries, technology choices, data flow, and evolution roadmap for this personal website project. It serves as a shared reference for development and maintenance.

## 2) Project Goals

- Present resume and portfolio content clearly in a single-page format.
- Provide a strong reading experience on both mobile and desktop.
- Keep content updates low-cost by maintaining a single primary data source.
- Maintain a frontend architecture that is deployable, extensible, and easy to maintain.

## 3) Non-Goals (Current Version)

- No full CMS backend.
- No user login or dynamic account system.
- No direct email delivery implementation in the frontend (the Contact Form currently provides UI/state handling only).

## 4) System Overview

### Tech Stack

- Framework: Next.js + React + TypeScript
- Styling: Tailwind CSS + global SCSS
- Static assets: `public/images` and `src/images`

### Page Composition

The homepage is composed in `src/pages/index.tsx` with the following section order:

1. Header (dynamically imported, client-side only)
2. About
3. Resume
4. Portfolio
5. Testimonials
6. Contact
7. Footer

This section-based architecture keeps content blocks loosely coupled and easy to evolve independently.

## 5) Directory and Module Responsibilities

- `src/pages`: Next.js routes and page entry points.
- `src/components/Sections`: content sections used on the homepage.
- `src/components/Layout`: shared page/section layout wrappers.
- `src/components/Icon`: social and UI icon components.
- `src/data/data.tsx`: primary content source (text, links, resume, projects).
- `src/data/dataDef.ts`: type definitions for `data.tsx`.
- `src/hooks`: reusable interaction hooks (window info, outside click, nav observer, etc.).

## 6) Data Flow Design

### Single Content Source

Website content is primarily managed in `src/data/data.tsx`, enforced by TypeScript types:

- Benefit: reduces scattered content changes and duplicated edits.
- Tradeoff: the data file can grow large as content expands.

### Component Data Injection

Each Section component reads and renders its corresponding data model. The recommended separation remains:

- Components own presentation.
- Data files own content.
- Type definitions own schema contracts.

## 7) Key Design Decisions

1. **Data-driven UI**: prioritize content updates through data models instead of component logic changes.
2. **Section decoupling**: keep each section independently maintainable and reorderable.
3. **Type-first approach**: use `dataDef.ts` to prevent schema drift.
4. **Progressive enhancement**: complete static presentation first, then add backend capabilities (for example, contact email API).

## 8) Contact Form: Current State and Target

`ContactForm` currently includes:

- Input state management
- Basic client-side validation (`required` / email type / `maxLength`)
- Submit handler entry point (currently logs payload)

Recommended next steps:

- Implement `src/pages/api/contact.ts` for email forwarding/delivery
- Add anti-spam controls (for example, honeypot or rate limiting)
- Add success and error feedback UI

## 9) SEO and Release Readiness

- Next.js provides a strong baseline for first paint and SEO.
- `next-sitemap` can be used to generate sitemap output.
- Before deployment, complete `homePageMeta` (`title`, `description`, OG image, Twitter metadata).

## 10) Operations and Quality Strategy

- Use `yarn compile` to validate TypeScript correctness.
- Use `yarn lint` to enforce formatting and code quality consistency.
- Prefer editing `src/data/data.tsx` for content updates instead of hardcoding text inside sections.

## 11) Evolution Roadmap

Short term (1-2 weeks):

- Implement contact API integration
- Complete SEO metadata
- Replace remaining placeholder content with personalized content

Mid term (1-2 months):

- Split large resume content blocks into smaller maintainable data modules
- Add lightweight analytics (for example, page views)
- Plan multilingual support if needed

---

Last updated: 2026-03-21
