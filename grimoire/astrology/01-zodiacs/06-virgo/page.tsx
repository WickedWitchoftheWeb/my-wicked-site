// app/grimoire/astrology/01-zodiacs/06-virgo/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function VirgoPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Virgo Zodiac" subtitle="Parthenos">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/00-virgo-zodiac/zodiac-virgo.png?updatedAt=1770062733424"
              alt="Virgo Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Universe is rewritten in small steps: one careful choice, one
              quiet correction at a time.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">August 21st to September 21st</p>
          <p>
            Virgo is the "I Analyze" energy of the Zodiac, the sacred editor. After Leo
            blazes forth in radiant self-expression, Virgo arrives to refine,
            organize, and tend what has been created. This is the energy that
            notices what others miss, the quiet force committed to making
            existence more livable, functional, and aligned. Virgo doesn&apos;t
            seek perfection for vanity&apos;s sake: it seeks integrity.
            <br />
            <br />
            Ruled by Mercury, Virgo is earth that thinks. It is a mind that wants
            proof in practice, not just theory. It examines the moving parts of
            life, like the body, habits, systems, and relationships, and then asks how they can all
            work more smoothly. This energy is deeply capable, but often hard
            on itself, feeling the gap between what is and what could be. At
            its highest, Virgo becomes devotion in action: service, craft, and
            care offered with precision and humility.
            <br />
            <br />
            Wherever Virgo resides in your chart, that&apos;s where your inner
            healer, analyst, and sacred problem-solver lives. Here, Spirit
            learns to honor process over perfection, to treat every small
            adjustment as a spell of improvement, and to remember that tending
            the details is its own form of love...
          </p>
          <p>{/* more description paragraphs... */}</p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Number</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/numerology/06-six">Six</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Service, refinement, healing frequency
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Virgin</p>
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
                <Link href="/grimoire/astrology/06-houses/06-sixth-house">
                  Sixth House
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
                <Link href="/grimoire/parts-ofthe-magickal-body/10-digestive-system">
                  The Digestive System
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/09-the-hermit">
                  The Hermit
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
                {", "}
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/sapphire/blue-sapphire">
                  Blue Sapphire
                </Link>
                , <Link href="/grimoire/crystals-stones/peridot">Peridot</Link>,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amazonite">Amazonite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/agate/moss-agate">
                  Moss Agate
                </Link>
                , <Link href="/grimoire/crystals-stones/hemitite">Hemitite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/flourite">Flourite</Link>
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
                <Link href="/grimoire/herbs/fennel">Fennel</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/dill">Dill</Link>,{" "}
                <Link href="/grimoire/herbs/mint">Mint</Link>,{" "}
                <Link href="/grimoire/herbs/horehound">Horehound</Link>,{" "}
                <Link href="/grimoire/herbs/marjoram">Marjoram</Link>,{" "}
                <Link href="/grimoire/herbs/skullcap">Skullcap</Link>,{" "}
                <Link href="/grimoire/herbs/licorice">Licorice</Link>,{" "}
                <Link href="/grimoire/herbs/anise">Anise</Link>,{" "}
                <Link href="/grimoire/herbs/thyme">Thyme</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/basil">Basil</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Analyze”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Analytical, organized, hyper-focused, decisive, detail oriented,
                perfectionism, helpful, observant, introverted, hard working,
                reliable, loyal, disciplined, intelligent, modest, practical,
                self-oriented, thoughtful, service oriented
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Less criticism, more love, the difference between analysis and
                judgement, giving up control, mindfulness, inner mental peace
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/17-virgo-assets/virgo-symbol-colored.png"
              alt="Virgo Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

     <div className="grimoire-text">
  <p>
    Virgo is Spirit learning how to stay. It is the moment consciousness
    commits to the body, to time, and to the slow intelligence of refinement.
    Here, the soul stops asking only what is possible and begins asking what
    is sustainable, ethical, and true.
  </p>
  <p>
    Known as the Womb of Time, Virgo is where intention is tested by repetition.
    Through daily effort, lived consequence, and the quiet accumulation of
    experience, the universe sharpens itself. Wisdom here is not abstract; it
    is earned through practice, humility, and the willingness to improve what
    already exists.
  </p>
  <p>
    This is the sign where Spirit submits to process. Pain becomes information.
    Friction reveals misalignment. Small corrections, made with devotion,
    loosen patterns that once felt permanent. Virgo teaches that healing is
    not dramatic; it is precise. Not loud, but faithful.
  </p>
  <p>
    Virgo rules the hands that tend, the eyes that notice, and the nervous
    system that learns through discernment. It is the intelligence that knows
    how to sort signal from noise, to separate care from control, and to turn
    attention into an act of love.
  </p>
  <p>
    Wherever Virgo moves in your chart, the cosmos puts on its work-clothes
    through you. That house becomes a site of sacred maintenance, ritual
    repair, and service that restores balance not by force, but by care.
  </p>
  <p>
    Through Virgo, we remember that liberation is rarely one sudden awakening.
    It is the quiet miracle of choosing better again and again, until life
    itself begins to heal.
  </p>
