// app/grimoire/crystals-stones/carnelian/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CarnelianPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Carnelian" subtitle="Chalcedony variety · SiO₂">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-CARNELIAN-HERO-IMAGE-URL"
              alt="Carnelian"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Carnelian lights the body from the inside: courage, appetite, and forward motion.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Carnelian is a warm orange to red variety of chalcedony, valued for its
            bold energy and stabilizing vitality. It is often associated with
            motivation, confidence, creativity, and embodied courage.
          </p>

          <p>
            In practice, Carnelian is frequently reached for when energy is low or
            when hesitation has taken over. It supports steady action, stronger
            boundaries around personal will, and the return of desire: the part of
            you that wants to create, move, and build.
          </p>

          <p>
            In witchcraft, Carnelian is used for confidence, attraction, creativity,
            protection through personal power, and the strengthening of the lower
            chakras. It is chosen when the goal is momentum that stays grounded and
            sustainable.
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
                <Link href="PASTE-FIRE-ELEMENT-ROUTE">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-MARS-PLANET-ROUTE">Mars</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARIES-ROUTE">Aries</Link>,{" "}
                <Link href="PASTE-LEO-ROUTE">Leo</Link>
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
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Herbs</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/herbs/cinnamon">Cinnamon</Link>,{" "}
                <Link href="PASTE-GINGER-ROUTE">Ginger</Link>
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
                Orange to red-orange, sometimes leaning brownish or rust-toned.
                Often translucent with a soft internal glow, and may show gentle
                banding depending on the piece.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Correspondence</h3>
              <p className="grimoire-correspondence-value">
                The{" "}
                <Link href="/grimoire/colors/04-orange">orange</Link>{" "}
                current supports creativity, vitality, and attraction. The{" "}
                <Link href="/grimoire/colors/02-red">red</Link>{" "}
                current supports courage, will, and embodied power. Together,
                these currents make Carnelian a stone of confident momentum and
                grounded desire.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARNELIAN IN WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Carnelian in Witchcraft</h2>

          {/* WITCHCRAFT IMAGE */}
<div className="grimoire-image">
  <img
    src="PASTE-YOUR-STONE-WITCHCRAFT-IMAGE-URL"
    alt="Carnelian in Witchcraft artwork"
    className="grimoire-img"
  />
</div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Confidence, creativity, attraction, courage, motivation, vitality,
                sexual energy, protection through personal power
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Apathy, fear of action, low confidence, creative block, energetic
                drain, hesitation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Pairs Well {"\u00A0"}With
              </h3>
              <p className="grimoire-correspondence-value">
                Clear Quartz, Citrine, Black Tourmaline
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"} Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Carnelian is especially useful when you need to move from idea to
                execution.
                <br /><br />
                It supports Sacral Chakra work for creativity and desire, and Root
                Chakra work for stability and follow-through.
                <br /><br />
                In attraction work, it is often used to strengthen personal
                magnetism and reduce energetic self-doubt.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH CARNELIAN */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Carnelian</h2>

          <p>
            Carnelian is commonly carried when motivation is low or when confidence
            needs reinforcement. It can be worn as jewelry, kept in a pocket, or
            placed near a workspace to support momentum and creative output.
          </p>

          <p>
            In ritual, Carnelian is often used in attraction work, confidence
            workings, and creative spellcraft. It pairs well with fire-aligned
            tools and herbs when the goal is to build desire into action.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Carnelian is best reached for when you feel stuck in hesitation. It
            supports the moment where you choose action, not because you feel
            fearless, but because you are ready to move anyway.
          </p>

          <p>
            In longer workings, Carnelian behaves like steady heat. It does not
            burn you out. It supports consistency: sustained motivation, clearer
            desire, and confidence that grows through repetition.
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
    alt="Carnelian Folklore artwork"
    className="grimoire-img"
  />
</div>

          <p>
            Carnelian has been used historically in jewelry and talismans, often
            associated with courage and protection. In many traditions it was
            carried as a stone of strength and vitality.
          </p>

          <p>
            In modern metaphysical practice, its reputation continues as a stone
            of motivation, attraction, and embodied confidence: desire that becomes
            action.
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
                Silicate (Chalcedony)
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Hardness</p>
              <p className="grimoire-correspondence-value">
                6.5 to 7 on the Mohs scale
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystal System</p>
              <p className="grimoire-correspondence-value">
                Trigonal
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Notable Feature</p>
              <p className="grimoire-correspondence-value">
                Orange-red chalcedony with a steady warming current
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* CARE AND CLEANSING */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Care and Cleansing</h2>

          <p>
            Carnelian can be cleansed using smoke, sound, or moonlight. Brief water
            contact is typically fine. Avoid harsh chemicals and abrasive cleaning,
            especially for polished stones.
          </p>

          <p>
            Store Carnelian away from harder stones if you want to preserve its
            surface. Handle with care to avoid chips on points or edges.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* SAFETY */}
        <section className="grimoire-section grimoire-text">
          <p className="grimoire-subheading">Safety</p>

          <p>
            Carnelian is not intended for ingestion. Avoid grinding or creating
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