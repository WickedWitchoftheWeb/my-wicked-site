// app/grimoire/herbs/milk-thistle/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MilkThistlePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Milk Thistle" subtitle="Silybum marianum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-MILK-THISTLE-HERO-IMAGE-URL"
              alt="Milk Thistle"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Milk Thistle shields the core: protect the vital center, cleanse
              what burdens, and stand firm in resilience.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Milk Thistle is a spiny flowering plant native to the Mediterranean
            region, recognized by its purple blooms and distinctive white-veined
            leaves. It has been used for centuries in traditional herbal
            practice.
          </p>

          <p>
            In herbal tradition, Milk Thistle is most often associated with
            liver support and cleansing preparations. Its protective reputation
            has made it one of the most widely referenced herbs in
            detoxification blends.
          </p>

          <p>
            In witchcraft, Milk Thistle is used for protection, purification,
            energetic detox, boundary reinforcement, and resilience. It is
            chosen when the goal is strengthening the core and removing what no
            longer serves.
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
                <Link href="/grimoire/elements/earth">Earth</Link>,{" "}
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MARY-ROUTE">Mary</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-HESTIA-ROUTE">Hestia</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
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
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/energy-grimoire/energy/masculine-day-yang">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
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
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
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
          <h2 className="grimoire-subheading">Milk Thistle in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MILK-THISTLE-WITCHCRAFT-IMAGE-URL"
              alt="Milk Thistle in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, purification, detox work, resilience, boundary
                strengthening, spiritual cleansing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Toxic attachments, energetic drain, emotional overload,
                lingering negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional liver support, detox blends, antioxidant support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Milk Thistle is for strengthening the center.
                <br />
                <br />
                Add to protection jars when reinforcing personal boundaries.
                <br />
                <br />
                Use in cleansing rituals when releasing toxic cycles or
                attachments.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when rebuilding personal
                power and resilience.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Milk Thistle
          </h2>

          <p>
            Milk Thistle seeds are commonly used in herbal preparations and can
            also be added to protection sachets and cleansing blends.
          </p>

          <p>
            Incorporate into rituals focused on detoxifying emotional or
            spiritual residue.
          </p>

          <p>
            Place near the home entrance when reinforcing protective boundaries.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Milk Thistle is a practical ally during periods of recovery and
            rebuilding. It supports clearing out what is harmful and protecting
            what must remain.
          </p>

          <p>
            Work with it when strengthening your physical or energetic
            resilience after stress or burnout.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MILK-THISTLE-FOLKLORE-IMAGE-URL"
              alt="Milk Thistle Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Christian folklore, the white markings on Milk Thistle leaves
            were said to be drops of the Virgin Mary&apos;s milk, giving the plant
            its common name and associations with protection and nourishment.
          </p>

          <p>
            In modern witchcraft, it remains a symbol of resilient protection
            and sacred cleansing.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Milk Thistle seeds contain compounds widely referenced in
            traditional liver support formulas.
          </p>

          <p>
            Common Constituents: Silymarin, Flavonoids, Fatty Acids
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
            Milk Thistle may interact with certain medications and conditions.
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