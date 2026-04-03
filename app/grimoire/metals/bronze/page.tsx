// app/grimoire/metals/bronze/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BronzePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Bronze" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/bronze-hero.png"
              alt="Bronze"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Some power is not born: it is forged, then proven.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Bronze is a metal of endurance, heat, and earned strength. As an
            alloy, it carries the story of craftsmanship: the moment raw
            materials become something made to survive time. In the physical
            world, bronze is known for its toughness, its warm tone, and its
            ability to hold detail: statues, tools, bells, weapons, and objects
            meant to last and be remembered.
          </p>

          <p>
            Energetically, bronze carries a forged kind of fire. It supports
            courage, stamina, and willpower that holds steady under pressure.
            Bronze does not feel soft or delicate. It feels built. It can help
            when you need to strengthen your backbone, reclaim your edge, or
            choose persistence over hesitation.
          </p>

          <p>
            This is a metal that understands legacy. It is tied to action,
            protection, and reputation. Bronze can support work that asks for
            bravery and follow-through: the kind that turns intention into
            impact.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Ares</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
                {", "}
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
            Bronze tends to feel steady, forceful, and protective. It carries
            fire in a disciplined form: less explosion, more endurance. This is
            the energy of training, repetition, and sharpened instinct. Bronze
            supports action that is grounded in decision: not impulsive motion,
            but committed momentum.
          </p>

          <p>
            It can be especially useful when you need confidence that lasts.
            Bronze helps you hold your line. It reinforces boundaries, boosts
            stamina, and supports the part of you that keeps going when comfort
            is not available. Bronze is a good ally for work tied to bravery,
            leadership, and self-defense: physical, emotional, or spiritual.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* BRONZE IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Bronze in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/bronze-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Bronze supports protective craft, courage work, and spells that
            require follow-through. It is useful for strengthening resolve,
            cutting through hesitation, and anchoring your will into the real
            world. Bronze is an excellent material for tools that represent
            defense, authority, and earned power.
          </p>

          <p>
            Use bronze in amulets, charms, small ritual tools, and altar objects
            meant to hold protective intention over time. Bronze can also be
            worked through symbolism: a bronze-colored object can represent the
            act of forging yourself into someone who does not collapse under
            pressure. The best intention for bronze is simple and direct: I
            endure, and I win.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/bronze-folklore.png"
              alt="Bronze as a symbol of endurance, craft, and martial strength"
              className="grimoire-img"
            />
          </div>

          <p>
            Bronze carries strong historical symbolism because it was one of the
            first metals to radically change how humans built tools, defended
            territories, and recorded memory. Bronze objects were made to last,
            and many did. That longevity shaped bronze into a symbol of legacy:
            what you do now can still be here later.
          </p>

          <p>
            In a contemporary grimoire, bronze represents forged identity. It
            is the story of skill becoming power. Bronze reminds you that
            strength is not always instinct: sometimes it is practice. Sometimes
            it is the decision to keep going until the work is done.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Bronze is an alloy, and its exact composition can vary. If you are
            using bronze in skin-contact or kitchen-adjacent ways, keep the use
            practical and informed. Avoid unsafe practices, especially with
            heat, liquids, or any method you have not verified as safe.
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