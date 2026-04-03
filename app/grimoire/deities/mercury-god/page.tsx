// app/grimoire/08-deities/mercury-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mercury" subtitle="God of Commerce">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/mercury/mercury.png"
              alt="Mercury"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Words are currency.
              <br />
              Spend them like you mean it.
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
    Mercury is the living current of exchange — the intelligence that moves
    value through a world built on connection. He governs commerce, negotiation,
    contracts, timing, and the social currents that decide what gets traction
    and what gets ignored.
  </p>
  <p>
    His power is not only “messages” — it is leverage. The ability to translate
    an idea into something the world can receive, to carry information cleanly
    between people, and to make a pathway where others only see friction.
  </p>
  <p>
    Mercury teaches precision: speak so you’re understood, trade so you’re not
    drained, and move so you don’t lose yourself to noise. He turns scattered
    thought into usable strategy.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/mercury-god/mythology"
      className="deity-link"
    >
      Explore Mercury’s Mythic Origins →
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
                <Link href="/grimoire/05-colors/11-grey" className="deity-link">
                  Grey
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/mercury" className="deity-link">
                  Mercury
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/fluorite" className="deity-link">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/citrine" className="deity-link">
                  Citrine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/quartz/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/tigers-eye"
                  className="deity-link"
                >
                  Tiger’s Eye
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mint" className="deity-link">
                  Mint
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/anise" className="deity-link">
                  Anise
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
            Mercury rises through Roman myth as the god of commerce, negotiation, and
            exchange — the civic intelligence that keeps a world moving: trade routes,
            marketplaces, contracts, and the social language that builds reputation.
          </p>
          <p>
            He is often linked to Hermes by function, but Mercury’s Roman texture is
            practical and public-facing. He is the current of transactional reality:
            what something costs, what it’s worth, and what you can actually promise
            and deliver without collapse.
          </p>
          <p>
            His myths carry an instruction: survival depends on translation. If you
            cannot communicate clearly, if you cannot read the room, if you cannot
            negotiate value, you will be outpaced — not by strength, but by strategy.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Mercury governs commerce, communication, persuasion, contracts, networking,
            learning, writing, clever problem-solving, and the movement of information
            through social systems. He strengthens your ability to make your intentions
            legible to the world.
          </p>
          <p>
            His current supports negotiation, sales, business momentum, cleaner
            boundaries in exchange, and the skill of stating your needs without
            overexplaining. Mercury brings the kind of clarity that makes a “yes”
            mean yes — and a “no” mean no.
          </p>
          <p>
            He also governs the ethics of trade: not only what you receive, but what
            you give, and whether the exchange is honest on both sides.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Coins, ledgers, marketplaces, roads, ink, seals, letters, contracts, and
            the subtle sign language of social timing. His sacred imagery is not
            mystical for its own sake — it is the intelligence that makes life work.
          </p>
          <p>
            Mercury speaks through patterns of conversation and exchange: the message
            you almost ignore, the opportunity that arrives through one sentence, the
            moment you realize the deal is uneven — and the power to correct it cleanly.
          </p>
        </section>

        {/* MERCURY IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mercury in Practice</h2>
          <p>
            Work with Mercury when you need sharper communication and cleaner exchange:
            business building, negotiating, writing, studying, networking, interviewing,
            pricing your work, and moving through social spaces with strategy instead of
            anxiety.
          </p>
          <p>
            He responds to specificity. Vague requests get vague results. If you want
            Mercury’s current, speak clearly, define the terms, and do not ask for
            momentum while refusing to follow through on what you already know you need
            to do.
          </p>
          <p>
            Mercury is also a guardian of mental hygiene. When your mind is flooded with
            noise, his medicine is structure: a plan, a list, a message sent, a boundary
            stated, a decision made.
          </p>
          <p>
            <Link href="/grimoire/08-deities/mercury-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF MERCURY HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Mercury Has Chosen You
          </h2>
          <p>
            If Mercury has chosen you, your life starts accelerating through conversation.
            You may notice sudden introductions, perfectly timed messages, unexpected
            invitations, or information arriving right when you need it — not as “signs,”
            but as usable openings.
          </p>
          <p>
            His presence often hits the mind first: sharper curiosity, faster learning,
            the urge to write, pitch, sell, negotiate, or finally say the thing you’ve been
            rehearsing in your head for weeks. You may feel pulled to reorganize your life
            so your goals can move without friction.
          </p>
          <p>
            Signs can appear through repeating themes of coins, receipts, paperwork, calls,
            emails, contracts, travel, or constant reminders around timing and follow-up.
            Mercury’s message tends to be practical: respond, refine, confirm.
          </p>
          <p>
            Most of all, if Mercury has chosen you, you stop tolerating messy exchange. You
            become allergic to vagueness. You start wanting clean terms, clear boundaries,
            and communication that doesn’t require mind-reading.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Mercury can be small and intentional: coins given respectfully,
            clean water, a candle lit before important communication, or written words
            offered as devotion — a promise, a plan, a thank-you for clear roads.
          </p>
          <p>
            Devotion is lived through integrity in exchange: honoring agreements, paying
            what you owe, charging what you’re worth, communicating directly, and refusing
            deals that require you to betray yourself to be “liked.”
          </p>
          <p>
            Mercury honors the practitioner who keeps their word and sharpens their craft.
            If you want doors to open, become someone who can walk through them cleanly.
          </p>
        </section>

        {/* MERCURY VS HERMES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mercury vs Hermes</h2>
          <p>
            Mercury and Hermes share messenger roots, but they carry different textures.
            Hermes often moves through liminal intelligence and boundary-crossing between
            realms. Mercury emphasizes public exchange: commerce, negotiation, reputation,
            and practical communication inside society’s structures.
          </p>
          <p>
            If you work with both, treat them as distinct currents. Ask Hermes for
            threshold guidance and road-opening. Ask Mercury for clean deals, clear terms,
            and communication that converts intention into results.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Mercury moves through the Negotiator, the Strategist, the Translator, and the
            Connector — not as personas, but as skills that turn potential into progress.
          </p>
          <p>
            In his highest expression, he is communication with accountability: words that
            match actions, deals that are clean, and intelligence used to build rather than
            manipulate.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Mercury’s shadow can appear as talking in circles, over-optimizing, chasing
            novelty, or using cleverness to dodge responsibility. When the mind moves too
            fast, it can mistake motion for progress.
          </p>
          <p>
            His corrective wisdom is follow-through. Say less, confirm more. Make the terms
            clear. Keep the promise. Communication becomes power when it becomes reliable.
          </p>
          <p>
            Balance with Mercury is learning when to speak and when to finalize. A deal
            isn’t real until it’s real. A plan isn’t useful until it’s acted on.
          </p>
        </section>

        {/* MERCURY IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mercury in the Modern World</h2>
          <p>
            Today, Mercury lives in every system where value moves: business, media,
            marketing, writing, technology, contracts, and networking. He shows up when
            someone learns to communicate so clearly that opportunities can’t hide from
            them anymore.
          </p>
          <p>
            His current is present in the email you finally send, the price you finally set,
            the boundary you finally state, and the conversation you stop avoiding. Mercury
            rewards the person who makes their intention legible and their actions consistent.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Mercury teaches that clarity is protection. When you say what you mean, define
            the terms, and honor your own value, you stop bleeding energy into confusion.
            You stop paying for other people’s comfort with your own miscommunication.
          </p>
          <p>
            Let your words become clean. Let your deals become honest. Let your mind become
            useful instead of noisy. You don’t need to force the world to understand you —
            you need to communicate like someone who expects to be taken seriously.
          </p>
          <p>
            Choose the exchange that strengthens you. Say yes only when you can deliver it.
            Say no the first time you feel the terms turn rotten. Mercury is not here to
            make you busier. He is here to make you sharper — so your life can move with
            intelligence instead of strain.
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





