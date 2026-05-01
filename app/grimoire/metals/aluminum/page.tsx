// app/grimoire/metals/aluminum/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AluminumPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Aluminum" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/aluminum-hero.png"
              alt="Aluminum"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Light does not have to be fragile. It can be engineered.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Aluminum is a metal of lightness, motion, and modern form. It is
            known for being strong for its weight, highly conductive, and
            naturally protected by a thin oxide layer that helps it resist
            corrosion. In the physical world, it shows up everywhere: from
            wiring and tools to architecture, transportation, and the technology
            that makes daily life move.
          </p>

          <p>
            Energetically, aluminum carries an airy intelligence. It supports
            work that requires speed, flexibility, and clean structure. It can
            feel clarifying and bright, like mental space opening up. Aluminum
            does not sink into depth. Aluminum moves information, carries
            current, and shapes environments.
          </p>

          <p>
            This is a metal of the modern sky: innovation, systems, and
            problem-solving. It can help when you need to reduce heaviness,
            streamline a process, or build something functional that still feels
            light enough to evolve.
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
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
                {", "}
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Ouranos</Link>
                {", "}
                <Link href="/grimoire/deities">Hermes</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
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
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/11-silver">Silver</Link>
                {", "}
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
            Aluminum tends to feel clarifying and fast-moving. It supports
            clean communication, mental organization, and the kind of attention
            that can hold multiple threads at once without getting tangled. It
            can also feel shielding in a modern way, like a thin, intelligent
            barrier that helps you stay focused inside your own signal.
          </p>

          <p>
            This metal works well when you are building new systems, adjusting
            routines, learning skills, or trying to reduce friction in your
            life. It does not ask for deep emotional processing. It helps you
            reorganize the container so your energy can move.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* ALUMINUM IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Aluminum in Witchcraft</h2>

<div className="grimoire-image">
          <img
            src=" https://ik.imagekit.io/w1ck3d/metals/aluminum-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <p>
            Aluminum is useful in practical, modern spellwork. It supports
            workings for protection through boundaries, clarity through
            structure, and momentum through simplification. It can be used as a
            supportive material when you are building tools, organizing altars,
            or crafting a ritual space that needs to stay flexible.
          </p>

          <p>
            Aluminum foil is often used for quick protection work, containment
            work, and redirecting unwanted energy. Aluminum can also be used
            through wearable pieces or small objects that represent lightness,
            speed, and adaptability. The key with aluminum is intention that is
            clear, simple, and functional.
          </p>
        </section>

        <div className="grimoire-divider" />

       {/* FOLKLORE & TRADITIONS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/metals/aluminum-folklore.png"
      alt="Aluminum as a symbol of modern industry and innovation"
      className="grimoire-img"
    />
  </div>

  <p>
    Aluminum is a modern metal, so its symbolism is shaped less by
    ancient myth and more by the story of industry, invention, and
    everyday utility. It carries the imprint of the twentieth century:
    mass production, travel, communication networks, and the materials
    that made the modern world feel lighter and faster.
  </p>

  <p>
    In a contemporary grimoire, aluminum can represent the way human
    ingenuity reshapes matter into tools. It is the metal of adaptation
    and design. It can be treated as a symbol of making life workable
    without losing speed, breath, or room to evolve.
  </p>
</section>

<div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            If you are using aluminum in heat-based craft or kitchen-adjacent
            work, keep the use practical and informed. Avoid unsafe practices,
            especially with high heat or direct contact methods that you do not
            fully understand.
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