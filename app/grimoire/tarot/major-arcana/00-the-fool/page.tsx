// app/grimoire/tarot/major-arcana/00-the-fool/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../components/grimoire/SectionPage";

export default function TheFoolPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Fool" subtitle="Major Arcana · 0">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-THE-FOOL-HERO-IMAGE-URL"
              alt="The Fool"
              className="grimoire-hero-img"
            />
          </div>
        </section>

        {/* INTRO (as shown in your layout: aliases, number, quick verdict) */}
        <section className="grimoire-intro">
          <p>(The Jester, Madman, Beggar, Vagabond)</p>
          <p>Zero</p>
          <p>A &apos;Yes&apos; card</p>
        </section>

        {/* CORRESPONDENCES */}
        <section className="grimoire-correspondences">
          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">Element</span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/elements/air">Air</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">
              Dominant Energy
            </span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                Masculine / Day / Yang
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">Zodiac</span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                Aquarius
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">Ruling Planet</span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/astrology/02-planets/08-uranus">Uranus</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">Deity</span>
            <p className="grimoire-correspondence-value">
              <Link href="PASTE-DIONYSUS-LINK">Dionysus</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">
              Crystals &amp; Stones
            </span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                Clear Quartz
              </Link>
              {", "}
              <Link href="/grimoire/crystals-stones/green-tourmaline">
                Green Tourmaline
              </Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">Chakra</span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">
              Kabbalistic Letter
            </span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/kabbalah/hebrew-letters/01-aleph">Aleph</Link>
            </p>
          </div>

          <div className="grimoire-correspondence">
            <span className="grimoire-correspondence-label">
              Path on the Tree of Life
            </span>
            <p className="grimoire-correspondence-value">
              <Link href="/grimoire/kabbalah/tree-of-life/11-paths/01-kether-to-chokmah">
                First Path: Kether (Crown) to Hokhmah (Wisdom)
              </Link>
            </p>
          </div>
        </section>

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              <strong>Upright:</strong> New beginnings, confidence, fun, divine
              trust
            </p>
            <p>
              <strong>Reversed:</strong> Impulsiveness, naivety, distraction,
              lack of realism
            </p>
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Description</h2>

          <div className="grimoire-text">
            <p>
              The Fool is the beginning of the tarot and the beginning of
              life&apos;s journey. As the tarot brings us some direction to the
              web of life, The Fool indicates a decision to leave the past
              behind and take a divine leap of faith in a new direction with
              complete trust in Source (one&apos;s Higher Self). This card
              encourages us to go forward with a childlike wonder and an open
              heart, unafraid of all of the possibilities ahead. The Fool has
              no concern for the weight and responsibilities, expectations of
              the material and physical world.
            </p>
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* UPRIGHT INTERPRETATION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Upright Interpretation</h2>

          <div className="grimoire-text">
            <p>
              This card heralds a new way of life. This could be indicative of a
              spiritual journey, as it is the first card in the life path (or
              web of life), or it could foretell the start of a new project,
              career, relationship, adventure, etc. You&apos;re out of sync with
              the world around you, but this is a blessing. You&apos;re allowing
              yourself to step into alignment, making for a very exciting time
              of open possibilities.
            </p>
            <p>
              Chances are you&apos;re drawn to solitude during this period, and
              it feels natural. Your perspective is shifting, and you may be
              outgrowing old thought patterns. During a transition like this,
              it&apos;s wise to take time to reflect and connect with your most
              authentic self.
            </p>
            <p>
              You&apos;re ignoring all doubts and fears of the Shadow and Ego
              (natural instincts, represented by the dog in the Rider-Waite
              deck) because you trust in your Higher Self (Source, the Universe).
              You know you are safe to let your inner child wander free and
              dream. This is an extremely positive card, indicative of good
              news, an open and playful heart, and childlike, abundant energy.
              Leave behind all that no longer serves you and trust that you
              already have all that you need.
            </p>
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* IMPORTANT NOTE */}
        <section className="grimoire-note-block">
          <h2 className="grimoire-note-heading">Important Note</h2>

          <div className="grimoire-text">
            <p>
              The Fool can be a warning card depending on your situation. You
              may want to exercise caution by taking a step back and
              re-evaluating all the factors of the situation in a different
              light before taking the leap.
            </p>
          </div>

          <span className="wicked-signature">-Wicked</span>
        </section>

        {/* REVERSED INTERPRETATION */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Reversed Interpretation</h2>

          <div className="grimoire-text">
            <p>
              Consider your current perspective. It&apos;s likely that you may
              need to sharply define the boundaries between reality and fantasy
              in order to move on from your current situation or blockage. You
              may be lacking the necessary security and support to move forward
              independently. Look to others in this time.
            </p>
            <p>
              Your aim is valid, but now is the time for realism. This card may
              foretell immaturity in the situation and call you forward to act
              as the &quot;adult&quot; rather than the &quot;child&quot; or
              &quot;fool&quot;. Take all sides of the situation into account and
              move forward with focus and grace.
            </p>
            <p>
              This may be a good time to observe and recognize your doubts and
              fears, as they may be more valid than you realize. Are you
              ignoring your responsibilities? If you don&apos;t tie up the loose
              ends in your life, they may create tangles.
            </p>
          </div>

          <div className="grimoire-divider" />
        </section>

        {/* WICKED PERSPECTIVE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Wicked Perspective</h2>

          <div className="grimoire-text">
            <p>
              I&apos;ve heard The Fool described as having been in possession of
              divine madness. I absolutely adore this concept, because deciding
              to step away from the herd and follow your soul&apos;s purpose can
              be a maddening process. In fact, all of spirituality itself feels
              this way at one point or another.
            </p>
            <p>
              But The Fool is unconcerned, moving forward willingly with an
              attitude of divine acceptance. The optimism of The Fool is truly
              inspiring. This card also hints at the abundance of life by
              challenging us to trust in our ability to use our instincts to
              provide for us.
            </p>
            <p>
              When The Fool appears to us reversed, I think it&apos;s important
              to tap into the Ego and listen to what it&apos;s trying to tell us
              beneath its panicked overlay. The Ego, like all things, has a
              purpose in our lives, and achieving inner peace means learning to
              accept the validity of each moving variable within ourselves,
              including that of the ominous, Big Bad Ego. Hear it out.
            </p>
            <p>
              It may simply be cautioning you to find a more stable foothold
              before putting all of your weight on that questionable rock.
            </p>
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/tarot/major-arcana"
              className="grimoire-footer-link"
            >
              ← Back to Major Arcana
            </Link>
          </p>

          <p>
            <Link href="/grimoire/tarot" className="grimoire-footer-link">
              ← Back to Tarot
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