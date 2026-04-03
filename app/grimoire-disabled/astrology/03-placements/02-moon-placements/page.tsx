// app/grimoire/astrology/03-placements/02-moon-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MoonPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Moon Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/moon-placements.png"
        subtitle="Click a Sign to Explore How the Moon Expresses Emotional Needs"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Moon placements describe the emotional body: instinct, comfort,
            memory, and the needs that shape how an individual seeks safety and
            connection. The sign of the Moon reveals how a person processes
            feeling, restores balance, and builds inner security.
          </p>
          <p>
            These pages explore each Moon placement as an archetype. Each one
            includes expressions of the placement, a universal standpoint, and
            how the energy tends to respond in magickal work. The Moon does not
            demand perfection. It asks one question: what helps the soul feel
            held?
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "The Moon is the part of the soul that remembers. It forms a life by
            protecting what is tender and learning how to feel safe enough to
            bloom."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/01-aries-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Aries</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/02-aries-moon/aries-moon.png?updatedAt=1770062733185"
                alt="Moon in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/02-taurus-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Taurus</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/02-taurus/02-taurus-moon/taurus-moon.png?updatedAt=1770062733264"
                alt="Moon in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/03-gemini-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Gemini</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/02-gemini-moon/gemini-moon.png?updatedAt=1770062733494"
                alt="Moon in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/04-cancer-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Cancer</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/02-cancer-moon/cancer-moon.png"
                alt="Moon in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/05-leo-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Leo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/02-leo-moon/moon-leo.png"
                alt="Moon in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/06-virgo-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Virgo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/02-virgo-moon/moon-virgo.png"
                alt="Moon in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/07-libra-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Libra</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/02-libra-moon/moon-libra.png"
                alt="Moon in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/08-scorpio-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Scorpio</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/02-scorpio-moon/moon-scorpio.png"
                alt="Moon in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/09-sagittarius-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Sagittarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/02-sagittarius-moon/moon-sagittarius.png"
                alt="Moon in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/10-capricorn-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Capricorn</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/02-capricorn-moon/moon-capricorn.png"
                alt="Moon in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/11-aquarius-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Aquarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/02-aquarius-moon/moon-aquarius.png"
                alt="Moon in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/02-moon-placements/12-pisces-moon"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Moon in Pisces</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/02-pisces-moon/moon-pisces.png"
                alt="Moon in Pisces"
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