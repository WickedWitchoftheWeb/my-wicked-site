// app/grimoire/crystals-stones/selenite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SelenitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Selenite" subtitle="Gypsum variety · CaSO₄·2H₂O">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-SELENITE-HERO-IMAGE-URL"
              alt="Selenite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Selenite clears the field: light without heat, purity without force.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Selenite is a crystalline variety of gypsum known for its luminous,
            translucent white appearance. It often forms in long striated blades
            or satin-smooth wands.
          </p>

          <p>
            In metaphysical practice, Selenite is associated with clarity,
            energetic cleansing, higher awareness, and spiritual alignment.
            It is often experienced as gentle yet powerful.
          </p>

          <p>
            In witchcraft, Selenite is commonly worked with for purification,
            aura cleansing, altar clearing, protection through light, and
            elevating spiritual awareness.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MOON-PLANET-ROUTE">Moon</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-CANCER-ROUTE">Cancer</Link>,{" "}
                <Link href="PASTE-PISCES-ROUTE">Pisces</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-FEMININE-ENERGY-ROUTE">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>
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
                Translucent white to clear with a soft pearly sheen. Often
                fibrous or striated in structure.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/01-white">white</Link>{" "}
                current supports purification, clarity, spiritual elevation,
                and energetic cleansing. Selenite emphasizes light and
                alignment rather than forceful protection.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* SELENITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Selenite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Selenite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Cleansing, clarity, spiritual alignment, aura clearing,
                altar purification, intuitive development
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic residue, confusion, psychic clutter, stagnation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Amethyst, Moonstone
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Selenite is often used to cleanse other stones and ritual tools.
                <br /><br />
                It can be placed at the center of an altar to maintain energetic
                clarity.
                <br /><br />
                In meditation, it supports heightened awareness and calm focus.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH SELENITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Selenite</h2>

          <p>
            Selenite is commonly kept on altars or near entryways to maintain
            energetic cleanliness.
          </p>

          <p>
            It may be used in meditation, placed above door frames, or kept
            near other crystals to support ongoing purification.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Selenite is best reached for when clarity is needed. It supports
            clearing before decision-making and restoring energetic balance
            after heavy work.
          </p>

          <p>
            In longer workings, it behaves as maintenance: a steady purifier
            that prevents buildup rather than reacting to crisis.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <p>
            Named after Selene, the Greek goddess of the Moon, Selenite has
            long been associated with lunar energy and light.
          </p>

          <p>
            In modern metaphysical traditions, it is widely regarded as a
            stone of spiritual clarity and purification.
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
                Sulfate (Gypsum)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                2 on the Mohs scale
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
                Soft, fibrous crystalline structure with luminous sheen
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Selenite is water-soluble and should not be exposed to water.
            Cleanse using smoke, sound, or moonlight only.
          </p>

          <p>
            Handle gently, as it is a soft mineral and scratches easily.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Selenite is not intended for ingestion. Avoid creating dust from
            this mineral, and do not prepare crystal elixirs in direct contact
            with the stone.
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