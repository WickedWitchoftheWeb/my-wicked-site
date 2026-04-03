// app/grimoire/astrology/06-houses/02-second-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SecondHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Second House"
        subtitle="Worth, Resources, and the Life You Build"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/2-house.png"
            alt="The Second House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Second House is not just what you own. It is what you believe
              you deserve, and what you are willing to build slowly with your own
              hands.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Second House is the House of value. It governs your relationship
            with security, resources, money, possessions, and self-worth.
            Wherever the Second House is emphasized, life asks you to define
            what matters, what is stable, and what is truly yours.
          </p>

          <p>
            This House reveals what you rely on when you need grounding. It
            shows how you earn, how you save, how you spend, and what you
            consider “enough.” It also reveals something deeper, the inner story
            behind your worth, and whether you trust yourself to provide.
          </p>

          <p>
            The Second House is slow magick. It is what grows over time through
            consistency, commitment, and devotion. It is the life you build when
            no one is clapping yet.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Money, income, and personal resources</p>
          <p className="grimoire-text">Possessions and material security</p>
          <p className="grimoire-text">
            Values, priorities, and what you consider important
          </p>
          <p className="grimoire-text">Self-worth, self-trust, and deservedness</p>
          <p className="grimoire-text">
            Stability, comfort, and the urge to create something lasting
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Second House is associated with the body’s relationship to
            nourishment, comfort, and steadiness. It speaks to the parts of you
            connected to grounding, appetite, and the ability to sustain.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House echoes themes of the throat,
            voice, and the physical experience of “having enough,” especially
            when value and safety are on the line.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Second House activates when life challenges your stability. It
            becomes louder when you are called to build security, define your
            values, or reclaim your worth.
          </p>

          <p className="grimoire-text">
            Transits through this House often bring practical turning points,
            new income paths, spending wake-up calls, and value shifts. It can
            also activate when you are learning to trust yourself again after a
            season of scarcity.
          </p>

          <p className="grimoire-text">
            This House does not demand speed. It demands alignment. It asks you
            to build a life that matches your true priorities, not your panic.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Career changes that affect income and stability
          </p>
          <p className="grimoire-text">
            Major purchases, moves, or financial commitments
          </p>
          <p className="grimoire-text">
            Periods of scarcity that force you to redefine “enough”
          </p>
          <p className="grimoire-text">
            Moments where you must set boundaries around your energy and time
          </p>
          <p className="grimoire-text">
            Seasons where self-worth is tested through comparison or rejection
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">What do I truly value, even if no one agrees?</p>
          <p className="grimoire-text">Do I trust myself to provide for me?</p>
          <p className="grimoire-text">Where am I settling because it feels “safe”?</p>
          <p className="grimoire-text">
            What would change if I believed I was worthy right now?
          </p>
          <p className="grimoire-text">
            What am I building slowly, and why does it matter?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Second House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
            </span>
            . This is a symbolic affinity because both speak to stability,
            sustenance, devotion, and the slow construction of a life that feels
            safe and real.
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