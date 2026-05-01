// app/grimoire/astrology/01-zodiacs/02-taurus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TaurusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Taurus Zodiac" subtitle="Tauros">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/02-taurus/00-taurus-zodiac/taurus-zodiac.png?updatedAt=1769482868371"
              alt="Taurus Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “You can lead a bull to water, but you can’t force it to drink.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">April 21st to May 21st</p>
          <p>
            Taurus is the "I Have" energy of the Zodiac. It is the moment Spirit roots itself into form and
            remembers the pleasure of existing. Where Aries erupts forward,
            Taurus arrives fully, settling into the body, the senses, and the
            fertile soil of the physical realm. This is the first earth sign,
            fixed in its rhythm, deliberate in its pace, and profoundly attuned
            to the richness of the material world.
            <br />
            <br />
            If Aries is the strike of the match, Taurus is the steady candle
            that follows; the warmth that lingers, the glow that sustains. Known
            as “the freshly plowed earth of springtime, ready for the seed,”
            Taurus transforms inspiration into embodiment, passion into
            substance, and desire into something you can touch, taste, and trust.
            <br />
            <br />
            Ruled by Venus, Taurus is creation as devotion: the art of savoring,
            cultivating, and building with patience. It teaches that what we
            hold dear reveals who we are, and that true value is felt, not
            proclaimed. Taurus energy doesn&apos;t rush; it listens, it gathers, it
            shapes reality slowly, steadily, and with unshakable purpose.
            <br />
            <br />
            Wherever Taurus resides in your chart, that&apos;s where Spirit inhabits
            its body most fully. It is where your values crystallize, where stability
            becomes sacred, and where manifestation unfolds through presence,
            pleasure, and unwavering commitment to what matters.
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
                <Link href="/grimoire/numerology/02-two">Two</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Stabilization, embodiment, duality of spirit &amp; matter
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
              <p className="grimoire-correspondence-value">The Bull</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/02-second-house">
                  Second House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/aphrodite-goddess">Aphrodite</Link>
                ,{" "}
                <Link href="/grimoire/deities/venus-goddess">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/fixed">
                  Fixed Sign
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
                <Link href="/grimoire/parts-ofthe-magickal-body/02-neck">
                  Neck
                </Link>
                {" & "}
                <Link href="/grimoire/parts-ofthe-magickal-body/03-throat">
                  Throat
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/05-the-hierophant">
                  The Hierophant
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/quartz/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/agate/moss-agate">
                  Moss Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/aventurine/green-aventurine">
                  Green Aventurine
                </Link>
                , <Link href="/grimoire/crystals-stones/jade">Jade</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger’s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tourmaline/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>
              </p>
            </div>

             <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/copper">Copper</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/sage">Sage</Link>,{" "}
                <Link href="/grimoire/herbs/rose">Rose</Link>,{" "}
                <Link href="/grimoire/herbs/thyme">Thyme</Link>,{" "}
                <Link href="/grimoire/herbs/catnip">Catnip</Link>,{" "}
                <Link href="/grimoire/herbs/dandelion">Dandelion</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="/grimoire/herbs/plantain">Plantain</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I HAVE”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Steady, stable, sensual, patient, determined, strong work ethic,
                problem solver, practical, resourceful, persistent, loyal,
                devoted, committed, strategic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Detachment, the art of letting go, gratitude for what one
                already has, flexibility, going with the flow, emotional control
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
              src="https://ik.imagekit.io/w1ck3d/zodiacs/02-taurus/17-taurus-assets/taurus-symbol-green.png?updatedAt=1769902609815"
              alt="Taurus Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              Taurus is Spirit sinking into matter. It is the soul remembering its
              weight, its rhythm, and its longing to touch the world. The house
              Taurus rules reveals where your values take form, where abundance
              is cultivated, and where devotion becomes destiny.
            </p>
            <p>
              After the fiery rush of Aries, Taurus becomes the still point; the
              exhale that returns you to yourself. It moves slowly, deliberately,
              savoring each moment as if it were a prayer. Its wisdom is not
              impulsive, it is embodied, sensual, and patient, drawn from the
              knowledge that what is built with care endures.
            </p>
            <p>
              Taurus rules the throat, where truth becomes sound, and the sacral
              currents that flow through the body&apos;s creative center. Through
              this axis of expression and desire, Taurus teaches the magick of
              manifestation through voice. It shows us how words become spells, and how what
              we speak returns to us shaped by intention.
            </p>
            <p>
              Here, creation is not a spark but a garden. What you plant through
              your choices, your voice, and your values grows quietly,
              faithfully, and without haste. Wherever Taurus lives in your
              chart, the universe invites you to anchor, to cultivate, and to
              receive; to let Spirit experience the world through the miracle of
              being.
            </p>
          </div>

        <div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Taurus in Witchcraft</h2>

        <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/02-taurus/17-taurus-assets/taurus-in-craft.png"
    alt="Taurus witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Taurus is embodiment. This is magick that roots itself into
      the body, the land, and the present moment. Taurus work is slow, deliberate,
      and deeply physical: it anchors intention into matter and teaches spells
      how to last.
    </p>

    <p>
      Working with Taurus means working with stability as a spell. It supports
      magick for security, prosperity, protection, pleasure, self-worth, and
      building something that can be sustained over time. Taurus does not rush
      the working. Taurus tends the soil, trusts the process, and allows results
      to grow naturally.
    </p>

    <p>
      Taurus is also a guardian of boundaries. When used unconsciously, this
      energy can cling or resist change. When worked with devotion, it becomes
      steadfast power: patient, resilient, and unshakably grounded in what
      truly matters.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Prosperity and abundance spells, protection and warding, grounding and
        stabilization, self-worth and confidence building, home and land magick,
        pleasure and embodiment work, long-term manifestations
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Grounding, stability, embodiment, patience, devotion, resilience,
        fertility, sensuality, material security
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />



          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/02-taurus/17-taurus-assets/taurus-art.png?updatedAt=1769902609935"
              alt="Taurus artwork"
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
      <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
    </p>

    <p className="grimoire-callout">The Garden of Earthly Devotion</p>

    <p>
      When Venus moves through Taurus, love remembers how to breathe.
      This is a placement of deep comfort and natural resonance. This is the
      planet of beauty, desire, and harmony returning to the soil it
      knows by heart. Here, Venus is not ornamental; it is fertile,
      steady, and exquisitely alive.
      <br />
      <br />
      This is creation through presence. Sensuality becomes sacred,
      affection becomes grounding, and beauty becomes something you feel
      rather than chase. Values clarify effortlessly, rooting into the
      body like spring green returning after winter&apos;s hush.
      <br />
      <br />
      In this domicile placement, Venus moves with patience and purpose. Nothing
      is rushed, nothing is forced. Love is cultivated like a garden:
      tended, nourished, and allowed to unfold on its own divine timing.
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

  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
    </p>

    <p className="grimoire-callout">The Sanctuary of Sense and Spirit</p>

    <p>
      The Moon in Taurus is tenderness made strong. This is the
      exaltation where emotional truth finds stability, softness finds
      structure, and the heart learns to rest deeply within the body.
      <br />
      <br />
      Moon and Taurus share a reverence for rhythm, nourishment, and the
      quiet rituals that sustain life. Together, they create an inner
      world that is calm, resilient, and profoundly nurturing. Feelings
      do not rush, they ripen. Needs do not panic, they root.
      <br />
      <br />
      This placement brings emotional endurance, sensual wisdom, and a
      capacity for comfort that radiates outward like steady moonlight
      on a calm field. Here, the soul remembers that safety is sacred,
      and that pleasure is a valid form of prayer.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/02-moon-placements/02-taurus-moon">
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

  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
     <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
    </p>

    <p className="grimoire-callout">
      The Friction Between Fire and Earth
    </p>

    <p>
      Mars in Taurus is a warrior asked to move through molasses. The
      planet of drive, speed, and heat struggles in the slow, deliberate
      landscape of Venus&apos;s domain. These energies speak different
      languages: one rushes, one settles; one ignites, one grounds.
      <br />
      <br />
      This placement tests patience on both sides. Mars pushes for
      acceleration, while Taurus insists on endurance. The result is
      often simmering tension, frustration, or the sensation of wanting
      to move faster than life will allow.
      <br />
      <br />
      And yet, this detriment holds power. When Mars learns the Taurus
      tempo, action becomes unstoppable. Persistence replaces
      impulsivity. Desires are pursued with quiet, unbreakable
      determination: the kind of strength that moves mountains grain by
      grain.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars">
        Mars Placed in the Taurus Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/05-mars-transits/02-mars-in-taurus-transit">
        Mars Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
     <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
    </p>

    <p className="grimoire-callout">The Disruption of the Eternal Earth</p>

    <p>
      Uranus in Taurus is a cosmic paradox: the lightning bolt trapped
      in the field. Uranus seeks revolution, awakening, and sudden
      change; Taurus seeks stability, embodiment, and continuity. These
      realms rarely meet easily.
      <br />
      <br />
      In its Fall, Uranus feels muted, constrained, or misunderstood.
      Its visions are too quick for Taurus&apos;s steady hands, and its need
      for upheaval clashes with the sign&apos;s devotion to preservation.
      Their values diverge: one rooted in the physical world, the other
      soaring through higher consciousness.
      <br />
      <br />
      Yet this tension generates transformation. Here, the future must
      learn to manifest through matter. Innovation becomes practical.
      Change becomes tangible. Liberation becomes something you can
      hold.
      <br />
      <br />
      When balanced, this placement can build the impossible: bridging
      heaven&apos;s insight with earth&apos;s endurance.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/08-uranus-placements/02-taurus-uranus">
        Uranus Placed in the Taurus Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/08-uranus-transits/02-uranus-in-taurus-transit">
        Uranus Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>


      {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Taurus Constellation
  </h2>

  <p className="grimoire-label">
    Zeus and Europa
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/02-taurus/17-taurus-assets/taurus-myth.png"
      alt="Europa and the Bull bronze sculpture"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Europa and the Bull, 1923–1924. Bronze, Brooklyn Museum, Lydia
      Richardson Babbott Fund, 33.288. (Photo: Brooklyn Museum)
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      The constellation of Taurus is linked to Zeus transforming himself
      into a bull. He did this, of course, for the same reason Zeus did
      most things: to capture a maiden&apos;s attention.
    </p>

    <p>
      It is said that Zeus was captivated by the beauty of Europa, a
      Phoenician princess. In order to avoid the wrath of his,
      rightfully, jealous wife Hera and charm the princess, Zeus
      transformed himself into a glorious white bull. He approached
      Europa while she was by the sea, and she was instantly entranced
      by his beautiful and gentle appearance. Eventually, she climbed
      onto the bull&apos;s back before allowing it to carry her away. Zeus
      took her to Crete and revealed his true form, eventually fathering
      her children and starting a new dynasty on the island that one of
      their sons would come to rule.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Taurus Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/02-taurus/17-taurus-assets/taurus-stamp.png"
              alt="Taurus Retrograde Symbol"
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
              <p>Slow, grounded thinking</p>
              <p className="grimoire-label-small">Do</p>
              <p>Double-check plans, revisit old ideas</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Rush decisions, overspend</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Keep a notebook to park ideas until direct</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/02-mercury-retrogrades-in-taurus">
                  Mercury Retrograde Through Taurus →
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
              <p>Self-worth &amp; values review</p>
              <p className="grimoire-label-small">Do</p>
              <p>Reassess love, beauty, purchases</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Make drastic changes, rush into love</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Seek beauty in nature, not shopping</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/02-venus-retrogrades-in-taurus">
                  Venus Retrograde Through Taurus →
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
              <p>Strategic energy use</p>
              <p className="grimoire-label-small">Do</p>
              <p>Pace yourself, focus on steady effort</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Burn out, fight over security</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>“Energy budget” your day like money</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/02-mars-retrograde-in-taurus">
                  Mars Retrograde Through Taurus →
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
              <p>Gratitude &amp; sustainable growth</p>
              <p className="grimoire-label-small">Do</p>
              <p>Review goals, consolidate resources</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Overcommit, overexpand</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Keep a daily gratitude list</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/02-jupiter-retrograde-in-taurus">
                  Jupiter Retrograde Through Taurus →
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
              <p>Strengthening foundations</p>
              <p className="grimoire-label-small">Do</p>
              <p>Review commitments, reinforce stability</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Cut corners, add new burdens</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Ask: “Will this still matter in 5 years?”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/02-saturn-retrograde-in-taurus">
                  Saturn Retrograde Through Taurus →
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
              <p>Integrating change</p>
              <p className="grimoire-label-small">Do</p>
              <p>Reflect on past disruptions, innovate slowly</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Resist all change, make rash moves</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Keep one “wild card” habit for freshness</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/02-uranus-retrogrades-in-taurus">
                  Uranus Retrograde Through Taurus →
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
              <p>Clearing illusions</p>
              <p className="grimoire-label-small">Do</p>
              <p>Ground dreams in reality</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Ignore facts, over-idealize</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Pair each dream with a concrete action</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/02-neptune-retrogrades-in-taurus">
                  Neptune Retrograde Through Taurus →
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
              <p>Deep root transformation</p>
              <p className="grimoire-label-small">Do</p>
              <p>Face fears, simplify, release control</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Cling to what&apos;s crumbling</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Release to renew: make space for better</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/02-pluto-retrogrades-in-taurus">
                  Pluto Retrograde Through Taurus →
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
              <p>Healing worth &amp; safety</p>
              <p className="grimoire-label-small">Do</p>
              <p>Practice body-based healing, inner work</p>
              <p className="grimoire-label-small">Do Not</p>
              <p>Compare to others, rush healing</p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Treat comfort as a healing tool</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/02-chiron-retrogrades-in-taurus">
                  Chiron Retrograde Through Taurus →
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
              <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
              <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
              <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                Scorpio
              </Link>
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/02-taurus-sun">
                Sun in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/02-taurus-moon">
                Moon in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/02-taurus-mercury">
                Mercury in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/02-taurus-venus">
                Venus in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/02-taurus-mars">
                Mars in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/02-taurus-jupiter">
                Jupiter in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/02-taurus-saturn">
                Saturn in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/02-taurus-uranus">
                Uranus in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/02-taurus-neptune">
                Neptune in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/02-taurus-pluto">
                Pluto in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/02-taurus-chiron">
                Chiron in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/02-taurus-ascendent">
                Ascendent in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/02-taurus-descendent">
                Descendent in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/02-taurus-midheaven">
                Midheaven in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/02-taurus-imum-coeli">
                Imum Coeli in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/02-taurus-lilith">
                Lilith in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/02-taurus-north-node">
                North Node in Taurus
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/02-taurus-south-node">
                South Node in Taurus
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/02-sun-in-taurus-transit">
                Sun through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/02-moon-in-taurus-transit">
                Moon through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/02-mercury-in-taurus-transit">
                Mercury through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/02-venus-in-taurus-transit">
                Venus through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/02-mars-in-taurus-transit">
                Mars through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/02-jupiter-in-taurus-transit">
                Jupiter through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/02-saturn-in-taurus-transit">
                Saturn through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/02-uranus-in-taurus-transit">
                Uranus through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/02-neptune-in-taurus-transit">
                Neptune through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/02-pluto-in-taurus-transit">
                Pluto through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/02-chiron-in-taurus-transit">
                Chiron through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/02-north-node-in-taurus-transit">
                North Node through Taurus
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/02-south-node-in-taurus-transit">
                South Node through Taurus
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