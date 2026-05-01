// app/grimoire/herbs/lemongrass/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LemongrassPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lemongrass" subtitle="Cymbopogon citratus">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LEMONGRASS-HERO-IMAGE-URL"
              alt="Lemongrass"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lemongrass sweeps clean and calls luck in: clear the path,
              sharpen the mind, invite fresh opportunity.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lemongrass is a tall, aromatic grass native to tropical regions of
            Asia and Africa. Its bright citrus scent and flavor have made it a
            staple in culinary traditions, herbal teas, and household cleansing
            blends.
          </p>

          <p>
            In traditional practice, Lemongrass is associated with digestive
            comfort, refreshing tonics, and general purification. Energetically,
            it carries a crisp, uplifting current that clears heaviness and
            restores forward momentum.
          </p>

          <p>
            In witchcraft, Lemongrass is used for cleansing, luck drawing,
            clarity, road opening, and protection. It is chosen when the goal is
            both removal of stagnation and attraction of opportunity.
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
                <Link href="/grimoire/elements/air">Air</Link>,{" "}
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MERCURY-ROUTE">Mercury</Link>,{" "}
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-FORTUNA-ROUTE">Fortuna</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/yellow-calcite">
                  Yellow Calcite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lemongrass in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LEMONGRASS-WITCHCRAFT-IMAGE-URL"
              alt="Lemongrass in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Cleansing, road opening, luck drawing, clarity, mental focus,
                protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Stagnation, confusion, crossed conditions, lingering negativity,
                blocked opportunity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive comfort, calming teas, refreshing herbal
                infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lemongrass clears first and attracts second.
                <br />
                <br />
                Use in floor washes when beginning a new project or chapter.
                <br />
                <br />
                Add to spell jars focused on opportunity and forward movement.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus for confidence and decisive
                action.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Lemongrass
          </h2>

          <p>
            Lemongrass can be used fresh or dried in teas, cleansing baths,
            floor washes, and incense blends.
          </p>

          <p>
            Add to ritual water when preparing for new beginnings or important
            decisions.
          </p>

          <p>
            Burn as incense during study or planning sessions to sharpen
            concentration.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lemongrass is a practical choice when your path feels blocked or
            your energy feels dull. It restores brightness and motion.
          </p>

          <p>
            Work with it at the start of new ventures, during financial spells,
            or when reclaiming personal momentum.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LEMONGRASS-FOLKLORE-IMAGE-URL"
              alt="Lemongrass Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In various folk traditions, Lemongrass has been used in cleansing
            baths and washes to remove spiritual residue and invite prosperity.
          </p>

          <p>
            In modern witchcraft, it remains a trusted ally for road opening
            and energetic refresh. Its current is bright and forward moving.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Lemongrass is known for containing aromatic compounds responsible
            for its citrus scent and traditional use in herbal infusions.
          </p>

          <p>
            Common Constituents: Citral, Limonene, Geraniol, Flavonoids
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* WARNING */}
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
            Lemongrass essential oil should be diluted before topical use and
            may irritate sensitive skin. If pregnant, nursing, managing a
            condition, or taking medication, consult a qualified professional
            before ingesting herbal preparations. This grimoire is written for
            spiritual and educational purposes and is not medical advice.
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