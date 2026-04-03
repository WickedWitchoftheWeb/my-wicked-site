// app/grimoire/chakras/06-third-eye-chakra/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ThirdEyeChakraPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Third Eye Chakra" subtitle="Ajna">
        {/* HERO */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/chakras/third-eye.png?updatedAt=1769733195342"
            alt="Third Eye Chakra symbol"
            className="grimoire-hero-img"
          />

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              &quot;Clarity is not a gift. It is a discipline.&quot;
            </p>

            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grimoire-text">
          <h2 className="grimoire-subheading">&quot;Brow&quot;</h2>

          <p>
            This is the chakra of clarity. The Third Eye gives us the ability to
            see past the facade of the Ego and the physical realm around us and
            into deeper energies. This chakra allows us access to psychic
            perception: not as fantasy, but as pattern recognition, symbolism,
            and direct inner knowing.
          </p>

          <p>
            A balanced Third Eye does not make you detached from life. It makes
            you honest with life. It strengthens discernment: what is real, what
            is projected, what is fear, and what is true guidance.
          </p>

          <div className="grimoire-divider" />

          <div className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Color</p>
              <p className="grimoire-correspondence-value">
                <Link href="#">Purple</Link>, <Link href="#">Indigo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Location</p>
              <p className="grimoire-correspondence-value">
                Forehead between the eyes, center of the brow
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Element</p>
              <p className="grimoire-correspondence-value">
                <Link href="#">Light</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Sound</p>
              <p className="grimoire-correspondence-value">OHM</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Path on the Tree of Life
              </p>
              <p className="grimoire-correspondence-value">Chokhmah and Binah</p>
            </div>

                <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Parts of the Body</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/parts-of-the-magickal-body/01-head">
                  Head
                </Link>
                ,{" "}
                <Link href="/grimoire/parts-of-the-magickal-body/11-nervous-system">
                  Nervous System
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                , <Link href="/grimoire/crystals-stones/azurite">Azurite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
                <Link href="/grimoire/crystals-stones/lepidolite">Lepidolite</Link>
                , <Link href="/grimoire/crystals-stones/fluorite">Fluorite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sodalite">Sodalite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/kyanite">Kyanite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sugilite">Sugilite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/charoite">Charoite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/blue-quartz">
                  Blue Quartz
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="#">Angelica Root</Link>, <Link href="#">Bay Laurel</Link>
                , <Link href="#">Clary Sage</Link>, <Link href="#">Cypress</Link>,{" "}
                <Link href="#">Elemi</Link>, <Link href="#">Frankincense</Link>,{" "}
                <Link href="#">Helichrysum</Link>, <Link href="#">Juniper</Link>,{" "}
                <Link href="#">Lavender</Link>, <Link href="#">Marjoram</Link>,{" "}
                <Link href="#">Patchouli</Link>, <Link href="#">Peppermint</Link>,{" "}
                <Link href="#">Rosemary</Link>, <Link href="#">Sandalwood</Link>,{" "}
                <Link href="#">Tea Tree</Link>, <Link href="#">Vetiver</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">
                Affirmation and Mantra
              </p>
              <p className="grimoire-correspondence-value">
                &quot;I see&quot; (I know)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Properties</p>
              <p className="grimoire-correspondence-value">
                Intuition, psychic abilities, visualization, wisdom, memory,
                comprehension, dreams, decisiveness.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Influence</p>
              <p className="grimoire-correspondence-value">
                This center governs discernment: the ability to recognize
                patterns, read symbols accurately, and separate intuition from
                anxiety or projection.
              </p>
            </div>
          </div>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Signs of a Balanced Third Eye Chakra</h2>

          <p>
            Clear intuition, grounded insight, strong discernment, vivid but
            stable inner imagery, healthy imagination, trust in inner guidance,
            strong memory and comprehension, and meaningful dreams without
            becoming consumed by them.
          </p>

          <p>
            Clarity shows up as steadiness: you can receive insight without
            spiraling, and you can change course without needing constant proof.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Signs of an Imbalanced Third Eye Chakra</h2>

          <p>
            Lack of concentration, fear, excessive or obsessive need for
            knowledge and answers, ego flares, delusions, inability to
            self-reflect, confusion between intuition and anxiety, and avoidance
            of inner truth.
          </p>

          <p>
            This imbalance often feels like mental noise: too many signals, not
            enough discernment, and a constant pull toward certainty.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">Signs of an Overactive Third Eye Chakra</h2>

          <p>
            Losing touch with reality, delusions, fantasies, feeling untethered,
            isolation, spiritual obsession, over interpreting signs, and paranoia
            disguised as intuition.
          </p>

          <p>
            Overactivity often comes from fear: the mind keeps scanning for
            meaning so it can feel safe, but it ends up creating distortion.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">How the Third Eye Chakra Gets Blocked</h2>

          <p>
            Lack of self-faith, defaulting only to physical reality, dismissing
            inner knowing, fear of being wrong, fear of seeing what must change,
            and disconnecting from Source.
          </p>

          <p>
            This chakra closes when truth feels dangerous. If insight would
            require change, the system may choose confusion because it is
            familiar.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            How to Balance, Clear, and {"\u00A0"} Open the Third Eye Chakra
          </h2>

          <p className="grimoire-correspondence-label">Meditation</p>
          <p>
            Focus on the space between the brows and breathe slowly. Let the
            forehead soften. Imagine a deep indigo light clearing the center
            like a lens being wiped clean.
          </p>

          <p className="grimoire-correspondence-label">Dream Work</p>
          <p>
            Journal symbols, track recurring themes, and practice discernment
            rather than treating every dream as prophecy.
          </p>

          <p className="grimoire-correspondence-label">
            Screen and Stimulation Boundaries
          </p>
          <p>
            Reduce noise so the inner voice has room to be heard. Choose silence
            on purpose: fewer inputs, clearer signals.
          </p>

          <p className="grimoire-correspondence-label">Color Therapy</p>
          <p>
            Eating purple foods, meditating on the color purple or indigo, and
            wearing purple or indigo clothing or jewelry.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Foods and Diet to Balance the Third Eye Chakra
          </h2>

          <p>
            Red or purple grapes, blueberries, blackberries, black currants,
            eggplant, prunes, raisins, purple potatoes, purple kale, chocolate,
            lavender.
          </p>

          <div className="grimoire-divider" />

          <h2 className="grimoire-subheading">
            Yoga Poses to Balance the Third Eye Chakra
          </h2>

          <p>Mountain Pose</p>
          <p>Forward Fold</p>
          <p>Half Fold</p>
          <p>Plank</p>
          <p>Chaturanga</p>
          <p>Cobra Pose</p>
          <p>Warrior 1</p>
          <p>Pyramid Pose</p>
          <p>Warrior 3</p>
          <p>Tree Pose</p>
          <p>Bound Angle Pose</p>
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