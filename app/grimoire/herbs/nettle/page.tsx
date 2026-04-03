// app/grimoire/herbs/nettle/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function NettlePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Nettle" subtitle="Urtica dioica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-NETTLE-HERO-IMAGE-URL"
              alt="Nettle"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Nettle teaches fierce protection: stand your ground, feed your
              strength, and let your boundaries sting.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Nettle is a wild, nutrient-dense plant found across Europe, Asia,
            and North America. Known for its sting, it carries a long history in
            both folk medicine and practical survival traditions.
          </p>

          <p>
            In traditional herbalism, Nettle is associated with mineral support,
            vitality, and strengthening tonics. Once dried or cooked, its sting
            disappears, revealing a nourishing and resilient plant ally.
          </p>

          <p>
            In witchcraft, Nettle is used for protection, warding, strength,
            curse breaking, and resilience. It is chosen when the goal is
            fortified boundaries and grounded power.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-THOR-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-MORRIGAN-ROUTE">The Morrigan</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>
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
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
                <Link href="/grimoire/astrology/02-planets/08-pluto">
                  Pluto
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">
                  Hematite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
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
          <h2 className="grimoire-subheading">Nettle in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-NETTLE-WITCHCRAFT-IMAGE-URL"
              alt="Nettle in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, warding, curse breaking, strength building,
                resilience, empowerment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Harmful intent, psychic attack, weakness, energetic invasion,
                boundary crossing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Mineral-rich tonics, traditional allergy support, nourishing
                infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Nettle defends without apology.
                <br />
                <br />
                Add to protection jars when reinforcing boundaries.
                <br />
                <br />
                Sprinkle around your space to deter unwanted energy.
                <br />
                <br />
                Pair with Root Chakra focus when strengthening grounding and
                physical resilience.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Nettle</h2>

          <p>
            Nettle can be worked with dried in protection sachets and warding
            blends.
          </p>

          <p>
            Brew as a nourishing infusion to symbolically strengthen inner
            resolve.
          </p>

          <p>
            Incorporate into ritual baths focused on reclaiming power and
            clearing hostile energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Nettle is a practical ally when you need to reclaim space and
            reinforce personal boundaries.
          </p>

          <p>
            Work with it during protection rites, after conflict, or when
            strengthening your physical and energetic foundation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-NETTLE-FOLKLORE-IMAGE-URL"
              alt="Nettle Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Nettle has appeared in European folklore as both a protector and a
            test of endurance. Its sting was seen as a warning and a guard.
          </p>

          <p>
            In modern witchcraft, it remains a symbol of defensive strength and
            resilient survival.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Nettle is rich in minerals and plant compounds traditionally
            associated with nourishment and vitality.
          </p>

          <p>
            Common Constituents: Iron, Calcium, Magnesium, Silica,
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
            Fresh Nettle can irritate the skin. Use gloves when harvesting.
            If pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and
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