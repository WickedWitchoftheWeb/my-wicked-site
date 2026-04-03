// app/grimoire/08-deities/hecate-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hecate" subtitle="Goddess of Crossroads">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/hecate.png"
              alt="Hecate"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The threshold is not a place you fear.
              <br />
              It is the place you become.
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
    Hecate is a pre-Olympian Titan, older than Zeus, older than the Olympian
    order itself.
  </p>
  <p>
    Unlike most deities absorbed or diminished under the Olympians, she was
    honored and even granted dominion by Zeus himself—over sky, earth, and
    sea—making her one of the few with true sovereignty across all realms.
  </p>
  <p>
    She embodies the liminal: thresholds, crossroads, boundaries between worlds.
    Her domain is where one thing becomes another—life into death, ignorance into
    knowledge, fear into power.
  </p>
  <p>
    Titles: Propylaia (Before the Gate), Phosphoros (Light-Bringer), Kleidouchos
    (Keeper of Keys), Enodia (Of the Roads), Soteira (Savior)
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hecate-goddess/mythology"
      className="deity-link"
    >
      Explore Hecate’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/earth" className="deity-link">
          Earth
        </Link>
        ,{" "}
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
                ,{" "}
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
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/purple" className="deity-link">
                  Purple
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/red" className="deity-link">
                  Red
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
                  href="/grimoire/07-crystals-stones/labradorite"
                  className="deity-link"
                >
                  Labradorite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/amethyst"
                  className="deity-link"
                >
                  Amethyst
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
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
                <Link href="/grimoire/14-herbs/cypress" className="deity-link">
                  Cypress
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
              </p>
            </div>
          </section>
        </section>

        {/* THREE KEYS BLURB (RIGHT UNDER CORRESPONDENCES) */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Three Keys</h2>
          <p>
            Hecate’s Three Great Keys are not symbols for decoration — they are a living
            map of initiation, power, and transformation. They are the architecture of
            descent, clarity, and sovereignty: Shadow, Light, and Threshold.
          </p>
          <p>
            These Keys are not “earned” through performance. They are revealed through
            readiness — through what you can hold without distortion, obsession, or fear.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys"
              className="deity-link"
            >
              Explore Hecate’s Three Keys →
            </Link>
          </p>
        </section>

        {/* MYTHOLOGICAL ORIGINS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Mythological{"\u00A0\u00A0"} Origins
          </h2>
          <p>
            Hecate is a pre-Olympian Titan, older than Zeus, older than the Olympian
            order itself.
          </p>
          <p>
            Unlike most deities absorbed or diminished under the Olympians, she was
            honored and even granted dominion by Zeus himself—over sky, earth, and
            sea—making her one of the few with true sovereignty across all realms.
          </p>
          <p>
            She embodies the liminal: thresholds, crossroads, boundaries between worlds.
            Her domain is where one thing becomes another—life into death, ignorance into
            knowledge, fear into power.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/origin"
              className="deity-link"
            >
              Dive Deeper into Hecate’s Origin Story →
            </Link>
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hecate governs the places where reality changes state: the moment before the
            door opens, the breath before the decision, the edge between what was and
            what will be. Her power is not loud — it is absolute. She is invoked at
            crossroads, thresholds, gates, and liminal hours because those are the places
            where will becomes fate.
          </p>
          <p>
            The keys she carries are metaphysical. They unlock gates between worlds: the
            living and the dead, the seen and unseen, the conscious and unconscious. They
            also unlock inner gates — the places in the psyche where fear hardens into
            resistance, and resistance becomes the thing that keeps a witch from becoming
            who she is.
          </p>
          <p>
            The torch she bears represents illumination in the deepest night — guidance
            through shadow, dream, and mystery. It does not remove the dark. It makes the
            dark navigable.
          </p>
          <p>
            The dogs that accompany her are guardians of passage. They are the warning and
            the protection. They stand at the threshold and make it clear: not everything
            may enter, and not everything should.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Hecate’s symbols are all objects of transition: keys and torches, gates and
            roads, crossroads and doorways. They speak to her role as Guardian and Guide —
            not a deity of comfort, but a deity of becoming.
          </p>
          <p>
            Dogs, especially black dogs, appear as protectors and omens. Crossroads mark the
            places where decisions become irreversible. The torch is her signature of truth
            through darkness — the light that reveals, not the light that performs.
          </p>
          <p>
            Keys. Torches. Dogs. Crossroads. Gates. The boundary between the worlds.
          </p>
        </section>

        {/* HECATE IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hecate in Practice</h2>
          <p>
            Hecate has always been linked to witches and outcasts, not because she is “dark,”
            but because she stands with those who dare to cross boundaries forbidden by society.
            She is present when the old identity dies and the new one is not yet formed.
          </p>
          <p>
            She is invoked for divination, necromancy, banishment, shadow work, and empowerment —
            her blessing is the courage to walk the path no one else dares, and the discernment to
            return from it intact.
          </p>
          <p>
            To those she chooses, she lends not only protection, but authority over thresholds:
            the ability to see what is hidden, to close what drains, to open what is aligned, and
            to wield magick without apology — but with responsibility.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* Chosen by Hecate */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Hecate Has Chosen You</h2>
          <p>
            If Hecate has chosen you, it rarely feels like comfort. It feels like recognition.
            Like something ancient looking straight through you. Her call tends to arrive at a
            crossroads in your life — when you cannot keep living the old way, and you are not
            willing to lie to yourself anymore.
          </p>
          <p>
            Her signs are often liminal: recurring crossroads symbolism, keys, torches, gates,
            roads at night, doorways, thresholds, and the sensation of being watched in a way
            that is not threatening — just undeniable.
          </p>
          <p>
            Dogs may show up in dreams, synchronicities, or in the physical world. So may
            persistent “between” moments: dawn, dusk, fog, empty roads, the feeling of being
            paused right before change.
          </p>
          <p>
            Most of all, if she has chosen you, your life begins to demand sovereignty. You
            stop being able to tolerate blurred boundaries, half-truths, and paths chosen for
            you by fear, guilt, or other people.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offer at the threshold: at doors, at crossroads, at the liminal edge between one
            life and the next. Offerings can be simple, intentional, and clean — given with
            respect to the land and the boundary you are asking her to illuminate.
          </p>
          <p>
            Traditional offerings often include garlic, honey, bread, eggs, and incense — but
            devotion is not about expense. It is about clarity. A single candle lit with
            presence is worth more than a table set in desperation.
          </p>
          <p>
            Acts of devotion can be non-material: cleaning your threshold, setting boundaries
            you’ve avoided, speaking a truth you’ve delayed, closing a door that drains you,
            choosing the next right step with discipline. Hecate responds to sincerity and
            follow-through.
          </p>
        </section>

        {/* HECATE VS TRIVIA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hecate vs Trivia</h2>
          <p>
            Hecate and Trivia are related, but not interchangeable. Trivia is a Roman current
            often emphasized through roads, three-way crossings, and civic boundary spaces.
            Hecate carries a distinctly Greek chthonic-and-liminal depth — keys, torches, the
            underworld gate, and the mysteries of initiation.
          </p>
          <p>
            You can work with both, but keep the current distinct and name her as you intend to
            meet her. Precision is respect. If you call Hecate, call Hecate.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Hecate moves through the Guardian of the Threshold, the Key-Bearer, the Torch in
            the Dark, and the Witch’s Ally — not as roles to perform, but as currents of power.
            The Guardian teaches boundaries. The Key-Bearer teaches access and consequence. The
            Torch teaches truth through darkness. The Witch’s Ally teaches sovereignty: the
            refusal to shrink when the path gets real.
          </p>
          <p>
            In her highest expression, Hecate is the authority to become. Not by force, not by
            fantasy — by choice, by discipline, by willingness to cross.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            The liminal is not meant to be lived in forever. The threshold is a passage, not a
            home. When a witch becomes addicted to the edge — constant endings, constant beginnings,
            constant crisis as identity — the current distorts.
          </p>
          <p>
            Hecate’s medicine is discernment: crossing with intention, and returning with truth.
            Not every door is yours. Not every omen is a mandate. Not every shadow is meant to be
            explored at full speed.
          </p>
          <p>
            Balance looks like integration: grounding after ritual, rest after revelation, and the
            willingness to live the lessons in daylight — not just in ceremony.
          </p>
        </section>

        {/* HECATE IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hecate in the Modern World</h2>
          <p>
            Today, Hecate’s energy appears wherever people choose the edge — where someone stops
            begging for permission and crosses anyway. She is present in the moment a boundary is
            set, a door is closed, a life is redirected, an identity is claimed.
          </p>
          <p>
            She is the courage to stand at the gate and not flinch. She is the calm in the decision.
            She is the part of you that refuses to betray yourself just to keep the peace.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hecate teaches that power is not something you are given — it is something you learn
    to carry. Her path is not chosen lightly, and it is never accidental. You meet her
    when you are standing at a threshold you cannot ignore.
  </p>
  <p>
    She asks you to become conscious of your crossings: what you are leaving, what you
    are entering, and what you are willing to take responsibility for once you step
    through. Every doorway has a cost. Every key demands discernment.
  </p>
  <p>
    Walk with Hecate when you are ready to hold complexity without collapse — to see the
    shadow without losing yourself, to carry light without arrogance, and to choose your
    path with sovereignty rather than fear.
  </p>
  <p>
    Her blessing arrives as authority at the crossroads: the ability to close what must
    end, open what is aligned, and move between worlds without fragmenting your soul.
    She does not remove difficulty — she gives you the power to navigate it.
  </p>
  <p>
    Hecate reminds you that the threshold is not a place to linger forever. It is a place
    of becoming. Take the key. Choose the path. And walk it with intention.
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