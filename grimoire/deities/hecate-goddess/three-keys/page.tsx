// app/grimoire/08-deities/hecate-goddess/three-keys/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Three Great Keys of Hecate" subtitle="">
        {/* HERO IMAGE + (OPTIONAL) SHORT INTRO LINE + SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/hecate-key-landing.png"
              alt="The Three Great Keys of Hecate"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The Keys are not decorations.
              <br />
              They are thresholds.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="zodiac-intro">
          <p>
            The Three Great Keys are a path of descent, clarity, and sovereignty — a
            living structure for those who walk with Hecate as Keeper of the Keys,
            Witness of Thresholds, and Guardian of the Crossroads.
          </p>

          <p>
            Each section below opens into its own page so the work can stay deep,
            clean, and organized as this archive grows.
          </p>
        </section>

        {/* LESSON OF THE KEYS — COVER IMAGE LINK */}
        <section className="zodiac-note">
          <Link href="/grimoire/08-deities/hecate-goddess/three-keys/lesson-of-keys">
            <div className="zodiac-hero-image deity-hero">
              <Image
                src="/deities/hecate/key-lesson.png"
                alt="Lesson of the Keys"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="deity-hero-img"
              />
            </div>
          </Link>

          <h2 className="zodiac-note-subheading">Lesson of the Keys</h2>
          <p>
            Begin here for the foundational teaching behind the Keys — the mythic
            frame, the law beneath the structure, and why Hecate stands outside
            the thrones of Fate.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys/lesson-of-keys"
              className="deity-link"
            >
              → Read: Lesson of the Keys
            </Link>
          </p>
        </section>

        {/* THE FIRST KEY — COVER IMAGE LINK */}
        <section className="zodiac-note">
          <Link href="/grimoire/08-deities/hecate-goddess/three-keys/first-key">
            <div className="zodiac-hero-image deity-hero">
              <Image
                src="/deities/hecate/first-key.png"
                alt="The First Key — The Key of Shadows"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="deity-hero-img"
              />
            </div>
          </Link>

          <h2 className="zodiac-note-subheading">
            The First Key — The Key of Shadows
          </h2>
          <p>
            The Chthonic Key. The Gate to the Underworld current. Shadow integration,
            ancestral wisdom, and protection in darkness — with clear instruction on
            safety, risks, and what it means to fail and be offered the Key again.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys/first-key"
              className="deity-link"
            >
              → Enter: The First Key
            </Link>
          </p>
        </section>

        {/* THE SECOND KEY — COVER IMAGE LINK */}
        <section className="zodiac-note">
          <Link href="/grimoire/08-deities/hecate-goddess/three-keys/second-key">
            <div className="zodiac-hero-image deity-hero">
              <Image
                src="/deities/hecate/second-key.png"
                alt="The Second Key — The Key of Light"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="deity-hero-img"
              />
            </div>
          </Link>

          <h2 className="zodiac-note-subheading">
            The Second Key — The Key of Light
          </h2>
          <p>
            The Stellar Key. The Gate of Illumination. Prophecy, discernment, clarity,
            and truth — with the discipline required to hold revelation without
            distortion, ego, or burnout.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys/second-key"
              className="deity-link"
            >
              → Enter: The Second Key
            </Link>
          </p>
        </section>

        {/* THE THIRD KEY — COVER IMAGE LINK */}
        <section className="zodiac-note">
          <Link href="/grimoire/08-deities/hecate-goddess/three-keys/third-key">
            <div className="zodiac-hero-image deity-hero">
              <Image
                src="/deities/hecate/third-key.png"
                alt="The Third Key — The Key of Thresholds"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="deity-hero-img"
              />
            </div>
          </Link>

          <h2 className="zodiac-note-subheading">
            The Third Key — The Key of Thresholds
          </h2>
          <p>
            The Crossroads Key. The Gate of Paths. Authority over transition, pathfinding,
            and sovereignty through decision — including how to work this Key without
            scattering, rushing, or losing direction.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys/third-key"
              className="deity-link"
            >
              → Enter: The Third Key
            </Link>
          </p>
        </section>

        {/* RITE OF ACKNOWLEDGEMENT — COVER IMAGE LINK */}
        <section className="zodiac-note">
          <Link href="/grimoire/08-deities/hecate-goddess/three-keys/rite-of-acknowledgement">
            <div className="zodiac-hero-image deity-hero">
              <Image
                src="/deities/hecate/key-rite.png"
                alt="The Rite of Acknowledgement"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="deity-hero-img"
              />
            </div>
          </Link>

          <h2 className="zodiac-note-subheading">The Rite of Acknowledgement</h2>
          <p>
            A rite for those who consciously step onto the path of the Keys — not a
            dedication, not an initiation, but a moment of recognition, consent, and
            alignment with Shadow, Light, and Threshold.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys/rite-of-acknowledgement"
              className="deity-link"
            >
              → Read: The Rite of Acknowledgement
            </Link>
          </p>
        </section>

        {/* FOOTER LINKS */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess"
              className="zodiac-footer-link"
            >
              ← Back to Hecate
            </Link>
          </p>

          <p>
            <Link href="/grimoire/08-deities" className="zodiac-footer-link">
              ← Back to Deities
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}