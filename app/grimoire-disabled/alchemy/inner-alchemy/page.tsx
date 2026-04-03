// app/grimoire/alchemy/inner-alchemy/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function InnerAlchemyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Inner Alchemy" subtitle="Transmutation of the self">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/alchemy/inner-alchemy.png"
            alt="Inner Alchemy cover image"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The first crucible is the self. Everything else is a consequence.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* ESSENCE OF INNER ALCHEMY */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Essence of Inner Alchemy</h2>

          <div className="grimoire-text">
            <p>
              Inner alchemy is the art of changing what you are made of on the
              inside. Not by pretending. Not by positive-thinking over pain. By
              refining the actual ingredients that generate your reality: belief,
              identity, emotion, nervous system response, and will.
            </p>

            <p>
              Your inner state is not just a mood. It is the lens through which
              you choose, react, commit, and endure. When the inner structure
              changes, your external world eventually has to reorganize to match.
            </p>

            <p>
              In Wicked terms, inner alchemy is the difference between wanting a
              new life and becoming someone who can hold it.
            </p>
          </div>
        </section>

        {/* THE INNER CRUCIBLE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Inner Crucible</h2>

          <h3 className="grimoire-label">Belief</h3>
          <div className="grimoire-text">
            <p>The invisible script that decides what feels possible.</p>
            <p>
              Belief shapes your perception, and perception shapes your choices.
              Inner alchemy begins when you stop treating your beliefs as facts
              and start treating them as materials.
            </p>
          </div>

          <h3 className="grimoire-label">Identity</h3>
          <div className="grimoire-text">
            <p>The role you keep reenacting, even when it hurts.</p>
            <p>
              Identity is the strongest spell most people live under. It dictates
              what you allow, what you tolerate, and what you call “just how I
              am.” Inner alchemy breaks identity cages.
            </p>
          </div>

          <h3 className="grimoire-label">Emotion</h3>
          <div className="grimoire-text">
            <p>Energy carrying information.</p>
            <p>
              Emotion is not the enemy. Suppression is. Inner alchemy teaches you
              to process and transmute emotion so it becomes fuel instead of
              sabotage.
            </p>
          </div>

          <h3 className="grimoire-label">Nervous System</h3>
          <div className="grimoire-text">
            <p>The body’s vote on safety.</p>
            <p>
              You cannot live a new reality if your body interprets it as danger.
              Inner alchemy includes regulation, repetition, and containment so
              growth stops feeling like a threat.
            </p>
          </div>

          <h3 className="grimoire-label">Will</h3>
          <div className="grimoire-text">
            <p>The force that holds direction.</p>
            <p>
              Will is not forcefulness. It is coherence. It is the ability to stay
              aligned when discomfort appears.
            </p>
          </div>
        </section>

        {/* THE INNER STAGES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Stages of Inner Alchemy</h2>

          <h3 className="grimoire-label">1) Recognition</h3>
          <div className="grimoire-text">
            <p>You notice the pattern without defending it.</p>
            <p>
              Recognition is the first rupture in the spell. The moment you can
              name what’s happening, it stops owning you completely.
            </p>
          </div>

          <h3 className="grimoire-label">2) Extraction</h3>
          <div className="grimoire-text">
            <p>You pull the truth out of the emotion.</p>
            <p>
              Extraction is where you separate signal from noise: what you feel,
              what it means, and what it’s pointing to underneath the surface.
            </p>
          </div>

          <h3 className="grimoire-label">3) Transmutation</h3>
          <div className="grimoire-text">
            <p>You change the material, not the story.</p>
            <p>
              Transmutation is taking fear and refining it into clarity. Taking
              grief and refining it into devotion. Taking anger and refining it
              into boundaries. Same energy: new function.
            </p>
          </div>

          <h3 className="grimoire-label">4) Integration</h3>
          <div className="grimoire-text">
            <p>You live differently because you are different.</p>
            <p>
              Integration is where the lesson becomes behavior. Your choices
              change. Your standards change. Your tolerance for misalignment
              collapses.
            </p>
          </div>

          <h3 className="grimoire-label">5) Stabilization</h3>
          <div className="grimoire-text">
            <p>You build a vessel that holds the new self.</p>
            <p>
              Stabilization is systems, boundaries, and repetition. Without this,
              inner alchemy stays a moment of insight instead of becoming a life.
            </p>
          </div>
        </section>

        {/* TRANSMUTATIONS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Transmutations</h2>

          <h3 className="grimoire-label">Fear → Precision</h3>
          <div className="grimoire-text">
            <p>Fear often contains information about what matters.</p>
            <p>
              When refined, fear becomes a signal: adjust the plan, strengthen the
              skill, tighten the boundary, then proceed.
            </p>
          </div>

          <h3 className="grimoire-label">Shame → Self-Respect</h3>
          <div className="grimoire-text">
            <p>Shame is identity contamination.</p>
            <p>
              When purified, shame becomes self-respect: “I do not live from this
              place anymore.”
            </p>
          </div>

          <h3 className="grimoire-label">Grief → Devotion</h3>
          <div className="grimoire-text">
            <p>Grief proves that you loved something real.</p>
            <p>
              When integrated, grief becomes devotion: a clearer relationship to
              what you value, what you will protect, and what you will create.
            </p>
          </div>

          <h3 className="grimoire-label">Anger → Boundaries</h3>
          <div className="grimoire-text">
            <p>Anger is often a guardian with poor communication.</p>
            <p>
              When refined, anger becomes clean boundaries, decisive action, and a
              refusal to abandon yourself.
            </p>
          </div>
        </section>

        {/* ALCHEMICAL LAWS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Inner Alchemical Laws</h2>

          <h3 className="grimoire-label">Interconnectedness</h3>
          <div className="grimoire-text">
            <p>Your body, mind, and spirit change together: or not at all.</p>
            <p>
              A mindset shift without nervous system support collapses. A spiritual
              insight without behavior change fades. Inner alchemy is system work.
            </p>
          </div>

          <h3 className="grimoire-label">Containment</h3>
          <div className="grimoire-text">
            <p>Emotion needs a vessel, not a stage.</p>
            <p>
              Containment is how you feel deeply without leaking power everywhere.
              It is discipline, boundaries, and practices that keep you coherent.
            </p>
          </div>

          <h3 className="grimoire-label">Truth Before Technique</h3>
          <div className="grimoire-text">
            <p>No method can override self-deception.</p>
            <p>
              Inner alchemy asks for honesty before it offers results. If the
              foundation is a lie, the build will collapse.
            </p>
          </div>
        </section>

        {/* INNER ALCHEMY IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Inner Alchemy in Practice</h2>

          <div className="grimoire-text">
            <p>
              Inner alchemy becomes real through repetition. Not intensity.
              Repetition. Small, consistent actions that teach your system a new
              normal.
            </p>

            <p>This work is supported by:</p>

            <p>Journaling for pattern recognition and extraction.</p>
            <p>Breath and regulation practices for nervous system safety.</p>
            <p>Shadow work for purification and identity repair.</p>
            <p>Intentional speech for symbolic reprogramming.</p>
            <p>Boundaries that enforce the new self daily.</p>

            <p>
              Inner alchemy is how you stop negotiating with your old reality. You
              change the ingredients, and the outcome changes with them.
            </p>
          </div>
        </section>

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Refinement • Nervous System • Shadow • Transmutation • Identity •
              Belief • Containment • Integration • Coherence • Self-Respect
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