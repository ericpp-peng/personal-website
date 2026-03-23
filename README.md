# Personal Website

A personal resume/portfolio site built with Next.js and TypeScript, using a section-based single-page architecture driven primarily by a single content data file.

## Documentation

- Design Doc: [docs/design-doc.md](docs/design-doc.md)

## Tech Stack

- Next.js
- React + TypeScript
- Tailwind CSS + SCSS

## Quick Start

### 1) Prerequisites

- Node.js (latest LTS recommended)
- Yarn

### 2) Install dependencies

```bash
yarn install
```

### 3) Start development server

```bash
yarn dev
```

The default URL is usually `http://localhost:3000`.

## Common Commands

- `yarn dev`: local development
- `yarn build`: TypeScript compile + Next.js build
- `yarn start`: start production server
- `yarn lint`: format and run ESLint
- `yarn sitemap`: generate sitemap

## Project Structure (Key Paths)

- `src/pages`: page and route entry points
- `src/components/Sections`: homepage section components
- `src/components/Layout`: shared layout wrappers
- `src/data/data.tsx`: primary content data
- `src/data/dataDef.ts`: content type definitions

## Content Maintenance

Most content updates should be made in `src/data/data.tsx` (Hero, About, Resume, Portfolio, Contact, etc.).

- Text and links: edit fields directly in the data model
- Images: place assets in `public/images` or `src/images`, then reference them in the data file

## Contact Form Notes

The contact form currently includes frontend field state and submit handling entry points, but does not yet integrate a real email delivery service.

You can add an API route in `src/pages/api` and connect the form submit handler to a provider such as SendGrid or Resend.

## Deployment

Deployment to Vercel is recommended, but any platform with Next.js support can be used.
