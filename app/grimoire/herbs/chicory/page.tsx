// app/grimoire/herbs/chicory/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ChicoryPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Chicory" subtitle="Cichorium intybus">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CHICORY-HERO-IMAGE-URL"
              alt="Chicory"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Chicory stands by the roadside and waits: loyal, protective, and quietly resilient.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Chicory is a hardy perennial plant recognized by its vivid blue flowers
            and deep taproot. Native to Europe but now widespread, it has long been
            valued for both culinary and traditional herbal use.
          </p>

          <p>
            Historically associated with endurance and devotion, Chicory thrives
            in difficult conditions and returns year after year with steady strength.
          </p>

          <p>
            In witchcraft, Chicory is worked with for protection, loyalty, road
            magic, resilience, and strengthening personal resolve.
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
                <Link href="PASTE-HERA-ROUTE">Hera</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-ANAHITA-ROUTE">Anahita</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
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
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/blue-lace-agate">
                  Blue Lace Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
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
          <h2 className="grimoire-subheading">Chicory in Witchcraft</h2>


        <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CHICORY-WITCHCRAFT-IMAGE-URL"
            alt="Chicory in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, loyalty, road magic, devotion, resilience, emotional strength
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Betrayal, abandonment, emotional instability, wandering focus
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, liver support, gentle tonic use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Carry Chicory root during travel for protective road magic.
                <br />
                <br />
                Use in devotion workings when strengthening loyalty and
                emotional steadiness.
                <br />
                <br />
                Pair with Heart Chakra rituals to reinforce healthy attachment.
                <br />
                <br />
                Chicory is especially powerful when the goal is endurance rather
                than dramatic change.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Chicory</h2>

          <p>
            Carry a small piece of Chicory root for travel protection and
            resilience.
          </p>

          <p>
            Add to sachets focused on strengthening loyalty and emotional
            steadiness.
          </p>

          <p>
            Incorporate into Moon rituals centered on devotion and grounding.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Chicory is used when emotional endurance is needed. It reinforces
            commitment and steadiness without force.
          </p>

          <p>
            It pairs well with Moon and Saturn rituals focused on loyalty,
            structure, and protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Chicory Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folklore, Chicory was sometimes carried for protection
            and invisibility. It was considered a plant of loyalty and quiet
            devotion.
          </p>

          <p>
            Its roadside presence gave rise to associations with protection
            during travel and enduring attachment.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Chicory contains inulin and other plant compounds traditionally
            associated with digestive and tonic support.
          </p>

          <p>
            Chemical Constituents: Inulin, Sesquiterpene Lactones, Flavonoids
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
            Chicory may cause digestive discomfort in some individuals. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a trusted professional source before ingesting any herb.
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
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