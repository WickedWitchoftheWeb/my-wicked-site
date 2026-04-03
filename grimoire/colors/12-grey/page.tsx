// app/grimoire/colors/12-grey/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GreyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Grey"
        subtitle="Neutrality, pause, and conscious choice"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/grey.png"
            alt="Abstract grey energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Grey is the space where reaction ends and choice
              begins.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Grey is the color of neutrality and suspension. It governs pauses,
            liminal states, and moments where energy has not yet chosen a
            direction. Grey is not absence. Grey is restraint.
          </p>

          <p>
            In magick, grey is used for buffering energy, creating psychic
            distance, holding boundaries, and interrupting reactive patterns.
            Grey gives you space to decide rather than forcing momentum.
          </p>

          <p>
            Use grey when clarity requires stillness. Use grey when you need to
            step out of polarity and observe without attachment. Use grey when
            the next move must be intentional.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <section className="grimoire-correspondences">
            {/* Element */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                Dual:{" "}
                <Link href="/grimoire/11-elements/air">Air</Link>
                {" / "}
                <Link href="/grimoire/source">Source</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Mental distance, neutrality, observational awareness.
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">Crown Chakra</p>
              <p className="grimoire-correspondence-description">
                Suspension of identity, perspective beyond polarity.
              </p>
            </div>

            {/* Magickal Functions */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Neutralization, boundary-setting, pause, observation, buffering
              </p>
              <p className="grimoire-correspondence-description">
                Grey creates space for conscious decision-making.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* GREY IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Grey in Practice</h2>

          <div className="grimoire-text">
            <p>Grey candles: neutralizing unwanted energy.</p>
            <p>Visual buffers: creating psychic distance.</p>
            <p>Intentional pauses: delaying action to regain clarity.</p>
            <p>Minimal environments: reducing stimulation.</p>
            <p>Boundary statements: clear limits without emotional charge.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE GREY */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Grey</h2>

          <div className="grimoire-text">
            <p>Use grey when you are:</p>

            <p>Feeling overwhelmed by conflicting signals.</p>
            <p>Interrupting reactive cycles.</p>
            <p>Needing neutrality in emotionally charged situations.</p>
            <p>Holding space before committing to a path.</p>
            <p>Observing without interference.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Grey can become avoidance if pause replaces decision. Stillness is
              a tool, not a destination.
            </p>

            <p>
              Grey can also dull vitality if used too long. Neutrality is meant
              to reset energy, not suppress it indefinitely.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Neutrality • Pause • Observation • Restraint • Buffering •
              Discernment • Perspective • Choice
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