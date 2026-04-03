// app/grimoire/herbs/calendula/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CalendulaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Calendula" subtitle="Calendula officinalis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CALENDULA-HERO-IMAGE-URL"
              alt="Calendula"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Calendula is sunlight made gentle: it warms the spirit, seals the
              field, and heals what time has worn thin.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Calendula, often called Marigold, is a bright flowering plant known
            for its golden petals and soothing reputation. Cultivated widely,
            it has been used in traditional practice for skin support, comfort,
            and gentle restoration.
          </p>

          <p>
            With its sun-colored blooms, Calendula naturally became associated
            with warmth, protection, and emotional uplift. It is often treated
            as a plant that brings light back into the body and spirit after
            stress or depletion.
          </p>

          <p>
            In witchcraft, Calendula is worked with for protection, healing,
            love support, confidence, and strengthening the aura. Its energy is
            bright but not harsh: a steady, benevolent warmth.
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
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-HELIOS-ROUTE">Helios</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-FREYA-ROUTE">Freya</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-ROUTE">Venus</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
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
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
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
          <h2 className="grimoire-subheading">Calendula in Witchcraft</h2>

               <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CALENDULA-WITCHCRAFT-IMAGE-URL"
            alt="Calendula in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>


          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, healing, confidence, love support, happiness,
                strengthening the aura, success
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional heaviness, low confidence, misfortune, energetic
                leakage, discouragement
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Skin soothing, gentle topical support, traditional comfort
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Calendula is excellent for aura work. Add it to cleansing baths
                when you want protection that feels warm rather than harsh.
                <br />
                <br />
                In Solar Plexus rituals, it strengthens confidence without
                aggression.
                <br />
                <br />
                In love work, Calendula supports healthy warmth and self-respect
                rather than obsession.
                <br />
                <br />
                Use it when you want to bring light back into a space after
                conflict or prolonged stress.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Calendula</h2>

          <p>
            Calendula can be used in ritual baths, protection blends, and
            anointing oils focused on healing and strengthening the field.
          </p>

          <p>
            Add it to home blessing work when the goal is to lift the atmosphere
            and restore warmth.
          </p>

          <p>
            In confidence work, pair Calendula with Solar Plexus intention and
            daily repetition rather than one-time force.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Calendula is used when the practitioner needs gentle reinforcement:
            protection that feels like warmth, and healing that restores
            steadiness.
          </p>

          <p>
            It pairs well with Sun-focused rituals, home blessing, and aura
            strengthening work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Caldendula Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Calendula has appeared in folk tradition as a plant of protection
            and happiness, often associated with the Sun and with ritual uses
            that emphasize warmth and blessing.
          </p>

          <p>
            Modern witchcraft continues this legacy, using Calendula to restore
            confidence, protect the home, and bring light back into the field.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Calendula is often described as containing flavonoids, triterpenes,
            and plant compounds associated with its traditional soothing and
            restorative reputation.
          </p>

          <p>
            Common Constituents: Flavonoids, Triterpenes, Plant Compounds
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
            Calendula is commonly used in gentle preparations, but allergic
            reactions are possible, especially for those sensitive to plants in
            the daisy family. If pregnant, nursing, managing a condition, or
            taking medication, consult a trusted professional source before
            ingesting any herb. This grimoire is written for spiritual and
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