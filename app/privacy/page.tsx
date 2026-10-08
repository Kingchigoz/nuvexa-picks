import type { Metadata } from "next";
import Link from "next/link";
import { ContactSentence, LegalPage } from "@/components/LegalPage";
import styles from "@/components/LegalPage.module.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Nuvexa Picks handles information on its website, through affiliate links and on Pinterest.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    siteName: "Nuvexa Picks",
    title: "Privacy Policy · Nuvexa Picks",
    description: "How Nuvexa Picks handles information on its website, through affiliate links and on Pinterest.",
  },
};

const toc = [
  { id: "summary", label: "At a glance" },
  { id: "who-we-are", label: "Who we are" },
  { id: "information-you-provide", label: "Information you provide" },
  { id: "automatic", label: "Information collected automatically" },
  { id: "cookies", label: "Cookies and analytics" },
  { id: "affiliate-links", label: "Affiliate and third-party links" },
  { id: "pinterest", label: "Pinterest and the Pinterest API" },
  { id: "service-providers", label: "Service providers" },
  { id: "sharing", label: "How information is shared" },
  { id: "retention", label: "Retention and security" },
  { id: "rights", label: "Your choices and rights" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      toc={toc}
      intro={
        <p>
          Nuvexa Picks is built to be privacy-light. This policy explains, in plain language, what
          information is involved when you visit this website, follow one of our links or interact
          with Nuvexa Picks on Pinterest.
        </p>
      }
    >
      <h2 id="summary">At a glance</h2>
      <div className={styles.callout}>
        <ul>
          <li>You don’t need an account to use this website, and there is nothing to sign up for.</li>
          <li>We don’t sell products directly, and we don’t take payments on this website.</li>
          <li>This website does not use cookies, analytics, advertising pixels or tracking scripts.</li>
          <li>We don’t sell or rent personal information.</li>
          <li>
            Some links are affiliate links. When you follow one, the retailer’s own privacy policy
            applies.
          </li>
        </ul>
      </div>

      <h2 id="who-we-are">Who we are</h2>
      <p>
        Nuvexa Picks (“Nuvexa Picks”, “we”, “us”) is an independent product-discovery brand that
        curates products, gift ideas and everyday finds, shared primarily through Pinterest. This
        policy applies to this website at{" "}
        <a href={site.url}>{site.url.replace(/^https?:\/\//, "")}</a> (the “Site”) and to Nuvexa
        Picks content on Pinterest.
      </p>

      <h2 id="information-you-provide">Information you provide</h2>
      <p>
        The Site has no accounts, sign-up forms, comments, checkout or newsletter, so we do not ask
        you to provide personal information to use it.
      </p>
      <p>
        If you choose to contact us directly, we receive the information you send — typically your
        name, your email address or social media handle, and the contents of your message. We use it
        only to read and respond to you.
      </p>

      <h2 id="automatic">Information collected automatically</h2>
      <p>
        Like any website, the Site is delivered by a hosting provider. To serve pages and protect the
        Site from abuse, the hosting infrastructure processes standard technical information such as
        your IP address, browser and device type, the page requested, the referring page and the
        date and time of the request. This information may be kept briefly in server logs according
        to the hosting provider’s own practices.
      </p>
      <p>
        We do not use this technical information to identify you, build a profile of you or follow
        you across other websites.
      </p>

      <h2 id="cookies">Cookies and analytics</h2>
      <p>
        The Site does not set cookies and does not use analytics, advertising, social media pixels or
        other tracking technologies. Fonts and images are served from the Site itself rather than
        from third-party services.
      </p>
      <p>
        If we ever add analytics or similar tools, we will update this policy before doing so and
        describe exactly what they collect.
      </p>

      <h2 id="affiliate-links">Affiliate and third-party links</h2>
      <p>
        The Site and our Pinterest content link to third-party websites, including Pinterest, Amazon
        and other retailers or affiliate partners. Some of these links are affiliate links, which
        means Nuvexa Picks may earn a commission if you make a qualifying purchase. See our{" "}
        <Link href="/disclosure">Affiliate Disclosure</Link> for details.
      </p>
      <p>
        When you follow a link, you leave the Site. The retailer or platform you visit may use
        cookies or similar technologies — for example, to recognize that you arrived through an
        affiliate link — and its own privacy policy governs any information it collects, including
        anything you provide when making a purchase.
      </p>
      <p>
        Affiliate programs generally provide us with aggregated reports, such as the number of clicks
        or items ordered. They do not give us your name, contact details or payment information.
      </p>

      <h2 id="pinterest">Pinterest and the Pinterest API</h2>
      <p>
        Nuvexa Picks uses Pinterest, including Pinterest’s developer tools and API, to create, publish
        and manage content on its own Pinterest account — for example, creating Pins, organizing
        boards and reviewing how our own content performs.
      </p>
      <ul>
        <li>
          Through the Pinterest API we access only the Nuvexa Picks account and its own content and
          analytics.
        </li>
        <li>
          We do not use the Pinterest API to access, collect or store private information about other
          Pinterest users.
        </li>
        <li>We do not sell, rent or share Pinterest data with third parties.</li>
      </ul>
      <p>
        If you interact with our Pins on Pinterest — for example, by saving or commenting on them —
        that activity takes place on Pinterest and is governed by{" "}
        <a href="https://policy.pinterest.com/privacy-policy" rel="noopener noreferrer">
          Pinterest’s Privacy Policy
        </a>
        .
      </p>

      <h2 id="service-providers">Service providers</h2>
      <p>
        We rely on a small number of service providers to run Nuvexa Picks, such as website hosting
        and the workflow-automation and AI tools we use to research products and prepare content.
        These tools work with product information and our own content; they are not used to collect
        or process personal information about visitors to the Site.
      </p>

      <h2 id="sharing">How information is shared</h2>
      <p>We do not sell or rent personal information. We share information only:</p>
      <ul>
        <li>with service providers that help us operate the Site, and only as needed to do so;</li>
        <li>when required by law, or to protect the rights, safety or security of others; or</li>
        <li>with your permission.</li>
      </ul>

      <h2 id="retention">Retention and security</h2>
      <p>
        We keep messages you send us only for as long as needed to respond and for reasonable record
        keeping, and then delete them. The Site is served exclusively over HTTPS. Technical logs are
        retained by our hosting provider according to its own retention practices.
      </p>
      <p>
        Our service providers may process information in the United States and other countries. Where
        this happens, it is handled under those providers’ own privacy and security commitments.
      </p>

      <h2 id="rights">Your choices and rights</h2>
      <p>
        Depending on where you live — for example in Canada, the United Kingdom, the European Union or
        certain U.S. states — you may have the right to request access to, correction of, or deletion
        of personal information we hold about you, and to object to or restrict certain processing.
        Because we collect very little, in most cases we will simply confirm that we hold no
        information about you. You may also have the right to complain to your local data protection
        authority.
      </p>

      <h2 id="children">Children</h2>
      <p>
        The Site is intended for a general adult audience and is not directed to children under 13
        (or the minimum age required in your country). We do not knowingly collect personal
        information from children.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        If our practices change, we will update this policy and the effective date at the top of this
        page.
      </p>

      <h2 id="contact">Contact</h2>
      <ContactSentence />
    </LegalPage>
  );
}
