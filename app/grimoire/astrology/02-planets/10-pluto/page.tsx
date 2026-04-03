// app/grimoire/astrology/02-planets/10-pluto/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function PlutoPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Pluto">
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto.png"
            alt="Pluto in Astrology"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Pluto doesn&apos;t transform you gently: he takes what is false, and
              leaves you with what is real.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>

          <p className="grimoire-label-small">
            Death • Rebirth • Power • Shadow • Truth
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Pluto in Astrology</h2>

          <div className="grimoire-text">
            <p>
              Pluto is the alchemist of your chart: the force of death and
              rebirth, shadow and truth, destruction and regeneration. Pluto
              governs power, control, obsession, taboo, and the deep
              transformations you cannot undo once they begin.
            </p>

            <p>
              In astrology, Pluto shows where you evolve through intensity. This
              is where you face your shadow, reclaim your power, and burn down
              what cannot survive the truth. Pluto doesn&apos;t do surface. Pluto
              does root.
            </p>

            <p>
              Wherever Pluto sits in your chart: by sign, house, and aspect: is
              where you are meant to become unrecognizable to your old self. The
              work is not comfortable. The reward is freedom.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* CORE ATTRIBUTES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Core Attributes of Pluto</h2>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Title</h3>
            <p className="grimoire-correspondence-value">
              The Alchemist • The Underworld Key • The Transformer
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Principle</h3>
            <p className="grimoire-correspondence-value">
              Death and rebirth, power, shadow, truth, obsession, regeneration
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Elemental Nature</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/water">Water</Link> • Depth •
              Metamorphosis
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* PLUTONIAN CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <h2 className="grimoire-subheading">Plutonian Correspondences</h2>

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
              <Link href="/grimoire/timing/days-of-the-week/07-saturday">
                Saturday
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Zodiac Rulership</h3>
            <p className="grimoire-correspondence-value">
              Rules{" "}
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">Scorpio</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Deities</h3>
            <p className="grimoire-correspondence-value">Hades, Pluto</p>
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
              <Link href="/grimoire/parts-of-the-magickal-body/16-reproductive-organs">
                reproductive organs
              </Link>
              , detox processes, elimination, deep nervous system release, trauma
              storage
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Tarot Card</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/tarot/major-arcana/13-death">
                Death
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Crystals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>,{" "}
              <Link href="/grimoire/crystals-stones/onyx">Onyx</Link>,{" "}
              <Link href="/grimoire/crystals-stones/black-tourmaline">
                Black tourmaline
              </Link>
              ,{" "}
              <Link href="/grimoire/crystals-stones/smoky-quartz">
                Smoky quartz
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Metals</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/metals/iron">Iron</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Herbs</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/herbs/myrrh">Myrrh</Link>,{" "}
              <Link href="/grimoire/herbs/patchouli">Patchouli</Link>,{" "}
              <Link href="/grimoire/herbs/mugwort">Mugwort</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <h3 className="grimoire-correspondence-label">Colors</h3>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/colors/12-black">Black</Link>,{" "}
              <Link href="/grimoire/colors/09-purple">Purple</Link>,{" "}
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
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto-symbol-colored.png"
      alt="Pluto Universal Standpoint glyph"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-text">
    <p>
      Pluto is the principle of transformation. Where the Sun defines purpose,
      the Moon defines experience, Mercury defines understanding, Venus defines
      value, Mars defines action, Jupiter defines meaning, Saturn defines
      structure, Uranus defines awakening, and Neptune defines transcendence,
      Pluto governs power. It is the force that destroys what can no longer
      survive and reveals what remains when illusion is stripped away.
    </p>

    <p>
      This is the archetype of death and rebirth. Pluto rules elimination,
      regeneration, obsession, and the hidden mechanisms of control that shape
      both psyche and society. In the human psyche, Pluto is the underworld
      mind: the place where shadow, desire, fear, and truth coexist without
      pretense.
    </p>

    <p>
      In the cosmic body, Pluto regulates renewal. It governs decay,
      compression, and the pressure that turns breakdown into evolution. In
      the human body, it performs the same role. Pluto governs survival
      instinct, cellular regeneration, and the deep biological intelligence
      that knows how to endure by transforming.
    </p>

    <p>
      Pluto is the law of inevitability. It asks not “What do I believe?” or
      “What do I release?” but “What must change, no matter the cost?” This is
      why Pluto imbalance often manifests as control struggles, obsession,
      powerlessness, or fear of loss. When transformation is resisted, it
      becomes destruction. When embraced, it becomes rebirth.
    </p>

    <p>
      Wherever Pluto sits in your chart, that is where profound change is
      unavoidable. It marks the place where power must be reclaimed, shadow
      must be faced, and old identities must die for new life to emerge. To
      tend Pluto is to tend your relationship with truth: to surrender what is
      false, to survive what is real, and to rise renewed from what remains.
    </p>
  </div>
