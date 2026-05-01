// app/grimoire/08-deities/kaali-maa/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Kaali Maa" subtitle="Goddess of Liberation">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/kaali-maa/kaali-maa.png"
              alt="Kaali Maa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              The ending is not a punishment.
              <br />
              It is mercy.
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
    Kaali Maa is the living current of liberation through truth. She is not
    destruction as chaos — she is destruction as mercy: the force that ends
    what is false, what is parasitic, and what keeps the soul bound.
  </p>
  <p>
    Her love is fierce and clean. It does not coddle the part of you that
    negotiates with your own suffering. It protects the part of you that
    remembers you were not born to shrink.
  </p>
  <p>
    Kaali teaches that freedom is not comfort. It is clarity. And clarity is
    what remains when illusion is cut away.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/kaali-maa-goddess/mythology"
      className="deity-link"
    >
      Explore Kaali Maa’s Mythic Origins →
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
        <Link href="/grimoire/11-elements/fire" className="deity-link">
          Fire
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
                ,{" "}
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
                  href="/grimoire/03-chakras/01-root-chakra"
                  className="deity-link"
                >
                  Root
                </Link>
                ,{" "}
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
                <Link href="/grimoire/05-colors/09-purple" className="deity-link">
                  Purple
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
                <Link href="/grimoire/07-crystals-stones/obsidian" className="deity-link">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/onyx" className="deity-link">
                  Onyx
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/garnet" className="deity-link">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/07-crystals-stones/ruby" className="deity-link">
                  Ruby
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
                <Link href="/grimoire/14-herbs/nettle" className="deity-link">
                  Nettle
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/cloves" className="deity-link">
                  Cloves
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/pepper" className="deity-link">
                  Pepper
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
            Kaali Maa emerges in Hindu tradition as a fierce aspect of the Divine Mother —
            the force that confronts what threatens life, truth, and dharma. Her myths
            carry the message that some darkness cannot be negotiated with. It must be ended.
          </p>
          <p>
            Her imagery is intentionally confronting: the naked truth, the severing of
            illusion, the power that stands beyond social comfort. Kaali is not here to
            be palatable. She is here to be real.
          </p>
          <p>
            In many tellings, she appears when protection is required at the deepest level —
            when the soul must be freed from what consumes it.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Kaali governs liberation, protection, endings, truth, shadow confrontation,
            banishment, and the reclamation of power after fear. She supports severing cords
            to what drains you and ending patterns that survive only through your silence.
          </p>
          <p>
            Her current strengthens courage and discernment: the ability to see what is
            real, to stop romanticizing harm, and to choose freedom even when it costs the
            familiar.
          </p>
          <p>
            Kaali is not gentle with illusions — because illusions keep people trapped.
            Her medicine is clean.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            The night, the threshold of death and rebirth, sacred fire, the cutting blade,
            skull imagery as impermanence, and the Mother as protector. Her symbolism points
            to a single truth: what ends was never meant to own you.
          </p>
          <p>
            Kaali’s imagery often teaches that fear is not an authority. It is a sensation
            you can move through.
          </p>
        </section>

        {/* KAALI MAA IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kaali Maa in Practice</h2>
          <p>
            Work with Kaali Maa when you need liberation: cutting ties to toxic bonds,
            ending cycles of self-abandonment, banishing persistent spiritual interference,
            breaking addiction to approval, and reclaiming the voice you buried to stay safe.
          </p>
          <p>
            She responds to truth, devotion, and courage. She does not respond well to
            performative intensity, fear-based obsession, or calling her power while refusing
            to change the life that requires it.
          </p>
          <p>
            Approach her with respect and clear intention. Kaali’s protection is real, but it
            is not passive. If you ask for freedom, be willing to choose it.
          </p>
          <p>
            <Link href="/grimoire/08-deities/kaali-maa/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF KAALI MAA HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Kaali Maa Has Chosen You
          </h2>
          <p>
            If Kaali Maa has chosen you, your tolerance for self-betrayal collapses. You may
            feel an internal pressure to tell the truth, to leave what is harmful, or to stop
            negotiating with dynamics that keep you small.
          </p>
          <p>
            Her presence often arrives through endings that feel like relief: sudden clarity,
            the courage to cut a cord, a fierce protection rising in your body, or an unmistakable
            sense that something has reached its final season.
          </p>
          <p>
            Signs may appear through themes of black and red, night imagery, protective symbols,
            fierce Mother energy, dreams of severing ties, or synchronicities that push you toward
            the choice you have been avoiding.
          </p>
          <p>
            Most of all, if Kaali Maa has chosen you, your life begins to demand liberation as
            law. You are no longer allowed to stay bound for the sake of peace.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings should be simple, clean, and sincere: fresh water, fruit, flowers, incense,
            a candle lit with devotion, or prayers spoken plainly. The power is not in spectacle —
            it is in reverence.
          </p>
          <p>
            Acts of devotion can be non-material: telling the truth, ending what harms you, keeping
            your boundaries, protecting the vulnerable, and choosing freedom even when it is hard.
          </p>
          <p>
            Kaali responds to real devotion: the kind that changes behavior, not just mood.
          </p>
        </section>

        {/* KAALI MAA VS DURGA */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kaali Maa vs Durga</h2>
          <p>
            Kaali and Durga are related currents of the Divine Mother, but they carry different
            textures. Durga often appears as structured protection and strategic power — the warrior
            who defeats what threatens order. Kaali often appears as total liberation — the force
            that ends illusion and cuts the root.
          </p>
          <p>
            If you work with both, keep the intention distinct: Durga for protection with structure,
            Kaali for liberation through severing what binds.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Kaali Maa moves through the Liberator, the Fierce Mother, the Cord-Cutter, and the
            Protector of Truth — not as roles to perform, but as currents that end what is false
            and restore power to the soul.
          </p>
          <p>
            In her highest expression, she is love with backbone: protection that frees, truth that
            heals, and endings that make room for life.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Kaali’s shadow can appear when liberation becomes reckless severing — when intensity becomes
            addiction, when “truth” becomes cruelty, or when endings are chosen to avoid responsibility.
          </p>
          <p>
            Her corrective wisdom is clean: cut what is false, not what is inconvenient. Liberation is not
            chaos. It is truth.
          </p>
        </section>

        {/* KAALI MAA IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Kaali Maa in the Modern World</h2>
          <p>
            Today, Kaali Maa’s energy appears wherever someone refuses to keep paying for peace with their
            dignity. She shows up in boundary work, trauma recovery, sobriety, protection practices, and
            the moment a person finally chooses themselves without apology.
          </p>
          <p>
            She reminds you that the ending is not a punishment. It is mercy.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Kaali Maa teaches that liberation is not polite. It is not cosmetic. It is not a
    mindset shift that leaves the chains intact. It is the removal of what is false —
    no matter how long you have called it “normal.”
  </p>
  <p>
    She does not come to decorate your life. She comes to sever what drains your spirit,
    expose what is feeding on your fear, and return you to the part of you that cannot be
    owned.
  </p>
  <p>
    Walk with her when you are ready to die to illusion: to end the cycle, cut the cord,
    burn the lie, and stop bargaining with what harms you. Her love is fierce because it
    is clean. Her protection is ruthless because it is true.
  </p>
  <p>
    If she is in your path, the question is never whether you are strong enough. The
    question is whether you are willing. Offer her your honesty. Offer her your refusal.
    Offer her the version of you that is done pretending.
  </p>
  <p>
    And when the severing is complete, you will understand her final gift: peace that does
    not require self-erasure — freedom that cannot be taken — a life reclaimed at the root.
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