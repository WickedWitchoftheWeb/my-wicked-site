// app/grimoire/crystals-stones/ametrine/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AmetrinePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ametrine" subtitle="Quartz variety · SiO₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/crystals/ametrine-hero.png"
              alt="Ametrine"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Ametrine blends clarity with courage: the mind quiets, and the will
              returns.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Ametrine is a naturally occurring quartz that combines Amethyst and
            Citrine in a single stone. It often shows distinct zones of purple and
            yellow, creating a visual and energetic theme of balance: calm insight
            paired with bright momentum.
          </p>

          <p>
            In practice, Ametrine is commonly worked with when the mind and the
            will need to cooperate. It supports clear thought, steady self-trust,
            and the ability to act without abandoning inner peace.
          </p>

          <p>
            In witchcraft, Ametrine is used for clarity, confidence, and aligned
            manifestation. It is often chosen when a practitioner needs to cut
            through confusion, release hesitation, and move forward with a clean
            sense of direction.
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
                <Link href="PASTE-AIR-ELEMENT-ROUTE">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MERCURY-PLANET-ROUTE">Mercury</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-GEMINI-ROUTE">Gemini</Link>,{" "}
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="PASTE-SOLAR-PLEXUS-CHAKRA-ROUTE">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ROSEMARY-ROUTE">Rosemary</Link>,{" "}
                <Link href="PASTE-CINNAMON-ROUTE">Cinnamon</Link>
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
                Purple and yellow zones in the same stone, sometimes banded,
                sometimes blended. Some specimens lean more violet, others more
                gold, depending on the balance of coloration.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="PASTE-PURPLE-ROUTE">purple</Link>{" "}
                current supports intuition, discernment, and spiritual clarity.
                The{" "}
                <Link href="PASTE-YELLOW-ROUTE">yellow</Link>{" "}
                current supports confidence, focus, and personal power. Together,
                these currents make Ametrine a bridge between clear perception and
                clean action.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AMETRINE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Ametrine in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/ametrine-in-craft.png"
    alt="Ametrine in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Clarity, confidence, focus, manifestation, decision-making,
                intuition, motivation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Mental fog, hesitation, scattered energy, self-doubt, procrastination
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Citrine, Amethyst
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Ametrine is useful when the mind knows the truth but the body will
                not move.
                <br /><br />
                It supports a clean internal handshake: intuition stays clear, and
                confidence stays grounded.
                <br /><br />
                In manifestation work, it is often used to reduce contradiction:
                desire and action align without force.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AMETRINE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Ametrine</h2>

          <p>
            Ametrine is commonly carried during periods of decision-making, focused
            planning, and personal change. It can be used as a pocket stone, placed
            near a journal or workspace, or held during meditation to support clear
            direction.
          </p>

          <p>
            In ritual, Ametrine is often placed at the center of workings designed
            to align intention and execution. It supports spellcraft focused on
            clarity, confidence, and steady momentum.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Ametrine is best reached for when you are split between what you know
            and what you do. It supports the moment where clarity becomes a choice,
            and action becomes honest.
          </p>

          <p>
            In longer workings, Ametrine behaves like a stabilizing focus. It does
            not flood the system. It strengthens consistency: clear thinking,
            steady confidence, and follow-through that does not burn you out.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="https://ik.imagekit.io/w1ck3d/crystals/ametrine-folklore.png"
    alt="Ametrine Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Ametrine is often discussed as a naturally occurring blend of Amethyst
            and Citrine, celebrated for its distinctive zoning. In modern
            metaphysical practice, it is commonly treated as a stone of balanced
            power: calm clarity paired with bright momentum.
          </p>

          <p>
            Its reputation frequently centers on integration: holding spiritual
            insight while remaining practical, grounded, and willing to act.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Mineral Class</p>
              <p className="grimoire-correspondence-value">Silicate (Quartz)</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">7 on the Mohs scale</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">Trigonal</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Natural zoning of purple and yellow coloration within one quartz
                crystal
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Ametrine can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid prolonged direct sunlight, which can
            fade coloration over time.
          </p>

          <p>
            Store Ametrine away from abrasive materials if you want to preserve
            polished surfaces. Handle points and edges carefully to prevent chips.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Ametrine is not intended for ingestion. Avoid grinding or creating dust
            from any mineral specimen, and do not prepare crystal elixirs without
            proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and is
            not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/crystals-stones" className="grimoire-footer-link">
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