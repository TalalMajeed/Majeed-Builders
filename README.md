# Majeed Builders Website

Majeed Builders Website is a Next.js 16 application for Majeed Builders — a Pakistani construction company. This document covers the project structure, coding conventions, and local setup.

## Pages overview

| Route | Role |
|---|---|
| `/` | Home — hero, stats, services, featured projects, CTA |
| `/about` | Company background and team overview |
| `/projects` | Full project portfolio listing |
| `/projects/[id]` | Individual project detail page |
| `/contact` | Contact form and business information |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

## Project structure

```
app/               # Next.js App Router — one folder per route
components/        # Reusable UI components
  layout/          # Site-wide layout pieces (header, footer, WhatsApp button)
lib/               # Data and utility modules
public/            # Static assets (images, icons, logo)
__tests__/         # Jest + React Testing Library smoke tests
```

## Component conventions

Shared UI components live in `components/`, layout-specific pieces live in `components/layout/`.

```
components/
  button.tsx        # Primary CTA button with variant and size props
  form.tsx          # Contact form with validation
  loader.tsx        # Page loading indicator
  navigation.tsx    # Top navigation bar
  stats.tsx         # Animated stats bar
  layout/
    header.tsx      # Site header with navigation
    footer.tsx      # Site footer with links
    whatsapp.tsx    # Floating WhatsApp contact button
```

## Data layer

Project data is defined statically in `lib/projects.ts` as a typed array. All pages source project content from this module — no external API or database.

```ts
// lib/projects.ts
export type Project = {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial';
  status: 'Completed' | 'In Progress';
  location: string;
  year: number;
  area: string;
  units: string;
  client: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [ ... ];
export function getProjectById(id: string): Project | undefined { ... }
```

To add a new project, append an entry to the `projects` array in `lib/projects.ts`. No other files need to change.

## Code conventions

- Use `const` for all component and function declarations.
- Keep components small and single-purpose; extract sub-sections into their own components when a page grows complex.
- Avoid `any` — all props and data structures must be typed.
- Tailwind utility classes only — no separate CSS files except `globals.css` for base resets.
- Use clear, unabbreviated variable and prop names.

```tsx
const featuredProjects = projects.slice(0, 3);  // correct
const fp = projects.slice(0, 3);                // avoid
```

## Requirements

- Node.js 20+
- npm

## Local setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimised production bundle |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm test` | Run Jest test suite |
| `npm run test:watch` | Run Jest in watch mode |

## Production deployment

The production build targets a standard Node.js host or any platform that supports Next.js (Vercel, self-hosted, etc.).

Build the production bundle:

```bash
npm run build
npm run start
```
