// app/grimoire/astrology/03-placements/04-venus-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function VenusPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Venus Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/venus-placements.png"
        subtitle="Click a Sign to Explore How Venus Shapes Love and Desire"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Venus placements describe attraction, relationship style, values,
            pleasure, and the way an individual gives and receives affection.
            The sign of Venus reveals how love is expressed, what is considered
            beautiful, and what the heart seeks in order to feel cherished.
          </p>
          <p>
            These pages explore each Venus placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Venus does not
            chase what is empty. Venus seeks what is worthy.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Venus is the magnetic center of the psyche. It shapes what we long
            for, what we value, and what we are willing to tend."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/01-aries-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Aries</h2>
              <img
                src="PASTE-VENUS-IN-ARIES-CARD-IMAGE-HERE"
                alt="Venus in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/02-taurus-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Taurus</h2>
              <img
                src="PASTE-VENUS-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Venus in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/03-gemini-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Gemini</h2>
              <img
                src="PASTE-VENUS-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Venus in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/04-cancer-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Cancer</h2>
              <img
                src="PASTE-VENUS-IN-CANCER-CARD-IMAGE-HERE"
                alt="Venus in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/05-leo-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Leo</h2>
              <img
                src="PASTE-VENUS-IN-LEO-CARD-IMAGE-HERE"
                alt="Venus in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/06-virgo-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Virgo</h2>
              <img
                src="PASTE-VENUS-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Venus in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/07-libra-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Libra</h2>
              <img
                src="PASTE-VENUS-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Venus in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/08-scorpio-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Scorpio</h2>
              <img
                src="PASTE-VENUS-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Venus in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/09-sagittarius-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Sagittarius</h2>
              <img
                src="PASTE-VENUS-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Venus in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/10-capricorn-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Capricorn</h2>
              <img
                src="PASTE-VENUS-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Venus in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/11-aquarius-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Aquarius</h2>
              <img
                src="PASTE-VENUS-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Venus in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/04-venus-placements/12-pisces-venus"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Venus in Pisces</h2>
              <img
                src="PASTE-VENUS-IN-PISCES-CARD-IMAGE-HERE"
                alt="Venus in Pisces"
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