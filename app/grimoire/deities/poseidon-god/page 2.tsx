// app/grimoire/08-deities/poseidon-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Poseidon" subtitle="God of Sea">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/poseidon/poseidon.png"
              alt="Poseidon"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Emotion is not a weakness.
              <br />
              It is a tide with a mind.
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
    Poseidon is the living force of depth — the oceanic current that cannot be
    contained by surface rules. He is power that moves through feeling, instinct,
    and the raw truth of what lives below your composure.
  </p>
  <p>
    He governs tides both literal and internal: emotion, desire, rage, grief,
    and the deep pressure that builds when you keep pretending you’re unaffected.
    Poseidon teaches that what is unacknowledged does not disappear — it swells.
  </p>
  <p>
    His power is not fragile. It is elemental. When directed, it becomes mastery.
    When denied, it becomes a storm. Poseidon asks you to learn the difference
    between drowning in emotion and commanding it.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/poseidon-god/mythology"
      className="deity-link"
    >
      Explore Poseidon’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/water" className="deity-link">
          Water
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/09-neptune"
                  className="deity-link"
                >
                  Neptune
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/02-monday"
                  className="deity-link"
                >
                  Monday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/02-sacral-chakra"
                  className="deity-link"
                >
                  Sacral
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
                <Link href="/grimoire/15-metals/silver" className="deity-link">
                  Silver
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/aquamarine"
                  className="deity-link"
                >
                  Aquamarine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/lapis-lazuli"
                  className="deity-link"
                >
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/amazonite"
                  className="deity-link"
                >
                  Amazonite
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/sea-salt" className="deity-link">
                  Sea Salt
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mint" className="deity-link">
                  Mint
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
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
            Poseidon rises in Greek myth as the ruler of the sea — brother to Zeus and
            Hades, and one of the great sovereign powers of the cosmos. His realm is
            not only water, but the unpredictable force that water represents: depth,
            storms, and the authority of nature that does not ask permission.
          </p>
          <p>
            He is also linked to earthquakes, a reminder that Poseidon’s power is not
            limited to the ocean. It is tectonic. It is pressure beneath the surface.
            When he moves, the world shifts.
          </p>
          <p>
            In myth, Poseidon’s temperament can be turbulent, but the lesson is clear:
            you cannot “logic” the sea into calm. You learn respect. You learn navigation.
            You learn reverence for depth.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Poseidon governs oceans, storms, tides, emotional power, subconscious truth,
            intuition, and the deep body instincts that warn you before your mind catches
            up. He also governs earthquakes — the shake that breaks false stability.
          </p>
          <p>
            His current supports emotional healing that doesn’t minimize the wound, dream
            work, intuition training, cleansing and uncrossing through water, and reclaiming
            authority after being taught to fear your own intensity.
          </p>
          <p>
            Poseidon also teaches boundaries through depth. Not everyone gets access to
            your inner ocean. Some people only deserve the shore.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            The trident, crashing waves, seafoam, shells, deep blue water, storms over open
            ocean, and the sound of tides that cannot be negotiated with. His imagery is
            sovereignty in motion — power that belongs to itself.
          </p>
          <p>
            Poseidon speaks through water omens, strong emotional surges that reveal truth,
            dreams of the sea, and moments where your intuition says “no” long before your
            mouth does.
          </p>
        </section>

        {/* POSEIDON IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Poseidon in Practice</h2>
          <p>
            Work with Poseidon when you need emotional mastery: releasing repression, healing
            grief, regulating intensity without numbing it, strengthening intuition, and
            cleansing what you’ve been carrying that was never yours to hold.
          </p>
          <p>
            He responds to reverence, honesty, and consistency. Poseidon does not reward
            emotional avoidance disguised as “being strong.” He answers when you stop
            pretending you don’t feel what you feel — and start learning how to steer it.
          </p>
          <p>
            This is water work with teeth. If you ask Poseidon for calm, be prepared to
            confront what has been churning under the surface. Calm is not a mood. It is
            stability built through truth.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/poseidon-god/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF POSEIDON HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Poseidon Has Chosen You
          </h2>
          <p>
            If Poseidon has chosen you, your emotions stop being background noise and
            start becoming messages. You may experience stronger intuition, vivid dreams,
            and moments where your body reacts before your mind can justify why.
          </p>
          <p>
            His presence often arrives as an invitation to depth: you may feel pulled toward
            water, ocean imagery, storms, shells, tridents, or repeated themes of tides and
            drowning — not as fear, but as symbolism urging you to learn navigation. You may
            feel called to cleanse, to cry, to release, to stop holding everything inside.
          </p>
          <p>
            Signs can appear through water synchronicities, sudden rain, recurring ocean
            dreams, repeated encounters with sea symbolism, or situations that force you to
            confront emotional truth instead of performing composure.
          </p>
          <p>
            Most of all, if Poseidon has chosen you, your life begins teaching you that
            intensity is not the enemy. Unconscious intensity is. When you honor your tides,
            you become powerful. When you deny them, they become storms.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Poseidon can be simple and ocean-honoring: clean water in a bowl,
            sea salt, a candle set near water, shells offered with gratitude, or a prayer
            spoken beside a bath as you release what is heavy.
          </p>
          <p>
            Acts of devotion can be non-material: emotional honesty, honoring your intuition,
            cleansing your energy regularly, and learning to express what you feel without
            making it everyone’s responsibility to carry.
          </p>
          <p>
            Poseidon honors respect. If you want his current in your life, treat your emotions
            like a sacred sea — not something to fear, not something to weaponize, but
            something to know.
          </p>
        </section>

        {/* THE TRIDENT OF COMMAND */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Trident of Command</h2>
          <p>
            Poseidon’s trident is not just a weapon. It is a symbol of command over tides.
            It represents the ability to direct your power: to pierce illusion, to set
            boundaries, and to move through life without drowning in what you feel.
          </p>
          <p>
            The trident teaches a simple rule: depth is sacred, but it still requires
            discipline.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Poseidon moves through the Sea King, the Storm-Bringer, the Earth-Shaker, and
            the Keeper of Depth — not as identities, but as currents of emotional authority
            and elemental command.
          </p>
          <p>
            In his highest expression, he is intensity with mastery: feeling deeply without
            drowning, protecting your inner ocean, and allowing truth to move through you
            cleanly.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Poseidon’s shadow can appear as emotional volatility, power struggles, possessiveness,
            or using intensity to control others. When depth becomes a weapon, it stops being
            sacred and starts being manipulation.
          </p>
          <p>
            His corrective wisdom is containment. Not suppression — containment. The sea has a
            shore. The tide has a rhythm. Your power becomes trustworthy when it is directed.
          </p>
          <p>
            Balance with Poseidon is learning when to release and when to hold — when to let the
            wave move and when to anchor.
          </p>
        </section>

        {/* POSEIDON IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Poseidon in the Modern World</h2>
          <p>
            Today, Poseidon appears wherever people reclaim emotional truth without shame. He
            lives in the person who stops numbing, stops pretending, and learns to feel without
            collapsing. He is present in deep healing, intuitive development, and the courage to
            admit what your heart already knows.
          </p>
          <p>
            His current also lives in boundaries around intimacy — the choice to let some people
            see only the surface, and to reserve your depths for what is safe and real.
          </p>
          <p>
            Poseidon reminds you: emotion is power. The question is whether you will command it —
            or let it command you.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Poseidon teaches that depth is not a problem to solve. It is a power to respect. You
            were not made to be calm by force, quiet by fear, or “easy” by suppression. You were
            made to feel — and to learn how to steer what you feel.
          </p>
          <p>
            Let your emotions become information, not identity. Let your intuition become a compass,
            not a panic. If a wave rises, ask what it is carrying. If a storm returns, ask what you
            have been avoiding. The sea always tells the truth, even when you wish it wouldn’t.
          </p>
          <p>
            Choose mastery over denial. Choose honesty over performance. Choose a life where your
            depth is held with reverence — by you first. Poseidon is not here to soften you. He is
            here to make your power trustworthy, your boundaries unshakable, and your inner ocean
            something you can live inside without drowning.
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