// app/grimoire/herbs/patchouli/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PatchouliPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Patchouli" subtitle="Pogostemon cablin">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PATCHOULI-HERO-IMAGE-URL"
              alt="Patchouli"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Patchouli roots the spell: draw abundance, deepen desire, and
              anchor your power into the earth.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Patchouli is a fragrant herb native to Southeast Asia, widely known
            for its deep, earthy scent. Its leaves are dried and distilled into
            oil that has become iconic in perfumery and spiritual practice.
          </p>

          <p>
            In traditional herbal use, Patchouli has been valued for its
            grounding aroma and skin-supporting preparations. Its scent is rich,
            musky, and unmistakably rooted.
          </p>

          <p>
            In witchcraft, Patchouli is used for prosperity, attraction,
            grounding, sensuality, protection, and money work. It is chosen when
            the goal is to draw something tangible into physical form.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-GAIA-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/06-saturn">
                  Saturn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
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
                <Link href="/grimoire/crystals-stones/pyrite">
                  Pyrite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Patchouli in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PATCHOULI-WITCHCRAFT-IMAGE-URL"
              alt="Patchouli in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, money magic, attraction, sensuality, grounding,
                manifestation, protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Financial instability, weak boundaries, scattered energy,
                insecurity, lack of focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional aromatic support, skin applications, grounding scent
                therapy
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Patchouli anchors intention into the physical world.
                <br />
                <br />
                Add to money jars when building long-term stability.
                <br />
                <br />
                Use as a base note in attraction oils to deepen magnetism.
                <br />
                <br />
                Pair with Root Chakra focus when grounding prosperity and
                personal power.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Patchouli</h2>

          <p>
            Patchouli can be used as dried leaf, incense, or essential oil in
            prosperity and grounding rituals.
          </p>

          <p>
            Add to spell jars and sachets for long-term financial intention.
          </p>

          <p>
            Anoint candles and ritual tools when drawing abundance or anchoring
            manifestation into form.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Patchouli is a practical ally when your magic needs weight and
            substance. It supports slow, steady building rather than sudden
            flashes.
          </p>

          <p>
            Work with it during financial planning, attraction rituals, and any
            spell meant to take root and endure.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PATCHOULI-FOLKLORE-IMAGE-URL"
              alt="Patchouli Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Patchouli gained global recognition through trade routes and later
            became culturally associated with wealth, sensuality, and
            countercultural spiritual movements.
          </p>

          <p>
            In modern witchcraft, it is one of the most common herbs in money
            and attraction work: earth, scent, and substance combined.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Patchouli leaves contain aromatic compounds responsible for their
            deep and lasting fragrance.
          </p>

          <p>
            Common Constituents: Patchoulol, Sesquiterpenes, Volatile Oils
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
            Patchouli essential oil is highly concentrated and should be
            diluted before topical use. If pregnant, nursing, managing a
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