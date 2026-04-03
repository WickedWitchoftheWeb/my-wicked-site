// app/grimoire/metals/pewter/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PewterPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Pewter" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/pewter-hero.png"
              alt="Pewter"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Soft does not mean weak. Soft can endure.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Pewter is a metal of receptivity, memory, and quiet strength. In the
            physical world, pewter is an alloy traditionally used for vessels,
            plates, ornaments, and objects meant for daily life. It is softer
            than many structural metals, yet durable when treated with care.
            Pewter holds shape without demanding attention.
          </p>

          <p>
            Energetically, pewter carries lunar current. It supports reflection,
            emotional intelligence, and intuitive sensitivity. Pewter does not
            push. It absorbs. It listens. It creates a container where feeling
            can settle and become clear.
          </p>

          <p>
            This is a metal aligned with Water and the Moon. It resonates with
            Cancer and Pisces energy: protection through nurture, intuition
            through stillness, and strength that comes from emotional depth.
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
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Selene</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                {", "}
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
            Pewter tends to feel calm, receptive, and emotionally grounding. It
            supports reflection without overwhelm and containment without
            repression. Pewter energy helps you process quietly and hold your
            own feelings without becoming porous.
          </p>

          <p>
            This metal is useful when you need softness with boundaries.
            Pewter reinforces intuitive awareness while keeping emotional
            stability intact. It supports gentle protection and subtle
            resilience.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PEWTER IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Pewter in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/pewter-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Pewter is ideal for lunar work, dream work, emotional healing, and
            protective rituals centered on the home. It supports spells for
            intuition, memory, and energetic containment. Pewter vessels and
            symbolic objects can serve as containers for intention and
            reflection.
          </p>

          <p>
            Use pewter in bowls, altar pieces, charms, or symbolic items that
            represent emotional clarity. Pewter pairs well with water rituals,
            moon cycles, and practices that focus on nurturing without
            overextension. The intention that suits pewter best is gentle and
            direct: I protect what I feel.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/pewter-folklore.png"
              alt="Pewter as a symbol of lunar reflection and quiet resilience"
              className="grimoire-img"
            />
          </div>

          <p>
            Pewter has long been associated with domestic life and everyday
            ritual. Its use in household items tied it to nourishment,
            hospitality, and quiet continuity. Though not as radiant as gold or
            silver, pewter became valued for its reliability and accessibility.
          </p>

          <p>
            In a contemporary grimoire, pewter represents emotional steadiness.
            It is the metal of reflection without collapse. Pewter teaches that
            protection can be gentle and still firm.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Modern pewter is typically lead free, but older forms may contain
            lead. Avoid using antique pewter in kitchen-adjacent or
            ingestion-related practices unless its composition is verified.
            Always use safe handling practices with unknown alloys.
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