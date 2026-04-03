// app/grimoire/astrology/03-placements/08-uranus-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function UranusPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Uranus Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/uranus-placements.png"
        subtitle="Click a Sign to Explore How Uranus Shapes Change and Liberation"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Uranus placements describe disruption, innovation, awakening, and
            the urge to break patterns. The sign of Uranus reveals how an
            individual seeks freedom, where they resist control, and how they
            express originality and rebellion.
          </p>
          <p>
            These pages explore each Uranus placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Uranus does not
            adapt slowly. Uranus strikes the match.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Uranus is the lightning of the psyche. It breaks what is false so
            something truer can be born."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/01-aries-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Aries</h2>
              <img
                src="PASTE-URANUS-IN-ARIES-CARD-IMAGE-HERE"
                alt="Uranus in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/02-taurus-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Taurus</h2>
              <img
                src="PASTE-URANUS-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Uranus in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/03-gemini-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Gemini</h2>
              <img
                src="PASTE-URANUS-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Uranus in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/04-cancer-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Cancer</h2>
              <img
                src="PASTE-URANUS-IN-CANCER-CARD-IMAGE-HERE"
                alt="Uranus in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/05-leo-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Leo</h2>
              <img
                src="PASTE-URANUS-IN-LEO-CARD-IMAGE-HERE"
                alt="Uranus in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/06-virgo-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Virgo</h2>
              <img
                src="PASTE-URANUS-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Uranus in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/07-libra-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Libra</h2>
              <img
                src="PASTE-URANUS-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Uranus in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/08-scorpio-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Scorpio</h2>
              <img
                src="PASTE-URANUS-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Uranus in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/09-sagittarius-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Sagittarius</h2>
              <img
                src="PASTE-URANUS-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Uranus in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/10-capricorn-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Capricorn</h2>
              <img
                src="PASTE-URANUS-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Uranus in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/11-aquarius-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Aquarius</h2>
              <img
                src="PASTE-URANUS-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Uranus in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/08-uranus-placements/12-pisces-uranus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Uranus in Pisces</h2>
              <img
                src="PASTE-URANUS-IN-PISCES-CARD-IMAGE-HERE"
                alt="Uranus in Pisces"
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