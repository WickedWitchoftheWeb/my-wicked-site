// app/grimoire/astrology/02-planets/11-chiron/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function ChironPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Chiron">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/1chiron.png"
            alt="Chiron in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Chiron doesn&apos;t heal you by erasing the wound: he heals you by
              turning it into wisdom you can&apos;t unlearn.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Wound • Medicine • Mentorship • Integration • Healing
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Chiron in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Chiron is the healer archetype in your chart: the place where pain
              becomes medicine. Chiron doesn&apos;t point to a wound to shame you.
              He points to it because it holds your power. This is where you
              learn the difference between surviving and integrating.
            </p>

            <p>
              In astrology, Chiron reveals the sensitive spot: the story you
              carry, the place you overcompensate, or the place you fear being
              seen. But Chiron also reveals your gift, because what you have lived
              through becomes what you can guide others through with precision
              and empathy.
            </p>

            <p>
              Wherever Chiron sits in your chart: by sign, house, and aspect: is
              where healing is not just personal. It becomes a purpose. The wound
              becomes a doorway.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Chiron</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Wounded Healer • The Mentor • The Medicine Key
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Healing, integration, mentorship, sacred wounds, wisdom through
              experience
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/earth">Earth</Link> • Remedy •
              Integration
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CHIRONIC CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Chironic Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">N/A</p>
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
              <Link href="/grimoire/timing/days-of-the-week/02-monday">
                Monday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">N/A</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/deities/apollo-god">Apollo</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Polarity</h3>
            <p className="grimoire-correspondence-value">N/A</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Energy</h3>
            <p className="grimoire-correspondence-value">N/A</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Body &amp; Health</h3>
            <p className="grimoire-correspondence-value">
              chronic sensitivity patterns, somatic memory, recovery through
              integration and regulation
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">N/A</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
              <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
              <Link href="/grimoire/crystals-stones/clear-quartz">
                Clear Quartz
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">N/A</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
              <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
              <Link href="/grimoire/herbs/rosemary">Rosemary</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/01-white">White</Link>,{" "}
              <Link href="/grimoire/colors/11-grey">Grey</Link>,{" "}
              <Link href="/grimoire/colors/08-brown">Brown</Link>
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

      {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/chiron-symbol-colored.png"
      alt="Chiron Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Chiron is the principle of integration. Where the Sun defines purpose,
      the Moon defines experience, Mercury defines understanding, Venus defines
      value, Mars defines action, Jupiter defines meaning, Saturn defines
      structure, Uranus defines awakening, Neptune defines transcendence, and
      Pluto defines transformation, Chiron governs healing through awareness.
      It is the force that reveals where pain carries wisdom rather than
      punishment.
    </p>

    <p>
      This is the archetype of the wounded teacher. Chiron rules formative
      injury, vulnerability, and the places where sensitivity becomes skill.
      In the human psyche, Chiron is the conscious wound: the experience that
      cannot be ignored, yet refuses to be resolved through avoidance or
      domination.
    </p>

    <p>
      In the cosmic body, Chiron regulates mediation. It bridges instinct and
      consciousness, body and mind, suffering and understanding. In the human
      body, it performs the same role. Chiron governs psychosomatic awareness,
      trauma memory, and the feedback loops through which the body speaks what
      language cannot fully express.
    </p>

    <p>
      Chiron is the law of meaning through pain. It asks not “What must I
      overcome?” but “What must I understand in order to heal?” This is why
      Chiron imbalance often manifests as chronic self-criticism, avoidance,
      or repeated emotional patterns. When the wound is denied, it governs from
      the shadows. When it is witnessed, it becomes a source of guidance.
    </p>

    <p>
      Wherever Chiron sits in your chart, that is where healing requires
      presence rather than perfection. It marks the place where empathy is
      forged, where wisdom is earned through experience, and where your pain
      can become a point of connection rather than isolation. To tend Chiron is
      to tend your relationship with compassion: to listen deeply, to integrate
      what was fractured, and to teach from lived truth rather than theory.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

    <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/chiron-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Chiron in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Chiron is the keeper of sacred wounds and conscious
      healing. Chironian magick governs trauma awareness, integration, and the
      transformation of pain into wisdom. This is not restorative magick that
      erases injury. Chiron works by revealing what hurts, why it hurts, and
      how that pain can become a source of guidance rather than shame.
    </p>

    <p>
      Working with Chiron means working with vulnerability as a magickal
      threshold. This is the current used for healing rituals, trauma release,
      shadow integration, ancestral wound work, and rites of reclamation.
      Chironian workings are slow and intentional, requiring honesty,
      presence, and compassion rather than force or bypassing.
    </p>

    <p>
      Chiron teaches conscious witnessing. Healing does not occur by fixing
      what is broken, but by understanding what was fractured and why. Track
      Chiron through transits to recognize when wounds resurface not to harm
      you, but to be finally acknowledged, integrated, and transformed into
      embodied wisdom.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Healing and integration rituals, trauma and shadow work, ancestral and
        karmic wound clearing, somatic and emotional release, reclamation of
        personal power through awareness
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Healing, vulnerability, awareness, integration, compassion, wisdom,
        embodiment, conscious repair
      </p>
    </div>

    <Link
      href="PASTE-YOUR-CHIRON-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Chiron in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />


   <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/chiron-art.png"
            alt="Chiron artwork"
            className="grimoire-img"
          />
        </div>


{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Chiron</h2>

  <p className="grimoire-label">
    Chiron, the Wounded Healer
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/chiron-myth-art.jpg"
      alt="Chiron teaching Achilles"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      The Education of Achilles by Chiron, fresco from Herculaneum,
      1st century AD (Museo Archeologico Nazionale, Naples)
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Chiron was a centaur unlike any other. While most
      centaurs were depicted as unruly and impulsive, Chiron was wise,
      disciplined, and deeply compassionate. Born of the Titan Cronus and the
      sea nymph Philyra, Chiron occupied a unique position between the divine
      and mortal worlds, embodying both instinct and intellect.
    </p>

    <p>
      Chiron was renowned as a teacher and mentor, responsible for training
      many of Greece&apos;s greatest heroes, including Achilles, Asclepius, and
      Jason. He mastered medicine, music, ethics, prophecy, and the natural
      sciences, becoming a guide for others even as he carried a profound
      personal wound. Unlike the heroes he trained, Chiron could not overcome
      his own suffering.
    </p>

    <p className="grimoire-label">
      The Gift of the Wound
    </p>

    <p>
      Chiron&apos;s defining myth centers on an incurable injury caused by a
      poisoned arrow. Though immortal, he was unable to heal himself, enduring
      constant pain while continuing to serve others. Ultimately, Chiron
      surrendered his immortality to free himself from suffering, an act that
      transformed his wound into a final offering rather than a failure.
    </p>

    <p>
      Through Chiron, myth introduces a different kind of power: wisdom gained
      through lived pain. Chiron represents the place where vulnerability
      becomes insight and compassion is forged through experience. In astrology,
      Chiron does not signify weakness, but the capacity to guide others through
      terrain we know intimately ourselves.
    </p>
  </article>
</section>



<div className="grimoire-divider" />

       {/* CHIRON PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Chiron Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/chiron/chiron-symbol.png"
      alt="Chiron Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/01-aries-chiron">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Identity</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing the self through courage, autonomy, and initiation</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Permission to be, room to choose, safety to become</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Small acts of bravery and honest self definition</p>
      <p className="grimoire-label-small">Do</p>
      <p>Practice choosing yourself in simple, consistent ways</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Prove your worth through conflict</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let identity be built through lived truth, not reaction</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/01-aries-chiron">
          Chiron in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/02-taurus-chiron">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Worth</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing value, security, and the right to receive</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Stability, gentleness, proof that you are enough</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Embodiment, simple routines, grounded care</p>
      <p className="grimoire-label-small">Do</p>
      <p>Treat your needs as sacred and worthy of attention</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Measure worth by what you can produce or provide</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let receiving be a practice, not a permission slip</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/02-taurus-chiron">
          Chiron in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/03-gemini-chiron">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Being Heard</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing communication, learning, and the right to speak</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Curiosity met with respect, space to ask and answer</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Journaling, conversation, language that clarifies</p>
      <p className="grimoire-label-small">Do</p>
      <p>Practice saying the thing you usually edit out</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Hide your truth behind humor or constant shifting</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Your voice becomes stronger the more consistently you use it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/03-gemini-chiron">
          Chiron in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/04-cancer-chiron">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Safety</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing belonging, home, and emotional protection</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Trust, softness, refuge that is real</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Chosen family, nurturing routines, safe spaces</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build boundaries that protect your tenderness</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Carry everyone&apos;s emotions to earn connection</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Safety can be created, not just remembered</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/04-cancer-chiron">
          Chiron in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/05-leo-chiron">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Visibility</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing shame, expression, and the fear of being seen</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Validation that is steady, permission to shine</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Creative play, supportive audiences, warm connection</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create without waiting for perfect confidence</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Hide your joy to avoid rejection</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Visibility becomes safe when it is chosen and owned</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/05-leo-chiron">
          Chiron in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/06-virgo-chiron">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Imperfection</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing self criticism and the need to be flawless</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Gentleness, realistic standards, practical compassion</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine care, small improvements, supportive systems</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let your standards serve your wellbeing</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn healing into another performance</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Progress is sacred even when it is messy</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/06-virgo-chiron">
          Chiron in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/07-libra-chiron">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Injustice</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing imbalance, people pleasing, and unfair bonds</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Fairness, respect, mutual effort</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Clear agreements and honest communication</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say what you need before resentment becomes your language</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Abandon your truth to keep the peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Harmony is strongest when it includes you</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/07-libra-chiron">
          Chiron in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/08-scorpio-chiron">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Betrayal</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing trust, control, and fear of abandonment</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Loyalty, honesty, depth without manipulation</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Private truth, emotional courage, devotion</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose vulnerability with discernment</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Test people until you recreate the wound</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Trust grows through consistency, not intensity</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/08-scorpio-chiron">
          Chiron in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/09-sagittarius-chiron">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Faith</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing belief, meaning, and the fear of being wrong</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Hope, truth, room to seek and evolve</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, philosophy, spiritual exploration</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let questions be sacred and honest</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use certainty to avoid your own growth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Faith becomes real when it is lived with humility</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/09-sagittarius-chiron">
          Chiron in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/10-capricorn-chiron">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Responsibility</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing pressure, authority wounds, and self worth through achievement</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect, stability, permission to be human</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Competence, structure, clear boundaries</p>
      <p className="grimoire-label-small">Do</p>
      <p>Define success in a way that supports your life</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse exhaustion with importance</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let support be part of strength</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/10-capricorn-chiron">
          Chiron in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/11-aquarius-chiron">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Belonging</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing otherness, community wounds, and the fear of being excluded</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Acceptance, authenticity, chosen community</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Friendship, shared vision, spaces that honor difference</p>
      <p className="grimoire-label-small">Do</p>
      <p>Find the people who celebrate your weirdness as wisdom</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach and call it independence when you really want connection</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Belonging starts inside you, then becomes shared</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/11-aquarius-chiron">
          Chiron in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/12-pisces-chiron">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Chiron{" "}
          <span className="grimoire-glyph">{"\u26B7\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Wound of Separation</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Healing isolation, spiritual longing, and the ache of disconnection</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Compassion, faith, gentle understanding</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Ritual, music, dreamwork, spiritual refuge</p>
      <p className="grimoire-label-small">Do</p>
      <p>Connect through grounded compassion and real support</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Disappear into fantasy to avoid pain</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Oneness is felt most deeply when you stay present</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/11-chiron-placements/12-pisces-chiron">
          Chiron in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* CHIRON CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Chiron Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Chiron governs wounds, healing, vulnerability, and integration. In
      planetary astrology, Chiron describes where pain is carried, how it is
      understood, and how wisdom emerges through lived experience rather than
      avoidance.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* CHIRONIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 49 to 51 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 3 to 4 years in each zodiac sign, with variation due to
      retrograde motion.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Core wounds, healing processes, sensitivity, mentorship, and the
      transformation of pain into insight and compassion.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY CHIRON FEELS PERSONAL AND CYCLICAL */}
  <h3 className="grimoire-subheading">Why Chiron Feels Personal and Cyclical</h3>

  <div className="grimoire-text">
    <p>
      Chiron moves more slowly than the personal planets but faster than the
      outer generational planets. This gives its transits a deeply personal
      quality that unfolds across meaningful stages of life rather than brief
      moments.
    </p>

    <p>
      Chiron does not remove pain or resolve it quickly. Instead, its cycles
      reveal patterns of wounding and healing that return for integration over
      time. Chiron transits often coincide with renewed awareness of old wounds
      and opportunities to relate to them with greater understanding and
      maturity.
    </p>
  </div>
</section>

 <div className="grimoire-divider" />
       
       
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements">
                Chiron Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits">
                Chiron Transits
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