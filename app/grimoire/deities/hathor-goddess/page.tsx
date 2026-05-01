// app/grimoire/08-deities/hathor-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hathor" subtitle="Goddess of Joy">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hathor/hathor.png"
              alt="Hathor"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Joy is not indulgence.
              <br />
              It is alignment made visible.
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
    Hathor is the living current of joy, devotion, beauty, music, and the
    sweetness that restores the spirit. She is not softness as weakness —
    she is nourishment as power.
  </p>
  <p>
    She teaches that pleasure can be sacred, that celebration can be cleansing,
    and that love is not only romance — it is the force that draws life back
    into harmony when it has hardened into survival.
  </p>
  <p>
    Hathor’s energy is the reminder that the heart is not an accessory. It is a
    compass. When it is honored, life becomes more coherent. When it is ignored,
    everything becomes heavy.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hathor-goddess/mythology"
      className="deity-link"
    >
      Explore Hathor’s Mythic Origins →
    </Link>
  </p>
</section>

{/* CORRESPONDENCES (ALL LINKED) */}
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
                  href="/grimoire/02-astrology/02-planets/04-venus"
                  className="deity-link"
                >
                  Venus
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/06-friday"
                  className="deity-link"
                >
                  Friday
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Chakra</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/03-chakras/04-heart-chakra"
                  className="deity-link"
                >
                  Heart
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/04-gold" className="deity-link">
                  Gold
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/06-green" className="deity-link">
                  Green
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/gold" className="deity-link">
                  Gold
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/quartz" className="deity-link">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/carnelian"
                  className="deity-link"
                >
                  Carnelian
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/malachite"
                  className="deity-link"
                >
                  Malachite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/lapis-lazuli"
                  className="deity-link"
                >
                  Lapis Lazuli
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/lotus" className="deity-link">
                  Lotus
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/papyrus" className="deity-link">
                  Papyrus
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
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
            Hathor’s myths carry the texture of ancient Egypt: temple music, sacred
            devotion, the radiance of beauty, and the power of emotional restoration.
            She appears as a goddess of love and joy, but also as a force that steadies
            the heart of the world.
          </p>
          <p>
            In her imagery, she is often crowned with horns and the sun disk — a symbol
            of sacred femininity, celestial blessing, and the ability to hold both
            tenderness and authority without contradiction.
          </p>
          <p>
            Her stories teach that sweetness is not denial. It is medicine — a way the
            soul returns to itself after fear, grief, and hardened survival.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hathor governs joy, devotion, beauty, music, pleasure, love, and the
            restoration of the heart. She supports healing that happens through softness
            without fragility — the kind of healing that makes a person more sovereign,
            not more dependent.
          </p>
          <p>
            Her current strengthens receptivity. Not chasing. Not bargaining. Receiving
            what aligns when you stop treating yourself like you must earn tenderness.
          </p>
          <p>
            She also carries the power of rebalancing after intensity. When the nervous
            system has been trained to brace, Hathor teaches the body how to exhale.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Music, dance, temples, mirrors, offerings made with care, sacred adornment,
            and the iconography of horns and the sun disk. Her imagery speaks to devotion
            that is beautiful because it is sincere.
          </p>
          <p>
            Her symbols often point to a single truth: joy is a spiritual technology.
            It changes the field. It softens resistance. It reopens the channel of love.
          </p>
        </section>

        {/* HATHOR IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hathor in Practice</h2>
          <p>
            Work with Hathor when you want to restore joy without numbing: rebuilding
            self-worth, healing emotional hardness, welcoming love that does not cost
            you your dignity, and returning to pleasure as a sacred, stabilizing force.
          </p>
          <p>
            She is powerful for devotion work, glamour and attraction that is rooted in
            self-respect, creative expression, music as cleansing, and reclaiming the
            heart after grief or betrayal.
          </p>
          <p>
            Hathor responds to sincerity, gratitude, and steady care. She does not
            respond well to desperation, frantic chasing, or trying to use beauty as a
            weapon. Her current is alignment, not manipulation.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/hathor-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF HATHOR HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Hathor Has Chosen You
          </h2>
          <p>
            If Hathor has chosen you, your spirit begins to refuse deprivation. You may
            find yourself unable to tolerate relationships, environments, or routines that
            keep your heart closed. What once felt normal starts to feel heavy.
          </p>
          <p>
            Her presence often awakens through beauty and devotion: music that moves you,
            creative urges, a desire to care for yourself with tenderness, and moments
            where you feel pulled toward softness that is strong and clean.
          </p>
          <p>
            Signs may appear through synchronicities tied to love, joy, gold, sacred
            adornment, mirrors, temple imagery, or sudden emotional relief that feels like
            being returned to yourself.
          </p>
          <p>
            Most of all, if Hathor has chosen you, your life begins to teach receptivity.
            You stop forcing. You stop chasing. You start receiving what matches your worth.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings can be simple and beautiful: clean water, honey, milk,
            bread, fruit, flowers, incense, or devotional music. The power is not in
            extravagance — it is in sincerity.
          </p>
          <p>
            Acts of devotion can be non-material: creating beauty in your space, caring for
            your body without punishment, singing or dancing as prayer, and choosing joy as
            discipline rather than escape.
          </p>
          <p>
            Hathor does not demand perfection. She responds to reverence — the choice to
            treat love and pleasure as sacred, not as something you have to bargain for.
          </p>
        </section>

        {/* HATHOR VS SEKHMET */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hathor vs Sekhmet</h2>
          <p>
            Hathor’s current is restoration through sweetness and devotion. Sekhmet’s current
            is restoration through heat and correction. They are not the same energy, and
            they should not be treated as interchangeable.
          </p>
          <p>
            If Hathor teaches the heart to open, Sekhmet teaches the heart to stop tolerating
            what desecrates it. One is medicine through tenderness. One is medicine through
            fire. Both return the soul to truth.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Hathor moves through the Healer of the Heart, the Devotional Muse, the Joy-Bringer,
            and the Sovereign Receiver — not as roles to perform, but as currents that restore
            worth and coherence.
          </p>
          <p>
            In her highest expression, she is joy with integrity: pleasure that strengthens,
            love that does not cost you yourself, and beauty that is reverence rather than
            performance.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Hathor’s shadow can appear when sweetness becomes avoidance — when pleasure becomes
            escape, when beauty becomes armor, or when love becomes bargaining.
          </p>
          <p>
            Her corrective wisdom is simple: joy must be clean. If it costs your dignity,
            it is not devotion. If it requires self-abandonment, it is not love.
          </p>
        </section>

        {/* HATHOR IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hathor in the Modern World</h2>
          <p>
            Today, Hathor’s energy is seen wherever someone stops punishing themselves for
            having a heart. She appears when a person returns to music, creativity, softness,
            and self-care as sacred discipline.
          </p>
          <p>
            She reminds you that joy is not something you earn after suffering. It is part of
            the path. It is a stabilizing force that makes you harder to break.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hathor teaches that joy is not an afterthought — it is a stabilizing force. When life
    hardens into survival, she arrives to remind the heart how to soften without breaking
    and how to open without losing discernment.
  </p>
  <p>
    She asks you to examine where you have treated pleasure as something to earn, delay,
    or apologize for. Joy that restores is not indulgence. It is nourishment that allows
    the spirit to remain whole.
  </p>
  <p>
    Walk with Hathor when you are ready to receive without bargaining — to let love arrive
    without performance, to let beauty be devotional rather than transactional, and to
    allow sweetness to be a form of strength.
  </p>
  <p>
    Her blessing arrives as emotional coherence: the return of music to the body, laughter
    to the breath, and reverence to daily life. Through her, you learn that care is power
    when it is chosen consciously.
  </p>
  <p>
    Hathor reminds you that joy is not a distraction from the path. It is part of the path.
    Tend it with intention, honor it without guilt, and let it bring your life back into
    harmony.
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