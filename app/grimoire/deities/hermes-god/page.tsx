// app/grimoire/08-deities/hermes-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hermes" subtitle="God of Messages">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hermes/hermes.png"
              alt="Hermes"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The sign is not the miracle.
              <br />
              The message is.
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
    Hermes is the living current of communication, movement, exchange, and
    threshold intelligence. He governs messages — not only spoken words,
    but signs, symbols, omens, negotiations, and the subtle language of timing.
  </p>
  <p>
    He is the god of roads, commerce, trickster insight, and the quick mind
    that adapts without breaking. Hermes teaches you how to move cleanly:
    through spaces, through conversations, through deals, and through decisions.
  </p>
  <p>
    His power is not brute force. It is agility. The ability to read the room,
    speak the truth with precision, and choose the path that actually works.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hermes-god/mythology"
      className="deity-link"
    >
      Explore Hermes’ Mythic Origins →
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
        <Link href="/grimoire/11-elements/air" className="deity-link">
          Air
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/03-mercury"
                  className="deity-link"
                >
                  Mercury
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/04-wednesday"
                  className="deity-link"
                >
                  Wednesday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/05-throat-chakra"
                  className="deity-link"
                >
                  Throat
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/05-yellow" className="deity-link">
                  Yellow
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/11-grey" className="deity-link">
                  Grey
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
                <Link href="/grimoire/07-crystals-stones/citrine" className="deity-link">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/quartz" className="deity-link">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/tigers-eye"
                  className="deity-link"
                >
                  Tiger’s Eye
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/fluorite"
                  className="deity-link"
                >
                  Fluorite
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mint" className="deity-link">
                  Mint
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
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
            Hermes appears early in Greek myth as a god of cunning intelligence and
            rapid movement — a messenger between realms, a guide between worlds, and
            a negotiator between powers.
          </p>
          <p>
            His myths often carry a trickster edge, but that edge is instructional.
            Hermes reveals the difference between cleverness and deceit, between
            adaptability and manipulation. He teaches the ethics of exchange.
          </p>
          <p>
            As a psychopomp, he is also linked to the movement of souls — a reminder
            that the road does not end at the visible world.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hermes governs communication, language, learning, writing, travel, commerce,
            negotiation, boundaries between worlds, and the delivery of messages through
            symbol and synchronicity.
          </p>
          <p>
            He supports quick problem-solving, clean deals, strategic networking, and
            navigating change without panic. He helps you move information and energy
            where it needs to go.
          </p>
          <p>
            Hermes also protects travelers — including those traveling between versions
            of themselves. His power is transition with intelligence.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Roads, crossroads, winged sandals, keys, coins, letters, scrolls, boundary
            markers, and messengers. His imagery speaks to movement and exchange —
            the path, the deal, the word, the sign.
          </p>
          <p>
            Hermes’s symbols often carry one message: read what is happening, not what
            you wish was happening. Reality speaks in patterns.
          </p>
        </section>

        {/* HERMES IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hermes in Practice</h2>
          <p>
            Work with Hermes when you need momentum and clarity: improving communication,
            negotiating cleanly, learning faster, finding opportunities, and navigating
            transitions with intelligence. He is excellent for business, networking,
            travel, writing, and divination through signs and synchronicity.
          </p>
          <p>
            Hermes responds to sharp attention, honest exchange, and follow-through. He
            does not respond well to manipulation, dishonesty, or asking for signs while
            refusing to act on what you already know.
          </p>
          <p>
            Keep your intentions clean. Hermes will open roads — but he will not walk them
            for you. If you want the message, be willing to receive it.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hermes-god/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF HERMES HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Hermes Has Chosen You
          </h2>
          <p>
            If Hermes has chosen you, your life begins to speak in patterns. You may
            notice repeated signs, perfectly timed messages, sudden introductions, or
            unexpected opportunities that arrive through conversation and connection.
          </p>
          <p>
            His presence often awakens through the mind: rapid learning, sharp curiosity,
            a pull toward writing, speaking, traveling, or changing direction quickly and
            cleanly. You may feel restless — not anxious, but ready.
          </p>
          <p>
            Signs may appear through roads, repeated numbers tied to timing, coins,
            letters, birds, or synchronicities that feel like someone is tapping you on
            the shoulder saying, “Pay attention.”
          </p>
          <p>
            Most of all, if Hermes has chosen you, your life begins to reward action after
            insight. When you follow the message, the path opens. When you ignore it, the
            signal repeats until you finally move.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Hermes can be simple and practical: coins left respectfully,
            clean water, incense, honey, a candle lit before travel, or words written as
            devotion. The intention is exchange — gratitude for guidance and clear roads.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your word, honoring agreements,
            speaking honestly, learning with discipline, and moving with integrity.
          </p>
          <p>
            Hermes responds to reciprocity. If you want doors to open, be someone who does
            not waste what is given.
          </p>
        </section>

        {/* HERMES VS MERCURY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hermes vs Mercury</h2>
          <p>
            Hermes and Mercury are related currents, but they are not identical. Hermes
            carries a distinctly Greek mythic texture — trickster intelligence, boundary
            work, and messenger movement between realms. Mercury, in his Roman current,
            often emphasizes commerce, social exchange, and practical communication within
            civic life.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Hermes as the
            liminal messenger and Mercury as the Roman expression of trade and communication
            within structure.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Hermes moves through the Messenger, the Guide, the Trickster Teacher, and the
            Road-Opener — not as roles to perform, but as currents of intelligence that
            keep you moving and aware.
          </p>
          <p>
            In his highest expression, he is communication with integrity: clear messages,
            clean deals, sharp perception, and movement that leads somewhere real.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Hermes’s shadow can appear when cleverness becomes manipulation — when words
            become loopholes, when curiosity becomes distraction, or when movement becomes
            avoidance.
          </p>
          <p>
            His corrective wisdom is simple: be honest. If the message is true, it will not
            require deception. If the deal is clean, it will not require confusion.
          </p>
        </section>

        {/* HERMES IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hermes in the Modern World</h2>
          <p>
            Today, Hermes appears wherever information moves fast: writing, technology,
            business, travel, networking, and the subtle art of timing. He shows up when a
            person learns to communicate clearly and move decisively.
          </p>
          <p>
            He reminds you that the sign is not the miracle. The message is. Receive it.
            Then act.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hermes teaches that movement is sacred when it is intentional. Not every road is
    meant to be traveled, not every message is meant to be answered — wisdom lives in
    knowing which signals matter and which are noise.
  </p>
  <p>
    He asks you to sharpen your awareness: to listen for what is being said beneath the
    words, to read the pattern instead of forcing the outcome, and to recognize when
    timing itself is speaking.
  </p>
  <p>
    Walk with Hermes when you are ready to act on insight rather than wait for certainty.
    His path rewards attention followed by movement — curiosity paired with responsibility.
    The road opens when you step.
  </p>
  <p>
    His blessing arrives as clarity in exchange: cleaner communication, smoother
    negotiations, and the ability to move through change without losing yourself.
    When you honor truth in motion, obstacles become directions.
  </p>
  <p>
    Hermes reminds you that the message is never random. When it reaches you, it is because
    you are meant to respond — not with hesitation, but with intelligence, integrity, and
    forward motion.
  </p>
</section>







        {/* FOOTER LINKS (ORDER LOCKED FOR GODS) */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/02-gods-landing"
              className="zodiac-footer-link"
            >
              ← Back to Gods
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