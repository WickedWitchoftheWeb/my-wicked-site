// app/grimoire/parts-of-the-magickal-body/05-arms/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ArmsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Arms" subtitle="Reach, Motion, and Exchange">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/arms.png"
              alt="Arms in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Your reach is a language: it reveals what you believe you are
              allowed to touch.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The arms are the instruments of reach. They extend the self outward,
            gather what is needed, and return experience back into the body. In
            the magickal body, the arms represent exchange: the way you connect
            with the world through action, effort, and contact. They reveal how
            you pursue, how you receive, and how you negotiate distance.
          </p>

          <p>
            This region holds the archetype of adaptability. Arms move in
            response to circumstance. They adjust grip, change direction, and
            reorient quickly. They embody the intelligence of motion: the ability
            to learn by doing, to test what fits, and to shift strategy without
            losing purpose.
          </p>

          <p>
            Arms are also about consent and boundary. What you reach for is a
            claim. What you avoid is a signal. The arms show how you relate to
            effort and agency: whether you overextend, hesitate, or act with
            clean intention. They are the lived bridge between thought and
            consequence.
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
              When the arms speak, they speak in reach and recoil. They speak in
              the instinct to grab, to hold, to push away, to pull closer. They
              reveal what you are trying to secure and what you are trying to
              avoid. The arms speak most clearly when your actions contradict
              your words.
            </p>

            <p>
              This region also speaks through fatigue when effort has become
              constant. It asks whether your reaching is intentional or
              compulsive. It reminds you that movement is a choice, and that
              touch carries meaning.
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
                In expression, the arms move with clean agency. You reach for
                what aligns, release what does not, and engage without
                overextending. This is action with clarity: responsive, curious,
                and capable. The arms become tools of connection and creation,
                not instruments of pressure.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the arms may grasp or withdraw. Reaching can become a
                way to control outcome, to chase reassurance, or to prove worth
                through effort. Or the opposite can happen: avoidance of action
                because contact feels risky. The shadow here is the belief that
                you must either force connection or refuse it entirely. When the
                arms lose their ease, exchange becomes struggle.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you reaching for right now, and why?</p>
            <p>
              Where do you overextend to earn connection instead of allowing it?
            </p>
            <p>
              If your actions became honest, what would you stop doing
              immediately?
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