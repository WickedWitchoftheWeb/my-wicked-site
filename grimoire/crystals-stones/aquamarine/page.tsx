// app/grimoire/crystals-stones/aquamarine/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AquamarinePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Aquamarine" subtitle="Beryl variety · Be₃Al₂Si₆O₁₈">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-AQUAMARINE-HERO-IMAGE-URL"
              alt="Aquamarine"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Aquamarine clears the throat of fear: the truth rises clean, calm,
              and unshaken.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Aquamarine is a blue to blue-green variety of beryl, valued for its
            oceanic color and clear, cooling presence. Its name reflects its
            association with sea imagery, and in modern spiritual practice it is
            widely treated as a stone of calm truth and emotional steadiness.
          </p>

          <p>
            In practice, Aquamarine is often reached for when communication needs
            to be clean and unreactive. It supports clarity in tense situations,
            softens emotional turbulence, and helps the voice hold steady when the
            nervous system wants to shut down or escalate.
          </p>

          <p>
            In witchcraft, Aquamarine is commonly worked with for protection during
            emotional storms, truth-telling, cleansing, and intuitive discernment.
            It is often chosen when the goal is peace with backbone: calm, clear,
            and honest.
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
                <Link href="PASTE-NEPTUNE-PLANET-ROUTE">Neptune</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-PISCES-ROUTE">Pisces</Link>
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
                <Link href="PASTE-THROAT-CHAKRA-ROUTE">Throat Chakra</Link>,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ROSEMARY-ROUTE">Rosemary</Link>,{" "}
                <Link href="PASTE-LAVENDER-ROUTE">Lavender</Link>
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
                Pale blue to blue-green, often transparent to translucent. Some
                specimens appear sea-glass soft, while others show clearer depth
                and brightness depending on cut and quality.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="PASTE-BLUE-ROUTE">blue</Link>{" "}
                current supports peace, clarity, and truthful communication. The{" "}
                <Link href="/grimoire/colors/07-green">green</Link>{" "}
                current supports renewal, balance, and heart-centered steadiness.
                Together, these currents make Aquamarine a stone for calm honesty
                and emotional clarity.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AQUAMARINE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Aquamarine in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Aquamarine in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Calm communication, truth-telling, emotional balance, cleansing,
                intuition, peaceful protection, boundary clarity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional overwhelm, fear of speaking, reactive conflict, energetic
                noise, confusion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Moonstone, Selenite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Aquamarine is often worked with when the truth needs to be spoken
                without escalating the room.
                <br />
                <br />
                It supports Throat Chakra work that stays connected to the Heart:
                honesty without cruelty, boundaries without guilt.
                <br />
                <br />
                In cleansing rites, it is used to cool emotional static and return
                the field to clarity.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AQUAMARINE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Aquamarine</h2>

          <p>
            Aquamarine is commonly worn or carried during difficult conversations,
            negotiations, and periods where calm self-expression matters. It can be
            used as jewelry, a pocket stone, or placed near a workspace when the
            goal is steady communication and emotional clarity.
          </p>

          <p>
            In ritual, Aquamarine is often placed at the center of cleansing work
            that prioritizes peace. It supports boundary-setting, truth rituals,
            and emotional release work where the practitioner wants clarity without
            emotional flooding.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Aquamarine is best reached for when you feel pulled between silence and
            explosion. It helps you slow the moment down, find the clean sentence,
            and speak from the part of you that is steady.
          </p>

          <p>
            In longer workings, Aquamarine behaves like a cooling stabilizer. It
            does not force emotional intensity. It supports consistency: calm
            boundaries, clear truth, and a nervous system that can stay present.
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
    alt="Aquamarine Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Aquamarine has long carried associations with the sea, protection, and
            safe passage. Across modern metaphysical practice, those themes often
            translate into emotional protection, clear communication, and the steady
            courage to speak the truth.
          </p>

          <p>
            Its reputation frequently centers on calm clarity: the ability to hold
            the heart open while remaining honest and self-contained.
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
                Silicate (Beryl)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                7.5 to 8 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Hexagonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Blue-green coloration within beryl, often transparent to translucent
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Aquamarine can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid harsh chemicals and abrasive cleaning
            methods, especially for polished pieces.
          </p>

          <p>
            Store Aquamarine away from harder stones if you want to preserve its
            surface, and handle edges gently to avoid chips.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Aquamarine is not intended for ingestion. Avoid grinding or creating
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