# AlfaaStack Technologies Website

Production website for AlfaaStack Technologies built with React, TypeScript, Vite, Tailwind CSS and shadcn/ui.

## Content management

Team members, clients/testimonials, services and portfolio projects can be managed from Google Sheets. The frontend reads the published Google Apps Script Web App endpoint configured through `VITE_GOOGLE_SHEET_API_URL`.

### Google Sheet tabs

- `Team` — team member profiles
- `Clients` — client/testimonial details
- `Services` — services shown on the website
- `Portfolio` — projects and portfolio filters

See [`integrations/google-sheets/README.md`](integrations/google-sheets/README.md) for the exact columns and deployment steps.

## Local development

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`. If `VITE_GOOGLE_SHEET_API_URL` is empty, the website uses the built-in fallback content.

## Production build

```bash
npm run build
```

## Google Sheet workflow

1. Edit a row in Google Sheets.
2. Keep `active` TRUE to show it or FALSE to hide it.
3. Use `order` to control display order.
4. The website fetches the content from Apps Script and caches it briefly in the browser.
5. If the API is unavailable, the local fallback content remains visible.

## Important

Use publicly accessible HTTPS image URLs for images stored in Google Sheets. Local Vite asset paths are only used by the fallback data bundled with the website.
