// app/grimoire/parts-of-the-magickal-body/08-lungs/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LungsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lungs" subtitle="Breath, Rhythm, and Exchange">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/lungs.png"
              alt="Lungs in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Breath is the first agreement between you and the world.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The lungs are the chambers of exchange. They take in what is outside
            and return what is inside. In the magickal body, the lungs represent
            rhythm: the ongoing relationship between presence and release. Breath
            is not just a function. It is the body&apos;s continuous act of
            participation in life.
          </p>

          <p>
            This region holds the archetype of air: movement, thought, and
            connection. The lungs mirror how you process experience in real
            time. They reveal whether you are letting life move through you, or
            holding it hostage inside the self. The lungs are not about control.
            They are about flow.
          </p>

          <p>
            Lungs also govern space. They expand and contract, creating room
            within the chest. Symbolically, this is the capacity to make room
            for feeling without drowning in it, and to make room for truth
            without needing certainty first. Breath is the reminder that you can
            stay here and still move.
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
              When the lungs speak, they speak in pace. Breath shortens when you
              brace for impact. It stalls when you are holding back emotion. It
              deepens when you feel safe enough to be fully here. The lungs
              reveal the distance between your inner world and the present
              moment.
            </p>

            <p>
              This region speaks when you are overwhelmed by information or
              emotion, when life feels like too much or not enough. It asks for
              space. It asks for rhythm. It reminds you that you do not have to
              solve everything to return to presence.
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
                In expression, the lungs hold clean rhythm. You take in
                experience without panicking, and you release what is finished
                without clinging. This is presence with movement: curiosity
                without overwhelm, openness without losing your center. Breath
                becomes a steady current that keeps you connected to yourself
                while you navigate the world.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the lungs hold tension through overthinking or fear.
                Breath may feel shallow, rushed, or constrained, reflecting a
                mind that cannot stop scanning for threat or certainty. The
                shadow of this region is the belief that you must be on guard to
                be safe, or that you must understand everything to stay
                grounded. When rhythm breaks, presence becomes difficult.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where in your life are you holding your breath and why?</p>
            <p>
              What would change if you stopped bracing and let the moment arrive
              as it is?
            </p>
            <p>
              What are you ready to release that you keep trying to think your
              way out of?
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