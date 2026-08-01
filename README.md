# Henry Philip Portfolio

Personal portfolio website for Henry Philip — Virtual Assistant, Operations Specialist, and Marketing Partner.

## Included

- Professional introduction and profile
- Skills and visual toolkit
- Selected work gallery
- Experience timeline
- Education and certifications
- Responsive desktop and mobile layouts

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Build

```bash
npm run build
```

## Main files

- `app/page.tsx` — website content and sections
- `app/globals.css` — design and responsive styling
- `app/layout.tsx` — page title and social-sharing metadata
- `public/` — portrait, portfolio samples, certificates, and sharing images

## Deployment

The project uses vinext and produces Cloudflare Worker-compatible output. For a personal Cloudflare account, follow Cloudflare's current Next.js/Workers deployment instructions and add the required account-specific Wrangler configuration.
