// app/grimoire/herbs/rooibos/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function RooibosPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Rooibos" subtitle="Aspalathus linearis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ROOIBOS-HERO-IMAGE-URL"
              alt="Rooibos"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Rooibos steadies the spirit: warm the body, soothe the heart, and
              root yourself gently in peace.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Rooibos is a South African shrub traditionally harvested and
            fermented to create a deep red herbal infusion. Naturally caffeine
            free, it has become beloved worldwide as a nourishing and calming
            tea.
          </p>

          <p>
            In traditional herbal practice, Rooibos is associated with gentle
            antioxidant support, digestive comfort, and skin soothing
            preparations. Its warmth is grounding rather than stimulating.
          </p>

          <p>
            In witchcraft, Rooibos is used for grounding, heart healing,
            comfort, resilience, and gentle protection. It is chosen when the
            goal is stability without force and warmth without overwhelm.
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
                <Link href="/grimoire/elements/earth">Earth</Link>,{" "}
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-GAIA-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-DEMETER-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
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
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
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
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Rooibos in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ROOIBOS-WITCHCRAFT-IMAGE-URL"
              alt="Rooibos in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Grounding, heart healing, comfort magic, resilience, emotional
                stability, gentle protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Burnout, emotional depletion, anxiety spikes, instability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Antioxidant support, skin soothing, digestive comfort, calming
                infusion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Brew Rooibos when you need steadiness rather than stimulation.
                <br />
                <br />
                Use in self love rituals to anchor warmth into the body.
                <br />
                <br />
                Add to grounding baths when emotions feel scattered.
                <br />
                <br />
                Pair with Heart Chakra focus when rebuilding after emotional
                strain.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Rooibos
          </h2>

          <p>
            Brew as a ritual tea when grounding before spell work.
          </p>

          <p>
            Add to comfort blends focused on heart healing and stability.
          </p>

          <p>
            Use cooled infusion as a gentle wash for grounding and soothing
            energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Rooibos is a practical ally when intensity must soften. It supports
            sustainable strength rather than sudden force.
          </p>

          <p>
            Work with it during recovery phases, emotional recalibration, and
            rituals centered on warmth and steadiness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-ROOIBOS-FOLKLORE-IMAGE-URL"
              alt="Rooibos Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Indigenous communities in South Africa have used Rooibos for
            generations as a nourishing and soothing beverage. Its preparation
            and sharing carry themes of hospitality and communal care.
          </p>

          <p>
            In modern magical practice, Rooibos symbolizes grounded warmth:
            strength rooted in gentleness.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Rooibos contains antioxidant compounds traditionally associated
            with cellular support.
          </p>

          <p>
            Common Constituents: Aspalathin, Polyphenols, Flavonoids
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
            Rooibos is generally considered gentle, but always consult a
            qualified professional if pregnant, nursing, managing a condition,
            or taking medication before ingesting herbal preparations. This
            grimoire is written for spiritual and educational purposes and is
            not medical advice.
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