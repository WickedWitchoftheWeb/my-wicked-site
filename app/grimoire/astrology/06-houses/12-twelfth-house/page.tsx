// app/grimoire/astrology/06-houses/12-twelfth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TwelfthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Twelfth House"
        subtitle="The Unseen, the Unconscious, and the Sacred Void"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/12-house.png"
            alt="The Twelfth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Twelfth House is the place where the veil thins. It is where the
              self dissolves, the ego softens, and the soul remembers what it came
              here to heal.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Twelfth House is the House of the unseen. It governs the
            subconscious, hidden realms, spiritual surrender, and the spaces
            beyond logic and form. This is where endings complete themselves,
            where cycles dissolve, and where the soul retreats to rest, heal,
            and remember.
          </p>

          <p>
            This House reveals what lives beneath awareness. It speaks to
            intuition, dreams, fears, karma, and the emotional residue you carry
            from the past. It also governs isolation, retreat, solitude, and the
            need to step away from the noise of the world.
          </p>

          <p>
            The Twelfth House is not meant to be controlled. It is meant to be
            honored. It teaches surrender, compassion, and the understanding
            that not everything is meant to be named or solved.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">The subconscious mind and hidden inner worlds</p>
          <p className="grimoire-text">Dreams, intuition, and psychic sensitivity</p>
          <p className="grimoire-text">Karma, past patterns, and spiritual residue</p>
          <p className="grimoire-text">Solitude, retreat, and sacred withdrawal</p>
          <p className="grimoire-text">Endings, release, and dissolution of identity</p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Twelfth House is associated with the body’s subtle systems. It
            speaks to sleep, dreams, immune response, and the spaces where stress,
            grief, and emotion are stored beneath awareness.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the feet,
            the lymphatic system, and the body’s response to overwhelm, fatigue,
            and emotional absorption.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Twelfth House activates when life asks you to let go. It becomes
            louder during seasons of grief, healing, spiritual awakening, and
            quiet transition.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring heightened intuition, vivid
            dreams, emotional processing, and a need for solitude. It can also
            activate when old patterns surface to be released, or when you are
            called to rest before a new beginning.
          </p>

          <p className="grimoire-text">
            This House teaches that surrender is not weakness. It is wisdom.
            Healing happens when you stop fighting what needs to dissolve.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">Spiritual awakenings and psychic openings</p>
          <p className="grimoire-text">Periods of solitude, retreat, or withdrawal</p>
          <p className="grimoire-text">Grief cycles and emotional release</p>
          <p className="grimoire-text">End-of-chapter moments before new beginnings</p>
          <p className="grimoire-text">
            Times when rest, compassion, and surrender are required
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">What am I holding onto that is already over?</p>
          <p className="grimoire-text">Where do I need rest instead of resistance?</p>
          <p className="grimoire-text">What parts of me are asking to be forgiven?</p>
          <p className="grimoire-text">What does surrender look like in this season?</p>
          <p className="grimoire-text">
            Who am I when I stop trying to define myself?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Twelfth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </span>
            . This symbolic affinity reflects dissolution, compassion, intuition,
            and the merging of self with the greater whole.
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