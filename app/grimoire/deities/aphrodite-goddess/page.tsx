// app/grimoire/deities/aphrodite-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Aphrodite" subtitle="Goddess of Love">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/aphrodite/aphrodite.png"
              alt="Aphrodite"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Beauty is not decoration — it is a force.
              <br />
              Desire is not weakness — it is creation in motion.
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
            Goddesses appear here first, not as lesser counterparts, but as
            primordial forces of creation, transformation, and sovereignty. Gods
            follow as agents of order, motion, and manifestation. Together, they
            form a divine balance — mirrors of the inner and outer worlds we
            navigate every day.
          </p>

          <p>
            This section is a living archive. As the Grimoire grows, so too will
            the pantheons represented here. Whether you approach these deities
            through devotion, study, magic, or symbolism, you are stepping into a
            lineage as old as humanity itself.
          </p>
        </section>

  {/* CORE ESSENCE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Core Essence</h2>
  <p>
    Aphrodite is the living current of attraction — the pulse of beauty,
    pleasure, and creative power that draws life toward life. She is not
    a shallow symbol of romance. She is magnetism itself: the force that
    makes hearts lean closer, art bloom from longing, and the body
    remember it was never meant to be at war with desire.
  </p>

  <p>
    <Link
      href="/grimoire/deities/aphrodite-goddess/mythology"
      className="deity-link"
    >
      Explore Aphrodite’s Mythic Origins →
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
        <Link href="/grimoire/elements/water" className="deity-link">
          Water
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/astrology/02-planets/03-venus"
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
                  href="/grimoire/timing/days-of-the-week/06-friday"
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
                  href="/grimoire/chakras/04-heart-chakra"
                  className="deity-link"
                >
                  Heart
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/colors/pink" className="deity-link">
                  Pink
                </Link>
                ,{" "}
                <Link href="/grimoire/colors/white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/colors/red" className="deity-link">
                  Red
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/metals/copper" className="deity-link">
                  Copper
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/crystals-stones/rose-quartz"
                  className="deity-link"
                >
                  Rose Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/crystals-stones/pearl"
                  className="deity-link"
                >
                  Pearl
                </Link>
              </p>
            </div>

        <div className="zodiac-attr">
  <h3 className="zodiac-attr-label">Plants & Herbs</h3>
  <p className="zodiac-attr-value">
    <Link href="/grimoire/herbs/rose" className="deity-link">
      Rose
    </Link>
    ,{" "}
    <Link href="/grimoire/herbs/myrtle" className="deity-link">
      Myrtle
    </Link>
    ,{" "}
    <Link href="/grimoire/herbs/jasmine" className="deity-link">
      Jasmine
    </Link>
  </p>
</div>

    
        
          </section>
        </section>

        {/* MYTHOLOGICAL ORIGINS */}
        <section className="zodiac-note">
          {/* NOTE: keeping your exact \u00A0 placement */}
          <h2 className="zodiac-note-subheading">
            Mythological{"\u00A0\u00A0"}  Origins
          </h2>
          <p>
            Aphrodite’s origins are carried on sea-foam and salt-wind — a goddess
            who rises from the ocean’s edge as beauty made visible. Her myths
            place her close to the shoreline, the shell, the wave, the pearl:
            symbols of emergence, allure, and the mysterious way creation forms
            from the depths.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Aphrodite governs love and desire, beauty and pleasure, attraction
            and magnetism, fertility and creative life-force. Her gifts often
            arrive as increased confidence, softened resistance, and the ability
            to receive what you once believed you had to earn.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Her symbols often include the sea, shells, mirrors, roses, and doves
            — imagery that speaks to reflection, emergence, devotion, and the
            quiet authority of beauty.
          </p>
        </section>

