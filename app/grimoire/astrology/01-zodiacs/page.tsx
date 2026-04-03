// app/grimoire/astrology/01-zodiacs/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ZodiacLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Twelve Signs of the Zodiac"
        coverImage="https://ik.imagekit.io/w1ck3d/zodiacs/zodiac-cover.jpg"
        subtitle="Click on a Sign to Decode Its Energy"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            Ancient astrologers used constellations to divide the sky into twelve
            sections, referred to as signs or the zodiacs.
          </p>
          <p>
            We use these zodiacs to understand personality traits and life events
            based on the time and date of an individual&apos;s birth. If possible,
            it&apos;s best to have your exact birth time so a complete natal chart
            can be calculated because this is what reveals the full star coding
            that makes up a person.
          </p>
          <p>
            Most people know their Sun sign, but there is so much more to a soul
            than that. When you were born, each celestial body was stationed in a
            particular zodiac constellation, and each of those placements speaks
            to different areas of your life; their correspondences, and the
            stories they tell about you.
          </p>
        </section>

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              This section gives you the <strong>essence</strong> of each zodiac.
              Its intention is to help you get to know each sign on a deeper
              level.
            </p>
            <p>
              This is <strong>not</strong> a section about specific planetary
              placements. What you&apos;ll find here is a collection of traits
              and correspondences for each sign itself: not a direct depiction of
              a person with their Sun in that sign, though you will find
              similarities.
            </p>
            <p>
              If you&apos;re looking for specific planet placements for a sign,
              navigate to the{" "}
              <Link
                href="/grimoire/astrology/planetary-placements"
                className="grimoire-link"
              >
                Planetary Placements
              </Link>{" "}
              section.
            </p>
          </div>

          <h2 className="grimoire-note-heading">Wicked Note</h2>

          <div className="grimoire-text">
            <p>
              To get the most from this grimoire, you&apos;ll want access to your{" "}
              <strong>natal chart</strong>: a map of where the planets were when
              you were born. There are many free tools online and in app form
              that will calculate a basic chart for you; all you need is your
              birth date, time, and location.
            </p>
            <p>
              Choose any reputable chart calculator you like for now. In the
              future, you&apos;ll be able to generate your natal chart directly
              here on <strong>The Wicked Witch of the Web</strong>: no third-party
              tools required. Until then, use whatever chart generator feels good
              to you, bring your results back, and let&apos;s explore your sky
              together.
            </p>
            <p>
              In this Astrological Grimoire, you&apos;ll find the general traits
              of each zodiac, their correspondences, Greek names, and the myths
              of how the signs came to be. Below, you&apos;ll also find links for
              each planetary placement in that sign. I&apos;ve spent years
              weaving this information together for you, cosmic explorer. Thank
              you for visiting my web.
            </p>
          </div>

          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* 12 zodiac entries */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/01-aries" className="wicked-link">
              <h2 className="grimoire-card-title">The Aries Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/00-aries-zodiac/aries-zodiac.png?updatedAt=1770062733607"
                alt="The Aries Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/02-taurus" className="wicked-link">
              <h2 className="grimoire-card-title">The Taurus Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/02-taurus/00-taurus-zodiac/taurus-zodiac.png?updatedAt=1770062733112"
                alt="The Taurus Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/03-gemini" className="wicked-link">
              <h2 className="grimoire-card-title">The Gemini Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/00-gemini-zodiac/1zodiac-gemini.png?updatedAt=1770062732809"
                alt="The Gemini Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/04-cancer" className="wicked-link">
              <h2 className="grimoire-card-title">The Cancer Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/00-cancer-zodiac/zodiac-cancer.png?updatedAt=1770062733356"
                alt="The Cancer Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/05-leo" className="wicked-link">
              <h2 className="grimoire-card-title">The Leo Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/00-leo-zodiac/zodiac-leo.png?updatedAt=1770062733239"
                alt="The Leo Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/06-virgo" className="wicked-link">
              <h2 className="grimoire-card-title">The Virgo Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/00-virgo-zodiac/zodiac-virgo.png?updatedAt=1770062733424"
                alt="The Virgo Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/07-libra" className="wicked-link">
              <h2 className="grimoire-card-title">The Libra Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/00-libra-zodiacs/zodiac-libra.png?updatedAt=1770062733601"
                alt="The Libra Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs/08-scorpio" className="wicked-link">
              <h2 className="grimoire-card-title">The Scorpio Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/00-scorpio-zodiac/zodiac-scorpio.png?updatedAt=1770062733758"
                alt="The Scorpio Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/01-zodiacs/09-sagittarius"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Sagittarius Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/00-sagittarius-zodiac/zodiac-sagittarius.png?updatedAt=1770062733668"
                alt="The Sagittarius Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/01-zodiacs/10-capricorn"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Capricorn Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/00-capricorn-zodiac/zodiac-capricorn.png?updatedAt=1770062733608"
                alt="The Capricorn Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/01-zodiacs/11-aquarius"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Aquarius Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/00-aquarius-zodiac/zodiac-aquarius.png?updatedAt=1770062733602"
                alt="The Aquarius Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link
              href="/grimoire/astrology/01-zodiacs/12-pisces"
              className="wicked-link"
            >
              <h2 className="grimoire-card-title">The Pisces Zodiac</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/00-pisces-zodiac/zodiac-pisces.png?updatedAt=1770062733734"
                alt="The Pisces Zodiac"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
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