// app/grimoire/08-deities/venus-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Venus" subtitle="Goddess of Love">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/venus/venus.png"
              alt="Venus"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Love is not only a feeling.
              <br />
              It is a standard you live by.
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
    Venus is the living current of love made livable — attraction refined into
    harmony, beauty shaped into culture, desire given form through choice. Where
    raw longing can feel like a wave, Venus is the hand that builds a home beside
    it. She is not only passion. She is coherence.
  </p>
  <p>
    Her power is social magic: the way relationships, agreements, and values create
    stability or collapse. Venus teaches that love is not proved by intensity. It
    is proved by consistency — by how you treat yourself, how you treat others, and
    what you are willing to protect.
  </p>
  <p>
    Venus is also worth. Not the kind you perform, but the kind you embody. She
    brings the lesson that beauty is not decoration — it is resonance, and resonance
    requires alignment. If your life is misaligned, Venus doesn’t punish you. She
    exposes the imbalance until you choose better.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/venus-goddess/mythology"
      className="deity-link"
    >
      Explore Venus’ Mythic Origins →
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
                <Link href="/grimoire/05-colors/06-green" className="deity-link">
                  Green
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/04-gold" className="deity-link">
                  Gold
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/copper" className="deity-link">
                  Copper
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/quartz/rose-quartz"
                  className="deity-link"
                >
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/pearl" className="deity-link">
                  Pearl
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/emerald"
                  className="deity-link"
                >
                  Emerald
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/jade"
                  className="deity-link"
                >
                  Jade
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/rose" className="deity-link">
                  Rose
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/vanilla" className="deity-link">
                  Vanilla
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
            Venus rises through Rome not only as a goddess of love, but as a cultural
            force — beauty that shapes values, attraction that shapes alliances, and
            harmony that keeps a society from fracturing under its own desires. Her
            mythology carries a distinctly Roman emphasis: love as something that exists
            inside structure, inside duty, inside civilization.
          </p>
          <p>
            She is honored through titles that reveal her range — not just the tender
            aspects of affection, but the power of lineage, prosperity, and public life.
            Venus is the current of refinement: the ability to create order out of longing
            without killing longing in the process.
          </p>
          <p>
            Where some love goddesses are portrayed as wild emergence, Venus is portrayed
            as cultivated presence. She is the art of relationship as architecture: what
            holds, what nourishes, what endures.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Venus governs love, pleasure, beauty, attraction, partnership, social harmony,
            diplomacy, and the values that determine what you choose — and what you refuse.
            She strengthens self-worth that can be lived, not merely affirmed.
          </p>
          <p>
            Her current supports reconciliation, relationship repair when it is truly aligned,
            magnetism without manipulation, and the kind of confidence that makes people treat
            you differently because you treat yourself differently.
          </p>
          <p>
            Venus also governs refinement: improving your environment, your standards, and your
            relationships so your life becomes a match for the love you claim you want.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Gardens, roses, doves, mirrors, jewelry, graceful architecture, festivals of
            beauty, and the image of love as a stabilizing force rather than a consuming one.
            Venus’s sacred imagery speaks in harmony: what fits, what flatters, what belongs.
          </p>
          <p>
            She speaks through art, through the body’s “yes,” through the subtle discomfort that
            appears when you accept less than you deserve, and through the quiet return of desire
            when you stop living in survival mode.
          </p>
        </section>

        {/* VENUS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Venus in Practice</h2>
          <p>
            Work with Venus when you need love to become stable: strengthening self-worth,
            restoring heart-coherence, improving relationship standards, attracting aligned
            partnership, and bringing harmony to your home, your image, and your daily life.
          </p>
          <p>
            Venus responds to sincerity and consistency. She does not respond well to obsession,
            coercion, or trying to “win” love through performance. Her current becomes strongest
            when you stop chasing and start aligning.
          </p>
          <p>
            This is refinement work. If you ask Venus for attraction, she may first remove what
            is unattractive in your energy: self-abandonment, over-explaining, tolerating crumbs,
            and calling it devotion.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/venus-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF VENUS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Venus Has Chosen You</h2>
          <p>
            If Venus has chosen you, your relationship to worth starts changing first. You may
            feel a sudden discomfort with environments that drain you, relationships that require
            you to beg, or habits that keep you living beneath your own standards.
          </p>
          <p>
            Her presence often arrives as refinement: you want your space cleaner, your energy
            clearer, your boundaries firmer, your heart calmer. You may feel called to restore
            beauty to your life — not for approval, but because your spirit is tired of living in
            disharmony.
          </p>
          <p>
            Signs can appear through the planet Venus, repeated themes of gardens and roses, doves,
            mirrors, unexpected compliments that land like confirmation, or sudden clarity about
            what you will no longer tolerate in love.
          </p>
          <p>
            Most of all, if Venus has chosen you, your life begins rewarding alignment. When you
            choose what matches your worth, love feels cleaner. When you compromise your standards,
            things feel heavy fast — like your heart is refusing to sign the same contract again.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Venus can be elegant and simple: clean water, fresh flowers, a candle lit
            in gratitude, a small act of beautifying your space, or a written vow to treat yourself
            with the same respect you ask for from others.
          </p>
          <p>
            Acts of devotion are lived: keeping your standards, speaking gently without shrinking,
            choosing reciprocity, and making your life a place where love can actually stay.
          </p>
          <p>
            Venus honors coherence. If you want her blessing, be the person who stops asking for
            love while continuously choosing what contradicts it.
          </p>
        </section>

        {/* VENUS VS APHRODITE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Venus vs Aphrodite</h2>
          <p>
            Venus and Aphrodite are related, but not interchangeable. Aphrodite often carries the
            Greek current of desire as raw creative emergence — intimate, ecstatic, and close to the
            untamed pulse of attraction.
          </p>
          <p>
            Venus, in her Roman current, emphasizes love inside structure: harmony, refinement, values,
            partnership as practice, and the way beauty and attraction operate within culture and society.
            Venus is not less passionate — she is more deliberate.
          </p>
          <p>
            If you work with both, let them remain distinct. Treat Aphrodite as the surge of longing and
            Venus as the standard that decides what that longing is allowed to build.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Venus moves through the Lover, the Peacemaker, the Patron, and the Harmonizer — currents that
            teach you how to create connection without self-erasure. She restores the heart, but she also
            strengthens taste: the ability to choose what is worthy and release what is not.
          </p>
          <p>
            In her highest expression, Venus is love with standards: tenderness that does not tolerate
            disrespect, beauty that does not beg, and devotion that is built on reciprocity.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Venus’s shadow can appear as people-pleasing, vanity, conflict avoidance, or staying in
            misaligned relationships for the sake of appearances. When harmony becomes a mask, love becomes
            negotiation, and beauty becomes performance, the current distorts.
          </p>
          <p>
            Her corrective wisdom is simple: alignment. Real harmony does not require self-betrayal. Real love
            does not require you to shrink. Venus teaches you to choose what matches your worth, even when your
            nervous system begs for the familiar instead.
          </p>
          <p>
            Balance with Venus is learning that softness can still have boundaries — and that standards are not
            cruelty. They are clarity.
          </p>
        </section>

        {/* VENUS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Venus in the Modern World</h2>
          <p>
            Today, Venus appears wherever people stop romanticizing chaos. She lives in the person who builds a
            beautiful life on purpose: clean boundaries, honest communication, mutual effort, and relationships
            that nourish instead of consume.
          </p>
          <p>
            Her current moves through art and design, yes — but also through standards, choices, and the quiet
            discipline of self-respect. Venus reminds you that love is not proven by suffering. It is proven by
            what is sustained.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Venus teaches that love becomes real when it becomes repeatable. Not the rush, not the spark, not the
            fantasy — the daily choices that protect your dignity and create a life where tenderness can actually
            survive.
          </p>
          <p>
            She asks you to refine what you call love. If it requires you to beg, to shrink, to tolerate disrespect,
            to abandon your standards, it is not devotion — it is a wound trying to bargain for safety.
          </p>
          <p>
            Let beauty become alignment, not performance. Let pleasure become restoration, not escape. Let harmony be
            the result of truth, not the price you pay to avoid conflict.
          </p>
          <p>
            Venus’s blessing arrives as coherence: cleaner relationships, clearer boundaries, and the quiet confidence
            that comes from choosing yourself without cruelty. The more you live your worth, the less you have to
            chase anything.
          </p>
          <p>
            Remember this: love is not only something you feel. It is something you build. And Venus will always guide
            you back to the standard that makes love safe, beautiful, and real.
          </p>
        </section>

        {/* FOOTER LINKS (ORDER LOCKED FOR GODDESSES) */}
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