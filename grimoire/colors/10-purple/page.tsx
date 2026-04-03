// app/grimoire/colors/10-purple/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PurplePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Purple"
        subtitle="Mysticism, transcendence, and Source contact"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/purple.png"
            alt="Abstract purple energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Purple is the threshold where meaning becomes
              revelation.&rdquo;
            </p>

            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Purple is the color of mysticism and transcendence. It governs the
            threshold state where the mind quiets and deeper knowing becomes
            available. Purple is not about chasing signs. Purple is about
            becoming receptive to truth without distortion.
          </p>

          <p>
            In magick, purple supports spiritual authority, deep intuition,
            higher guidance, and the alchemical shift from identity into
            alignment. Purple invites you into stillness so you can feel what is
            real.
          </p>

          <p>
            Use purple when you need Source contact. Use purple when you are
            stepping into spiritual responsibility. Use purple when you are
            ready to release the old self and hold a higher standard.
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
                <Link href="/grimoire/source">Source</Link>
              </p>
              <p className="grimoire-correspondence-description">
                The current behind all form: unity, coherence, higher
                intelligence.
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Source connection, spiritual clarity, guidance, alignment.
              </p>
            </div>

            {/* Magickal Functions */}
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Mysticism, transcendence, higher guidance, spiritual authority,
                alignment
              </p>
              <p className="grimoire-correspondence-description">
                Purple supports Source contact and long-range clarity.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* PURPLE IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Purple in Practice</h2>

          <div className="grimoire-text">
            <p>Purple candles: spiritual clarity and higher guidance work.</p>
            <p>Silence rituals: reducing noise so truth can be received.</p>
            <p>Clean space: removing clutter that disrupts perception.</p>
            <p>Devotional repetition: daily practices that build spiritual strength.</p>
            <p>Symbol discipline: fewer symbols, deeper charge.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE PURPLE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Purple</h2>

          <div className="grimoire-text">
            <p>Use purple when you are:</p>

            <p>Seeking guidance that must be clear and uncompromised.</p>
            <p>Strengthening your spiritual practice through consistency.</p>
            <p>Releasing identities that no longer match your timeline.</p>
            <p>Making decisions that require long-range clarity.</p>
            <p>Calling protection through alignment with Source.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Purple can become escapism if spirituality replaces reality. Source
              contact is meant to clarify action, not avoid it.
            </p>

            <p>
              Purple can also inflate ego if spiritual language replaces spiritual
              responsibility. Authority is earned through integrity.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Mysticism • Transcendence • Alignment • Guidance • Authority •
              Coherence • Stillness • Revelation
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