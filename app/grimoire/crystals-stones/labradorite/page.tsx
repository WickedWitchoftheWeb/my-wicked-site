// app/grimoire/crystals-stones/labradorite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LabradoritePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Labradorite" subtitle="Feldspar mineral · (Ca,Na)(Al,Si)₄O₈">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-LABRADORITE-HERO-IMAGE-URL"
              alt="Labradorite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Labradorite guards the threshold: illusion stripped, intuition sharpened.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Labradorite is a feldspar mineral known for its striking optical
            effect called labradorescence: flashes of blue, green, gold, or
            violet that shimmer across a darker base stone when turned in the
            light.
          </p>

          <p>
            While its body color is typically grey to dark charcoal, the internal
            iridescent flashes create the illusion of hidden light. This visual
            contrast has positioned Labradorite as a stone of perception, psychic
            protection, and energetic shielding.
          </p>

          <p>
            In witchcraft, Labradorite is commonly worked with for intuition,
            shadow work, psychic development, protection, and energetic
            discernment. It is chosen when the goal is to see clearly without
            becoming energetically porous.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-URANUS-PLANET-ROUTE">Uranus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-AQUARIUS-ROUTE">Aquarius</Link>,{" "}
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>,{" "}
                <Link href="PASTE-CROWN-CHAKRA-ROUTE">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/mugwort">
                  Mugwort
                </Link>,{" "}
                <Link href="PASTE-LAVENDER-ROUTE">
                  Lavender
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
                Base color ranges from grey to charcoal or deep black. When
                moved in the light, flashes of blue, green, gold, or violet
                appear due to labradorescence.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/06-blue">
                  blue
                </Link>{" "}
                current supports intuition, communication, and inner vision. The{" "}
                <Link href="/grimoire/colors/07-green">
                  green
                </Link>{" "}
                current supports renewal and heart awareness. The{" "}
                <Link href="/grimoire/colors/13-black">
                  black
                </Link>{" "}
                current supports protection and containment. Together, these
                currents make Labradorite a stone of guarded insight and
                perceptual clarity.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* LABRADORITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Labradorite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Labradorite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Intuition, psychic development, protection, shadow work,
                discernment, energy shielding, transformation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic overwhelm, energetic leakage, illusion, deception,
                spiritual burnout
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Amethyst, Black Tourmaline
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Labradorite is often used before divination or psychic work to
                strengthen discernment and prevent energetic drain.
                <br />
                <br />
                It supports Third Eye Chakra work by clarifying perception
                without amplifying anxiety.
                <br />
                <br />
                In protection rituals, it behaves as a reflective shield:
                allowing insight while filtering interference.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH LABRADORITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Labradorite</h2>

          <p>
            Labradorite is commonly carried during intuitive work, tarot
            readings, energy healing, or meditation practices. It can be
            placed near the Third Eye during ritual to support inner vision
            and psychic boundaries.
          </p>

          <p>
            In protection spells, Labradorite is often positioned near
            entrances or on the altar to shield without suppressing intuitive
            access. It is especially useful for practitioners who are sensitive
            to energetic environments.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Labradorite is best reached for when you need clarity without
            collapse. It supports perception that is grounded, not paranoid.
          </p>

          <p>
            In longer workings, it reinforces discernment and energetic
            boundaries. It allows you to see clearly while staying protected
            within your own field.
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
    alt="Labradorite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Labradorite was first identified in Labrador, Canada, where its
            shimmering flashes inspired legends of captured northern lights.
            Its shifting colors have long been associated with magic,
            transformation, and hidden realms.
          </p>

          <p>
            In modern metaphysical practice, Labradorite remains a stone of
            intuition and protection, bridging insight with energetic safety.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Mineral Class
              </p>
              <p className="grimoire-correspondence-value">
                Silicate (Feldspar group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Hardness
              </p>
              <p className="grimoire-correspondence-value">
                6 to 6.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Crystal System
              </p>
              <p className="grimoire-correspondence-value">
                Triclinic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Notable Feature
              </p>
              <p className="grimoire-correspondence-value">
                Labradorescence: iridescent flashes of color within a darker matrix
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Labradorite can be cleansed using smoke, sound, or moonlight.
            Brief water contact is typically fine, but avoid prolonged soaking
            and harsh chemicals that may dull polish.
          </p>

          <p>
            Store separately from harder stones to avoid scratches, especially
            on polished surfaces.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Labradorite is not intended for ingestion. Avoid grinding or
            creating dust from any mineral specimen, and do not prepare
            crystal elixirs without proper knowledge of mineral safety.
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
            <Link
              href="/grimoire/crystals-stones"
              className="grimoire-footer-link"
            >
              ← Back to Crystals
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire"
              className="grimoire-footer-link"
            >
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>

      </SectionPage>
    </>
  );
}