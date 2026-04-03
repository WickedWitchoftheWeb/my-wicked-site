// app/grimoire/metals/zinc/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ZincPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Zinc" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/zinc-hero.png"
              alt="Zinc"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Support the signal. Strengthen the exchange.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Zinc is a metal of reinforcement, communication, and protective
            layering. In the physical world, zinc is widely used to coat and
            shield other metals from corrosion. It strengthens surfaces,
            extends longevity, and plays a vital role in alloy creation,
            including brass.
          </p>

          <p>
            Energetically, zinc carries Mercurial Air current: quick thinking,
            adaptability, and efficient exchange. It supports clarity in
            communication and the intelligent protection of systems. Zinc does
            not overpower. It reinforces and stabilizes.
          </p>

          <p>
            This is a metal aligned with Air and Gemini and Virgo energy.
            Zinc supports learning, refinement, problem solving, and the
            strengthening of mental and structural integrity.
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
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Hermes</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
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
            Zinc tends to feel quick, stabilizing, and intelligently
            protective. It supports clear communication and reinforces the
            structures that allow exchange to flow smoothly. Zinc energy
            strengthens boundaries without blocking connection.
          </p>

          <p>
            This metal is especially useful when building systems that must
            function efficiently. Zinc encourages adaptability, refinement,
            and practical problem solving. It supports growth through
            intelligent adjustment rather than force.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* ZINC IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Zinc in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/zinc-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Zinc supports communication spells, learning rituals, and
            protective layering work. It pairs well with intentions focused on
            clarity, adaptability, and reinforcing boundaries without cutting
            off flow. Zinc can also be used symbolically in projects that
            strengthen existing foundations.
          </p>

          <p>
            Use zinc through coated objects, alloy symbolism, or tools that
            represent efficient structure. Zinc works best with precise
            intention and organized ritual. The intention that suits zinc best
            is simple: I reinforce what functions.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/zinc-folklore.png"
              alt="Zinc as a symbol of communication, reinforcement, and protective layering"
              className="grimoire-img"
            />
          </div>

          <p>
            Zinc has been historically valued for its role in strengthening
            alloys and protecting surfaces from decay. Though not always
            celebrated on its own, its contribution to durability shaped its
            modern symbolism of reinforcement and intelligent protection.
          </p>

          <p>
            In a contemporary grimoire, zinc represents functional support. It
            is the metal of refinement that keeps systems intact. Zinc teaches
            that protection can be subtle, and strength can be collaborative.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Zinc can produce fumes if overheated. Avoid unsafe heating
            practices and ensure proper ventilation when working with zinc or
            zinc coated materials. Always verify material composition before
            applying heat or using in craft contexts.
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