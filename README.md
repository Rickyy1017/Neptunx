# Neptunx

Neptunx is a React + TypeScript + Vite web application for a premium home interiors, HVAC, refrigeration, appliance repair, and home maintenance brand.

## Project Overview

This repository contains the Neptunx landing page and homepage experience, using modern React tooling with a file-based route architecture.

## Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS via `@tailwindcss/vite`
- `@tanstack/react-router` for routing
- `@tanstack/react-query` for data/query state
- `lucide-react`, `Radix UI`, and `Sonner` for UI components and icons

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Production Build

```bash
npm run build
```

The production output is generated to `dist/`.

## Vercel Deployment

Set Vercel to use:

- Build command: `npm run build`
- Output directory: `dist`

## Important Files

- `src/main.tsx` - React app entry point
- `src/router.tsx` - router setup and context creation
- `src/routeTree.gen.ts` - generated route tree for file-based routes
- `src/routes/__root.tsx` - root route layout, shell, and error boundaries
- `src/routes/index.tsx` - homepage route and landing page content
- `src/styles.css` - global styles
- `public/` - static assets and favicon

## Notes

- The homepage is defined in `src/routes/index.tsx`.
- Static images are imported from `src/assets/` and resolved by Vite.
- `tsconfig.app.json` includes compatibility settings for the current TypeScript version.

## Next Steps

- Edit `src/routes/index.tsx` to update homepage content.
- Add new page routes under `src/routes/` using `createFileRoute`.
- Adjust styling in `src/styles.css` and Tailwind utility classes as needed.
# Neptunx
