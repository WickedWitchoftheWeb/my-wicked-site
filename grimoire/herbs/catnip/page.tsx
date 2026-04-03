// app/grimoire/herbs/catnip/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CatnipPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Catnip" subtitle="Nepeta cataria">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CATNIP-HERO-IMAGE-URL"
              alt="Catnip"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Catnip soothes the nerves and stirs the heart: soft, playful,
              and quietly magnetic.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Catnip is a perennial herb in the mint family, known for its effect
            on cats and its gentle calming properties in traditional herbal
            use. Native to Europe and Asia, it has spread widely through
            cultivation.
          </p>

          <p>
            While most famously associated with felines, Catnip has also been
            used historically as a soothing tea and as a mild relaxant.
          </p>

          <p>
            In witchcraft, Catnip is worked with for love, attraction, calming
            tension, and strengthening gentle magnetism.
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
                <Link href="PASTE-BAST-ROUTE">Bast</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-VENUS-ROUTE">Venus</Link>,{" "}
                <Link href="PASTE-FREYA-ROUTE">Freya</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>
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
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
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
          <h2 className="grimoire-subheading">Catnip in Witchcraft</h2>

                <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CATNIP-WITCHCRAFT-IMAGE-URL"
            alt="Catnip in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love, attraction, calming tension, emotional balance, playful
                magnetism
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional overwhelm, stress, coldness in relationships
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Calming support, digestive comfort, gentle relaxation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Use Catnip in love sachets to encourage warmth and playful
                connection.
                <br />
                <br />
                In Moon-focused rituals, it supports emotional softness without
                loss of clarity.
                <br />
                <br />
                Add to calming blends when relationships feel tense or strained.
                <br />
                <br />
                Its strength lies in gentle magnetism rather than force.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Catnip</h2>

          <p>
            Add Catnip to love charms or attraction blends when the intention is
            warmth and playful energy.
          </p>

          <p>
            Use it in calming teas or ritual baths focused on emotional
            steadiness.
          </p>

          <p>
            Place small sachets near the bed to support restful, peaceful sleep.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Catnip is used when emotional softness is needed. It tempers
            intensity and brings relationships back into playful alignment.
          </p>

          <p>
            It pairs well with Moon and Venus rituals centered on comfort and
            connection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Catnip Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folk traditions, Catnip was sometimes used in love
            charms and calming brews. Its playful association with cats gave it
            a reputation for lighthearted attraction.
          </p>

          <p>
            Modern witchcraft continues to use Catnip for gentle love magic and
            emotional comfort.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Catnip contains volatile oils including nepetalactone, associated
            with its distinctive aroma and traditional herbal use.
          </p>

          <p>
            Chemical Constituents: Nepetalactone, Volatile Oils
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
            Catnip is generally considered gentle, but reactions may vary. If
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