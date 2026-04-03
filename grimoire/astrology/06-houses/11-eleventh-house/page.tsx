// app/grimoire/astrology/06-houses/11-eleventh-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function EleventhHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Eleventh House"
        subtitle="Community, Vision, and the Future You Believe In"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/11-house.png"
            alt="The Eleventh House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Eleventh House is the dream you carry for the world. It is where
              your future-facing self finds allies, purpose, and shared vision.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Eleventh House is the House of community and collective vision.
            It governs friendships, networks, social movements, and the future
            you are working toward. This is where personal purpose expands into
            shared ideals and where you discover that you do not build the
            future alone.
          </p>

          <p>
            This House reveals how you connect with groups, how you participate
            in community, and how you align yourself with causes larger than your
            individual life. It also speaks to hopes, wishes, and long-term
            dreams that stretch beyond immediate reward.
          </p>

          <p>
            The Eleventh House asks you to consider what kind of world you want
            to help create. It is the space where innovation is born, where
            unconventional paths find support, and where belonging is chosen
            rather than inherited.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Friendships, allies, and chosen family</p>
          <p className="grimoire-text">Community, networks, and social circles</p>
          <p className="grimoire-text">Collective goals, movements, and causes</p>
          <p className="grimoire-text">Hopes, wishes, and future-oriented dreams</p>
          <p className="grimoire-text">Innovation, progress, and unconventional paths</p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Eleventh House is associated with circulation and connectivity
            within the body. It speaks to systems that distribute energy,
            information, and support throughout the whole.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            calves, ankles, and the nervous system’s relationship to collective
            stress and stimulation. It can also reflect how social belonging
            impacts physical energy and resilience.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Eleventh House activates when your future comes into focus. It
            becomes louder during seasons of networking, collaboration, and
            involvement in group efforts or movements.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring new friendships, community
            roles, public platforms, and opportunities to contribute to
            something meaningful. It can also activate when old dreams no longer
            resonate and new visions begin to form.
          </p>

          <p className="grimoire-text">
            This House teaches that progress is rarely solitary. Change happens
            when vision meets collective effort.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Joining or leaving social groups and communities
          </p>
          <p className="grimoire-text">Collaborative projects and shared missions</p>
          <p className="grimoire-text">Shifts in long-term goals and future vision</p>
          <p className="grimoire-text">
            Public advocacy, activism, or collective action
          </p>
          <p className="grimoire-text">
            Moments where belonging and individuality must coexist
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What future am I working toward, consciously or not?
          </p>
          <p className="grimoire-text">
            Where do I truly belong, and where am I pretending?
          </p>
          <p className="grimoire-text">What vision do I share with others?</p>
          <p className="grimoire-text">
            How do my friendships shape who I am becoming?
          </p>
          <p className="grimoire-text">
            What role do I want to play in the collective story?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Eleventh House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
            </span>
            . This symbolic affinity reflects innovation, community, future
            vision, and the courage to imagine a world different from the one
            you inherited.
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