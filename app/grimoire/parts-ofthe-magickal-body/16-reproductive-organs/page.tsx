// app/grimoire/parts-of-the-magickal-body/16-reproductive-organs/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ReproductiveOrgansPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Reproductive Organs" subtitle="Creation, Desire, and Sacred Power">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/reproductive-organs.png"
              alt="Reproductive Organs in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Creation begins in the place where desire meets devotion.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The reproductive organs represent raw creative force. In the
            magickal body, this region symbolizes desire, intimacy, and the
            power to generate life: whether physical, emotional, or spiritual.
            It is the wellspring of creation that exists beneath logic and
            beyond performance.
          </p>

          <p>
            This area holds the archetype of sacred power. Not domination, but
            magnetism. The reproductive center reflects how you relate to
            pleasure, vulnerability, and the exchange of energy between self
            and other. It asks whether desire is honored or suppressed, whether
            intimacy feels safe or guarded.
          </p>

          <p>
            Symbolically, this region is also about legacy. What you create
            extends beyond you. Ideas, art, relationships, and literal life all
            emerge from this current. The lesson here is sovereignty. Creation
            without consent becomes depletion. Creation with intention becomes
            power.
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
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
              When this area speaks, it speaks in longing, tension, attraction,
              or withdrawal. It responds when desire is denied, when intimacy
              feels unsafe, or when creative energy has nowhere to move.
            </p>

            <p>
              It also activates when you are entering transformation. The
              reproductive current is deeply tied to cycles of death and rebirth.
              When something in your life is ready to end so something new can
              begin, this region often registers that shift before the mind
              articulates it.
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
                In expression, this area represents embodied creativity and
                conscious intimacy. Desire is acknowledged without shame.
                Pleasure is integrated without control. Creative force flows
                into projects, connection, and transformation in ways that feel
                aligned and empowered.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, this region reflects repression, secrecy, or power
                struggles. Desire may be hidden, weaponized, or expressed
                without boundaries. The shadow here is the belief that power
                must dominate or that pleasure must be punished. Both distort
                the sacred nature of creation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you longing to create that you have not allowed?</p>
            <p>
              Where has shame silenced desire that is actually sacred?
            </p>
            <p>
              If your creative power were fully trusted, how would you use it?
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