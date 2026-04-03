// app/grimoire/herbs/paprika/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PaprikaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Paprika" subtitle="Capsicum annuum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PAPRIKA-HERO-IMAGE-URL"
              alt="Paprika"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Paprika brings heat with sweetness: energize the work, attract
              success, and keep your fire steady.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Paprika is a ground spice made from dried peppers, typically from
            varieties of Capsicum annuum. Depending on the pepper type and how
            it is processed, paprika can range from mild and sweet to smoky and
            hot.
          </p>

          <p>
            In culinary tradition, Paprika is used to add warmth, color, and
            depth to food. Energetically, its red tone and spicy current
            connect it to activation, confidence, and passion.
          </p>

          <p>
            In witchcraft, Paprika is used for power, protection, courage,
            attraction, and success. It is chosen when the goal is amplifying
            personal fire without tipping into chaos.
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
                <Link href="PASTE-SEKHMET-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-PELÉ-ROUTE">Pelé</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
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
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
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
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
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
          <h2 className="grimoire-subheading">Paprika in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PAPRIKA-WITCHCRAFT-IMAGE-URL"
              alt="Paprika in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Courage, confidence, power work, attraction spells, protection,
                motivation, success rituals
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Low energy, hesitation, fear, stagnation, weak boundaries,
                energetic dullness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional warming preparations, circulatory stimulation,
                digestion support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Paprika adds bold heat without the sharp bite of hotter
                peppers.
                <br />
                <br />
                Sprinkle into success jars to energize outcomes.
                <br />
                <br />
                Add to protection blends when strengthening personal power.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when building confidence
                and steady will.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Paprika</h2>

          <p>
            Paprika can be added to spell jars, candle dressings, and success
            powders to bring warmth and momentum.
          </p>

          <p>
            Use in cooking with intention when crafting meals for confidence and
            motivation.
          </p>

          <p>
            Add to floor washes in small amounts when clearing stagnation and
            restoring energy to the home.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Paprika is a practical ally when you need a push that is bold but
            controlled. It supports decisive energy without forcing reckless
            action.
          </p>

          <p>
            Work with it during launches, interviews, competitions, and any
            moment where confidence and warmth matter.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PAPRIKA-FOLKLORE-IMAGE-URL"
              alt="Paprika Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Paprika became especially associated with Central and Eastern
            European cuisine and identity, valued for color, warmth, and depth.
          </p>

          <p>
            In modern witchcraft, it is often used as a gentler fire spice for
            power and success workings.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Paprika contains pigments and plant compounds associated with its
            color and traditional warming qualities.
          </p>

          <p>
            Common Constituents: Capsaicinoids, Carotenoids, Vitamin C,
            Flavonoids
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
            Paprika and pepper powders may irritate sensitive stomachs and can
            cause discomfort if used excessively. Avoid contact with eyes and
            wash hands after handling. If pregnant, nursing, managing a
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
