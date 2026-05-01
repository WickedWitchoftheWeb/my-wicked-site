// app/grimoire/herbs/mint/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MintPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mint" subtitle="Mentha × piperita">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-MINT-HERO-IMAGE-URL"
              alt="Mint"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Mint clears the mind and sweetens the road: wake up your senses,
              cleanse the space, call prosperity closer.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Mint is a bright, aromatic herb found in many varieties across the
            world. Known for its cooling scent and flavor, it has been used in
            culinary, household, and herbal traditions for centuries.
          </p>

          <p>
            In practical tradition, Mint is often associated with digestion,
            freshness, and respiratory comfort. Energetically, it carries a
            quick, cleansing current that clears stagnation and restores
            alertness.
          </p>

          <p>
            In witchcraft, Mint is used for cleansing, prosperity, healing,
            mental clarity, protection, and attraction. It is chosen when the
            goal is refreshment, forward movement, and sweetened outcomes.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-PERSEPHONE-ROUTE">Persephone</Link>,{" "}
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>
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
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
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
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
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
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Mint in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MINT-WITCHCRAFT-IMAGE-URL"
              alt="Mint in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity spells, cleansing, healing, confidence, mental
                clarity, attraction work
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Stagnation, mental fog, energetic clutter, money blocks,
                dullness in the home
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, cooling teas, respiratory comfort
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Mint refreshes energy quickly.
                <br />
                <br />
                Use in floor washes to clear heaviness and invite prosperity.
                <br />
                <br />
                Add to charm bags when calling in steady money flow and
                opportunity.
                <br />
                <br />
                Pair with Throat Chakra focus when you need clear, confident
                communication.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Mint</h2>

          <p>
            Mint can be used fresh or dried in teas, baths, floor washes, spell
            jars, and incense blends.
          </p>

          <p>
            Add Mint to prosperity jars or money bowls to refresh and sweeten
            financial energy.
          </p>

          <p>
            Brew as a tea before studying or planning to sharpen concentration
            and clear mental fog.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Mint is a practical choice when the air feels stale and motivation
            feels low. It brings quick clarity and forward motion.
          </p>

          <p>
            Work with it when starting new routines, cleaning your home, or
            calling in opportunity and steady money flow.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MINT-FOLKLORE-IMAGE-URL"
              alt="Mint Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In ancient traditions, Mint was associated with hospitality and
            cleanliness, used to scent homes and welcome guests. In some folk
            practices, it was also linked to prosperity and renewal.
          </p>

          <p>
            In modern witchcraft, Mint remains a staple herb for quick cleansing
            and money drawing work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Mint contains aromatic compounds responsible for its cooling scent
            and traditional use in digestive and respiratory preparations.
          </p>

          <p>
            Common Constituents: Menthol, Menthone, Rosmarinic Acid, Flavonoids
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
            Mint may worsen reflux in some individuals and peppermint oil should
            be diluted before topical use. If pregnant, nursing, managing a
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