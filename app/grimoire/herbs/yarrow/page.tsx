// app/grimoire/herbs/yarrow/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function YarrowPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Yarrow" subtitle="Achillea millefolium">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-YARROW-HERO-IMAGE-URL"
              alt="Yarrow"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Yarrow fortifies the field: protect the body, guard the spirit, stand unshaken.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Yarrow is a hardy flowering herb native to Europe, Asia, and North
            America. Recognized by its feathery leaves and clustered white or
            pale flowers, it has been used in both medicinal and protective
            traditions for centuries.
          </p>

          <p>
            In herbal practice, Yarrow is associated with wound care,
            inflammation support, and circulation. Its name is linked to the
            warrior Achilles, who was said to have used it on the battlefield.
          </p>

          <p>
            In witchcraft, Yarrow is used for protection, courage, energetic
            shielding, love divination, and boundary strengthening. It is chosen
            when the goal is to remain open without becoming vulnerable.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ACHILLES-ROUTE">Achilles</Link>,{" "}
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-ARTEMIS-ROUTE">Artemis</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
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
          <h2 className="grimoire-subheading">Yarrow in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-YARROW-WITCHCRAFT-IMAGE-URL"
              alt="Yarrow in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, courage, energetic shielding, love divination,
                boundary strengthening
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic attack, energetic leakage, fear, emotional vulnerability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Wound support, inflammation support, circulation support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Carry dried Yarrow for personal protection and confidence.
                <br />
                <br />
                Add to protection jars when reinforcing energetic boundaries.
                <br />
                <br />
                Use in love divination rituals focused on honest intention.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when strengthening courage.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Yarrow</h2>

          <p>
            Add to protection sachets and boundary focused spell work.
          </p>

          <p>
            Incorporate into ritual baths for courage and energetic shielding.
          </p>

          <p>
            Use in love divination rituals when clarity and honesty are desired.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Yarrow is a practical ally when you need to stay open without
            becoming exposed. It strengthens the energetic perimeter.
          </p>

          <p>
            Work with it during protection rites, courage building rituals, and
            times when boundaries must be reinforced.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Yarrow contains plant compounds traditionally associated with wound
            and inflammation support.
          </p>

          <p>
            Common Constituents: Flavonoids, Tannins, Volatile Oils, Alkaloids
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
            Yarrow may not be suitable during pregnancy and should be used with
            care by those with allergies to plants in the Asteraceae family. If
            pregnant, nursing, managing a condition, or taking medication,
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