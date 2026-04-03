// app/grimoire/crystals-stones/citrine/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CitrinePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Citrine" subtitle="Quartz variety · SiO₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-CITRINE-HERO-IMAGE-URL"
              alt="Citrine"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Citrine teaches the spirit to expect goodness: not by wishing, but by claiming.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Citrine is a yellow to golden variety of quartz, widely associated
            with confidence, clarity, and personal power. Its bright, sunny
            presence has made it a foundational stone in prosperity work and
            energetic protection that feels clean rather than heavy.
          </p>

          <p>
            In practice, Citrine is often reached for when motivation needs to
            return. It supports focus, self-trust, and the ability to take action
            without collapsing into doubt. It is commonly used in spaces where
            energy needs to feel lifted, clear, and forward-moving.
          </p>

          <p>
            In witchcraft, Citrine is used for prosperity, confidence, success,
            creativity, and energetic cleansing. It is often chosen when the goal
            is to build: build momentum, build money, build visibility, build a
            stable sense of worth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-FIRE-ELEMENT-ROUTE">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-SUN-PLANET-ROUTE">The Sun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LEO-ROUTE">Leo</Link>,{" "}
                <Link href="PASTE-GEMINI-ROUTE">Gemini</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MASCULINE-ENERGY-ROUTE">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/cinnamon">Cinnamon</Link>,{" "}
                <Link href="PASTE-BASIL-ROUTE">Basil</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COLOR */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Color</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Appearance</h3>
              <p className="grimoire-correspondence-value">
                Pale yellow to golden, sometimes honey-toned or warm amber. Many
                specimens are transparent to translucent. Some pieces show smoky
                zones or gentle gradients.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="PASTE-YELLOW-ROUTE">yellow</Link>{" "}
                current supports confidence, focus, and personal power. The{" "}
                <Link href="PASTE-GOLD-ROUTE">gold</Link>{" "}
                current supports success, protection, and prosperity. Together,
                these currents make Citrine a stone for bright momentum and clean
                self-trust.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CITRINE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Citrine in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Citrine in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, confidence, success, motivation, creativity, joy,
                manifestation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Self-doubt, low mood, stagnation, energetic heaviness, fear of
                visibility
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Pyrite, Sunstone
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Citrine is often placed in a workspace or near money bowls to
                support prosperity and steady motivation.
                <br />
                <br />
                It supports Solar Plexus work when confidence needs to be rebuilt
                after criticism, fear, or prolonged stress.
                <br />
                <br />
                In manifestation rituals, it strengthens follow-through: the
                ability to act consistently instead of waiting for perfect timing.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH CITRINE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Citrine</h2>

          <p>
            Citrine is commonly carried or worn when confidence and momentum are
            needed. It can be placed in a wallet, set near a register, or kept
            in a workspace to reinforce productivity and prosperity intentions.
          </p>

          <p>
            In ritual, Citrine is often placed at the center of prosperity work,
            success spells, and confidence rituals. It pairs well with bright,
            forward-moving herbs and candles when the intention is growth and
            visible results.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Citrine is best reached for when you want to build something real:
            money, confidence, creative output, or visibility. It supports
            forward motion that stays clean, focused, and self-directed.
          </p>

          <p>
            In longer workings, Citrine behaves like a steady flame. It does not
            demand intensity. It supports consistency: daily effort, clear goals,
            and the willingness to receive what you have earned.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-FOLKLORE-IMAGE-URL"
    alt="Citrine Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Citrine has long been associated with sunlight, warmth, and the
            building of prosperity. In many modern metaphysical traditions, it is
            treated as a classic success stone and is commonly kept in shops and
            workspaces as a charm for steady money flow.
          </p>

          <p>
            Its reputation often centers on self-trust and forward momentum: the
            ability to move with clarity and receive without guilt.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Mineral Class</p>
              <p className="grimoire-correspondence-value">
                Silicate (Quartz)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                7 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Trigonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Yellow coloration in quartz, often associated with warmth and
                brightness
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Citrine can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid prolonged direct sunlight if you
            want to preserve coloration over time.
          </p>

          <p>
            Store Citrine away from abrasive materials if polished. Points and
            clusters should be handled with care to avoid chipped tips.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Citrine is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/crystals-stones" className="grimoire-footer-link">
              ← Back to Crystals
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