// app/grimoire/astrology/01-zodiacs/11-aquarius/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function AquariusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Aquarius Zodiac" subtitle="Hydrochoos">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/00-aquarius-zodiac/zodiac-aquarius.png?updatedAt=1770062733602"
              alt="Aquarius Zodiac Wheel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “When the future calls, Aquarius doesn&apos;t fit in: it plugs in and
              rewrites the circuit.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">January 21st to February 21st</p>
          <p>
            Aquarius is the "I Know" energy of the Zodiac, the flash of realization that we are not
            isolated stars, but a living constellation. Here, consciousness
            steps outside the self and looks back with cosmic perspective. This
            is the part of the Zodiac where Source remembers that every mind is
            a node in a vast network, and that true progress is never just
            personal, it&apos;s collective.
            <br />
            <br />
            Ruled by Uranus, Aquarius is the current of innovation, rebellion,
            and revelation. It moves like lightning through old systems,
            exposing what is outdated and downloading what&apos;s ahead of its
            time. This energy is detached enough to see patterns others miss,
            yet idealistic enough to believe that a better world is not only
            possible, but necessary. Aquarius doesn&apos;t simply break the
            rules: it asks why they were written in the first place.
            <br />
            <br />
            Wherever Aquarius flows through your chart, you&apos;re wired into
            the grid of the future. That house is where you carry radical
            ideas, unconventional thinking, and a drive to liberate yourself and
            others from what no longer fits. It is where you are asked to hold
            both freedom and responsibility: to be the lightning and the
            lantern, illuminating the path for the collective to follow.
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
                Higher intuition, collective consciousness: mastery of polarity
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
              <p className="grimoire-correspondence-value">The Waterbearer</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planetary Ruler</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">House Rulership</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/06-houses/11-eleventh-house">
                  Eleventh House
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities/uranus-god">Uranus</Link>,{" "}
                <Link href="/grimoire/deities/caelus-god">Caelus</Link>
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
                <Link href="/grimoire/parts-ofthe-magickal-body/23-shins">
                  Shins
                </Link>
                {", "}
                <Link href="/grimoire/parts-ofthe-magickal-body/24-ankles">
                  Ankles
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Tarot Card</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/tarot/major-arcana/17-the-star">
                  The Star
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/06-third-eye-chakra">Third Eye</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/aquamarine">Aquamarine</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/agate">Agate</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/labradorite">Labradorite</Link>
                {", "}
                <Link href="/grimoire/crystals-stones/onyx">Onyx</Link>
              </p>
            </div>

              <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Metal</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/metals/uranium">Uranium</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/nettle">Nettle</Link>,{" "}
                <Link href="/grimoire/herbs/lavender">Lavender</Link>,{" "}
                <Link href="/grimoire/herbs/vervain">Vervain</Link>,{" "}
                <Link href="/grimoire/herbs/chamomile">Chamomile</Link>,{" "}
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Affirmation</p>
              <p className="grimoire-correspondence-value">“I Know”</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sister Sign</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Natural Qualities</p>
              <p className="grimoire-correspondence-value">
                Detached, intellectual, idealistic, independent, progressive,
                adaptable, analytical, unconventional
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Qualities to Learn &amp; Develop
              </p>
              <p className="grimoire-correspondence-value">
                Teamwork, trust, grounding, emotional expression, social tact
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
              src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/17-aquarius-assets/aquarius-symbol-colored.png"
              alt="Aquarius Universal Standpoint glyph"
              className="grimoire-img"
            />
          </div>

          <div className="grimoire-text">

  <p>
    The current that moves between minds.
    <br />
    <br />
    The lightning flash that reveals the whole pattern at once.
  </p>
  <p>
    Aquarius is where consciousness remembers itself as collective. Here, the
    universe steps back from the single story and studies the system: the web
    of relationships, technologies, and ideas that bind lives together across
    distance and time. This is awareness elevated from self to network.
  </p>
  <p>
    In this standpoint, individuality is not erased but reframed. Aquarius
    asks: How does this choice ripple outward? Who is included, and who is
    left behind? Power structures become visible, progress is questioned, and
    freedom is redefined as something that must exist for everyone in order to be real.
  </p>
  <p>
    Here, the cosmos experiments boldly. Old frameworks fracture, new models
    emerge, and the outsider becomes the visionary precisely because they were
    never fully contained by the old order. Aquarius carries the frequency of
    future timelines: ideas arriving early, often misunderstood, always ahead
    of their time.
  </p>
  <p>
    Wherever Aquarius lives in your chart, the universe thinks through you.
    That house becomes a site of innovation, disruption, and social insight. This
    where you are asked not just to see what is possible, but to help rewire
    what no longer serves the whole.
  </p>
  <p>
    Through Aquarius, we remember that change is not chaos but intelligence in
    motion, and that the most radical act is to imagine a world that works for
    everyone, then help bring it into being.
  </p>
