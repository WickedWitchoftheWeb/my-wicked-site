// app/grimoire/08-deities/ouranos-uranus-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ouranos" subtitle="God of Sky">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/uranus/uranus.png"
              alt="Ouranos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The sky does not ask permission.
              <br />
              It expands until truth has room to breathe.
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
    Ouranos is the first vastness — the living canopy of Sky as a primordial
    force. He is not personality-first. He is principle: the infinite above,
    the widening horizon, the pressure of expansion that refuses confinement.
  </p>
  <p>
    His current is cosmic scale. Ouranos governs emergence, potential, and the
    moment reality grows larger than the structures trying to contain it. He is
    the “before” of civilization — the raw, unruled breadth where creation can
    take form.
  </p>
  <p>
    Ouranos teaches altitude. Not superiority — perspective. He lifts you out of
    the small story so you can see the pattern, the lineage, the long arc. His
    power shows you what is possible when your life stops being built from fear
    of space and starts being built from trust in expansion.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/ouranos-god/mythology"
      className="deity-link"
    >
      Explore Ouranos’ Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES */}
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
                  href="/grimoire/02-astrology/02-planets/08-uranus"
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
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/10-silver" className="deity-link">
                  Silver
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/uranium" className="deity-link">
                  Uranium
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/labradorite"
                  className="deity-link"
                >
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/azurite" className="deity-link">
                  Azurite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/amethyst"
                  className="deity-link"
                >
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/quartz" className="deity-link">
                  Clear Quartz
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/vervain" className="deity-link">
                  Vervain
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/wormwood" className="deity-link">
                  Wormwood
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
            Ouranos (often rendered as Uranus) appears in Greek cosmology as the
            personification of Sky — a primordial being born from the earliest
            conditions of creation. He is not simply “a god of the sky.” He is the
            sky itself, the vast above that makes the world feel infinite.
          </p>
          <p>
            With Gaia, Ouranos becomes part of the first great pairing of form and
            space — Earth and Sky — and from their union come powerful lineages,
            including the Titans. His myth carries the tension between origin and
            evolution: what is first is not always what is sustainable.
          </p>
          <p>
            The story of his overthrow by Kronos is not just violence — it is cosmic
            succession. A new order arrives, boundaries are drawn, and the raw
            primordial becomes the foundation beneath structured time.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Ouranos governs expansion, perspective, emergence, open possibility, and
            the sky-as-law: the truth that life is larger than any one structure,
            identity, or era. He strengthens the part of you that can outgrow what
            once felt necessary.
          </p>
          <p>
            His current supports liberation from confinement, breaking inherited
            limitations, visionary thinking, and the courage to evolve beyond what
            your lineage expected. Ouranos is not “rebellion for the sake of it.”
            He is the widening that happens when truth can no longer fit inside a
            smaller life.
          </p>
          <p>
            He also governs cosmic detachment: the ability to see clearly without
            being consumed by emotion. Not numbness — clarity.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Night skies, constellations, high winds, lightning at the horizon, open
            fields, mountaintops, star maps, and the moment before a storm breaks.
            His imagery is space and signal — the message that arrives from above
            the noise.
          </p>
          <p>
            Ouranos speaks through sudden insight, perspective shifts, and the
            feeling of inevitability when growth becomes non-negotiable.
          </p>
        </section>

        {/* OURANOS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Ouranos in Practice</h2>
          <p>
            Work with Ouranos when you need expansion that is real: breaking a ceiling,
            leaving a too-small identity, reclaiming vision, and choosing evolution
            even when it disrupts what is familiar.
          </p>
          <p>
            He responds to honesty and courage. Ouranos does not reward performative
            “change” that keeps you in the same cage. If you call him, be prepared to
            outgrow something — a belief, a role, a pattern, a relationship with your
            own fear.
          </p>
          <p>
            This is perspective work. If you ask for freedom, you will be shown where
            you have been consenting to confinement — and where you have been calling
            comfort “fate.”
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/ouranos-uranus-god/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF OURANOS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Ouranos Has Chosen You
          </h2>
          <p>
            If Ouranos has chosen you, your life starts demanding room. You may feel a
            sudden intolerance for small thinking, inherited limitations, and environments
            that require you to shrink to belong.
          </p>
          <p>
            His presence often arrives as an internal “lift” — a perspective shift that
            makes your old compromises feel impossible to continue. You may find yourself
            drawn to the sky, storms, stargazing, new ideas, radical honesty, or the need
            to restructure your life around what is actually true.
          </p>
          <p>
            Signs can appear through lightning imagery, repeated sky symbolism, sudden
            breakthroughs, unusual opportunities that disrupt the old plan, or the feeling
            that you are being pushed toward a larger version of your path.
          </p>
          <p>
            Most of all, if Ouranos has chosen you, you stop asking for permission to
            become who you are. You begin acting like expansion is your birthright.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Ouranos are often atmospheric and intentional: clean water left
            beneath an open window, a candle lit while speaking a vow of growth, time spent
            stargazing in silence, or a written commitment to outgrowing a limiting pattern.
          </p>
          <p>
            Acts of devotion are lived: choosing the honest path, leaving what is too small,
            telling the truth even when it changes the room, and building a life that can
            hold your vision.
          </p>
          <p>
            Ouranos honors courage that becomes structure. Expansion is not a mood. It is a
            decision you keep making until your world matches it.
          </p>
        </section>

        {/* SKY AS ORIGIN */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Sky as Origin</h2>
          <p>
            Ouranos teaches that origin is not nostalgia. It is foundation. You are allowed
            to honor where you came from without living there forever.
          </p>
          <p>
            The sky is always above you — but it is never the same sky twice. That is his
            lesson: expansion is constant, and stagnation is a refusal to evolve.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Ouranos moves through the Primordial Father, the Vast Above, the Horizon, and
            the Liberator — not as performance, but as the force that makes growth inevitable.
          </p>
          <p>
            In his highest expression, he is expansion with clarity: perspective that frees
            you, vision that matures you, and truth that refuses confinement.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Ouranos’s shadow can appear as detachment that becomes avoidance, change for the
            sake of disruption, or living in ideas while neglecting embodiment. Expansion
            without grounding can become instability.
          </p>
          <p>
            His corrective wisdom is integration. A breakthrough is only sacred if you can
            live it. A vision is only real if you build the structure to hold it.
          </p>
          <p>
            Balance with Ouranos is learning to expand without scattering — to evolve without
            abandoning what is true.
          </p>
        </section>

        {/* OURANOS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Ouranos in the Modern World</h2>
          <p>
            Today, Ouranos appears wherever people outgrow inherited scripts. He is present
            in reinvention, innovation, liberation movements, and the quiet personal revolutions
            that happen when someone stops shrinking to stay safe.
          </p>
          <p>
            His current also challenges false freedom: constant change that avoids intimacy,
            identity built on disruption, and “independence” used to dodge responsibility.
            Ouranos asks for evolution with integrity.
          </p>
          <p>
            When he is present, the ceiling cracks. Not to destroy you — to give you sky.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Ouranos teaches that your life is allowed to become larger than your fears. You
            are allowed to expand past the roles you were handed, past the ceilings you were
            trained to accept, past the version of yourself that survived by staying small.
          </p>
          <p>
            Let perspective be your medicine. Let truth be your altitude. If you feel the
            pressure of growth, do not call it chaos too quickly — sometimes it is simply the
            old structure cracking because you no longer fit inside it.
          </p>
          <p>
            Choose the horizon. Choose the path that requires you to evolve. And when the sky
            opens, don’t rush to fill it with the same old limits. Stand under it. Breathe.
            Then build a life that finally has room.
          </p>
        </section>

        {/* FOOTER LINKS (ORDER LOCKED FOR GODS) */}
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