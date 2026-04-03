// app/grimoire/astrology/01-zodiacs/05-leo/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function LeoPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Leo Zodiac" subtitle="Leon">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/00-leo-zodiac/zodiac-leo.png?updatedAt=1770062733239"
              alt="Leo Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Sun doesn&apos;t apologize for shining: it simply takes the
              sky.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">July 21st to August 21st</p>
          <p>
            Leo is the "I Will" energy of the Zodiac. It is the blazing heart that chooses to
            be seen. After Cancer teaches us how to feel and protect what we
            love, Leo steps forward to express it, turning inner light into
            undeniable presence. This is the sign of the sovereign self, the
            part of Spirit that says, “I am here, and my existence is a gift.”
            <br />
            <br />
            Ruled by the Sun, Leo burns with creative fire and radiant courage.
            It is the warmth at the center of the circle, the storyteller at
            the hearth, the performer on the stage who reminds everyone watching
            that joy is holy. Leo energy isn&apos;t just loud or dramatic, it
            is devotional. It wants to pour its passion into something that
            matters, to inspire others simply by being fully alive.
            <br />
            <br />
            Wherever Leo resides in your chart, that&apos;s where your inner Sun
            rises. That's where you are called to shine, to create, and to lead from
            the heart. Here, Spirit learns the power of self-trust and
            visibility, discovering that true confidence isn&apos;t about being
            the only light in the room, it&apos;s about being brave enough to
            ignite others...
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
                <Link href="/grimoire/numerology/05-five">Five</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Expression, creativity, heart-centered transformation
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
              <p className="grimoire-correspondence-value">The Lion</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/01-the-sun">
                  The Sun
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/05-fifth-house">
                  Fifth House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/apollo-god">Apollo</Link>,{" "}
                <Link href="/grimoire/deities/zeus-god">Zeus</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/07-heart">
                  Heart
                </Link>
                {" & "}
                <Link href="/grimoire/parts-ofthe-magickal-body/09-spine">
                  Spine
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/08-strength">
                  Strength
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
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/carnealian">
                  Carnelian
                </Link>
                , <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amber">Amber</Link>,{" "}
                <Link href="/grimoire/crystals-stones/jasper">Jasper</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/gold">Gold</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/sunflower">Sunflower</Link>,{" "}
                <Link href="/grimoire/herbs/lemon">Lemon</Link>,{" "}
                <Link href="/grimoire/herbs/orange">Orange</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/clawthorn">Clawthorn</Link>,{" "}
                <Link href="/grimoire/herbs/motherwort">Motherwort</Link>,{" "}
                <Link href="/grimoire/herbs/calendula">Calendula</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Will”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Energetic, vibrant, confident, bold, courageous, passionate,
                social, engaging, charming
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Humility, empathy, patience, solitude
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/17-leo-assets/leo-symbol-colored.png?updatedAt=1770328571165"
              alt="Leo Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>
<div className="grimoire-text">
  <p>
    Leo is Spirit learning to radiate. It is the moment consciousness recognizes
    itself as a source, not merely a receiver. Where Cancer gathers and
    protects, Leo emerges and expresses. It asks not how to belong, but how to
    shine without apology.
  </p>
  <p>
    This is the ignition of the heart as a creative engine. Leo is the Sun
    discovering that its light sustains life, that joy is not indulgence but
    vitality. Here, the universe learns that celebration is sacred, that play is
    not a distraction from purpose but one of its purest forms.
  </p>
  <p>
    Leo rules the heart and the spine, the axis of courage and presence. Through
    this placement, Spirit learns confidence as an embodied state.
    Self-expression becomes an offering. Visibility becomes responsibility.
    Leo teaches that authenticity is not ego when it is rooted in devotion to
    what one truly loves.
  </p>
  <p>
    Here, creation seeks recognition, not for validation, but for circulation.
    What is expressed can be shared. What is shared can inspire. Leo does not
    perform to be praised; it performs to remind the world of its own
    aliveness.
  </p>
  <p>
    Wherever Leo lives in your chart, life asks you to take up space with
    intention. That house becomes your stage, the arena where creativity,
    courage, and leadership converge. Through Leo, the universe learns how to
    love itself out loud.
  </p>
