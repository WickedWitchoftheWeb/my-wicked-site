// app/grimoire/astrology/01-zodiacs/01-aries/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function AriesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Aries Zodiac" subtitle="Krios">
  {/* HERO */}
  <section className="grimoire-hero">
    <div className="grimoire-hero-image">
      <img
        src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/00-aries-zodiac/aries-zodiac.png?updatedAt=1770062733607"
        alt="Aries Zodiac Wheel"
        className="grimoire-hero-img"
      />
    </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The flame does not ask the match for permission. It simply burns.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">March 21st to April 21st</p>
          <p>
            Aries is the 'I Am' energy of the zodiac. It is the raw surge of consciousness awakening to
            itself. The first spark of the wheel, it bursts onto the cosmic
            stage declaring existence with unfiltered enthusiasm and divine
            defiance. Known as the 'Point of All Beginnings', Aries represents
            life in motion. It is the moment Spirit chooses incarnation and says, “Let
            there be me.”
            <br />
            <br />
            Ruled by Mars, Aries is the fire of the head. It is instinct before
            intellect, and courage before certainty. It is the uprushing flame that
            pushes seeds through soil, ideas into form, and souls into action.
            Aries energy doesn&apos;t wait for permission, it acts, learns, and
            refines through experience. Its mission is to pioneer new paths, to
            lead where no one has yet dared, and to remind us that creation
            always begins with movement.
            <br />
            <br />
            Wherever Aries resides in your chart, that&apos;s where your
            personal dawn rises: where initiative, passion, and identity ignite.
            Here, Spirit learns the art of becoming by doing, and through every
            brave beginning, the universe renews itself once more...
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
                <Link href="/grimoire/numerology/01-one">One</Link>
              </p>
              <p className="grimoire-correspondence-description">
                The spark, the ignition, “I Am”, the beginning of the zodiacal
                year.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Ram</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/01-first-house">
                  First House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/ares-god">Ares</Link>,{" "}
                <Link href="/grimoire/deities/mars-god">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality">
                  Cardinal
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
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-ofthe-magickal-body/01-head">
                  Head
                </Link>
                {" & "}
                <Link href="/grimoire/parts-ofthe-magickal-body/02-neck">
                  Neck
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/04-the-emperor">
                  The Emperor
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/jasper">Jasper</Link>,{" "}
                <Link href="/grimoire/crystals-stones/bloodstone">
                  Bloodstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                , <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
                <Link href="/grimoire/crystals-stones/agate/fire-agate">
                  Fire Agate
                </Link>
                , <Link href="/grimoire/crystals-stones/ruby">Ruby</Link>,{" "}
                <Link href="/grimoire/crystals-stones/onyx">Onyx</Link>,{" "}
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tourmaline">
                  Tourmaline
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/iron">Iron</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/ginger">Ginger</Link>,{" "}
                <Link href="/grimoire/herbs/cayenne-pepper">Cayenne</Link>,{" "}
                <Link href="/grimoire/herbs/basil">Basil</Link>,{" "}
                <Link href="/grimoire/herbs/nettle">Nettle</Link>,{" "}
                <Link href="/grimoire/herbs/hibiscus">Hibiscus</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/yarrow">Yarrow</Link>,{" "}
                <Link href="/grimoire/herbs/hawthorn">Hawthorn</Link>,{" "}
                <Link href="/grimoire/herbs/milk-thistle">Milk Thistle</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Am”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Leadership, strength, bravery, self-confidence, initiative,
                courage
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Coordination, energy conservation, completion, self-fulfilment
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/17-aries-assets/aries-symbol-colored.png"
              alt="Aries Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

        <div className="grimoire-text">
  <p>
    Aries is Spirit before form, the moment consciousness realizes it can move.
    It is the soul&apos;s first ignition, the instant will enters the universe and
    says &quot;I Am here&quot;. Where Pisces dissolves and releases, Aries arrives.
    It does not ask permission. It begins.
  </p>
  <p>
    This is creation in its most primal state, unrefined, unscripted, and
    unapologetically alive. Aries is not concerned with outcome or consequence.
    Its wisdom is instinctual, driven by the sacred knowing that existence itself
    is an act of courage. To be is already a victory.
  </p>
  <p>
    Aries rules the head, the eyes, and the spark of awareness that directs
    action. Through this placement, Spirit learns orientation. Desire becomes
    direction. Impulse becomes intention. It teaches us that movement precedes
    mastery, and that clarity is often born only after the leap has been taken.
  </p>
  <p>
    Here, energy is not yet shaped, only expressed. It burns hot, fast, and
    honest, clearing space for all that will follow. Aries does not sustain the
    fire; it lights it. Without this ignition, nothing else can grow.
  </p>
  <p>
    Wherever Aries lives in your chart, life demands initiation. That house
    becomes your frontier, the place where you are asked to choose yourself
    first. Not to perfect, not to preserve, but to begin. Through Aries, the
    universe learns how to start.
  </p>
