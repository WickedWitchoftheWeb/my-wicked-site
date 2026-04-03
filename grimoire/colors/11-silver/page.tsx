// app/grimoire/colors/11-silver/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SilverPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Silver"
        subtitle="Reflection, intuition, and liminal knowing"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/silver.png"
            alt="Abstract silver energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Silver is truth revealed through reflection.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Silver is the color of reflection and liminal awareness. It governs
            intuition that arrives through mirroring, cycles, and subtle shifts
            rather than direct illumination. Silver listens before it speaks.
          </p>

          <p>
            In magick, silver supports psychic receptivity, dream states,
            divination, and emotional intelligence that adapts with time. Silver
            does not impose meaning. It reflects what already exists.
          </p>

          <p>
            Use silver when you need to observe before acting. Use silver when
            you are navigating thresholds, cycles, or emotional complexity. Use
            silver when clarity must arrive through patience.
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
                <Link href="/grimoire/source">Source</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Reflective Source, liminal intelligence, subtle guidance.
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Intuitive reception, spiritual reflection, quiet knowing.
              </p>
            </div>

            {/* Magickal Functions */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Reflection, intuition, divination, psychic receptivity, cycles
              </p>
              <p className="grimoire-correspondence-description">
                Silver reveals truth through timing and mirroring.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* SILVER IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Silver in Practice</h2>

          <div className="grimoire-text">
            <p>Silver candles: intuitive clarity and reflective work.</p>
            <p>Moon rituals: honoring cycles and emotional timing.</p>
            <p>Mirrors and water bowls: divination and self-observation.</p>
            <p>Journaling: tracking patterns and recurring signals.</p>
            <p>Quiet observation: allowing insight to emerge naturally.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE SILVER */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Silver</h2>

          <div className="grimoire-text">
            <p>Use silver when you are:</p>

            <p>Reading subtle emotional or energetic shifts.</p>
            <p>Working with dreams or symbolic information.</p>
            <p>Crossing a threshold or transition.</p>
            <p>Needing guidance that unfolds with time.</p>
            <p>Observing rather than directing a situation.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Silver can become indecision if reflection replaces action. Insight
              still needs movement.
            </p>

            <p>
              Silver can also blur boundaries if intuition is not grounded.
              Reflection works best when paired with clarity.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Reflection • Intuition • Cycles • Liminality • Receptivity • Insight
              • Subtlety • Timing
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