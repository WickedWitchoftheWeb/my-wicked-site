// app/grimoire/metals/mercury/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MercuryPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mercury" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/mercury-hero.png"
              alt="Mercury"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The message is alive. Handle it with precision.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Mercury is a metal of movement, mind, and fast transformation. In the
            physical world, mercury is unique: liquid at room temperature,
            reflective, and constantly in motion. It gathers into beads, splits,
            reconnects, and slips through gaps. Mercury has historically been
            used in instruments and processes that rely on precise measurement
            and controlled reaction.
          </p>

          <p>
            Energetically, mercury carries Mercurial intelligence: quick,
            adaptive, and highly responsive. It supports communication,
            learning, and the ability to translate between worlds. Mercury does
            not want stagnation. It wants motion, connection, and exchange.
          </p>

          <p>
            Mercury bridges Air and Earth: thought and structure, signal and
            detail. This makes it useful for work that requires clarity, skill,
            and mental agility, especially when you need your mind to stay sharp
            without becoming scattered.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/air">Air</Link>
                {" "}
                (Gemini)
                {", "}
                <Link href="/grimoire/elements/earth">Earth</Link>
                {" "}
                (Virgo)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Hermes</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
                {" "}
                (Gemini)
                {", "}
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
                {" "}
                (Virgo)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/12-grey">Grey</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Mercury tends to feel quick, changeable, and mentally clarifying. It
            supports learning, pattern recognition, and the ability to move
            between perspectives without getting stuck. Mercury can sharpen
            focus when you need precision, and it can also increase mental
            speed when you need momentum.
          </p>

          <p>
            Because mercury energy moves fast, it rewards structure. When you
            give it a container, it becomes brilliant. When you do not, it can
            become scattered. Mercury is best used with clear intentions, clean
            language, and specific goals.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* MERCURY IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Mercury in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/mercury-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Mercury is used for communication spells, learning work, travel
            intentions, skill building, and rituals that require mental agility.
            It supports writing, speaking, negotiating, and divination that
            depends on clear signal. Mercury can also support road-opening work
            when you need options to appear and pathways to connect.
          </p>

          <p>
            Use mercury energy through symbolism and correspondence rather than
            physical handling. Letters, keys, ink, tools of study, and objects
            that represent messaging can carry the current safely. Mercury is
            strongest when your intention is specific: I speak clearly, and I am
            understood.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/mercury-folklore.png"
              alt="Mercury as a symbol of translation, quick intelligence, and transformation"
              className="grimoire-img"
            />
          </div>

          <p>
            Mercury has long been associated with mystery, alchemy, and the
            boundary between states. Its liquid movement and mirror-bright
            surface shaped its symbolic meaning: change, translation, and the
            ability to move between worlds. In older systems, mercury was tied
            to the mind and to the messenger current that carries information
            where it needs to go.
          </p>

          <p>
            In a contemporary grimoire, mercury represents signal itself: what
            you say, what you think, what you repeat, and what you allow to
            shape your reality. Mercury teaches that language is not decoration.
            Language is a tool. Used well, it changes everything.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Mercury is toxic. Do not handle elemental mercury without proper
            safety training and protective measures. Do not use it in
            kitchen-adjacent work, heat-based craft, or any practice that
            involves ingestion, skin absorption, or airborne exposure. In
            witchcraft, rely on symbolism and correspondence rather than direct
            physical contact.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/metals" className="grimoire-footer-link">
              ← Back to Metals
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}