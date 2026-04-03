// app/grimoire/herbs/vanilla/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function VanillaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Vanilla" subtitle="Vanilla planifolia">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-VANILLA-HERO-IMAGE-URL"
              alt="Vanilla"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Vanilla softens the edges: sweeten the moment, draw devotion, invite gentle abundance.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Vanilla is derived from the cured seed pods of a tropical orchid
            native to Mesoamerica. Once revered by the Totonac and Aztec
            peoples, it later became one of the most prized flavorings in the
            world.
          </p>

          <p>
            In traditional practice, Vanilla has been associated with comfort,
            mood uplift, and sensual warmth. Its scent is soothing, familiar,
            and inviting.
          </p>

          <p>
            In witchcraft, Vanilla is used for love, attraction, harmony,
            prosperity, and emotional sweetness. It is chosen when the goal is
            to magnetize gently rather than dominate.
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
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-QUETZALCOATL-ROUTE">Quetzalcoatl</Link>
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">
                  Rhodonite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Vanilla in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VANILLA-WITCHCRAFT-IMAGE-URL"
              alt="Vanilla in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, attraction, harmony, prosperity, emotional sweetness,
                sensuality
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Harsh energy, bitterness, emotional coldness, relational tension
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Mood uplift, comforting infusions, aromatic relaxation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Vanilla to love jars to enhance devotion and warmth.
                <br />
                <br />
                Infuse into ritual baths focused on harmony and attraction.
                <br />
                <br />
                Blend into prosperity oils to encourage gentle abundance.
                <br />
                <br />
                Pair with Sacral Chakra focus when cultivating sensual confidence.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Vanilla</h2>

          <p>
            Use whole pods in prosperity charms and sweetening spells.
          </p>

          <p>
            Add extract to ritual desserts and offerings honoring love deities.
          </p>

          <p>
            Incorporate into anointing oils for attraction and emotional warmth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Vanilla is a practical ally when relationships need softening and
            connection requires nurturing.
          </p>

          <p>
            Work with it during reconciliation rituals, love workings, and
            prosperity spells focused on ease rather than force.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VANILLA-FOLKLORE-IMAGE-URL"
              alt="Vanilla Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Vanilla was sacred to the Totonac people of Mesoamerica and later
            prized by the Aztecs, who blended it with cacao in ceremonial
            drinks.
          </p>

          <p>
            In magical tradition, it represents sweetness as strength: the
            power to attract through warmth and harmony.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Vanilla contains aromatic compounds traditionally associated with
            comforting and mood supporting qualities.
          </p>

          <p>
            Common Constituents: Vanillin, Phenolic Compounds, Essential Oils
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
            Ensure Vanilla products are pure and free from synthetic additives
            when used in ritual or culinary applications. If pregnant,
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