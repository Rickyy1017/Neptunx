# Architecture Overview

## App structure

The Neptunx application is a Vite-powered React app with a file-based route architecture provided by `@tanstack/react-router`.

### Entry point

- `src/main.tsx`
  - Creates the React root
  - Mounts `<RouterProvider>` with the app router

### Router and routes

- `src/router.tsx`
  - Creates the router instance using `createRouter`
  - Passes `routeTree` and root context containing `QueryClient`
- `src/routeTree.gen.ts`
  - Generated route tree from file routes
  - Connects the root route and child routes automatically

### Routes

- `src/routes/__root.tsx`
  - Defines the root app shell
  - Provides `HeadContent` and the query client context
  - Includes error and 404 boundaries
- `src/routes/index.tsx`
  - Defines the homepage route at `/`
  - Contains the landing page content and WhatsApp integration

### Data and state

- `@tanstack/react-query`
  - Used for query caching and data fetching
  - Query client is provided from the root route context

### Styling and assets

- `src/styles.css`
  - Global styles and Tailwind base styling
- `@tailwindcss/vite`
  - Tailwind CSS integration with Vite
- `src/assets/`
  - Images imported directly into components

### Build and deployment

- `npm run build`
  - Runs TypeScript build and Vite production build
- Output directory: `dist/`
- Ideal for deployment on static hosting such as Vercel

## Deployment notes

- Vercel build command: `npm run build`
- Output directory: `dist`
- Ensure `public/` assets are included in deployment

## How to extend

- Add a new route file under `src/routes/`
- Export a `Route` using `createFileRoute(path)`
- Add new UI sections in `src/routes/index.tsx` or separate route files
- Keep global styling in `src/styles.css`
