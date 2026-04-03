// app/grimoire/crystals-stones/rhodonite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function RhodonitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Rhodonite" subtitle="Manganese silicate · MnSiO₃">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-RHODONITE-HERO-IMAGE-URL"
              alt="Rhodonite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Rhodonite steadies the heart: compassion without collapse, strength without cruelty.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Rhodonite is a manganese silicate mineral known for its pink to
            rose coloring, often marked with black manganese oxide veining.
            Its contrast between soft pink and grounding black gives it a
            distinctive appearance.
          </p>

          <p>
            In metaphysical practice, Rhodonite is associated with emotional
            healing, forgiveness, compassion, and heart stability. It is often
            worked with when the heart needs strength, not softness alone.
          </p>

          <p>
            In witchcraft, Rhodonite is commonly used for reconciliation,
            emotional regulation, heart-boundary work, and restoring balance
            after conflict.
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
                <Link href="PASTE-VENUS-PLANET-ROUTE">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-TAURUS-ROUTE">Taurus</Link>,{" "}
                <Link href="PASTE-LIBRA-ROUTE">Libra</Link>
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ROSE-ROUTE">Rose</Link>,{" "}
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
                Pink to rose with black veining. The black patterns are caused
                by manganese oxide and often form branching lines.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="PASTE-PINK-COLOR-ROUTE">pink</Link>{" "}
                current supports compassion, forgiveness, and emotional healing.
                The{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current reinforces boundaries and grounded strength. Together,
                they represent heart power that is both soft and stable.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* RHODONITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Rhodonite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Rhodonite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Emotional healing, reconciliation, compassion, heart-boundary
                work, forgiveness, stability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional volatility, resentment, over-giving, self-sacrifice
                without boundaries
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Rose Quartz, Garnet, Black Tourmaline
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Rhodonite is especially effective in reconciliation rituals and
                heart-clearing work after conflict.
                <br /><br />
                It supports compassion that does not collapse into self-neglect.
                <br /><br />
                In long-term emotional healing, it reinforces steady growth
                rather than dramatic swings.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH RHODONITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Rhodonite</h2>

          <p>
            Rhodonite is commonly carried during emotionally charged periods
            to support grounded compassion and self-control.
          </p>

          <p>
            In ritual, it may be placed over the Heart Chakra during forgiveness
            work or used in reconciliation spells where stability is required.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Rhodonite is best reached for when the heart feels reactive.
            It steadies emotional currents and encourages thoughtful response
            rather than impulsive reaction.
          </p>

          <p>
            In longer workings, it supports balanced compassion: loving
            without dissolving your own boundaries.
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
    alt="Rhodonite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Rhodonite has been valued historically for both ornamental carving
            and symbolic use. Its pink coloration linked it to themes of love
            and emotional depth.
          </p>

          <p>
            In modern metaphysical traditions, it is widely regarded as a
            stone of heart healing and grounded compassion.
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
                Silicate (Manganese silicate)
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
                Triclinic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Pink coloration with black manganese veining
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Rhodonite can be cleansed with smoke, sound, or moonlight. Avoid
            prolonged water exposure and harsh chemicals to preserve surface
            polish.
          </p>

          <p>
            Store separately from harder stones to prevent scratching.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Rhodonite is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
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