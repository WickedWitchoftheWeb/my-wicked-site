// app/grimoire/astrology/02-planets/06-jupiter/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function JupiterPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Jupiter">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter.png"
            alt="Jupiter in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Jupiter doesn&apos;t bring luck: he reveals what you&apos;re ready to
              receive, and expands whatever you dare to claim.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Expansion • Blessings • Wisdom • Opportunity • Faith
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Jupiter in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Jupiter is the great expander of your chart: the force that
              increases whatever it touches. Where Saturn defines the limits of
              reality, Jupiter stretches them. He governs growth, optimism,
              abundance, meaning, belief systems, and the long-range vision that
              keeps you moving forward even when the path isn&apos;t fully visible.
            </p>

            <p>
              In astrology, Jupiter shows how you learn from life. It rules
              higher education, philosophy, spirituality, travel, and the inner
              compass that tells you: There&apos;s more. When Jupiter is aligned,
              you trust yourself enough to take risks that open doors. When
              he&apos;s distorted, you can overpromise, overindulge, or chase growth
              without grounding.
            </p>

            <p>
              Wherever Jupiter sits in your chart: by sign, house, and aspect,
              is where you are meant to expand your capacity. This is the area
              of life where blessings arrive when you meet them halfway: through
              courage, devotion, and willingness to grow into what you asked
              for.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Jupiter</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Benefic • The Expander • The Great Teacher
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Growth, abundance, wisdom, faith, luck, opportunity
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/fire">Fire</Link> • Expansion •
              Blessing
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* JOVIAN CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Jovian Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/03-three">Three</Link>
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
              <Link href="/grimoire/timing/days-of-the-week/05-thursday">
                Thursday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                Sagittarius
              </Link>{" "}
              &amp;{" "}
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </p>
            <p className="grimoire-correspondence-value">
              Exalted in{" "}
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>{" "}
              (traditional)
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">Zeus, Jupiter</p>
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
              <Link href="/grimoire/parts-of-the-magickal-body/15-liver">
                liver
              </Link>
              , hips, thighs, growth processes, metabolism of excess
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">Wheel of Fortune</p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
              <Link href="/grimoire/crystals-stones/lapis-lazuli">
                lapis lazuli
              </Link>
              , <Link href="/grimoire/crystals-stones/sapphire">sapphire</Link>,{" "}
              <Link href="/grimoire/crystals-stones/turquoise">turquoise</Link>,{" "}
              <Link href="/grimoire/crystals-stones/citrine">citrine</Link>
            </p>
          </div>

             <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/tin">Tin</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs &amp; Plants</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/sage">Sage</Link>,{" "}
              <Link href="/grimoire/herbs/cedar">cedar</Link>,{" "}
              <Link href="/grimoire/herbs/nutmeg">nutmeg</Link>,{" "}
              <Link href="/grimoire/herbs/cinnamon">cinnamon</Link>,{" "}
              <Link href="/grimoire/herbs/bay-leaves">bay leaves</Link>
            </p>
          </div>

               <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/02-blue">Blue</Link>,{" "}
              <Link href="/grimoire/colors/09-purple">Purple</Link>,{" "}
              <Link href="/grimoire/colors/04-gold">Gold</Link>
            </p>
          </div>
          </section>

        <div className="grimoire-divider" />

       {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter-symbol-colored.png"
      alt="Jupiter Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Jupiter is the principle of expansion. Where the Sun defines purpose,
      the Moon defines experience, Mercury defines understanding, Venus defines
      value, and Mars defines action, Jupiter governs meaning. It is the force
      that asks why and then reaches beyond the immediate horizon in search of
      growth, wisdom, and possibility.
    </p>

    <p>
      This is the archetype of belief. Jupiter rules philosophy, faith, ethics,
      and the stories we use to orient ourselves within a vast and complex
      world. In the human psyche, Jupiter is the meaning-making faculty: the
      place where experience is woven into worldview and life is understood as
      part of a larger narrative.
    </p>

    <p>
      In the cosmic body, Jupiter regulates expansion. It amplifies whatever it
      touches, teaching the universe how to grow, explore, and seek coherence
      across distance and difference. In the human body, it performs the same
      role. Jupiter governs optimism, confidence, enthusiasm, and the inner
      sense that life can be trusted to unfold.
    </p>

    <p>
      Jupiter is the law of abundance. It asks not “What should I do?” but “What
      is possible?” This is why Jupiter imbalance often manifests as excess,
      overconfidence, dogma, or blind faith. When meaning is inflated without
      discernment, wisdom turns into certainty and growth becomes indulgence.
    </p>

    <p>
      Wherever Jupiter sits in your chart, that is where your sense of meaning
      seeks expansion. It marks how you pursue knowledge, develop beliefs, and
      trust in life&apos;s capacity to support you. To tend Jupiter is to tend
      your relationship with hope and wisdom: to expand with humility, to seek
      truth without absolutism, and to grow without losing perspective.
    </p>
  </div>
</section>

<div className="grimoire-divider" />


       <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Jupiter in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Jupiter is the keeper of expansion and blessing. Jovian
      magick governs growth, opportunity, abundance, and the forces that allow
      something to become more than it currently is. This is not fast or
      aggressive energy. Jupiter works by widening the field so fortune,
      wisdom, and support can naturally flow in.
    </p>

    <p>
      Working with Jupiter means working with trust and vision. This is the
      current used for prosperity spells, success work, legal and ethical
      matters, spiritual study, and long-term goal setting. Jovian workings
      strengthen what already has potential, helping efforts gain momentum,
      recognition, and protection through alignment rather than force.
    </p>

    <p>
      Jupiter teaches intentional expansion. Excess without purpose leads to
      waste, but growth guided by wisdom leads to stability and influence.
      Track Jupiter through transits to understand when it is time to invest,
      teach, learn, or take a calculated leap of faith that supports lasting
      progress.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Prosperity and abundance spells, success and opportunity work,
        protection through blessing, legal and ethical magick, spiritual study
        and teaching, long-term goal expansion
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Expansion, wisdom, faith, abundance, growth, optimism, learning,
        protection
      </p>
    </div>

    <Link
      href="PASTE-YOUR-JUPITER-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Jupiter in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />


   <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter-art.png"
            alt="Jupiter artwork"
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
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">The Cosmic Explorer</p>
    <p>
      In Sagittarius, Jupiter expands freely. Meaning is pursued through
      experience, exploration, and the search for truth beyond familiar
      boundaries. Growth here is fueled by curiosity and faith rather than
      certainty.
      <br />
      <br />
      This dignity strengthens optimism, vision, and the willingness to take
      risks in the name of wisdom. Jupiter in Sagittarius trusts that life
      unfolds through movement and exposure. Learning comes from travel,
      philosophy, and direct engagement with the unknown.
      <br />
      <br />
      Yet unchecked expansion can overlook nuance. Confidence may outrun
      accuracy, and belief can harden into dogma. The lesson of this domicile
      is integration: to allow experience to broaden understanding without
      abandoning discernment.
      <br />
      <br />
      When Jupiter is in domicile, growth becomes a quest. Meaning is not
      inherited. It is discovered through lived experience.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/09-sagittarius-jupiter">
        Jupiter Placed in the Sagittarius Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/09-jupiter-in-sagittarius-transit">
        Jupiter Transiting the Sagittarius Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">The Blessing of Belonging</p>
    <p>
      In Cancer, Jupiter expands through care. Growth is nurtured rather than
      chased, and abundance arises from emotional connection, protection, and
      shared roots. Meaning here is found through family, memory, and
      belonging.
      <br />
      <br />
      This exaltation strengthens generosity, compassion, and the instinct to
      shelter what is vulnerable. Jupiter in Cancer understands that security
      creates fertile ground for growth. Faith is reinforced through trust and
      continuity.
      <br />
      <br />
      The shadow of this placement lies in overprotection. Expansion may stall
      if safety becomes confinement. The lesson is balance: to nourish without
      enclosing and to allow growth to move outward as well as inward.
      <br />
      <br />
      When Jupiter is exalted, blessing becomes relational. Abundance flows
      through care, not conquest.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/04-cancer-jupiter">
        Jupiter Placed in the Cancer Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/04-jupiter-in-cancer-transit">
        Jupiter Transiting the Cancer Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">
      The Strain Between Expansion and Precision
    </p>
    <p>
      In Gemini, Jupiter struggles to maintain coherence. Expansion pulls the
      mind outward while details multiply rapidly. Meaning can fragment as
      curiosity outruns synthesis.
      <br />
      <br />
      This placement may scatter focus, favoring information over wisdom.
      Knowledge accumulates without hierarchy, and beliefs may shift too
      quickly to stabilize. The challenge is integration: to connect ideas
      into a larger framework rather than chasing novelty endlessly.
      <br />
      <br />
      Jupiter here teaches discernment. Growth requires direction, not just
      accumulation. Expansion must be anchored to purpose in order to remain
      meaningful.
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

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">The Horizon Under Review</p>
    <p>
      In Virgo, Jupiter narrows rather than expands. Growth is filtered through
      critique, usefulness, and practicality. Vision is constantly examined
      for flaws before it is allowed to unfold.
      <br />
      <br />
      This placement can delay confidence and restrict faith. Expansion may
      feel conditional, granted only after proof or correction. Meaning is
      earned through service rather than assumed.
      <br />
      <br />
      Yet this detriment offers refinement. Jupiter in Virgo teaches humility
      and ethical responsibility. Growth becomes sustainable when inflated
      belief is replaced with grounded contribution.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/06-virgo-jupiter">
        Jupiter Placed in the Virgo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/06-jupiter-in-virgo-transit">
        Jupiter Transiting the Virgo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
    </p>
    <p className="grimoire-callout">The Measured Expansion</p>
    <p>
      In Capricorn, Jupiter grows cautiously. Expansion is slow, deliberate,
      and bound by structure. Faith is replaced with responsibility, and belief
      must justify itself through results.
      <br />
      <br />
      This placement can restrict optimism, favoring realism and restraint.
      Growth may feel earned only through effort, hierarchy, and endurance.
      However, what develops here is durable.
      <br />
      <br />
      The lesson of this fall is trust. Expansion does not require control to
      be valid. When faith is allowed to coexist with structure, Jupiter
      regains its vitality.
      <br />
      <br />
      Jupiter in fall teaches that true growth balances ambition with belief,
      allowing progress without rigidity.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/10-capricorn-jupiter">
        Jupiter Placed in the Capricorn Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/10-jupiter-in-capricorn-transit">
        Jupiter Transiting the Capricorn Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Jupiter</h2>

  <p className="grimoire-label">
    Zeus, King of the Gods
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter-myth-art.jpg"
      alt="Seated Zeus, Roman marble after a Greek original"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Zeus of Otricoli, 4th Century BC, Sculpture
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Jupiter is rooted in Zeus, ruler of Olympus and
      sovereign of the gods. Zeus rose to power by overthrowing the Titans,
      establishing a new cosmic order governed by law, hierarchy, and divine
      authority. As king, Zeus presided over justice, oaths, and the moral
      structure of the universe, ensuring that balance was maintained through
      reward and consequence.
    </p>

    <p>
      Zeus wielded the thunderbolt not merely as a weapon, but as a symbol of
      divine judgment and expansive power. His myths portray a god who governs
      growth, protection, and legitimacy, often intervening in mortal affairs
      to guide destiny or restore order. Through Zeus, Jupiter became associated
      with expansion, wisdom gained through experience, and the confidence that
      comes from rightful authority.
    </p>

    <p className="grimoire-label">
      Jupiter and the Law of Expansion
    </p>

    <p>
      In Roman mythology, Zeus was known as Jupiter, a name that emphasized his
      role as sky father and supreme protector of the state. Jupiter governed
      law, governance, and collective belief systems, shaping not only personal
      fortune but the moral direction of society itself. He represented faith
      in order, trust in leadership, and the promise that growth follows
      alignment with higher principles.
    </p>

    <p>
      Through Jupiter, the planet came to symbolize abundance, meaning, and
      the pursuit of truth on a grand scale. Jupiter in myth is not reckless
      excess, but guided expansion: growth that follows vision, ethics, and
      purpose. As both Zeus and Jupiter, this archetype teaches that prosperity
      flows from wisdom, and that belief shapes the world it seeks to understand.
    </p>
  </article>
</section>

<div className="grimoire-divider" />
        
        {/* JUPITER PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Jupiter Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/jupiter/jupiter-symbol.png"
      alt="Jupiter Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/01-aries-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2648\uFE0E"}</span> Aries Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Expanding Flame</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through bold action and initiative</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom to lead, room to act, belief in momentum</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Risk taking, confidence, forward motion</p>
      <p className="grimoire-label-small">Do</p>
      <p>Trust your instincts and grow by taking the first step</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse impulsiveness with wisdom</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let patience temper your fire so expansion lasts</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/01-aries-jupiter">
          Jupiter in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/02-taurus-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2649\uFE0E"}</span> Taurus Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Growth of Lasting Abundance</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Expansion through stability and persistence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Security, reliability, tangible progress</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Consistency, patience, building something enduring</p>
      <p className="grimoire-label-small">Do</p>
      <p>Invest your energy where it can compound over time</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Resist growth out of fear of disruption</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let expansion be slow and rooted so it can last</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/02-taurus-jupiter">
          Jupiter in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/03-gemini-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264A\uFE0E"}</span> Gemini Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Strain Between Expansion and Precision</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through ideas, learning, and exchange</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Mental stimulation, dialogue, flexibility</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Information, conversation, intellectual movement</p>
      <p className="grimoire-label-small">Do</p>
      <p>Expand knowledge while refining what truly matters</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Scatter your wisdom without integration</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let curiosity deepen into understanding</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/03-gemini-jupiter">
          Jupiter in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/04-cancer-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264B\uFE0E"}</span> Cancer Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Blessing of Belonging</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Expansion through care, protection, and emotional bonds</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Safety, family, shared roots</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Nurturing spaces, trusted relationships</p>
      <p className="grimoire-label-small">Do</p>
      <p>Grow by creating places where others feel held</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Overextend yourself to earn belonging</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let generosity begin at home</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/04-cancer-jupiter">
          Jupiter in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/05-leo-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264C\uFE0E"}</span> Leo Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Joy of Expansion</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through creativity and confidence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, inspiration, celebration</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Play, performance, wholehearted expression</p>
      <p className="grimoire-label-small">Do</p>
      <p>Lead with generosity and enthusiasm</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse applause with fulfillment</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let joy be shared so it multiplies</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/05-leo-jupiter">
          Jupiter in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/06-virgo-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264D\uFE0E"}</span> Virgo Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Horizon Under Review</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through refinement and discernment</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, usefulness, clarity</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Systems, improvement, practical wisdom</p>
      <p className="grimoire-label-small">Do</p>
      <p>Expand by improving what already exists</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Lose faith because perfection feels out of reach</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let service become a path to meaning</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/06-virgo-jupiter">
          Jupiter in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/07-libra-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264E\uFE0E"}</span> Libra Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Expansion of Fairness</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through harmony and justice</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Balance, mutual respect, shared values</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Partnership, diplomacy, ethical dialogue</p>
      <p className="grimoire-label-small">Do</p>
      <p>Grow by seeking what is fair for all involved</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Outsource your truth to keep the peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let integrity guide expansion</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/07-libra-jupiter">
          Jupiter in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/08-scorpio-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u264F\uFE0E"}</span> Scorpio Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Expansion of Power</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through depth and transformation</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Truth, intensity, meaningful evolution</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Psychological insight, rebirth, deep trust</p>
      <p className="grimoire-label-small">Do</p>
      <p>Expand by facing what others avoid</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Seek power without wisdom</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let transformation be guided by ethics</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/08-scorpio-jupiter">
          Jupiter in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/09-sagittarius-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2650\uFE0E"}</span> Sagittarius Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Cosmic Explorer</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Expansion through meaning, travel, and philosophy</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Truth, freedom, higher understanding</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, adventure, spiritual exploration</p>
      <p className="grimoire-label-small">Do</p>
      <p>Follow what inspires your sense of purpose</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Assume belief alone replaces responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Anchor vision with lived experience</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/09-sagittarius-jupiter">
          Jupiter in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/10-capricorn-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2651\uFE0E"}</span> Capricorn Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Measured Expansion</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through discipline and long-term effort</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Structure, progress, earned success</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Planning, mastery, responsibility</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build your future with patience and integrity</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse restraint with lack of faith</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let ambition serve a meaningful goal</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/10-capricorn-jupiter">
          Jupiter in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/11-aquarius-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2652\uFE0E"}</span> Aquarius Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Expansion of Vision</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through innovation and collective ideals</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, purpose, future possibility</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Systems thinking, progress, shared ideals</p>
      <p className="grimoire-label-small">Do</p>
      <p>Expand by improving the world you belong to</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach from humanity while chasing ideals</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let compassion ground your vision</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/11-aquarius-jupiter">
          Jupiter in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/12-pisces-jupiter">
          <span className="grimoire-glyph">{"\u00A0"}{"\u2653\uFE0E"}</span> Pisces Jupiter{"\u00A0"}{" "}
          <span className="grimoire-glyph jupiter">{"\u2643\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Expansion of Faith</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Growth through spirituality and compassion</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Meaning, surrender, trust in the unseen</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Art, mysticism, empathy, healing spaces</p>
      <p className="grimoire-label-small">Do</p>
      <p>Trust the current while staying anchored</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Lose yourself without direction</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let faith inspire action, not escape</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/12-pisces-jupiter">
          Jupiter in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* JUPITER CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Jupiter Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Jupiter governs growth, expansion, belief systems, wisdom, and meaning.
      In planetary astrology, Jupiter describes how understanding develops,
      how opportunity is pursued, and how confidence, faith, and perspective
      are cultivated over time.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* JUPITERIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 12 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 1 year in each zodiac sign.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Growth, learning, philosophy, belief systems, opportunity, and the
      pursuit of meaning and truth.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY JUPITER FEELS EXPANSIVE */}
  <h3 className="grimoire-subheading">Why Jupiter Feels Expansive</h3>

  <div className="grimoire-text">
    <p>
      Jupiter moves slowly enough for its influence to be felt across extended
      periods of development. Its transits mark chapters of growth rather than
      isolated events, shaping outlook, confidence, and long term direction.
    </p>

    <p>
      Rather than creating immediate change, Jupiter magnifies existing themes.
      Jupiter transits often feel like openings, invitations, or shifts in
      perspective that encourage exploration, optimism, and broader
      understanding.
    </p>
  </div>
</section>

 <div className="grimoire-divider" />
        
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements">
                Jupiter Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits">
                Jupiter Transits
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