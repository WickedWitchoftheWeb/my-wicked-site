// app/grimoire/herbs/cloves/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ClovesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cloves" subtitle="Syzygium aromaticum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CLOVES-HERO-IMAGE-URL"
              alt="Cloves"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cloves seal the working: sharp, protective, and unwavering in intention.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cloves are the dried flower buds of a tropical evergreen tree native
            to Indonesia. Highly prized in ancient trade, they were once worth
            their weight in gold.
          </p>

          <p>
            Their strong aroma and heat made them staples in culinary, medicinal,
            and ritual traditions across Asia, the Middle East, and Europe.
          </p>

          <p>
            In witchcraft, Cloves are worked with for protection, warding,
            banishing negativity, strengthening intention, and sealing spellwork.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-MARS-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-SHANGO-ROUTE">Shango</Link>,{" "}
                <Link href="PASTE-PELE-ROUTE">Pele</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-HEPHAESTUS-ROUTE">Hephaestus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/01-sun">
                  Sun
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
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Cloves in Witchcraft</h2>

             <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CLOVES-WITCHCRAFT-IMAGE-URL"
            alt="Cloves in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, warding, sealing spellwork, strengthening intention,
                banishing negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic intrusion, harmful influence, scattered energy, weak
                intention
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming stimulant, oral care support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Cloves to protection jars to seal and fortify the working.
                <br />
                <br />
                Burn sparingly in Fire rituals where strengthening and defense
                are needed.
                <br />
                <br />
                Use whole Cloves in charm bags for sustained boundary support.
                <br />
                <br />
                Cloves amplify intention, so clarity is essential.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cloves</h2>

          <p>
            Add whole Cloves to protection jars and sachets.
          </p>

          <p>
            Use in Fire-aligned rituals to strengthen and seal intention.
          </p>

          <p>
            Incorporate into banishing blends when firm energetic boundaries are required.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cloves are used when a working must be fortified. They add heat and
            firmness to ritual structure.
          </p>

          <p>
            They pair well with Mars and Sun rituals focused on defense,
            vitality, and decisive strength.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cloves Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In medieval Europe, Cloves were used in protective amulets and
            carried to ward off illness and harmful influence.
          </p>

          <p>
            In many cultures, their strong aroma symbolized power, protection,
            and sacred fire.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cloves contain eugenol and other aromatic compounds responsible for
            their warming and stimulating qualities.
          </p>

          <p>
            Chemical Constituents: Eugenol, Volatile Oils, Flavonoids
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
            Clove oil can be irritating to skin and mucous membranes if used
            undiluted. Use essential oils with caution. If pregnant, nursing,
            managing a condition, or taking medication, consult a trusted
            professional source before ingesting any herb. This grimoire is
            written for spiritual and educational purposes and is not medical advice.
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