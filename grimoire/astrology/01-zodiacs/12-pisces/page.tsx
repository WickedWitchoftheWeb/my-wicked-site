// app/grimoire/astrology/01-zodiacs/12-pisces/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function PiscesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Pisces Zodiac" subtitle="Ichthyes">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/00-pisces-zodiac/zodiac-pisces.png?updatedAt=1770062733734"
              alt="Pisces Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The ocean doesn&apos;t choose a single wave: it remembers everything
              it&apos;s ever touched.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">February 21st to March 21st</p>
          <p>
            Pisces is the "I Believe" energy of the Zodiac, the final sigh where form
            dissolves back into feeling. It is the twilight between worlds, the
            space where timelines blur, and the soul remembers it has always
            been more water than wall. As the last sign, Pisces carries all that
            came before it; every heartbreak, every miracle, every dream, and it alchemizes
            it all into compassion.
            <br />
            <br />
            Ruled by Neptune, this is the tide of mysticism, dreams, and
            intuition. Pisces doesn&apos;t move in straight lines, it moves in
            currents, through music, emotion, symbols, and synchronicity. Here,
            logic softens, and the invisible takes the lead. This energy feels
            everything, often all at once, and its gift is the ability to see
            beyond the surface story into the soul underneath.
            <br />
            <br />
            Wherever Pisces swims in your chart, you are invited to surrender,
            to trust what you feel more than what you can measure. This is where
            you are most porous to the collective, most wired into dreams,
            spirit, and subtle realms. It is the place where endings become
            portals, and where you learn that letting go is not losing: it&apos;s
            remembering that you were never separate to begin with.
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
                Union, transcendence, cosmic completion: the elevation of 3
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
              <p className="grimoire-correspondence-value">The Fishes</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/09-neptune">
                  Neptune
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/12-twelfth-house">
                  Twelfth House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/neptune-god">Neptune</Link>,{" "}
                <Link href="/grimoire/deities/poseidon-god">Poseidon</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/mutable">Mutable</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/25-feet">Feet</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/18-the-moon">
                  The Moon
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">Crown</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/aquamarine">Aquamarine</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/labradorite">Labradorite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/fluorite">Fluorite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/bloodstone">Bloodstone</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/lepidolite">Lepidolite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>
              </p>
            </div>

              <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/titanium">Titanium</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/seaweed">Seaweed</Link>,{" "}
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="/grimoire/herbs/lotus">Lotus</Link>,{" "}
                <Link href="/grimoire/herbs/willow-bark">Willow Bark</Link>,{" "}
                <Link href="/grimoire/herbs/willow-leaves">Willow Leaves</Link>,{" "}
                <Link href="/grimoire/herbs/lemon">Lemon</Link>,{" "}
                <Link href="/grimoire/herbs/blue-lotus">Blue Lotus</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
                <Link href="/grimoire/herbs/vervain">Vervain</Link>,{" "}
                <Link href="/grimoire/herbs/skullcap">Skullcap</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Believe”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Emotional, creative, dreamy, romantic, inspirational, deep
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Boundaries, discernment, follow-through, structure, self-identity,
                emotional regulation, solitude, restorative rest, grounded
                compassion, embodiment
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/17-pisces-assets/pisces-symbol-colored.png"
              alt="Pisces Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

         <div className="grimoire-text">
  <p>
    The wave remembering it was always the ocean.
  </p>
  <p>
    Pisces is the point of dissolution, where form softens and separation
    releases its grip. Here, Spirit remembers itself not as an individual spark
    but as the vast field it emerged from. Boundaries blur, identities loosen,
    and the heart expands beyond the body into everything it can sense.
  </p>
  <p>
    In this universal standpoint, endings are not failures but thresholds.
    Stories dissolve so new lifetimes may begin, grief is washed in saltwater,
    and what once felt like loss reveals itself as transition. Pisces asks:
    What if nothing is ever truly gone?
  </p>
  <p>
    Through Pisces, the cosmos practices mercy. Compassion becomes instinct,
    intuition becomes language, and imagination opens doorways to realities
    unseen but deeply felt. This is the realm of dreams, art, magick, prayer, and
    transcendence: places where meaning is sensed rather than defined.
  </p>
  <p>
    Wherever Pisces flows in your chart, the universe invites you to surrender,
    not as erasure, but as sacred trust. That house becomes an inner ocean, a
    place where you are asked to listen, feel, and allow life to move through
    you without resistance.
  </p>
  <p>
    Through Pisces, we remember that every ending is a tide. It pulls away only
    to return in another form, carrying the soul forward on waters older than
    time.
  </p>
