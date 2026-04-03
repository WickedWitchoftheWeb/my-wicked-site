// app/grimoire/metals/tungsten/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TungstenPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Tungsten" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tungsten-hero.png"
              alt="Tungsten"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What is unyielding does not have to be loud.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Tungsten is a metal of extreme density, durability, and endurance.
            In the physical world, it has one of the highest melting points of
            all metals and is valued for its strength under intense heat and
            pressure. Tungsten does not deform easily. It remains intact where
            weaker materials fail.
          </p>

          <p>
            Energetically, tungsten carries Saturnine Earth force: discipline,
            gravity, and unwavering structure. It supports boundaries that do
            not shift under stress. Tungsten energy feels grounded, serious,
            and resolute. It anchors intention firmly into matter.
          </p>

          <p>
            This is a metal aligned with Earth and Capricorn energy, with a
            secondary resonance to Taurus. Tungsten supports endurance,
            responsibility, and long term commitment that must withstand
            external pressure.
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
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Cronus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                <Link href="/grimoire/colors/12-grey">Grey</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Tungsten tends to feel immovable, protective, and intensely
            stabilizing. It supports long term focus and the ability to remain
            steady under pressure. Tungsten energy does not adapt quickly. It
            reinforces resolve and strengthens commitment.
          </p>

          <p>
            This metal is especially useful when you must hold a boundary
            without compromise. Tungsten encourages responsibility and
            endurance. It is not flexible energy. It is foundational energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* TUNGSTEN IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Tungsten in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tungsten-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Tungsten is powerful for protection rituals, long term vows, and
            spells that require endurance. It supports warding work that must
            remain stable over time and reinforces commitments that are not
            meant to be temporary.
          </p>

          <p>
            Use tungsten symbolically through rings, weighted objects, or tools
            that represent permanence and resilience. Tungsten pairs well with
            structured ritual and clear intention. The intention that suits
            tungsten best is direct: I remain steady.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tungsten-folklore.png"
              alt="Tungsten as a symbol of endurance, gravity, and Saturnine structure"
              className="grimoire-img"
            />
          </div>

          <p>
            Tungsten is a modern metal, but its symbolism follows the ancient
            Saturnian themes of weight and endurance. Its extreme resistance to
            heat shaped its meaning: the ability to withstand intensity without
            losing form.
          </p>

          <p>
            In a contemporary grimoire, tungsten represents immovability and
            responsibility. It is the metal of commitment that does not break
            under pressure. Tungsten teaches that strength can be quiet and
            absolute.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Tungsten is extremely hard and can be brittle under certain
            conditions. Use proper tools and safety precautions when cutting,
            grinding, or applying heat. Always verify composition when working
            with alloys.
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