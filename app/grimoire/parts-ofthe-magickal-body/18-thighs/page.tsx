// app/grimoire/parts-of-the-magickal-body/18-thighs/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ThighsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Thighs" subtitle="Strength, Endurance, and Forward Drive">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/thighs.png"
              alt="Thighs in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Momentum is built by the muscles you cannot see.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The thighs are the engines of movement. They generate force,
            stabilize balance, and carry the body forward over long distances.
            In the magickal body, the thighs symbolize endurance: the capacity
            to sustain direction once it has been chosen.
          </p>

          <p>
            This region holds the archetype of perseverance. While the hips
            initiate motion, the thighs maintain it. They reflect your ability
            to commit to growth, to continue climbing even when the ascent is
            steep, and to keep moving when enthusiasm has faded but purpose
            remains.
          </p>

          <p>
            Symbolically, the thighs represent stored strength. They are large,
            powerful muscles hidden beneath layers. In the same way, much of
            your resilience lives beneath the surface. The thighs remind you
            that power does not always announce itself loudly. It supports you
            quietly.
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>,{" "}
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
              When the thighs speak, they speak through fatigue or resistance.
              They respond when you are pushing yourself beyond sustainable
              limits or when you have committed to a path that no longer feels
              aligned.
            </p>

            <p>
              This region also activates when you are building something that
              requires patience. The thighs register the slow burn of
              long-term effort. They ask whether your drive is fueled by
              inspiration or by pressure to prove yourself.
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
                In expression, the thighs represent grounded endurance. You can
                commit to growth without burning out. You pace yourself
                wisely and trust your capacity to continue. Strength here is
                steady rather than explosive.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the thighs reflect overexertion or stagnation. You
                may drive yourself relentlessly in pursuit of validation, or
                avoid movement altogether out of fear of failure. The shadow
                here is confusion between worth and productivity. True strength
                is sustainable, not punishing.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are you pushing harder than necessary?</p>
            <p>What would endurance look like if it were compassionate?</p>
            <p>
              Are you moving forward because you desire the destination, or
              because you fear standing still?
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