</div>


          <div className="grimoire-divider" />

{/* WITCHCRAFT */}
<section className="grimoire-section">
  <h2 className="grimoire-subheading">Aquarius in Witchcraft</h2>

            <div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/astrology/zodiacs/11-aquarius/17-aquarius-assets/aquarius-in-craft.png"
    alt="Aquarius witchcraft artwork"
    className="grimoire-img"
  />
</div>

  <div className="grimoire-text">
    <p>
      In witchcraft, Aquarius is innovation, collective consciousness, and
      future focused magick. This is magick that works through ideas, systems,
      and shared vision rather than personal desire alone. Aquarius spellwork
      seeks to disrupt stagnation, liberate energy, and reimagine what is
      possible beyond tradition.
    </p>

    <p>
      Working with Aquarius means working with intention as a catalyst for
      change and community as a magickal circuit. This energy excels in group
      rituals, social and collective magick, future vision work, technological
      and symbolic spellcraft, liberation and reform rituals, and enchantments
      designed to break patterns and rewire systems. Aquarius does not repeat
      what has already been done. It invents what comes next.
    </p>

    <p>
      Aquarius is also the keeper of detachment and rebellion. When used
      unconsciously, its magick can become erratic, emotionally distant, or
      oppositional without purpose. When worked with intention, it becomes
      revolutionary clarity: innovation anchored in ethics, freedom paired
      with responsibility, and the ability to channel visionary ideas into
      tangible change for the collective.
    </p>
  </div>

  {/* GROUPED MAGICK BLOCK */}
  <section className="grimoire-correspondences">
    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">
        Magickal {"\u00A0"}Uses
      </h3>
      <p className="grimoire-correspondence-value">
        Group and collective rituals, future vision and innovation magick,
        liberation and reform spells, community based enchantments,
        technological and symbolic workings, pattern breaking rituals,
        social change and awakening work
      </p>
    </div>

    <div className="grimoire-correspondence">
      <h3 className="grimoire-correspondence-label">Magickal{"\u00A0"} Keys</h3>
      <p className="grimoire-correspondence-value">
        Innovation, liberation, collective consciousness, vision, originality,
        ethical rebellion, detachment, future focus, systems awareness
      </p>
    </div>
  </section>
</section>

<div className="grimoire-divider" />

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/11-aquarius/17-aquarius-assets/aquarius-art.png"
              alt="Aquarius artwork"
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
    <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
  </p>
  <p className="grimoire-callout">The Architect of the Future</p>
  <p>
    In traditional astrology, Aquarius is ruled by Saturn, the planet of
    structure, time, and consequence. At first glance, this pairing can seem
    counterintuitive: Saturn is associated with limits and authority, while
    Aquarius is known for rebellion and reform. Yet this domicile reveals the
    deeper logic of Aquarius: change that lasts must be built, not merely
    imagined.
    <br />
    <br />
    Saturn in Aquarius governs systems, laws, and collective frameworks. It
    concerns itself not with personal ambition but with how societies organize,
    distribute responsibility, and sustain progress across generations. This
    placement favors long-term vision, disciplined innovation, and the slow
    restructuring of outdated institutions.
    <br />
    <br />
    Here, Saturn is not the tyrant but the engineer. Aquarius gives Saturn a
    future-facing purpose, while Saturn gives Aquarius the endurance to make
    ideals real. The work of this domicile is learning that true reform requires
    patience, accountability, and the willingness to take responsibility for
    the world you want to change.
  </p>
  <p>
    <Link href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn">
      Saturn Placed in the Aquarius Zodiac →
    </Link>
  </p>
  <p>
    <Link href="/grimoire/astrology/04-transits/07-saturn-transits/11-saturn-in-aquarius-transit">
      Saturn Transiting the Aquarius Zodiac →
    </Link>
  </p>
