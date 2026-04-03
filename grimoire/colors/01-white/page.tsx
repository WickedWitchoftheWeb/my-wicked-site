// app/grimoire/colors/01-white/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function WhitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="White" subtitle="Clarity, cleansing, and pure signal">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/white.png"
            alt="Abstract white energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;White is not empty. White is everything, held in
              coherence.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            White is the frequency of clarity. It is clean signal, where
            intention is not distorted by noise, fear, confusion, or emotional
            residue. In magick, white is used to cleanse, protect, and reset the
            field so new outcomes can land without interference.
          </p>

          <p>
            White holds the full spectrum in potential. It can stand in for any
            color when needed, but its deepest power is purification: bringing
            your space, your mind, and your ritual back to neutral.
          </p>

          <p>
            Use white when you need a clear channel. Use white when your energy
            feels tangled. Use white when you want to begin again without
            dragging the old story with you.
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
                <Link href="/grimoire/source">Source</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Origin consciousness: coherence, unity, clean signal.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Clarity, unity, and alignment with higher intelligence.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Cleansing, protection, clarity, reset, purification
              </p>
              <p className="grimoire-correspondence-description">
                Use white to clear residue and restore the field to clean
                signal.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WHITE IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">White in Practice</h2>

          <div className="grimoire-text">
            <p>White candles: cleansing, protection, and fresh-start workings.</p>
            <p>White cloth: altar resets and clean containers for ritual work.</p>
            <p>Salt: purification and boundary-setting.</p>
            <p>Clear water: washes, baths, and clarity rituals.</p>
            <p>Light: open windows and intentional illumination.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE WHITE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use White</h2>

          <div className="grimoire-text">
            <p>This color supports you when you are:</p>
            <p>Resetting after conflict or emotional overload.</p>
            <p>Beginning a new chapter and closing the previous one cleanly.</p>
            <p>Strengthening protection before deeper work.</p>
            <p>Clearing a space that feels heavy, cluttered, or unstable.</p>
            <p>Calling clarity when you feel scattered or indecisive.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              White can become avoidance if cleansing replaces integration.
              Clearing the field is not the same as processing the lesson.
            </p>

            <p>
              White is also not meant to be sterile. If you overuse white, you
              may stay in reset mode and never move into creation. Clean signal
              is the beginning, not the destination.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Cleansing • Protection • Clarity • Reset • Purification • Peace •
              Truth • Neutrality • Coherence
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