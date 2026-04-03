// app/grimoire/metals/uranium/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function UraniumPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Uranium" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/uranium-hero.png"
              alt="Uranium"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Power that awakens cannot be ignored.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Uranium is a metal of latent force and radical transformation. In
            the physical world, uranium contains immense potential energy,
            released only under precise conditions. It is tied to modern
            science, innovation, and the discovery of power hidden deep within
            matter itself.
          </p>

          <p>
            Energetically, uranium carries Uranian current: sudden awakening,
            disruption, and breakthrough. It supports liberation from old
            systems and the activation of dormant potential. Uranium does not
            move gently. It catalyzes change.
          </p>

          <p>
            This is a metal aligned with Air and Aquarius energy. Uranium
            resonates with innovation, rebellion, and the courage to overturn
            outdated structures. It supports vision that challenges convention
            and sparks evolution.
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
                <Link href="/grimoire/astrology/02-planets/08-uranus">
                  Uranus
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Ouranos</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
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
                <Link href="/grimoire/colors/09-green">Green</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Uranium tends to feel electric, disruptive, and catalytic. It
            supports rapid insight, sudden change, and the breaking of patterns
            that no longer serve. Uranium energy accelerates awareness and
            challenges stagnation.
          </p>

          <p>
            This metal is especially useful when radical transformation is
            necessary. Uranium reinforces courage in the face of upheaval and
            strengthens the will to evolve beyond outdated identity. It is not
            subtle energy. It is awakening energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* URANIUM IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Uranium in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/uranium-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Uranium symbolism is suited for breakthrough rituals, liberation
            work, and spells that focus on sudden change or innovation. It
            supports intentions tied to awakening, disruption of limitation,
            and visionary progress.
          </p>

          <p>
            Use uranium symbolically rather than physically. Represent its
            energy through imagery of light, electricity, or cosmic force.
            Uranium pairs well with clear, decisive intention. The intention
            that suits uranium best is simple: I awaken what is possible.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/uranium-folklore.png"
              alt="Uranium as a symbol of radical transformation and hidden power"
              className="grimoire-img"
            />
          </div>

          <p>
            Uranium has no ancient folklore, as its significance emerged in
            the modern era. Its discovery revealed that matter itself holds
            immense hidden power. That revelation reshaped science and
            humanity&apos;s understanding of energy.
          </p>

          <p>
            In a contemporary grimoire, uranium symbolizes awakening through
            knowledge. It is the metal of revelation and disruption. Uranium
            teaches that hidden potential, once activated, changes everything.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Uranium is radioactive and hazardous. Do not handle or use
            uranium physically in any ritual or craft context. Always rely on
            symbolic representation rather than material contact. Safety must
            remain absolute.
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