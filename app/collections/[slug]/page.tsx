import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductCard";
import styles from "@/components/Listing.module.css";
import { PLACEHOLDER_SLUG, getCollection, getCollections, getProduct } from "@/lib/catalog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  const collections = getCollections();
  return collections.length ? collections.map((c) => ({ slug: c.slug })) : [{ slug: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: collection.title,
    description: collection.intro,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: {
      url: `/collections/${collection.slug}`,
      siteName: site.name,
      title: `${collection.title} · ${site.name}`,
      description: collection.intro,
    },
  };
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const products = collection.products.map(getProduct).filter((p) => p !== undefined);

  return (
    <section className={`container ${styles.page}`} aria-labelledby="collection-title">
      <header className={`${styles.head} ${styles.headNoTile}`}>
        <p className={styles.eyebrow}>Collection</p>
        <h1 id="collection-title" className={styles.title}>
          {collection.title}
        </h1>
        <p className={styles.intro}>{collection.intro}</p>
      </header>
      <ProductGrid products={products} />
    </section>
  );
}
