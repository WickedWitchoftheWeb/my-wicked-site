// app/grimoire/herbs/thyme/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ThymePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Thyme" subtitle="Thymus vulgaris">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-THYME-HERO-IMAGE-URL"
              alt="Thyme"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Thyme carries courage: cleanse the space, strengthen the spirit, and speak with steady fire.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Thyme is a low growing Mediterranean herb treasured for its sharp,
            earthy aroma. Used for centuries in kitchens and medicine cabinets
            alike, it has a long reputation for purification and strength.
          </p>

          <p>
            In traditional herbal practice, Thyme has been associated with
            respiratory support, antimicrobial cleansing, and digestive aid.
            Its scent is invigorating and clarifying.
          </p>

          <p>
            In witchcraft, Thyme is used for courage, cleansing, protection,
            confidence, and spirit strengthening. It is chosen when the goal is
            to clear weakness and reinforce resolve.
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-MARS-ROUTE">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
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
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/01-sun">
                  Sun
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
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
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
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Thyme in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-THYME-WITCHCRAFT-IMAGE-URL"
              alt="Thyme in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Courage, cleansing, protection, confidence, vitality, willpower
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Fear, weakness of will, lingering negativity, low energy,
                spiritual stagnation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Respiratory support, antimicrobial cleansing, digestive aid
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Burn Thyme to cleanse a room and reinforce courage.
                <br />
                <br />
                Add to protection jars when you need defensive strength with
                clarity.
                <br />
                <br />
                Brew tea before difficult conversations to support steady speech.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when strengthening will and
                self trust.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Thyme</h2>

          <p>
            Use dried Thyme in cleansing bundles and protective sachets.
          </p>

          <p>
            Add to ritual teas before public speaking or high pressure work.
          </p>

          <p>
            Sprinkle at thresholds to reinforce boundaries and clear stagnant
            energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Thyme is a practical ally when fear and hesitation must be cleared.
            It strengthens resolve and helps you hold your ground.
          </p>

          <p>
            Work with it during cleansing rituals, courage work, and moments
            when you must speak and act with steadiness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-THYME-FOLKLORE-IMAGE-URL"
              alt="Thyme Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In European folk tradition, Thyme was associated with courage and
            protection. It was carried by warriors and placed beneath pillows
            to encourage bravery in dreams.
          </p>

          <p>
            In magical practice, it represents clear fire: strength that purifies
            and protects without chaos.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Thyme contains aromatic compounds traditionally associated with
            cleansing and respiratory support.
          </p>

          <p>
            Common Constituents: Thymol, Carvacrol, Flavonoids, Volatile Oils
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
            Concentrated Thyme oil should be diluted before topical use. If
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