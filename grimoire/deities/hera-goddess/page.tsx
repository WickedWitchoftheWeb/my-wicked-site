// app/grimoire/08-deities/hera-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hera" subtitle="Goddess of Sovereignty">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hera/hera.png"
              alt="Hera"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              A crown is not permission.
              <br />
              It is self-recognition.
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
    Hera is the living current of sovereignty, rightful authority, sacred union,
    and the integrity of commitment. She is not “a wife” as a role — she is the
    Queen as an archetype: the force that defines what is worthy, what is lawful,
    and what is protected.
  </p>
  <p>
    Her power is structure with self-respect. Boundaries that do not negotiate.
    Standards that do not apologize. A life built on vows that are chosen, kept,
    and honored — not out of obligation, but out of identity.
  </p>
  <p>
    Hera teaches that devotion is not self-erasure. It is self-honoring alignment.
    If something requires you to betray your dignity, it is not sacred.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hera-goddess/mythology"
      className="deity-link"
    >
      Explore Hera’s Mythic Origins →
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
        href="/grimoire/02-astrology/02-planets/06-jupiter"
        className="deity-link"
      >
        Jupiter
      </Link>
    </p>
  </div>

  <div className="zodiac-attr">
    <h3 className="zodiac-attr-label">Day</h3>
    <p className="zodiac-attr-value">
      <Link
        href="/grimoire/22-timing/days-of-the-week/05-thursday"
        className="deity-link"
      >
        Thursday
      </Link>
    </p>
  </div>

  <div className="zodiac-attr">
    <h3 className="zodiac-attr-label">Chakra</h3>
    <p className="zodiac-attr-value">
      <Link href="/grimoire/03-chakras/05-throat-chakra" className="deity-link">
        Throat
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
      <Link href="/grimoire/05-colors/07-blue" className="deity-link">
        Blue
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
      <Link href="/grimoire/07-crystals-stones/pearl" className="deity-link">
        Pearl
      </Link>
      ,{" "}
      <Link
        href="/grimoire/07-crystals-stones/lapis-lazuli"
        className="deity-link"
      >
        Lapis Lazuli
      </Link>
      ,{" "}
      <Link href="/grimoire/07-crystals-stones/sapphire" className="deity-link">
        Sapphire
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
      <Link href="/grimoire/14-herbs/pomegranate" className="deity-link">
        Pomegranate
      </Link>
      ,{" "}
      <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
        Bay Leaves
      </Link>
      ,{" "}
      <Link href="/grimoire/14-herbs/olive" className="deity-link">
        Olive
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
            Hera’s myths carry the weight of queenship: the politics of power, the
            sanctity of vows, and the cost of being a sovereign woman in a world that
            expects her to endure quietly.
          </p>
          <p>
            She is a goddess of marriage and union, but her deeper domain is the
            structure behind union: boundaries, legitimacy, agreement, and the sacred
            consequences of betrayal.
          </p>
          <p>
            Hera is not here to romanticize commitment. She is here to clarify it.
            What is vowed must be honored. What is dishonored must be answered.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hera governs sovereignty, sacred union, marriage, legitimacy, lineage,
            boundaries, and the protection of what is rightfully yours. She strengthens
            the ability to hold standards without guilt and to enforce agreements without
            collapse.
          </p>
          <p>
            Her current supports leadership that is clean: authority that does not bully,
            commitment that does not self-betray, and devotion that does not require
            silence.
          </p>
          <p>
            She is also a protector of the vowed path: the life you have chosen on purpose.
            With Hera, the question is never “What do you want?” It is: “What are you
            willing to honor?”
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Crowns, thrones, veils, sacred vows, peacocks, temples, scepters, rings, and
            the imagery of queenship. Her symbols speak to legitimacy — the right to take
            up space without asking.
          </p>
          <p>
            Hera’s sacred imagery often carries a message: standards are protection. The
            crown is not decoration. It is boundary made visible.
          </p>
        </section>

        {/* HERA IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hera in Practice</h2>
          <p>
            Work with Hera when you are reclaiming your authority: strengthening boundaries,
            defining standards, repairing self-respect, and learning to hold commitment
            without self-erasure. She is potent for leadership, marriage and partnership
            protection, and rebuilding your life around what is worthy.
          </p>
          <p>
            Hera responds to integrity, honesty, and self-command. She does not respond well
            to begging, bargaining, or staying in situations that require your dignity as the
            entry fee. If you want her protection, be willing to enforce your own standards.
          </p>
          <p>
            Her energy is corrective. It does not comfort the part of you that wants to be
            chosen at any cost. It empowers the part of you that chooses yourself first.
          </p>
          <p>
            <Link href="/grimoire/08-deities/hera-goddess/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF HERA HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Hera Has Chosen You</h2>
          <p>
            If Hera has chosen you, your tolerance for disrespect disappears. You may find
            yourself unable to keep making excuses for broken agreements, inconsistent love,
            or power dynamics that require you to shrink.
          </p>
          <p>
            Her presence often arrives through standards: a sudden clarity about what is
            acceptable and what is not. You begin to value legitimacy — in relationships,
            in business, in self-concept. You stop settling for vague promises.
          </p>
          <p>
            Signs may appear through themes of vows, crowns, rings, peacocks, queenship,
            and moments where you feel a quiet but immovable “no” rise in your body.
          </p>
          <p>
            Most of all, if Hera has chosen you, your life begins to demand self-respect as
            law. You are asked to hold your boundaries even when it costs you attention, and
            to choose what is worthy over what is convenient.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings for Hera can be clean and intentional: fresh water, wine, flowers,
            incense, a candle lit with devotion, or symbols of vows and commitment. The
            power is in respect, not performance.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your word, enforcing a boundary,
            choosing the long-term good over the short-term comfort, and building a life
            that reflects your standards.
          </p>
          <p>
            Hera responds to devotion that has backbone. If your reverence is real, your
            life will start to become more ordered — because sovereignty creates structure.
          </p>
        </section>

        {/* HERA VS JUNO */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hera vs Juno</h2>
          <p>
            Hera and Juno are related currents, but they are not identical. Hera carries a
            distinctly Greek mythic texture — queenship, vows, and the politics of divine
            legitimacy. Juno, in her Roman current, often emphasizes civic authority, social
            order, and the role of commitment within public structure.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Hera as the sovereign
            archetype of the Queen and Juno as the Roman expression of authority within
            culture and institution.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Hera moves through the Queen, the Guardian of Vows, the Keeper of Standards, and
            the Protector of Legitimacy — not as roles to perform, but as currents of power
            that restore self-respect and lawful alignment.
          </p>
          <p>
            In her highest expression, she is sovereignty with dignity: commitment that is
            chosen, standards that are enforced, and authority that does not apologize.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Hera’s shadow can appear when sovereignty becomes rigidity — when standards
            become punishment, when rightful anger becomes bitterness, or when loyalty
            becomes self-sacrifice.
          </p>
          <p>
            Her corrective wisdom is sharp: devotion must be mutual. Commitment must be
            honored. Sovereignty must be rooted in self-respect, not revenge.
          </p>
        </section>

        {/* HERA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hera in the Modern World</h2>
          <p>
            Today, Hera’s energy appears wherever someone stops begging for consistency and
            starts requiring it. She shows up when a person builds a life that matches their
            standards — in love, in work, and in identity.
          </p>
          <p>
            She reminds you that stability is not luck. It is law. And law begins inside you.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hera teaches that sovereignty is not granted by position, partnership, or approval.
    It is claimed through self-respect and upheld through unwavering standards. A crown
    has meaning only when the one who wears it knows their worth.
  </p>
  <p>
    She asks you to look closely at what you have committed to — in love, in loyalty, in
    identity — and whether those commitments honor who you are becoming or keep you bound
    to what you have outgrown.
  </p>
  <p>
    Walk with Hera when you are ready to choose yourself without apology: to enforce
    boundaries without guilt, to demand reciprocity without fear, and to build a life
    that reflects your dignity rather than negotiates it away.
  </p>
  <p>
    Her blessing arrives as clarity around worth and responsibility. What is lawful
    strengthens. What is unworthy falls away. Through her, you learn that stability is
    not endurance — it is alignment.
  </p>
  <p>
    Hera reminds you that true authority begins within. When you honor your own standards,
    your life reorganizes around them — and what remains is worthy of your devotion.
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