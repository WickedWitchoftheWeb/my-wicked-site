// app/grimoire/astrology/01-zodiacs/04-cancer/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function CancerPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Cancer Zodiac" subtitle="Karkinios">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/00-cancer-zodiac/zodiac-cancer.png?updatedAt=1770062733356"
              alt="Cancer Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The tide doesn&apos;t explain itself to the shore: it simply comes
              home.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">June 21st to July 21st</p>

          <p>
            Cancer is the "I Feel" energy of the Zodiac. It is the sacred pulse of emotion that moves beneath
            the surface of everything. As the first water sign of the Zodiac, it
            pours the unseen world into form, giving shape to intuition, memory,
            and the longing to belong. Often called the keeper of the hearth,
            Cancer is the force that gathers the scattered pieces of life and
            says, “This is home.”
            <br />
            <br />
            Ruled by the Moon, this is the tide of the heart. It is ever-shifting,
            luminous, and deeply responsive. It is the protective shell and the
            soft underbelly, the instinct to shield what is fragile while
            quietly nourishing what is growing. Cancer energy does not rush
            forward, but rather, it curls inward first, feeling its way through the currents
            before choosing when and how to move. Its mission is to create
            safety, to tend to the roots beneath every story, and to remind us
            that emotional truth is a power, not a weakness.
            <br />
            <br />
            Wherever Cancer resides in your chart, that&apos;s where your inner
            tides speak the loudest: where comfort, attachment, and devotion
            shape your choices. Here, Spirit learns the art of holding; holding
            space, holding memory, holding self and others close. Through every
            act of care, the universe remembers that protection and love are
            forms of magick all their own...
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
                <Link href="/grimoire/numerology/04-four">Four</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Foundation, home, roots, emotional structure
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Crab</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-the-moon">
                  Moon
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/04-fourth-house">
                  Fourth House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/hecate-goddess">Hecate</Link>,{" "}
                <Link href="/grimoire/deities/diana-goddess">Diana</Link>,{" "}
                <Link href="/grimoire/deities/luna-goddess">Luna</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/cardinal">
                  Cardinal
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Polarity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Negative
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-ofthe-magickal-body/14-breasts">
                  Breasts
                </Link>
                {" & "}
                <Link href="/grimoire/parts-ofthe-magickal-body/12-stomach">
                  Stomach
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/07-the-chariot">
                  The Chariot
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart</Link>
                {", "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/quartz/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/ruby">Ruby</Link>,{" "}
                <Link href="/grimoire/crystals-stones/pearl">Pearl</Link>,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/emerald">Emerald</Link>,{" "}
                <Link href="/grimoire/crystals-stones/alexandrite">
                  Alexandrite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/silver">Silver</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/aloe">Aloe</Link>,{" "}
                <Link href="/grimoire/herbs/fennel">Fennel</Link>,{" "}
                <Link href="/grimoire/herbs/peppermint">Peppermint</Link>,{" "}
                <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/vanilla">Vanilla</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Feel”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Nurturing, compassionate, loyal, creative, mysterious, enigmatic,
                sentimental, emotional, secretive, intuitive, passionate,
                intense, values home &amp; family, caring, sensitive
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Letting go, honesty, emotional control, equal give and take
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/17-cancer-assets/cancer-symbol-colored.png"
              alt="Cancer Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>
             <div className="grimoire-text">
  <p>
    Cancer is Spirit learning to belong. It is the moment consciousness realizes
    that in order to grow, it must first be held. Where Gemini scatters and
    explores, Cancer gathers and remembers. It turns awareness inward and asks
    not what can I know, but where do I feel safe enough to feel.
  </p>
  <p>
    This is creation wrapped in tenderness. Cancer is the womb of the cosmos, the
    protective intelligence that forms around what is becoming vulnerable. Its
    wisdom is emotional, instinctive, and deeply ancient, rooted in the
    understanding that nourishment is a prerequisite for transformation.
    Nothing blooms without care. Nothing survives without shelter.
  </p>
  <p>
    Cancer rules the chest, the stomach, and the tidal rhythms that govern
    feeling and memory. Through this placement, Spirit learns emotional gravity.
    Intuition becomes guidance. Attachment becomes meaning. It teaches us that
    sensitivity is not weakness, but the mechanism through which life recognizes
    what matters.
  </p>
  <p>
    Here, energy moves in cycles, not lines. It ebbs and returns, carrying
    memory, ancestry, and longing. Cancer does not rush forward. It circles,
    protects, and preserves. Its power lies in continuity, in the devotion to
    what has already been loved into existence.
  </p>
  <p>
    Wherever Cancer lives in your chart, life asks you to tend what is sacred.
    That house becomes your inner sanctuary, the place where you protect,
    nourish, and remember yourself. Through Cancer, the universe learns how to
    hold its own heart.
  </p>
</div>
<div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Cancer in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/04-cancer/17-cancer-assets/cancer-in-craft.png"
    alt="Cancer witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Cancer is emotional current, protection, and sacred
      belonging. This is magick that works through feeling, memory, and intuitive
      bonds rather than force or command. Cancer spellwork moves like water:
      subtle, responsive, and deeply attuned to emotional undercurrents.
    </p>

    <p>
      Working with Cancer means working with the home as a spell circle and the
      heart as a magickal vessel. This energy excels in protection workings,
      warding, home blessings, ancestral magick, dream work, emotional healing,
      and rituals centered on safety, care, and nourishment. Cancer does not push
      outcomes: it holds space for them to emerge organically.
    </p>

    <p>
      Cancer is also the keeper of memory. When used unconsciously, its magick
      can cling, overprotect, or resist change. When worked with intention, it
      becomes powerful emotional sovereignty: the ability to protect what
      matters, tend what is vulnerable, and create containers where healing can
      occur.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Protection and warding spells, home and hearth magick, emotional healing
        work, dream and subconscious rituals, ancestral and lineage magick,
        nurturing and fertility spells, safety and boundary enchantments
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Emotional attunement, intuition, protection, memory, belonging,
        receptivity, nurturing, psychic sensitivity, sacred space
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />


          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/04-cancer/17-cancer-assets/cancer-art.png"
              alt="Cancer artwork"
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
              <Link href="/grimoire/astrology/02-planets/02-the-moon">Moon</Link>
            </p>
            <p className="grimoire-callout">The Heart at Home</p>
            <p>
              When the Moon returns to Cancer, it settles into its own sacred
              nest. This is the lunar current in its purest expression: feeling
              first, thinking second, moving in rhythm with tides the mind can&apos;t
              always explain. Instincts sharpen, emotions swell, and the inner
              world becomes louder than anything outside.
              <br />
              <br />
              Here, sensitivity is strength. The urge to protect, nurture, and
              comfort comes as naturally as breathing. Memories glimmer like
              shells along the shoreline of consciousness, each one shaping how
              we respond to the present. The Moon in Cancer doesn&apos;t just
              observe emotion: it lives inside it, attuning to subtle shifts in
              energy and atmosphere.
              <br />
              <br />
              Yet this comfort can also cling. What feels familiar may be held
              long after it&apos;s healthy, and moods can rise and fall like
              tides with no warning. The lesson of this domicile is to honor the
              depth of feeling without drowning in it: to create containers for
              emotion that nourish rather than flood.
              <br />
              <br />
              When the Moon moves through Cancer, the collective heart softens.
              We remember our need for safety, for belonging, and for spaces
              where our feelings are not just tolerated, but treasured.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/04-cancer-moon">
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

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/06-jupiter">Jupiter</Link>
            </p>
            <p className="grimoire-callout">The Blessing of Belonging</p>
            <p>
              When Jupiter enters Cancer, generosity finds a home in the heart.
              The great expander moves through the sign of care and
              protectiveness, amplifying the desire to nourish, shelter, and
              emotionally invest in what we love. Here, abundance is measured
              not just in wealth or success, but in warmth, safety, and the
              feeling of being deeply supported.
              <br />
              <br />
              This placement magnifies intuition and empathy. Hope grows from
              the soil of family, tribe, and inner circle: those we&apos;re
              willing to grow and sacrifice for. Jupiter in Cancer asks: What
              would it look like to let compassion be your guiding philosophy?
              Where can generosity become a legacy, passed down like heirlooms?
              <br />
              <br />
              The challenge lies in overprotection and emotional excess: clinging
              too tightly, giving past your limits, or confusing comfort with
              stagnation. Yet when balanced, this exaltation creates a kind of
              quiet, radiant fortune: the kind that comes from knowing you are
              loved and that your love has somewhere to land.
              <br />
              <br />
              In Cancer, Jupiter reminds us that expansion doesn&apos;t always
              mean going farther: sometimes it means going deeper into the
              spaces and relationships that already hold us.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
           <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
            </p>
            <p className="grimoire-callout">The Wall Around the Home</p>
            <p>
              When Saturn moves into Cancer, the stern teacher enters the
              tenderest room in the house. Cancer longs to protect and comfort,
              while Saturn demands boundaries, tests, and earned rewards. One
              energy wants to soften; the other insists on structure. Together,
              they create a tension between emotional safety and necessary
              limits.
              <br />
              <br />
              This placement can feel like carrying the weight of family, home,
              or emotional responsibility on your back. It may manifest as
              feeling unappreciated in your care-taking, or as early lessons
              around security, belonging, and vulnerability. Walls may be built
              not just around the home, but around the heart.
              <br />
              <br />
              Yet within this discomfort lies profound maturation. Saturn in
              Cancer teaches the difference between caretaking and
              self-erasure: between devotion and self-denial. It asks us to
              create structures that support emotional life rather than
              suffocate it: healthy boundaries, sustainable giving, and the
              courage to say no when needed.
              <br />
              <br />
              When we work with this placement, loyalty becomes a choice, not a
              burden: and home becomes a place where responsibility and
              tenderness can coexist.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
            </p>
            <p className="grimoire-callout">The Armor in the Ocean</p>
            <p>
              When Mars falls in Cancer, the warrior wades into water and finds
              its usual tactics less effective. Mars prefers direct action,
              clean conflict, and visible progress; Cancer moves sideways,
              feeling its way through intuition and emotional nuance. The result
              is a push-pull between the urge to act and the urge to protect.
              <br />
              <br />
              This placement can manifest as mood-driven motivation: surges of
              energy followed by retreats into the shell. Anger may be held
              inside until it spills over, or expressed indirectly through
              defensiveness or withdrawal. Mars in Cancer doesn&apos;t fight
              for glory: it fights for the people and places it loves, often from
              the shadows rather than the front lines.
              <br />
              <br />
              While considered a place of weakness for Mars, this fall also
              offers a different kind of courage: the bravery to defend
              vulnerability, to stand up for emotional truth, and to honor
              sensitivity in a world that often dismisses it. The work here is
              learning how to act without abandoning your feelings: or letting
              your feelings paralyze your action.
              <br />
              <br />
              In Cancer, Mars teaches that there is power in soft armor, and
              that some battles are won not by charging ahead, but by refusing
              to abandon what your heart knows is sacred.
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
  <h2 className="grimoire-subheading">
    Myths of the Cancer Constellation
  </h2>

  <p className="grimoire-label">
    The Myth of Hera and Hercules
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/04-cancer/17-cancer-assets/cancer-myth.png"
      alt="Ancient vase depicting Hercules, the Hydra, and the crab Cancer"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Caeretan hydria-style vase, attributed to a workshop of two main
      artists.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Hera and Hercules had a complicated relationship fueled by Hera&apos;s
      jealousy. Hercules was Zeus&apos;s son by a mortal woman, and
      Hera resented him as yet another reminder of Zeus&apos;s
      faithlessness. In her anger, she sent a madness upon Hercules that
      drove him to kill his wife and children. As penance, Hercules was
      given Twelve Labors: seemingly impossible tasks by King Eurysheus.
    </p>

    <p>
      One of these labors was to slay the Hydra, a multi-headed serpent.
      During the fierce battle, Hera sent the crab Cancer to distract
      him, hoping to turn the tide in the Hydra&apos;s favor. The crab
      latched onto Hercules&apos; foot but was ultimately crushed under
      his heel. In honor of the creature&apos;s loyalty and effort, Hera
      placed the crab among the stars, where it became the
      constellation Cancer.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Cancer Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/04-cancer/17-cancer-assets/cancer-stamp.png"
              alt="Cancer Retrograde Symbol"
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
              <p>Memories resurfacing, emotional conversations revisited</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Journal your feelings, reconnect with trusted loved ones, clarify
                what home really means to you
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Spiral in old stories, assume others can read your mind, or send
                late-night heart texts you don&apos;t mean
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Before you speak or hit “send,” ask: “Is this coming from
                wounded past-me or present-day me?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/04-mercury-retrograde-in-cancer">
                  Mercury Retrograde Through Cancer →
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
              <p>Re-evaluating bonds, love languages, and emotional safety</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Nurture yourself, revisit relationship boundaries, honor what
                your heart truly needs to feel secure
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to connections out of fear, test people with silence, or
                romanticize the past beyond what it was
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Create a small altar or ritual for self-love: treat your own
                heart like the guest of honor.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/04-venus-retrograde-in-cancer">
                  Venus Retrograde Through Cancer →
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
              <p>
                Defending your boundaries from the inside out, not just in
                crisis
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Notice what triggers your defensiveness, channel emotion into
                movement, house projects, or cleansing rituals
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Lash out when hurt, use guilt as a weapon, or swallow your anger
                until it erupts
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                When emotions spike, step away, ground in your body, then come
                back and speak from your soft center: not your shell.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/04-mars-retrogrades-in-cancer">
                  Mars Retrograde Through Cancer →
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
              <p>
                Reviewing where you&apos;ve over-given, overpromised, or
                over-nurtured
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reassess emotional commitments, rebalance support systems, and
                invite help instead of doing it all yourself
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Take on more than you can carry, or confuse being needed with
                being loved
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                For every promise you make to others, make one quiet promise to
                your own future self.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/04-jupiter-retrograde-in-cancer">
                  Jupiter Retrograde Through Cancer →
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
              <p>
                Redefining emotional responsibilities, family roles, and the
                weight of duty
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Clarify expectations at home, release inherited burdens, and
                build boundaries that protect your tenderness
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Take on everyone&apos;s problems as your own, or punish yourself
                for needing rest
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “If I were my own child, would I expect this much from
                me?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/04-saturn-retrograde-in-cancer">
                  Saturn Retrograde Through Cancer →
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
              <p>
                Shaking up comfort zones, innovating how and where you feel at
                home
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Experiment with new routines, new spaces, or new ways of
                connecting that honor your emotional truth
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Burn down stable foundations just to escape discomfort, or hide
                breakthroughs because they feel “too different”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Make one small, deliberate change to your environment and let
                your energy adjust before the next.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/04-uranus-retrograde-in-cancer">
                  Uranus Retrograde Through Cancer →
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
              <p>
                Dissolving illusions around family, belonging, and emotional
                fantasy
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Question old stories you&apos;ve carried about your role in the
                family, your worthiness, and your caretaking
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Escape into nostalgia, martyrdom, or “saving” others at the
                expense of your own healing
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                For every rose-tinted memory, name one truth you&apos;re now
                ready to see clearly.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/04-neptune-retrograde-in-cancer">
                  Neptune Retrograde Through Cancer →
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
              <p>
                Transforming ancestral patterns, emotional power, and shadow
                attachments
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore family shadows, break generational cycles, and reclaim
                your right to feel deeply without shame
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to control through emotional manipulation, or keep secrets
                that are slowly poisoning your spirit
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Choose one inherited pattern and consciously decide: “This ends
                with me.”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/04-pluto-retrograde-in-cancer">
                  Pluto Retrograde Through Cancer →
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
              <p>
                Healing wounds around safety, abandonment, and emotional
                visibility
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Tend to inner-child work, practice asking for comfort, and let
                yourself be seen in your softness
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Pretend you&apos;re “fine” to avoid burdening others, or hide
                your needs until they explode
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Affirm: “My feelings are not too much: they are a map back to
                myself.”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/04-chiron-retrograde-in-cancer">
                  Chiron Retrograde Through Cancer →
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
              <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/04-cancer-sun">
                Sun in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/04-cancer-moon">
                Moon in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/04-cancer-mercury">
                Mercury in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/04-cancer-venus">
                Venus in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/04-cancer-mars">
                Mars in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/04-cancer-jupiter">
                Jupiter in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/04-cancer-saturn">
                Saturn in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/04-cancer-uranus">
                Uranus in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/04-cancer-neptune">
                Neptune in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/04-cancer-pluto">
                Pluto in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/04-cancer-chiron">
                Chiron in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/04-cancer-ascendent">
                Ascendent in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/04-cancer-descendent">
                Descendent in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/04-cancer-midheaven">
                Midheaven in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/04-cancer-imum-coeli">
                Imum Coeli in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/04-cancer-lilith">
                Lilith in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/04-cancer-north-node">
                North Node in Cancer
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/04-cancer-south-node">
                South Node in Cancer
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/04-sun-in-cancer-transit">
                Sun through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/04-moon-in-cancer-transit">
                Moon through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/04-mercury-in-cancer-transit">
                Mercury through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/04-venus-in-cancer-transit">
                Venus through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/04-mars-in-cancer-transit">
                Mars through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/04-jupiter-in-cancer-transit">
                Jupiter through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/04-saturn-in-cancer-transit">
                Saturn through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/04-uranus-in-cancer-transit">
                Uranus through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/04-neptune-in-cancer-transit">
                Neptune through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/04-pluto-in-cancer-transit">
                Pluto through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/04-chiron-in-cancer-transit">
                Chiron through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/04-north-node-in-cancer-transit">
                North Node through Cancer
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/04-south-node-in-cancer-transit">
                South Node through Cancer
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