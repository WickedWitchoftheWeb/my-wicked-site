// app/grimoire/astrology/06-houses/04-fourth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function FourthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Fourth House"
        subtitle="Roots, Home, and the Inner World"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/4-house.png"
            alt="The Fourth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Fourth House is the place inside you that remembers. It is your
              roots, your refuge, and the quiet truth you return to when the world
              goes dark.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Fourth House is the House of home. It governs your roots, your
            family imprint, and the inner foundation your life is built on. This
            is the private self, the self behind closed doors, and the emotional
            ground you stand on when no one is watching.
          </p>

          <p>
            This House reveals what feels safe, what feels familiar, and what
            you instinctively return to for comfort. It also describes your
            relationship with ancestry, lineage, and the stories you inherited,
            whether you keep them, heal them, or break them.
          </p>

          <p>
            The Fourth House is not only the place you came from. It is the
            place you are always trying to build within yourself, a home that
            can hold you, even when everything changes.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Home, household, and your private life</p>
          <p className="grimoire-text">
            Family dynamics, upbringing, and inherited patterns
          </p>
          <p className="grimoire-text">
            Roots, ancestry, lineage, and origin stories
          </p>
          <p className="grimoire-text">
            Emotional foundation, safety, and inner stability
          </p>
          <p className="grimoire-text">
            Belonging, nurturance, and what you need to feel held
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Fourth House is associated with the body’s need for safety and
            regulation. It speaks to nourishment, comfort, and the internal
            systems that calm you when life feels unpredictable.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            chest, the emotional heart space, and the parts of the body that
            respond first when you feel protected or threatened.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Fourth House activates when your foundation is being rebuilt. It
            becomes louder in seasons of moving, family shifts, grief, healing,
            or emotional reorientation.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring changes in home life, changes
            in your relationship with family, and powerful emotional tides that
            ask you to face what you have been carrying. It can also activate
            when you are ready to create the kind of safety you never received.
          </p>

          <p className="grimoire-text">
            This House teaches that a life can be built on performance, but it
            cannot be sustained there. You need a home inside yourself that is
            real.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Moving, buying property, or changing living environments
          </p>
          <p className="grimoire-text">
            Family tension, reconciliation, or generational healing
          </p>
          <p className="grimoire-text">
            Grief seasons, memory cycles, and emotional processing
          </p>
          <p className="grimoire-text">
            Building a home, starting a family, or redefining belonging
          </p>
          <p className="grimoire-text">
            Moments that force you to choose safety over familiarity
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What does “home” mean to me, and who taught me that?
          </p>
          <p className="grimoire-text">
            Where do I seek comfort, and is it actually nourishing?
          </p>
          <p className="grimoire-text">
            What family patterns am I repeating without realizing?
          </p>
          <p className="grimoire-text">
            What do I need in order to feel safe inside my own life?
          </p>
          <p className="grimoire-text">
            What would change if I built a home within myself first?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Fourth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
            </span>
            . This symbolic affinity reflects nurture, protection, memory, and
            the need to belong, not only to others, but to yourself.
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