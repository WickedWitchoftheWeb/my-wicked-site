// app/grimoire/crystals-stones/topaz/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TopazPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Topaz" subtitle="Fluorosilicate mineral · Al₂SiO₄(F,OH)₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-TOPAZ-HERO-IMAGE-URL"
              alt="Topaz"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Topaz sharpens intention: clarity that moves with precision.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Topaz is a fluorosilicate mineral that occurs in a range of colors,
            including blue, yellow, pink, clear, and imperial golden tones.
            It is known for its clarity, brilliance, and hardness.
          </p>

          <p>
            In metaphysical traditions, Topaz is associated with clarity,
            manifestation, focus, and amplification of intention. Different
            color varieties may emphasize different currents, but all forms
            share a reputation for strengthening directed will.
          </p>

          <p>
            In witchcraft, Topaz is commonly worked with for manifestation,
            truth-seeking, goal-setting, and strengthening personal vision.
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
                <Link href="/grimoire/astrology/02-planets/05-jupiter">
                  Jupiter
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/cinnamon">
                  Cinnamon
                </Link>,{" "}
                <Link href="/grimoire/herbs/bay-leaf">
                  Bay Leaf
                </Link>
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
                Found in blue, yellow, golden, pink, and clear varieties.
                Often transparent to translucent with high brilliance.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                Yellow and golden varieties link to the{" "}
                <Link href="/grimoire/colors/05-yellow">yellow</Link>{" "}
                current of confidence and expansion. Blue forms align with the{" "}
                <Link href="/grimoire/colors/06-blue">blue</Link>{" "}
                current of clarity and communication. All forms amplify
                directed intention.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* TOPAZ IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Topaz in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Topaz in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Manifestation, clarity, confidence, truth-seeking,
                expansion, goal-setting
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Confusion, scattered intention, doubt, lack of direction
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Citrine, Sunstone, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Topaz is often used in manifestation rituals where clarity of
                intention is critical.
                <br /><br />
                It supports long-term vision work and strengthens focus in
                goal-oriented spellcraft.
                <br /><br />
                Different color varieties may be selected based on the
                specific current being invoked.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH TOPAZ */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Topaz</h2>

          <p>
            Topaz can be worn or carried when setting intentions or
            beginning new ventures.
          </p>

          <p>
            In ritual, it is placed near written goals, sigils, or
            manifestation tools to strengthen clarity and direction.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Topaz is best reached for when clarity must translate into
            action. It reinforces focused will and deliberate movement.
          </p>

          <p>
            In longer workings, it supports sustained momentum toward
            clearly defined outcomes.
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
    alt="Topaz Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Topaz has historically been associated with strength, protection,
            and illumination. It has been valued in various cultures for its
            brilliance and perceived protective qualities.
          </p>

          <p>
            In modern metaphysical traditions, it is regarded as a stone of
            manifestation, clarity, and amplified intention.
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
                Silicate (Fluorosilicate)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                8 on the Mohs scale
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
                High brilliance and clarity across multiple color varieties
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Topaz can be cleansed with smoke, sound, moonlight, or brief
            water contact.
          </p>

          <p>
            Avoid sudden temperature changes and harsh chemicals, as they
            may damage the stone.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Topaz is not intended for ingestion. Avoid grinding or creating
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