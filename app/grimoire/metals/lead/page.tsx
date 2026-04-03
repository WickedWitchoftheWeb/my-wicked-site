// app/grimoire/metals/lead/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LeadPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lead" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/lead-hero.png"
              alt="Lead"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Some boundaries are not walls. They are gravity.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lead is a metal of weight, containment, and deep structure. In the
            physical world, it is dense and heavy, historically used anywhere
            shielding, stability, and grounding were required. Lead does not
            move quickly. It presses downward. It creates seriousness. It holds.
          </p>

          <p>
            Energetically, lead carries Saturnine force: discipline, limits, and
            reality. It supports the kind of protection that comes from
            containment rather than confrontation. Lead is not bright and
            inviting. Lead is private. It is the metal of closure, boundaries,
            and the decision to stop letting something in.
          </p>

          <p>
            This is a traditional metal tied to Earth and to Capricorn energy:
            responsibility, endurance, and the slow shaping of life through
            structure. Lead can support work that requires firm limits, long
            timelines, and the courage to become unshakable.
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Cronus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
                <Link href="/grimoire/colors/13-black">Black</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* ENERGETIC BEHAVIOR */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Energetic Behavior</h2>

          <p>
            Lead tends to feel heavy, quiet, and sealing. It supports energetic
            containment and the ability to close what has been left open. Lead
            is useful when you need to cut access, reduce interference, or stop
            leaking energy into places that do not deserve it.
          </p>

          <p>
            This metal reinforces structure. It can support discipline, long
            term focus, and the willingness to do what is necessary rather than
            what is easy. Lead can feel restrictive if you are resisting limits.
            If you are choosing limits, lead becomes protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* LEAD IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Lead in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/lead-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Lead is used for containment work, binding work, and protection
            through closure. It supports rituals that seal, block, and
            reinforce. Lead is not for quick comfort. It is for clear decisions:
            endings, boundaries, and consequences that must stay in place.
          </p>

          <p>
            Use lead symbolism carefully: sealing jars, boundary wards, and
            protective constructs that prevent unwanted access. Lead energy is
            strong for cord-cutting that needs permanence and for breaking
            patterns that only survive through open doors. The intention that
            suits lead best is direct: I close this, completely.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/lead-folklore.png"
              alt="Lead as a symbol of containment, discipline, and Saturnine boundaries"
              className="grimoire-img"
            />
          </div>

          <p>
            Lead has long carried symbolism of Saturn: time, limitation, and the
            weight of reality. In older traditions, it was associated with
            protection through heaviness and with the idea that some forces must
            be contained rather than confronted. Lead became a symbol of the
            boundary that holds.
          </p>

          <p>
            In a contemporary grimoire, lead represents consequence and closure.
            It is the metal of the final line: what you allow, what you refuse,
            and what you no longer negotiate. Lead teaches that discipline is
            not punishment. Discipline is protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Lead is toxic. Do not use it in kitchen-adjacent work, heat-based
            craft, or any practice that involves ingestion, skin absorption, or
            airborne particles. Avoid handling lead without proper safety
            measures, and rely on verified guidance for safe storage, use, and
            disposal.
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