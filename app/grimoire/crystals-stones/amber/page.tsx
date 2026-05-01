// app/grimoire/crystals-stones/amber/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AmberPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Amber" subtitle="Fossilized tree resin · Organic">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/crystals/amber-hero.png"
              alt="Amber"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Amber holds sunlight that learned patience: warmth, protection, and
              the slow power of preservation.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Amber is not a mineral: it is fossilized tree resin that has hardened
            over millions of years. It often carries a warm golden glow and has
            long been valued as adornment, trade material, and protective charm.
          </p>

          <p>
            Because Amber is organic, it behaves differently than stone. It is
            lightweight, softer than most crystals, and can hold inclusions that
            feel like time capsules. In spiritual work, this ancient organic
            current is part of its identity: preservation, continuity, and the
            feeling of warmth returning to the body.
          </p>

          <p>
            In witchcraft, Amber is commonly worked with for protection, luck,
            cleansing, and steady confidence. It is often chosen when the goal is
            to brighten the field without forcing intensity: support that feels
            warm, resilient, and quietly empowering.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-FIRE-ELEMENT-ROUTE">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-SUN-PLANET-ROUTE">The Sun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LEO-ROUTE">Leo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MASCULINE-ENERGY-ROUTE">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/cinnamon">Cinnamon</Link>,{" "}
                <Link href="/grimoire/herbs/myrrh">Myrrh</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COLOR */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Color</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Appearance</h3>
              <p className="grimoire-correspondence-value">
                Golden to honey yellow, sometimes orange or brown. Some specimens
                appear clear, cloudy, or darkened. Surface can polish to a warm,
                glassy glow.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/05-gold">gold</Link>{" "}
                current supports confidence, protection, and success. The{" "}
                <Link href="/grimoire/colors/06-yellow">yellow</Link>{" "}
                current supports clarity, joy, and personal power. The{" "}
                <Link href="/grimoire/colors/04-orange">orange</Link>{" "}
                current supports creativity, vitality, and energetic warmth.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AMBER IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Amber in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amber-in-craft.png"
    alt="Amber in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, confidence, luck, cleansing, joy, vitality, courage
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic heaviness, jealousy, lingering negativity, fear loops,
                emotional dullness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Citrine, Sunstone
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Amber is often used as a warm shield: protection that comforts
                rather than hardens.
                <br />
                <br />
                It supports Solar Plexus work when confidence has been worn down
                by stress or prolonged negativity.
                <br />
                <br />
                In cleansing work, Amber is used to restore brightness and
                reinforce the feeling of safety in the body.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AMBER */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Amber</h2>

          <p>
            Amber is commonly worn or carried as a talisman for protection and
            steady confidence. Because it is lightweight and warm to the touch,
            it is often used close to the body during long days, stressful
            environments, or periods where personal power needs reinforcement.
          </p>

          <p>
            In ritual, Amber can be placed on the altar to brighten the field and
            support work tied to success, courage, and energetic cleansing. It is
            especially useful when you want protective support that feels
            comforting rather than confrontational.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Amber is best reached for when the spirit feels dim or burdened. It
            supports the return of warmth: the kind that steadies the heart, lifts
            the mood, and restores the will to move forward.
          </p>

          <p>
            In longer workings, Amber behaves as a stabilizing light. It does not
            push sharp transformation. It reinforces resilience, confidence, and
            the slow rebuilding of strength.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/amber-folklore.png"
    alt="Amber Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Amber has been traded and treasured for thousands of years, often
            treated as a protective substance and a symbol of sunlight captured in
            matter. It appears across cultures as jewelry, ornamentation, and
            talismanic protection, carried for luck and warding.
          </p>

          <p>
            In modern metaphysical practice, these themes continue: protection,
            warmth, cleansing, and confidence. Amber is often chosen when the goal
            is energetic brightness that feels grounded and safe.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Material</p>
              <p className="grimoire-correspondence-value">
                Fossilized tree resin (organic)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                2 to 2.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Structure</p>
              <p className="grimoire-correspondence-value">
                Amorphous
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Warm organic current, sometimes with preserved inclusions
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Amber is soft compared to most stones, so treat it gently. Cleanse
            with smoke, sound, or brief moonlight. Avoid harsh chemicals and avoid
            prolonged water contact. Heat can damage or warp the surface.
          </p>

          <p>
            Store Amber away from harder crystals to prevent scratching, and avoid
            abrasive cleaning methods that can dull its polish.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Amber is not intended for ingestion. Avoid grinding or creating dust
            from any specimen. If polishing or shaping is involved, use proper
            protective measures to avoid inhaling dust.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link
              href="/grimoire/crystals-stones"
              className="grimoire-footer-link"
            >
              ← Back to Crystals
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