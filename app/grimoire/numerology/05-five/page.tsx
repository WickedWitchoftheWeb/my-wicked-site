// app/grimoire/numerology/05-five/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function FivePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title={"Numerology of\u00A0\u00A0Five"}
        subtitle="The wind that stirs the stillness into motion"
      >
        {/* HERO IMAGE + QUOTE (Grimoire system) */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/numerology/five.png"
            alt="The number five on an ethereal nebula background"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              “The wind that stirs the stillness into motion. The restless pulse
              that seeks freedom in all directions.”
            </p>

            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* ESSENCE OF FIVE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Essence{"\u00a0"} of{"\u00A0\u00A0\u00A0"}Five
          </h2>

          <p>
            Five is the number of freedom, change, and adventure. Where Four
            builds walls, routines, and foundations, Five opens the door and
            walks out into the world. It is movement, curiosity, excitement, and
            the restless desire to experience life in all its forms.
          </p>
          <p>
            Five is the traveler, the risk-taker, the seeker of novelty. It
            learns not by theory, but by touching, tasting, trying, and
            exploring. It is the energy of the human experience itself — the
            dance between stability and change, order and chaos, comfort and
            possibility.
          </p>
          <p>
            If One declares, Two balances, Three expresses, and Four stabilizes,
            then Five disrupts — not destructively, but liberatingly, reminding
            us that growth requires movement and that stagnation is the enemy of
            the soul.
          </p>
        </section>

        {/* SYMBOLISM */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Symbolism</h2>

          <h3 className="grimoire-callout">Freedom</h3>
          <p>Independence, liberation, and choice.</p>
          <p>
            Five demands autonomy — the ability to roam, shift, pivot, and
            breathe without constraint.
          </p>

          <h3 className="grimoire-callout">Change</h3>
          <p>Adaptability, versatility, transformation.</p>
          <p>
            Five is the wind: unpredictable, refreshing, unstoppable when it is
            ready to move.
          </p>

          <h3 className="grimoire-callout">Adventure</h3>
          <p>Travel, new experiences, exploration.</p>
          <p>
            Five is the thrill of the unknown, the road trip, the leap of faith,
            the urge to see what lies just beyond the horizon.
          </p>

          <h3 className="grimoire-callout">Curiosity</h3>
          <p>Learning through doing, experimenting, and living.</p>
          <p>Five asks "What if?" and is not afraid to find out.</p>
        </section>

        {/* CORRESPONDENCES (Grimoire correspondence system) */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Planet</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/02-astrology/02-planets/03-mercury">
                  Mercury
                </Link>
              </p>
              <p className="grimoire-correspondence-description">
                Communication, movement, intellect, agility
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/11-elements/air">Air</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Freedom, ideas, motion, shifts in direction
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Energy</span>
              <p className="grimoire-correspondence-value">
                Masculine / Day / Yang{" "}
                <Link href="/grimoire/12-energy-grimoire/energy-&-polarity">
                  (energy &amp; polarity)
                </Link>
              </p>
              <p className="grimoire-correspondence-description">
                Expressive, exploratory, dynamic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Core Vibration</span>
              <p className="grimoire-correspondence-value">
                Stimulation • Curiosity • Adaptability
              </p>
            </div>
          </div>
        </section>

        {/* SPIRITUAL MEANING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Spiritual{"\u00a0"} Meaning
          </h2>

          <p>
            Five invites us to step beyond comfort zones and trust the wild,
            unpredictable journey of change. Spiritually, it symbolizes the
            entire human experience — the five senses, the five elements, the
            exploration of physical and spiritual landscapes.
          </p>
          <p>
            It is a reminder that growth does not happen in stillness alone.
            Some lessons require movement. Some initiations require disruption.
            Some breakthroughs require saying: "I'm ready for something
            different."
          </p>

          <p>When Five appears, it may ask you to:</p>

          <ul>
            <li>— Embrace change instead of resisting it.</li>
            <li>— Seek new experiences and perspectives.</li>
            <li>— Balance freedom with responsibility.</li>
            <li>— Follow your curiosity even when the path isn&apos;t clear.</li>
            <li>— Learn by living fully, openly, and fearlessly.</li>
          </ul>

          <p>
            Five teaches that transformation is not a threat — it is an invitation.
          </p>
        </section>

        {/* FIVE IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Five {"\u00a0"}in{"\u00a0"} Practice
          </h2>

          <p>
            In numerology charts, Five highlights adaptability, curiosity, and
            the pursuit of freedom. It often brings periods of transformation
            and movement — new environments, new people, new opportunities, and
            fresh perspectives.
          </p>

          <p className="grimoire-callout">50 (5 + 0)</p>
          <p>
            Emphasizes the freedom and exploration of &quot;5&quot; amplified by
            the spiritual potential of &quot;0.&quot; This vibration encourages
            adventure with divine guidance.
          </p>

          <p className="grimoire-callout">55 — a Master Vibration</p>
          <p>
            A powerful frequency of transformation, breakthroughs, and
            liberation. It signifies the courage to break old patterns, create
            new paths, and reinvent yourself from the ground up.
          </p>
        </section>

        {/* KEYWORDS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Keywords</h2>
          <p>
            Freedom • Change • Adventure • Curiosity • Versatility •
            Transformation • Exploration • Motion
          </p>
        </section>

        {/* NUMERICAL SYNCHRONICITIES */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Numerical {"\u00a0"}Synchronicities {"\u00a0"}of{"\u00A0\u00A0\u00A0"}Five
          </h2>

          <p>
            When Fives swarm your reality, change is in the air. These codes
            mark plot twists, detours, and expansion through experience.
          </p>

          <p className="grimoire-callout">5</p>
          <p>
            — A hint to loosen your grip; something wants to move, shift, or be
            explored.
          </p>

          <p className="grimoire-callout">55</p>
          <p>
            — Threshold energy; old skins are shedding. Let go of what can’t
            travel with your next self.
          </p>

          <p className="grimoire-callout">555</p>
          <p>
            — Rapid change cycle; expect pivots, surprises, and new options.
            Stay curious, not chaotic.
          </p>

          <p className="grimoire-callout">5555</p>
          <p>
            — Destiny-level reroute; your path is being realigned with freedom,
            even if it feels disruptive at first.
          </p>
        </section>

        {/* FOOTER LINKS (Grimoire footer system) */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/numerology" className="grimoire-footer-link">
              ← Back to Numerology
            </Link>
          </p>
          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to the Wicked Grimoire
            </Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}