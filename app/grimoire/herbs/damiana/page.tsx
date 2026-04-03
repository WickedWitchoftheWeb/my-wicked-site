// app/grimoire/herbs/damiana/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function DamianaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Damiana" subtitle="Turnera diffusa">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-DAMIANA-HERO-IMAGE-URL"
              alt="Damiana"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Damiana carries a sensual current: it warms desire, strengthens
              confidence, and calls the body back into pleasure.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Damiana is a shrub native to Mexico, Central America, and parts of
            the Caribbean. It has long been used in traditional practice as a
            plant associated with mood, vitality, and sensual wellbeing.
          </p>

          <p>
            In practical tradition, Damiana is often prepared as a tea or
            tincture and discussed for its warming, uplifting qualities. In
            spiritual work, that warmth translates into attraction, confidence,
            and embodied pleasure.
          </p>

          <p>
            In witchcraft, Damiana is used when you want to awaken desire and
            strengthen magnetism. It is often chosen for love work, lust
            workings, confidence rites, and any spell that benefits from a
            warmer, more receptive energetic tone.
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
                <Link href="PASTE-APHRODITE-DEITY-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-FREYJA-DEITY-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-HATHOR-DEITY-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-ISHTAR-DEITY-ROUTE">Ishtar</Link>,{" "}
                <Link href="PASTE-OSHUN-DEITY-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-XOCHIPILLI-DEITY-ROUTE">Xochipilli</Link>,{" "}
                <Link href="PASTE-XOCHIQUETZAL-DEITY-ROUTE">Xochiquetzal</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>,{" "}
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
                <Link href="/grimoire/chakras/02-sacral-chakra">Sacral Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/ruby">Ruby</Link>,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
                <Link href="/grimoire/crystals-stones/rose-quartz">Rose Quartz</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Damiana in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DAMIANA-WITCHCRAFT-IMAGE-URL"
              alt="Damiana in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, lust, attraction, confidence, pleasure, creativity,
                passion, vitality
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Low desire, shame, emotional numbness, insecurity, blocked
                creativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional mood support, warming tonic use, libido support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Damiana is an awakener. It is often used when desire feels muted
                or confidence has dimmed.
                <br />
                <br />
                In love work, it sweetens the current without making it passive.
                It supports magnetism that comes from embodiment and self-trust.
                <br />
                <br />
                In lust work, Damiana helps the body feel present again. Pair it
                with Sacral Chakra focus and keep the intention clear.
                <br />
                <br />
                For confidence rites, use it as a warming push: boldness,
                pleasure, and the courage to be seen.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Damiana</h2>

          <p>
            Damiana can be worked with as dried leaf for charm bags, jar work,
            candle dressing blends, and sensual ritual mixes. It is commonly
            used when the goal is attraction and embodied confidence.
          </p>

          <p>
            For love work, combine Damiana with sweetening herbs and stones that
            support openness. Use it to dress candles or reinforce a
            relationship-focused working.
          </p>

          <p>
            For lust and pleasure work, build a blend with Sacral Chakra intent
            and keep the spell simple: awaken, invite, and allow.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Damiana is a practical choice when you want to return to pleasure
            without force. Use it when desire has been shut down by stress,
            shame, grief, or disconnection.
          </p>

          <p>
            It is also useful when confidence needs warmth. Damiana brings your
            energy back into your body so your next move comes from desire,
            not defense.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DAMIANA-FOLKLORE-IMAGE-URL"
              alt="Damiana Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Damiana is strongly tied to Mexican folk tradition, where it has long
            been associated with love, desire, and vitality. It appears in
            household preparations and traditional blends used to warm the body
            and lift the spirit.
          </p>

          <p>
            In modern witchcraft, Damiana is commonly used in attraction work,
            lust rites, and confidence spells. The current is direct: warmth,
            magnetism, and an embodied yes.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Damiana is often described as containing aromatic plant compounds
            associated with its traditional warming and uplifting reputation.
            This section is the place to list additional nutritional components
            such as vitamins and minerals when applicable to the herb being
            profiled.
          </p>

          <p>Common Constituents: Aromatic Oils, Plant Compounds</p>
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
            Damiana is generally used in traditional preparations and is often
            taken as tea. If pregnant, nursing, managing a condition, or taking
            medication, check safety details with a trusted professional source
            before ingesting any herb. This grimoire is written for spiritual
            and educational purposes and is not medical advice.
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