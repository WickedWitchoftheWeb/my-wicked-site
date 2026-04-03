// app/grimoire/metals/copper/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CopperPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Copper" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/copper-hero.png"
              alt="Copper"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What conducts also connects. What warms also heals.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Copper is a metal of connection, warmth, and living current. In the
            physical world, copper is prized for conductivity and reliability.
            It moves electricity, carries heat, and shows up anywhere a system
            needs flow: wiring, tools, pipes, cookware, architecture, and the
            quiet infrastructure that keeps life running.
          </p>

          <p>
            Energetically, copper is Venusian and relational. It supports
            harmony, attraction, beauty, and the subtle intelligence of
            reciprocity. Copper does not feel sterile. It feels alive. It
            encourages magnetism that is embodied: touch, presence, voice, and
            the kind of charm that comes from being fully in your own energy.
          </p>

          <p>
            Copper bridges Earth and Air. It can ground desire into something
            real, and it can help the heart communicate cleanly. This makes it a
            strong ally for work involving love, value, artistry, and balanced
            exchange.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
                {" "}
                (Taurus)
                {", "}
                <Link href="/grimoire/elements/air">Air</Link>
                {" "}
                (Libra)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Aphrodite</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
                {" "}
                (Taurus)
                {", "}
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
                {" "}
                (Libra)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/07-green">Green</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Copper tends to feel warm, receptive, and magnetic. It supports
            comfort that is not passive: the kind that holds value, holds
            boundaries, and still invites closeness. Copper helps energy move
            between people with less distortion. It encourages honest exchange,
            graceful communication, and attraction built on alignment instead of
            chasing.
          </p>

          <p>
            Earth gives copper its steadiness. Air gives it its social
            intelligence. Together, copper supports relationship work where you
            need both: stability that does not cling, and charm that does not
            betray your standards. Copper can help you stay soft without becoming
            porous.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* COPPER IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Copper in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/copper-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Copper is excellent for love work, glamour work, and spells centered
            on value: self-worth, receiving, and the ability to be met in equal
            exchange. It supports attraction that feels clean and consensual,
            and it helps you strengthen the energy you carry into rooms, dates,
            conversations, and creative spaces.
          </p>

          <p>
            Use copper in jewelry, coins, charms, wires, bowls, and altar pieces
            where you want the energy of warmth and connection to remain present.
            Copper is also useful for communication in relationships: not forcing
            an outcome, but clarifying what is true and what is fair. The best
            intention for copper is direct: I attract what matches my value.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/copper-folklore.png"
              alt="Copper as a symbol of love, beauty, and living current"
              className="grimoire-img"
            />
          </div>

          <p>
            Copper has long been associated with love, beauty, and feminine
            power. Across many traditions, it appears in jewelry, adornment,
            and household tools that blur the line between function and
            artistry. Copper&apos;s warmth and color make it feel intimate, like a
            metal that belongs close to the body.
          </p>

          <p>
            In a contemporary grimoire, copper represents the ethics of
            exchange. What you give, what you receive, and what you allow.
            Copper teaches that magnetism is not manipulation. It is alignment,
            maintained.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            If you are using copper in skin-contact or kitchen-adjacent ways,
            keep the use practical and informed. Avoid unsafe practices,
            especially with heat, liquids, or direct contact methods that you do
            not fully understand.
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