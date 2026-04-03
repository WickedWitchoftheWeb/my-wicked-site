// app/grimoire/08-deities/nemesis-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Nemesis" subtitle="Goddess of Retribution">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/nemesis/nemesis.png"
              alt="Nemesis"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Balance is not kindness.
              <br />
              It is consequence arriving on time.
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
    Nemesis is the living law of return — the force that restores balance when
    power is abused, when arrogance turns predatory, and when harm is disguised
    as entitlement. She is not petty punishment. She is proportion.
  </p>
  <p>
    Her current moves with sober precision: the moment a scale tips too far, the
    moment someone believes they are exempt, the moment a system is fed by
    exploitation and calls it “normal.” Nemesis is the correction that reality
    eventually demands.
  </p>
  <p>
    She teaches a hard kind of peace: the kind built on accountability. Not
    forgiveness performed for approval. Not silence traded for safety. Nemesis
    asks you to stop calling injustice “fate” and start recognizing it as a debt.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/nemesis-goddess/mythology"
      className="deity-link"
    >
      Explore Nemesis’ Mythic Origins →
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
        <Link href="/grimoire/11-elements/earth" className="deity-link">
          Earth
        </Link>
      </p>
    </div>
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/07-saturn"
                  className="deity-link"
                >
                  Saturn
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
                <Link href="/grimoire/03-chakras/01-root-chakra" className="deity-link">
                  Root
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
                <Link href="/grimoire/05-colors/11-grey" className="deity-link">
                  Grey
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/lead" className="deity-link">
                  Lead
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/obsidian"
                  className="deity-link"
                >
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/onyx" className="deity-link">
                  Onyx
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
                  href="/grimoire/07-crystals-stones/quartz/smoky-quartz"
                  className="deity-link"
                >
                  Smoky Quartz
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/wormwood" className="deity-link">
                  Wormwood
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
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
            Nemesis emerges in Greek tradition as the goddess of retribution and rightful
            balance — the force that answers hubris, excessive pride, and the belief that
            power can act without consequence. Where justice is law, Nemesis is the
            restoring hand that enforces it.
          </p>
          <p>
            She is often linked with the turning of fortune, the correction of arrogance,
            and the return of what was taken unjustly. Nemesis does not punish random
            people for random reasons. She is the embodiment of proportional return: what
            you set in motion will eventually meet you again.
          </p>
          <p>
            In the Grimoire, Nemesis is honored not as vengeance for entertainment, but as
            sacred consequence — the boundary of reality itself when it says, “Enough.”
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Nemesis governs retribution, accountability, the correction of imbalance,
            karmic return, the fall of arrogance, and the restoration of rightful order.
            She strengthens the part of you that stops accepting harm as inevitable.
          </p>
          <p>
            Her current supports justice work, banishment of abusive influence, return-to-sender
            protection, boundary enforcement, and the unglamorous, necessary act of naming
            what is true. Nemesis does not comfort you into denial. She stabilizes you
            into clarity.
          </p>
          <p>
            She also governs the difference between retaliation and restoration. With
            Nemesis, the goal is not chaos. The goal is balance.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Scales, measuring cords, boundary lines, mirrors that reflect without mercy,
            oaths, ledgers, thresholds, and the quiet weight of inevitability. Her symbols
            speak to proportion: what was taken, what is owed, what must be returned.
          </p>
          <p>
            Nemesis often arrives through the language of timing. Not instant gratification.
            Not dramatic spectacle. The slow, undeniable correction that comes when a pattern
            can no longer be sustained.
          </p>
        </section>

        {/* NEMESIS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Nemesis in Practice</h2>
          <p>
            Work with Nemesis when you need restoration: when an imbalance has been allowed
            to grow, when someone has benefited from harm without consequence, or when you
            are ready to stop carrying the cost of someone else’s choices.
          </p>
          <p>
            She responds to clean intention and honest accounting. Nemesis is not a tool for
            cruelty. If you call her current while your motive is ego, envy, or spectacle,
            you invite backlash from the very law you’re trying to wield.
          </p>
          <p>
            Her practice often begins inside you: reclaiming your standards, documenting the
            truth, enforcing the boundary once instead of a hundred times, and refusing to
            keep the peace at the expense of your dignity.
          </p>
        </section>

        {/* HOW TO KNOW IF NEMESIS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Nemesis Has Chosen You
          </h2>
          <p>
            If Nemesis has chosen you, your tolerance for imbalance becomes unbearable. You
            may feel a sudden refusal to excuse harmful behavior, a sharper awareness of who
            benefits from your silence, and an internal demand to stop “being the bigger
            person” when it really means being the quieter victim.
          </p>
          <p>
            Her presence often arrives as pattern-recognition that won’t turn off. You see the
            repeating cycle. You see the loophole someone keeps exploiting. You see the cost
            being passed to the same people over and over. And you feel compelled — not to
            explode — but to correct.
          </p>
          <p>
            Signs may show up through scales, numbers tied to timing, receipts, ledgers, legal
            themes, sudden accountability conversations, or repeated moments where you are asked
            to name the truth plainly. With Nemesis, life starts offering you opportunities to
            enforce what should have been enforced long ago.
          </p>
          <p>
            Most of all, if Nemesis has chosen you, you stop romanticizing outcomes. You start
            respecting consequences. You become willing to let the fallout happen — because
            you’re finally done preventing it.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Nemesis can be simple and deliberate: clean water set beside a written
            oath, a candle lit with a clear statement of restoration, or a small stone placed at
            your threshold as a marker of boundary. The power is not in theatrics — it is in
            precision.
          </p>
          <p>
            Acts of devotion are often lived: telling the truth once and refusing to retract it,
            ending enabling, honoring your own standards, and returning responsibility to its
            rightful owner. Nemesis honors the practitioner who stops making consequences their
            enemy.
          </p>
          <p>
            Devotion to Nemesis is choosing balance even when imbalance feels familiar. It is
            refusing the comfort of denial. It is walking forward with clean hands.
          </p>
        </section>

        {/* RETRIBUTION VS REVENGE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Retribution vs Revenge</h2>
          <p>
            Nemesis is not the goddess of impulsive revenge. Revenge seeks emotional relief.
            Retribution seeks restored order. One is reaction. The other is law.
          </p>
          <p>
            Her current asks you to aim. To be precise about what is owed. To remove yourself
            from the need to “win” and focus instead on what must be corrected so the cycle
            cannot repeat.
          </p>
          <p>
            When you work with Nemesis, the goal is not to become crueler. The goal is to become
            impossible to exploit.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Nemesis moves through the Corrector, the Judge, the Restorer, and the Boundary of
            Reality — not as roles to perform, but as forces that return life to proportion.
          </p>
          <p>
            In her highest expression, she is justice without ego: calm, clean, inevitable.
            She does not need to rage to be powerful. She simply refuses imbalance.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Nemesis’s shadow can appear when the desire for restoration becomes obsession, when
            accountability becomes control, or when you start hunting “fairness” in places where
            the real work is letting go. Correction can turn into fixation if you make it your
            identity.
          </p>
          <p>
            Her corrective wisdom is restraint. Not passivity — restraint. Balance is not created
            by endless punishment. Balance is created by clean boundaries, honest consequences,
            and the willingness to stop participating in the system that harms you.
          </p>
          <p>
            Balance with Nemesis is learning when to act and when to release. You do not have to
            chase every wrong. But you do have to stop protecting the wrong that keeps repeating.
          </p>
        </section>

        {/* NEMESIS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Nemesis in the Modern World</h2>
          <p>
            Today, Nemesis appears wherever people stop confusing accountability with cruelty. She
            lives in the moment someone tells the truth, documents the pattern, enforces the boundary,
            and refuses to be bribed back into silence with apologies that change nothing.
          </p>
          <p>
            Her current moves through systems too: the fall of unchecked power, the exposure of
            exploitation, the end of a dynamic that relied on people being afraid to speak. Nemesis
            does not promise comfort. She promises correction.
          </p>
          <p>
            When she is present, reality starts tightening around what is false until it either becomes
            honest — or it breaks.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Nemesis teaches that balance is not a wish — it is a practice. The world will offer you
            endless invitations to soften your standards, to call harm “misunderstanding,” to accept
            imbalance because confronting it is inconvenient. Nemesis asks you to stop cooperating with
            what you know is wrong.
          </p>
          <p>
            Let consequence be honest. Let accountability be clean. Let your boundaries be enforced the
            first time, not the fiftieth. You do not need to become cruel to protect yourself, but you
            do need to become consistent. You do need to stop rescuing people from the results of their
            choices.
          </p>
          <p>
            If Nemesis is walking with you, it is because you are ready to restore what has been tilted —
            in your life, in your relationships, in your own self-respect. Choose the standard you will
            live by. Hold it. And let the scale return to center.
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