// app/grimoire/crystals-stones/granite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GranitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Granite" subtitle="Igneous rock · Quartz, feldspar, mica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-GRANITE-HERO-IMAGE-URL"
              alt="Granite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Granite is the strength of what lasts: grounded, quiet, unmovable.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Granite is a coarse-grained igneous rock composed primarily of quartz
            and feldspar, often with mica and other minerals. It forms deep within
            the Earth and becomes exposed over time through geological uplift and
            erosion. Its durability and weight make it a symbol of endurance and
            stability.
          </p>

          <p>
            In practice, Granite is often reached for when life feels unstable or
            scattered. It supports grounded focus, long-term resilience, and the
            ability to stay steady under pressure. It is not a flashy stone. It is
            a foundation.
          </p>

          <p>
            In witchcraft, Granite is commonly worked with for grounding, warding,
            home stability, and the strengthening of boundaries. It is chosen when
            the goal is protection through structure: a field that holds.
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
                <Link href="PASTE-SATURN-PLANET-ROUTE">Saturn</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-CAPRICORN-ROUTE">Capricorn</Link>,{" "}
                <Link href="PASTE-TAURUS-ROUTE">Taurus</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-THYME-ROUTE">Thyme</Link>,{" "}
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
                Speckled appearance with mixed grains, often grey, black, white,
                and sometimes pink or red depending on feldspar content. Granite
                is typically opaque with a visibly granular texture.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/12-grey">grey</Link>{" "}
                current supports balance, neutrality, and steady endurance. The{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current supports containment and protection. The{" "}
                <Link href="/grimoire/colors/01-white">white</Link>{" "}
                current supports cleansing and clarity. Together, these currents
                make Granite a stone of grounded stability and resilient boundaries.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* GRANITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Granite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Granite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Grounding, stability, warding, home protection, endurance, focus,
                long-term goals, boundaries
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Instability, distraction, energetic leakage, chaos, inconsistent
                effort, scattered focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Black Tourmaline, Hematite, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Granite is ideal for work that needs to last: long-term wards,
                stable protections, and home anchoring.
                <br />
                <br />
                It supports Root Chakra work by reinforcing steadiness and
                structure, especially during stressful or chaotic seasons.
                <br />
                <br />
                In boundary work, it strengthens the energetic container: what
                belongs stays, what does not belong cannot enter.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH GRANITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Granite</h2>

          <p>
            Granite is commonly placed in the home to support stability and
            grounding. It can be used as a ward stone near entrances, at property
            corners, or near an altar to anchor the space.
          </p>

          <p>
            In ritual, Granite is effective for protection spells, long-term
            grounding work, and any practice that requires consistent focus. It is
            especially useful when building habits, structures, and steady
            routines that hold you through change.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Granite is best reached for when you need to stop being pulled by
            everything around you. It supports structure, steadiness, and the
            ability to stay grounded while life moves.
          </p>

          <p>
            In longer workings, Granite behaves like a foundation stone. It does
            not create dramatic shifts. It supports consistency: routines,
            boundaries, and protection that lasts.
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
    alt="Granite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Granite has been used for millennia in monuments, buildings, and
            enduring structures, valued for its strength and longevity. Its
            cultural symbolism often reflects permanence, resilience, and the
            ability to withstand time.
          </p>

          <p>
            In modern metaphysical practice, Granite is commonly regarded as a
            stone of grounding and stability: a quiet force that holds the line.
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
                Igneous rock (Quartz, feldspar, mica)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6 to 7 on the Mohs scale (varies by composition)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Not applicable (rock composed of multiple minerals)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Coarse-grained, durable rock associated with stability and endurance
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Granite is durable and can be cleansed using smoke, sound, moonlight,
            or brief water contact. Avoid harsh chemicals if the piece is polished
            or sealed.
          </p>

          <p>
            Because Granite is a composite rock, handle gently if it has fractures
            or rough edges. Store away from abrasive materials to preserve polish.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Granite is not intended for ingestion. Avoid grinding or creating dust
            from any mineral specimen, and do not prepare crystal elixirs without
            proper knowledge of mineral safety.
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