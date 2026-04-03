// app/grimoire/energy-grimoire/energy/feminine-night-yin/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function FeminineNightYinPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Feminine / Night / Yin">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/energy-grim/yin.png"
            alt="Feminine Night Yin"
            className="grimoire-hero-img"
          />
        </section>

        {/* INTRO */}
        <section className="grimoire-section">
          <div className="grimoire-text">
            <p>
              Feminine, or yin energy, is one half of the ancient balance of yin
              and yang. Where yang is active, outward, and solar, yin is the
              inward, receptive, and lunar current of life. It is the energy of
              night, depth, gestation, and interior power.
            </p>

            <p>
              Yin is not &quot;female&quot; in a literal sense. It is a pattern
              of movement. It draws inward rather than projecting outward. It
              gathers rather than disperses. It absorbs before it responds.
            </p>

            <p>Yin is night energy.</p>

            <p>
              Night is not the absence of life. It is where life restores
              itself. It is where the nervous system resets, where wounds begin
              to close, where dreams assemble meaning from the fragments of the
              day. In darkness, roots deepen. In darkness, stars become visible.
            </p>

            <p>
              The feminine dark is not weakness, nor is it chaos. It is the
              hidden current that sustains visible strength. It is the womb
              before birth, the soil before bloom, the quiet intelligence
              beneath reaction. Without yin, nothing stabilizes long enough to
              endure.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE QUALITIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Core Qualities</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Receptivity &amp; Intuition
              </h3>
              <p className="grimoire-correspondence-value">
                Yin energy receives before it responds. It listens before it
                speaks. It trusts instinct, emotional intelligence, and subtle
                perception. Rather than forcing outcomes, it allows information
                to gather and integrates what is felt beneath what is seen.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Stillness &amp; Reflection
              </h3>
              <p className="grimoire-correspondence-value">
                Associated with night, moonlight, shadow, and the unconscious,
                yin creates the pause necessary for clarity. In stillness, the
                body recalibrates. In silence, truth surfaces. Reflection is not
                stagnation. It is incubation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Nurturing &amp; Sustaining
              </h3>
              <p className="grimoire-correspondence-value">
                Yin protects and sustains growth over time. It nourishes what is
                fragile. It holds space for healing and restoration. It
                understands that strength requires cycles of replenishment.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Fluidity &amp; Adaptability
              </h3>
              <p className="grimoire-correspondence-value">
                Like water, yin bends without breaking. It adapts without losing
                integrity. Its strength is subtle, enduring, and deeply rooted.
                It moves around resistance rather than colliding with it.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* SYMBOLISM */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Symbolism</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Elemental</h3>
              <p className="grimoire-correspondence-value">
                Water, earth, and the moon.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Cycle</h3>
              <p className="grimoire-correspondence-value">
                Nighttime, winter, and the dark phase of the lunar cycle. These
                are periods of contraction, integration, and inward movement.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Archetypes</h3>
              <p className="grimoire-correspondence-value">
                The Mother, the Priestess, the Mystic, the Dreamer. Figures of
                depth, wisdom, protection, and unseen influence.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* IN BALANCE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">In Balance</h2>

          <div className="grimoire-text">
            <p>
              When yin is in harmony, it cultivates inner peace, intuition,
              empathy, emotional intelligence, and grounded presence. It allows a
              person to receive insight, integrate experience, and recharge
              after outward exertion.
            </p>

            <p>
              Balanced yin creates depth without withdrawal. It allows softness
              without collapse. It supports boundaries rooted in calm clarity
              rather than force.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* OUT OF BALANCE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Out of Balance</h2>

          <div className="grimoire-text">
            <p>
              When excessive, yin may manifest as passivity, stagnation, emotional
              withdrawal, avoidance, or fear of exposure. One may become overly
              inward, hesitant to act, or resistant to necessary change.
            </p>

            <p>
              When deficient, one may feel disconnected from intuition,
              chronically overstimulated, unable to rest, or emotionally depleted
              from constant outward motion.
            </p>

            <p>
              Yin teaches that darkness is not something to escape. It is
              something to enter consciously. The feminine dark is the ground of
              renewal. It is where power rebuilds itself.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/energy-grimoire/energy"
              className="grimoire-footer-link"
            >
              ← Back to Energy
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire/energy-grimoire"
              className="grimoire-footer-link"
            >
              ← Back to The Energy Grimoire
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