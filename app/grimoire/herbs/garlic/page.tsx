// app/grimoire/herbs/garlic/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GarlicPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Garlic" subtitle="Allium sativum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-GARLIC-HERO-IMAGE-URL"
              alt="Garlic"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Garlic guards fiercely: it purifies the field, strengthens
              boundaries, and drives out what does not belong.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Garlic is one of the oldest cultivated plants, grown across Asia,
            the Mediterranean, and Europe for thousands of years. It has long
            appeared in food, medicine, and household protection customs.
          </p>

          <p>
            In practical tradition, Garlic is widely discussed for its
            strengthening and purifying properties. In spiritual work, that
            same potency translates into protection, warding, and forceful
            cleansing.
          </p>

          <p>
            In witchcraft, Garlic is used for protection, banishing, uncrossing,
            and strengthening boundaries. It is often chosen when the goal is
            to remove unwanted influence and fortify personal or household
            space.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HECATE-DEITY-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-MARS-DEITY-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-THOR-DEITY-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-OGUN-DEITY-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-SEKHMET-DEITY-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-KALI-DEITY-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-ARCHANGEL-MICHAEL-ROUTE">
                  Archangel Michael
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
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
          <h2 className="grimoire-subheading">Garlic in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GARLIC-WITCHCRAFT-IMAGE-URL"
              alt="Garlic in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, banishing, uncrossing, warding, boundary
                reinforcement, cleansing, courage
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Psychic intrusion, hostile intention, envy, curses, negative
                attachment, energy drain
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Immune support, traditional circulatory support, warming tonic
                use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Garlic is direct protection. It is often used when influence
                feels intrusive or persistent.
                <br />
                <br />
                In uncrossing work, it supports the removal of stubborn energy
                that clings to the field.
                <br />
                <br />
                For home protection, hang or place Garlic near entrances to
                reinforce boundaries.
                <br />
                <br />
                Pair it with Root Chakra focus when grounding and security are
                the priority.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Garlic</h2>

          <p>
            Garlic can be worked with fresh or dried. It is commonly used in
            protection sachets, warding jars, and cleansing floor washes.
          </p>

          <p>
            For protection, place whole cloves near thresholds or incorporate
            them into a focused warding blend.
          </p>

          <p>
            For banishing work, combine Garlic with other strong protective
            herbs and keep the intention clear: remove, fortify, hold.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Garlic is a practical choice when you need protection that is
            unmistakable. Use it when boundaries have been crossed or when
            the home feels energetically compromised.
          </p>

          <p>
            It is also useful when courage is required. Garlic reinforces the
            field so your next move comes from strength rather than fear.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-GARLIC-FOLKLORE-IMAGE-URL"
              alt="Garlic Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Garlic appears across European, Middle Eastern, and Asian folklore
            as a powerful protective plant. It was traditionally hung in homes
            to ward off illness and harmful spirits.
          </p>

          <p>
            In modern witchcraft, Garlic remains a staple in protection and
            banishing rites. The current is strong and clear: guard the
            threshold and remove what does not belong.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Garlic is often described as containing sulfur compounds and
            aromatic plant components associated with its traditional
            strengthening reputation. This section is the place to list
            additional nutritional components such as vitamins and minerals
            when applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Sulfur Compounds, Aromatic Plant Compounds</p>
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
            Garlic is commonly used in culinary amounts. Larger medicinal
            amounts may interact with certain medications or conditions. If
            pregnant, nursing, managing a condition, or taking medication,
            check safety details with a trusted professional source before
            ingesting any herb. This grimoire is written for spiritual and
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