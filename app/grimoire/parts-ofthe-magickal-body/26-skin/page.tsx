// app/grimoire/parts-of-the-magickal-body/26-skin/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SkinPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Skin" subtitle="Boundaries, Identity, and Outer Protection">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/skin1.png"
              alt="Skin in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What you allow in shapes what you become.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The skin is the body&apos;s boundary. It separates inner from outer,
            self from environment, intimacy from exposure. In the magickal
            body, skin symbolizes personal borders and the way identity meets
            the world.
          </p>

          <p>
            Ruled by Capricorn, this region carries themes of protection,
            endurance, and self-containment. Skin reflects how you regulate
            access to your energy. It speaks to your comfort with visibility and
            your instinct to guard what is sacred.
          </p>

          <p>
            Symbolically, the skin represents reputation and presentation. It is
            what others see first, yet it also protects what lies beneath. The
            lesson here is conscious boundary. Strength is not isolation. It is
            discernment.
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
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
              When the skin speaks, it speaks through sensitivity and
              defensiveness. It responds when boundaries feel crossed or when
              you are overexposed to environments that do not honor your limits.
            </p>

            <p>
              This region often activates during periods of scrutiny, social
              pressure, or identity shifts. The skin asks whether your outer
              presentation aligns with your inner truth, and whether your
              defenses are protective or restrictive.
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
                In expression, skin represents healthy boundaries. You know when
                to open and when to close. You present yourself authentically
                while maintaining sovereignty over your energy.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, skin reflects overprotection or porous boundaries.
                You may harden yourself against connection or allow others to
                cross limits without resistance. The shadow here is confusing
                walls with strength. True resilience is flexible.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are your boundaries too rigid or too thin?</p>
            <p>Does your outer image reflect your inner truth?</p>
            <p>
              What would shift if you adjusted how you protect your energy?
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