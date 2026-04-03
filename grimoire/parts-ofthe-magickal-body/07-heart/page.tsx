// app/grimoire/parts-of-the-magickal-body/07-heart/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HeartPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Heart" subtitle="The Sovereign Flame Within">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/heart.png"
              alt="Heart in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The heart does not whisper who you are. It declares it.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The heart is the sovereign center of the magickal body. It does not
            calculate like the head, nor negotiate like the throat. It radiates.
            In symbolic anatomy, the heart represents vitality, courage, and
            the unapologetic pulse of identity. It is the flame that refuses to
            dim simply because the world grows dark.
          </p>

          <p>
            This region holds the archetype of creative power. The heart does
            not ask for permission to feel or to shine. It expresses through
            warmth, generosity, and the willingness to be seen. Where the heart
            is open, life feels animated. Where it contracts, the world begins
            to lose color.
          </p>

          <p>
            The heart also governs devotion: not only romantic love, but loyalty
            to purpose. It asks a singular question: what are you willing to
            give energy to? What you love becomes your altar. What you protect
            reveals your deepest truth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN THIS AREA SPEAKS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When This Area Speaks</h2>

          <div className="grimoire-text">
            <p>
              When the heart speaks, it speaks in warmth and ache. It expands
              when something feels aligned. It tightens when truth is denied. It
              flares when joy rises without apology. The heart does not speak in
              logic. It speaks in pulse.
            </p>

            <p>
              This region speaks when you are about to choose between safety and
              authenticity. It beats louder when something matters. It quiets
              when you betray your own fire. The heart is not fragile. It is
              honest. It reveals what you truly value by what moves you.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* SHADOW & EXPRESSION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Shadow &amp; Expression</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Expression</h3>
              <p className="grimoire-correspondence-value">
                In expression, the heart radiates confidence without arrogance.
                It gives generously without depletion. It loves without
                possession. This is vitality in motion: a steady, warm presence
                that draws others closer without demanding validation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the heart can overextend in search of admiration or
                close itself out of fear of rejection. Pride may replace
                authenticity. Drama may replace devotion. The shadow of this
                region is not weakness: it is misdirected fire. When the heart
                burns to prove instead of to express, it exhausts itself.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>
              What currently holds the center of your devotion?
            </p>
            <p>
              Where are you seeking recognition instead of expressing joy?
            </p>
            <p>
              If you allowed your heart to lead without fear, what would you
              choose differently?
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/parts-of-the-magickal-body"
              className="grimoire-footer-link"
            >
              ← Back to Parts of the Magickal Body
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