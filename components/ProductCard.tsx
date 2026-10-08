import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/lib/categories";
import type { Product } from "@/lib/catalog";
import { keepHyphenated } from "@/lib/text";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
  showCategory?: boolean;
  preload?: boolean;
  /** Near the top of the page: load without waiting for scroll. */
  eager?: boolean;
  /** Spans the full row on phones (the lead pick in a curated row of three). */
  lead?: boolean;
};

export function ProductCard({ product, showCategory = true, preload = false, eager = false, lead = false }: Props) {
  const category = getCategory(product.category);
  return (
    <article className={styles.card}>
      <Link href={`/p/${product.slug}`} className={styles.link}>
        <span className={styles.frame}>
          <Image
            className={styles.image}
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            sizes={`(max-width: 720px) ${lead ? "100vw" : "50vw"}, (max-width: 1100px) 33vw, 22vw`}
            preload={preload}
            loading={eager ? "eager" : undefined}
          />
        </span>
        <span className={styles.body}>
          {showCategory && category && <span className={styles.category}>{category.name}</span>}
          <span className={styles.name}>{keepHyphenated(product.name)}</span>
          <span className={styles.line}>{keepHyphenated(product.cardLine)}</span>
        </span>
      </Link>
    </article>
  );
}

/** A responsive grid of product cards. */
export function ProductGrid({
  products,
  showCategory = true,
  fit = false,
}: {
  products: Product[];
  showCategory?: boolean;
  /** Size the columns to the number of products (for short, curated rows), so no row ends in an empty slot. */
  fit?: boolean;
}) {
  return (
    <ul className={styles.grid} role="list" data-fit={fit ? products.length : undefined}>
      {products.map((p, i) => (
        <li key={p.slug}>
          <ProductCard
            product={p}
            showCategory={showCategory}
            eager={fit}
            lead={fit && products.length === 3 && i === 0}
          />
        </li>
      ))}
    </ul>
  );
}
