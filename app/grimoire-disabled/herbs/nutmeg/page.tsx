// app/grimoire/herbs/nutmeg/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function NutmegPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Nutmeg" subtitle="Myristica fragrans">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-NUTMEG-HERO-IMAGE-URL"
              alt="Nutmeg"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Nutmeg stirs hidden fortune: warm the current, draw prosperity,
              and awaken subtle power.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Nutmeg is the aromatic seed of a tropical evergreen tree native to
            the Spice Islands of Indonesia. Long prized in global trade, it has
            carried associations with wealth, luxury, and protection for
            centuries.
          </p>

          <p>
            In traditional herbal and culinary practice, Nutmeg is known for
            its warming and stimulating qualities. Its rich scent and flavor
            make it a powerful addition to blends meant to energize and uplift.
          </p>

          <p>
            In witchcraft, Nutmeg is used for prosperity, luck, confidence,
            psychic enhancement, and protection. It is chosen when the goal is
            attraction of opportunity and subtle amplification of personal
            power.
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
                <Link href="/grimoire/elements/fire">Fire</Link>,{" "}
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-FORTUNA-ROUTE">Fortuna</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-JUPITER-ROUTE">Jupiter</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
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
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Nutmeg in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-NUTMEG-WITCHCRAFT-IMAGE-URL"
              alt="Nutmeg in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, luck drawing, confidence, attraction spells,
                psychic enhancement, success rituals
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Financial stagnation, self-doubt, missed opportunity,
                hesitation, energetic dullness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, warming tonics, stimulating
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Carry a whole Nutmeg for luck and prosperity.
                <br />
                <br />
                Add grated Nutmeg to money jars to stimulate financial flow.
                <br />
                <br />
                Use in confidence blends before interviews or negotiations.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when strengthening personal
                power and bold action.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Nutmeg</h2>

          <p>
            Nutmeg can be used whole, grated, or powdered in spell jars,
            prosperity bowls, and charm bags.
          </p>

          <p>
            Sprinkle in ritual candles focused on success and expansion.
          </p>

          <p>
            Keep a whole Nutmeg in your wallet as a symbolic charm for
            sustained fortune.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Nutmeg is a practical ally when opportunity is near but momentum
            needs encouragement.
          </p>

          <p>
            Work with it when seeking financial growth, career advancement, or
            renewed confidence in your own potential.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-NUTMEG-FOLKLORE-IMAGE-URL"
              alt="Nutmeg Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Nutmeg became one of the most sought-after spices in global trade,
            symbolizing wealth and influence. In some folk traditions, it was
            carried for luck and protection.
          </p>

          <p>
            In modern witchcraft, it remains closely tied to prosperity magic
            and personal empowerment rites.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Nutmeg contains aromatic compounds responsible for its scent and
            warming properties.
          </p>

          <p>
            Common Constituents: Myristicin, Elemicin, Eugenol, Volatile Oils
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
            Nutmeg should be used in moderation. Large amounts may cause
            adverse effects. If pregnant, nursing, managing a condition, or
            taking medication, consult a qualified professional before
            ingesting herbal preparations. This grimoire is written for
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