// app/grimoire/08-deities/athena-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Athena" subtitle="Goddess of Wisdom">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/athena/athena.png"
              alt="Athena"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Wisdom is not softness — it is precision.
              <br />
              Power is not noise — it is strategy made sacred.
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
    Athena is the mind sharpened into sovereignty — the force of wisdom that
    does not fold under pressure. She is strategy, discernment, and the calm
    authority that comes from seeing clearly. Athena is not knowledge for its
    own sake; she is intelligence in service of alignment. She teaches you how
    to think like a ruler: not reactive, not panicked — precise.
  </p>
  <p>
    Her current restores composure. It helps you step out of emotional chaos
    and into clean perception. Athena doesn’t remove feeling — she trains it.
    She shows you how to lead yourself, how to choose what is true over what is
    loud, and how to build a life that holds up under consequence.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/athena-goddess/mythology"
      className="deity-link"
    >
      Explore Athena’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/air" className="deity-link">
          Air
        </Link>
      </p>
    </div>
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/09-mercury"
                  className="deity-link"
                >
                  Mercury
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/04-wednesday"
                  className="deity-link"
                >
                  Wednesday
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
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
                <Link href="/grimoire/15-metals/bronze" className="deity-link">
                  Bronze
                </Link>
              </p>
            </div>

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/sodalite"
                  className="deity-link"
                >
                  Sodalite
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
                  href="/grimoire/07-crystals-stones/clear-quartz"
                  className="deity-link"
                >
                  Clear Quartz
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) + & instead of / */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/olive" className="deity-link">
                  Olive
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/rosemary" className="deity-link">
                  Rosemary
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/sage" className="deity-link">
                  Sage
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
            In Greek myth, Athena is born in an extraordinary way — emerging fully formed,
            armored, and radiant with intelligence. She becomes the goddess of wisdom and
            strategic war, associated with governance, craft, law, and the civilizing force
            of reason. Her myths often center on judgment, justice, skill, and the power of
            wise leadership over impulsive reaction.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Athena governs wisdom, strategy, discernment, justice, skill, and protected
            intelligence. Her gifts appear as clarity, mental discipline, stronger judgment,
            and the ability to choose actions that create long-term stability. She is
            especially potent when you are building something — a business, a life, a plan —
            and need your mind to be your ally, not your enemy.
          </p>
          <p>
            She also strengthens discernment in conflict: knowing what battles to engage,
            what to ignore, and how to win without losing yourself.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Athena’s symbols include the owl, the olive tree, armor, shields, and the
            imagery of the city — structured power, cultivated wisdom, and skill made
            visible. Her presence often feels like composure: the sense that you can
            think clearly even when emotions run high.
          </p>
        </section>

      {/* ATHENA IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Athena in Practice</h2>
  <p>
    Work with Athena when you need strategy, clarity, and wise action: planning,
    decision-making, leadership, conflict resolution, study, and building long-term
    stability. She is excellent for business and governance energy — the ability
    to create structure without losing soul.
  </p>
  <p>
    Athena responds to integrity, discipline, and honest effort. She does not respond
    well to shortcuts, ego-driven power plays, or using “logic” as a weapon against
    emotion. Her wisdom is balanced — it includes truth, consequence, and fairness.
  </p>
  <p>
    Approach her with a clear question and a willingness to act responsibly. Athena
    does not give permission to avoid accountability — she gives you the mind to meet
    it.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/athena-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF ATHENA HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Athena Has Chosen You
  </h2>
  <p>
    If Athena has chosen you, confusion begins to feel intolerable. You may find
    yourself craving order, clarity, and competence — not to control others, but
    to stand firmly in your own authority. Chaos loses its appeal.
  </p>
  <p>
    Her presence often awakens through the mind: a desire to learn, plan, refine,
    and think several steps ahead. You may feel called to lead, advise, teach, or
    make decisions that affect more than just yourself.
  </p>
  <p>
    Signs may appear through owls, strategic opportunities, sudden clarity during
    problem-solving, or moments where emotion and logic finally align instead of
    competing.
  </p>
  <p>
    Most of all, if Athena has chosen you, your life begins to demand responsibility.
    You are asked to act with foresight, fairness, and discipline — to choose the
    long game over the easy win, and wisdom over ego.
  </p>
</section>
        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings can include olive oil, a white candle, clean water, or an
            act of study and skill-building done as devotion. Modern offerings can be just as
            powerful: time spent learning, a plan written with sincerity, a promise kept, or
            a decision made with integrity.
          </p>
          <p>
            Athena devotion is often lived through excellence. She respects the person who
            trains their mind, refines their skill, and chooses wisdom over reaction — not
            because they are cold, but because they are committed to building something real.
          </p>
        </section>

        {/* ATHENA VS MINERVA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Athena vs Minerva</h2>
          <p>
            Athena and Minerva are related, but not interchangeable. Athena carries a distinctly
            Greek mythic texture — wisdom woven with strategic force, civic responsibility, and
            the sharp discernment of leadership. Minerva, in her Roman current, often emphasizes
            craft, intellect, and cultural refinement — the protected mind within a structured
            societal role.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Athena as the strategist and
            protector of wise governance, and Minerva as the cultivated mind of skill and study
            expressed through cultural form.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Athena moves through the Strategist, the Judge, the Scholar, and the Sovereign —
            not as roles to perform, but as currents of power. The Strategist sees the whole
            board. The Judge weighs truth and consequence. The Scholar refines the mind through
            skill. The Sovereign leads the self with integrity.
          </p>
          <p>
            In her highest expression, Athena is calm power — intelligence that protects rather
            than dominates, and wisdom that creates stability without oppression.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as emotional suppression, arrogance, over-analysis, or using
            intelligence to avoid vulnerability. When “being right” becomes more important than
            being aligned, the current distorts.
          </p>
          <p>
            Athena’s corrective wisdom is simple: let the mind serve truth, not ego. Clarity is
            sacred, but so is empathy. Strategy is powerful, but it must answer to integrity.
            Wisdom without compassion becomes cruelty dressed as logic.
          </p>
        </section>

        {/* ATHENA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Athena in the Modern World</h2>
          <p>
            Today, Athena appears wherever someone chooses long-term stability over short-term
            reaction. She lives in thoughtful leadership, clear decision-making, ethical strategy,
            and the disciplined pursuit of mastery. She also lives in healthy discernment: knowing
            when to speak, when to silence, and when to act.
          </p>
          <p>
            Her energy reminds us that wisdom is not passive. It is an active devotion to reality —
            to what works, what lasts, and what is true.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Athena teaches that wisdom is not passive knowing — it is applied intelligence.
    Insight means nothing if it is not carried into action with integrity. She asks
    you to think clearly, choose deliberately, and stand behind what you build.
  </p>
  <p>
    Her guidance sharpens the mind without severing the heart. Strategy is not
    manipulation. Logic is not cruelty. True wisdom integrates reason, ethics, and
    responsibility into a single, coherent path.
  </p>
  <p>
    When you walk with Athena, you are asked to grow up in your power. No shortcuts.
    No excuses. No hiding behind instinct when accountability is required. She offers
    clarity, but she expects follow-through.
  </p>
  <p>
    Her blessing arrives as steadiness: the calm that comes from knowing why you chose
    what you chose, and the confidence to defend it without domination or fear. With
    Athena, intelligence becomes sovereignty.
  </p>
  <p>
    Remember this teaching: wisdom is not what you know — it is how cleanly you live
    what you know. Let your choices reflect your values. Let your mind serve truth.
    And let your actions honor the strategy of your soul.
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