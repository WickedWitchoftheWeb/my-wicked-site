// app/grimoire/colors/13-black/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BlackPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Black" subtitle="Containment, protection, and deep power">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/black.png"
            alt="Abstract black energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Black is power that does not leak.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Black is the color of containment. It governs protection, boundaries,
            endings, and the ability to hold power without dispersing it. Black
            absorbs. It stabilizes. It seals.
          </p>

          <p>
            In magick, black is used for protection, banishing, grounding,
            energetic containment, and shadow work. Black does not create chaos.
            Black prevents it.
          </p>

          <p>
            Use black when you need to close a cycle, protect your field, or
            consolidate power before action. Use black when something must end
            cleanly so something else can begin.
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
                <Link href="/grimoire/11-elements/earth">Earth</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Grounding, structure, containment, material stability.
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Safety, boundaries, survival, foundational stability.
              </p>
            </div>

            {/* Magickal Functions */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Protection, banishing, grounding, containment, shadow integration
              </p>
              <p className="grimoire-correspondence-description">
                Black seals energy and prevents leakage.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* BLACK IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Black in Practice</h2>

          <div className="grimoire-text">
            <p>Black candles: protection, banishing, and boundary work.</p>
            <p>Protective wear: anchoring the energetic field.</p>
            <p>Closing rituals: ending cycles with clarity.</p>
            <p>Shadow journaling: integrating suppressed material.</p>
            <p>Ground contact: stabilizing the body and nervous system.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE BLACK */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Black</h2>

          <div className="grimoire-text">
            <p>Use black when you are:</p>

            <p>Protecting yourself from energetic interference.</p>
            <p>Closing a chapter or cutting a cord.</p>
            <p>Stabilizing after emotional or spiritual upheaval.</p>
            <p>Holding power quietly before action.</p>
            <p>Working with shadow material consciously.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Black can become isolation if protection replaces connection.
              Containment must still allow circulation when appropriate.
            </p>

            <p>
              Black can also suppress emotion if grounding turns into avoidance.
              Shadow work requires honesty as well as safety.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Protection • Containment • Boundaries • Grounding • Endings • Shadow
              • Stability • Power
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