// app/grimoire/alchemy/outer-alchemy/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OuterAlchemyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Outer Alchemy" subtitle="Transmutation of reality">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/alchemy/outer-alchemy.png"
            alt="Outer Alchemy cover image"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The world changes when you become a new cause.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* ESSENCE OF OUTER ALCHEMY */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Essence of Outer Alchemy</h2>

          <div className="grimoire-text">
            <p>
              Outer alchemy is the practice of transformation in the material
              world. It is not wishful thinking, and it is not passive
              manifestation. It is the deliberate conversion of energy into
              structure: choices into outcomes, identity into environment, will
              into reality.
            </p>

            <p>
              Inner alchemy changes what you are made of. Outer alchemy changes
              what your life is made of. The two are inseparable: what you
              tolerate, what you repeat, what you invest in, and what you enforce
              becomes the shape of your world.
            </p>

            <p>
              In Wicked terms, outer alchemy is how you stop living inside the
              consequences of the past and start living inside the architecture of
              intention.
            </p>
          </div>
        </section>

        {/* THE OUTER CRUCIBLE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Outer Crucible</h2>

          <h3 className="grimoire-label">Environment</h3>
          <div className="grimoire-text">
            <p>Your space is a spell. It trains your nervous system daily.</p>
            <p>
              A cluttered, chaotic environment teaches your mind to expect
              interference. A clean, intentional environment teaches your system
              to hold focus and receive.
            </p>
          </div>

          <h3 className="grimoire-label">Time</h3>
          <div className="grimoire-text">
            <p>Time is the rarest substance. Where it goes, life follows.</p>
            <p>
              Outer alchemy begins when you stop treating time like something that
              “happens” to you and start treating it like a material you allocate
              with purpose.
            </p>
          </div>

          <h3 className="grimoire-label">Behavior</h3>
          <div className="grimoire-text">
            <p>Reality is loyal to repetition.</p>
            <p>
              Breakthrough is not a mood. It is what your behaviors prove you are
              available for. What you do consistently becomes your fate.
            </p>
          </div>

          <h3 className="grimoire-label">Relationships</h3>
          <div className="grimoire-text">
            <p>Every relationship is a mirror and a pressure system.</p>
            <p>
              Some relationships stabilize your evolution. Others punish it. Outer
              alchemy involves choosing proximity with intention.
            </p>
          </div>

          <h3 className="grimoire-label">Resources</h3>
          <div className="grimoire-text">
            <p>Money, tools, and support are crystallized energy.</p>
            <p>
              Outer alchemy is learning to direct resources toward what expands
              your power instead of what numbs your discomfort.
            </p>
          </div>
        </section>

        {/* THE OUTER STAGES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Stages of Outer Alchemy</h2>

          <h3 className="grimoire-label">1) Disruption</h3>
          <div className="grimoire-text">
            <p>You interrupt the pattern in the physical world.</p>
            <p>
              Disruption can be small: changing a routine, deleting the app,
              cleaning the workspace, setting the boundary. You create a break in
              the loop so a new outcome can enter.
            </p>
          </div>

          <h3 className="grimoire-label">2) Reallocation</h3>
          <div className="grimoire-text">
            <p>You move energy toward what matters.</p>
            <p>
              Reallocation is time, attention, money, and effort redirected toward
              the next self. This is how the future gets fed.
            </p>
          </div>

          <h3 className="grimoire-label">3) Construction</h3>
          <div className="grimoire-text">
            <p>You build systems that hold the change.</p>
            <p>
              Construction is schedules, workflows, structure, and commitments.
              Outer alchemy is not held by motivation. It is held by design.
            </p>
          </div>

          <h3 className="grimoire-label">4) Enforcement</h3>
          <div className="grimoire-text">
            <p>You protect the new reality from the old one.</p>
            <p>
              Enforcement is boundaries, standards, and non-negotiables. This is
              where most people fail: they build something new, then hand it back
              to the old pattern.
            </p>
          </div>

          <h3 className="grimoire-label">5) Stabilization</h3>
          <div className="grimoire-text">
            <p>You make the upgrade sustainable.</p>
            <p>
              Stabilization is choosing rhythms you can actually maintain. The
              goal is not intensity. The goal is permanence.
            </p>
          </div>
        </section>

        {/* OUTER ALCHEMICAL LAWS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Outer Alchemical Laws</h2>

          <h3 className="grimoire-label">Interconnectedness</h3>
          <div className="grimoire-text">
            <p>The environment always votes on the transformation.</p>
            <p>
              If you change internally but keep the same inputs, the same
              relationships, and the same routines, the system will try to drag
              you back. Outer alchemy is aligning the world with the new self.
            </p>
          </div>

          <h3 className="grimoire-label">Friction is Feedback</h3>
          <div className="grimoire-text">
            <p>Resistance reveals where structure is missing.</p>
            <p>
              When the plan collapses, don’t label it failure. Ask what the
              reality is showing you: do you need a stronger boundary, a better
              system, a smaller step, or a cleaner environment?
            </p>
          </div>

          <h3 className="grimoire-label">Structure Beats Mood</h3>
          <div className="grimoire-text">
            <p>Consistency is the spell that makes results inevitable.</p>
            <p>
              You do not rise to your inspiration. You rise to your structure.
              Outer alchemy is building a life that runs even when you are tired.
            </p>
          </div>

          <h3 className="grimoire-label">The Body is Part of the System</h3>
          <div className="grimoire-text">
            <p>Sleep, food, movement, and rest shape your power output.</p>
            <p>
              If the vessel is depleted, your magick becomes unstable. Outer
              alchemy is not just mindset: it is logistics.
            </p>
          </div>
        </section>

        {/* OUTER ALCHEMY IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Outer Alchemy in Practice</h2>

          <div className="grimoire-text">
            <p>
              Outer alchemy is built through deliberate design. Not perfection.
              Design. You choose the outcomes you want, then you construct the
              conditions that make them likely.
            </p>

            <p>This work is supported by:</p>

            <p>Cleaning inputs: what you watch, read, consume, and repeat.</p>
            <p>
              Creating rituals of structure: weekly resets, schedules, and
              consistent anchors.
            </p>
            <p>
              Designing a workspace that reduces friction and supports focus.
            </p>
            <p>Setting boundaries that protect time and attention.</p>
            <p>
              Building systems that turn goals into automatic, repeatable steps.
            </p>

            <p>
              Outer alchemy is the moment intention becomes architecture. The
              world cannot help but respond to someone who becomes a consistent
              cause.
            </p>
          </div>
        </section>

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Environment • Structure • Systems • Boundaries • Repetition • Design
              • Resources • Discipline • Stabilization • Reality
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/alchemy" className="grimoire-footer-link">
              ← Back to Alchemy
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to the Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}