// app/grimoire/08-deities/hades-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hades" subtitle="God of the Underworld">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hades/hades.png"
              alt="Hades"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              I do not punish the dead.
              <br />
              I keep what the living refuse to face.
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
    Hades is the sovereign of what lies beneath — the keeper of endings,
    thresholds, and the unacknowledged weight of truth. He is not a god of
    cruelty or punishment. He is the force of finality, containment, and
    consequence — the intelligence that ensures nothing escapes reckoning.
  </p>
  <p>
    His current is still and absolute. Hades governs what cannot be rushed,
    bargained with, or bypassed. He teaches that transformation does not
    occur through light alone — it occurs when descent is honored and
    avoided truths are faced without flinching.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/hades-god/mythology"
      className="deity-link"
    >
      Explore Hades’ Mythic Origins →
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/black" className="deity-link">
                  Black
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/gray" className="deity-link">
                  Gray
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/red" className="deity-link">
                  Red
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
                <Link
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/onyx"
                  className="deity-link"
                >
                  Onyx
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/myrrh" className="deity-link">
                  Myrrh
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cypress" className="deity-link">
                  Cypress
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/poppy" className="deity-link">
                  Poppy
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
            In Greek myth, Hades is the ruler of the Underworld — the unseen realm
            where all souls must pass. He is not a god of evil, but of order: the
            keeper of balance between life and death, ensuring that nothing meant
            to end continues to wander unfinished.
          </p>
          <p>
            His mythology is quiet, restrained, and absolute. Hades does not chase
            worship. He does not plead for recognition. His authority is inherent —
            rooted in inevitability, law, and the unalterable truth that all things
            return to the source.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Hades governs death, endings, inheritance, hidden wealth, deep truth,
            and the boundaries between worlds. His power reveals what is buried —
            emotionally, spiritually, psychologically — and brings it into conscious
            reckoning.
          </p>
          <p>
            He is especially potent during periods of loss, transition, shadow work,
            and irreversible change. Hades does not soften reality — he clarifies it.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Hades’ symbols include keys, darkness, iron gates, underground rivers,
            gemstones hidden beneath the earth, and the imagery of descent. His
            presence is often felt as gravity — a pull inward that demands honesty
            and stillness.
          </p>
        </section>

        {/* HADES IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Hades in Practice</h2>
  <p>
    Work with Hades when you are facing endings, grieving losses, confronting
    shadow material, or reclaiming power that was buried through avoidance
    or fear. He is essential for boundary work, ancestral reckoning, and
    deep psychological transformation.
  </p>
  <p>
    Hades teaches that some doors are meant to close — and that honoring
    closure is an act of respect, not failure.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/hades-god/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF HADES HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Hades Has Chosen You
  </h2>
  <p>
    If Hades has chosen you, avoidance stops working. What you buried —
    grief, truth, resentment, unclaimed power — begins to surface, not
    to punish you, but to be integrated.
  </p>
  <p>
    His presence often arrives through enforced stillness: pauses,
    endings, or moments where something is taken away so that you can
    see what actually remains. Silence becomes instructive.
  </p>
  <p>
    Signs may appear through dreams of descent, underground spaces,
    shadows, ancestral imagery, or a growing comfort with solitude
    and inner depth.
  </p>
  <p>
    Most of all, if Hades has chosen you, your life begins to demand
    honesty with finality. You are asked to stop lingering at doors
    that have already closed and to claim the authority that comes
    from accepting what is irrevocable.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offer Hades dark wine, clean water, iron tokens, or moments of silence
            given with respect. He is honored through truth-telling, grief honored
            without suppression, and the courage to sit with what is difficult
            instead of escaping it.
          </p>
          <p>
            Devotion to Hades is inward. It is lived through integrity, acceptance,
            and the refusal to lie to yourself about what has ended.
          </p>
        </section>

        {/* HADES VS PLUTO */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hades vs Pluto</h2>
          <p>
            Hades and Pluto are related but distinct. Hades represents the Greek
            mythic ruler of the dead — structured, restrained, and lawful. Pluto,
            in the Roman current, emphasizes wealth, power, and transformation
            through destruction and rebirth.
          </p>
          <p>
            Treat Hades as the keeper of finality and Pluto as the force of
            regeneration that follows it.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Hades moves through the Gatekeeper, the Sovereign of Endings, the Keeper
            of Truth, and the Silent Judge — not as roles to perform, but as currents
            of power. The Gatekeeper enforces boundaries. The Sovereign of Endings
            ensures closure. The Keeper of Truth reveals what cannot remain hidden.
          </p>
          <p>
            In his highest expression, Hades is integrity without compromise —
            authority that does not need to be loud.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            His shadow can appear as emotional isolation, rigidity, suppression,
            or fear of loss turned into control. When descent becomes avoidance
            of life rather than engagement with truth, the current distorts.
          </p>
          <p>
            Hades’ corrective wisdom is direct: face what has ended, and you will
            be free to live again.
          </p>
        </section>

        {/* HADES IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Hades in the Modern World</h2>
          <p>
            Today, Hades appears wherever someone chooses truth over denial. He
            lives in the therapist’s office, the grief ritual, the decision to end
            what no longer lives. His energy is present whenever silence is honored
            instead of filled.
          </p>
          <p>
            He reminds us that death is not the enemy of life — avoidance is.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Hades teaches that endings are not failures — they are necessities. What is buried is
    not erased; it is transformed, integrated, and given weight. His realm is not punishment,
    but truth without decoration.
  </p>
  <p>
    He asks you to look honestly at what you have avoided grieving, what you have refused
    to release, and what power you have hidden because it was inconvenient to hold. Descent
    is not weakness. It is courage.
  </p>
  <p>
    Walk with Hades when you are ready to honor closure: to end what must end, to claim what
    was taken through fear, and to stand firmly in the authority that comes from knowing
    your limits.
  </p>
  <p>
    His blessing arrives as depth and stability — a grounded sense of self that does not
    need approval, and a respect for boundaries that protects both the living and the dead.
    Through him, you learn that stillness can be power.
  </p>
  <p>
    Hades reminds you that the underworld is not a place to fear. It is a place to know.
    When you respect what lies beneath, you gain the strength to walk the surface without
    illusion.
  </p>
</section>

        {/* FOOTER LINKS (THREE LINKS, ORDER LOCKED) */}
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