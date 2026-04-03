// app/grimoire/parts-of-the-magickal-body/14-breasts/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BreastsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Breasts" subtitle="Nourishment, Care, and Emotional Holding">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/parts-ofthe-magickal-body/breasts1.png"
              alt="Breasts in the Magickal Body"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “To nurture is to offer life space to grow safely.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-section grimoire-text">
          <p>
            The breasts represent nourishment in its most archetypal form. In
            the magickal body they symbolize care, emotional holding, and the
            instinct to protect what is tender. This area speaks to how you give
            comfort, how you receive it, and how safe it feels to depend on
            another or allow another to depend on you.
          </p>

          <p>
            This region carries the archetype of the caretaker. Not obligation,
            but offering. The breasts are associated with sustaining life,
            soothing distress, and providing reassurance. They reflect your
            relationship with gentleness: whether you permit yourself to be
            supported or believe you must always be the one supporting others.
          </p>

          <p>
            Symbolically, they also hold memory. Emotional impressions often
            settle here as warmth, heaviness, openness, or guardedness. The
            lesson of this area is reciprocity. Care that only flows outward
            becomes depletion. Care that is received becomes connection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN THIS AREA SPEAKS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When This Area Speaks</h2>

          <div className="grimoire-text">
            <p>
              When this area speaks, it speaks through emotional closeness or
              withdrawal. It responds when you are overgiving, when you feel
              unappreciated, or when you long for reassurance but hesitate to
              ask for it.
            </p>

            <p>
              It also speaks when you are carrying emotional responsibility that
              does not belong solely to you. The sensation here often reflects
              whether care is mutual or one-sided. The body quietly notices what
              the mind tries to justify.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* SHADOW & EXPRESSION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Shadow &amp; Expression</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Expression</h3>
              <p className="grimoire-correspondence-value">
                In expression, this area represents nurturing with boundaries.
                You can give support while remaining whole yourself. You allow
                others to care for you as well. Compassion moves in both
                directions, creating connection instead of obligation.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Shadow</h3>
              <p className="grimoire-correspondence-value">
                In shadow, nurturing becomes self-erasure. You may take on the
                role of emotional caretaker for everyone around you, believing
                love must be earned through constant giving. Over time, this
                creates exhaustion and unspoken resentment. The shadow here is
                forgetting that receiving is also part of love.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MAGICKAL REFLECTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Magickal Reflection</h2>

          <div className="grimoire-text">
            <p>Where are you giving care without allowing yourself to receive it?</p>
            <p>Who are you trying to keep safe, and at what cost to yourself?</p>
            <p>
              What would change if support in your life became mutual rather
              than one-directional?
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/parts-of-the-magickal-body"
              className="grimoire-footer-link"
            >
              ← Back to Parts of the Magickal Body
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