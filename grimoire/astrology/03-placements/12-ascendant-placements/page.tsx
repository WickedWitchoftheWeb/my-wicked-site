// app/grimoire/astrology/03-placements/12-ascendant-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function AscendantPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Ascendant Placements"
        coverImage=""
        subtitle="Click a Sign to Explore How the Ascendant Shapes Presence"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Ascendant placements describe the lens of approach: first impressions,
            immediate instincts, and the way an individual enters life. The sign
            of the Ascendant reveals how presence is carried in the body, how
            energy is introduced into a room, and what others tend to notice
            before deeper layers are known.
          </p>
          <p>
            These pages explore each Ascendant placement as an archetype. Each
            one includes expressions of the placement, a universal standpoint,
            and how the energy tends to respond in magickal work. The Ascendant
            is not a mask. It is the doorway.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "The Ascendant is the threshold of the psyche. It shapes how life is
            met before it is understood."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/01-aries-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aries Ascendant</h2>
              <img
                src="PASTE-ARIES-ASCENDANT-CARD-IMAGE-HERE"
                alt="Aries Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/02-taurus-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Taurus Ascendant</h2>
              <img
                src="PASTE-TAURUS-ASCENDANT-CARD-IMAGE-HERE"
                alt="Taurus Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/03-gemini-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Gemini Ascendant</h2>
              <img
                src="PASTE-GEMINI-ASCENDANT-CARD-IMAGE-HERE"
                alt="Gemini Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/04-cancer-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Cancer Ascendant</h2>
              <img
                src="PASTE-CANCER-ASCENDANT-CARD-IMAGE-HERE"
                alt="Cancer Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/05-leo-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Leo Ascendant</h2>
              <img
                src="PASTE-LEO-ASCENDANT-CARD-IMAGE-HERE"
                alt="Leo Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/06-virgo-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Virgo Ascendant</h2>
              <img
                src="PASTE-VIRGO-ASCENDANT-CARD-IMAGE-HERE"
                alt="Virgo Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/07-libra-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Libra Ascendant</h2>
              <img
                src="PASTE-LIBRA-ASCENDANT-CARD-IMAGE-HERE"
                alt="Libra Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/08-scorpio-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Scorpio Ascendant</h2>
              <img
                src="PASTE-SCORPIO-ASCENDANT-CARD-IMAGE-HERE"
                alt="Scorpio Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/09-sagittarius-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sagittarius Ascendant</h2>
              <img
                src="PASTE-SAGITTARIUS-ASCENDANT-CARD-IMAGE-HERE"
                alt="Sagittarius Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/10-capricorn-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Capricorn Ascendant</h2>
              <img
                src="PASTE-CAPRICORN-ASCENDANT-CARD-IMAGE-HERE"
                alt="Capricorn Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/11-aquarius-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aquarius Ascendant</h2>
              <img
                src="PASTE-AQUARIUS-ASCENDANT-CARD-IMAGE-HERE"
                alt="Aquarius Ascendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/12-ascendant-placements/12-pisces-ascendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pisces Ascendant</h2>
              <img
                src="PASTE-PISCES-ASCENDANT-CARD-IMAGE-HERE"
                alt="Pisces Ascendant"
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