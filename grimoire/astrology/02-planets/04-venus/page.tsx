// app/grimoire/astrology/02-planets/03-venus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function VenusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Venus">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus.png"
            alt="Venus in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Venus reveals what you love, what you attract, and what you
              believe you are worthy of receiving.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Love • Value • Pleasure • Attraction • Harmony
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Venus in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Venus is the magnetism of your chart: the principle of attraction,
              pleasure, and value. Where the Sun defines who you are and the
              Moon reveals what you need, Venus shows what you desire and what
              you consider worth choosing.
            </p>

            <p>
              Venus governs love, beauty, money, aesthetics, and relational
              exchange. She describes how you give affection, how you receive
              it, and the standards you hold for intimacy and fulfillment.
            </p>

            <p>
              Wherever Venus sits in your chart is where you are learning
              balance, resonance, and discernment. Venus attracts what matches
              her frequency.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Venus</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Benefic • The Attractor • The Principle of Value
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Love, pleasure, harmony, beauty, desire, self-worth
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/earth">Earth</Link> • Sensuality •
              Embodiment
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

       {/* VENUSIAN CORRESPONDENCES */}
<section className="grimoire-correspondences">
  <h2 className="grimoire-subheading">Venusian Correspondences</h2>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Number</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/numerology/06-six">Six</Link>
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
      <Link href="/grimoire/timing/days-of-the-week/05-friday">Friday</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
    <p className="grimoire-correspondence-value">
      Rules{" "}
      <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link> &amp;{" "}
      <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
    </p>
    <p className="grimoire-correspondence-value">
      Exalted in{" "}
      <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>{" "}
      (traditional)
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Deities</h3>
    <p className="grimoire-correspondence-value">Aphrodite • Venus</p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Polarity</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/energy-grimoire/energy-&-polarity">Negative</Link>
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
      <Link href="/grimoire/parts-of-the-magickal-body/13-kidneys">Kidneys</Link>
      ,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/14-breasts">breasts</Link>,{" "}
      <Link href="/grimoire/parts-of-the-magickal-body/26-skin">skin</Link>,
      hormonal balance
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Tarot Card</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/tarot/major-arcana/03-the-empress">The Empress</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Crystals</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/crystals-stones/rose-quartz">Rose Quartz</Link>,{" "}
      <Link href="/grimoire/crystals-stones/emerald">Emerald</Link>,{" "}
      <Link href="/grimoire/crystals-stones/malachite">Malachite</Link>,{" "}
      <Link href="/grimoire/crystals-stones/rhodonite">Rhodonite</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Metals</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/metals/copper">Copper</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Herbs</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/herbs/rose">Rose</Link>,{" "}
      <Link href="/grimoire/herbs/hibiscus">Hibiscus</Link>,{" "}
      <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
      <Link href="/grimoire/herbs/vanilla">Vanilla</Link>
    </p>
  </div>

  <div className="grimoire-correspondence">
    <h3 className="grimoire-correspondence-label">Colors</h3>
    <p className="grimoire-correspondence-value">
      <Link href="/grimoire/colors/07-green">Green</Link>,{" "}
      <Link href="/grimoire/colors/01-white">White</Link>
    </p>
  </div>
</section>

