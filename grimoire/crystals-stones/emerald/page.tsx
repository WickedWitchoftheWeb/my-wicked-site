// app/grimoire/crystals-stones/emerald/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function EmeraldPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Emerald" subtitle="Beryl variety · Be₃Al₂Si₆O₁₈">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-EMERALD-HERO-IMAGE-URL"
              alt="Emerald"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Emerald restores the heart’s sovereignty: love with boundaries, devotion with backbone.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Emerald is a vivid green variety of beryl, prized for its depth of
            color and its long-standing association with love, renewal, and
            prosperity. Its green hue comes from trace elements within the
            mineral structure, giving it a presence that feels both regal and
            restorative.
          </p>

          <p>
            In practice, Emerald is often reached for when the Heart Chakra needs
            strength rather than softness. It supports devotion without
            self-erasure, healing without naivety, and the ability to choose love
            while still protecting one&apos;s boundaries.
          </p>

          <p>
            In witchcraft, Emerald is commonly worked with for love, abundance,
            loyalty, heart-centered clarity, and growth. It is chosen when the
            goal is sustainable expansion: emotional, spiritual, and material.
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
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/rose">Rose</Link>,{" "}
                <Link href="PASTE-JASMINE-ROUTE">Jasmine</Link>
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
                Deep green to blue-green, often with natural inclusions. Some
                specimens appear translucent with internal gardens, while others
                show richer, darker saturation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports renewal, prosperity, and heart-centered growth.
                The{" "}
                <Link href="PASTE-BLUE-ROUTE">blue</Link>{" "}
                current supports truth, clarity, and calm communication. Together,
                these currents make Emerald a stone of loyal love and sustainable
                expansion.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* EMERALD IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Emerald in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Emerald in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, loyalty, prosperity, healing, heart clarity, growth,
                devotion, relationship boundaries
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional depletion, scarcity mindset, disloyalty, heart
                confusion, self-abandonment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Rose Quartz, Clear Quartz, Malachite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Emerald is useful when love needs to become stable instead of
                chaotic.
                <br />
                <br />
                It supports Heart Chakra work that strengthens boundaries: love
                that does not require self-sacrifice.
                <br />
                <br />
                In prosperity rituals, it reinforces sustainable growth and the
                ability to receive without guilt.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH EMERALD */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Emerald</h2>

          <p>
            Emerald is commonly worn close to the heart to support devotion,
            loyalty, and emotional steadiness. It can be carried during
            relationship work, healing periods, or any time you need to return to
            what is truly valuable.
          </p>

          <p>
            In ritual, Emerald is often placed on the altar for love spells,
            prosperity work, and growth rites. It pairs well with heart-aligned
            herbs and offerings, especially when the intention is long-term
            stability rather than quick intensity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Emerald is best reached for when you want love to be sovereign: loyal,
            honest, and protected. It supports the kind of devotion that builds a
            life rather than consumes it.
          </p>

          <p>
            In longer workings, Emerald behaves like steady growth. It does not
            rush the process. It supports consistent healing, sustainable
            prosperity, and the slow strengthening of the heart&apos;s boundaries.
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
    alt="Emerald Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Emerald has been prized for thousands of years, associated with
            royalty, devotion, fertility, and wealth. Across cultures it has been
            worn as a symbol of enduring love and protection, and kept as a charm
            for abundance.
          </p>

          <p>
            In modern metaphysical practice, its reputation centers on heart
            wisdom, loyalty, and sustainable prosperity: love that grows without
            destroying the self.
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
                Silicate (Beryl)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                7.5 to 8 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Hexagonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Green beryl colored by trace elements, often with natural inclusions
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Emerald can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine, but avoid harsh chemicals and ultrasonic
            cleaners, especially for treated or included stones.
          </p>

          <p>
            Store Emerald away from harder stones to protect the surface and avoid
            impact that could chip edges. Handle gently to preserve polish and integrity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Emerald is not intended for ingestion. Avoid grinding or creating dust
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