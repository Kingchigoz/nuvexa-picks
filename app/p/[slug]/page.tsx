import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { ProductGrid } from "@/components/ProductCard";
import { getCategory } from "@/lib/categories";
import {
  PLACEHOLDER_SLUG,
  getProduct,
  getProducts,
  getProductsByCategory,
  marketLabel,
} from "@/lib/catalog";
import { amazonDisclosure, site } from "@/lib/site";
import { keepHyphenated } from "@/lib/text";
import styles from "./page.module.css";

export function generateStaticParams() {
  const products = getProducts();
  return products.length ? products.map((p) => ({ slug: p.slug })) : [{ slug: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }: PageProps<"/p/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/p/${product.slug}` },
    openGraph: {
      type: "article",
      url: `/p/${product.slug}`,
      siteName: site.name,
      title: `${product.name} · ${site.name}`,
      description: product.description,
      images: [{ url: product.image.src, width: product.image.width, height: product.image.height, alt: product.image.alt }],
    },
    twitter: { card: "summary_large_image", title: product.name, description: product.description },
  };
}

export default async function ProductPage({ params }: PageProps<"/p/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <article className={`container ${styles.layout}`}>

        <header className={styles.intro}>
          <Link className={styles.category} href={`/${category.slug}`}>
            {category.name}
          </Link>
          <h1 className={styles.title}>{keepHyphenated(product.name)}</h1>
        </header>

        <figure className={styles.media}>
          <Image
            className={styles.image}
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            sizes="(max-width: 900px) 100vw, 50vw"
            preload
          />
        </figure>

        <div className={styles.copy}>
          <p className={styles.description}>{product.description}</p>

          <section className={styles.why} aria-labelledby="why-title">
            <h2 id="why-title" className={styles.whyTitle}>
              Why we picked it
            </h2>
            <p className={styles.whyText}>{product.whyWePicked}</p>
          </section>

          <div className={styles.actions}>
            {product.links.map((link) => (
              <a
                key={link.market}
                className={styles.button}
                href={link.url}
                target="_blank"
                rel="sponsored noopener noreferrer"
              >
                View on {marketLabel[link.market]}
                <ArrowUpRightIcon className={styles.buttonIcon} weight="light" aria-hidden="true" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          <p className={styles.disclosure}>
            Affiliate link. {amazonDisclosure} Prices and availability are shown on the retailer’s
            site. <Link href="/disclosure">How we’re supported</Link>
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className={styles.related} aria-labelledby="related-title">
          <div className="container">
            <div className={styles.relatedHead}>
              <h2 id="related-title" className={styles.relatedTitle}>
                More in <em>{category.name}</em>
              </h2>
              <Link className={styles.textLink} href={`/${category.slug}`}>
                See all
              </Link>
            </div>
            <ProductGrid products={related} showCategory={false} />
          </div>
        </section>
      )}
    </>
  );
}
