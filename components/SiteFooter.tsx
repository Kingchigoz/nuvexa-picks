import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { Wordmark } from "./Logo";
import { categories } from "@/lib/categories";
import { amazonDisclosure, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Wordmark />
            <p className="site-footer__tagline">{site.tagline}</p>
          </div>
          <nav aria-label="Categories">
            <ul className="site-footer__links">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer">
            <ul className="site-footer__links">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclosure">Affiliate Disclosure</Link>
              </li>
              {site.pinterestUrl && (
                <li>
                  <a href={site.pinterestUrl} target="_blank" rel="noopener noreferrer">
                    Pinterest <ArrowUpRightIcon className="site-footer__icon" weight="light" aria-hidden="true" />
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>
            © {site.founded} {site.name}. All rights reserved.
          </p>
          <p>{amazonDisclosure}</p>
        </div>
      </div>
    </footer>
  );
}
