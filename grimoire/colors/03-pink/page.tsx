// app/grimoire/colors/03-pink/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PinkPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Pink"
        subtitle="Soft power, devotion, and relational safety"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/pink.png"
            alt="Abstract pink energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Pink is the strength that protects tenderness without
              closing the heart.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Pink is the color of tenderness with boundaries. It holds softness
            without collapse, devotion without self-erasure, and care without
            losing discernment. Pink supports emotional repair, relational
            safety, and the kind of love that stabilizes instead of consumes.
          </p>

          <p>
            In magick, pink is used for healing the heart, restoring trust,
            strengthening self-love, and calling in connection that feels safe
            to inhabit. Pink does not force closeness. Pink builds warmth slowly
            and lets it become real.
          </p>

          <p>
            Use pink when you are learning how to receive. Use pink when you are
            rebuilding after heartbreak. Use pink when you want to soften
            without surrendering your standards.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Emotion, bonding, receptivity, relational flow.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Love, compassion, emotional integration, safety in connection.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Self-love, reconciliation, emotional healing, devotion, sweetness
              </p>
              <p className="grimoire-correspondence-description">
                Use pink to soften the field and restore trust without losing
                discernment.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* PINK IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Pink in Practice</h2>

          <div className="grimoire-text">
            <p>Pink candles: heart healing, kindness, and relational repair.</p>
            <p>
              Rose water: emotional soothing, self-love rituals, gentle cleansing.
            </p>
            <p>Soft fabric: comfort altars and tenderness work.</p>
            <p>Sweet offerings: gratitude, devotion, relational warmth.</p>
            <p>Hand over heart: breathwork that returns you to safety.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE PINK */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Pink</h2>

          <div className="grimoire-text">
            <p>This color supports you when you are:</p>
            <p>Healing from heartbreak or emotional fatigue.</p>
            <p>Learning how to receive care without suspicion.</p>
            <p>Calling in connection that feels safe and steady.</p>
            <p>Rebuilding self-worth through tenderness.</p>
            <p>Repairing a bond that deserves another chance.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Pink can become people-pleasing if tenderness replaces boundaries.
              Softness is not a requirement to tolerate disrespect.
            </p>

            <p>
              Pink can also become fantasy if it is used to avoid reality.
              Devotion is strongest when it is rooted in truth and behavior.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Self-Love • Tenderness • Devotion • Compassion • Healing •
              Receptivity • Safety • Sweetness • Trust
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