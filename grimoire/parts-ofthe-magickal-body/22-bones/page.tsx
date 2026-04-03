// app/grimoire/parts-of-the-magickal-body/22-bones/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BonesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Bones" subtitle="Foundation, Ancestry, and Endurance">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/bones.png"
              alt="Bones in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What holds you upright is older than your doubt.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The bones are the deepest structure of the body. They carry weight,
            define shape, and endure long after softer tissues have changed. In
            the magickal body, bones symbolize foundation: the core beliefs,
            inherited patterns, and inner architecture that hold your life in
            place.
          </p>

          <p>
            This region holds the archetype of ancestry. Bones are often
            associated with lineage, legacy, and what has been passed down
            through blood and story. They represent the truths that have shaped
            you long before you consciously chose them. Some of these truths
            strengthen you. Others must be reexamined.
          </p>

          <p>
            Symbolically, bones also reflect endurance. They do not move quickly
            or react impulsively. They hold. They support. They remain. The
            lesson here is stability rooted in awareness. A structure is only as
            strong as the beliefs it is built upon.
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
              When the bones speak, they speak through pressure and fatigue.
              They respond when you are carrying responsibilities that test your
              foundation or when your sense of security feels threatened.
            </p>

            <p>
              This region often activates during times of long-term strain.
              Unlike emotional surges, bone-level tension is slow and deep. It
              reflects questions about stability, legacy, and whether the
              structure you are standing on truly supports who you are becoming.
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
                In expression, bones represent grounded resilience. You know
                what you stand for. Your values are steady, not reactive. You
                carry responsibility with maturity and understand that strength
                is built over time, not performed for approval.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, bones reflect rigidity or inherited belief systems
                that no longer fit. You may cling to structures out of loyalty
                or fear, even when they limit growth. The shadow here is the
                assumption that stability requires stagnation. True foundation
                can evolve.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What belief forms the backbone of your current life?</p>
            <p>Which inherited patterns strengthen you, and which confine you?</p>
            <p>
              If you rebuilt your foundation intentionally, what would remain?
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