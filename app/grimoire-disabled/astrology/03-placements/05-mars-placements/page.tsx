// app/grimoire/astrology/03-placements/05-mars-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MarsPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Mars Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/mars-placements.png"
        subtitle="Click a Sign to Explore How Mars Shapes Drive and Action"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Mars placements describe desire in motion: drive, assertion, anger,
            pursuit, and the way an individual takes action. The sign of Mars
            reveals how a person fights, defends boundaries, goes after what is
            wanted, and handles conflict and pressure.
          </p>
          <p>
            These pages explore each Mars placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Mars does not
            negotiate with fear. Mars teaches the will to move.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Mars is the engine of the psyche. It shapes how we pursue, protect,
            and prove our power through action."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/01-aries-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Aries</h2>
              <img
                src="PASTE-MARS-IN-ARIES-CARD-IMAGE-HERE"
                alt="Mars in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Taurus</h2>
              <img
                src="PASTE-MARS-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Mars in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/03-gemini-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Gemini</h2>
              <img
                src="PASTE-MARS-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Mars in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/04-cancer-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Cancer</h2>
              <img
                src="PASTE-MARS-IN-CANCER-CARD-IMAGE-HERE"
                alt="Mars in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/05-leo-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Leo</h2>
              <img
                src="PASTE-MARS-IN-LEO-CARD-IMAGE-HERE"
                alt="Mars in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/06-virgo-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Virgo</h2>
              <img
                src="PASTE-MARS-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Mars in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/07-libra-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Libra</h2>
              <img
                src="PASTE-MARS-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Mars in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/08-scorpio-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Scorpio</h2>
              <img
                src="PASTE-MARS-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Mars in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/09-sagittarius-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Sagittarius</h2>
              <img
                src="PASTE-MARS-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Mars in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Capricorn</h2>
              <img
                src="PASTE-MARS-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Mars in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/11-aquarius-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Aquarius</h2>
              <img
                src="PASTE-MARS-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Mars in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/05-mars-placements/12-pisces-mars"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mars in Pisces</h2>
              <img
                src="PASTE-MARS-IN-PISCES-CARD-IMAGE-HERE"
                alt="Mars in Pisces"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>
        </section>

        {/* Footer links */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/astrology/03-placements"
              className="grimoire-footer-link"
            >
              ← Back to Placements
            </Link>
          </p>

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