// app/grimoire/parts-of-the-magickal-body/13-kidneys/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function KidneysPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Kidneys" subtitle="Balance, Filtration, and Inner Equilibrium">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/kidneys.png"
              alt="Kidneys in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Discernment is the art of knowing what to keep and what to clear.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The kidneys are the guardians of balance. They filter, refine, and
            regulate what moves through the body. In the magickal body, the
            kidneys symbolize discernment in relationship: how you evaluate
            exchange, how you maintain equilibrium, and how you clear what no
            longer supports your inner stability.
          </p>

          <p>
            This region holds the archetype of fairness. The kidneys operate in
            pairs, mirroring the principle of balance between self and other.
            They ask whether what you are giving and what you are receiving are
            proportionate. They reflect the subtle tension between autonomy and
            connection.
          </p>

          <p>
            Symbolically, the kidneys also represent purification. Not in a
            moral sense, but in a structural one. They remove excess. They keep
            the system from becoming overloaded. They teach the magickal lesson
            that sustainability depends on regular clearing.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>,{" "}
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN THIS AREA SPEAKS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When This Area Speaks</h2>

          <div className="grimoire-text">
            <p>
              When the kidneys speak, they speak through imbalance. They respond
              when you are overextending yourself in partnership, when you are
              tolerating inequity, or when you are carrying more than your share
              of responsibility.
            </p>

            <p>
              This region also speaks when you have not been clearing emotional
              residue from past exchanges. Old agreements, unresolved
              resentment, and unspoken tension accumulate quietly. The kidneys
              remind you that equilibrium requires maintenance.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* SHADOW & EXPRESSION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Shadow &amp; Expression</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Expression</h3>
              <p className="grimoire-correspondence-value">
                In expression, the kidneys represent balanced exchange. You
                recognize when something is fair and when it is not. You can
                negotiate boundaries without hostility and receive support
                without guilt. This is relational harmony rooted in self-worth.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the kidneys reflect chronic imbalance. You may give
                more than you receive, or withdraw entirely to avoid perceived
                injustice. The shadow here is the belief that harmony requires
                self-sacrifice or constant vigilance. Over time, resentment
                builds where clarity was never spoken.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where in your life is the exchange uneven?</p>
            <p>
              What are you holding onto that needs to be cleared for balance to
              return?
            </p>
            <p>
              If you believed fairness was possible, what conversation would you
              initiate?
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/parts-of-the-magickal-body"
              className="grimoire-footer-link"
            >
              ← Back to Parts of the Magickal Body
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}