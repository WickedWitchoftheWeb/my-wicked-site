// app/grimoire/08-deities/hecate-goddess/three-keys/page.tsx
import Link from "next/link";
import Image from "next/image";
import SecondaryHeader from "../../../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../../../components/grimoire/SectionPage";

export default function Page() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="The Third Key" subtitle="">
        {/* HERO IMAGE */}
        <section className="zodiac-hero">
          <div className="zodiac-hero-image deity-hero">
            <Image
              src="/deities/hecate/third-key.png"
              alt="The Third Key"
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

        {/* THE THIRD KEY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading hecate-key-heading">
            The Third Key
          </h2>
          <p>The Third Key</p>
          <p>The Key Of Thresholds</p>
          <p>(The Crossroads / Sovereignty / Transitional Key)</p>
        </section>

        {/* THIRD KEY — DESCRIPTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Description</h2>
          <p>
            The Key of Thresholds is the final and most sovereign of Hecate’s Great
            Keys. If the Shadow Key teaches depth and the Light Key teaches truth,
            then the Threshold Key teaches movement, choice, and authority.
          </p>
          <p>
            This is the key of the Crossroads — the place where all paths converge,
            diverge, open, and close. It governs the pivotal moments of a witch’s
            life: transitions, initiations, endings, beginnings, transformations,
            and the claiming of personal power. It is through this key that Hecate
            grants the witch mastery over her path, her decisions, her forward
            motion, and her destiny.
          </p>
          <p>
            This key is not merely about crossing thresholds — it is about knowing
            when to cross, when to wait, when to shut a door, and when to tear one
            open. It requires discernment, sovereignty, maturity, and a clear sense
            of self. A witch who has not faced her Shadow or learned to see with
            Light cannot wield the Threshold Key safely; without integration and
            clarity, movement becomes chaos.
          </p>
          <p>
            The Threshold Key teaches that every step is spellwork, every decision
            shapes fate, and every doorway has a price. It is the key of direction,
            willpower, manifestation, and the authority to walk between worlds with
            confidence and command.
          </p>
        </section>

        {/* THIRD KEY — GATE */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gate</h2>
          <p>
            Gate of Crossroads
            <br />
            This key opens the Gateway of Paths — the metaphysical crossroads where
            choices are made, identities shift, and destinies are chosen.
            <br />
            It is the point where past, present, and future intersect and the witch
            chooses her direction with intent.
          </p>
        </section>

        {/* THIRD KEY — FUNCTION */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Function</h2>
          <p>
            Authority Over Transition
            <br />
            This key governs all liminal spaces: beginnings, endings, transformations,
            leaps, initiations, commitments, and life-altering decisions.
            <br />
            It gives the witch the ability to move between states of being with strength
            and clarity.
          </p>
          <p>
            Pathfinding
            <br />
            The Threshold Key reveals the available paths and helps the witch choose the
            one aligned with her highest purpose.
            <br />
            It shows not only where you can go — but where you should go.
          </p>
          <p>
            Manifestation Through Decision
            <br />
            Movement creates momentum.
            <br />
            Momentum is magic.
            <br />
            This key teaches that choosing is spellwork.
          </p>
          <p>
            Closing Doors
            <br />
            Not all thresholds should be crossed.
            <br />
            Some must be sealed, locked, or left behind entirely.
            <br />
            The key grants the authority to close what drains, harms, or no longer aligns.
          </p>
          <p>
            Opening Doors
            <br />
            The witch may unlock opportunities, relationships, identities, and paths that
            were previously inaccessible.
            <br />
            What is meant for you cannot be denied when the Threshold Key is in your hand.
          </p>
          <p>
            Identity Shifts
            <br />
            Every threshold crossed transforms the self.
            <br />
            This key governs the shedding of old identities and the stepping into new ones.
          </p>
        </section>

        {/* THIRD KEY — GIFTS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Gifts</h2>
          <p>
            Personal sovereignty — the power to choose your path without fear or influence
            <br />
            <br />
            Direction — knowing where to go and why
            <br />
            <br />
            Manifestation — movement that draws reality into alignment
            <br />
            <br />
            Authority over transitions — endings, beginnings, initiations
            <br />
            <br />
            Confidence in decision-making — clarity of will
            <br />
            <br />
            Navigating crossroads — reading the signs of your path
            <br />
            <br />
            Ability to open or close doors — agency and power
            <br />
            <br />
            Grace during change — adapting without losing yourself
          </p>
        </section>

        {/* THIRD KEY — RISKS */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Risks</h2>
          <p>
            Rushing
            <br />
            Crossing thresholds before you are ready; leaping without clarity or grounding.
          </p>
          <p>
            Scattering
            <br />
            Starting too many paths at once, draining your power across divided intentions.
          </p>
          <p>
            Indecision
            <br />
            Fear of choosing, staying stuck in liminality, refusing movement.
          </p>
          <p>
            Identity Confusion
            <br />
            Shifting too quickly, too often, or without integration.
          </p>
          <p>
            External Influence
            <br />
            Letting others sway your path or push you across thresholds that are not yours.
          </p>
          <p>
            Energetic Drain
            <br />
            Leaving too many doors open — leaking time, energy, or personal power.
          </p>
          <p>
            Becoming Lost
            <br />
            Movement without direction is wandering, not pathfinding.
          </p>
        </section>

        {/* THIRD KEY — WORKING WITH THE THRESHOLD KEY SAFELY */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Working With the Threshold Key Safely</h2>
          <p>
            Move With Intention
            <br />
            Every choice is a spell.
            <br />
            Make decisions consciously, not reactively.
          </p>
          <p>
            Ground Before Crossing
            <br />
            Before major changes, anchor yourself:
            <br />
            breathe
            <br />
            <br />
            center
            <br />
            <br />
            feel your body
            <br />
            <br />
            call Hecate to witness
            <br />
            <br />
            Never cross a threshold while ungrounded.
          </p>
          <p>
            Choose One Path at a Time
            <br />
            Do not split your power.
            <br />
            Focus creates force.
          </p>
          <p>
            Close Doors Deliberately
            <br />
            Say aloud:
            <br />
            “I close this path. It is no longer mine.”
            <br />
            Endings are sacred.
          </p>
          <p>
            Seek Signs, Not Permission
            <br />
            Omens guide.
            <br />
            They do not decide for you.
            <br />
            You are the one who must choose.
          </p>
          <p>
            Honor the Crossroads
            <br />
            Regularly cleanse and maintain the energetic crossroads of your life — your
            home, your routines, your identity, your relationships.
          </p>
          <p>
            Rest Between Thresholds
            <br />
            Even transformation requires integration.
            <br />
            Pause.
            <br />
            Let yourself catch up with your own growth.
          </p>
        </section>

        {/* THIRD KEY — FAILING THE THRESHOLD KEY TRIAL */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">Failing the Threshold Key Trial</h2>
          <p>
            Failure happens when the witch is not yet ready to hold sovereignty without
            fear, collapse, or confusion.
          </p>
          <p>
            Avoidance
            <br />
            Refusing to choose.
            <br />
            Letting life happen to you instead of walking your path.
          </p>
          <p>
            Escapism
            <br />
            Changing everything constantly to avoid facing what needs healing.
          </p>
          <p>
            Overcommitting
            <br />
            Taking every path at once, exhausting your power.
          </p>
          <p>
            Being Led
            <br />
            Letting lovers, family, spirits, or circumstances choose your direction instead
            of choosing for yourself.
          </p>
          <p>
            Hesitation at the Door
            <br />
            Standing at the threshold, knowing what must be done, but refusing to step through.
          </p>
          <p>
            When this happens, Hecate does not punish — she waits.
            <br />
            She allows the world to narrow your choices until you can finally act with clarity.
          </p>
        </section>

        {/* THIRD KEY — SIGNS OF A SECOND OFFERING */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Signs of a Second{"\u00A0\u00A0"} Offering of the Threshold Key
          </h2>
          <p>
            Repeated Crossroads Dreams
            <br />
            Paths, forks, choices, doorways — recurring symbols of transition.
          </p>
          <p>
            Strong Pull Toward Change
            <br />
            A feeling that your life cannot continue the way it is.
          </p>
          <p>
            Closed Doors Reopen
            <br />
            Opportunities return — not randomly, but deliberately.
          </p>
          <p>
            The Sudden Need to Decide
            <br />
            Life compresses into choice points:
            <br />
            move, end, begin, choose.
          </p>
          <p>
            The Feeling of Being “Pushed” Gently Forward
            <br />
            Not forced — nudged.
            <br />
            A sense that something is shifting beneath your feet.
          </p>
          <p>
            Hecate at the Crossroads
            <br />
            You may sense her presence behind you as you stand before a major decision.
          </p>
        </section>

        {/* THIRD KEY — SIMPLE LIMINAL PRACTICES */}
        <section className="zodiac-note">
          <h2 className="zodiac-note-subheading">
            Simple Liminal {"\u00A0"}Practices to Build Threshold Strength
          </h2>
          <p>
            Doorway Meditation
            <br />
            Stand in a doorway with one foot on each side.
            <br />
            Breathe.
            <br />
            Decide something small.
            <br />
            Cross intentionally.
            <br />
            Build this muscle.
          </p>
          <p>
            Crossroads Offerings
            <br />
            Leave three coins, garlic, or honey at a literal or symbolic crossroads.
            <br />
            Ask for guidance, not answers.
          </p>
          <p>
            Daily Decluttering
            <br />
            Clearing physical thresholds helps clear energetic ones.
          </p>
          <p>
            Write One Choice Per Day
            <br />
            Small choices build sovereignty.
            <br />
            Practice choosing.
          </p>
          <p>
            Movement as Magic
            <br />
            Walk, dance, pace — let your body practice transition.
          </p>
          <p>
            “Not This” Ritual
            <br />
            Write down one thing you release.
            <br />
            Burn or bury it.
            <br />
            Closing a path is as holy as opening one.
          </p>
          <p>
            Practice Saying No
            <br />
            Threshold mastery requires boundaries.
            <br />
            Every “no” is a door closed with intention.
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





