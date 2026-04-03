// app/grimoire/08-deities/neptune-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Neptune" subtitle="God of Mystery">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/neptune/neptune.png"
              alt="Neptune"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Not everything true is visible.
              <br />
              Some truths arrive as tides.
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
    Neptune is the living current of mystery — the force that dissolves hard
    edges so deeper truth can rise. He governs dreams, intuition, spiritual
    sensitivity, and the unseen currents that move through emotion, imagination,
    and collective energy.
  </p>
  <p>
    His power is not linear. Neptune teaches through atmosphere: the feeling you
    can’t explain, the longing that won’t leave, the symbolic message that lands
    in your sleep and changes your waking choices. He is the part of reality that
    refuses to be reduced to proof.
  </p>
  <p>
    Neptune also demands discernment. What dissolves can heal — or it can blur.
    He teaches you to tell the difference between divine guidance and escapism,
    between intuition and projection, between devotion and avoidance dressed as
    spirituality.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/neptune-god/mythology"
      className="deity-link"
    >
      Explore Neptune’s Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/09-neptune"
                  className="deity-link"
                >
                  Neptune
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/06-friday"
                  className="deity-link"
                >
                  Friday
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
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
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
                  href="/grimoire/07-crystals-stones/aquamarine"
                  className="deity-link"
                >
                  Aquamarine
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
                  href="/grimoire/07-crystals-stones/lapis-lazuli"
                  className="deity-link"
                >
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/pearl" className="deity-link">
                  Pearl
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
                <Link href="/grimoire/14-herbs/blue-lotus" className="deity-link">
                  Blue Lotus
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
            Neptune emerges through Roman myth as the god of waters and the vast, shifting
            powers they represent. Sea, spring, storm, and depth — the places humans cannot
            fully control, only learn to respect.
          </p>
          <p>
            He is often compared to Poseidon, yet Neptune’s current in practice is frequently
            felt as the “oceanic” principle: immersion, surrender, longing, vision, and the
            spiritual undertow that pulls you toward what is real beneath your performance.
          </p>
          <p>
            His stories remind you that not all power is visible. Some power is atmosphere.
            Some power is influence. Some power is the tide that changes the shore without
            asking permission.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Neptune governs intuition, dreams, trance, spirituality, imagination, compassion,
            sacred longing, and the dissolving of false identity. He strengthens the part of
            you that can feel truth even when you cannot yet explain it.
          </p>
          <p>
            His current supports dreamwork, divination, psychic sensitivity, spiritual cleansing,
            emotional healing, creative flow, and the release of rigid control. Neptune teaches
            surrender — not as collapse, but as trust in what is deeper than the surface.
          </p>
          <p>
            He also governs illusion. Neptune will magnify what you avoid. If your life is built
            on denial, he blurs it until you either wake up — or drift.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Oceans, fog, tides, shells, sea glass, stormwater, moonlit waves, wells, and the
            threshold between waking and sleep. His sacred imagery is soft but immense — the
            kind of presence that enters quietly and changes everything.
          </p>
          <p>
            Neptune speaks through symbols, music, dreams, and emotional weather. He is often
            felt in the body as a pull: a yearning toward meaning, toward beauty, toward the
            part of life that cannot be measured but still matters.
          </p>
        </section>

        {/* NEPTUNE IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Neptune in Practice</h2>
          <p>
            Work with Neptune when you need deeper guidance: dream clarity, intuition refinement,
            emotional cleansing, creative opening, spiritual reconnection, and the release of
            identities that were built to survive rather than live.
          </p>
          <p>
            He responds to sincerity and quiet devotion. Neptune does not respond well to
            spiritual performance, manipulation masked as “intuition,” or avoidance disguised as
            “trusting the universe.” His current amplifies whatever is true.
          </p>
          <p>
            Neptune’s work is often subtle at first. If you ask for guidance, you may receive it
            as a dream, a symbol, or a feeling that won’t leave — and then the task becomes
            discernment. You must choose what is real, not what is comforting.
          </p>
          <p>
            <Link href="/grimoire/08-deities/neptune-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF NEPTUNE HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Neptune Has Chosen You
          </h2>
          <p>
            If Neptune has chosen you, your inner world gets louder. Dreams become vivid and
            symbolic. Music hits differently. You may feel pulled toward water, toward solitude,
            toward spiritual study, toward the kind of beauty that makes you ache.
          </p>
          <p>
            His presence often arrives as sensitivity: you notice energy in rooms, you absorb
            emotional atmosphere, you feel what people aren’t saying. You may also begin to
            crave boundaries for the first time — because Neptune reveals just how porous you
            have been.
          </p>
          <p>
            Signs can appear through recurring ocean imagery, fog, storms, repeating dream symbols,
            sudden intuitive “knowing,” or moments when illusion falls away and you see a situation
            exactly as it is. Neptune’s message is rarely blunt, but it is persistent.
          </p>
          <p>
            Most of all, if Neptune has chosen you, your life begins asking for truth at the level
            of spirit. Not just “what works,” but what is aligned. Not just “what feels good,” but
            what is real.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Neptune can be quiet and oceanic: clean water, sea salt, a candle lit beside
            a bowl, music offered as devotion, or a vow spoken privately before sleep. The power is
            in sincerity and depth, not display.
          </p>
          <p>
            Acts of devotion can be non-material: keeping a dream journal, practicing discernment,
            honoring your boundaries, cleansing your energy, and refusing to romanticize what harms
            you. Neptune honors the practitioner who is willing to wake up.
          </p>
          <p>
            He also honors compassion with structure. Sensitivity without boundaries becomes
            self-erasure. Neptune teaches you to stay open without drowning.
          </p>
        </section>

        {/* ILLUSION & DISCERNMENT */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Illusion & Discernment</h2>
          <p>
            Neptune’s gift and danger are the same: dissolution. He dissolves what is rigid so truth
            can rise — but he can also dissolve your clarity if you refuse to ground what you receive.
          </p>
          <p>
            Discernment is devotion with Neptune. Ask: does this guidance lead to integrity or escape?
            Does this longing lead to healing or avoidance? Does this dream reveal truth — or feed a
            fantasy you use to survive?
          </p>
          <p>
            Neptune does not punish you for wanting beauty. He corrects you when you use beauty to
            avoid reality.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Neptune moves through the Mystic, the Dreamer, the Healer, and the Tide — not as costumes,
            but as currents that soften the ego and expand perception.
          </p>
          <p>
            In his highest expression, he is spiritual truth without delusion: compassion without
            self-erasure, intuition without fantasy, surrender without collapse.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Neptune’s shadow can appear as escapism, addiction to fantasy, spiritual bypassing, or
            porous boundaries that invite confusion and depletion. When sensitivity becomes identity,
            it can turn into suffering disguised as “depth.”
          </p>
          <p>
            His corrective wisdom is grounding. Drink water, sleep, eat, move your body, set a boundary,
            write down the truth. Neptune’s gifts become usable when you anchor them in reality.
          </p>
          <p>
            Balance with Neptune is learning to be open without drowning, mystical without losing your
            clarity, compassionate without abandoning yourself.
          </p>
        </section>

        {/* NEPTUNE IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Neptune in the Modern World</h2>
          <p>
            Today, Neptune appears wherever people hunger for meaning: spirituality, art, music, trance,
            healing, and the quiet rebellion of choosing soul over performance. He shows up when someone
            stops living only for what can be proven and starts living for what is true.
          </p>
          <p>
            He also shows up where illusion is profitable: misinformation, false promises, escapist
            narratives, and “magic” used to avoid responsibility. Neptune forces a choice: clarity or
            drift.
          </p>
          <p>
            When Neptune is present, reality becomes a tide. You can resist it and exhaust yourself —
            or you can learn to navigate it with discernment and devotion.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Neptune teaches that not everything important can be explained — but everything important
            can be felt. If you are called by his current, it is because your spirit is ready to stop
            living only on the surface. You are ready to listen beneath the noise.
          </p>
          <p>
            Let your dreams become language. Let your intuition become disciplined. Let your compassion
            become structured enough to protect you. Neptune does not ask you to abandon reality. He asks
            you to stop pretending reality is only what is visible.
          </p>
          <p>
            Choose what is true, even when fantasy is easier. Choose grounding, even when dissociation
            is tempting. Choose devotion that makes you clearer, not devotion that makes you disappear.
            Neptune is not here to drown you. He is here to teach you how to become ocean.
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