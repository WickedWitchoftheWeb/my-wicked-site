// app/grimoire/herbs/mugwort/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MugwortPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Mugwort" subtitle="Artemisia vulgaris">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-MUGWORT-HERO-IMAGE-URL"
              alt="Mugwort"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Mugwort opens the veil: walk the liminal path, sharpen the
              sight, and dream beyond the ordinary.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Mugwort is a hardy perennial herb native to Europe, Asia, and
            North America. Often found growing wild along roadsides and fields,
            it has long been associated with protection, prophecy, and travel
            between worlds.
          </p>

          <p>
            In traditional herbalism, Mugwort has been used in digestive and
            women’s health preparations. Its bitter nature and aromatic scent
            give it a strong, unmistakable presence.
          </p>

          <p>
            In witchcraft, Mugwort is one of the most powerful herbs for
            divination, dream work, astral travel, protection, and psychic
            development. It is chosen when the goal is crossing thresholds
            safely and clearly.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ARTEMIS-ROUTE">Artemis</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-DIANA-ROUTE">Diana</Link>,{" "}
                <Link href="PASTE-MORRIGAN-ROUTE">The Morrigan</Link>,{" "}
                <Link href="PASTE-SELENE-ROUTE">Selene</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Mugwort in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MUGWORT-WITCHCRAFT-IMAGE-URL"
              alt="Mugwort in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Divination, lucid dreaming, astral travel, protection during
                psychic work, spirit communication
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Psychic attack, confusion during dream work, spiritual
                interference, fear of the unknown
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, menstrual support, bitter
                tonics
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Mugwort is best used with intention and protection.
                <br />
                <br />
                Place under your pillow to encourage vivid, insightful dreams.
                <br />
                <br />
                Burn before divination sessions to clear psychic static.
                <br />
                <br />
                Pair with Third Eye Chakra focus when developing intuition and
                visionary sight.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Mugwort</h2>

          <p>
            Mugwort can be used dried in dream sachets, incense blends, and
            protection jars.
          </p>

          <p>
            Add to ritual baths before divination or astral work.
          </p>

          <p>
            Keep near tarot or scrying tools to amplify intuitive connection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Mugwort is a practical ally when exploring psychic ability and
            dream states. It strengthens clarity while encouraging courage in
            liminal spaces.
          </p>

          <p>
            Work with it when stepping deeper into divination or spiritual
            study.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MUGWORT-FOLKLORE-IMAGE-URL"
              alt="Mugwort Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Mugwort has been carried by travelers for protection and used in
            midsummer rites across Europe. It was believed to guard against
            spirits and enhance prophetic dreams.
          </p>

          <p>
            In modern witchcraft, it remains one of the primary herbs for
            intuitive development and safe passage through unseen realms.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Mugwort contains bitter compounds and volatile oils traditionally
            referenced in digestive and aromatic preparations.
          </p>

          <p>
            Common Constituents: Thujone, Cineole, Flavonoids, Bitter
            Compounds
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
            Mugwort should not be used during pregnancy and may not be suitable
            for individuals with certain medical conditions. If pregnant,
            nursing, managing a condition, or taking medication, consult a
            qualified professional before ingesting herbal preparations. This
            grimoire is written for spiritual and educational purposes and is
            not medical advice.
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