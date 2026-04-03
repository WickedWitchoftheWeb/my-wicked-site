// app/grimoire/energy-grimoire/energy/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function EnergyLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Energy">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/energy-grim/yin-yang.png"
            alt="Yin and Yang Symbol"
            className="grimoire-hero-img"
          />
        </section>

        {/* INTRO COPY */}
        <section className="grimoire-section grimoire-text">
          <p>
            Energy is the invisible current beneath all experience. It moves
            through thought, emotion, body, environment, and intention. Across
            traditions, energy is described not as a single force, but as two
            complementary expressions in relationship.
          </p>

          <p>
            These expressions are not moral categories and they are not limited
            to gender. They are patterns of movement. One draws inward. One
            radiates outward. One restores. One builds. Both are necessary.
          </p>

          <p>
            To understand energy is to understand rhythm: when to soften, when
            to act, when to receive, when to initiate.
          </p>
        </section>

        {/* ENERGY CARDS */}
        <section className="grimoire-grid">
          {/* YIN CARD */}
          <div className="grimoire-card">
            <Link
              href="/grimoire/energy-grimoire/energy/feminine-night-yin"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">
                Feminine / Night / Yin
              </h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/energy-grim/yin.png"
                alt="Feminine Night Yin"
                className="grimoire-card-img"
              />
            </Link>

            <div className="grimoire-divider" />
          </div>

          {/* YANG CARD */}
          <div className="grimoire-card">
            <Link
              href="/grimoire/energy-grimoire/energy/masculine-day-yang"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">
                Masculine / Day / Yang
              </h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/energy-grim/yang1.png"
                alt="Masculine Day Yang"
                className="grimoire-card-img"
              />
            </Link>

            <div className="grimoire-divider" />
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/energy-grimoire"
              className="grimoire-footer-link"
            >
              ← Back to The Energy Grimoire
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire"
              className="grimoire-footer-link"
            >
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}