</div>
<div className="grimoire-divider" />



{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Aries in Witchcraft</h2>

   <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/17-aries-assets/aries-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Aries is ignition. This is the moment the spark catches,
      the will wakes up, and the spell stops being an idea and becomes a choice.
      Aries magick moves first: it breaks stagnation, clears fear, and restores
      the part of you that knows how to begin.
    </p>

    <p>
      Working with Aries means working with courage as a current. It supports
      spells for motivation, protection, reclaiming confidence, cutting cords,
      and taking back personal authority. Aries does not ask you to perfect the
      plan. Aries asks you to act with integrity, even while you are still
      learning.
    </p>

    <p>
      Aries is also a teacher of clean force. When used unconsciously, it can
      burn too hot and rush past wisdom. When used with devotion, it becomes a
      disciplined flame: direct, focused, and powerful enough to move your life
      forward.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Courage and confidence spells, motivation and momentum, protection and
        banishing, cord cutting, conflict resolution, leadership and visibility,
        breaking stagnation
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Initiation, willpower, bravery, sovereignty, heat, action, directness,
        conquest, personal power
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />


          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/17-aries-assets/aries-art.png?updatedAt=1770062732843"
              alt="Aries artwork"
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
              <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
            </p>
            <p className="grimoire-callout">The Warrior at Home</p>
            <p>
              This is Mars in its purest form: the warrior returned to its
              homeland. When Mars enters Aries, it moves with certainty,
              strength, and an instinctive sense of direction. There&apos;s no
              hesitation here; drive and desire align effortlessly, like the
              body and the breath. Every impulse feels guided by purpose, every
              action charged with fire.
              <br />
              <br />
              Mars rules Aries, making this placement feel natural: almost
              ancestral. Energy flows clean and direct, unclouded by doubt or
              overthinking. The will is sharp, the reaction swift, the
              motivation primal. This is the cosmic moment when passion and
              initiative fuse, birthing momentum that refuses to wait for
              approval or permission.
              <br />
              <br />
              Yet the same fire that fuels progress can also burn too hot.
              Patience runs thin, tempers quicken, and the urge to act may
              outrun reason. The lesson of this domicile is mastery through
              movement: learning when to strike, and when to steady the flame.
              <br />
              <br />
              When Mars moves through Aries, the collective pulse quickens. We
              remember our courage, reclaim our independence, and reawaken the
              part of us that doesn&apos;t ask if it can begin: only when.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
            </p>
            <p className="grimoire-callout">The Dawn of Fire</p>
            <p>
              When the Sun rises in Aries, light itself seems to remember its
              purpose. This is the solar spark in its purest expression: the
              fusion of vitality, courage, and will. The Sun represents the core
              of identity, and Aries is the first pulse of existence, the cry of
              I am. Together, they create a current of fierce self-definition
              and radiant initiative.
              <br />
              <br />
              This is a placement of ignition. The spirit burns bright, driven
              to lead, create, and conquer new ground. Passion surges like
              molten sunrise, coloring everything with urgency and bold intent.
              The world feels alive again: vivid, immediate, and ready for
              action. Confidence here doesn&apos;t ask for validation; it simply
              is, born from instinct and faith in motion.
              <br />
              <br />
              Yet with so much raw flame, temperance becomes the challenge. The
              same heat that fuels inspiration can scorch through patience or
              empathy if left unchecked. Still, when harnessed wisely, this
              combination is unstoppable: the soul illuminated by purpose, the
              will aflame with creation.
              <br />
              <br />
              Exalted, the Sun in Aries is the Universe&apos;s first
              breath of morning: brave, bright, and utterly unafraid to begin.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/01-sun-placements/01-aries-sun">
                The Sun Placed in the Aries Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/01-sun-transits/01-sun-in-aries-transit">
                The Sun Transiting the Aries Zodiac →
               </Link>
            </p>
          </article>

            <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
            </p>
            <p className="grimoire-callout">The Fire of Desire</p>
            <p>
              When Venus enters Aries, love trades its lace for leather. This is
              a bold, restless pairing: where the planet of harmony steps into
              the realm of heat, ruled by Mars, its cosmic opposite. Venus
              prefers softness, patience, and mutual attraction, while Aries
              charges forward with raw impulse and instinct. The result is a
              heart that wants both tenderness and conquest, sometimes in the
              same breath.
              <br />
              <br />
              This placement feels like a spark that won&apos;t sit still.
              Affection burns bright and fast, attraction is instant, and the
              thrill of pursuit often overshadows the comfort of connection.
              Aries wants to begin, while Venus longs to belong: and that tension
              creates the friction through which growth occurs. Here, love
              becomes a battlefield of self-discovery, showing us where passion
              meets vulnerability and where desire reveals the truth of what we
              truly value.
              <br />
              <br />
              While uncomfortable, this is not a curse: it&apos;s a catalyst.
              Venus in Aries teaches us how to love bravely, to express
              affection without fear, and to honor independence even in
              intimacy. It is the art of letting love move like fire: consuming,
              illuminating, and forever changing the landscape it touches.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/01-aries-venus">
                Venus Placed in the Aries Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/01-venus-in-aries-transit">
                Venus Transiting the Aries Zodiac →
              </Link>
            </p>
          </article>

            <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
            </p>
            <p className="grimoire-callout">The Weight of Fire</p>
            <p>
              When Saturn falls in Aries, the steady hand meets the spark, and
              neither quite knows how to yield. Aries moves fast: driven by
              impulse, fueled by instinct, while Saturn demands caution,
              patience, and proof. Their union creates a cosmic tug-of-war
              between acceleration and restraint, passion and control, ignition
              and inhibition. The result often feels like trying to sprint in
              chains: every impulse to act meets an invisible wall of self-doubt
              or delay.
              <br />
              <br />
              In this placement, discipline doesn&apos;t come naturally, yet it
              is precisely what must be learned. Saturn in Aries tests one&apos;s
              ability to master initiative without extinguishing it: to build
              endurance around inspiration, to hold a flame without letting it
              burn out or burn down. The frustration here is real: progress
              feels slow, and confidence easily falters under the weight of
              expectation.
              <br />
              <br />
              Still, within this friction lies profound growth. Saturn&apos;s
              restraint tempers Aries&apos; fire into focused willpower,
              transforming reckless spark into sustained strength. Through trial
              and resistance, this placement teaches that courage is not the
              absence of limits, but the mastery of them: the art of learning
              when to wait, and when to strike.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/01-aries-saturn">
                Saturn Placed in the Aries Zodiac →
              </Link>
            </p>
          </article>
            <div className="grimoire-divider" />
        </section>

       {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Aries Constellation
  </h2>

  <p className="grimoire-label">
    The Myth of Phrixus and Helle
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/17-aries-assets/aries-myth.png?updatedAt=1770062732966"
      alt="The Ludovisi Ares, Lysippus, 2nd-Century Copy"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      The Ludovisi Ares, Lysippus, 2nd-Century Copy, Wikipedia
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      The Greeks thought that the Aries constellation formed the shape
      of a ram&apos;s head, but the mythology comes from Phrixus&apos;s
      journey to safety. Phrixus and his twin brother, Helle, were the
      sons of King Athamas and the cloud nymph Nephelle, and as such,
      they were the mortal princes of Boeotia. The king and the nymph
      split when King Athamas fell in love with Ino, the mortal daughter
      of Cadmus. But after Ino and the king had children, Ino attempted
      to kill the twins Phrixus and Helle to secure the throne for her
      own children. Nephele, their mother, sent them a flying, golden
      fleeced ram to escape, though Helle fell off the back and drowned
      in the Hellespont (Dardanelles Strait). When Phrixus arrived
      safely in Clochis, he sacrificed the ram and its golden fleece to
      the gods in gratitude, and so they put it in the sky and it became
      the constellation Aries.
    </p>

    <p className="grimoire-label">
      Jason and the Argonauts
    </p>

    <p>
      There is some lore that states Phrixus gave the golden fleece to
      the king of Clochis, and later on, it became instrumental in the
      tale of Jason and the Argonauts: Jason was the son of Aeson, the
      king of the land of Iolcus, the city we now know as Volos, until
      he was killed by his half brother Pelias in an attempt to claim
      the throne that was rightfully Jason&apos;s. On a quest to reclaim
      power, Jason embarked on a journey to find the ram&apos;s golden
      fleece, which is not just a valuable object, but a symbol of
      kingship that would prove Jason as the true heir of Iolcus.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Aries Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/01-aries/17-aries-assets/aries-stamp.png?updatedAt=1770062732895"
              alt="Aries Retrograde Symbol"
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
              <p>Direct, fiery thinking turned inward</p>
              <p className="grimoire-label-small">Do</p>
              <p>Revisit old passions, speak from the heart, refine bold ideas</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Blurt without thinking, restart old conflicts</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Count to three before speaking or hitting “send”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/01-mercury-retrograde-in-aries">
                  Mercury Retrograde Through Aries →
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
              <p>Passion and self-image review</p>
              <p className="grimoire-label-small">Do</p>
              <p>Reflect on love as partnership, not conquest</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Jump into whirlwind romances, make drastic style changes</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Channel passion into art instead of impulse buys</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/01-venus-retrograde-in-aries">
                  Venus Retrograde Through Aries →
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
              <p>Strategic fire management</p>
              <p className="grimoire-label-small">Do</p>
              <p>Redirect energy into unfinished battles, work on stamina</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Pick fights, start too many new projects</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Keep one “big win” project and let the rest wait</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/01-mars-retrogrades-in-aries">
                  Mars Retrograde Through Aries →
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
              <p>Rethinking expansion through courage</p>
              <p className="grimoire-label-small">Do</p>
              <p>Reassess risks and leadership roles</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Overpromise, overextend resources</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Ask: “Does this risk align with my bigger vision?”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/01-jupiter-retrograde-in-aries">
                  Jupiter Retrograde Through Aries →
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
              <p>Rebuilding discipline with fire in check</p>
              <p className="grimoire-label-small">Do</p>
              <p>Revisit commitments that need renewed willpower</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Commit out of pride or competitiveness</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Turn stubbornness into structured follow-through</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/01-saturn-retrograde-in-aries">
                  Saturn Retrograde Through Aries →
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
              <p>Redefining rebellion and independence</p>
              <p className="grimoire-label-small">Do</p>
              <p>Innovate with intention, not impulse</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Blow things up just to feel free</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Change one thing at a time: let it stick before the next</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/01-uranus-retrograde-in-aries">
                  Uranus Retrograde Through Aries →
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
              <p>Clarity on idealism versus impulsive dreams</p>
              <p className="grimoire-label-small">Do</p>
              <p>Test bold visions against reality</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Charge ahead without a plan</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>For every “yes,” write down three practical next steps</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/01-neptune-retrograde-in-aries">
                  Neptune Retrograde Through Aries →
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
              <p>Transforming the will to act</p>
              <p className="grimoire-label-small">Do</p>
              <p>Face fears around leadership and autonomy</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Cling to control or refuse help</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Let go of one outdated way of “doing it all yourself”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/01-pluto-retrograde-in-aries">
                  Pluto Retrograde Through Aries →
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
              <p>Healing the wounds of self-assertion</p>
              <p className="grimoire-label-small">Do</p>
              <p>Practice healthy boundaries and self-advocacy</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Confuse aggression with strength</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My voice matters even when it&apos;s calm”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/01-chiron-retrogrades-in-aries">
                  Chiron Retrograde Through Aries →
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

              <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
              <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/01-aries-sun">
                Sun in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/01-aries-moon">
                Moon in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/01-aries-mercury">
                Mercury in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/01-aries-venus">
                Venus in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/01-aries-mars">
                Mars in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/01-aries-jupiter">
                Jupiter in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/01-aries-saturn">
                Saturn in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/01-aries-uranus">
                Uranus in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/01-aries-neptune">
                Neptune in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/01-aries-pluto">
                Pluto in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/01-aries-chiron">
                Chiron in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/01-aries-ascendent">
                Ascendent in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/01-aries-descendent">
                Descendent in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/01-aries-midheaven">
                Midheaven in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/01-aries-imum-coeli">
                Imum Coeli in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/01-aries-lilith">
                Lilith in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/01-aries-north-node">
                North Node in Aries
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/01-aries-south-node">
                South Node in Aries
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/01-sun-in-aries-transit">
                Sun through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/01-moon-in-aries-transit">
                Moon through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/01-mercury-in-aries-transit">
                Mercury through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/01-venus-in-aries-transit">
                Venus through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/01-mars-in-aries-transit">
                Mars through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/01-jupiter-in-aries-transit">
                Jupiter through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/01-saturn-in-aries-transit">
                Saturn through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/01-uranus-in-aries-transit">
                Uranus through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/01-neptune-in-aries-transit">
                Neptune through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/01-pluto-in-aries-transit">
                Pluto through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/01-chiron-in-aries-transit">
                Chiron through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/01-north-node-in-aries-transit">
                North Node through Aries
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/01-south-node-in-aries-transit">
                South Node through Aries
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