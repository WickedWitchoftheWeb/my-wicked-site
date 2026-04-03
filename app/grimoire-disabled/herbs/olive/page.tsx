// app/grimoire/herbs/olive/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function OlivePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Olive" subtitle="Olea europaea">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-OLIVE-HERO-IMAGE-URL"
              alt="Olive"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Olive brings peace that endures: crown the victory, bless the
              home, and let harmony take root.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Olive is a sacred evergreen tree native to the Mediterranean,
            cultivated for thousands of years for its fruit and oil. It has long
            symbolized peace, endurance, and divine blessing across cultures.
          </p>

          <p>
            In traditional practice, Olive oil has been used in food,
            anointing, and lamp fuel. The tree itself is known for longevity and
            resilience, often living for centuries.
          </p>

          <p>
            In witchcraft, Olive is used for peace work, protection,
            consecration, prosperity, and reconciliation. It is chosen when the
            goal is lasting harmony and sacred blessing.
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
                <Link href="/grimoire/elements/earth">Earth</Link>,{" "}
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-POSEIDON-ROUTE">Poseidon</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-MINERVA-ROUTE">Minerva</Link>,{" "}
                <Link href="PASTE-HERA-ROUTE">Hera</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
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
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
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
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/jade">
                  Jade
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Olive in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-OLIVE-WITCHCRAFT-IMAGE-URL"
              alt="Olive in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Peace work, reconciliation, protection, blessing, prosperity,
                sacred anointing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Conflict, hostility, spiritual unrest, instability, lingering
                discord
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional olive oil preparations, skin applications,
                nourishing culinary use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Use Olive oil to anoint candles for peace and prosperity.
                <br />
                <br />
                Place Olive leaves on an altar to symbolize enduring harmony.
                <br />
                <br />
                Add to blessing jars when sealing reconciliation work.
                <br />
                <br />
                Pair with Heart Chakra focus when restoring balance and
                forgiveness.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Olive</h2>

          <p>
            Olive oil can be used for ritual anointing, candle dressing, and
            blessing ceremonies.
          </p>

          <p>
            Incorporate Olive leaves into peace sachets and home harmony
            blends.
          </p>

          <p>
            Use in consecration rituals when dedicating tools or sacred space.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Olive is a practical ally when tension needs softening and lasting
            peace must be cultivated.
          </p>

          <p>
            Work with it during reconciliation rites, house blessings, and
            prosperity rituals rooted in stability rather than haste.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-OLIVE-FOLKLORE-IMAGE-URL"
              alt="Olive Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            The Olive branch became a universal symbol of peace in ancient
            Mediterranean cultures. The tree was sacred to Athena in Greek
            tradition and associated with wisdom and civilization.
          </p>

          <p>
            In modern witchcraft, Olive continues to represent blessing,
            endurance, and sacred reconciliation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Olive leaves and oil contain plant compounds traditionally valued
            for nourishment and skin support.
          </p>

          <p>
            Common Constituents: Oleuropein, Polyphenols, Vitamin E, Fatty
            Acids
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* WARNING */}
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
            Olive oil is generally considered safe for culinary use, but
            concentrated preparations may interact with certain medications.
            If pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and
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