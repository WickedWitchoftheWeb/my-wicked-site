// app/grimoire/astrology/06-houses/08-eighth-house/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function EighthHousePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Eighth House"
        subtitle="Transformation, Power, and the Sacred Unknown"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="/houses/8-house.png"
            alt="The Eighth House"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The Eighth House is where you stop pretending. It is the threshold
              between who you were and who you will become, and it does not open
              for the version of you that is still hiding.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="grimoire-intro">
          <p>
            The Eighth House is the House of transformation. It governs death
            and rebirth cycles, intimacy, shared resources, and the deeper
            realities we cannot control. This is the realm of shadow work,
            healing, power, and the kind of truth that changes you.
          </p>

          <p>
            This House reveals how you merge with others, emotionally,
            energetically, and materially. It speaks to trust, vulnerability, and
            the exchange of power. It also rules inheritance, debt, taxes, and
            the resources you share with partners, institutions, and systems.
          </p>

          <p>
            The Eighth House is not “dark” for the sake of being dark. It is
            sacred because it is real. It is the place where endings teach you
            how to live, where fear becomes initiation, and where surrender
            becomes strength.
          </p>
        </section>

        {/* WHAT THIS HOUSE GOVERNS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What This House Governs</h2>

          <p className="grimoire-text">Transformation, endings, and rebirth cycles</p>
          <p className="grimoire-text">
            Intimacy, vulnerability, trust, and emotional merging
          </p>
          <p className="grimoire-text">
            Shared resources, finances, and energetic exchange
          </p>
          <p className="grimoire-text">
            Inheritance, debt, taxes, and financial entanglements
          </p>
          <p className="grimoire-text">
            Shadow work, healing, power dynamics, and taboo truth
          </p>
        </section>

        {/* BODY ASSOCIATIONS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Body Associations</h2>

          <p className="grimoire-text">
            The Eighth House is associated with the body’s deeper systems of
            survival and regeneration. It speaks to transformation at the root,
            where life is created, released, and renewed.
          </p>

          <p className="grimoire-text">
            In traditional astrology, this House often echoes themes of the
            reproductive organs, elimination, and the body’s relationship to
            stress, intensity, and healing through release. It can also reflect
            the somatic experience of trust, fear, and surrender.
          </p>
        </section>

        {/* WHAT ACTIVATES THIS HOUSE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">What Activates This House</h2>

          <p className="grimoire-text">
            The Eighth House activates when life brings you to a threshold. It
            becomes louder during seasons of loss, deep healing, intimacy
            turning points, and moments where you are asked to confront what you
            avoid.
          </p>

          <p className="grimoire-text">
            Transits through this House can bring powerful psychological shifts,
            relationship merging, financial entanglements, and confrontations
            with fear. It can also activate when you are ready to release an old
            identity, heal a wound at the root, or reclaim power you gave away.
          </p>

          <p className="grimoire-text">
            This House teaches that control is not safety. Real safety comes
            from truth. Real power comes from the courage to transform.
          </p>
        </section>

        {/* WHEN THIS HOUSE GETS LOUD */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">When This House Gets Loud</h2>

          <p className="grimoire-text">
            Major endings, grief cycles, and irreversible life transitions
          </p>
          <p className="grimoire-text">
            Deep intimacy, trust tests, and relationship merging
          </p>
          <p className="grimoire-text">
            Financial entanglements involving shared money or obligations
          </p>
          <p className="grimoire-text">
            Therapy seasons, shadow work, and spiritual initiation
          </p>
          <p className="grimoire-text">
            Moments where you must release control to reclaim power
          </p>
        </section>

        {/* QUESTIONS THIS HOUSE ASKS */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Questions This House Asks</h2>

          <p className="grimoire-text">
            What am I afraid to feel, and what is it protecting?
          </p>
          <p className="grimoire-text">
            Where do I give away power in exchange for belonging?
          </p>
          <p className="grimoire-text">
            What truth am I avoiding because it would change everything?
          </p>
          <p className="grimoire-text">
            What part of me is ready to die so something real can live?
          </p>
          <p className="grimoire-text">
            What does trust require of me, and can I meet it?
          </p>
        </section>

        {/* SYMBOLIC ASSOCIATION */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Symbolic Associations</h2>

          <p className="grimoire-text">
            The Eighth House is traditionally associated with{" "}
            <span className="grimoire-link">
              <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">Scorpio</Link>
            </span>
            . This symbolic affinity reflects intensity, depth, transformation,
            and the sacred confrontation with truth that leads to rebirth.
          </p>
        </section>

        {/* FOOTER LINKS — STANDARD TWO */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/astrology/06-houses"
              className="grimoire-footer-link"
            >
              ← Back to The Astrological Houses
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