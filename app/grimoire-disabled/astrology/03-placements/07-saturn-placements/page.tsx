// app/grimoire/astrology/03-placements/07-saturn-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SaturnPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Saturn Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/saturn-placements.png"
        subtitle="Click a Sign to Explore How Saturn Shapes Discipline and Lessons"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Saturn placements describe structure, responsibility, fear, mastery,
            and the slow building of strength. The sign of Saturn reveals where
            an individual meets limitation, develops discipline, and learns
            endurance through lived experience.
          </p>
          <p>
            These pages explore each Saturn placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Saturn does not
            punish. Saturn shapes.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Saturn is the forge of the psyche. It shapes what lasts by teaching
            what must be carried with intention."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/01-aries-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Aries</h2>
              <img
                src="PASTE-SATURN-IN-ARIES-CARD-IMAGE-HERE"
                alt="Saturn in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/02-taurus-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Taurus</h2>
              <img
                src="PASTE-SATURN-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Saturn in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/03-gemini-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Gemini</h2>
              <img
                src="PASTE-SATURN-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Saturn in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/04-cancer-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Cancer</h2>
              <img
                src="PASTE-SATURN-IN-CANCER-CARD-IMAGE-HERE"
                alt="Saturn in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Leo</h2>
              <img
                src="PASTE-SATURN-IN-LEO-CARD-IMAGE-HERE"
                alt="Saturn in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/06-virgo-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Virgo</h2>
              <img
                src="PASTE-SATURN-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Saturn in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Libra</h2>
              <img
                src="PASTE-SATURN-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Saturn in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/08-scorpio-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Scorpio</h2>
              <img
                src="PASTE-SATURN-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Saturn in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/09-sagittarius-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Sagittarius</h2>
              <img
                src="PASTE-SATURN-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Saturn in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Capricorn</h2>
              <img
                src="PASTE-SATURN-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Saturn in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Aquarius</h2>
              <img
                src="PASTE-SATURN-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Saturn in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/07-saturn-placements/12-pisces-saturn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Saturn in Pisces</h2>
              <img
                src="PASTE-SATURN-IN-PISCES-CARD-IMAGE-HERE"
                alt="Saturn in Pisces"
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