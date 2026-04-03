// app/grimoire/parts-of-the-magickal-body/17-hips/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HipsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hips" subtitle="Momentum, Direction, and Freedom of Movement">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/hips.png"
              alt="Hips in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Forward motion requires both strength and willingness.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The hips are the axis of movement. They support walking, turning,
            shifting direction, and carrying the weight of the upper body into
            action. In the magickal body, the hips symbolize momentum: your
            ability to move forward in life and pivot when needed.
          </p>

          <p>
            This region holds the archetype of freedom. The hips reflect how
            comfortable you are with change, travel, exploration, and risk.
            When your path calls you somewhere new, it is the hips that begin
            the journey. They carry the body into new terrain long before the
            destination is certain.
          </p>

          <p>
            Symbolically, the hips also represent stored tension around
            autonomy. When you feel stuck between staying and leaving, between
            obligation and expansion, this area often registers that internal
            conflict. The hips teach that direction requires commitment.
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
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
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
              When the hips speak, they speak in restriction or restlessness.
              They respond when you feel confined in a role, relationship, or
              environment that no longer fits your growth.
            </p>

            <p>
              This region often activates when you are resisting necessary
              change or hesitating to take a leap toward something larger. The
              hips register the tension between stability and expansion. They
              ask: are you moving because you choose to, or because you feel
              forced?
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
                In expression, the hips represent confident movement. You trust
                your direction even when the path is unfamiliar. You can pivot
                without panic and advance without losing balance. This is
                expansion rooted in self-trust.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the hips reflect stagnation or impulsive escape. You
                may remain in situations that limit you because change feels
                unsafe, or leap into new ones without grounding. The shadow here
                is confusion between movement and freedom. True freedom is
                aligned direction, not constant motion.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are you ready to move but still hesitating?</p>
            <p>What path feels expansive even if it feels uncertain?</p>
            <p>
              If you trusted your direction fully, what step would you take
              next?
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