// app/grimoire/colors/07-green/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GreenPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Green"
        subtitle="Balance, connection, and relational breath"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/green.png"
            alt="Abstract green energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Green is the breath that allows love to circulate.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Green is the color of balance and circulation. It governs connection,
            empathy, harmony, and the steady exchange between self and other.
            Green does not rush. It regulates.
          </p>

          <p>
            In magick, green supports healing, emotional equilibrium, relational
            repair, and growth that happens through consistency rather than
            force. Green teaches that stability is created through movement that
            can be sustained.
          </p>

          <p>
            Use green when your system needs balance. Use green when you are
            restoring trust, rebuilding connection, or learning how to hold
            space without losing yourself.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Breath, circulation, exchange, relational movement.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Connection, compassion, balance, emotional circulation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Healing, balance, growth, harmony, restoration, connection
              </p>
              <p className="grimoire-correspondence-description">
                Green stabilizes energy so it can move without collapse.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* GREEN IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Green in Practice</h2>

          <div className="grimoire-text">
            <p>Green candles: healing work, balance, and restoration.</p>
            <p>Living plants: steady growth and environmental harmony.</p>
            <p>Breathwork: regulating emotion through intentional breathing.</p>
            <p>Nature contact: grounding through reciprocal presence.</p>
            <p>Shared rituals: restoring trust and relational flow.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE GREEN */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Green</h2>

          <div className="grimoire-text">
            <p>Use green when you are:</p>

            <p>Healing emotional or relational imbalance.</p>
            <p>Restoring harmony after conflict.</p>
            <p>Building growth that must be sustained.</p>
            <p>Learning to give and receive evenly.</p>
            <p>Stabilizing your system before expansion.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Green can become stagnation if balance replaces movement. Harmony
              still requires circulation.
            </p>

            <p>
              Green can also lead to over-giving if connection is not mutual.
              Balance depends on reciprocity.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Balance • Healing • Growth • Harmony • Connection • Circulation •
              Empathy • Restoration
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