</div>

       
          <div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Leo in Witchcraft</h2>

  <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/05-leo/17-leo-assets/leo-in-craft.png"
    alt="Leo witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Leo is embodied power, creative fire, and sovereign
      self expression. This is magick that radiates outward through presence,
      confidence, and the will to be seen. Leo spellwork does not hide or
      whisper. It shines, declares, and claims space through conscious
      intention and self authority.
    </p>

    <p>
      Working with Leo means working with the self as a living altar and
      creativity as a sacred act. This energy excels in empowerment rituals,
      confidence and visibility spells, leadership workings, passion magick,
      courage rites, and spells that strengthen identity, purpose, and personal
      power. Leo does not wait for permission. It invokes from the heart and
      moves through devotion to one’s own light.
    </p>

    <p>
      Leo is also the keeper of pride and ego. When used unconsciously, its
      magick can become performative, domineering, or fueled by external
      validation. When worked with intention, it becomes true sovereignty:
      self trust without arrogance, confidence without domination, and the
      ability to lead, inspire, and create from authentic inner fire.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Empowerment and confidence spells, visibility and recognition work,
        leadership and authority rituals, creative and artistic magick,
        courage and strength workings, passion and desire spells, self worth
        and personal power enchantments
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Sovereignty, confidence, creativity, courage, self expression,
        leadership, devotion to self, radiant presence, heart centered power
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />


          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/05-leo/17-leo-assets/leo-art.png"
              alt="Leo artwork"
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
      <Link href="/grimoire/astrology/02-planets/01-the-sun">
        The Sun
      </Link>
    </p>
    <p className="grimoire-callout">The Sovereign Flame</p>
    <p>
      When the Sun enters Leo, it sits upon its own throne. This is
      solar energy in its most regal expression: bold, warm, and
      unapologetically present. The will to live, create, and shine
      moves straight from the heart, turning life itself into an act of
      artistry.
      <br />
      <br />
      In this domicile, vitality is amplified. Purpose feels clearer,
      self-expression flows more freely, and the desire to be seen and
      celebrated rises to the surface. Leo Sun doesn&apos;t just want to
      exist, it wants to leave a mark, to light up the spaces it enters,
      and to inspire others simply by being fully itself.
      <br />
      <br />
      The shadow, of course, is ego unchecked, needing constant applause,
      resisting humility, or confusing attention with affection. Yet at
      its best, this placement awakens noble leadership, the kind that
      leads by example, protects those in its care, and uses its
      visibility to awaken courage in others.
      <br />
      <br />
      When the Sun moves through Leo, the collective is invited to step
      into its own spotlight. Not from arrogance, but from the sacred
      knowing that your existence is meant to glow.
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

  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">No Exalted Planet</p>
    <p>
      Leo has no traditional exaltation, and that in itself is a kind of
      teaching. This sign doesn&apos;t need a visiting planet to lift it
      higher: it is already ruled by the Sun, the central star around
      which everything else orbits. Instead of one exalted guest, Leo
      invites every planet passing through to discover their capacity
      for courage, confidence, and creative flair.
      <br />
      <br />
      Planets in Leo are asked to step onto the stage and declare what
      they stand for. Whether they do so gracefully or dramatically
      depends on how willingly they are to let the heart lead.
    </p>
    <p>{/* No specific placement link for exaltation in Leo */}</p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-text"> (Traditional) </p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
    </p>
    <p className="grimoire-callout">The Crown Under Constraint</p>
    <p>
      When Saturn enters Leo, the planet of discipline walks into the
      Sun&apos;s royal court. Leo wants to shine, play, and create;
      Saturn wants structure, limitation, and proof. Their meeting often
      feels like a clash between joy and duty, spontaneity and
      responsibility.
      <br />
      <br />
      This placement can manifest as feeling blocked in self-expression
      or carrying heavy expectations around performance and success. The
      fear of failure or ridicule may weigh on the heart, making it hard
      to step fully into the spotlight. Yet within this tension lies the
      potential for mastery. Saturn in Leo can refine raw talent into
      lasting legacy, turning showmanship into craftsmanship.
      <br />
      <br />
      The work here is to learn that you don&apos;t have to earn the
      right to shine: you simply need to commit to the path your heart
      chooses. When integrated, this placement produces leaders who are
      steady, loyal, and deeply accountable for the power they hold.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn">
        Saturn Placed in the Leo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/07-saturn-transits/05-saturn-in-leo-transit">
        Saturn Transiting the Leo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-text"> (Modern) </p>
    <p className="grimoire-section-subtitle">
       <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
    </p>
    <p className="grimoire-callout">The Rebel on the Throne</p>
    <p>
      When Uranus enters Leo, the planet of disruption steps into the realm of
      personal sovereignty. Leo rules identity, creative authorship, and the right
      to take up space; Uranus rules rupture, decentralization, and the refusal to
      follow inherited scripts. Their meeting can feel like an internal revolt
      against the self you were taught to be.
      <br />
      <br />
      This placement often manifests as tension between individuality and
      visibility. There may be a restless urge to stand out while simultaneously
      rejecting the very spotlight that Leo craves. Expression can arrive in
      flashes—brilliant, unpredictable, and difficult to sustain—leaving the
      native feeling alienated from traditional paths of leadership or recognition.
      <br />
      <br />
      Yet within this friction lies radical creative power. Uranus in Leo breaks
      inherited identities so something more authentic can emerge. The work is to
      learn how to embody originality without needing constant rebellion, and how
      to claim sovereignty without isolating oneself from the collective. When
      integrated, this placement produces innovators who lead by example—rewriting
      what authority, creativity, and selfhood can look like.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/08-uranus-placements/05-leo-uranus">
        Uranus Placed in the Leo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/08-uranus-transits/05-uranus-in-leo-transit">
        Uranus Transiting the Leo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">No Planet in Fall</p>
    <p>
      Leo has no traditional planetary fall, reinforcing its role as a
      sign of inherent radiance. There is no planet considered at its
      weakest here, only energies asked to express themselves with more
      heart, more courage, and more authenticity.
      <br />
      <br />
      When planets move through Leo, the challenge is less about
      weakness and more about intention: are you shining to be seen, or
      shining to illuminate?
    </p>
    <p>{/* No specific placement link for fall in Leo */}</p>
  </article>

  <div className="grimoire-divider" />
