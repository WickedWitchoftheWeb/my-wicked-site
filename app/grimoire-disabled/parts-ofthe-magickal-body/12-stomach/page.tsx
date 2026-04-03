// app/grimoire/parts-of-the-magickal-body/12-stomach/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function StomachPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Stomach" subtitle="Processing, Instinct, and Emotional Alchemy">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/stomach.png"
              alt="Stomach in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Instinct is the body thinking before the mind catches up.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The stomach is the crucible of instinct. It receives, churns,
            reacts, and responds before logic ever forms a sentence. In the
            magickal body, the stomach represents emotional processing and gut
            knowing: the place where experience is first felt as truth or
            resistance.
          </p>

          <p>
            This region holds the archetype of intuition grounded in the body.
            The stomach does not debate. It tightens, softens, drops, or lifts.
            It signals attraction, danger, misalignment, or excitement long
            before the conscious mind constructs meaning. The gut is a compass,
            not a courtroom.
          </p>

          <p>
            Symbolically, the stomach also reflects vulnerability. It is a soft
            center protected by bone and muscle. When you feel exposed,
            embarrassed, or uncertain, this is often where the sensation lands.
            The stomach teaches you how to stay present with feeling without
            needing to control it.
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
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
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
              When the stomach speaks, it speaks in sensation. A drop. A knot.
              A flutter. A hollow feeling. It responds to emotional impact
              immediately, even when you try to rationalize what happened.
            </p>

            <p>
              This region often speaks when you are ignoring intuition, when you
              are trying to convince yourself something is fine, or when you are
              absorbing more emotional weight than you can comfortably process.
              The stomach does not argue. It registers.
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
                In expression, the stomach represents embodied intuition. You
                trust your gut without letting it dominate your judgment. You
                can feel deeply without being destabilized by every emotional
                wave. This is instinct integrated with awareness.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the stomach becomes a reservoir for unprocessed
                emotion. Anxiety tightens it. Suppressed fear knots it.
                Avoidance churns through it. The shadow here is the belief that
                you must override your instinct to stay accepted or safe. When
                intuition is ignored long enough, the body grows louder.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where is your gut already clear, even if your mind is not?</p>
            <p>
              What are you trying to convince yourself of that your body has
              already answered?
            </p>
            <p>
              If you trusted your instinct fully, what decision would shift
              first?
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