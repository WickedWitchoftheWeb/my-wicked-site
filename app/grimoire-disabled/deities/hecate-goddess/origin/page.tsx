// app/grimoire/08-deities/hecate-goddess/origin/page.tsx
import Image from "next/image";
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hecate" subtitle="Goddess of Crossroads">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/hecate-origin.png"
              alt="Hecate Origin"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>
        </section>

        {/* ORIGIN STORY — CONTINUOUS NARRATIVE */}
        <section className="zodiac-note">
          <p>
            Hecate is among the most ancient of the divine powers, a goddess whose
            sovereignty predates the Olympian order and whose dominion was never
            stripped, diluted, or conquered. She is not a product of succession
            myths, nor a figure granted authority by hierarchy. Her power is
            inherent, elemental, and self-contained.
          </p>

          <p>
            Born of the Titans Perses and Asteria, Hecate emerges from a lineage
            tied not to rulership, but to threshold forces: starlight, foresight,
            destruction, and the unseen currents that move between worlds. Asteria,
            her mother, is the Titaness of falling stars and nocturnal prophecy —
            the one who fled Zeus’s pursuit and cast herself into the sea rather
            than submit. From this refusal, this descent, Hecate’s story begins.
          </p>

          <p>
            Some traditions say that Asteria became the island of Delos, anchoring
            divine birth to land. Others say she returned to the stars, becoming
            the wandering light that never belongs to one place. These stories are
            not contradictions — they are reflections of the same truth. Hecate
            inherits both: the rooted and the roaming, the fixed and the
            untethered. She is of the crossroads because she is born of
            multiplicity.
          </p>

          <p>
            When the Titanomachy tore the cosmos apart and the Olympians rose to
            power, Hecate stood apart from the conflict. She did not fight for
            dominion, nor was she punished in defeat. Zeus, recognizing the
            necessity of her function, affirmed her authority instead of
            challenging it. He granted her continued sovereignty over earth, sea,
            and sky — not as a gift, but as an acknowledgment of a power that could
            not be stripped without unraveling the order of reality itself.
          </p>

          <p>
            Hecate governs the spaces between. The moments before and after.
            Thresholds, borders, transitions, and liminal states fall under her
            dominion. She is present where choices are made, where paths diverge,
            where the known dissolves and the unknown begins. She does not rule
            destinations — she rules passage.
          </p>

          <p>
            Her symbols reflect this role: the key that opens and closes, the torch
            that illuminates without comforting, the hound that stands guard at
            the edge. She is a guide, but not a savior. A protector, but not a
            rescuer. Hecate does not carry you across the threshold — she stands
            beside it and waits to see whether you are willing to cross.
          </p>

          <p>
            Unlike many deities, Hecate was never confined to a single realm. She
            moves freely between the chthonic depths, the earthly plane, and the
            celestial heights. This triple presence is not symbolic — it is
            functional. She sees from all sides at once. She understands cause,
            consequence, and the unseen threads that bind them.
          </p>

          <p>
            As goddess of witchcraft, Hecate is not patron to spectacle or
            superstition. She aligns with practitioners who walk consciously
            between worlds — those who understand that magic is not escape, but
            responsibility. Her initiation is not gentle. It strips illusion,
            tests sovereignty, and demands discernment. She does not offer power
            without consequence, nor wisdom without cost.
          </p>

          <p>
            To walk with Hecate is to stand at the crossroads and accept that no
            path is neutral. Every choice opens one gate and closes another. Every
            threshold crossed reshapes the self. She does not promise safety —
            only truth.
          </p>

          <p>
            Hecate endures because thresholds endure. As long as there are moments
            of becoming, of ending, of choosing, she remains. Not as ruler. Not as
            judge. But as witness, guardian, and keeper of the keys.
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