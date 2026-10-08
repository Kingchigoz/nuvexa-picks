import fs from "node:fs";
import path from "node:path";
import { getCategory, type CategorySlug } from "@/lib/categories";

/**
 * Nuvexa Picks content store.
 *
 * Every approved product is one JSON file in `content/products/<slug>.json`, with its original
 * Nuvexa image in `public/picks/`. Collections are `content/collections/<slug>.json` and refer to
 * products by slug. Files are written by the n8n workflow "PIN · 05 Site Publish" after the owner
 * approves a product, so each publish is a commit and a redeploy. They are read at build time.
 */

export type Marketplace = "US" | "CA";

export type AffiliateLink = {
  market: Marketplace;
  /** The owner's own affiliate URL. Never generated. */
  url: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  image: { src: string; alt: string; width: number; height: number };
  /** One short editorial line for cards. */
  cardLine: string;
  /** 1–3 short sentences: what it is. */
  description: string;
  /** One concise original observation. */
  whyWePicked: string;
  links: AffiliateLink[];
  publishedAt: string;
  keywords?: string[];
};

export type Collection = {
  slug: string;
  title: string;
  intro: string;
  products: string[];
  publishedAt: string;
};

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Hosts an affiliate URL may point at. Short links are validated by n8n before they are stored. */
const LINK_HOSTS: Record<Marketplace, string[]> = {
  US: ["www.amazon.com", "amazon.com", "amzn.to", "a.co", "link.amazon"],
  CA: ["www.amazon.ca", "amazon.ca", "amzn.to", "a.co", "link.amazon"],
};

export const marketLabel: Record<Marketplace, string> = {
  US: "Amazon.com",
  CA: "Amazon.ca",
};

function readJsonDir<T>(kind: "products" | "collections"): T[] {
  const full = path.join(process.cwd(), "content", kind);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        return JSON.parse(fs.readFileSync(path.join(full, f), "utf8")) as T;
      } catch {
        return null;
      }
    })
    .filter((x): x is T => x !== null);
}

function validLink(link: AffiliateLink) {
  if (link.market !== "US" && link.market !== "CA") return false;
  try {
    const u = new URL(link.url);
    return u.protocol === "https:" && LINK_HOSTS[link.market].includes(u.hostname.toLowerCase());
  } catch {
    return false;
  }
}

function isProduct(p: Product) {
  return (
    !!p &&
    SLUG.test(p.slug) &&
    !!p.name &&
    !!getCategory(p.category) &&
    !!p.image?.src?.startsWith("/picks/") &&
    fs.existsSync(path.join(process.cwd(), "public", "picks", path.basename(p.image.src)))
  );
}

let productCache: Product[] | null = null;

/** All published products, newest first. Products without a valid affiliate link stay unlisted. */
export function getProducts(): Product[] {
  if (productCache) return productCache;
  productCache = readJsonDir<Product>("products")
    .filter(isProduct)
    .map((p) => ({ ...p, links: (p.links ?? []).filter(validLink) }))
    .filter((p) => p.links.length > 0)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return productCache;
}

/**
 * Recently Picked is an editorial selection, not the catalog: the newest few approved products.
 * Older products rotate out of it automatically as new ones are published, but are never removed;
 * they stay on their category page and their own product page.
 */
export const RECENT_PICKS_LIMIT = 4;

export function getRecentProducts(limit = RECENT_PICKS_LIMIT) {
  return getProducts().slice(0, limit);
}

export function getProduct(slug: string) {
  return getProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug) {
  return getProducts().filter((p) => p.category === category);
}

export function getCollections(): Collection[] {
  const known = new Set(getProducts().map((p) => p.slug));
  return readJsonDir<Collection>("collections")
    .filter((c) => c && SLUG.test(c.slug) && !!c.title)
    .map((c) => ({ ...c, products: (c.products ?? []).filter((s) => known.has(s)) }))
    .filter((c) => c.products.length > 0)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getCollection(slug: string) {
  return getCollections().find((c) => c.slug === slug);
}

/**
 * Cache Components requires at least one param per dynamic route at build time.
 * When nothing is published yet, this placeholder is rendered as a 404.
 */
export const PLACEHOLDER_SLUG = "__none__";
