// app/grimoire/parts-of-the-magickal-body/15-liver/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LiverPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Liver" subtitle="Detoxification, Truth, and Expansion">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/liver.png"
              alt="Liver in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Growth requires release as much as it requires vision.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The liver is the great purifier. It filters, transforms, and clears
            what the body cannot carry forward. In the magickal body, the liver
            represents expansion through discernment: the ability to grow
            without absorbing what corrupts clarity.
          </p>

          <p>
            This region holds the archetype of truth. The liver responds when
            something feels excessive, indulgent, or misaligned with your higher
            vision. It reflects how you handle abundance, ambition, and
            appetite. Expansion without integrity becomes distortion. The liver
            restores balance.
          </p>

          <p>
            Symbolically, the liver is also associated with stored emotion,
            especially frustration and suppressed anger. It mirrors the tension
            between desire and limitation. When you want more than your current
            structure allows, the liver registers that pressure.
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
                </Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
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
              When the liver speaks, it speaks through excess or suppression. It
              responds when you are overextending, overindulging, or pushing
              beyond your energetic limits. It also responds when you are
              holding back frustration that needs expression.
            </p>

            <p>
              This region often activates when your ambitions outpace your
              structure. The desire to expand is natural, but without clarity,
              growth becomes strain. The liver asks: what needs to be cleared so
              expansion can happen cleanly?
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
                In expression, the liver represents healthy expansion. You grow
                with awareness. You pursue opportunity without sacrificing
                integrity. Ambition is guided by wisdom rather than ego. Energy
                flows forward without stagnation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the liver reflects imbalance between desire and
                discipline. You may chase growth without boundaries or suppress
                anger until it calcifies into resentment. The shadow here is the
                belief that more is always better, or that anger must never be
                acknowledged. Both distort clarity.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are you expanding without clearing first?</p>
            <p>What frustration have you postponed expressing?</p>
            <p>
              If growth required release, what would you need to let go of?
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