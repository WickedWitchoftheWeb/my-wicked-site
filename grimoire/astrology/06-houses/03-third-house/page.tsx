// app/grimoire/astrology/06-houses/03-third-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function ThirdHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Third House"
        subtitle="Mind, Message, and Everyday Magick"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/3-house.png"
            alt="The Third House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Third House is the spell of language. It is how thought becomes
              voice, how voice becomes reality, and how your daily world learns
              your name.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Third House is the House of communication. It governs the way
            you think, learn, speak, listen, and exchange information. This is
            your everyday mind, your daily rhythm, and the small conversations
            that quietly shape your life.
          </p>

          <p>
            This House rules your relationship with curiosity. It reveals how
            you gather facts, how you process experience, and how you turn
            observation into meaning. It also shows how you navigate your
            immediate environment, your neighborhood, your routines, and the
            people you cross paths with most often.
          </p>

          <p>
            The Third House is not about grand philosophies. It is about the
            message right in front of you. It is the world as you interpret it,
            and the words you choose to carry through it.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Communication, speech, and listening</p>
          <p className="grimoire-text">
            Learning style, curiosity, and information processing
          </p>
          <p className="grimoire-text">Writing, teaching, and sharing ideas</p>
          <p className="grimoire-text">
            Short trips, errands, commuting, and local movement
          </p>
          <p className="grimoire-text">
            Siblings, peers, and familiar everyday connections
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Third House is associated with the body’s systems of connection
            and exchange. It speaks to breath, coordination, and the ways the
            nervous system carries signal and meaning.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            hands, arms, shoulders, lungs, and the patterns of attention that
            shape how you move through your day.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Third House activates when your mind gets louder. It becomes
            emphasized during seasons of learning, writing, speaking up, or
            processing new information that changes how you see your world.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring important conversations,
            changes in routine, new local connections, and shifts in the way you
            communicate. It can also activate when you are being asked to tell
            the truth more clearly, or to listen more honestly.
          </p>

          <p className="grimoire-text">
            This House teaches that words are not neutral. They are spells. They
            create pathways in your mind, and your mind creates pathways in your
            life.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">Starting school, studying, or learning a new skill</p>
          <p className="grimoire-text">
            Launching writing, content, teaching, or speaking projects
          </p>
          <p className="grimoire-text">
            Important talks that change a relationship or a direction
          </p>
          <p className="grimoire-text">
            Busy seasons with lots of movement, errands, and short travel
          </p>
          <p className="grimoire-text">
            Family or sibling dynamics coming to the surface
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What story am I repeating about my life, and who taught it to me?
          </p>
          <p className="grimoire-text">Do I speak to be understood, or to be safe?</p>
          <p className="grimoire-text">Where am I not saying what I actually mean?</p>
          <p className="grimoire-text">
            What does my mind focus on when no one is watching?
          </p>
          <p className="grimoire-text">
            What changes if I choose words that support who I am becoming?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Third House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
            </span>
            . This symbolic affinity reflects curiosity, communication, and the
            mental dance of gathering, translating, and sharing meaning.
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