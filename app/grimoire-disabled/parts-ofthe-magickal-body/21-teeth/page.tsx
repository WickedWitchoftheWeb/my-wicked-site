// app/grimoire/parts-of-the-magickal-body/21-teeth/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TeethPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Teeth" subtitle="Boundaries, Survival, and Personal Authority">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/teeth.png"
              alt="Teeth in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What you are willing to bite into determines what you can survive.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The teeth are instruments of survival. They break down what is taken in,
            defend the mouth, and expose instinct when threatened. In the magickal
            body, the teeth symbolize boundaries and personal authority: the ability
            to decide what you will accept and what you will refuse.
          </p>

          <p>
            This region holds the archetype of primal discernment. Teeth do not
            negotiate with what cannot be processed. They engage, divide, and prepare
            experience for integration. Symbolically, they reflect how you confront
            challenge, how you assert yourself, and how you claim your right to
            protect your space.
          </p>

          <p>
            Teeth are also connected to lineage and structure. They endure pressure
            over time. They represent resilience that is built, not improvised. The
            lesson here is strength with clarity. To show your teeth is not aggression.
            It is declaration.
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
              When the teeth speak, they speak through tension and clenching.
              They respond when you are holding words back, bracing against
              pressure, or forcing yourself to endure something that violates
              your limits.
            </p>

            <p>
              This region often activates when boundaries are unclear. If you
              are trying to be agreeable while feeling threatened, the body
              registers it. Teeth remind you that survival includes defense.
              They ask whether you are protecting yourself or silencing yourself.
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
                In expression, the teeth represent grounded authority. You assert
                yourself clearly. You protect your time and energy without apology.
                Your boundaries are firm but not cruel. Strength here is calm,
                defined, and unshakeable.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the teeth reflect suppressed anger or reactive defense.
                You may clench silently until resentment builds, or lash out when
                limits have been crossed too many times. The shadow here is confusing
                aggression with protection, or endurance with strength.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are your boundaries being tested?</p>
            <p>What are you enduring that you could instead address directly?</p>
            <p>If you trusted your right to protect yourself, what would change?</p>
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