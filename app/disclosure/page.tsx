import type { Metadata } from "next";
import Link from "next/link";
import { ContactSentence, LegalPage } from "@/components/LegalPage";
import styles from "@/components/LegalPage.module.css";
import { amazonDisclosure, commissionDisclosure } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Nuvexa Picks uses affiliate links, including the Amazon Associates Program.",
  alternates: { canonical: "/disclosure" },
  openGraph: { url: "/disclosure", title: "Affiliate Disclosure · Nuvexa Picks" },
};

export default function DisclosurePage() {
  return (
    <LegalPage
      title="Affiliate Disclosure"
      intro={<p>We want it to be easy to see how Nuvexa Picks is supported.</p>}
    >
      <div className={styles.callout}>
        <p>
          <strong>{amazonDisclosure}</strong>
        </p>
        <p>{commissionDisclosure}</p>
      </div>

      <h2>Affiliate links</h2>
      <p>
        Some of the links we share — on Pinterest and on this website — are affiliate links. If you
        follow one and make a qualifying purchase, Nuvexa Picks may receive a small commission from
        the retailer.
      </p>

      <h2>No extra cost to you</h2>
      <p>
        Affiliate commissions are paid by the retailer. The price you pay is the same whether or not
        you use one of our links.
      </p>

      <h2>How we choose what to feature</h2>
      <p>
        Products are selected for their usefulness, design and value. A commission is never the reason
        something is featured, and we do not accept payment from brands to feature their products. If
        that ever changes, sponsored content will be clearly labeled.
      </p>
      <p>
        Prices, availability and product details change frequently. Please check the retailer’s
        website for current information before you buy.
      </p>

      <h2>Amazon Associates</h2>
      <p>
        Nuvexa Picks is a participant in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn advertising fees by
        advertising and linking to Amazon.com. {amazonDisclosure}
      </p>

      <h2>Questions</h2>
      <ContactSentence />
      <p>
        For information about how we handle data, see our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
