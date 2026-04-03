// app/grimoire/astrology/01-zodiacs/07-libra/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function LibraPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Libra Zodiac" subtitle="Zugos">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/00-libra-zodiacs/zodiac-libra.png?updatedAt=1770062733601"
              alt="Libra Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “When all voices are heard, the truth doesn&apos;t shout: it settles
              gently into place.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">September 21st to October 21st</p>
          <p>
            Libra is the "I Balance" energy of the Zodiac. It is the cosmic curator of harmony and exchange.
            After Virgo has refined the details, Libra steps in to weigh them
            against one another, asking what is truly fair, mutual, and aligned.
            This is the energy that cannot help but see both sides, that feels
            the subtle tilt when something, or someone, carries too much.
            <br />
            <br />
            Ruled by Venus, Libra is air that loves. It is a social, relational force
            that seeks beauty, justice, and connection in equal measure. It
            sifts through the parade of energies that came before it, measuring
            impact, intention, and consequence. At its best, Libra is not
            indecisive, it is reverent. It understands that every choice touches
            more than one heart, more than one timeline.
            <br />
            <br />
            Wherever Libra resides in your chart, that&apos;s where Spirit
            studies the art of coexistence: learning how to hold your truth while
            honoring another&apos;s. Here, you learn to negotiate, to listen,
            and to design relationships, contracts, and spaces that feel like
            sacred middle ground...
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
                <Link href="/grimoire/numerology/07-seven">Seven</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Harmony, divine balance, sacred alignment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Scales</p>
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
                <Link href="/grimoire/astrology/06-houses/07-seventh-house">
                  Seventh House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/aphrodite-goddess">Aphrodite</Link>,{" "}
                <Link href="/grimoire/deities/venus-goddess">Venus</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/13-kidneys">Kidneys</Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/15-liver">
                  Liver
                  </Link>
              </p>
              <p>(the purifiers of the body)</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/11-justice">
                  Justice
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/quartz/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                , <Link href="/grimoire/crystals-stones/ametrine">Ametrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/agate">Agate</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/opal">Opal</Link>,{" "}
                <Link href="/grimoire/crystals-stones/bloodstone">
                  Bloodstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">Rhodonite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>
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
                <Link href="/grimoire/herbs/violet">Violet</Link>,{" "}
                <Link href="/grimoire/herbs/rose">Rose</Link>,{" "}
                <Link href="/grimoire/herbs/jasmine">Jasmine</Link>,{" "}
                <Link href="/grimoire/herbs/angelica">Angelica</Link>,{" "}
                <Link href="/grimoire/herbs/thyme">Thyme</Link>,{" "}
                <Link href="/grimoire/herbs/yarrow">Yarrow</Link>,{" "}
                <Link href="/grimoire/herbs/passion-flower">Passion Flower</Link>,{" "}
                <Link href="/grimoire/herbs/rooibos">Rooibos</Link>,{" "}
                <Link href="/grimoire/herbs/beech">Beech</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Balance”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Balanced, well-rounded, curious, intuitive, gentle, compromising,
                fair, just, motivated
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Decision making, choosing a side, self advocacy, conflict
                resolution, giving up people pleasing
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/17-libra-assets/libra-symbol-colored.png"
              alt="Libra Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

       <div className="grimoire-text">
  <p>
    Libra is the pause where awareness turns outward. It is the breath held
    between impulse and consequence, where Spirit first recognizes that it does
    not exist alone. Here, consciousness learns that every choice echoes beyond
    the self.
  </p>
  <p>
    Emerging after Virgo&apos;s refinement, Libra brings intention into
    relationship. Ruled by Venus, it is love given structure: desire translated
    into ethics, beauty shaped into agreement, and connection measured by
    fairness rather than force.
  </p>
  <p>
    This is where the Divine studies coexistence. Libra asks what balance
    actually costs, and who pays for harmony when voices are unequal. Justice
    here is not rigid law but living exchange; a constant recalibration between
    selfhood and responsibility.
  </p>
  <p>
    Libra rules the space between people, the invisible architecture of trust,
    compromise, and mutual regard. It teaches discernment not as judgment, but
    as awareness: knowing when to bend, when to hold, and when balance has
    quietly tipped into self-erasure.
  </p>
  <p>
    Wherever Libra lives in your chart, the cosmos negotiates through you. That
    house becomes a chamber of choice, where decisions are weighed not only for
    personal desire, but for the health of the whole.
  </p>
  <p>
    Through Libra, we remember that balance is not something we achieve once
    and keep. It is a relationship we must tend: a promise to return, again and
    again, to what is truly mutual.
  </p>
