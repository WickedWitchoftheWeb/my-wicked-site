import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function ContactPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Contact" subtitle="">
        <section
          className="grimoire-section"
          style={{ textAlign: "center" }}
        >
          <p className="grimoire-text">
            If you have any issues with your purchase, delivery, or access,
            reach out directly.
          </p>

          <p className="grimoire-text">
            Email: wicked@witchsweb.com
          </p>

          <p className="grimoire-text">
            Please include your purchase email and what you need help with.
          </p>
        </section>

        <footer className="grimoire-footer">
          <p>
            <Link href="/wicked-shops" className="grimoire-footer-link">
              ← Back to Wicked Shops
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}