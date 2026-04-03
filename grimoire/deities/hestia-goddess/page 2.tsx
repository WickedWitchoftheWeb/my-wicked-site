// app/grimoire/08-deities/hestia-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hestia" subtitle="Goddess of Hearth">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hestia/hestia.png"
              alt="Hestia"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Home is not a place you find.
              <br />
              It is a fire you keep.
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
    Hestia is the living current of hearth, home, inner stillness, and sacred
    steadiness. She is the flame that does not chase attention — it endures.
  </p>
  <p>
    Her power is quiet structure: the rituals that hold a life together, the
    devotion that looks like consistency, and the protection that comes from
    tending what matters daily.
  </p>
  <p>
    Hestia teaches that stability is spiritual. A home is not only walls — it is
    a field you maintain. When the hearth is honored, everything becomes more
    coherent.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hestia-goddess/mythology"
      className="deity-link"
    >
      Explore Hestia’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/fire" className="deity-link">
          Fire
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/01-sun"
                  className="deity-link"
                >
                  Sun
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/01-sunday"
                  className="deity-link"
                >
                  Sunday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/01-root-chakra"
                  className="deity-link"
                >
                  Root
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/04-gold" className="deity-link">
                  Gold
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/02-red" className="deity-link">
                  Red
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/iron" className="deity-link">
                  Iron
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/garnet" className="deity-link">
                  Garnet
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/quartz/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/sunstone"
                  className="deity-link"
                >
                  Sunstone
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/thyme" className="deity-link">
                  Thyme
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
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
            Hestia is one of the oldest and quietest presences in Greek myth — not because
            she lacks power, but because her power is foundational. The hearth was the center
            of the home and the city: the place of offerings, continuity, and protection.
          </p>
          <p>
            She is not a goddess of spectacle. She is the keeper of the fire that makes a life
            livable. In her myths, devotion is demonstrated through tending, not through conquest.
          </p>
          <p>
            Her stories teach that what is sacred is often what is consistent: the flame that stays,
            the vow that holds, and the inner home that does not collapse under pressure.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hestia governs home, hearth, sacred routine, inner peace, protection of space,
            and the steady restoration of the nervous system. She supports the kind of
            stability that makes everything else possible.
          </p>
          <p>
            Her current strengthens boundaries that are quiet but unbreakable: the ability
            to keep your space clean, your energy calm, and your life ordered without becoming
            rigid.
          </p>
          <p>
            With Hestia, the lesson is simple: tend the flame. What you maintain with devotion
            will protect you.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Hearth fires, candles, simple altars, bread, clean water, thresholds, home blessings,
            and the quiet beauty of a space that feels safe. Her imagery is domestic, but never
            small — it is sacred on purpose.
          </p>
          <p>
            Hestia’s symbols point to one truth: peace is not passive. It is cultivated. It is
            protected. It is practiced.
          </p>
        </section>

        {/* HESTIA IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hestia in Practice</h2>
          <p>
            Work with Hestia when you want stability that actually holds: cleansing your home,
            rebuilding routines, calming anxiety through structure, protecting your space, and
            creating a life that feels safe to live inside.
          </p>
          <p>
            She responds to devotion expressed through consistency: tending your environment,
            keeping your word to yourself, simplifying what is chaotic, and returning to the
            basics without resentment.
          </p>
          <p>
            Hestia does not respond well to performative spirituality or frantic seeking. Her
            current is quiet and immediate: make the space clean. Make the intention clear.
            Keep the flame.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hestia-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF HESTIA HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Hestia Has Chosen You
          </h2>
          <p>
            If Hestia has chosen you, you begin to crave peace that is real — not escapism,
            not isolation, but steadiness. Your body starts rejecting chaos as a lifestyle.
          </p>
          <p>
            You may feel pulled to cleanse, simplify, cook, organize, or create small daily
            rituals that make you feel anchored. The mundane becomes sacred again.
          </p>
          <p>
            Signs often appear through hearth symbolism: candles, home themes, sudden concern
            for protection and cleanliness, or an unmistakable inner “enough” when you have been
            living in disorder.
          </p>
          <p>
            Most of all, her presence teaches you to treat your life like a sanctuary — and to
            stop letting anything live in your space that steals your peace.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings for Hestia are simple and sincere: clean water, bread, oil, honey, a candle
            lit with respect, or a quiet moment of gratitude at the center of your home.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your space tended, protecting your peace,
            making your home feel safe, and practicing consistency as a spiritual discipline.
          </p>
          <p>
            Hestia responds to what is real. If you want her protection, build a sanctuary — then
            keep it.
          </p>
        </section>

        {/* HESTIA VS VESTA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hestia vs Vesta</h2>
          <p>
            Hestia and Vesta are related currents, but they carry different cultural textures. Hestia
            holds the Greek hearth as inner home and sacred steadiness. Vesta, in her Roman current,
            often emphasizes holy flame as duty, devotion, and the maintenance of sacred order in
            public life.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Hestia as the sanctuary flame and
            Vesta as the devotional flame of responsibility and consecration.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Hestia moves through the Hearth-Keeper, the Sanctuary Maker, the Ritual Weaver, and the
            Protector of Peace — not as roles to perform, but as currents of steady devotion that
            restore the self through consistency.
          </p>
          <p>
            In her highest expression, she is peace with backbone: simplicity that protects, routine
            that stabilizes, and devotion that makes life safe to grow inside.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Hestia’s shadow can appear when stability becomes stagnation — when safety becomes avoidance,
            or routine becomes rigidity that blocks growth.
          </p>
          <p>
            Her corrective wisdom is clean: peace is meant to support life, not limit it. Keep the hearth
            lit, but keep the doors honest.
          </p>
        </section>

        {/* HESTIA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hestia in the Modern World</h2>
          <p>
            Today, Hestia’s energy shows up whenever someone stops glamorizing chaos and starts building
            a life that feels safe. She appears in routines, home blessings, nervous system repair, and
            the quiet revolution of consistency.
          </p>
          <p>
            She reminds you that peace is not a mood. It is a practice. And practice becomes protection.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hestia teaches that power does not always announce itself. Some of the most enduring
    forces are quiet, steady, and unwavering — the kind that hold everything together
    without ever demanding recognition.
  </p>
  <p>
    She asks you to look at what you tend daily: your body, your home, your inner fire,
    your promises to yourself. What you consistently care for becomes sacred, whether
    anyone else sees it or not.
  </p>
  <p>
    Walk with Hestia when you are ready to build stability from the inside out — to stop
    outsourcing safety, to stop neglecting the foundations of your life, and to honor
    stillness as strength.
  </p>
  <p>
    Her blessing arrives as peace that does not depend on circumstances: a grounded
    nervous system, a sense of belonging within yourself, and the quiet confidence that
    comes from knowing your center will not collapse.
  </p>
  <p>
    Hestia reminds you that devotion does not have to be dramatic to be powerful. Tend
    the flame. Keep it clean. Let your life become a sanctuary — not by force, but by
    faithful care.
  </p>
</section>

        {/* FOOTER LINKS (ORDER LOCKED) */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/01-goddesses-landing"
              className="zodiac-footer-link"
            >
              ← Back to Goddesses
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