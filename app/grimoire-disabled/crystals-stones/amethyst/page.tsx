// app/grimoire/crystals-stones/amethyst/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AmethystPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Amethyst" subtitle="Quartz variety · SiO₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/crystals/amethyst-hero.png"
              alt="Amethyst"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Amethyst quiets the noise so the soul can speak in full sentences.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Amethyst is a purple variety of quartz, prized for its clarity, its
            calming presence, and its long-standing reputation as a stone of
            spiritual protection and sober perception. Its color can range from
            pale lavender to deep violet depending on the specimen.
          </p>

          <p>
            In practice, Amethyst is often treated as a stabilizer for the mind
            and the inner senses. It supports discernment, energetic boundaries,
            and the ability to return to center when emotions or thoughts become
            overwhelming.
          </p>

          <p>
            In witchcraft, Amethyst is commonly worked with for cleansing,
            protection, dreamwork, and intuitive development. It is often chosen
            when the goal is clarity with softness: a reset that does not require
            force.
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
                <Link href="PASTE-AIR-ELEMENT-ROUTE">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-JUPITER-PLANET-ROUTE">Jupiter</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-PISCES-ROUTE">Pisces</Link>,{" "}
                <Link href="PASTE-AQUARIUS-ROUTE">Aquarius</Link>
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>
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
                Lavender to deep purple, sometimes banded or translucent. Many
                specimens form as points or within geodes, often with pale zones
                and darker tips.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/10-purple">purple</Link>{" "}
                current supports spiritual authority, intuition, and protective
                clarity. The{" "}
                <Link href="/grimoire/colors/09-indigo">indigo</Link>{" "}
                current supports perception, insight, and inner knowing. Together,
                these currents make Amethyst a stone for calm discernment and
                clean energetic boundaries.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AMETHYST IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Amethyst in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amethyst-in-craft.png"
    alt="Amethyst in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, cleansing, dreamwork, meditation, intuition, emotional
                regulation, spiritual clarity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic noise, overwhelm, intrusive energy, obsessive spirals,
                energetic attachments
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Selenite, Labradorite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Amethyst is often used to calm the field before divination,
                spirit work, or deep meditation.
                <br />
                <br />
                It supports Third Eye and Crown work when discernment is the goal:
                seeing clearly without becoming flooded.
                <br />
                <br />
                In protection rites, it helps keep the boundary clean and quiet,
                especially when the practitioner is sensitive to other people&apos;s
                emotional energy.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AMETHYST */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Amethyst</h2>

          <p>
            Amethyst is commonly placed near the bed for dreamwork, restful sleep,
            and energetic quiet. It can be held during meditation, placed on the
            altar during cleansing rites, or carried when the goal is calm
            boundaries in emotionally intense environments.
          </p>

          <p>
            In ritual, Amethyst is often used as a stabilizing anchor. It pairs
            well with cleansing tools and protective herbs, and it supports work
            that requires steady perception: divination, clarity rituals, and
            release work that benefits from gentleness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Amethyst is best reached for when your spirit feels noisy. It is the
            stone for clear thinking after emotional intensity, for protection
            without aggression, and for returning to yourself after you have been
            pulled into other people&apos;s moods.
          </p>

          <p>
            In longer workings, Amethyst behaves like a steady purifier. It does
            not demand dramatic action. It supports consistency: quiet boundaries,
            calm intuition, and a stable inner voice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amethyst-folklore.png"
    alt="Amethyst Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Amethyst has appeared across history as a stone associated with
            clarity, protection, and spiritual discipline. It has been used in
            jewelry, devotional objects, and talismans, often carried as a symbol
            of steadiness and clear perception.
          </p>

          <p>
            In modern metaphysical practice, those themes remain: protection,
            cleansing, intuition, and calm discernment. Amethyst is often chosen
            as a foundational stone for spiritual work because it supports clarity
            without harshness.
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
                Silicate (Quartz)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                7 on the Mohs scale
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
                Purple coloration from trace elements and natural irradiation
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Amethyst can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid prolonged direct sunlight, which can
            fade the purple color over time.
          </p>

          <p>
            Store Amethyst away from harder or abrasive materials if you want to
            preserve polished surfaces. Geodes and points should be handled with
            care to avoid chipped tips.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Amethyst is not intended for ingestion. Avoid grinding or creating
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