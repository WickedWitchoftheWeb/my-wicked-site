// app/grimoire/08-deities/juno-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Juno" subtitle="Goddess of Marriage">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/juno/juno.png"
              alt="Juno"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              A vow is not a cage.
              <br />
              It is a crown made honest.
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
    Juno is the living current of sacred commitment — the force that
    protects vows, partnership integrity, and the dignity of union. She is
    not romance as fantasy. She is devotion as structure: the agreements
    that hold a life together when feelings fluctuate.
  </p>
  <p>
    Her power is legitimacy — chosen bonds, spoken truth, and the
    consequences that follow. Juno teaches that commitment is not
    self-erasure; it is alignment. If a “union” requires you to abandon
    your dignity, it is not sacred.
  </p>
  <p>
    She strengthens the ability to hold standards without guilt, to ask
    for clarity without fear, and to build relationships — romantic,
    familial, or devotional — that are worthy of the vow.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/juno-goddess/mythology"
      className="deity-link"
    >
      Explore Juno’s Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/04-venus"
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
                  href="/grimoire/03-chakras/04-heart-chakra"
                  className="deity-link"
                >
                  Heart
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/03-chakras/05-throat-chakra"
                  className="deity-link"
                >
                  Throat
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/04-gold" className="deity-link">
                  Gold
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
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
                <Link href="/grimoire/07-crystals-stones/pearl" className="deity-link">
                  Pearl
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/quartz/rose-quartz"
                  className="deity-link"
                >
                  Rose Quartz
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
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Plants & Herbs</h3>
              <p className="zodiac-attr-value">
                <Link
                  href="/grimoire/14-herbs/pomegranate"
                  className="deity-link"
                >
                  Pomegranate
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/bay-leaves"
                  className="deity-link"
                >
                  Bay Leaves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/olive" className="deity-link">
                  Olive
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
            Juno is the Roman Queen — guardian of marriage, protector of women,
            and keeper of lawful union. In myth, her stories are not written to
            flatter the ego. They are written to reveal what vows require: truth,
            reciprocity, and respect.
          </p>
          <p>
            Her mythology often lives at the crossroads of love and power: what
            happens when commitment is honored, and what happens when it is
            treated like an entitlement.
          </p>
          <p>
            Juno’s presence carries a clear message: devotion without dignity is
            not devotion. It is surrender.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Juno governs sacred union, marriage, partnership agreements, fidelity,
            legitimacy, protection of the vowed path, and the restoration of
            self-respect within relationships.
          </p>
          <p>
            Her current strengthens boundaries, clarity, and standards. She helps
            you see what is real in a bond — not what you hope it will become.
          </p>
          <p>
            Juno is also a guardian of commitment to self: the promise you make to
            stop abandoning your own needs, voice, and dignity to keep the peace.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Crowns, veils, rings, scepters, temples, peacocks, offerings made with
            care, and imagery tied to queenship and legitimacy. Her symbols speak
            to standards as protection — commitment as structure, not performance.
          </p>
          <p>
            Her sacred imagery often carries one truth: love is not proven by
            suffering. It is proven by honor.
          </p>
        </section>

        {/* JUNO IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Juno in Practice</h2>
          <p>
            Work with Juno when you need relationship clarity and integrity:
            strengthening boundaries, defining standards, healing self-respect,
            protecting a partnership, repairing trust through truth, and ending
            bonds that require you to shrink.
          </p>
          <p>
            She responds to honesty, devotion with backbone, and clean decisions.
            She does not respond well to bargaining, self-betrayal, or calling
            something “love” while tolerating disrespect.
          </p>
          <p>
            Approach her with a clear “yes” and a clear “no.” Juno strengthens the
            vow — but she also strengthens the choice to walk away when the vow is
            not mutual.
          </p>
          <p>
            <Link
              href="/grimoire/08-deities/juno-goddess/rituals"
              className="deity-link"
            >
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF JUNO HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Juno Has Chosen You</h2>
          <p>
            If Juno has chosen you, your tolerance for vague commitment dissolves.
            You may find yourself unable to accept mixed signals, inconsistent
            effort, or relationships that require you to do all the emotional labor
            to keep them alive.
          </p>
          <p>
            Her presence often arrives through standards: sudden clarity about what
            you will and will not allow, a stronger voice, and an internal demand
            for reciprocity. You stop calling endurance “loyalty.”
          </p>
          <p>
            Signs may appear through themes of vows, rings, crowns, peacocks,
            marriage imagery, or repeated moments where you feel a calm, immovable
            “enough” settle into your body.
          </p>
          <p>
            Most of all, if Juno has chosen you, your life begins to require
            legitimacy — agreements that are spoken, kept, and honored. You are
            asked to choose devotion that honors you back.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings can be clean and intentional: fresh water, flowers, incense,
            honey, a candle lit with devotion, or symbols of vows and commitment.
            The power is in respect, not extravagance.
          </p>
          <p>
            Acts of devotion can be non-material: keeping your word, speaking
            honestly, enforcing a boundary, and choosing what is worthy over what
            is familiar.
          </p>
          <p>
            Juno responds to devotion that has integrity. If your reverence is
            real, your relationships and your self-concept begin to become more
            ordered — because dignity creates structure.
          </p>
        </section>

        {/* JUNO VS HERA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Juno vs Hera</h2>
          <p>
            Juno and Hera are related currents, but not identical. Juno carries a
            Roman emphasis on civic legitimacy, marriage as structure, and the role
            of vows within public order. Hera, in her Greek current, often
            emphasizes queenship and the politics of divine sovereignty.
          </p>
          <p>
            If you work with both, keep the intention distinct. Treat Juno as
            commitment made lawful and Hera as sovereignty made personal.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Juno moves through the Queen, the Guardian of Vows, the Keeper of
            Standards, and the Protector of Legitimacy — not as roles to perform,
            but as currents that restore self-respect inside devotion.
          </p>
          <p>
            In her highest expression, she is commitment with dignity: devotion
            that is mutual, love that is consistent, and standards that are
            enforced without apology.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Juno’s shadow can appear when standards become rigidity — when rightful
            anger turns into punishment, or when commitment becomes control.
          </p>
          <p>
            Her corrective wisdom is clear: devotion must be mutual. If you have to
            abandon yourself to keep the bond, the bond is not sacred.
          </p>
        </section>

        {/* JUNO IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Juno in the Modern World</h2>
          <p>
            Today, Juno’s energy appears wherever someone stops begging for
            consistency and starts requiring it. She shows up when a person builds
            relationships and agreements that match their standards — in love, in
            business, and in self-concept.
          </p>
          <p>
            She reminds you that commitment is not proven by suffering. It is
            proven by honor.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Juno teaches that commitment is not constraint — it is conscious choice. Her power
    lives in agreements made with clarity, upheld with integrity, and protected with
    boundaries that do not waver under pressure.
  </p>
  <p>
    She asks you to look honestly at what you have vowed to — in love, in partnership,
    in selfhood — and whether those vows honor your dignity or quietly erode it. Loyalty
    that requires self-betrayal is not sacred. It is fear wearing tradition.
  </p>
  <p>
    Walk with Juno when you are ready to choose union without erasure, devotion without
    silence, and structure without submission. Her path is not about endurance — it is
    about mutuality.
  </p>
  <p>
    Her blessing arrives as clarity around commitment: what is worthy of your loyalty,
    what must be renegotiated, and what must be released so something lawful can take
    its place.
  </p>
  <p>
    Juno reminds you that the most powerful vow you will ever make is the one you keep
    with yourself. When that vow is honored, every other union either rises to meet it —
    or falls away.
  </p>
</section>

        {/* FOOTER LINKS (ORDER LOCKED) */}
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





