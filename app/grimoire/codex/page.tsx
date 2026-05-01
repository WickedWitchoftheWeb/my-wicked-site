// app/grimoire/source/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function SourcePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Codex"
        subtitle="The Wicked Witch's Enteries"
      >

        <p className="grimoire-signoff">— Wicked</p>

        {/* FOOTER LINK */}
        <section className="zodiac-footer-links">
          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}