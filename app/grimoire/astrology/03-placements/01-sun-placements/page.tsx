// app/grimoire/astrology/03-placements/01-sun-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SunPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Sun Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/sun-placements.png"
        subtitle="Click a Sign to Explore How the Sun Expresses Identity"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Sun placements describe the core of identity: vitality, selfhood,
            purpose, and the inner authority that organizes a life from the
            center outward. The sign of the Sun reveals how an individual tends
            to embody confidence, direction, and creative will.
          </p>
          <p>
            These pages explore each Sun placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. The Sun does not
            ask permission to shine. It asks one question: what is it here to
            become?
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "The Sun is the part of the soul that refuses to stay hidden. It
            forms a life by choosing a direction and becoming it."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/01-aries-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Aries</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/01-aries-sun/aries-sun.PNG?updatedAt=1770062733347"
                alt="Sun in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/02-taurus-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Taurus</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/02-taurus/01-taurus-sun/taurus-sun.png?updatedAt=1770062732954"
                alt="Sun in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/01-gemini-sun/gemini-sun.png?updatedAt=1770062733089"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Gemini</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/01-gemini-sun/gemini-sun.png?updatedAt=1770062733089"
                alt="Sun in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/04-cancer-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Cancer</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/01-cancer-sun/sun-cancer.png"
                alt="Sun in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/05-leo-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Leo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/01-leo-sun/sun-leo.png"
                alt="Sun in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/06-virgo-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Virgo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/01-virgo-sun/sun-virgo.png"
                alt="Sun in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/07-libra-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Libra</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/01-libra-sun/sun-libra.png"
                alt="Sun in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/08-scorpio-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Scorpio</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/01-scorpio-sun/sun-scorpio.png"
                alt="Sun in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/09-sagittarius-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Sagittarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/01-sagittarius-sun/sun-sagittarius.png"
                alt="Sun in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/10-capricorn-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Capricorn</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/01-capricorn-sun/sun-capricorn.png"
                alt="Sun in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/11-aquarius-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Aquarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/01-aquarius-sun/sun-aquarius.png"
                alt="Sun in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/01-sun-placements/12-pisces-sun"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Sun in Pisces</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/01-pisces-sun/sun-pisces.png"
                alt="Sun in Pisces"
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