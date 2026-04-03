// app/grimoire/parts-of-the-magickal-body/02-neck/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function NeckPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Neck" subtitle="The Bridge Between Will and Voice">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/neck2.png"
              alt="Neck in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The neck remembers how to bow without surrendering.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The neck is the bridge. It carries the head, protects the passage,
            and connects intention to expression. In the magickal body, the neck
            is the place where will must learn relationship: where the self that
            knows what it wants must also learn how to turn, listen, and choose
            alignment. It is strength with movement. Authority with flexibility.
          </p>

          <p>
            This region holds the archetype of orientation. The neck turns the
            gaze. It decides what you face and what you refuse to face. It is
            not only posture: it is willingness. It is the part of you that
            reveals how you handle pressure: do you stiffen and endure, do you
            collapse and comply, or do you stay steady and remain free to move?
          </p>

          <p>
            The neck is also a threshold of trust. It sits at the edge of the
            throat, where inner truth becomes language. When the neck is open,
            the voice can rise without fear. When it locks, even the clearest
            knowing can stay trapped behind tension. This is the bridge between
            instinct and articulation, between the self and the world.
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
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
              When the neck speaks, it speaks in tension and turning. It speaks
              in the moment you feel pulled in two directions: the urge to stay
              firm and the need to stay open. The neck carries the quiet truth
              that strength is not only force: it is the ability to adjust
              without abandoning yourself.
            </p>

            <p>
              It speaks when you are trying to hold your head high while also
              keeping the peace. It speaks when your truth wants to rise but
              your body wants to stay safe. The neck reveals the relationship
              between pride and humility, between endurance and flexibility,
              between what you insist on and what you can release.
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
                In expression, the neck is steady adaptability. It holds the
                self with dignity and still allows movement. It can pivot
                without panic and soften without collapse. This is alignment
                that remains alive: a posture of self-respect that does not
                harden into rigidity. It supports honest speech because it is
                not afraid of being seen from different angles.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the neck becomes stubborn resistance or guarded
                compliance. It may lock into pride, refusing to turn toward what
                is true. Or it may bend too far, carrying the weight of
                swallowing words to keep the external world calm. The shadow of
                this region is fear of consequence: fear that if you move, you
                will be judged, and fear that if you speak, you will be
                punished. When the neck hardens, the voice narrows. When it
                collapses, the self disappears.
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
              Where are you staying rigid because you believe flexibility would
              mean weakness?
            </p>
            <p>
              What truth is trying to rise in you that you keep holding back to
              avoid conflict?
            </p>
            <p>
              If you could turn your attention toward one honest direction
              today, what would you face without flinching?
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