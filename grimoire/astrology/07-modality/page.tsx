// app/grimoire/astrology/07-modality/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ModalityPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Modality" subtitle="Quadruplicities of the Zodiac">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/modality.jpg"
            alt="Astrological Modalities"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Modality reveals how a sign moves through life. Not what it wants,
              but how it begins, how it holds, and how it completes.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            In astrology, <strong>modalities</strong>, also known as{" "}
            <strong>quadruplicities</strong>, describe how zodiac signs express
            their energy and relate to the seasons. If elements describe the
            nature of a sign’s energy, modality explains how that energy moves.
          </p>

          <p>
            Each modality contains four signs, one from each element. This gives
            modality its power as a behavioral lens. It helps you understand how
            a sign approaches life, responds to change, and interacts with the
            world around it.
          </p>

          <p>
            There are three modalities: Cardinal, Fixed, and Mutable. Together,
            they form the complete cycle of creation, sustainment, and
            transition.
          </p>
        </section>

          <div className="grimoire-divider" />

        {/* CARDINAL */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Cardinal</h2>

          <p className="grimoire-text">
            <strong>Core Expression:</strong> Initiative
          </p>

          <p className="grimoire-text">
            Cardinal signs begin the seasons. They are the initiators of the
            zodiac, driven to start, lead, and activate. Cardinal energy senses
            what needs to happen next and moves toward it without hesitation.
          </p>

          <p className="grimoire-text">
            These signs thrive on momentum. They bring ideas into motion and open
            pathways that others later build upon. When balanced, Cardinal
            energy creates progress. When unbalanced, it can feel restless or
            controlling.
          </p>

          <p className="grimoire-text">
            <strong>Cardinal Signs:</strong>{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>
            </span>
          </p>
        </section>

          <div className="grimoire-divider" />

        {/* FIXED */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Fixed</h2>

          <p className="grimoire-text">
            <strong>Core Expression:</strong> Determination
          </p>

          <p className="grimoire-text">
            Fixed signs occupy the middle of each season. They are the
            stabilizers, designed to hold, protect, and sustain what has already
            begun. Fixed energy commits deeply and resists unnecessary change.
          </p>

          <p className="grimoire-text">
            These signs excel at endurance, loyalty, and follow-through. They
            are the builders and keepers of the zodiac. When balanced, Fixed
            energy creates strength and reliability. When unbalanced, it can
            manifest as rigidity or resistance.
          </p>

          <p className="grimoire-text">
            <strong>Fixed Signs:</strong>{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">Scorpio</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
            </span>
          </p>
        </section>

          <div className="grimoire-divider" />

        {/* MUTABLE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Mutable</h2>

          <p className="grimoire-text">
            <strong>Core Expression:</strong> Flexibility
          </p>

          <p className="grimoire-text">
            Mutable signs close each season. They are the adapters of the
            zodiac, designed to shift, adjust, and prepare for change. Mutable
            energy senses transition and helps move energy from one phase into
            the next.
          </p>

          <p className="grimoire-text">
            These signs are natural translators and guides. They see multiple
            perspectives and help others navigate endings and beginnings. When
            balanced, Mutable energy brings wisdom and adaptability. When
            unbalanced, it can feel scattered or unfocused.
          </p>

          <p className="grimoire-text">
            <strong>Mutable Signs:</strong>{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                Sagittarius
              </Link>
            </span>
            ,{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </span>
          </p>
        </section>

          <div className="grimoire-divider" />

        {/* WICKED OVERVIEW */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Wicked Overview</h2>

          <p className="grimoire-text">
            Modality helps explain why signs act the way they do. It reveals
            whether a sign is wired to begin, to hold, or to transition, and how
            that role shapes their strengths and struggles.
          </p>

          <p className="grimoire-text">
            Cardinal energy lights the match. Fixed energy keeps the flame
            burning. Mutable energy reshapes the fire so the next cycle can
            begin.
          </p>
        </section>

          <div className="grimoire-divider" />

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