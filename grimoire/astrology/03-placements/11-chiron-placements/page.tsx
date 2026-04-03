// app/grimoire/astrology/03-placements/11-chiron-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function ChironPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Chiron Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/chiron-placements.png"
        subtitle="Click a Sign to Explore How Chiron Shapes Wounds and Healing"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Chiron placements describe the wound that teaches: the tender place
            where pain becomes wisdom, and where healing becomes a gift that can
            be shared. The sign of Chiron reveals how an individual carries
            sensitivity, shame, or struggle, and how that experience can
            transform into medicine.
          </p>
          <p>
            These pages explore each Chiron placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Chiron does not
            erase pain. Chiron reveals its purpose.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Chiron is the teacher of the psyche. It shapes how the wound
            becomes wisdom and how the scar becomes medicine."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/01-aries-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Aries</h2>
              <img
                src="PASTE-CHIRON-IN-ARIES-CARD-IMAGE-HERE"
                alt="Chiron in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/02-taurus-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Taurus</h2>
              <img
                src="PASTE-CHIRON-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Chiron in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/03-gemini-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Gemini</h2>
              <img
                src="PASTE-CHIRON-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Chiron in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/04-cancer-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Cancer</h2>
              <img
                src="PASTE-CHIRON-IN-CANCER-CARD-IMAGE-HERE"
                alt="Chiron in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/05-leo-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Leo</h2>
              <img
                src="PASTE-CHIRON-IN-LEO-CARD-IMAGE-HERE"
                alt="Chiron in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/06-virgo-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Virgo</h2>
              <img
                src="PASTE-CHIRON-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Chiron in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/07-libra-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Libra</h2>
              <img
                src="PASTE-CHIRON-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Chiron in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/08-scorpio-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Scorpio</h2>
              <img
                src="PASTE-CHIRON-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Chiron in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/09-sagittarius-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Sagittarius</h2>
              <img
                src="PASTE-CHIRON-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Chiron in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/10-capricorn-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Capricorn</h2>
              <img
                src="PASTE-CHIRON-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Chiron in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/11-aquarius-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Aquarius</h2>
              <img
                src="PASTE-CHIRON-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Chiron in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/11-chiron-placements/12-pisces-chiron"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Chiron in Pisces</h2>
              <img
                src="PASTE-CHIRON-IN-PISCES-CARD-IMAGE-HERE"
                alt="Chiron in Pisces"
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