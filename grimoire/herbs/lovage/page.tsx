// app/grimoire/herbs/lovage/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LovagePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lovage" subtitle="Levisticum officinale">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LOVAGE-HERO-IMAGE-URL"
              alt="Lovage"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lovage draws devotion closer: deepen affection, strengthen
              attraction, and anchor love with intention.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lovage is a tall, aromatic herb native to Southern Europe and long
            cultivated in monastery and cottage gardens. Its leaves and roots
            have been used in culinary and herbal traditions for centuries.
          </p>

          <p>
            Historically, Lovage gained a reputation as a plant of affection
            and influence, especially in matters of romance. Its name alone
            shaped its symbolism, tying it closely to attraction and emotional
            magnetism.
          </p>

          <p>
            In witchcraft, Lovage is used for love spells, attraction work,
            devotion, commitment, and strengthening bonds. It is chosen when
            the goal is sincere affection rooted in steady connection rather
            than fleeting passion.
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
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-HERA-ROUTE">Hera</Link>,{" "}
                <Link href="PASTE-FRIGG-ROUTE">Frigg</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                ,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-value">
                <span className="grimoire-correspondence-label">Crystals</span>
                <br />
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">
                  Rhodonite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
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
          <h2 className="grimoire-subheading">Lovage in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LOVAGE-WITCHCRAFT-IMAGE-URL"
              alt="Lovage in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love spells, attraction, commitment work, strengthening bonds,
                reconciliation, devotion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Emotional distance, coldness, weakening affection, insecurity
                within relationships
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, warming herbal preparations,
                aromatic infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lovage is best used when intentions are sincere.
                <br />
                <br />
                Add to love spell jars when focusing on deepening an existing
                connection.
                <br />
                <br />
                Use in bath blends before romantic rituals to open the heart
                gently.
                <br />
                <br />
                Pair with Heart Chakra focus for emotional stability and loyal
                affection.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Lovage</h2>

          <p>
            Lovage can be used dried in sachets, charm bags, and love spell
            blends.
          </p>

          <p>
            Add to ritual baths focused on strengthening bonds and commitment.
          </p>

          <p>
            Place in altar bowls dedicated to partnership or reconciliation
            work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lovage is a practical choice when nurturing connection and
            devotion. It supports steady affection rather than dramatic
            attraction.
          </p>

          <p>
            Work with it during relationship renewal, reconciliation efforts,
            or when strengthening long-term commitment.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LOVAGE-FOLKLORE-IMAGE-URL"
              alt="Lovage Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Lovage has long been associated with love charms and romantic
            influence in European folk traditions. It was often carried in
            sachets to attract affection.
          </p>

          <p>
            In modern witchcraft, Lovage remains an herb of heartfelt devotion
            and sincere emotional magnetism.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Lovage contains aromatic compounds and plant constituents commonly
            referenced in traditional warming herbal preparations.
          </p>

          <p>
            Common Constituents: Volatile Oils, Coumarins, Flavonoids, Tannins
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
            Lovage may increase photosensitivity and should be used cautiously
            if pregnant. If pregnant, nursing, managing a condition, or taking
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