// app/grimoire/crystals-stones/jet/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function JetPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Jet" subtitle="Fossilized wood · Organic gemstone">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-JET-HERO-IMAGE-URL"
              alt="Jet"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Jet is a quiet shield: grief transmuted into protection.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Jet is an organic gemstone formed from fossilized wood, often
            categorized as a type of lignite. It is lightweight compared to most
            minerals, typically deep black with a soft sheen, and has a long
            history of use in mourning jewelry and protective adornment.
          </p>

          <p>
            In practice, Jet is often reached for during grief, emotional
            heaviness, or times when the psychic field feels vulnerable. It
            supports energetic containment, grounding, and gentle shielding that
            does not overwhelm the nervous system.
          </p>

          <p>
            In witchcraft, Jet is commonly worked with for protection, warding,
            grief support, uncrossing, and banishing. It is chosen when the goal
            is to absorb and transmute heaviness while keeping the spirit steady.
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
                <Link href="PASTE-SATURN-PLANET-ROUTE">Saturn</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-CAPRICORN-ROUTE">Capricorn</Link>,{" "}
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>,{" "}
                <Link href="PASTE-THIRD-EYE-CHAKRA-ROUTE">Third Eye Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MUGWORT-ROUTE">Mugwort</Link>,{" "}
                <Link href="PASTE-ROSEMARY-ROUTE">Rosemary</Link>
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
                Deep black, often with a soft satin sheen when polished. Some
                pieces appear matte, while others show a subtle reflective glow.
                Jet is lightweight and may feel warm to the touch compared to stone.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current supports protection, containment, and banishing. Together
                with Jet&apos;s organic nature, this current emphasizes quiet
                shielding and grief-to-strength transmutation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* JET IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Jet in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Jet in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, grief support, shielding, banishing, warding,
                uncrossing, grounding
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic overwhelm, intrusive influence, energetic drain, lingering
                heaviness, grief looping, fear
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Black Tourmaline, Smoky Quartz, Selenite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Jet is often used when the field needs protection that feels gentle
                rather than aggressive.
                <br /><br />
                It supports grief rituals, ancestor work, and banishing rites where
                heaviness must be removed without destabilizing the heart.
                <br /><br />
                In shielding work, it behaves like velvet armor: quiet, soft, and
                effective.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH JET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Jet</h2>

          <p>
            Jet is commonly worn as jewelry during emotionally heavy seasons, when
            protection is needed without adding intensity. It can be carried as a
            pocket stone, placed near the bed, or kept on an altar for grief and
            banishing work.
          </p>

          <p>
            In ritual, Jet is often used in protection spells, uncrossing work, and
            rites that focus on releasing heaviness. Because it is organic and softer
            than many stones, it is best handled gently and stored carefully.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Jet is best reached for when grief or heaviness has made the energetic
            field thin. It supports containment, steadiness, and the ability to
            keep moving without carrying everything raw.
          </p>

          <p>
            In longer workings, Jet behaves like a quiet absorber. It does not
            amplify emotion. It helps transmute weight into stability and protects
            the spirit while the heart processes.
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
    alt="Jet Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Jet has been used historically in protective amulets and mourning jewelry,
            especially in Europe during periods when grief rituals were formalized.
            Its deep black color and organic origin contributed to its association
            with protection, death rites, and the transmutation of sorrow.
          </p>

          <p>
            In modern metaphysical practice, Jet continues to be regarded as a stone
            for shielding, banishing, and grief support: protection that does not
            harden the heart.
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
                Organic gemstone (Fossilized wood)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                2.5 to 4 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Not applicable (organic material)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Lightweight black organic gemstone historically used in protective and mourning jewelry
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Jet is soft and should be cleansed with gentle methods such as smoke,
            sound, or moonlight. Avoid soaking in water and avoid harsh chemicals,
            as they can dull the surface.
          </p>

          <p>
            Store Jet separately from harder stones to prevent scratches. Wipe with
            a soft cloth rather than abrasive materials.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Jet is not intended for ingestion. Avoid grinding or creating dust from
            any mineral specimen, and do not prepare crystal elixirs without proper
            knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and is
            not medical advice.
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