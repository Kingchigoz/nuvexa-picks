import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.legalUpdated}T00:00:00Z`);
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/disclosure`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
