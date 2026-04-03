// app/grimoire/08-deities/artemis-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Artemis" subtitle="Goddess of the Untamed">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/artemis/artemis.png"
              alt="Artemis"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Freedom is not distance — it is devotion to self.
              <br />
              The wild is not chaos — it is truth without permission.
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
    Artemis is sovereignty in its purest form — the self that cannot be bought,
    bent, or bargained with. She is the guardian of the untamed spirit, the
    protector of boundaries, and the fierce calm that rises when something
    sacred must be defended. Artemis does not ask you to be palatable. She
    asks you to be true.
  </p>
  <p>
    Her current restores instinct. It sharpens intuition, strengthens your “no,”
    and returns you to the part of you that knows how to stand alone without
    loneliness. Artemis is not cold — she is clear. Not distant — self-possessed.
    She teaches that freedom is not escape; it is alignment.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/artemis-goddess/mythology"
      className="deity-link"
    >
      Explore Artemis’ Mythic Origins →
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/green" className="deity-link">
                  Green
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/black" className="deity-link">
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
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/mugwort" className="deity-link">
                  Mugwort
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
                <Link href="/grimoire/14-herbs/juniper" className="deity-link">
                  Juniper
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
            In Greek myth, Artemis is the huntress and protector — a goddess of the
            wild places, the moonlit road, and the untouched grove. She moves beyond
            the walls of cities and beyond the expectations of society, belonging to
            herself first. Her myths carry themes of autonomy, protection, and the
            consequences of violating sacred boundaries.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Artemis governs independence, boundaries, wilderness, instinct, protection,
            and sacred space. She also holds guardianship over transitions of becoming —
            the thresholds between what was and what will be. Her gifts often arrive as
            clarity, self-trust, sharpened intuition, and the strength to walk away from
            what diminishes you.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Her imagery is moonlit and untamed: forests, arrows, the bow, the hunt,
            animal guardians, and the clean stillness of night. Artemis symbols speak
            to precision and protection — the ability to move through the world alert,
            aligned, and unowned.
          </p>
        </section>

      {/* ARTEMIS IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Artemis in Practice</h2>
  <p>
    Work with Artemis when you are reclaiming your autonomy: strengthening
    boundaries, leaving unhealthy dynamics, rebuilding self-trust, and returning
    to your instincts. Her current is excellent for protection and clarity —
    especially when you’ve been gaslit out of your own knowing.
  </p>
  <p>
    Artemis responds to honesty, discipline, and reverence for your own spirit.
    She does not respond well to performative purity, self-righteousness, or
    using boundaries as punishment. Her protection is clean — it’s meant to
    preserve truth, not create control.
  </p>
  <p>
    Approach her with a clear “why,” a clear “yes,” and a clear “no.” This is
    sovereignty work. If you want her blessings, be willing to stop abandoning
    yourself.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/artemis-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF ARTEMIS HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Artemis Has Chosen You
  </h2>
  <p>
    If Artemis has chosen you, your tolerance for intrusion disappears.
    You may suddenly feel protective of your time, body, energy, and
    inner world in a way you never have before. What once felt “normal”
    begins to feel invasive.
  </p>
  <p>
    Her presence often awakens through instinct. You start trusting your
    gut without over-explaining it. You may feel drawn to solitude, nature,
    movement, or silence — not as escape, but as restoration.
  </p>
  <p>
    Signs may appear through animals, especially deer, dogs, or wild
    creatures; through the moon, forests, or liminal natural spaces; and
    through moments where your body reacts before your mind can justify
    it.
  </p>
  <p>
    Most of all, if Artemis has chosen you, your life begins to demand
    self-loyalty. You are no longer willing to trade your truth for
    approval, your safety for belonging, or your instincts for comfort.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings for Artemis can be simple and nature-aligned: clean water, a white
            candle, a moment of silence under the night sky, or a respectful offering of
            herbs and scent. Modern devotion is just as powerful: a solo walk done as
            prayer, time spent in a quiet place to listen to yourself, or a boundary kept
            without apology.
          </p>
          <p>
            Artemis devotion is often non-material. She respects integrity. She honors the
            person who protects their peace, keeps their word to themselves, and chooses
            self-respect over approval.
          </p>
        </section>

        {/* ARTEMIS VS DIANA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Artemis vs Diana</h2>
          <p>
            Artemis and Diana are related, but not interchangeable. Artemis carries a
            distinctly Greek mythic texture — fierce, wild, protective, and deeply bound
            to autonomy and the untouched places of the world. Diana, in her Roman current,
            often leans more toward the structured guardianship of the hunt, the household,
            and the social role of protector within a wider cultural frame.
          </p>
          <p>
            If you work with both, keep them distinct. Treat Artemis as the untamed sovereignty
            of the wild — instinct and boundary — and Diana as the cultivated guardian —
            protection given form.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal{"\u00A0"} Expression
          </h2>
          <p>
            Artemis moves through the Huntress, the Protector, the Boundary-Setter, and the
            Lone Sovereign — not as roles to perform, but as currents of power. The Huntress
            pursues truth with precision. The Protector guards what is sacred. The
            Boundary-Setter ends what violates your spirit. The Lone Sovereign reminds you
            that you can belong to yourself and still be deeply loved.
          </p>
          <p>
            In her highest expression, Artemis is freedom with integrity — independence that
            doesn’t harden into isolation, and protection that doesn’t become punishment.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as rigidity, emotional distance, suspicion, or a refusal to
            receive — when “independence” becomes armor and boundaries become walls. When
            self-protection turns into self-exile, the current distorts.
          </p>
          <p>
            Artemis’s corrective wisdom is simple: let your boundaries stay clean, not cruel.
            Protect yourself, but don’t abandon softness. You can be sovereign and still be
            connected. You can be cautious and still be open — when it’s earned.
          </p>
        </section>

        {/* ARTEMIS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Artemis in the Modern World</h2>
          <p>
            Today, Artemis shows up wherever someone stops compromising their truth to be chosen.
            She lives in the moment you leave what disrespects you, the moment you listen to your
            instincts without needing proof, and the moment you choose self-respect over familiar
            suffering.
          </p>
          <p>
            Her energy also lives in quiet discipline: solitude used for restoration, not avoidance;
            movement that reconnects you to your body; and devotion to a life that feels safe on the
            inside, not just impressive on the outside.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Artemis teaches that sovereignty begins the moment you stop betraying your own
    instincts. Her path is not about isolation — it is about self-trust so strong
    that no one else gets to define your boundaries for you.
  </p>
  <p>
    She reminds you that protection is not aggression and independence is not
    punishment. True autonomy is clean, quiet, and unwavering. It does not need
    justification to exist.
  </p>
  <p>
    Walking with Artemis asks you to listen to your body, honor your inner signals,
    and leave situations that require you to shrink. The forest is wide — you are
    not meant to cage yourself to survive.
  </p>
  <p>
    Her blessing arrives as instinctual clarity: knowing when to stay, when to move,
    and when to draw the line without guilt. With her, boundaries become sacred
    architecture, not walls built from fear.
  </p>
  <p>
    Remember this truth: you are allowed to choose yourself without apology. Trust
    what you sense. Guard what is sacred. And let your life reflect the freedom you
    refuse to abandon.
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