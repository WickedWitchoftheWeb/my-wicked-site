// app/grimoire/metals/gold/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GoldPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Gold" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/gold-hero.png"
              alt="Gold"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “What is real does not beg to be believed. It shines.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Gold is a metal of sovereignty, vitality, and sacred value. In the
            physical world, it is prized for its brilliance, resistance to
            corrosion, and long-lasting stability. Gold does not tarnish easily.
            It endures. It has been used across time in adornment, currency, art,
            and ritual objects meant to symbolize what is lasting and true.
          </p>

          <p>
            Energetically, gold carries solar force. It supports confidence,
            clarity, warmth, and the kind of power that comes from knowing who
            you are. Gold is not frantic. Gold is steady. It reinforces identity,
            strengthens personal authority, and amplifies the energy you are
            already holding.
          </p>

          <p>
            Gold aligns with Source: the origin-point where purpose becomes
            visible. It can support work that centers leadership, self-worth, and
            devotion to the highest version of your path. Gold helps you choose
            what matches your value, then remain loyal to that choice.
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
                <Link href="/grimoire/source">Source</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Apollo</Link>
                {", "}
                <Link href="/grimoire/deities">Ra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/05-gold">Gold</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Gold tends to feel bright, confident, and stabilizing. It strengthens
            presence without aggression: the calm certainty of someone who does
            not need to prove themselves. Gold supports clear self-definition
            and the ability to hold your own light without shrinking or
            overcompensating.
          </p>

          <p>
            This metal is especially supportive when you are building
            self-worth, stepping into visibility, or reclaiming leadership in
            your own life. Gold can also act as an energetic amplifier. It makes
            your intention louder, so it is best used when your intention is
            clean and aligned.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* GOLD IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Gold in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/gold-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Gold is used in witchcraft for sovereignty, success, protection
            through authority, and devotion work aligned with higher purpose. It
            supports spells that strengthen confidence, attract recognition, and
            reinforce identity. Gold is also powerful in altar work where you
            are honoring the Sun, Source, or the part of you that leads.
          </p>

          <p>
            Use gold in jewelry, coins, candle holders, ritual tools, and altar
            objects meant to represent value and clarity. Gold pairs well with
            intentional declarations and visible action. It is most effective
            when you are not asking for permission. The intention that suits
            gold best is direct: I claim what is mine.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/gold-folklore.png"
              alt="Gold as a symbol of sovereignty, vitality, and sacred value"
              className="grimoire-img"
            />
          </div>

          <p>
            Gold has been treated across cultures as a metal of the divine:
            associated with kingship, temples, offerings, and objects meant to
            outlast a human lifetime. It became a symbol of authority not only
            because it is beautiful, but because it endures. Gold holds its form
            through time, and that stability shaped its spiritual meaning.
          </p>

          <p>
            In a contemporary grimoire, gold represents inner sovereignty: the
            ability to choose your standards and live by them. It is the metal
            of Leo power: heart-led leadership, creative courage, and loyalty to
            the self. Gold teaches that value is not negotiated. It is declared,
            then maintained.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Gold is generally stable, but physical forms can vary by purity and
            alloy composition. If you are using gold in skin-contact or
            kitchen-adjacent ways, keep the use practical and informed. Avoid
            unsafe practices, especially with heat, liquids, or any method you
            do not fully understand.
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