</article>


          <div className="grimoire-divider" />

          <article className="grimoire-article">
  <p className="grimoire-label">Domicile (Modern)</p>
   <p className="grimoire-section-subtitle">
    <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
  </p>
  <p className="grimoire-callout">The Rebel at Home</p>
  <p>
    When Uranus resides in Aquarius, innovation lives in its natural habitat.
    The planet of shocks, breakthroughs, and sudden change moves through the
    sign of the visionary outsider, amplifying the urge to disrupt what is
    stagnant and liberate what is true. This domicile feels electric:
    future-oriented, experimental, and unwilling to accept inherited limits.
    <br />
    <br />
    In this placement, Uranus’s insights flow freely. Ideas about technology,
    community, and social evolution arrive ahead of their time, often placing
    those influenced by this energy at odds with the present moment. Aquarius
    offers Uranus a collective stage: revolutions, movements, and paradigm
    shifts rather than isolated acts of rebellion.
    <br />
    <br />
    The challenge lies in remembering the human cost of change. Detachment can
    become alienation, and innovation without care can fracture communities.
    This domicile teaches the art of conscious disruption: breaking systems
    open while still honoring the people inside them.
    <br />
    <br />
    When Uranus moves through Aquarius, collective timelines bend. What once
    seemed impossible becomes inevitable, and the future announces itself
    before the world is ready.
  </p>
  <p>
    <Link href="/grimoire/astrology/03-placements/08-uranus-placements/11-aquarius-uranus">
      Uranus Placed in the Aquarius Zodiac →
    </Link>
  </p>
  <p>
    <Link href="/grimoire/astrology/04-transits/08-uranus-transits/11-uranus-in-aquarius-transit">
      Uranus Transiting the Aquarius Zodiac →
    </Link>
  </p>
</article>

<div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Exaltation</p>
             <p className="grimoire-section-subtitle">Beyond Traditional Exaltation</p>
            <p>
              Aquarius has no traditional planetary exaltation in classical
              astrology. Rather than placing one planet on a pedestal here, this
              sign distributes energy across the collective. The focus is less
              on a single exalted force and more on how many different voices,
              minds, and systems can work together to create change.
              <br />
              <br />
              This absence is its own kind of teaching. Aquarius reminds us that
              no one perspective should rule the future. Innovation thrives in
              diversity, and progress is often a group effort, not a solitary
              crown.
            </p>
          </article>

          <div className="grimoire-divider" />

          <article className="grimoire-article">
            <p className="grimoire-label">Detriment</p>
             <p className="grimoire-section-subtitle">
              <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
            </p>
            <p className="grimoire-callout">The Self in the Crowd</p>
            <p>
              The Sun in Aquarius stands opposite its domicile in Leo, trading
              the spotlight of personal expression for the cool distance of the
              cosmic balcony. The planet of identity, ego, and core vitality
              must operate in a sign far more concerned with the group than the
              individual. This can create tension between personal desires and
              collective needs, making it harder to know where “I” ends and “we”
              begins.
              <br />
              <br />
              In detriment, the Sun may feel less straightforward. Recognition
              can come through ideas rather than personality; belonging may be
              found in communities of outsiders rather than in traditional
              roles. The ego is asked to decentralize, to shine not as a lone
              star but as part of a constellation.
              <br />
              <br />
              Yet this discomfort can be deeply evolutionary. The Sun in
              Aquarius learns to root self-worth in contribution, vision, and
              authenticity rather than applause. It teaches us how to stand
              apart from the crowd without abandoning it: to be both radically
              ourselves and radically for others.
              <br />
              <br />
              When honored, this placement becomes a beacon for those who
              don&apos;t fit the mold, proving that there is a place for every
              wild, world-changing idea under the sky.
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

          <article className="grimoire-article">
            <p className="grimoire-label">Fall</p>
             <p className="grimoire-section-subtitle">A Neutral Ground</p>
            <p>
              Aquarius has no traditional planet in fall, giving this sign a
              kind of neutral terrain in that regard. Without a specific
              celestial body weakened here, the work of Aquarius becomes less
              about repairing one particular archetype and more about examining
              the systems themselves: how power, belonging, and progress are
              structured.
              <br />
              <br />
              This absence of fall invites experimentation. Rather than
              inheriting a clear weakness, Aquarius becomes a lab where we can
              question what “weak” and “strong” even mean in the context of
              society, technology, and collective evolution.
            </p>
          </article>
           <div className="grimoire-divider" />
        </section>

          {/* MYTHS */}
