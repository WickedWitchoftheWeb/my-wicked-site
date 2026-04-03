// app/grimoire/astrology/03-placements/16-lilith-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function LilithPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Lilith Placements"
        coverImage=""
        subtitle="Click a Sign to Explore How Lilith Shapes Shadow Desire"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Lilith placements describe untamed power: the places where the psyche
            refuses submission, where desire becomes raw, and where shame is
            transmuted into sovereignty. The sign of Lilith reveals how an
            individual relates to taboo, autonomy, and the parts of the self that
            will not be domesticated.
          </p>
          <p>
            These pages explore each Lilith placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. Lilith does not
            ask to be accepted. Lilith insists on truth.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Lilith is the wild edge of the psyche. It shapes where we refuse
            control and reclaim what was exiled."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/01-aries-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Aries</h2>
              <img
                src="PASTE-LILITH-IN-ARIES-CARD-IMAGE-HERE"
                alt="Lilith in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/02-taurus-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Taurus</h2>
              <img
                src="PASTE-LILITH-IN-TAURUS-CARD-IMAGE-HERE"
                alt="Lilith in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/03-gemini-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Gemini</h2>
              <img
                src="PASTE-LILITH-IN-GEMINI-CARD-IMAGE-HERE"
                alt="Lilith in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/04-cancer-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Cancer</h2>
              <img
                src="PASTE-LILITH-IN-CANCER-CARD-IMAGE-HERE"
                alt="Lilith in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/05-leo-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Leo</h2>
              <img
                src="PASTE-LILITH-IN-LEO-CARD-IMAGE-HERE"
                alt="Lilith in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/06-virgo-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Virgo</h2>
              <img
                src="PASTE-LILITH-IN-VIRGO-CARD-IMAGE-HERE"
                alt="Lilith in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/07-libra-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Libra</h2>
              <img
                src="PASTE-LILITH-IN-LIBRA-CARD-IMAGE-HERE"
                alt="Lilith in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/08-scorpio-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Scorpio</h2>
              <img
                src="PASTE-LILITH-IN-SCORPIO-CARD-IMAGE-HERE"
                alt="Lilith in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/09-sagittarius-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Sagittarius</h2>
              <img
                src="PASTE-LILITH-IN-SAGITTARIUS-CARD-IMAGE-HERE"
                alt="Lilith in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/10-capricorn-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Capricorn</h2>
              <img
                src="PASTE-LILITH-IN-CAPRICORN-CARD-IMAGE-HERE"
                alt="Lilith in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/11-aquarius-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Aquarius</h2>
              <img
                src="PASTE-LILITH-IN-AQUARIUS-CARD-IMAGE-HERE"
                alt="Lilith in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/16-lilith-placements/12-pisces-lilith"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Lilith in Pisces</h2>
              <img
                src="PASTE-LILITH-IN-PISCES-CARD-IMAGE-HERE"
                alt="Lilith in Pisces"
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