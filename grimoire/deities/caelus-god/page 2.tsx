// app/grimoire/08-deities/caelus-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Caelus" subtitle="God of the Sky">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/caelus/caelus.png"
              alt="Caelus"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The sky is not empty — it is law made vast.
              <br />
              What holds everything is not force — it is structure.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO (INLINE, NO COMPONENT) */}
        <section className="zodiac-intro">
          <p>
            Across every culture and every age, humanity has given names and faces
            to the forces that shape existence. Goddesses and Gods are not distant
            myths locked in the past — they are living archetypes, expressions of
            power, consciousness, nature, and cosmic law.
          </p>

          <p>
            Within the Grimoire, deities are honored as embodiments of specific
            energies: creation and destruction, love and war, wisdom and chaos,
            death and rebirth. Each carries their own mythology, symbols,
            correspondences, and lessons, yet all emerge from the same universal
            source.
          </p>

          <p>
            Goddesses appear here first, not as lesser counterparts, but as primordial
            forces of creation, transformation, and sovereignty. Gods follow as agents
            of order, motion, and manifestation. Together, they form a divine balance —
            mirrors of the inner and outer worlds we navigate every day.
          </p>

          <p>
            This section is a living archive. As the Grimoire grows, so too will the
            pantheons represented here. Whether you approach these deities through
            devotion, study, magic, or symbolism, you are stepping into a lineage as
            old as humanity itself.
          </p>
        </section>

       {/* CORE ESSENCE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Core Essence</h2>
  <p>
    Caelus is the vault of sky — the expansive principle that holds space
    for everything to exist. He is not weather; he is the container. Not a
    passing mood of the heavens, but the eternal canopy that makes direction,
    horizon, and height possible. Caelus is vastness with structure — the
    quiet authority of what remains above, consistent and enduring.
  </p>
  <p>
    His current teaches perspective. It lifts you out of narrow thinking and
    restores a higher view: what matters, what doesn’t, and what you are
    becoming over time. Caelus is the part of you that can breathe when life
    feels tight — the reminder that the world is bigger than the moment.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/caelus-god/mythology"
      className="deity-link"
    >
      Explore Caelus’ Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES (RIGHT UNDER CORE ESSENCE) */}
