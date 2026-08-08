# AlfaaStack Google Sheets CMS

The website can load editable content from a Google Sheet through a deployed Google Apps Script web app.

## Sheets

Create these tabs in the same spreadsheet:

### Team

| id | name | role | image | bio | linkedin | twitter | email | order | active |
|---|---|---|---|---|---|---|---|---:|---|
| tejas-saitwal | Tejas Saitwal | Founder · Full-Stack Engineer | https://... | Founder bio | https://linkedin.com/... | https://x.com/... | hello@example.com | 1 | TRUE |

### Clients

| id | name | company | role | quote | image | rating | website | order | active |
|---|---|---|---|---|---|---:|---|---:|---|
| client-1 | Client Name | Company | Founder | Testimonial | https://... | 5 | https://... | 1 | TRUE |

### Services

| id | title | desc | icon | order | active |
|---|---|---|---|---:|---|
| website-development | Website Development | Service description | Code2 | 1 | TRUE |

`icon` should be a Lucide icon name such as `Code2`, `Smartphone`, `ShoppingCart`, `Cloud`, `Database`, `Palette`, or `Plug`.

### Portfolio

| id | title | category | tag | img | link | description | order | active |
|---|---|---|---|---|---|---|---:|---|
| motohub | MotoHub-Vehicle Buy&Sell Platform | SaaS | Ongoing... | https://... | https://... | Vehicle marketplace platform | 1 | TRUE |

Supported portfolio categories are dynamic. You can use any category name, for example `Web`, `Mobile`, `SaaS`, `E-commerce`, `AI`, or `Custom Software`. The website automatically creates the filter buttons from the sheet.

## Active / order

- `active = TRUE` or blank: show the row.
- `active = FALSE`: hide the row.
- Lower `order` values appear first.

## Image URLs

For dynamic Google Sheet content, use a publicly accessible image URL. Do not paste a local `/src/assets/...` path into the sheet. A public CDN, Cloudinary, Supabase Storage, or another public HTTPS image URL is recommended.

## Deploy

1. Open the Google Sheet.
2. Open **Extensions → Apps Script**.
3. Replace the script with `Code.gs` from this folder.
4. Save.
5. Deploy → New deployment → Web app.
6. Execute as: **Me**.
7. Who has access: **Anyone**.
8. Copy the `/exec` URL.
9. Put it in the website `.env` file:

```env
VITE_GOOGLE_SHEET_API_URL=https://script.google.com/macros/s/AKfycbwN85r8NoTsKbzgTy6HY7VLUtxsTJUcDO4mtptqOj1QAnEdy2X0QeFGSYVq3nxlWRO6yA/exec
```

10. Rebuild/redeploy the website.

The website keeps a short browser cache and falls back to built-in content if the Google Sheet cannot be reached.
