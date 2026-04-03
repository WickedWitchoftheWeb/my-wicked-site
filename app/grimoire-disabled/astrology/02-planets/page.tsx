// app/grimoire/astrology/02-planets/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PlanetsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Planets"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/planets/planet-landing%202.png?updatedAt=1772138636664"
        subtitle="Click on a Planet to Decode Its Function"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            In astrology, the planets are the moving forces of your chart. Each
            one rules a different function of your psyche and your life: how you
            think, feel, desire, fight, love, fear, and transform.
          </p>
          <p>
            Together, they form the living machinery of your natal chart. Each
            planet expresses through the sign it occupies and the house it
            inhabits, revealing where its power plays out in your life.
          </p>
        </section>

        <section className="grimoire-quote">
  <p className="grimoire-quote-text">
    "The planets do not dictate who you are. They describe how you move.
    Each one is a function, a lever of consciousness, a current you learn to
    wield rather than obey."
  </p>
  <span className="wicked-signature">-Wicked</span>
</section>


        {/* Planet entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/01-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Sun</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun.png?updatedAt=1770062932786"
                alt="The Sun"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/02-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Moon</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon.png?updatedAt=1770062929581"
                alt="The Moon"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/03-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury.png?updatedAt=1770062928649"
                alt="Mercury"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/04-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus.png?updatedAt=1770062927489"
                alt="Venus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/05-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars.png?updatedAt=1770062928950"
                alt="Mars"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/06-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter.png?updatedAt=1770062927992"
                alt="Jupiter"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/07-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn.png?updatedAt=1770062927240"
                alt="Saturn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/08-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/uranus.png?updatedAt=1770062925667"
                alt="Uranus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/09-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune.png?updatedAt=1770062930285"
                alt="Neptune"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/10-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto.png?updatedAt=1770062932852"
                alt="Pluto"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/02-planets/11-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/1chiron.png"
                alt="Chiron"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>
        </section>

        {/* Footer links */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/astrology" className="grimoire-footer-link">
              ← Back to Astrology Grimoire
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