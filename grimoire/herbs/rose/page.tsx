// app/grimoire/herbs/rose/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function RosePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Rose" subtitle="Rosa spp.">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ROSE-HERO-IMAGE-URL"
              alt="Rose"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Rose is the open heart: love fiercely, protect softly, bloom without apology.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Rose is one of the most beloved and symbolically layered plants in
            the world. Cultivated for thousands of years, its petals, hips, and
            oils have been used in culinary, cosmetic, and herbal traditions
            across cultures.
          </p>

          <p>
            In traditional herbal practice, Rose is associated with soothing
            the heart, supporting the skin, and gently uplifting the mood. Its
            scent alone carries emotional power.
          </p>

          <p>
            In witchcraft, Rose is used for love, self love, protection,
            beauty, healing, devotion, and heart centered magic. It is chosen
            when the goal is tenderness that still holds strength.
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
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-INANNA-ROUTE">Inanna</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">
                  Rhodonite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Rose in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ROSE-WITCHCRAFT-IMAGE-URL"
              alt="Rose in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, self love, attraction, healing, beauty magic, devotion,
                emotional balance
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Heartbreak residue, emotional bitterness, jealousy, self
                rejection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Skin soothing preparations, gentle mood uplift, antioxidant
                support, calming infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Rose petals to love jars when invoking mutual devotion.
                <br />
                <br />
                Use in self love baths to soften harsh inner dialogue.
                <br />
                <br />
                Place on the altar during Venus work to amplify attraction and
                beauty.
                <br />
                <br />
                Pair with Heart Chakra focus when healing emotional wounds.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Rose</h2>

          <p>
            Use dried petals in love sachets, spell jars, and beauty rituals.
          </p>

          <p>
            Brew Rose tea for heart centered meditation and emotional
            restoration.
          </p>

          <p>
            Incorporate Rose water into cleansing sprays focused on love and
            harmony.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Rose is a practical ally when the heart needs both softness and
            strength. It supports vulnerability without collapse.
          </p>

          <p>
            Work with it during relationship rituals, self devotion practices,
            and any working centered on beauty and sacred affection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ROSE-FOLKLORE-IMAGE-URL"
              alt="Rose Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Rose has been sacred to love goddesses across cultures and appears
            in myths, poetry, and religious symbolism worldwide. Its thorns
            remind us that beauty and protection coexist.
          </p>

          <p>
            In magical tradition, Rose remains the emblem of divine love:
            layered, guarded, and endlessly unfolding.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Rose petals and hips contain plant compounds traditionally associated
            with antioxidant and soothing properties.
          </p>

          <p>
            Common Constituents: Vitamin C, Flavonoids, Tannins, Volatile Oils
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
            Ensure Roses used internally are free from pesticides and chemical
            treatments. If pregnant, nursing, managing a condition, or taking
            medication, consult a qualified professional before ingesting
            herbal preparations. This grimoire is written for spiritual and
            educational purposes and is not medical advice.
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