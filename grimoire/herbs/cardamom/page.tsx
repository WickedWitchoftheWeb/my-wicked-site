// app/grimoire/herbs/cardamom/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CardamomPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cardamom" subtitle="Elettaria cardamomum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CARDAMOM-HERO-IMAGE-URL"
              alt="Cardamom"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cardamom is warm sweetness with intention: it draws love, sharpens
              clarity, and awakens desire without chaos.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cardamom is an aromatic spice native to South Asia and widely used
            in culinary, medicinal, and ceremonial traditions. Its warm,
            slightly sweet scent has long been associated with vitality and
            attraction.
          </p>

          <p>
            Historically prized along spice trade routes, Cardamom carried
            symbolic weight as both a luxury and a stimulant of warmth and
            openness.
          </p>

          <p>
            In witchcraft, Cardamom is worked with for love, passion,
            prosperity, communication, and energetic activation.
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
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-ROUTE">Venus</Link>,{" "}
                <Link href="PASTE-KAMA-ROUTE">Kama</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-FREYA-ROUTE">Freya</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Cardamom in Witchcraft</h2>

             <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CARDAMOM-WITCHCRAFT-IMAGE-URL"
            alt="Cardamom in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, attraction, passion, prosperity, vitality, communication,
                confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional coldness, stagnation, blocked desire, creative dullness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive warmth, aromatic stimulation, traditional vitality
                support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Cardamom to attraction blends when you want warmth that feels
                inviting rather than overwhelming.
                <br />
                <br />
                In Sacral Chakra work, it supports healthy desire and creative
                flow.
                <br />
                <br />
                Pair with Jupiter-focused rituals for expansive prosperity and
                joyful abundance.
                <br />
                <br />
                Its strength lies in balanced stimulation: spark without chaos.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cardamom</h2>

          <p>
            Use Cardamom in love sachets or prosperity blends to enhance warmth
            and attraction.
          </p>

          <p>
            Incorporate it into ritual baths focused on passion, vitality, or
            renewed confidence.
          </p>

          <p>
            Add to candle dressings when activating desire or creative flow.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cardamom is used when energy needs gentle ignition. It awakens warmth
            without forcing intensity.
          </p>

          <p>
            It pairs well with Fire element work and rituals of joyful expansion.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cardamom Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Cardamom traveled through ancient trade routes as both spice and
            symbol of luxury and vitality. It became associated with warmth,
            hospitality, and sensual enjoyment.
          </p>

          <p>
            In modern witchcraft, this legacy translates into attraction,
            prosperity, and activation work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cardamom contains essential oils such as cineole and terpinyl acetate,
            contributing to its aromatic and traditional herbal qualities.
          </p>

          <p>
            Chemical Constituents: Cineole, Terpinyl Acetate, Essential Oils
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
            Cardamom is widely used as a culinary spice but may cause allergic
            reactions in sensitive individuals. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before ingesting any herb. This grimoire is written for
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