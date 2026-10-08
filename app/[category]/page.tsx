import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryTile } from "@/components/CategoryTile";
import { ProductGrid } from "@/components/ProductCard";
import styles from "@/components/Listing.module.css";
import { categories, getCategory } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/catalog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.text,
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      url: `/${category.slug}`,
      siteName: site.name,
      title: `${category.name} · ${site.name}`,
      description: category.text,
    },
  };
}

export default async function CategoryPage({ params }: PageProps<"/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <section className={`container ${styles.page}`} aria-labelledby="category-title">
      <header className={styles.head}>
        <CategoryTile kind={category.kind} className={styles.tile} />
        <h1 id="category-title" className={styles.title}>
          {category.name}
        </h1>
        <p className={styles.intro}>{category.text}</p>
      </header>

      {products.length > 0 ? (
        <ProductGrid products={products} showCategory={false} />
      ) : (
        <div className={styles.empty}>
          <p>The first {category.name} picks are being chosen now. Check back soon.</p>
          <Link className={styles.emptyLink} href="/#recent">
            See recent picks
          </Link>
        </div>
      )}

      <nav className={styles.others} aria-label="Other categories">
        <h2 className={styles.othersTitle}>Keep exploring</h2>
        <ul className={styles.othersList} role="list">
          {others.map((c) => (
            <li key={c.slug}>
              <Link className={styles.chip} href={`/${c.slug}`}>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
