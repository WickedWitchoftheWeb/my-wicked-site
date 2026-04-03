// app/grimoire/08-deities/lilith-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lilith" subtitle="Goddess of Freedom">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/lilith/lilith.png"
              alt="Lilith"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Freedom is not chaos.
              <br />
              It is truth without permission.
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
    Lilith is the living current of ungoverned truth: freedom, refusal,
    self-ownership, and the reclamation of power that was labeled “too much”
    by people who benefited from your silence.
  </p>
  <p>
    She is not rebellion for attention. She is rebellion as correction — the
    part of the soul that refuses to be domesticated into obedience.
  </p>
  <p>
    Lilith teaches that sovereignty begins where self-betrayal ends. If something
    requires you to shrink, soften, or submit to be “acceptable,” it is not love.
    It is control wearing perfume.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/lilith-goddess/mythology"
      className="deity-link"
    >
      Explore Lilith’s Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/10-pluto"
                  className="deity-link"
                >
                  Pluto
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
                  href="/grimoire/03-chakras/01-root-chakra"
                  className="deity-link"
                >
                  Root
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/03-chakras/06-third-eye-chakra"
                  className="deity-link"
                >
                  Third Eye
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/09-purple" className="deity-link">
                  Purple
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
                <Link href="/grimoire/15-metals/silver" className="deity-link">
                  Silver
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/obsidian" className="deity-link">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/onyx" className="deity-link">
                  Onyx
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/garnet" className="deity-link">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/moonstone" className="deity-link">
                  Moonstone
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
                <Link href="/grimoire/14-herbs/wormwood" className="deity-link">
                  Wormwood
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rose" className="deity-link">
                  Rose
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
            Lilith appears across multiple currents and later traditions as a figure of
            refusal — the one who will not submit to a role that requires her to betray
            herself. Over time, her myth becomes a mirror: autonomy turned into a threat
            by systems that depend on compliance.
          </p>
          <p>
            In her most essential form, she is not “evil.” She is ungoverned. She is the
            archetype that reveals where power has been distorted into control.
          </p>
          <p>
            Her stories teach that the price of freedom is honesty — and that honesty is
            often punished by people who benefit from your silence.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Lilith governs freedom, boundary-fire, shadow reclamation, sexual sovereignty,
            self-ownership, and the removal of false guilt. She strengthens the ability to
            say “no” without apology and “yes” without self-abandonment.
          </p>
          <p>
            Her current supports cord-cutting, identity reconstruction, leaving toxic
            dynamics, and breaking inherited patterns of submission. She helps you return
            to yourself — not the version that is palatable, but the version that is true.
          </p>
          <p>
            Lilith also teaches discernment: the difference between desire and compulsion,
            between devotion and control, between love and possession.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Night wind, serpents, mirrors, thresholds, owls, desert imagery, black veils,
            and the feeling of an unblinking truth arriving in the body. Her symbols speak
            to what will not be tamed.
          </p>
          <p>
            Lilith’s sacred imagery often carries one message: stop negotiating with your
            own freedom.
          </p>
        </section>

        {/* LILITH IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Lilith in Practice</h2>
          <p>
            Work with Lilith when you are reclaiming yourself: repairing boundaries,
            releasing shame, leaving dynamics that require your self-erasure, and
            strengthening your capacity to choose your life without permission.
          </p>
          <p>
            She is potent for shadow work, cord-cutting, sovereignty in love and sex,
            breaking people-pleasing, and ending cycles of being controlled through guilt.
          </p>
          <p>
            Lilith responds to honesty and self-command. She does not respond well to
            performative rebellion or cruelty disguised as empowerment. Her freedom is
            clean: it restores dignity, not domination.
          </p>
          <p>
            <Link href="/grimoire/08-deities/lilith-goddess/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF LILITH HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Lilith Has Chosen You
          </h2>
          <p>
            If Lilith has chosen you, your tolerance for self-betrayal disappears. You may
            find yourself unable to keep people-pleasing, unable to keep shrinking, and
            unable to keep calling “peace” what is actually fear.
          </p>
          <p>
            Her presence often arrives as a return of appetite: for truth, for autonomy,
            for desire that is yours, for boundaries that hold. You stop negotiating with
            your own instincts.
          </p>
          <p>
            Signs may appear through night imagery, mirrors, serpents, sudden clarity about
            control dynamics, or repeated lessons around shame, freedom, and self-ownership.
          </p>
          <p>
            Most of all, if Lilith has chosen you, your life begins to demand honesty as a
            non-negotiable. Not cruelty — honesty. The kind that returns you to yourself.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Lilith can be simple and deliberate: clean water, incense, a candle
            lit in private, dark wine, roses, or a written vow to stop betraying yourself.
            The power is not in display — it is in truth.
          </p>
          <p>
            Acts of devotion can be non-material: enforcing a boundary, leaving a harmful
            dynamic, reclaiming your body without shame, telling the truth you keep swallowing,
            and choosing yourself when your old patterns beg you not to.
          </p>
          <p>
            Lilith responds to devotion that costs you your excuses, not your dignity.
          </p>
        </section>

        {/* LILITH VS EVE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Lilith vs Eve</h2>
          <p>
            Lilith and Eve are often positioned as opposites in later framing: refusal versus
            compliance, autonomy versus “acceptable” womanhood. That contrast is the point —
            it reveals the cultural fear of a woman who will not be governed.
          </p>
          <p>
            In practice, Lilith work is not about rejecting softness or love. It is about
            rejecting submission as the price of belonging.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Lilith moves through the Sovereign Self, the Boundary Flame, the Truth-Carrier,
            and the Unruled Woman — not as roles to perform, but as currents that restore
            autonomy and self-ownership.
          </p>
          <p>
            In her highest expression, she is freedom with integrity: desire without shame,
            boundaries without guilt, and truth without permission.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Lilith’s shadow can appear when freedom becomes defiance for its own sake — when
            boundaries become walls, when power becomes dismissal, or when pain becomes a
            reason to harm.
          </p>
          <p>
            Her corrective wisdom is sharp: sovereignty is not control. It is self-command.
            If your “freedom” destroys your integrity, it is not liberation.
          </p>
        </section>

        {/* LILITH IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Lilith in the Modern World</h2>
          <p>
            Today, Lilith appears wherever someone stops apologizing for having a will. She
            shows up in boundary work, recovery from control dynamics, sexual sovereignty,
            and the quiet decision to live honestly even when it costs comfort.
          </p>
          <p>
            She reminds you that freedom is a practice — and the first gate is always truth.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Lilith teaches that freedom is not granted — it is reclaimed. It begins the moment
    you stop negotiating with what harms you and stop apologizing for what is true.
  </p>
  <p>
    She does not ask you to harden your heart or abandon love. She asks you to stop
    confusing submission with belonging, silence with peace, and endurance with virtue.
  </p>
  <p>
    Walk her path when you are ready to tell the truth without flinching — to yourself
    first, and then to the world. Let your boundaries be clean. Let your desire be honest.
    Let your autonomy be sacred.
  </p>
  <p>
    Freedom is not chaos. It is alignment without permission. And once it is claimed,
    it cannot be taken from you.
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