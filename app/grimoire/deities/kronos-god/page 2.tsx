// app/grimoire/08-deities/kronos-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Kronos" subtitle="God of Time">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/kronos/kronos.png"
              alt="Kronos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Time does not punish.
              <br />
              It reveals.
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
    Kronos is the living current of time, consequence, and earned power. He is
    not “patience” as a mood — he is patience as law: the slow architecture of
    reality that rewards what is built correctly and collapses what is built on
    avoidance.
  </p>
  <p>
    His energy is discipline, structure, and the truth that nothing becomes
    sovereign without repetition. Kronos teaches that mastery is not a spark.
    It is a practice.
  </p>
  <p>
    He is also a mirror of cycles: what you refuse to face returns in another
    form, in another season, until you finally meet it with integrity.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/kronos-god/mythology"
      className="deity-link"
    >
      Explore Kronos’ Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/07-saturn"
                  className="deity-link"
                >
                  Saturn
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
                ,{" "}
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
                <Link href="/grimoire/05-colors/11-grey" className="deity-link">
                  Grey
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
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
                <Link href="/grimoire/15-metals/lead" className="deity-link">
                  Lead
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/obsidian" className="deity-link">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/hematite" className="deity-link">
                  Hematite
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/onyx" className="deity-link">
                  Onyx
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/quartz/smoky-quartz"
                  className="deity-link"
                >
                  Smoky Quartz
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cinnamon" className="deity-link">
                  Cinnamon
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
            Kronos is a Titan of Greek myth associated with rulership, cycles, and the
            relentless power of time. His stories are filled with fear of replacement,
            the hunger to control the future, and the inevitability of consequence.
          </p>
          <p>
            In myth, his rise and fall teach the same lesson again and again: you cannot
            outrun what you refuse to integrate. Time will bring it back.
          </p>
          <p>
            Kronos is not here to comfort the ego. He is here to teach reality: what is
            built on fear collapses, and what is built on integrity endures.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Kronos governs time, discipline, order, consequence, endurance, tradition,
            and the slow transformation that happens through repetition. He strengthens
            boundaries, structure, and long-term thinking.
          </p>
          <p>
            His current supports study, mastery, routine, and the ability to keep going
            when motivation fades. Kronos does not bless what is performed once. He blesses
            what is practiced.
          </p>
          <p>
            He also teaches timing: when to act, when to wait, when to commit, and when to
            stop feeding what will never return results.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            The scythe, the hourglass, the stone, the mountain, the boundary line, the
            calendar, and the weight of winter. His imagery speaks to reality as a system:
            what is done becomes fate.
          </p>
          <p>
            Kronos’s symbols point to a single truth: time does not punish. It reveals.
            It shows what you built, what you avoided, and what you are actually committed to.
          </p>
        </section>

        {/* KRONOS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kronos in Practice</h2>
          <p>
            Work with Kronos when you need structure that lasts: discipline, consistency,
            long-term planning, building skills, strengthening boundaries, and breaking
            cycles of self-sabotage. He is excellent for study, business foundations, and
            any path that requires mastery over time.
          </p>
          <p>
            Kronos responds to effort, integrity, and repetition. He does not respond well
            to shortcuts, self-deception, or asking for results without work. If you call
            Kronos, be willing to meet your life like a craft.
          </p>
          <p>
            His energy is sober and stabilizing. It does not hype you. It steadies you.
            It teaches you to keep promises — especially the ones you make to yourself.
          </p>
          <p>
            <Link href="/grimoire/08-deities/kronos-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF KRONOS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Kronos Has Chosen You
          </h2>
          <p>
            If Kronos has chosen you, your life begins to demand accountability. You may
            suddenly see where time is being wasted, where routines are leaking energy,
            and where your future is being shaped by avoidance.
          </p>
          <p>
            His presence often arrives through pressure that is productive: a pull toward
            structure, a desire to simplify, the urge to build habits, and an intolerance
            for excuses that used to feel normal.
          </p>
          <p>
            Signs may appear through themes of clocks, deadlines, calendars, stones, winter
            imagery, or repeated lessons that return until you finally learn them.
          </p>
          <p>
            Most of all, if Kronos has chosen you, your life begins to reward consistency.
            The moment you commit, the foundation strengthens. The moment you drift, the
            consequences clarify.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Kronos can be simple and disciplined: clean water, a candle lit on
            Saturdays, incense, or a vow spoken and kept. The offering he respects most is
            your consistency.
          </p>
          <p>
            Acts of devotion can be non-material: keeping a routine, honoring boundaries,
            studying with discipline, paying debts, finishing what you start, and living as
            someone who respects time.
          </p>
          <p>
            Kronos responds to reality-based devotion: the kind that becomes structure, not
            just intention.
          </p>
        </section>

        {/* KRONOS VS SATURN */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kronos vs Saturn</h2>
          <p>
            Kronos and Saturn are closely linked currents. Kronos carries the Greek Titan
            texture — cycles, consequence, and the fear of replacement. Saturn carries the
            Roman texture — law, duty, time, and social structure. In practice, both
            emphasize discipline and endurance.
          </p>
          <p>
            If you work with both, keep the intention clean: Kronos for cycle and consequence
            work, Saturn for structured discipline and long-term mastery.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Kronos moves through the Builder, the Keeper of Time, the Law of Consequence, and
            the Master of Repetition — not as roles to perform, but as currents that teach
            sovereignty through structure.
          </p>
          <p>
            In his highest expression, he is discipline with dignity: patience that produces,
            boundaries that protect, and time used as a sacred tool.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Kronos’s shadow can appear when discipline becomes rigidity — when structure becomes
            control, when responsibility becomes punishment, or when fear of the future becomes
            hoarding of the present.
          </p>
          <p>
            His corrective wisdom is simple: structure must serve life. Time is meant to build
            you, not cage you.
          </p>
        </section>

        {/* KRONOS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kronos in the Modern World</h2>
          <p>
            Today, Kronos appears wherever someone chooses mastery over mood. He shows up in
            disciplined study, recovery work, business foundations, skill-building, and the
            steady choice to live as someone who keeps promises.
          </p>
          <p>
            He reminds you that time is not your enemy. It is your teacher.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Kronos teaches that time is not neutral. It consumes what is weak, exposes what is
    unprepared, and eventually devours everything that refuses to evolve. He is not the
    enemy of growth — he is the law that enforces it.
  </p>
  <p>
    His myth is a warning and a mirror: power that clings, hoards, or attempts to stop
    the cycle will be overtaken by the very future it fears. What is meant to endure must
    mature. What refuses to change will be replaced.
  </p>
  <p>
    Walk with Kronos when you are ready to take responsibility for your time, your
    patterns, and your legacy. He asks you to look honestly at what you are building —
    and whether it can withstand the passage of years.
  </p>
  <p>
    Discipline is his blessing. Structure is his protection. Through him, you learn that
    mastery is not control over others, but stewardship over what you create and what you
    allow to continue.
  </p>
  <p>
    Time will move whether you are ready or not. Kronos offers you the choice to move
    consciously — to shape what comes next instead of being consumed by it.
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