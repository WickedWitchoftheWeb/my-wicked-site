// app/grimoire/herbs/saffron/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SaffronPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Saffron" subtitle="Crocus sativus">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-SAFFRON-HERO-IMAGE-URL"
              alt="Saffron"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Saffron is liquid sunlight: wealth, joy, and sacred desire woven in gold.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Saffron is derived from the delicate red stigmas of Crocus sativus.
            Each flower yields only a few threads, making it one of the most
            precious and labor intensive spices in the world.
          </p>

          <p>
            In traditional herbal and culinary practice, Saffron has been
            associated with mood uplift, vitality, and luxurious nourishment.
            Its golden hue carries strong symbolic ties to light and prosperity.
          </p>

          <p>
            In witchcraft, Saffron is used for abundance, success, attraction,
            joy, solar magic, and sacred sensuality. It is chosen when the goal
            is to elevate energy and draw blessings with brilliance.
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
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-SOL-ROUTE">Sol</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-RA-ROUTE">Ra</Link>
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
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Saffron in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-SAFFRON-WITCHCRAFT-IMAGE-URL"
              alt="Saffron in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Abundance, success, joy, attraction, prosperity, solar rituals,
                confidence, sacred sensuality
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Low mood, stagnation, financial lack, self doubt, dimmed
                confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional mood support, vitality tonics, culinary enrichment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add a few threads to abundance jars when invoking prosperity.
                <br />
                <br />
                Infuse into ritual baths to amplify attraction and joy.
                <br />
                <br />
                Place on solar altars during success workings.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when reclaiming personal
                power and visibility.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Saffron</h2>

          <p>
            Use sparingly in prosperity spells due to its potency and symbolic
            value.
          </p>

          <p>
            Add to ritual food offerings honoring solar or wealth deities.
          </p>

          <p>
            Steep a small infusion before abundance or attraction rituals to
            elevate intention.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Saffron is a practical ally when you want to raise the frequency of
            a working. It symbolizes rarity, value, and luminous success.
          </p>

          <p>
            Work with it during wealth rituals, celebrations of achievement,
            and moments when confidence must shine.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-SAFFRON-FOLKLORE-IMAGE-URL"
              alt="Saffron Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In ancient cultures, Saffron was used to dye royal garments and
            sacred robes, symbolizing wealth and divine light.
          </p>

          <p>
            Its golden color has long linked it with solar power, joy, and
            exalted status in ritual traditions across continents.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Saffron contains compounds traditionally associated with mood and
            vitality support.
          </p>

          <p>
            Common Constituents: Crocin, Safranal, Picrocrocin
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
            Saffron should be used in small quantities. Excessive intake may
            not be suitable for certain conditions. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting herbal preparations. This grimoire is
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