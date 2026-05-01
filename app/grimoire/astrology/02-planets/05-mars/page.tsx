// app/grimoire/astrology/02-planets/04-mars/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MarsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mars">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars.png"
            alt="Mars in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Mars isn&apos;t here to be liked: he&apos;s here to be obeyed by the
              part of you that knows it was made to move.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Action • Drive • Courage • Desire • Conflict
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Mars in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Mars is the engine of your chart: the force that initiates,
              pursues, protects, and fights for what matters. Where the Sun is
              identity and the Moon is need, Mars is will in motion.
            </p>

            <p>
              Mars governs desire, stamina, anger, courage, and survival
              instincts. It describes how you respond to conflict, how you
              assert boundaries, and what happens when something stands in your
              way.
            </p>

            <p>
              Wherever Mars sits in your chart is where you are learning power:
              not dominance, but decisive action rooted in clarity and
              self-trust.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Mars</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Warrior • The Initiator • The Spark of Action
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Drive, desire, assertion, courage, conflict, stamina
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/fire">Fire</Link> • Heat • Momentum
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* MARTIAN CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Martian Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/09-nine">Nine</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Element</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/fire">Fire</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Day</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/timing/days-of-the-week/03-tuesday">
                Tuesday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>{" "}
              &amp;{" "}
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                Scorpio
              </Link>
            </p>
            <p className="grimoire-correspondence-value">
              Exalted in{" "}
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>{" "}
              (traditional)
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">Mars • Ares</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Polarity</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                Positive
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
              Head, reproductive organs, inflammation, adrenaline response,
              physical energy and recovery
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/tarot/major-arcana/16-the-tower">
                The Tower
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              Carnelian, Red Jasper, Garnet, Bloodstone
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">Iron</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              Ginger, Cayenne, Garlic, Nettle
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">Red, Black</p>
          </div>
        </section>

        <div className="grimoire-divider" />

       {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars-symbol-colored.png"
      alt="Mars Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Mars is the principle of initiation. Where the Sun defines purpose, the
      Moon defines experience, Mercury defines understanding, and Venus defines
      value, Mars governs action. It is the force that says now, the spark that
      turns intention into movement and desire into decision.
    </p>

    <p>
      This is the archetype of will. Mars rules drive, courage, and the capacity
      to assert oneself into the world. It governs how energy is mobilized, how
      boundaries are defended, and how conflict is met. In the human psyche,
      Mars is the survival engine: instinct, impulse, ambition, and the raw
      momentum that pushes life forward.
    </p>

    <p>
      In the cosmic body, Mars regulates force. It activates, cuts, and
      accelerates, teaching the universe how to separate, compete, and
      transform pressure into motion. In the human body, it performs the same
      role. Mars rules physical energy, muscle, heat, adrenaline, and the
      fight response that mobilizes the body under stress.
    </p>

    <p>
      Mars is the law of assertion. It asks not “What do I feel?” or “What do I
      value?” but “What am I willing to act on?” This is why Mars imbalance
      often manifests as anger, burnout, aggression, or paralysis. When action
      is suppressed, energy turns inward and corrodes. When it is uncontained,
      it burns everything in its path.
    </p>

    <p>
      Wherever Mars sits in your chart, that is where your power demands
      expression. It marks how you pursue desire, confront obstacles, and claim
      agency over your life. To tend Mars is to tend your capacity for decisive
      action: to move with intention, to honor your limits, and to wield force
      as a tool rather than a weapon.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

       <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Mars in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Mars is the keeper of force and activation. Martian magick
      governs courage, protection, conflict, and the raw current that turns
      intention into decisive action. This is the fire that moves first. It
      clears obstacles, defends boundaries, and brings stagnant situations back
      into motion.
    </p>

    <p>
      Working with Mars means working with will as a magickal engine. This is
      the current used for protection spells, banishing, cord cutting, justice
      work, motivation, and strength building. Martian workings are direct and
      uncompromising. They do not ask for permission. They establish terms.
    </p>

    <p>
      Mars teaches clean assertion. When anger is unfocused, it becomes
      destruction. When will is unclaimed, it becomes resentment. Martian
      magick asks for precision: know what you are fighting for, know what you
      are ending, and know what you are willing to sustain after the spell is
      complete.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Protection and warding, banishing and cleansing, cord cutting, justice
        and reversal work, courage and confidence spells, motivation and energy
        activation
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Will, heat, strength, boundaries, action, courage, conflict, momentum
      </p>
    </div>

    <Link
      href="PASTE-YOUR-MARS-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Mars in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />


   <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars-art.png?updatedAt=1770444644257"
            alt="Mars artwork"
            className="grimoire-img"
          />
        </div>



      {/* DIGNITIES */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Dignities</h2>

  {/* DOMICILE */}
  <article className="grimoire-article">
    <p className="grimoire-label">Domicile</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
    </p>
    <p className="grimoire-callout">The Warrior at Home</p>
    <p>
      In Aries, Mars acts without hesitation. This is raw, instinctive force,
      unburdened by doubt or delay. Action is immediate, fueled by courage,
      desire, and the need to assert existence through movement.
      <br />
      <br />
      This dignity strengthens initiative, confidence, and the ability to
      confront challenges head on. Mars in Aries does not overthink risk. It
      trusts instinct and learns through action, discovering strength by
      testing it against the world.
      <br />
      <br />
      Yet this immediacy can burn quickly. Impatience, impulsivity, and
      unnecessary conflict may arise if force is not tempered by awareness.
      The lesson is direction: to aim power intentionally rather than scatter
      it through reaction.
      <br />
      <br />
      When Mars is in domicile, action becomes self-defining. Courage is not a
      performance, but a natural response to being alive.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/05-mars-placements/01-aries-mars">
        Mars Placed in the Aries Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/05-mars-transits/01-mars-in-aries-transit">
        Mars Transiting the Aries Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
    </p>
    <p className="grimoire-callout">The Strategic Warrior</p>
    <p>
      In Capricorn, Mars is disciplined. Force becomes deliberate, measured,
      and directed toward long-term objectives rather than immediate release.
      Action here is not reactive. It is calculated.
      <br />
      <br />
      This exaltation strengthens endurance, resilience, and the ability to
      sustain effort over time. Mars in Capricorn understands hierarchy,
      consequence, and timing. Power is conserved until it can be applied
      effectively.
      <br />
      <br />
      The shadow of this placement lies in rigidity. When ambition eclipses
      emotion, action can become harsh or joyless. The lesson is balance: to
      allow humanity alongside mastery.
      <br />
      <br />
      When Mars is exalted, strength becomes reliable. Victory is earned
      through patience, strategy, and unwavering commitment.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars">
        Mars Placed in the Capricorn Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/05-mars-transits/10-mars-in-capricorn-transit">
        Mars Transiting the Capricorn Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
    </p>
    <p className="grimoire-callout">The Friction Between Fire and Earth</p>
    <p>
      In Taurus, Mars encounters resistance. Action slows, desire meets
      inertia, and momentum is interrupted by the need for stability and
      security. Force here must push against weight.
      <br />
      <br />
      This placement can struggle with delayed action, frustration, or
      stubborn persistence that refuses to adapt. Anger may build slowly and
      release suddenly, creating tension between patience and impulse.
      <br />
      <br />
      Yet this detriment carries stamina. Once Mars commits in Taurus, effort
      becomes unyielding. The lesson is flexibility: to move when movement is
      needed, not only when comfort allows it.
      <br />
      <br />
      Mars in detriment teaches that strength is not only about endurance, but
      about knowing when to shift rather than dig in.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars">
        Mars Placed in the Taurus Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/05-mars-transits/02-mars-in-taurus-transit">
        Mars Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
    </p>
    <p className="grimoire-callout">The Armor in the Ocean</p>
    <p>
      In Cancer, Mars struggles to express force directly. Action is filtered
      through emotion, memory, and protective instinct. Anger may turn inward
      or emerge defensively rather than assertively.
      <br />
      <br />
      This fall placement can produce hesitation, passive resistance, or
      emotional reactivity. Energy fluctuates with mood, and action may feel
      unsafe unless emotional security is established first.
      <br />
      <br />
      Yet this placement carries fierce protectiveness. Mars in Cancer will
      fight relentlessly for what it loves. Strength is drawn from loyalty,
      attachment, and the instinct to defend the vulnerable.
      <br />
      <br />
      The lesson here is integration: to allow emotion to inform action
      without letting it immobilize will. When courage and feeling align,
      Mars regains its power.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/05-mars-placements/04-cancer-mars">
        Mars Placed in the Cancer Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/05-mars-transits/04-mars-in-cancer-transit">
        Mars Transiting the Cancer Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Mars</h2>

  <p className="grimoire-label">
    Ares, the Heat of War
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars-myth-art.jpg"
      alt="Ares Borghese, Roman marble after a Greek original"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      The Ares Borghese in the Louvre (Ma 866)
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Mars is rooted in Ares, the god of war in its most
      immediate form: conflict, fury, and the raw surge of combat. Ares was not
      celebrated as a strategist or honored as a ruler. Instead, he embodied
      the chaos of battle and the volatility of passion when it turns violent.
      His presence marked moments when restraint failed and survival instincts
      took over.
    </p>

    <p>
      Yet Ares was not only destruction. He represented courage, stamina, and
      the willingness to engage when something must be confronted. His myths
      reveal a force that is often misunderstood: action that is necessary,
      desire that is fierce, and the part of the psyche that refuses to be
      passive. Through Ares, Mars became associated with impulse, pursuit, and
      the intensity it takes to protect what matters.
    </p>

    <p className="grimoire-label">
      Mars and the Discipline of Power
    </p>

    <p>
      In Roman mythology, Ares evolved into Mars, whose identity shifted from
      reckless conflict to purposeful strength. Mars became a guardian of the
      state, a symbol of courage with structure, and a force that defended
      boundaries and ensured continuity. He was tied to agriculture as well as
      warfare, linking Mars to labor, endurance, and the protective power
      required to sustain life.
    </p>

    <p>
      Through Mars, the planet came to represent directed will, decisive action,
      and the drive to claim space in the world. Mars in myth is not violence
      for its own sake: it is energy given aim. As both Ares and Mars, this
      archetype teaches that power must be handled with intention, and that
      true strength is not only the ability to strike, but the ability to
      choose what you fight for.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

       {/* MARS PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Mars Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mars/mars-symbol.png"
      alt="Mars Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/01-aries-mars">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Warrior at Home</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Direct drive and fast action</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Challenge, momentum, autonomy, a clear target</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Action, competition, honest confrontation</p>
      <p className="grimoire-label-small">Do</p>
      <p>Move first, then refine your aim as you go</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Start battles you do not actually want to finish</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let discipline guide your fire so it becomes power, not chaos</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/01-aries-mars">
          Mars in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2649\uFE0E"}</span> Taurus Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Friction Between Fire and Earth</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Slow burn drive and stubborn persistence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Stability, time, tangible progress, grounded purpose</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine action, steady effort, building what lasts</p>
      <p className="grimoire-label-small">Do</p>
      <p>Commit your energy to one goal and keep showing up</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Refuse to move until life forces you</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let change be chosen so your will stays flexible</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars">
          Mars in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/03-gemini-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264A\uFE0E"}</span> Gemini Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Scattered Spark</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Quick energy and mental action</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Variety, stimulation, movement, something to solve</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Debate, curiosity, fast decisions, multiple options</p>
      <p className="grimoire-label-small">Do</p>
      <p>Pick one priority at a time and focus your momentum</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Burn your energy arguing when you could be building</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let follow through be your edge, not just speed</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/03-gemini-mars">
          Mars in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/04-cancer-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264B\uFE0E"}</span> Cancer Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Armor in the Ocean</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Protective drive and emotionally motivated action</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Safety, loyalty, belonging, a cause worth defending</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Home energy, trusted allies, purposeful protection</p>
      <p className="grimoire-label-small">Do</p>
      <p>Act directly and name what you are defending</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Fight sideways and call it kindness</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let courage be clean so you do not drown in resentment</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/04-cancer-mars">
          Mars in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/05-leo-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264C\uFE0E"}</span> Leo Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Courage to Be Seen</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Bold drive and expressive action</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, pride, creative control, respect</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Leadership, romance, play, taking up space</p>
      <p className="grimoire-label-small">Do</p>
      <p>Lead with warmth and let your confidence inspire</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn conflict into theater just to feel powerful</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let humility make your strength trustworthy</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/05-leo-mars">
          Mars in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/06-virgo-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264D\uFE0E"}</span> Virgo Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Precision of Action</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Focused drive and methodical effort</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Competence, clarity, usefulness, clean systems</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Plans, routines, measurable progress</p>
      <p className="grimoire-label-small">Do</p>
      <p>Take small consistent actions that compound</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Overthink yourself into inaction</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let done be powerful so perfection does not stall you</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/06-virgo-mars">
          Mars in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/07-libra-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264E\uFE0E"}</span> Libra Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Warrior at the Table</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Drive expressed through partnership and negotiation</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Fairness, mutual respect, shared direction</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Diplomacy, collaboration, balanced conflict</p>
      <p className="grimoire-label-small">Do</p>
      <p>State what you want clearly and invite true compromise</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Hide anger behind politeness until it explodes</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let conflict be honest so harmony can be real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/07-libra-mars">
          Mars in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/08-scorpio-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264F\uFE0E"}</span> Scorpio Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Blade Beneath the Surface</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intense drive and strategic power</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Depth, loyalty, honesty, meaningful stakes</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Privacy, devotion, transformation through effort</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use your focus to build what cannot be shaken</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn desire into control</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let trust guide your intensity so power becomes healing</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/08-scorpio-mars">
          Mars in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/09-sagittarius-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2650\uFE0E"}</span> Sagittarius Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Arrow in Flight</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Drive fueled by freedom and meaning</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Space, purpose, honesty, forward motion</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Adventure, learning, risk with a reason</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose a direction that expands your spirit and commit</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use restlessness as an excuse to avoid responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your aim include follow through so impact becomes real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/09-sagittarius-mars">
          Mars in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2651\uFE0E"}</span> Capricorn Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Strategic Warrior</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Disciplined drive and long range action</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect, progress, structure, tangible results</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Plans, mastery, endurance, earned authority</p>
      <p className="grimoire-label-small">Do</p>
      <p>Commit to the climb and measure progress honestly</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn ambition into hardness that shuts out life</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let purpose include joy so your drive stays alive</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars">
          Mars in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/11-aquarius-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2652\uFE0E"}</span> Aquarius Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Fight for the Future</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Drive expressed through change and conviction</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, autonomy, purpose, a cause worth building</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Innovation, strategy, community on your terms</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use your energy to improve systems, not just criticize them</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach from feelings and call it logic</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your ideals stay human so your impact stays real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/11-aquarius-mars">
          Mars in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/12-pisces-mars">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2653\uFE0E"}</span> Pisces Mars{"\u00A0"}{" "}
          <span className="grimoire-glyph mars">{"\u2642\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Drift of Will</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Drive guided by intuition and emotion</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Compassion, meaning, gentle space, spiritual purpose</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Music, solitude, healing work, surrender with intention</p>
      <p className="grimoire-label-small">Do</p>
      <p>Give your energy a container so your will can move clearly</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Disappear into avoidance and call it peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let boundaries protect your sensitivity so action becomes possible</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/05-mars-placements/12-pisces-mars">
          Mars in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* MARS CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Mars Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Mars governs action, drive, courage, conflict, and pursuit. In planetary
      astrology, Mars describes how energy is applied, how desire is acted on,
      and how challenges are met through will, effort, and assertion.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* MARTIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 2 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 6 to 7 weeks in each zodiac sign, with longer stays during
      retrograde periods.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Motivation, ambition, assertion, anger, stamina, and the way action is
      initiated and sustained.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY MARS FEELS HOT AND DIRECT */}
  <h3 className="grimoire-subheading">Why Mars Feels Hot and Direct</h3>

  <div className="grimoire-text">
    <p>
      Mars moves slower than Mercury and Venus, which gives its transits more
      staying power. This creates longer arcs of motivation, conflict, and
      effort that can be felt over weeks and months rather than days.
    </p>

    <p>
      Mars describes the application of will through action. Martian transits
      often highlight where energy surges, where impatience rises, and where
      persistence is required to move through obstacles and pursue goals.
    </p>
  </div>
</section>

 <div className="grimoire-divider" />
       
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements">
                Mars Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits">
                Mars Transits
              </Link>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
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
