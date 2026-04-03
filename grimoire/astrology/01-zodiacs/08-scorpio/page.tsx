// app/grimoire/astrology/01-zodiacs/08-scorpio/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function ScorpioPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Scorpio Zodiac" subtitle="Skorpios">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/00-scorpio-zodiac/zodiac-scorpio.png?updatedAt=1770062733758"
              alt="Scorpio Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Some doors don&apos;t open with keys: they open when you&apos;re willing to die to who you were.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text"> 
          <p className="grimoire-subheading">October 21st to November 21st</p>
          <p>
            Scorpio is the "I Desire" energy of the Zodiac, the wave of intensity that sweeps through
            after Libra has weighed the scales. Where others skim the surface,
            Scorpio dives straight into the underworld of feeling, motive, and
            truth. This is the Zodiac of transformation, the place in the wheel
            where nothing half-alive is allowed to stay as it is.
            <br />
            <br />
            Associated with life, death, and rebirth, Scorpio energy is capable
            of reaching the dark depths of the self and alchemizing what it
            finds. Desire here is not shallow wanting, it&apos;s the urge to
            evolve, to merge, to strip away what is false so something more
            potent can be born. Its moods can swing through the full spectrum:
            from fierce devotion to total withdrawal, as it tracks what is real
            and what is merely pretending.
            <br />
            <br />
            Wherever Scorpio falls in your chart, that&apos;s where Source asks
            you to confront your shadows, reclaim your power, and learn the art
            of emotional honesty. This is the realm of soul contracts, karmic
            ties, and inner work that can&apos;t be undone once you begin. Here,
            endings are never just endings: they&apos;re the beginning of your
            next incarnation.
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
                <Link href="/grimoire/numerology/08-eight">Eight</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Power, transformation, karmic depth
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
              <p className="grimoire-correspondence-value">The Scorpion</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/10-pluto">Pluto</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/08-eighth-house">
                  Eighth House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/hades-god">Hades</Link>,{" "}
                <Link href="/grimoire/deities/pluto-god">Pluto</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/fixed">Fixed</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/16-reproductive-organs">
                  Reproductive Organs
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/19-eliminatory-system">
                  Eliminatory System
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/13-death">Death</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/02-sacral-chakra">Sacral</Link>
                {", "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/topaz">Topaz</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/malachite">Malachite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
                <Link href="/grimoire/crystals-stones/obsidian/black-obsidian">
                  Black Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/aquamarine">
                  Aquamarine
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
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="/grimoire/herbs/nettle">Nettles</Link>,{" "}
                <Link href="/grimoire/herbs/wormwood">Wormwood</Link>,{" "}
                <Link href="/grimoire/herbs/damiana">Damiana</Link>,{" "}
                <Link href="/grimoire/herbs/thistle">Thistle</Link>,{" "}
                <Link href="/grimoire/herbs/basil">Basil</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/cats-claw">Cat&apos;s Claw</Link>,{" "}
                <Link href="/grimoire/herbs/blue-lotus">Blue Lotus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Desire”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Intense, passionate, fluid, transformative, strong willpower,
                strong, private, secretive, loyal, brave, determined, intuitive,
                ambitious, mysterious, possessive, emotional
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Emotional intelligence, giving up control of others, trust,
                mindfulness, self control, patience, focus
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
              alt="Scorpio Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              The Scorpio Zodiac is associated with life, death, and rebirth. It
              is through Scorpio that Source can shed its old skin and embrace
              its expansion into a higher conscious self.
            </p>
            <p>
              In this sign, the Universe willingly walks into its own shadows.
              Scorpio is where Spirit chooses depth over comfort, and excavation
              over denial. Here, nothing that is false survives for long.
              Attachments are tested, loyalties are revealed, and power dynamics
              are dragged out into the open for alchemical review.
            </p>
            <p>
              Wherever Scorpio lives in your chart, Source is asking you to hold
              the torch in the underworld: to sit with what hurts, what haunts,
              and what still clings to old versions of you. Through this
              process, you learn that loss is rarely the end: it&apos;s the
              compost that feeds your next becoming.
            </p>
            <p>
              Scorpio reminds us that true magick isn&apos;t always pretty. It&apos;s
              the sacred work of endings, goodbyes, ego deaths, and emotional
              resurrections. What passes through this gate emerges sharper,
              clearer, and more honest than before.
            </p>
          </div>

          <div className="grimoire-divider" />

          
{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Scorpio in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/08-scorpio/17-scorpio-assets/scorpio-in-craft.png"
    alt="Scorpio witchcraft artwork"
    className="grimoire-img"
  />
</div>


  <div className="grimoire-text">
    <p>
      In witchcraft, Scorpio is transformation, shadow, and sacred intensity.
      This is magick that works beneath the surface, moving through emotional
      truth, psychic depth, and the willingness to confront what is hidden.
      Scorpio spellwork does not skim or soften. It penetrates, purges, and
      reshapes at the root.
    </p>

    <p>
      Working with Scorpio means working with power as an intimate exchange
      and transformation as a necessary death. This energy excels in banishing
      and uncrossing rituals, shadow work, protection through depth,
      cord cutting, taboo magick, sexual and life force workings, and rites of
      release, rebirth, and energetic reclamation. Scorpio does not seek
      comfort. It seeks truth and the power that comes from facing it fully.
    </p>

    <p>
      Scorpio is also the keeper of control and obsession. When used
      unconsciously, its magick can manipulate, dominate, or become consumed
      by resentment and secrecy. When worked with intention, it becomes
      alchemical power: the ability to transmute pain into wisdom, reclaim
      sovereignty through release, and move through endings without fear.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Shadow work and transformation rituals, banishing and uncrossing
        spells, cord cutting and release work, protection through depth,
        taboo and underworld magick, sexual and life force rituals,
        rebirth and regeneration enchantments
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Transformation, depth, shadow, emotional truth, power exchange,
        release, regeneration, psychic intensity, alchemy
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/08-scorpio/17-scorpio-assets/scorpio-art.png"
              alt="Scorpio artwork"
              className="grimoire-img"
            />
          </div>
        </section>

    {/* DIGNITIES */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Dignities</h2>

        <article className="grimoire-article">
  <p className="grimoire-label">Domicile (Traditional)</p>
   <p className="grimoire-section-subtitle">
    <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
  </p>
  <p className="grimoire-callout">The Blade Beneath the Surface</p>
  <p>
    When Mars enters Scorpio, the warrior descends underground. Mars rules
    action, drive, and survival; Scorpio rules depth, secrecy, and emotional
    intensity. Together, they produce a form of power that is quiet, deliberate,
    and relentless. This is not the Mars that charges headfirst into battle—it
    waits, watches, and strikes only when the outcome is certain.
    <br />
    <br />
    This placement manifests as immense stamina, strategic focus, and an
    instinctive understanding of leverage. Desire runs deep here, often tied to
    emotional bonds, loyalty, and the need to protect what is sacred. Anger is
    rarely impulsive; it is stored, refined, and released with precision.
    <br />
    <br />
    In domicile, Mars gives Scorpio the courage to face pain without flinching.
    This is the power to endure, to survive betrayal, loss, and crisis, and to
    emerge stronger because of it. When integrated, Mars in Scorpio creates
    protectors, strategists, and warriors who fight not for ego, but for truth
    and survival.
  </p>
  <p>
    <Link href="/grimoire/astrology/03-placements/05-mars-placements/08-scorpio-mars">
      Mars Placed in the Scorpio Zodiac →
    </Link>
  </p>
  <p>
    <Link href="/grimoire/astrology/04-transits/05-mars-transits/08-mars-in-scorpio-transit">
      Mars Transiting the Scorpio Zodiac →
    </Link>
  </p>
</article>


          <div className="grimoire-divider" />

          <article className="grimoire-article">
  <p className="grimoire-label">Domicile (Modern)</p>
   <p className="grimoire-section-subtitle">
    <Link href="/grimoire/astrology/02-planets/10-pluto">Pluto</Link>
  </p>
  <p className="grimoire-callout">The Underworld Made Conscious</p>
  <p>
    When Pluto enters Scorpio, the underworld feels like home. Pluto rules death,
    rebirth, power, and transformation; Scorpio governs intimacy, shadow, and
    energetic exchange. Their union creates a sign capable of profound
    metamorphosis—both within itself and within others.
    <br />
    <br />
    This placement brings an instinctive pull toward truth at any cost. Scorpio
    with Pluto in domicile is drawn to what is hidden, taboo, or denied, not out
    of morbid curiosity, but out of necessity. Illusion cannot survive here.
    What is false must be exposed so something real can take its place.
    <br />
    <br />
    In domicile, Pluto gives Scorpio regenerative power: the ability to shed
    identities, relationships, and patterns that have outlived their purpose.
    This is the archetype of the phoenix—not as a symbol, but as a lived
    experience. When integrated, Pluto in Scorpio produces healers, alchemists,
    and truth-bearers who are unafraid to walk through darkness to reclaim power.
  </p>
  <p>
    <Link href="/grimoire/astrology/03-placements/10-pluto-placements/08-scorpio-pluto">
      Pluto Placed in the Scorpio Zodiac →
    </Link>
  </p>
  <p>
    <Link href="/grimoire/astrology/04-transits/10-pluto-transits/08-pluto-in-scorpio-transit">
      Pluto Transiting the Scorpio Zodiac →
    </Link>
  </p>
</article>

    <div className="grimoire-divider" />
          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
            </p>
            <p className="grimoire-callout">The Lightning in the Depths</p>
            <p>
              An exalted placement can bring out the best expression of both
              energies. Uranus is the planet of innovation, disruption, and
              sudden change. In Scorpio, that electricity plunges into the
              deepest emotional and psychological waters.
              <br />
              <br />
              Together, these two can catalyze profound breakthroughs: sudden
              realizations that shatter outdated patterns, radical honesty that
              liberates you from buried shame, and unexpected events that force
              a transformation you secretly needed.
              <br />
              <br />
              It&apos;s not gentle energy, but it is wildly freeing when
              wielded with consciousness.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/08-scorpio-uranus">
                Uranus Placed in the Scorpio Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/08-uranus-in-scorpio-transit">
                Uranus Transiting the Scorpio Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
            </p>
            <p className="grimoire-callout">The Lover in the Lair</p>
            <p>
              Venus in Scorpio moves through one of its detriment placements.
              Gentle, relational Venus prefers ease, sweetness, and open warmth.
              Scorpio, however, pulls everything into the realm of intensity,
              control, and all-or-nothing bonds.
              <br />
              <br />
              This can create complications in energetic expression. Desire may
              come with suspicion, devotion with fear of betrayal, or love with
              a need to merge so completely that boundaries blur. Yet there is
              also great medicine here: the chance to learn that love does not
              have to be manipulative, and that depth does not require
              domination.
              <br />
              <br />
              When grounded, Venus in Scorpio can love fiercely and
              protectively, honoring vulnerability as sacred rather than using
              it as leverage.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
            </p>
            <p className="grimoire-callout">The Moon in the Shadowlands</p>
            <p>
              When a planet is in Fall placement it is considered to be one of
              its weaker expressions. The Moon represents our inner world,
              emotional needs, and instinctive responses. Scorpio is the deep
              dark territory of the Shadow Self, where unprocessed feelings and
              taboos live.
              <br />
              <br />
              In this placement, the emotional body can feel overwhelmed by the
              intensity of what arises. Trust, intimacy, and safety may be
              hard-won themes. There can be a constant push and pull for power
              in close relationships, or a tendency to hold onto hurt long after
              the moment has passed.
              <br />
              <br />
              Yet when this energy is worked with consciously, Moon in Scorpio
              grants an incredible capacity to hold space for the hardest
              truths: to witness pain without looking away, and to nurture
              others, and yourself, through the darkest nights of the soul.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/08-scorpio-moon">
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
  <h2 className="grimoire-subheading">
    Myths of the Scorpio Constellation
  </h2>

  <p className="grimoire-label">
    Orion, the Hunter, and the Scorpion
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/08-scorpio/17-scorpio-assets/scorpio-myth.png"
      alt="Scorpio constellation myth illustration"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Kruger, Peter (2013). Germanic Variants of The Scorpio and Orion Myth.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Orion was a great hunter, but his arrogance was his downfall. He
      boasted that he could kill any animal on Earth, and this angered
      Gaia, the Goddess of the Earth. To humble him, Gaia sent a
      scorpion to strike Orion down.
    </p>

    <p>
      The scorpion succeeded, and as a reward, Gaia placed it in the sky
      as the constellation Scorpio: opposite Orion so they would never
      be seen together again. When Orion sets, Scorpio rises, a celestial
      reminder that unchecked pride can be felled by forces smaller but
      no less powerful.
    </p>

    <p>
      Through this myth, Scorpio becomes the emblem of hidden strength,
      karmic consequence, and the truth that what lies beneath the
      surface can change everything.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Scorpio Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/08-scorpio/17-scorpio-assets/scorpio-stamp.png"
              alt="Scorpio Retrograde Symbol"
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
              <p>Unearthing secrets, shadow thoughts, and taboo truths</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Journal your intrusive thoughts, revisit old conversations with
                honesty, and name what you&apos;ve been too afraid to say out
                loud
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Weaponize information, stalk old wounds, or obsess over what
                can&apos;t be changed
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask yourself: “Is this thought helping me transform: or just
                helping me spiral?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/08-mercury-retrograde-in-scorpio">
                  Mercury Retrograde Through Scorpio →
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
              <p>Revisiting intense bonds, soul ties, and the cost of obsession</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine power dynamics in love, reflect on past entanglements,
                and choose vulnerability over control
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Test loyalty with mind games, rekindle toxic bonds just to feel
                something, or romanticize emotional chaos
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Ask: “Does this connection deepen my soul: or just feed my hunger?”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/08-venus-retrograde-in-scorpio">
                  Venus Retrograde Through Scorpio →
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
              <p>Reworking how you pursue desires, confront betrayal, and hold rage</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Channel anger into shadow work, physical movement, or honest
                dialogue: investigate what your jealousy is trying to teach you
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Seek revenge, lash out from paranoia, or test people&apos;s
                limits just to confirm your fears
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat anger as information: not a weapon. Ask what boundary it&apos;s
                begging you to set.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/08-mars-retrogrades-in-scorpio">
                  Mars Retrograde Through Scorpio →
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
              <p>Expanding through shadow work, taboo studies, and deep healing</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Study psychology, magick, trauma healing, and occult topics that
                call you: reflect on how you share energy, resources, and secrets
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Over-identify with your wounds, glamorize suffering, or chase
                crisis as a way to feel growth
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “What if my expansion came from integration, not from
                constant upheaval?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/08-jupiter-retrograde-in-scorpio">
                  Jupiter Retrograde Through Scorpio →
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
              <p>Facing karmic debts, responsibilities, and accountability in the underworld</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Take responsibility for your side of power struggles, set
                long-term boundaries, and honor the lessons of endings
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Refuse to own your patterns, cling to control, or project blame
                onto everyone else
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: closing a chapter with integrity is a spell that
                blesses your future.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/08-saturn-retrograde-in-scorpio">
                  Saturn Retrograde Through Scorpio →
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
              <p>Radical inner awakenings, breakthroughs in intimacy and trust</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Experiment with new ways of being vulnerable, free yourself from
                secrecy where it&apos;s become toxic, and allow surprising
                insights to shift stuck dynamics
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Blow things up impulsively just to feel free, or use shock value
                to avoid genuine closeness
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let revelations guide slow, intentional change instead of
                dramatic self-destruction.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/08-uranus-retrograde-in-scorpio">
                  Uranus Retrograde Through Scorpio →
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
              <p>Dissolving illusions around power, obsession, and emotional entanglement</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Name where fantasy has replaced reality, ground your spiritual
                practices, and seek clarity around shared resources and soul ties
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Use mysticism to justify unhealthy bonds, ignore red flags, or
                escape into addiction patterns
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>If it has to stay secret to survive, ask why: and whether it should.</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/08-neptune-retrograde-in-scorpio">
                  Neptune Retrograde Through Scorpio →
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
              <p>Deep-cycle transformation, endings, and rebirth of personal power</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Track long-term patterns of control, obsession, and fear: commit
                to the slow work of releasing what no longer serves your soul
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to roles, identities, or relationships that have already
                died energetically
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat every ending as an initiation. Ask: “Who am I becoming
                because this is over?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/08-pluto-retrograde-in-scorpio">
                  Pluto Retrograde Through Scorpio →
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
              <p>Healing wounds around betrayal, abandonment, and emotional intensity</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore therapy, ritual, or shadow work that lets you grieve
                deeply: practice trusting yourself again after past breaks
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume every closeness will end in betrayal, test people&apos;s
                loyalty relentlessly, or cling to pain as proof of strength
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My depth is not a curse: it&apos;s my power.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/08-chiron-retrograde-in-scorpio">
                  Chiron Retrograde Through Scorpio →
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/08-scorpio-sun">
                Sun in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/08-scorpio-moon">
                Moon in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/08-scorpio-mercury">
                Mercury in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/08-scorpio-venus">
                Venus in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/08-scorpio-mars">
                Mars in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/08-scorpio-jupiter">
                Jupiter in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/08-scorpio-saturn">
                Saturn in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/08-scorpio-uranus">
                Uranus in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/08-scorpio-neptune">
                Neptune in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/08-scorpio-pluto">
                Pluto in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/08-scorpio-chiron">
                Chiron in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/08-scorpio-ascendent">
                Ascendent in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/08-scorpio-descendent">
                Descendent in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/08-scorpio-midheaven">
                Midheaven in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/08-scorpio-imum-coeli">
                Imum Coeli in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/08-scorpio-lilith">
                Lilith in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/08-scorpio-north-node">
                North Node in Scorpio
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/08-scorpio-south-node">
                South Node in Scorpio
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/08-sun-in-scorpio-transit">
                Sun through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/08-moon-in-scorpio-transit">
                Moon through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/08-mercury-in-scorpio-transit">
                Mercury through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/08-venus-in-scorpio-transit">
                Venus through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/08-mars-in-scorpio-transit">
                Mars through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/08-jupiter-in-scorpio-transit">
                Jupiter through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/08-saturn-in-scorpio-transit">
                Saturn through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/08-uranus-in-scorpio-transit">
                Uranus through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/08-neptune-in-scorpio-transit">
                Neptune through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/08-pluto-in-scorpio-transit">
                Pluto through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/08-chiron-in-scorpio-transit">
                Chiron through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/08-north-node-in-scorpio-transit">
                North Node through Scorpio
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/08-south-node-in-scorpio-transit">
                South Node through Scorpio
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