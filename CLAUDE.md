# Webbiker.nl

Webbiker.nl is a portfolio website for Joost Brommert, a web developer. It showcases his portfolio, experience, services, and contact information.

## Design

The design is taken from the existing PHP website. Colours, fonts, and layout must be preserved. The website is responsive and works on both desktop and mobile. The current layout is the starting point, with improvements possible to enhance UX and visual appeal. Clear calls to action guide visitors to the portfolio and contact page.

## Technologies Used

- **Frontend**: Nuxt.js 3, Vue 3, TypeScript, Tailwind CSS
- **Backend**: Strapi CMS v5 (headless, REST API)
- **Database**: MySQL (production via Plesk Obsidian)
- **Hosting**: Plesk Obsidian, PHP 8.2 (legacy static files still present at root)

## Project Structure

```
webbiker.nl/
├── frontend/                   # Nuxt.js 3 application
│   ├── app.vue                 # Root Vue component
│   ├── nuxt.config.ts          # Nuxt config (modules, CSS, Nitro, runtimeConfig)
│   ├── tailwind.config.ts      # Tailwind CSS config with brand colour tokens
│   ├── tsconfig.json           # TypeScript config (extends .nuxt/tsconfig.json)
│   ├── package.json
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # Global styles (converted from SCSS, loaded by Nuxt)
│   ├── components/
│   │   ├── AppHeader.vue       # Site header: submenu, main nav, cloud animations
│   │   ├── AppFooter.vue       # Site footer with dynamic copyright year
│   │   ├── AppOffcanvas.vue    # Mobile slide-in navigation menu
│   │   └── AppLoader.vue       # Page-load overlay (fades out on mount)
│   ├── composables/
│   │   └── useStrapi.ts        # Typed wrapper around the Strapi REST API
│   ├── layouts/
│   │   └── default.vue         # Root layout: loader + offcanvas + header + slot + footer
│   └── pages/
│       ├── index.vue           # Home page
│       ├── about.vue           # Over Webbiker
│       ├── portfolio.vue       # Portfolio (collection from Strapi)
│       ├── services.vue        # Diensten
│       └── contact.vue         # Contact (includes contact form)
│
├── backend/                    # Strapi CMS (install separately – see backend/README.md)
│   ├── README.md               # Setup instructions and content type definitions
│   └── .gitignore
│
├── assets/                     # Legacy static assets (served by Nitro via publicAssets)
│   ├── css/                    # Compiled CSS (screen.css, loader.css)
│   ├── fonts/                  # Custom webfonts (homestead)
│   ├── img/                    # Images: header, gui, homepage, footer, favicon
│   ├── js/                     # Legacy JS (no longer used in the Nuxt app)
│   ├── sass/                   # Source SCSS (for reference; main.css is the compiled output)
│   └── svg/                    # SVG assets (loader animation)
│
├── media/                      # Media files (served by Nitro via publicAssets)
│   ├── caroussel/              # Portfolio carousel images
│   └── placeholders/           # Placeholder images (replace with Strapi uploads)
│
├── about.php                   # Legacy PHP pages (source reference, to be removed)
├── contact.php
├── index.php
├── portfolio.php
├── services.php
└── CLAUDE.md
```

## Architecture

The site uses a **decoupled architecture**:

- **Frontend** (`frontend/`): Nuxt.js 3 SSR app. Pages fetch content from the Strapi REST API via the `useStrapi` composable. When Strapi is unavailable the pages fall back to placeholder content so the UI remains functional during development.
- **Backend** (`backend/`): Strapi CMS provides the content API. Content types map 1:1 to pages (single types) and portfolio items (collection type). The Strapi URL is configured via the `STRAPI_URL` env variable.
- **Static assets**: The legacy `assets/` and `media/` directories are served by Nitro's `publicAssets` configuration so all existing image paths (`/assets/img/...`, `/media/...`) continue to work without moving files.

## Strapi Content Types

| Type       | API endpoint           | Kind       | Fields                              |
|------------|------------------------|------------|-------------------------------------|
| Home       | `/api/home`            | Single     | title, subtitle, content, avatar    |
| About      | `/api/about`           | Single     | title, subtitle, content, image     |
| Services   | `/api/services`        | Single     | title, subtitle, content, image     |
| Contact    | `/api/contact`         | Single     | title, subtitle, content            |
| Portfolio  | `/api/portfolio-items` | Collection | title, subtitle, description, image |

## Starting the Project

Run both services in separate terminal tabs:

**Terminal 1 — Backend (Strapi CMS):**
```bash
cd backend
npm run develop
# Admin panel → http://localhost:1337/admin
# First run: create your admin account at the URL above
```

**Terminal 2 — Frontend (Nuxt.js):**
```bash
cd frontend
npm run dev
# Website → http://localhost:3000
```

## Commands Reference

### Frontend

```bash
cd frontend
npm install        # Install dependencies (already done)
npm run dev        # Dev server → http://localhost:3000
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
```

### Backend

```bash
cd backend
npm run develop    # Dev server with live-reload → http://localhost:1337
npm run start      # Production (no live-reload)
npm run build      # Rebuild Strapi admin panel
```

### Testing

```bash
cd frontend
npm run test:unit  # Unit tests (Vitest)
npm run test:e2e   # End-to-end tests (Cypress)
```

## Environment Variables

`frontend/.env` (already created):
```env
STRAPI_URL=http://localhost:1337
```

`backend/.env` (already created by Strapi — secrets are pre-generated):
- `DATABASE_FILENAME` — absolute path to SQLite database file (required for macOS path resolution)
- `APP_KEYS`, `JWT_SECRET`, etc. — pre-generated; rotate before going to production

For **MySQL in production**, update `backend/.env`:
```env
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=webbiker_strapi
DATABASE_USERNAME=your_user
DATABASE_PASSWORD=your_password
```

## First-Time Content Setup

1. Start the backend: `cd backend && npm run develop`
2. Go to **http://localhost:1337/admin** and create your admin account
3. In the admin panel, go to each content type and add content:
   - **Home** (single type) – title, subtitle, body text
   - **About** (single type) – title, subtitle, body text, image
   - **Services** (single type) – title, subtitle, body text
   - **Contact** (single type) – title, subtitle, body text
   - **Portfolio Items** (collection) – add one entry per project
4. **Publish** each entry (click the Publish button)
5. The frontend will fetch and display the content automatically

## Design System

Brand colour tokens (defined in `tailwind.config.ts` and `assets/css/main.css`):

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `dblue`        | `#87a3ac` | Muted blue                   |
| `lblue`        | `#abcfda` | Header gradient start        |
| `dgreen`       | `#80a997` | Primary green (links, nav)   |
| `xdgreen`      | `#739888` | h1 headings                  |
| `lgreen`       | `#d9e3cf` | Header gradient end          |
| `brand-yellow` | `#ffc600` | Accent / CTA buttons         |

Typography uses **Roboto** (300/700) for body text and **Homestead** (custom webfont) for all headings.

## Coding Style

- Vue 3 Composition API with `<script setup lang="ts">` in all components
- TypeScript throughout; Strapi response types are defined in `composables/useStrapi.ts`
- Tailwind CSS for new UI elements; existing design styles live in `frontend/assets/css/main.css`
- ESLint + Prettier for formatting consistency
- No jQuery – interactivity (sticky header, off-canvas menu) is handled with Vue reactivity and native scroll events
- Static assets (`/assets/`, `/media/`) live in the repo root and are served by Nitro via `publicAssets`; `vite.vue.template.transformAssetUrls: false` prevents Vite from trying to resolve them at build time
