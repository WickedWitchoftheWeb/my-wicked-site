// app/grimoire/08-deities/medusa-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Medusa" subtitle="Goddess of Defiance">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/medusa/medusa.png"
              alt="Medusa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              There are wounds that turn into weapons.
              <br />
              Not to harm the innocent —
              <br />
              to end what dares to hunt you.
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
    Medusa is the moment a story refuses to end the way it was written. She is
    not a cautionary tale. She is a boundary that learned how to bite back, a
    presence that turns predation into consequence.
  </p>
  <p>
    Her current moves through the parts of you that were shamed, blamed, or
    reduced — and then forced to survive anyway. Medusa does not ask you to
    become harmless. She asks you to become unapproachable to what would
    consume you.
  </p>
  <p>
    She is defiance as sacred protection: not rage for performance, not cruelty
    as compensation, but the cold, clean clarity of “no.” The kind of no that
    does not negotiate. The kind of no that becomes law.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/medusa-goddess/mythology"
      className="deity-link"
    >
      Explore Medusa’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/earth" className="deity-link">
          Earth
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/10-pluto"
                  className="deity-link"
                >
                  Pluto
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/07-saturday"
                  className="deity-link"
                >
                  Saturday
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
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/06-green" className="deity-link">
                  Green
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/bronze" className="deity-link">
                  Bronze
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
                  href="/grimoire/07-crystals-stones/onyx"
                  className="deity-link"
                >
                  Onyx
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/malachite"
                  className="deity-link"
                >
                  Malachite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/jet"
                  className="deity-link"
                >
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
                <Link href="/grimoire/14-herbs/wormwood" className="deity-link">
                  Wormwood
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/belladonna" className="deity-link">
                  Belladonna
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
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
            Medusa’s myth is one of the most distorted mirrors in the Western canon —
            told and retold through lenses that often punish the victim and crown the
            conqueror. In many versions, she is named a monster first, and only later
            given context. But the undercurrent is consistent: Medusa becomes the symbol
            of what happens when a woman’s body is treated as public territory.
          </p>
          <p>
            Some tellings place her as a priestess of Athena, violated in a sacred space,
            then transformed. Others emphasize her as one of the Gorgons, born into a
            lineage of fear and power. Either way, her story becomes a map of cultural
            obsession: how quickly beauty becomes danger, how quickly “protected” becomes
            “controlled,” how quickly survival becomes “monstrous” when it refuses to be
            convenient.
          </p>
          <p>
            Within the Grimoire, Medusa is honored as the archetype of defiant protection:
            the face of consequence. Not a villain to be slain — a boundary made mythic.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Medusa governs protection through consequence, the alchemy of violation into
            power, the severing of predatory ties, and the reclamation of self after
            distortion. She strengthens the part of you that stops pleading to be seen
            correctly and starts enforcing reality.
          </p>
          <p>
            Her current supports banishment, energetic shielding, curse-returning,
            mirror-work, truth-revelation, and the end of cycles that survive on your
            silence. Medusa does not teach “forgiveness” as a spiritual performance.
            She teaches safety as a spiritual right.
          </p>
          <p>
            She also governs the gaze: perception, scrutiny, and the difference between
            being witnessed and being consumed. With Medusa, the question becomes sharp:
            who is looking at you — and why?
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Serpents, mirrors, stone, severed cords, temple thresholds, protective masks,
            and the fixed stare that ends the hunt. Her imagery is not about vanity. It is
            about vision — and the moment vision becomes defense.
          </p>
          <p>
            Medusa’s sacred symbolism often shows up as warning and ward: a face placed at
            entrances, a symbol carved above doors, an emblem meant to repel harm. She
            speaks in signs that say, “Do not come closer,” and in moments when you finally
            stop making yourself small to keep others comfortable.
          </p>
        </section>

        {/* MEDUSA IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Medusa in Practice</h2>
          <p>
            Work with Medusa when you are reclaiming your autonomy, cutting ties with
            predation, ending a dynamic that survives on intimidation, or rebuilding your
            protective instincts after you were trained to doubt them.
          </p>
          <p>
            She responds to honesty without apology. Not cruelty. Not chaos. Clean truth.
            If you ask for protection, you must be willing to stop inviting harm with
            access, excuses, and repeated “one more chances.” Medusa’s magic works best
            when your life matches the boundary you are casting.
          </p>
          <p>
            Her practice is not about becoming feared by everyone. It is about becoming
            unreadable to manipulation. Becoming solid in your “no.” Becoming willing to
            be misunderstood by people who benefited from your softness.
          </p>
        </section>

        {/* HOW TO KNOW IF MEDUSA HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Medusa Has Chosen You
          </h2>
          <p>
            If Medusa has chosen you, your tolerance collapses. Not your compassion — your
            tolerance. You may feel a sudden disgust for dynamics that require you to stay
            quiet to stay safe, or relationships where your boundaries are treated like
            suggestions.
          </p>
          <p>
            Her presence often arrives as a sharpened gaze: you see what you were trying
            not to see. The “little” red flags stop looking little. The pattern becomes
            undeniable. You may find yourself pulled toward protective symbolism, serpents,
            mirrors, or repeated themes of eyes, staring, being watched, or refusing to be
            looked at incorrectly.
          </p>
          <p>
            You might also notice a new kind of stillness in confrontation — less panic,
            less pleading, more quiet command. Medusa’s choosing can feel like your nervous
            system remembering a truth your mind kept minimizing: you are allowed to defend
            yourself without permission.
          </p>
          <p>
            Most of all, if Medusa has chosen you, your life starts rearranging itself
            around self-respect. Doors close without explanation. Access gets revoked.
            You stop offering the version of yourself that exists to be palatable.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Medusa can be protective and intentional: a candle lit at your
            threshold, clean water set beside a mirror, a small stone placed as a ward,
            or a bronze token carried as a reminder of consequence.
          </p>
          <p>
            Devotion to Medusa is often lived more than spoken. It looks like locking the
            door and not reopening it. It looks like telling the truth once, then acting
            accordingly. It looks like choosing safety over nostalgia, standards over
            longing, reality over hope.
          </p>
          <p>
            She honors the kind of devotion that can be repeated: the boundary you keep,
            the warning you respect, the self you refuse to abandon when you feel lonely.
          </p>
        </section>

        {/* THE GAZE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Gaze</h2>
          <p>
            Medusa is the guardian of the gaze — not just who looks at you, but what that
            looking is trying to take. There is a difference between being seen and being
            consumed. Between admiration and entitlement. Between curiosity and conquest.
          </p>
          <p>
            Her lesson is sharp: you do not owe access to anyone who cannot look at you
            with respect. If someone’s attention makes you feel smaller, trapped, or
            obligated, that is not love. That is appetite.
          </p>
          <p>
            Medusa teaches you to feel the difference in your body and to treat that feeling
            as intelligence, not paranoia.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Medusa moves through the Guardian, the Avenger, the Boundary, and the Unblinking
            Truth. She is the archetype that ends the chase — not by running faster, but by
            making the cost real.
          </p>
          <p>
            In her highest expression, she is protection without apology. She does not need
            permission to exist. She does not need to be liked to be right. Her power is the
            unwavering refusal to be reduced.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Medusa’s shadow can appear as isolation, suspicion that hardens into armor, or
            a reflex to punish before discerning. When you have been harmed, vigilance can
            start to look like safety — even when it becomes a cage.
          </p>
          <p>
            Her corrective wisdom is discernment. Protection is not the same as bitterness.
            Consequence is not the same as chaos. Medusa teaches you to aim your defense at
            what is real, not at everyone who reminds you of what was.
          </p>
          <p>
            Balance with Medusa is learning the difference between the door you close and the
            life you still allow yourself to live. You can be protected without becoming
            imprisoned by your own walls.
          </p>
        </section>

        {/* MEDUSA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Medusa in the Modern World</h2>
          <p>
            Today, Medusa appears wherever someone stops confusing endurance with strength.
            She shows up when a person refuses coercion, refuses manipulation, refuses the
            expectation to stay polite in the presence of harm.
          </p>
          <p>
            Her current lives in protective clarity: changing your number, blocking the
            contact, leaving the situation, documenting the truth, telling the story, and
            choosing safety even when the world calls you “too much” for doing it.
          </p>
          <p>
            Medusa is not here to make you feared by the innocent. She is here to make you
            unreachable to predators.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Medusa teaches that the part of you the world tried to turn into a warning can
            become a sanctuary instead. You are not required to stay soft in places that
            punish softness. You are not required to keep offering access to people who use
            your empathy as a key.
          </p>
          <p>
            Let your instincts return. Let your “no” become a full sentence again. Let your
            protective anger become information, not a personality. You do not have to be
            cruel to be safe, but you do have to be clear. You do have to be consistent. You
            do have to stop negotiating with what has already proven it does not respect you.
          </p>
          <p>
            If Medusa is in your life, it is because you are ready to stop being edited into
            a version that can be taken. Stand at your own threshold like a guardian. Look
            directly at the truth. And if something approaches with entitlement instead of
            reverence, let consequence be the language you speak.
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