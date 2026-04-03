// app/grimoire/herbs/fenugreek/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function FenugreekPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Fenugreek" subtitle="Trigonella foenum-graecum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-FENUGREEK-HERO-IMAGE-URL"
              alt="Fenugreek"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Fenugreek builds and draws: it strengthens prosperity currents,
              nourishes endurance, and supports steady growth.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Fenugreek is an ancient herb cultivated across the Mediterranean,
            North Africa, and South Asia. Its seeds have long appeared in
            culinary practice and traditional household preparations.
          </p>

          <p>
            In practical tradition, Fenugreek is commonly associated with
            nourishment and supportive tonic use. In spiritual work, that
            nourishing quality translates into prosperity, endurance, and
            steady accumulation.
          </p>

          <p>
            In witchcraft, Fenugreek is used for money work, growth rituals,
            long-term prosperity, and strengthening personal resources. It is
            often chosen when the goal is steady increase rather than sudden
            gain.
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
                <Link href="PASTE-LAKSHMI-DEITY-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-DEMETER-DEITY-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-FREYR-DEITY-ROUTE">Freyr</Link>,{" "}
                <Link href="PASTE-PLUTUS-DEITY-ROUTE">Plutus</Link>,{" "}
                <Link href="PASTE-OSHUN-DEITY-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-ISHTAR-DEITY-ROUTE">Ishtar</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Fenugreek in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-FENUGREEK-WITCHCRAFT-IMAGE-URL"
              alt="Fenugreek in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Prosperity, money work, steady growth, endurance, nourishment,
                long-term stability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Financial instability, resource depletion, insecurity, lack
                mentality
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional tonic use, digestive support, nourishment support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Fenugreek is best used for slow, steady prosperity rather than
                sudden windfalls.
                <br />
                <br />
                In money work, it supports consistent increase and disciplined
                growth.
                <br />
                <br />
                Pair it with Root Chakra focus when building long-term financial
                stability.
                <br />
                <br />
                In endurance rites, Fenugreek strengthens the commitment to stay
                the course until results accumulate.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Fenugreek</h2>

          <p>
            Fenugreek can be worked with as dried seed in prosperity jars,
            money bowls, and long-term growth blends. It is commonly used when
            the intention is accumulation and resource stability.
          </p>

          <p>
            For prosperity work, add Fenugreek to a jar with coins and stones
            that reinforce abundance. Keep the intention focused on steady,
            realistic increase.
          </p>

          <p>
            For endurance rites, incorporate Fenugreek into a charm that
            supports patience and disciplined effort.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Fenugreek is a practical choice when you want growth that lasts.
            Use it when building savings, strengthening business stability, or
            reinforcing long-term goals.
          </p>

          <p>
            It is also useful when resources feel thin. Fenugreek supports a
            return to steadiness and patient accumulation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-FENUGREEK-FOLKLORE-IMAGE-URL"
              alt="Fenugreek Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Fenugreek appears in ancient Mediterranean and South Asian
            traditions as a nourishing and strengthening plant. Its seeds were
            valued in both household and agricultural contexts.
          </p>

          <p>
            In modern witchcraft, Fenugreek is commonly used in prosperity
            work, resource-building rites, and growth-focused rituals. The
            current is patient: build, nourish, accumulate.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Fenugreek is often described as containing plant compounds
            traditionally associated with nourishment and tonic support. This
            section is the place to list additional nutritional components such
            as vitamins and minerals when applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Plant Compounds, Fiber, Aromatic Compounds</p>
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
            Fenugreek is commonly used in culinary amounts. Larger amounts may
            interact with certain medications or conditions. If pregnant,
            nursing, managing a condition, or taking medication, check safety
            details with a trusted professional source before ingesting any
            herb. This grimoire is written for spiritual and educational
            purposes and is not medical advice.
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