// app/grimoire/metals/steel/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SteelPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Steel" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/steel-hero.png"
              alt="Steel"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Temper yourself. Become unbreakable.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Steel is a metal of refinement through pressure. Formed by combining
            iron with controlled amounts of carbon and other elements, steel is
            stronger, harder, and more resilient than iron alone. In the
            physical world, steel builds bridges, structures, blades, and
            frameworks that must endure force without collapse.
          </p>

          <p>
            Energetically, steel carries Martian fire in disciplined form. It
            supports protection, strength, and decisive action, but with greater
            control and endurance than raw iron. Steel does not flare. It
            tempers. It becomes stronger through heat and testing.
          </p>

          <p>
            This is a metal aligned with Fire and the force of Mars. It
            resonates with Aries and Scorpio energy: initiative, intensity,
            survival, and transformation under pressure. Steel supports
            resilience that has been earned.
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
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
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
            Steel tends to feel steady, protective, and highly controlled. It
            supports firm boundaries and sustained action. Steel energy is less
            impulsive than iron. It is deliberate. It strengthens resolve and
            reinforces structure when life demands endurance.
          </p>

          <p>
            This metal is especially useful when you need to withstand
            pressure. Steel encourages resilience that does not fracture under
            stress. It supports self discipline, controlled power, and the
            willingness to be tested without surrendering your position.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* STEEL IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Steel in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/steel-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Steel is powerful for protection, defensive wards, and rituals that
            reinforce personal strength. It supports spellwork focused on
            endurance, disciplined action, and safeguarding space. Steel tools
            and symbolic blades often represent clarity, protection, and the
            cutting away of what weakens.
          </p>

          <p>
            Use steel in ritual tools, protective charms, or symbolic objects
            that represent tempered strength. Steel pairs well with firm
            declarations and boundary work. The intention that suits steel best
            is simple: I endure, and I stand firm.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/steel-folklore.png"
              alt="Steel as a symbol of endurance, discipline, and protective strength"
              className="grimoire-img"
            />
          </div>

          <p>
            Steel carries forward iron&apos;s protective symbolism but adds the
            meaning of refinement. Through controlled heat and pressure, iron is
            transformed into something stronger and more reliable. That process
            shaped steel&apos;s modern symbolism: resilience earned through
            testing.
          </p>

          <p>
            In a contemporary grimoire, steel represents tempered power. It is
            not raw aggression. It is disciplined force. Steel teaches that
            strength becomes stable when it is shaped with intention.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Steel tools and objects can be sharp and heat conductive. Use
            appropriate safety precautions when handling, cutting, or heating.
            Avoid unsafe practices and always understand the material you are
            working with.
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