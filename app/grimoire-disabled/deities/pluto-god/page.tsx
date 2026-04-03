// app/grimoire/08-deities/pluto-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Pluto" subtitle="God of Underworld">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/pluto/pluto.png"
              alt="Pluto"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              If it can’t survive the truth,
              <br />
              it wasn’t meant to survive you.
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
    Pluto is the sovereign force of what lies beneath. He is not darkness as
    fear — he is darkness as truth. The hidden root. The buried motive. The
    private power you only discover when you stop pretending you’re fine.
  </p>
  <p>
    His current is transformation through confrontation. Pluto does not
    negotiate with denial. He pulls the mask off. He breaks the illusion. He
    reveals what is controlling you so you can either claim it — or release it.
  </p>
  <p>
    Pluto teaches that rebirth is not a vibe. It is a process. And the first step
    is always the same: you face what you have been avoiding, and you stop feeding
    what feeds on you.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/pluto-god/mythology"
      className="deity-link"
    >
      Explore Pluto’s Mythic Origins →
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
                  href="/grimoire/03-chakras/01-root-chakra"
                  className="deity-link"
                >
                  Root
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
                <Link href="/grimoire/05-colors/09-purple" className="deity-link">
                  Purple
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
                <Link href="/grimoire/15-metals/lead" className="deity-link">
                  Lead
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
                <Link href="/grimoire/07-crystals-stones/onyx" className="deity-link">
                  Onyx
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/jet" className="deity-link">
                  Jet
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/wormwood" className="deity-link">
                  Wormwood
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/belladonna" className="deity-link">
                  Belladonna
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
            Pluto is the Roman name for the underworld sovereign — a ruler of the
            unseen realm where the dead reside and where hidden wealth is stored.
            His name carries the sense of riches beneath the surface: the power in
            what is buried, both literally and psychologically.
          </p>
          <p>
            Though often blended with the Greek Hades, Pluto’s texture leans into
            the underworld as treasury and transformation chamber — the place where
            life’s illusions decompose and what remains is real.
          </p>
          <p>
            His mythic current teaches a hard truth: you cannot carry the old self
            into the next season untouched. Something must die. Something must be
            released. Something must be faced.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Pluto governs death and rebirth, shadow work, obsession and release,
            power dynamics, hidden motives, secrets, initiation, and the kind of
            transformation that changes you permanently.
          </p>
          <p>
            His current supports deep healing, cord-cutting, trauma integration,
            reclaiming personal power, breaking compulsions, and ending cycles that
            survive on your silence. Pluto doesn’t just remove what harms you — he
            reveals why you kept it.
          </p>
          <p>
            He also rules buried wealth: the gifts locked inside your hardest
            experiences — not because suffering is holy, but because truth makes
            you unbreakable when you stop lying to yourself.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Black stone, underground corridors, gates and keys, deep caves, bones,
            ash, obsidian mirrors, grave soil, and the quiet pressure of earth
            holding centuries of memory. His imagery is hidden structure — what
            supports everything you see but is never celebrated.
          </p>
          <p>
            Pluto speaks through intensity that refuses to be dismissed: recurring
            themes, recurring triggers, repeating power struggles, and the sense
            that something in you is demanding an honest reckoning.
          </p>
        </section>

        {/* PLUTO IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Pluto in Practice</h2>
          <p>
            Work with Pluto when you need real change: breaking an attachment,
            ending a pattern, confronting a fear that has been running your life,
            reclaiming your authority, and turning pain into wisdom without
            romanticizing it.
          </p>
          <p>
            He responds to courage, privacy, and honesty. Pluto does not reward
            surface affirmations that ignore the root. He answers when you are
            willing to look at the truth you have been circling — and choose the
            action that matches it.
          </p>
          <p>
            This is depth work. If you call Pluto, expect to be shown what is
            underneath your behavior: the bargain, the wound, the belief, the
            secret vow you made when you were trying to survive.
          </p>
          <p>
            <Link href="/grimoire/08-deities/pluto-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF PLUTO HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Pluto Has Chosen You</h2>
          <p>
            If Pluto has chosen you, your life stops letting you stay shallow. You may
            feel a growing intolerance for performative peace, hollow relationships,
            and any version of yourself built on self-betrayal. The mask starts to itch.
          </p>
          <p>
            His presence often arrives as intensity with purpose: a fixation that reveals
            a wound, an ending that forces growth, or a power struggle that exposes where
            you have been giving your authority away. You may feel called to shadow work,
            deep cleansing, therapy, banishing, protection, or the quiet rebuilding of
            your inner structure.
          </p>
          <p>
            Signs can appear through underworld imagery, repeated themes of death and
            rebirth, obsidian or black stone showing up in your path, vivid dreams of
            corridors, gates, keys, or a sense that something old is being removed from
            your life whether you are ready or not.
          </p>
          <p>
            Most of all, if Pluto has chosen you, you begin to value truth over comfort.
            You stop negotiating with what you already know. And you start choosing the
            kind of power that does not need permission.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Pluto are best kept simple and sincere: clean water, a candle
            lit in a darkened room, a written confession burned safely, or a stone
            placed as a marker of commitment to transformation. The underworld
            respects privacy more than spectacle.
          </p>
          <p>
            Acts of devotion are lived: telling the truth you’ve been avoiding,
            ending the cycle the first time you see it, refusing to feed obsession,
            and choosing boundaries that protect your future self.
          </p>
          <p>
            Pluto honors integrity in the dark — what you do when no one is watching,
            when you could easily return to the old pattern, and you choose not to.
          </p>
        </section>

        {/* WEALTH BENEATH THE SURFACE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Wealth Beneath the Surface</h2>
          <p>
            Pluto teaches that hidden does not mean worthless. Your depth is not a flaw.
            Your intensity is not a problem. What you feel strongly is often pointing to
            what you are meant to transform.
          </p>
          <p>
            Buried wealth is not always money. Sometimes it is the part of you that
            returns after you stop abandoning yourself.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Pluto moves through the Underworld King, the Initiator, the Shadow Alchemist,
            and the Keeper of Hidden Treasure — not as costumes, but as currents that
            demand truth and deliver transformation.
          </p>
          <p>
            In his highest expression, Pluto is power with integrity: the ability to face
            what is real, end what is false, and rebuild from a foundation that cannot be
            manipulated.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Pluto’s shadow can appear as obsession, control, paranoia, power games, or the
            inability to release what has already ended. When depth becomes fixation, the
            underworld becomes a trap instead of a temple.
          </p>
          <p>
            His corrective wisdom is surrender with discernment. You do not have to control
            the outcome to be safe. You have to control your integrity. Let what is dead
            stay dead. Let what is true survive without force.
          </p>
          <p>
            Balance with Pluto is learning to hold depth without becoming consumed by it —
            to transform without needing to punish yourself to prove the change is real.
          </p>
        </section>

        {/* PLUTO IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Pluto in the Modern World</h2>
          <p>
            Today, Pluto appears wherever people face what was hidden: trauma becoming
            truth, silence becoming testimony, patterns becoming visible, and power being
            reclaimed from systems and relationships that thrived on secrecy.
          </p>
          <p>
            His current lives in shadow integration, deep psychological work, generational
            healing, and the quiet revolutions that happen when someone finally says,
            “This ends with me.”
          </p>
          <p>
            Pluto does not promise comfort. He promises transformation that lasts.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Pluto teaches that the truth will not destroy you — but your refusal to face it
            might. The underworld is not punishment. It is the place where illusion dies so
            integrity can live. And integrity is the only kind of power that won’t turn on
            you later.
          </p>
          <p>
            Let the old pattern end cleanly. Let the secret be named. Let the obsession be
            understood, not fed. If you want rebirth, stop asking for a new life while
            clinging to the same chains. Pluto does not take things from you to be cruel.
            He takes what keeps you trapped.
          </p>
          <p>
            Choose depth that heals instead of depth that haunts. Choose honesty that rebuilds
            instead of honesty that wounds. And when you feel the pull to return to what broke
            you, remember this: what is real can survive the truth. What is false cannot. Pluto
            is not here to make you afraid of the dark. He is here to make you sovereign in it.
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