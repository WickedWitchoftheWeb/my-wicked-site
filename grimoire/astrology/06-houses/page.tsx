// app/grimoire/astrology/06-houses/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HousesLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Astrological Houses"
        coverImage="/houses/houses-cover.png"
        subtitle="Click a House to Decode What It Rules"
      >
        {/* Intro text */}
        <section className="grimoire-intro">
          <p>
            In astrology, the zodiac signs describe <strong>how</strong> energy
            behaves, and the planets describe <strong>what</strong> energy is
            moving. The Houses describe <strong>where</strong> it plays out in
            your life.
          </p>
          <p>
            Think of the Houses as twelve rooms in the same cosmic home. Every
            chart contains all twelve, but your planets and signs “furnish” them
            differently—revealing where you feel called to grow, where patterns
            repeat, and where life keeps asking you to level up.
          </p>
          <p>
            When you understand the Houses, your chart stops feeling like random
            symbols and starts reading like a story: your identity, your money,
            your voice, your roots, your desires, your work, your relationships,
            your shadows, your beliefs, your purpose, your community, and your
            unseen world.
          </p>
        </section>

        {/* Important + Wicked notes */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>
          <p className="grimoire-text">
            If you don&apos;t know your birth time, your House system may be
            inaccurate—because the Houses change based on the exact moment you
            arrived. If possible, use your precise birth time for the clearest
            read.
          </p>

          <h2 className="grimoire-note-heading">Wicked Note</h2>
          <p className="grimoire-text">
            The Houses don&apos;t just describe events—they describe your personal
            arenas of initiation. Whatever House is emphasized in your chart is
            often where your soul wants mastery. If one House feels “loud” in
            your life right now, trust that it&apos;s calling you to attention for a
            reason.
          </p>

          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* 12 house sections – names + images */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/01-first-house">
              <h2 className="grimoire-card-title">The First House</h2>
              <img
                src="/houses/1-house.png"
                alt="The First House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/02-second-house">
              <h2 className="grimoire-card-title">The Second House</h2>
              <img
                src="/houses/2-house.png"
                alt="The Second House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/03-third-house">
              <h2 className="grimoire-card-title">The Third House</h2>
              <img
                src="/houses/3-house.png"
                alt="The Third House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/04-fourth-house">
              <h2 className="grimoire-card-title">The Fourth House</h2>
              <img
                src="/houses/4-house.png"
                alt="The Fourth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/05-fifth-house">
              <h2 className="grimoire-card-title">The Fifth House</h2>
              <img
                src="/houses/5-house.png"
                alt="The Fifth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          {/* NOTE: slug is "06-sixith-house" per your folder tree */}
          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/06-sixith-house">
              <h2 className="grimoire-card-title">The Sixth House</h2>
              <img
                src="/houses/6-house.png"
                alt="The Sixth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/07-seventh-house">
              <h2 className="grimoire-card-title">The Seventh House</h2>
              <img
                src="/houses/7-house.png"
                alt="The Seventh House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/08-eighth-house">
              <h2 className="grimoire-card-title">The Eighth House</h2>
              <img
                src="/houses/8-house.png"
                alt="The Eighth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/09-ninth-house">
              <h2 className="grimoire-card-title">The Ninth House</h2>
              <img
                src="/houses/9-house.png"
                alt="The Ninth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/10-tenth-house">
              <h2 className="grimoire-card-title">The Tenth House</h2>
              <img
                src="/houses/10-house.png"
                alt="The Tenth House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/11-eleventh-house">
              <h2 className="grimoire-card-title">The Eleventh House</h2>
              <img
                src="/houses/11-house.png"
                alt="The Eleventh House"
                className="grimoire-card-img"
              />
            </Link>
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses/12-twelfth-house">
              <h2 className="grimoire-card-title">The Twelfth House</h2>
              <img
                src="/houses/12-house.png"
                alt="The Twelfth House"
                className="grimoire-card-img"
              />
            </Link>
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