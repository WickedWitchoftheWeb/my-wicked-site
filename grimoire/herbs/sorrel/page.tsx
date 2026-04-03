// app/grimoire/herbs/sorrel/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SorrelPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Sorrel" subtitle="Rumex acetosa">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-SORREL-HERO-IMAGE-URL"
              alt="Sorrel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Sorrel clears what lingers: sharpen the senses, purify the field, and move forward clean.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Sorrel is a tangy leafy plant found across Europe and North America.
            Recognized for its bright, lemon-like flavor, it has long been used
            in culinary and traditional herbal practices.
          </p>

          <p>
            In herbal tradition, Sorrel has been associated with cleansing,
            digestive stimulation, and seasonal renewal. Its sharpness mirrors
            its energetic symbolism.
          </p>

          <p>
            In witchcraft, Sorrel is used for purification, uncrossing,
            clarity, and momentum. It is chosen when the goal is to remove
            stagnation and restore forward movement.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-CERES-ROUTE">Ceres</Link>,{" "}
                <Link href="PASTE-GAIA-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
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
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/06-saturn">
                  Saturn
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">
                  Hematite
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Sorrel in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-SORREL-WITCHCRAFT-IMAGE-URL"
              alt="Sorrel in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Purification, uncrossing, clarity, forward movement,
                energetic cleansing, renewal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Stagnation, confusion, lingering negativity, energetic residue
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, seasonal cleansing tonics
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Sorrel to cleansing baths when removing energetic residue.
                <br />
                <br />
                Use in uncrossing blends to symbolically cut through stagnation.
                <br />
                <br />
                Incorporate into spring rituals focused on renewal and momentum.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when reclaiming direction and drive.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Sorrel</h2>

          <p>
            Use fresh leaves in ritual meals honoring renewal and growth.
          </p>

          <p>
            Add dried Sorrel to purification sachets and floor washes.
          </p>

          <p>
            Incorporate into seasonal rites marking transition and new beginnings.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Sorrel is a practical ally when something feels stuck and must be
            cleared. It sharpens intention and restores movement.
          </p>

          <p>
            Work with it during transitions, after conflict, or when symbolic
            cleansing is required before beginning anew.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-SORREL-FOLKLORE-IMAGE-URL"
              alt="Sorrel Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In European folk tradition, Sorrel was associated with vitality and
            early spring renewal. Its bright taste symbolized awakening after
            winter.
          </p>

          <p>
            In magical practice, it represents sharp clarity and the power to
            cut through lingering obstacles.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Sorrel contains organic acids and plant compounds traditionally
            associated with digestive stimulation.
          </p>

          <p>
            Common Constituents: Oxalic Acid, Flavonoids, Tannins
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
            Sorrel contains oxalic acid and may not be suitable in large
            quantities for certain individuals. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting herbal preparations. This grimoire
            is written for spiritual and educational purposes and is not
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