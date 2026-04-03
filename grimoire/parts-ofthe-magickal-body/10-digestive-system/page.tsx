// app/grimoire/parts-of-the-magickal-body/10-digestive-system/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function DigestiveSystemPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Digestive System" subtitle="Assimilation, Discernment, and Integration">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/digestive-system.png"
              alt="Digestive System in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “You do not become what you take in. You become what you can
              integrate.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The digestive system is the alchemy of the everyday. It breaks down,
            extracts, sorts, and releases. In the magickal body, it represents
            assimilation: how you process experience, how you discern what is
            nourishing, and how you transform what you have taken in into usable
            energy.
          </p>

          <p>
            This region holds the archetype of discernment. Not judgment: clarity.
            The digestive system asks what belongs inside your life and what does
            not. It mirrors your ability to metabolize emotion, information, and
            pressure without letting them poison your inner world.
          </p>

          <p>
            It also symbolizes integration. Some experiences pass through quickly.
            Others take time to understand. The digestive system reflects the
            slow work of making meaning: letting lessons settle, extracting the
            truth, and releasing what was never yours to hold.
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
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
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
              When the digestive system speaks, it speaks in yes and no. It
              speaks when something does not sit right. It speaks when you are
              trying to swallow what you do not believe, accept what you do not
              consent to, or carry what you cannot process yet.
            </p>

            <p>
              This region often speaks when you are overloaded: too much emotion,
              too much information, too many demands. It asks for simplicity. It
              asks for space. It asks you to stop forcing yourself to be fine
              while your inner world is still sorting the truth.
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
                In expression, the digestive system represents clean discernment.
                You take in what nourishes and release what does not. You can
                integrate experience without becoming consumed by it. This is
                inner order: the ability to learn, refine, and move forward with
                clarity.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the digestive system reflects overwhelm and
                over-control. You may overanalyze everything you take in, trying
                to prevent discomfort by perfecting the process. Or you may
                ignore the body&apos;s signals and force yourself to accept what
                is misaligned. The shadow here is the belief that you must either
                control every variable or tolerate what harms you.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you trying to digest that you have not accepted yet?</p>
            <p>
              Where are you overprocessing because you do not trust your own
              discernment?
            </p>
            <p>
              What would you release immediately if you believed you were allowed
              to say: this does not belong in my life?
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