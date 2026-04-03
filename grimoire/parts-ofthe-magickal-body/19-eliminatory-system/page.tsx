// app/grimoire/parts-of-the-magickal-body/19-eliminatory-system/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function EliminatorySystemPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Eliminatory System" subtitle="Release, Purging, and Renewal">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/eliminatory-system.png"
              alt="Eliminatory System in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “You cannot begin again while still holding what should have ended.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The eliminatory system is the body&apos;s keeper of release. It clears
            what has been used, processed, and completed. In the magickal body,
            this system symbolizes purging: the necessary ending that makes
            renewal possible.
          </p>

          <p>
            This region holds the archetype of the underworld gate. It is not
            glamorous, but it is sacred. Release is not failure. Release is
            intelligence. The eliminatory current teaches that transformation
            requires honest clearing: what you refuse to let go of becomes what
            you carry.
          </p>

          <p>
            Symbolically, this system is also tied to control. Many people grip
            life too tightly: holding emotion, holding truth, holding endings
            they know are overdue. The eliminatory system reflects your
            relationship with surrender. It asks whether you trust the cycle or
            try to override it.
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
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
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
              When this system speaks, it speaks through the pressure to clear.
              It responds when you are holding endings, withholding truth, or
              resisting a necessary release. It also responds when you are
              carrying emotional residue that has nowhere to go.
            </p>

            <p>
              This region often activates during transitions: breakups, moves,
              identity shifts, grief cycles, and rebirth moments. When life asks
              you to shed a skin, the eliminatory current becomes louder. It
              insists on honesty: what is done is done.
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
                In expression, this system represents clean release. You let
                endings complete. You grieve what needs grief and release what
                needs release. You do not cling to what has expired. This is
                transformation without drama, power without fixation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, this system reflects holding and control. You may
                cling to relationships, identities, or stories that have already
                ended. You may avoid necessary endings out of fear of the void.
                The shadow here is mistaking attachment for safety. What you
                will not release, you must continue to manage.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>What are you still holding that has already ended?</p>
            <p>What truth would feel like relief if you stopped avoiding it?</p>
            <p>
              If you trusted release as sacred, what would you let go of first?
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