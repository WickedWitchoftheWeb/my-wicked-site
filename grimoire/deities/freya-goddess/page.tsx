// app/grimoire/08-deities/freya-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Freya" subtitle="Goddess of Passion">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/freya/freya.png"
              alt="Freya"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Desire is not weakness — it is the compass of power.
              <br />
              And sovereignty means wanting without surrendering yourself.
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
    Freya is the sovereign flame of desire — not the kind that begs, but the kind
    that chooses. She is beauty with teeth, love with boundaries, pleasure that
    does not apologize, and power that refuses to be diluted to make others
    comfortable.
  </p>
  <p>
    She carries the dual current of devotion and battle-readiness: the tenderness
    that heals, and the ferocity that protects what is sacred. Freya teaches that
    you can be soft and unstoppable in the same breath — and that the deepest
    magic begins when you stop bargaining with your own worth.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/freya-goddess/mythology"
      className="deity-link"
    >
      Explore Freya’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/fire" className="deity-link">
          Fire
        </Link>
        ,{" "}
        <Link href="/grimoire/11-elements/air" className="deity-link">
          Air
        </Link>
      </p>
    </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Planetary Association</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/02-astrology/02-planets/03-venus"
                  className="deity-link"
                >
                  Venus
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
                ,{" "}
                <Link
                  href="/grimoire/03-chakras/04-heart-chakra"
                  className="deity-link"
                >
                  Heart
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/gold" className="deity-link">
                  Gold
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/pink" className="deity-link">
                  Pink
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/red" className="deity-link">
                  Red
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Metal</h3>
              <p className="zodiac-attr-value">Gold</p>
            </div>

            {/* ORDER UPDATE: Crystals & Stones above Plants & Herbs */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Crystals & Stones</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/07-crystals-stones/amber" className="deity-link">
                  Amber
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/rose-quartz"
                  className="deity-link"
                >
                  Rose Quartz
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/carnelian"
                  className="deity-link"
                >
                  Carnelian
                </Link>
              </p>
            </div>

            {/* CHANGED: Plants & Herbs (merged Scents + Herbs) */}
            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/14-herbs/rose" className="deity-link">
                  Rose
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/jasmine" className="deity-link">
                  Jasmine
                </Link>
                ,{" "}
                <span>Honey</span>
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
            Freya is a major goddess in Norse tradition, associated with love, desire,
            beauty, wealth, and the practice of seiðr — a form of magic tied to fate,
            trance, and spiritual influence. She is remembered as both radiant and
            formidable: a goddess of attraction and sovereignty, but also of battle,
            choice, and power.
          </p>
          <p>
            Her myths hold a truth many forget: love is not only tenderness — it is a
            force that can move worlds. Freya embodies the sacred authority to want, to
            claim, to refuse, and to transform.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Freya governs love, desire, sensuality, beauty, self-worth, and the magnetic
            current that draws what is aligned. She strengthens confidence, pleasure, and
            the ability to receive — not as passivity, but as power that knows it is
            worthy.
          </p>
          <p>
            She also holds the warrior edge of sovereignty: protection, courage, and the
            capacity to choose yourself without guilt. Freya supports boundary work,
            enchantment, glamour magic, confidence building, and any path where the heart
            must stay open without becoming naïve.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Freya’s symbols include the cat, falcon feathers, amber, and gold — imagery
            that speaks to radiant power that is not decoration, but declaration. Her
            presence often feels like warmth in the chest, clarity in desire, and the
            return of personal magnetism after a period of dimming.
          </p>
        </section>

{/* FREYA IN PRACTICE */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Freya in Practice</h2>
  <p>
    Work with Freya when you are reclaiming your worth, rebuilding confidence, or
    learning to receive without chasing. She is potent for love magic rooted in
    sovereignty, for glamour and attraction work, and for strengthening the kind
    of charisma that comes from self-respect.
  </p>
  <p>
    Freya also supports those stepping into power after heartbreak, betrayal, or
    self-abandonment. Her lesson is clean: you do not have to shrink to be loved.
    You do not have to beg to be chosen.
  </p>
  <p>
    <Link
      href="/grimoire/08-deities/freya-goddess/rituals"
      className="deity-link"
    >
      Rituals →
    </Link>
  </p>
</section>

{/* HOW TO KNOW IF FREYA HAS CHOSEN YOU */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">
    How to Know if Freya Has Chosen You
  </h2>
  <p>
    If Freya has chosen you, your relationship with worth begins to shift.
    You may suddenly feel unwilling to accept love, attention, or opportunities
    that require you to diminish yourself. What once felt “romantic” may start
    to feel transactional or hollow.
  </p>
  <p>
    Her presence often awakens magnetism — not performance, but resonance.
    You may notice people responding to you differently as you stop chasing
    approval and start honoring your own value.
  </p>
  <p>
    Signs may appear through symbols of gold, cats, beauty, sensual pleasure,
    or moments where desire returns without desperation. Attraction feels
    grounded rather than frantic.
  </p>
  <p>
    Most of all, if Freya has chosen you, your life begins to reward self-worth.
    When you choose yourself, doors open. When you beg, bargain, or shrink,
    the current withdraws — not as rejection, but as correction.
  </p>
</section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offer Freya honey, flowers, beauty made with intention, jewelry, or a candle
            lit in devotion to your own worth. She is honored by acts of self-respect:
            leaving what dishonors you, speaking truth clearly, and treating your desire
            as sacred rather than shameful.
          </p>
          <p>
            Devotion to Freya can be lived through embodiment: tending your body, honoring
            your pleasure, and making choices that align your life with your value.
          </p>
        </section>

        {/* FREYA VS FRIGG */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Freya vs Frigg</h2>
          <p>
            Freya and Frigg are both powerful Norse goddesses, but they are not
            interchangeable. Freya carries the current of desire, sovereignty, beauty,
            and seiðr — the magic of fate, trance, and influence — alongside her warrior
            edge and her right to choose.
          </p>
          <p>
            Frigg is often associated with queenship, marriage, motherhood, and the
            protective intelligence of the household and lineage. If you work with both,
            keep them distinct: treat Freya as devotion with teeth — desire and power
            claimed — and Frigg as the steady authority of sacred responsibility and
            protected bonds.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Archetypal {"\u00A0"} Expression</h2>
          <p>
            Freya moves through the Lover, the Sovereign, the Enchantress, and the
            Warrior-Heart — not as roles to perform, but as currents of power. The Lover
            restores pleasure as life-force. The Sovereign teaches boundaries and
            self-worth. The Enchantress opens the channel of glamour and influence. The
            Warrior-Heart protects what is sacred without closing the heart.
          </p>
          <p>
            In her highest expression, Freya is magnetism without hunger — desire guided
            by dignity, and love that never requires self-abandonment.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Her shadow can appear as obsession, power-struggles in love, validation
            seeking, or using charm as armor. When desire becomes bargaining and
            sovereignty becomes domination, the current distorts.
          </p>
          <p>
            Freya’s corrective wisdom is simple: want what you want — but do not sell
            yourself to get it. Let your desire be sacred information, not a leash. Hold
            your boundaries, keep your dignity, and let love be alignment rather than
            pursuit.
          </p>
        </section>

        {/* FREYA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Freya in the Modern World</h2>
          <p>
            Today, Freya appears wherever someone stops begging to be chosen and starts
            choosing themselves. She lives in confidence rooted in self-respect, pleasure
            without shame, and attraction that comes from alignment rather than effort.
          </p>
          <p>
            Her current is also present in the reclamation of the feminine as power:
            softness with boundaries, beauty with authority, and the refusal to dilute
            yourself to make others comfortable.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Freya teaches that worth is not something to prove — it is something to remember.
    Her power lives in self-possession, in the ability to desire without desperation
    and to receive without shrinking.
  </p>
  <p>
    She asks you to examine where you have confused longing with lack, and where you
    have mistaken pursuit for love. Attraction that is rooted in sovereignty does not
    chase — it draws.
  </p>
  <p>
    Walk with Freya when you are ready to reclaim pleasure without apology, confidence
    without armor, and love without self-abandonment. Her path is not indulgence — it is
    self-respect made magnetic.
  </p>
  <p>
    Her blessing arrives as charisma that is effortless: presence that speaks before
    words, beauty that reflects alignment, and desire that flows toward what is mutual
    and true.
  </p>
  <p>
    Freya reminds you that attraction is resonance. When you honor your worth, you
    become a match for what you seek — and what is not aligned quietly falls away.
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