</section>

<div className="grimoire-divider" />


        <div className="grimoire-image">
          <img
            src="PASTE-YOUR-WITCHCRAFT-ART-IMAGE-HERE"
            alt="Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

        <div className="grimoire-divider" />

      <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto-in-craft.png"
    alt="Witchcraft artwork"
    className="grimoire-img"
  />
</div>

<div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Pluto in Witchcraft</h2>

  <div className="grimoire-text">
    <p>
      In witchcraft, Pluto is the keeper of death, power, and irreversible
      change. Plutonian magick governs endings, rebirth, shadow work, and the
      forces that strip away what is false so something truer can emerge. This
      is not gentle or symbolic energy. Pluto works at depth, demanding honesty
      and transformation at the root.
    </p>

    <p>
      Working with Pluto means working with the unseen mechanics of power. This
      is the current used for deep banishing, cord severing, shadow integration,
      ancestral clearing, and rebirth rituals. Plutonian workings do not adjust
      circumstances. They dismantle them, clearing space for total renewal.
    </p>

    <p>
      Pluto teaches conscious descent. When transformation is avoided, it
      arrives as crisis. When entered willingly, it becomes empowerment. Track
      Pluto through transits to recognize when something must end, when control
      must be relinquished, and when reclaiming buried power is the only path
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
        Shadow work and integration, deep banishing and cord severing, ancestral
        and karmic clearing, rebirth and transformation rituals, power
        reclamation, taboo and underworld magick
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Keys
      </h3>
      <p className="grimoire-correspondence-value">
        Death and rebirth, power, shadow, transformation, truth, control,
        intensity, regeneration
      </p>
    </div>

    <Link
      href="PASTE-YOUR-PLUTO-WITCHCRAFT-DEEP-DIVE-ROUTE-HERE"
      className="grimoire-deep-dive"
    >
      Dive Deeper into Pluto in Witchcraft →
    </Link>
  </section>
</section>

