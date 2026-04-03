// app/grimoire/08-deities/jupiter-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Jupiter" subtitle="God of Authority">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/jupiter/jupiter.png"
              alt="Jupiter"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Expansion is not excess.
              <br />
              It is truth made bigger.
            </p>
            <p className="wicked-signature">— Wicked</p>
          </div>
        </section>

        {/* INTRO (INLINE, NO COMPONENT) */}
        <section className="zodiac-intro">
          <p>
            Across every culture and every age, humanity has given names and faces to the
            forces that shape existence. Goddesses and Gods are not distant myths locked in
            the past — they are living archetypes, expressions of power, consciousness,
            nature, and cosmic law.
          </p>

          <p>
            Within the Grimoire, deities are honored as embodiments of specific energies:
            creation and destruction, love and war, wisdom and chaos, death and rebirth.
            Each carries their own mythology, symbols, correspondences, and lessons, yet all
            emerge from the same universal source.
          </p>

          <p>
            Goddesses appear here first, not as lesser counterparts, but as primordial
            forces of creation, transformation, and sovereignty. Gods follow as agents of
            order, motion, and manifestation. Together, they form a divine balance — mirrors
            of the inner and outer worlds we navigate every day.
          </p>

          <p>
            This section is a living archive. As the Grimoire grows, so too will the
            pantheons represented here. Whether you approach these deities through devotion,
            study, magic, or symbolism, you are stepping into a lineage as old as humanity
            itself.
          </p>
        </section>

       {/* CORE ESSENCE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Core Essence</h2>
  <p>
    Jupiter is the living current of authority, blessing, expansion, and lawful
    protection. He is not luck as randomness — he is luck as alignment: what opens
    when you live with integrity, aim higher, and hold responsibility without fear.
  </p>
  <p>
    His power is increase with meaning. Growth that strengthens the foundation. Praise
    that comes from merit. Opportunity that arrives because your life finally matches
    your potential.
  </p>
  <p>
    Jupiter teaches the difference between ego and sovereignty. Ego wants status.
    Sovereignty wants stewardship. One demands. The other deserves.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/jupiter-god/mythology"
      className="deity-link"
    >
      Explore Jupiter’s Mythic Origins →
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
                <Link
                  href="/grimoire/03-chakras/07-crown-chakra"
                  className="deity-link"
                >
                  Crown
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
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/09-purple" className="deity-link">
                  Purple
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
                <Link href="/grimoire/15-metals/tin" className="deity-link">
                  Tin
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/amethyst" className="deity-link">
                  Amethyst
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
                <Link href="/grimoire/07-crystals-stones/citrine" className="deity-link">
                  Citrine
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/thyme" className="deity-link">
                  Thyme
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
            In Roman tradition, Jupiter stands as the kingly force of order, law, and
            divine protection — the authority that stabilizes the world when chaos tries
            to take the throne.
          </p>
          <p>
            His myths carry themes of sovereignty, justice, and the responsibilities of
            power: the difference between domination and rightful rule, between fear-based
            control and lawful leadership.
          </p>
          <p>
            Jupiter’s presence is often felt as an inner rise — the moment you stop asking
            for permission and start building a life that is worthy of blessing.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Jupiter governs expansion, prosperity, leadership, justice, protection, wisdom,
            and the kind of fortune that follows integrity. He supports upward movement:
            promotions, recognition, opportunities, and growth that lasts.
          </p>
          <p>
            His current strengthens faith without delusion — confidence rooted in work,
            clarity, and a willingness to be accountable for what you claim.
          </p>
          <p>
            Jupiter also teaches scale: when to widen your vision, when to commit to a
            bigger path, and how to hold success without self-sabotage.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Thunder, the sky, crowns, temples, oaths, law, scepters, altars of offering,
            and imagery of the sovereign ruler. His symbolism speaks to protection through
            order — the structure that keeps life from collapsing.
          </p>
          <p>
            Jupiter’s imagery often carries one message: expand with integrity. Blessing
            multiplies what is true.
          </p>
        </section>

        {/* JUPITER IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Jupiter in Practice</h2>
          <p>
            Work with Jupiter when you are building a bigger life: stepping into leadership,
            increasing prosperity, strengthening confidence, seeking wise direction, and
            creating opportunities through integrity and consistent effort.
          </p>
          <p>
            Jupiter responds to honesty, responsibility, and clean ambition. He does not
            respond well to entitlement, shortcuts, or asking for expansion while refusing
            to mature.
          </p>
          <p>
            If you call Jupiter, be willing to grow into what you asked for. His blessings
            arrive with a requirement: carry them well.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/jupiter-god/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF JUPITER HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Jupiter Has Chosen You
          </h2>
          <p>
            If Jupiter has chosen you, your life starts demanding a higher standard. You
            may feel a pressure to expand — not in a frantic way, but in a sovereign way.
            The old version of you begins to feel too small.
          </p>
          <p>
            His presence often arrives through opportunity paired with responsibility:
            leadership roles, invitations, mentors, recognition, or moments where you are
            asked to make a bigger decision than you feel ready for.
          </p>
          <p>
            Signs may appear through themes of the sky, thunder, law, crowns, authority, or
            repeated moments where the path opens only after you choose integrity over ease.
          </p>
          <p>
            Most of all, if Jupiter has chosen you, you begin to outgrow compromise. You
            stop negotiating with your potential and start building what you actually want
            to be known for.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings can be clean and intentional: fresh water, bread, wine or juice,
            incense, a candle lit in gratitude, or a vow spoken with sincerity. The power
            is not in extravagance — it is in respect.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your word, honoring commitments,
            acting with fairness, choosing the harder right over the easier wrong, and
            living like your name matters.
          </p>
          <p>
            Jupiter responds to devotion that is demonstrated. If your reverence is real,
            your life becomes more ordered — and your opportunities increase.
          </p>
        </section>

        {/* JUPITER VS ZEUS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Jupiter vs Zeus</h2>
          <p>
            Jupiter and Zeus are related currents, but they are not identical. Jupiter
            carries a Roman emphasis on law, civic order, and sovereign protection through
            structure. Zeus, in his Greek current, often emphasizes raw divine kingship,
            power dynamics, and mythic authority.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Jupiter as authority
            made lawful and Zeus as authority made elemental.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Jupiter moves through the Sovereign, the Lawgiver, the Protector, and the
            Blesser of Worthy Paths — not as roles to perform, but as currents that expand
            what is true and strengthen what is stable.
          </p>
          <p>
            In his highest expression, he is growth with integrity: success that lasts,
            leadership that protects, and blessing that multiplies responsibility.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Jupiter’s shadow can appear when expansion becomes excess — when confidence
            becomes arrogance, when success becomes indulgence, or when authority becomes
            entitlement.
          </p>
          <p>
            His corrective wisdom is simple: expand what is true. If it is not rooted in
            integrity, it will not hold.
          </p>
        </section>

        {/* JUPITER IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Jupiter in the Modern World</h2>
          <p>
            Today, Jupiter’s energy appears wherever people build something bigger than
            themselves: leadership, mentorship, law, education, public life, and long-term
            prosperity rooted in fairness.
          </p>
          <p>
            He reminds you that blessing is not a prize. It is a responsibility. Carry it
            like a crown.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Jupiter teaches that expansion is not excess — it is alignment with what is meant
    to grow. His power is not indulgence or domination, but lawful abundance: growth that
    strengthens rather than consumes.
  </p>
  <p>
    He asks you to examine where you are living small out of fear, and where you are
    overreaching without wisdom. True expansion requires integrity. What grows without
    ethics eventually collapses under its own weight.
  </p>
  <p>
    Walk with Jupiter when you are ready to claim space responsibly — to lead without
    tyranny, to prosper without exploitation, and to believe in possibility without
    abandoning discernment.
  </p>
  <p>
    His blessing arrives as confidence rooted in truth, opportunity that rewards effort,
    and vision that sees beyond the immediate moment into what can be built over time.
  </p>
  <p>
    Jupiter reminds you that faith is not blind hope. It is trust earned through alignment.
    When your actions honor truth, generosity, and law, expansion follows naturally — and
    what you build has the strength to endure.
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