<div className="grimoire-divider" />

       {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus-symbol-colored.png?updatedAt=1770442410542"
      alt="Venus Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Venus is the principle of attraction. Where the Sun defines purpose,
      the Moon defines experience, and Mercury defines understanding, Venus
      governs preference. It reveals what you are drawn to, what you value,
      and what feels worth choosing again and again.
    </p>

    <p>
      This is the archetype of harmony. Venus seeks coherence between inner
      desire and outer form. It rules pleasure, beauty, affection, and the
      subtle calibration of taste that allows a person to say yes, no, or
      this feels right. In the human psyche, Venus is the evaluative center:
      the place where worth is assigned and desire is shaped.
    </p>

    <p>
      In the cosmic body, Venus regulates balance. It smooths extremes,
      softens friction, and teaches the universe how to relate rather than
      collide. In the human body, it performs the same function. Venus rules
      the senses, attraction, receptivity, and the capacity to experience
      enjoyment without guilt or fear.
    </p>

    <p>
      Venus is the law of value. It asks not “Who am I?” or “What do I think?”
      but “What matters to me?” This is why Venus imbalance often manifests
      as insecurity, people-pleasing, overindulgence, or emotional scarcity.
      When worth is outsourced or denied, desire becomes distorted and
      connection begins to cost more than it gives.
    </p>

    <p>
      Wherever Venus sits in your chart, that is where your values seek
      expression. It marks how you love, what you attract, how you receive,
      and what you consider worthy of care. To tend Venus is to tend your
      relationship with pleasure and self-worth: to allow enjoyment without
      justification and to choose alignment over approval.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

      <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Venus in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Venus is the keeper of attraction and alignment. Venusian
      magick governs love, beauty, harmony, and the subtle forces that draw
      people, opportunities, and resources together. This is not coercive
      magick. Venus does not compel. She magnetizes.
    </p>

    <p>
      Working with Venus means working with desire as a guiding force. This is
      the current used for love spells, self-worth work, reconciliation,
      aesthetic enchantments, and prosperity rooted in pleasure rather than
      survival. Venusian workings operate by increasing resonance: when
      something aligns with your values, it moves toward you naturally.
    </p>

    <p>
      Venus teaches conscious reception. To work her magick effectively, you
      must be willing to receive without apology. Track Venus through her
      cycles and transits to recognize when attraction strengthens, when
      relationships soften, and when tending beauty and enjoyment restores
      energetic balance.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Love and relationship spells, self-worth and confidence work,
        reconciliation, beauty and glamour magick, harmony and peace workings,
        pleasure-based prosperity
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Attraction, harmony, beauty, pleasure, receptivity, value, alignment,
        affection
      </p>
    </div>

    <Link
      href="/grimoire/the-cosmos/04-venus"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Venus in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />



        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus-art.png"
            alt="Venus artwork"
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
      <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
    </p>
    <p className="grimoire-callout">The Garden of Earthly Devotion</p>
    <p>
      In Taurus, Venus is rooted in the physical world. Love is expressed
      through presence, consistency, and tangible care rather than promises or
      spectacle. Pleasure is not rushed or abstracted. It is cultivated slowly,
      like a garden tended through attention and time.
      <br />
      <br />
      This dignity strengthens loyalty, sensuality, and the capacity to sustain
      affection through routine and commitment. Venus here understands that
      devotion is built through repeated choice. Beauty is experienced through
      texture, comfort, and reliability rather than novelty.
      <br />
      <br />
      The challenge of this placement lies in attachment. When security becomes
      overidentified with possession, love can resist change even when growth
      is required. The lesson is discernment: to know when devotion nourishes
      and when it confines.
      <br />
      <br />
      When Venus is in domicile, love becomes something lived, embodied, and
      sustained. Pleasure is not indulgence, but a grounding force that anchors
      worth in the body and in the present moment.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/04-venus-placements/02-taurus-venus">
        Venus Placed in the Taurus Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/04-venus-transits/02-venus-in-taurus-transit">
        Venus Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
    </p>
    <p className="grimoire-callout">Love Without Edges</p>
    <p>
      In Pisces, Venus dissolves boundaries. Love becomes unconditional,
      compassionate, and expansive, unconcerned with fairness or reciprocity.
      This exaltation elevates empathy, forgiveness, and the ability to love
      beyond form, category, or expectation.
      <br />
      <br />
      Venus here expresses affection through sacrifice, imagination, and
      emotional merging. Beauty is found in vulnerability, art, and spiritual
      connection rather than structure or certainty. Romance takes on a mythic
      quality, colored by idealism and longing.
      <br />
      <br />
      Yet without grounding, devotion can slip into self-erasure. Boundaries
      may blur, and love may be offered where it cannot be received. The work
      of this exaltation is discernment: to love deeply without dissolving the
      self entirely.
      <br />
      <br />
      When Venus is exalted, love becomes a transcendent force, reminding us
      that compassion and imagination are just as powerful as desire.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/04-venus-placements/12-pisces-venus">
        Venus Placed in the Pisces Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/04-venus-transits/12-venus-in-pisces-transit">
        Venus Transiting the Pisces Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
    </p>
    <p className="grimoire-callout">The Lover in the Lair</p>
    <p>
      In Scorpio, Venus moves through intensity rather than ease. Love becomes
      consuming, protective, and deeply bound to themes of power and trust.
      Affection is rarely casual. It is earned, tested, and guarded.
      <br />
      <br />
      This placement heightens passion and emotional depth, but can struggle
      with vulnerability. Desire may intertwine with control, secrecy, or fear
      of loss. Love is not freely offered; it is negotiated through emotional
      stakes.
      <br />
      <br />
      Yet within this terrain lies transformative capacity. Venus in detriment
      can love fiercely and loyally once trust is established. Bonds formed
      here are resilient, forged through shared darkness rather than surface
      harmony.
      <br />
      <br />
      The lesson of this detriment is surrender: to allow love to transform
      without attempting to dominate it.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/04-venus-placements/08-scorpio-venus">
        Venus Placed in the Scorpio Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/04-venus-transits/08-venus-in-scorpio-transit">
        Venus Transiting the Scorpio Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
    </p>
    <p className="grimoire-callout">The Heart Under Inspection</p>
    <p>
      In Virgo, Venus becomes self-aware to the point of restraint. Love is
      evaluated, refined, and often delayed in favor of usefulness or
      improvement. Affection may feel conditional, offered only once standards
      are met.
      <br />
      <br />
      This fall placement values service, precision, and reliability, but can
      struggle with softness and ease. Pleasure may be postponed, and desire
      scrutinized rather than enjoyed. Love becomes something to be managed
      rather than felt.
      <br />
      <br />
      Yet this placement carries integrity. Venus in fall can express devotion
      through care, responsibility, and quiet loyalty. Love is shown through
      effort rather than display.
      <br />
      <br />
      The lesson here is permission: to allow joy without justification and to
      receive affection without needing to earn it through perfection.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/04-venus-placements/06-virgo-venus">
        Venus Placed in the Virgo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/04-venus-transits/06-venus-in-virgo-transit">
        Venus Transiting the Virgo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Venus</h2>

  <p className="grimoire-label">
    Aphrodite, Born of Sea and Desire
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus-myth-art.jpg"
      alt="Aphrodite of Knidos, Roman marble after a Greek original"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      The Ludovisi Knidian Aphrodite, Roman marble copy (torso and thighs)
      with restored head, arms, legs and drapery support, Artist Praxiteles,
      4th century BC
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Venus is rooted in the figure of Aphrodite, the
      goddess of love, beauty, and attraction. According to myth, Aphrodite
      was born from the sea foam created when Uranus&apos; severed essence fell
      into the ocean, making her a deity formed not through lineage, but
      through emergence. This origin links Venus to primal desire, creative
      force, and the instinct to bond, unite, and bring life into harmony.
    </p>

    <p>
      Aphrodite ruled not only romantic love, but aesthetic pleasure, fertility,
      and the magnetic pull that draws beings toward one another. Her power
      was subtle but absolute. Gods and mortals alike were influenced by her
      presence, demonstrating that desire shapes destiny as surely as power
      or law. Through Aphrodite, Venus became associated with pleasure as a
      sacred force and beauty as an expression of divine balance.
    </p>

    <p className="grimoire-label">
      Venus and the Power of Attraction
    </p>

    <p>
      In Roman mythology, Aphrodite evolved into Venus, whose influence
      expanded beyond personal desire into social cohesion, prosperity, and
      continuity. Venus governed relationships, alliances, and the values
      that bind communities together. She was revered not only as a lover,
      but as a unifying presence that softened conflict and encouraged peace
      through shared values.
    </p>

    <p>
      Through Venus, the planet came to represent attraction in all its forms:
      emotional, sensual, artistic, and relational. Venus in myth is not
      passive indulgence, but the force that draws matter, people, and ideals
      into alignment. She teaches that harmony is created through choice,
      appreciation, and the willingness to value what is worthy of care.
    </p>
  </article>
</section>

<div className="grimoire-divider" />

        {/* VENUS PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Venus Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/venus/venus-symbol.png"
      alt="Venus Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/01-aries-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2648\uFE0E"}</span> Aries Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Fire of Desire</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through passion, initiation, and pursuit</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Excitement, honesty, momentum, mutual spark</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Bold affection, chemistry, direct expression</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let desire be alive and active</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse intensity with long term compatibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Learn to stay once the spark has been lit</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/01-aries-venus">
          Venus in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/02-taurus-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2649\uFE0E"}</span> Taurus Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Garden of Earthly Devotion</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love rooted in loyalty, pleasure, and steady presence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Consistency, trust, touch, reliability</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine affection, shared values, physical closeness</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build love slowly and deeply</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Stay out of habit when desire has withered</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Allow love to evolve without threatening security</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/02-taurus-venus">
          Venus in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/03-gemini-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264A\uFE0E"}</span> Gemini Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Curiosity of Connection</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Affection expressed through conversation and discovery</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Engagement, curiosity, mental stimulation</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Shared ideas, laughter, playful exchange</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let curiosity deepen intimacy</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Scatter affection to avoid emotional depth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Stay present long enough for connection to root</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/03-gemini-venus">
          Venus in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/04-cancer-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264B\uFE0E"}</span> Cancer Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Bond of Emotional Safety</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through care and emotional protection</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Security, belonging, tenderness</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Home energy, nurturing gestures, intimacy</p>
      <p className="grimoire-label-small">Do</p>
      <p>Offer love that feels safe to land in</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use care as a substitute for trust</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let love flow without fear of loss</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/04-cancer-venus">
          Venus in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/05-leo-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264C\uFE0E"}</span> Leo Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Radiance of Devotion</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through pride, warmth, and loyalty</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, affection, celebration</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Romance, play, admiration</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love be generous and visible</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Perform affection to avoid vulnerability</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose mutual devotion over applause</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/05-leo-venus">
          Venus in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/06-virgo-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264D\uFE0E"}</span> Virgo Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Heart Under Inspection</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through care, service, and discernment</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Trust, reliability, emotional clarity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Consistency, helpfulness, quiet devotion</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love be practical and sincere</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse critique with care</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Allow love to be imperfect and still worthy</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/06-virgo-venus">
          Venus in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/07-libra-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264E\uFE0E"}</span> Libra Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Heart at the Scales</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through harmony and mutual regard</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Balance, fairness, shared beauty</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Partnership, diplomacy, calm exchange</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love be a shared act of balance</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Abandon your needs to preserve peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Include honesty as part of harmony</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/07-libra-venus">
          Venus in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/08-scorpio-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264F\uFE0E"}</span> Scorpio Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Lover in the Lair</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through intensity and emotional depth</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Loyalty, honesty, depth, exclusivity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Privacy, devotion, transformative bonds</p>
      <p className="grimoire-label-small">Do</p>
      <p>Love with courage and emotional truth</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Test devotion through control</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let trust replace fear as intimacy deepens</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/08-scorpio-venus">
          Venus in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/09-sagittarius-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2650\uFE0E"}</span> Sagittarius Venus{"\u00A0"}{" "}
         <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Love of Freedom</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through exploration and truth</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Space, meaning, shared adventure</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, travel, open horizons</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love expand rather than contain</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Run from commitment out of fear of limitation</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose freedom with responsibility</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/09-sagittarius-venus">
          Venus in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/10-capricorn-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2651\uFE0E"}</span> Capricorn Venus{"\u00A0"}{" "}
          <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Devotion of Commitment</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through responsibility and endurance</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Trust, loyalty, long term stability</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Consistency, structure, shared goals</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build love that lasts through action</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Withhold affection as a test of worth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let softness exist alongside strength</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/10-capricorn-venus">
          Venus in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/11-aquarius-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2652\uFE0E"}</span> Aquarius Venus{"\u00A0"}{" "}
        <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Love of the Unconventional</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through individuality and originality</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, authenticity, shared ideals</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Freedom within connection, chosen bonds</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love evolve beyond expectation</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach emotionally and call it independence</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Practice closeness without losing individuality</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/11-aquarius-venus">
          Venus in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/12-pisces-venus">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2653\uFE0E"}</span> Pisces Venus{"\u00A0"}{" "}
           <span className="grimoire-glyph venus">{"\u2640\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">Love Without Edges</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Love expressed through compassion and transcendence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Spiritual connection, gentleness, unity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Dreams, music, surrender, unconditional presence</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let love be expansive and forgiving</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dissolve boundaries in the name of devotion</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Honor love by protecting your own spirit</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/04-venus-placements/12-pisces-venus">
          Venus in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />


{/* VENUS CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Venus Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Venus governs values, attraction, pleasure, and relational patterns. In
      planetary astrology, Venus describes what is desired, how harmony is
      sought, and how connection, enjoyment, and appreciation are expressed.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* VENUSIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 1 year to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 3 to 5 weeks in each zodiac sign, depending on retrograde
      motion.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Values, attraction, pleasure, aesthetics, relationships, and personal
      tastes.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY VENUS FEELS SUBTLE AND PERSISTENT */}
  <h3 className="grimoire-subheading">Why Venus Feels Subtle and Persistent</h3>

  <div className="grimoire-text">
    <p>
      Venus moves at a moderate pace, slower than Mercury but faster than Mars,
      allowing its influence to develop gradually and linger. This steady
      movement shapes evolving preferences, relational dynamics, and emotional
      tone over weeks rather than days.
    </p>

    <p>
      Rather than creating sudden shifts, Venus reflects ongoing processes of
      attraction, evaluation, and enjoyment. Venus transits often feel like
      changes in taste, desire, or relational emphasis instead of overt external
      events.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements">
                Venus Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits">
                Venus Transits
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