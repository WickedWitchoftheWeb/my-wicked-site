// app/grimoire/herbs/ginger/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GingerPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ginger" subtitle="Zingiber officinale">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-GINGER-HERO-IMAGE-URL"
              alt="Ginger"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Ginger ignites momentum: it fuels courage, accelerates results,
              and heats intention until it moves.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Ginger is a rhizome cultivated throughout Asia, Africa, and the
            Caribbean for thousands of years. It is widely used in culinary,
            medicinal, and traditional household practice.
          </p>

          <p>
            In practical tradition, Ginger is known for its warming and
            stimulating qualities. In spiritual work, that heat translates into
            speed, courage, and energized intention.
          </p>

          <p>
            In witchcraft, Ginger is used for success, acceleration, protection,
            passion, and strengthening will. It is often chosen when the goal is
            to move a situation forward quickly.
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
                <Link href="PASTE-AGNI-DEITY-ROUTE">Agni</Link>,{" "}
                <Link href="PASTE-MARS-DEITY-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-SEKHMET-DEITY-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-THOR-DEITY-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-OGUN-DEITY-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-DURGA-DEITY-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-PELE-DEITY-ROUTE">Pele</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>,{" "}
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
                <Link href="/grimoire/chakras/02-sacral-chakra">Sacral Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Ginger in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GINGER-WITCHCRAFT-IMAGE-URL"
              alt="Ginger in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Success, acceleration, courage, passion, protection, confidence,
                vitality
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Stagnation, hesitation, fear, sluggish results, low energy
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, circulatory support, warming tonic use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Ginger is a speed herb. Use it when momentum has stalled and the
                work needs heat.
                <br />
                <br />
                In success rites, it supports rapid movement toward a goal.
                <br />
                <br />
                In courage work, pair Ginger with Solar Plexus focus and keep
                the intention bold and direct.
                <br />
                <br />
                For passion work, combine it with Sacral focus and let the heat
                build naturally rather than forcing the outcome.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Ginger</h2>

          <p>
            Ginger can be worked with fresh or dried. It is commonly used in
            candle dressing blends, success jars, and protective charm work.
          </p>

          <p>
            For acceleration work, add Ginger to a focused spell when quick
            results are appropriate and aligned.
          </p>

          <p>
            For courage and vitality, incorporate Ginger into a ritual tea or
            sachet and anchor the intention in action rather than impulse.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Ginger is a practical choice when you need decisive forward motion.
            Use it when opportunities must be seized or when hesitation has
            delayed necessary action.
          </p>

          <p>
            It is also useful when vitality feels low. Ginger restores heat to
            the field so your next move comes from strength rather than fatigue.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GINGER-FOLKLORE-IMAGE-URL"
              alt="Ginger Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Ginger appears in Asian and Middle Eastern traditions as a warming
            and strengthening root. It has long been valued for its energizing
            and invigorating qualities.
          </p>

          <p>
            In modern witchcraft, Ginger is commonly used in success and
            acceleration work. The current is clear: ignite, act, move forward.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Ginger is often described as containing aromatic compounds and
            plant components associated with its warming and stimulating
            properties. This section is the place to list additional nutritional
            components such as vitamins and minerals when applicable to the
            herb being profiled.
          </p>

          <p>Common Constituents: Aromatic Compounds, Plant Oils</p>
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
            Ginger is commonly used in culinary amounts. Larger medicinal
            amounts may interact with certain medications or conditions. If
            pregnant, nursing, managing a condition, or taking medication,
            check safety details with a trusted professional source before
            ingesting any herb. This grimoire is written for spiritual and
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