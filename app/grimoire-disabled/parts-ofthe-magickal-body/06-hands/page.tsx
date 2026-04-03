// app/grimoire/parts-of-the-magickal-body/06-hands/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HandsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hands" subtitle="The Instruments of Creation">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/hands.png"
              alt="Hands in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What you hold becomes part of you, and what you release shapes
              who you become.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The hands are the instruments of manifestation. They grasp, shape,
            mend, and let go. In the magickal body, the hands represent direct
            interaction with reality. They are where intention meets matter,
            where thought becomes touch, and where desire becomes form.
          </p>

          <p>
            This region holds the archetype of skill and exchange. Hands are not
            passive. They respond, adapt, and refine through repetition. They
            reveal how you handle power in small ways: how you treat what you
            hold, how gently or forcefully you engage, and how willingly you
            open your grip.
          </p>

          <p>
            The hands also symbolize agency. To reach with your hands is to
            participate. To close them is to protect or to withhold. To open
            them is to trust. In this way, the hands tell the truth about your
            relationship to control, generosity, and creation.
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
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
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
              When the hands speak, they speak through impulse and tension.
              They tighten when you feel the need to secure something. They
              fidget when energy has nowhere to go. They relax when trust
              returns. The hands rarely lie. They reveal what you are trying to
              control and what you are ready to release.
            </p>

            <p>
              This region speaks when you are about to create, repair, or
              destroy. It carries the current of immediacy. The hands remind you
              that power is often subtle: it lives in small adjustments, in how
              firmly you hold and how softly you let go.
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
                In expression, the hands act with precision and awareness. You
                build with intention. You touch with care. You know when to
                tighten your grip and when to open it. This is participation
                without force: craftsmanship of self and world through steady,
                conscious engagement.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the hands may grasp from fear or withdraw from
                hesitation. You may cling to control, overwork to prove worth,
                or avoid action altogether because failure feels unbearable.
                The shadow of the hands is the belief that creation must be
                perfect to be valid, or that letting go equals losing power.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you holding too tightly right now?</p>
            <p>
              Where are you avoiding action because you fear the outcome?
            </p>
            <p>
              If your hands acted from confidence instead of anxiety, what
              would you begin shaping today?
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