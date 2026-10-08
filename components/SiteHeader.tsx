import Link from "next/link";
import { Wordmark } from "./Logo";
import { SiteNav } from "./SiteNav";
import { categories } from "@/lib/categories";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Nuvexa Picks home">
          <Wordmark />
        </Link>
        <SiteNav categories={categories.map(({ slug, name }) => ({ slug, name }))} />
      </div>
    </header>
  );
}
