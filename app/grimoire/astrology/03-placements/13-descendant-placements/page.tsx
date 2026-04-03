// app/grimoire/astrology/03-placements/13-descendant-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function DescendantPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Descendant Placements"
        coverImage=""
        subtitle="Click a Sign to Explore How the Descendant Shapes Partnership"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Descendant placements describe relationship orientation: what an
            individual seeks, mirrors, and learns through partnership. The sign
            of the Descendant reveals the qualities a person is drawn toward in
            others, the kind of dynamic that creates balance, and the themes
            that tend to emerge in one-to-one bonds.
          </p>
          <p>
            These pages explore each Descendant placement as an archetype. Each
            one includes expressions of the placement, a universal standpoint,
            and how the energy tends to respond in magickal work. The Descendant
            is not just what you want. It is what completes the circuit.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "The Descendant is the mirror of the psyche. It shapes what we meet
            through others and what relationship asks us to become."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/01-aries-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aries Descendant</h2>
              <img
                src="PASTE-ARIES-DESCENDANT-CARD-IMAGE-HERE"
                alt="Aries Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/02-taurus-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Taurus Descendant</h2>
              <img
                src="PASTE-TAURUS-DESCENDANT-CARD-IMAGE-HERE"
                alt="Taurus Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/03-gemini-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Gemini Descendant</h2>
              <img
                src="PASTE-GEMINI-DESCENDANT-CARD-IMAGE-HERE"
                alt="Gemini Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/04-cancer-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Cancer Descendant</h2>
              <img
                src="PASTE-CANCER-DESCENDANT-CARD-IMAGE-HERE"
                alt="Cancer Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/05-leo-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Leo Descendant</h2>
              <img
                src="PASTE-LEO-DESCENDANT-CARD-IMAGE-HERE"
                alt="Leo Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/06-virgo-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Virgo Descendant</h2>
              <img
                src="PASTE-VIRGO-DESCENDANT-CARD-IMAGE-HERE"
                alt="Virgo Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/07-libra-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Libra Descendant</h2>
              <img
                src="PASTE-LIBRA-DESCENDANT-CARD-IMAGE-HERE"
                alt="Libra Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/08-scorpio-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Scorpio Descendant</h2>
              <img
                src="PASTE-SCORPIO-DESCENDANT-CARD-IMAGE-HERE"
                alt="Scorpio Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/09-sagittarius-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sagittarius Descendant</h2>
              <img
                src="PASTE-SAGITTARIUS-DESCENDANT-CARD-IMAGE-HERE"
                alt="Sagittarius Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/10-capricorn-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Capricorn Descendant</h2>
              <img
                src="PASTE-CAPRICORN-DESCENDANT-CARD-IMAGE-HERE"
                alt="Capricorn Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/11-aquarius-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Aquarius Descendant</h2>
              <img
                src="PASTE-AQUARIUS-DESCENDANT-CARD-IMAGE-HERE"
                alt="Aquarius Descendant"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/13-descendant-placements/12-pisces-descendant"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pisces Descendant</h2>
              <img
                src="PASTE-PISCES-DESCENDANT-CARD-IMAGE-HERE"
                alt="Pisces Descendant"
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