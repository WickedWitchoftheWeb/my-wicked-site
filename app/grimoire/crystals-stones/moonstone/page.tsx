// app/grimoire/crystals-stones/moonstone/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MoonstonePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Moonstone" subtitle="Feldspar mineral · KAlSi₃O₈ to (Na,K)AlSi₃O₈">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-MOONSTONE-HERO-IMAGE-URL"
              alt="Moonstone"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Moonstone teaches the art of becoming: soft power, quiet knowing, constant return.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Moonstone is a feldspar mineral known for adularescence: a floating,
            internal glow that moves across the surface like moonlight on water.
            Its body color is often white, cream, peach, or grey, sometimes with
            flashes of blue.
          </p>

          <p>
            In metaphysical practice, Moonstone is associated with intuition,
            cycles, emotional intelligence, and gentle transformation. It is often
            described as a stone that supports receptivity and inner knowing:
            clarity that arrives softly, but unmistakably.
          </p>

          <p>
            In witchcraft, Moonstone is commonly worked with for lunar magick,
            divination, dreamwork, emotional healing, fertility symbolism,
            and transitional support. It is chosen when the goal is alignment with
            rhythm rather than force.
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
                <Link href="PASTE-MOON-PLANET-ROUTE">Moon</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-CANCER-ROUTE">Cancer</Link>,{" "}
                <Link href="PASTE-PISCES-ROUTE">Pisces</Link>
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
                </Link>,{" "}
                <Link href="PASTE-CROWN-CHAKRA-ROUTE">Crown Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/mugwort">Mugwort</Link>,{" "}
                <Link href="PASTE-JASMINE-ROUTE">Jasmine</Link>
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
                White to cream, peach, or grey body color with a soft internal
                glow. Many pieces show blue flash across the surface when turned
                in the light due to adularescence.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/01-white">white</Link>{" "}
                current supports clarity, purity, and spiritual receptivity. The{" "}
                <Link href="/grimoire/colors/06-blue">blue</Link>{" "}
                current supports intuition, inner vision, and calm communication.
                Together, these currents position Moonstone as a stone of quiet
                knowing and cyclical return.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* MOONSTONE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Moonstone in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Moonstone in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Intuition, lunar magick, dreamwork, emotional healing, transition,
                divination, spiritual receptivity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional volatility, confusion, disconnection from intuition,
                burnout, harsh self-judgment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Amethyst, Labradorite, Clear Quartz
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Moonstone is often used in ritual aligned to the lunar cycle:
                new moon intention-setting and full moon release work.
                <br /><br />
                It supports Third Eye and Crown Chakra work by enhancing intuitive
                reception without forcing answers.
                <br /><br />
                In dreamwork, it is commonly placed near the bed to support
                clarity, symbolism, and emotional integration.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH MOONSTONE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Moonstone</h2>

          <p>
            Moonstone is commonly carried or worn during emotionally sensitive
            seasons, lunar rituals, or periods of transition. It can be placed
            on the altar during new moon or full moon work to support intention
            and release.
          </p>

          <p>
            In meditation, Moonstone is often placed near the Third Eye or held
            in the hands to support receptive intuition. It is especially helpful
            when you need to soften, listen, and allow truth to arrive.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Moonstone is best reached for when your emotions need space to move
            without becoming a storm. It supports steadiness, intuition, and
            gentle self-trust.
          </p>

          <p>
            In longer workings, Moonstone behaves like rhythm. It helps you
            return to yourself, again and again, until alignment becomes natural.
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
    alt="Moonstone Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Moonstone has been associated with lunar symbolism for centuries,
            prized for its glowing appearance and soft sheen. Across traditions,
            it has been linked to intuition, love, and cyclical change.
          </p>

          <p>
            In modern metaphysical practice, Moonstone remains one of the most
            iconic stones for lunar magick and intuitive work.
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
                Silicate (Feldspar group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6 to 6.5 on the Mohs scale
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
                Adularescence: floating internal glow that shifts across the surface
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Moonstone can be cleansed using smoke, sound, or moonlight. Brief
            water contact is typically fine, but avoid prolonged soaking and
            harsh chemicals.
          </p>

          <p>
            Store away from harder stones to prevent scratching, especially
            polished surfaces.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Moonstone is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
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