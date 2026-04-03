// app/grimoire/08-deities/asteria-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Asteria" subtitle="Goddess of the Stars">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/asteria/asteria.png"
              alt="Asteria"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The night does not hide truth — it reveals it.
              <br />
              Destiny is not a sentence — it is a signal.
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
    Asteria is the star-born current of mysticism — the quiet intelligence of
    night that turns longing into revelation. She is the bridge between the
    seen and the unseen, the shimmer of intuition, the language of omens, and
    the sacred geometry of fate. Asteria doesn’t shout. She signals.
  </p>
  <p>
    Her energy returns you to the place in you that can feel what is true
    before it is proven. She rules the subtle world: dream messages, cosmic
    timing, the pull of destiny, and the way certain moments feel “written.”
    Asteria teaches that mystery is not confusion — it is the Universe speaking
    in symbol.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/asteria-goddess/mythology"
      className="deity-link"
    >
      Explore Asteria’s Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES (RIGHT UNDER CORE ESSENCE) */}
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
        <Link href="/grimoire/11-elements/air" className="deity-link">
          Air
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
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/purple" className="deity-link">
                  Purple
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

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/amethyst"
                  className="deity-link"
                >
                  Amethyst
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/labradorite"
                  className="deity-link"
                >
                  Labradorite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) + & instead of / */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/star-anise" className="deity-link">
                  Star Anise
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/frankincense"
                  className="deity-link"
                >
                  Frankincense
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
            In Greek myth, Asteria is a Titaness of the stars and the night — a goddess
            associated with prophecy, nocturnal omens, and the luminous intelligence of
            the sky. Her stories place her in the shadowed realms where fate speaks
            quietly: through signs, dreams, and the patterning of time.
          </p>
          <p>
            She is often connected to mystical thresholds and to the island of Delos —
            a place that becomes sanctuary, refuge, and spiritual turning point. Asteria’s
            mythology carries the theme of escape from violation, and the transformation
            of fear into sacred ground.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Asteria governs prophecy, divination, dream messages, omens, night magic, and
            the weaving of fate. Her gifts appear as heightened intuition, clearer signs,
            and a stronger relationship with timing — the ability to feel when something
            is aligned and when something is forced.
          </p>
          <p>
            Her current is especially potent when you are learning to trust what you know
            without needing external approval. She strengthens the inner compass.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Her symbols are celestial: stars, constellations, dark sky, torches in night,
            divination tools, and luminous markers of destiny. Asteria is often felt as a
            hush before insight — the moment the air shifts and something clicks into place.
          </p>
        </section>

      {/* ASTERIA IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Asteria in Practice</h2>
  <p>
    Work with Asteria when you want clearer guidance: strengthening intuition,
    developing divination, receiving dream messages, and learning to recognize
    aligned timing. She is also powerful for protection during spiritual work,
    especially when you are opening your senses and need discernment.
  </p>
  <p>
    Asteria responds to reverence, patience, and quiet attention. She does not
    respond well to frantic sign-chasing, obsession, or treating the unseen like
    a vending machine. Her language is subtle — you meet it with stillness.
  </p>
  <p>
    Approach her with a clear question and an open mind. If you ask for truth,
    be willing to hear it. If you ask for direction, be willing to move.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/asteria-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF ASTERIA HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Asteria Has Chosen You
  </h2>
  <p>
    If Asteria has chosen you, your perception sharpens quietly. You may
    begin noticing patterns, symbols, and timing with increasing accuracy —
    not through excitement, but through calm recognition. The unseen starts
    to feel legible.
  </p>
  <p>
    Her presence often arrives through dreams, night skies, divination tools,
    and moments of sudden inner knowing that do not demand proof. You may feel
    drawn to stargazing, journaling, or tracking cycles without knowing why.
  </p>
  <p>
    Signs can appear through stars, constellations, prophetic dreams,
    synchronicities tied to timing rather than emotion, and a growing sense
    that you are being guided rather than pushed.
  </p>
  <p>
    Most of all, if Asteria has chosen you, your life begins to reward patience.
    When you wait, listen, and act at the right moment, things align with
    unusual ease. When you rush, the signal fades — not as punishment, but as
    instruction.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings can include incense, star-lit water, a candle lit at night,
            or a divination session done as devotion rather than anxiety. Modern offerings
            can be equally aligned: a dream journal kept faithfully, a nightly moment of
            silence, or time spent studying the symbolic language of your own life.
          </p>
          <p>
            Devotion to Asteria is often devotional listening: honoring synchronicity,
            treating intuition as sacred, and learning to trust the quiet nudges that guide
            you before the world catches up.
          </p>
        </section>

        {/* ASTERIA VS HECATE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Asteria vs Hecate</h2>
          <p>
            Asteria and Hecate are related, but not interchangeable. Asteria carries a
            star-born, prophetic current — omens, dreams, and celestial timing. Hecate
            leans more toward crossroads, keys, liminal passage, and the structured
            rites of witchcraft and threshold magic.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Asteria as the night sky’s
            intelligence — messages, signs, and fate-patterns — and Hecate as the
            gatekeeper of liminality — the one who guides you through the threshold.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Asteria moves through the Oracle, the Dreamwalker, the Star-Seer, and the
            Keeper of Signs — not as roles to perform, but as currents of power. The
            Oracle receives what is true. The Dreamwalker gathers messages from the
            subconscious and the unseen. The Star-Seer reads patterns across time. The
            Keeper of Signs teaches discernment: which signals matter, and which are noise.
          </p>
          <p>
            In her highest expression, Asteria is certainty without force — the calm
            knowing that arrives when you are aligned with the path.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as paranoia, obsession with signs, spiritual anxiety,
            or using divination to avoid decision-making. When every moment becomes a
            test, the current distorts into fear rather than guidance.
          </p>
          <p>
            Asteria’s corrective wisdom is simple: intuition supports choice — it does not
            replace it. Ask for clarity, then act. Let signs confirm your alignment, not
            control your life. Mystery is sacred, but it should never become a prison.
          </p>
        </section>

        {/* ASTERIA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Asteria in the Modern World</h2>
          <p>
            Today, Asteria lives in the language of synchronicity: repeating numbers, timely
            messages, dreams that linger, and moments that feel orchestrated. She also lives
            in disciplined spiritual practice — the kind that builds trust with the unseen
            through consistency, not desperation.
          </p>
          <p>
            Her energy reminds us that destiny is not fate in chains — it is a relationship
            with timing. When you learn to listen, you stop forcing. When you stop forcing,
            the path opens.
          </p>
        </section>

      {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Asteria teaches that guidance does not shout — it reveals itself to those who
    know how to listen. Her wisdom moves through pattern, timing, and quiet alignment,
    not force or demand. Truth arrives when the inner sky is still enough to read.
  </p>
  <p>
    She reminds you that intuition is not fantasy. It is perception refined through
    patience. The more you rush meaning, the more it blurs. The more you honor silence,
    the clearer the message becomes.
  </p>
  <p>
    Walking with Asteria asks for trust in subtlety. Dreams, symbols, and synchronicities
    are not random — they are conversations unfolding over time. Your task is not to
    chase them, but to recognize them.
  </p>
  <p>
    Her blessing arrives as orientation: a sense that you are exactly where you need
    to be, even before you understand why. Direction comes not from certainty, but
    from resonance.
  </p>
  <p>
    Let the stars teach you patience. Let the unseen teach you discernment. And remember:
    guidance is always present — clarity comes when you learn how to receive it.
  </p>
</section>

        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
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