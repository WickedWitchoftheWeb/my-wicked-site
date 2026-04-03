// app/grimoire/colors/09-indigo/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function IndigoPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Indigo" subtitle="Perception, insight, and inner vision">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/indigo.png"
            alt="Abstract indigo energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Indigo is the eye that sees beneath the surface.&rdquo;
            </p>

            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Indigo is the color of perception. It governs intuition, inner
            sight, pattern recognition, and the ability to read what is not
            being said. Indigo does not rely on evidence alone. It synthesizes.
          </p>

          <p>
            In magick, indigo supports insight, divination, dreamwork, and
            cognitive clarity beyond logic. It allows information to arrive
            through resonance rather than explanation.
          </p>

          <p>
            Use indigo when you need to trust what you know without proof.
            Use indigo when you are reading between lines, navigating liminal
            spaces, or strengthening intuitive discernment.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <section className="grimoire-correspondences">
            {/* Element */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/11-elements/air">Air</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Perception, cognition, mental synthesis, subtle awareness.
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
              <p className="grimoire-correspondence-description">
                Intuition, insight, symbolic understanding, inner vision.
              </p>
            </div>

            {/* Magickal Functions */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Intuition, divination, dreamwork, perception, discernment
              </p>
              <p className="grimoire-correspondence-description">
                Indigo sharpens awareness without forcing interpretation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* INDIGO IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Indigo in Practice</h2>

          <div className="grimoire-text">
            <p>Indigo candles: intuition, insight, and inner clarity.</p>
            <p>Dream journals: recording symbolic information.</p>
            <p>Darkened spaces: reducing sensory input to strengthen perception.</p>
            <p>Meditative focus: listening for subtle internal signals.</p>
            <p>Symbol study: allowing meaning to emerge rather than forcing it.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE INDIGO */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Indigo</h2>

          <div className="grimoire-text">
            <p>Use indigo when you are:</p>

            <p>Navigating uncertainty that requires intuition.</p>
            <p>Interpreting symbols, dreams, or signs.</p>
            <p>Strengthening psychic perception or inner knowing.</p>
            <p>Reading emotional or energetic undercurrents.</p>
            <p>Learning to trust subtle information.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Indigo can become overinterpretation if intuition is not grounded.
              Insight works best when paired with clarity.
            </p>

            <p>
              Indigo can also lead to detachment if perception replaces presence.
              Seeing clearly still requires engagement.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Intuition • Perception • Insight • Discernment • Awareness • Vision •
              Synthesis • Inner Knowing
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