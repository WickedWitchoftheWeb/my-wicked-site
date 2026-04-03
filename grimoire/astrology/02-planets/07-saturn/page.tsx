// app/grimoire/astrology/02-planets/07-saturn/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SaturnPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Saturn">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn.png"
            alt="Saturn in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Saturn doesn&apos;t block you to punish you: he blocks you until you
              become strong enough to hold what you asked for.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Structure • Discipline • Time • Boundaries • Mastery
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Saturn in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Saturn is the architect of your chart: the force that shapes your
              life through time, responsibility, and consequence. Where Jupiter
              expands, Saturn defines. He rules structure, discipline, limits,
              boundaries, and the slow-building mastery that turns potential into
              something real.
            </p>

            <p>
              In astrology, Saturn reveals where you mature. It shows the area of
              life that requires patience, integrity, and effort: often through
              pressure. Saturn doesn&apos;t care about shortcuts. He cares about what
              lasts.
            </p>

            <p>
              Wherever Saturn sits in your chart: by sign, house, and aspect: is
              where life trains you. When Saturn is honored, you build a life that
              can hold your power. When Saturn is resisted, the same lesson
              repeats until you take responsibility for your own becoming.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Saturn</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Taskmaster • The Builder • The Keeper of Time
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Discipline, responsibility, boundaries, structure, endurance,
              mastery
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/earth">Earth</Link> • Foundation •
              Form
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* SATURNIAN CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Saturnian Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/08-eight">Eight</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Element</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/earth">Earth</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Day</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/timing/days-of-the-week/07-saturday">
                Saturday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>
            </p>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">Kronos, Saturn</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Polarity</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                Negative
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Energy</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                Masculine / Day / Yang
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Body &amp; Health</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/parts-of-the-magickal-body/21-teeth">
                teeth
              </Link>
              ,{" "}
              <Link href="/grimoire/parts-of-the-magickal-body/22-bones">
                bones
              </Link>
              , joints,{" "}
              <Link href="/grimoire/parts-of-the-magickal-body/26-skin">
                skin
              </Link>
              , long-term vitality, recovery through routine
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/tarot/major-arcana/21-the-world">
                The World
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/onyx">Onyx</Link>,{" "}
              <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>,{" "}
              <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                Smoky Quartz
              </Link>
              , Black Tourmaline
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/lead">Lead</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/mugwort">Mugwort</Link>, Cypress,
              Patchouli, <Link href="/grimoire/herbs/myrrh">Myrrh</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/13-black">Black</Link>,{" "}
              <Link href="/grimoire/colors/12-grey">Grey</Link>, Brown
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

     {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn-symbol-colored.png"
      alt="Saturn Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Saturn is the principle of structure. Where the Sun defines purpose,
      the Moon defines experience, Mercury defines understanding, Venus defines
      value, Mars defines action, and Jupiter defines meaning, Saturn governs
      reality. It is the force that sets limits, establishes form, and demands
      accountability over intention.
    </p>

    <p>
      This is the archetype of discipline. Saturn rules time, responsibility,
      effort, and the slow construction of mastery. In the human psyche, Saturn
      is the inner authority: the part of consciousness that understands cause
      and consequence and accepts that growth requires patience, commitment,
      and restraint.
    </p>

    <p>
      In the cosmic body, Saturn regulates containment. It stabilizes expansion,
      sets boundaries, and teaches the universe how to endure. In the human
      body, it performs the same role. Saturn governs bones, teeth, skin, and
      the skeletal framework that holds everything in place long enough to
      mature.
    </p>

    <p>
      Saturn is the law of consequence. It asks not “What do I believe?” but
      “What am I willing to sustain?” This is why Saturn imbalance often
      manifests as fear, rigidity, self-doubt, or exhaustion. When structure is
      avoided, chaos follows. When it becomes absolute, life hardens into
      deprivation.
    </p>

    <p>
      Wherever Saturn sits in your chart, that is where life demands maturity.
      It marks the area where lessons are learned through effort, where limits
      must be respected, and where authority is earned rather than granted. To
      tend Saturn is to tend your relationship with time: to build slowly, to
      honor commitment, and to recognize that true freedom is forged through
      responsibility.
    </p>
  </div>
</section>

<div className="grimoire-divider" />
        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

      <div className="grimoire-image">
  <img
    src="PASTE-YOUR-WITCHCRAFT-ART-IMAGE-HERE"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Saturn in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Saturn is the keeper of structure and restraint. Saturnian
      magick governs boundaries, discipline, protection through limitation, and
      the forces that define what must endure. This is not gentle or expansive
      energy. Saturn works slowly, deliberately, and with permanence in mind.
    </p>

    <p>
      Working with Saturn means working with commitment and consequence. This
      is the current used for binding spells, warding, banishing long-term
      influences, karmic work, and magick that reinforces personal authority.
      Saturnian workings do not provide quick results, but they create outcomes
      that last and resist disruption.
    </p>

    <p>
      Saturn teaches responsible containment. When limits are avoided, energy
      scatters and weakens. When limits are honored, power stabilizes and
      matures. Track Saturn through transits to understand when it is time to
      solidify foundations, release what cannot be sustained, and accept the
      lessons required for lasting protection and mastery.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Binding and restriction spells, long-term protection and warding,
        banishing persistent influences, karmic and ancestral work, authority
        and boundary reinforcement, endurance and stability magick
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Structure, discipline, boundaries, authority, responsibility,
        endurance, limitation, time
      </p>
    </div>

    <Link
      href="PASTE-YOUR-SATURN-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Saturn in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn-art.png"
            alt="Saturn artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

       {/* DIGNITIES */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Dignities</h2>

  {/* DOMICILE (MODERN) */}
  <article className="grimoire-article">
    <p className="grimoire-label">Domicile (Modern)</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Architect of Time</p>
    <p>
      In Capricorn, Saturn is at home in the realm of consequence. Time becomes
      tangible here: measured in effort, earned authority, and structures that
      must be maintained long after the initial spark fades. This is Saturn in
      its most natural habitat, where discipline is not punishment, but a
      language the world understands.
      <br />
      <br />
      This dignity strengthens endurance, responsibility, and the ability to
      build something real. Saturn in Capricorn can delay gratification without
      resentment and can tolerate pressure without collapsing. It knows how to
      prioritize, how to commit, and how to shape life into something stable
      through repetition and restraint.
      <br />
      <br />
      The shadow lies in hardness. When control becomes safety, the heart can
      be sealed in the name of survival. Overwork, rigidity, and self-denial
      can masquerade as maturity. The lesson of this domicile is not to
      abandon structure, but to remember why it exists: to support life, not
      to replace it.
      <br />
      <br />
      When Saturn is in domicile, time becomes a teacher you can trust. Every
      step counts, and what is built slowly becomes strong enough to last.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn">
        Saturn Placed in the Capricorn Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/10-saturn-in-capricorn-transit">
        Saturn Transiting the Capricorn Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DOMICILE (TRADITIONAL) */}
  <article className="grimoire-article">
    <p className="grimoire-label">Domicile (Traditional)</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Architect of the Future</p>
    <p>
      In Aquarius, Saturn builds for what comes next. This is structure applied
      to systems, ideas, and collective reality. Saturn here is less concerned
      with personal status and more concerned with what can hold a society
      together: rules that serve a purpose, boundaries that create fairness,
      and frameworks that outlast the individual.
      <br />
      <br />
      This dignity strengthens objectivity, long-range planning, and the
      capacity to endure isolation in the name of conviction. Saturn in
      Aquarius can detach enough to see patterns clearly and can commit to
      principles even when they are unpopular. It understands the slow work of
      reform and the discipline required to bring vision into form.
      <br />
      <br />
      The shadow lies in coldness or rigidity of mind. Detachment can become
      distance, and principles can become walls. The lesson is humanity: to
      remember that systems exist to serve living beings, not to control them.
      <br />
      <br />
      When Saturn is in domicile, the future becomes buildable. Responsibility
      expands beyond the self and becomes a commitment to what can endure for
      the collective.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn">
        Saturn Placed in the Aquarius Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/11-saturn-in-aquarius-transit">
        Saturn Transiting the Aquarius Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Judge in Sacred Balance</p>
    <p>
      In Libra, Saturn is elevated through integrity. Discipline becomes
      fairness, and structure becomes relationship. This exaltation teaches
      Saturn how to hold boundaries without cruelty, and how to create order
      that supports cooperation rather than domination.
      <br />
      <br />
      This dignity strengthens discernment, responsibility in partnership, and
      the ability to make difficult choices with clarity. Saturn in Libra can
      weigh consequences, honor agreements, and uphold principles that create
      stability between people. Commitment becomes an ethical practice rather
      than a burden.
      <br />
      <br />
      The shadow lies in indecision or external validation. When balance is
      mistaken for approval, boundaries can soften into people-pleasing. The
      lesson is authority: to choose what is right, not what is easiest to
      maintain socially.
      <br />
      <br />
      When Saturn is exalted, justice becomes a form of structure. What is
      built here is not only durable, but fair.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn">
        Saturn Placed in the Libra Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/07-saturn-in-libra-transit">
        Saturn Transiting the Libra Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT (MODERN) */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment (Modern)</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Wall Around the Home</p>
    <p>
      In Cancer, Saturn struggles to soften. The need for structure collides
      with the need for comfort, and protection can become restriction. Here,
      responsibility is often emotional, tied to family roles, memory, and the
      fear of vulnerability.
      <br />
      <br />
      This placement can create guardedness and self-containment. Needs may be
      minimized, intimacy may feel unsafe, and caretaking may be performed out
      of duty rather than ease. Saturn in Cancer often learns early that
      security must be built, not assumed.
      <br />
      <br />
      Yet this detriment offers profound resilience. When matured, Saturn in
      Cancer can create real emotional safety through consistency and
      commitment. The lesson is permeability: to build boundaries that protect
      without isolating and to allow nourishment without shame.
      <br />
      <br />
      Saturn in detriment teaches that home is not only a place. It is a
      structure of trust that must be built with care.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/04-cancer-saturn">
        Saturn Placed in the Cancer Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/04-saturn-in-cancer-transit">
        Saturn Transiting the Cancer Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT (TRADITIONAL) */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment (Traditional)</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Crown Under Constraint</p>
    <p>
      In Leo, Saturn restricts radiance. The sign of visibility, pride, and
      creative selfhood becomes a place where expression feels controlled,
      delayed, or burdened by responsibility. Here, the desire to be seen may
      clash with fear of judgment or fear of failing publicly.
      <br />
      <br />
      This placement can produce humility, discipline in leadership, and the
      ability to carry authority without ego. However, it can also create
      self-doubt, reluctance to take up space, or a sense that joy must be
      earned before it is allowed.
      <br />
      <br />
      The lesson is sovereignty. Saturn in Leo must learn that confidence is
      not entitlement, but permission. Creative power requires structure, but
      structure must not become a cage.
      <br />
      <br />
      When Saturn is in detriment, the work is to lead without needing
      approval, to create without needing perfection, and to let the crown fit
      without crushing the heart beneath it.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn">
        Saturn Placed in the Leo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/05-saturn-in-leo-transit">
        Saturn Transiting the Leo Zodiac →
      </Link>
    </p>
  </article>

  <article className="grimoire-article">
  <p className="grimoire-label">Fall</p>

  <p className="grimoire-section-subtitle">No Planetary Fall</p>
  <p>
    Saturn holds no traditional planetary fall. As the planet of structure,
    time, and consequence, Saturn is capable of expressing its core principles
    in every sign, even when challenged. While certain placements may feel more
    demanding or restrictive, Saturn does not lose its essential authority or
    function in any sign of the zodiac.
  </p>
  <p>
    Rather than weakening Saturn, difficult placements emphasize its lessons
    more sharply. Discipline, responsibility, and endurance remain intact,
    though they may be experienced through pressure, delay, or increased
    effort. Saturn&apos;s wisdom is not diminished by environment; it is refined
    by it.
  </p>
</article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Saturn</h2>

  <p className="grimoire-label">
    Cronus, Lord of Time
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn-myth-art.jpg"
      alt="Rhea offers Cronus a stone wrapped in swaddling clothes"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Cronus, Leader of the Titans. Rhea offers to Cronus a stone wrapped in swaddling clothes
      in place of the newborn Zeus. Red-figure ceramic vase, c. 460–450 BC,
      Metropolitan Museum of Art.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Saturn is rooted in Cronus, the Titan who ruled during
      the Golden Age before the rise of the Olympian gods. Cronus governed time,
      cycles, and the inevitable passage of generations. His reign was marked
      by order and abundance, but also by fear of succession, leading him to
      consume his own children in an attempt to prevent the future from
      overthrowing him.
    </p>

    <p>
      Cronus represents the tension between preservation and progress. His
      myths speak to the cost of resisting change and the consequences of
      clinging to control. Through Cronus, Saturn became associated with
      limitation, endurance, and the sobering awareness that all things are
      shaped and tested by time.
    </p>

    <p className="grimoire-label">
      Saturn and the Weight of Responsibility
    </p>

    <p>
      In Roman mythology, Cronus was known as Saturn, whose image softened and
      matured into a god of structure, agriculture, and social order. Saturn
      presided over sowing and harvest, emphasizing patience, labor, and the
      rewards earned through sustained effort. He was honored as a teacher of
      discipline rather than a tyrant of fear.
    </p>

    <p>
      Through Saturn, the planet came to symbolize boundaries, accountability,
      and the wisdom gained through hardship. Saturn in myth is not punishment,
      but refinement. As both Cronus and Saturn, this archetype teaches that
      mastery is forged through time, and that true authority comes from
      responsibility willingly carried.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

       {/* SATURN PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Saturn Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/saturn/saturn-symbol.png"
      alt="Saturn Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/01-aries-saturn">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Weight of Fire</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Restriction placed on instinct and initiative</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Permission to move slowly and build confidence</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Measured action and earned courage</p>
      <p className="grimoire-label-small">Do</p>
      <p>Learn patience through disciplined effort</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Rush growth out of frustration</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Strength grows when impulse is refined</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/01-aries-saturn">
          Saturn in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/02-taurus-saturn">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Keeper of Foundations</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility rooted in stability and endurance</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Security, consistency, long term assurance</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Slow building and tangible progress</p>
      <p className="grimoire-label-small">Do</p>
      <p>Commit to what can truly last</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Resist change out of fear alone</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let patience become your greatest asset</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/02-taurus-saturn">
          Saturn in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/03-gemini-saturn">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Discipline of Thought</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Structured thinking and mental accountability</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Clarity, mental order, purposeful communication</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Focus, learning with intention, clear language</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build knowledge carefully and responsibly</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dismiss ideas without examination</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let curiosity mature into wisdom</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/03-gemini-saturn">
          Saturn in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/04-cancer-saturn">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wall Around the Home</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Emotional responsibility and protective boundaries</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Safety, emotional control, trusted structures</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Familiar systems and clear roles</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create security through consistency</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Harden emotionally to avoid vulnerability</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let boundaries protect without isolating</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/04-cancer-saturn">
          Saturn in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Crown Under Constraint</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility tied to leadership and visibility</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect earned through integrity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Purposeful authority and steady self expression</p>
      <p className="grimoire-label-small">Do</p>
      <p>Lead with humility and discipline</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Seek validation without substance</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>True confidence grows through responsibility</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn">
          Saturn in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/06-virgo-saturn">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Discipline of Responsibility</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Accountability through service and refinement</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, order, usefulness</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine, precision, improvement</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let responsibility sharpen your skill</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse self worth with productivity</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Rest is part of mastery</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/06-virgo-saturn">
          Saturn in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Judge in Sacred Balance</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility through fairness and ethics</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Justice, accountability, mutual respect</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Clear agreements and ethical standards</p>
      <p className="grimoire-label-small">Do</p>
      <p>Uphold balance even when it is difficult</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Avoid judgment to escape responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Integrity strengthens every bond</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn">
          Saturn in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/08-scorpio-saturn">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Discipline of Control</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility over power and intensity</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Trust, boundaries, emotional sovereignty</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Depth, privacy, earned authority</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use power with accountability</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Control out of fear</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Mastery begins with self governance</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/08-scorpio-saturn">
          Saturn in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/09-sagittarius-saturn">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Weight of Belief</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility toward truth and meaning</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, philosophical grounding</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Structured belief systems</p>
      <p className="grimoire-label-small">Do</p>
      <p>Live your truth with accountability</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Cling to belief without examination</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Wisdom grows through lived experience</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/09-sagittarius-saturn">
          Saturn in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Architect of Time</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Mastery through discipline and endurance</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Achievement, structure, earned respect</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Long term goals and measurable progress</p>
      <p className="grimoire-label-small">Do</p>
      <p>Commit fully to your responsibility</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Measure worth only by outcomes</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let time become your ally</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn">
          Saturn in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Architect of the Future</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Responsibility toward progress and reform</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, innovation, collective structure</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Systems, reform, shared vision</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build change that lasts</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Reject structure in the name of freedom</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let responsibility support innovation</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn">
          Saturn in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/12-pisces-saturn">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Saturn{" "}
          <span className="grimoire-glyph">{"\u2644\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Boundary of the Infinite</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Form given to the formless</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Spiritual grounding and containment</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Ritual, boundaries, sacred structure</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create limits that protect your sensitivity</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dissolve responsibility into fantasy</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Structure allows spirit to endure</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/07-saturn-placements/12-pisces-saturn">
          Saturn in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* SATURN CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Saturn Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Saturn governs structure, responsibility, discipline, and limitation. In
      planetary astrology, Saturn describes where effort is required, where
      boundaries exist, and how maturity, accountability, and mastery are
      developed over time.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* SATURNIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 29 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 2 to 3 years in each zodiac sign.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Responsibility, discipline, boundaries, commitment, endurance, and
      long term growth through effort and experience.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY SATURN FEELS WEIGHTY AND DEFINING */}
  <h3 className="grimoire-subheading">Why Saturn Feels Weighty and Defining</h3>

  <div className="grimoire-text">
    <p>
      Saturn moves slowly enough for its influence to shape long term patterns
      of development. Its transits mark periods of testing, consolidation, and
      restructuring that unfold over years rather than weeks or months.
    </p>

    <p>
      Rather than offering quick rewards, Saturn emphasizes consequence and
      durability. Saturn transits often coincide with increased responsibility,
      clearer limits, and the gradual construction of stability and authority.
    </p>
  </div>
</section>

 <div className="grimoire-divider" />
       
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements">
                Saturn Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits">
                Saturn Transits
              </Link>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/astrology/02-planets"
              className="grimoire-footer-link"
            >
              ← Back to Planets
            </Link>
          </p>

          <p>
            <Link href="/grimoire/astrology" className="grimoire-footer-link">
              ← Back to The Astrology Grimoire
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}