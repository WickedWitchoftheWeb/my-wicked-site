// app/grimoire/crystals-stones/hematite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HematitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hematite" subtitle="Iron oxide mineral · Fe₂O₃">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-HEMATITE-HERO-IMAGE-URL"
              alt="Hematite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Hematite pulls your spirit back into your bones: steady, heavy, protected.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Hematite is an iron oxide mineral known for its metallic sheen and
            grounding presence. While it often appears silver-grey to black on
            the surface, it leaves a reddish-brown streak when rubbed, reflecting
            its iron-rich composition.
          </p>

          <p>
            In practice, Hematite is commonly reached for when the nervous system
            feels overwhelmed or when attention is scattered. It supports grounded
            focus, energetic containment, and the ability to stay present inside
            the body rather than drifting into anxiety or dissociation.
          </p>

          <p>
            In witchcraft, Hematite is widely used for protection, grounding,
            shielding, and strengthening boundaries. It is chosen when the goal is
            stability: clear edges, steady focus, and a field that does not leak.
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
                <Link href="PASTE-AQUARIUS-ROUTE">Aquarius</Link>
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
                Metallic silver-grey to deep black, often with a mirror-like sheen
                when polished. Some pieces appear matte, earthy, or rust-tinted
                depending on finish and oxidation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current supports containment, protection, and energetic boundaries.
                The{" "}
                <Link href="PASTE-SILVER-ROUTE">silver</Link>{" "}
                current supports reflection, clarity, and shielding. Together, these
                currents make Hematite a stone of grounded protection and steady focus.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* HEMATITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Hematite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Hematite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Grounding, protection, shielding, focus, stability, nervous system
                support, boundary reinforcement
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Anxiety spirals, scattered attention, energetic drain, overwhelm,
                intrusive influence, instability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Black Tourmaline, Smoky Quartz, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Hematite is often used when you need to stay in your body and stay
                in the moment.
                <br />
                <br />
                It supports Root Chakra work by strengthening energetic edges and
                reinforcing stability.
                <br />
                <br />
                In protection spells, it behaves like armor: not aggressive, just
                unyielding.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH HEMATITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Hematite</h2>

          <p>
            Hematite is commonly worn or carried during stressful environments, busy
            social spaces, or periods that require strong focus. It can be used as
            jewelry, a pocket stone, or placed near a workspace to support attention
            and energetic containment.
          </p>

          <p>
            In ritual, Hematite is often placed at the edge of an altar or near
            thresholds to reinforce protection. It supports grounding rites, shielding
            work, and any practice where the goal is steady presence without emotional
            flooding.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Hematite is best reached for when your mind is loud and your body feels
            far away. It supports the return to physical presence: breath, weight,
            gravity, and the quiet certainty of being here.
          </p>

          <p>
            In longer workings, Hematite behaves like containment. It strengthens
            boundaries, reduces energetic leakage, and helps focus become sustainable
            rather than forced.
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
    alt="Hematite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Hematite has a long history of practical and symbolic use, valued for its
            iron content and its distinctive red streak. Across cultures, it has been
            associated with strength, grounding, and protection, carried as a stone
            of endurance and stability.
          </p>

          <p>
            In modern metaphysical practice, Hematite remains a foundational grounding
            stone, known for shielding, focus, and energetic containment.
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
                Oxide
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                5.5 to 6.5 on the Mohs scale
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
                Metallic iron oxide mineral that leaves a reddish-brown streak
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Hematite can be cleansed using smoke, sound, or moonlight. Brief water
            contact is usually fine, but avoid prolonged soaking and avoid harsh
            chemicals that could dull polish.
          </p>

          <p>
            Store Hematite away from abrasive materials. If polished, wipe gently
            with a soft cloth to maintain sheen.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Hematite is not intended for ingestion. Avoid grinding or creating dust
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