{/* APHRODITE IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Aphrodite in Practice</h2>
  <p>
    Work with Aphrodite when you want to restore attraction as a natural
    state: self-love, confidence, creative ignition, reconciliation with
    pleasure, and relationship harmony. Her current supports refinement
    without self-erasure — the kind of beauty that comes from alignment,
    not performance.
  </p>
  <p>
    She responds to sincerity, reverence, and embodied intention. She
    does not respond well to desperation, obsession, or coercion. If
    your work is rooted in control, her current becomes slippery —
    because Aphrodite is resonance, not force.
  </p>
  <p>
    Energetic boundaries matter here. Approach her with a clear “why,” a
    clear “yes,” and a clear “no.” Attraction work is sacred — it should
    never override another person’s will, and it should never require
    you to abandon your own dignity.
  </p>
  <p>
    <Link
      href="/grimoire/deities/aphrodite-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>
{/* HOW TO KNOW IF APHRODITE HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Aphrodite Has Chosen You
  </h2>
  <p>
    If Aphrodite has chosen you, it rarely begins with romance. It begins
    with awareness — a sudden sensitivity to beauty, harmony, and
    imbalance. You may find yourself unable to tolerate environments,
    relationships, or habits that dull your sense of self-worth.
  </p>
  <p>
    Her presence often awakens through the body: a renewed relationship
    with pleasure, creativity, adornment, or self-expression — not as
    vanity, but as reverence. You may feel called to care for yourself
    differently, to treat your body and emotions as something sacred
    rather than something to manage or fix.
  </p>
  <p>
    Synchronicities may appear through mirrors, water, roses, shells,
    art, music, or moments of unexpected attraction — not necessarily
    to another person, but to life itself. Desire becomes information,
    not hunger.
  </p>
  <p>
    Most of all, if Aphrodite has chosen you, your life begins to ask a
    single question again and again: “Do you value yourself?” Anything
    that requires you to diminish your worth, perform for love, or beg
    for validation will start to feel intolerable.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings often include roses, sweet waters, and symbols
            of beauty and abundance. Modern offerings can be just as powerful: a
            bowl of clean water set with intention, fresh flowers, a candle lit
            in gratitude, or art made as devotion rather than performance.
          </p>
          <p>
            Acts of devotion can be non-material: speaking kindly to yourself,
            treating your body like a sanctuary, creating beauty in your space,
            and choosing pleasure that restores you instead of numbing you.
            Aphrodite doesn’t demand perfection — she asks for reverence.
          </p>
        </section>

        {/* APHRODITE VS VENUS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Aphrodite vs Venus</h2>
          <p>
            Aphrodite and Venus are related, but not interchangeable. Aphrodite
            carries a distinctly Greek mythic texture — sea-born, raw, ecstatic,
            and intimate with desire as creative force. Venus, in her Roman
            current, often emphasizes social harmony, refinement, and the way
            love operates within culture and structure.
          </p>
          <p>
            If you work with both, let them remain distinct. Treat Aphrodite as
            the oceanic origin of attraction and Venus as the cultivated
            expression of it. One is emergence; the other is form.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          {/* NOTE: keeping your exact \u00A0 placement */}
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"}  Expression
          </h2>
          <p>
            Aphrodite moves through the Lover, the Creator, the Muse, and the
            Temptress — not as roles to perform, but as currents of power. The
            Lover brings connection and intimacy. The Creator brings life-force
            into form. The Muse opens the channel of inspiration. The Temptress
            teaches magnetism and choice.
          </p>
          <p>
            In her highest expression, Aphrodite is sovereignty in softness —
            the ability to attract, receive, and create without diminishing
            yourself.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as obsession, vanity, manipulation, or
            imbalance of desire — when attraction becomes a hunger that tries to
            consume rather than connect. When love becomes validation, beauty
            becomes armor, and pleasure becomes escape, the current distorts.
          </p>
          <p>
            Aphrodite’s corrective wisdom is simple and sharp: return to worth.
            Desire is sacred information, not a leash. Beauty is a force, not a
            bargain. Love is alignment, not pursuit.
          </p>
        </section>

        {/* APHRODITE IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Aphrodite in the Modern World</h2>
          <p>
            Today, Aphrodite’s energy is seen in confidence rooted in truth,
            magnetism that doesn’t beg, and embodiment without shame. She
            appears wherever someone stops performing value and starts living
            it. She reminds us that beauty can be an act of power — and that
            pleasure can be a form of healing when it restores your spirit
            instead of distracting it.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Aphrodite teaches that attraction is not something you chase — it is something
    you embody. Love, beauty, and pleasure move toward coherence naturally when you
    stop performing worth and start living it.
  </p>
  <p>
    She reminds you that desire is sacred information. What you are drawn to reveals
    what wants to come alive through you. When honored with integrity, longing
    becomes a creative force instead of a wound.
  </p>
  <p>
    Walking with Aphrodite asks you to soften without collapsing, to receive without
    bargaining, and to let pleasure restore rather than distract. Beauty is not a
    mask — it is alignment made visible.
  </p>
  <p>
    Her blessing arrives as resonance: confidence that does not beg, magnetism that
    does not manipulate, and intimacy that honors dignity on both sides. With her,
    attraction becomes truth in motion.
  </p>
  <p>
    Remember this teaching: you do not attract by effort. You attract by coherence.
    Treat your desire as wisdom. Treat your pleasure as sacred. And let love meet you
    where you already are.
  </p>
</section>

        {/* FOOTER LINKS */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/deities/01-goddesses-landing"
              className="zodiac-footer-link"
            >
              ← Back to Goddesses
            </Link>
          </p>

          <p>
            <Link href="/grimoire/deities" className="zodiac-footer-link">
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