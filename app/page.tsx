import Link from "next/link";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { CategoryTile, type CategoryKind } from "@/components/CategoryTile";
import { ProductGrid } from "@/components/ProductCard";
import { categories } from "@/lib/categories";
import { getProducts } from "@/lib/catalog";
import { amazonDisclosure, commissionDisclosure, site } from "@/lib/site";
import styles from "./page.module.css";

/** The hero "board": three staggered columns of saved pins. */
const board: { kind: CategoryKind; label: string; shape: string }[][] = [
  [
    { kind: "home", label: "Home", shape: styles.tall },
    { kind: "gifts", label: "Gifts", shape: styles.square },
  ],
  [
    { kind: "beauty", label: "Beauty", shape: styles.square },
    { kind: "style", label: "Style", shape: styles.tall },
  ],
  [
    { kind: "everyday", label: "Everyday finds", shape: styles.tall },
    { kind: "tech", label: "Tech", shape: styles.portrait },
  ],
];

const principles = [
  {
    title: "Researched first",
    text: "Every pick starts with current, verifiable information about what a product actually is and does.",
  },
  {
    title: "Chosen for usefulness",
    text: "Design, practicality and value matter more to us than trends or hype.",
  },
  {
    title: "Honest by default",
    text: "No invented claims and no pressure. When a link may earn us a commission, we say so.",
  },
];

export default function Home() {
  const recent = getProducts().slice(0, 8);
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 id="hero-title" className={styles.heroTitle}>
              Discoveries <em>worth saving.</em>
            </h1>
            <p className={styles.heroLead}>
              Products worth checking out, found and curated with care: useful finds, gifts and
              everyday inspiration, each with a short note on why we picked it.
            </p>
            <div className={styles.heroActions}>
              {site.pinterestUrl ? (
                <>
                  <a
                    className={styles.button}
                    href={site.pinterestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore our Pinterest
                    <ArrowUpRightIcon className={styles.buttonIcon} weight="light" aria-hidden="true" />
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  <Link className={styles.textLink} href="#discover">
                    What we curate
                  </Link>
                </>
              ) : (
                <>
                  <Link className={styles.button} href={recent.length ? "#recent" : "#discover"}>
                    {recent.length ? "See recent picks" : "See what we curate"}
                    <ArrowDownIcon className={styles.buttonIcon} weight="light" aria-hidden="true" />
                  </Link>
                  <Link className={styles.textLink} href="#about">
                    Our approach
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className={styles.board} aria-hidden="true">
            {board.map((column, c) => (
              <div key={c} className={styles.boardColumn}>
                {column.map((pin, i) => (
                  <figure
                    key={pin.kind}
                    className={styles.pin}
                    style={{ "--i": c * 2 + i } as React.CSSProperties}
                  >
                    <CategoryTile kind={pin.kind} className={`${styles.pinTile} ${pin.shape}`} />
                    <figcaption className={styles.pinCaption}>{pin.label}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {recent.length > 0 && (
        <section id="recent" className={styles.section} aria-labelledby="recent-title">
          <div className="container">
            <div className={styles.sectionHead}>
              <h2 id="recent-title" className={styles.sectionTitle}>
                Recently <em>picked.</em>
              </h2>
              <p className={styles.sectionIntro}>
                The latest things we found worth a closer look, each with a short note on why.
              </p>
            </div>
            <ProductGrid products={recent} />
          </div>
        </section>
      )}

      <section id="discover" className={styles.section} aria-labelledby="discover-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 id="discover-title" className={styles.sectionTitle}>
              A considered edit of <em>everyday things.</em>
            </h2>
            <p className={styles.sectionIntro}>
              Nuvexa Picks covers a deliberately broad range, from the home to the gift list, held
              together by one standard: would we save it ourselves?
            </p>
          </div>

          <ul className={styles.categories} role="list">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link className={styles.category} href={`/${cat.slug}`}>
                  <CategoryTile kind={cat.kind} className={styles.categoryTile} />
                  <div>
                    <h3 className={styles.categoryName}>{cat.name}</h3>
                    <p className={styles.categoryText}>{cat.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.approach}`} aria-labelledby="about-title">
        <div className={`container ${styles.approachGrid}`}>
          <div>
            <h2 id="about-title" className={styles.sectionTitle}>
              Fewer things, <em>chosen with care.</em>
            </h2>
          </div>
          <div className={styles.approachBody}>
            <p className={styles.approachLead}>
              Nuvexa Picks is an independent product-discovery brand. We research products and ideas
              across home, style, beauty, tech and gifting, then share the ones we think are worth a
              closer look, here and on the platforms where you discover things.
            </p>
            <ul className={styles.principles} role="list">
              {principles.map((p) => (
                <li key={p.title} className={styles.principle}>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleText}>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.transparency} aria-labelledby="transparency-title">
        <div className={`container ${styles.transparencyGrid}`}>
          <div>
            <h2 id="transparency-title" className={styles.transparencyTitle}>
              How Nuvexa&nbsp;Picks <em>is supported.</em>
            </h2>
          </div>
          <div className={styles.transparencyBody}>
            <p>Some links we share are affiliate links. {commissionDisclosure}</p>
            <p className={styles.amazon}>{amazonDisclosure}</p>
            <Link className={styles.lightLink} href="/disclosure">
              Read our affiliate disclosure
              <ArrowRightIcon className={styles.linkIcon} weight="light" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
