import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">Page not found</p>
      <h1>
        This page wasn’t <em>saved.</em>
      </h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/">Return to Nuvexa Picks</Link>
    </section>
  );
}
