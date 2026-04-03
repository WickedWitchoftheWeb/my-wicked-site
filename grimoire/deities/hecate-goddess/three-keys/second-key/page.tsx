// app/grimoire/08-deities/hecate-goddess/three-keys/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Second Key" subtitle="">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/second-key.png"
              alt="The Second Key"
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

        {/* THE SECOND KEY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading hecate-key-heading">
            The Second Key
          </h2>
          <p>The Key of Light</p>
          <p>The Stellar Key</p>
        </section>

        {/* SECOND KEY — DESCRIPTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Description</h2>
          <p>
            The Key of Light is the most exalted of Hecate’s Great Keys, yet often
            the most dangerously misunderstood. Where the Key of Shadows teaches
            courage and integration, the Key of Light teaches truth. Its brilliance
            is not gentle or comforting — it is revelation, piercing and undeniable.
            Hecate’s torch does not merely illuminate; it exposes. It burns away
            illusion, fantasy, self-deception, and spiritual glamour.
          </p>
          <p>
            This is the key she gives only after the witch has proven they can walk
            through darkness without losing themselves. For only those who have met
            the shadow honestly can be trusted with the sight that Light provides.
            The Key of Light grants access to divine insight, prophecy, and the
            celestial current — but its radiance must be balanced with discipline,
            grounding, and humility.
          </p>
          <p>
            This key is not about brightness, but vision. It teaches that clarity is
            power, but untempered clarity can be destructive. To wield this key well
            is to learn how to see without burning out, how to know without becoming
            arrogant, and how to walk with wisdom instead of illusion.
          </p>
        </section>

        {/* SECOND KEY — GATE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gate</h2>
          <p>
            Gate of Illumination
            <br />
            This key opens the Gate of Insight — the door to prophecy, intuition,
            divine revelation, and sudden knowing.
            <br />
            It bridges the witch’s mind with the celestial current, granting access
            to higher truth.
          </p>
        </section>

        {/* SECOND KEY — FUNCTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Function</h2>
          <p>
            Access to the Source Current
            <br />
            The Key of Light connects the witch to the divine flow of knowledge,
            intuition, prophecy, and visionary guidance.
            <br />
            Where the Shadow Key descends, this key ascends.
          </p>
          <p>
            Torch in the Darkness
            <br />
            It does not replace shadow — instead, it illuminates shadow so it can be
            integrated.
            <br />
            This is the key that allows a witch to see what the darkness hides without
            being consumed by it.
          </p>
          <p>
            Bridge to the Celestial Realm
            <br />
            The Key of Light links the witch to astral, dream, and vision realms.
            <br />
            Through it, dreams become messages, omens become clearer, and symbols become
            living language.
          </p>
          <p>
            Clarity
            <br />
            It brings sudden insight, epiphanies, intuitive downloads, and the power to
            discern truth from illusion.
          </p>
          <p>
            Alignment With Destiny
            <br />
            This key shines light upon the path ahead, revealing choices, opportunities,
            and warnings.
            <br />
            It shows the witch what is coming — and what is meant.
          </p>
        </section>

        {/* SECOND KEY — GIFTS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gifts</h2>
          <p>
            Prophecy — dreams, sudden knowing, intuitive foresight
            <br />
            <br />
            Divination mastery — stronger readings, clearer signs
            <br />
            <br />
            Illumination of truth — ability to see people, situations, and spirits clearly
            <br />
            <br />
            Higher knowledge — visions, insights, downloads
            <br />
            <br />
            Clear spiritual vision — ability to navigate omen, symbol, and synchronicity
            <br />
            <br />
            Alignment with destiny — seeing the direction of your path
            <br />
            <br />
            Protection through clarity — light reveals deception, glamour, and spiritual falsehood
          </p>
        </section>

        {/* SECOND KEY — RISKS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Risks</h2>
          <p>
            Overexposure
            <br />
            Too much vision at once can overwhelm, burn out, or destabilize the mind.
          </p>
          <p>
            False Light
            <br />
            Spirits, illusions, or even your own projections may mimic “truth.”
            <br />
            Not every bright thing is divine.
          </p>
          <p>
            Ego Inflation
            <br />
            Believing sight makes you superior, chosen, or beyond reproach.
            <br />
            This is the most dangerous pitfall of the Light Key.
          </p>
          <p>
            Floating
            <br />
            Becoming ungrounded, living in visions instead of earthly life, disconnecting
            from the body.
          </p>
          <p>
            Isolation
            <br />
            Knowing truth others don’t can lead to loneliness or a sense of spiritual
            detachment if not tempered with compassion.
          </p>
          <p>
            Spiritual Confusion
            <br />
            Without grounding, the mind can confuse intuition, imagination, and authentic
            revelation.
          </p>
        </section>

        {/* SECOND KEY — WORKING WITH THE LIGHT KEY SAFELY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Working With the Light Key Safely</h2>
          <p>
            Anchor Your Visions
            <br />
            Record everything.
            <br />
            Visions are fleeting, and writing them keeps the mind from spiraling into fantasy.
          </p>
          <p>
            Balance Sight With Embodiment
            <br />
            After divination, prophecy, or deep intuitive work:
            <br />
            eat something
            <br />
            <br />
            touch the ground
            <br />
            <br />
            breathe deeply
            <br />
            <br />
            reconnect with your physical senses
            <br />
            <br />
            Excess light must be brought back into the body.
          </p>
          <p>
            Discern Relentlessly
            <br />
            Ask:
            <br />
            “Is this truth?”
            <br />
            <br />
            “Is this projection?”
            <br />
            <br />
            “Is this a spirit speaking, or is it me?”
            <br />
            <br />
            “Does this align with Hecate’s current?”
            <br />
            <br />
            Truth withstands scrutiny. Illusion does not.
          </p>
          <p>
            Reach for Shadow When Needed
            <br />
            If visions become too bright, too fast, or too intense:
            <br />
            return to shadow work — it grounds the light.
          </p>
          <p>
            Set Boundaries Around Channeling
            <br />
            Limit time spent in divinatory trance or celestial communion.
            <br />
            Your body must keep pace with your spirit.
          </p>
          <p>
            Cleanse Often
            <br />
            Light attracts — but not everything it attracts should enter.
          </p>
        </section>

        {/* SECOND KEY — FAILING THE LIGHT KEY TRIAL */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Failing the Light Key Trial</h2>
          <p>
            Failure of the Light Key Trial is not dramatic; it is subtle and often internal.
            <br />
            It occurs when the witch cannot yet handle truth without distortion.
          </p>
          <p>
            Overconfidence
            <br />
            Believing every vision is absolute truth
            <br />
            (or that you cannot be wrong).
          </p>
          <p>
            Misinterpretation
            <br />
            Seeing symbols or omens and forcing them to mean what you want instead of what they mean.
          </p>
          <p>
            Spiritual Blindness
            <br />
            Too much light blinds — insight becomes confusion, intuition becomes noise.
          </p>
          <p>
            Illusion-Masquerading-As-Truth
            <br />
            Trickster spirits, glamour, or ego inflation distort revelations.
          </p>
          <p>
            Avoidance of Earthly Life
            <br />
            Letting sight take precedence over embodiment, grounding, or real-world responsibilities.
          </p>
          <p>
            Hecate does not revoke the Light Key — she simply dims it until you are ready to see again.
          </p>
        </section>

        {/* SECOND KEY — SIGNS OF A SECOND OFFERING */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Signs of a Second {"\u00A0\u00A0"}Offering of the Light Key
          </h2>
          <p>
            Sudden Clarity After a Long Period of Fog
            <br />
            Not excitement — calm, quiet knowing.
          </p>
          <p>
            Dreams Flood With Symbols
            <br />
            Dreams becoming clearer, structured, prophetic.
          </p>
          <p>
            The Torch Appears in Meditation
            <br />
            Bright, unwavering, illuminating what you were once afraid to see.
          </p>
          <p>
            Omens Arrive in Clusters
            <br />
            Synchronistic numbers, messages, or symbols showing up repeatedly.
          </p>
          <p>
            The Return of Prophetic Sensitivity
            <br />
            Your intuition sharpens back into focus — not overwhelming, but steady.
          </p>
          <p>
            A Pull Toward Divination Again
            <br />
            Cards, scrying, or visions “call” to you gently.
          </p>
          <p>
            A Sense of Readiness Rather Than Fear
            <br />
            You feel strong enough to know.
          </p>
        </section>

        {/* SECOND KEY — SIMPLE LIMINAL PRACTICES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Simple Liminal {"\u00A0"}Practices to Build Light Stability
          </h2>
          <p>
            Candle of Clarity
            <br />
            Light a single white or gold candle. Whisper:
            <br />
            “Reveal only the truth that serves.”
          </p>
          <p>
            Journal of Illumination
            <br />
            Write down intuitive flashes, dreams, symbols.
            <br />
            Patterns reveal truth.
          </p>
          <p>
            Sunrise or Moonrise Observation
            <br />
            Sit quietly and watch the light shift.
            <br />
            Train your mind to observe without interpreting.
          </p>
          <p>
            Divination in Small Doses
            <br />
            One card, one rune, one omen.
            <br />
            Build your tolerance for light slowly.
          </p>
          <p>
            Offer a Drop of Honey
            <br />
            To honor the sweetness of clarity and the humbleness needed to hold truth.
          </p>
          <p>
            Practice Embodiment After Every Vision
            <br />
            Touch your feet to the floor.
            <br />
            Press your hand to your heart.
            <br />
            Name three things you can physically feel.
            <br />
            Light must be anchored.
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