// app/grimoire/herbs/angelica/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AngelicaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Angelica" subtitle="Angelica archangelica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ANGELICA-HERO-IMAGE-URL"
              alt="Angelica"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Angelica stands as a guardian plant: protective, steady, and
              luminous in its quiet strength.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Angelica is a tall, aromatic plant native to northern Europe and
            parts of Asia. Traditionally cultivated in colder climates, it has
            long been valued for both practical use and spiritual protection.
          </p>

          <p>
            Its hollow stems, broad leaves, and umbrella-like flower clusters
            give it a striking presence in the landscape. In folk traditions,
            Angelica was considered a plant of divine protection and was often
            carried or planted near the home.
          </p>

          <p>
            In witchcraft, Angelica is treated as a guardian herb. It is worked
            with for protection, purification, spiritual authority, and
            strengthening the field against interference.
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
                <Link href="PASTE-MICHAEL-ROUTE">Archangel Michael</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-SEKHMET-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-OGUN-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">Leo</Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>
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
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Angelica in Witchcraft</h2>

              <div className="grimoire-image">
          <img
            src="PASTE-YOUR-ANGELICA-WITCHCRAFT-IMAGE-URL"
            alt="Angelica in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, purification, spiritual authority, courage,
                strength, warding, clarity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual interference, energetic intrusion, negativity, crossed
                conditions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming tonic use, traditional respiratory
                support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Angelica is often used as a boundary-setter. Place it near
                entryways or carry it when you need your presence to feel
                stronger and more defined.
                <br />
                <br />
                In purification rites, it reinforces the intention that only
                aligned energy may remain.
                <br />
                <br />
                When working with Crown Chakra focus, Angelica supports clarity
                without dissociation. It protects the channel rather than
                overwhelming it.
                <br />
                <br />
                Use it when you need your authority to feel calm, steady, and
                unquestioned.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Angelica</h2>

          <p>
            Angelica root is commonly dried and used in sachets, warding blends,
            and purification powders. It can be placed near doorways, windows,
            or ritual spaces for reinforcement.
          </p>

          <p>
            For protection rituals, combine Angelica with Fire element herbs and
            clear intention to strengthen boundaries.
          </p>

          <p>
            In spiritual authority work, Angelica can be carried when stepping
            into leadership or when the situation requires steadiness under
            pressure.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Angelica is used when protection must feel luminous rather than
            aggressive. It guards without hostility and reinforces strength
            without volatility.
          </p>

          <p>
            It is especially useful in long-term protection work where the goal
            is sustained stability rather than immediate confrontation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Angelica Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Angelica appears in European folk tradition as a protective herb
            believed to ward off illness and malevolent forces. It was often
            planted near homes and carried as a charm.
          </p>

          <p>
            In modern witchcraft, that legacy continues in its use as a guardian
            plant and purifier of space.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Angelica root contains aromatic oils, coumarins, and plant compounds
            traditionally associated with its warming and tonic reputation.
          </p>

          <p>Common Constituents: Aromatic Oils, Coumarins, Plant Compounds</p>
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
            Angelica may increase sun sensitivity in some individuals and should
            be used with care. If pregnant, nursing, managing a condition, or
            taking medication, consult a trusted professional source before
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