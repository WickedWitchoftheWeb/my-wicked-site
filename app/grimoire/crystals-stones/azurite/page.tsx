// app/grimoire/crystals-stones/azurite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AzuritePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Azurite" subtitle="Copper carbonate mineral · Cu₃(CO₃)₂(OH)₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-AZURITE-HERO-IMAGE-URL"
              alt="Azurite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Azurite opens the inner eye: not to escape reality, but to see it clearly.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Azurite is a deep blue copper carbonate mineral, often found alongside Malachite.
            It is known for its intense color and its strong reputation as a stone of insight,
            perception, and inner truth.
          </p>

          <p>
            In practice, Azurite is often reached for when the mind feels clouded or when intuition
            has been drowned out by stress, noise, or other people&apos;s opinions. It supports clear
            thinking that stays connected to inner knowing.
          </p>

          <p>
            In witchcraft, Azurite is commonly worked with for divination, dreamwork, psychic
            protection, and deep self-inquiry. It is often chosen when the goal is not comfort,
            but clarity.
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
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-JUPITER-PLANET-ROUTE">Jupiter</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-SAGITTARIUS-ROUTE">Sagittarius</Link>,{" "}
                <Link href="PASTE-AQUARIUS-ROUTE">Aquarius</Link>
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="/grimoire/herbs/feverfew">Feverfew</Link>
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
                Deep blue to midnight blue, sometimes showing lighter blue zones, soft banding,
                or natural matrix. Often appears velvety or richly saturated.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="PASTE-BLUE-COLOR-ROUTE">blue</Link>{" "}
                current supports calm truth, clear communication, and emotional steadiness. The{" "}
                <Link href="PASTE-INDIGO-COLOR-ROUTE">indigo</Link>{" "}
                current supports perception, intuition, and inner sight. Together, these currents
                make Azurite a stone for insight that stays grounded.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* AZURITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Azurite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Azurite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Divination, intuition, truth-seeking, dreamwork, clarity, self-inquiry,
                psychic protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Confusion, mental fog, self-deception, energetic noise, manipulation,
                distorted perception
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Labradorite, Moonstone
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Azurite is often used before divination to clear static and sharpen perception.
                <br />
                <br />
                It supports Third Eye work when the goal is insight with discernment, not fantasy.
                <br />
                <br />
                In protection work, it helps the practitioner recognize what is true before taking action.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH AZURITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Azurite</h2>

          <p>
            Azurite is commonly placed on an altar during divination, dreamwork, and clarity rituals.
            It can be held during meditation to support inner sight and honest self-reflection.
          </p>

          <p>
            Because it is a softer mineral, many practitioners prefer to work with Azurite in stable
            placements rather than carrying it daily. It excels as a dedicated tool for reading,
            vision work, and truth-focused spellcraft.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Azurite is best reached for when you know something is off, but you cannot name it yet.
            It supports the moment where the truth surfaces, not as drama, but as clarity.
          </p>

          <p>
            In longer workings, Azurite behaves like a lens. It does not soften reality. It helps you
            see pattern, motive, and meaning so you can make decisions from awareness instead of doubt.
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
    alt="Azurite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Azurite has been used historically as a pigment source and valued for its striking blue
            color. In modern metaphysical practice, its reputation often centers on inner sight,
            insight, and the ability to perceive what is hidden.
          </p>

          <p>
            It is frequently treated as a stone of truth and discernment: a tool for seeing clearly
            without being pulled into illusion.
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
                Carbonate
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                3.5 to 4 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Monoclinic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Copper-based mineral often found with Malachite
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Azurite is a softer stone, so cleanse using smoke, sound, or moonlight.
            Avoid prolonged water contact and avoid salt, which can damage the surface.
          </p>

          <p>
            Handle gently to prevent scratches and chips. Store Azurite away from harder stones and
            avoid harsh chemicals or abrasive cleaning.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Azurite is not intended for ingestion. Avoid grinding or creating dust from any mineral
            specimen, and do not prepare crystal elixirs without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and is not medical advice.
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