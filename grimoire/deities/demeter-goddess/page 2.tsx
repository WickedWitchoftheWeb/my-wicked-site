// app/grimoire/08-deities/demeter-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Demeter" subtitle="Goddess of the Harvest">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/demeter/demeter.png"
              alt="Demeter"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Nourishment is not softness — it is power that sustains.
              <br />
              Growth is not always gentle — it is devotion made real.
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
    Demeter is the force of nourishment that makes life possible — the sacred
    intelligence of growth, harvest, and the steady devotion of the earth.
    She is not only “mother.” She is sustainer: the one who feeds bodies,
    tends roots, and teaches what it means to build a life that can last.
  </p>
  <p>
    Her current restores rhythm. It brings you back to the basics: rest, food,
    care, seasons, boundaries, and consistency. Demeter teaches that abundance
    is not a miracle you beg for — it is something you cultivate through
    attention, patience, and aligned devotion.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/demeter-goddess/mythology"
      className="deity-link"
    >
      Explore Demeter’s Mythic Origins →
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
      </p>
    </div>
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">Moon</p>
            </div>

            {/* CHANGED: Day is now a link + matches the Days-of-the-week route style */}
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
                <Link href="/grimoire/05-colors/green" className="deity-link">
                  Green
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/brown" className="deity-link">
                  Brown
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/gold" className="deity-link">
                  Gold
                </Link>
              </p>
            </div>

            {/* CHANGED: Metals -> Metal + (optional) link, matching Aphrodite style */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/15-metals/copper" className="deity-link">
                  Copper
                </Link>
              </p>
            </div>

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/07-crystals-stones/green-aventurine"
                  className="deity-link"
                >
                  Green Aventurine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/moss-agate"
                  className="deity-link"
                >
                  Moss Agate
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

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) + & instead of / */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/wheat" className="deity-link">
                  Wheat
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/oat" className="deity-link">
                  Oat
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/poppy" className="deity-link">
                  Poppy
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/chamomile"
                  className="deity-link"
                >
                  Chamomile
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
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
            In Greek myth, Demeter is the goddess of agriculture, harvest, and the life
            that rises from the soil. Her most famous story is bound to Persephone —
            a myth that carries the spiritual logic of seasons: loss and return, descent
            and emergence, winter and spring. Demeter’s grief becomes a cosmic event,
            reminding us that nourishment is not guaranteed — it is sacred.
          </p>
          <p>
            Her mythology teaches that love can change the world — not as sentiment, but
            as force. When Demeter withdraws her gifts, the earth responds. When she returns
            to rhythm, life returns with her.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Demeter governs nourishment, growth, harvest, abundance, fertility, and the
            sacred cycles of nature. Her gifts arrive as stability, rootedness, stronger
            self-care, and the ability to cultivate what you desire through consistency.
            She is especially potent when your life needs grounding: routines, health,
            home energy, finances, and the slow-building work that creates lasting results.
          </p>
          <p>
            She also holds the spiritual law of seasons: understanding when to plant,
            when to tend, when to rest, and when to reap.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Demeter’s symbols include grain, wheat, cornucopia, harvest sheaves, poppies,
            and the imagery of fertile fields. Her presence is often felt as warmth and
            steadiness — the sense of being cared for by something ancient and real.
          </p>
        </section>

       {/* DEMETER IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Demeter in Practice</h2>
  <p>
    Work with Demeter when you want to restore stability and nourishment: building
    routines, healing your relationship with food and body, creating abundance in
    your home, cultivating long-term goals, and restoring sacred rest. She is
    excellent for grounding anxiety and strengthening the foundation of your life.
  </p>
  <p>
    Demeter responds to devotion, consistency, and respect for your own needs.
    She does not respond well to neglect disguised as “strength,” or to grinding
    your spirit into productivity. Her abundance comes through care — not through
    self-violation.
  </p>
  <p>
    Approach her with a clear intention and a willingness to tend it. Demeter’s
    magic is not instant — it is reliable.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/demeter-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF DEMETER HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Demeter Has Chosen You
  </h2>
  <p>
    If Demeter has chosen you, your body becomes impossible to ignore. You may
    suddenly feel called to rest, eat differently, slow down, or rebuild daily
    rhythms that were previously neglected. Burnout stops feeling normal.
  </p>
  <p>
    Her presence often arrives through caretaking impulses — not only toward
    others, but toward yourself. You may feel drawn to cooking, gardening,
    nesting, organizing, or creating a sense of safety and continuity where
    chaos once lived.
  </p>
  <p>
    Signs may appear through food, harvest imagery, cycles of growth and rest,
    dreams involving homes or children, or a growing discomfort with environments
    that drain rather than sustain you.
  </p>
  <p>
    Most of all, if Demeter has chosen you, your life begins to reward patience.
    When you tend what matters consistently, abundance grows quietly. When you
    neglect yourself or rush the process, the imbalance becomes immediately
    visible — not as punishment, but as instruction.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Traditional offerings can include bread, grains, fruit, honey, clean water,
            or a candle lit in gratitude. Modern offerings can be just as powerful: a
            meal cooked with care, a garden tended, a home cleaned as devotion, or a
            promise kept to nourish yourself instead of neglecting yourself.
          </p>
          <p>
            Devotion to Demeter is often lived through care: resting when you need rest,
            feeding yourself what restores you, and treating your life like something
            worth tending.
          </p>
        </section>

        {/* DEMETER VS CERES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Demeter vs Ceres</h2>
          <p>
            Demeter and Ceres are related, but not interchangeable. Demeter carries a
            distinctly Greek mythic texture — the seasonal grief and return, the deep
            maternal force that can alter the world’s rhythm. Ceres, in the Roman current,
            often emphasizes agriculture, civic nourishment, and the structured role of
            food, grain, and provision within society.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Demeter as the sacred cycle
            of loss and return — nourishment as emotional and spiritual law — and Ceres as
            the cultivated provider — nourishment expressed through structure and culture.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Archetypal Expression</h2>
          <p>
            Demeter moves through the Nurturer, the Gardener, the Provider, and the Keeper
            of Seasons — not as roles to perform, but as currents of power. The Nurturer
            restores life-force. The Gardener tends what is growing. The Provider creates
            stability. The Keeper of Seasons teaches timing: when to act, when to wait,
            when to rest, and when to harvest.
          </p>
          <p>
            In her highest expression, Demeter is devotion that sustains — love that feeds,
            boundaries that protect, and care that creates abundance.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as overgiving, control through caretaking, fear of loss,
            or neglecting the self in the act of tending everyone else. When nourishment
            becomes obligation and love becomes depletion, the current distorts.
          </p>
          <p>
            Demeter’s corrective wisdom is simple: care must include you. Nourishment is
            not something you owe the world at your own expense. Your needs are part of
            the harvest. Your rest is part of the ritual.
          </p>
        </section>

        {/* DEMETER IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Demeter in the Modern World</h2>
          <p>
            Today, Demeter appears wherever someone chooses sustainable living over constant
            depletion. She lives in meal prep as devotion, rest as sacred practice, and the
            decision to build a life that supports the body and spirit. Her energy is also
            present in community care — the kind that strengthens people without rescuing them.
          </p>
          <p>
            She reminds us that abundance is not only money or manifestation — it is having
            enough: enough energy, enough safety, enough support, enough nourishment to live.
          </p>
        </section>

      {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Demeter teaches that nourishment is not optional — it is the foundation of life.
    Her power lives in tending what sustains you, honoring cycles of growth and rest,
    and recognizing that care is a form of devotion.
  </p>
  <p>
    She asks you to look honestly at where you have been neglecting yourself in the name
    of endurance, productivity, or strength. What is starved will eventually wither,
    no matter how hard you push it.
  </p>
  <p>
    Walk with Demeter when you are ready to rebuild stability through consistency — to
    feed your body, protect your energy, and cultivate abundance patiently rather than
    urgently. Her magic is steady, not rushed.
  </p>
  <p>
    Her blessing arrives as grounded abundance: routines that hold you, resources that
    grow over time, and a sense of safety rooted in self-care rather than control. Through
    her, you learn that rest is not weakness — it is wisdom.
  </p>
  <p>
    Demeter reminds you that growth follows care. Tend what matters. Honor your seasons.
    Let nourishment be the law that guides your life.
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