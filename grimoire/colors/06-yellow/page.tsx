// app/grimoire/colors/06-yellow/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function YellowPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Yellow"
        subtitle="Will, confidence, and focused clarity"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/yellow.png"
            alt="Abstract yellow energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Yellow is the moment your power becomes decisive.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Yellow is the color of will. It governs confidence, clarity, mental
            focus, and the ability to take up space without apology. Yellow
            turns hesitation into direction and helps your energy move from
            consideration into action.
          </p>

          <p>
            In magick, yellow is used to strengthen self-belief, sharpen the
            mind, improve discernment, and increase momentum. Yellow clears
            indecision. It brings your intention into focus and reminds you that
            your choices shape reality.
          </p>

          <p>
            Use yellow when you need to make a decision and stand by it. Use
            yellow when you are building confidence through competence. Use
            yellow when your mind needs to cut through noise and hold the goal.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Activation, momentum, transformation, the will to act.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
              <p className="grimoire-correspondence-description">
                Willpower, confidence, identity, personal authority.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Confidence, clarity, success, focus, discernment, momentum
              </p>
              <p className="grimoire-correspondence-description">
                Yellow strengthens decision-making and powers forward movement.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* YELLOW IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Yellow in Practice</h2>

          <div className="grimoire-text">
            <p>Yellow candles: confidence, clarity, and momentum workings.</p>
            <p>Written plans: goals stated plainly and reviewed daily.</p>
            <p>Sun exposure: charging confidence through real-world action.</p>
            <p>Clean workspace: removing distraction so focus can hold.</p>
            <p>
              Intentional speech: choosing decisive language and clear
              commitments.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE YELLOW */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Yellow</h2>

          <div className="grimoire-text">
            <p>Use yellow when you are:</p>

            <p>Making a choice and committing to the path.</p>
            <p>Building confidence through consistency and skill.</p>
            <p>Needing focus while learning, studying, or planning.</p>
            <p>Calling success that requires discipline and follow-through.</p>
            <p>Clearing self-doubt and strengthening personal authority.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Yellow can turn into anxious overthinking if focus becomes
              obsession. Clarity is meant to move you forward, not trap you in
              analysis.
            </p>

            <p>
              Yellow can also become performance if confidence is built on
              external approval. Use yellow to strengthen inner authority, not
              image.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Will • Confidence • Clarity • Focus • Discernment • Momentum •
              Success • Authority • Direction
            </p>
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/colors" className="grimoire-footer-link">
              ← Back to Colors
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