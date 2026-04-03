// app/grimoire/parts-of-the-magickal-body/20-knees/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function KneesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Knees" subtitle="Humility, Flexibility, and Structural Support">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/knees.png"
              alt="Knees in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Strength is not only standing tall. It is knowing when to bend.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The knees are the hinges of forward motion. They allow you to bend,
            kneel, rise, and climb. In the magickal body, the knees symbolize
            humility and flexibility: the capacity to adapt without losing your
            structural integrity.
          </p>

          <p>
            This region holds the archetype of surrender in strength. Knees
            support the weight of the body while permitting movement. They
            reflect your ability to bow without collapsing, to adjust your
            course without abandoning your path.
          </p>

          <p>
            Symbolically, the knees also represent authority and respect. To
            kneel is an act of acknowledgment. To stand again is an act of
            autonomy. The lesson of this area is balance between pride and
            humility. Rigidity fractures. Flexibility endures.
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
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
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
              When the knees speak, they speak through resistance or
              instability. They respond when you are refusing to bend in a
              situation that requires adaptation, or when you feel unsupported
              in responsibilities you have taken on.
            </p>

            <p>
              This region often activates during periods of pressure: career
              demands, leadership roles, or structural changes in life. The
              knees ask whether you are carrying weight with discipline or
              pride. They question whether flexibility would actually strengthen
              you.
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
                In expression, the knees represent resilient flexibility. You
                can yield without surrendering your values. You accept guidance
                without diminishing yourself. Authority becomes stable because
                it is grounded in humility.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the knees reflect stubbornness or collapse. You may
                refuse to bend until something forces you to. Or you may give in
                too quickly, mistaking submission for peace. The shadow here is
                misunderstanding strength as rigidity or humility as weakness.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where would flexibility strengthen you rather than weaken you?</p>
            <p>Are you carrying responsibility from pride or from purpose?</p>
            <p>
              If you trusted your stability, what would you allow yourself to
              adjust?
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