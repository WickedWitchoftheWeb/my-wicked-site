// app/grimoire/11-elements/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function ElementsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Elements"
        subtitle="The forces that remember what you are."
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/wicked%20about/The%20Five%20Wicked%20Points.png?updatedAt=1769636388934"
            alt="Pentacle of Source and the Elements"
            className="grimoire-hero-img"
          />
        </section>

        {/* PRIMEVAL CREED */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">
            The Primeval Creed of Source and Element
          </h2>

          <div className="grimoire-text">
            <p>
              The first truth. The final remembrance. The law that binds the witch
              to the world and the world to the All.
            </p>

            <p>
              <strong>
                Before the first breath or the first spark, there was only Source
              </strong>
              : the unbroken dark, the will before form, the consciousness that tore
              itself apart into matter, motion, heat, and tide so that magick could
              awaken, and the Universe could learn its own name.
            </p>

            <p>
              <strong>From that shattering came Earth</strong>, the keeper of bone
              and burial. She steadies the witch, but she also claims what the
              witch cannot carry; for patience is her power, and return is her
              promise.
            </p>

            <p>
              <strong>From that hunger came Fire</strong>, the oath of destruction
              and becoming. You were forged in its heat long before you learned to
              speak. It marks the witch who dares to wield it and burns the one who
              hesitates; for will is its law, and transformation its price.
            </p>

            <p>
              <strong>From that exhale came Air</strong>, the whisper between
              worlds. It enters the witch as breath and leaves as truth sharpened
              into prophecy; for motion is its nature, and knowing is its gift.
            </p>

            <p>
              <strong>From that pulse came Water</strong>, the veil of memory and
              surrender. It is the abyss that carved you. It reshapes the witch
              from within, dragging every secret to the surface for judgment; for
              depth is its dominion, and absolution its tide.
            </p>

            <p>
              These four are not merely allies. They are trials. They are teachers.
              They are the fragments of Source that remember what the witch has
              forgotten.
            </p>

            <p>
              Earth remembers your bones. Fire remembers your will. Air remembers
              your voice. Water remembers your blood. And Source: beneath them,
              within them, beyond them: remembers you.
            </p>

            <p>
              For above them, within them, beneath them, Source remains: the origin
              that birthed the elements, the witness who will consume them, the
              power that lives disguised as you.
            </p>

            <p>
              To call the elements is to be altered. To command them is to be
              claimed. To embody them is to return to Source: the first power,
              the last power, the one that wears your face.
            </p>

            <p>
              <strong>This is the covenant and the creed:</strong> Honor the
              elements. Answer their summons. Become their vessel.
            </p>

            <p>
              For no witch stands alone; you are the remnant of Source, divided
              into four, and waking.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ELEMENTS GRID */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Enter the Elemental Chambers</h2>

          <div className="grimoire-grid">
            {/* SOURCE */}
            <div className="grimoire-card">
              <Link href="/grimoire/source" className="wicked-link">
                <h2 className="grimoire-card-title">Source</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/elements/source.png"
                  alt="The Source"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">
                The origin of all: the unbroken dark, the will before form.
              </p>

              <div className="grimoire-divider" />
            </div>

            {/* AIR */}
            <div className="grimoire-card">
              <Link href="/grimoire/elements/air" className="wicked-link">
                <h2 className="grimoire-card-title">Air</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/elements/air.png"
                  alt="The Air Element"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">
                The voice of Source: thought, breath, prophecy in motion.
              </p>

              <div className="grimoire-divider" />
            </div>

            {/* EARTH */}
            <div className="grimoire-card">
              <Link href="/grimoire/elements/earth" className="wicked-link">
                <h2 className="grimoire-card-title">Earth</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/elements/earth.png"
                  alt="The Earth Element"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">
                The body of Source: bone, soil, foundation, return.
              </p>

              <div className="grimoire-divider" />
            </div>

            {/* FIRE */}
            <div className="grimoire-card">
              <Link href="/grimoire/elements/fire" className="wicked-link">
                <h2 className="grimoire-card-title">Fire</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/elements/fire.png"
                  alt="The Fire Element"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">
                The will of Source: hunger, becoming, holy destruction.
              </p>

              <div className="grimoire-divider" />
            </div>

            {/* WATER */}
            <div className="grimoire-card">
              <Link href="/grimoire/elements/water" className="wicked-link">
                <h2 className="grimoire-card-title">Water</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/elements/water.png"
                  alt="The Water Element"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">
                The memory of Source: tide, depth, surrender, and rebirth.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER LINKS */}
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