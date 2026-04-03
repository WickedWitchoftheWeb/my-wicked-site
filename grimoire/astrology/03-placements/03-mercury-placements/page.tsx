// app/grimoire/astrology/03-placements/03-mercury-placements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MercuryPlacementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Mercury Placements"
        coverImage="https://ik.imagekit.io/w1ck3d/astrology/placements/mercury-placements.png"
        subtitle="Click a Sign to Explore How Mercury Shapes Thought and Communication"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Mercury placements describe the mental current: perception,
            communication, learning, and the way information moves through an
            individual’s awareness. The sign of Mercury reveals how a person
            thinks, speaks, processes experience, and translates inner knowing
            into language.
          </p>
          <p>
            These pages explore each Mercury placement as an archetype. Each one
            examines how the mind expresses itself, how ideas are formed and
            shared, and how this energy tends to behave in magickal work.
            Mercury does not decide what is true. It decides how truth is
            carried.
          </p>
        </section>

        <section className="grimoire-quote">
          <p className="grimoire-quote-text">
            "Mercury is the voice of the psyche. It shapes how reality is named,
            navigated, and made intelligible."
          </p>
          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* Sign entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/01-aries-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Aries</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/05-aries-mercury/aries-mercury.png?updatedAt=1770062733058"
                alt="Mercury in Aries"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/02-taurus-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Taurus</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/02-taurus/05-taurus-mercury/taurus-mercury.png?updatedAt=1770062733431"
                alt="Mercury in Taurus"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Gemini</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/05-gemini-mercury/gemini-mercury.png?updatedAt=1770062733157"
                alt="Mercury in Gemini"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/04-cancer-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Cancer</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/05-cancer-mercury/mercury-cancer.png"
                alt="Mercury in Cancer"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/05-leo-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Leo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/05-leo-mercury/mercury-leo.png"
                alt="Mercury in Leo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Virgo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/05-virgo-mercury/mercury-virgo.png"
                alt="Mercury in Virgo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/07-libra-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Libra</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/05-libra-mercury/mercury-libra.png"
                alt="Mercury in Libra"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/08-scorpio-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Scorpio</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/05-scorpio-mercury/mercury-scorpio.png"
                alt="Mercury in Scorpio"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Sagittarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/05-sagittarius-mercury/mercury-sagittarius.png"
                alt="Mercury in Sagittarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/10-capricorn-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Capricorn</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/05-capricorn-mercury/mercury-capricorn.png"
                alt="Mercury in Capricorn"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/11-aquarius-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Aquarius</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/05-aquarius-mercury/mercury-aquarius.png"
                alt="Mercury in Aquarius"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">Mercury in Pisces</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/05-pisces-mercury/mercury-pisces.png"
                alt="Mercury in Pisces"
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