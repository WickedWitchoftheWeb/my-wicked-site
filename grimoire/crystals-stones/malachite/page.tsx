// app/grimoire/crystals-stones/malachite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MalachitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Malachite" subtitle="Copper carbonate hydroxide · Cu₂CO₃(OH)₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-MALACHITE-HERO-IMAGE-URL"
              alt="Malachite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Malachite does not whisper: it reveals the pattern and demands the change.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Malachite is a vivid green copper mineral known for its banded
            patterns and bold, unmistakable presence. Its swirls and rings often
            look like living currents, making it visually and energetically
            associated with growth, cycles, and transformation.
          </p>

          <p>
            In practice, Malachite is often reached for when a person is ready to
            confront a repeating pattern and break it. It supports shadow work,
            emotional honesty, and the kind of heart healing that requires action,
            not comfort.
          </p>

          <p>
            In witchcraft, Malachite is commonly worked with for protection,
            transformation, Heart Chakra work, pattern-breaking, and boundary
            reinforcement. It is chosen when the goal is change that is real and
            sustained.
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
                <Link href="PASTE-EARTH-ELEMENT-ROUTE">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-VENUS-PLANET-ROUTE">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-TAURUS-ROUTE">Taurus</Link>,{" "}
                <Link href="PASTE-SCORPIO-ROUTE">Scorpio</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/rose">Rose</Link>,{" "}
                <Link href="PASTE-MINT-ROUTE">Mint</Link>
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
                Bright green to deep green with distinctive banding, swirls,
                or concentric rings. Often opaque with a bold, patterned surface.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports growth, renewal, and heart-centered evolution.
                Malachite&apos;s banded pattern emphasizes cycles: repeating
                emotional loops, inherited scripts, and the moment you decide to
                break them.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MALACHITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Malachite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Malachite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Transformation, Heart Chakra healing, protection, shadow work,
                boundary reinforcement, pattern-breaking, emotional honesty
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Self-deception, repeating cycles, emotional stagnation, energetic
                attachment, unhealthy devotion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Black Tourmaline, Rose Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Malachite is powerful when you are ready for change, not just
                insight.
                <br /><br />
                It supports Heart Chakra work that requires boundaries and
                truth: love that does not allow self-betrayal.
                <br /><br />
                In protection work, it helps identify where the field is leaking
                and strengthens the choice to close the gap.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH MALACHITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Malachite</h2>

          <p>
            Malachite is commonly used in shadow work, therapy support, or ritual
            work designed to break patterns. It can be worn near the heart, held
            during journaling, or placed on the altar when committing to
            transformation.
          </p>

          <p>
            In spellwork, Malachite is often placed at the center of a boundary
            ritual or protection working, especially when the goal is to
            reinforce self-respect and end energetic attachments that repeat.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Malachite is best reached for when you are ready to stop repeating
            yourself. It supports the moment you choose honesty over comfort and
            change over familiar pain.
          </p>

          <p>
            In longer workings, it behaves like a mirror with force. It does not
            let you unsee the pattern. It helps you translate insight into action
            and reinforces the discipline required to sustain transformation.
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
    alt="Malachite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Malachite has been used historically as ornament, pigment, and
            protective charm. Its bold green color and striking banding made it a
            stone associated with power, beauty, and protection across time.
          </p>

          <p>
            In modern metaphysical practice, Malachite is commonly regarded as a
            stone of transformation and protection, known for pattern-breaking
            and heart-centered evolution.
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
                Carbonate (Copper mineral)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                3.5 to 4 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Monoclinic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Banded green copper mineral known for pattern and transformation work
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Malachite is soft and sensitive to water and chemicals. Cleanse using
            smoke, sound, or moonlight. Avoid soaking and avoid salt water.
          </p>

          <p>
            Store separately from harder stones to prevent scratching. Handle
            gently, especially if polished.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Malachite is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety. Malachite contains copper
            and should not be used in water-based elixirs.
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