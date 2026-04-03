// app/grimoire/08-deities/perses-god/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Perses" subtitle="God of Destruction">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/perses/perses.png"
              alt="Perses"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              Some endings are not tragedies.
              <br />
              They are mercy with teeth.
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
    Perses is the force that ends what cannot be saved. He is not petty ruin,
    not chaos for entertainment — he is annihilation with purpose. The clean
    break. The irreversible cut. The moment the universe stops negotiating
    with what is rotten.
  </p>
  <p>
    His current is destruction as correction: the fire that clears an overgrown
    field, the collapse that ends a false structure, the severing that returns
    power to the one who has been bleeding it out.
  </p>
  <p>
    Perses teaches that not every ending is loss. Some endings are liberation.
    Some endings are justice. Some endings are the first honest breath you take
    after you stop trying to keep a dead thing alive.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/perses-god/mythology"
      className="deity-link"
    >
      Explore Perses’ Mythic Origins →
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
                  href="/grimoire/03-chakras/03-solar-plexus-chakra"
                  className="deity-link"
                >
                  Solar Plexus
                </Link>
              </p>
            </div>

            <div className="zodiac-attr">
              <h3 className="zodiac-attr-label">Colors</h3>
              <p className="zodiac-attr-value">
                <Link href="/grimoire/05-colors/02-red" className="deity-link">
                  Red
                </Link>
                ,{" "}
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
                  href="/grimoire/07-crystals-stones/hematite"
                  className="deity-link"
                >
                  Hematite
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/garnet"
                  className="deity-link"
                >
                  Garnet
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
                <Link href="/grimoire/14-herbs/pepper" className="deity-link">
                  Pepper
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/14-herbs/cayenne-pepper"
                  className="deity-link"
                >
                  Cayenne Pepper
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
            Perses appears in Greek tradition among the Titans — a name that carries the
            taste of ruin and the weight of consequence. He is not centered in endless
            heroic epics because his work is not spectacle. His work is turning points.
          </p>
          <p>
            In some genealogies, Perses is tied to destructive force as lineage — a reminder
            that endings have ancestry. Collapse does not come from nowhere. It comes from
            what was ignored, what was abused, what was forced to survive too long.
          </p>
          <p>
            His mythic presence is a warning and a mercy: when a structure becomes a cage,
            the cosmos will eventually send something that breaks it.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Perses governs destruction, severing, banishment, curse-breaking, and the
            irreversible closing of doors. He strengthens the will that can end a cycle
            without reopening it out of nostalgia, guilt, or fear.
          </p>
          <p>
            His current supports clean endings: cutting energetic cords, breaking compulsive
            attachments, dismantling false identities, and burning away what is not true.
            Perses does not soothe. He clarifies.
          </p>
          <p>
            He also governs consequence. When you keep feeding what harms you, Perses may
            arrive as the moment you can no longer pretend it is fine.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Ash, scorched wood, broken chains, black stone, iron blades, closed gates,
            scorched earth before regrowth, and the quiet aftermath when the air finally
            feels clean. His imagery is finality — not cruelty, but completion.
          </p>
          <p>
            Perses speaks through the instinct that says, “This ends now,” and means it.
            He speaks through the relief that arrives after the cut is made.
          </p>
        </section>

        {/* PERSES IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Perses in Practice</h2>
          <p>
            Work with Perses when you need an ending that holds: breaking a pattern you keep
            crawling back to, cutting energetic ties, banishing a presence, ending a dynamic
            that thrives on your hesitation, and reclaiming the power you leak through
            loopholes.
          </p>
          <p>
            He responds to precision and commitment. Perses does not reward vague wishes or
            dramatic rage that changes nothing. He answers when you are prepared to choose
            finality — and to live like it afterward.
          </p>
          <p>
            This is not “destroy everything” energy. This is “destroy what is destroying you”
            energy. If you ask for a clean break, you must stop romanticizing the wound.
          </p>
          <p>
            <Link href="/grimoire/08-deities/perses-god/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF PERSES HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            How to Know if Perses Has Chosen You
          </h2>
          <p>
            If Perses has chosen you, your tolerance collapses — in the best way. You may
            feel a sudden disgust for half-truths, repeat betrayals, and cycles that have
            been draining you for years. What you once endured becomes impossible to swallow.
          </p>
          <p>
            His presence often arrives as clarity that feels like heat: the moment you realize
            you are done explaining yourself to people who benefit from your confusion. You may
            feel called to purge your space, end contact, delete the number, close the door, or
            finally say the thing you’ve been avoiding.
          </p>
          <p>
            Signs can appear through fire imagery, ash, black stone, sudden urges to clean and
            simplify, repeated moments of “enough,” or synchronicities that remove the option to
            keep pretending.
          </p>
          <p>
            Most of all, if Perses has chosen you, your life begins rewarding finality. When you
            cut cleanly, your energy returns fast. When you hesitate, reality tightens until you
            either end it or pay the cost of staying.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings to Perses should be direct and respectful: a candle lit for a clean ending,
            salt and water set with a vow, a written statement of release burned safely, or a small
            iron token placed as a marker of finality.
          </p>
          <p>
            Acts of devotion are lived: enforcing a boundary the first time, refusing to reenter
            a cycle out of loneliness, keeping your word to yourself, and choosing closure even
            when your emotions beg for one more conversation.
          </p>
          <p>
            Perses honors integrity that holds. He is not impressed by intensity. He is aligned
            with follow-through.
          </p>
        </section>

        {/* DESTRUCTION AS MERCY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Destruction as Mercy</h2>
          <p>
            Perses teaches that destruction can be compassionate when it prevents further harm.
            Some things do not need repair. They need removal.
          </p>
          <p>
            Mercy is not always softness. Sometimes mercy is the blade that ends the bleeding.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Perses moves through the Destroyer, the Severer, the Exorcist, and the Cleaner of Rot —
            not as identities, but as sacred functions within transformation.
          </p>
          <p>
            In his highest expression, he is finality with justice: endings that return power,
            boundaries that cannot be negotiated, and destruction that clears the way for truth.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Perses’s shadow can appear as scorched-earth behavior, destruction used to avoid intimacy,
            or the addiction to burning things down the moment they require care. Not every discomfort
            is rot. Not every challenge is a cage.
          </p>
          <p>
            His corrective wisdom is discernment. Destroy what is false. Protect what is real. Learn
            the difference between a bond that needs honesty and a chain that needs cutting.
          </p>
          <p>
            Balance with Perses is learning to end cleanly without becoming someone who only knows how
            to end.
          </p>
        </section>

        {/* PERSES IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Perses in the Modern World</h2>
          <p>
            Today, Perses appears wherever people stop calling survival “love.” He is present in the
            moment someone leaves an abusive dynamic, breaks an addiction, ends a generational pattern,
            or refuses to keep paying for someone else’s comfort with their own life.
          </p>
          <p>
            His current also lives in purification: decluttering what drains you, removing what poisons
            you, and choosing a life that does not require self-betrayal to maintain.
          </p>
          <p>
            Perses does not promise ease. He promises clean space — and the power that returns when the
            rot is gone.
          </p>
        </section>

        {/* CLOSING REFLECTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Closing Reflection</h2>
          <p>
            Perses teaches that closure is an act of self-respect. You do not have to keep explaining,
            forgiving, hoping, or reopening the wound just to prove you have a soft heart. A soft heart
            without boundaries becomes a door. Perses teaches you to lock it.
          </p>
          <p>
            Let the ending be clean. Let the story finish without one more bargaining session. If you are
            asking for liberation, stop feeding what enslaves you. Destruction is not always a loss — it is
            often the first honest protection you have ever given yourself.
          </p>
          <p>
            Choose the cut that saves your life. Choose the door that stays closed. Choose the version of
            you that does not return to what broke them just because it feels familiar. Perses is not here
            to make you cruel. He is here to make you free.
          </p>
        </section>

        {/* FOOTER LINKS (ORDER LOCKED FOR GODS) */}
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





