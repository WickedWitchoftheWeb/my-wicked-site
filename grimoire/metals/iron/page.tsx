// app/grimoire/metals/iron/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function IronPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Iron" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/iron-hero.png"
              alt="Iron"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Strength is not loud. It is immovable.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Iron is a metal of force, defense, and grounded power. In the
            physical world, iron forms the backbone of tools, weapons,
            architecture, and infrastructure. It is dense, magnetic, and
            essential to strength in both industry and the human body. Iron
            builds frameworks that hold weight.
          </p>

          <p>
            Energetically, iron carries the current of Mars: direct, decisive,
            and protective. It supports boundaries that are not negotiable and
            action that does not hesitate. Iron does not polish itself for
            approval. It stands. It shields. It acts.
          </p>

          <p>
            This is a metal tied to fire and blood: to courage, survival, and
            instinct sharpened through experience. Iron reinforces the part of
            you that will not back down when something matters.
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
              <p className="grimoire-correspondence-value">
                <span className="grimoire-correspondence-label">Color</span>
              </p>
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
            Iron tends to feel grounding, forceful, and protective. It supports
            decisive movement and reinforces physical and energetic boundaries.
            When iron is present, energy becomes clearer and more contained.
            This is not subtle influence. This is structural reinforcement.
          </p>

          <p>
            Iron is especially useful when you need to reclaim authority over
            your space, your body, or your direction. It strengthens resolve,
            reduces hesitation, and stabilizes reactive emotion into focused
            action. Iron asks one thing: are you willing to stand by your
            decision.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IRON IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Iron in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/iron-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Iron is widely used in protection work. It supports shielding,
            warding, boundary reinforcement, and defensive ritual practice.
            Horseshoes, nails, blades, and iron tools have long been associated
            with keeping unwanted forces out and strengthening what remains
            inside.
          </p>

          <p>
            Use iron in amulets, threshold protections, and tools meant to
            represent strength and resilience. Iron pairs well with clear
            commands and strong declarations. It is best used when you are not
            negotiating. The intention that suits iron is simple: I protect what
            is mine.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/iron-folklore.png"
              alt="Iron as a symbol of protection, war, and resilience"
              className="grimoire-img"
            />
          </div>

          <p>
            Iron holds a strong place in folklore as a protective material.
            Across cultures, iron has been used to ward against harmful forces,
            reinforce doorways, and symbolically defend households. Its
            association with weapons and tools shaped its meaning: iron is what
            you rely on when survival matters.
          </p>

          <p>
            In a contemporary grimoire, iron represents disciplined strength.
            It is not ornamental. It is functional. Iron teaches that protection
            is not fear. It is responsibility. It is the choice to guard what
            has value.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Iron can rust and degrade when exposed to moisture and certain
            environments. If you are using iron in physical forms, keep the use
            practical and informed. Avoid unsafe handling practices, especially
            with sharp tools or heat.
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