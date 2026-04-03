// app/grimoire/herbs/celery-seed/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CelerySeedPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Celery Seed" subtitle="Apium graveolens">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CELERY-SEED-HERO-IMAGE-URL"
              alt="Celery Seed"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Celery Seed clears what lingers: it purifies the field and
              restores clean movement.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Celery Seed is derived from the flowering plant Apium graveolens
            and has long been used in culinary and herbal traditions across
            Europe and Asia.
          </p>

          <p>
            Traditionally associated with purification and clearing, Celery
            Seed developed a reputation as a support for removing excess and
            restoring balance.
          </p>

          <p>
            In witchcraft, Celery Seed is worked with for cleansing, breaking
            stagnation, protection, and restoring energetic flow.
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
                <Link href="PASTE-POSEIDON-ROUTE">Poseidon</Link>,{" "}
                <Link href="PASTE-NEPTUNE-ROUTE">Neptune</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-HERA-ROUTE">Hera</Link>,{" "}
                <Link href="PASTE-CHALCHIUHTLICUE-ROUTE">
                  Chalchiuhtlicue
                </Link>
                ,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
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
                <Link href="/grimoire/astrology/02-planets/09-neptune">
                  Neptune
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
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
                <Link href="/grimoire/crystals-stones/aquamarine">
                  Aquamarine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">
                  Selenite
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
          <h2 className="grimoire-subheading">
            Celery Seed in Witchcraft
          </h2>

   <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CELERY-SEED-WITCHCRAFT-IMAGE-URL"
            alt="Celery Seed in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Cleansing, purification, emotional reset, flow restoration,
                boundary clearing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Emotional stagnation, lingering negativity, energetic residue,
                heaviness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional detox support, digestive balance, fluid regulation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Use Celery Seed in cleansing baths when the emotional field
                feels heavy.
                <br />
                <br />
                Add to purification blends when you need to clear subtle
                stagnation rather than forceful banishing.
                <br />
                <br />
                Pair with Moon-focused rituals for emotional reset.
                <br />
                <br />
                Its strength lies in restoring clean movement rather than
                burning through resistance.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Celery Seed
          </h2>

          <p>
            Add Celery Seed to ritual baths focused on purification and renewal.
          </p>

          <p>
            Incorporate it into cleansing sachets or floor washes when clearing
            subtle energetic residue.
          </p>

          <p>
            Use it in Moon-aligned rituals centered on emotional flow and
            softness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Celery Seed is used when the practitioner needs a gentle energetic
            reset. It supports clearing without aggression.
          </p>

          <p>
            It pairs well with Water element rituals and Moon-centered emotional
            recalibration.
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
    alt="Celery Seed Folklore Illustration"
    className="grimoire-img"
  />
</div>
          <p>
            In ancient Mediterranean traditions, celery was associated with
            purification and ritual practice. It appeared in ceremonial
            contexts tied to renewal and water symbolism.
          </p>

          <p>
            Modern witchcraft carries forward its association with cleansing
            and restoring flow.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Celery Seed contains essential oils and plant compounds associated
            with its traditional aromatic and balancing qualities.
          </p>

          <p>
            Chemical Constituents: Volatile Oils, Flavonoids, Phthalides
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
            Celery Seed may interact with certain medications and may increase
            sensitivity to sunlight in some individuals. If pregnant, nursing,
            managing a condition, or taking medication, consult a trusted
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