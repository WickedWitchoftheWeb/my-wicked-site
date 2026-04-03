// app/grimoire/astrology/02-planets/01-sun/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function SunPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Sun">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/sun.png"
            alt="The Sun in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Sun does not dim itself to be believed: it rises, and the
              world rearranges around its light.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Core Identity • Vitality • Conscious Will
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Sun in Astrology</h2>

          <div className="grimoire-text">
            <p>
              The Sun is the blazing center of your chart. It is the part of
              you that insists on existing, expressing, and being seen. If the
              Moon is your inner tides, the Sun is your unfiltered radiance:
              the light you were born to cast, whether anyone approves of it or
              not. It is your conscious will, your ego in its healthiest form,
              and the core story your life keeps trying to tell.
            </p>

            <p>
              In astrology, the Sun doesn&apos;t just describe personality. It
              reveals the fuel that keeps you moving when everything else feels
              unclear. It is the archetype you grow into over time, the Self
              that emerges as you choose, again and again, to live in alignment
              with your truth instead of your programming. When you honor your
              Sun, you burn with purpose. When you suppress it, you dim,
              resent, and slowly burn out.
            </p>

            <p>
              Wherever the Sun sits in your chart, it is where life insists on
              waking you up. It&apos;s where you are called to take up space, to
              lead from the center of your being, and to remember that you are
              not an accident. You are a deliberate spark of Source, chosen to
              shine in a specific way that no one else can replicate.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of the Sun</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Luminary • The Self • The Heart of the Chart
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Vitality, identity, sovereign will, creative life force
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/fire">Fire</Link> • Radiance •
              Illumination
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* SOLAR CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Solar Correspondences</h2>

          {/* NUMEROLOGY (placeholder route) */}
          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/01-one">One</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Day</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/timing/days-of-the-week/05-sunday">
                Sunday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/deities/apollo-god">Apollo</Link>,{" "}
              <Link href="/grimoire/deities/apollo-god">Helios</Link>,{" "}
              <Link href="/grimoire/deities/apollo-god">Ra</Link>,{" "}
              <Link href="/grimoire/deities/apollo-god">Sol</Link>,{" "}
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Body &amp; Health</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/parts-of-the-magickal-body/07-heart">
                Heart
              </Link>
              ,{" "}
              <Link href="/grimoire/parts-of-the-magickal-body/09-spine">
                spine
              </Link>
              , circulation, overall vitality and life force
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/04-gold">Gold</Link>,{" "}
              <Link href="/grimoire/colors/05-yellow">Yellow</Link>,{" "}
              <Link href="/grimoire/colors/07-orange">Orange</Link>,{" "}
              <Link href="/grimoire/colors/01-white">White</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
              <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
              <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
              <Link href="/grimoire/crystals-stones/tigers-eye">
                Tiger&apos;s Eye
              </Link>
              ,{" "}
              <Link href="/grimoire/crystals-stones/quartz">Clear Quartz</Link>
            </p>
          </div>

             <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/gold">Gold</Link>,{" "}
              <Link href="/grimoire/metals/brass">Brass</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs &amp; Plants</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/sunflower">Sunflower</Link>,{" "}
              <Link href="/grimoire/herbs/calendula">Calendula</Link>,{" "}
              <Link href="/grimoire/herbs/st-johns-wort">
                St. John&apos;s Wort
              </Link>
              , <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
              <Link href="/grimoire/herbs/bay-leaves">Bay leaves</Link>,{" "}
              <Link href="/grimoire/herbs/cinnamon">Cinnamon</Link>
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

       {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/sun-symbol-colored.png"
      alt="The Sun Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      The Sun is the center of conscious existence. Where the Moon governs how
      life is felt, the Sun defines how life is lived. It represents identity
      as presence: the organizing principle of selfhood that gives direction,
      coherence, and purpose to experience.
    </p>
    <p>
      This is the archetype of illumination. The Sun generates its own light,
      radiating outward rather than reflecting inward. In the human psyche,
      this becomes the sense of self that says I am here. The Sun governs
      awareness, agency, and the will to express oneself as a distinct and
      recognizable being.
    </p>
    <p>
      In the cosmic body, the Sun is gravity and orientation. It holds systems
      together, sets planets in motion, and establishes the rhythm of day and
      night. In the human body, it performs the same function. The Sun rules
      vitality, confidence, and the steady force that moves a person toward
      growth rather than stagnation.
    </p>
    <p>
      The Sun is the law of individuation. It does not ask “What do I feel?”
      but “Who am I becoming?” This is why solar suppression leads to apathy,
      loss of direction, and diminished self worth. When identity is denied
      expression, the spirit dulls, motivation fades, and life begins to feel
      lived at a distance.
    </p>
    <p>
      Wherever the Sun sits in your chart, that is where your life force seeks
      expression. It marks the place where purpose insists on being claimed,
      where confidence must be cultivated, and where you are asked to step
      forward rather than remain hidden. To tend the Sun is to tend your sense
      of meaning: to honor your right to exist visibly, to act with intention,
      and to let your presence shape the world around you.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

        {/* WITCHCRAFT ART */}
        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/sun-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">The Sun in Witchcraft</h2>

          <div className="grimoire-text">
            <p>
              In witchcraft, the Sun is the current that charges spellwork with
              courage, clarity, and life. Solar magick is the art of calling in
              warmth, success, recognition, and sovereign power. It is the
              energy you reach for when you are claiming a stage, launching a
              project, or finally stepping out of the shadow of who you were
              told to be.
            </p>

            <p>
              Working with the Sun means working with visibility. Solar rituals
              ask: Are you willing to be seen as you truly are? As you align
              with the Sun, you stop treating your light like a liability and
              start treating it like a weapon against stagnation, shame, and
              smallness.
            </p>

            <p>
              Track the Sun through the signs, seasons, and your own chart.
              You&apos;ll start to notice patterns in when you feel most alive,
              most creative, and most yourself. Those windows are invitations
              from the cosmos: rise, radiate, and remember that you are made of
              the same fire.
            </p>
          </div>

          {/* GROUPED MAGICK BLOCK */}
          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal {"\u00A0"}Uses
              </h3>
              <p className="grimoire-correspondence-value">
                Success spells, confidence workings, protection through
                illumination, creative ignition, leadership rites
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
              <p className="grimoire-correspondence-value">
                Confidence, visibility, leadership, creative expression, joy,
                life purpose
              </p>
            </div>

            <Link
              href="/grimoire/the-cosmos/01-the-sun"
              className="grimoire-deep-dive"
            >
              Dive Deeper into the Sun in Witchcraft →
            </Link>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* SUN ART */}
        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/sun-art.png"
            alt="The Sun artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

       {/* DIGNITIES */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Dignities</h2>

  {/* DOMICILE */}
  <article className="grimoire-article">
    <p className="grimoire-label">Domicile</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/01-the-sun">
        The Sun
      </Link>
    </p>
    <p className="grimoire-callout">The Sovereign Flame</p>
    <p>
      When the Sun moves through Leo, it occupies the sign that exists to hold
      its light. This is solar energy in its natural state: expressive,
      confident, and self sustaining. Identity does not need to be defended or
      negotiated here. The self knows itself and radiates outward with ease.
      <br />
      <br />
      In this domicile, vitality is strengthened through creative expression
      and embodied presence. Purpose feels personal and alive, driven by the
      desire to create, inspire, and be recognized as a unique source of light.
      Leadership emerges not through authority alone, but through visibility
      and authenticity.
      <br />
      <br />
      Yet the same fire that fuels confidence can harden into ego if unchecked.
      The need to be seen may drift toward performance, or validation may be
      mistaken for worth. The work of this placement is not to dim the flame,
      but to remember that true radiance does not require constant reflection.
      <br />
      <br />
      When the Sun is in Leo, the act of being oneself becomes an offering.
      Existence itself is treated as sacred, and the right to shine is
      understood as inherent rather than earned.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/01-sun-placements/05-leo-sun">
        The Sun Placed in the Leo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/01-sun-transits/05-sun-in-leo-transit">
        The Sun Transiting the Leo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/01-the-sun">
        The Sun
      </Link>
    </p>
    <p className="grimoire-callout">The Dawn of Fire</p>
    <p>
      In Aries, the Sun is elevated through motion and initiation. Identity
      forms quickly here, forged through action rather than reflection. The
      will to exist is immediate and instinctive, driven by the need to begin,
      to claim space, and to move forward without hesitation.
      <br />
      <br />
      This exaltation fuels courage, independence, and a powerful sense of
      self direction. Purpose is discovered through doing, and confidence is
      built by meeting life head on. The Sun in Aries trusts its own momentum,
      learning who it is by engaging directly with the world.
      <br />
      <br />
      However, speed can outpace awareness. Impulse may override consideration,
      and identity can become entangled with conflict or competition. The
      challenge of this placement is learning when to pause, without losing
      the fire that makes beginning possible.
      <br />
      <br />
      Exalted in Aries, the Sun teaches that existence itself is an act of
      courage, and that the willingness to start is often more powerful than
      certainty.
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

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/01-the-sun">
        The Sun
      </Link>
    </p>
    <p className="grimoire-callout">The Self in the Crowd</p>
    <p>
      In Aquarius, the Sun is asked to decentralize. Identity is filtered
      through ideals, systems, and collective concerns, often making personal
      expression feel secondary to the greater whole. The self may feel
      abstracted, defined more by contribution than by presence.
      <br />
      <br />
      This placement can challenge traditional ideas of recognition. Approval
      may come through innovation or intellect rather than warmth or charisma.
      The ego is stretched beyond personal identity and asked to locate value
      in shared vision and future possibility.
      <br />
      <br />
      While this can create distance from emotional affirmation, it also
      encourages a broader understanding of purpose. The Sun in Aquarius
      learns that individuality does not disappear within the collective, but
      gains meaning through it.
      <br />
      <br />
      In detriment, the Sun teaches that identity can exist without constant
      spotlight, and that belonging does not require conformity.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/01-sun-placements/11-aquarius-sun">
        The Sun Placed in the Aquarius Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/01-sun-transits/11-sun-in-aquarius-transit">
        The Sun Transiting the Aquarius Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/01-the-sun">
        The Sun
      </Link>
    </p>
    <p className="grimoire-callout">The Self in Reflection</p>
    <p>
      In Libra, the Sun turns toward relationship as a mirror. Identity is
      shaped through comparison, balance, and response, which can soften the
      clarity of personal will. The self may hesitate, weighing options and
      perspectives before committing to a singular direction.
      <br />
      <br />
      This fall placement can blur personal desires in favor of harmony or
      fairness. Yet it also refines awareness, teaching the Sun how identity
      evolves through interaction and mutual recognition rather than isolation.
      <br />
      <br />
      The challenge lies in maintaining a stable center while engaging others.
      Without it, self expression may dissolve into accommodation or indecision.
      With it, relationship becomes a space of conscious choice rather than
      self abandonment.
      <br />
      <br />
      In Libra, the Sun learns that clarity does not require separation, and
      that the self can remain whole while standing in relation to another.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/01-sun-placements/07-libra-sun">
        The Sun Placed in the Libra Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/01-sun-transits/07-sun-in-libra-transit">
        The Sun Transiting the Libra Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of the Sun</h2>

  <p className="grimoire-label">
    Helios, the All-Seeing Sun
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/apollo-sun-myth.jpg?updatedAt=1770424828481"
      alt="Apollo Belvedere, Vatican Museums"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Apollo Belvedere, Roman marble copy after a Greek bronze, Vatican Museums
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In early Greek mythology, the Sun was personified as
      the radiant Titan who drove his golden chariot across the sky each day.
      From dawn to dusk, Helios watched over the world from above, witnessing
      every oath sworn, every crime committed, and every truth hidden in
      shadow. Because of this, Helios became a divine witness and keeper of
      cosmic order, often invoked in matters of justice, revelation, and moral
      accountability.
    </p>

    <p>
      Helios was not merely light itself, but conscious illumination. He saw
      what others could not and revealed what was concealed. His presence
      ensured that nothing remained hidden forever, making the Sun a symbol
      of awareness, authority, and unavoidable truth.
    </p>

    <p className="grimoire-label">
      Apollo and the Solar Mind
    </p>

    <p>
      Over time, the solar role gradually merged with
      Apollo, transforming the Sun from a watching force into a guiding
      intelligence. Apollo embodied reason, prophecy, harmony, and divine
      order, ruling over music, healing, and foresight. Through Apollo,
      the Sun became not only what reveals truth, but what organizes it
      into meaning.
    </p>

    <p>
      This evolution reflects a shift in mythic understanding: the Sun as
      raw perception became the Sun as conscious direction. Apollo&apos;s solar
      light did not merely expose reality, it shaped civilization through
      law, art, medicine, and moral clarity. Together, Helios and Apollo form
      the complete solar archetype: sight and insight, presence and purpose,
      illumination and identity.
    </p>
  </article>
</section>

<div className="grimoire-divider" />

{/* SUN PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Sun Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/sun/1sun-symbol.png"
      alt="Sun Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/01-aries-sun">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dawn of Fire</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity built through bravery, motion, and beginning</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, challenge, momentum, clean honesty</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Action, leadership, fresh starts, direct choices</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose the brave beginning and let the self catch up to it</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Burn yourself out trying to prove you exist</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let patience refine courage so your fire can last</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/01-aries-sun">
          The Sun in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/02-taurus-sun">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light of Embodied Being</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity rooted in stability, devotion, and self-worth</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Consistency, security, steadiness, trust over time</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine, nature, familiar spaces, simple pleasure</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build slowly and let your values set the pace</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Refuse every change just because it interrupts comfort</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose growth that protects peace instead of abandoning it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/02-taurus-sun">
          The Sun in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/03-gemini-sun">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Sun {" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light of Multiplicity</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity expressed through curiosity, language, and learning</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Variety, conversation, mental movement, new perspectives</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Questions, ideas, connection, change of scenery</p>
      <p className="grimoire-label-small">Do</p>
      <p>Follow the question that keeps returning and let it teach you</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Scatter your energy until nothing becomes real</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Commit to one thread long enough to create depth</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/03-gemini-sun">
          The Sun in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/04-cancer-sun">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light of Nurturing Presence</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity shaped through care, loyalty, and emotional truth</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Belonging, safety, closeness, trusted bonds</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Home energy, familiarity, memory, protection</p>
      <p className="grimoire-label-small">Do</p>
      <p>Lead with care and let tenderness be part of strength</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Hide your light to avoid being seen</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Build boundaries that keep you open without leaving you exposed</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/04-cancer-sun">
          The Sun in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/05-leo-sun">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Sovereign Flame</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity expressed through creativity, pride, and presence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition, joy, devotion, room to shine</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Play, romance, art, celebration, expression</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create boldly and let your joy be legitimate</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Chase applause at the cost of your real self</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let self-worth be steady so attention becomes optional</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/05-leo-sun">
          The Sun in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/06-virgo-sun">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light of Discernment</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity built through skill, clarity, and improvement</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, usefulness, clean systems, honest effort</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Routine, craft, refinement, practical progress</p>
      <p className="grimoire-label-small">Do</p>
      <p>Commit to the work that makes you feel aligned</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Erase yourself in the name of perfection</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let devotion include rest so your gift stays intact</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/06-virgo-sun">
          The Sun in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/07-libra-sun">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Self in Reflection</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity formed through balance, beauty, and relationship</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Harmony, fairness, shared understanding, mutual respect</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Calm dialogue, art, peace-making, balanced space</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose with integrity and let peace include truth</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Abandon yourself to keep things pleasant</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Practice honest balance instead of perfect agreement</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/07-libra-sun">
          The Sun in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/08-scorpio-sun">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light That Sees Through</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity shaped through depth, truth, and transformation</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Loyalty, honesty, intensity, real devotion</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Privacy, commitment, meaning beneath the surface</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let your depth become devotion instead of defense</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use control as a substitute for trust</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Build trust slowly so intimacy stops feeling like risk</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/08-scorpio-sun">
          The Sun in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/09-sagittarius-sun">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Fire of Meaning</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity expressed through growth, truth, and expansion</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, purpose, optimism, forward motion</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning, exploration, big ideas, open horizons</p>
      <p className="grimoire-label-small">Do</p>
      <p>Follow the path that makes life feel larger and truer</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use freedom as a reason to avoid responsibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Ground your vision with follow-through so meaning becomes real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/09-sagittarius-sun">
          The Sun in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/10-capricorn-sun">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light of Enduring Purpose</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity built through discipline, mastery, and consequence</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Respect, structure, competence, long-term stability</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Plans, progress, responsibility, earned trust</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build what lasts and let your actions speak for you</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse survival mode with strength</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let success include softness so you do not outgrow your own life</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/10-capricorn-sun">
          The Sun in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/11-aquarius-sun">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Self in the Crowd</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity expressed through difference, ideas, and contribution</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Autonomy, authenticity, community on your terms</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Friends, causes, innovation, perspective</p>
      <p className="grimoire-label-small">Do</p>
      <p>Contribute your uniqueness and let it be useful</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach from closeness and call it independence</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Stay human inside the mission so connection can survive change</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/11-aquarius-sun">
          The Sun in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/12-pisces-sun">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Sun{" "}
          <span className="grimoire-glyph">{"\u2609\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Light Beyond Form</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Identity expressed through sensitivity, imagination, and spirit</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Compassion, meaning, gentle space, spiritual connection</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Music, dreams, solitude, creativity, surrender</p>
      <p className="grimoire-label-small">Do</p>
      <p>Channel your sensitivity into creation and care</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Dissolve into escape when reality feels sharp</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Boundaries protect your gift and keep your light reachable</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/01-sun-placements/12-pisces-sun">
          The Sun in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* SUN CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Sun Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      The Sun represents core identity, vitality, consciousness, and the sense
      of self. In planetary astrology, the Sun describes purpose, direction,
      and how a person experiences being seen and expressed in the world.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* SOLAR MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 1 year to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 30 days in each zodiac sign.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Identity, vitality, conscious will, life direction, and self expression.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY THE SUN FEELS FOUNDATIONAL */}
  <h3 className="grimoire-subheading">Why the Sun Feels Foundational</h3>

  <div className="grimoire-text">
    <p>
      The Sun moves steadily and predictably through the zodiac, setting the
      primary rhythm of the astrological year. Its cycle establishes the
      seasonal and symbolic framework within which all other planetary
      movements unfold.
    </p>

    <p>
      Unlike faster moving planets that describe shifts in mood or activity,
      the Sun reflects enduring themes of identity and purpose. Solar transits
      highlight periods of visibility, growth, and conscious self development
      rather than momentary change.
    </p>
  </div>
</section>

<div className="grimoire-divider" />

        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            {/* PLACEMENTS */}
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/01-sun-placements">
                Sun Placements
              </Link>
            </div>

            {/* TRANSITS */}
            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/01-sun-transits">
                Sun Transits
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