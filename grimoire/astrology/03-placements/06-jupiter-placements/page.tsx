// app/grimoire/astrology/03-placements/06-jupiter-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function JupiterPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Jupiter Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/jupiter-placements.png"
        subtitle="Click a Sign to Explore How Jupiter Shapes Growth and Meaning"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Jupiter placements describe expansion, belief, wisdom, luck, and the
            way an individual seeks meaning. The sign of Jupiter reveals how a
            person grows, what they trust, how they learn from life, and where
            they tend to experience opportunity and abundance.
          </p>
          <p>
            These pages explore each Jupiter placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Jupiter does not
            promise comfort. Jupiter promises enlargement.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Jupiter is the horizon of the psyche. It shapes what we believe is
            possible and how we grow toward it."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/01-aries-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Aries</h2>
              <img
                src="PASTE-JUPITER-IN-ARIES-CARD-IMAGE-HERE"
                alt="Jupiter in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/02-taurus-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Taurus</h2>
              <img
                src="PASTE-JUPITER-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Jupiter in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/03-gemini-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Gemini</h2>
              <img
                src="PASTE-JUPITER-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Jupiter in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/04-cancer-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Cancer</h2>
              <img
                src="PASTE-JUPITER-IN-CANCER-CARD-IMAGE-HERE"
                alt="Jupiter in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/05-leo-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Leo</h2>
              <img
                src="PASTE-JUPITER-IN-LEO-CARD-IMAGE-HERE"
                alt="Jupiter in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/06-virgo-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Virgo</h2>
              <img
                src="PASTE-JUPITER-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Jupiter in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/07-libra-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Libra</h2>
              <img
                src="PASTE-JUPITER-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Jupiter in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/08-scorpio-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Scorpio</h2>
              <img
                src="PASTE-JUPITER-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Jupiter in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/09-sagittarius-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Sagittarius</h2>
              <img
                src="PASTE-JUPITER-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Jupiter in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/10-capricorn-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Capricorn</h2>
              <img
                src="PASTE-JUPITER-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Jupiter in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/11-aquarius-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Aquarius</h2>
              <img
                src="PASTE-JUPITER-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Jupiter in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/06-jupiter-placements/12-pisces-jupiter"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Jupiter in Pisces</h2>
              <img
                src="PASTE-JUPITER-IN-PISCES-CARD-IMAGE-HERE"
                alt="Jupiter in Pisces"
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
