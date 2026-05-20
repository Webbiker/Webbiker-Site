# Webbiker.nl – Strapi Backend

This directory will contain the Strapi CMS backend.

## Setup

```bash
npx create-strapi-app@latest . --quickstart
```

## Content Types

### Single Types
| Name     | API ID    | Fields                              |
|----------|-----------|-------------------------------------|
| Home     | `home`    | title, subtitle, content, avatar    |
| About    | `about`   | title, subtitle, content, image     |
| Services | `services`| title, subtitle, content, image     |
| Contact  | `contact` | title, subtitle, content            |

### Collection Types
| Name           | API ID           | Fields                              |
|----------------|------------------|-------------------------------------|
| Portfolio Item | `portfolio-item` | title, subtitle, description, image |
| Navigation Item| `navigation-item`| title, url, order, isExternal, openInNewTab |

## Environment

Create a `.env` file in this directory:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-admin-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=webbiker_strapi
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-db-password
```

## Running

```bash
npm run develop   # development with admin panel
npm run start     # production
npm run build     # build admin panel
```
