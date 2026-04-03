// app/grimoire/herbs/lotus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LotusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lotus" subtitle="Nelumbo nucifera">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LOTUS-HERO-IMAGE-URL"
              alt="Lotus"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lotus rises unstained: rooted in mud, crowned in light, and
              untouched by what it grows through.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lotus, botanically known as Nelumbo nucifera, is an aquatic plant
            native to Asia and long revered across Hindu, Buddhist, and
            Egyptian traditions. Its blossoms rise above the water on tall
            stems, opening clean and radiant despite growing from muddy depths.
          </p>

          <p>
            In spiritual symbolism, Lotus represents purity, enlightenment,
            rebirth, and transcendence. It is one of the most sacred plants in
            global mystical systems.
          </p>

          <p>
            In witchcraft, Lotus is used for spiritual elevation, higher
            consciousness, devotion, meditation, and sacred rebirth. It is
            chosen when the goal is transcendence rather than transformation
            through force.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-BRAHMA-ROUTE">Brahma</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-KUAN-YIN-ROUTE">Kuan Yin</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
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
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">
                  Selenite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lotus in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LOTUS-WITCHCRAFT-IMAGE-URL"
              alt="Lotus in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Spiritual elevation, enlightenment work, meditation,
                devotion, sacred rebirth, purification
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual stagnation, loss of faith, emotional heaviness,
                energetic impurity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional calming infusions, ceremonial use, mild relaxation
                support in herbal preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lotus is for transcendence, not force.
                <br />
                <br />
                Use during meditation to focus on spiritual ascent and clarity.
                <br />
                <br />
                Add to altar offerings when working with deities of purity,
                enlightenment, or rebirth.
                <br />
                <br />
                Pair with Crown Chakra focus when seeking higher awareness and
                spiritual alignment.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Lotus</h2>

          <p>
            Lotus petals can be used in incense blends, ritual baths, altar
            offerings, and meditation sachets.
          </p>

          <p>
            Place dried petals on an altar dedicated to spiritual growth or
            devotional practice.
          </p>

          <p>
            Burn as incense during deep meditation or spiritual study.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lotus is a practical choice when you are navigating personal
            evolution and seeking clarity above emotional turbulence.
          </p>

          <p>
            Work with it during spiritual milestones, initiations, or when
            recommitting to higher purpose.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LOTUS-FOLKLORE-IMAGE-URL"
              alt="Lotus Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Lotus appears prominently in Hindu and Buddhist cosmology, often
            depicted beneath deities and associated with divine birth and
            enlightenment.
          </p>

          <p>
            Its symbolism spans cultures as a representation of purity emerging
            from chaos, making it one of the most universally sacred plants in
            spiritual history.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Lotus contains plant compounds traditionally referenced in calming
            and ceremonial preparations.
          </p>

          <p>
            Common Constituents: Flavonoids, Alkaloids, Tannins, Volatile Oils
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
            Lotus preparations should be sourced carefully and used in
            moderation. If pregnant, nursing, managing a condition, or taking
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