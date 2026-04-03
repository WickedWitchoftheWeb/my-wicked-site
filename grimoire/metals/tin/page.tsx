// app/grimoire/metals/tin/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function TinPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Tin" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tin-hero.png"
              alt="Tin"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Expansion begins when you believe there is room.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Tin is a metal of expansion, optimism, and structural support. In
            the physical world, tin is soft on its own but becomes powerful
            when combined with other metals. It has long been used to protect,
            coat, and reinforce. Tin extends durability and improves function
            through collaboration.
          </p>

          <p>
            Energetically, tin carries Jupiterian fire: growth, opportunity,
            and forward motion. It supports confidence that is generous rather
            than aggressive. Tin does not dominate. It enlarges what is already
            possible and encourages belief in wider horizons.
          </p>

          <p>
            This is a metal aligned with Fire and Sagittarius energy. Tin
            supports exploration, philosophy, leadership through inspiration,
            and the courage to pursue something bigger than the current
            container.
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
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deity</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/deities">Zeus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac Signs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
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
            Tin tends to feel uplifting, expansive, and steady in its optimism.
            It supports confidence without recklessness and ambition without
            cruelty. Tin energy strengthens belief in growth and reinforces the
            willingness to take calculated risks.
          </p>

          <p>
            This metal is especially useful when you need encouragement to move
            beyond limitation. Tin amplifies opportunity and reinforces faith in
            progress. It does not create expansion out of nothing. It strengthens
            what already has potential.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* TIN IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Tin in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tin-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Tin is powerful for abundance rituals, opportunity work, and spells
            that support growth in career, study, or personal development. It
            pairs well with intentions focused on expansion, prosperity, and
            success through alignment rather than force.
          </p>

          <p>
            Use tin symbolically through coated objects, alloy tools, or
            representations of protection that allow growth without exposure.
            Tin is strongest when paired with clear direction and bold belief.
            The intention that suits tin best is simple: I expand into what is
            possible.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/tin-folklore.png"
              alt="Tin as a symbol of expansion, optimism, and Jupiterian growth"
              className="grimoire-img"
            />
          </div>

          <p>
            Tin has historically been associated with Jupiter and expansion.
            Its role in strengthening other metals shaped its symbolic meaning:
            support that enables growth. In older correspondences, tin was tied
            to leadership, benevolence, and protective abundance.
          </p>

          <p>
            In a contemporary grimoire, tin represents encouragement and
            upward movement. It is the metal of belief strengthened by action.
            Tin teaches that expansion requires courage, but it rewards those
            willing to grow.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Tin is generally stable, but alloys and coatings may vary. Avoid
            unsafe heating practices and verify composition before using in
            kitchen-adjacent or skin-contact applications. Always practice
            informed handling with unknown materials.
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