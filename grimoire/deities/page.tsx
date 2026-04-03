// app/grimoire/08-deities/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function DeitiesLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Deities"
        coverImage="/deities/deities-cover.png"
        subtitle="Choose a Gate: Goddesses or Gods"
      >
        {/* Intro */}
        <section className="zodiac-intro">
          <p>
            Across every culture and every age, humanity has given names and faces
            to the forces that shape existence. Goddesses and Gods are not distant
            myths locked in the past — they are living archetypes, expressions of
            power, consciousness, nature, and cosmic law.
          </p>

          <p>
            Within the Grimoire, deities are honored as embodiments of specific
            energies: creation and destruction, love and war, wisdom and chaos,
            death and rebirth. Each carries their own mythology, symbols,
            correspondences, and lessons — yet all emerge from the same universal
            source.
          </p>

          <p className="wicked-signature">— Wicked</p>
        </section>

        {/* Two “Zodiac-style” sections */}
        <div>
          <Link href="/grimoire/08-deities/01-goddesses-landing">
            <div className="zodiac-section">
              <div className="zodiac-divider"></div>
              <h1 className="zodiac-name">Goddesses</h1>
              <img
                src="/deities/goddess-cover.png"
                alt="Goddesses"
                className="zodiac-img"
              />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/08-deities/02-gods-landing">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Gods</h1>
              <img src="/deities/god-cover.png" alt="Gods" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>
        </div>

        {/* FOOTER LINKS */}
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