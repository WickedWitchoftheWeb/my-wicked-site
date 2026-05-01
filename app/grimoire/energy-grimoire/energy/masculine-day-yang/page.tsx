// app/grimoire/energy-grimoire/energy/masculine-day-yang/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MasculineDayYangPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Masculine / Day / Yang">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/energy-grim/yang1.png"
            alt="Masculine Day Yang"
            className="grimoire-hero-img"
          />
        </section>

        {/* INTRO */}
        <section className="grimoire-section">
          <div className="grimoire-text">
            <p>
              Masculine, or yang energy, is the active counterpart to yin in the
              ancient balance of yin and yang. Where yin is receptive, inward,
              and lunar, yang is expressive, outward, and solar. It is the energy
              of day, action, clarity, and forward movement.
            </p>

            <p>
              Yang does not mean “male” in a literal sense. It describes an
              energetic direction. It initiates rather than absorbs. It projects
              rather than gathers. It builds, protects, and brings what is
              imagined into form.
            </p>

            <p>Yang is day energy.</p>

            <p>
              Daylight reveals. It sharpens edges. It shows what is true, what
              is ready, and what must be faced. It is the current of visibility:
              the part of life that steps forward, makes contact, and takes
              responsibility for impact.
            </p>

            <p>
              The masculine light is not domination, and it is not force for its
              own sake. It is directed power: the will to choose, the courage to
              act, and the discipline to follow through. Without yang, nothing
              rises from the dark soil. Nothing becomes real.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE QUALITIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Core Qualities</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Action and Expression</h3>
              <p className="grimoire-correspondence-value">
                Yang moves outward. It initiates, speaks up, and translates ideas
                into motion. It is the current of decision, execution, and
                visible effort.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Clarity and Illumination</h3>
              <p className="grimoire-correspondence-value">
                Associated with the sun and daytime, yang brings light, awareness,
                and direct perception. It helps you name what is happening,
                choose a direction, and cut through confusion.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Strength and Structure</h3>
              <p className="grimoire-correspondence-value">
                Yang builds frameworks that hold growth. It protects boundaries,
                organizes resources, and creates stability through form. It is
                the spine of intention.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Willpower and Momentum</h3>
              <p className="grimoire-correspondence-value">
                Yang thrives on movement and determination. It pushes through
                resistance, sustains effort, and carries energy forward until a
                goal becomes tangible.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* SYMBOLISM */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Symbolism</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Elemental</h3>
              <p className="grimoire-correspondence-value">
                Fire, air, and the sun.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Cycle</h3>
              <p className="grimoire-correspondence-value">
                Daytime, summer, and the waxing brightness of the solar year.
                These are periods of expansion, outward growth, and visible
                action.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Archetypes</h3>
              <p className="grimoire-correspondence-value">
                The Leader, the Warrior, the Builder, the Visionary. Figures of
                initiative, protection, direction, and purposeful creation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* IN BALANCE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">In Balance</h2>

          <div className="grimoire-text">
            <p>
              When yang is in harmony, it cultivates courage, confidence, clarity,
              vitality, and purpose. It energizes the pursuit of goals, supports
              healthy boundaries, and turns vision into real-world progress.
            </p>

            <p>
              Balanced yang acts with integrity. It leads without crushing. It
              protects without controlling. It uses power as a tool for creation,
              not as a weapon for dominance.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* OUT OF BALANCE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Out of Balance</h2>

          <div className="grimoire-text">
            <p>
              When excessive, yang may turn into aggression, burnout, dominance,
              or restlessness. Action becomes compulsive. Control replaces
              leadership. Movement becomes noise.
            </p>

            <p>
              When deficient, one may feel unmotivated, unclear, lethargic, or
              powerless. Ideas remain trapped in potential. Boundaries weaken.
              Direction fades.
            </p>

            <p>
              Yang reminds us that to shine outward, we must also anchor inward.
              Its fire burns brightest when balanced with yin’s cool water.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/energy-grimoire/energy"
              className="grimoire-footer-link"
            >
              ← Back to Energy
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire/energy-grimoire"
              className="grimoire-footer-link"
            >
              ← Back to The Energy Grimoire
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