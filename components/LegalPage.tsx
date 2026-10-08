import { formatDate, site } from "@/lib/site";
import styles from "./LegalPage.module.css";

type Props = {
  title: string;
  intro: React.ReactNode;
  toc?: { id: string; label: string }[];
  children: React.ReactNode;
};

export function LegalPage({ title, intro, toc, children }: Props) {
  const date = formatDate(site.legalUpdated);
  return (
    <article className={styles.page}>
      <header className={`container ${styles.head}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>
          Effective <time dateTime={site.legalUpdated}>{date}</time>
        </p>
        <div className={styles.intro}>{intro}</div>
      </header>

      <div className={`container ${styles.layout} ${toc ? "" : styles.noToc}`}>
        {toc && (
          <nav className={styles.toc} aria-label="On this page">
            <p className={styles.tocTitle}>On this page</p>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className={styles.prose}>{children}</div>
      </div>
    </article>
  );
}

/** A complete sentence telling readers how to reach Nuvexa Picks, driven by site config. */
export function ContactSentence() {
  if (site.contactEmail) {
    return (
      <p>
        Questions about this page, or requests about your information, can be sent to{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We aim to respond within 30
        days.
      </p>
    );
  }
  if (site.pinterestUrl) {
    return (
      <p>
        Questions about this page, or requests about your information, can be sent to Nuvexa Picks
        through our <a href={site.pinterestUrl}>Pinterest profile</a>. We aim to respond within 30
        days.
      </p>
    );
  }
  return (
    <p>
      A dedicated contact address for questions and requests about this page will be published here.
    </p>
  );
}
