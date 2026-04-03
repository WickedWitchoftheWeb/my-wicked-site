// app/grimoire/herbs/ashwagandha/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AshwagandhaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Ashwagandha" subtitle="Withania somnifera">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ASHWAGANDHA-HERO-IMAGE-URL"
              alt="Ashwagandha"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Ashwagandha builds strength slowly: not explosive force, but
              steady endurance that does not bend under pressure.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Ashwagandha is a small shrub native to India, North Africa, and the
            Middle East. Its roots have been used for centuries in traditional
            practice as a strengthening and restorative herb.
          </p>

          <p>
            Often categorized as an adaptogen, Ashwagandha is associated with
            endurance, nervous system support, and long-term resilience rather
            than quick stimulation.
          </p>

          <p>
            In witchcraft, Ashwagandha is treated as a foundation builder. It is
            worked with when stability, stamina, and inner fortification are
            needed over time.
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
                <Link href="PASTE-HANUMAN-ROUTE">Hanuman</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-SHIVA-ROUTE">Shiva</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-OGUN-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
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
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/granite">
                  Granite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Ashwagandha in Witchcraft</h2>

           <div className="grimoire-image">
          <img
            src="PASTE-YOUR-ASHWAGANDHA-WITCHCRAFT-IMAGE-URL"
            alt="Ashwagandha in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Endurance, grounding, courage, stamina, protection, resilience,
                discipline
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Burnout, weakness, fear, instability, scattered focus, energetic
                depletion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Adaptogenic support, nervous system regulation, stress response
                balance, traditional vitality support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Ashwagandha is best used in long-term work. It reinforces the
                foundation so power does not collapse under pressure.
                <br />
                <br />
                In Root Chakra practice, it strengthens stability and helps
                rebuild confidence after exhaustion.
                <br />
                <br />
                Pair it with Earth element rituals when the goal is steady
                progress rather than dramatic breakthrough.
                <br />
                <br />
                This is not a flash herb. It builds the structure that allows
                force to be sustainable.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Ashwagandha
          </h2>

          <p>
            Ashwagandha root is commonly used in powdered or dried form. In
            magickal practice, it may be added to grounding blends, carried in
            sachets for endurance, or used in rituals focused on rebuilding
            strength.
          </p>

          <p>
            For resilience work, combine Ashwagandha with Root Chakra intention
            and steady, repetitive ritual rather than one-time forceful action.
          </p>

          <p>
            Its energy is cumulative. Work with it consistently when rebuilding
            after depletion or prolonged stress.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Ashwagandha is used when endurance is more important than speed. It
            stabilizes the practitioner so that future growth does not cost
            collapse.
          </p>

          <p>
            It pairs well with long-term protection work, discipline building,
            and consistent spiritual training.
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
    alt="Ashwagandha Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Ashwagandha has been used in traditional systems for centuries as a
            strengthening and restorative root. Its reputation is tied to
            stamina, vitality, and resilience.
          </p>

          <p>
            In modern witchcraft, that translates into foundational work:
            strengthening the base so higher practices remain stable.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Ashwagandha is often described as containing withanolides,
            alkaloids, and plant compounds associated with its traditional
            adaptogenic reputation.
          </p>

          <p>
            Common Constituents: Withanolides, Alkaloids, Plant Compounds
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
            Ashwagandha may not be appropriate for everyone and may interact
            with certain medications or conditions. If pregnant, nursing,
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