/**
 * Central site configuration.
 *
 * Values that may change later (custom domain, Pinterest profile, contact address)
 * are read from environment variables so they can be updated in Vercel without code changes:
 *
 *   NEXT_PUBLIC_SITE_URL       e.g. https://nuvexapicks.com  (defaults to the Vercel domain)
 *   NEXT_PUBLIC_PINTEREST_URL  e.g. https://www.pinterest.com/<handle>/  (Pinterest links stay hidden until set)
 *   NEXT_PUBLIC_CONTACT_EMAIL  e.g. hello@nuvexapicks.com  (shown on the Privacy and Disclosure pages)
 */

const trimSlash = (url: string) => url.replace(/\/+$/, "");

export const site = {
  name: "Nuvexa Picks",
  tagline: "Discoveries worth saving.",
  description:
    "Thoughtfully curated products, useful finds, gifts and everyday inspiration.",
  url: trimSlash(process.env.NEXT_PUBLIC_SITE_URL || "https://nuvexa-picks.vercel.app"),
  pinterestUrl: process.env.NEXT_PUBLIC_PINTEREST_URL || null,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || null,
  founded: 2026,
  /** Effective / last-updated date for the legal pages (ISO). */
  legalUpdated: "2026-10-07",
} as const;

export const amazonDisclosure =
  "As an Amazon Associate I earn from qualifying purchases.";

export const commissionDisclosure =
  "Nuvexa Picks may earn a commission from qualifying purchases made through certain links, at no additional cost to you.";

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
