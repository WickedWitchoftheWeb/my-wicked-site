// app/grimoire/parts-of-the-magickal-body/11-nervous-system/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function NervousSystemPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Nervous System" subtitle="Perception, Signal, and Sensitivity">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/nervous-system.png"
              alt="Nervous System in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Sensitivity is not weakness. It is a finely tuned instrument.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The nervous system is the body&apos;s network of perception. It
            receives signals, interprets them, and decides how to respond. In
            the magickal body, it represents awareness: how quickly you sense
            change, how deeply you feel impact, and how safely you experience
            the world.
          </p>

          <p>
            This region holds the archetype of attunement. The nervous system
            listens before you consciously understand. It registers tone,
            movement, silence, and threat. It also registers beauty, connection,
            and relief. It is the invisible current beneath every reaction.
          </p>

          <p>
            Symbolically, the nervous system reflects your relationship to
            safety. When you feel supported, signals move cleanly. When you feel
            threatened or overwhelmed, everything intensifies. The nervous
            system does not decide what is true. It decides what feels safe
            enough to process.
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
                </Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>,{" "}
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
              When the nervous system speaks, it speaks in urgency or stillness.
              It speaks in racing thoughts, heightened alertness, sudden
              shutdown, or profound calm. It responds to what your conscious
              mind has not yet named.
            </p>

            <p>
              This region speaks when you are overstimulated, under-supported,
              or navigating environments that require constant vigilance. It
              also speaks when you are expanding into new awareness and your
              system is learning how to hold more sensation than before. The
              nervous system asks for regulation, not suppression.
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
                In expression, the nervous system is responsive but steady. You
                can sense nuance without being overwhelmed by it. You register
                emotion without absorbing it as identity. This is sensitivity
                with boundaries: perception that informs rather than consumes.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the nervous system lives in hypervigilance or
                shutdown. Everything feels urgent, or nothing feels reachable.
                The shadow here is the belief that you must constantly scan for
                danger to survive, or disconnect entirely to cope. Signal turns
                into noise, and awareness becomes exhaustion.
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
              Where are you reacting to old signals as if they are still
              present?
            </p>
            <p>
              What environments allow your body to soften without losing
              awareness?
            </p>
            <p>
              If your sensitivity were a gift instead of a burden, how would
              you treat it?
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