<div className="grimoire-divider" />

        <div className="grimoire-image">
          <img
            src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto-art.png"
            alt="Pluto artwork"
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
      <Link href="/grimoire/astrology/02-planets/10-pluto">Pluto</Link>
    </p>
    <p className="grimoire-callout">The Underworld Made Conscious</p>
    <p>
      In Scorpio, Pluto operates at full depth. Power is not theoretical here,
      it is lived, confronted, and transformed through direct engagement with
      shadow, desire, and survival instinct. This is Pluto at home, where
      nothing remains hidden for long.
      <br />
      <br />
      This dignity strengthens psychological insight, resilience, and the
      capacity to endure profound change without denial. Pluto in Scorpio
      understands that transformation is not optional. It is the price of
      truth. Control, obsession, and fear are not avoided, but faced until
      they lose their grip.
      <br />
      <br />
      The shadow lies in fixation. When power becomes identity, release can
      feel like annihilation. The lesson is surrender: to allow death and
      rebirth to occur without clinging to what has already expired.
      <br />
      <br />
      When Pluto is in domicile, the underworld becomes a place of awakening.
      What is buried rises not to destroy, but to be integrated.
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

  {/* EXALTATION */}
  <article className="grimoire-article">
    <p className="grimoire-label">Exaltation</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/10-pluto">Pluto</Link>
    </p>
    <p className="grimoire-callout">The Power of the Spotlight</p>
    <p>
      In Leo, Pluto elevates power through visibility. Transformation occurs
      publicly, through identity, leadership, and creative authority. What
      would remain hidden elsewhere is illuminated, forcing confrontation
      with ego, pride, and influence.
      <br />
      <br />
      This exaltation strengthens presence, charisma, and the ability to wield
      power openly rather than covertly. Pluto in Leo understands how control
      operates through recognition and how influence expands when it is seen
      and acknowledged.
      <br />
      <br />
      The danger lies in domination through image. When validation replaces
      authenticity, power becomes performative rather than transformative.
      The lesson is integrity: to lead without spectacle and to transform
      without needing applause.
      <br />
      <br />
      When Pluto is exalted, power becomes conscious. Authority is reclaimed
      not through force, but through self-possession.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/10-pluto-placements/05-leo-pluto">
        Pluto Placed in the Leo Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/10-pluto-transits/05-pluto-in-leo-transit">
        Pluto Transiting the Leo Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* DETRIMENT */}
  <article className="grimoire-article">
    <p className="grimoire-label">Detriment</p>
    <p className="grimoire-section-subtitle">
      <Link href="/grimoire/astrology/02-planets/10-pluto">Pluto</Link>
    </p>
    <p className="grimoire-callout">The Slow Alchemy of Matter</p>
    <p>
      In Taurus, Pluto encounters resistance. The urge for transformation
      clashes with the desire for stability, continuity, and material security.
      Change unfolds slowly, often through pressure rather than rupture.
      <br />
      <br />
      This placement can intensify attachment to resources, values, and
      physical safety. Letting go may feel threatening, and power struggles
      can emerge around ownership and control of the material world.
      <br />
      <br />
      Yet this detriment carries endurance. Pluto in Taurus transforms through
      persistence, reshaping values and matter over time rather than through
      sudden collapse. What survives here is deeply rooted.
      <br />
      <br />
      Pluto in detriment teaches that transformation does not always arrive as
      destruction. Sometimes it arrives as pressure that cannot be ignored.
    </p>
    <p>
      <Link href="/grimoire/astrology/03-placements/10-pluto-placements/02-taurus-pluto">
        Pluto Placed in the Taurus Zodiac →
      </Link>
    </p>
    <p>
      <Link href="/grimoire/astrology/04-transits/10-pluto-transits/02-pluto-in-taurus-transit">
        Pluto Transiting the Taurus Zodiac →
      </Link>
    </p>
  </article>

  <div className="grimoire-divider" />

  {/* NO FALL */}
  <article className="grimoire-article">
    <p className="grimoire-label">Fall</p>
    <p className="grimoire-section-subtitle">No Planets Fall</p>
    <p>
      Pluto holds no traditional fall. Its transformative force does not weaken
      through confinement or misplacement in a single sign. Wherever Pluto
      operates, it transforms through pressure, exposure, and renewal rather
      than loss of potency.
      <br />
      <br />
      Unlike personal planets, Pluto does not seek comfort or expression. It
      seeks truth. Each sign offers a different terrain for transformation, but
      none render Pluto powerless. Its work is inevitable, regardless of
      environment.
      <br />
      <br />
      This absence of fall reflects Pluto&apos;s role as an evolutionary force.
      It does not diminish. It adapts, reshapes, and continues its work beneath
      the surface until change becomes unavoidable.
    </p>
  </article>

  <div className="grimoire-divider" />
</section>

