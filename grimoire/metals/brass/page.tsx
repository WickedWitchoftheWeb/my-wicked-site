// app/grimoire/metals/brass/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BrassPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Brass" subtitle="">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/brass-in-craft.png"
              alt="Brass"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Beauty is not the opposite of function. It is function, polished.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Brass is a metal of refinement, attraction, and cultivated presence.
            Known for its warm golden tone and its practical durability, brass is
            used in instruments, fixtures, jewelry, hardware, and objects made to
            be touched often and seen clearly. It holds shape, takes polish, and
            carries a steady kind of shine that feels intentional.
          </p>

          <p>
            Energetically, brass is Venusian: it supports harmony, beauty, charm,
            and relationship. It carries the feeling of alignment and social ease,
            like a room that instantly makes sense. Brass helps you adjust the
            signal you give off: smoothing rough edges, strengthening appeal, and
            making your presence feel composed.
          </p>

          <p>
            This is a metal that understands balance and craft. It favors grace,
            reciprocity, and the kind of power that persuades without force. Brass
            is not loud. Brass is magnetic.
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
                <Link href="/grimoire/elements/air">Air</Link>
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
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">Libra</Link>
                {", "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
            Brass tends to feel smoothing, social, and clarifying. It helps your
            energy present as coherent: less scattered, less reactive, more
            deliberately shaped. Brass is especially supportive for Libra work:
            negotiation, diplomacy, aesthetics, and the ability to hold your
            ground without becoming harsh.
          </p>

          <p>
            It can also behave like a gentle amplifier of attraction. Not in a
            desperate way, but in a composed way: the kind that makes you feel
            more confident in your own skin and more aware of how you move through
            a room. Brass rewards tact, intention, and clean boundaries.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* BRASS IN WITCHCRAFT */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Brass in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/brass-in-craft.png"
              alt="Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <p>
            Brass is excellent for spellwork tied to attraction, harmony, beauty,
            and relational balance. It supports workings that smooth conflict,
            strengthen charm, and create a sense of ease in the spaces where you
            meet others. Brass is also useful for boundary work that needs to feel
            polite and immovable at the same time.
          </p>

          <p>
            Use brass in jewelry, keys, clasps, bells, charms, and small altar
            objects that represent refinement and choice. Brass is a strong
            material for glamour work, social protection, and rituals where you
            need to reassert your value without performing or pleading. The
            intention that suits brass best is clear: I choose what matches me.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITIONS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Traditions</h2>

          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/metals/brass-folklore.png"
              alt="Brass as a symbol of craft, beauty, and social harmony"
              className="grimoire-img"
            />
          </div>

          <p>
            Brass is tied to lived tradition through the objects people keep
            close: instruments, household fixtures, ornamentation, and tools of
            daily ritual. It is often associated with refinement and status, but
            also with maintenance: brass must be cared for to stay bright. That
            makes it a potent symbol for relationships, reputations, and the way
            harmony is built through attention.
          </p>

          <p>
            In a contemporary grimoire, brass can represent the art of shaping
            your world without force. It is the metal of social intelligence,
            elegant boundaries, and beauty that holds steady. Brass teaches that
            attraction is not only about being wanted: it is also about being
            aligned.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CAUTION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Caution</h2>

          <p>
            Brass is an alloy, and its composition can vary. If you are using
            brass in skin-contact or kitchen-adjacent ways, keep the use practical
            and informed. Avoid unsafe practices, especially with heat, liquids,
            or any method you have not verified as safe.
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