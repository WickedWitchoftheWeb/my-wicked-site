// app/grimoire/08-deities/mars-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mars" subtitle="God of War">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/mars/mars.png"
              alt="Mars"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Anger is not the enemy.
              <br />
              It is power asking for direction.
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
    Mars is the living current of force that protects, commits, and acts. He
    is not chaos for its own sake — he is decision. The moment your spirit
    stops negotiating with what is unacceptable and chooses movement with a
    spine.
  </p>
  <p>
    His power is heat with purpose: courage that doesn’t perform, discipline
    that doesn’t collapse, and the kind of will that can hold the line when
    fear tries to bargain you back into hesitation.
  </p>
  <p>
    Mars teaches the difference between reaction and command. Anger can be
    a wildfire or a forge. One destroys without discernment. The other
    strengthens what is real and burns off what is false.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/mars-god/mythology"
      className="deity-link"
    >
      Explore Mars’ Mythic Origins →
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
        <Link href="/grimoire/11-elements/fire" className="deity-link">
          Fire
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/05-mars"
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
                <Link href="/grimoire/05-colors/02-red" className="deity-link">
                  Red
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
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

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/bloodstone"
                  className="deity-link"
                >
                  Bloodstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/garnet"
                  className="deity-link"
                >
                  Garnet
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

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/ginger" className="deity-link">
                  Ginger
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/garlic" className="deity-link">
                  Garlic
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/cayenne-pepper"
                  className="deity-link"
                >
                  Cayenne Pepper
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
            Mars carries the Roman current of war as institution and consequence — the
            force that protects borders, defends what is claimed, and demands discipline
            from anyone who would call themselves strong.
          </p>
          <p>
            He is often compared to Ares, but Mars holds a different texture. Where
            Ares can feel raw and immediate, Mars is measured. He is strategy, stamina,
            and the long arc of will: the ability to endure, organize, and hold a line
            until reality changes.
          </p>
          <p>
            His myths and symbols are threaded with iron, courage, command, and the
            sobering truth that every victory has a cost — and every avoidance does too.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Mars governs war, protection, courage, aggression refined into action,
            physical vitality, discipline, and decisive endings. He strengthens the
            part of you that can say “enough” and mean it — then follow through.
          </p>
          <p>
            His current supports boundary enforcement, energetic shielding, fear
            transmutation, and momentum. Mars does not soothe you into comfort. He
            stabilizes you into readiness.
          </p>
          <p>
            He also teaches clean power: force that protects rather than dominates,
            strength that serves truth rather than ego, and command that doesn’t need
            cruelty to prove itself.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Iron, armor, blades, shields, drums, marching rhythm, red banners, scars,
            and the image of the disciplined warrior. His sacred imagery is not about
            violence as entertainment. It is about preparedness as devotion.
          </p>
          <p>
            Mars speaks through the body: posture, breath, heat, and the instinct that
            finally stops pretending it doesn’t know the truth.
          </p>
        </section>

        {/* MARS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mars in Practice</h2>
          <p>
            Work with Mars when you need action that holds: boundary-setting, protection,
            ending cycles, rebuilding stamina, strengthening discipline, and reclaiming
            your voice when you’ve been trained to soften your truth to keep the peace.
          </p>
          <p>
            He responds to effort, honesty, and follow-through. He does not respond well
            to performative toughness, cruelty disguised as confidence, or rage used as
            identity. Mars will amplify what is real — so make sure your intention is
            clean.
          </p>
          <p>
            This is command work. If you ask for strength, be willing to live like a
            person who has it. If you ask for protection, be willing to stop opening
            the door to what harms you.
          </p>
          <p>
            <Link href="/grimoire/08-deities/mars-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF MARS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Mars Has Chosen You</h2>
          <p>
            If Mars has chosen you, your life starts to demand backbone. You may feel a
            sudden intolerance for half-decisions, weak boundaries, and situations where
            you keep explaining yourself to people who benefit from your hesitation.
          </p>
          <p>
            His presence often arrives as heat and clarity: the moment you realize you’re
            done negotiating with the same disrespect, the same fear, the same delay. You
            may feel called to train your body, refine your discipline, or cut something
            off cleanly that has been draining you for too long.
          </p>
          <p>
            Signs can appear through iron imagery, blades and shields, drums, red, sudden
            opportunities to defend your truth, or repeated moments where you are asked to
            choose action over comfort. The signal is rarely subtle: it feels like a spine
            straightening inside you.
          </p>
          <p>
            Most of all, if Mars has chosen you, your life begins to reward decisive
            integrity. When you act cleanly, doors open fast. When you waver, reality
            tightens until you either choose command or accept the cost of avoidance.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Mars can be practical and direct: a candle lit with a clear vow,
            clean water set with intention, a small iron token, or a moment of disciplined
            training offered as devotion. The power is not in spectacle — it is in
            commitment.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your word, finishing what you
            start, enforcing a boundary the first time, and choosing truth even when it
            costs you approval.
          </p>
          <p>
            Mars honors integrity that can be repeated. If you want his current in your
            life, become a person who does not abandon themselves in the moment that
            matters.
          </p>
        </section>

        {/* MARS VS ARES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mars vs Ares</h2>
          <p>
            Mars and Ares are related, but not interchangeable. Ares carries the raw
            Greek current of battle and immediate confrontation. Mars carries the Roman
            current of disciplined force: strategy, endurance, and protection that holds
            over time.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Ares as the fire
            that breaks hesitation and Mars as the command that builds a life you can
            defend.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Mars moves through the Warrior, the Protector, the Commander, and the
            Boundary-Keeper — not as costumes, but as currents of power that teach
            decisive integrity.
          </p>
          <p>
            In his highest expression, Mars is strength with restraint: force that does
            not need cruelty, courage that does not need noise, and action that aligns
            with truth instead of ego.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Mars’s shadow can appear as reckless aggression, domination, impatience, or
            conflict used as identity — when power becomes a performance and anger becomes
            a home.
          </p>
          <p>
            His corrective wisdom is simple and sharp: direction. If your force has no
            purpose, it becomes destruction. If your anger has no truth, it becomes
            addiction. Mars teaches you to aim.
          </p>
          <p>
            Balance with Mars is learning when to act and when to hold. A warrior who
            cannot pause is not powerful. They are reactive.
          </p>
        </section>

        {/* MARS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Mars in the Modern World</h2>
          <p>
            Today, Mars appears wherever people stop calling endurance “strength” when it
            is really self-abandonment. He shows up when someone leaves the cycle, says the
            hard truth, trains their body, protects their peace, and chooses a life that
            matches their standards.
          </p>
          <p>
            His current lives in clean boundaries, disciplined momentum, and the courage
            to be disliked for doing what is right. Mars does not promise ease. He offers
            power that can be trusted.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Mars teaches that courage is not a feeling — it is a decision you make again
            and again until it becomes your default. The world will always offer you a
            softer compromise, a quieter lie, a delay disguised as “timing.” Mars asks you
            to listen for the moment your spirit says “now,” and to honor it like a vow.
          </p>
          <p>
            Let anger become information, not identity. Let discipline become devotion,
            not punishment. Let protection begin with the boundaries you enforce when no
            one is watching. You do not need to be loud to be powerful. You need to be
            consistent.
          </p>
          <p>
            Choose the line you will not cross. Choose the truth you will not dilute.
            Choose the life you will defend. Then act like it. Mars is not here to make
            you harsher. He is here to make you solid.
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