{/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myths of Pluto</h2>

  <p className="grimoire-label">
    Hades, Lord of the Underworld
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto-myth-art.jpg"
      alt="Hades, God of the dead and riches, King of the underworld, with Cerberus"
      className="grimoire-img"
    />
    <p className="grimoire-caption">
      Hades, God of the dead and riches, King of the underworld, with Cerberus,
      mid-2nd century AD statue from the Sanctuary of the Egyptian Gods at Gortyna
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      In Greek mythology, Pluto is rooted in Hades, ruler of the Underworld and
      guardian of the realm of the dead. Unlike gods of punishment or chaos,
      Hades governed inevitability, ensuring that all souls reached their
      proper place after life. His domain was not evil, but absolute: a realm
      beyond return, where transformation was final and truth could no longer
      be avoided.
    </p>

    <p>
      Hades was rarely worshipped openly and was often feared rather than
      revered, not because of cruelty, but because he represented forces that
      could not be bargained with. Through Hades, Pluto became associated with
      endings, power hidden beneath the surface, and the unseen processes that
      reshape existence from the inside out.
    </p>

    <p className="grimoire-label">
      Pluto and the Power of Renewal
    </p>

    <p>
      In Roman mythology, Hades was known as Pluto, a name derived from wealth
      and abundance drawn from beneath the earth. Pluto ruled not only death,
      but regeneration: precious metals, fertile soil, and the latent power
      that emerges after decay. This reframing transformed the Underworld from
      a place of finality into one of potential rebirth.
    </p>

    <p>
      Through Pluto, the planet came to symbolize deep transformation,
      psychological intensity, and the stripping away of illusion. Pluto in
      myth is not destruction for its own sake, but necessary ending that
      allows something truer to rise. As both Hades and Pluto, this archetype
      teaches that real power is found by facing what is buried, and that
      renewal is born only after surrender to change.
    </p>
  </article>
</section>

 <div className="grimoire-divider" />

       {/* PLUTO PLACEMENTS CHEAT SHEET */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Pluto Placements Cheat Sheet</h2>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/planets/pluto/pluto-symbol.png"
      alt="Pluto Placements Symbol"
      className="grimoire-img"
    />
  </div>

  <div className="grimoire-divider" />

  <div className="grimoire-grid">
    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/01-aries-pluto">
          <span className="grimoire-glyph">{"\u2648\uFE0E"}</span> Aries Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Fire of Becoming</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through will, courage, and initiation</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Power that is earned through action and self mastery</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>New beginnings and fearless reinvention</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose change with intention and direction</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Force transformation through conflict alone</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let courage build you instead of burning you</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/01-aries-pluto">
          Pluto in Aries →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/02-taurus-pluto">
          <span className="grimoire-glyph">{"\u2649\uFE0E"}</span> Taurus Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Slow Alchemy of Matter</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation of values, resources, and stability</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Security that evolves instead of calcifies</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Building something that lasts through deep change</p>
      <p className="grimoire-label-small">Do</p>
      <p>Release what you cling to so growth can happen</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse possession with safety</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>True stability is adaptive</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/02-taurus-pluto">
          Pluto in Taurus →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/03-gemini-pluto">
          <span className="grimoire-glyph">{"\u264A\uFE0E"}</span> Gemini Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of Language</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through ideas, truth, and communication</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Clarity that cuts through illusion and doublespeak</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning that changes the mind permanently</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use words with integrity and purpose</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Manipulate meaning to control outcomes</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let truth be precise, not performative</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/03-gemini-pluto">
          Pluto in Gemini →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/04-cancer-pluto">
          <span className="grimoire-glyph">{"\u264B\uFE0E"}</span> Cancer Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Depths of Ancestral Power</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through lineage, home, and emotional roots</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Safety that is honest, not inherited by default</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Healing family patterns through deep feeling</p>
      <p className="grimoire-label-small">Do</p>
      <p>Face what was passed down and choose what continues</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Let nostalgia replace truth</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Break cycles with compassion and clarity</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/04-cancer-pluto">
          Pluto in Cancer →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/05-leo-pluto">
          <span className="grimoire-glyph">{"\u264C\uFE0E"}</span> Leo Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of the Spotlight</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through identity, creativity, and visibility</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Recognition that reflects truth, not performance</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Creative risk and courageous self expression</p>
      <p className="grimoire-label-small">Do</p>
      <p>Create from the core, not for approval</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use attention as a substitute for intimacy</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Let visibility be earned through authenticity</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/05-leo-pluto">
          Pluto in Leo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/06-virgo-pluto">
          <span className="grimoire-glyph">{"\u264D\uFE0E"}</span> Virgo Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of Refinement</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through discipline, service, and precision</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Competence, usefulness, improvement that matters</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Fixing what is broken and making systems work</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use your standards to heal and strengthen</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Turn critique into control</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Refinement is powerful when it stays compassionate</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/06-virgo-pluto">
          Pluto in Virgo →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/07-libra-pluto">
          <span className="grimoire-glyph">{"\u264E\uFE0E"}</span> Libra Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of Shared Choice</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through relationship and agreement</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Mutuality, fairness, honest collaboration</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Partnership built on truth and consent</p>
      <p className="grimoire-label-small">Do</p>
      <p>Choose bonds that evolve through honesty</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Trade your voice for peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Power shared consciously becomes devotion</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/07-libra-pluto">
          Pluto in Libra →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/08-scorpio-pluto">
          <span className="grimoire-glyph">{"\u264F\uFE0E"}</span> Scorpio Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Underworld Made Conscious</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through depth, truth, and shadow integration</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Honesty, loyalty, emotional courage</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Private devotion and radical self knowledge</p>
      <p className="grimoire-label-small">Do</p>
      <p>Face what is hidden and let it become wisdom</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use secrecy as a weapon</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Awareness turns intensity into power</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/08-scorpio-pluto">
          Pluto in Scorpio →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/09-sagittarius-pluto">
          <span className="grimoire-glyph">{"\u2650\uFE0E"}</span> Sagittarius Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Truth That Transforms</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through belief, meaning, and perspective</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, honesty, purpose that grows</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Learning that changes your worldview</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let truth challenge you into wisdom</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Use certainty to avoid complexity</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Transformation is strongest when it stays humble</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/09-sagittarius-pluto">
          Pluto in Sagittarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/10-capricorn-pluto">
          <span className="grimoire-glyph">{"\u2651\uFE0E"}</span> Capricorn Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of Authority</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through structure, ambition, and leadership</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Competence, respect, long term impact</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Building something that endures</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use power responsibly and build with integrity</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Confuse control with stability</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Authority is strongest when it is ethical</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/10-capricorn-pluto">
          Pluto in Capricorn →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/11-aquarius-pluto">
          <span className="grimoire-glyph">{"\u2652\uFE0E"}</span> Aquarius Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Power of the Collective</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through systems, community, and shared vision</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Freedom, autonomy, progress with purpose</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>New frameworks and future building</p>
      <p className="grimoire-label-small">Do</p>
      <p>Use your influence to uplift and evolve the whole</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Detach from humanity in the name of ideals</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Real change includes people, not just concepts</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/11-aquarius-pluto">
          Pluto in Aquarius →
        </Link>
      </p>
    </article>

    <div className="grimoire-divider" />

    <article className="grimoire-card">
      <h3 className="grimoire-label">
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/12-pisces-pluto">
          <span className="grimoire-glyph">{"\u2653\uFE0E"}</span> Pisces Pluto{" "}
          <span className="grimoire-glyph">{"\u2647\uFE0E"}</span>
        </Link>
      </h3>
      <p className="grimoire-section-subtitle">The Dissolution of Power</p>
      <p className="grimoire-label-small">Theme</p>
      <p>Transformation through surrender, compassion, and spiritual release</p>
      <p className="grimoire-label-small">Emotional Needs</p>
      <p>Faith, meaning, gentle truth</p>
      <p className="grimoire-label-small">Comfort</p>
      <p>Healing, symbolism, surrendering control</p>
      <p className="grimoire-label-small">Do</p>
      <p>Let endings be sacred and purposeful</p>
      <p className="grimoire-label-small">Do Not</p>
      <p>Disappear from responsibility and call it peace</p>
      <p className="grimoire-label-small">Growth Tip</p>
      <p>Power becomes wisdom when it becomes compassion</p>
      <p>
        <Link href="/grimoire/astrology/03-placements/10-pluto-placements/12-pisces-pluto">
          Pluto in Pisces →
        </Link>
      </p>
    </article>
  </div>
</section>

<div className="grimoire-divider" />

{/* PLUTO CYCLE CHEAT SHEET */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Pluto Cycle Cheat Sheet</h2>

  <div className="grimoire-text">
    <p>
      Pluto governs power, transformation, destruction, and rebirth. In
      planetary astrology, Pluto describes how deep change occurs, how control
      and vulnerability are confronted, and how endings give rise to entirely
      new forms of existence.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* PLUTONIAN MOVEMENT OVERVIEW */}
  <div className="grimoire-text">
    <p className="grimoire-label-small">Zodiac Cycle</p>
    <p>
      Approximately 248 years to move through all twelve zodiac signs.
    </p>

    <p className="grimoire-label-small">Time Per Sign</p>
    <p>
      Approximately 12 to 30 years in each zodiac sign, depending on orbital
      speed.
    </p>

    <p className="grimoire-label-small">Astrological Focus</p>
    <p>
      Power dynamics, transformation, death and rebirth cycles, control,
      survival instincts, and irreversible change.
    </p>
  </div>

  <div className="grimoire-divider" />

  {/* WHY PLUTO FEELS INTENSE AND IRREVERSIBLE */}
  <h3 className="grimoire-subheading">Why Pluto Feels Intense and Irreversible</h3>

  <div className="grimoire-text">
    <p>
      Pluto moves so slowly that its influence defines entire generations. Its
      transits mark long periods of fundamental transformation rather than
      temporary conditions, reshaping structures, identities, and systems at
      their core.
    </p>

    <p>
      Unlike other planets, Pluto does not adjust or refine existing patterns.
      It dismantles what can no longer endure. Pluto transits often coincide
      with power shifts, deep psychological change, and endings that make true
      renewal unavoidable.
    </p>
  </div>
</section>


 <div className="grimoire-divider" />
       
       
        {/* LINKS */}
        <section className="grimoire-section">
          <div className="grimoire-two-column-links">
            <div className="grimoire-two-column">
              <h3>Placements</h3>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements">
                Pluto Placements
              </Link>
            </div>

            <div className="grimoire-two-column">
              <h3>Transits</h3>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits">
                Pluto Transits
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