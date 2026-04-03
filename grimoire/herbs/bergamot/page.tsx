// app/grimoire/herbs/bergamot/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BergamotPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Bergamot" subtitle="Citrus bergamia">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BERGAMOT-HERO-IMAGE-URL"
              alt="Bergamot"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Bergamot lifts the spirit and opens the heart: bright, magnetic,
              and quietly powerful.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Bergamot is a citrus fruit most famously associated with its
            fragrant essential oil. Cultivated primarily in Italy, it has been
            valued for its uplifting aroma and bright, clarifying presence.
          </p>

          <p>
            The oil is widely used in perfumery, tea blends, and traditional
            herbal preparations. Its scent is distinctive: fresh, slightly
            floral, and both calming and energizing at once.
          </p>

          <p>
            In witchcraft, Bergamot is worked with for attraction, confidence,
            prosperity, and emotional clarity. It is especially useful in work
            that blends magnetism with self-assurance.
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
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-ROUTE">Venus</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-FREYA-ROUTE">Freya</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/emerald">
                  Emerald
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">
            Bergamot in Witchcraft
          </h2>

            <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BERGAMOT-WITCHCRAFT-IMAGE-URL"
            alt="Bergamot in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Attraction, prosperity, emotional balance, confidence,
                communication, charm
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Low self-esteem, emotional heaviness, stagnation in love or
                finances
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Aromatic uplift, calming support, mood enhancement
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Bergamot is commonly added to prosperity oils and attraction
                blends. Use it when you want warmth and magnetism without
                aggression.
                <br />
                <br />
                In Heart Chakra work, it supports openness paired with
                discernment.
                <br />
                <br />
                Pair Bergamot with Venus-focused rituals for love and financial
                harmony.
                <br />
                <br />
                Its strength lies in balanced attraction rather than force.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Bergamot
          </h2>

          <p>
            Bergamot essential oil can be used in anointing blends for
            prosperity, attraction, and emotional balance.
          </p>

          <p>
            Add a drop to ritual baths focused on confidence and social
            harmony.
          </p>

          <p>
            Incorporate Bergamot into love work that emphasizes mutual respect
            and balanced desire.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Bergamot is used when attraction must feel warm rather than
            overwhelming. It enhances confidence while maintaining softness.
          </p>

          <p>
            It pairs well with Venus-focused rituals and balanced prosperity
            work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Bergamot Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Bergamot became widely known through its use in perfumery and tea
            blending. Its scent has long been associated with refinement and
            uplift.
          </p>

          <p>
            Modern witchcraft embraces Bergamot as a magnetizing and
            harmonizing force in love and prosperity work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Bergamot contains essential oils including linalool and limonene,
            which contribute to its distinctive aroma.
          </p>

          <p>
            Chemical Constituents: Linalool, Limonene, Essential Oils
          </p>
        </section>

        <div className="grimoire-divider" />

        <section className="grimoire-section grimoire-text">
          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/website-general-assets/safe-for-humans.png"
              alt="Safe for humans"
              className="grimoire-img"
            />
          </div>

          <p className="grimoire-subheading">Warning</p>

          <p>
            Bergamot essential oil may increase sun sensitivity and should be
            diluted before topical use. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before using concentrated herbal preparations. This
            grimoire is written for spiritual and educational purposes and is
            not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/herbs" className="grimoire-footer-link">
              ← Back to Herbs
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