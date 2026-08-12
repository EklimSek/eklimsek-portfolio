# Portfolio — Lim

A personal portfolio built with React + Vite. Split-screen layout: sticky profile
card on the left, scrolling sections on the right, with a floating pill navigation
bar that expands to show labels on hover/active section.

## Getting started

```bash
npm install
npm run dev
```

## Before you deploy

- Replace `/public/profile-placeholder.svg` with a real photo (update the `src` in
  `src/components/ProfileCard.jsx`).
- Update the email, GitHub, and LinkedIn links in `ProfileCard.jsx` and
  `Sections.jsx` (Contact section).
- Fill in your real live demo URL and second project in `Sections.jsx`
  (`Projects` component).
- Fill in your real education details in `Sections.jsx` (`Education` component).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deploy to Vercel, Netlify, or GitHub Pages.
