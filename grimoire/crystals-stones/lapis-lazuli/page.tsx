// app/grimoire/crystals-stones/lapis-lazuli/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LapisLazuliPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Lapis Lazuli" subtitle="Metamorphic rock · Lazurite-rich">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-LAPIS-LAZULI-HERO-IMAGE-URL"
              alt="Lapis Lazuli"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Lapis Lazuli is truth with teeth: vision, voice, and sacred authority.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Lapis Lazuli is a deep blue metamorphic rock prized for its
            celestial color and golden flecks, often caused by pyrite. It is
            lazurite-rich, and may include calcite and other minerals that
            create white veining or mottling.
          </p>

          <p>
            Historically valued as a stone of royalty, vision, and spiritual
            authority, Lapis has remained associated with insight, truth, and
            the courage to speak clearly. Its energy is often experienced as
            both expansive and sharpening: clarity that cuts through distortion.
          </p>

          <p>
            In witchcraft, Lapis Lazuli is commonly worked with for divination,
            intuition, spiritual insight, truth-telling, confidence in one&apos;s
            voice, and the strengthening of inner authority.
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
                <Link href="/grimoire/elements/air">Air</Link>
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
                <Link href="PASTE-MASCULINE-ENERGY-ROUTE">
                  Masculine / Day / Yang
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Chakra</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-THROAT-CHAKRA-ROUTE">Throat Chakra</Link>,{" "}
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MUGWORT-ROUTE">Mugwort</Link>,{" "}
                <Link href="PASTE-SAGE-ROUTE">Sage</Link>
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
                Deep blue to ultramarine, often with gold flecks of pyrite and
                occasional white veining from calcite. Most pieces are opaque
                with a dense, velvety tone.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/06-blue">blue</Link>{" "}
                current supports truth, wisdom, intuition, and spiritual vision.
                The{" "}
                <Link href="PASTE-GOLD-ROUTE">gold</Link>{" "}
                current supports authority, prosperity, and sacred power. Together,
                these currents make Lapis Lazuli a stone of insight and confident
                truth-telling.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* LAPIS LAZULI IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Lapis Lazuli in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Lapis Lazuli in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Divination, truth-telling, intuition, spiritual insight, confidence,
                wisdom, authority, communication
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Self-doubt, confusion, deception, fear of speaking, spiritual
                distortion, unclear vision
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Amethyst, Labradorite
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Lapis Lazuli is especially useful when you need to speak truth
                with confidence.
                <br /><br />
                It supports Throat Chakra work by strengthening voice and clarity,
                and Third Eye work by sharpening perception.
                <br /><br />
                In divination, it helps reduce distortion and reinforces authority:
                seeing clearly and trusting what you see.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH LAPIS LAZULI */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Lapis Lazuli</h2>

          <p>
            Lapis Lazuli is commonly used before readings, ritual work, or difficult
            conversations. It can be worn as jewelry, carried as a pocket stone, or
            placed near the throat and forehead during meditation.
          </p>

          <p>
            In spellwork, Lapis is often placed on the altar for truth spells,
            wisdom work, and authority rituals. It pairs well with cleansing and
            protection when the goal is clarity without manipulation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Lapis Lazuli is best reached for when you need to stop editing yourself.
            It supports honest speech, clear boundaries, and the courage to say what
            is true without collapsing into fear.
          </p>

          <p>
            In longer workings, it behaves like inner authority. It strengthens
            discernment, reduces self-doubt, and helps truth become a stable habit,
            not a moment of bravery.
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
    alt="Lapis Lazuli Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Lapis Lazuli has been treasured since ancient times, including in
            Egypt and Mesopotamia, used in jewelry, amulets, and sacred ornament.
            Ground lapis was also historically used as a pigment for ultramarine.
          </p>

          <p>
            In modern metaphysical practice, its long history of royal and sacred
            use continues in its association with truth, wisdom, and spiritual
            authority.
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
                Metamorphic rock (Lazurite-rich)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                5 to 5.5 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-value">Cubic</p>
              <p className="grimoire-correspondence-label">Crystal System</p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Deep blue lazurite matrix often with pyrite flecks and calcite veining
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Lapis Lazuli is softer than many stones and should be cleansed gently
            using smoke, sound, or moonlight. Avoid soaking in water, as calcite
            content may react to prolonged moisture.
          </p>

          <p>
            Store away from harder stones to prevent scratching. Avoid harsh
            chemicals to preserve polish and surface integrity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Lapis Lazuli is not intended for ingestion. Avoid grinding or creating
            dust from any mineral specimen, and do not prepare crystal elixirs
            without proper knowledge of mineral safety.
          </p>

          <p>
            This grimoire is written for spiritual and educational purposes and is
            not medical advice.
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