// app/grimoire/herbs/passion-flower/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PassionFlowerPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Passion Flower" subtitle="Passiflora incarnata">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PASSION-FLOWER-HERO-IMAGE-URL"
              alt="Passion Flower"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Passion Flower quiets the storm: soften the nerves, ease the
              mind, and let peace return to the body.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Passion Flower is a climbing vine native to the Americas, known for
            its striking blossoms and gentle nervous system support. It carries
            a unique signature: beautiful, complex, and calming.
          </p>

          <p>
            In traditional herbalism, Passion Flower is commonly associated with
            relaxation, sleep support, and easing tension. It is often used in
            blends meant to settle the mind and body without harsh sedation.
          </p>

          <p>
            In witchcraft, Passion Flower is used for peace, calming, sleep
            work, dream clarity, emotional healing, and gentle protection. It is
            chosen when the goal is quieting anxiety and restoring softness.
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
                <Link href="/grimoire/elements/water">Water</Link>,{" "}
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HYPNOS-ROUTE">Hypnos</Link>,{" "}
                <Link href="PASTE-NYX-ROUTE">Nyx</Link>,{" "}
                <Link href="PASTE-SELENE-ROUTE">Selene</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/07-neptune">
                  Neptune
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/feminine-night-yin">
                  Feminine / Night / Yin
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/blue-lace-agate">
                  Blue Lace Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Passion Flower in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PASSION-FLOWER-WITCHCRAFT-IMAGE-URL"
              alt="Passion Flower in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Calming anxiety, sleep work, peace magic, dream clarity,
                emotional soothing, gentle protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Racing thoughts, stress spirals, insomnia, emotional overwhelm,
                energetic overstimulation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional nervous system support, sleep blends, tension relief
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Passion Flower softens the edge of the mind.
                <br />
                <br />
                Use before sleep when you need quiet, not escape.
                <br />
                <br />
                Add to bath rituals to release anxiety from the body.
                <br />
                <br />
                Pair with Third Eye Chakra focus when restoring calm dream
                clarity and intuitive peace.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Passion Flower
          </h2>

          <p>
            Passion Flower can be used as tea, tincture, or dried herb in sleep
            sachets and calm blends.
          </p>

          <p>
            Add to ritual baths to unwind nervous tension and soften emotional
            strain.
          </p>

          <p>
            Keep near the bed with a written intention for peaceful sleep and
            steady dreams.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Passion Flower is a practical ally when your mind will not stop
            moving and your body needs permission to relax.
          </p>

          <p>
            Work with it during stressful seasons, before bed, or when calming
            rituals are needed to restore steadiness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PASSION-FLOWER-FOLKLORE-IMAGE-URL"
              alt="Passion Flower Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Passion Flower received its name through Christian symbolism applied
            to the flower’s structure, but it also carries older currents of
            beauty, devotion, and calm.
          </p>

          <p>
            In modern witchcraft, it is used primarily as a plant of peace and
            gentle sleep magic: quiet the storm, return to softness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Passion Flower contains plant compounds traditionally referenced in
            calming and nervous system preparations.
          </p>

          <p>
            Common Constituents: Flavonoids, Alkaloids, Glycosides
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* WARNING */}
        <section className="grimoire-section grimoire-text">
          <div className="grimoire-image">
            <img
              src="https://ik.imagekit.io/w1ck3d/website-general-assets/safe-for-humans.png"
              alt="Safe for humans"
              className="grimoire-img"
            />
          </div>

          <p className="grimoire-subheading">Warning</p>

          <p>
            Passion Flower may cause drowsiness and may interact with sedatives
            or other medications. If pregnant, nursing, managing a condition,
            or taking medication, consult a qualified professional before
            ingesting herbal preparations. This grimoire is written for
            spiritual and educational purposes and is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/herbs" className="grimoire-footer-link">
              ← Back to Herbs
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>

          <p>
            <Link href="/grimoire" className="grimoire-footer-link"></Link>
          </p>
        </footer>
      </SectionPage>
    </>
  );
}