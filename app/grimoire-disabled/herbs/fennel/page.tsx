// app/grimoire/herbs/fennel/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function FennelPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Fennel" subtitle="Foeniculum vulgare">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-FENNEL-HERO-IMAGE-URL"
              alt="Fennel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Fennel sharpens sight and steadies will: it clears illusion,
              protects the threshold, and restores inner strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Fennel is a fragrant plant native to the Mediterranean and widely
            cultivated for both culinary and traditional use. Its seeds and
            leaves have long appeared in food, teas, and household practice.
          </p>

          <p>
            In practical tradition, Fennel is often discussed in the context of
            digestive comfort and warming support. In spiritual work, that
            clarity and warmth translate into protection, strength, and
            sharp perception.
          </p>

          <p>
            In witchcraft, Fennel is used for protection, warding, courage, and
            psychic clarity. It is often chosen when the goal is to guard a
            space or clear illusion from the mind.
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
                <Link href="PASTE-APOLLO-DEITY-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-HECATE-DEITY-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-ATHENA-DEITY-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-ODIN-DEITY-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-FREYR-DEITY-ROUTE">Freyr</Link>,{" "}
                <Link href="PASTE-SEKHMET-DEITY-ROUTE">Sekhmet</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Fennel in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-FENNEL-WITCHCRAFT-IMAGE-URL"
              alt="Fennel in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, warding, clarity, courage, psychic defense,
                strengthening boundaries
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Illusion, envy, hostile intention, psychic intrusion, scattered
                focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive comfort, traditional warming support, aromatic clarity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Fennel is often used in warding blends to protect a home or
                ritual space.
                <br />
                <br />
                In psychic defense work, it sharpens perception and reinforces
                boundaries so influence cannot easily slip through.
                <br />
                <br />
                For courage rites, pair Fennel with Solar Plexus focus and keep
                the intention direct: see clearly, act steadily.
                <br />
                <br />
                In illusion-breaking work, it supports discernment without
                paranoia.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Fennel</h2>

          <p>
            Fennel can be worked with as dried seed in protection sachets,
            warding jars, and candle dressing blends. It is commonly used when
            the goal is to reinforce a threshold or clarify intention.
          </p>

          <p>
            For warding, add Fennel to a protection blend and place it near
            entrances. Keep the intention clear and focused.
          </p>

          <p>
            For clarity work, incorporate Fennel into a ritual tea or bath and
            focus on dissolving illusion while strengthening perception.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Fennel is a practical choice when you need protection that does not
            feel heavy. Use it when the goal is clear sight and confident
            boundaries rather than aggressive defense.
          </p>

          <p>
            It is also useful when discernment is required. Fennel steadies the
            mind so your next move comes from clarity rather than fear.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-FENNEL-FOLKLORE-IMAGE-URL"
              alt="Fennel Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Mediterranean folklore, Fennel was associated with strength,
            clarity, and warding. It was sometimes placed in doorways or carried
            for protection against ill intent.
          </p>

          <p>
            In modern witchcraft, Fennel is commonly used in protective and
            clarity-focused rites. The current is steady and bright: guard the
            threshold and see clearly.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Fennel is often described as containing aromatic essential oils and
            plant compounds that contribute to its traditional warming and
            digestive reputation. This section is the place to list additional
            nutritional components such as vitamins and minerals when applicable
            to the herb being profiled.
          </p>

          <p>Common Constituents: Aromatic Oils, Plant Compounds</p>
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
            Fennel is generally used in culinary amounts. Larger amounts may
            cause digestive discomfort in some individuals. If pregnant,
            nursing, managing a condition, or taking medication, check safety
            details with a trusted professional source before ingesting any
            herb. This grimoire is written for spiritual and educational
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