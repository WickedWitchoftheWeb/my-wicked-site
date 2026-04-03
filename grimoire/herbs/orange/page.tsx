// app/grimoire/herbs/orange/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OrangePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Orange" subtitle="Citrus sinensis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ORANGE-HERO-IMAGE-URL"
              alt="Orange"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Orange carries sunlight in its skin: brighten the mood, draw
              prosperity, and sweeten every working.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Orange is a citrus tree cultivated across warm climates worldwide.
            Its fruit and peel have long been valued for their fragrance,
            flavor, and bright symbolic associations with joy and abundance.
          </p>

          <p>
            In traditional herbal and culinary practice, Orange peel is used in
            teas, tinctures, and aromatic preparations. Its uplifting scent has
            made it a staple in perfumes and household blends.
          </p>

          <p>
            In witchcraft, Orange is used for prosperity, happiness,
            attraction, confidence, and success. It is chosen when the goal is
            warmth, magnetism, and forward momentum.
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
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-HELIOS-ROUTE">Helios</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-SOL-ROUTE">Sol</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
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
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Orange in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ORANGE-WITCHCRAFT-IMAGE-URL"
              alt="Orange in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, joy, attraction, confidence, success, mood lifting
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Gloom, stagnation, low confidence, creative blocks, financial
                slowdown
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, aromatic teas, uplifting
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Dry Orange peel and add to prosperity jars for steady
                abundance.
                <br />
                <br />
                Use in floor washes to brighten the energy of a home.
                <br />
                <br />
                Add to attraction blends when increasing personal magnetism.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when strengthening joy and
                self-assurance.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Orange</h2>

          <p>
            Orange peel can be dried and used in spell jars, incense blends,
            and prosperity bowls.
          </p>

          <p>
            Incorporate into teas and ritual baths focused on happiness and
            forward movement.
          </p>

          <p>
            Place fresh slices on an altar to symbolize sweetness and radiant
            success.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Orange is a practical ally when morale needs lifting and momentum
            feels stalled.
          </p>

          <p>
            Work with it during prosperity rites, creative launches, and any
            ritual meant to restore warmth and enthusiasm.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ORANGE-FOLKLORE-IMAGE-URL"
              alt="Orange Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Citrus fruits have long symbolized abundance and blessing in
            Mediterranean and Asian traditions. Their bright color and scent
            connected them to the Sun and to good fortune.
          </p>

          <p>
            In modern witchcraft, Orange remains a staple in prosperity and joy
            work, representing sweetness earned and light carried forward.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Orange peel contains aromatic oils and plant compounds responsible
            for its fragrance and traditional applications.
          </p>

          <p>
            Common Constituents: Limonene, Flavonoids, Vitamin C, Volatile Oils
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
            Citrus oils can increase skin sensitivity to sunlight when applied
            topically. If pregnant, nursing, managing a condition, or taking
            medication, consult a qualified professional before ingesting
            herbal preparations. This grimoire is written for spiritual and
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