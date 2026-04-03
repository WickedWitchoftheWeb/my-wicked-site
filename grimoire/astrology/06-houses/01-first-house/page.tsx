// app/grimoire/astrology/06-houses/01-first-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function FirstHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The First House"
        subtitle="Identity, Presence, and the Self in Motion"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/1-house.png"
            alt="The First House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The First House is the moment you arrive — before explanation,
              before permission, before apology.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The First House is the doorway of the natal chart. It represents the
            moment you step into the world and the impression you leave simply
            by being present. This House governs identity, instinct, and how you
            initiate life.
          </p>

          <p>
            While planets describe <em>what</em> energy is active and signs
            describe <em>how</em> that energy behaves, the First House reveals
            <strong> where you begin</strong>. It shows how you move forward,
            how you assert yourself, and how visible you are to others.
          </p>

          <p>
            This House shapes your relationship with selfhood. It speaks to
            confidence, self-recognition, and the courage to take up space —
            even before you know exactly who you are becoming.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Identity and self-definition</p>
          <p className="grimoire-text">First impressions and personal presence</p>
          <p className="grimoire-text">Appearance and style as self-expression</p>
          <p className="grimoire-text">Instinct, initiative, and the urge to begin</p>
          <p className="grimoire-text">
            How you take up space and move through the world
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The First House is strongly connected to the physical “front” of the
            self: how you are seen and how you navigate forward.
          </p>

          <p className="grimoire-text">
            This House governs the{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/16-parts-ofthe-magickal-body/01-head">
                head
              </Link>
            </span>
            , the face, and the eyes: the parts of the body most associated with
            recognition, alertness, and identity.
          </p>

          <p className="grimoire-text">
            It also relates to overall vitality and the physical presence you
            project when you enter a space.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The First House becomes louder when life asks you to reintroduce
            yourself: to others or to your own soul.
          </p>

          <p className="grimoire-text">
            Planets placed here are highly visible in personality, and transits
            through this House often mark identity shifts, confidence tests, and
            new beginnings.
          </p>

          <p className="grimoire-text">
            Even when this House appears quiet on paper, it activates whenever
            you must decide whether to shrink for safety or expand into truth.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Major reinventions such as haircuts, style shifts, and identity
            upgrades.
          </p>

          <p className="grimoire-text">
            New beginnings including moves, jobs, relationships, and moments of
            public visibility.
          </p>

          <p className="grimoire-text">
            Confidence challenges and “prove yourself” seasons that test
            self-trust.
          </p>

          <p className="grimoire-text">
            Moments that force you to choose yourself instead of shrinking.
          </p>

          <p className="grimoire-text">
            Spiritual awakenings that permanently change how you see your own
            power.
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">Who am I when no one is watching?</p>
          <p className="grimoire-text">What version of me am I performing, and why?</p>
          <p className="grimoire-text">Where do I shrink to stay comfortable?</p>
          <p className="grimoire-text">
            What do I look like when I trust myself completely?
          </p>
          <p className="grimoire-text">
            How do I want to be remembered the moment I enter a room?
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