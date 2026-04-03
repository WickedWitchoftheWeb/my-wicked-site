// app/grimoire/crystals-stones/lepidolite/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LepidolitePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lepidolite" subtitle="Lithium-rich mica · K(Li,Al)₃(Si,Al)₄O₁₀(F,OH)₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-LEPIDOLITE-HERO-IMAGE-URL"
              alt="Lepidolite"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lepidolite steadies the storm: soft boundaries, quiet strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lepidolite is a lithium-rich mica mineral typically found in shades
            of lilac, lavender, rose, or soft purple. Its shimmering appearance
            comes from its layered crystal structure, which reflects light in
            delicate flashes.
          </p>

          <p>
            Because of its lithium content, Lepidolite has long been associated
            with emotional balance and nervous system support in metaphysical
            traditions. Its energy is often described as calming, stabilizing,
            and gently protective.
          </p>

          <p>
            In witchcraft, Lepidolite is worked with for emotional regulation,
            anxiety relief, boundary strengthening, grief processing, and
            transitional support. It is chosen when steadiness is required
            without hardness.
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
                <Link href="PASTE-LIBRA-ROUTE">Libra</Link>,{" "}
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>,{" "}
                <Link href="PASTE-CROWN-CHAKRA-ROUTE">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-LAVENDER-ROUTE">Lavender</Link>,{" "}
                <Link href="PASTE-CHAMOMILE-ROUTE">Chamomile</Link>
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
                Typically lilac, lavender, rose, or soft purple. May contain
                silvery mica shimmer and occasionally white or grey inclusions.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/05-purple">
                  purple
                </Link>{" "}
                current supports intuition, spiritual awareness, and higher
                perception. The{" "}
                <Link href="/grimoire/colors/09-pink">
                  pink
                </Link>{" "}
                current supports compassion, emotional healing, and gentle
                self-regulation. Together, these currents position Lepidolite
                as a stone of calm strength and intuitive softness.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* LEPIDOLITE IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lepidolite in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Lepidolite in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Emotional balance, anxiety relief, grief work, sleep support,
                transition, boundary strengthening, heart healing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional overwhelm, panic, energetic overexposure, mood swings,
                burnout
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Amethyst, Rose Quartz, Moonstone
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lepidolite is often placed near the bed for sleep rituals and
                emotional restoration.
                <br /><br />
                It supports Heart Chakra work that requires stability rather
                than intensity.
                <br /><br />
                In boundary rituals, it strengthens containment without
                hardening the spirit.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH LEPIDOLITE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Lepidolite</h2>

          <p>
            Lepidolite is commonly carried during emotionally intense seasons
            or placed under a pillow for sleep support. It may be held during
            meditation when calming the nervous system is the primary goal.
          </p>

          <p>
            In ritual, Lepidolite is often included in healing circles, grief
            rites, or boundary spells where the intention is regulation and
            steady restoration.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lepidolite is best reached for when the emotional field feels
            overstimulated. It helps slow reaction, soften internal pressure,
            and restore clarity through calm.
          </p>

          <p>
            In longer workings, it behaves like emotional scaffolding:
            supporting healing without forcing catharsis.
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
    alt="Lepidolite Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Lepidolite became widely recognized in modern mineralogy due to
            its lithium content. In contemporary metaphysical traditions,
            it gained popularity as a stone of calm and emotional balance.
          </p>

          <p>
            Though not ancient in recorded ritual history, its modern use
            centers around healing, emotional steadiness, and transitional
            support.
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
                Silicate (Mica group)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                2.5 to 3 on the Mohs scale
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
                Lithium content contributing to calming associations
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Lepidolite is soft and should be handled gently. Cleanse using
            smoke, sound, or moonlight. Avoid prolonged water exposure and
            harsh chemicals.
          </p>

          <p>
            Store separately from harder stones to prevent scratching or
            flaking.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Lepidolite is not intended for ingestion. Avoid grinding or
            creating dust from any mineral specimen, and do not prepare
            crystal elixirs without proper knowledge of mineral safety.
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
