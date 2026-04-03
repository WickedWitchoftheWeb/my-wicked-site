// app/grimoire/colors/02-red/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function RedPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Red" subtitle="Embodiment, survival, and grounded will">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/red.png"
            alt="Abstract red energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Red is the oath of incarnation: I am here, and I will
              remain.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Red is the color of embodiment. It is the signal that your spirit is
            anchored in a body and that your life is meant to be lived in the
            physical world. Red governs survival, stamina, boundaries, and the
            primal will to keep going.
          </p>

          <p>
            In magick, red is used to strengthen foundations: protection,
            stability, courage, vitality, and the kind of determination that
            does not collapse under pressure. Red does not negotiate with fear.
            Red builds a base and holds it.
          </p>

          <p>
            Use red when you need your energy to land. Use red when you need
            strength that lasts. Use red when you are rebuilding your life from
            the ground up.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Foundation, stability, protection, physical reality.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Survival, safety, boundaries, embodiment, grounded power.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Protection, grounding, courage, stamina, strength, stability
              </p>
              <p className="grimoire-correspondence-description">
                Use red to fortify the base and hold your line.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* RED IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Red in Practice</h2>

          <div className="grimoire-text">
            <p>Red candles: protection, courage, and stamina workings.</p>
            <p>Red cord: binding intentions, strengthening boundaries.</p>
            <p>Iron: reinforcement, defense, resilience.</p>
            <p>Salt and earth: grounding rituals and energetic containment.</p>
            <p>Footwork: walking, cleaning, organizing, rebuilding the base.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE RED */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Red</h2>

          <div className="grimoire-text">
            <p>This color supports you when you are:</p>
            <p>Rebuilding stability after chaos.</p>
            <p>Needing courage for a hard conversation or hard choice.</p>
            <p>Strengthening protection and boundaries.</p>
            <p>Calling stamina for long-term goals.</p>
            <p>Grounding after anxiety, dissociation, or overwhelm.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Red can turn into reactivity if it is used as armor instead of
              foundation. Protection is not the same as aggression.
            </p>

            <p>
              Red can also amplify fear if the intent is panic-based. Use red
              with a clean goal: stabilize, protect, strengthen, endure.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Embodiment • Protection • Grounding • Courage • Stamina • Stability
              • Boundaries • Survival • Strength
            </p>
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/colors" className="grimoire-footer-link">
              ← Back to Colors
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