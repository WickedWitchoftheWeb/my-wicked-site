// app/grimoire/herbs/chervil/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ChervilPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Chervil" subtitle="Anthriscus cerefolium">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CHERVIL-HERO-IMAGE-URL"
              alt="Chervil"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Chervil refines the field: subtle, intelligent, and quietly
              protective.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Chervil is a delicate culinary herb native to Europe and Western
            Asia. Often compared to parsley, it carries a mild, slightly sweet
            flavor and has long been cultivated in kitchen gardens.
          </p>

          <p>
            Historically associated with renewal and clarity, Chervil has
            appeared in spring traditions and cleansing customs.
          </p>

          <p>
            In witchcraft, Chervil is worked with for subtle protection,
            clarity, refinement, and quiet boundary reinforcement.
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-MERCURY-ROUTE">Mercury</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-FREYA-ROUTE">Freya</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-SARASWATI-ROUTE">Saraswati</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amazonite">
                  Amazonite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Chervil in Witchcraft</h2>

                 <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CHERVIL-WITCHCRAFT-IMAGE-URL"
            alt="Chervil in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Clarity, communication, refinement, subtle protection,
                intellectual focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Confusion, miscommunication, scattered focus, subtle energetic
                interference
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Digestive support, gentle tonic use, mild soothing properties
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Chervil to study blends or ritual teas focused on
                intellectual clarity.
                <br />
                <br />
                Use it in subtle protection sachets where gentle reinforcement
                is preferred over force.
                <br />
                <br />
                Pair with Throat Chakra rituals when refining speech and
                intention.
                <br />
                <br />
                This herb works best in precise, intentional workings rather
                than dramatic spellcraft.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Chervil</h2>

          <p>
            Use Chervil in ritual teas focused on communication and focus.
          </p>

          <p>
            Add to sachets placed near workspaces to support clarity and calm
            mental flow.
          </p>

          <p>
            Incorporate into Air element rituals centered on refinement and
            intention.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Chervil is used when precision is needed. It sharpens the mind and
            stabilizes subtle energetic currents.
          </p>

          <p>
            It pairs well with Mercury-focused rituals centered on
            communication and intellectual refinement.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Chervil Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folk traditions, Chervil was sometimes associated with
            spring renewal and subtle purification.
          </p>

          <p>
            Its culinary and medicinal presence allowed it to become a quiet,
            everyday plant of refinement and gentle clarity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Chervil contains volatile oils and plant compounds associated with
            its mild aromatic qualities.
          </p>

          <p>
            Chemical Constituents: Volatile Oils, Flavonoids, Coumarins
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
            Chervil should be used in moderation and may not be suitable for
            everyone. If pregnant, nursing, managing a condition, or taking
            medication, consult a trusted professional source before ingesting
            any herb. This grimoire is written for spiritual and educational
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