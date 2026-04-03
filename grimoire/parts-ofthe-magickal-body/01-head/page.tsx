// app/grimoire/parts-of-the-magickal-body/01-head/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HeadPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Head" subtitle="The Crown of Awareness">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/head3.png"
              alt="Head in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Awareness is a blade: it cuts a path through the dark by naming
              what is true.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The head is the seat of orientation. It is where perception gathers,
            where thought forms, and where the inner world learns to aim itself.
            In the magickal body, the head is not only intelligence: it is
            direction. It is the moment awareness says, &quot;Here I am,&quot;
            and the world becomes defined by where you place your attention.
          </p>

          <p>
            The head carries the archetype of initiation. It names, chooses, and
            begins. This is the realm of identity as a living current, the
            instinct to move toward what calls you and away from what does not.
            When the head is clear, intention becomes clean. When the head is
            clouded, even powerful will can scatter into noise.
          </p>

          <p>
            This region also holds the threshold between knowing and believing.
            It receives signs, patterns, and meaning, then decides what will be
            allowed into the story of self. The head is the compass of the
            psyche: it points. It directs. It declares what matters.
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
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
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
              When the head speaks, it speaks in clarity and insistence. It
              sharpens the world into meaning. It pushes you toward the first
              step, the bold choice, the clean beginning. It is the part of you
              that refuses to drift. It wants a direction, a truth, a name for
              what you are becoming.
            </p>

            <p>
              The head also speaks in pressure when your inner knowing is being
              ignored. Not as a punishment, but as a signal: something wants to
              be seen clearly. Something wants to be decided. Awareness does not
              exist to torment you. It exists to guide you.
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
                In expression, the head is clean perception. It sees what is
                present without needing to distort it. It can hold a question
                without panic. It can choose a path without needing certainty
                first. This is the mind as a compass: focused, honest, and
                direct. It turns insight into orientation and orientation into
                action.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the head becomes tyranny of thought. It overnames,
                overinterprets, and tries to control the unknown by rehearsing
                it. It may cling to certainty, confuse urgency with truth, or
                mistake noise for intuition. The shadow of this region is not a
                lack of intelligence: it is a fear of not knowing. When the mind
                grips too tightly, wisdom cannot move through it.
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
              Where in your life are you demanding certainty before you allow
              yourself to begin?
            </p>
            <p>
              What truth do you already know, but keep postponing because it
              would change your direction?
            </p>
            <p>
              If your attention is your power, where has your attention been
              living lately?
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