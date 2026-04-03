// app/grimoire/astrology/01-zodiacs/09-sagittarius/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SagittariusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Sagittarius Zodiac" subtitle="Toxotes">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/00-sagittarius-zodiac/zodiac-sagittarius.png?updatedAt=1770062733668"
              alt="Sagittarius Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Some souls aren&apos;t meant to stay put: they&apos;re meant to
              follow the arrow of their curiosity past the edge of the map.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">November 21st to December 21st</p>
          <p>
            Sagittarius is the "I Perceive" energy of the Zodiac, the wild-hearted seeker that gallops
            onto the stage after Scorpio&apos;s deep transformation work. Ruled
            by Jupiter, this is the part of the Zodiac that wants to experience
            the world firsthand, not just read about it. Sagittarius energy is
            drawn to big skies, big ideas, and big questions: Why are we here?
            What does it all mean? Where is the next adventure?
            <br />
            <br />
            This fire sign carries a wanderlust of the spirit. Whether it&apos;s
            travel, study, spiritual pursuits, or creative risks, Sagittarius
            learns through exploration and experiment. It thrives on honesty,
            humor, and perspective, but can struggle with restlessness,
            impatience, and a tendency to leap before looking. The gift here is
            faith in the journey. The lesson is learning to stay long enough to
            integrate what you discover.
            <br />
            <br />
            Wherever Sagittarius appears in your chart, that&apos;s where Source
            hands you a bow and asks you to aim higher: to chase meaning, expand
            your worldview, and remember that your life is bigger than this one
            moment. This is where you&apos;re invited to trust the road, even if
            you can&apos;t see the whole map yet.
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
                <Link href="/grimoire/numerology/09-nine">Nine</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Completion, wisdom, philosophy
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
              <p className="grimoire-correspondence-value">The Archer</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/09-ninth-house">
                  Ninth House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/zeus-god">Zeus</Link>,{" "}
                <Link href="/grimoire/deities/jupiter-god">Jupiter</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/17-hips">
                  Hips
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/18-thighs">
                  Thighs
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/15-liver">
                  Liver
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/14-temperance">
                  Temperance
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/sodalite">Sodalite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/ruby">Ruby</Link>,{" "}
                <Link href="/grimoire/crystals-stones/topaz">Topaz</Link>,{" "}
                <Link href="/grimoire/crystals-stones/zircon">Zircon</Link>,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/sapphire/yellow-sapphire">
                  Yellow Sapphire
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/quartz/smokey-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>

             <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/tin">Tin</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/sage">Sage</Link>,{" "}
                <Link href="/grimoire/herbs/basil">Basil</Link>,{" "}
                <Link href="/grimoire/herbs/saffron">Saffron</Link>,{" "}
                <Link href="/grimoire/herbs/borage">Borage</Link>,{" "}
                <Link href="/grimoire/herbs/ashwagandha">Ashwagandha</Link>,{" "}
                <Link href="/grimoire/herbs/cayenne">Cayenne</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Perceive”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Determined, motivated, passionate, honest, social, optimistic,
                philosophical, curious, independent, idealistic, adventurous,
                direct, free spirited, intellectual, creative, artistic,
                forgiving, compassionate, blunt, impatient
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Focus, follow through, slowing down, sensitivity, coexistence
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/17-scorpio-assets/scorpio-symbol-colored.png"
              alt="Sagittarius Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              Sagittarius is child-like wonder made cosmic: Source grabbing a
              backpack, a bow, and a one-way ticket to everywhere. After
              Scorpio&apos;s descent into the underworld, Sagittarius emerges to
              ask: “What now? What did we learn? Where can this wisdom take
              us?”
            </p>
            <p>
              Known as the sign of the seeker, Sagittarius is where the Universe
              decides it cannot expand without experience. It roams across
              landscapes, cultures, beliefs, and philosophies, gathering stories
              and stitching them into a larger understanding of truth. Here,
              faith isn&apos;t blind: it&apos;s tested on the open road.
            </p>
            <p>
              Wherever Sagittarius lives in your chart, Source is inviting you
              to stretch beyond the familiar: to question the rules you&apos;ve
              inherited, to listen for your own inner compass, and to remember
              that wisdom is a living thing, not a finished book on a shelf.
            </p>
            <p>
              Sagittarius reminds us that the journey itself is sacred. Mistakes
              become teachings, detours become discoveries, and every horizon
              crossed becomes another page in your personal myth.
            </p>
          </div>

          <div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Sagittarius in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/09-sagittarius/17-sagittarius-assets/sagittarius-in-craft.png"
    alt="Sagittarius witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Sagittarius is expansion, truth seeking, and spiritual
      direction. This is magick that works through movement, belief, and the
      pursuit of meaning beyond the immediate moment. Sagittarius spellwork
      is future oriented and horizon focused, aiming not just to change
      circumstances but to understand them.
    </p>

    <p>
      Working with Sagittarius means working with intention as a compass and
      wisdom as a living path. This energy excels in vision work, travel and
      journey spells, spiritual study rituals, manifestation through belief,
      teaching and mentorship magick, and workings that align purpose with
      action. Sagittarius does not linger in the past. It aims forward and
      trusts the path will reveal itself through experience.
    </p>

    <p>
      Sagittarius is also the keeper of excess and dogma. When used
      unconsciously, its magick can become scattered, overconfident, or
      rooted in unquestioned belief. When worked with intention, it becomes
      guided expansion: faith tempered with wisdom, freedom anchored in
      responsibility, and the ability to seek truth without losing grounding.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Vision and goal setting rituals, travel and journey magick,
        manifestation through belief work, spiritual study and learning
        spells, teaching and mentorship enchantments, purpose alignment
        rituals, expansion and opportunity workings
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Expansion, truth seeking, wisdom, belief, freedom, direction,
        optimism, spiritual purpose, guided exploration
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/09-sagittarius/17-sagittarius-assets/sagittarius-art.png"
              alt="Sagittarius artwork"
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
              <Link href="/grimoire/astrology/02-planets/06-jupiter">
                Jupiter
              </Link>
            </p>
            <p className="grimoire-callout">The Cosmic Explorer</p>
            <p>
              This is a comfortable, familiar transit. Jupiter rules over the
              Zodiac of Sagittarius, so when these two are paired up they&apos;re
              able to express their energies as if it&apos;s second nature.
              Sagittarius provides the fire and direction: Jupiter provides the
              expansion, optimism, and sense of meaning.
              <br />
              <br />
              In domicile, this energy wants to grow in all directions: through
              travel, study, spiritual paths, and any experience that widens the
              lens. It can bring luck, confidence, and big opportunities, but
              also a tendency to overdo, overspend, or overpromise if it&apos;s
              not grounded.
              <br />
              <br />
              When handled with care, Jupiter in Sagittarius becomes a powerful
              teacher energy: generous, visionary, and willing to take brave
              leaps in the name of truth.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
             <p className="grimoire-section-subtitle">No Exalted Placements</p>
            <p>
              There are no exalted planetary placements in Sagittarius. This
              doesn&apos;t lessen the sign&apos;s power: it simply means its most
              natural expressions are found through its rulership with Jupiter
              and the way it interacts with the rest of your chart.
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/03-mercury">
                Mercury
              </Link>
            </p>
            <p className="grimoire-callout">The Messenger on a Wild Ride</p>
            <p>
              Mercury in Sagittarius moves through one of its detriment
              placements. Precise, detail-oriented Mercury wants to understand
              the small print: Sagittarius wants to chase the big picture. This
              can create tension between gathering facts and galloping toward
              the horizon.
              <br />
              <br />
              When these energies mix, communication can become blunt,
              exaggerated, or rushed. There may be a tendency to speak before
              thinking, jump to conclusions, or gloss over key details in favor
              of a grand idea. Yet there is also great magick here: the ability
              to think philosophically, to connect dots across disciplines, and
              to speak truth that inspires.
              <br />
              <br />
              With intention, Mercury in Sagittarius can learn to slow down
              enough to honor both the story and the structure it rides on.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury">
                Mercury Placed in the Sagittarius Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/09-mercury-in-sagittarius-transit">
                Mercury Transiting the Sagittarius Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">No Fall Placements</p>
            <p>
              No planets are considered to be in Fall in Sagittarius. The
              sign&apos;s lessons instead tend to show up through how far it&apos;s
              willing to go in pursuit of freedom, belief, and experience, and
              what it needs to learn about responsibility along the way.
            </p>
          </article>

          <div className="grimoire-divider" />
        </section>

          {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Sagittarius Constellation
  </h2>

  <p className="grimoire-label">
    Crotus, Keeper of the Muses
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/09-sagittarius/17-sagittarius-assets/sagittarius-myth.png"
      alt="Sagittarius constellation myth illustration"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Johannes Hevelius&apos; Sagittarius from Uranographia (1690).
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Some say Sagittarius is associated with Crotus, the son of Pan and
      nurse to the Muses. Crotus was thought to be skilled at hunting as
      well as music: a creature of both wild instinct and refined art.
    </p>

    <p>
      A lover of beauty in all its forms, Crotus delighted the Muses
      with his applause and appreciation. It is said they asked Zeus to
      place him in the sky to honor his talents and devotion, bow drawn,
      forever demonstrating his gifts for archery.
    </p>

    <p>
      Through this myth, Sagittarius becomes the celestial reminder that
      our passions, talents, and curiosity are meant to be expressed,
      not hoarded: that life is a living performance, and the point is
      to participate.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Sagittarius Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/09-sagittarius/17-sagittarius-assets/sagittarius-stamp.png"
              alt="Sagittarius Retrograde Symbol"
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
              <p>Rewriting your story, beliefs, and borrowed truths</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit old plans, courses, or teachings: question where your
                opinions came from: edit written work with a wiser lens
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Preach before you fact-check: overpromise on impulse: book
                chaotic travel without reading the details
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “Is this something I know: or something I&apos;ve just
                repeated for years?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/09-mercury-retrograde-in-sagittarius">
                  Mercury Retrograde Through Sagittarius →
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
              <p>Re-evaluating love, freedom, and shared adventures</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reflect on how you mix commitment with independence: revisit
                relationships built around travel, study, or spiritual growth
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Run at the first sign of discomfort: chase thrill over
                tenderness: use “freedom” as an excuse to avoid honesty
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “Does this connection expand my world: or just distract me
                from myself?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/09-venus-retrograde-in-sagittarius">
                  Venus Retrograde Through Sagittarius →
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
              <p>Rerouting your drive, ambitions, and risk-taking</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reconsider big moves, long trips, or bold launches: channel
                excess fire into learning, training, or physical activity
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Gamble with your energy: rush into battles for the sake of
                excitement: bulldoze others with blunt honesty
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat this period like target practice: refine your aim before
                releasing the arrow.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/09-mars-retrogrades-in-sagittarius">
                  Mars Retrograde Through Sagittarius →
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
                Inner expansion, philosophical upgrades, and course-correcting
                your path
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Review long-term goals, educational paths, and spiritual
                commitments: deepen your studies instead of multiplying them
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume growth only happens by going bigger: say yes to every
                opportunity: cling to beliefs that no longer resonate
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: sometimes expansion looks like simplifying to what
                truly matters.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/09-jupiter-retrograde-in-sagittarius">
                  Jupiter Retrograde Through Sagittarius →
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
                Responsibility for your beliefs, integrity, and long-distance
                commitments
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Check whether your actions align with your philosophy: commit to
                sustainable structures for your dreams and travels
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Preach standards you won&apos;t live by: flee when things get
                serious: ignore consequences in the name of “following your
                truth”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Integrity is a spell: cast it daily by doing what you say you value.</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/09-saturn-retrograde-in-sagittarius">
                  Saturn Retrograde Through Sagittarius →
                </Link>
              </p>
            </article>

            <div className="grimoire-divider" />

            <article className="grimoire-card">
              <h3 className="grimoire-label">
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades">
                  Uranus
                </Link>
              </h3>
              <p className="grimoire-label-small">Theme</p>
              <p>Sudden perspective shifts, radical new horizons within</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Stay open to unusual teachers, strange synchronicities, and
                surprising insights that change your trajectory over time
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Burn everything down out of boredom: chase chaos as “freedom”:
                ignore your body while chasing the next idea
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let epiphanies land before you act: write them down, sit with
                them, then adjust course.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/09-uranus-retrograde-in-sagittarius">
                  Uranus Retrograde Through Sagittarius →
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
                Clearing spiritual fog, fantasy-based beliefs, and escapist
                optimism
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Ground your spiritual practices, fact-check spiritual or mentor
                figures, and notice where “good vibes only” has blocked real
                healing
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Use spirituality to bypass hard conversations: ignore red flags:
                avoid grief by always chasing the “bright side”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Truth and compassion can coexist. Let your beliefs hold space for both.</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/09-neptune-retrograde-in-sagittarius">
                  Neptune Retrograde Through Sagittarius →
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
              <p>Deep transformation of worldview, purpose, and what you live for</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine the foundations of your beliefs: question entrenched
                dogma: allow your purpose to evolve beyond old identities
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to being “right” at all costs: force your perspective on
                others: attach your worth to a single path
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let your philosophy die and be reborn as many times as your soul
                requires.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/09-pluto-retrograde-in-sagittarius">
                  Pluto Retrograde Through Sagittarius →
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
                Healing around truth-telling, belief wounds, and feeling “too
                much” or “too naive”
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore where your honesty was punished, your curiosity shamed,
                or your optimism shut down: offer yourself the understanding you
                needed then
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Shrink your ideas to stay palatable: mock your younger self:
                assume you&apos;re foolish for still believing in magick
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My curiosity is holy, and my hope is a spell.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/09-chiron-retrograde-in-sagittarius">
                  Chiron Retrograde Through Sagittarius →
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
              <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">Scorpio</Link>
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/09-sagittarius-sun">
                Sun in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/09-sagittarius-moon">
                Moon in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/09-sagittarius-mercury">
                Mercury in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/09-sagittarius-venus">
                Venus in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/09-sagittarius-mars">
                Mars in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/09-sagittarius-jupiter">
                Jupiter in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/09-sagittarius-saturn">
                Saturn in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/09-sagittarius-uranus">
                Uranus in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/09-sagittarius-neptune">
                Neptune in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/09-sagittarius-pluto">
                Pluto in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/09-sagittarius-chiron">
                Chiron in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/09-sagittarius-ascendent">
                Ascendent in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/09-sagittarius-descendent">
                Descendent in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/09-sagittarius-midheaven">
                Midheaven in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/09-sagittarius-imum-coeli">
                Imum Coeli in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/09-sagittarius-lilith">
                Lilith in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/09-sagittarius-north-node">
                North Node in Sagittarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/09-sagittarius-south-node">
                South Node in Sagittarius
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/09-sun-in-sagittarius-transit">
                Sun through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/09-moon-in-sagittarius-transit">
                Moon through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/09-mercury-in-sagittarius-transit">
                Mercury through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/09-venus-in-sagittarius-transit">
                Venus through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/09-mars-in-sagittarius-transit">
                Mars through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/09-jupiter-in-sagittarius-transit">
                Jupiter through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/09-saturn-in-sagittarius-transit">
                Saturn through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/09-uranus-in-sagittarius-transit">
                Uranus through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/09-neptune-in-sagittarius-transit">
                Neptune through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/09-pluto-in-sagittarius-transit">
                Pluto through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/09-chiron-in-sagittarius-transit">
                Chiron through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/09-north-node-in-sagittarius-transit">
                North Node through Sagittarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/09-south-node-in-sagittarius-transit">
                South Node through Sagittarius
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