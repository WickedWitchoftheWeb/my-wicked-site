// app/grimoire/parts-of-the-magickal-body/03-throat/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ThroatPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Throat" subtitle="The Gate of Expression">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/throat2.png"
              alt="Throat in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The voice shapes reality long before the world responds.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The throat is the gate. It is where inner knowing becomes sound and
            where silence becomes a choice. In the magickal body, the throat
            governs articulation: not just speech, but resonance. It carries the
            vibration of what you believe to be true and releases it into the
            world.
          </p>

          <p>
            This region holds the archetype of declaration. The throat does not
            generate instinct like the head, nor does it anchor feeling like the
            heart. It translates. It shapes thought into tone and intention into
            language. Through it, identity becomes audible.
          </p>

          <p>
            The throat also governs value. What you speak reflects what you deem
            worthy of expression. What you withhold reveals where you doubt your
            right to be heard. In this way, the throat is not only a channel of
            communication. It is a mirror of self-trust.
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
              When the throat speaks, it speaks in vibration before words.
              It hums with what wants to be known. It tightens when truth is
              suppressed. It warms when something honest rises. The throat does
              not only react to conversation. It reacts to alignment.
            </p>

            <p>
              This region speaks when you are about to say something that
              matters. It speaks when your silence becomes heavier than your
              fear. It reminds you that expression is not performance. It is
              participation in reality.
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
                In expression, the throat is grounded truth. It speaks clearly
                without rushing. It knows when to be firm and when to soften.
                This is voice as sovereignty: steady, resonant, and rooted in
                self-worth. It does not need to overpower to be heard.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the throat either constricts or overcompensates. It
                may silence itself out of fear of rejection, or speak harshly
                out of fear of invisibility. Words may become rigid, defensive,
                or performative. The shadow of this region is the belief that
                truth must be forced or hidden to survive.
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
              What truth have you been rehearsing internally but withholding
              from the world?
            </p>
            <p>
              When you speak, do you aim to be understood, or do you aim to be
              approved?
            </p>
            <p>
              If your voice were a frequency, what would it be amplifying right
              now?
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