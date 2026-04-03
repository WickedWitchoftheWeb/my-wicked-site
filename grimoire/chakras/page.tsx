// app/grimoire/chakras/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function ChakrasPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Chakras" subtitle="The living anatomy of energy">
        {/* HERO IMAGE + INTRO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/chakras/chakra-landing.png"
            alt="Chakras cover image"
            className="grimoire-hero-img"
          />

          <section className="grimoire-intro">
            <p>
              The chakra system is a map of how energy organizes itself through
              the body, the psyche, and the spirit. Each chakra governs a layer
              of human experience, and the system works as a whole. When one
              center shifts, everything else responds.
            </p>

            <p>
              Start at the foundation, move upward with intention, and work with
              the system as an interconnected circuit rather than isolated parts.
            </p>
          </section>
        </section>

                <div className="grimoire-divider" />

        {/* CHAKRA LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-grid">
            {/* KUNDALINI */}
            <div className="grimoire-card">
              <Link href="/grimoire/chakras/00-kundalini" className="wicked-link">
                <h2 className="grimoire-card-title">Kundalini</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/1kundalini.png"
                  alt="Kundalini"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* ROOT */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/01-root-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Root Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/root.png"
                  alt="Root Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* SACRAL */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/02-sacral-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Sacral Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/sacral.png"
                  alt="Sacral Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* SOLAR PLEXUS */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/03-solar-plexus-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Solar Plexus Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/solar-plexus.png"
                  alt="Solar Plexus Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* HEART */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/04-heart-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Heart Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/heart.png"
                  alt="Heart Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* THROAT */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/05-throat-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Throat Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/throat.png"
                  alt="Throat Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* THIRD EYE */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/06-third-eye-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Third Eye Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/third-eye.png"
                  alt="Third Eye Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>

                    <div className="grimoire-divider" />

            {/* CROWN */}
            <div className="grimoire-card">
              <Link
                href="/grimoire/chakras/07-crown-chakra"
                className="wicked-link"
              >
                <h2 className="grimoire-card-title">Crown Chakra</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/chakras/crown.png"
                  alt="Crown Chakra"
                  className="grimoire-card-img"
                />
              </Link>
            </div>
          </div>
        </section>
         <p>{"\u00A0"}</p>
            <p>{"\u00A0"}</p>

                <div className="grimoire-divider" />

        {/* FOOTER LINK */}
        <footer className="grimoire-footer">
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