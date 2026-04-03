// app/grimoire/astrology/02-planets/04-mercury/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MercuryPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mercury">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury.png"
            alt="Mercury in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Mercury doesn&apos;t care what you meant: only what you said, what
              you heard, and what you repeated until it became reality.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Mind • Communication • Perception • Learning
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Mercury in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Mercury is the messenger of your chart: the part of you that
              observes, names, sorts, connects, and communicates. Where the Sun
              is identity and the Moon is instinct, Mercury is perception: how
              you notice, interpret, and translate reality.
            </p>

            <p>
              In astrology, Mercury governs mental patterns, speech, writing,
              learning, and cognition. It shows how information moves through
              you, what you fixate on, and how you exchange meaning with the
              world.
            </p>

            <p>
              Wherever Mercury sits in your chart is where your mind sharpens.
              Thought is motion. Motion is magick.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Mercury</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Messenger • The Mind • The Translator
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Thought, language, perception, learning, exchange
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/air">Air</Link> • Signals • Movement
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

      {/* MERCURIAL CORRESPONDENCES */}
<section className="grimoire-correspondences">
  <h2 className="grimoire-subheading">Mercurial Correspondences</h2>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Number</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/numerology/05-five">Five</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Element</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/elements/air">Air</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Day</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/timing/days-of-the-week/04-wednesday">
        Wednesday
      </Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
    <p className="grimoire-correspondence-value">
      Rules{" "}
      <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
    </p>
    <p className="grimoire-correspondence-value">
      Rules{" "}
      <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
    </p>
    <p className="grimoire-correspondence-value">
      Exalted in{" "}
      <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>{" "}
      (traditional)
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Deities</h3>
    <p className="grimoire-correspondence-value">Hermes, Mercury, Thoth</p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Polarity</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/energy-grimoire/energy-&-polarity">Positive</Link>
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
      <Link href="/grimoire/parts-of-the-magickal-body/05-arms">Arms</Link>,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/06-hands">hands</Link>,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/08-lungs">lungs</Link>,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/11-nervous-system">
        nervous system
      </Link>
      ,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/03-throat">speech</Link>
    </p>
  </div>

<div className="grimoire-correspondence">
  <h3 className="grimoire-correspondence-label">Tarot Card</h3>
  <p className="grimoire-correspondence-value">
    <Link href="/grimoire/tarot/major-arcana/01-the-magician">The Magician</Link>
  </p>
</div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Crystals</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/crystals-stones/fluorite">Fluorite</Link>,{" "}
      <Link href="/grimoire/crystals-stones/agate">agate</Link>,{" "}
      <Link href="/grimoire/crystals-stones/citrine">citrine</Link>,{" "}
      <Link href="/grimoire/crystals-stones/quartz">quartz</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Metals</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/metals/mercury">Mercury</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Herbs</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
      <Link href="/grimoire/herbs/fennel">fennel</Link>,{" "}
      <Link href="/grimoire/herbs/dill">dill</Link>,{" "}
      <Link href="/grimoire/herbs/mint">mint</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Colors</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/colors/12-grey">Grey</Link>,{" "}
      <Link href="/grimoire/colors/07-green">green</Link>,{" "}
      <Link href="/grimoire/colors/01-white">white</Link>
    </p>
  </div>
</section>

<div className="grimoire-divider" />

