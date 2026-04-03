// app/grimoire/herbs/feverfew/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function FeverfewPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Feverfew" subtitle="Tanacetum parthenium">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-FEVERFEW-HERO-IMAGE-URL"
              alt="Feverfew"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Feverfew carries a bright, cleansing current: a plant often called
              on for relief, protection, and the breaking of energetic bindings.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Feverfew is a flowering plant in the daisy family, Asteraceae. Its
            reputation spans both folk practice and traditional use, and it has
            been carried through generations as a plant associated with relief,
            clearing, and energetic reset.
          </p>

          <p>
            Native to parts of Eurasia including the Balkan Peninsula, Anatolia,
            and the Caucasus, Feverfew spread widely through cultivation and
            practical use. Over time, it became known not only for physical
            support, but also for its role in spiritual work that focuses on
            purification, protection, and releasing what clings.
          </p>

          <p>
            In witchcraft, Feverfew is often treated as a high-vibration cleanser:
            a plant that helps cut through heaviness, disrupt stagnation, and
            support the uncrossing of lingering energetic influence. This page
            offers a starting framework, not a limit. The intention is to spark
            clear direction and help the practitioner build their own relationship
            with the plant.
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
                <Link href="PASTE-EARTH-ELEMENT-ROUTE">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-DEITY-ROUTE">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-TAURUS-ROUTE">Taurus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-VENUS-PLANET-ROUTE">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-FEMININE-ENERGY-ROUTE">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HEART-CHAKRA-ROUTE">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ROSE-QUARTZ-ROUTE">Rose Quartz</Link>,{" "}
                <Link href="PASTE-CLEAR-QUARTZ-ROUTE">Clear Quartz</Link>,{" "}
                <Link href="PASTE-SELENITE-ROUTE">Selenite</Link>,{" "}
                <Link href="PASTE-MOONSTONE-ROUTE">Moonstone</Link>,{" "}
                <Link href="PASTE-WATERMELON-FLUORITE-ROUTE">
                  Watermelon Fluorite
                </Link>
                ,{" "}
                <Link href="PASTE-BLACK-TOURMALINE-ROUTE">
                  Black Tourmaline
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="PASTE-YOUR-FEVERFEW-WITCHCRAFT-IMAGE-URL"
            alt="Feverfew in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Feverfew in Witchcraft</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Health, love, purification, protection, cleansing, grounding,
                self-love
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Bindings, negativity, self-doubt, poor health, curses, hexes
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Pain killer, anti-inflammatory, migraine prevention, spasmolytic,
                vermifuge, laxative
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Feverfew is often worked with to disrupt and release binding
                energy, whether the influence is internal, external, or inherited.
                <br />
                <br />
                It pairs well with Heart Chakra work when the goal is to clear
                residue and return to steadiness: grief that clings, fear that
                loops, or emotional heaviness that dulls the field.
                <br />
                <br />
                In purification rites, Feverfew is used to strengthen the
                cleansing current and support a clean reset after conflict,
                crossing, or sustained stress.
                <br />
                <br />
                Its protective quality is direct: it clears what should not be
                present, and it helps reinforce what should remain.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Feverfew</h2>

          <p>
            Feverfew can be worked with as a presence: dried herb for spellwork,
            infused oil for ritual anointing, or as an ingredient in cleansing
            blends. It is most commonly used in work focused on clearing,
            protection, and restoring energetic cleanliness.
          </p>

          <p>
            For a simple clearing working, Feverfew can be added to a cleanse
            blend with complementary herbs, then used to dress a candle, dress a
            charm, or support a ritual bath. For protection, it can be carried,
            placed near thresholds, or used in a warding sachet with stones that
            reinforce boundaries.
          </p>

          <p>
            Practical note: some practitioners reserve Feverfew for targeted work
            rather than daily use. Its energy can feel sharp and corrective, which
            makes it powerful when precision is needed.
          </p>
        </section>

        <div className="grimoire-divider" />

 {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Feverfew is used when one needs a clean energetic reset: after conflict,
            after sustained negativity, after repetitive emotional looping, or when
            the field feels crossed and heavy. It supports the return to a clearer
            baseline so the practitioner can choose their next move from steadiness,
            not static.
          </p>

          <p>
            When paired with love work, Feverfew is best used as a purifier rather
            than a sweetener: it clears residue that blocks receptivity and helps
            restore self-respect and emotional boundaries. In protection work, it
            reinforces the message that only aligned energy is welcome.
          </p>
        </section>

        <div className="grimoire-divider" />


        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <p>
            Feverfew has long been carried through household practice as a plant
            associated with relief and protection. Its reputation traveled through
            folk use, traditional remedies, and everyday protection customs: the
            kind of plant that becomes familiar because it is dependable.
          </p>

          <p>
            In modern witchcraft, that reputation often translates into uncrossing
            work, cleansing rites, and protective reinforcement. Feverfew is treated
            less as a gentle comfort herb and more as a clearer: a plant that helps
            remove what should not be attached.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Feverfew is often described as containing sesquiterpene lactones,
            flavonoids, sterols, and triterpenes. This section is the place to list
            additional nutritional components such as vitamins and minerals when
            applicable to the herb being profiled.
          </p>

          <p>
            Chemical Constituents: Sesquiterpene Lactones, Flavonoids, Sterols, and
            Triterpenes
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
    Feverfew may cause digestive discomfort in some individuals, including
    upset stomach, heartburn, bloating, constipation, or diarrhea. Allergic
    reactions are possible, particularly in people sensitive to plants in
    the daisy family.
  </p>

  <p>
    If pregnant, nursing, managing a condition, or taking medication, check
    safety details with a trusted professional source before ingesting any
    herb. This grimoire is written for spiritual and educational purposes
    and is not medical advice.
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