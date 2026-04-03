// app/grimoire/astrology/03-placements/09-neptune-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function NeptunePlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Neptune Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/neptune-placements.png"
        subtitle="Click a Sign to Explore How Neptune Shapes Dreams and Dissolution"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Neptune placements describe imagination, spirituality, illusion,
            longing, and the places where reality becomes porous. The sign of
            Neptune reveals how an individual dreams, escapes, idealizes, and
            dissolves boundaries in search of meaning and transcendence.
          </p>
          <p>
            These pages explore each Neptune placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Neptune does not
            demand certainty. Neptune invites surrender.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Neptune is the ocean of the psyche. It shapes what we yearn for,
            what we dissolve into, and what we must see clearly to heal."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/01-aries-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Aries</h2>
              <img
                src="PASTE-NEPTUNE-IN-ARIES-CARD-IMAGE-HERE"
                alt="Neptune in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/02-taurus-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Taurus</h2>
              <img
                src="PASTE-NEPTUNE-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Neptune in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/03-gemini-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Gemini</h2>
              <img
                src="PASTE-NEPTUNE-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Neptune in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/04-cancer-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Cancer</h2>
              <img
                src="PASTE-NEPTUNE-IN-CANCER-CARD-IMAGE-HERE"
                alt="Neptune in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/05-leo-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Leo</h2>
              <img
                src="PASTE-NEPTUNE-IN-LEO-CARD-IMAGE-HERE"
                alt="Neptune in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/06-virgo-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Virgo</h2>
              <img
                src="PASTE-NEPTUNE-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Neptune in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/07-libra-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Libra</h2>
              <img
                src="PASTE-NEPTUNE-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Neptune in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/08-scorpio-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Scorpio</h2>
              <img
                src="PASTE-NEPTUNE-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Neptune in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/09-sagittarius-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Sagittarius</h2>
              <img
                src="PASTE-NEPTUNE-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Neptune in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/10-capricorn-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Capricorn</h2>
              <img
                src="PASTE-NEPTUNE-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Neptune in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/11-aquarius-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Aquarius</h2>
              <img
                src="PASTE-NEPTUNE-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Neptune in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/09-neptune-placements/12-pisces-neptune"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Neptune in Pisces</h2>
              <img
                src="PASTE-NEPTUNE-IN-PISCES-CARD-IMAGE-HERE"
                alt="Neptune in Pisces"
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