</div>


          <div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Pisces in Witchcraft</h2>

            <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/12-pisces/17-pisces-assets/pisces-in-craft.png"
    alt="Pisces witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Pisces is dissolution, mysticism, and spiritual
      communion. This is magick that works beyond form, beyond logic, and
      beyond linear intention. Pisces spellwork moves through intuition,
      symbol, and emotional resonance, dissolving boundaries between self,
      spirit, and the unseen.
    </p>

    <p>
      Working with Pisces means working with surrender as a magickal state
      and compassion as a sacred current. This energy excels in dream work,
      psychic and intuitive rituals, spirit communication, divination,
      artistic and trance based magick, emotional healing, and spells that
      seek unity, forgiveness, and transcendence. Pisces does not direct
      energy forcefully. It allows magick to flow where it is needed most.
    </p>

    <p>
      Pisces is also the keeper of escapism and illusion. When used
      unconsciously, its magick can blur boundaries, invite confusion, or
      avoid reality entirely. When worked with intention, it becomes divine
      receptivity: the ability to trust intuition without losing grounding,
      dissolve ego without losing self, and channel spiritual wisdom into
      compassionate presence.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Dream and trance rituals, psychic and intuitive magick,
        spirit communication and divination, emotional and spiritual
        healing work, artistic and visionary spellcraft, compassion and
        forgiveness enchantments, unity and dissolution rituals
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Intuition, mysticism, compassion, dissolution, spiritual unity,
        receptivity, imagination, emotional depth, transcendence
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/12-pisces/17-pisces-assets/pisces-art.png"
              alt="Pisces artwork"
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
              <Link href="/grimoire/astrology/02-planets/09-neptune">Neptune</Link>
            </p>
            <p className="grimoire-callout">The Mystic at Home</p>
            <p>
              When Neptune returns to Pisces, illusion and inspiration meet on
              their native shore. This is the planet of dreams, glamour, and
              spiritual fog moving through the sign of cosmic memory and
              dissolution. Here, reality feels softened at the edges, and the
              invisible world presses closer to the surface of everyday life.
              Intuition heightens, symbolism becomes louder, and the collective
              psyche stirs.
              <br />
              <br />
              In this domicile, Neptune&apos;s gifts flow easily: empathy, artistic
              genius, psychic sensitivity, and a yearning for transcendence.
              Boundaries blur as the heart widens, inviting us to feel with and
              for others more deeply than ever. This is where inspiration can
              arrive like a tidal wave: through music, film, poetry, dreams, and
              the subtle language of synchronicity.
              <br />
              <br />
              Yet the same waters that enchant can also obscure. Escapism,
              disillusionment, and spiritual bypassing become tempting currents.
              The work of this domicile is to learn how to channel vision
              without drowning in it: to root mysticism in compassion and
              practice.
              <br />
              <br />
              When Neptune moves through Pisces, the collective is called to
              remember its shared soul, to grieve what has been lost, and to
              imagine kinder worlds into being.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/12-pisces-neptune">
                Neptune Placed in the Pisces Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/12-neptune-in-pisces-transit">
                Neptune Transiting the Pisces Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
            </p>
            <p className="grimoire-callout">Love Without Edges</p>
            <p>
              Venus exalted in Pisces is love in its most devotional form. Here,
              the planet of harmony, beauty, and desire moves beyond preference
              into unconditional compassion. Affection becomes less about
              possession and more about presence: about showing up with
              tenderness for the fragile and the flawed.
              <br />
              <br />
              This placement bathes relationships in softness, romance, and
              idealism. Art becomes prayer, touch becomes healing, and even the
              smallest acts of kindness carry spiritual weight. Venus in Pisces
              sees the divine in everyone and everything, sensing the hidden
              ache beneath defenses and the quiet brilliance beneath doubt.
              <br />
              <br />
              The challenge is learning to love with open eyes. Exaltation can
              over-idealize, clinging to fantasy or martyring itself for
              connections that cannot hold what it offers. The growth here lies
              in keeping the heart generous without abandoning discernment:
              letting love be vast, but not without boundaries.
              <br />
              <br />
              In its exaltation, Venus in Pisces reminds us that beauty is not
              just what pleases the senses: it&apos;s what restores the soul.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/03-mercury">
                Mercury
              </Link>
            </p>
            <p className="grimoire-callout">Logic in a Sea of Symbols</p>
            <p>
              Mercury in Pisces moves through water when it would rather travel
              by road. The planet of language, analysis, and linear thinking
              finds itself in a sign that speaks through metaphor, sensation,
              and impression. Facts blur into feelings, timelines slip, and
              conversations drift into the poetic or the unsaid.
              <br />
              <br />
              In detriment, Mercury struggles to operate in its usual crisp,
              categorical way. Details may scatter, schedules dissolve, and
              direct answers feel elusive. Yet this placement also opens doors
              that logic alone cannot unlock. Here, the mind becomes a receiver
              for intuition, channeling insight through dreams, art, and
              non-linear knowing.
              <br />
              <br />
              The task is not to force clarity where there is mist, but to learn
              how to navigate it. Mercury in Pisces excels when it is allowed to
              translate feelings into language, to give voice to what others can
              only sense. Its apparent weakness in precision hides a strength in
              empathy, storytelling, and spiritual counsel.
              <br />
              <br />
              Over time, this detriment teaches that not all truth is tidy, and
              that sometimes, the most important messages arrive between the
              lines.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
                Mercury Placed in the Pisces Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/12-mercury-in-pisces-transit">
                Mercury Transiting the Pisces Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/03-mercury">
                Mercury
              </Link>
            </p>
            <p className="grimoire-callout">The Weight of Clarity</p>
            <p>
              In Pisces, Mercury not only stands in detriment but also in fall,
              emphasizing how uncomfortable strict rationality can feel in a
              sign devoted to surrender. Here, the mind is asked to release its
              need to categorize and control, which can feel like a loss of
              footing. Critical thinking may waver, facts get romanticized, and
              practical decisions risk being clouded by wishful thinking.
              <br />
              <br />
              Yet this fall is also an initiation. When Mercury relinquishes its
              throne of certainty, it can become a pilgrim of mystery, learning
              to listen, to sense, and to translate what cannot be proven but is
              deeply felt. This placement invites us to balance discernment with
              compassion, to question illusions without hardening our hearts.
              <br />
              <br />
              The challenge is to avoid drifting so far into fantasy that the
              material world is neglected. Schedules, health, finances, and
              everyday responsibilities still require attention, even when the
              soul is elsewhere. Anchoring practices: journaling, creative
              routines, and spiritual hygiene, can help ground the mind without caging
              it.
              <br />
              <br />
              Through this fall, Mercury in Pisces teaches that true clarity
              isn&apos;t just about data: it&apos;s about aligning thought with
              soul-level truth.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
                Mercury Placed in the Pisces Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/12-mercury-in-pisces-transit">
                Mercury Transiting the Pisces Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />
        </section>
        
            {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Pisces Constellation
  </h2>

  <p className="grimoire-label">
    Aphrodite, Eros, and the Silver Cord
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/12-pisces/17-pisces-assets/pisces-myth.jpg"
      alt="Aphrodite, Pan, and Eros statue group"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      “Aphrodite, Pan, and Eros,” marble statue group, 2nd century BCE,
      from the House of the Poseidoniasts of Beryttos, Delos. National
      Archaeological Museum, Athens (Inv. 3335).
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      The Pisces constellation is most often linked to the story of
      Aphrodite and her son Eros. According to the myth, when the
      monstrous Typhon rose up against the gods, his roar shook Olympus
      and sent every deity scrambling for escape. As chaos broke across
      the land and sea, Aphrodite gathered Eros in her arms and leapt
      into the river Euphrates, transforming them both into fish to
      evade the monster&apos;s gaze.
    </p>

    <p>
      To make sure they would not lose one another in the dark and
      churning waters, mother and son tied themselves together with a
      silver cord. The gods later honored their devotion and
      quick-thinking by placing their twin fish forms among the stars as
      Pisces as a reminder that love can navigate even the most
      terrifying depths, as long as it chooses to stay bound together.
    </p>
  </article>
</section>



        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Pisces Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/12-pisces/17-pisces-assets/pisces-stamp.png"
              alt="Pisces Retrograde Symbol"
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
              <p>Mental fog, intuitive downloads, and emotional messages</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Journal your dreams, listen between the lines, give yourself
                extra time to process
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume feelings are facts; make permanent choices based on
                temporary moods
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                When in doubt, sleep on it: clarity often arrives after rest or
                reflection
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/12-mercury-retrograde-in-pisces">
                  Mercury Retrograde Through Pisces →
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
              <p>Romantic illusions, spiritual chemistry, and heart-led fantasy</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit creative passions, nourish your relationship with the
                divine, practice self-compassion
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Ignore red flags; sacrifice your needs hoping someone will
                finally “see” you
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “Is this love: or is it a projection of who I wish they
                were?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/12-venus-retrograde-in-pisces">
                  Venus Retrograde Through Pisces →
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
              <p>Low energy, scattered action, and spiritual burnout checks</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Rest deliberately, move gently (yoga, stretching, water-based
                work), finish what&apos;s already open
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Force productivity; guilt yourself for needing more sleep or
                downtime
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat your energy like tide, not gasoline: flow in cycles, not
                straight lines
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/12-mars-retrogrades-in-pisces">
                  Mars Retrograde Through Pisces →
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
              <p>Re-evaluating faith, meaning, and the stories you live inside</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit spiritual practices, refine your big dreams, question
                old beliefs with curiosity
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Drift into blind optimism; ignore practical steps while waiting
                for a “sign”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Anchor every vision with one grounded action you can take this
                week
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/12-jupiter-retrograde-in-pisces">
                  Jupiter Retrograde Through Pisces →
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
              <p>Accountability for boundaries, energetic leaks, and escape routes</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Audit your commitments, say “no” more often, create simple,
                sustainable routines
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Numb out with fantasy, substances, or constant scrolling to
                avoid hard truths
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Choose one boundary that protects your peace and practice it
                relentlessly
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/12-saturn-retrograde-in-pisces">
                  Saturn Retrograde Through Pisces →
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
              <p>Sudden spiritual awakenings and emotional plot twists from the subconscious</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Track intuitive flashes, experiment with new healing tools, stay
                open to surprising inner truths
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Blow up stable structures just to feel “free” or dramatic shifts
                in identity
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ground every breakthrough with grounding: hydrate, eat, move,
                and breathe before acting
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/12-uranus-retrograde-in-pisces">
                  Uranus Retrograde Through Pisces →
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
              <p>Veils lifting: seeing where you&apos;ve been enchanted or avoiding reality</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Clean up illusions, refine spiritual practices, seek
                clear-hearted guidance
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Chase savior fantasies; hand your power to gurus, partners, or
                ideals
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Pair every mystical experience with a mundane task: wash dishes,
                fold laundry, stay embodied
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/12-neptune-retrograde-in-pisces">
                  Neptune Retrograde Through Pisces →
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
              <p>Deep soul purging, karmic release, and shadow work through feeling</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Work with therapists, witches, or trusted guides; ritualize
                endings; honor grief
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to dead cycles; romanticize suffering; ignore your body
                while doing shadow work
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let something go with intention: delete, donate, or release what
                no longer resonates
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/12-pluto-retrograde-in-pisces">
                  Pluto Retrograde Through Pisces →
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
              <p>Healing wounds of spiritual abandonment, hypersensitivity, and emotional overwhelm</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Hold space for your feelings, explore somatic and energetic
                healing, practice gentle self-forgiveness
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Use sacrifice as proof of worth; disappear into caretaking for
                everyone but yourself
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Affirm: “My sensitivity is sacred, and I am allowed to protect
                it.”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/12-chiron-retrograde-in-pisces">
                  Chiron Retrograde Through Pisces →
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
              <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                Sagittarius
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                Capricorn
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Placements</h3>

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/12-pisces-sun">
                Sun in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/12-pisces-moon">
                Moon in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/12-pisces-mercury">
                Mercury in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/12-pisces-venus">
                Venus in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/12-pisces-mars">
                Mars in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/12-pisces-jupiter">
                Jupiter in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/12-pisces-saturn">
                Saturn in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/12-pisces-uranus">
                Uranus in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/12-pisces-neptune">
                Neptune in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/12-pisces-pluto">
                Pluto in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/12-pisces-chiron">
                Chiron in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/12-pisces-ascendent">
                Ascendent in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/12-pisces-descendent">
                Descendent in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/12-pisces-midheaven">
                Midheaven in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/12-pisces-imum-coeli">
                Imum Coeli in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/12-pisces-lilith">
                Lilith in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/12-pisces-north-node">
                North Node in Pisces
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/12-pisces-south-node">
                South Node in Pisces
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/12-sun-in-pisces-transit">
                Sun through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/12-moon-in-pisces-transit">
                Moon through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/12-mercury-in-pisces-transit">
                Mercury through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/12-venus-in-pisces-transit">
                Venus through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/12-mars-in-pisces-transit">
                Mars through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/12-jupiter-in-pisces-transit">
                Jupiter through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/12-saturn-in-pisces-transit">
                Saturn through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/12-uranus-in-pisces-transit">
                Uranus through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/12-neptune-in-pisces-transit">
                Neptune through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/12-pluto-in-pisces-transit">
                Pluto through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/12-chiron-in-pisces-transit">
                Chiron through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/12-north-node-in-pisces-transit">
                North Node through Pisces
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/12-south-node-in-pisces-transit">
                South Node through Pisces
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