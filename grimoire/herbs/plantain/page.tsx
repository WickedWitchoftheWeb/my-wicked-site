// app/grimoire/herbs/plantain/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PlantainPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Plantain" subtitle="Plantago major · Plantago lanceolata">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PLANTAIN-HERO-IMAGE-URL"
              alt="Plantain"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Plantain is the quiet healer: mend the wound, shield the skin,
              and walk forward protected.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Plantain is a resilient, low-growing herb found along roadsides,
            fields, and disturbed ground across much of the world. Often
            overlooked as a common weed, it carries a long history as a
            protective and healing plant.
          </p>

          <p>
            In traditional herbalism, Plantain is widely associated with skin
            support, wound care, and drawing out irritation. Its leaves have
            been used fresh in poultices for generations.
          </p>

          <p>
            In witchcraft, Plantain is used for protection, healing, travel
            safety, boundary reinforcement, and resilience. It is chosen when
            the goal is steady protection and practical care.
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
                <Link href="PASTE-HYGIEIA-ROUTE">Hygieia</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-FREYR-ROUTE">Freyr</Link>,{" "}
                <Link href="PASTE-GAIA-ROUTE">Gaia</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                <Link href="/grimoire/astrology/02-planets/06-saturn">
                  Saturn
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
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
                <Link href="/grimoire/crystals-stones/moss-agate">
                  Moss Agate
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">
                  Hematite
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Plantain in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PLANTAIN-WITCHCRAFT-IMAGE-URL"
              alt="Plantain in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Healing, protection, travel safety, resilience, grounding,
                boundary work
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Physical irritation, vulnerability, travel mishaps, weak
                boundaries, energetic intrusion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional wound support, skin soothing, drawing salves,
                irritation relief
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Plantain is a guardian of the roadside.
                <br />
                <br />
                Carry a dried leaf when traveling for quiet protection.
                <br />
                <br />
                Add to healing jars when strengthening recovery and resilience.
                <br />
                <br />
                Pair with Root Chakra focus when reinforcing safety and
                steadiness.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Plantain</h2>

          <p>
            Plantain can be used fresh as a poultice, dried in healing sachets,
            or infused into oils and salves.
          </p>

          <p>
            Add to protective travel charms when crossing unfamiliar ground.
          </p>

          <p>
            Place near thresholds to symbolize quiet endurance and natural
            protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Plantain is a practical ally when care must be simple and direct.
            It supports steady recovery rather than dramatic intervention.
          </p>

          <p>
            Work with it when healing, rebuilding boundaries, or moving through
            transitions that require resilience and grounded strength.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PLANTAIN-FOLKLORE-IMAGE-URL"
              alt="Plantain Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Anglo-Saxon tradition, Plantain was listed among the Nine Sacred
            Herbs and praised for its strength against poison and injury. It
            was seen as a loyal protector growing wherever humans walked.
          </p>

          <p>
            In modern witchcraft, it continues that role: humble, accessible,
            and steadfast in protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Plantain contains compounds traditionally associated with soothing
            and drawing properties.
          </p>

          <p>
            Common Constituents: Allantoin, Tannins, Mucilage, Iridoid
            Glycosides
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
            While generally considered gentle, always ensure proper plant
            identification before wild harvesting. If pregnant, nursing,
            managing a condition, or taking medication, consult a qualified
            professional before ingesting herbal preparations. This grimoire is
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