<section className="zodiac-note">
  <section className="zodiac-attributes">
    <h2
      className="zodiac-note-subheading"
      style={{ fontSize: "2.2rem", marginBottom: "0.5rem" }}
    >
      Correspondences
    </h2>

    <div className="zodiac-attr">
      <h3 className="zodiac-attr-label">Element</h3>
      <p className="zodiac-attr-value">
        <Link href="/grimoire/11-elements/air" className="deity-link">
          Air
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/07-uranus"
                  className="deity-link"
                >
                  Uranus
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/07-saturday"
                  className="deity-link"
                >
                  Saturday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/07-crown-chakra"
                  className="deity-link"
                >
                  Crown
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/tin" className="deity-link">
                  Tin
                </Link>
              </p>
            </div>

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/celestite"
                  className="deity-link"
                >
                  Celestite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/labradorite"
                  className="deity-link"
                >
                  Labradorite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) + & instead of / */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/juniper" className="deity-link">
                  Juniper
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cypress" className="deity-link">
                  Cypress
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/frankincense"
                  className="deity-link"
                >
                  Frankincense
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/pine" className="deity-link">
                  Pine
                </Link>
              </p>
            </div>
          </section>
        </section>

        {/* MYTHOLOGICAL ORIGINS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Mythological{"\u00A0\u00A0"} Origins
          </h2>
          <p>
            Caelus is the Roman personification of the sky — a primordial god whose
            presence is less “character” and more cosmic principle. He mirrors the
            Greek Ouranos/Uranus current: the sky as origin, the heavens as vast
            container, and the divine canopy under which creation unfolds.
          </p>
          <p>
            His mythology points to the oldest layer of divinity: the first structures
            of existence, the separation of sky and earth, and the establishment of
            cosmic order — not through emotion, but through fundamental law.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Caelus governs vastness, perspective, higher mind, cosmic structure, and the
            “above” principle — the realm of possibility, vision, and the long view. His
            gifts show up as spacious thinking, clearer direction, and the ability to
            stop making temporary moments into permanent meaning.
          </p>
          <p>
            He is potent for vision work: defining what you are building, setting long-term
            goals, and aligning your mind with a horizon larger than your fear.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Caelus is symbolized by the open sky, constellations, the horizon line, vaults,
            domes, birds in flight, and the feeling of altitude. His imagery is spacious and
            clean — a reminder that the mind can rise above the storm without denying it.
          </p>
        </section>

       {/* CAELUS IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Caelus in Practice</h2>
  <p>
    Work with Caelus when you need perspective and elevation: releasing mental
    claustrophobia, widening your field of view, making wise long-term choices, and
    stepping out of cyclical thought. His current supports clarity, vision, and
    alignment with higher direction.
  </p>
  <p>
    Caelus responds to stillness, contemplation, and sincerity. He does not respond
    well to frantic forcing or trying to control outcomes. His power is not urgency;
    it is inevitability — the slow, steady architecture of the sky.
  </p>
  <p>
    If you call Caelus, be willing to see the truth from above. The higher view can
    be humbling — but it is liberating.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/caelus-god/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF CAELUS HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Caelus Has Chosen You
  </h2>
  <p>
    If Caelus has chosen you, urgency begins to dissolve. Situations that once
    felt overwhelming start to reveal their structure. You may feel called to
    step back, observe, and reassess rather than react.
  </p>
  <p>
    His presence often arrives through expanded awareness: moments where you
    suddenly see how events connect over time, or where a long-standing problem
    reframes itself from a higher vantage point.
  </p>
  <p>
    Signs may appear through the sky itself — vast horizons, cloud patterns,
    moments of stillness that feel immense, or a recurring sense of being held
    by something larger than immediate circumstance.
  </p>
  <p>
    Most of all, if Caelus has chosen you, your life begins to slow in a way that
    brings relief. You are invited to release compulsive control and trust the
    architecture of unfolding — to act when aligned, and wait when the view
    is not yet complete.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Caelus are often simple and symbolic: a candle lit at dawn or dusk,
            clean water set under open sky, incense that rises upward, or a written intention
            placed where it can “breathe.” Modern devotion can be just as aligned: meditation,
            journaling for clarity, time spent under the night sky, or a commitment to think
            bigger than your fear.
          </p>
          <p>
            Devotion to Caelus is often lived through perspective: refusing to collapse into
            reaction, choosing the long view, and allowing truth to expand you instead of
            breaking you.
          </p>
        </section>

        {/* CAELUS VS OURANOS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Caelus{"\u00A0"}vs{"\u00A0"}Ouranos
          </h2>
          <p>
            Caelus and Ouranos are related, but not interchangeable. Caelus carries a Roman
            current — the sky as cosmic structure and enduring principle. Ouranos holds the
            Greek mythic texture — the primordial heavens with a more narrative, generational
            role in creation myths.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Caelus as the pure vault of “above”
            — space, horizon, and cosmic order — and Ouranos as the mythic heavens — origin,
            lineage, and the story-layer of sky.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Caelus moves through the Architect, the Horizon-Keeper, the Visionary, and the
            High Mind — not as roles to perform, but as currents of power. The Architect
            establishes structure. The Horizon-Keeper holds long-term direction. The
            Visionary sees beyond the moment. The High Mind restores clarity through
            elevation and perspective.
          </p>
          <p>
            In his highest expression, Caelus is spacious certainty — stability that comes
            from knowing the sky doesn’t panic.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            His shadow can appear as detachment, escapism, living only in ideas, or refusing
            to engage with the human world. When the “higher view” becomes avoidance, the
            current distorts into disconnection.
          </p>
          <p>
            Caelus’s corrective wisdom is simple: rise, then return. Perspective is meant to
            guide action — not replace it. Let the sky expand you, then let that expansion
            inform how you live on earth.
          </p>
        </section>

        {/* CAELUS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Caelus in the Modern World</h2>
          <p>
            Today, Caelus appears whenever someone stops making small moments into life
            sentences. He lives in long-term thinking, wise planning, visionary leadership,
            and the ability to breathe through uncertainty without collapsing into fear.
          </p>
          <p>
            His energy reminds us that life is bigger than one day, one message, one setback,
            or one win. The sky remains — and so can you.
          </p>
        </section>

      {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Caelus teaches that perspective is power. His realm is vast, impartial, and
    unpressured — a reminder that not every decision must be made from inside the
    storm. Sometimes the truest clarity comes from rising above it.
  </p>
  <p>
    He asks you to release the illusion of urgency and look at the long arc of your
    choices. What feels overwhelming up close often resolves itself when viewed
    from a higher vantage.
  </p>
  <p>
    Walk with Caelus when you are ready to loosen your grip on control — to trust
    vision over reaction, patience over panic, and alignment over force. His power
    is not haste. It is inevitability.
  </p>
  <p>
    His blessing arrives as mental spaciousness: the ability to breathe, to see
    options you could not see before, and to choose with calm authority instead of
    fear. Through him, you learn that clarity expands when you stop rushing it.
  </p>
  <p>
    Caelus reminds you that the sky does not hurry — yet it contains everything.
    Lift your gaze. Widen your view. Let perspective restore your sense of direction.
  </p>
</section>

        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/02-gods-landing"
              className="zodiac-footer-link"
            >
              ← Back to Gods
            </Link>
          </p>

          <p>
            <Link href="/grimoire/08-deities" className="zodiac-footer-link">
              ← Back to Deities
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}