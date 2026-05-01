// app/grimoire/herbs/chamomile/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ChamomilePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Chamomile" subtitle="Matricaria chamomilla">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CHAMOMILE-HERO-IMAGE-URL"
              alt="Chamomile"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Chamomile softens the edge: it calms the storm and restores
              gentle balance.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Chamomile is a flowering herb long valued in traditional herbal
            practice for its calming and soothing qualities. It has been used
            across Europe, North Africa, and Western Asia for centuries.
          </p>

          <p>
            Known for its gentle energy, Chamomile is associated with rest,
            emotional ease, and steady comfort. Its presence in both household
            remedies and ritual practice reflects its reputation as a stabilizer.
          </p>

          <p>
            In witchcraft, Chamomile is worked with for peace, protection,
            prosperity, luck, and emotional balance.
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
                <Link href="PASTE-RA-ROUTE">Ra</Link>,{" "}
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
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
                <Link href="/grimoire/astrology/02-planets/01-sun">
                  Sun
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
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
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amber">
                  Amber
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Chamomile in Witchcraft</h2>

               <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CHAMOMILE-WITCHCRAFT-IMAGE-URL"
            alt="Chamomile in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Peace, emotional healing, prosperity, luck, protection, restful
                sleep
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Anxiety, conflict, emotional turbulence, negative energy,
                stress
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Calming support, digestive soothing, sleep support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Add Chamomile to sleep sachets or evening rituals focused on
                emotional calm.
                <br />
                <br />
                Use it in prosperity blends where steady growth is preferred
                over sudden gain.
                <br />
                <br />
                Pair with Heart Chakra work to soften defensive emotional
                patterns.
                <br />
                <br />
                Chamomile works best when the goal is gentle stabilization.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Chamomile
          </h2>

          <p>
            Brew Chamomile tea as part of evening rituals centered on peace and
            clarity.
          </p>

          <p>
            Add dried flowers to prosperity jars or sachets for steady growth.
          </p>

          <p>
            Use in ritual baths focused on emotional reset and calm restoration.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Chamomile is used when the practitioner needs calm without loss of
            awareness. It restores balance rather than suppressing emotion.
          </p>

          <p>
            It pairs well with Moon and Sun rituals centered on harmony and
            emotional clarity.
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
    alt="Chamomile Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Chamomile was revered in ancient Egypt and associated with the Sun.
            In European folk traditions, it was used for protection and luck.
          </p>

          <p>
            Across cultures, Chamomile has symbolized peace, resilience, and
            gentle prosperity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Chamomile contains essential oils and plant compounds traditionally
            associated with its calming properties.
          </p>

          <p>
            Chemical Constituents: Bisabolol, Flavonoids, Chamazulene
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
            Chamomile may cause allergic reactions in individuals sensitive to
            plants in the daisy family. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before ingesting any herb. This grimoire is written for
            spiritual and educational purposes and is not medical advice.
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