// app/grimoire/08-deities/iris-goddess/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Iris" subtitle="Goddess of Rainbows">
        {/* HERO IMAGE + QUOTE + (ONLY) SIGNATURE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/iris/iris.png"
              alt="Iris"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>

          <div className="zodiac-hero-quote">
            <p>
              A rainbow is not decoration.
              <br />
              It is a bridge with a message.
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
    Iris is the living current of divine communication, clean passage, and
    the bridge between worlds. She governs the movement of messages — the
    kind that arrives through timing, omen, synchronicity, and sudden clarity.
  </p>
  <p>
    Her power is not loud. It is precise. Iris teaches you how to receive
    what is being sent, interpret what is being shown, and deliver truth
    without distortion.
  </p>
  <p>
    She is the rainbow as a road: a sign that something unseen is crossing
    into the visible, and you are meant to notice.
  </p>

  <p>
    <Link
      href="/grimoire/08-deities/iris-goddess/mythology"
      className="deity-link"
    >
      Explore Iris’ Mythic Origins →
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
                  href="/grimoire/02-astrology/02-planets/03-mercury"
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
                <Link href="/grimoire/05-colors/07-blue" className="deity-link">
                  Blue
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/01-white" className="deity-link">
                  White
                </Link>
                ,{" "}
                <Link href="/grimoire/05-colors/10-silver" className="deity-link">
                  Silver
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
                  href="/grimoire/07-crystals-stones/lapis-lazuli"
                  className="deity-link"
                >
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/aquamarine"
                  className="deity-link"
                >
                  Aquamarine
                </Link>
                ,{" "}
                <Link
                  href="/grimoire/07-crystals-stones/sodalite"
                  className="deity-link"
                >
                  Sodalite
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
                <Link href="/grimoire/14-herbs/lavender" className="deity-link">
                  Lavender
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/violet" className="deity-link">
                  Violet
                </Link>
                ,{" "}
                <Link href="/grimoire/14-herbs/lemongrass" className="deity-link">
                  Lemongrass
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
            Iris appears in Greek myth as a divine messenger, moving between the gods
            and the mortal world with speed and clarity. Where Hermes is clever and
            liminal, Iris is direct and luminous — the message delivered cleanly.
          </p>
          <p>
            She is linked to the rainbow as a celestial bridge, a sign of passage
            between realms, and a visible marker that something unseen is in motion.
          </p>
          <p>
            Her myths teach discernment: not every sign is for you, but the ones that
            are will repeat with precision until you acknowledge them.
          </p>
        </section>

        {/* DOMAINS & POWERS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Domains & Powers</h2>
          <p>
            Iris governs omens, divine messages, truth delivery, clean communication,
            timing, and the bridge between worlds. She strengthens the ability to
            interpret what is being shown without paranoia or projection.
          </p>
          <p>
            Her current supports writers, speakers, readers of signs, and anyone whose
            work depends on clarity: announcements, decisions, negotiations, and the
            courage to name what is true.
          </p>
          <p>
            Iris also brings coherence after confusion. When your signal is scattered,
            she helps you hear what matters.
          </p>
        </section>

        {/* SYMBOLS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Symbols & Sacred Imagery</h2>
          <p>
            Rainbows, wind, water that carries light, messenger symbols, subtle omens,
            the feeling of perfect timing, and the sudden arrival of the exact phrase
            you needed. Her imagery is luminous, but disciplined.
          </p>
          <p>
            Iris’s symbols point to one truth: the message is already here. Your task
            is to receive it cleanly.
          </p>
        </section>

        {/* IRIS IN PRACTICE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Iris in Practice</h2>
          <p>
            Work with Iris when you need clarity and clean guidance: improving
            communication, receiving omens without obsession, strengthening divination,
            and learning to trust timing. She is excellent for writers, speakers, and
            anyone navigating decisions that require discernment.
          </p>
          <p>
            Iris responds to honesty, attention, and respect for the message. She does
            not respond well to sign-chasing, frantic forcing, or ignoring what you’ve
            already been shown. If you want the bridge, be willing to cross it.
          </p>
          <p>
            Keep your intention simple. Ask for truth. Ask for the clean next step.
            Then listen.
          </p>
          <p>
            <Link href="/grimoire/08-deities/iris-goddess/rituals" className="deity-link">
              Rituals →
            </Link>
          </p>
        </section>

        {/* HOW TO KNOW IF IRIS HAS CHOSEN YOU */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">How to Know if Iris Has Chosen You</h2>
          <p>
            If Iris has chosen you, your life begins to answer you faster. You may
            notice perfectly timed words, repeating confirmations, and messages that
            land with unmistakable precision — like reality is underlining something.
          </p>
          <p>
            Her presence often awakens through communication: a pull to write, speak,
            announce, clarify, or finally say what you’ve been circling around. You may
            feel the urge to clean your signal — fewer mixed messages, more truth.
          </p>
          <p>
            Signs may appear through rainbow symbolism, sudden light after rain, air and
            wind synchronicities, or an ongoing pattern of “right message, right time”
            that keeps repeating until you act.
          </p>
          <p>
            Most of all, if Iris has chosen you, your life begins to demand clarity as
            a spiritual practice. You stop confusing hope with guidance. You start
            moving with truth.
          </p>
        </section>

        {/* OFFERINGS & DEVOTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Offerings & Devotion</h2>
          <p>
            Offerings for Iris can be simple and bright: clean water, a candle, incense,
            a written vow to speak honestly, or a small act of devotion dedicated to
            clarity. The power is in sincerity and precision.
          </p>
          <p>
            Acts of devotion can be non-material: telling the truth gently, keeping your
            word, delivering messages you’ve been avoiding, and choosing clarity over
            performance.
          </p>
          <p>
            Iris responds when you treat communication as sacred — not as leverage, but
            as alignment.
          </p>
        </section>

        {/* IRIS VS HERMES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Iris vs Hermes</h2>
          <p>
            Iris and Hermes both govern messages, but the current is different. Hermes is
            road-intelligence, exchange, trickster insight, and liminal navigation. Iris is
            luminous delivery — the message arriving cleanly, with timing that feels exact.
          </p>
          <p>
            If you work with both, keep the intention distinct. Call Hermes when you need
            movement and strategy. Call Iris when you need clarity and true signal.
          </p>
        </section>

        {/* ARCHETYPAL EXPRESSION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Archetypal {"\u00A0"} Expression
          </h2>
          <p>
            Iris moves through the Messenger, the Signal-Reader, the Truth-Carrier, and the
            Bridge-Keeper — not as roles to perform, but as currents that restore clarity,
            timing, and communication with integrity.
          </p>
          <p>
            In her highest expression, she is truth delivered with grace: clean signal,
            correct timing, and guidance that does not confuse.
          </p>
        </section>

        {/* SHADOW & BALANCE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Shadow & Balance</h2>
          <p>
            Iris’s shadow can appear when seeking signs becomes obsession — when you read
            everything as an omen, or when you chase confirmation instead of making a clean
            decision.
          </p>
          <p>
            Her corrective wisdom is simple: you do not need endless proof. You need clarity,
            and then you need action.
          </p>
        </section>

        {/* IRIS IN THE MODERN WORLD */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Iris in the Modern World</h2>
          <p>
            Today, Iris appears wherever messages move through light and signal: writing,
            speech, media, timing, and the subtle language of synchronicity. She shows up when
            a person learns to hear what is real and stop chasing what is comforting.
          </p>
          <p>
            She reminds you that the bridge is already there. The message is already in motion.
            Receive it cleanly.
          </p>
        </section>

       {/* CLOSING REFLECTION */}
<section className="zodiac-note">
  <h2 className="zodiac-note-subheading">Closing Reflection</h2>
  <p>
    Iris teaches that connection is not coincidence — it is design. Every message has a
    sender. Every signal has a purpose. When something reaches you at the exact moment it
    does, it is because a bridge has been opened.
  </p>
  <p>
    She asks you to become attentive to the space between worlds: between thought and
    action, feeling and language, intuition and response. Meaning travels fastest when
    you are present enough to receive it.
  </p>
  <p>
    Walk with Iris when you are ready to trust communication as sacred movement — to speak
    clearly, listen honestly, and recognize when you are being guided rather than pushed.
    Her work is not loud. It is precise.
  </p>
  <p>
    Her blessing arrives as alignment in timing: the right words, the right meeting, the
    right opening appearing exactly when you are prepared to cross it. She does not force
    revelation — she delivers it.
  </p>
  <p>
    Iris reminds you that clarity is a form of grace. When you honor truth in how you
    communicate — with others and with yourself — the path becomes visible, and the
    distance between where you are and where you are meant to be begins to close.
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