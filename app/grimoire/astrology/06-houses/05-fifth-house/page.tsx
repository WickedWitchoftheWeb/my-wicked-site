// app/grimoire/astrology/06-houses/05-fifth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function FifthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Fifth House"
        subtitle="Joy, Creation, and the Courage to Be Seen"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/5-house.png"
            alt="The Fifth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Fifth House is the sacred risk of self-expression. It is the
              part of you that creates even when no one is watching, and shines
              anyway.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Fifth House is the House of pleasure and creation. It governs
            joy, romance, play, and the spark that says, “I want to make
            something.” This is the House of art, desire, and the kind of
            confidence that comes from being fully yourself.
          </p>

          <p>
            This House reveals how you express your individuality. It shows what
            you create for love, for fun, for meaning, and for the sheer thrill
            of being alive. It also reveals your relationship with attention,
            appreciation, and the vulnerability of putting your heart on display.
          </p>

          <p>
            The Fifth House is not shallow. It is sacred. It is where your life
            becomes personal, where your soul leaves fingerprints on the world,
            and where you learn that joy can be a form of devotion.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Creativity, art, and self-expression</p>
          <p className="grimoire-text">
            Romance, flirting, and the thrill of desire
          </p>
          <p className="grimoire-text">Play, pleasure, and what brings you joy</p>
          <p className="grimoire-text">Performance, visibility, and being seen</p>
          <p className="grimoire-text">
            Children, inner child themes, and creative legacy
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Fifth House is associated with the body’s capacity for joy,
            warmth, and creative life force. It speaks to vitality, radiance,
            and the physical experience of pleasure.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            heart, the spine, and the parts of the body connected to confidence,
            passion, and expressive energy.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Fifth House activates when your heart wants to speak. It becomes
            louder during seasons of falling in love, creating something new, or
            rediscovering what makes you feel alive.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring creative opportunities, new
            romances, passion projects, and moments that demand courage in
            self-expression. It can also activate when you are healing your
            relationship with joy, learning to receive pleasure without guilt,
            and trusting that you are allowed to shine.
          </p>

          <p className="grimoire-text">
            This House teaches that joy is not a distraction from purpose. Joy
            is a compass. It points toward what is real.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Starting a creative project, launching art, or building a brand
          </p>
          <p className="grimoire-text">
            New romance, dating seasons, or a return of desire
          </p>
          <p className="grimoire-text">
            Moments of visibility, performance, or being publicly recognized
          </p>
          <p className="grimoire-text">
            Inner child healing and reclaiming playfulness
          </p>
          <p className="grimoire-text">
            Life chapters involving children or creative legacy
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What do I create when I stop trying to be impressive?
          </p>
          <p className="grimoire-text">
            What makes me feel alive, and why do I resist it?
          </p>
          <p className="grimoire-text">
            Where am I afraid to be seen, even when I want to be?
          </p>
          <p className="grimoire-text">
            What would joy look like if it were sacred to me?
          </p>
          <p className="grimoire-text">
            What part of my heart is asking to return to the stage?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Fifth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
            </span>
            . This symbolic affinity reflects creativity, radiance, the heart’s
            desire to express, and the bravery it takes to be fully seen.
          </p>
        </section>

        {/* FOOTER LINKS — STANDARD TWO */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/astrology/06-houses"
              className="grimoire-footer-link"
            >
              ← Back to The Astrological Houses
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