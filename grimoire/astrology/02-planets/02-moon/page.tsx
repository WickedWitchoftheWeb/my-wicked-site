// app/grimoire/astrology/02-planets/02-moon/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function MoonPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Moon">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon.png"
            alt="The Moon in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Moon does not demand to be understood: she changes, and you
              learn to live by her language.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Emotions • Intuition • Memory • Inner Safety
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Moon in Astrology</h2>

          <div className="grimoire-text">
            <p>
              The Moon is the inner world of your chart, it is the part of you
              that feels before it explains. Where the Sun is your conscious
              identity, the Moon is your instinctive nature: your emotional
              reflexes, your needs, your private truth, and the invisible
              environment your nervous system requires to feel safe.
            </p>

            <p>
              In astrology, the Moon describes how you receive life. It reveals
              what comforts you, what rattles you, and what you do when no one
              is watching. It is your memory body: your past, your patterns,
              and the emotional imprint you carry from early life. When the
              Moon is cared for, you feel anchored. When it is ignored, you
              feel haunted by your own tides.
            </p>

            <p>
              Wherever the Moon sits in your chart, it is where your emotional
              intelligence develops. It&apos;s where you learn to self soothe,
              to regulate, to nurture yourself, and to recognize the difference
              between intuition and anxiety. The Moon does not ask you to be
              perfect. She asks you to be honest about what you need.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of the Moon</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Luminary • The Inner Self • The Emotional Body
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Emotion, instinct, intuition, memory, nurturing, inner safety
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/water">Water</Link> • Tides •
              Reflection
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* LUNAR CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Lunar Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/02-two">Two</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Element</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/water">Water</Link>
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
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
            </p>
            <p className="grimoire-correspondence-value">
              Exalted in{" "}
              <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>{" "}
              (traditional)
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/deities/luna-goddess">Artemis</Link>,{" "}
              <Link href="/grimoire/deities/diana-goddess">Diana</Link>,{" "}
              <Link href="/grimoire/deities/hecate-goddess">Hecate</Link>
              <Link href="/grimoire/deities/luna-goddess">Luna</Link>,{" "}
              <Link href="/grimoire/deities/luna-goddess">Selene</Link>,{" "}
            </p>
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
                Feminine / Night / Yin
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Body &amp; Health</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/parts-of-the-magickal-body/12-stomach">
                Stomach
              </Link>
              ,{" "}
              <Link href="/grimoire/parts-of-the-magickal-body/14-breasts">
                breasts
              </Link>
              , fluids, sleep rhythms, emotional sensitivity, digestion of life
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/tarot/major-arcana/18-the-moon">
                The Moon
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
              <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>,{" "}
              <Link href="/grimoire/crystals-stones/pearl">Pearl</Link>,{" "}
              <Link href="/grimoire/crystals-stones/labradorite">
                Labradorite
              </Link>
              , <Link href="/grimoire/crystals-stones/quartz">Quartz</Link>
            </p>
          </div>

                  <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/silver">Silver</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
              <Link href="/grimoire/herbs/aloe">Aloe</Link>,{" "}
              <Link href="/grimoire/herbs/fennel">Fennel</Link>,{" "}
              <Link href="/grimoire/herbs/dill">Dill</Link>,{" "}
              <Link href="/grimoire/herbs/bay-leaves">Bay leaves</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/10-silver">Silver</Link>,{" "}
              <Link href="/grimoire/colors/01-white">White</Link>,{" "}
              <Link href="/grimoire/colors/11-grey">Grey</Link>
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* UNIVERSAL STANDPOINT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Universal Standpoint</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon-symbol-colored.png"
              alt="The Moon Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              The Moon is the keeper of inner worlds. Where the Sun defines who
              you are, the Moon reveals how you experience being alive. It is
              not concerned with identity as performance, but with identity as
              feeling: memory, instinct, and the emotional patterns that form
              long before language arrives.
            </p>
            <p>
              This is the archetype of reflection. The Moon does not generate
              light of its own; it receives, filters, and reshapes it. In the
              human psyche, this becomes the emotional body: the place where
              experience is stored, reacted to, and remembered. The Moon governs
              the subconscious terrain where safety is learned, attachment is
              formed, and fear quietly keeps its records.
            </p>
            <p>
              In the cosmic body, the Moon regulates rhythm. It pulls tides,
              marks time, and teaches the universe how to move in cycles rather
              than straight lines. In the human body, it performs the same
              function. The Moon rules habits, moods, and needs: the invisible
              currents that shape behavior without ever asking for permission.
            </p>
            <p>
              The Moon is the law of receptivity. It asks not “Who am I
              becoming?” but “What do I need to feel whole?” This is why lunar
              suppression leads to anxiety, emotional volatility, and burnout.
              When feelings are ignored, they do not disappear: they deepen,
              distort, and eventually surface in unintended ways.
            </p>
            <p>
              Wherever the Moon sits in your chart, that is where your inner
              child resides. It marks the place where comfort is sought, where
              wounds are soothed, and where emotional truth insists on being
              honored. To tend the Moon is to tend your inner climate: to learn
              when to retreat, when to nourish yourself, and when to trust the
              quiet wisdom that rises only when the world goes dark.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

      {/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">The Moon in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, the Moon is the keeper of cycles: waxing, waning, and
      returning again. Lunar magick is the art of working with timing, emotion,
      and energetic tides. The Moon does not force outcomes. She changes what
      you are able to receive.
    </p>

    <p>
      Working with the Moon means working with inner reality. It is the current
      you use for healing spells, protection, dreamwork, and intuitive
      development: anything that requires you to feel the truth before you can
      name it. Lunar rituals ask: what do you need, not what do you perform?
    </p>

    <p>
      Track the Moon through her phases and through your chart. You will start
      to recognize when you need rest, when you need release, and when you are
      ready to grow again. The Moon teaches sacred permission: you are allowed
      to change.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Protection and warding, dreamwork, emotional healing, intuitive
        strengthening, cleansing and release, home and family blessings
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal {"\u00A0"}Keys</h3>
      <p className="grimoire-correspondence-value">
        Intuition, protection, dreamwork, emotional healing, shadow work,
        nurturing, psychic development
      </p>
    </div>

    <Link
      href="/grimoire/the-cosmos/02-the-moon"
      className="grimoire-deep-dive"
    >
      Dive Deeper into the Moon in Witchcraft →
    </Link>
  </section>
</section>

        <div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon-art.png"
            alt="The Moon artwork"
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
      <Link href="/grimoire/astrology/02-planets/02-the-moon">Moon</Link>
    </p>
    <p className="grimoire-callout">The Heart at Home</p>
    <p>
      In Cancer, the Moon operates from a place of instinctive belonging. This
      is not a learned comfort, but an ancient one: the emotional body knowing
      where it is safe to soften. Here, the Moon does not need to translate its
      feelings or justify its needs. Emotion moves freely, guided by memory,
      intuition, and an unspoken awareness of what nourishes the soul.
      <br />
      <br />
      This dignity heightens sensitivity, empathy, and emotional attunement.
      The Moon becomes deeply responsive to its environment, reading subtle
      shifts in tone, energy, and mood with remarkable accuracy. Caretaking,
      protection, and emotional bonding arise naturally, often before conscious
      thought has time to intervene.
      <br />
      <br />
      Yet this closeness to feeling can blur boundaries. Emotional tides may
      swell quickly, and the pull of familiarity can make release difficult.
      The work of this domicile is not to harden the heart, but to give it
      structure: to allow feeling without being ruled by it.
      <br />
      <br />
      When the Moon is in Cancer, emotional truth is honored as a primary form
      of intelligence, and the need for safety becomes a guiding principle
      rather than a weakness.
    </p>
        <p>
      <Link href="/grimoire/astrology/03-placements/02-moon/04-cancer-moon">
        The Moon Placed in the Cancer Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/02-moon-transits/04-moon-in-cancer-transit">
        The Moon Transiting the Cancer Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
   <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/02-the-moon">Moon</Link>
    </p>
    <p className="grimoire-callout">The Sanctuary of Sense and Spirit</p>
    <p>
      The Moon finds elevation in Taurus, where emotion is given time, space,
      and stability to take root. In this exaltation, feelings are not rushed
      or dramatized; they are grounded into the body and expressed through
      steadiness, care, and consistency.
      <br />
      <br />
      Taurus provides the Moon with a container strong enough to hold its
      sensitivity without overwhelming it. Emotional needs are acknowledged
      and met through tangible means: routine, touch, nourishment, and the
      quiet reassurance of continuity. This placement supports emotional
      resilience and the ability to remain present through change.
      <br />
      <br />
      In Taurus, the Moon teaches that security is built slowly and maintained
      intentionally. Pleasure becomes a stabilizing force, and comfort is not
      indulgence, but a form of grounding that allows the emotional body to
      rest and recover.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/02-moon/02-taurus-moon">
        The Moon Placed in the Taurus Zodiac →
      </Link>
    </p>
       <p>
      <Link href="/grimoire/astrology/04-transits/02-moon-transits/02-moon-in-taurus-transit">
        The Moon Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/02-the-moon">Moon</Link>
    </p>
    <p className="grimoire-callout">The Guarded Heart</p>
    <p>
      In Capricorn, the Moon struggles to express its natural softness. This is
      a landscape that values control, responsibility, and composure, often at
      the expense of emotional immediacy. Feelings may be delayed, minimized,
      or redirected into productivity, creating distance between inner needs
      and outer behavior.
      <br />
      <br />
      This placement can produce emotional self-sufficiency, endurance, and
      the ability to remain functional under pressure. However, it may also
      foster the belief that vulnerability must be earned, or that emotional
      expression is a liability rather than a necessity.
      <br />
      <br />
      The Moon in detriment teaches through restraint. Its lesson is to
      recognize that emotional care is not a distraction from responsibility,
      but a foundation for sustainable strength.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/02-moon/10-capricorn-moon">
        The Moon Placed in the Capricorn Zodiac →
      </Link>
    </p>

       <p>
      <Link href="/grimoire/astrology/04-transits/02-moon-transits/10-moon-in-capricorn-transit">
        The Moon Transiting the Capricorn Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/02-the-moon">Moon</Link>
    </p>
    <p className="grimoire-callout">The Moon in the Shadowlands</p>
    <p>
      In Scorpio, the Moon descends into emotional depths that are difficult to
      navigate without conscious awareness. This fall placement intensifies
      feeling, drawing the emotional body toward hidden fears, unresolved
      attachments, and buried memories that resist easy release.
      <br />
      <br />
      Emotional responses here can feel overwhelming or all-consuming, marked
      by themes of trust, power, and vulnerability. There may be a tendency to
      guard the heart fiercely, or to hold onto pain as a form of protection.
      Safety is rarely assumed; it must be proven.
      <br />
      <br />
      Yet within this terrain lies profound emotional strength. When the Moon
      in Scorpio is tended with care, it develops the capacity to witness
      intense feeling without collapse, to transform emotional wounds into
      sources of insight, and to offer deep, uncompromising support through
      life&apos;s most difficult passages.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/02-moon/08-scorpio-moon">
        The Moon Placed in the Scorpio Zodiac →
      </Link>
    </p>
       <p>
      <Link href="/grimoire/astrology/04-transits/02-moon-transits/08-moon-in-scorpio-transit">
        The Moon Transiting the Scorpio Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of the Moon</h2>

  <p className="grimoire-label">
    Selene, the Living Moon
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon-myth.jpg"
      alt="Statue of Artemis, Roman marble after a Greek original"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Statue of Artemis of the Borghese type, Roman Art, 120-130 A.D.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In early Greek mythology, the Moon was personified as Selene, a radiant
      Titaness who rode her silver chariot across the night sky. Selene was not
      an abstract force but a living presence whose light governed tides,
      fertility, and the rhythms of sleep and waking. Her glow was believed to
      soften the world after sunset, illuminating what could not survive under
      the Sun&apos;s scrutiny.
    </p>

    <p>
      Selene&apos;s most famous myth is her love for the mortal Endymion, whom she
      placed into eternal sleep so she could visit him night after night,
      unchanged by time. Through this myth, the Moon became associated with
      longing, memory, repetition, and the quiet preservation of feeling. The
      Moon does not move forward like the Sun; she returns, revisits, and
      remembers.
    </p>

    <p className="grimoire-label">
      Artemis and the Lunar Guardian
    </p>

    <p>
      As Greek myth evolved, lunar symbolism expanded through Artemis, goddess
      of the hunt and protector of the wild. Artemis represented the Moon&apos;s
      vigilant, instinctual side: alert, untamed, and fiercely protective.
      Where Selene embodied emotional continuity, Artemis embodied emotional
      boundaries, intuition, and survival.
    </p>

    <p>
      Through Artemis, the Moon became linked to bodily cycles, thresholds, and
      sacred autonomy. Together, Selene and Artemis form the complete lunar
      archetype: reflection and instinct, memory and protection, vulnerability
      and inner strength. The Moon in myth is not passive light, but an active
      force shaping inner life, emotional response, and subconscious truth.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

{/* MOON PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Moon Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/moon/moon-symbol.png"
      alt="Moon Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/01-aries-moon">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Ember Heart</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Fast feelings and fierce instincts</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, momentum, honest release</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Action, movement, directness</p>
      <p className="grimoire-label-small">Do</p>
      <p>Move the emotion through the body before you explain it</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Start emotional fires just to feel alive</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Pause long enough to name the need, not just the urge</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/01-aries-moon">
          The Moon in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/02-taurus-moon">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Sanctuary of Sense and Spirit</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Steady emotions and loyal attachment</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Consistency, peace, reliability</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine, touch, familiar environments</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create simple rituals that make safety repeatable</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Stay stuck in discomfort just because it is familiar</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let change be slow and chosen, not avoided</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/02-taurus-moon">
          The Moon in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/03-gemini-moon">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Restless Mind</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Feelings processed through thought and language</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Conversation, clarity, mental movement</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Naming the feeling, asking questions, sharing</p>
      <p className="grimoire-label-small">Do</p>
      <p>Talk it out, write it out, translate the mood into meaning</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Overthink your way out of actually feeling it</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let the emotion exist before you edit it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/03-gemini-moon">
          The Moon in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/04-cancer-moon">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Heart at Home</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Deep feeling and instinctive nurturing</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Belonging, privacy, emotional safety</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Home energy, trusted people, familiar rhythms</p>
      <p className="grimoire-label-small">Do</p>
      <p>Protect your sensitivity with boundaries that honor it</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Carry everyone&apos;s emotions as proof of love</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Care for yourself the way you care for others</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/04-cancer-moon">
          The Moon in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/05-leo-moon">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Loyal Heart</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Warm emotions and big-hearted expression</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, affection, pride in self</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Play, romance, creativity, celebration</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let joy be a need, not a reward you earn</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Perform happiness to avoid vulnerability</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose validation that is steady, not dramatic</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/05-leo-moon">
          The Moon in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/06-virgo-moon">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Watchful Caretaker</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Emotion managed through order and care</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Stability, usefulness, clean systems</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine, practical solutions, small improvements</p>
      <p className="grimoire-label-small">Do</p>
      <p>Care for your nervous system with consistent basics</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse self-criticism with self-control</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let it be messy while you are healing</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/06-virgo-moon">
          The Moon in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/07-libra-moon">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Need for Harmony</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Emotion shaped through harmony and relationship</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Peace, fairness, shared understanding</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Beauty, balance, calm dialogue</p>
      <p className="grimoire-label-small">Do</p>
      <p>Say what you feel before resentment builds</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Abandon your needs to keep the peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let honesty be part of harmony</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/07-libra-moon">
          The Moon in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/08-scorpio-moon">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Moon in the Shadowlands</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intense emotions and truth-seeking instincts</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Loyalty, depth, honesty, emotional power</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Privacy, devotion, transformation</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let feelings move through you instead of becoming control</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Test people to confirm your fear</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Vulnerability is strength when it is chosen</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/08-scorpio-moon">
          The Moon in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/09-sagittarius-moon">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Restless Spirit</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Emotion that seeks meaning and freedom</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Space, truth, optimism, forward motion</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, adventure, a bigger perspective</p>
      <p className="grimoire-label-small">Do</p>
      <p>Change your environment when your spirit is shrinking</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use jokes and distance to avoid intimacy</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let commitment be a choice, not a cage</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/09-sagittarius-moon">
          The Moon in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/10-capricorn-moon">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Guarded Heart</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Emotions disciplined into responsibility</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect, structure, competence, long-term safety</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Plans, progress, tangible stability</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build a life that supports you, not just one you endure</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse control with security</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let trusted people witness your softer truth</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/10-capricorn-moon">
          The Moon in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/11-aquarius-moon">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Detached Observer</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Feelings filtered through ideas and distance</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, space, authenticity, community on your terms</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Perspective, innovation, chosen people</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let yourself feel it before you analyze it</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Disappear emotionally and call it independence</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Practice closeness without losing your selfhood</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/11-aquarius-moon">
          The Moon in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/02-moon/12-pisces-moon">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Moon{" "}
          <span className="grimoire-glyph">{"\u263E\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Tidal Heart</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Deep sensitivity and porous emotional boundaries</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Compassion, spiritual refuge, gentle space</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Music, dreams, solitude, surrender</p>
      <p className="grimoire-label-small">Do</p>
      <p>Ground your sensitivity with rituals that protect you</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Absorb everyone else&apos;s pain as your responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Boundaries are an act of love for your own spirit</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/02-moon/12-pisces-moon">
          The Moon in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* MOON CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Moon Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      The Moon governs emotional rhythm, instinct, memory, and subconscious
      response. In planetary astrology, the Moon reflects how experience is
      received, processed, and internalized rather than how events unfold
      externally.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* LUNAR MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label">Zodiac Cycle</p>
    <p>
      Approximately 27.3 days to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label">Phase Cycle</p>
    <p>
      Approximately 29.5 days from one New Moon to the next, based on the
      Moon&apos;s relationship to the Sun.
    </p>

    <p className="grimoire-label">Time Per Sign</p>
    <p>
      Approximately 2 to 3 days per zodiac sign.
    </p>

    <p className="grimoire-label">Astrological Focus</p>
    <p>
      Emotional response, instinctive behavior, habits, moods, and unconscious
      needs.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY THE MOON FEELS SO IMMEDIATE */}
  <h3 className="grimoire-subheading">Why the Moon Feels So Immediate</h3>

  <div className="grimoire-text">
    <p>
      The Moon moves faster than any other major planetary body used in
      astrology. Its influence is felt in real time rather than analyzed over
      long periods.
    </p>

    <p>
      Lunar cycles describe how experiences are processed rather than what
      happens externally, reflecting the Moon&apos;s rulership over the inner
      world, particularly emotional response. This is why Moon transits are
      often experienced as atmospheric shifts instead of defining life events.
    </p>
  </div>

  <div className="grimoire-divider" />

 {/* MOON PHASES */}
<h3 className="grimoire-subheading">Moon Phases and Emotional Cycles</h3>

<div className="grimoire-text">
  <p>
    The Moon&apos;s phases describe the emotional arc of each lunar month.
    These phases repeat approximately every 29.5 days and illustrate how
    awareness, feeling, and internal focus rise, peak, release, and reset.
  </p>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">New Moon</p>
    <p className="grimoire-label-small">The Reset</p>
    <p>
      Beginnings, internal reset, and emotional quiet. Awareness turns inward
      and gathers beneath the surface.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Waxing Crescent</p>
    <p className="grimoire-label-small">The Spark</p>
    <p>
      Emerging clarity and emotional momentum. Intentions begin forming without
      full visibility.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">First Quarter</p>
    <p className="grimoire-label-small">The Push</p>
    <p>
      Tension and movement. Internal needs meet external circumstances,
      prompting action and choice.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Waxing Gibbous</p>
    <p className="grimoire-label-small">The Fine-Tuning</p>
    <p>
      Refinement and adjustment. Emotional focus sharpens in anticipation of
      culmination.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Full Moon</p>
    <p className="grimoire-label-small">The Reveal</p>
    <p>
      Culmination and illumination. Emotional awareness peaks and subconscious
      material surfaces.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Waning Gibbous</p>
    <p className="grimoire-label-small">The Meaning</p>
    <p>
      Integration and reflection. Experiences are processed, contextualized,
      and understood.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Last Quarter</p>
    <p className="grimoire-label-small">The Release</p>
    <p>
      Release and recalibration. Habits loosen and emotional patterns are
      questioned.
    </p>
  </div>

  <div style={{ margin: "3.5rem 0" }}>
    <p className="grimoire-label">Waning Crescent</p>
    <p className="grimoire-label-small">The Exhale</p>
    <p>
      Rest, closure, and subconscious processing. Energy withdraws in
      preparation for renewal.
    </p>
  </div>
</div>
</section>

     <div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            {/* PLACEMENTS */}
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements">
                Moon Placements
              </Link>
            </div>

            {/* TRANSITS */}
            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits">
                Moon Transits
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