</section>

      {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">
    Myths of the Leo Constellation
  </h2>

  <p className="grimoire-label">
    Hercules and the Nemean Lion
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/05-leo/17-leo-assets/leo-myth.png"
      alt="Hercules fighting the Nemean Lion"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Hercules&apos; fight with the Nemean Lion, Pieter Paul Rubens.
      National Museum of Art of Romania, Collection roi Carol Ier.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Hera and Hercules had a complicated relationship, born from
      Hera&apos;s resentment of Zeus&apos;s mortal-born son. As part of
      the Twelve Labors given to Hercules as penance, he was tasked with
      defeating the Nemean Lion: a monstrous beast whose hide was said
      to be impenetrable.
    </p>

    <p>
      Ordinary weapons failed, so Hercules met the lion with raw
      strength, wrestling it and ultimately strangling it to death. He
      then skinned the beast using its own claws and wore the hide as a
      cloak, a symbol of his victory and might.
    </p>

    <p>
      To honor the lion&apos;s power and the epic struggle it
      represented, Zeus placed the Nemean Lion in the sky. There it
      became the constellation Leo: a celestial emblem of courage,
      strength, and the fierce nobility of facing what seems
      undefeatable.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Leo Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/05-leo/17-leo-assets/leo-stamp.png"
              alt="Leo Retrograde Symbol"
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
              <p>Rewriting your story about being seen and heard</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit creative projects, practice speaking from the heart, and
                check in with how you talk about yourself
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Overdramatize misunderstandings, take every critique as a
                personal attack, or make promises for the applause
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Before you speak, ask: “Is this my ego shouting, or my truth
                shining?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/05-mercury-retrograde-in-leo">
                  Mercury Retrograde Through Leo →
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
              <p>Revisiting how you receive love, attention, and appreciation</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reflect on what kind of admiration truly nourishes you, refresh
                your personal style with intention, and celebrate your own
                beauty
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Chase validation, test lovers with unnecessary drama, or equate
                worth with how much attention you get
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat yourself like the main character: without needing an
                audience to prove it.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/05-venus-retrograde-in-leo">
                  Venus Retrograde Through Leo →
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
              <p>Reassessing what&apos;s worth fighting for: and performing for</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Channel energy into refining your craft, practicing brave but
                honest action, and aligning your efforts with your true passions
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Pick ego battles, burn out to prove your strength, or rush on
                stage unprepared just to be first
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let your actions be love letters to your future self, not
                reactions to who&apos;s watching now.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/05-mars-retrogrades-in-leo">
                  Mars Retrograde Through Leo →
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
              <p>Reevaluating big dreams about fame, impact, and legacy</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit long-term creative visions, refine leadership goals, and
                ground your big plans in real devotion: not just grandeur
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Overpromise, inflate your image, or assume the world “owes” you
                a spotlight
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Ask: “If no one ever clapped, would I still want this dream?”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/05-jupiter-retrograde-in-leo">
                  Jupiter Retrograde Through Leo →
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
                Confronting responsibility that comes with power, talent, and
                visibility
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Tighten your commitments, practice disciplined creativity, and
                own the consequences of your choices on and off the stage
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Resist feedback, abdicate leadership, or hide when it&apos;s
                time to take accountability
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: a true leader doesn&apos;t just bask in the light:
                they stand still when it reveals their flaws, too.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/05-saturn-retrograde-in-leo">
                  Saturn Retrograde Through Leo →
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
              <p>Reinventing your persona, art, and expressions of self</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Experiment with authentic weirdness, update your creative
                identity, and honor the parts of you that don&apos;t fit the old
                script
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Stir chaos just to feel exciting, or reject stability that could
                actually support your originality
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let your inner rebel direct the show: but give them a plan and a
                purpose.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/05-uranus-retrograde-in-leo">
                  Uranus Retrograde Through Leo →
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
              <p>Dissolving illusions about fame, worship, and artistic fantasy</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Ground your dreams, check where you&apos;ve glamorized yourself
                or others, and reconnect with the spiritual why behind your art
                and presence
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Lose yourself in escapism, pedestalize idols, or confuse
                visibility with destiny
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                For every fantasy about being adored, name one quiet way you can
                embody your purpose today.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/05-neptune-retrograde-in-leo">
                  Neptune Retrograde Through Leo →
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
              <p>Transforming how you hold power, magnetism, and personal myth</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore your shadow motives for attention, confront power
                struggles, and reclaim your story from old narratives
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Manipulate through charisma, cling to outdated roles, or fear
                evolution because it means outgrowing your old spotlight
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let an old version of your persona die so a more truthful one
                can rise.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/05-pluto-retrograde-in-leo">
                  Pluto Retrograde Through Leo →
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
                Healing wounds around visibility, performance, and being “too
                much” or “not enough”
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Work with inner-child wounds around attention, practice sharing
                your gifts even when you feel vulnerable, and seek stages that
                feel safe: not punishing
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Shrink yourself to avoid judgment, or overcompensate to outrun
                old shame
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My light heals, even when it shakes.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/05-chiron-retrograde-in-leo">
                  Chiron Retrograde Through Leo →
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/05-leo-sun">
                Sun in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/05-leo-moon">
                Moon in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/05-leo-mercury">
                Mercury in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/05-leo-venus">
                Venus in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/05-leo-mars">
                Mars in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/05-leo-jupiter">
                Jupiter in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/05-leo-saturn">
                Saturn in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/05-leo-uranus">
                Uranus in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/05-leo-neptune">
                Neptune in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/05-leo-pluto">
                Pluto in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/05-leo-chiron">
                Chiron in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/05-leo-ascendent">
                Ascendent in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/05-leo-descendent">
                Descendent in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/05-leo-midheaven">
                Midheaven in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/05-leo-imum-coeli">
                Imum Coeli in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/05-leo-lilith">
                Lilith in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/05-leo-north-node">
                North Node in Leo
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/05-leo-south-node">
                South Node in Leo
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/05-sun-in-leo-transit">
                Sun through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/05-moon-in-leo-transit">
                Moon through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/05-mercury-in-leo-transit">
                Mercury through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/05-venus-in-leo-transit">
                Venus through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/05-mars-in-leo-transit">
                Mars through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/05-jupiter-in-leo-transit">
                Jupiter through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/05-saturn-in-leo-transit">
                Saturn through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/05-uranus-in-leo-transit">
                Uranus through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/05-neptune-in-leo-transit">
                Neptune through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/05-pluto-in-leo-transit">
                Pluto through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/05-chiron-in-leo-transit">
                Chiron through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/05-north-node-in-leo-transit">
                North Node through Leo
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/05-south-node-in-leo-transit">
                South Node through Leo
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