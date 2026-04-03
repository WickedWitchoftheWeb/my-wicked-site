// app/grimoire/metals/titanium/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TitaniumPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Titanium" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/titanium-hero.png"
              alt="Titanium"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lightness can endure what weight cannot.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Titanium is a metal of resilience, clarity, and refined strength.
            In the physical world, titanium is exceptionally strong for its
            weight, resistant to corrosion, and trusted in aerospace, medicine,
            and advanced engineering. It combines durability with lightness in
            a way few metals can.
          </p>

          <p>
            Energetically, titanium carries Neptunian current through a Water
            lens: fluid yet enduring. It supports intuitive depth without
            collapse and sensitivity without fragility. Titanium does not bend
            easily, yet it does not feel heavy. It sustains pressure while
            remaining balanced.
          </p>

          <p>
            This is a metal aligned with Water and Pisces energy. Titanium
            supports spiritual endurance, emotional steadiness, and long term
            vision that requires both flexibility and strength.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/09-neptune">
                  Neptune
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Poseidon</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/11-silver">Silver</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Titanium tends to feel steady, adaptive, and deeply resilient. It
            supports emotional flexibility while reinforcing internal strength.
            Titanium energy is not loud. It is stable under pressure and clear
            in intention.
          </p>

          <p>
            This metal is especially useful when navigating long journeys,
            spiritual growth, or emotionally complex environments. Titanium
            reinforces boundaries without rigidity and encourages endurance
            without heaviness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* TITANIUM IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Titanium in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/titanium-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Titanium supports endurance rituals, long term protection work, and
            spiritual practices that require sustained focus. It pairs well with
            meditation, dream work, and emotional resilience spells. Titanium
            energy strengthens intention without adding unnecessary force.
          </p>

          <p>
            Use titanium symbolically through lightweight tools, jewelry, or
            representations of modern resilience. It works well in rituals that
            emphasize adaptability and strength in motion. The intention that
            suits titanium best is simple: I endure with grace.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/titanium-folklore.png"
              alt="Titanium as a symbol of resilience, balance, and adaptive strength"
              className="grimoire-img"
            />
          </div>

          <p>
            Titanium is a modern metal, and its symbolism grows from its use in
            advanced technology and medicine. It represents progress, refined
            engineering, and the ability to withstand extreme conditions
            without decay.
          </p>

          <p>
            In a contemporary grimoire, titanium symbolizes adaptive strength.
            It is the metal of endurance without burden. Titanium teaches that
            resilience can be both light and powerful at once.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Titanium is generally stable and biocompatible, but alloys may vary.
            Use practical safety awareness when cutting, grinding, or applying
            heat. Always verify material composition before extended skin
            contact or craft applications.
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