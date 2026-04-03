// app/grimoire/08-deities/saturn-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Saturn" subtitle="God of Time">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/saturn.png"
              alt="Saturn"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Discipline is not limitation.
              <br />
              It is devotion made visible.
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
    Saturn is the living law of time, structure, and consequence. He is the
    force that makes reality real: boundaries, limits, endurance, and the slow
    pressure that turns intention into legacy.
  </p>
  <p>
    His power is not dramatic. It is inevitable. Saturn does not ask what you
    want — he asks what you are willing to build, what you are willing to repeat,
    and what you are willing to outlast.
  </p>
  <p>
    Saturn teaches that discipline is not punishment. It is protection. The
    container that holds your magic steady. The standard that keeps your life
    from collapsing into moods, excuses, and half-promises.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/saturn-god/mythology"
      className="deity-link"
    >
      Explore Saturn’s Mythic Origins →
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
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
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/jet" className="deity-link">
                  Jet
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
            Saturn is the Roman current of Kronos — the Titan of time, harvest, and
            order through limitation. In Roman myth, Saturn carries the gravity of
            the old world: the rule of seasons, the structure of society, the laws
            that outlast kings.
          </p>
          <p>
            His mythology holds a tension that never goes away: time creates and time
            devours. Saturn teaches that everything has a cycle — and that refusing
            to respect cycles is how people lose themselves.
          </p>
          <p>
            Where other deities may offer inspiration or relief, Saturn offers
            consequence and maturation. He is the god who turns “someday” into
            “now,” not by force, but by reality.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Saturn governs time, discipline, responsibility, boundaries, endurance,
            work that compounds, and the standards that shape a life into something
            that can be trusted.
          </p>
          <p>
            His current supports commitment, long-term protection, financial and
            structural stability, wise restraint, and the ability to keep building
            even when motivation disappears. Saturn teaches you to become consistent
            without becoming bitter.
          </p>
          <p>
            He also governs consequence in its purest form: not punishment, but
            outcome. What you repeat becomes your reality. Saturn makes that visible.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Clocks, scythes, stone walls, old keys, mountains, iron gates, weathered
            wood, ring imagery, and the quiet authority of age. Saturn’s symbols are
            not romantic — they are reliable.
          </p>
          <p>
            Saturn speaks through delay that teaches, through obstacles that reveal
            your commitment, and through the moment you realize you cannot bypass the
            work without paying later.
          </p>
        </section>

        {/* SATURN IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Saturn in Practice</h2>
          <p>
            Work with Saturn when you need structure that holds: building discipline,
            repairing your foundation, strengthening boundaries, creating routine,
            protecting your time, and turning talent into actual results.
          </p>
          <p>
            He responds to effort, honesty, and repetition. Saturn does not reward
            performative ambition or goals built on fantasy. He answers when you are
            willing to do the boring part — the part that becomes legacy.
          </p>
          <p>
            This is maturity work. If you ask Saturn for stability, he will show you
            where you have been living on impulse. If you ask for protection, he will
            show you where you have been leaving the door open.
          </p>
          <p>
            <Link href="/grimoire/08-deities/saturn-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF SATURN HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Saturn Has Chosen You
          </h2>
          <p>
            If Saturn has chosen you, your life starts demanding integrity. You may
            feel a growing discomfort with chaos, inconsistency, and environments
            where people promise much and deliver little.
          </p>
          <p>
            His presence often arrives as pressure that refines: deadlines, reality
            checks, responsibilities that cannot be avoided, and moments that force you
            to grow up in the exact place you tried to stay uncommitted.
          </p>
          <p>
            Signs can appear through ring imagery, clocks, old architecture, mountains,
            sudden interest in routine and order, or repeating lessons around time,
            work, and boundaries. Saturn’s sign is rarely loud. It is persistent.
          </p>
          <p>
            Most of all, if Saturn has chosen you, your life begins rewarding the
            long game. When you commit, things stabilize. When you cut corners, reality
            responds immediately. Saturn teaches you to become someone you can rely on.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Saturn are practical and honest: clean water, a candle lit
            alongside a written vow, time spent in focused work, or a small stone
            placed as a symbol of stability. Saturn honors what is simple and true.
          </p>
          <p>
            Acts of devotion are lived: keeping your word, finishing what you start,
            protecting your time, maintaining your boundaries, and building a life that
            does not depend on crisis to function.
          </p>
          <p>
            Saturn honors consistency over intensity. If you want his current in your
            life, become the person who shows up again and again.
          </p>
        </section>

        {/* THE GIFT OF LIMITS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Gift of Limits</h2>
          <p>
            Saturn teaches that limits are not always cages. Often they are containers.
            A boundary is how you keep power from leaking. A routine is how you protect
            what matters from being swallowed by chaos.
          </p>
          <p>
            When your energy has a container, your magic becomes reliable. Saturn is the
            keeper of that container.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Saturn moves through the Elder, the Builder, the Judge of Consequence, and
            the Keeper of Standards — not as costumes, but as functions that forge
            strength through structure.
          </p>
          <p>
            In his highest expression, Saturn is discipline with dignity: protection
            without rigidity, authority without cruelty, and standards that make your
            life safer rather than smaller.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Saturn’s shadow can appear as rigidity, harsh self-judgment, scarcity
            thinking, and the belief that you must suffer to earn stability. When
            structure becomes a weapon, it stops being wisdom.
          </p>
          <p>
            His corrective teaching is mercy with discipline. You can be accountable
            without being cruel. You can hold standards without hating yourself into
            compliance.
          </p>
          <p>
            Balance with Saturn is learning to build steadily while still allowing
            life to be lived — routine as support, not prison.
          </p>
        </section>

        {/* SATURN IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Saturn in the Modern World</h2>
          <p>
            Today, Saturn appears wherever people stop chasing quick fixes and start
            building foundations: financial stability, sober boundaries, skill mastery,
            disciplined healing, and commitments that last longer than a mood.
          </p>
          <p>
            His current lives in the person who chooses the long road, the honest work,
            and the quiet repetition that changes everything. Saturn does not glamorize.
            He solidifies.
          </p>
          <p>
            When Saturn is present, excuses dry up and integrity becomes the only path
            that actually works.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Saturn teaches that power becomes real when it can be repeated. Inspiration
            is not enough. Desire is not enough. Even talent is not enough if it is not
            held inside structure. Saturn is the god who turns potential into proof.
          </p>
          <p>
            Let discipline become devotion. Let routine become protection. Let your
            boundaries stop being negotiations and start being standards. If something
            matters to you, build a container for it. Build a life where your goals are
            not constantly competing with your chaos.
          </p>
          <p>
            Choose what you will commit to for the long arc. Choose the standard you
            will live by even when no one is watching. And when you feel resistance,
            remember Saturn’s truth: the work is not there to punish you. The work is
            there to make you reliable. Saturn is not here to make you smaller. He is
            here to make you solid.
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