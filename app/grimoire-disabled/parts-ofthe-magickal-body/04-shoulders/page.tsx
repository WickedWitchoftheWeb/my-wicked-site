// app/grimoire/parts-of-the-magickal-body/04-shoulders/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ShouldersPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Shoulders" subtitle="The Carriers of Choice">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/shoulders.png"
              alt="Shoulders in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What you carry shapes you, until you decide what belongs to you.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The shoulders are the carriers. They hold weight, they brace effort,
            and they reveal what you have agreed to hold. In the magickal body,
            the shoulders represent responsibility as a living contract: what you
            take on, what you refuse, and what you keep lifting even when it is
            no longer yours.
          </p>

          <p>
            This region also holds the archetype of mobility. The shoulders
            initiate reach. They help you extend outward, gather resources, and
            bring experience back to the self. When the shoulders are free, you
            can adapt and respond without losing yourself. When they tighten,
            life can start to feel like a constant burden instead of a series of
            choices.
          </p>

          <p>
            The shoulders sit close to the throat, where truth becomes language.
            What you carry affects what you say. What you refuse to say affects
            what you carry. In this way, shoulders are not only about effort.
            They are about boundary and honesty: the line between duty and
            self-erasure.
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
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
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
              When the shoulders speak, they speak in weight and readiness. They
              tighten when you prepare for impact, even if nothing has happened
              yet. They tense when you anticipate being needed, judged, or
              blamed. They also soften when you finally admit you do not have to
              hold everything alone.
            </p>

            <p>
              This region speaks when responsibility has stopped being sacred and
              started being automatic. It asks a quiet question: what are you
              carrying because it is yours, and what are you carrying because you
              are afraid to put it down?
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
                In expression, the shoulders carry with discernment. They know
                the difference between devotion and obligation. This is
                responsibility as choice: steady, responsive, and appropriately
                weighted. You can show up fully without overextending. You can
                help without disappearing. You can work without turning your life
                into a sacrifice.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the shoulders become a permanent brace. They may hold
                tension from over-responsibility, from hypervigilance, or from the
                belief that everything will fall apart if you do not manage it.
                The shadow can also flip into avoidance: refusing all weight
                because carrying anything feels like losing freedom. Either way,
                the pattern is the same: fear distorts your relationship with
                responsibility.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you carrying that you never consciously agreed to carry?</p>
            <p>
              Where do you confuse being dependable with being responsible for
              everyone?
            </p>
            <p>
              If you set one burden down today, what would remain true about you?
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