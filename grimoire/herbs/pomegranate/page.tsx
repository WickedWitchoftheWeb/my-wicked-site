// app/grimoire/herbs/pomegranate/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PomegranatePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Pomegranate" subtitle="Punica granatum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-POMEGRANATE-HERO-IMAGE-URL"
              alt="Pomegranate"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Pomegranate holds the seed of fate: love, death, rebirth, and
              abundance bound in crimson.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Pomegranate is a fruit-bearing tree native to the Middle East and
            Mediterranean regions, long revered for its jewel-like seeds and
            symbolic depth. Its many seeds enclosed within a single rind have
            made it a powerful emblem of life, fertility, and hidden mystery.
          </p>

          <p>
            In traditional herbal and culinary practice, Pomegranate has been
            valued for nourishment, vitality, and antioxidant-rich preparations.
            Its deep red juice carries strong associations with blood and life
            force.
          </p>

          <p>
            In witchcraft, Pomegranate is used for fertility, abundance,
            underworld work, transformation, sacred contracts, and cycles of
            death and rebirth. It is chosen when the goal is profound change or
            binding destiny.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-PERSEPHONE-ROUTE">Persephone</Link>,{" "}
                <Link href="PASTE-HADES-ROUTE">Hades</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/ruby">
                  Ruby
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
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
          <h2 className="grimoire-subheading">
            Pomegranate in Witchcraft
          </h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-POMEGRANATE-WITCHCRAFT-IMAGE-URL"
              alt="Pomegranate in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Fertility, abundance, transformation, sacred contracts,
                underworld work, passion, rebirth
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Creative barrenness, emotional stagnation, fear of change,
                broken agreements, shallow connection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional antioxidant support, vitality tonics, nourishing
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Pomegranate binds what is chosen.
                <br />
                <br />
                Use the seeds in fertility and abundance jars to symbolize
                multiplied outcomes.
                <br />
                <br />
                Incorporate into underworld rites when honoring cycles of death
                and return.
                <br />
                <br />
                Pair with Sacral Chakra focus when working with desire and
                creative power.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Pomegranate
          </h2>

          <p>
            Use fresh seeds in abundance rituals and fertility workings as a
            symbol of multiplied blessings.
          </p>

          <p>
            Add dried rind or juice to spell jars when invoking deep
            transformation.
          </p>

          <p>
            Place a whole fruit on an altar to represent sacred commitment and
            life force.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Pomegranate is a practical ally when entering a new phase that
            requires depth and commitment. It supports growth that comes from
            profound transformation.
          </p>

          <p>
            Work with it during fertility rites, rebirth rituals, and any
            working that acknowledges the power of cycles.
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
              src="PASTE-YOUR-POMEGRANATE-FOLKLORE-IMAGE-URL"
              alt="Pomegranate Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Greek mythology, Persephone’s consumption of pomegranate seeds
            bound her to the underworld, establishing the rhythm of seasonal
            return. The fruit became a symbol of both fate and renewal.
          </p>

          <p>
            Across cultures, Pomegranate represents abundance, marriage,
            fertility, and sacred promise: many seeds, one fruit, endless
            possibility.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Pomegranate contains plant compounds traditionally associated with
            vitality and nourishment.
          </p>

          <p>
            Common Constituents: Polyphenols, Ellagic Acid, Tannins, Vitamin C
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
            Pomegranate may interact with certain medications. If pregnant,
            nursing, managing a condition, or taking medication, consult a
            qualified professional before ingesting herbal preparations. This
            grimoire is written for spiritual and educational purposes and is
            not medical advice.
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