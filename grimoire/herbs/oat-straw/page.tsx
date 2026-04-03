// app/grimoire/herbs/oat-straw/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OatStrawPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Oat Straw" subtitle="Avena sativa">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-OAT-STRAW-HERO-IMAGE-URL"
              alt="Oat Straw"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Oat Straw restores what has been depleted: nourish the nerves,
              steady the spirit, and grow strength from the inside out.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Oat Straw is the green stem and leaf of the oat plant, harvested
            before the grain fully matures. Long valued in herbal traditions,
            it is considered a deeply nourishing and restorative plant ally.
          </p>

          <p>
            In traditional herbalism, Oat Straw is associated with nervous
            system support, mineral replenishment, and gentle strengthening. It
            is often prepared as long infusions for sustained nourishment.
          </p>

          <p>
            In witchcraft, Oat Straw is used for grounding, recovery,
            stability, abundance, and gentle protection. It is chosen when the
            goal is rebuilding strength rather than forcing change.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-CERES-ROUTE">Ceres</Link>,{" "}
                <Link href="PASTE-FREY-ROUTE">Freyr</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-ANU-ROUTE">Anu</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
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
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moss-agate">
                  Moss Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Oat Straw in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-OAT-STRAW-WITCHCRAFT-IMAGE-URL"
              alt="Oat Straw in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Nervous system support, grounding, recovery, abundance,
                stability, gentle protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Burnout, depletion, anxiety, instability, emotional exhaustion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Mineral-rich infusions, traditional nervous system tonics,
                restorative preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Oat Straw works slowly and steadily.
                <br />
                <br />
                Use in ritual baths focused on recovery and grounding.
                <br />
                <br />
                Add to abundance jars to symbolize sustainable growth.
                <br />
                <br />
                Pair with Root Chakra focus when rebuilding stability and
                foundational strength.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Oat Straw
          </h2>

          <p>
            Oat Straw is most commonly prepared as a long infusion for
            sustained nourishment.
          </p>

          <p>
            Incorporate into grounding sachets and abundance blends.
          </p>

          <p>
            Use in rituals focused on healing from burnout and restoring
            emotional balance.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Oat Straw is a practical ally during times of stress and
            exhaustion. It encourages long-term resilience rather than quick
            fixes.
          </p>

          <p>
            Work with it when rebuilding after illness, emotional strain, or
            prolonged effort.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-OAT-STRAW-FOLKLORE-IMAGE-URL"
              alt="Oat Straw Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Oats have long symbolized nourishment, prosperity, and fertility in
            agricultural cultures. Straw from the plant was often associated
            with harvest blessings and grounded abundance.
          </p>

          <p>
            In modern witchcraft, Oat Straw carries forward that legacy of
            steady growth and gentle restoration.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Oat Straw is rich in minerals and plant compounds traditionally
            referenced in nourishing preparations.
          </p>

          <p>
            Common Constituents: Calcium, Magnesium, Silica, Iron, B Vitamins
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
            Individuals with gluten sensitivity should ensure products are
            certified gluten-free if consuming Oat Straw preparations. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and
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