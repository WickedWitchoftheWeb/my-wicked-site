// app/grimoire/metals/platinum/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PlatinumPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Platinum" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/platinum-hero.png"
              alt="Platinum"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Refinement is not fragility. It is mastery made quiet.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Platinum is a metal of rarity, refinement, and spiritual depth. In
            the physical world, platinum is dense, resistant to corrosion, and
            exceptionally stable. It does not easily tarnish or react. It
            maintains integrity under pressure and extreme conditions.
          </p>

          <p>
            Energetically, platinum carries Neptunian current: intuitive,
            transcendent, and quietly powerful. It supports sensitivity without
            weakness and spiritual perception without confusion. Platinum does
            not glitter loudly. It glows in restraint.
          </p>

          <p>
            This is a metal aligned with Source and deep Water: the place where
            inspiration becomes devotion and imagination becomes form. Platinum
            supports work that requires clarity within emotional and spiritual
            complexity.
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
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
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
            Platinum tends to feel smooth, steady, and deeply intuitive. It
            supports emotional clarity without overwhelm and strengthens
            connection to subtle perception. Platinum energy can quiet mental
            noise, allowing deeper insight to surface without distortion.
          </p>

          <p>
            This metal is especially useful when navigating spiritual growth,
            creative vision, and emotional complexity. Platinum reinforces
            boundaries in sensitive spaces and encourages refinement over
            reaction. It does not rush transformation. It stabilizes it.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PLATINUM IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Platinum in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/platinum-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Platinum is suited for high clarity spiritual work, dream rituals,
            and practices involving intuition and transcendence. It supports
            meditation, devotion, and creative channeling that requires
            emotional stability alongside imagination.
          </p>

          <p>
            Use platinum symbolism through silver toned objects, water imagery,
            or refined altar pieces that represent purity and depth. Platinum
            pairs well with quiet intention and focused ritual. The intention
            that suits platinum best is simple: I refine what is true.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/platinum-folklore.png"
              alt="Platinum as a symbol of refinement, intuition, and rare strength"
              className="grimoire-img"
            />
          </div>

          <p>
            Platinum has historically been associated with rarity and value,
            often considered more precious than gold because of its scarcity
            and resistance to wear. Its rarity shaped its symbolism: refinement,
            exclusivity, and strength beneath simplicity.
          </p>

          <p>
            In a contemporary grimoire, platinum represents elevated awareness.
            It is the metal of spiritual precision and emotional steadiness.
            Platinum teaches that refinement is not about display. It is about
            clarity that endures.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Platinum is generally stable, but alloys and jewelry compositions
            may vary. Use practical safety awareness when handling tools,
            heat, or unfamiliar materials. Always verify composition if
            physical contact or prolonged wear is involved.
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