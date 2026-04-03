// app/grimoire/08-deities/luna-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Luna" subtitle="Goddess of Cycles">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/luna/luna.png"
              alt="Luna"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Nothing moves in straight lines.
              <br />
              Power is rhythm.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO */}
        <section className="zodiac-intro">
          <p>
            Across every culture and every age, humanity has given names and faces
            to the forces that shape existence. Goddesses and Gods are not distant
            myths locked in the past — they are living archetypes, expressions of
            power, consciousness, nature, and cosmic law.
          </p>

          <p>
            Within the Grimoire, deities are honored as embodiments of specific
            energies: creation and destruction, love and war, wisdom and chaos,
            death and rebirth. Each carries their own mythology, symbols,
            correspondences, and lessons, yet all emerge from the same universal
            source.
          </p>

          <p>
            Goddesses appear here first, not as lesser counterparts, but as primordial
            forces of creation, transformation, and sovereignty. Gods follow as agents
            of order, motion, and manifestation. Together, they form a divine balance —
            mirrors of the inner and outer worlds we navigate every day.
          </p>

          <p>
            This section is a living archive. As the Grimoire grows, so too will the
            pantheons represented here. Whether you approach these deities through
            devotion, study, magic, or symbolism, you are stepping into a lineage as
            old as humanity itself.
          </p>
        </section>

       {/* CORE ESSENCE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Core Essence</h2>
  <p>
    Luna is the living current of cycles, reflection, and rhythmic power.
    She governs time as it is felt — waxing and waning, rising and falling,
    emergence and retreat.
  </p>
  <p>
    She is not urgency. She is inevitability. Luna teaches that power does
    not rush forward endlessly — it listens, adjusts, and returns renewed.
  </p>
  <p>
    Her presence restores trust in timing. What recedes is not lost. What
    darkens is not gone. Everything moves according to rhythm, and Luna
    keeps the beat.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/luna-goddess/mythology"
      className="deity-link"
    >
      Explore Luna’s Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES */}
<section className="zodiac-note">
  <section className="zodiac-attributes">
    <h2
      className="zodiac-note-subheading"
      style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}
    >
      Correspondences
    </h2>

    <div className="zodiac-attr">
      <h3 className="zodiac-attr-label">Element</h3>
      <p className="zodiac-attr-value">
        <Link href="/grimoire/11-elements/water" className="deity-link">
          Water
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/02-moon"
                  className="deity-link"
                >
                  Moon
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/02-monday"
                  className="deity-link"
                >
                  Monday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/06-third-eye-chakra"
                  className="deity-link"
                >
                  Third Eye
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/silver" className="deity-link">
                  Silver
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/blue" className="deity-link">
                  Blue
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/silver" className="deity-link">
                  Silver
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/selenite"
                  className="deity-link"
                >
                  Selenite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/opal"
                  className="deity-link"
                >
                  Opal
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lunar-herbs" className="deity-link">
                  Night-Blooming Flowers
                </Link>
              </p>
            </div>
          </section>
        </section>

        {/* LUNA IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Luna in Practice</h2>
          <p>
            Work with Luna when you need to restore trust in timing: emotional
            regulation, intuitive development, shadow integration, menstrual
            or cyclical awareness, and release after burnout.
          </p>
          <p>
            She supports divination, dreamwork, emotional clarity, and rituals
            aligned with lunar phases. Her magic unfolds when you stop forcing
            forward motion and begin listening to rhythm.
          </p>
          <p>
            Luna responds to patience, honesty, and receptivity. She does not
            respond well to urgency, panic, or demanding answers before their
            time. Her wisdom arrives when the moment is right.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/luna-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF LUNA HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Luna Has Chosen You
          </h2>
          <p>
            If Luna has chosen you, your emotions begin to speak louder — not as
            chaos, but as information. You become sensitive to cycles, moods,
            dreams, and subtle shifts in energy.
          </p>
          <p>
            You may feel pulled toward moon phases, night rituals, water, reflection,
            or periods of withdrawal followed by clarity. Rest becomes non-negotiable.
          </p>
          <p>
            Signs often appear through repeated lunar imagery, vivid dreams, emotional
            purging followed by peace, or a deep knowing that rushing no longer works.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Luna teaches that nothing meaningful unfolds in a straight line. Growth
            requires return. Healing requires rest. Power requires rhythm.
          </p>
          <p>
            She reminds you that darkness is not failure — it is gestation. What
            disappears is not gone. It is gathering strength where it cannot be seen.
          </p>
          <p>
            Walking with Luna asks you to trust your tides, to honor withdrawal as
            wisdom, and to stop mistaking stillness for stagnation. Not every pause
            is a delay. Some are preparation.
          </p>
          <p>
            Her magic restores emotional sovereignty. You stop reacting. You begin
            responding. You move when the time is right — and when you do, the path
            opens without resistance.
          </p>
          <p>
            Remember this law: power does not burn endlessly. It waxes. It wanes.
            It returns. When you move with rhythm instead of force, you stop fighting
            life — and begin moving with it.
          </p>
        </section>

        {/* FOOTER LINKS */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/01-goddesses-landing"
              className="zodiac-footer-link"
            >
              ← Back to Goddesses
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