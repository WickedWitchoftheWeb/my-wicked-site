// app/grimoire/herbs/caraway/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CarawayPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Caraway" subtitle="Carum carvi">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CARAWAY-HERO-IMAGE-URL"
              alt="Caraway"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Caraway guards what is yours: it steadies the home, sharpens the
              mind, and seals what should not be lost.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Caraway is an aromatic seed long used in culinary and herbal
            traditions. Native to Europe and Western Asia, it has traveled
            widely through cultivation and trade.
          </p>

          <p>
            Traditionally associated with digestion and warmth, Caraway also
            developed a reputation in folk practice as a protector of
            possessions, relationships, and the home.
          </p>

          <p>
            In witchcraft, Caraway is worked with for protection, memory,
            clarity, fidelity, and warding against theft or loss.
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
                <Link href="PASTE-MERCURY-ROUTE">Mercury</Link>,{" "}
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
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
                <Link href="/grimoire/crystals-stones/agate">Agate</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
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
          <h2 className="grimoire-subheading">Caraway in Witchcraft</h2>

                 <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CARAWAY-WITCHCRAFT-IMAGE-URL"
            alt="Caraway in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, memory, clarity, loyalty, household protection,
                anti-theft wards
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Theft, forgetfulness, deception, scattered thinking, broken
                agreements
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming tonics, traditional culinary herbal
                use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Sprinkle Caraway near doors or windows in warding work to guard
                against theft or intrusion.
                <br />
                <br />
                In clarity rituals, pair it with Mercury-focused intention to
                sharpen thought and strengthen communication.
                <br />
                <br />
                For relationship protection, include Caraway in charm bags meant
                to guard fidelity and mutual respect.
                <br />
                <br />
                Its strength lies in sealing and preserving what is valuable.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Caraway</h2>

          <p>
            Add Caraway to protective sachets kept in the home or carried for
            safeguarding valuables.
          </p>

          <p>
            Use it in spellwork focused on strengthening memory and improving
            communication clarity.
          </p>

          <p>
            Incorporate Caraway into warding blends where preservation and
            vigilance are key.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Caraway is used when something must be guarded carefully: property,
            promises, or mental clarity.
          </p>

          <p>
            It pairs well with Air element rituals and Mercury-aligned workings
            centered on vigilance and awareness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Caraway Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folk tradition, Caraway was believed to prevent theft
            and protect livestock and property. It was sometimes baked into
            bread or carried for safeguarding.
          </p>

          <p>
            These protective associations continue in modern witchcraft, where
            Caraway is treated as a seed of preservation and alertness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Caraway contains essential oils such as carvone and limonene, which
            contribute to its aromatic and traditional herbal qualities.
          </p>

          <p>
            Chemical Constituents: Carvone, Limonene, Essential Oils
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
            Caraway is commonly used as a culinary herb but may cause allergic
            reactions in sensitive individuals. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before ingesting any herb. This grimoire is written for
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