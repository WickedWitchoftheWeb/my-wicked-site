// app/grimoire/herbs/cedarwood/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CedarwoodPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cedarwood" subtitle="Cedrus spp.">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CEDARWOOD-HERO-IMAGE-URL"
              alt="Cedarwood"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cedarwood stands firm: ancient, protective, and rooted in
              enduring strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cedarwood comes from various species of cedar trees known for their
            durability, fragrance, and long-standing presence in sacred
            architecture and ritual.
          </p>

          <p>
            Across cultures, cedar has symbolized protection, purification, and
            spiritual authority. Its wood and resin have been used in temples,
            homes, and ceremonial fires.
          </p>

          <p>
            In witchcraft, Cedarwood is worked with for protection, grounding,
            stability, ancestral connection, and strengthening spiritual
            boundaries.
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
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>,{" "}
                <Link href="PASTE-ENLIL-ROUTE">Enlil</Link>,{" "}
                <Link href="PASTE-ARTEMIS-ROUTE">Artemis</Link>,{" "}
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-GREEN-MAN-ROUTE">Green Man</Link>,{" "}
                <Link href="PASTE-DANU-ROUTE">Danu</Link>,{" "}
                <Link href="PASTE-HEPHAESTUS-ROUTE">Hephaestus</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
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
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">
                  Hematite
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
          <h2 className="grimoire-subheading">Cedarwood in Witchcraft</h2>

               <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CEDARWOOD-WITCHCRAFT-IMAGE-URL"
            alt="Cedarwood in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, grounding, stability, ancestral work, spiritual
                authority, warding
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic intrusion, instability, fear, negative influence,
                spiritual weakness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Aromatic calming, grounding support, traditional respiratory use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Burn Cedarwood in protection rituals to establish strong
                boundaries within a space.
                <br />
                <br />
                Use it in ancestral work to create grounded connection rather
                than emotional overwhelm.
                <br />
                <br />
                In Root Chakra rituals, Cedarwood reinforces stability and
                endurance.
                <br />
                <br />
                It is especially powerful in long-term warding work where
                consistency matters.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cedarwood</h2>

          <p>
            Use Cedarwood chips or incense in protection and grounding rituals.
          </p>

          <p>
            Add it to home blessing blends when reinforcing boundaries and
            stability.
          </p>

          <p>
            Incorporate Cedarwood oil into meditation focused on endurance and
            rooted presence.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cedarwood is used when steadiness is required. It anchors the field
            and reinforces long-term protection.
          </p>

          <p>
            It pairs well with Earth element rituals and Saturn-focused work
            centered on structure and endurance.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cedarwood Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Cedar has been revered in many traditions as a sacred tree. It was
            used in temples, purification rites, and protective ceremonies.
          </p>

          <p>
            Indigenous traditions of North America, the Middle East, and
            Europe each recognized Cedar as a guardian tree associated with
            strength and spiritual cleansing.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cedarwood contains aromatic compounds including cedrol and
            sesquiterpenes that contribute to its distinctive scent and
            traditional uses.
          </p>

          <p>
            Chemical Constituents: Cedrol, Sesquiterpenes, Volatile Oils
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
            Cedarwood essential oil may cause skin sensitivity in some
            individuals. If pregnant, nursing, managing a condition, or taking
            medication, consult a trusted professional source before ingesting
            or applying any herb. This grimoire is written for spiritual and
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