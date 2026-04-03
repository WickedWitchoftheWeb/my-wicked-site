// app/grimoire/chakras/02-sacral-chakra/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function SacralChakraPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Sacral Chakra" subtitle="Swadhisthana">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/chakras/sacral.png?updatedAt=1769733194008"
            alt="Sacral chakra energy center"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              &quot;Pleasure is not indulgence. It is information.&quot;
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grimoire-text">
          <h2 className="grimoire-subheading">One&apos;s{"\u00A0"} Own Dwelling</h2>

          <p>
            This is the chakra of connection. It governs the relationship with
            the self and with others, and it strongly influences the reproductive
            system. Through this chakra, we experience desire, creativity, and
            emotional intimacy.
          </p>

          <p>
            Often nicknamed the &quot;sex chakra,&quot; Swadhisthana is far more
            than sexuality alone. It is creative life force. It is how you bring
            yourself into the world through expression, pleasure, and movement.
            When this chakra is healthy, desire flows without control or shame.
          </p>

          <p>
            The Sacral Chakra teaches emotional intelligence. It asks whether
            pleasure is allowed, whether feeling is safe, and whether connection
            is welcomed or feared.
          </p>

          <div className="grimoire-divider" />

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/colors/03-orange">Orange</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Location</p>
              <p className="grimoire-correspondence-value">
                Pubic bone, center of the lower belly
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sound</p>
              <p className="grimoire-correspondence-value">VAM</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Path on the Tree of Life
              </p>
              <p className="grimoire-correspondence-value">Yesod</p>
            </div>

               <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-of-the-magickal-body/16-reproductive-organs">
                  Reproductive Organs
                </Link>
                ,{" "}
                <Link href="/grimoire/parts-of-the-magickal-body/10-digestive-system">
                  Digestive System
                </Link>
                ,{" "}
                <Link href="/grimoire/parts-of-the-magickal-body/17-hips">
                  Hips
                </Link>
                ,{" "}
                <Link href="/grimoire/parts-of-the-magickal-body/18-thighs">
                  Thighs
                </Link>
                ,{" "}
                <Link href="/grimoire/parts-of-the-magickal-body/12-stomach">
                  Stomach
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/calcite/orange-calcite">
                  Orange Calcite
                </Link>
                , <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/aventurine/peach-aventurine">
                  Peach Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                , <Link href="/grimoire/crystals-stones/amber">Amber</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/sage/clary-sage">Clary Sage</Link>,{" "}
                <Link href="/grimoire/herbs/fennel">Fennel</Link>,{" "}
                <Link href="/grimoire/herbs/jasmine">Jasmine</Link>,{" "}
                <Link href="/grimoire/herbs/nutmeg">Nutmeg</Link>,{" "}
                <Link href="/grimoire/herbs/orange">Orange</Link>,{" "}
                <Link href="/grimoire/herbs/sandalwood">Sandalwood</Link>,{" "}
                <Link href="/grimoire/herbs/patchouli">Patchouli</Link>,{" "}
                <Link href="/grimoire/herbs/ylang-ylang">Ylang-Ylang</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Affirmation and Mantra
              </p>
              <p className="grimoire-correspondence-value">&quot;I Feel&quot;</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Properties</p>
              <p className="grimoire-correspondence-value">
                Passion, sexuality, intimacy, money, creativity, joy, adventure.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Influence</p>
              <p className="grimoire-correspondence-value">
                This chakra governs emotional flow, desire, connection, and the
                ability to experience pleasure without shame.
              </p>
            </div>
          </div>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Signs of a Balanced Sacral Chakra
          </h2>

          <p>
            Creativity, joy, healthy sexuality, emotional openness, patience,
            fertility, pleasure, prosperity, and the ability to experience
            connection without losing oneself.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Signs of an Imbalanced Sacral Chakra
          </h2>

          <p>
            Reproductive issues, kidney or stomach problems, lower back pain,
            shame around sexuality, creative blocks, low self-esteem, emotional
            withdrawal, guilt, shyness, irresponsibility, infertility, fear of
            pleasure, fatigue, detachment, and inauthentic self-expression.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Signs of an Underactive Sacral Chakra
          </h2>

          <p>
            Emotional numbness, lack of desire, difficulty connecting, creative
            stagnation, avoidance of intimacy, repression of pleasure, and a
            general sense of disconnection from the body.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Signs of an Overactive Sacral Chakra
          </h2>

          <p>
            Emotional overwhelm, mood swings, codependency, heightened or
            compulsive sexuality, clinginess, and difficulty regulating desire
            or attachment.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">How the Sacral Chakra Gets Blocked</h2>

          <p>
            Stress, social anxiety, negative relational experiences, fear of
            vulnerability, shame conditioning, and environments that punish
            emotional or creative expression.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            How to Balance, Clear, and {"\u00A0"} Open the Sacral Chakra
          </h2>

          <p className="grimoire-correspondence-label">Meditation</p>
          <p>
            Focus on the lower belly and visualize the chakra as a warm orange
            sphere. Let it soften and open as emotion and sensation move through
            you without judgment.
          </p>

          <p className="grimoire-correspondence-label">Water Work</p>
          <p>
            Take baths, swim, or sit near moving water to remind the system how
            to flow. Let the body relearn softness and receptivity.
          </p>

          <p className="grimoire-correspondence-label">Creative Expression</p>
          <p>
            Make something without an outcome: dance, draw, sing, write, cook.
            The point is not skill. The point is movement of life force.
          </p>

          <p className="grimoire-correspondence-label">Pleasure Without Shame</p>
          <p>
            Practice receiving: savor a meal, enjoy music, wear something that
            feels good on the skin. This chakra heals when pleasure is treated
            as safe information, not something to earn.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Foods and Diet to Balance the Sacral Chakra
          </h2>

          <p>
            Pumpkin, peaches, oranges, carrots, mango, apricots, sweet potatoes,
            orange peppers, cantaloupe, tangerines, honey.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Yoga Poses to Balance the Sacral Chakra
          </h2>

          <p>Child&apos;s Pose</p>
          <p>Low Lunge</p>
          <p>Side Angle</p>
          <p>Goddess Pose</p>
          <p>Wide-Leg Fold</p>
          <p>Standing Knee-to-Chest</p>
          <p>Garland Pose</p>
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