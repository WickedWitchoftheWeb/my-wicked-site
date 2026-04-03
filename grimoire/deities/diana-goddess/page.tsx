// app/grimoire/08-deities/diana-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Diana" subtitle="Goddess of the Hunt">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/diana/diana.png"
              alt="Diana"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              I do not ask the wild to soften.
              <br />
              I ask you to remember you were born from it.
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
    Diana is the untamed sovereign of the wild — the force of instinct,
    precision, and self-owned power. She is the part of you that refuses to
    be domesticated: the inner guardian who knows when to aim, when to vanish,
    and when to protect what is sacred without explaining it.
  </p>
  <p>
    Her energy sharpens the senses and strengthens boundaries. Diana teaches
    disciplined freedom — not chaos, not rebellion for show, but the quiet
    authority of someone who trusts their own sight. Where others seek
    permission, Diana teaches you to choose.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/diana-goddess/mythology"
      className="deity-link"
    >
      Explore Diana’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/earth" className="deity-link">
          Earth
        </Link>
        ,{" "}
        <Link href="/grimoire/11-elements/water" className="deity-link">
          Water
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/02-moon"
                  className="deity-link"
                >
                  Moon
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
                  href="/grimoire/03-chakras/06-third-eye-chakra"
                  className="deity-link"
                >
                  Third Eye
                </Link>
                ,{" "}
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
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/gray" className="deity-link">
                  Gray
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

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
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
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/amethyst"
                  className="deity-link"
                >
                  Amethyst
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) + & instead of / */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cypress" className="deity-link">
                  Cypress
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/pine" className="deity-link">
                  Pine
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
            Diana is the Roman goddess of the hunt, the moon, and wild places. She is
            associated with forests, sacred groves, springs, and the protective
            intelligence of nature — the force that keeps the boundary between
            civilization and wilderness clear.
          </p>
          <p>
            Her mythology carries the current of independence and sacred limits. Diana
            does not exist to be claimed, softened, or negotiated with. She stands as a
            symbol of agency, self-trust, and the right to protect what is yours.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Diana governs the hunt, protection, tracking, precision, and survival wisdom.
            She strengthens the ability to move decisively, to act with clarity, and to
            hold boundaries without collapse. She is the energy of aim — choosing a target,
            committing to it, and refusing distraction.
          </p>
          <p>
            She is also a protector of sovereignty. Diana supports those who are leaving
            unhealthy dynamics, rebuilding self-trust, reclaiming autonomy, or learning to
            stand alone without fear. Her power is quiet, disciplined, and unowned.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Diana’s symbols include the bow and arrow, the crescent moon, torchlight,
            hounds, forest paths, sacred groves, and spring water. She is often felt as
            the hush at dusk — the moment the world goes still and your instincts become
            sharp enough to guide you.
          </p>
        </section>

       {/* DIANA IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Diana in Practice</h2>
  <p>
    Work with Diana when you need clarity, protection, and strong boundaries. She
    is especially potent for cord-cutting, reclaiming personal power, strengthening
    intuition, and building disciplined confidence.
  </p>
  <p>
    Diana teaches you to stop explaining yourself to people who benefit from your
    doubt. She supports decisive endings, clean choices, and the steady practice of
    honoring your own inner authority.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/diana-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF DIANA HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Diana Has Chosen You
  </h2>
  <p>
    If Diana has chosen you, your tolerance for manipulation disappears. You may
    find yourself suddenly unwilling to justify your boundaries or soften your
    truth to keep the peace. Silence becomes a choice rather than a fear.
  </p>
  <p>
    Her presence often arrives through decisive inner shifts — moments where
    something inside you clicks and a line is drawn. You may feel called to sever
    energetic cords, step away from draining dynamics, or stand alone rather than
    compromise your integrity.
  </p>
  <p>
    Signs may appear through dreams of weapons, moonlight, sudden surges of
    confidence, or a sharpened intuition that no longer asks for validation.
  </p>
  <p>
    Most of all, if Diana has chosen you, your life begins to reward self-trust.
    When you act decisively and honor your inner authority, protection follows.
    When you hesitate or self-betray, discomfort arises — not as punishment, but
    as correction.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offer Diana clean water, a white candle, a vow kept, and time spent in nature
            with full presence. She is honored by discipline, respectful silence, and
            choices that protect your peace.
          </p>
          <p>
            If you leave offerings outdoors, do so responsibly and without harm to the
            land. Diana’s devotion is inseparable from stewardship.
          </p>
        </section>

        {/* DIANA VS ARTEMIS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Diana vs Artemis</h2>
          <p>
            Diana and Artemis are related, but not interchangeable. Diana carries a Roman
            current: a goddess of the hunt and the moon who is closely tied to sacred
            groves, springs, and the protective boundaries between wilderness and society.
            Artemis, in the Greek current, often emphasizes wild purity, fierce autonomy,
            and the untouchable edge of the huntress archetype.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Diana as the guardian of the
            threshold — the huntress who protects what is sacred — and Artemis as the
            untamed force of wild independence and uncompromising instinct.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Archetypal {"\u00A0\u00A0"}Expression</h2>
          <p>
            Diana moves through the Huntress, the Protector, the Guardian of the Threshold,
            and the Moonlit Witness — not as roles to perform, but as currents of power.
            The Huntress brings focus and precision. The Protector enforces boundaries.
            The Guardian of the Threshold keeps the sacred safe. The Moonlit Witness
            sharpens intuition and truth.
          </p>
          <p>
            In her highest expression, Diana is freedom with discipline — instinct that
            does not waver, and sovereignty that does not require permission.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as isolation, emotional hardening, distrust, or the
            compulsion to stay on guard even when safety is present. When boundaries
            become walls and independence becomes avoidance, the current distorts.
          </p>
          <p>
            Diana’s corrective wisdom is simple: boundaries are meant to protect your life,
            not shrink it. Trust your instincts, but do not confuse vigilance with truth.
            Let discernment guide you — not fear.
          </p>
        </section>

        {/* DIANA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Diana in the Modern World</h2>
          <p>
            Today, Diana appears wherever someone chooses sovereignty over approval. She
            lives in the person who walks away cleanly, who protects their peace without
            apology, and who trusts their own sight more than the noise of the crowd.
          </p>
          <p>
            Her energy is also present in the return to wildness: time in nature as
            nervous-system medicine, boundaries as self-respect, and the steady practice
            of honoring instinct as sacred intelligence.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Diana teaches that autonomy is sacred. Her power lives in the ability to move through
    the world without apology, to protect what is yours without justification, and to
    trust your instincts even when they lead you away from what is familiar.
  </p>
  <p>
    She asks you to examine where you have been explaining your boundaries instead of
    honoring them — where you have softened your truth to make others comfortable. True
    protection begins the moment you stop abandoning yourself.
  </p>
  <p>
    Walk with Diana when you are ready to choose clarity over approval, solitude over
    compromise, and integrity over performance. Her path is not isolation — it is
    self-trust sharpened into strength.
  </p>
  <p>
    Her blessing arrives as clean decisiveness: the ability to cut cords without cruelty,
    to leave without guilt, and to stand firmly in your own authority. Through her, you
    learn that restraint can be power when it is chosen consciously.
  </p>
  <p>
    Diana reminds you that you do not need permission to be whole. Honor your instincts.
    Defend your truth. Walk your path with steady aim.
  </p>
</section>

        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
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