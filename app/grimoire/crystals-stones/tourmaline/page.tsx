// app/grimoire/crystals-stones/tourmaline/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TourmalinePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Tourmaline" subtitle="Borate silicate mineral group · Complex composition">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-TOURMALINE-HERO-IMAGE-URL"
              alt="Tourmaline"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Tourmaline stabilizes the field: protection through balance.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Tourmaline is not a single mineral but a complex borate silicate
            mineral group that forms in a wide range of colors. Common
            varieties include black, green, pink, and multicolored forms such
            as watermelon tourmaline.
          </p>

          <p>
            Because of its chemical diversity, Tourmaline expresses a wide
            energetic range. It is often regarded as a stabilizing force that
            grounds, protects, and harmonizes the energetic field.
          </p>

          <p>
            In witchcraft, Tourmaline is commonly worked with for protection,
            energetic boundaries, grounding, and balancing opposing currents.
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
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-saturn">
                  Saturn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/rosemary">
                  Rosemary
                </Link>,{" "}
                <Link href="/grimoire/herbs/mugwort">
                  Mugwort
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COLOR */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Color</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Appearance</h3>
              <p className="grimoire-correspondence-value">
                Found in black, green, pink, blue, and multicolored forms.
                Individual varieties vary significantly in appearance.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                Black varieties align with the{" "}
                <Link href="/grimoire/colors/13-black">black</Link>{" "}
                current of protection and containment. Green forms link to
                the{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current of growth and renewal. Pink forms connect to the{" "}
                <Link href="/grimoire/colors/08-pink">pink</Link>{" "}
                current of emotional healing.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* TOURMALINE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Tourmaline in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Tourmaline in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, grounding, boundary reinforcement,
                energetic stabilization, emotional balance
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic intrusion, energetic drain, instability,
                environmental negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Hematite, Obsidian, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Tourmaline is frequently placed near entryways or workspaces
                to reinforce energetic boundaries.
                <br /><br />
                Black Tourmaline is commonly used for grounding and
                protective warding.
                <br /><br />
                Colored varieties may be selected based on the specific
                energetic current desired.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH TOURMALINE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Tourmaline</h2>

          <p>
            Tourmaline can be placed near doors, windows, or electronic
            devices to reinforce energetic stability.
          </p>

          <p>
            It may be carried during stressful situations to maintain
            grounding and emotional steadiness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Tourmaline is best reached for when boundaries need
            strengthening. It reinforces containment without harshness.
          </p>

          <p>
            In longer workings, it stabilizes the energetic field and
            supports consistent grounding.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-FOLKLORE-IMAGE-URL"
    alt="Tourmaline Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            The name Tourmaline derives from the Sinhalese word
            “turmali,” meaning mixed stones, reflecting its many color
            varieties.
          </p>

          <p>
            In modern metaphysical traditions, it remains widely associated
            with protection and energetic stabilization.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Mineral Class</p>
              <p className="grimoire-correspondence-value">
                Borate silicate (Tourmaline group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                7 to 7.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Trigonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Wide color variation within one mineral group
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Tourmaline can be cleansed with smoke, sound, moonlight, or
            brief water contact.
          </p>

          <p>
            Avoid harsh chemicals and protect from impact, as some
            varieties may fracture.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Tourmaline is not intended for ingestion. Avoid grinding or
            creating dust from any mineral specimen, and do not prepare
            crystal elixirs without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes
            and is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/crystals-stones" className="grimoire-footer-link">
              ← Back to Crystals
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