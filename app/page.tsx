import Link from "next/link";
import { Plate, type PlateKind } from "@/components/Plate";
import { amazonDisclosure, commissionDisclosure, site } from "@/lib/site";
import styles from "./page.module.css";

const categories: { kind: PlateKind; name: string; text: string }[] = [
  {
    kind: "home",
    name: "Home",
    text: "Quiet upgrades for the rooms you live in — storage, textiles, lighting and the details that make a space feel finished.",
  },
  {
    kind: "everyday",
    name: "Everyday Finds",
    text: "Small, genuinely useful things for the kitchen, the desk and the daily routine.",
  },
  {
    kind: "gifts",
    name: "Gifts",
    text: "Thoughtful ideas for birthdays, holidays and the people who are hardest to shop for.",
  },
  {
    kind: "style",
    name: "Style",
    text: "Wardrobe pieces and accessories with lasting appeal, rather than a single season.",
  },
  {
    kind: "beauty",
    name: "Beauty",
    text: "Self-care and beauty finds chosen as much for the ritual as for the result.",
  },
  {
    kind: "tech",
    name: "Tech",
    text: "Clever gadgets and accessories that earn their place on the desk, in the bag or at home.",
  },
];

const board: { kind: PlateKind; label: string; shape: string }[][] = [
  [
    { kind: "home", label: "Home", shape: styles.tall },
    { kind: "gifts", label: "Gifts", shape: styles.square },
  ],
  [
    { kind: "beauty", label: "Beauty", shape: styles.square },
    { kind: "style", label: "Style", shape: styles.tall },
  ],
  [
    { kind: "everyday", label: "Everyday", shape: styles.tall },
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
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Curated product discovery</p>
            <h1 id="hero-title" className={styles.heroTitle}>
              Discoveries <em>worth saving.</em>
            </h1>
            <p className={styles.heroLead}>
              Thoughtfully curated products, useful finds, gifts and everyday inspiration — gathered
              with care and shared for you to save.
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
                    <span aria-hidden="true">↗</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  <Link className={styles.textLink} href="#discover">
                    What we curate
                  </Link>
                </>
              ) : (
                <>
                  <Link className={styles.button} href="#discover">
                    See what we curate
                    <span aria-hidden="true">↓</span>
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
                  <div
                    key={pin.kind}
                    className={`${styles.pin} ${pin.shape}`}
                    style={{ "--i": c * 2 + i } as React.CSSProperties}
                  >
                    <Plate kind={pin.kind} className={styles.pinArt} />
                    <span className={styles.pinLabel}>{pin.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="discover" className={styles.section} aria-labelledby="discover-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow">What we curate</p>
            <h2 id="discover-title" className={styles.sectionTitle}>
              A considered edit of <em>everyday things.</em>
            </h2>
            <p className={styles.sectionIntro}>
              Nuvexa Picks covers a deliberately broad range — from the home to the gift list — held
              together by one standard: would we save it ourselves?
            </p>
          </div>

          <ol className={styles.index} role="list">
            {categories.map((cat, i) => (
              <li key={cat.kind} className={styles.indexRow}>
                <span className={styles.indexNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.indexName}>{cat.name}</h3>
                <p className={styles.indexText}>{cat.text}</p>
                <Plate kind={cat.kind} className={styles.indexArt} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.approach}`} aria-labelledby="about-title">
        <div className={`container ${styles.approachGrid}`}>
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 id="about-title" className={styles.sectionTitle}>
              Fewer things, <em>chosen with care.</em>
            </h2>
          </div>
          <div className={styles.approachBody}>
            <p className={styles.approachLead}>
              Nuvexa Picks is an independent product-discovery brand. We research products and ideas
              across home, style, beauty, tech and gifting, then share the ones we think are worth a
              closer look — as Pins you can save and come back to.
            </p>
            <ol className={styles.principles} role="list">
              {principles.map((p, i) => (
                <li key={p.title} className={styles.principle}>
                  <span className={styles.principleNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleText}>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.transparency} aria-labelledby="transparency-title">
        <div className={`container ${styles.transparencyGrid}`}>
          <div>
            <p className={`eyebrow ${styles.eyebrowOnDark}`}>Transparency</p>
            <h2 id="transparency-title" className={styles.transparencyTitle}>
              How Nuvexa Picks <em>is supported.</em>
            </h2>
          </div>
          <div className={styles.transparencyBody}>
            <p>Some links we share are affiliate links. {commissionDisclosure}</p>
            <p className={styles.amazon}>{amazonDisclosure}</p>
            <Link className={styles.lightLink} href="/disclosure">
              Read our affiliate disclosure <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
