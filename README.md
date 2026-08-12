# Eklim Sek — Portfolio

My personal developer portfolio — built to showcase full-stack projects while
applying for frontend developer internships. Built with React and Vite, with a
custom design system rather than a template.

**Live site:** https://eklimsek-portfolio.vercel.app/

<!-- Add a screenshot once deployed, e.g.: -->
<!-- ![Portfolio screenshot](./screenshot.png) -->

## Features

- **Split-screen layout** — sticky profile card on the left, scrolling content
  on the right
- **Floating pill navigation** — expands to show section labels on hover or
  when a section is active, auto-tracks scroll position via
  `IntersectionObserver`
- **Cursor-tilt profile photo** — a subtle 3D perspective effect that follows
  the mouse, done in pure CSS + a `mousemove` listener (no 3D libraries)
- **Live-status project cards** — a small pulsing status indicator per
  project (Live / In Progress), styled as a signature detail rather than a
  decoration
- **Working contact form** — sends messages directly via Formspree, with a
  honeypot field for basic spam protection
- **Fully responsive** — collapses to a single column with a bottom-anchored
  nav on mobile
- **Respects `prefers-reduced-motion`** — tilt and pulse animations disable
  for users who have this set

## Tech Stack

- React 19 + Vite
- Plain CSS with a custom design-token system (CSS variables) — no UI
  framework
- [lucide-react](https://lucide.dev) for interface icons,
  [react-icons](https://react-icons.github.io/react-icons) (Simple Icons set)
  for technology/brand icons
- [Formspree](https://formspree.io) for contact form submission, no backend
  required

## Design System

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7F6F2` | Page background (warm off-white) |
| `--ink` | `#1B1F1D` | Primary text |
| `--jade` | `#2F5D50` | Primary accent |
| `--brass` | `#B8925A` | Secondary accent / hover states |

Typography: [Fraunces](https://fonts.google.com/specimen/Fraunces) for
headings, [Inter](https://fonts.google.com/specimen/Inter) for body text,
[JetBrains Mono](https://www.jetbrains.com/lp/mono/) for labels and tags.

## Project Structure

```
src/
├── components/
│   ├── PillNav.jsx        # Floating scrollspy navigation
│   ├── ProfileCard.jsx    # Left sticky card with tilt-on-hover photo
│   ├── ProjectCard.jsx    # Reusable project card with status indicator
│   └── Sections.jsx       # About, Skills, Projects, Education, Contact
├── styles/
│   └── global.css         # Full design-token system + layout + components
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

Runs locally at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Customizing this for yourself

If you're forking this as a starting point rather than viewing my actual
portfolio:

- Replace `public/profile-image.PNG` with your own photo, and update the
  `src` in `src/components/ProfileCard.jsx`
- Update the email, GitHub, and LinkedIn links in `ProfileCard.jsx` and the
  Contact section of `Sections.jsx`
- Set up your own [Formspree](https://formspree.io) endpoint and swap it into
  the `fetch` call in the `Contact` component
- Update the `SKILL_GROUPS` array and project cards in `Sections.jsx` with
  your own technologies and projects

## Deployment

Deployed on [Vercel](https://vercel.com) — connects directly to this GitHub
repo, auto-detects the Vite build settings (`npm run build`, output directory
`dist`), and redeploys automatically on every push to `main`.
