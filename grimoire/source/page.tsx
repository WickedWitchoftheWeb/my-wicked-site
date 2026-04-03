// app/grimoire/source/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function SourcePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Source"
        subtitle="The higher power you don’t bow to—you remember you are part of."
      >
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/elements/source.png"
            alt="Source Cosmic Image"
            className="grimoire-hero-img source-hero-img"
          />
        </section>

        <div className="grimoire-divider" />

        <section className="grimoire-section">
          <div className="grimoire-text">
            <p>
              This is my favorite term for the higher power many of us keep faith in
              and I find it to be a subtle reminder of the universal energy we stem
              from; the source of all things.
            </p>

            <p>
              To name something is to give it power, but what is &quot;Source&quot;?
            </p>

            <p>
              It&apos;s everything. Source is life itself; the kundalini, the hand
              of death and everything in between. We are nothing more than the
              Universe experiencing itself from different perspectives.
            </p>

            <p>
              Source is more than the masculine &quot;God&quot; most religions
              subscribe to, in fact that&apos;s only half of the equation. Source is
              the ultimate, making it much more than we&apos;re able to conceive
              from where we stand presently. This is why Source has split itself up
              and delegated its energy into smaller concepts for us to understand
              from the perspective of the human experience.
            </p>

            <p>
              It starts with Source; the all. Then this energy breaks itself apart
              into the masculine and feminine divine. From there it splits into your
              &apos;friendly&apos; neighborhood gods and goddesses before it&apos;s
              divided even further into you and me. We are nothing but fragmented
              Source energy and once you&apos;re able to accept this, the real fun
              can begin.
            </p>

            <p>
              The biggest step toward ascension is eliminating the belief that you
              must pray to an external god. Prayer is but a weak form of spell, the
              act of which alone forces us to surrender our power. Without the
              intention and the conscious choice to manifest the goal every day,
              you&apos;re simply making a flimsy wish and tossing it to the wind,
              hoping that some mysterious power will do the work for you.
            </p>

            <p>
              Remember, always remember, you don&apos;t need external forces. There
              is nothing you are not capable of. From astral projection to energy
              work, if you can conceive of it then it is possible. The only
              limitation in this life is your belief system.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        <section className="grimoire-section">
          <div className="grimoire-text">
            <p className="grimoire-incantation">So, what is Source?</p>
            <p className="grimoire-incantation">To put it simply,</p>
            <p className="grimoire-incantation">It&apos;s you.</p>
            <p className="grimoire-incantation">What will you create?</p>
          </div>

          <span className="wicked-signature">-Wicked</span>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINK */}
        <footer className="grimoire-footer">
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