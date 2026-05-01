// app/grimoire/08-deities/persephone-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Persephone" subtitle="Goddess of Spring">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/persephone/persephone.png"
              alt="Persephone"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              You can be both soft and sovereign.
              <br />
              The underworld knows.
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
    Persephone is the living threshold between bloom and bone. She is the
    goddess who carries spring in her hands and underworld sovereignty in
    her spine — proof that softness and power are not opposites.
  </p>
  <p>
    Her current is transformation through passage. Persephone teaches that
    becoming is not always gentle. Sometimes it is a descent. Sometimes it is
    a season you did not choose. And sometimes it is the moment you stop being
    defined by what happened to you and start being defined by what you claim.
  </p>
  <p>
    Persephone’s power is cyclical truth: what is buried is not gone. What is
    dormant is not dead. What is taken can become territory — and what returns
    can return crowned.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/persephone-goddess/mythology"
      className="deity-link"
    >
      Explore Persephone’s Mythic Origins →
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
                  href="/grimoire/03-chakras/02-sacral-chakra"
                  className="deity-link"
                >
                  Sacral
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
                <Link href="/grimoire/05-colors/09-purple" className="deity-link">
                  Purple
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/12-black" className="deity-link">
                  Black
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
                <Link
                  href="/grimoire/07-crystals-stones/moonstone"
                  className="deity-link"
                >
                  Moonstone
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
                  href="/grimoire/07-crystals-stones/obsidian"
                  className="deity-link"
                >
                  Obsidian
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/rhodonite"
                  className="deity-link"
                >
                  Rhodonite
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
                <Link href="/grimoire/14-herbs/rose" className="deity-link">
                  Rose
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/mint" className="deity-link">
                  Mint
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
            Persephone’s myth is one of the most enduring threshold stories in Greek
            tradition: maiden of spring, daughter of Demeter, seized into the
            underworld and remade as queen. Her tale holds both tenderness and terror
            — and the reality that transformation is not always consensual at the
            moment it begins.
          </p>
          <p>
            The pomegranate becomes the symbol of binding and belonging: the seed
            that marks the pact, the taste that changes the future. Persephone is the
            bridge between worlds, and her seasonal return becomes the mythic heartbeat
            of growth, harvest, decay, and renewal.
          </p>
          <p>
            In her story, the underworld is not only a place of death. It is a place of
            truth. Persephone’s power is that she can walk both realms — and still be
            herself.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Persephone governs spring, rebirth, liminality, initiation, descent, and
            the sovereignty that rises after survival. She rules the threshold between
            innocence and knowing, between the self you were and the self you become.
          </p>
          <p>
            Her current supports shadow integration, reclaiming lost power, healing
            around control and consent, and learning to hold softness without surrendering
            authority. Persephone teaches that you can be gentle and still be unmovable.
          </p>
          <p>
            She also governs cycles: grief and renewal, dormancy and bloom, endings that
            are not punishments but transitions. With Persephone, nothing is wasted — not
            even the dark.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Pomegranates, seeds, flowers emerging from black soil, torches, crowns, veils,
            gates, and the first green after winter. Her imagery is beauty with depth —
            a reminder that what looks delicate can hold immense power.
          </p>
          <p>
            Persephone speaks through seasons, through dreams, through sudden emotional
            clarity, and through the quiet moment you realize you will never return to
            the version of yourself that tolerated less.
          </p>
        </section>

        {/* PERSEPHONE IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Persephone in Practice</h2>
          <p>
            Work with Persephone when you are crossing a threshold: leaving an old identity,
            healing after violation or loss of agency, reclaiming desire, rebuilding self-worth,
            and learning how to be tender without being available to harm.
          </p>
          <p>
            She responds to honesty, devotion, and personal sovereignty. Persephone does not
            reward performative “healing” that avoids grief. She opens when you are willing
            to tell the truth about what you’ve endured — and what you refuse to endure again.
          </p>
          <p>
            Her work is often seasonal. Sometimes you are meant to descend, to rest, to integrate.
            And sometimes you are meant to rise. Persephone teaches you not to force the bloom —
            but also not to fear it.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/persephone-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF PERSEPHONE HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Persephone Has Chosen You
          </h2>
          <p>
            If Persephone has chosen you, your life begins to revolve around thresholds.
            You may experience endings that force you into a deeper self, or awakenings that
            make your old identity feel too small to inhabit.
          </p>
          <p>
            Her presence often arrives through themes of descent and return: grief that becomes
            wisdom, solitude that becomes sovereignty, boundaries that finally become non-negotiable.
            You may feel drawn to flowers and dark imagery together, to underworld symbolism, to seeds,
            to pomegranates, to the concept of becoming a queen of your own inner world.
          </p>
          <p>
            Signs can appear through seasonal synchronicities, repeating imagery of gates and keys,
            dream messages about crowns, underworld corridors, or gardens, and moments where you realize
            your softness is not weakness — it is choice.
          </p>
          <p>
            Most of all, if Persephone has chosen you, you stop confusing love with surrender. You begin
            building a life that honors your tenderness without sacrificing your authority.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Persephone can be symbolic and simple: pomegranate seeds offered with a vow,
            clean water, a candle lit beside flowers, or a small altar that holds both bloom and shadow.
            The power is in sincerity and intention, not spectacle.
          </p>
          <p>
            Acts of devotion can be non-material: honoring your boundaries, choosing your own desires,
            allowing grief to move without shame, and practicing self-respect as a daily ritual.
          </p>
          <p>
            Persephone honors those who refuse to abandon themselves in order to be loved. Her devotion
            is sovereignty practiced gently — and consistently.
          </p>
        </section>

        {/* QUEENSHIP AFTER DESCENT */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Queenship After Descent</h2>
          <p>
            Persephone teaches that innocence is not the highest virtue. Integrity is. You are allowed
            to be changed by what you’ve lived through — and still remain worthy of beauty, tenderness,
            and joy.
          </p>
          <p>
            Queenship is not a crown someone gives you. It is the moment you stop asking for permission
            to belong to yourself.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Persephone moves through the Maiden, the Initiate, the Queen, and the Bridge Between Worlds —
            not as stages you outgrow, but as currents you learn to hold at once.
          </p>
          <p>
            In her highest expression, she is softness with sovereignty: a heart that remains open without
            becoming unprotected, and a spirit that blooms without forgetting the truth it learned in the dark.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Persephone’s shadow can appear as stagnation in the underworld — living in grief as identity,
            romanticizing suffering, or refusing to reemerge after the lesson has been learned. Descent is
            sacred, but it is not meant to be endless.
          </p>
          <p>
            Her corrective wisdom is return. Bloom is not betrayal. Joy is not denial. You are allowed to rise
            without invalidating what happened in the dark.
          </p>
          <p>
            Balance with Persephone is honoring your seasons without getting trapped in one of them.
          </p>
        </section>

        {/* PERSEPHONE IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Persephone in the Modern World</h2>
          <p>
            Today, Persephone appears wherever people reclaim themselves after being defined by someone
            else’s control. She lives in survivors who choose tenderness without submission, in people who
            heal without erasing their history, and in anyone learning to be both soft and sovereign.
          </p>
          <p>
            Her current is present in boundary work, trauma recovery, identity reinvention, and the deep,
            quiet choice to stop abandoning yourself in the name of peace.
          </p>
          <p>
            Persephone reminds you that rebirth is not a performance. It is a practice.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Persephone teaches that you do not have to choose between softness and power. You can be
            tender and still be untouchable. You can love deeply and still have boundaries that do not
            bend. You can carry beauty and still be made of iron at the core.
          </p>
          <p>
            Let your seasons be honest. If you need to descend, descend with reverence. If you need to
            grieve, grieve without shame. If you need to rise, rise without apology. The underworld is not
            a punishment when it becomes a place of truth. It is initiation.
          </p>
          <p>
            Choose what you will no longer surrender. Choose the version of yourself that can hold both
            bloom and shadow without splitting in two. Persephone is not here to keep you innocent. She is
            here to make you whole — and to crown you with the kind of sovereignty that only comes from
            surviving and still choosing to grow.
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