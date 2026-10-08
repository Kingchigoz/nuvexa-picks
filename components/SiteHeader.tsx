import Link from "next/link";
import { Wordmark } from "./Logo";

const nav = [
  { href: "/#discover", label: "Discover" },
  { href: "/#about", label: "About" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Nuvexa Picks home">
          <Wordmark />
        </Link>
        <nav aria-label="Primary">
          <ul className="site-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-nav__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
