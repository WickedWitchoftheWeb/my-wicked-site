// app/grimoire/crystals-stones/ruby/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function RubyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ruby" subtitle="Corundum variety · Al₂O₃">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-RUBY-HERO-IMAGE-URL"
              alt="Ruby"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Ruby is fire in the blood: devotion, courage, and sovereign will.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Ruby is the red variety of corundum, colored by trace chromium.
            Its tones range from deep crimson to vivid red. As one of the most
            historically revered gemstones, Ruby has long symbolized vitality,
            passion, and power.
          </p>

          <p>
            In metaphysical practice, Ruby is associated with life force,
            courage, love, leadership, and embodied strength. It is often
            experienced as activating and energizing.
          </p>

          <p>
            In witchcraft, Ruby is commonly worked with for devotion,
            protection of the heart, vitality rituals, confidence building,
            and strengthening personal authority.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
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
                <Link href="PASTE-ARIES-ROUTE">Aries</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ROSE-ROUTE">Rose</Link>,{" "}
                <Link href="PASTE-CINNAMON-ROUTE">Cinnamon</Link>
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
                Deep red to vivid crimson. The intensity of color is caused
                by trace chromium within the corundum structure.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/02-red">red</Link>{" "}
                current supports vitality, courage, blood-force, passion,
                and sovereign will. Ruby amplifies embodied strength and
                devotion.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* RUBY IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Ruby in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Ruby in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Vitality, courage, passion, leadership, devotion, heart strength,
                protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Fear, lethargy, self-doubt, emotional coldness, weakness of will
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Garnet, Sunstone, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Ruby is often used in vitality rituals and confidence work.
                <br /><br />
                It strengthens devotion in love workings when commitment and
                courage are required.
                <br /><br />
                In protection rites, Ruby reinforces bold, heart-centered
                strength.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH RUBY */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Ruby</h2>

          <p>
            Ruby is commonly worn as jewelry to keep its activating current
            close to the body. It may be carried during leadership, public
            speaking, or romantic devotion work.
          </p>

          <p>
            In ritual, Ruby is placed near candles in vitality spells or
            used in workings that call for courage and sovereign authority.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Ruby is best reached for when courage must outweigh fear. It
            strengthens the heart without softening the will.
          </p>

          <p>
            In longer workings, Ruby reinforces vitality and devotion,
            helping the practitioner stay committed and energized.
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
    alt="Ruby Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Ruby has been prized across cultures as a stone of kings and
            warriors. It was believed to carry protective and life-strengthening
            properties.
          </p>

          <p>
            In modern metaphysical traditions, Ruby remains associated with
            passion, vitality, courage, and heart power.
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
                Oxide (Corundum)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                9 on the Mohs scale
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
                Red corundum colored by chromium
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Ruby is highly durable and can be cleansed using smoke, sound,
            moonlight, or brief water contact.
          </p>

          <p>
            Avoid harsh chemicals when set in jewelry.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Ruby is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal
            elixirs without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes
            and is not medical advice.
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