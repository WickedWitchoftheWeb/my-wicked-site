// app/grimoire/metals/silver/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SilverPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Silver" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/silver-hero.png"
              alt="Silver"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Reflection is not weakness. It is wisdom, turned inward.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Silver is a metal of reflection, intuition, and subtle power. In the
            physical world, silver is luminous and highly conductive, known for
            its brightness and its ability to mirror light. It has long been used
            in adornment, ritual tools, coinage, and objects that carry both
            beauty and purpose.
          </p>

          <p>
            Energetically, silver carries lunar current. It supports emotional
            awareness, receptivity, and the ability to perceive what is not
            immediately visible. Silver does not push forward like gold. It
            draws inward. It refines perception and strengthens intuitive
            signal.
          </p>

          <p>
            Silver aligns with Source through the Moon: the rhythm of cycles,
            reflection, and internal truth. It supports work that requires
            sensitivity without losing strength and boundaries without losing
            softness.
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
                <Link href="/grimoire/source">Source</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Selene</Link>
                {", "}
                <Link href="/grimoire/deities">Artemis</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
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
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/11-silver">Silver</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Silver tends to feel calm, intuitive, and reflective. It supports
            emotional clarity, dream awareness, and subtle perception. Silver
            energy strengthens the ability to listen: to your instincts, to your
            body, and to the cycles moving around you.
          </p>

          <p>
            This metal is especially supportive when you are processing change,
            navigating emotional tides, or strengthening intuitive boundaries.
            Silver does not rush decisions. It encourages thoughtful awareness
            and quiet strength.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SILVER IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Silver in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/silver-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Silver is widely used for lunar rituals, dream work, protection
            through reflection, and emotional healing practices. It supports
            spells that focus on intuition, psychic awareness, and the
            strengthening of inner guidance. Silver is also a powerful ally in
            rituals tied to cycles and timing.
          </p>

          <p>
            Use silver in jewelry, bowls, mirrors, charms, and altar tools that
            represent clarity and receptivity. Silver pairs well with water
            symbolism, moon phases, and quiet intention. The intention that
            suits silver best is simple: I trust what I feel.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/silver-folklore.png"
              alt="Silver as a symbol of lunar power, intuition, and reflection"
              className="grimoire-img"
            />
          </div>

          <p>
            Silver has long been associated with the Moon, protection, and
            spiritual reflection. Across cultures, it has been used in amulets,
            mirrors, and sacred objects meant to guard against harm or reveal
            hidden truth. Its reflective surface shaped its symbolism.
          </p>

          <p>
            In a contemporary grimoire, silver represents intuitive strength. It
            is the metal of emotional intelligence and cyclical wisdom. Silver
            teaches that reflection is not retreat. It is preparation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Silver is generally safe in solid form, but alloys may vary.
            Tarnishing is natural and can be cleaned safely with appropriate
            methods. Avoid unsafe chemical treatments and use practical safety
            awareness when applying heat or working with unknown compositions.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/metals" className="grimoire-footer-link">
              ← Back to Metals
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