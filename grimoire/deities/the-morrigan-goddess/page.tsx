// app/grimoire/08-deities/the-morrigan-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Morrigan" subtitle="Goddess of Sovereignty">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/the-morrigan/the-morrigan.png"
              alt="The Morrigan"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              You don’t earn sovereignty by surviving.
              <br />
              You earn it by choosing yourself.
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
    The Morrigan is sovereignty with teeth — the force that refuses submission,
    refuses false peace, and refuses the version of you that keeps bargaining
    with what diminishes you. She is not gentle comfort. She is the moment
    you stop asking permission to be whole.
  </p>
  <p>
    Her power is a blend of battle and prophecy: the ability to see what is
    coming, to name what is true, and to choose the path that protects your
    future even when it costs you your present attachments.
  </p>
  <p>
    The Morrigan teaches that destiny is not something that happens to you.
    It is something you participate in. When you claim your sovereignty, you
    stop living like life is a verdict and start living like it is a vow.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/the-morrigan-goddess/mythology"
      className="deity-link"
    >
      Explore The Morrigan’s Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/05-mars"
                  className="deity-link"
                >
                  Mars
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Day</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/22-timing/days-of-the-week/03-tuesday"
                  className="deity-link"
                >
                  Tuesday
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
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/02-red" className="deity-link">
                  Red
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/08-indigo" className="deity-link">
                  Indigo
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/iron" className="deity-link">
                  Iron
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
                  href="/grimoire/07-crystals-stones/garnet"
                  className="deity-link"
                >
                  Garnet
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/bloodstone"
                  className="deity-link"
                >
                  Bloodstone
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
                <Link href="/grimoire/14-herbs/yarrow" className="deity-link">
                  Yarrow
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/hawthorn"
                  className="deity-link"
                >
                  Hawthorn
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
            The Morrigan emerges from Irish myth as a goddess of war, fate, prophecy,
            and sovereignty — a presence that does not merely witness conflict, but
            reveals what conflict exposes. She is often associated with the battlefield,
            not as spectacle, but as truth: the place where illusions die.
          </p>
          <p>
            Her mythology is layered and complex, sometimes appearing as a single
            goddess and sometimes as a triadic current. Across these stories, one
            theme remains consistent: The Morrigan is power that tests what you
            claim — and demands that you live it.
          </p>
          <p>
            She is known for shapeshifting and for omen-bearing imagery, especially
            through birds and the language of signs. Her mythic role is not to comfort
            a person through transformation — it is to initiate it.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            The Morrigan governs sovereignty, battle-readiness, prophecy, fate,
            boundary enforcement, and the transformation that occurs when you stop
            living as a compromise. She strengthens the part of you that can choose
            yourself without apology.
          </p>
          <p>
            Her current supports protection, banishing, cord-cutting, truth-telling,
            strategic courage, and the ability to walk away from what is beneath your
            standards — even when your nervous system begs you to stay familiar.
          </p>
          <p>
            She also governs the power of omen and pattern: the skill of reading what
            is happening beneath the narrative, and responding to truth instead of hope.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Battlefields, storm skies, black birds, spears, shields, blood as consecration,
            and the feeling of being watched by something ancient and unimpressed. Her
            symbolism is not decorative — it is diagnostic.
          </p>
          <p>
            The Morrigan speaks through omens that arrive with weight: repeated signs,
            sudden clarity, dreams that feel like warnings, and moments where your instinct
            becomes sharper than your doubt.
          </p>
        </section>

        {/* THE MORRIGAN IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Morrigan in Practice</h2>
          <p>
            Work with The Morrigan when you need your spine back: reclaiming your authority,
            cutting off cycles that keep returning, enforcing boundaries that you keep
            “understanding” your way out of, and choosing the version of your life that
            requires integrity.
          </p>
          <p>
            She responds to courage, honesty, and follow-through. The Morrigan does not
            reward performative darkness or chaotic aggression. She answers when your power
            is clean — when you are willing to protect your future more than you protect
            someone else’s comfort.
          </p>
          <p>
            This is sovereignty work. If you call her, be prepared to stop negotiating with
            what you already know is wrong. The Morrigan does not whisper the truth. She
            makes it unavoidable.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/the-morrigan-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF THE MORRIGAN HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if The Morrigan Has Chosen You
          </h2>
          <p>
            If The Morrigan has chosen you, your life starts removing your excuses.
            You may feel a sudden intolerance for weakness disguised as “kindness” and
            situations where you keep abandoning yourself to keep the peace.
          </p>
          <p>
            Her presence often arrives as sharpened perception: you see the pattern,
            you see the cost, you see the truth — and you cannot unsee it. You may feel
            pulled toward omen work, protective magic, or a deeper relationship with
            your intuition that demands you act on what you know.
          </p>
          <p>
            Signs can appear through repeated bird symbolism, storm imagery, themes of
            battle and sovereignty, dreams that feel like instructions, or moments where
            you are confronted with a choice that cannot be postponed.
          </p>
          <p>
            Most of all, if The Morrigan has chosen you, your life begins rewarding
            courage that is lived. When you choose yourself cleanly, your path clears.
            When you waver, the same lesson returns until you stop treating fate like
            a suggestion.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to The Morrigan should be direct and respectful: clean water,
            a candle lit with a vow, a written commitment to truth, or time spent
            training your mind and body as an act of devotion. The offering is not
            aesthetic — it is sincerity.
          </p>
          <p>
            Acts of devotion are lived: telling the truth the first time, walking away
            when you know you should, protecting your energy, and refusing to return to
            what keeps breaking you.
          </p>
          <p>
            The Morrigan honors strength that can be repeated. If you want her current,
            become a person who does not betray themselves to avoid discomfort.
          </p>
        </section>

        {/* SOVEREIGNTY AS A VOW */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Sovereignty as a Vow</h2>
          <p>
            The Morrigan teaches that sovereignty is not ego. It is responsibility.
            It is the decision to govern your own life — your boundaries, your standards,
            your choices — instead of outsourcing your power to fear, approval, or hope.
          </p>
          <p>
            When you live sovereign, your magic stops being a wish and becomes a command.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            The Morrigan moves through the Sovereign, the War-Queen, the Prophet, and
            the Boundary-Keeper — not as costumes, but as currents that restore authority
            to the self.
          </p>
          <p>
            In her highest expression, she is truth with courage: the ability to see what
            is real, choose what is right, and live as if your life belongs to you.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            The Morrigan’s shadow can appear as obsession with battle, constant vigilance,
            or mistaking hardness for strength. When sovereignty becomes isolation and
            defense becomes identity, the heart closes and the spirit calcifies.
          </p>
          <p>
            Her corrective wisdom is clean war: fight the right thing. Protect what is
            sacred. End what is harmful. Do not swing at shadows. The Morrigan teaches
            precision — power that does not waste itself.
          </p>
          <p>
            Balance with The Morrigan is learning when to draw the blade and when to set
            it down — choosing courage without becoming consumed by conflict.
          </p>
        </section>

        {/* THE MORRIGAN IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Morrigan in the Modern World</h2>
          <p>
            Today, The Morrigan appears wherever people reclaim their autonomy: leaving
            abusive dynamics, ending cycles of self-betrayal, protecting their peace,
            and choosing a life that matches their standards.
          </p>
          <p>
            Her current lives in the person who stops calling survival “strength” and
            starts building a future that does not require constant endurance. She
            teaches that prophecy is not only seeing what’s coming — it is choosing
            differently so what’s coming can change.
          </p>
          <p>
            The Morrigan reminds you: your life is yours. Act like it.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            The Morrigan teaches that sovereignty is the bravest kind of love — the love
            that refuses to abandon itself. Not in the name of loyalty, not in the name
            of hope, not in the name of being “understanding.” She asks you to tell the
            truth about what something costs you.
          </p>
          <p>
            Let your omens be instructions, not entertainment. Let your intuition become
            a standard, not a suggestion. If a pattern keeps returning, it is not because
            you are cursed — it is because you have not changed the agreement you keep
            making with it.
          </p>
          <p>
            Choose the version of you that is willing to act. Choose the boundary that
            ends the cycle. Choose the future that requires integrity. Then live like your
            life belongs to you — because it does. The Morrigan is not here to make you
            fearless. She is here to make you sovereign.
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