// app/grimoire/08-deities/nyx-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Nyx" subtitle="Goddess of Night">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/nyx/nyx.png"
              alt="Nyx"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Darkness is not absence.
              <br />
              It is the womb of becoming.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO (INLINE, NO COMPONENT) */}
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
    Nyx is the living presence of Night — not fear, not evil, not emptiness,
    but the primordial field from which all things emerge. She is the silence
    before form, the dark that holds possibility before it chooses a shape.
  </p>
  <p>
    Her power is older than the gods who rule from thrones. Nyx does not act
    through force or persuasion. She acts through inevitability. Even Zeus
    hesitated before her — not out of terror, but out of recognition.
  </p>
  <p>
    Nyx teaches that darkness is not something to conquer. It is something
    to enter with reverence. Within her domain, truth gestates. Illusion
    dissolves. What cannot survive stillness reveals itself.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/nyx-goddess/mythology"
      className="deity-link"
    >
      Explore Nyx’s Mythic Origins →
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
                  href="/grimoire/03-chakras/07-crown-chakra"
                  className="deity-link"
                >
                  Crown
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/08-indigo" className="deity-link">
                  Indigo
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/10-silver" className="deity-link">
                  Silver
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
                  href="/grimoire/07-crystals-stones/obsidian"
                  className="deity-link"
                >
                  Obsidian
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/labradorite"
                  className="deity-link"
                >
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/jet" className="deity-link">
                  Jet
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
                <Link href="/grimoire/14-herbs/poppy-seed" className="deity-link">
                  Poppy Seed
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lotus" className="deity-link">
                  Lotus
                </Link>
              </p>
            </div>
          </section>
        </section>

        {/* MYTHOLOGICAL ORIGINS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Mythological{"\u00A0\u00A0"} Origins
          </h2>
          <p>
            Nyx rises from the earliest layers of Greek cosmology as a primordial
            force — born directly from Chaos. She is not a daughter of the gods;
            she is older than the order they represent.
          </p>
          <p>
            From Nyx came Sleep, Death, Dreams, Doom, Deception, Strife, and Fate —
            not as moral judgments, but as natural consequences of existence.
            Night gives birth to everything humans fear and everything they need.
          </p>
          <p>
            In myth, even Zeus withdraws when Nyx moves. This is not submission
            to power, but respect for origin. She is the night that cannot be overruled.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Nyx governs night, shadow, the unconscious, dreams, silence, gestation,
            liminality, and the threshold between existence and nonexistence. She
            strengthens the part of you that can sit with the unknown without panic.
          </p>
          <p>
            Her current supports shadow work, ancestral memory, deep rest, psychic
            perception, dream travel, and the ending of cycles that have outlived
            their truth. Nyx does not rush revelation. She allows it to ripen.
          </p>
          <p>
            She also governs sovereignty through stillness — the power of refusing
            to react, the authority of presence without explanation.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Stars, veils, wings, caves, night skies, eclipses, womb imagery, and
            the space between breaths. Her symbols are quiet and vast — reminders
            that what holds the most power rarely announces itself.
          </p>
          <p>
            Nyx speaks through silence, through dreams that linger, through the
            moment when the world finally goes dark enough for you to hear yourself.
          </p>
        </section>

        {/* NYX IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Nyx in Practice</h2>
          <p>
            Work with Nyx when you are ready for deep truth: shadow integration,
            ancestral healing, rest as ritual, dream work, and the release of
            identities built on performance.
          </p>
          <p>
            She responds to reverence and restraint. Nyx does not answer frantic
            demands or curiosity without discipline. She opens when you slow down,
            listen, and stop trying to control what wants to unfold.
          </p>
          <p>
            Nyx’s magic is often subtle but absolute. Once a truth is revealed in
            the dark, it cannot be unseen.
          </p>
        </section>

        {/* HOW TO KNOW IF NYX HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Nyx Has Chosen You
          </h2>
          <p>
            If Nyx has chosen you, the noise of the world starts to feel unbearable.
            You may crave solitude, night hours, silence, or depth over stimulation.
            Sleep becomes meaningful. Dreams become instructional.
          </p>
          <p>
            Her presence often arrives as an invitation inward. You begin noticing
            what only appears when everything else quiets down: grief you avoided,
            truths you postponed, instincts you ignored.
          </p>
          <p>
            Signs may appear through star imagery, night animals, repeated dream
            symbols, sudden exhaustion that demands rest, or moments where darkness
            feels comforting rather than threatening.
          </p>
          <p>
            Most of all, if Nyx has chosen you, your life begins to reorient around
            authenticity. You stop chasing light that blinds you and start honoring
            the dark that teaches you.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Nyx are quiet and intentional: clean water left overnight,
            a candle extinguished rather than lit, time given to rest, or words
            written and never shared.
          </p>
          <p>
            Devotion is often internal. Choosing sleep. Honoring grief. Allowing
            yourself to not know. Nyx does not require display — she requires honesty.
          </p>
          <p>
            She honors those who respect cycles: night after day, death before rebirth,
            silence before speech.
          </p>
        </section>

        {/* NIGHT AS POWER */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Night as Power</h2>
          <p>
            Nyx teaches that night is not weakness. It is preparation. The seed
            germinates in darkness. The soul integrates in stillness. What emerges
            too early is fragile.
          </p>
          <p>
            When you stop fearing the dark, you stop rushing your becoming.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Nyx moves through the Primordial Mother, the Veil, the Void-Womb, and
            the Keeper of Silence — not as roles, but as states of existence.
          </p>
          <p>
            In her highest expression, she is sovereignty without display: presence
            so complete it does not need light to be known.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Nyx’s shadow can appear as withdrawal that becomes isolation, darkness
            mistaken for truth, or refusal to reemerge after healing is complete.
            Night is necessary — but it is not the destination.
          </p>
          <p>
            Her corrective wisdom is rhythm. Rest, then rise. Descend, then return.
            Darkness is a phase, not a prison.
          </p>
          <p>
            Balance with Nyx is honoring both stillness and emergence without
            forcing either.
          </p>
        </section>

        {/* NYX IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Nyx in the Modern World</h2>
          <p>
            Today, Nyx appears wherever people reject constant visibility and
            productivity as virtue. She lives in rest as resistance, privacy
            as protection, and depth over display.
          </p>
          <p>
            Her current is present when someone chooses authenticity over exposure,
            healing over performance, and truth over spectacle.
          </p>
          <p>
            Nyx does not ask you to disappear. She asks you to become real.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Nyx teaches that darkness is not something to escape — it is something
            to listen to. When you allow yourself to rest, to grieve, to not know,
            you return to the source that makes becoming possible.
          </p>
          <p>
            Let night hold you. Let silence speak. Let what is false fall away
            without force. Nyx does not rush you toward light. She prepares you
            to carry it.
          </p>
          <p>
            If Nyx walks with you, it is because your soul is ready to stop performing
            clarity and start living truth. Enter the dark with reverence. You will
            not be lost. You will be made whole.
          </p>
        </section>

        {/* FOOTER LINKS (ORDER LOCKED FOR GODDESSES) */}
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