</div>
          <div className="grimoire-divider" />


{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Libra in Witchcraft</h2>

            <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/07-libra/17-libra-assets/libra-in-craft.png"
    alt="Libra witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Libra is balance, relational harmony, and energetic
      alignment. This is magick that works through equilibrium rather than
      force, seeking right relationship between self and other, desire and
      consequence, giving and receiving. Libra spellwork is subtle but
      powerful, shaping outcomes by restoring balance where imbalance
      disrupts flow.
    </p>

    <p>
      Working with Libra means working with relationships as living spellwork
      and justice as a sacred principle. This energy excels in harmony and
      reconciliation rituals, partnership and love magick, boundary
      negotiations, truth seeking work, beauty and aesthetic enchantments,
      and spells that recalibrate fairness, consent, and mutual respect.
      Libra does not impose outcomes. It weighs, adjusts, and aligns until
      balance is restored.
    </p>

    <p>
      Libra is also the keeper of indecision and appeasement. When used
      unconsciously, its magick can avoid truth, delay action, or sacrifice
      self for peace. When worked with intention, it becomes ethical power:
      discernment in choice, fairness without self abandonment, and the
      ability to create harmony that honors all parties without erasure.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Harmony and reconciliation rituals, partnership and relationship
        magick, love and attraction spells, justice and fairness workings,
        boundary negotiation enchantments, beauty and aesthetic magick,
        mediation and conflict resolution spells
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Balance, harmony, fairness, consent, relational awareness,
        discernment, ethical power, alignment, mutual respect
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/07-libra/17-libra-assets/libra-art.png"
              alt="Libra artwork"
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
            <p className="grimoire-callout">The Heart at the Scales</p>
            <p>
              When Venus is in Libra, the planet of love, art, and attraction
              moves through one of its home signs. Here, connection becomes a
              craft. Venus in Libra craves mutuality, elegant exchanges, and
              relationships that feel like well-composed symphonies rather than
              solo performances.
              <br />
              <br />
              In this domicile, charm and diplomacy are heightened. There is a
              natural grace in how one listens, responds, and collaborates.
              Beauty is found not only in aesthetics, but in fairness through agreements
              that honor everyone at the table.
              <br />
              <br />
              The challenge lies in avoiding decisions that are made only to
              keep the peace. Yet when centered, Venus in Libra is exquisite at
              designing connections where everyone feels seen and valued.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/07-libra-venus">
                Venus Placed in the Libra Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/07-venus-in-libra-transit">
                Venus Transiting the Libra Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
            </p>
            <p className="grimoire-callout">The Judge in Sacred Balance</p>
            <p>
              When Saturn is placed in Libra, structure and discipline are
              elevated through the lens of fairness. Saturn&apos;s serious,
              boundary-making energy learns to weigh all sides before rendering
              judgment. Responsibility is shared, contracts are honored, and
              commitment is treated as something holy.
              <br />
              <br />
              In this exaltation, Saturn helps Libra focus its gifts. Harmony
              becomes more than a preference: it becomes a long-term practice,
              supported by clear expectations and mutual accountability.
              <br />
              <br />
              This placement can manifest as a deep sense of duty to justice,
              whether in personal relationships or collective systems. Done
              well, it&apos;s the architect of truly equitable structures.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn">
                Saturn Placed in the Libra Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/07-saturn-in-libra-transit">
                Saturn Transiting the Libra Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
            <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
            </p>
            <p className="grimoire-callout">The Warrior at the Table</p>
            <p>
              When Mars enters Libra, the planet of action and conflict steps
              into a sign that prefers negotiation over battle. Mars wants to
              move fast and decisively; Libra wants to weigh options, consult
              others, and seek the most just course for everyone involved. The
              result can feel like driving with one foot on the gas and one on
              the brake.
              <br />
              <br />
              This detriment can create discomfort around anger, confrontation,
              or taking a firm stand. Yet it also carries powerful medicine:
              learning to fight for fairness, not just victory; to wield courage
              in the name of peace, not avoidance.
              <br />
              <br />
              When integrated, Mars in Libra becomes the strategist, the
              advocate, the one who can argue passionately for balance without
              losing sight of the human beings on the other side.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/07-libra-mars">
                Mars Placed in the Libra Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/07-mars-in-libra-transit">
                Mars Transiting the Libra Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
            </p>
            <p className="grimoire-callout">The Self in Reflection</p>
            <p>
              When the Sun falls in Libra, the bright, singular focus of solar
              identity moves through a sign preoccupied with the other. The Sun
              wants to shine from the center; Libra wants to stand at the
              midpoint between two sides. The tension here often shows up as
              difficulty knowing where you end and others begin.
              <br />
              <br />
              This fall placement can blur personal desires in favor of keeping
              the peace or maintaining a balanced image. Yet it also offers a
              profound gift: the ability to see yourself through relationship,
              to understand that who you are is shaped, and revealed, by how you
              relate.
              <br />
              <br />
              The work of the Sun in Libra is to find a core self that does not
              disappear in the mirror of others, but rather chooses partnership
              from a place of clarity and mutual respect.
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
  <h2 className="grimoire-subheading">
    Myths of the Libra Constellation
  </h2>

  <p className="grimoire-label">
    Astraea and the Scales of Justice
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/07-libra/17-libra-assets/libra-myth.png"
      alt="Statue of Lady Justice"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      Lady Justice, blindfolded with scales and sword, Court of Final
      Appeal, Hong Kong.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Astraea, the Star Maiden, Goddess of Innocence and Purity, lived
      among mortals during the Golden Age: the first and most ideal stage
      of humanity. But as the ages progressed, so too did humanity&apos;s
      wickedness and corruption. When Astraea could no longer bear the
      weight of human cruelty, she withdrew from the earth, rising to
      the heavens to become the constellation Virgo.
    </p>

    <p>
      Yet her story does not end there. Astraea also holds the Scales
      that form the constellation Libra: the only sign of the Zodiac
      represented by an object rather than a creature. After witnessing
      the imbalance and injustice of mortal life, she knew someone had
      to keep the score, to weigh hearts and actions against a higher
      standard.
    </p>

    <p>
      In this way, Libra carries Astraea&apos;s legacy: an eternal
      reminder that justice is not blind indifference, but a sacred
      responsibility. The Scales in the sky ask us, again and again,
      what balance really looks like, and what it costs to keep it.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Libra Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/07-libra/17-libra-assets/libra-stamp.png"
              alt="Libra Retrograde Symbol"
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
              <p>Renegotiating conversations, contracts, and unspoken rules</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit agreements, clarify expectations, and practice active
                listening in important relationships
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume others “just know” what you mean, avoid hard talks, or
                agree to keep the peace when your heart says no
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                When in doubt, repeat back what you heard, and ask them to do
                the same for you.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/07-mercury-retrograde-in-libra">
                  Mercury Retrograde Through Libra →
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
              <p>Rebalancing love, beauty, and the give-and-take of partnership</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reflect on reciprocity in relationships, reassess your standards
                for partnership, and reconnect with what feels truly beautiful
                to you
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Slide back into performative harmony, ignore red flags, or stay
                in situations that only look balanced on the surface
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Ask: “If both of us were fully honest, would this still feel fair?”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/07-venus-retrograde-in-libra">
                  Venus Retrograde Through Libra →
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
              <p>Reviewing how you handle conflict, compromise, and confrontation</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine your conflict style, practice stating needs clearly, and
                learn to disagree without disappearing or attacking
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Bottle up resentment, weaponize silence, or start fights just to
                break stuck tension
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Use “I” statements that name your experience instead of
                assigning motives to others.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/07-mars-retrogrades-in-libra">
                  Mars Retrograde Through Libra →
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
              <p>Reconsidering your beliefs about fairness and co-creation</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore how your values shape partnerships, question where
                you&apos;ve settled for “close enough,” and invite more honest
                reciprocity
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume balance means sameness, or believe you must shrink for
                others to shine
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “What does abundance look like when everyone at the table
                is truly considered?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/07-jupiter-retrograde-in-libra">
                  Jupiter Retrograde Through Libra →
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
                Reworking the boundaries, commitments, and responsibilities in
                your relationships
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit agreements, renegotiate where dynamics feel lopsided,
                and define what long-term fairness means to you
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Stay in contracts (energetic or literal) that you&apos;ve
                outgrown just to avoid rocking the boat
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: a boundary is not a punishment: it&apos;s a structure
                that makes real partnership possible.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/07-saturn-retrograde-in-libra">
                  Saturn Retrograde Through Libra →
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
              <p>Innovating how you relate, collaborate, and share power with others</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Experiment with new relational patterns, give more space where
                things feel cramped, and invite authentic individuality into
                partnership
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Create chaos just to feel free, or cling to outdated roles out
                of habit
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Try one small, honest change in how you show up, and let the
                relationship re-balance around it.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/07-uranus-retrograde-in-libra">
                  Uranus Retrograde Through Libra →
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
              <p>Dissolving illusions about “perfect” relationships and harmony-at-all-costs</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Notice where fantasy has replaced truth, bring compassion into
                uncomfortable clarity, and ground romantic ideals in real
                behavior
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Ignore your intuition, glamorize imbalance, or sacrifice your
                needs to keep everything looking beautiful
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let conversations be a little messy if it means they&apos;re
                finally real.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/07-neptune-retrograde-in-libra">
                  Neptune Retrograde Through Libra →
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
              <p>Transforming power dynamics, projections, and shadow contracts in partnership</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Acknowledge where you give away power, confront unspoken
                expectations, and name the truths you&apos;ve been avoiding
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Manipulate to keep things “balanced,” stay silent to avoid
                consequences, or cling to old versions of yourself in
                relationship
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember: sometimes balance is restored not by compromise, but
                by full honesty.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/07-pluto-retrograde-in-libra">
                  Pluto Retrograde Through Libra →
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
              <p>Healing wounds around rejection, people pleasing, and relational worth</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore where you abandoned yourself to be liked, practice
                self-advocacy, and welcome relationships that can hold your
                full truth
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Turn every conflict into proof you are “too much” or “not
                enough,” or treat neutrality as safety
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>Affirm: “My needs matter as much as anyone else&apos;s.”</p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/07-chiron-retrograde-in-libra">
                  Chiron Retrograde Through Libra →
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

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/07-libra-sun">
                Sun in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/07-libra-moon">
                Moon in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/07-libra-mercury">
                Mercury in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/07-libra-venus">
                Venus in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/07-libra-mars">
                Mars in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/07-libra-jupiter">
                Jupiter in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/07-libra-saturn">
                Saturn in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/07-libra-uranus">
                Uranus in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/07-libra-neptune">
                Neptune in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/07-libra-pluto">
                Pluto in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/07-libra-chiron">
                Chiron in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/07-libra-ascendent">
                Ascendent in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/07-libra-descendent">
                Descendent in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/07-libra-midheaven">
                Midheaven in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/07-libra-imum-coeli">
                Imum Coeli in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/07-libra-lilith">
                Lilith in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/07-libra-north-node">
                North Node in Libra
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/07-libra-south-node">
                South Node in Libra
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/07-sun-in-libra-transit">
                Sun through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/07-moon-in-libra-transit">
                Moon through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/07-mercury-in-libra-transit">
                Mercury through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/07-venus-in-libra-transit">
                Venus through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/07-mars-in-libra-transit">
                Mars through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/07-jupiter-in-libra-transit">
                Jupiter through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/07-saturn-in-libra-transit">
                Saturn through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/07-uranus-in-libra-transit">
                Uranus through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/07-neptune-in-libra-transit">
                Neptune through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/07-pluto-in-libra-transit">
                Pluto through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/07-chiron-in-libra-transit">
                Chiron through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/07-north-node-in-libra-transit">
                North Node through Libra
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/07-south-node-in-libra-transit">
                South Node through Libra
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