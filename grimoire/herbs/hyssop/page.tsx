// app/grimoire/herbs/hyssop/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HyssopPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hyssop" subtitle="Hyssopus officinalis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-HYSSOP-HERO-IMAGE-URL"
              alt="Hyssop"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Hyssop purifies what weighs on the spirit: wash, release, and
              return to clean intention.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Hyssop is a fragrant flowering herb native to Southern Europe and
            parts of the Middle East. It has been cultivated for centuries for
            both culinary and ritual use, and it holds one of the strongest
            reputations for purification in spiritual history.
          </p>

          <p>
            In practical herbal tradition, Hyssop has been used in teas and
            preparations for seasonal support and respiratory comfort.
            Energetically, it carries a cleansing, clarifying current that
            removes heaviness from both space and spirit.
          </p>

          <p>
            In witchcraft, Hyssop is used for purification, uncrossing,
            protection, spiritual reset, and moral or energetic cleansing. It
            is chosen when the goal is not just removal, but restoration of
            spiritual balance.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
                ,{" "}
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-YAHWEH-ROUTE">Yahweh</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">
                  Selenite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Hyssop in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HYSSOP-WITCHCRAFT-IMAGE-URL"
              alt="Hyssop in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Purification, uncrossing, spiritual cleansing, blessing rites,
                protection renewal, ritual preparation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual residue, guilt, crossed conditions, lingering
                negativity, ritual impurity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional seasonal support, respiratory comfort preparations,
                cleansing herbal infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Hyssop is for spiritual reset.
                <br />
                <br />
                Use it before ritual to clear yourself and the space, especially
                when the work requires clean intention.
                <br />
                <br />
                In uncrossing, add Hyssop to bath blends and visualize
                heaviness washing away completely.
                <br />
                <br />
                Pair with Crown Chakra focus when the goal is clarity,
                forgiveness, and spiritual realignment.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Hyssop</h2>

          <p>
            Hyssop can be used as dried leaf in cleansing baths, floor washes,
            smoke blends, and ritual teas.
          </p>

          <p>
            For purification, steep Hyssop and add the cooled infusion to a
            ritual bath focused on release and renewal.
          </p>

          <p>
            For blessing work, incorporate Hyssop into incense blends and pass
            objects or tools through the smoke before ritual use.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Hyssop is a practical choice when you feel spiritually cluttered or
            emotionally burdened. It supports release without aggression.
          </p>

          <p>
            Work with it after conflict, before major ritual work, or when you
            are ready to consciously let go of old energy and begin again with
            clarity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HYSSOP-FOLKLORE-IMAGE-URL"
              alt="Hyssop Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Hyssop appears in ancient purification rites and religious texts as
            a cleansing herb used for spiritual washing and blessing. Its
            reputation for purity spans centuries.
          </p>

          <p>
            In modern witchcraft, Hyssop remains one of the primary herbs for
            uncrossing and ritual preparation. The current is simple and clear:
            wash, release, begin again.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Hyssop is often described as containing aromatic compounds and plant
            constituents traditionally associated with respiratory and cleansing
            support.
          </p>

          <p>
            Common Constituents: Volatile Oils, Flavonoids, Tannins, Marrubiin
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
            Hyssop essential oil should not be ingested and may not be suitable
            for people with seizure disorders. If pregnant, nursing, managing a
            condition, or taking medication, check safety details with a trusted
            professional source before ingesting any herb. This grimoire is
            written for spiritual and educational purposes and is not medical
            advice.
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