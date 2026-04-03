// app/grimoire/astrology/06-houses/06-sixth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SixthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Sixth House"
        subtitle="Ritual, Routine, and the Craft of Becoming"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/6-house.png"
            alt="The Sixth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Sixth House is the altar of the ordinary. It is where your
              daily choices become devotion, and your discipline becomes magick.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Sixth House is the House of work and wellness. It governs daily
            routines, habits, service, and the practical systems that keep your
            life functioning. This is where you refine your craft, maintain your
            body, and learn what it means to show up consistently.
          </p>

          <p>
            This House reveals how you handle responsibility. It shows your
            relationship with productivity, effort, and the small choices that
            either build strength or drain you over time. It also speaks to the
            ways you care for your health, your energy, and your environment.
          </p>

          <p>
            The Sixth House is not glamorous, but it is powerful. It is the
            difference between a wish and a practice. It is where your intentions
            become measurable, and where your life becomes the proof of what you
            believe.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Daily routine, habits, and personal rituals</p>
          <p className="grimoire-text">
            Work ethic, skill-building, and practical improvement
          </p>
          <p className="grimoire-text">Health, wellness, and maintenance of the body</p>
          <p className="grimoire-text">Service, helpfulness, and the roles you take on</p>
          <p className="grimoire-text">
            Systems, organization, and how you manage your day-to-day life
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Sixth House is associated with the body’s maintenance systems. It
            speaks to digestion, purification, and the daily rhythms that keep
            you balanced.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            intestines, the nervous system patterns of stress and routine, and
            the areas of the body that respond quickly to burnout, anxiety, and
            overwork.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Sixth House activates when life asks you to get serious about
            your systems. It becomes louder during seasons where health, work,
            schedule, or responsibility need restructuring.
          </p>

          <p className="grimoire-text">
            Transits through this House often bring new routines, new duties, and
            a clearer view of what is sustainable. It can also activate when your
            body demands attention, when habits catch up with you, or when you
            realize you cannot build a life on chaos forever.
          </p>

          <p className="grimoire-text">
            This House teaches that discipline is not punishment. Discipline is
            devotion. It is how you care for the life you are trying to create.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Starting a new job, schedule, or daily structure
          </p>
          <p className="grimoire-text">
            Health wake-up calls that demand lifestyle changes
          </p>
          <p className="grimoire-text">
            Burnout seasons that force you to reassess balance
          </p>
          <p className="grimoire-text">
            Periods of intense learning, training, or skill refinement
          </p>
          <p className="grimoire-text">
            Times when your life requires more order, consistency, and care
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What does my daily life say about what I truly value?
          </p>
          <p className="grimoire-text">
            Where am I leaking energy through chaos, avoidance, or overwork?
          </p>
          <p className="grimoire-text">
            What habits are helping me, and what habits are quietly harming me?
          </p>
          <p className="grimoire-text">
            What would change if I treated routine like ritual?
          </p>
          <p className="grimoire-text">
            What kind of life becomes possible when I show up consistently?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Sixth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
            </span>
            . This symbolic affinity reflects refinement, daily devotion,
            practical skill, and the pursuit of improvement through service and
            care.
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