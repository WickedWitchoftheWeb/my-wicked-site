// app/grimoire/herbs/vetiver/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function VetiverPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Vetiver" subtitle="Chrysopogon zizanioides">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-VETIVER-HERO-IMAGE-URL"
              alt="Vetiver"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Vetiver anchors the spirit: root deep, stand steady, let nothing move you without consent.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Vetiver is a tropical grass native to India and Southeast Asia,
            valued for its deeply aromatic roots. The oil extracted from its
            roots carries a rich, earthy scent that has been used in perfumery,
            ritual, and traditional practice for centuries.
          </p>

          <p>
            In herbal and folk traditions, Vetiver has been associated with
            grounding, nervous system support, and stabilizing energy. Its
            scent is heavy, steady, and unmistakably rooted.
          </p>

          <p>
            In witchcraft, Vetiver is used for grounding, protection,
            prosperity, stability, and anchoring intention. It is chosen when
            the goal is to secure something long term and strengthen energetic
            foundations.
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
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-GAIA-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-HADES-ROUTE">Hades</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-GANESHA-ROUTE">Ganesha</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-saturn">
                  Saturn
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/hematite">
                  Hematite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Vetiver in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VETIVER-WITCHCRAFT-IMAGE-URL"
              alt="Vetiver in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Grounding, protection, stability, prosperity, anchoring spells,
                long term manifestation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Scattered energy, instability, financial insecurity, psychic
                drift
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Aromatic grounding support, calming infusions, nervous system
                steadiness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Vetiver root to protection jars for long lasting strength.
                <br />
                <br />
                Use oil to anoint candles during prosperity rituals focused on
                stability rather than sudden gain.
                <br />
                <br />
                Burn lightly when grounding after intense spiritual work.
                <br />
                <br />
                Pair with Root Chakra focus when anchoring major life changes.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Vetiver</h2>

          <p>
            Use dried roots in grounding sachets and protection charms.
          </p>

          <p>
            Add essential oil to anointing blends for stability and endurance.
          </p>

          <p>
            Incorporate into prosperity jars when building slow, steady growth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Vetiver is a practical ally when life feels unstable. It reinforces
            foundations and supports disciplined manifestation.
          </p>

          <p>
            Work with it during financial planning rituals, protection work,
            and transitions that require long term commitment.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VETIVER-FOLKLORE-IMAGE-URL"
              alt="Vetiver Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In South Asian traditions, Vetiver has been used in cooling mats,
            sacred perfumery, and ritual cleansing. Its roots were valued for
            their steadying and purifying qualities.
          </p>

          <p>
            In magical practice, it symbolizes depth and endurance: growth
            secured below the surface before it rises above.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Vetiver root contains aromatic compounds traditionally associated
            with grounding and calming properties.
          </p>

          <p>
            Common Constituents: Sesquiterpenes, Vetiverol, Vetivone, Essential Oils
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
            Essential oils should always be diluted before topical use. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and educational
            purposes and is not medical advice.
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