// app/grimoire/astrology/03-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/placement-cover.png"
        subtitle="Click a Placement Category to Explore the Archetypes"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Placements describe how planetary forces become personal. A planet is
            a function. A sign is a style of expression. When a planet is placed
            in a sign, the result is an archetype: a recognizable way that
            energy behaves when it lives inside a human life.
          </p>
          <p>
            These pages focus on the lived pattern. Each placement explores
            expression, universal meaning, and how the energy tends to respond in
            magickal work. This is not about being boxed in. It is about learning
            the language your chart is already speaking.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "A placement is not a label. It is a current. Once it is named, it
            can be directed."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Placement category entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/sun-placements.png"
                alt="Sun Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/moon-placements.png"
                alt="Moon Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/mercury-placements.png"
                alt="Mercury Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/venus-placements.png"
                alt="Venus Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/mars-placements.png"
                alt="Mars Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/jupiter-placements.png"
                alt="Jupiter Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/saturn-placements.png"
                alt="Saturn Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/uranus-placements.png"
                alt="Uranus Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/neptune-placements.png"
                alt="Neptune Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/pluto-placements.png"
                alt="Pluto Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/chiron-placements.png"
                alt="Chiron Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Ascendant Placements</h2>
              <img
                src="PASTE-ASCENDANT-PLACEMENTS-LANDING-IMAGE-HERE"
                alt="Ascendant Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Descendant Placements</h2>
              <img
                src="PASTE-DESCENDANT-PLACEMENTS-LANDING-IMAGE-HERE"
                alt="Descendant Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Midheaven Placements</h2>
              <img
                src="PASTE-MIDHEAVEN-PLACEMENTS-LANDING-IMAGE-HERE"
                alt="Midheaven Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/15-imum-coeli-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Imum Coeli Placements</h2>
              <img
                src="PASTE-IMUM-COELI-PLACEMENTS-LANDING-IMAGE-HERE"
                alt="Imum Coeli Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith Placements</h2>
              <img
                src="PASTE-LILITH-PLACEMENTS-LANDING-IMAGE-HERE"
                alt="Lilith Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/17-north-node-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">North Node Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/north-node-placements.png"
                alt="North Node Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/18-south-node-placements"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">South Node Placements</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/south-node-placements.png"
                alt="South Node Placements"
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