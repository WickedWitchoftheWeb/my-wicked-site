// app/grimoire/08-deities/hecate-goddess/key-rite/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Rite of Acknowledgment" subtitle="">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/key-rite.png"
              alt="Rite of Acknowledgment"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>
        </section>

        {/* RITE OF ACKNOWLEDGMENT */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Rite{"\u00A0"} Of{"\u00A0"} Acknowledgment
          </h2>
          <p>For Those Who Walk the Keys of Hecate</p>
          <p>
            This rite is performed when a witch consciously steps onto the path of
            the Three Great Keys — acknowledging Hecate as Keeper of the Keys,
            Witness of Thresholds, Guardian of the Crossroads, and Initiatrix of the
            witch’s transformation.
          </p>
          <p>
            It is not a dedication.
            <br />
            It is not an initiation.
            <br />
            It is an acknowledgment —
            <br />
            a moment of clarity, consent, and recognition between the witch and the
            Goddess.
          </p>
          <p>
            This rite may be done at the crossroads, at a doorway, before an altar,
            or simply in a quiet space where the witch will not be disturbed.
          </p>
        </section>

        {/* RITE — MATERIALS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Materials</h2>
          <p>
            One black candle (Shadow)
            <br />
            <br />
            One white candle (Light)
            <br />
            <br />
            One key, any kind (Threshold)
            <br />
            <br />
            Water or earth for grounding
            <br />
            <br />
            A small offering (honey, bread, wine, garlic, ash, herbs)
          </p>
          <p>The materials empower the rite, but the words alone are sufficient.</p>
        </section>

        {/* RITE — THE RITE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Rite</h2>
          <p>
            1. Center Yourself
            <br />
            Stand or sit comfortably.
            <br />
            Place your feet firmly on the ground.
            <br />
            Take three slow breaths — one for Shadow, one for Light, one for Threshold.
            <br />
            Say:
            <br />
            “I stand in the presence of Hecate, Keeper of the Keys.”
            <br />
            If using candles, light the black candle.
          </p>
          <p>
            2. Acknowledge the Shadow Key
            <br />
            Place your left hand over your heart.
            <br />
            Say:
            <br />
            “I acknowledge the Key of Shadows.
            <br />
            I face what is hidden within me and around me.
            <br />
            I walk the darkness with courage, truth, and humility.
            <br />
            Nothing within me stays buried —
            <br />
            nothing outside me goes unseen.”
            <br />
            Pause. Feel the descent — the steadiness, the depth, the clarity.
          </p>
          <p>
            3. Acknowledge the Light Key
            <br />
            If using candles, light the white candle.
            <br />
            Say:
            <br />
            “I acknowledge the Key of Light.
            <br />
            I welcome clarity, truth, illumination, and divine sight.
            <br />
            May I see without illusion.
            <br />
            May I know without arrogance.
            <br />
            May I hold the light with wisdom and restraint.”
            <br />
            Pause. Feel the illumination — but not brightness. Insight.
          </p>
          <p>
            4. Acknowledge the Threshold Key
            <br />
            Hold the physical key if you have one.
            <br />
            If not, curl your right hand into a fist.
            <br />
            Say:
            <br />
            “I acknowledge the Key of Thresholds.
            <br />
            I choose my path with intention and sovereignty.
            <br />
            I open what is meant to open.
            <br />
            I close what is meant to close.
            <br />
            Every step I take is a spell.
            <br />
            Every choice I make shapes my destiny.”
            <br />
            Pause. Feel the shift — a sense of direction, movement, and alignment.
          </p>
          <p>
            5. The Declaration
            <br />
            Now speak the core statement of the rite:
            <br />
            “Hecate, Keeper of the Keys,
            <br />
            I acknowledge your guidance in Shadow, in Light, and at the Crossroads.
            <br />
            I do not ask for initiation.
            <br />
            I do not ask for favor.
            <br />
            I simply recognize your presence,
            <br />
            your path,
            <br />
            your keys,
            <br />
            and your place in my life.”
            <br />
            This is where the binding moment happens — not as a vow, but as recognition.
          </p>
          <p>
            6. The Offering
            <br />
            Place your offering gently on the ground or altar.
            <br />
            Say:
            <br />
            “For the path I have walked,
            <br />
            for the path before me,
            <br />
            and for the path within me —
            <br />
            I give this in gratitude.”
            <br />
            If you have water or earth, touch it to ground yourself.
          </p>
          <p>
            7. The Closing
            <br />
            Say:
            <br />
            “Lady of the Crossroads,
            <br />
            Guide of the Unseen,
            <br />
            Torchbearer and Keyholder —
            <br />
            I thank you.
            <br />
            The rite is acknowledged.”
            <br />
            Blow out the candles in the order they were lit:
            <br />
            White (Light) → Black (Shadow).
            <br />
            Do not blow out the Threshold Key, obviously — the key is internal.
          </p>
        </section>

        {/* END OF RITE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">End of Rite</h2>
          <p>
            Let the air shift.
            <br />
            Let the moment settle.
            <br />
            Let the acknowledgment echo.
          </p>
          <p>
            This rite is powerful because it is simple, honest, and sovereign —
            exactly aligned with the three Keys themselves.
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
            <Link
              href="/grimoire/08-deities/01-goddesses-landing"
              className="zodiac-footer-link"
            >
              ← Back to Goddesses
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