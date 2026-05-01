// app/grimoire/herbs/lavender/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LavenderPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lavender" subtitle="Lavandula angustifolia">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LAVENDER-HERO-IMAGE-URL"
              alt="Lavender"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lavender soothes the storm: it calms the mind, blesses the home,
              and steadies the heart with quiet strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lavender is a fragrant flowering herb native to the Mediterranean
            region and now cultivated worldwide. Its purple blossoms and clean,
            herbal aroma have made it one of the most widely used plants in
            both household and spiritual traditions.
          </p>

          <p>
            In practical herbalism, Lavender is associated with calming blends,
            relaxation, and gentle support for stress and restlessness.
            Energetically, it carries a soft but stabilizing current that clears
            agitation without force.
          </p>

          <p>
            In witchcraft, Lavender is used for peace, protection, love,
            purification, and dream work. It is chosen when the goal is harmony,
            emotional balance, and spiritual gentleness.
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
                <Link href="/grimoire/elements/air">Air</Link>
                ,{" "}
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-MINERVA-ROUTE">Minerva</Link>,{" "}
                <Link href="PASTE-SELENE-ROUTE">Selene</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
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
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
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
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lepidolite">
                  Lepidolite
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lavender in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LAVENDER-WITCHCRAFT-IMAGE-URL"
              alt="Lavender in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Peace spells, love work, dream enhancement, cleansing, home
                blessing, emotional balance
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Anxiety, emotional agitation, nightmares, conflict in the home,
                spiritual unrest
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional calming support, relaxation blends, sleep
                preparations, aromatic stress relief
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lavender works gently but consistently.
                <br />
                <br />
                Add it to pillow sachets to support restful sleep and dream
                clarity.
                <br />
                <br />
                Use it in home blessing rituals to restore harmony after
                tension or conflict.
                <br />
                <br />
                Pair with Heart Chakra focus for forgiveness and emotional
                steadiness, or Crown Chakra focus for peaceful meditation.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Lavender
          </h2>

          <p>
            Lavender can be used as dried buds, essential oil, incense, or tea.
            It is commonly included in sleep sachets, cleansing blends, and
            peaceful home charms.
          </p>

          <p>
            Add to ritual baths for emotional release and calm.
          </p>

          <p>
            Burn as incense before meditation or divination to quiet the mind
            and stabilize the energy of the room.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lavender is a practical choice when tension is high and clarity is
            low. It helps restore balance without dramatic force.
          </p>

          <p>
            Work with it during relationship repair, before sleep, or whenever
            your space needs to feel safe, calm, and emotionally steady.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LAVENDER-FOLKLORE-IMAGE-URL"
              alt="Lavender Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Lavender has long been associated with cleanliness, love, and
            devotion. In European traditions, it was placed in linens and homes
            for both fragrance and protection.
          </p>

          <p>
            In modern witchcraft, Lavender remains one of the most versatile
            herbs for peace and gentle purification. Its current is simple and
            steady: calm the storm, restore harmony.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Lavender is known for containing aromatic compounds responsible for
            its calming scent and traditional use in relaxation preparations.
          </p>

          <p>
            Common Constituents: Linalool, Linalyl Acetate, Tannins, Flavonoids
          </p>
        </section>

        <div className="grimoire-divider" />

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
            Lavender essential oil should be diluted before topical use and may
            cause irritation in sensitive individuals. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting or applying herbal preparations. This
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