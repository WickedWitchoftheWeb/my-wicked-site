// app/grimoire/herbs/coriander/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CorianderPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Coriander" subtitle="Coriandrum sativum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CORIANDER-HERO-IMAGE-URL"
              alt="Coriander"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Coriander carries a bright, clearing warmth: it refreshes the
              field, sweetens the current, and helps the work move cleanly
              forward.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Coriander refers to the dried seeds of Coriandrum sativum, a plant
            cultivated across the Mediterranean, the Middle East, and parts of
            Asia for thousands of years. While the fresh leaves are commonly
            called Cilantro, Coriander seed carries its own distinct aroma and
            traditional use.
          </p>

          <p>
            In practical tradition, Coriander seed appears in culinary blends,
            household remedies, and traditional preparations valued for warmth
            and digestive support. In spiritual work, that warmth translates
            into clearing, attraction, and a brighter energetic tone.
          </p>

          <p>
            In witchcraft, Coriander is used to refresh stagnant situations,
            strengthen love work, support purification, and bring a clean sense
            of forward motion without harshness.
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
                <Link href="PASTE-APHRODITE-DEITY-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-FREYJA-DEITY-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-HATHOR-DEITY-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-OSHUN-DEITY-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-LAKSHMI-DEITY-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-ISHTAR-DEITY-ROUTE">Ishtar</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/05-throat-chakra">Throat Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">Rose Quartz</Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/emerald">Emerald</Link>,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
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
          <h2 className="grimoire-subheading">Coriander in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-CORIANDER-WITCHCRAFT-IMAGE-URL"
              alt="Coriander in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, attraction, purification, renewal, luck, emotional clarity,
                fresh starts
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Stagnation, emotional heaviness, lingering negativity, dull
                energy, blocked connection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming comfort, traditional aromatic use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Coriander is a brightener. It is often used when love work needs
                to feel cleaner and more open, rather than sticky or obsessive.
                <br />
                <br />
                In purification work, it helps lift residue without harshness.
                Think of it as cleansing that restores sweetness and ease.
                <br />
                <br />
                In attraction work, Coriander supports receptivity. It helps
                clear what blocks connection: emotional heaviness, distrust, or
                stale patterns.
                <br />
                <br />
                Pair it with Heart Chakra focus and keep the intention simple:
                open, aligned, and light enough to move.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Coriander</h2>

          <p>
            Coriander can be worked with as whole seeds or lightly crushed. It
            is commonly used in jar work, charm bags, candle dressing blends,
            and cleansing mixes where the goal is freshness rather than force.
          </p>

          <p>
            For love work, add Coriander to a sweetening blend with stones that
            support openness and calm connection. Use it to dress candles,
            prepare a charm, or reinforce a relationship-focused working.
          </p>

          <p>
            For purification, incorporate Coriander into cleansing baths or floor
            washes when you want the space to feel lighter and more inviting,
            not stripped or harsh.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Coriander is a practical choice when you need to refresh the current.
            Use it when love work feels heavy, when a space feels stale, or when
            you need to reset the emotional tone without escalating conflict.
          </p>

          <p>
            It is also useful when you want to invite connection but your field
            feels guarded or tired. Coriander supports a softer opening so your
            next move comes from clarity rather than caution.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-CORIANDER-FOLKLORE-IMAGE-URL"
              alt="Coriander Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Coriander has a long history in Mediterranean and Middle Eastern
            tradition, appearing in culinary blends, household remedies, and
            ritual use. Its scent and flavor made it a symbol of warmth, life,
            and an inviting home.
          </p>

          <p>
            In modern witchcraft, Coriander is commonly used in love work,
            cleansing blends, and renewal rites. The current is bright: open the
            way, clear the heaviness, and let the work move cleanly forward.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Coriander is often described as containing aromatic essential oils
            and plant compounds that contribute to its traditional warming and
            soothing reputation. This section is the place to list additional
            nutritional components such as vitamins and minerals when applicable
            to the herb being profiled.
          </p>

          <p>Common Constituents: Aromatic Oils, Plant Compounds</p>
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
            Coriander is generally used in culinary amounts. Larger amounts may
            cause digestive discomfort in some individuals. If pregnant, nursing,
            managing a condition, or taking medication, check safety details with
            a trusted professional source before ingesting any herb. This
            grimoire is written for spiritual and educational purposes and is not
            medical advice.
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