// app/grimoire/crystals-stones/garnet/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GarnetPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Garnet" subtitle="Garnet group · Nesosilicate minerals">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-GARNET-HERO-IMAGE-URL"
              alt="Garnet"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Garnet strengthens devotion at the root: a fire that does not flicker.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Garnet refers to a group of closely related minerals known for deep,
            rich coloration and a steady, grounded intensity. While many people
            picture Garnet as dark red, the garnet family spans multiple colors
            depending on composition and locality.
          </p>

          <p>
            In practice, Garnet is often reached for when stamina, commitment, and
            resilience are required. It supports grounded desire, steady
            motivation, and the ability to keep moving without burning out.
          </p>

          <p>
            In witchcraft, Garnet is commonly worked with for protection, passion,
            devotion, vitality, courage, and root-level stability. It is chosen
            when the goal is to strengthen one&apos;s foundation and sustain
            intention through time.
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
                <Link href="PASTE-MARS-PLANET-ROUTE">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARIES-ROUTE">Aries</Link>,{" "}
                <Link href="PASTE-CAPRICORN-ROUTE">Capricorn</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/cinnamon">Cinnamon</Link>,{" "}
                <Link href="PASTE-ROSE-ROUTE">Rose</Link>
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
                Most commonly deep red, wine, or burgundy, though garnet can also
                appear in orange, green, brown, or near-black depending on
                variety. Many pieces are translucent with a rich internal glow.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/02-red">red</Link>{" "}
                current supports vitality, courage, passion, and embodied power.
                The{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current supports protection, containment, and unshakable resolve.
                Together, these currents make Garnet a stone of devotion, stamina,
                and grounded fire.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* GARNET IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Garnet in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Garnet in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Passion, devotion, protection, courage, vitality, stamina,
                attraction, resilience
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Exhaustion, fear, energetic drain, apathy, unstable desire,
                inconsistency
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Carnelian, Bloodstone, Black Tourmaline
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Garnet is often used when the goal is commitment, not intensity.
                <br />
                <br />
                It supports Root Chakra work for stability and Sacral Chakra work
                for desire that remains grounded.
                <br />
                <br />
                In protection spells, it reinforces boundaries through willpower:
                a steady no, a steady yes, and a field that does not leak.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH GARNET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Garnet</h2>

          <p>
            Garnet is commonly worn or carried during periods that require
            endurance. It can be used as a daily talisman for grounded confidence,
            protection, and sustained motivation.
          </p>

          <p>
            In ritual, Garnet is often placed at the center of protection work,
            devotion spells, and attraction rites when the intention is lasting
            commitment rather than fleeting heat. It pairs well with grounding
            tools and steady fire work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Garnet is best reached for when you need to stay committed: to a
            person, a practice, a goal, or your own recovery. It strengthens the
            will without creating chaos.
          </p>

          <p>
            In longer workings, Garnet behaves like a slow-burning fire. It does
            not rush. It reinforces stamina, devotion, and the ability to keep
            moving steadily even when motivation fluctuates.
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
    alt="Garnet Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Garnet has been used historically in jewelry, talismans, and protective
            charms. Across time, it has often been associated with devotion,
            courage, and vitality, carried as a stone of strength and steadfast
            commitment.
          </p>

          <p>
            In modern metaphysical practice, Garnet is commonly regarded as a
            stone of passion with structure: desire that holds steady and builds
            something real.
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
                Silicate (Garnet group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6.5 to 7.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Isometric
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Mineral group with multiple varieties, often deep red with a steady,
                grounding current
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Garnet can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid harsh chemicals and abrasive cleaning,
            especially for softer varieties or heavily included stones.
          </p>

          <p>
            Store Garnet away from abrasive materials if polished. Handle with care
            to avoid chips along edges or points.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Garnet is not intended for ingestion. Avoid grinding or creating dust
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