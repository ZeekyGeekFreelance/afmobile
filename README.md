# Mobile Sales Portfolio

Sales Portfolio web app built with React + Vite on the client and Express on the server, with Sanity Studio embedded at `/admin` for inventory/content management.

## Tech Stack
- React 19 + Vite
- TypeScript
- Express 5
- Sanity (Studio + Content API)
- Drizzle ORM (optional, if DB features are used later)

## Prerequisites
- Node.js 20+ (recommended)
- npm 10+

## Setup
1. Clone the repository:
```bash
git clone https://github.com/ZeekyGeekFreelance/Mobile-Sales-Portfolio.git
cd Mobile-Sales-Portfolio
```
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```
4. Open the app:
- Local URL: `http://localhost:5000`

## Build and Run (Production)
1. Build:
```bash
npm run build
```
2. Start:
```bash
npm run start
```

## Sanity Studio (Important)
Admin Controls (Sanity Studio) is mounted inside this app at:
- Local: `http://localhost:5000/admin`
- Hosted: `${hostedlink}/admin`

Use this Studio route to manage inventory items and content.

If you need to make inventory changes, visit:
- `${hostedlink}/admin`

## Useful Scripts
- `npm run dev` - run server + client in development mode
- `npm run dev:client` - run Vite client only on port 5000
- `npm run build` - build server and client output
- `npm run start` - run production build from `dist`
- `npm run check` - run TypeScript checks
- `npm run db:push` - push Drizzle schema changes (if using DB)

## Project Structure
- `client/` - React frontend + embedded Sanity Studio UI
- `server/` - Express server
- `shared/` - shared TypeScript schema/types

## Notes
- Sanity config is in `client/src/sanity.config.ts`.
- Studio base path is `/admin`.
- Product/content schema files are in `client/src/schema/`.
