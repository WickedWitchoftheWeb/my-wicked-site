// app/grimoire/parts-of-the-magickal-body/09-spine/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SpinePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Spine" subtitle="Backbone, Integrity, and Will">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/spine.png"
              alt="Spine in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Integrity is not an idea. It is a structure you live inside.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The spine is the backbone of the magickal body. It is structure,
            posture, and the invisible line of selfhood that holds you upright.
            Symbolically, the spine represents integrity: the alignment between
            who you are, what you choose, and what you refuse to betray.
          </p>

          <p>
            This region holds the archetype of courage. Not the loud kind: the
            quiet kind that endures. The spine carries the weight of life, not
            as punishment, but as proof that you can stand through experience
            without collapsing into it. It is the place where resilience becomes
            real.
          </p>

          <p>
            The spine also reflects sovereignty. It is the axis that keeps you
            oriented when the world tries to pull you off-center. When your
            inner fire is clear, you stand straight without effort. When your
            will is divided, you begin to bend around other people&apos;s
            expectations. The spine teaches one lesson again and again: hold
            yourself.
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
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
              When the spine speaks, it speaks in posture and resolve. It
              responds to pressure by bracing. It responds to shame by curling.
              It responds to confidence by lifting. The spine tells the truth
              about what you believe you are allowed to take up in the world.
            </p>

            <p>
              This region speaks when you are carrying something that violates
              your values, when you are forcing yourself to endure what you do
              not consent to, or when you have been bending so long you have
              forgotten what upright feels like. The spine does not ask for
              perfection. It asks for alignment.
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
                In expression, the spine is steady self-respect. You stand by
                what you know, adjust when you learn, and refuse to shrink for
                comfort. This is backbone as devotion: to your truth, to your
                growth, to your right to exist without apology. The spine
                becomes a living axis that holds you centered through change.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the spine bends around fear. It may harden into
                rigidity, refusing flexibility because control feels safer than
                trust. Or it may collapse into appeasement, yielding to avoid
                conflict or abandonment. The shadow here is the belief that
                safety requires self-betrayal, or that strength means never
                yielding. Either way, integrity becomes distorted.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where have you been bending to stay accepted?</p>
            <p>
              What would change if you stopped negotiating your own integrity?
            </p>
            <p>If you stood fully in your truth, what would you say no to?</p>
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