<section className="grimoire-section grimoire-text">
  <h2 className="grimoire-subheading">Myth of Aquarius</h2>

  <p className="grimoire-label">
    Ganymede, the Divine Cup-Bearer
  </p>

  <div className="grimoire-image">
    <img
      src="https://ik.imagekit.io/w1ck3d/zodiacs/11-aquarius/17-aquarius-assets/aquarius-myth.jpg"
      alt="Statue of Ganymede with the Eagle of Zeus"
      className="grimoire-img"
    />
    <p className="grimoire-caption-small">
      “Statue of Ganymede with the Eagle of Zeus” (Roman, 2nd century
      CE). British Museum, London.
    </p>
  </div>

  <article className="grimoire-article">
    <p>
      Once a mortal youth of Trojan blood, Ganymede was famed across the
      hills of Phrygia for his beauty, kindness, and gentle service
      tending his father&apos;s flocks. His name reached the ears of Zeus,
      and the king of gods, captivated, transformed into a great eagle
      and swept the boy from the earth to Mount Olympus. There Ganymede
      became the divine cup-bearer, pouring the nectar of gods,
      welcoming each immortal dawn, and dwelling in eternal youth.
    </p>

    <p>
      To honour the union of mortal and divine, Zeus raised Ganymede&apos;s
      image into the stars as the Water-Bearer: the constellation
      Aquarius, his out-spilled vessel pouring the stream of life across
      the night sky. Where Aquarius flows, the thresholds between human
      and heaven, thirst and abundance, service and sacredness blur, and
      we remember that even the lowliest of hearts may be lifted into
      the eternal.
    </p>
  </article>
