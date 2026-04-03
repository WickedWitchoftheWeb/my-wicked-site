// app/grimoire/parts-of-the-magickal-body/24-ankles/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AnklesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ankles" subtitle="Adaptability, Pivot Points, and Directional Shifts">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/ankles.png"
              alt="Ankles in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The smallest pivot can change the entire path.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The ankles are the body&apos;s pivot points. They allow you to turn,
            adjust, balance, and shift direction without collapsing. In the
            magickal body, the ankles symbolize adaptability: the ability to
            reorient yourself when circumstances change.
          </p>

          <p>
            This region holds the archetype of flexibility in freedom. Ankles
            do not initiate motion, nor do they generate power. They refine it.
            They make subtle corrections that prevent major falls. They reflect
            your relationship with adjustment: whether you resist change or
            integrate it fluidly.
          </p>

          <p>
            Symbolically, the ankles are about responsiveness. Life rarely moves
            in straight lines. The ankles teach that course correction is not
            weakness. It is intelligence. The capacity to pivot keeps you from
            becoming rigid in a world that constantly shifts.
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
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
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
              When the ankles speak, they speak through instability or sudden
              shifts. They respond when you are being asked to change direction
              quickly or when you are resisting necessary adaptation.
            </p>

            <p>
              This region often activates during periods of unpredictability.
              Unexpected news, social shifts, or personal revelations can all
              challenge your balance. The ankles ask whether you are willing to
              adjust without losing yourself.
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
                In expression, the ankles represent graceful adjustment. You
                pivot without panic. You respond to change with curiosity rather
                than fear. Movement remains fluid even when direction shifts.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the ankles reflect rigidity or overcorrection. You
                may cling to a fixed plan despite clear signs to adapt, or swing
                wildly between directions without grounding. The shadow here is
                mistaking flexibility for instability. True adaptability is
                anchored.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where is life asking you to pivot?</p>
            <p>Are you resisting adjustment out of pride or fear?</p>
            <p>
              What would change if you trusted your ability to rebalance?
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