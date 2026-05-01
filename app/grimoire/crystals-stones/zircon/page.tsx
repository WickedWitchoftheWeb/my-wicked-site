// app/grimoire/crystals-stones/zircon/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ZirconPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Zircon" subtitle="Zirconium silicate · ZrSiO₄">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-ZIRCON-HERO-IMAGE-URL"
              alt="Zircon"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Zircon holds ancient light: clarity that remembers what time forgets.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Zircon is a zirconium silicate mineral prized for its brilliance
            and wide range of natural colors. It can appear colorless, blue,
            golden, red-brown, green, or honey-toned, often with a sharp,
            glassy sparkle.
          </p>

          <p>
            In metaphysical practice, Zircon is associated with clarity,
            protection, grounding light into the body, and strengthening
            personal presence. It is often experienced as stabilizing rather
            than dreamy.
          </p>

          <p>
            In witchcraft, Zircon is commonly worked with for protection,
            mental clarity, confidence, and keeping one&apos;s energy steady
            under pressure.
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
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-SUN-PLANET-ROUTE">Sun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-VIRGO-ROUTE">Virgo</Link>,{" "}
                <Link href="PASTE-CAPRICORN-ROUTE">Capricorn</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Energy</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MASCULINE-ENERGY-ROUTE">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>,{" "}
                <Link href="PASTE-SOLAR-PLEXUS-CHAKRA-ROUTE">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/rosemary">Rosemary</Link>,{" "}
                <Link href="/grimoire/herbs/bay-leaf">Bay Leaf</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COLOR */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Color</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Appearance</h3>
              <p className="grimoire-correspondence-value">
                Found in colorless, blue, golden, honey, red-brown, and green
                varieties. Often transparent to translucent with high brilliance.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                Colorless and pale forms align with the{" "}
                <Link href="/grimoire/colors/01-white">white</Link>{" "}
                current of clarity. Golden varieties link to{" "}
                <Link href="/grimoire/colors/10-gold">gold</Link>{" "}
                currents of confidence and success. Blue varieties connect to the{" "}
                <Link href="/grimoire/colors/03-blue">blue</Link>{" "}
                current of mental clarity and calm communication.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* ZIRCON IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Zircon in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Zircon in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Clarity, protection, confidence, grounding light, focus,
                energetic steadiness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Confusion, energetic drain, scattered attention, uncertainty
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Citrine, Hematite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Zircon is often used when clarity must be grounded into action.
                <br /><br />
                It supports protective work that emphasizes steadiness rather
                than aggression.
                <br /><br />
                In prosperity rites, golden Zircon is used to reinforce
                confidence and success.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH ZIRCON */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Zircon</h2>

          <p>
            Zircon can be worn as jewelry when calm confidence and clarity
            are needed. It is often used as a stabilizer in high-pressure
            situations.
          </p>

          <p>
            In ritual, it may be placed near written intentions, business tools,
            or protective wards to reinforce steadiness and focus.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Zircon is best reached for when you need to stay steady under
            pressure. It supports clarity that does not waver when emotions
            rise.
          </p>

          <p>
            In longer workings, it reinforces grounded confidence and
            consistent focus.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          {/* FOLKLORE IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-FOLKLORE-IMAGE-URL"
    alt="Zircon Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Zircon is one of the oldest known minerals on Earth, with crystals
            used by geologists to study ancient formation timelines. Its
            brilliance has also led to confusion with other gems in historic
            trade.
          </p>

          <p>
            In modern metaphysical traditions, Zircon is regarded as a stone of
            clarity, protection, and grounded light.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* PROPERTIES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Properties</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Mineral Class</p>
              <p className="grimoire-correspondence-value">
                Silicate (Nesosilicate)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6.5 to 7.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Tetragonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                High brilliance and wide natural color range
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Zircon can be cleansed using smoke, sound, moonlight, or brief
            water contact. Avoid harsh chemicals and protect from impact, as
            some specimens can be brittle.
          </p>

          <p>
            Store separately from harder stones to preserve its surface and
            brilliance.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Zircon is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes
            and is not medical advice.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/crystals-stones" className="grimoire-footer-link">
              ← Back to Crystals
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