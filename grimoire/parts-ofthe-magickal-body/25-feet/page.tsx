// app/grimoire/parts-of-the-magickal-body/25-feet/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function FeetPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Feet" subtitle="Surrender, Direction, and Spiritual Grounding">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/feet.png"
              alt="Feet in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Where you walk becomes who you become.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The feet are the body’s contact with the earth. They carry weight,
            absorb terrain, and determine direction. In the magickal body, the
            feet symbolize surrender to the path: the willingness to walk it,
            even when it is uncertain.
          </p>

          <p>
            This region holds the archetype of spiritual grounding. Pisces rules
            the feet, linking them to intuition, dreams, and unseen currents.
            The paradox is profound: the most mystical sign governs the part of
            the body that touches the physical ground. The message is clear.
            Vision must be lived.
          </p>

          <p>
            Symbolically, the feet represent faith in motion. They do not decide
            the destination alone, but they commit to each step. The lesson here
            is trust. You do not need to see the entire road to take the next
            one.
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
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
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
              When the feet speak, they speak through hesitation or restlessness.
              They respond when you feel uncertain about your direction or when
              you are wandering without conscious intention.
            </p>

            <p>
              This region often activates during spiritual questioning,
              transitions, or periods of surrender. The feet ask whether you are
              walking toward something meaningful, or drifting without choosing.
              They remind you that even small steps shape destiny.
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
                In expression, the feet represent grounded faith. You trust your
                path even when it unfolds slowly. You move with intuition but
                remain anchored in reality. Your steps are deliberate, even if
                the destination evolves.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the feet reflect escapism or aimless drifting. You may
                avoid commitment to a direction, hoping clarity will arrive
                without movement. The shadow here is forgetting that destiny is
                shaped through participation. The path reveals itself through
                action.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are your steps currently leading you?</p>
            <p>Are you walking with intention or drifting by default?</p>
            <p>
              If you trusted your inner guidance completely, what step would you
              take next?
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