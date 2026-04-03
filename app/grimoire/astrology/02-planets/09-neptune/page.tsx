// app/grimoire/astrology/02-planets/09-neptune/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function NeptunePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Neptune">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune.png"
            alt="Neptune in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Neptune doesn&apos;t lie: he dissolves the edges until you can no
              longer pretend you know where you end and the universe begins.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Dreams • Intuition • Illusion • Spirit • Dissolution
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Neptune in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Neptune is the mystic current of your chart: the force that
              dissolves boundaries and opens the door to the unseen. He rules
              dreams, intuition, imagination, spirituality, compassion, and the
              thin veil between reality and mystery.
            </p>

            <p>
              In astrology, Neptune shows where you long for transcendence. It
              can manifest as creativity and devotion: or as confusion, escapism,
              and illusion. Neptune isn&apos;t here to make things logical. He&apos;s
              here to make them holy.
            </p>

            <p>
              Wherever Neptune sits in your chart: by sign, house, and aspect:
              is where you are learning discernment between vision and fantasy,
              intuition and projection, sacred devotion and self abandonment.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Neptune</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Mystic • The Dissolver • The Dream Current
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Dreams, intuition, imagination, compassion, illusion, spiritual
              surrender
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/water">Water</Link> • Mystery •
              Surrender
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* NEPTUNIAN CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Neptunian Correspondences</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Number</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/numerology/08-eight">Eight</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Element</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/water">Water</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Day</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/timing/days-of-the-week/02-monday">
                Monday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">
              Poseidon, Neptune
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Polarity</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                Negative
              </Link>
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
              sleep, immune sensitivity, escapism patterns, spiritual fatigue,
              fluid balance
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/tarot/major-arcana/12-hanged-man">
                The Hanged Man
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
              <Link href="/grimoire/crystals-stones/aquamarine">
                Aquamarine
              </Link>
              ,{" "}
              <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
              <Link href="/grimoire/crystals-stones/labradorite">
                Labradorite
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/platinum">Platinum</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
              <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
              <Link href="/grimoire/herbs/mugwort">Mugwort</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/02-blue">Blue</Link>,{" "}
              <Link href="/grimoire/colors/01-white">White</Link>,{" "}
              <Link href="/grimoire/colors/10-silver">Silver</Link>
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

       {/* UNIVERSAL STANDPOINT */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Universal Standpoint</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune-symbol-colored.png"
      alt="Neptune Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Neptune is the principle of dissolution. Where the Sun defines purpose,
      the Moon defines experience, Mercury defines understanding, Venus defines
      value, Mars defines action, Jupiter defines meaning, Saturn defines
      structure, and Uranus defines awakening, Neptune governs transcendence.
      It is the force that blurs boundaries and returns form back to source.
    </p>

    <p>
      This is the archetype of imagination. Neptune rules dreams, intuition,
      myth, spirituality, and the symbolic language of the unconscious. In the
      human psyche, Neptune is the porous mind: the place where empathy,
      inspiration, and collective memory flow freely, uncontained by logic or
      linear thought.
    </p>

    <p>
      In the cosmic body, Neptune regulates unity. It dissolves separation,
      teaches the universe how to merge, and reminds existence that all things
      arise from the same field. In the human body, it performs the same role.
      Neptune governs sensitivity, permeability, and the subtle emotional and
      psychic currents that move beneath conscious awareness.
    </p>

    <p>
      Neptune is the law of surrender. It asks not “What must I change?” but
      “What must I release?” This is why Neptune imbalance often manifests as
      confusion, escapism, idealization, or disillusionment. When boundaries
      dissolve without grounding, reality becomes fog. When intuition is
      denied, meaning drains from experience.
    </p>

    <p>
      Wherever Neptune sits in your chart, that is where you are asked to
      soften. It marks the place where imagination, compassion, and spiritual
      sensitivity seek expression. To tend Neptune is to tend your relationship
      with mystery: to dream without losing discernment and to touch the
      infinite without abandoning the self.
    </p>
  </div>
</section>

<div className="grimoire-divider" />


        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune-in-craft.png"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

     <div className="grimoire-image">
  <img
    src="PASTE-YOUR-WITCHCRAFT-ART-IMAGE-HERE"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Neptune in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Neptune is the keeper of mystery and dissolution. Neptunian
      magick governs dreams, intuition, spiritual perception, and the currents
      that blur the boundary between the seen and unseen. This is not concrete
      or directive energy. Neptune works through symbolism, feeling, and subtle
      resonance rather than force or certainty.
    </p>

    <p>
      Working with Neptune means working with altered states of awareness.
      This is the current used for dreamwork, trance, spirit communication,
      divination, psychic development, and devotional or devotional-adjacent
      practices. Neptunian workings soften the edges of reality, allowing
      insight to arise from imagination, emotion, and the collective field.
    </p>

    <p>
      Neptune teaches intentional surrender. When boundaries dissolve without
      clarity, confusion follows. When they dissolve with purpose, intuition
      deepens. Track Neptune through transits to recognize when it is time to
      rest, listen, dream, or release control in order to receive spiritual
      guidance without distortion.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Dreamwork and trance magick, divination and psychic development,
        spirit communication, devotional practices, illusion and glamour work,
        emotional and spiritual cleansing
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Intuition, dreams, mystery, surrender, illusion, spirituality,
        imagination, permeability
      </p>
    </div>

    <Link
      href="PASTE-YOUR-NEPTUNE-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Neptune in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune-art.png"
            alt="Neptune artwork"
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
      <Link href="/grimoire/astrology/02-planets/09-neptune">Neptune</Link>
    </p>
    <p className="grimoire-callout">The Mystic at Home</p>
    <p>
      In Pisces, Neptune dissolves completely into its own element. Boundaries
      soften, intuition deepens, and perception expands beyond the material
      world. This is Neptune in its purest expression: visionary, receptive,
      and attuned to the unseen currents that shape reality beneath the surface.
      <br />
      <br />
      This dignity strengthens imagination, empathy, and spiritual sensitivity.
      Neptune in Pisces perceives through symbol, dream, and feeling rather
      than logic or form. Compassion flows freely, and the capacity to sense
      collective emotion becomes pronounced.
      <br />
      <br />
      Yet this openness carries risk. Without grounding, clarity can dissolve
      into confusion, and transcendence can slip into escapism. The lesson of
      this domicile is discernment: to navigate mystery without losing
      orientation.
      <br />
      <br />
      When Neptune is in domicile, the veil thins. Meaning is accessed through
      surrender, and the unseen becomes a living presence rather than an
      abstraction.
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

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/09-neptune">Neptune</Link>
    </p>
    <p className="grimoire-callout">The Ocean of Memory</p>
    <p>
      In Cancer, Neptune exalts through feeling. Memory, ancestry, and emotional
      inheritance become vessels for spiritual perception. Intuition here is
      deeply personal, shaped by lineage, home, and the invisible ties that bind
      people across time.
      <br />
      <br />
      This exaltation strengthens empathy, psychic receptivity, and emotional
      attunement. Neptune in Cancer senses what has been felt before and carries
      it forward, allowing compassion to arise from shared vulnerability rather
      than abstraction.
      <br />
      <br />
      The shadow lies in nostalgia and emotional overwhelm. Boundaries may blur
      between past and present, self and other. The lesson is containment: to
      honor memory without drowning in it.
      <br />
      <br />
      When Neptune is exalted, intuition becomes rooted. Spiritual awareness is
      carried through care, remembrance, and emotional truth.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/09-neptune-placements/04-cancer-neptune">
        Neptune Placed in the Cancer Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/09-neptune-transits/04-neptune-in-cancer-transit">
        Neptune Transiting the Cancer Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/09-neptune">Neptune</Link>
    </p>
    <p className="grimoire-callout">The Ideal of Purity</p>
    <p>
      In Virgo, Neptune struggles to dissolve. The need for clarity, usefulness,
      and order conflicts with Neptune&apos;s symbolic and fluid nature. Vision
      is subjected to scrutiny, and imagination may be dismissed unless it can
      prove its function.
      <br />
      <br />
      This placement can produce disillusionment or chronic self-doubt. Ideals
      are refined to the point of fragility, and spiritual longing may be
      reduced to obligation or critique. The lesson is acceptance: to allow
      mystery without demanding perfection.
      <br />
      <br />
      Yet this detriment carries discernment. Neptune in Virgo can purify
      illusion, separating fantasy from service. When imagination is grounded,
      compassion becomes practical rather than abstract.
      <br />
      <br />
      Neptune in detriment teaches that meaning does not need to be flawless to
      be true.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/09-neptune-placements/06-virgo-neptune">
        Neptune Placed in the Virgo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/09-neptune-transits/06-neptune-in-virgo-transit">
        Neptune Transiting the Virgo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/09-neptune">Neptune</Link>
    </p>
    <p className="grimoire-callout">The Dreamer in the Workshop</p>
    <p>
      In Capricorn, Neptune is asked to produce. Vision must take form, and
      dreams are measured against outcome and utility. Inspiration may feel
      constrained by responsibility and expectation.
      <br />
      <br />
      This placement can manifest as disillusionment with systems or authority.
      Ideals may feel compromised by realism, and faith may waver when progress
      is slow. The challenge is endurance: to keep dreaming while building
      within limits.
      <br />
      <br />
      Yet this fall carries manifestation potential. Neptune in Capricorn can
      bring imagination into structure, giving dreams a scaffold strong enough
      to support them. Vision becomes viable when discipline and creativity
      cooperate.
      <br />
      <br />
      Neptune in fall teaches that inspiration does not disappear under
      pressure. It learns how to work.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/09-neptune-placements/10-capricorn-neptune">
        Neptune Placed in the Capricorn Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/09-neptune-transits/10-neptune-in-capricorn-transit">
        Neptune Transiting the Capricorn Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Neptune</h2>

  <p className="grimoire-label">
    Poseidon, Lord of the Waters
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune-myth-art.jpg"
      alt="Poseidon of Melos"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Poseidon of Melos, found in 1877 on the island of Melos,
      National Archaeological Museum, Athens
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Neptune is rooted in Poseidon, god of the sea,
      earthquakes, and the vast unknown depths beneath the surface of the
      world. Poseidon ruled realms that were powerful, unpredictable, and
      largely unseen, governing oceans, storms, and the hidden forces that
      move beneath solid ground. His domain was not the visible horizon, but
      what lay beyond it.
    </p>

    <p>
      Poseidon&apos;s myths portray a deity whose moods shaped reality itself.
      Calm seas brought abundance and safe passage, while anger summoned
      shipwrecks and floods. Through Poseidon, Neptune became associated with
      emotion, intuition, and the dissolving of boundaries between self and
      environment. His power was not control, but immersion.
    </p>

    <p className="grimoire-label">
      Neptune and the Oceanic Mind
    </p>

    <p>
      In Roman mythology, Poseidon became Neptune, whose symbolism expanded
      beyond physical waters into psychological and spiritual realms. Neptune
      governed dreams, altered states, and the collective unconscious, shaping
      experiences that could not be fully defined by reason or structure. He
      represented surrender, imagination, and the pull toward something
      greater than the individual self.
    </p>

    <p>
      Through Neptune, the planet came to symbolize transcendence, illusion,
      and the longing to merge with something infinite. Neptune in myth is not
      clarity, but depth. As both Poseidon and Neptune, this archetype teaches
      that truth is not always found through certainty, but through sensitivity,
      vision, and the willingness to drift beyond the edges of the known.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

        {/* NEPTUNE PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Neptune Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/neptune/neptune-symbol.png"
      alt="Neptune Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/01-aries-neptune">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Burning Dream</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Passion infused with idealism and longing</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Inspiration, spiritual courage, room to chase a vision</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Bold imagination and instinctive faith</p>
      <p className="grimoire-label-small">Do</p>
      <p>Act on inspiration with purpose and clarity</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse impulse with intuition</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your dream guide you without burning you out</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/01-aries-neptune">
          Neptune in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/02-taurus-neptune">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dream of Form and Permanence</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Idealism applied to security, value, and the physical world</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Peace, stability, beauty, tangible reassurance</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Ritual, nature, sensory grounding</p>
      <p className="grimoire-label-small">Do</p>
      <p>Turn inspiration into something real and lasting</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Chase comfort as a substitute for truth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let the dream be embodied, not possessed</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/02-taurus-neptune">
          Neptune in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/03-gemini-neptune">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Fog of Meaning</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Imagination woven into thought, language, and perception</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Curiosity, symbolism, spaciousness in the mind</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Stories, poetry, shifting perspectives</p>
      <p className="grimoire-label-small">Do</p>
      <p>Listen for meaning beneath the words</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse misinformation with mystery</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Clarity strengthens imagination</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/03-gemini-neptune">
          Neptune in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/04-cancer-neptune">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Ocean of Memory</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Deep intuition and emotional idealism</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Belonging, softness, trusted refuge</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Nostalgia, family stories, familiar rhythms</p>
      <p className="grimoire-label-small">Do</p>
      <p>Protect sensitivity with healthy boundaries</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Romanticize pain as devotion</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let memory inform you without drowning you</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/04-cancer-neptune">
          Neptune in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/05-leo-neptune">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dream of Recognition</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Idealism expressed through identity and creativity</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Inspiration, appreciation, meaningful self expression</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Art, romance, symbolism, heartfelt vision</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create from a place of truth</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Chase applause as a substitute for belonging</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your heart lead, then let reality support it</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/05-leo-neptune">
          Neptune in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/06-virgo-neptune">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Ideal of Purity</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Spiritual longing expressed through service and refinement</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Order, purpose, healing through usefulness</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Ritual, improvement, devotion to craft</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let your ideals support your wellbeing</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse perfection with holiness</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Make room for humanity inside the ideal</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/06-virgo-neptune">
          Neptune in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/07-libra-neptune">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Ideal of Union</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Romantic and relational idealism</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Harmony, beauty, shared inspiration</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Partnership, art, meaningful connection</p>
      <p className="grimoire-label-small">Do</p>
      <p>Love with clarity and discernment</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse fantasy with compatibility</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose devotion that is mutual and real</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/07-libra-neptune">
          Neptune in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/08-scorpio-neptune">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Ocean of Obsession</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Intense longing and spiritual depth</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Truth, devotion, meaningful transformation</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Private bonds, deep rituals, emotional honesty</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let depth be healing, not consuming</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Romanticize control as loyalty</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Choose intimacy that strengthens your spirit</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/08-scorpio-neptune">
          Neptune in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/09-sagittarius-neptune">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Mythic Horizon</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Spiritual seeking and visionary belief</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Meaning, faith, expansion of perspective</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Myth, philosophy, sacred adventure</p>
      <p className="grimoire-label-small">Do</p>
      <p>Follow inspiration while staying grounded</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use belief to avoid reality</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let faith be lived, not imagined</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/09-sagittarius-neptune">
          Neptune in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/10-capricorn-neptune">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dreamer in the Workshop</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Idealism shaped through structure and responsibility</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Purpose, stability, tangible progress</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Work that feels meaningful and lasting</p>
      <p className="grimoire-label-small">Do</p>
      <p>Build the dream step by step</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse ambition with spiritual fulfillment</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let your ideals become practical</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/10-capricorn-neptune">
          Neptune in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/11-aquarius-neptune">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dream of Utopia</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Collective idealism and visionary progress</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Hope, belonging, shared purpose</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Community, movements, big visions</p>
      <p className="grimoire-label-small">Do</p>
      <p>Dream boldly and build responsibly</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse detachment with enlightenment</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let compassion guide your ideals</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/11-aquarius-neptune">
          Neptune in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/12-pisces-neptune">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Neptune{" "}
          <span className="grimoire-glyph">{"\u2646\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Mystic at Home</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Spiritual sensitivity and boundless imagination</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Compassion, surrender, gentle refuge</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Dreamwork, music, solitude, symbolism</p>
      <p className="grimoire-label-small">Do</p>
      <p>Protect sensitivity with ritual and grounding</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Absorb everyone else&apos;s pain as your identity</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Boundaries make compassion sustainable</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/09-neptune-placements/12-pisces-neptune">
          Neptune in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* NEPTUNE CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Neptune Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Neptune governs dreams, imagination, illusion, spirituality, and
      transcendence. In planetary astrology, Neptune describes how meaning is
      dissolved, idealized, or spiritualized, shaping collective vision and
      perception beyond concrete reality.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* NEPTUNIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 165 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 13 to 14 years in each zodiac sign.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Imagination, ideals, spirituality, illusion, escapism, compassion, and
      collective dreams.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY NEPTUNE FEELS DIFFUSE AND UNCLEAR */}
  <h3 className="grimoire-subheading">Why Neptune Feels Diffuse and Unclear</h3>

  <div className="grimoire-text">
    <p>
      Neptune moves slowly enough to shape entire generations, yet its influence
      often lacks clear definition. Rather than producing visible events,
      Neptune alters perception, belief, and collective atmosphere over long
      periods of time.
    </p>

    <p>
      Neptune dissolves boundaries instead of enforcing them. Neptune transits
      often coincide with heightened idealism, confusion, disillusionment, or
      spiritual searching, making reality feel less solid and more symbolic.
    </p>
  </div>
</section>

 <div className="grimoire-divider" />
      
      
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements">
                Neptune Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits">
                Neptune Transits
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