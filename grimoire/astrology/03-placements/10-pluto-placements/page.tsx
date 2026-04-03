// app/grimoire/astrology/03-placements/10-pluto-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function PlutoPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Pluto Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/pluto-placements.png"
        subtitle="Click a Sign to Explore How Pluto Shapes Power and Transformation"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Pluto placements describe transformation, intensity, shadow work,
            power, and the places where the soul is forced to evolve. The sign
            of Pluto reveals how an individual confronts control, obsession,
            renewal, and the kind of change that cannot be undone.
          </p>
          <p>
            These pages explore each Pluto placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Pluto does not
            whisper. Pluto dismantles.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Pluto is the underworld of the psyche. It shapes what must be faced
            so something truer can rise."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/01-aries-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Aries</h2>
              <img
                src="PASTE-PLUTO-IN-ARIES-CARD-IMAGE-HERE"
                alt="Pluto in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/02-taurus-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Taurus</h2>
              <img
                src="PASTE-PLUTO-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Pluto in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/03-gemini-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Gemini</h2>
              <img
                src="PASTE-PLUTO-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Pluto in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/04-cancer-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Cancer</h2>
              <img
                src="PASTE-PLUTO-IN-CANCER-CARD-IMAGE-HERE"
                alt="Pluto in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/05-leo-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Leo</h2>
              <img
                src="PASTE-PLUTO-IN-LEO-CARD-IMAGE-HERE"
                alt="Pluto in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/06-virgo-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Virgo</h2>
              <img
                src="PASTE-PLUTO-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Pluto in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/07-libra-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Libra</h2>
              <img
                src="PASTE-PLUTO-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Pluto in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/08-scorpio-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Scorpio</h2>
              <img
                src="PASTE-PLUTO-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Pluto in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/09-sagittarius-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Sagittarius</h2>
              <img
                src="PASTE-PLUTO-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Pluto in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/10-capricorn-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Capricorn</h2>
              <img
                src="PASTE-PLUTO-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Pluto in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/11-aquarius-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Aquarius</h2>
              <img
                src="PASTE-PLUTO-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Pluto in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/10-pluto-placements/12-pisces-pluto"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Pluto in Pisces</h2>
              <img
                src="PASTE-PLUTO-IN-PISCES-CARD-IMAGE-HERE"
                alt="Pluto in Pisces"
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
