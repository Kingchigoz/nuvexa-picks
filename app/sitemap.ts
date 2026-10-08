import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getCollections, getProducts } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.legalUpdated}T00:00:00Z`);
  const products = getProducts();
  const latest = products[0] ? new Date(products[0].publishedAt) : lastModified;
  return [
    { url: `${site.url}/`, lastModified: latest, changeFrequency: "daily", priority: 1 },
    ...categories.map((c) => ({
      url: `${site.url}/${c.slug}`,
      lastModified: latest,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...products.map((p) => ({
      url: `${site.url}/p/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getCollections().map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      lastModified: new Date(c.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: `${site.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/disclosure`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
