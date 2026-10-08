# Nuvexa Picks

The public website for **Nuvexa Picks** — *Discoveries worth saving.*
A small, static Next.js site: brand home, Privacy Policy and Affiliate Disclosure.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Brand homepage (what we curate, approach, transparency) |
| `/privacy` | Privacy Policy |
| `/disclosure` | Affiliate Disclosure (incl. Amazon Associates statement) |
| `/sitemap.xml`, `/robots.txt` | Generated from `app/sitemap.ts` and `app/robots.ts` |

## Configuration

All site-wide values live in [`lib/site.ts`](lib/site.ts). Values that may change are read from
environment variables (set them in Vercel → Project → Settings → Environment Variables, then redeploy):

| Variable | Default | Effect |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://nuvexa-picks.vercel.app` | Canonical URLs, Open Graph, sitemap. Set to `https://nuvexapicks.com` after connecting a custom domain. |
| `NEXT_PUBLIC_PINTEREST_URL` | *(unset)* | Shows the "Explore our Pinterest" button and footer link. Hidden until set. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `nuvexap@gmail.com` | Contact address on the Privacy and Disclosure pages. |

See [`.env.example`](.env.example).

## Brand assets

[`brand/`](brand) holds the logo system as standalone SVGs (text converted to outlines):
`nuvexa-wordmark.svg`, `nuvexa-wordmark-light.svg`, `nuvexa-mark.svg`, `nuvexa-mark-light.svg`,
`nuvexa-icon.svg` (app icon), plus `nuvexa-profile-1024.png` for profile pictures.
The favicon (`app/favicon.ico`, `app/icon.svg`), Apple touch icon and Open Graph image live in `app/`.

Typefaces: Newsreader and Instrument Sans (SIL Open Font License), self-hosted via `next/font`.

## Develop

```bash
npm install
npm run dev
```

## Custom domain later

1. Vercel → Project → Settings → Domains → add `nuvexapicks.com` and follow the DNS steps.
2. Set `NEXT_PUBLIC_SITE_URL=https://nuvexapicks.com` and redeploy.
