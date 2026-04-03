// app/grimoire/crystals-stones/onyx/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OnyxPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Onyx" subtitle="Chalcedony variety · Banded silica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-ONYX-HERO-IMAGE-URL"
              alt="Onyx"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Onyx is discipline embodied: silent strength, unwavering boundary.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Onyx is a variety of chalcedony, a microcrystalline form of quartz,
            often recognized for its deep black appearance. Some forms of onyx
            show banding, though modern commercial onyx is commonly solid black.
          </p>

          <p>
            In metaphysical practice, Onyx is associated with strength,
            protection, discipline, and energetic containment. It is often
            experienced as grounding and stabilizing: a stone that reinforces
            structure rather than expansion.
          </p>

          <p>
            In witchcraft, Onyx is commonly worked with for protection,
            boundary-setting, banishing, focus, and emotional resilience. It
            is chosen when the goal is steadiness under pressure.
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
                <Link href="PASTE-LEO-ROUTE">Leo</Link>
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
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/rosemary">
                  Rosemary
                </Link>,{" "}
                <Link href="PASTE-BAY-LEAF-ROUTE">
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
                Typically deep black, though banded varieties may include
                white or grey layers. Most polished pieces appear opaque with
                a smooth surface.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/13-black">
                  black
                </Link>{" "}
                current supports protection, containment, banishing, and
                disciplined strength. Onyx emphasizes structure, boundary,
                and the refusal to leak energy.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* ONYX IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Onyx in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Onyx in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, discipline, focus, grounding, resilience,
                boundary-setting, banishing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic drain, distraction, emotional volatility,
                manipulation, self-sabotage
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
                Onyx is often used in protection rituals and boundary work.
                <br /><br />
                It is particularly effective when discipline and sustained
                focus are required.
                <br /><br />
                In banishing work, Onyx reinforces the decision to remove
                what does not align and to hold that boundary.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH ONYX */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Onyx</h2>

          <p>
            Onyx is commonly carried during demanding periods that require
            focus and resilience. It may be worn as jewelry or kept on the
            desk during work that demands discipline.
          </p>

          <p>
            In ritual, Onyx is often placed at the edge of the altar to
            reinforce boundaries or used in banishing spells where
            containment is essential.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Onyx is best reached for when you need to stand firm. It supports
            strength without aggression and containment without isolation.
          </p>

          <p>
            In longer workings, it behaves like structure. It reinforces the
            habit of discipline and strengthens your ability to maintain
            boundaries over time.
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
    alt="Onyx Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Onyx has been used historically in amulets, carvings, and
            protective adornment. Across cultures, dark stones have often
            symbolized strength and warding.
          </p>

          <p>
            In modern metaphysical practice, Onyx remains associated with
            protection, resilience, and disciplined energy.
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
                Silicate (Chalcedony variety)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Hardness
              </p>
              <p className="grimoire-correspondence-value">
                6.5 to 7 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Crystal System
              </p>
              <p className="grimoire-correspondence-value">
                Trigonal (Quartz family)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Notable Feature
              </p>
              <p className="grimoire-correspondence-value">
                Deep black chalcedony known for strength and boundary symbolism
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Onyx can be cleansed using smoke, sound, or moonlight. It is
            generally durable and tolerates brief water exposure, though
            harsh chemicals should be avoided.
          </p>

          <p>
            Store separately from significantly harder stones to maintain
            polish.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Onyx is not intended for ingestion. Avoid grinding or creating
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