</section>

        <div className="grimoire-divider" />

        {/* RETROGRADE CHEAT SHEET */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Aquarius Retrogrades Survival Cheat Sheet
          </h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/zodiacs/11-aquarius/17-aquarius-assets/aquarius-stamp.png"
              alt="Aquarius Retrograde Symbol"
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
              <p>
                Disrupted signals, radical ideas, and rethinking how you
                communicate online and in community
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Back up tech, revisit group projects, listen to unconventional
                viewpoints, refine how you share your message
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Assume the internet is always right; start avoidable arguments
                in comment sections or group chats
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Double-check before you post or hit “send,” and ask yourself if
                it contributes to the conversation or just adds noise
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/01-mercury-retrogrades/11-mercury-retrograde-in-aquarius">
                  Mercury Retrograde Through Aquarius →
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
              <p>
                Redefining love, friendship, and the kind of relationships that
                support your future self
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Re-evaluate your communities, reconnect with aligned friends,
                ask what freedom and commitment really mean to you
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Stay in connections that stunt your growth; ghost instead of
                communicating honestly
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Notice who you feel most like yourself around, and who you
                shrink around. Adjust accordingly.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/02-venus-retrogrades/11-venus-retrograde-in-aquarius">
                  Venus Retrograde Through Aquarius →
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
              <p>
                Rethinking activism, rebellion, and how you fight for what you
                believe in
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Rework your strategies for change; direct energy into long-term
                plans instead of sudden eruptions
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Burn bridges for shock value; pick fights just to feel
                stimulated or “right”
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask: “Is this disruption actually helpful, or just loud?” Aim
                for impact, not chaos.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/03-mars-retrogrades/11-mars-retrogrades-in-aquarius">
                  Mars Retrograde Through Aquarius →
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
                Reviewing big visions for the future, collective dreams, and the
                beliefs that shape your ideal society
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Revisit long-term plans, refine your role in community, study
                new models of leadership and collaboration
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Overpromise to groups or causes; attach your worth to how “far
                ahead” you seem
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ground expansive ideas in simple frameworks and shared
                agreements so others can join you.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/04-jupiter-retrogrades/11-jupiter-retrograde-in-aquarius">
                  Jupiter Retrograde Through Aquarius →
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
                Accountability for your role in the collective and the
                structures you help maintain, or dismantle
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine your responsibilities to community, set clean
                boundaries, commit to sustainable forms of activism and support
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Take on every cause alone; hide behind “objectivity” to avoid
                doing the work
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Choose one realm, online, local, or relational, where you will
                consistently show up and do your part.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/05-saturn-retrogrades/11-saturn-retrograde-in-aquarius">
                  Saturn Retrograde Through Aquarius →
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
              <p>
                Internal revolutions, surprising shifts in identity, and quiet
                but powerful upgrades to your worldview
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Follow sparks of curiosity, experiment with new perspectives,
                give yourself space to change your mind
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Blow up your life overnight just because you feel restless; make
                permanent decisions during temporary shock
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Channel the urge for freedom into small, meaningful changes you
                can actually sustain.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/06-uranus-retrogrades/11-uranus-retrograde-in-aquarius">
                  Uranus Retrograde Through Aquarius →
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
                Questioning collective illusions, spiritual trends, and the
                dreams you&apos;ve inherited from society
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Discern which ideals still resonate, detox from glamorized
                narratives, seek truth beneath aesthetic or hype
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Confuse aesthetic rebellion for actual change; stay in
                communities that only look aligned
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Ask regularly: “Is this truly mine, or did I absorb it from the
                feed?”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/07-neptune-retrogrades/11-neptune-retrograde-in-aquarius">
                  Neptune Retrograde Through Aquarius →
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
              <p>
                Deep transformation of power structures, group dynamics, and
                your relationship to influence
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Examine who holds power in your circles, do shadow work around
                control and detachment, participate in collective healing
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Manipulate from the sidelines; detach emotionally to avoid
                facing your own impact
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Remember that transformation is a collaboration: you change the
                system, and it changes you.
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/08-pluto-retrogrades/11-pluto-retrograde-in-aquarius">
                  Pluto Retrograde Through Aquarius →
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
                Healing wounds around belonging, feeling “too different,” or
                carrying outsider status
              </p>
              <p className="grimoire-label-small">Do</p>
              <p>
                Seek spaces where your weirdness is welcomed, integrate
                formative experiences of exclusion, share your story with safe
                people
              </p>
              <p className="grimoire-label-small">Do Not</p>
              <p>
                Over-identify with being the outcast; use detachment to avoid
                vulnerability and intimacy
              </p>
              <p className="grimoire-label-small">Survival Tip</p>
              <p>
                Affirm: “My difference is a gift to the collective, and I am
                worthy of connection exactly as I am.”
              </p>
              <p>
                <Link href="/grimoire/astrology/05-retrogrades/09-chiron-retrogrades/11-chiron-retrograde-in-aquarius">
                  Chiron Retrograde Through Aquarius →
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
             
              <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Placements</h3>

              <Link href="/grimoire/astrology/03-placements/01-sun-placements/11-aquarius-sun">
                Sun in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/02-moon-placements/11-aquarius-moon">
                Moon in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/03-mercury-placements/11-aquarius-mercury">
                Mercury in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/04-venus-placements/11-aquarius-venus">
                Venus in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/05-mars-placements/11-aquarius-mars">
                Mars in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/06-jupiter-placements/11-aquarius-jupiter">
                Jupiter in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/07-saturn-placements/11-aquarius-saturn">
                Saturn in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/08-uranus-placements/11-aquarius-uranus">
                Uranus in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/09-neptune-placements/11-aquarius-neptune">
                Neptune in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/10-pluto-placements/11-aquarius-pluto">
                Pluto in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/11-chiron-placements/11-aquarius-chiron">
                Chiron in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/12-ascendent-placements/11-aquarius-ascendent">
                Ascendent in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/13-descendent-placements/11-aquarius-descendent">
                Descendent in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/14-midheaven-placements/11-aquarius-midheaven">
                Midheaven in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/15-imum-coeli-placements/11-aquarius-imum-coeli">
                Imum Coeli in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/16-lilith-placements/11-aquarius-lilith">
                Lilith in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/17-north-node-placements/11-aquarius-north-node">
                North Node in Aquarius
              </Link>
              <Link href="/grimoire/astrology/03-placements/18-south-node-placements/11-aquarius-south-node">
                South Node in Aquarius
              </Link>
            </div>

            <div className="grimoire-three-column">
              <h3>Transits</h3>

              <Link href="/grimoire/astrology/04-transits/01-sun-transits/11-sun-in-aquarius-transit">
                Sun through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/02-moon-transits/11-moon-in-aquarius-transit">
                Moon through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/03-mercury-transits/11-mercury-in-aquarius-transit">
                Mercury through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/04-venus-transits/11-venus-in-aquarius-transit">
                Venus through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/05-mars-transits/11-mars-in-aquarius-transit">
                Mars through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/06-jupiter-transits/11-jupiter-in-aquarius-transit">
                Jupiter through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/07-saturn-transits/11-saturn-in-aquarius-transit">
                Saturn through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/08-uranus-transits/11-uranus-in-aquarius-transit">
                Uranus through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/09-neptune-transits/11-neptune-in-aquarius-transit">
                Neptune through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/10-pluto-transits/11-pluto-in-aquarius-transit">
                Pluto through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/11-chiron-transits/11-chiron-in-aquarius-transit">
                Chiron through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/12-north-node-transits/11-north-node-in-aquarius-transit">
                North Node through Aquarius
              </Link>
              <Link href="/grimoire/astrology/04-transits/13-south-node-transits/11-south-node-in-aquarius-transit">
                South Node through Aquarius
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