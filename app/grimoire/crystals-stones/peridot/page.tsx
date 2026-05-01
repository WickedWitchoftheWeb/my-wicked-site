// app/grimoire/crystals-stones/peridot/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PeridotPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Peridot" subtitle="Olivine variety · (Mg,Fe)₂SiO₄">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-PERIDOT-HERO-IMAGE-URL"
              alt="Peridot"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Peridot clears the heart: jealousy released, joy restored, life re-entered.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Peridot is the gem-quality variety of olivine, known for its vivid
            yellow-green to olive-green coloring. Unlike many stones with
            multiple color expressions, Peridot is defined by green: bright,
            alive, and unmistakable.
          </p>

          <p>
            In metaphysical practice, Peridot is associated with heart clearing,
            joy restoration, confidence, and the release of envy or bitterness.
            It is often reached for when emotional heaviness needs to be lifted
            so the spirit can return to openness.
          </p>

          <p>
            In witchcraft, Peridot is commonly worked with for emotional cleansing,
            prosperity, confidence, heart healing, and the return of lightness
            after grief or resentment.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-SUN-PLANET-ROUTE">Sun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LEO-ROUTE">Leo</Link>,{" "}
                <Link href="PASTE-VIRGO-ROUTE">Virgo</Link>
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
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>,{" "}
                <Link href="PASTE-SOLAR-PLEXUS-CHAKRA-ROUTE">Solar Plexus Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-BASIL-ROUTE">Basil</Link>,{" "}
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
                Yellow-green to olive-green. The tone may range from light
                green with a golden cast to deeper olive depending on iron
                content.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports renewal, heart growth, and life force. The
                solar cast of Peridot emphasizes joy and optimism: clearing the
                heart so the spirit can re-enter the world with warmth.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* PERIDOT IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Peridot in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Peridot in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Heart clearing, joy restoration, confidence, prosperity,
                emotional cleansing, optimism, self-worth
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Jealousy, resentment, bitterness, emotional stagnation,
                self-doubt, heaviness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Citrine, Rose Quartz, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Peridot is often used when the heart is heavy and needs clearing.
                <br /><br />
                It supports prosperity work that is rooted in self-worth rather
                than desperation.
                <br /><br />
                In emotional healing rituals, it helps release envy and restores
                the ability to receive joy without guilt.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH PERIDOT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Peridot</h2>

          <p>
            Peridot is commonly worn as jewelry to keep its uplifting current
            close to the heart. It can be carried during social situations,
            new beginnings, or prosperity work where confidence must stay steady.
          </p>

          <p>
            In ritual, Peridot is often placed on the altar for heart-clearing
            spells, prosperity work, or rites that focus on returning to joy
            after emotional heaviness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Peridot is best reached for when you feel closed off from joy.
            It supports the release of bitterness and restores openness and
            emotional lightness.
          </p>

          <p>
            In longer workings, Peridot behaves like a cleanser for the heart:
            lifting emotional residue and reinforcing self-worth and optimism
            over time.
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
    alt="Peridot Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Peridot has been prized since antiquity, including in Egyptian and
            Mediterranean traditions, where it was associated with protection
            and light. Its vivid green color contributed to its symbolism of
            vitality and renewal.
          </p>

          <p>
            In modern metaphysical practice, Peridot is often regarded as a stone
            of heart-clearing and joy restoration.
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
                Silicate (Olivine group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6.5 to 7 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Orthorhombic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Gem-quality olivine defined by its green color
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Peridot can be cleansed using smoke, sound, or moonlight. Brief
            water contact is typically fine, but avoid harsh chemicals and
            avoid ultrasonic cleaning, especially for jewelry.
          </p>

          <p>
            Store away from harder stones to prevent scratching.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Peridot is not intended for ingestion. Avoid grinding or creating
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