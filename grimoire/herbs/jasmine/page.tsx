// app/grimoire/herbs/jasmine/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function JasminePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Jasmine" subtitle="Jasminum officinale">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-JASMINE-HERO-IMAGE-URL"
              alt="Jasmine"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Jasmine softens the night: it calls love closer, awakens desire,
              and opens the heart without fear.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Jasmine is a fragrant flowering vine native to parts of Asia and
            the Mediterranean. Its delicate white blossoms release their scent
            most strongly at night, giving the plant a long-standing
            association with moonlight, intimacy, and emotional depth.
          </p>

          <p>
            In practical tradition, Jasmine is valued for its calming aroma and
            use in teas and perfumery. Energetically, it carries a gentle yet
            magnetic current that draws connection, affection, and sensual
            awareness.
          </p>

          <p>
            In witchcraft, Jasmine is used for love work, attraction, prophetic
            dreams, self-love, and emotional healing. It is chosen when the
            goal is vulnerability without weakness and desire without chaos.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-SELENE-ROUTE">Selene</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
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
                ,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">
                  Rhodonite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pearl">Pearl</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Jasmine in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-JASMINE-WITCHCRAFT-IMAGE-URL"
              alt="Jasmine in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love spells, attraction, dream work, self-love, sensual
                confidence, emotional healing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional numbness, fear of intimacy, blocked desire,
                self-rejection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Aromatic relaxation support, calming teas, traditional use in
                stress relief blends
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Jasmine works best in quiet spaces and evening rituals.
                <br />
                <br />
                Use it in love spell jars or sachets when the goal is emotional
                closeness rather than surface attraction.
                <br />
                <br />
                For dream work, place dried Jasmine beneath your pillow and set
                an intention for clear emotional insight.
                <br />
                <br />
                Pair with Heart Chakra focus for forgiveness and openness, or
                Sacral Chakra focus for sensual empowerment.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Jasmine</h2>

          <p>
            Jasmine can be used as dried flowers, infused oil, incense, or tea.
            It is commonly incorporated into love blends, dream sachets, and
            beauty rituals.
          </p>

          <p>
            Add Jasmine to ritual baths for emotional softening and romantic
            magnetism.
          </p>

          <p>
            Burn as incense during evening meditation or lunar work to enhance
            intuition and deepen connection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Jasmine is a practical choice when you need gentle emotional
            openness rather than forceful change. It supports connection
            without urgency.
          </p>

          <p>
            Work with it during relationship healing, self-love rituals, or
            when calling in intimacy that feels safe and aligned.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-JASMINE-FOLKLORE-IMAGE-URL"
              alt="Jasmine Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Jasmine has been associated with love, fertility, and sacred
            femininity across cultures. In parts of India and the Mediterranean,
            it is woven into garlands and worn as a symbol of devotion and
            celebration.
          </p>

          <p>
            In modern witchcraft, Jasmine remains a staple in attraction and
            dream work. Its current is intimate and magnetic: open the heart,
            trust the night.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Jasmine is known for containing aromatic compounds responsible for
            its distinctive fragrance. These compounds are commonly referenced
            in perfumery and calming preparations.
          </p>

          <p>
            Common Constituents: Benzyl Acetate, Linalool, Indole, Volatile
            Oils
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
            Jasmine essential oil should be diluted before topical use and may
            cause irritation in sensitive individuals. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting or applying any herbal preparation.
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
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