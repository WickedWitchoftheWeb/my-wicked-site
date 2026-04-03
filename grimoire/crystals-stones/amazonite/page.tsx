// app/grimoire/crystals-stones/amazonite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AmazonitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Amazonite"
        subtitle="Microcline feldspar · KAlSi₃O₈"
      >
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/crystals/amazonite-hero.png"
              alt="Amazonite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Amazonite teaches the nervous system to soften: truth can be spoken
              without becoming a battle.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Amazonite is a blue-green variety of microcline feldspar. It is known
            for its soothing presence, its steady emotional current, and its
            reputation as a stone of honest expression that does not abandon
            tenderness.
          </p>

          <p>
            In practice, Amazonite is often reached for when the heart and voice
            need to work together. It supports clear boundaries, calm communication,
            and the ability to speak a truth without amplifying conflict.
          </p>

          <p>
            In witchcraft, Amazonite is frequently used to reduce energetic noise
            and restore internal steadiness. It is worked with in protections that
            feel clean and quiet, in confidence work that is rooted in self-trust,
            and in rituals where peace is chosen on purpose.
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
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-URANUS-PLANET-ROUTE">Uranus</Link>
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
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/chamomile">Chamomile</Link>
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
                Blue-green to green, often with pale veining or cloud-like
                patterns. Color can range from soft aqua to deeper teal depending
                on the specimen.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/08-blue">blue</Link>{" "}
                current supports peace, clarity, and truthful communication. The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports renewal, balance, and heart-centered steadiness.
                Together, these currents make Amazonite a bridge between calm
                feeling and clean expression.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AMAZONITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Amazonite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amazonite-in-craft.png"
    alt="Amazonite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Calm communication, boundaries, emotional balance, self-trust,
                stress relief, peaceful protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic overwhelm, people-pleasing, anxious spirals, reactive
                speech, emotional static
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Rose Quartz, Selenite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Amazonite is worked with when your nervous system needs to quiet
                before your truth can land.
                <br />
                <br />
                It supports boundary-setting that stays steady: clear, calm, and
                non-performative.
                <br />
                <br />
                In protection work, it is often used as a soft shield: it reduces
                the amount of noise that reaches your field, without hardening the
                heart.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AMAZONITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Amazonite</h2>

          <p>
            Amazonite is often carried during stressful conversations or periods
            of transition where steady communication matters. It can be used as a
            pocket stone, worn as jewelry, or placed near your workspace when the
            goal is calm focus and clear expression.
          </p>

          <p>
            In ritual, Amazonite is commonly placed at the center of protection
            work that prioritizes peace: wards for the home, energetic boundary
            setting, and spellcraft that restores inner quiet before action is
            chosen.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Amazonite is best reached for when your emotions are real but your
            reactions are too loud. It helps you slow the moment down, hear what
            you actually feel, and speak from the part of you that is steady.
          </p>

          <p>
            In longer workings, it behaves like a gentle stabilizer. It does not
            force dramatic transformation. It supports consistency: calm habits,
            clean boundaries, and truth spoken without self-betrayal.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amazonite-folklore.png"
    alt="Amazonite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Amazonite has been associated with courage and ornamentation across
            multiple cultures, often used in beads, amulets, and carved objects.
            Its name references the Amazon, though historical sourcing is complex
            and varies by region and period.
          </p>

          <p>
            In modern metaphysical practice, Amazonite is widely treated as a
            stone of calm truth: a support for communication, emotional balance,
            and protection that does not rely on fear.
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
                Silicate (Feldspar: Microcline)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6 to 6.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Triclinic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Blue-green coloration with common white veining
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Amazonite can be cleansed using smoke, sound, or moonlight. Brief
            water contact is typically fine, but avoid prolonged soaking and avoid
            salt water, which can be abrasive over time.
          </p>

          <p>
            To prevent scratching, store Amazonite away from harder stones and
            avoid rough handling that may chip edges or polished surfaces.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Amazonite is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/crystals-stones"
              className="grimoire-footer-link"
            >
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