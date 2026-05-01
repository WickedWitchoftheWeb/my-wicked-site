// app/grimoire/herbs/lemon/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LemonPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lemon" subtitle="Citrus limon">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LEMON-HERO-IMAGE-URL"
              alt="Lemon"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lemon cuts through illusion: it cleanses, sharpens, and restores
              clarity where energy has dulled.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lemon is a citrus fruit tree native to Asia and now cultivated
            widely in warm climates around the world. Its bright yellow fruit
            and sharp scent have made it a staple in culinary, medicinal, and
            household traditions.
          </p>

          <p>
            In practical use, Lemon is associated with cleansing, preservation,
            and refreshing clarity. Energetically, it carries a crisp current
            that clears stagnant emotion and sharpens focus.
          </p>

          <p>
            In witchcraft, Lemon is used for purification, protection, clarity,
            uncrossing, and mental focus. It is chosen when the goal is clean
            energy, sharp boundaries, and renewed brightness.
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
                ,{" "}
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-RA-ROUTE">Ra</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-MERCURY-ROUTE">Mercury</Link>,{" "}
                <Link href="PASTE-SOL-ROUTE">Sol</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lemon in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LEMON-WITCHCRAFT-IMAGE-URL"
              alt="Lemon in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Cleansing, protection, uncrossing, focus, clarity, banishing
                negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic residue, confusion, crossed conditions, energetic fog,
                lingering negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, vitamin-rich preparations,
                cleansing tonics, household purification uses
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lemon is a sharpener.
                <br />
                <br />
                Use slices in water bowls for space cleansing and intention
                setting.
                <br />
                <br />
                For uncrossing, add Lemon juice to ritual baths focused on
                clarity and energetic reset.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when reclaiming personal
                authority and cutting through manipulation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Lemon</h2>

          <p>
            Lemon can be used fresh, dried, juiced, or as peel. It is commonly
            incorporated into cleansing baths, floor washes, and protection
            spells.
          </p>

          <p>
            Place Lemon slices in a bowl of water on an altar for energetic
            clarity and renewal.
          </p>

          <p>
            Add dried peel to incense blends when working with focus and
            mental sharpness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lemon is a practical choice when your energy feels dull, confused,
            or heavy. It restores brightness quickly.
          </p>

          <p>
            Work with it during cleansing phases, after conflict, or when you
            need to think clearly and act decisively.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LEMON-FOLKLORE-IMAGE-URL"
              alt="Lemon Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Lemon has long been associated with purification and preservation.
            In various folk traditions, citrus fruits were used to ward off
            negative influence and refresh the atmosphere of a home.
          </p>

          <p>
            In modern witchcraft, Lemon remains a staple for energetic
            cleansing and clarity work. Its current is bright and direct: cut,
            clear, renew.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Lemon is known for containing vitamin C and aromatic compounds
            responsible for its cleansing scent and traditional tonic use.
          </p>

          <p>
            Common Constituents: Vitamin C, Citric Acid, Limonene, Flavonoids
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
            Lemon juice and essential oil may irritate sensitive skin and can
            increase photosensitivity. Dilute appropriately before topical use.
            If pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting or applying any
            herbal preparation. This grimoire is written for spiritual and
            educational purposes and is not medical advice.
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