// app/grimoire/astrology/06-houses/10-tenth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TenthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Tenth House"
        subtitle="Purpose, Reputation, and the Life You Are Known For"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/10-house.png"
            alt="The Tenth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Tenth House is your name in the world. It is the mountain you
              choose to climb, and the legacy you build one decision at a time.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Tenth House is the House of purpose and public life. It governs
            career, reputation, long-term achievement, and the roles you are
            recognized for. This is the part of your chart that speaks to
            visibility, responsibility, and what you are willing to build over
            time.
          </p>

          <p>
            This House reveals your relationship with ambition. It shows how you
            handle leadership, authority, and accountability. It also describes
            what you want to be known for, what you feel called to accomplish,
            and what kind of impact you want your work to have.
          </p>

          <p>
            The Tenth House is not just about success. It is about alignment.
            It asks whether your goals are truly yours, and whether the life you
            are building actually reflects your values.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Career, vocation, and long-term goals</p>
          <p className="grimoire-text">Public reputation, status, and visibility</p>
          <p className="grimoire-text">Leadership, authority, and responsibility</p>
          <p className="grimoire-text">
            Achievement, legacy, and the work you are known for
          </p>
          <p className="grimoire-text">
            Direction, structure, and the path you commit to
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Tenth House is associated with structure and endurance. It
            speaks to the parts of you that carry responsibility and hold you
            upright through long effort.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            knees, joints, posture, and the parts of the body connected to
            stamina, discipline, and long-term resilience.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Tenth House activates when your life direction is being defined.
            It becomes louder during seasons of career growth, leadership
            opportunities, public recognition, and major decisions about what
            you are building.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring promotions, new roles, public
            visibility, and shifts in reputation. It can also activate when you
            face authority themes, when you must become your own authority, or
            when you realize a goal no longer matches who you are.
          </p>

          <p className="grimoire-text">
            This House teaches that success without alignment becomes a cage.
            True purpose feels like responsibility you choose with devotion.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Promotions, new jobs, launches, and career turning points
          </p>
          <p className="grimoire-text">
            Public recognition, visibility, and reputation shifts
          </p>
          <p className="grimoire-text">
            Leadership roles, management, and increased responsibility
          </p>
          <p className="grimoire-text">
            Big goals that require structure, discipline, and long effort
          </p>
          <p className="grimoire-text">
            Moments where you must choose a path and commit fully
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">What do I want to be known for, and why?</p>
          <p className="grimoire-text">
            Where am I seeking approval instead of alignment?
          </p>
          <p className="grimoire-text">
            What kind of legacy am I building through my daily choices?
          </p>
          <p className="grimoire-text">
            What responsibility am I ready to claim as my own?
          </p>
          <p className="grimoire-text">
            If I stopped worrying about judgment, what would I build?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Tenth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>
            </span>
            . This symbolic affinity reflects ambition, discipline, responsibility,
            and the steady construction of a life and legacy that endures.
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