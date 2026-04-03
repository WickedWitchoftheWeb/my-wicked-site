// app/grimoire/astrology/03-placements/14-midheaven-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MidheavenPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Midheaven Placements"
        coverImage=""
        subtitle="Click a Sign to Explore How the Midheaven Shapes Calling"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Midheaven placements describe public direction: reputation, vocation,
            visibility, and the way an individual is recognized in the world.
            The sign of the Midheaven reveals how ambition is shaped, what kind
            of work feels meaningful, and what others tend to associate with a
            person&apos;s impact.
          </p>
          <p>
            These pages explore each Midheaven placement as an archetype. Each
            one includes expressions of the placement, a universal standpoint,
            and how the energy tends to respond in magickal work. The Midheaven
            is not only what you do. It is what you build in daylight.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "The Midheaven is the summit of the psyche. It shapes what we are
            known for and what we rise to build."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/01-aries-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aries Midheaven</h2>
              <img
                src="PASTE-ARIES-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Aries Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/02-taurus-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Taurus Midheaven</h2>
              <img
                src="PASTE-TAURUS-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Taurus Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/03-gemini-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Gemini Midheaven</h2>
              <img
                src="PASTE-GEMINI-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Gemini Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/04-cancer-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Cancer Midheaven</h2>
              <img
                src="PASTE-CANCER-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Cancer Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/05-leo-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Leo Midheaven</h2>
              <img
                src="PASTE-LEO-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Leo Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/06-virgo-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Virgo Midheaven</h2>
              <img
                src="PASTE-VIRGO-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Virgo Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/07-libra-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Libra Midheaven</h2>
              <img
                src="PASTE-LIBRA-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Libra Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/08-scorpio-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Scorpio Midheaven</h2>
              <img
                src="PASTE-SCORPIO-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Scorpio Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/09-sagittarius-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sagittarius Midheaven</h2>
              <img
                src="PASTE-SAGITTARIUS-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Sagittarius Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/10-capricorn-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Capricorn Midheaven</h2>
              <img
                src="PASTE-CAPRICORN-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Capricorn Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/11-aquarius-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aquarius Midheaven</h2>
              <img
                src="PASTE-AQUARIUS-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Aquarius Midheaven"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/14-midheaven-placements/12-pisces-midheaven"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pisces Midheaven</h2>
              <img
                src="PASTE-PISCES-MIDHEAVEN-CARD-IMAGE-HERE"
                alt="Pisces Midheaven"
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