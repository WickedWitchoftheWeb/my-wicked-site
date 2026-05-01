// app/grimoire/herbs/poppyseed/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PoppyseedPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Poppy Seed" subtitle="Papaver somniferum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-POPPYSEED-HERO-IMAGE-URL"
              alt="Poppy Seed"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Poppy carries the veil: sleep, dream, forget, and cross the
              threshold gently.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Poppy Seed comes from the flowering plant Papaver somniferum,
            cultivated for centuries for its seeds, latex, and ornamental
            blooms. The seeds themselves are widely used in culinary tradition,
            while the plant carries deeper historical associations.
          </p>

          <p>
            In traditional herbal systems, the poppy plant has long been linked
            with sleep and calming states. The seeds are mild and commonly used
            in food, but the symbolism of the plant remains powerful.
          </p>

          <p>
            In witchcraft, Poppy Seed is used for dream work, protection,
            invisibility magic, banishing, rest, and crossing between states of
            consciousness. It is chosen when the goal is to quiet the mind or
            move through unseen realms.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-NYX-ROUTE">Nyx</Link>,{" "}
                <Link href="PASTE-HYPNOS-ROUTE">Hypnos</Link>,{" "}
                <Link href="PASTE-MORPHEUS-ROUTE">Morpheus</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-PERSEPHONE-ROUTE">Persephone</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/08-pluto">
                  Pluto
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
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
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Poppy Seed in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-POPPYSEED-WITCHCRAFT-IMAGE-URL"
              alt="Poppy Seed in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Dream work, protection, invisibility magic, rest, astral work,
                banishing obsession
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Insomnia, psychic intrusion, obsessive thoughts, restless
                energy
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Culinary use for nourishment; historically associated with
                calming and sleep symbolism
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Sprinkle Poppy Seed beneath pillows to encourage vivid dreams.
                <br />
                <br />
                Use in protection jars to scatter and confuse unwanted energy.
                <br />
                <br />
                Add to banishing blends when releasing fixation or obsessive
                thought loops.
                <br />
                <br />
                Pair with Third Eye Chakra focus when working across the veil.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Poppy Seed
          </h2>

          <p>
            Use small amounts in dream sachets or sleep jars placed near the
            bed.
          </p>

          <p>
            Incorporate into protection powders designed to scatter and
            neutralize intrusive energy.
          </p>

          <p>
            Add to lunar rituals when honoring rest, surrender, and spiritual
            crossing.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Poppy Seed is a practical ally when the mind will not quiet or when
            the veil feels thin and active. It supports gentleness and inward
            focus.
          </p>

          <p>
            Work with it during lunar rites, dream incubation, and protection
            rituals that require subtle energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-POPPYSEED-FOLKLORE-IMAGE-URL"
              alt="Poppy Seed Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Poppies have long symbolized sleep, dreams, death, and remembrance.
            In Greek myth, the gods of sleep and night were crowned with
            poppies.
          </p>

          <p>
            In magical tradition, the many tiny seeds also represent scattering,
            confusion, and distraction, making them useful in protective folk
            charms.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Culinary poppy seeds contain oils and trace plant compounds. The
            seeds themselves are not the primary source of the stronger
            alkaloids found in other parts of the plant.
          </p>

          <p>
            Common Constituents: Fatty Oils, Trace Alkaloids, Fiber
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
            Poppy plants contain compounds that can be potent in certain forms.
            Use only culinary seeds unless properly trained in herbal practice.
            If pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and educational
            purposes and is not medical advice.
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
        </footer>
      </SectionPage>
    </>
  );
}