{/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury-symbol-colored.png?updatedAt=1770442340112"
      alt="Mercury Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Mercury is the architect of meaning. Where the Sun defines purpose and
      the Moon defines experience, Mercury governs interpretation. It is the
      faculty through which reality becomes intelligible: language, symbols,
      perception, and the mental bridges that allow thought to move from one
      place to another.
    </p>

    <p>
      This is the archetype of translation. Mercury takes raw experience and
      turns it into concepts, words, stories, and systems. It governs how
      information is gathered, sorted, and exchanged. In the human psyche,
      Mercury is the thinking mind: curiosity, reasoning, logic, memory, and
      the internal narration that never truly goes silent.
    </p>

    <p>
      In the cosmic body, Mercury regulates connection. It moves quickly,
      weaving pathways between planets, ideas, and states of awareness. In the
      human body, it performs the same role. Mercury rules the nervous system,
      speech, coordination, and the subtle signaling that allows the mind and
      body to communicate in real time.
    </p>

    <p>
      Mercury is the law of cognition. It asks not “Who am I?” or “How do I
      feel?” but “How do I understand what is happening?” This is why Mercury
      imbalance often manifests as anxiety, overthinking, mental fatigue, or
      miscommunication. When the mind cannot properly process or express
      experience, it begins to loop, fragment, or overload.
    </p>

    <p>
      Wherever Mercury sits in your chart, that is where your mind is most
      active and alert. It marks how you learn, speak, question, analyze, and
      make sense of the world around you. To tend Mercury is to tend your mental
      ecosystem: to refine thought, clarify language, and ensure that
      information flows cleanly rather than becoming static or noise.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

       <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Mercury in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Mercury is the keeper of movement and message. Mercurial
      magick governs communication, thought, learning, and the pathways through
      which intention travels. This is not slow or ceremonial energy. It is
      quick, adaptive, and responsive, designed to shift circumstances through
      clarity and exchange.
    </p>

    <p>
      Working with Mercury means working with the mind as a magickal tool. This
      is the current used for spellcraft involving speech, writing, negotiation,
      study, travel, and problem solving. Mercurial workings are often subtle
      but precise, altering outcomes by changing how information flows rather
      than by applying force.
    </p>

    <p>
      Mercury teaches conscious articulation. When you speak with intention,
      write with focus, or name a thing clearly, you activate Mercurial magick.
      Track Mercury through transits and retrogrades to understand when to
      initiate communication, revise plans, or slow the exchange of energy
      before errors compound.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Communication spells, learning and study work, writing and speaking
        enchantments, travel protection, negotiation and mediation, mental
        clarity and focus
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Language, intellect, adaptability, logic, perception, messaging,
        curiosity, movement
      </p>
    </div>

    <Link
      href="/grimoire/the-cosmos/03-mercury"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Mercury in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />

      

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury-art.png"
            alt="Mercury artwork"
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
      <Link href="/grimoire/astrology/02-planets/03-mercury">Mercury</Link>
    </p>
    <p className="grimoire-callout">The Mind at Home</p>
    <p>
      Mercury is at home where thought stays awake. In its domicile, the mind
      becomes responsive and alive to the environment, quick to gather
      information and quick to convert it into usable understanding.
      Communication is not an accessory here: it is the mechanism that keeps
      life moving.
      <br />
      <br />
      In Gemini, Mercury operates through exchange. Curiosity is constant,
      connections form rapidly, and learning happens through conversation,
      questions, and the movement of ideas. The mind thrives on variety, mental
      stimulation, and the freedom to explore multiple angles without needing
      certainty too soon.
      <br />
      <br />
      In Virgo, Mercury operates through refinement. Perception sharpens,
      discernment increases, and language becomes a tool for precision. The
      mind wants to name what is true, separate what is useful from what is
      distracting, and organize information into systems that actually work.
      <br />
      <br />
      This dignity strengthens adaptability, intelligence, and clarity, but it
      also carries a lesson: speed and precision must serve meaning. Mercury at
      home performs best when information is not collected for noise, but for
      purpose.
    </p>

    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury">
        Mercury Placed in the Gemini Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury">
        Mercury Placed in the Virgo Zodiac →
      </Link>
    </p>

    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/03-mercury-in-gemini-transit">
        Mercury Transiting the Gemini Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/06-mercury-in-virgo-transit">
        Mercury Transiting the Virgo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/03-mercury">Mercury</Link>
    </p>
    <p className="grimoire-callout">Precision and Signal</p>
    <p>
      Mercury is exalted where the mind becomes clean. In exaltation, thought
      is not only active: it is accurate. Perception improves, language gains
      definition, and communication becomes deliberate rather than reactive.
      The mind knows how to aim.
      <br />
      <br />
      This dignity strengthens discernment and pattern recognition. Details are
      not distractions: they are information. Mercury in exaltation can detect
      what is missing, what is inconsistent, and what must be adjusted for
      something to function as intended. Words become tools of correction,
      refinement, and truth telling.
      <br />
      <br />
      There is also a shadow to this elevation. Precision can become
      perfectionism, and discernment can become harshness if the mind forgets
      that people are not machines. The lesson of Mercury exalted is to keep
      clarity human: to speak truth without cruelty and to refine without
      reducing life to flaws.
      <br />
      <br />
      When Mercury is exalted, signal rises above noise and the mind becomes a
      reliable instrument for meaningful understanding.
    </p>

    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury">
        Mercury Placed in the Virgo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/06-mercury-in-virgo-transit">
        Mercury Transiting the Virgo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/03-mercury">Mercury</Link>
    </p>
    <p className="grimoire-callout">Noise and Misreadings</p>
    <p>
      Mercury in detriment is not unintelligent. It is overextended. The mind
      reaches for meaning faster than it can verify it, or it searches for
      certainty in places that prefer belief, intuition, or assumption. Here,
      information can scatter, and communication can become inflated, vague, or
      misdirected.
      <br />
      <br />
      In Sagittarius, Mercury may favor big ideas over details. Language aims
      for vision, truth, and overarching meaning, but the fine print can be
      skipped. There may be confidence in what is thought and said, even when
      facts are incomplete. The lesson is precision: to support truth with
      accuracy.
      <br />
      <br />
      In Pisces, Mercury may absorb rather than define. Thoughts can be
      impressionistic, intuitive, and symbol driven, but boundaries around
      meaning can blur. Miscommunication often comes from assumption or
      indirect language. The lesson is clarity: to name what is real without
      dissolving into uncertainty.
      <br />
      <br />
      Mercury in detriment teaches verification. Slow down, check meaning, and
      choose clarity over momentum. When the message is cleaned, the mind
      becomes trustworthy again.
    </p>

    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury">
        Mercury Placed in the Sagittarius Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
        Mercury Placed in the Pisces Zodiac →
      </Link>
    </p>

    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/09-mercury-in-sagittarius-transit">
        Mercury Transiting the Sagittarius Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/12-mercury-in-pisces-transit">
        Mercury Transiting the Pisces Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/03-mercury">Mercury</Link>
    </p>
    <p className="grimoire-callout">The Tangled Message</p>
    <p>
      Mercury in fall struggles to translate cleanly because meaning does not
      want to stay in one shape. In this terrain, thought can be porous,
      impression based, and easily influenced by emotion, environment, and
      subtle undercurrents. The mind may know something is true, but finding
      the words can feel slippery.
      <br />
      <br />
      Communication here can be indirect, symbolic, or evasive, not out of
      deceit, but out of uncertainty about where the edges of meaning begin and
      end. The message can tangle when it tries to satisfy everyone, when it
      refuses definition, or when it attempts to speak the unspeakable without
      structure.
      <br />
      <br />
      Yet this fall carries its own gift: sensitivity. Mercury in fall can
      perceive what is implied, what is hidden, and what is happening beneath
      language. When this perception is disciplined, it becomes profound
      intuition rather than confusion.
      <br />
      <br />
      The lesson is refinement: fewer words, truer words, and communication
      anchored to reality. When the message is grounded, Mercury becomes clear
      without losing its depth.
    </p>

    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
        Mercury Placed in the Pisces Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/12-mercury-in-pisces-transit">
        Mercury Transiting the Pisces Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Mercury</h2>

  <p className="grimoire-label">
    Hermes, the Divine Messenger
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury-myth-art.jpg"
      alt="Hermes Logios, Roman marble after a Greek original"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Marble statue of Hermes, 1st or 2nd century CE, Met Museum
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Mercury is rooted in the figure of Hermes, the swift
      and cunning god who moved freely between worlds. From the moment of his
      birth, Hermes demonstrated intelligence and adaptability, inventing the
      lyre, stealing Apollo&apos;s cattle, and negotiating his way out of punishment
      through clever speech. These myths established Hermes as the patron of
      communication, wit, and exchange.
    </p>

    <p>
      Hermes served as the messenger of the gods, carrying divine knowledge
      between Olympus, the mortal world, and the Underworld. Because of this,
      he became associated not only with language and travel, but with the
      transfer of ideas, symbols, and meaning. Hermes did not rule through
      authority or force; he ruled through movement, interpretation, and
      connection.
    </p>

    <p className="grimoire-label">
      Mercury and the Art of Translation
    </p>

    <p>
      In Roman mythology, Hermes was absorbed into the figure of Mercury, whose
      domain expanded to include commerce, trade, and negotiation. Mercury
      governed markets, contracts, roads, and the flow of information that
      binds society together. His power lay in mediation: the ability to turn
      raw data into understanding and disparate parties into agreement.
    </p>

    <p>
      Through Mercury, the planet became a symbol of mental agility, perception,
      and adaptability. Mercury in myth is neither fixed nor still; it is the
      act of thinking itself, the bridge between intention and expression. As
      both Hermes and Mercury, this archetype represents the mind in motion,
      shaping reality through words, symbols, and shared meaning.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

    {/* MERCURY PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Mercury Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/mercury/mercury-symbol.png"
      alt="Mercury Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/01-aries-mercury">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Flash of Thought</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Fast thoughts and direct communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Clarity, momentum, honest words, quick decisions</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Saying it plainly, acting on the idea, moving forward</p>
      <p className="grimoire-label-small">Do</p>
      <p>Speak first drafts, then refine with intention</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use sharpness as a substitute for precision</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let patience shape your message so it lands, not just burns</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/01-aries-mercury">
          Mercury in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/02-taurus-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2649\uFE0E"}</span> Taurus Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Voice of Measured Thought</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Practical thinking and grounded speech</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Time to process, consistency, tangible proof, trusted tone</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Clear plans, repeatable routines, stable conversations</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say what you mean slowly enough to be understood</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dig in just to avoid changing your mind</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let new information adjust you without threatening your values</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/02-taurus-mercury">
          Mercury in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264A\uFE0E"}</span> Gemini Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Mind in Its Element</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Curious thinking and agile communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Conversation, variety, questions, quick mental movement</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, sharing, switching perspectives, staying engaged</p>
      <p className="grimoire-label-small">Do</p>
      <p>Follow the thread that lights you up and keep asking why</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Talk around the truth to avoid choosing</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Commit to one message long enough to make it meaningful</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury">
          Mercury in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/04-cancer-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264B\uFE0E"}</span> Cancer Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Language of Feeling</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intuitive thinking and emotionally aware communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Safety, trust, warmth, words that protect and connect</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Familiar tones, meaningful stories, private understanding</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say what you feel with care and let vulnerability be clear</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Hint until you feel unheard and resentful</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Ask directly for what you need instead of testing for it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/04-cancer-mercury">
          Mercury in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/05-leo-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264C\uFE0E"}</span> Leo Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Voice of Authority</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Expressive thinking and confident communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, sincerity, room to speak, respect for presence</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Storytelling, humor, passion, clear personal perspective</p>
      <p className="grimoire-label-small">Do</p>
      <p>Speak with warmth and let your message carry joy</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn every conversation into a performance for approval</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let listening be part of leadership so connection stays mutual</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/05-leo-mercury">
          Mercury in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264D\uFE0E"}</span> Virgo Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Mind in Motion</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Precise thinking and practical communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Clarity, usefulness, clean systems, solutions that work</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Details, organization, honest feedback, steady improvement</p>
      <p className="grimoire-label-small">Do</p>
      <p>Translate complexity into something simple and usable</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Critique yourself into silence</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your standards support you instead of punishing you</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury">
          Mercury in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/07-libra-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264E\uFE0E"}</span> Libra Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Language of Balance</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Balanced thinking and relationship-aware communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Fairness, harmony, respectful dialogue, shared clarity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Thoughtful words, peaceful tone, mutual understanding</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say the truth kindly and let honesty be part of peace</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Delay decisions until your voice disappears</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose clarity over pleasing so your balance stays real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/07-libra-mercury">
          Mercury in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/08-scorpio-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264F\uFE0E"}</span> Scorpio Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Keeper of Secrets</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intense thinking and piercing communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Honesty, depth, loyalty, words that mean what they say</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Privacy, direct truth, meaningful conversation, devotion</p>
      <p className="grimoire-label-small">Do</p>
      <p>Ask the real question and let the answer be transformative</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Weaponize insight to gain control</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Use your intensity to heal, not to test who will stay</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/08-scorpio-mercury">
          Mercury in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2650\uFE0E"}</span> Sagittarius Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Messenger on a Wild Ride</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Big-picture thinking and truth-forward communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, meaning, honesty, room to explore ideas</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, teaching, humor, open horizons</p>
      <p className="grimoire-label-small">Do</p>
      <p>Speak the truth with purpose and let it expand the room</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use bluntness as an excuse to avoid responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Pair your vision with details so your message can land</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury">
          Mercury in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/10-capricorn-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2651\uFE0E"}</span> Capricorn Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Calculated Mind</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Structured thinking and responsible communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect, competence, clear goals, words with weight</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Plans, structure, practical advice, long-term thinking</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say less and mean more, then follow through</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse silence with strength or distance with authority</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your voice include warmth so people can meet you halfway</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/10-capricorn-mercury">
          Mercury in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/11-aquarius-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2652\uFE0E"}</span> Aquarius Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Circuit of Ideas</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Innovative thinking and unconventional communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, authenticity, big ideas, intellectual freedom</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Perspective, systems, patterns, new solutions</p>
      <p className="grimoire-label-small">Do</p>
      <p>Share the idea and let the community sharpen it</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach from people and call it objectivity</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your humanity carry your brilliance so others can receive it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/11-aquarius-mercury">
          Mercury in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2653\uFE0E"}</span> Pisces Mercury{"\u00A0"}{" "}
          <span className="grimoire-glyph">{"\u263F\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">Logic in a Sea of Symbols</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intuitive thinking and symbolic communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Gentle space, imagination, compassion, meaning beneath words</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Music, metaphor, dreams, spiritual language</p>
      <p className="grimoire-label-small">Do</p>
      <p>Translate your intuition into words that others can hold</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dissolve into confusion and call it depth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Use boundaries with information so your message stays clear</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
          Mercury in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* MERCURY CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Mercury Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Mercury governs thinking, communication, learning, and perception. In
      planetary astrology, Mercury describes how information is gathered,
      interpreted, exchanged, and articulated.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* MERCURIAL MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 1 year to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 2 to 4 weeks in each zodiac sign, depending on retrograde
      motion.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Communication style, thought patterns, learning processes, language, and
      perception.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY MERCURY FEELS QUICK AND CHANGEABLE */}
  <h3 className="grimoire-subheading">Why Mercury Feels Quick and Changeable</h3>

  <div className="grimoire-text">
    <p>
      Mercury moves faster than most planets and frequently changes direction
      through retrograde motion. This creates noticeable shifts in attention,
      thinking, and communication over relatively short periods of time.
    </p>

    <p>
      Rather than describing long term development, Mercury reflects how ideas
      circulate, how understanding evolves, and how meaning is negotiated in
      daily life. Mercurial transits often feel mental, conversational, or
      logistical rather than emotional or structural.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            {/* PLACEMENTS */}
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements">
                Mercury Placements
              </Link>
            </div>

            {/* TRANSITS */}
            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits">
                Mercury Transits
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