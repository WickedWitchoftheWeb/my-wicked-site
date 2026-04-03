// app/grimoire/astrology/01-zodiacs/03-gemini/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function GeminiPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Gemini Zodiac" subtitle="Didumoi">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/03-gemini/00-gemini-zodiac/1zodiac-gemini.png"
              alt="Gemini Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Every question is a spell that turns silence into possibility.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">May 21st to June 21st</p>
          <p>
            Gemini is the "I Think: energy of the Zodiac. It is the moment Spirit learns to divide, reflect,
            compare, and communicate. As the first breath of Air in the Zodiac, it
            arrives as movement: thoughts flickering like light across water,
            ideas unfolding faster than form can contain. Ruled by Mercury,
            Gemini is mind-in-motion, the quicksilver awareness that turns
            perception into language and curiosity into connection.
            <br />
            <br />
            If Taurus roots us into the body, Gemini lifts us into the winds:
            the changeable breezes of early summer, here and gone in a heartbeat,
            yet always leaving you clearer, lighter, better for the exchange.
            This is the dance of duality, the twin sparks of consciousness
            mirroring one another: human and divine, inner and outer, question
            and answer, inhale and exhale.
            <br />
            <br />
            Gemini does not seek solidity; it seeks understanding. Its magick is
            found in dialogue, symbols, patterns, and the endless unfolding of
            “why?” Wherever Gemini appears in your chart, it activates the
            pathways of thought, speech, movement, and interpretation: teaching
            you how to translate the world and yourself in equal measure.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Number</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/numerology/03-three">Three</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Movement, expression, communication: expansion through mind
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Twins</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/03-third-house">
                  Third House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/hermes-god">Hermes</Link>,{" "}
                <Link href="/grimoire/deities/mercury-god">Mercury</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/mutable">
                  Mutable
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Polarity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Positive
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-ofthe-magickal-body/05-arms">Arms</Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/06-hands">
                  Hands
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/07-lungs">
                  Lungs
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/04-shoulders">
                  Shoulders
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/11-nervous-system">
                  Nervous system
                </Link>
              </p>
              <p>(two of everything; twins)</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/06-the-lovers">
                  The Lovers
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/pearl">Pearl</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/agate/blue-lace-agate">
                  Blue Lace Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/flourite">Flourite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amazonite">Amazonite</Link>
              </p>
            </div>

               <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/mercury">Mercury</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/peppermint">Peppermint</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/oat-straw">Oat Staw</Link>,{" "}
                <Link href="/grimoire/herbs/skullcap">Skullcap</Link>,{" "}
                <Link href="/grimoire/herbs/sage">Sage</Link>,{" "}
                <Link href="/grimoire/herbs/ginkgo">Ginkgo</Link>,{" "}
                <Link href="/grimoire/herbs/fenugreek">Fenugreek</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Think”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Energetic, quick, intellectual, mentally stimulating, playful,
                charming, social, adaptable, versatile, open-minded, engaging,
                youthful
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Slow down, follow through, discipline, focus, emotional control,
                independence
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* UNIVERSAL STANDPOINT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Universal Standpoint</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/17-gemini-assets/gemini-symbol-colored.png"
              alt="Gemini Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              Gemini is the cosmic mirror: two forces reflecting one another
              across the fabric of existence. Due to its Mercurial nature,
              its influence threads through everyone, shaping how we think,
              learn, speak, observe, and connect. This is the zodiac&apos;s living
              threshold between realms: the human facing the divine, the divine
              speaking through the human.
              <br />
              <br />
              Here, Spirit becomes storyteller. Consciousness divides itself so
              that it can know itself: through contrast, through comparison,
              through the exchange of ideas. Gemini represents the dual life we
              all embody: flesh and ether, logic and intuition, mortal and
              infinite.
              <br />
              <br />
              Wherever Gemini lives in your chart, messages flow. Information
              seeks you. Insight quickens. The mind awakens to its own
              complexity, learning not just to collect knowledge, but to weave
              it: to make meaning, to form connections, to bridge worlds with
              thought alone.
            </p>
          </div>
  <div className="grimoire-divider" />
        

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Gemini in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/03-gemini/17-gemini-assets/gemini-in-craft.png"
    alt="Gemini witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Gemini is movement, language, and mental exchange. This is
      magick that travels: through words, symbols, breath, and thought. Gemini
      workings are quick, adaptable, and mentally charged, designed to shift
      perception, open pathways, and transmit intention from one point to
      another.
    </p>

    <p>
      Working with Gemini means working with communication as spellcraft. This
      energy excels in charms, sigils, spoken spells, petitions, writing-based
      magick, and any working that relies on clarity, timing, or the exchange of
      information. Gemini does not anchor magick into stillness: it sends it
      outward, allowing it to circulate, connect, and evolve.
    </p>

    <p>
      Gemini is also a bridge between worlds. When used unconsciously, its energy
      can scatter or overthink. When worked with intention, it becomes agile
      power: curious, clever, and capable of weaving meaning between ideas,
      people, and possibilities.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Communication spells, sigil and word magick, learning and study work,
        divination and interpretation, social connection spells, travel and
        movement magick, adaptability and problem-solving workings
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal {"\u00A0"}Keys</h3>
      <p className="grimoire-correspondence-value">
        Communication, curiosity, adaptability, duality, intellect, language,
        connection, flexibility, information flow
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

        
          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/03-gemini/17-gemini-assets/gemini-art.png"
              alt="Gemini artwork"
              className="grimoire-img"
            />
          </div>
        </section>

       {/* DIGNITIES */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Dignities</h2>

  <article className="grimoire-article">
    <p className="grimoire-label">Domicile</p>
     <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/03-mercury">Mercury</Link>
    </p>
    <p className="grimoire-callout">The Mind in Its Element</p>
    <p>
      When Mercury moves through Gemini, thought becomes electric. This
      is Mercury returning to its airy throne: the realm of ideas,
      language, patterns, and perception. Here, the mind is swift,
      bright, and endlessly awake. Information flows like lightning
      through open sky, connecting dots that others don&apos;t yet know
      exist.
      <br />
      <br />
      This placement sharpens intellect, amplifies curiosity, and
      enhances communication with uncanny precision. Words become spells
      of clarity. Insights arrive in flashes. Questions multiply into
      revelations. It is the pure expression of mental agility and rapid
      understanding.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury">
        Mercury Placed in the Gemini Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/03-mercury-transits/03-mercury-in-gemini-transit">
        Mercury Transiting the Gemini Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
     <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/03-placements/17-north-node-placements">
        North Node
      </Link>
    </p>
    <p className="grimoire-callout">The Path of Becoming Through Thought</p>
    <p>
      The North Node in Gemini elevates learning into destiny. This
      exaltation pulls the soul forward through curiosity,
      communication, and the pursuit of truth. The lessons of this
      placement are written in conversation, discovery, and the courage
      to ask better questions.
      <br />
      <br />
      Here, the evolutionary path is mental expansion: embracing nuance,
      seeking multiple perspectives, and learning to hold paradox with
      grace. The North Node uses Gemini&apos;s wings to guide the soul into
      new intellectual landscapes, illuminating the karmic value of
      knowledge, dialogue, and flexible thinking.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/17-north-node-placements/03-gemini-north-node">
        North Node Placed in the Gemini Zodiac →
      </Link>
    </p>
      <p>
      <Link href="/grimoire/astrology/04-transits/12-north-node-trasits/03-north-node-gemini-transit">
        North Node Placed in the Gemini Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">
      The Strain Between Expansion and Precision
    </p>
    <p>
      Jupiter in Gemini is a scholar torn between two tempos. Jupiter
      strives to expand quickly, boldly, and broadly, while Gemini,
      guided by Mercury, prefers detail, clarity, and precision. Their
      desires conflict, stretching the mind in ways that can feel
      scattered or contradictory.
      <br />
      <br />
      This detriment challenges focus and consistency, but it also
      offers unique gifts. Jupiter&apos;s wide lens paired with Gemini&apos;s
      nimble intellect can produce extraordinary versatility: the
      ability to connect vast concepts, translate complex ideas, and
      learn across multiple disciplines.
      <br />
      <br />
      Here, expansion must be intentional rather than impulsive. Growth
      comes from collecting insight, comparing perspectives, and weaving
      wisdom from many sources.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/03-gemini-jupiter">
        Jupiter Placed in the Gemini Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/03-jupiter-in-gemini-transit">
        Jupiter Transiting the Gemini Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    
     <p className="grimoire-section-subtitle">No Planets Fall</p>
    <p>
      Gemini holds no planetary falls. Its airy, mutable nature does not
      confine or restrict, as its realm is too fluid and adaptable for any
      planet to reach its weakest expression here. All energies can
      learn to move, think, and communicate through the Gemini lens,
      even if not always comfortably.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />
{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Gemini Constellation
  </h2>

  <p className="grimoire-label">
    Castor and Pollux
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/03-gemini/17-gemini-assets/gemini-myth.png"
      alt="Castor and Pollux artwork"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Metropolitan Museum of Art, New York
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      The Gemini Constellation is associated with the myth of Castor and
      Pollux, two inseparable brothers with different fathers. Castor
      was the mortal son of King Tyndareus, and Pollux was the immortal
      son of Zeus. These differences didn&apos;t stop them from being
      thick as thieves, and when Castor was killed in the Battle of the
      Labyrinth, Pollux was devastated. He begged Zeus to allow Castor
      the same immortality Pollux had, so Zeus placed them both in the
      sky to create the Gemini Constellation.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Gemini Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/03-gemini/17-gemini-assets/gemini-stamp.png?updatedAt=1769917433905"
              alt="Gemini Retrograde Symbol"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-divider" />

          <div className="grimoire-grid">
            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades">
                   <span className="grimoire-glyph">☿</span> Mercury Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Mind rewiring &amp; message review</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit old conversations, rewrite projects, back up your notes,
                question your assumptions.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Multitask yourself into burnout; gossip; sign contracts without
                rereading them.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Pause before you hit “send” and ask: “Is this clear, kind, and
                necessary?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/03-mercury-retrograde-in-gemini">
                  Mercury Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades">
                   <span className="grimoire-glyph">☿</span> Venus Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Heart-to-heart communication review</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Talk through expectations, clarify love languages, revisit
                creative ideas with fresh eyes.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Flirt your way into confusion; overanalyze every text; make big
                relationship decisions on a whim.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                When in doubt, ask for clarity instead of filling the silence
                with stories.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/03-venus-retrograde-in-gemini">
                  Venus Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades">
                   <span className="grimoire-glyph">☿</span> Mars Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Scattered fire, focused will</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Channel energy into one or two mental projects at a time; move
                your body to clear mental static.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Argue just to be right; start ten new plans you never intend to
                finish.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Keep a “parking lot” list for new ideas so your brain can calm
                down and your actions stay intentional.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/03-mars-retrogrades-in-gemini">
                  Mars Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades">
                   <span className="grimoire-glyph">☿</span> Jupiter Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Editing your belief system</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reevaluate what you believe and why; study; compare multiple
                sources before choosing a path.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Spread yourself across too many classes, courses, or philosophies
                at once.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                For every big belief, write down the evidence that truly
                supports it, and what may need updating.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/03-jupiter-retrograde-in-gemini">
                  Jupiter Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades">
                   <span className="grimoire-glyph">☿</span> Saturn Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Discipline for the restless mind</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Create simple systems: schedules, study blocks, boundaries around
                social media and chatter.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Overcommit to mental labor; use busyness to avoid emotions or
                stillness.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Give your brain office hours: time when it works, and time when
                it is lovingly off duty.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/03-saturn-retrograde-in-gemini">
                  Saturn Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades">
                   <span className="grimoire-glyph">☿</span> Uranus Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Rewiring mental rebellion</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore unconventional ideas slowly; question where you rebel
                just to be contrary rather than true to yourself.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Blow up routines that work; doom-scroll radical opinions for the
                adrenaline of outrage.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let one thoughtfully chosen “weird” idea reshape your thinking
                instead of chasing constant chaos.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/03-uranus-retrograde-in-gemini">
                  Uranus Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades">
                   <span className="grimoire-glyph">☿</span> Neptune Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Mists of imagination vs. misinformation</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Fact-check intuitive hits; use journaling, poetry, and dreamwork
                to translate symbols.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Believe every rumor; get lost in fantasy chats that drain your
                energy.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “Is this insight, escapism, or someone else&apos;s projection?”
                before you act on new information.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/03-neptune-retrograde-in-gemini">
                  Neptune Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades">
                   <span className="grimoire-glyph">☿</span> Pluto Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Shadow work through words</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Notice the stories you tell about yourself; use therapy, shadow
                journaling, or deep conversations to transform them.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Weaponize information; keep secrets that poison you from the
                inside.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Change your inner script one sentence at a time: speak to
                yourself like you would to someone you&apos;re trying to heal.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/03-pluto-retrograde-in-gemini">
                  Pluto Retrograde Through Gemini →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades">
                   <span className="grimoire-glyph">☿</span> Chiron Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Healing through honest conversation</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Speak your truth gently; name the moments you felt misunderstood;
                practice listening as much as you share.
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Mask pain with jokes; change the subject whenever things get
                real.
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My voice is allowed to be both playful and profound.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/03-chiron-retrograde-in-gemini">
                  Chiron Retrograde Through Gemini →
                </Link>
              </p>
            </article>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-three-column-links">
            <div className="grimoire-three-column">
              <h3>Zodiacs</h3>

              <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
              <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
              <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">Scorpio</Link>
              <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                Sagittarius
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Placements</h3>

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/03-gemini-sun">
                Sun in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/03-gemini-moon">
                Moon in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/03-gemini-mercury">
                Mercury in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/03-gemini-venus">
                Venus in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/03-gemini-mars">
                Mars in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/03-gemini-jupiter">
                Jupiter in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/03-gemini-saturn">
                Saturn in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/03-gemini-uranus">
                Uranus in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/03-gemini-neptune">
                Neptune in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/03-gemini-pluto">
                Pluto in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/03-gemini-chiron">
                Chiron in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/03-gemini-ascendent">
                Ascendent in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/03-gemini-descendent">
                Descendent in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/03-gemini-midheaven">
                Midheaven in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/03-gemini-imum-coeli">
                Imum Coeli in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/03-gemini-lilith">
                Lilith in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/03-gemini-north-node">
                North Node in Gemini
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/03-gemini-south-node">
                South Node in Gemini
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/03-sun-in-gemini-transit">
                Sun through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/03-moon-in-gemini-transit">
                Moon through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/03-mercury-in-gemini-transit">
                Mercury through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/03-venus-in-gemini-transit">
                Venus through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/03-mars-in-gemini-transit">
                Mars through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/03-jupiter-in-gemini-transit">
                Jupiter through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/03-saturn-in-gemini-transit">
                Saturn through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/03-uranus-in-gemini-transit">
                Uranus through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/03-neptune-in-gemini-transit">
                Neptune through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/03-pluto-in-gemini-transit">
                Pluto through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/03-chiron-in-gemini-transit">
                Chiron through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/03-north-node-in-gemini-transit">
                North Node through Gemini
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/03-south-node-in-gemini-transit">
                South Node through Gemini
              </Link>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/astrology/01-zodiacs"
              className="grimoire-footer-link"
            >
              ← Back to The Twelve Signs of the Zodiac
            </Link>
          </p>

<p>
            <Link
              href="/grimoire/astrology"
              className="grimoire-footer-link"
            >
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