</div>

          <div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Virgo in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/06-virgo/17-virgo-assets/virgo-in-craft.png"
    alt="Virgo witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Virgo is precision, discernment, and sacred refinement.
      This is magick that works through intention, repetition, and conscious
      devotion to craft. Virgo spellwork is not flashy or forceful. It is
      careful, deliberate, and deeply effective through attention to detail
      and energetic hygiene.
    </p>

    <p>
      Working with Virgo means working with ritual as a discipline and service
      as a magickal act. This energy excels in cleansing and purification
      workings, protection through preparation, healing rituals, herbal
      magick, daily devotional practices, spell refinement, and long term
      spiritual maintenance. Virgo does not rush outcomes. It perfects the
      process so the outcome can hold.
    </p>

    <p>
      Virgo is also the keeper of self critique and control. When used
      unconsciously, its magick can become rigid, overly analytical, or rooted
      in self judgment. When worked with intention, it becomes mastery:
      devotion without self erasure, discipline without punishment, and the
      ability to tend, heal, and refine both the self and the work with care
      and integrity.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Cleansing and purification rituals, healing and wellness magick,
        protection through preparation, herbal and plant magick, ritual
        maintenance and upkeep, spell refinement work, daily devotional
        practices, order and boundary enchantments
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Discernment, precision, devotion, refinement, service, healing,
        ritual discipline, energetic hygiene, sacred routine
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />


          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/06-virgo/17-virgo-assets/virgo-art.png"
              alt="Virgo artwork"
              className="grimoire-img"
            />
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* DIGNITIES */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Dignities</h2>

          <article className="grimoire-article">
            <p className="grimoire-label">Domicile</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/03-mercury">
                Mercury
              </Link>
            </p>
            <p className="grimoire-callout">The Mind in Motion</p>
            <p>
              When Mercury is in Virgo, the cosmic messenger finds one of its
              purest expressions. Here, thought becomes skill, language becomes
              precision, and insight turns into systems that actually work. This
              is not the airy curiosity of Gemini: it&apos;s the grounded,
              problem-solving intelligence that wants to fix, improve, and
              refine.
              <br />
              <br />
              In this domicile, perception sharpens. Patterns are spotted
              quickly, inconsistencies stand out, and the urge to organize the
              world into something more efficient grows strong. The mind
              delights in details, in methods, in the satisfaction of a process
              handled well.
              <br />
              <br />
              The challenge is learning when to stop editing, when “good enough”
              truly is enough. But when balanced, Mercury in Virgo becomes
              brilliant craftsmanship: the art of thinking in service to healing.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/03-mercury">
                Mercury
              </Link>
            </p>
            <p className="grimoire-callout">The Sacred Analyst</p>
            <p>
              Mercury is traditionally exalted in Virgo, meaning its qualities
              are lifted to a high, focused expression. Here, observation,
              discernment, and communication become powerful tools for healing.
              This is the mind that can diagnose, refine, and improve with
              remarkable clarity.
              <br />
              <br />
              In exaltation, Mercury&apos;s gifts are offered in devotion to
              something beyond ego: to craft, to service, to the well-being of
              others. It&apos;s the difference between criticism and care: the
              same sharp eye, but wielded with kindness and purpose.
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

           <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/06-jupiter">
                Jupiter
              </Link>
            </p>
            <p className="grimoire-callout">The Horizon Under Review</p>
            <p>
              When Jupiter is placed in Virgo, the expansive planet of faith and
              growth moves through a sign obsessed with specifics. Jupiter wants
              to zoom out, Virgo wants to zoom in: one seeks big-picture
              meaning, the other tends to the smallest moving parts. Their
              meeting can feel like spiritual ambition slowed by the need for
              proof, or optimism weighed down by critique.
              <br />
              <br />
              Yet this tension can also become a gift. Jupiter in Virgo learns
              to ground vision in practice, to express generosity through
              service, and to measure success not only in grand gestures, but in
              consistent, useful work. The task is to let faith survive
              analysis, and let analysis serve faith.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
            </p>
            <p className="grimoire-callout">The Heart Under Inspection</p>
            <p>
              When Venus falls in Virgo, the planet of love and pleasure moves
              through a sign that can&apos;t help but analyze everything. Venus
              wants warmth, acceptance, and ease; Virgo wants clarity,
              improvement, and control. Affection may show up as caretaking or
              helpfulness, but underneath lurks the fear of never being quite
              enough.
              <br />
              <br />
              This placement can make it hard to relax into love without
              mentally editing yourself or your partner. Yet it also contains
              the potential for deeply devoted, practical care: the kind of love
              that remembers your coffee order, fixes the thing that&apos;s
              broken, and shows up on time.
              <br />
              <br />
              The lesson of Venus in Virgo is to let the heart be imperfect, to
              choose compassion over constant correction, and to remember that
              not everything precious needs to be optimized.
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
  <h2 className="grimoire-subheading">
    Myths of the Virgo Constellation
  </h2>

  <p className="grimoire-label">
    Astraea and the Golden Age
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/06-virgo/17-virgo-assets/virgo-myth.png"
      alt="Astraea bas-relief"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Astraea bas-relief, 1886, Old Supreme Court Chamber at the Vermont
      State House.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Astraea, the Star Maiden and Goddess of Innocence and Purity,
      walked among mortals during the Golden Age: the first and most
      ideal era of humanity. In those early days, justice, harmony, and
      decency were woven into everyday life, and Astraea&apos;s presence
      symbolized the closeness of the divine to the human world.
    </p>

    <p>
      But as the ages passed, corruption, cruelty, and greed grew.
      Humanity drifted further from its original purity, and the world
      became heavier with war and wrongdoing. One by one, the gods
      retreated from the earth, but Astraea remained the longest,
      reluctant to abandon the mortals she hoped would remember their
      better nature.
    </p>

    <p>
      When she could no longer bear the weight of human vileness,
      Astraea finally withdrew to the heavens. There she became the
      constellation Virgo: a celestial reminder of the innocence we once
      knew and the integrity we are still capable of choosing. In her
      light lives Virgo&apos;s longing: to cleanse, to restore, and to
      bring the world a little closer to what it could be.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Virgo Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/06-virgo/17-virgo-assets/virgo-stamp.png"
              alt="Virgo Retrograde Symbol"
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
              <p>
                Rethinking plans, systems, and the stories you tell yourself
                about being “good enough”
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Double-check details, revise routines, organize your thoughts in
                writing, and allow time for honest review
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Spiral into self-criticism, micromanage everyone, or expect new
                plans to run perfectly on the first try
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat mistakes as data, not a verdict: update the system instead
                of attacking yourself.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/06-mercury-retrograde-in-virgo">
                  Mercury Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades">
                  <span className="grimoire-glyph">☿</span> Venus Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Reviewing how you give, receive, and overwork for love and
                approval
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reflect on acts of service as a love language, adjust
                expectations in relationships, and practice softer self-talk
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Keep score of every effort, nitpick yourself or others, or try
                to earn love through nonstop fixing
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “If I stopped performing and only offered what feels
                genuine, what would love look like?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/06-venus-retrograde-in-virgo">
                  Venus Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades">
                  <span className="grimoire-glyph">☿</span> Mars Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Reassessing how you spend your energy on tasks, work, and
                self-improvement
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Streamline to-do lists, prioritize what truly matters, and
                create sustainable action plans instead of frantic effort
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Overwork, obsess over minor flaws, or burn out chasing a
                constantly moving standard of “perfect”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat your body like a co-worker you respect: don&apos;t assign
                it more than it can reasonably complete.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/06-mars-retrogrades-in-virgo">
                  Mars Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades">
                  <span className="grimoire-glyph">☿</span> Jupiter Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Reevaluating beliefs about work, service, and self-worth</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Question stories that tie your value to productivity, explore
                new ways of being useful, and widen your definition of growth
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume more effort always equals more meaning, or dismiss
                possibilities that don&apos;t fit your old plans
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “What if the smallest, kindest habit I keep is actually my
                biggest miracle?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/06-jupiter-retrograde-in-virgo">
                  Jupiter Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades">
                  <span className="grimoire-glyph">☿</span> Saturn Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Facing the limits of your body, time, and nervous system around
                work and responsibility
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Build healthier boundaries with labor, refine your standards,
                and commit to realistic routines
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Take on every problem as yours to solve, turn discipline into
                self-punishment, or ignore signals of exhaustion
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let “good stewardship” include your own well-being, not just
                everyone else&apos;s needs.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/06-saturn-retrograde-in-virgo">
                  Saturn Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades">
                  <span className="grimoire-glyph">☿</span> Uranus Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Innovating your habits, workflows, and healing practices</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Experiment with new systems, technologies, or routines that
                support your body and mind more efficiently
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Blow up routines recklessly, or cling to outdated methods just
                because they feel “safe”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Change one small habit at a time and let each shift prove
                itself before adding the next.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/06-uranus-retrograde-in-virgo">
                  Uranus Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades">
                  <span className="grimoire-glyph">☿</span> Neptune Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Clearing confusion around sacrifice, martyrdom, and spiritual
                perfectionism
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Ground spiritual practices in body care, question where you
                over-give, and bring compassion into your self-assessment
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Use service to escape your own feelings, or chase impossible
                ideals of purity and goodness
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: being human is not a flaw in the ritual: it&apos;s the
                whole point.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/06-neptune-retrograde-in-virgo">
                  Neptune Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades">
                  <span className="grimoire-glyph">☿</span> Pluto Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Transforming obsessions with control, purity, and invisible
                labor
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine power dynamics in how you help others, confront
                compulsive fixing, and release what you can&apos;t manage alone
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to being indispensable, bury resentment under “it&apos;s
                fine,” or use work to avoid your own shadow
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let something imperfect live without your intervention: and
                watch what that frees in you.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/06-pluto-retrograde-in-virgo">
                  Pluto Retrograde Through Virgo →
                </Link>
              </p>
            </article>

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades">
                  <span className="grimoire-glyph">☿</span> Chiron Retrograde <span className="grimoire-glyph rx">℞</span>
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>
                Healing wounds around being “too much,” “too picky,” or “never
                enough”
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Work gently with self-talk, honor your sensitivity to details as
                a gift, and allow yourself to be helped: not just helpful
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Weaponize your standards against yourself, or assume your value
                lies only in what you fix
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “I deserve care that isn&apos;t earned by effort.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/06-chiron-retrograde-in-virgo">
                  Chiron Retrograde Through Virgo →
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
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/06-virgo-sun">
                Sun in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/06-virgo-moon">
                Moon in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/06-virgo-mercury">
                Mercury in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/06-virgo-venus">
                Venus in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/06-virgo-mars">
                Mars in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/06-virgo-jupiter">
                Jupiter in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/06-virgo-saturn">
                Saturn in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/06-virgo-uranus">
                Uranus in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/06-virgo-neptune">
                Neptune in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/06-virgo-pluto">
                Pluto in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/06-virgo-chiron">
                Chiron in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/06-virgo-ascendent">
                Ascendent in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/06-virgo-descendent">
                Descendent in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/06-virgo-midheaven">
                Midheaven in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/06-virgo-imum-coeli">
                Imum Coeli in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/06-virgo-lilith">
                Lilith in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/06-virgo-north-node">
                North Node in Virgo
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/06-virgo-south-node">
                South Node in Virgo
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/06-sun-in-virgo-transit">
                Sun through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/06-moon-in-virgo-transit">
                Moon through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/06-mercury-in-virgo-transit">
                Mercury through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/06-venus-in-virgo-transit">
                Venus through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/06-mars-in-virgo-transit">
                Mars through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/06-jupiter-in-virgo-transit">
                Jupiter through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/06-saturn-in-virgo-transit">
                Saturn through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/06-uranus-in-virgo-transit">
                Uranus through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/06-neptune-in-virgo-transit">
                Neptune through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/06-pluto-in-virgo-transit">
                Pluto through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/06-chiron-in-virgo-transit">
                Chiron through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/06-north-node-in-virgo-transit">
                North Node through Virgo
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/06-south-node-in-virgo-transit">
                South Node through Virgo
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