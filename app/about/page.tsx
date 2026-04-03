// app/about/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../components/grimoire/SecondaryHeader";
import SectionPage from "../../components/grimoire/SectionPage";

export default function AboutPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="The Wicked Witch of the Web"
        subtitle="Giving Power Back to the People"
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/wicked%20about/The%20Five%20Wicked%20Points.png?updatedAt=1769636388934"
            alt="The Five Wicked Points"
            className="grimoire-hero-img-wide"
          />
        </section>

        <div className="grimoire-divider-glow" />

        {/* BRAND ABOUT */}
        <section className="grimoire-article">
          <div className="grimoire-text">
            <p>
              The Wicked Witch of the Web is a living body of work devoted to
              returning power and authority to people of all backgrounds,
              religions, and belief systems. You do not need to be a witch to find
              power here.
            </p>

            <p>
              This work is not about belief, obedience, or identity. It is about
              remembrance. It is about reclaiming the power that has always
              belonged to you.
            </p>

            <p>
              The teachings of The Wicked Witch of the Web are rooted in the Five
              Wicked Points, five equal forces that work together as a unified
              system of power, awareness, intuition, sovereignty, and alchemy.
            </p>
          </div>
        </section>

        {/* SPACE + GLOW before Five Wicked Points */}
        <div className="grimoire-divider-glow" />

        <h2 className="grimoire-subheading">The Five Wicked Points</h2>

        <div className="grimoire-divider-glow" />

        {/* FIVE WICKED POINTS (FULL COPY PRESERVED) */}
        <section className="grimoire-article">
          <div className="grimoire-text">
            <p className="grimoire-callout">Source, Power</p>
            <p>
              To truly claim your power, you must understand where it comes
              from. Regardless of how the divine is named or understood, all
              things arise from the same origin. It is the Source of the All.
            </p>
            <p>
              We are eternal spiritual beings having a temporary human
              experience, all fractals of the Source itself. Power is not
              something granted from outside. It is something remembered from
              within.
            </p>

            <div className="grimoire-divider-glow" />

            <p className="grimoire-callout">Air, Awareness</p>
            <p>
              Awareness is the breath of understanding. It is the ability to
              perceive, question, and name reality as it is. Through Air, truth
              moves, thoughts form, and meaning takes shape.
            </p>
            <p>
              Without awareness, power remains unconscious and easily
              misdirected. Through awareness, the mind becomes a tool rather
              than a cage.
            </p>

            <div className="grimoire-divider-glow" />

            <p className="grimoire-callout">Water, Intuition</p>
            <p>
              Emotion is how life is experienced, and it is how power is
              generated. Emotions are energy, and energy is power.
            </p>
            <p>
              Water governs the inner world of memory, instinct, and emotional
              truth. When disconnected from feeling, power collapses. When
              honored and understood, emotional energy becomes a force capable
              of creation or destruction.
            </p>

            <div className="grimoire-divider-glow" />

            <p className="grimoire-callout">Earth, Sovereignty</p>
            <p>Power cannot be expressed if it is not owned.</p>
            <p>
              Sovereignty is the act of belonging fully to yourself. Your body,
              your boundaries, your choices, and your life. Without self
              ownership, power fragments and is easily taken.
            </p>
            <p>
              True freedom begins when authority is reclaimed from external
              systems and rooted firmly within the self.
            </p>

            <div className="grimoire-divider-glow" />

            <p className="grimoire-callout">Fire, Alchemy</p>
            <p>Alchemy is the power of change made real.</p>
            <p>
              Once power is reclaimed, it demands expression. Fire governs
              transformation, the will to act, to reshape, and to move reality
              rather than submit to it. Through alchemy, intention becomes form
              and awareness becomes lived experience.
            </p>
            <p>
              This is the foundation of Wicked. Not a doctrine. Not a hierarchy.
              A system of remembrance for those ready to reclaim their power and
              live from it.
            </p>
          </div>
        </section>

        <div className="grimoire-divider-glow" />

        {/* WICKED (not huge) */}
        <h2 className="grimoire-subheading">Wicked</h2>

        <div className="grimoire-divider-glow" />

        {/* WICKED BODY (FULL COPY PRESERVED) */}
        <section className="grimoire-article">
          <div className="grimoire-text">
            <p>
              In this life, I have been a practicing witch for as long as I can
              remember. Long before I had language for it, I was already
              listening, already watching, already sensing the unseen currents
              that move beneath the surface of the world.
            </p>

            <img
              src="https://ik.imagekit.io/w1ck3d/wicked%20about/Wicked%20Horns%20Triple%20Goddess.png?updatedAt=1769636391465"
              alt="Wicked portrait"
              className="grimoire-float-right-img"
            />

            <p>
              I have been persecuted. I have been hanged, burned alive, drowned.
              I have been silenced, pushed aside, invalidated, cast out, and
              banished for what I knew and for what I refused to renounce. I
              recognize these memories the way one recognizes a scar that still
              aches when touched. My soul is older than my body, and I carry the
              weight of many lifetimes lived.
            </p>

            <p>In this life, I decided I would no longer be quiet.</p>

            <p>
              I decided I would use my voice. I decided I would speak for those
              who could not, for those who were erased, for those whose
              knowledge was deemed dangerous simply because it could not be
              controlled. I decided I would stop shrinking myself to survive.
            </p>

            <p>
              I will not hide in the shadows for another lifetime. I will stand
              in the sun and share what I have learned across incarnations with
              anyone brave enough to listen.
            </p>

            <p>
              This is not a website, this is the Wicked Grimoire. This is a
              compilation of my sacred works from this lifetime and the ones I
              have lived before. It is a conduit for the messages I have
              received from the divine and the teachings it required me to
              learn. This ever-evolving space is more than code or content. It
              is the pieces of my soul, gathered at last, and offered whole.
            </p>

            <p>
              What lives here is not meant for everyone. I will not soften
              itself to be understood. I will not ask permission to exist.
            </p>

            <p>
              If you are drawn here, a part of you already knows why, even if it
              hides beneath the surface. Step forward with intention, or do not
              step at all.
            </p>

            <div style={{ clear: "both" }} />
          </div>
        </section>

        <div className="grimoire-divider-glow" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/" className="grimoire-footer-link">
              ← Back to Domicile
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}