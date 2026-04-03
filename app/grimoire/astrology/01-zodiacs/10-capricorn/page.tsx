// app/grimoire/astrology/01-zodiacs/10-capricorn/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function CapricornPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Capricorn Zodiac" subtitle="Aigokeros">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/00-capricorn-zodiac/zodiac-capricorn.png?updatedAt=1770062733608"
              alt="Capricorn Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The mountain doesn&apos;t ask for mercy or medals: it simply rises,
              stone by stone, until the sky has no choice but to make room.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">December 21st to January 21st</p>
          <p>
            Capricorn is the "I Use" energy of the Zodiac, the builder who steps
            onto the scene after Sagittarius&apos; wild quest, ready to do
            something real with everything Source has learned. Ruled by Saturn,
            Capricorn is where raw potential is carved into form through
            discipline, strategy, and long-haul devotion. This is the sign that
            understands that dreams without structure are just smoke.
            <br />
            <br />
            Earthy and enduring, Capricorn climbs slowly but deliberately,
            willing to take the unglamorous steps that lead to true mastery. It
            carries an innate sense of responsibility and often feels the
            invisible weight of time ticking behind every decision. At its best,
            this energy creates legacies, foundations, and systems that outlive
            the witch who built them.
            <br />
            <br />
            At its shadow, Capricorn can become all work and no soul: guarded,
            rigid, or convinced that worth must be earned through constant
            effort. The lesson is learning that rest is not failure, tenderness
            is not weakness, and emotional intimacy is not a distraction from
            the mission: it&apos;s a part of it. Wherever Capricorn lives in your
            chart, that&apos;s where Source hands you the blueprint, the clock,
            and the key to your own inner throne.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            {/* Number */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Number</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/numerology/01-one">One</Link>
              </p>
              <p className="grimoire-correspondence-description">
                New cycle of mastery: the elevation of 1 into structure
              </p>
            </div>

            {/* Element */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            {/* Symbol */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Symbol</p>
              <p className="grimoire-correspondence-value">The Seagoat</p>
            </div>

            {/* Planetary Ruler */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
                </Link>
              </p>
            </div>

            {/* House Rulership */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/10-tenth-house">
                  Tenth House
                </Link>
              </p>
            </div>

            {/* Deities */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/saturn-god">Saturn</Link>,{" "}
                <Link href="/grimoire/deities/kronos-god">Kronos</Link>
              </p>
            </div>

            {/* Modality */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Modality</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/07-modality/cardinal">
                  Cardinal
                </Link>
              </p>
            </div>

            {/* Polarity */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Polarity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Negative
                </Link>
              </p>
            </div>

            {/* Energy */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy-&-polarity">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            {/* Parts of the Body */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-ofthe-magickal-body/20-knees">
                  Knees
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/21-teeth">
                  Teeth
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/22-bones">
                  Bones
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/26-skin">
                  Skin
                </Link>
              </p>
            </div>

            {/* Tarot Card */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/15-the-devil">
                  The Devil
                </Link>
              </p>
            </div>

            {/* Chakra */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
            </div>

            {/* Crystals */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/tourmaline">
                  Tourmaline
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/malachite">Malachite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/onyx">Onyx</Link>,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">Fluorite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                {", "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>
              </p>
            </div>

               {/* Metal */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/lead">Lead</Link>
              </p>
            </div>

            {/* Herbs */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/thyme">Thyme</Link>,{" "}
                <Link href="/grimoire/herbs/peppermint">Peppermint</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/marjoram">Marjoram</Link>,{" "}
                <Link href="/grimoire/herbs/comfrey">Comfrey</Link>,{" "}
                <Link href="/grimoire/herbs/elm">Elm</Link>
              </p>
            </div>

            {/* Affirmation */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Use”</p>
            </div>

            {/* Sister Sign */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
              </p>
            </div>

            {/* Natural Qualities */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Grounded, secure, self-disciplined, strategic, self-sufficient,
                hard-working, practical, determined
              </p>
            </div>

            {/* Qualities to Learn & Develop */}
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Work-life balance, emotional intimacy, working with others,
                teamwork, knowing when to call it quits, learning how to let go
                and have fun
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/17-capricorn-assets/capricorn-symbol-colored.png"
              alt="Capricorn Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">
            <p>
              With Saturn ruling Capricorn, this sign feels the drumbeat of time
              more loudly than most. If the Zodiac is a journey Source takes,
              Capricorn is the part that looks at the clock, the map, and the
              unfinished work and says, “We&apos;re not done yet.”
              <br />
              <br />
              This is the energy of completion, structure, and sacred
              responsibility. Capricorn knows that vision without container
              eventually dissolves, so it becomes the architect of reality:
              building systems, careers, and legacies that can hold the weight
              of what the soul came here to do.
              <br />
              <br />
              From a universal standpoint, Capricorn is where Source tests what
              it has learned through all the signs that came before. Can love be
              sustained over time? Can inspiration be turned into practice? Can
              wisdom survive contact with the material world? Here, the answers
              are written in stone, schedule, and consistent action.
              <br />
              <br />
              Wherever Capricorn touches your chart, it&apos;s where you are
              asked to honor time as a holy resource: to move slowly, build
              intentionally, and remember that what you&apos;re crafting here has
              the potential to outlast you.
            </p>
          </div>

          <div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Capricorn in Witchcraft</h2>


          <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/17-capricorn-assets/capricorn-in-craft.png"
    alt="Capricorn witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Capricorn is structure, discipline, and enduring power.
      This is magick that works through commitment, responsibility, and
      long range intention. Capricorn spellwork is not quick or flashy.
      It is deliberate, strategic, and built to last through time and pressure.
    </p>

    <p>
      Working with Capricorn means working with effort as a sacred offering
      and boundaries as protective architecture. This energy excels in
      manifestation through persistence, career and legacy workings,
      protection through structure, authority and responsibility rituals,
      ancestral foundation magick, and spells that support stability,
      endurance, and material mastery. Capricorn does not rush results.
      It builds them.
    </p>

    <p>
      Capricorn is also the keeper of control and burden. When used
      unconsciously, its magick can become rigid, joyless, or rooted in fear
      of failure. When worked with intention, it becomes true authority:
      self leadership without domination, discipline without deprivation,
      and the ability to carry power with wisdom, patience, and integrity.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Long term manifestation rituals, career and legacy magick,
        protection through structure, authority and responsibility workings,
        ancestral and foundation spells, boundary reinforcement enchantments,
        endurance and resilience rituals
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Discipline, structure, responsibility, endurance, authority,
        patience, boundaries, mastery, long term vision
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/10-capricorn/17-capricorn-assets/capricorn-art.png"
              alt="Capricorn artwork"
              className="grimoire-img"
            />
          </div>
        </section>

     {/* DIGNITIES */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Dignities</h2>

          {/* Domicile */}
          <article className="grimoire-article">
            <p className="grimoire-label">Domicile</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
            </p>
            <p className="grimoire-callout">The Architect of Time</p>
            <p>
              This is a comfortable, familiar transit. Saturn rules over the
              Zodiac of Capricorn, so when these two are paired up they&apos;re
              able to use their energies effectively, as if it&apos;s second
              nature. Capricorn gives Saturn a mountain to climb; Saturn gives
              Capricorn the patience, endurance, and strategy to reach the
              summit.
              <br />
              <br />
              In domicile, this energy emphasizes responsibility, integrity, and
              long-term goals. It can feel heavy at times, but it also brings
              the ability to build something real and lasting out of what you
              once only imagined.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn">
                Saturn Placed in the Capricorn Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/10-saturn-in-capricorn-transit">
                Saturn Transiting the Capricorn Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          {/* Exaltation */}
          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
            </p>
            <p className="grimoire-callout">The Strategic Warrior</p>
            <p>
              When Mars is in Capricorn, these two energies are able to express
              themselves with great power and precision. Mars is drive and raw
              initiative; Capricorn is focus, structure, and discipline.
              Together, they&apos;re able to put logic and passion to fantastic
              use and conquer anything placed before them.
              <br />
              <br />
              This placement favors consistent effort over impulsive action. It
              can feel slower than typical Mars energy, but it&apos;s incredibly
              effective: choosing battles wisely and playing the long game rather
              than burning out in one big blaze.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars">
                Mars Placed in the Capricorn Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/10-mars-in-capricorn-transit">
                Mars Transiting the Capricorn Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          {/* Detriment */}
          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
            </p>
            <p className="grimoire-callout">The Guarded Heart</p>
            <p>
              This is an uncomfortable placement for the Moon. The Moon is the
              essence of emotion and wants to be soft, responsive, and
              vulnerable, while Capricorn prefers emotional control and
              restraint. Capricorn would rather focus on what&apos;s in front of
              it than what&apos;s stirring beneath the surface.
              <br />
              <br />
              When these two mix, feelings may be delayed, denied, or turned
              into work. There can be a tendency to equate usefulness with
              worth, or to put caretaking of responsibilities above caretaking
              of the self. Yet this placement can also teach emotional maturity,
              resilience, and the ability to show up even when it&apos;s hard.
            </p>
            <p>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/10-capricorn-moon">
                The Moon Placed in the Capricorn Zodiac →
              </Link>
            </p>
            <p>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/10-moon-in-capricorn-transit">
                The Moon Transiting the Capricorn Zodiac →
              </Link>
            </p>
          </article>

          <div className="grimoire-divider" />

          {/* Fall */}
          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/09-neptune">
                Neptune
              </Link>
            </p>
            <p className="grimoire-callout">The Dreamer in the Workshop</p>
            <p>
              When a planet is in Fall placement it is considered to be in one
              of its weakest expressions. Neptune is spiritual, mystical, and
              diffuse: preferring dreams, symbolism, and boundless experience.
              Capricorn is practical, structured, and grounded in the material
              world.
              <br />
              <br />
              With this pairing, there can be a constant push and pull between
              fantasy and reality. Neptune wants to dissolve boundaries while
              Capricorn wants to reinforce them. This can result in confusion,
              disillusionment, or a tendency to shut down intuitive knowing in
              favor of “what makes sense on paper.”
              <br />
              <br />
              Handled consciously, Neptune in Capricorn can inspire visions that
              actually get built: turning spiritual ideals into tangible work,
              art, or service.
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
  <h2 className="grimoire-subheading">
    Myths of the Capricorn Constellation
  </h2>

  <p className="grimoire-label">Pan and the Storm Beast</p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/10-capricorn/17-capricorn-assets/capricorn-myth.png?updatedAt=1770062733501"
      alt="Capricorn constellation myth illustration"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      An ancient Roman mosaic depicting Capricorn
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Capricorn is associated with Pan&apos;s attempt to escape Typhon,
      the storm beast that threatened all of the Olympian gods. Pan, a
      horned, hoofed deity, leapt into the Nile River to evade the
      monster. As he plunged into the water, his lower half transformed
      into a fish tail, while his upper half remained goat-like.
    </p>

    <p>
      It is said that Pan then warned Zeus of the danger, helping turn
      the tide against Typhon. In gratitude, Zeus placed the sea goat in
      the sky as a constellation: a reminder of quick thinking under
      pressure, and the ability to adapt form without losing essence.
    </p>

    <p>
      Through this myth, Capricorn becomes the symbol of survival,
      strategy, and evolution under stress: the witch who can change shape
      when needed, without abandoning the mission.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Capricorn Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/10-capricorn/17-capricorn-assets/capricorn-stamp.png"
              alt="Capricorn Retrograde Symbol"
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
              <p>Reworking plans, contracts, and long-term strategies</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit goals, review timelines, refine business plans, adjust
                boundaries around work and communication
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Panic over delays, force decisions under pressure, or cling to
                old systems that clearly aren&apos;t working
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Treat every setback like a status meeting with the Universe:
                What needs restructuring so it can actually last?
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/10-mercury-retrograde-in-capricorn">
                  Mercury Retrograde Through Capricorn →
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
              <p>Redefining value, commitment, and what is worth your time and effort</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reassess relationships, business partnerships, and money habits;
                ask if your standards truly reflect your self-worth
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Stay in connections out of obligation alone, overwork to earn
                love, or ignore how drained you feel “being responsible”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Love that costs you your wellbeing is too expensive: renegotiate
                the terms.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/10-venus-retrograde-in-capricorn">
                  Venus Retrograde Through Capricorn →
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
              <p>Recalibrating drive, ambition, and your relationship to work</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Reevaluate which goals deserve your energy, slow down to plan
                strategically, and honor your body&apos;s limits
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Push through burnout, equate rest with laziness, or lash out
                when progress feels slower than expected
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Your ambition isn&apos;t a problem: your pacing might be. Align
                your effort with a sustainable rhythm.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/10-mars-retrogrades-in-capricorn">
                  Mars Retrograde Through Capricorn →
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
              <p>Reassessing success, status, and your definition of growth</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit long-term ambitions, career paths, and big life
                structures; ask what “success” actually means to you now
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Chase titles you&apos;ve outgrown, overidentify with your
                achievements, or ignore how your goals impact your spirit
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Expansion through Capricorn is about quality, not quantity: build
                slower, build wiser.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/10-jupiter-retrograde-in-capricorn">
                  Jupiter Retrograde Through Capricorn →
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
              <p>Inner accountability, revisiting commitments, and refining your role</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine where you&apos;ve taken on too much, renegotiate
                obligations, and strengthen boundaries around time and energy
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Wear martyrdom as a badge of honor, avoid necessary endings, or
                keep carrying responsibilities that no longer belong to you
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Discipline isn&apos;t just doing more: sometimes it&apos;s
                bravely doing less.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/10-saturn-retrograde-in-capricorn">
                  Saturn Retrograde Through Capricorn →
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
              <p>Unexpected changes to work, structure, or long-term life plans</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Embrace innovative systems, experiment with new ways of working,
                and listen when your nervous system says a structure is outdated
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Cling to “how it&apos;s always been,” fear change just because
                it&apos;s disruptive, or rebel without a plan
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Let your structures evolve: your foundation can flex without
                collapsing.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/10-uranus-retrograde-in-capricorn">
                  Uranus Retrograde Through Capricorn →
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
              <p>Dissolving illusions about success, productivity, and control</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Question where you&apos;ve spiritualized overwork, tune into
                your intuition around timing, and allow dreams to guide
                practical choices
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Ignore your body&apos;s signals, use work to avoid feelings, or
                let fear of instability shut down your spiritual side
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                You&apos;re allowed to be both mystical and methodical: let your
                magick influence your schedule.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/10-neptune-retrograde-in-capricorn">
                  Neptune Retrograde Through Capricorn →
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
              <p>Deep transformation of power structures, authority, and legacy</p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine your relationship to control, authority figures, and
                your own leadership; release toxic ambitions and power games
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Build your life around fear, domination, or external approval;
                cling to titles once they&apos;ve become cages
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                The most powerful structures are the ones built in alignment
                with your soul, not your ego.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/10-pluto-retrograde-in-capricorn">
                  Pluto Retrograde Through Capricorn →
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
                Healing wounds around responsibility, failure, and feeling like
                you&apos;re never doing enough
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Explore where you learned to tie your worth to productivity,
                success, or being “the strong one”; offer compassion to the part
                of you that&apos;s tired
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Shame yourself for needing support, hide your struggles behind
                competence, or assume you must carry everything alone
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Affirm: “My value is inherent: my work is just one way it shows.”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/10-chiron-retrograde-in-capricorn">
                  Chiron Retrograde Through Capricorn →
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
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Placements</h3>

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/10-capricorn-sun">
                Sun in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/10-capricorn-moon">
                Moon in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/10-capricorn-mercury">
                Mercury in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/10-capricorn-venus">
                Venus in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/10-capricorn-mars">
                Mars in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/10-capricorn-jupiter">
                Jupiter in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/10-capricorn-saturn">
                Saturn in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/10-capricorn-uranus">
                Uranus in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/10-capricorn-neptune">
                Neptune in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/10-capricorn-pluto">
                Pluto in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/10-capricorn-chiron">
                Chiron in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/10-capricorn-ascendent">
                Ascendent in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/10-capricorn-descendent">
                Descendent in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/10-capricorn-midheaven">
                Midheaven in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/10-capricorn-imum-coeli">
                Imum Coeli in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/10-capricorn-lilith">
                Lilith in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/10-capricorn-north-node">
                North Node in Capricorn
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/10-capricorn-south-node">
                South Node in Capricorn
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/10-sun-in-capricorn-transit">
                Sun through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/10-moon-in-capricorn-transit">
                Moon through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/10-mercury-in-capricorn-transit">
                Mercury through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/10-venus-in-capricorn-transit">
                Venus through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/10-mars-in-capricorn-transit">
                Mars through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/10-jupiter-in-capricorn-transit">
                Jupiter through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/10-saturn-in-capricorn-transit">
                Saturn through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/10-uranus-in-capricorn-transit">
                Uranus through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/10-neptune-in-capricorn-transit">
                Neptune through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/10-pluto-in-capricorn-transit">
                Pluto through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/10-chiron-in-capricorn-transit">
                Chiron through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/10-north-node-in-capricorn-transit">
                North Node through Capricorn
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/10-south-node-in-capricorn-transit">
                South Node through Capricorn
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