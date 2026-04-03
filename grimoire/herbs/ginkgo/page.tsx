// app/grimoire/herbs/ginkgo/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GinkgoPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ginkgo" subtitle="Ginkgo biloba">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-GINKGO-HERO-IMAGE-URL"
              alt="Ginkgo"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Ginkgo endures and remembers: it strengthens the mind, preserves
              wisdom, and roots awareness through time.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Ginkgo is one of the oldest living tree species on Earth, often
            called a living fossil. Native to China, it has been cultivated for
            centuries in temple gardens and traditional practice.
          </p>

          <p>
            In practical tradition, Ginkgo is widely discussed for its
            association with memory and cognitive support. In spiritual work,
            that enduring quality translates into wisdom, clarity, and
            continuity across generations.
          </p>

          <p>
            In witchcraft, Ginkgo is used for mental clarity, ancestral
            connection, longevity work, and strengthening insight. It is often
            chosen when the goal is focus, study, or honoring lineage.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-GUANYIN-DEITY-ROUTE">Guanyin</Link>,{" "}
                <Link href="PASTE-ODIN-DEITY-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-SARASWATI-DEITY-ROUTE">Saraswati</Link>,{" "}
                <Link href="PASTE-THOTH-DEITY-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-ATHENA-DEITY-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-FU-XI-DEITY-ROUTE">Fu Xi</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">Fluorite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sodalite">Sodalite</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Ginkgo in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GINKGO-WITCHCRAFT-IMAGE-URL"
              alt="Ginkgo in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Mental clarity, memory, study work, ancestral connection,
                longevity rites, wisdom cultivation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Mental fog, confusion, scattered focus, forgetfulness, lack of
                direction
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional cognitive support, circulatory support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Ginkgo is often used in study and focus rites when clarity is
                required over long periods.
                <br />
                <br />
                In ancestral work, it supports continuity and reverence for
                lineage.
                <br />
                <br />
                Pair it with Third Eye focus when insight and perception are
                the goal.
                <br />
                <br />
                In longevity rites, Ginkgo reinforces patience and steady
                endurance rather than quick change.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Ginkgo</h2>

          <p>
            Ginkgo can be worked with as dried leaf in study blends, focus
            sachets, and ancestor offerings. It is commonly used when clarity
            and memory are priorities.
          </p>

          <p>
            For study work, place Ginkgo near your workspace alongside stones
            that reinforce mental sharpness.
          </p>

          <p>
            For ancestral rites, incorporate Ginkgo into offerings that honor
            continuity and remembrance.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Ginkgo is a practical choice when sustained focus is required. Use
            it when studying, planning long-term goals, or engaging in deep
            reflection.
          </p>

          <p>
            It is also useful in lineage work. Ginkgo reinforces the awareness
            that wisdom carries forward through time.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GINKGO-FOLKLORE-IMAGE-URL"
              alt="Ginkgo Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Chinese tradition, Ginkgo trees were often planted in temple
            grounds and associated with endurance and sacred continuity. The
            tree became a symbol of resilience across centuries.
          </p>

          <p>
            In modern witchcraft, Ginkgo is commonly used in clarity, wisdom,
            and ancestral rites. The current is enduring: remember, focus,
            continue.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Ginkgo is often described as containing flavonoids and plant
            compounds traditionally associated with cognitive and circulatory
            support. This section is the place to list additional nutritional
            components such as vitamins and minerals when applicable to the
            herb being profiled.
          </p>

          <p>Common Constituents: Flavonoids, Plant Compounds</p>
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
            Ginkgo may interact with certain medications and conditions. If
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