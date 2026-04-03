// app/grimoire/08-deities/sekhmet-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Sekhmet" subtitle="Goddess of War">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/sekhmet/sekhmet.png"
              alt="Sekhmet"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Rage is not evil.
              <br />
              It is a boundary that learned to speak.
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
    Sekhmet is holy ferocity — the lioness force that protects what is sacred
    by refusing to tolerate what desecrates it. She is not rage for sport. She
    is rage as truth, rage as warning, rage as the moment your spirit stops
    negotiating with harm.
  </p>
  <p>
    Her power is the heat of the Sun turned into will: the kind of authority
    that burns away lies, exposes weakness, and demands integrity. Sekhmet does
    not ask you to be gentle with what is poisoning you. She asks you to end it.
  </p>
  <p>
    And yet — her fire is not only war. It is medicine. Sekhmet carries the
    paradox of the blade and the balm: the same force that destroys disease can
    also restore life. Her lesson is simple and brutal: protection is love when
    it is clean.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/sekhmet-goddess/mythology"
      className="deity-link"
    >
      Explore Sekhmet’s Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/01-sun"
                  className="deity-link"
                >
                  Sun
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/01-sunday"
                  className="deity-link"
                >
                  Sunday
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
                <Link href="/grimoire/05-colors/05-yellow" className="deity-link">
                  Yellow
                </Link>
                ,{" "}
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
                <Link href="/grimoire/15-metals/gold" className="deity-link">
                  Gold
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/carnelian"
                  className="deity-link"
                >
                  Carnelian
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/garnet"
                  className="deity-link"
                >
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/citrine" className="deity-link">
                  Citrine
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
                <Link href="/grimoire/14-herbs/ginger" className="deity-link">
                  Ginger
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/cayenne-pepper"
                  className="deity-link"
                >
                  Cayenne Pepper
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
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
            Sekhmet rises from ancient Egyptian tradition as the lioness goddess of
            war, protection, and divine retribution — a force tied to the Sun’s heat
            and the king’s authority. Her name is often understood as “the Powerful One,”
            and her mythology does not soften her edges.
          </p>
          <p>
            She is a guardian current: the presence invoked when order is threatened,
            when illness spreads, when enemies encroach, when a boundary must be enforced
            without hesitation. In many traditions, Sekhmet is also tied to healing —
            because the same fire that burns can sterilize, and the same ferocity that
            destroys can also defend life.
          </p>
          <p>
            Her myths carry a warning and a truth: power without direction becomes
            devastation, but power with integrity becomes protection. Sekhmet’s lesson
            is not “be angry.” It is “be exact.”
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Sekhmet governs war, protection, righteous wrath, boundary enforcement,
            spiritual defense, and the purification of what is diseased — in the body,
            in the mind, and in the unseen field around you.
          </p>
          <p>
            Her current supports banishing, uncrossing, shielding, cutting cords that
            continue to drain you, and strengthening the will to follow through. Sekhmet
            is especially potent when someone has been trained to stay polite while being
            harmed.
          </p>
          <p>
            She also governs clean power: force that does not need cruelty, dominance, or
            chaos to prove itself. Sekhmet teaches you how to protect without becoming what
            you hate.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Lioness imagery, solar disks, flames, red heat, protective weapons, the
            disciplined warrior, and the moment a boundary becomes non-negotiable. Her
            sacred imagery is not softness — it is command.
          </p>
          <p>
            Sekhmet speaks through heat in the body, sudden clarity that cuts through
            excuses, dreams with felines or fire, and the instinct that says “this is
            dangerous” before you can explain why.
          </p>
        </section>

        {/* SEKHMET IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Sekhmet in Practice</h2>
          <p>
            Work with Sekhmet when you need protection that holds: ending harassment,
            breaking a pattern of tolerating disrespect, cleansing an oppressive energy,
            fortifying your boundaries, and reclaiming the part of you that refuses to be
            prey.
          </p>
          <p>
            She responds to honesty and restraint. Sekhmet does not reward dramatic rage
            that harms the wrong target. She answers when your anger has integrity — when
            it is aimed at what is real, and guided by a clean intention to protect life.
          </p>
          <p>
            This is disciplined fire. If you call Sekhmet, be prepared to stop pretending.
            She will show you where you have been saying “it’s fine” while your spirit is
            screaming “it’s not.”
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/sekhmet-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF SEKHMET HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Sekhmet Has Chosen You
          </h2>
          <p>
            If Sekhmet has chosen you, your life begins demanding respect — starting with
            the respect you give yourself. You may feel a sudden intolerance for being
            talked over, ignored, cornered, or slowly drained by people who expect your
            softness to make you available to harm.
          </p>
          <p>
            Her presence often arrives as heat and clarity. You may feel your body wake up
            with stronger boundaries: the instinct to step back, to say “no,” to leave, to
            protect your time, to stop negotiating with the same disrespect. You may also
            feel called toward cleansing, shielding, protection work, or strength-building
            that reconnects you to your physical power.
          </p>
          <p>
            Signs can appear through lioness symbolism, solar imagery, repeated themes of
            fire and purification, sudden urges to clean and fortify your space, and
            situations that force you to choose between peacekeeping and self-protection.
          </p>
          <p>
            Most of all, if Sekhmet has chosen you, you stop confusing patience with
            surrender. Your “enough” becomes immediate — and your follow-through becomes
            non-negotiable.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Sekhmet should be simple and intentional: a candle lit with a vow
            of protection, clean water, a moment of disciplined training offered as devotion,
            or a written declaration of boundaries placed beneath her image.
          </p>
          <p>
            Acts of devotion are lived: enforcing the boundary the first time, removing what
            drains you, speaking the truth without shrinking, and choosing protection over
            politeness when the situation requires it.
          </p>
          <p>
            Sekhmet honors clean courage. If you want her current in your life, be the person
            who stops abandoning themselves in the moment it matters.
          </p>
        </section>

        {/* THE LIONESS LAW */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Lioness Law</h2>
          <p>
            Sekhmet teaches that power must have ethics. Ferocity without direction becomes
            destruction. Ferocity with integrity becomes protection.
          </p>
          <p>
            The lioness does not hunt to prove she can. She hunts because it is necessary.
            That is the difference between rage and command.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Sekhmet moves through the Lioness, the Guardian, the Avenger, and the Purifier —
            not as costumes, but as sacred functions of protection and cleansing.
          </p>
          <p>
            In her highest expression, she is fierce love: protection that does not flinch,
            power that does not perform, and boundaries that do not negotiate with harm.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Sekhmet’s shadow can appear as uncontrolled rage, scorched-earth reactions, or
            the addiction to conflict as identity. When anger becomes a home, it stops being
            protection and starts being self-destruction.
          </p>
          <p>
            Her corrective wisdom is restraint with teeth. You do not have to be cruel to be
            powerful. You do not have to destroy everything to protect what matters. Sekhmet
            teaches you to aim — and to stop swinging at shadows.
          </p>
          <p>
            Balance with Sekhmet is learning to hold your fire without letting it consume you:
            fierce boundaries, clean action, and recovery afterward.
          </p>
        </section>

        {/* SEKHMET IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Sekhmet in the Modern World</h2>
          <p>
            Today, Sekhmet appears wherever people stop apologizing for their boundaries.
            She lives in the survivor who learns to say “no” without explaining, in the
            protector who refuses to become abusive, and in the person who finally chooses
            self-defense over self-erasure.
          </p>
          <p>
            Her current also lives in purification: ending toxic dynamics, cleansing spaces
            that feel heavy, and cutting off what feeds on your softness. Sekhmet reminds you
            that being kind does not mean being available to harm.
          </p>
          <p>
            When she is present, your life gets clearer. Not gentler — clearer. And clarity
            is often the beginning of safety.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Sekhmet teaches that protection is not a personality trait — it is a practice.
            It is the boundary you enforce when your voice shakes. It is the door you close
            even when your heart begs you to stay polite. It is the moment you finally stop
            offering yourself up as proof that you can endure.
          </p>
          <p>
            Let your anger become information, not identity. Let your fire become direction,
            not destruction. If something in your life keeps requiring you to shrink, to
            soften your truth, to tolerate disrespect in the name of “peace,” Sekhmet asks you
            to call it what it is: harm. And then to respond like someone who values their life.
          </p>
          <p>
            Choose clean courage. Choose the version of you that does not bargain with danger.
            Choose the protection that starts inside your own spine. Sekhmet is not here to
            make you vicious. She is here to make you safe — by teaching you that your boundaries
            are sacred, your voice is a weapon when it must be, and your power was never meant to
            be hidden just to keep other people comfortable.
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