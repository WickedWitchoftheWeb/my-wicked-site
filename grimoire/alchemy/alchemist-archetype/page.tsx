// app/grimoire/alchemy/alchemist-archetype/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AlchemistArchetypePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Alchemist Archetype"
        subtitle="The one who turns experience into power"
      >
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/alchemy/alchemist-archetype.png"
            alt="The Alchemist Archetype cover image"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “An alchemist does not beg reality. They become the cause.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* ESSENCE OF THE ALCHEMIST */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Essence of the Alchemist</h2>

          <div className="grimoire-text">
            <p>
              The Alchemist is the archetype of intentional transformation. They
              do not wait for life to change. They do not rely on luck, rescue, or
              perfect conditions. They treat experience like raw material and
              refine it until it becomes wisdom, power, and results.
            </p>

            <p>
              An Alchemist understands that reality responds to causes, not
              wishes. They become disciplined about what they feed, what they
              reinforce, and what they allow to shape them. They do not fear
              breakdown because they know breakdown is a stage, not a verdict.
            </p>

            <p>
              In Wicked terms, the Alchemist is the one who stops being shaped by
              the world and starts shaping it on purpose.
            </p>
          </div>
        </section>

        {/* WHAT THE ALCHEMIST VALUES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">What the Alchemist Values</h2>

          <h3 className="grimoire-label">Truth</h3>
          <div className="grimoire-text">
            <p>
              Reality responds to truth faster than it responds to performance.
            </p>
            <p>
              The Alchemist chooses honesty over comfort because comfort built on
              illusion collapses eventually.
            </p>
          </div>

          <h3 className="grimoire-label">Process</h3>
          <div className="grimoire-text">
            <p>They respect sequence. They understand stages.</p>
            <p>
              The Alchemist does not rush transformation. They refine it. They
              stabilize it. They know that skipping steps creates unstable power.
            </p>
          </div>

          <h3 className="grimoire-label">Containment</h3>
          <div className="grimoire-text">
            <p>They build a vessel that can hold intensity.</p>
            <p>
              Containment is boundaries, discipline, and structure. The
              Alchemist knows that wild energy without a vessel becomes
              self-destruction.
            </p>
          </div>

          <h3 className="grimoire-label">Interconnectedness</h3>
          <div className="grimoire-text">
            <p>They think in systems, not isolated moments.</p>
            <p>
              The Alchemist understands that inner state, behavior,
              relationships, and environment are linked. They change the
              system, not just the mood.
            </p>
          </div>
        </section>

        {/* HOW THE ALCHEMIST MOVES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">How the Alchemist Moves</h2>

          <h3 className="grimoire-label">They Observe</h3>
          <div className="grimoire-text">
            <p>They study patterns without flinching.</p>
            <p>
              Instead of asking “Why is this happening to me?” the Alchemist
              asks: “What is this teaching me?” Observation turns suffering
              into data.
            </p>
          </div>

          <h3 className="grimoire-label">They Separate</h3>
          <div className="grimoire-text">
            <p>They extract signal from noise.</p>
            <p>
              The Alchemist learns to distinguish fear from intuition, desire
              from distraction, love from attachment, and power from control.
            </p>
          </div>

          <h3 className="grimoire-label">They Refine</h3>
          <div className="grimoire-text">
            <p>They purify motives and strengthen standards.</p>
            <p>
              Refinement is where power becomes clean. It is the difference
              between repeating a cycle and evolving beyond it.
            </p>
          </div>

          <h3 className="grimoire-label">They Build</h3>
          <div className="grimoire-text">
            <p>They convert insight into structure.</p>
            <p>
              The Alchemist builds the vessel: routines, boundaries, skills,
              systems, and practices that make the new self stable.
            </p>
          </div>

          <h3 className="grimoire-label">They Enforce</h3>
          <div className="grimoire-text">
            <p>They protect the work from contamination.</p>
            <p>
              The Alchemist does not negotiate their non-negotiables. They know
              that what they tolerate becomes the law of their reality.
            </p>
          </div>
        </section>

        {/* WHAT THE ALCHEMIST IS NOT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">What the Alchemist is Not</h2>

          <h3 className="grimoire-label">Not Passive</h3>
          <div className="grimoire-text">
            <p>They do not outsource destiny to timing or luck.</p>
            <p>
              The Alchemist respects timing, but they do not worship it. They
              act when action is required.
            </p>
          </div>

          <h3 className="grimoire-label">Not Performative</h3>
          <div className="grimoire-text">
            <p>They do not chase aesthetic proof of spirituality.</p>
            <p>The work is not what it looks like. The work is what it changes.</p>
          </div>

          <h3 className="grimoire-label">Not Chaotic</h3>
          <div className="grimoire-text">
            <p>They do not confuse intensity with progress.</p>
            <p>
              The Alchemist chooses steadiness. They build power that lasts,
              not power that burns out.
            </p>
          </div>

          <h3 className="grimoire-label">Not Loyal to the Old Self</h3>
          <div className="grimoire-text">
            <p>They do not cling to identity as a prison.</p>
            <p>
              The Alchemist will let a version of themselves die if it cannot
              hold the next life.
            </p>
          </div>
        </section>

        {/* SIGNS YOU ARE IN THE ALCHEMIST ARC */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">
            Signs You Are in the Alchemist Arc
          </h2>

          <div className="grimoire-text">
            <p>You stop romanticizing what hurts you.</p>
            <p>You become allergic to misalignment.</p>
            <p>You choose standards over nostalgia.</p>
            <p>You build structure instead of chasing motivation.</p>
            <p>
              You treat discomfort as part of the process, not a warning sign.
            </p>
            <p>
              You become responsible for the signal you send into reality.
            </p>

            <p>
              This is not perfection. This is power becoming coherent.
            </p>
          </div>
        </section>

        {/* THE ALCHEMIST IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Alchemist in Practice</h2>

          <div className="grimoire-text">
            <p>
              The Alchemist archetype is lived through choices. Not dramatic
              declarations. The work is quiet, repetitive, and precise.
            </p>

            <p>It is supported by:</p>

            <p>Daily containment: boundaries, rest, and clean inputs.</p>
            <p>Weekly refinement: reflection, reset, and course correction.</p>
            <p>Skill-building: competence that creates confidence.</p>
            <p>Truth rituals: practices that force honesty and clarity.</p>
            <p>Systems: structure that holds the next version of you.</p>

            <p>
              In Wicked terms, the Alchemist is not someone who hopes harder.
              They become someone who holds.
            </p>
          </div>
        </section>

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Intentionality • Truth • Discipline • Refinement • Containment •
              Systems • Boundaries • Coherence • Responsibility • Transformation
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