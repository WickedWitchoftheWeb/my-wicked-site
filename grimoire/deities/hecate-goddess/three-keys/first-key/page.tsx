// app/grimoire/08-deities/hecate-goddess/three-keys/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The First Key" subtitle="">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/first-key.png"
              alt="The First Key"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="deity-hero-img"
            />
          </div>
        </section>

        {/* THE LESSON OF THE KEYS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">The Lesson of the Keys</h2>
          <p></p>
        </section>

        {/* THE FIRST KEY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading hecate-key-heading">
            The First Key
          </h2>
          <p>The Key of Shadows</p>
          <p>The Chthonic Key</p>
        </section>

        {/* FIRST KEY — DESCRIPTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Description</h2>
          <p>
            The Key of Shadows is the most feared, and often the most misunderstood,
            of Hecate’s Three Great Keys. Where the Key of Light dazzles and the Key
            of Thresholds empowers, the Key of Shadows demands courage. This is why
            it is the first key, the one Hecate gives first to test if you can walk
            through darkness without losing yourself.
          </p>
          <p>
            If you misuse the Key of Shadows or become obsessed with death or shadow,
            it can close you off from her other gifts. If you use it wisely, she will
            later entrust you with the Key of Light and the Threshold Key. The Key of
            Shadows isn’t about death, but about integration. It teaches that only by
            knowing what lies in darkness can you walk powerfully in both night and day.
          </p>
        </section>

        {/* FIRST KEY — GATE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gate</h2>
          <p>
            Gate to the Underworld:
            <br />
            It opens the door between the living and the dead.
          </p>
        </section>

        {/* FIRST KEY — FUNCTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Function</h2>
          <p>
            Access to the Underworld Current
            <br />
            With it, you can unlock the Gate and commune with ancestors, spirits, and
            the hidden powers that dwell beneath power of descent.
          </p>
          <p>
            Keeper of Secrets
            <br />
            It reveals what is hidden — ancestral truths, spiritual knowledge, personal
            shadows, collective taboos.
          </p>
          <p>
            Ancestral Wisdom
            <br />
            Access to the bloodline, the wisdom of those who came before, and the healing
            of generational wounds.
          </p>
          <p>
            Necromantic Sight
            <br />
            The ability to perceive spirits, omens, and messages from the dead.
          </p>
          <p>
            Shadow Integration
            <br />
            Helps you face your own fears, flaws, and repressed parts, making you whole and
            powerful.
          </p>
          <p>
            Protection in Darkness
            <br />
            Those who carry it are not easily deceived; once you’ve seen into shadow, illusion
            holds less power.
          </p>
        </section>

        {/* FIRST KEY — GIFTS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gifts</h2>
          <p>
            Access to truths buried in darkness
            <br />
            <br />
            Hidden knowledge
            <br />
            <br />
            Psychic depth
            <br />
            <br />
            Sight into shadow
            <br />
            <br />
            Ancestral messages
            <br />
            <br />
            Resilience against deception
            <br />
            <br />
            Emotional and spiritual power from integration
          </p>
        </section>

        {/* FIRST KEY — RISKS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Risks</h2>
          <p>
            Obsession
            <br />
            Becoming consumed by death, grief, or spirit communion; living more in the Underworld
            than in your own life.
          </p>
          <p>
            Trickster Spirits
            <br />
            Without discernment, you may open the gate to restless or deceptive entities.
          </p>
          <p>
            Psychic Overload
            <br />
            Shadow revelations can be too intense if they are not integrated with care.
          </p>
          <p>
            Isolation
            <br />
            If overemphasized, it can detach you from joy, light, and community.
          </p>
        </section>

        {/* FIRST KEY — WORKING WITH THE SHADOW KEY SAFELY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Working With the Shadow Key Safely
          </h2>
          <p>
            Always Call Hecate First
            <br />
            Let her stand as guardian at the gate. She filters who and what may pass through.
          </p>
          <p>
            Set Boundaries
            <br />
            When communicating with spirits or ancestors, always close the gate after. Use cleansing
            and banishing regularly.
          </p>
          <p>
            Set Time Limits
            <br />
            Do not linger too long in shadow work or necromancy. Stay focused and return to the physical
            dimension as soon as your mission is complete.
          </p>
          <p>
            Ground Often
            <br />
            Pair shadow and necromantic work with grounding practices:
            <br />
            walk barefoot on the earth
            <br />
            <br />
            root chakra work
            <br />
            <br />
            breathwork
            <br />
            <br />
            protective stones
          </p>
          <p>
            Carry Protective Talismans
            <br />
            Obsidian, onyx, jet — they absorb shadow without letting it overwhelm you.
          </p>
          <p>
            Balance With Light
            <br />
            Pair shadow journeys with divination or candle magick so you return with illumination,
            not just darkness.
          </p>
          <p>
            Practice Discernment
            <br />
            Not every spirit that comes is meant for you. Trust your intuition and ask Hecate to guide
            your sight if you become uncomfortable or overwhelmed.
          </p>
          <p>Hecate cannot protect you if you are not willing to protect yourself.</p>
        </section>

        {/* FIRST KEY — FAILING THE SHADOW KEY TRIAL */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Failing the Shadow Key Trial</h2>
          <p>
            Not everyone passes the Shadow Key Trial the first time. Hecate’s tests are real, and failure
            carries weight — but failure does not mean abandonment. It means you are reshaped until you’re
            ready.
          </p>
          <p>
            Hecate does not destroy the witch for failing. She never abandons those that she has chosen.
            She is Initiatrix — her tests are meant to transform, not annihilate.
          </p>
          <p>
            Failure does not mean rejection. It means initiation deferred. She allows you to fail so you can
            learn to climb out stronger.
          </p>
          <p>
            If a witch “fails,” Hecate will wait — sometimes sternly — until the witch is strong enough to hold
            the darkness without breaking.
          </p>
        </section>

        {/* FIRST KEY — WHAT FAILURE LOOKS LIKE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">What Failure Looks Like</h2>
          <p>
            Obsession With Death or Darkness
            <br />
            Becoming fixated on grief, the dead, curses, or shadow work; unable to return to balance.
          </p>
          <p>
            Fear and Avoidance
            <br />
            Rejecting the shadows completely; locking the gate out of terror and refusing to see what lies
            within.
          </p>
          <p>
            Spiritual Deception
            <br />
            Being tricked by restless spirits, illusions, or projections and mistaking them for truth.
          </p>
          <p>
            Loss of Balance
            <br />
            Letting shadow dominate your practice until joy, light, and love are pushed aside.
          </p>
        </section>

        {/* FIRST KEY — SIGNS OF A SECOND OFFERING */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Signs of a Second {"\u00A0\u00A0"}Offering of the Shadow Key
          </h2>
          <p>
            The Return of Dogs at Night
            <br />
            You hear or dream of dogs howling at liminal times.
            <br />
            Not frightening — calling.
          </p>
          <p>
            Dreams of the Gate
            <br />
            Shadowed passageways, iron gates.
            <br />
            You may find the key placed in your hand again.
          </p>
          <p>
            Recurring Ancestors or Spirits
            <br />
            They return urging you to listen.
          </p>
          <p>
            The Shadow Returns in Life
            <br />
            Themes of death, endings, or hidden truths re-emerge.
          </p>
          <p>
            Presence at the Crossroads
            <br />
            You feel her unmistakable weight at your back.
          </p>
          <p>
            The Torch in Darkness
            <br />
            A lone flame burning in deep shadow — her sign that you may walk the path again.
          </p>
        </section>

        {/* FIRST KEY — SIMPLE LIMINAL PRACTICES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Simple Liminal {"\u00A0"}Practices to Rebuild Stability
          </h2>
          <p>
            Walk the Thresholds
            <br />
            Mindful walks at dawn/dusk.
            <br />
            Whisper: “Hecate, guide my steps.”
          </p>
          <p>
            Honor Doorways
            <br />
            Place a charm or sigil near your door.
          </p>
          <p>
            Small Offerings at the Crossroads
            <br />
            Bread, coins, garlic, honey.
          </p>
          <p>
            Keep a Shadow Journal
            <br />
            Write down small things that unsettled you.
          </p>
          <p>
            Candle at the Dark Moon
            <br />
            Light one black candle; say nothing more than:
            <br />
            “Hecate, Keeper of the Keys, I honor you.”
          </p>
          <p>
            Practice Simple Acts of Release
            <br />
            Salt in water, burning bay leaves, burying apple cores — miniature shadow gates.
          </p>
          <p>
            Tend to Liminal Animals
            <br />
            Crows, snakes, foxes, stray dogs.
            <br />
            Offer water or a crumb of bread.
          </p>
          <p>
            These practices:
            <br />
            rebuild rhythm
            <br />
            <br />
            strengthen discernment
            <br />
            <br />
            keep you connected without overwhelm
            <br />
            <br />
            train your spirit to step into shadow and step back out safely
          </p>
        </section>

        {/* FOOTER LINKS */}
        <section className="zodiac-footer-links">
          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess/three-keys"
              className="zodiac-footer-link"
            >
              ← Back to Keys
            </Link>
          </p>

          <p>
            <Link
              href="/grimoire/08-deities/hecate-goddess"
              className="zodiac-footer-link"
            >
              ← Back to Hecate
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}