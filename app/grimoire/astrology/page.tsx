// app/grimoire/astrology/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function AstrologyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Wicked's Astrology Grimoire"
        subtitle="The architecture of pattern and meaning"
      >
        {/* HERO IMAGE + INTRO */}
        <section className="grimoire-subhero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/astrology-landing.png"
            alt="Astrology cover image"
            className="grimoire-subhero-img"
          />

          <div className="grimoire-intro">
            <p>
              Astrology is the language of timing: the symbolic map of how
              currents move through human life. It is not a personality quiz. It
              is pattern recognition across seasons, cycles, and choices.
            </p>

            <p>
              This grimoire is built to help you read charts with clarity,
              context, and power: signs, houses, planets, placements, and the
              living transits that keep the wheel turning.
            </p>

            <section className="grimoire-quote">
  <p className="grimoire-quote-text">
    Astrology is not a system of prediction. It is a language of pattern.
    It teaches you when forces rise, where attention is required,
    and how choice moves through time.
  </p>
  <span className="wicked-signature">-Wicked</span>
</section>
          </div>
        </section>

        {/* LANDING ENTRIES */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link href="/grimoire/astrology/01-zodiacs" className="wicked-link">
              <h2 className="grimoire-card-title">The Twelve Signs of the Zodiac</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/zodiacs/zodiac-cover.jpg"
                alt="The Twelve Signs of the Zodiac"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/06-houses" className="wicked-link">
              <h2 className="grimoire-card-title">The Astrological Houses</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/houses/houses-cover.png?updatedAt=1770063255323"
                alt="The Astrological Houses"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/02-planets" className="wicked-link">
              <h2 className="grimoire-card-title">Planets</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/planet-landing%202.png"
                alt="Planets"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/02-planets/11-chiron" className="wicked-link">
              <h2 className="grimoire-card-title">Chiron</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/1chiron.png?updatedAt=1770428827627"
                alt="Chiron"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/03-placements" className="wicked-link">
              <h2 className="grimoire-card-title">Planetary Placements</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/placements/placement-cover.png"
                alt="Planetary Placements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/04-transits" className="wicked-link">
              <h2 className="grimoire-card-title">Transits</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/transits.png"
                alt="Transits"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

           <div className="grimoire-card">
            <Link href="/grimoire/astrology/05-retrogrades" className="wicked-link">
              <h2 className="grimoire-card-title">Retrogrades</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/transits.png"
                alt="Retrogrades"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/astrology/07-modality" className="wicked-link">
              <h2 className="grimoire-card-title">Modality: Quadruplicities of the Zodiac</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/astrology/modality.jpg"
                alt="Modality"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/elements" className="wicked-link">
              <h2 className="grimoire-card-title">Elements</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/wicked%20about/The%20Five%20Wicked%20Points.png?updatedAt=1769636388934"
                alt="Elements"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to the Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}