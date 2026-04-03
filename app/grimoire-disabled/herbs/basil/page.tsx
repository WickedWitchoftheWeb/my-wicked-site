// app/grimoire/herbs/basil/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BasilPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Basil" subtitle="Ocimum basilicum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BASIL-HERO-IMAGE-URL"
              alt="Basil"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Basil invites prosperity with clean intention: it blesses the
              home, sharpens the will, and strengthens what you are building.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Basil is a fragrant culinary herb cultivated worldwide and
            associated with blessing, protection, and prosperity across many
            cultures. Its bright scent and vivid green leaves have made it a
            staple in kitchens and ritual practice alike.
          </p>

          <p>
            Native to tropical regions of Asia and Africa, Basil spread widely
            through trade and devotion. In some traditions it is considered a
            sacred plant and is grown near homes as a protective and auspicious
            presence.
          </p>

          <p>
            In witchcraft, Basil is treated as a prosperity and blessing herb.
            It supports financial flow, protection of the household, clear
            intention, and strengthening what is already growing.
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
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-VISHNU-ROUTE">Vishnu</Link>,{" "}
                <Link href="PASTE-GANESHA-ROUTE">Ganesha</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-ROUTE">Venus</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-FREY-ROUTE">Frey</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/emerald">
                  Emerald
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
          <h2 className="grimoire-subheading">Basil in Witchcraft</h2>

                <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BASIL-WITCHCRAFT-IMAGE-URL"
            alt="Basil in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, protection, blessing the home, success, love,
                confidence, strengthening intention
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Financial stagnation, household conflict, jealousy, misfortune,
                low confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive comfort, calming support, aromatic uplift, culinary
                nourishment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Basil is often used to bless what is already growing. Add it to
                prosperity blends when you want expansion with protection.
                <br />
                <br />
                Place fresh Basil near entryways to reinforce a welcoming yet
                guarded household energy.
                <br />
                <br />
                In financial work, pair Basil with Jupiter intention and clear
                structure rather than wishful thinking.
                <br />
                <br />
                Basil amplifies intention. Keep the goal focused and practical
                when working with it.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Basil</h2>

          <p>
            Basil can be used fresh or dried in prosperity sachets, protection
            jars, candle dressings, and ritual baths focused on financial flow
            and household harmony.
          </p>

          <p>
            For home blessing, place a small bowl of fresh Basil in the kitchen
            or near the front door to reinforce welcoming and protected energy.
          </p>

          <p>
            In money work, combine Basil with clear planning and grounded action.
            It supports growth that is sustained rather than reckless.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Basil is used when something needs blessing and expansion. It
            strengthens prosperity work without sacrificing stability.
          </p>

          <p>
            It pairs well with Jupiter-focused rituals, home protection
            practices, and structured success planning.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Basil Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In various traditions, Basil is regarded as sacred and is grown near
            homes for protection and blessing. It appears in both devotional and
            household practices.
          </p>

          <p>
            Modern witchcraft continues this association, treating Basil as a
            plant of prosperity, protection, and intentional growth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Basil contains aromatic essential oils and plant compounds that
            contribute to its distinctive scent and traditional culinary and
            herbal use.
          </p>

          <p>
            Common Constituents: Essential Oils, Aromatic Compounds
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
            Basil is commonly used in culinary amounts. Concentrated extracts
            and essential oils should be used with care. If pregnant, nursing,
            managing a condition, or taking medication, consult a trusted
            professional source before ingesting any herb. This grimoire is
            written for spiritual and educational purposes and is not medical
            advice.
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