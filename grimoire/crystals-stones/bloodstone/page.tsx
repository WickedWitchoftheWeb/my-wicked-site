// app/grimoire/crystals-stones/bloodstone/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BloodstonePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Bloodstone" subtitle="Heliotrope · Chalcedony variety · SiO₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-BLOODSTONE-HERO-IMAGE-URL"
              alt="Bloodstone"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Bloodstone steadies the pulse of courage: the body remembers its strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Bloodstone, also known as Heliotrope, is a dark green variety of
            chalcedony marked with red inclusions of iron oxide. The contrast
            between deep green and scattered red gives the stone its name and its
            reputation as a grounding, vital force mineral.
          </p>

          <p>
            In practice, Bloodstone is often reached for when resilience is
            required. It is associated with physical stamina, steady courage,
            and the ability to remain rooted during pressure.
          </p>

          <p>
            In witchcraft, Bloodstone is commonly worked with for protection,
            vitality, endurance, and grounded strength. It is chosen when the
            goal is not emotional softness, but embodied stability and clean
            forward movement.
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
                <Link href="PASTE-MARS-PLANET-ROUTE">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARIES-ROUTE">Aries</Link>,{" "}
                <Link href="PASTE-SCORPIO-ROUTE">Scorpio</Link>
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
                <Link href="PASTE-ROOT-CHAKRA-ROUTE">Root Chakra</Link>,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-NETTLE-ROUTE">Nettle</Link>,{" "}
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
                Dark green base with red speckling or droplets caused by iron
                oxide inclusions. The red markings vary from subtle flecks to
                bold splashes.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports grounding, renewal, and heart-centered steadiness.
                The{" "}
                <Link href="/grimoire/colors/02-red">red</Link>{" "}
                current supports vitality, courage, and embodied power. Together,
                these currents make Bloodstone a stone of rooted strength and
                resilient life force.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* BLOODSTONE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Bloodstone in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Bloodstone in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, courage, stamina, grounding, endurance, vitality,
                resilience
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Exhaustion, fear, instability, energetic drain, scattered focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Black Tourmaline, Carnelian, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Bloodstone is often used during protection rituals that require
                physical and emotional stamina.
                <br />
                <br />
                It supports Root Chakra work when the goal is stability under
                pressure, especially during long or demanding workings.
                <br />
                <br />
                In endurance-based spellcraft, it reinforces persistence without
                panic.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH BLOODSTONE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Bloodstone</h2>

          <p>
            Bloodstone is commonly carried during challenging periods that require
            sustained effort. It can be placed in a workspace, worn as jewelry,
            or kept nearby during physically or emotionally demanding tasks.
          </p>

          <p>
            In ritual, Bloodstone is often positioned at the base of the altar
            to anchor the field. It supports protection rites, grounding spells,
            and any work that requires stamina rather than speed.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Bloodstone is best reached for when courage needs to be embodied, not
            imagined. It steadies the body, strengthens resolve, and reinforces
            grounded action.
          </p>

          <p>
            In longer workings, Bloodstone behaves like a stabilizing root. It
            does not amplify emotion. It reinforces resilience, helping you move
            forward without losing balance.
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
    alt="Bloodstone Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Bloodstone has appeared in historical lore as a stone associated with
            strength and vitality. Its red inclusions have often been symbolically
            linked to life force and endurance.
          </p>

          <p>
            In modern metaphysical practice, it is commonly regarded as a stone
            of grounded power and physical resilience.
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
                Silicate (Chalcedony)
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
                Trigonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Green chalcedony with red iron oxide inclusions
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Bloodstone can be cleansed using smoke, sound, moonlight, or brief
            water contact. Avoid harsh chemicals and abrasive cleaning.
          </p>

          <p>
            Store away from harder stones to prevent scratching, especially if
            polished.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Bloodstone is not intended for ingestion. Avoid grinding or creating
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