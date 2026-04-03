// app/grimoire/08-deities/ares-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ares" subtitle="God of War">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/ares/ares.png"
              alt="Ares"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Courage is not calm — it is motion.
              <br />
              Boundaries are not cruelty — they are sacred force.
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
    Ares is the raw ignition of will — the force that rises when something
    must be protected, claimed, defended, or moved. He is not “violence for
    violence’s sake.” He is the part of life that refuses to be passive when
    truth is on the line. Ares is the heartbeat before action, the courage to
    say no, the heat that burns through hesitation, and the fire that reminds
    you that you are allowed to take up space.
  </p>
  <p>
    Where other powers negotiate and soften, Ares clarifies. He strips things
    down to what is real: what you want, what you won’t tolerate, and what you
    are willing to fight for — not always with fists, but with boundaries,
    loyalty, discipline, and decisive movement.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/ares-god/mythology"
      className="deity-link"
    >
      Explore Ares’ Mythic Origins →
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
        <Link href="/grimoire/11-elements/fire" className="deity-link">
          Fire
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/04-mars"
                  className="deity-link"
                >
                  Mars
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/03-tuesday"
                  className="deity-link"
                >
                  Tuesday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/03-solar-plexus-chakra"
                  className="deity-link"
                >
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/red" className="deity-link">
                  Red
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/iron" className="deity-link">
                  Iron
                </Link>
              </p>
            </div>

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/bloodstone"
                  className="deity-link"
                >
                  Bloodstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/carnelian"
                  className="deity-link"
                >
                  Carnelian
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/nettle" className="deity-link">
                  Nettle
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/thistle" className="deity-link">
                  Thistle
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/pepper" className="deity-link">
                  Pepper
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cedar" className="deity-link">
                  Cedar
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/black-pepper"
                  className="deity-link"
                >
                  Black Pepper
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
            In Greek myth, Ares is the god of war — not the polished strategy of war,
            but the storm of it: the clash, the roar, the adrenaline of battle. His
            stories often place him where conflict is unavoidable, where pride is
            tested, where loyalty is proven, and where strength must be more than a
            concept. Ares carries the mythic truth that “peace” without boundaries
            becomes surrender — and that sometimes the soul must learn how to stand.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Ares governs courage, willpower, conflict, protection, battle instinct,
            and the sacred right to defend yourself. His gifts show up as decisive
            energy, clean boundaries, increased confidence, and the ability to act
            without waiting for permission. He is especially potent when you’ve been
            stuck in avoidance, fear of confrontation, or the belief that being “nice”
            is the same as being safe.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            His symbols include weapons, shields, iron, fire, battle standards, and
            the imagery of disciplined force. You may also see animal symbolism tied
            to protection and ferocity — the presence that says: “I am not prey.”
            Ares is not aesthetic danger; he is functional power.
          </p>
        </section>

      {/* ARES IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Ares in Practice</h2>
  <p>
    Work with Ares when you need strength that actually moves your life:
    boundary-setting, ending cycles of being disrespected, protecting your
    peace, reclaiming your voice, and cutting through fear. He is excellent
    for momentum — especially when you’ve been negotiating with your own
    hesitation for too long.
  </p>
  <p>
    Ares responds well to honesty, discipline, and action. He does not respond
    well to performative toughness, cruelty disguised as confidence, or chaos
    used as self-expression. If you call him, be willing to do the work: say
    what you mean, mean what you say, and follow through.
  </p>
  <p>
    Ares energy should never become an excuse to harm others. True power is
    clean. If you’re angry, he can help you refine it into truth. If you’re
    afraid, he can help you transmute it into movement. But if you’re seeking
    domination, his current will turn sharp — because sovereignty is not
    control; it is self-command.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/ares-god/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF ARES HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Ares Has Chosen You
  </h2>
  <p>
    If Ares has chosen you, passivity becomes unbearable. You may find
    yourself increasingly intolerant of disrespect, avoidance, and
    situations where your power is being quietly eroded. What once felt
    “easier” suddenly feels wrong.
  </p>
  <p>
    His presence often shows up as a surge of embodied energy — a desire
    to move, act, speak, and confront. You may feel called to defend
    yourself or others, to take up space without apology, and to stop
    shrinking to maintain peace.
  </p>
  <p>
    Signs can appear through heightened physical awareness, adrenaline,
    recurring themes of conflict or confrontation, and moments where
    silence feels like betrayal of the self. Anger may rise — not to
    consume you, but to be clarified.
  </p>
  <p>
    Most of all, if Ares has chosen you, your life begins to demand
    courage. Not reckless force, but decisive action. You are asked to
    stand where you once stepped back, to choose self-command over fear,
    and to move forward even when your hands are shaking.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings can be simple and direct: a red candle, clean water,
            iron symbolism, or an intentional act of strength. Modern offerings can be
            even more aligned: a workout done as devotion, a boundary finally spoken,
            a promise kept to yourself, or a protective action taken for your home and
            your people.
          </p>
          <p>
            Ares devotion is less about ornament and more about integrity. He respects
            consistency. If you say you’re changing, change. If you say you’re done,
            be done. If you say you’re protecting your peace, stop handing it away.
          </p>
        </section>

        {/* ARES VS MARS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Ares vs Mars</h2>
          <p>
            Ares and Mars are related, but not interchangeable. Ares carries a distinctly
            Greek mythic texture — volatile, immediate, visceral, the surge of conflict and
            the instinct to fight. Mars, in the Roman current, often leans more toward
            discipline, duty, and the structured application of force.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Ares as the spark and the storm
            — the moment you choose to stand — and Mars as the cultivated engine of action
            — the long-term power that sustains the fight.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Ares moves through the Warrior, the Protector, the Challenger, and the
            Boundary-Setter — not as roles to perform, but as currents of power. The
            Warrior acts with courage. The Protector defends what matters. The Challenger
            forces truth to the surface. The Boundary-Setter ends the era of tolerated
            disrespect.
          </p>
          <p>
            In his highest expression, Ares is courage without cruelty — strength that
            doesn’t need to threaten, because it is real.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            His shadow can appear as impulsiveness, rage, aggression, domination, or a
            constant need for conflict — when power becomes a performance and anger
            becomes identity. When every conversation feels like a battle, the current
            has tipped into distortion.
          </p>
          <p>
            Ares’s corrective wisdom is simple: direct the fire. Rage is energy. Turn it
            into action, boundaries, discipline, and protection. Fight for something —
            not against everything. The goal is not destruction; the goal is sovereignty.
          </p>
        </section>

        {/* ARES IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Ares in the Modern World</h2>
          <p>
            Today, Ares energy shows up whenever someone stops shrinking. He lives in the
            moment you speak the truth you’ve been swallowing, the moment you stop explaining
            yourself to people committed to misunderstanding you, and the moment you protect
            your life like it matters — because it does.
          </p>
          <p>
            He also appears in disciplined resilience: training, skill-building, confronting
            fear, and doing the hard thing without dramatizing it. Ares is not chaos. Ares is
            commitment to your own strength.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Ares teaches that power is not rage — it is movement with integrity. His fire is
    not meant to burn indiscriminately, but to cut through hesitation, fear, and
    self-betrayal. Anger, when refined, becomes clarity.
  </p>
  <p>
    He reminds you that avoidance is not peace. Silence is not strength when it costs
    you your voice. There are moments when action is the only honest response — when
    choosing yourself requires momentum, not contemplation.
  </p>
  <p>
    Walking with Ares asks you to stand fully in your body and your truth. Say what
    you mean. End what needs ending. Defend what is worth protecting without turning
    cruelty into identity.
  </p>
  <p>
    His blessing arrives as courage with direction: the ability to move forward
    without spiraling, to confront without dominating, and to act without abandoning
    your ethics. With Ares, strength becomes self-command.
  </p>
  <p>
    Remember this teaching: power is clean when it is owned. Let your actions match
    your values. Let your fire serve truth. And move — not to conquer, but to live
    without fear of your own strength.
  </p>
</section>







        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
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