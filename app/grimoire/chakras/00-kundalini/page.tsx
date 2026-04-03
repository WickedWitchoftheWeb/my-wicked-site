// app/grimoire/chakras/00-kundalini/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function KundaliniPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Kundalini"
        subtitle="The current that moves through the chakra system"
      >
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/chakras/1kundalini.png?updatedAt=1769743269976"
            alt="Kundalini energy rising through the chakra system"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              &quot;The power does not arrive to save you. It arrives to reveal
              what you can no longer avoid becoming.&quot;
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

         {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Overview</p>
        </section>
        <section className="grimoire-text">
          <p>
            Kundalini is the latent current of spiritual energy described in
            several yogic and tantric traditions. It is not a chakra. It is the
            force that moves through the chakra system.
          </p>

          <p>
            Chakras describe structure: where energy concentrates, how it
            expresses, and what it governs. Kundalini describes movement: how
            energy rises, reorganizes, and integrates the whole system.
          </p>

          <p>
            In traditional symbolism, kundalini is pictured as a coiled serpent
            at the base of the spine. That image points to potential. Energy is
            held in reserve and waits for the right conditions to awaken.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">What Kundalini Is</h2>

          <p>
            Kundalini is the organizing force of awakening. When it rises, it
            does not only intensify sensation or produce mystical experiences.
            It brings buried material to the surface, strengthens what is true,
            and destabilizes what is false.
          </p>

          <p>
            This is why kundalini is often described as transformative rather
            than soothing. It does not exist to decorate the personality. It
            exists to refine the personality into alignment.
          </p>

          <p>
            Hold it simply. Kundalini activates the circuit. The chakra system
            is the circuit. Your life becomes the place where activation must be
            integrated.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">How Kundalini Moves</h2>

          <p>
            In many yogic models, the central channel is called sushumna. It is
            described as the primary pathway through which kundalini ascends.
            Two complementary currents, often named ida and pingala, are
            described as winding alongside and balancing the system.
          </p>

          <p>
            In practice, this means awakening is not only upward motion. It is
            balance: steadiness, clarity, emotional processing, and nervous
            system stability that make sustained movement possible.
          </p>

          <p>
            Kundalini is commonly mapped as rising from the base of the spine
            toward the crown. That map is useful, but it is not a promise of
            linear progress. Growth revisits earlier layers because integration
            is spiral shaped.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Kundalini and the Chakras</h2>

          <p>
            Each chakra can be understood as a threshold. When kundalini reaches
            a threshold, it can intensify what is coherent there and expose what
            is incoherent. This can feel like expansion. It can also feel like
            pressure.
          </p>

          <p>
            If the foundation is weak, the system compensates. If the foundation
            is strong, the system stabilizes. This is why grounding and daily
            life integrity matter. The body and the life must be able to hold
            the charge.
          </p>

          <p>
            Kundalini is not about bypassing the human experience. It moves
            through the human experience. The goal is not escape. The goal is
            embodiment.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Awakening and Misconceptions</h2>

          <p>
            Kundalini awakening is often sensationalized. People expect constant
            bliss, psychic fireworks, or instant enlightenment. What is more
            common is change: shifts in perception, deeper emotional processing,
            stronger intuition, and a heightened need for truth in
            relationships, work, and self concept.
          </p>

          <p>
            Experiences can be subtle or intense. They can include periods of
            inspiration, periods of exhaustion, and periods of deep
            psychological reorganization. None of that automatically means
            someone is spiritually advanced. It means the system is moving.
          </p>

          <p>
            Kundalini is not a status symbol. It is a responsibility. The
            measure is integration: how you live, how you regulate, how you
            love, and how you tell the truth.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Grounding and Safety</h2>

          <p>
            Kundalini work is not about forcing an outcome. Aggressive
            techniques can overwhelm the body and mind, especially when someone
            is underfed, sleep deprived, highly stressed, or living in chaos.
            The nervous system sets the pace.
          </p>

          <p>
            If someone feels destabilized, the first response is grounding:
            rest, hydration, steady meals, time in nature, gentle movement, and
            reducing stimulation. A spiritual process still needs practical
            care.
          </p>

          <p>
            If experiences become frightening, intrusive, or persistently
            unmanageable, it is wise to seek qualified support. Spiritual
            frameworks and mental health support can coexist. Integration is
            the priority.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Working With Kundalini</h2>

          <p>
            The most reliable approach is gentle consistency. Practices that
            build capacity rather than chasing intensity are the safest path.
            Breathwork, meditation, grounding rituals, devotional practice, and
            mindful movement can all support balanced activation when done with
            restraint and respect.
          </p>

          <p>
            In this grimoire, kundalini is treated as a system principle. It
            explains why chakra work is not cosmetic. When you shift one center,
            the whole circuit responds. That is interconnectedness expressed
            through the body and spirit.
          </p>

          <p>
            If you are new to the chakra system, begin with the Root Chakra and
            move upward slowly. If you are experienced, return to foundations
            often. Strong roots hold strong current.
          </p>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/chakras" className="grimoire-footer-link">
              ← Back to Chakras
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