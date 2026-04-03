// app/grimoire/herbs/mustard/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MustardPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mustard" subtitle="Sinapis alba · Brassica nigra">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-MUSTARD-HERO-IMAGE-URL"
              alt="Mustard"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Mustard ignites the spark: awaken courage, cut through doubt,
              and act without hesitation.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Mustard refers to several species within the Brassicaceae family,
            most commonly white mustard and black mustard. The tiny seeds carry
            a sharp, warming quality that has made them valuable in culinary
            and medicinal traditions.
          </p>

          <p>
            In traditional herbalism, Mustard has been used in warming
            preparations and stimulating applications. Its heat and intensity
            give it a strong activating reputation.
          </p>

          <p>
            In witchcraft, Mustard is used for protection, courage,
            motivation, breaking stagnation, and warding. It is chosen when the
            goal is swift action and fiery momentum.
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
                <Link href="PASTE-MARS-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-SEKHMET-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>
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
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
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
          <h2 className="grimoire-subheading">Mustard in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MUSTARD-WITCHCRAFT-IMAGE-URL"
              alt="Mustard in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection spells, courage, breaking stagnation, energy
                activation, warding, momentum building
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Fear, hesitation, lethargy, spiritual attack, lingering
                negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional warming preparations, stimulating poultices,
                digestive stimulation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Mustard works best when decisive action is needed.
                <br />
                <br />
                Sprinkle around property lines for protective boundaries.
                <br />
                <br />
                Add to protection jars to intensify defensive energy.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when strengthening
                confidence and initiative.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Mustard
          </h2>

          <p>
            Mustard seeds can be added to charm bags, protection jars, and
            boundary rituals.
          </p>

          <p>
            Incorporate into floor washes focused on clearing fear and
            restoring courage.
          </p>

          <p>
            Place in small bowls near entrances to strengthen warding energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Mustard is a practical ally when motivation is low and decisive
            energy is required. It supports bold movement rather than passive
            waiting.
          </p>

          <p>
            Work with it during new ventures, protection rituals, or when
            reclaiming personal initiative.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MUSTARD-FOLKLORE-IMAGE-URL"
              alt="Mustard Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Mustard seeds have appeared in various cultural traditions as
            symbols of faith, growth, and power emerging from small beginnings.
          </p>

          <p>
            In folk magic, seeds were sometimes scattered for protection and to
            disrupt harmful spirits.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Mustard seeds contain pungent compounds responsible for their heat
            and stimulating qualities.
          </p>

          <p>
            Common Constituents: Glucosinolates, Sinigrin, Allyl Isothiocyanate
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
            Mustard preparations may irritate the skin and digestive tract if
            used excessively. If pregnant, nursing, managing a condition, or
            taking medication, consult a qualified professional before ingesting
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