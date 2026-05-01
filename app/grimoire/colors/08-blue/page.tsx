// app/grimoire/colors/08-blue/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BluePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Blue" subtitle="Truth, communication, and coherent flow">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/blue.png"
            alt="Abstract blue energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Blue is truth spoken clearly and held without distortion.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Blue is the color of clarity through communication. It governs truth,
            expression, listening, and the ability to transmit meaning without
            distortion. Blue steadies the voice and aligns thought with sound.
          </p>

          <p>
            In magick, blue is used to support honest communication, emotional
            regulation, calm authority, and relational coherence. Blue does not
            dominate. Blue resonates.
          </p>

          <p>
            Use blue when you need to speak clearly, listen fully, or restore
            trust through truth. Use blue when your message matters and your
            energy must remain calm and grounded.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Communication, circulation, exchange, coherence.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/05-throat-chakra">Throat Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Expression, truth, listening, vocal integrity.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Communication, truth, calm authority, emotional regulation, trust
              </p>
              <p className="grimoire-correspondence-description">
                Blue aligns expression with integrity and steadiness.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* BLUE IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Blue in Practice</h2>

          <div className="grimoire-text">
            <p>Blue candles: honest communication and calm resolution.</p>
            <p>Written truth: letters, scripts, or affirmations spoken aloud.</p>
            <p>Still water: reflection before response.</p>
            <p>Breath pacing: slowing speech and nervous system regulation.</p>
            <p>Quiet environments: reducing noise so truth can land.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE BLUE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Blue</h2>

          <div className="grimoire-text">
            <p>Use blue when you are:</p>

            <p>Preparing for an important conversation.</p>
            <p>Speaking truth that must remain calm and grounded.</p>
            <p>Repairing trust through clarity and honesty.</p>
            <p>Learning to listen without defensiveness.</p>
            <p>Regulating emotional responses through expression.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Blue can become emotional suppression if calm replaces honesty.
              Truth must still be expressed.
            </p>

            <p>
              Blue can also become detachment if communication loses warmth.
              Clarity works best when paired with care.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Truth • Communication • Calm • Coherence • Listening • Integrity •
              Expression • Trust
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