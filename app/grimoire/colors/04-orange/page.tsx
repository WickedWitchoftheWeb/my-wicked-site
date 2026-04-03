// app/grimoire/colors/04-orange/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OrangePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Orange" subtitle="Creation, desire, and embodied flow">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/orange.png"
            alt="Abstract orange energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Orange is creation moving through the body with
              permission.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Orange is the color of creation in motion. It governs desire,
            pleasure, emotional flow, and the act of bringing something into
            form through feeling rather than force. Orange lives in the body. It
            listens before it moves.
          </p>

          <p>
            In magick, orange supports creativity, sensuality, fertility,
            emotional expression, and the ability to experience without guilt.
            It teaches that desire is not weakness. Desire is information.
          </p>

          <p>
            Use orange when you are learning to trust your instincts again. Use
            orange when something wants to be created through joy rather than
            pressure. Use orange when the body needs permission to feel.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Emotional movement, receptivity, creativity, and relational
                flow.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
              <p className="grimoire-correspondence-description">
                Desire, creativity, sensuality, and emotional embodiment.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Creativity, fertility, pleasure, emotional expression, attraction
              </p>
              <p className="grimoire-correspondence-description">
                Orange activates creation through enjoyment rather than force.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* ORANGE IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Orange in Practice</h2>

          <div className="grimoire-text">
            <p>Orange candles: creative work, attraction, and motivation.</p>
            <p>Food offerings: sweetness, nourishment, embodied gratitude.</p>
            <p>Movement rituals: dance, stretching, water-based flow.</p>
            <p>
              Creative tools: writing, art, music created without outcome
              pressure.
            </p>
            <p>Touch awareness: restoring trust in physical sensation.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE ORANGE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Orange</h2>

          <div className="grimoire-text">
            <p>Use orange when you are:</p>
            <p>Reconnecting with creativity after stagnation.</p>
            <p>Healing shame around desire or pleasure.</p>
            <p>Calling in fertile energy for projects or relationships.</p>
            <p>Learning to listen to your body again.</p>
            <p>Creating something that needs emotional flow to exist.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Orange can become avoidance if pleasure replaces responsibility.
              Creation still requires containment.
            </p>

            <p>
              Orange can also overwhelm when emotional boundaries are ignored.
              Flow works best when the container is respected.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Creativity • Desire • Pleasure • Fertility • Flow • Sensuality •
              Emotional Expression • Embodiment
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