// app/grimoire/parts-of-the-magickal-body/23-shins/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ShinsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Shins" subtitle="Stability in Motion, Impact, and Collective Direction">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/shins.png"
              alt="Shins in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The path forward tests what you are truly ready to walk.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The shins are the forward-facing guards of the lower body. They
            absorb impact, stabilize stride, and protect the legs as they move
            through the world. In the magickal body, the shins symbolize how
            you handle friction: the resistance that comes with progress.
          </p>

          <p>
            This region holds the archetype of resilience within collective
            motion. The shins support walking alongside others, navigating
            shared terrain, and adjusting pace without losing balance. They
            reflect your ability to stay steady when circumstances shift
            quickly.
          </p>

          <p>
            Symbolically, the shins are about forward defense. They do not
            initiate movement like the hips or power it like the thighs. They
            protect the journey. The lesson here is endurance in community.
            Progress is rarely smooth. The shins remind you that impact does
            not mean failure.
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
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
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
              When the shins speak, they speak through collision and tension.
              They respond when you are pushing ahead too quickly without
              awareness of your environment, or when you feel knocked off
              balance by unexpected resistance.
            </p>

            <p>
              This region often activates when navigating group dynamics,
              collective change, or shared responsibilities. The shins register
              whether your pace aligns with the path you are walking. They ask:
              are you forcing progress, or moving with intention?
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
                In expression, the shins represent adaptive resilience. You can
                encounter resistance without abandoning your direction. You
                adjust your stride while maintaining forward momentum. This is
                progress with awareness.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, the shins reflect reactive movement or avoidance.
                You may rush ahead without preparation, or withdraw entirely
                after minor impact. The shadow here is mistaking friction for
                obstruction. Not every obstacle is a sign to stop.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are you mistaking resistance for failure?</p>
            <p>Is your current pace sustainable for the path you are on?</p>
            <p>
              If progress were steady instead of dramatic, how would you move?
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