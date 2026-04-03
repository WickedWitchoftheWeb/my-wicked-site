// app/grimoire/08-deities/zeus-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Zeus" subtitle="God of Thunder">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/zeus/zeus.png"
              alt="Zeus"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Power isn’t volume.
              <br />
              It’s authority that holds.
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
    Zeus is the living current of command — the force that rules weather,
    law, oath, and order. He is not merely strength. He is authority: the
    ability to decide, to enforce, and to hold the consequences of what you
    choose.
  </p>
  <p>
    His power is sky-wide and unapologetic. Zeus teaches that leadership is
    not being liked. It is being responsible. It is making the hard call and
    living with the outcome — without collapsing into guilt or hiding behind
    excuses.
  </p>
  <p>
    Zeus also reveals the truth about power: it amplifies what is already
    there. If your intention is clean, power becomes protection and stability.
    If your intention is distorted, power becomes control. Zeus is a mirror.
    Work with him when you are ready to be honest about what you want to rule.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/zeus-god/mythology"
      className="deity-link"
    >
      Explore Zeus’ Mythic Origins →
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/04-gold" className="deity-link">
                  Gold
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
                <Link href="/grimoire/15-metals/gold" className="deity-link">
                  Gold
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/sapphire" className="deity-link">
                  Sapphire
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
                  href="/grimoire/07-crystals-stones/quartz/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/citrine"
                  className="deity-link"
                >
                  Citrine
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/bay-leaves" className="deity-link">
                  Bay Leaves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/thyme" className="deity-link">
                  Thyme
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
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
            Zeus stands at the center of Greek myth as the king of the Olympians —
            the sky-god who overthrows an older order and establishes a new one. His
            stories are filled with thunder and law, appetite and consequence, and the
            eternal tension between raw power and rightful rule.
          </p>
          <p>
            He is bound to oaths, hospitality, and the structures that keep society
            from collapsing into chaos. In myth, Zeus is not only the storm — he is
            the contract. The line between what is allowed and what is punishable.
          </p>
          <p>
            His mythology carries both glory and warning: power can build a world, and
            power can distort a world. Zeus’s current asks a sobering question: if you
            were given the throne, would your rule protect life — or feed your ego?
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Zeus governs the sky, storms, lightning, law, leadership, authority,
            justice, oath, and protection through order. He strengthens the part of
            you that can decide and enforce without flinching.
          </p>
          <p>
            His current supports leadership work, boundary enforcement, protection,
            commanding a room, stabilizing chaos, and calling your energy back from
            places where you’ve been leaking your authority.
          </p>
          <p>
            Zeus also governs expansion through responsibility: growth that comes from
            taking the wheel, not from waiting for rescue.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Lightning, thunderclouds, the eagle, the scepter, the throne, mountains,
            crowns, law, and the sound of a verdict landing. Zeus’s imagery speaks in
            scale — the feeling that something larger is watching whether you lead or
            surrender.
          </p>
          <p>
            He speaks through sudden clarity, decisive turns, storms that mirror inner
            truth, and moments where you are forced to choose: rule your life, or be
            ruled by what you refuse to confront.
          </p>
        </section>

        {/* ZEUS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Zeus in Practice</h2>
          <p>
            Work with Zeus when you need your authority back: leadership, command,
            justice work, boundary enforcement, protection through structure, and
            decisions that must be made cleanly and fully.
          </p>
          <p>
            Zeus responds to integrity and responsibility. He does not respond well to
            cowardice disguised as humility, or control disguised as protection. If you
            ask for power, expect to be tested on what you will do with it.
          </p>
          <p>
            This is rule-setting work. It is learning to speak the verdict, set the
            standard, and hold the line — not out of cruelty, but out of devotion to
            what keeps your life stable.
          </p>
          <p>
            <Link href="/grimoire/08-deities/zeus-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF ZEUS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Zeus Has Chosen You</h2>
          <p>
            If Zeus has chosen you, your life starts demanding leadership. You may feel
            a sudden intolerance for disorder you used to “manage,” for situations where
            you keep negotiating with the same disrespect, and for versions of yourself
            that keep postponing the hard decision.
          </p>
          <p>
            His presence often arrives as pressure and clarity: you can feel where your
            authority has been outsourced — to fear, to approval, to comfort, to someone
            else’s opinion. You may feel called to step into responsibility, claim a role,
            or finally enforce a boundary you’ve been rehearsing in your head for months.
          </p>
          <p>
            Signs can appear through storm symbolism, lightning imagery, eagles, themes of
            crowns and thrones, sudden confrontations with truth, or perfectly timed moments
            where you are forced to choose what you stand for.
          </p>
          <p>
            Most of all, if Zeus has chosen you, your life begins rewarding decisive
            responsibility. When you act like a leader, doors open. When you avoid the
            decision, reality escalates until your hesitation becomes too expensive to keep.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Zeus should be clean and direct: a candle lit with a clear vow,
            clean water, a spoken oath you intend to keep, or a moment of stillness where
            you claim authority over your own mind.
          </p>
          <p>
            Acts of devotion are lived: keeping your word, enforcing the standard the first
            time, leading with fairness, and refusing to let your life be governed by what
            you’re afraid to name.
          </p>
          <p>
            Zeus honors rule that protects. If you want his current, choose integrity over
            image — and let your standards become law in your own life.
          </p>
        </section>

        {/* ZEUS VS JUPITER */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Zeus vs Jupiter</h2>
          <p>
            Zeus and Jupiter are related, but not identical. Zeus carries a distinctly Greek
            mythic texture — thunder as authority, rule as consequence, and power as a mirror
            that reveals character.
          </p>
          <p>
            Jupiter, in his Roman current, often emphasizes civic expansion, protection through
            order, and prosperity tied to law and public stability. Zeus is the storm-king; Jupiter
            is the imperial guardian of structure.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Zeus moves through the King, the Judge, the Storm-Bringer, and the Lawgiver — not
            as costumes, but as currents of authority that teach decisive responsibility.
          </p>
          <p>
            In his highest expression, Zeus is protection through order: power used to stabilize,
            to defend what is sacred, and to enforce truth without cruelty.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Zeus’s shadow can appear as domination, arrogance, entitlement, or believing that being
            “in charge” means being above consequence. When authority becomes ego, power becomes
            distortion.
          </p>
          <p>
            His corrective wisdom is simple: rule requires responsibility. If you cannot hold
            yourself accountable, you are not a leader. You are a storm without purpose.
          </p>
          <p>
            Balance with Zeus is learning to lead without becoming consumed by control — to enforce
            standards without needing to crush what disagrees with you.
          </p>
        </section>

        {/* ZEUS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Zeus in the Modern World</h2>
          <p>
            Today, Zeus appears wherever people reclaim authority over their lives: stepping into
            leadership, ending chaos, setting rules that protect their peace, and choosing decisions
            that are true even when they are unpopular.
          </p>
          <p>
            His current lives in clean standards, clear boundaries, and the willingness to be the
            one who decides. Zeus does not promise comfort. He offers order — the kind that makes
            life stable enough to actually thrive.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Zeus teaches that authority is not something you declare. It is something you embody.
            You become powerful when your decisions match your standards and your standards match
            your truth.
          </p>
          <p>
            Let your “yes” be law. Let your “no” be final. Stop negotiating with what keeps
            disrespect alive in your life. A throne is not a gift — it is a responsibility, and
            Zeus asks you to rule yourself before you try to rule anything else.
          </p>
          <p>
            If you want expansion, take responsibility for the structure that must hold it. If you
            want protection, enforce the boundary that creates it. If you want respect, stop accepting
            what contradicts it. Zeus does not bless avoidance. He blesses decisive integrity.
          </p>
          <p>
            The storm is not punishment. It is revelation. When thunder arrives, something is being
            named. Listen. Choose. Act. Zeus is not here to make you louder. He is here to make you
            undeniable.
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