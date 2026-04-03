// app/grimoire/astrology/06-houses/09-ninth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function NinthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Ninth House"
        subtitle="Belief, Expansion, and the Quest for Meaning"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/9-house.png"
            alt="The Ninth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Ninth House is the road you take when your soul outgrows its
              answers. It is the hunger for meaning that turns life into a quest.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Ninth House is the House of expansion. It governs belief, higher
            learning, travel, philosophy, and the way you search for meaning.
            This is where you lift your eyes from the immediate world and ask a
            bigger question, what is true, what is possible, and what is worth
            living for.
          </p>

          <p>
            This House reveals how you make sense of life. It speaks to your
            worldview, your faith, and the principles that guide your choices. It
            also rules long-distance travel, exploration, and the experiences
            that widen your perspective by forcing you out of what is familiar.
          </p>

          <p>
            The Ninth House is not about knowing everything. It is about becoming
            someone who keeps learning. It is the courage to outgrow old beliefs,
            to chase truth beyond comfort, and to let your mind and spirit expand.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Belief systems, faith, and personal philosophy</p>
          <p className="grimoire-text">Higher education, study, and lifelong learning</p>
          <p className="grimoire-text">
            Long-distance travel, exploration, and broad horizons
          </p>
          <p className="grimoire-text">
            Truth-seeking, ethics, and the principles you live by
          </p>
          <p className="grimoire-text">Teaching, publishing, and sharing wisdom</p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Ninth House is associated with the body’s drive toward movement,
            adventure, and expansion. It speaks to the physical urge to explore,
            to stretch beyond limits, and to seek experiences that enlarge the
            spirit.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the hips
            and thighs, the parts of the body linked to travel, mobility, and
            forward motion. It can also reflect how belief and meaning affect
            vitality, hope, and resilience.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Ninth House activates when your worldview shifts. It becomes
            louder during seasons of study, travel, spiritual searching, and any
            time life forces you to question what you thought was true.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring opportunities for education,
            long-distance movement, mentorship, publishing, and teaching. It can
            also activate when you are being asked to outgrow limiting beliefs,
            to find meaning after a loss, or to rebuild faith after disillusionment.
          </p>

          <p className="grimoire-text">
            This House teaches that expansion is not always comfortable. Sometimes
            growth feels like leaving a smaller life behind.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Travel seasons, relocations, or long-distance journeys
          </p>
          <p className="grimoire-text">
            Beginning college, certifications, or major study commitments
          </p>
          <p className="grimoire-text">
            Spiritual awakenings that change what you believe
          </p>
          <p className="grimoire-text">
            Publishing, teaching, or stepping into a mentor role
          </p>
          <p className="grimoire-text">
            Moments where your old worldview no longer fits your life
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What do I believe, and did I choose it or inherit it?
          </p>
          <p className="grimoire-text">
            Where am I limiting myself because it feels safer to stay small?
          </p>
          <p className="grimoire-text">
            What truth am I ready to pursue, even if it changes my path?
          </p>
          <p className="grimoire-text">
            What experiences would expand me if I stopped making excuses?
          </p>
          <p className="grimoire-text">
            What does meaning look like in this chapter of my life?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Ninth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                Sagittarius
              </Link>
            </span>
            . This symbolic affinity reflects exploration, truth-seeking, higher
            learning, and the restless hunger to expand beyond the known.
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