// app/grimoire/astrology/06-houses/07-seventh-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SeventhHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Seventh House"
        subtitle="Partnership, Mirrors, and Sacred Agreements"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/7-house.png"
            alt="The Seventh House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Seventh House is the mirror you cannot avoid. It is where love
              becomes a contract, where desire becomes devotion, and where you meet
              yourself through another.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Seventh House is the House of partnership. It governs committed
            relationships, marriage, long-term bonds, and the agreements you make
            with other people. This is where life becomes relational, where you
            learn to share, to negotiate, and to build something with someone
            outside of yourself.
          </p>

          <p>
            This House reveals what you seek in a partner, what you expect from
            commitment, and what you attract when your life calls for balance. It
            also shows how you handle conflict, compromise, and boundaries. The
            Seventh House is not only about romance. It includes business
            partnerships, contracts, collaboration, and any bond that requires
            mutual responsibility.
          </p>

          <p>
            The Seventh House teaches that relationship is a spiritual practice.
            It shows the places where you soften, the places where you resist,
            and the places where love asks you to grow up.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">
            Committed partnerships and long-term relationships
          </p>
          <p className="grimoire-text">Marriage, contracts, and formal agreements</p>
          <p className="grimoire-text">
            Collaboration, cooperation, and mutual responsibility
          </p>
          <p className="grimoire-text">Conflict style, negotiation, and boundaries</p>
          <p className="grimoire-text">
            The mirrors you attract, and what they reveal about you
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Seventh House is associated with balance and reciprocity in the
            body. It speaks to the parts of you that seek harmony, symmetry, and
            equilibrium.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            kidneys, the lower back, and the body’s relationship with balance and
            stress. It can also reflect how partnership affects your nervous
            system, your posture, and your capacity to relax.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Seventh House activates when relationship becomes a turning point.
            It becomes louder during commitment seasons, contract seasons, and
            moments where you must decide what you are willing to build with
            another person.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring new partnerships, relationship
            milestones, legal agreements, and relationship tests. It can also
            activate when a mirror appears, someone who reveals what you want,
            what you fear, and what you have been avoiding about yourself.
          </p>

          <p className="grimoire-text">
            This House teaches that love is not only a feeling. Love is a choice.
            Love is a structure. Love is a shared reality built over time.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Beginning a committed relationship or entering a serious bond
          </p>
          <p className="grimoire-text">
            Engagement, marriage, or major relationship milestones
          </p>
          <p className="grimoire-text">
            Business partnerships, contracts, and collaborative projects
          </p>
          <p className="grimoire-text">
            Breakups, divorces, and relationship turning points
          </p>
          <p className="grimoire-text">
            Seasons where boundaries, fairness, and balance must be addressed
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What do I ask for in love, and do I offer the same?
          </p>
          <p className="grimoire-text">
            Where do I abandon myself to keep the peace?
          </p>
          <p className="grimoire-text">
            What patterns keep repeating in my partnerships, and why?
          </p>
          <p className="grimoire-text">
            What does commitment mean to me, and what does it require?
          </p>
          <p className="grimoire-text">
            Who am I when I have to share my life with someone else?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Seventh House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
            </span>
            . This symbolic affinity reflects partnership, balance, negotiation,
            and the art of building harmony with another person without losing
            yourself.
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