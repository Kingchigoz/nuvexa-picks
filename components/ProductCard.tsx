import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/lib/categories";
import type { Product } from "@/lib/catalog";
import styles from "./ProductCard.module.css";

type Props = { product: Product; showCategory?: boolean; preload?: boolean };

export function ProductCard({ product, showCategory = true, preload = false }: Props) {
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
            sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 25vw"
            preload={preload}
          />
        </span>
        <span className={styles.body}>
          {showCategory && category && <span className={styles.category}>{category.name}</span>}
          <span className={styles.name}>{product.name}</span>
          <span className={styles.line}>{product.cardLine}</span>
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
      {products.map((p) => (
        <li key={p.slug}>
          <ProductCard product={p} showCategory={showCategory} />
        </li>
      ))}
    </ul>
  );
}
