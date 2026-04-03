// app/grimoire/herbs/cinnamon/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CinnamonPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cinnamon" subtitle="Cinnamomum verum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CINNAMON-HERO-IMAGE-URL"
              alt="Cinnamon"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cinnamon accelerates the current: it warms, activates, and calls abundance forward.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cinnamon is the inner bark of trees in the Cinnamomum genus and has
            been prized for thousands of years across Asia, the Middle East,
            Africa, and Europe.
          </p>

          <p>
            Historically valued as both spice and medicine, Cinnamon carried
            associations of wealth, warmth, vitality, and sacred offering.
          </p>

          <p>
            In witchcraft, Cinnamon is worked with for prosperity, speed,
            protection, attraction, success, and increasing energetic momentum.
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
                <Link href="PASTE-RA-ROUTE">Ra</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-SHANGO-ROUTE">Shango</Link>,{" "}
                <Link href="PASTE-FREYR-ROUTE">Freyr</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>
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
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/01-sun">
                  Sun
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
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
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
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
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
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
          <h2 className="grimoire-subheading">Cinnamon in Witchcraft</h2>
              <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CINNAMON-WITCHCRAFT-IMAGE-URL"
            alt="Cinnamon in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, speed work, attraction, success, vitality, protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Stagnation, weakness, low motivation, negative interference
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Circulatory support, warming stimulant, digestive support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Sprinkle Cinnamon at your threshold for prosperity and energetic
                momentum.
                <br />
                <br />
                Dress candles with Cinnamon when speed and activation are needed.
                <br />
                <br />
                Use in abundance jars to amplify financial and career energy.
                <br />
                <br />
                Cinnamon is potent: intention should be clear and focused.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cinnamon</h2>

          <p>
            Add Cinnamon to prosperity blends and abundance jars.
          </p>

          <p>
            Use in Fire-aligned rituals focused on rapid manifestation.
          </p>

          <p>
            Incorporate into attraction workings where warmth and magnetism
            are desired.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cinnamon is used when acceleration is required. It amplifies existing
            intention and increases energetic heat.
          </p>

          <p>
            It pairs well with Sun and Mars rituals centered on visibility,
            confidence, and decisive action.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cinnamon Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Cinnamon was once considered more valuable than gold in certain
            historical trade routes. It was offered in temples and used in
            sacred incense blends.
          </p>

          <p>
            Across cultures, its warmth became associated with prosperity,
            vitality, and sacred fire.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cinnamon contains cinnamaldehyde and other aromatic compounds
            responsible for its warming and stimulating properties.
          </p>

          <p>
            Chemical Constituents: Cinnamaldehyde, Eugenol, Volatile Oils
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
            Cinnamon may cause irritation to skin or mucous membranes in
            concentrated form. Use essential oils with caution. If pregnant,
            nursing, managing a condition, or taking medication, consult a
            trusted professional source before ingesting any herb. This
            grimoire is written for spiritual and educational purposes and
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