// app/grimoire/herbs/cayenne-pepper/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CayennePepperPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cayenne Pepper" subtitle="Capsicum annuum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CAYENNE-HERO-IMAGE-URL"
              alt="Cayenne Pepper"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cayenne ignites without apology: it clears stagnation, demands
              movement, and burns through resistance.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cayenne Pepper is a fiery spice derived from dried chili peppers.
            Native to the Americas, it has been used for centuries in culinary,
            medicinal, and ceremonial traditions.
          </p>

          <p>
            Known for its heat, Cayenne stimulates circulation and energy. It
            has long been associated with activation, protection, and forceful
            clearing.
          </p>

          <p>
            In witchcraft, Cayenne is worked with for protection, speed,
            uncrossing, banishing negativity, and igniting stagnant situations.
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
                <Link href="PASTE-MARS-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-PELE-ROUTE">Pele</Link>,{" "}
                <Link href="PASTE-SHANGO-ROUTE">Shango</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
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
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Cayenne Pepper in Witchcraft</h2>


        <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CAYENNE-WITCHCRAFT-IMAGE-URL"
            alt="Cayenne Pepper in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, banishing, speed work, uncrossing, motivation,
                igniting action
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Negativity, stagnation, psychic intrusion, lethargy, lingering
                attachments
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Circulation support, warming stimulant, metabolic activation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Use Cayenne in protection powders to create a sharp energetic
                boundary.
                <br />
                <br />
                In uncrossing work, combine with cleansing herbs to burn through
                stagnant influence.
                <br />
                <br />
                In motivation rituals, dress candles with Cayenne to accelerate
                results.
                <br />
                <br />
                This is a forceful herb. Use it intentionally, not casually.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cayenne Pepper</h2>

          <p>
            Sprinkle small amounts in protection blends when speed and strength
            are required.
          </p>

          <p>
            Add to candle dressings in rituals focused on rapid movement or
            decisive action.
          </p>

          <p>
            Use sparingly in banishing work where sharp disruption is needed.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cayenne is used when gentler herbs are not enough. It forces motion
            and burns through hesitation.
          </p>

          <p>
            It pairs well with Fire element rituals and Mars-focused workings
            centered on strength and direct action.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cayenne Pepper Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Indigenous cultures of the Americas used chili peppers for both
            protection and vitality. The heat symbolized strength, cleansing,
            and resilience.
          </p>

          <p>
            Modern witchcraft carries forward Cayenne’s reputation as a powerful
            banishing and activating herb.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cayenne contains capsaicin and other plant compounds responsible for
            its heat and stimulating properties.
          </p>

          <p>
            Chemical Constituents: Capsaicin, Carotenoids, Flavonoids
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
            Cayenne is extremely hot and may cause irritation to skin, eyes,
            and digestive tract. Use with caution and avoid sensitive areas. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a trusted professional source before ingesting any herb.
            This grimoire is written for spiritual and educational purposes and
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
            <Link href="/grimoire">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}