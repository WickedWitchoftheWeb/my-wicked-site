// app/grimoire/08-deities/apollo-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Apollo" subtitle="God of Light">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/apollo/apollo.png"
              alt="Apollo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The Sun does not ask permission to rise.
              <br />
              Truth illuminates what is ready to be seen.
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
    Apollo is the current of clarity — light that reveals, precision that
    refines, and truth that burns away distortion. He is the disciplined
    radiance behind prophecy, music, healing, and sacred order: a force
    that turns chaos into coherence and intention into mastery.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/apollo-god/mythology"
      className="deity-link"
    >
      Explore Apollo’s Mythic Origins →
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
                  The Sun
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
                  href="/grimoire/03-chakras/03-solar-plexus-chakra"
                  className="deity-link"
                >
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/gold" className="deity-link">
                  Gold
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/yellow" className="deity-link">
                  Yellow
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
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

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/citrine"
                  className="deity-link"
                >
                  Citrine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/sunstone"
                  className="deity-link"
                >
                  Sunstone
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/amber"
                  className="deity-link"
                >
                  Amber
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/laurel" className="deity-link">
                  Laurel
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay" className="deity-link">
                  Bay
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/frankincense"
                  className="deity-link"
                >
                  Frankincense
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
            Apollo is born of Zeus and Leto, twin to Artemis — a divine pairing of
            sun-bright precision and moon-deep instinct. His myths anchor him in
            places of revelation: Delos, Delphi, the laurel crown, the slaying of
            the Python — stories that frame him as a god of prophecy, purification,
            and the victory of clear sight over shadowed confusion.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Apollo governs prophecy and divination, music and sacred art, healing
            and purification, archery and precision, sunlight and truth. His gifts
            often arrive as discernment, creative focus, restored confidence, and
            the ability to name what is real — without flinching.
          </p>
        </section>

        {/* SYMBOLS & SACRED IMAGERY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            His symbols include the Sun, the lyre, the bow, the laurel, and the
            oracle — imagery of mastery, discipline, illumination, and devotion to
            truth. Apollo’s presence often feels like “clean air”: bright, direct,
            and impossible to ignore.
          </p>
        </section>

       {/* APOLLO IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Apollo in Practice</h2>
  <p>
    Work with Apollo when you need clarity, direction, or refinement:
    creative discipline, public confidence, honest communication,
    energetic cleansing, study, performance, and divination. His current
    strengthens focus and sharpens the voice — the ability to speak,
    create, and decide with clean intent.
  </p>
  <p>
    He responds to integrity, devotion, consistency, and deliberate
    effort. He does not respond well to self-deception, laziness disguised
    as “waiting for a sign,” or performative spirituality. Apollo’s light
    is supportive, but it is not indulgent.
  </p>
  <p>
    Energetic boundaries matter. Apollo helps you sharpen — not scorch.
    If your truth becomes cruelty, or your discipline becomes punishment,
    his current can feel harsh. Keep your intention clean: illuminate to
    heal, not to control.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/apollo-god/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF APOLLO HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Apollo Has Chosen You
  </h2>
  <p>
    If Apollo has chosen you, your life begins to demand honesty — not
    just from others, but from yourself. Illusions become uncomfortable.
    Half-truths feel unbearable. You may find that you can no longer
    tolerate confusion, vagueness, or self-sabotage disguised as humility.
  </p>
  <p>
    His presence often arrives through the voice and the mind: a pull
    toward speaking clearly, learning deeply, practicing consistently,
    and refining your craft. You may feel called to step into visibility
    — teaching, performing, leading, or naming truth where silence once
    felt safer.
  </p>
  <p>
    Signs may appear through sunlight, music, synchronic timing,
    prophetic dreams, sudden clarity, or moments where something inside
    you says, “You already know.” His guidance cuts through fog rather
    than surrounding you with mystery.
  </p>
  <p>
    Most of all, if Apollo has chosen you, your life begins to reward
    discipline. When you show up, practice, study, and speak with
    integrity, doors open. When you avoid your own potential, the light
    feels uncomfortable — not cruel, but corrective.
  </p>
</section>




        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings include laurel, incense, clean water, sunlight,
            music, and devotional art. Modern offerings can be just as potent:
            practice as prayer, a daily candle lit at sunrise, a song played with
            intention, a written vow to tell the truth, or a cleansing ritual to
            restore clarity.
          </p>
          <p>
            Acts of devotion include keeping your word, studying what calls you,
            refining your craft, honoring your health, and choosing honesty even
            when it costs you comfort. Apollo doesn’t demand perfection — he
            demands sincerity and discipline.
          </p>
        </section>

        {/* APOLLO VS HELIOS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Apollo vs Helios</h2>
          <p>
            Apollo is often associated with solar energy, but Helios is the Sun
            itself in Greek myth — the titanic embodiment of the solar sphere.
            Apollo’s solar current is symbolic and archetypal: illumination,
            clarity, prophecy, art, and order. Helios is literal radiance, the
            blazing witness that sees all.
          </p>
          <p>
            Related — but not interchangeable. If you work with Apollo, approach
            him as sacred clarity and disciplined light. If you work with Helios,
            approach him as the living Sun: raw power, exposure, and unmistakable
            revelation.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Apollo moves through the Healer, the Oracle, the Artist, and the
            Archer — not as costumes, but as currents of power. The Healer
            restores and purifies. The Oracle reveals what is true. The Artist
            channels divine order into beauty. The Archer teaches precision, aim,
            and mastery.
          </p>
          <p>
            In his highest expression, Apollo is calm sovereignty — radiance
            without arrogance, truth without cruelty, discipline without shame.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            His shadow can appear as perfectionism, arrogance, cold detachment,
            or “truth as a weapon.” Light can blind when it refuses nuance.
            Discipline can harden when it forgets compassion.
          </p>
          <p>
            Apollo’s corrective wisdom is simple: illuminate to heal. Let truth
            refine your life, not punish it. Aim with precision — but remember
            that the point of clarity is freedom.
          </p>
        </section>

        {/* APOLLO IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Apollo in the Modern World</h2>
          <p>
            Today, Apollo’s current lives in creative mastery, clean boundaries,
            confident speech, and disciplined embodiment. He appears when someone
            stops spiraling and chooses direction. He teaches that inspiration is
            sacred — and that devotion is what turns it into reality.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Apollo teaches that clarity is a discipline. Illumination is not a sudden flash
    that excuses responsibility — it is the steady commitment to truth, refinement,
    and conscious expression. Light reveals what must be tended, not what can be
    avoided.
  </p>
  <p>
    He reminds you that purpose sharpens through practice. Talent matures through
    consistency. Insight deepens when you are willing to listen, adjust, and align
    your actions with what you already know to be true.
  </p>
  <p>
    Walking with Apollo asks for honesty with yourself. Where are you hiding behind
    uncertainty? Where are you waiting for permission instead of stepping into your
    voice? His light does not shame — it clarifies.
  </p>
  <p>
    His blessing arrives as inner coherence: the confidence to speak cleanly, create
    with intention, and choose direction without distortion. With Apollo, truth
    becomes something you live, not just something you understand.
  </p>
  <p>
    Remember this teaching: illumination is not passive. Let your light be disciplined,
    your voice be intentional, and your path be guided by clarity rather than fear.
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