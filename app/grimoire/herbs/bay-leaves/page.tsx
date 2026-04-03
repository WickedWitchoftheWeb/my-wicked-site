// app/grimoire/herbs/bay-leaves/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BayLeavesPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Bay Leaves" subtitle="Laurus nobilis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BAY-LEAVES-HERO-IMAGE-URL"
              alt="Bay Leaves"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Bay carries the fire of vision: it sharpens prophecy, strengthens
              victory, and seals intention with authority.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Bay Leaves come from the laurel tree, native to the Mediterranean
            region. Historically associated with triumph and prophecy, the
            laurel wreath crowned victors and poets alike.
          </p>

          <p>
            Bay has long been connected to clarity, divine insight, and
            recognition. Its leaves were used in ritual, cooking, and protective
            practice across cultures.
          </p>

          <p>
            In witchcraft, Bay Leaves are worked with for manifestation,
            psychic clarity, protection, and victory. They are especially known
            for written intention work and fire rituals.
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
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-ARTEMIS-ROUTE">Artemis</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-MERCURY-ROUTE">Mercury</Link>,{" "}
                <Link href="PASTE-LUGH-ROUTE">Lugh</Link>,{" "}
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-SHANGO-ROUTE">Shango</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">
                  Aries
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/01-sun">
                  Sun
                </Link>
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/sunstone">
                  Sunstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">
                  Citrine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Bay Leaves in Witchcraft</h2>

              <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BAY-LEAVES-WITCHCRAFT-IMAGE-URL"
            alt="Bay Leaves in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Manifestation, protection, psychic clarity, success, courage,
                victory, written intention work
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Doubt, spiritual interference, confusion, loss of direction,
                lack of confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, aromatic clearing, traditional soothing
                support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Bay Leaves are commonly written on with a focused intention and
                burned safely to release that intention into motion.
                <br />
                <br />
                In divination work, keep Bay near your tools to sharpen clarity
                and reinforce intuitive authority.
                <br />
                <br />
                When seeking recognition or victory, add Bay to Sun-focused
                rituals that emphasize confidence and visibility.
                <br />
                <br />
                Bay is strongest when the intention is clear and direct.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Bay Leaves</h2>

          <p>
            Write your intention directly onto a dried Bay Leaf and burn it
            safely as a release ritual.
          </p>

          <p>
            Place Bay in protection jars or manifestation sachets to reinforce
            clarity and authority.
          </p>

          <p>
            Keep Bay near your workspace when preparing for important meetings,
            creative projects, or competitive efforts.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Bay is used when confidence must be strengthened and vision must be
            sharpened. It reinforces decisive action and clear direction.
          </p>

          <p>
            It pairs especially well with Sun rituals and manifestation work
            that requires courage and visibility.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Bay Leaves Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In ancient Greece and Rome, laurel wreaths crowned victors and were
            sacred to Apollo. The plant became a symbol of achievement and
            divine inspiration.
          </p>

          <p>
            Modern witchcraft continues this legacy, using Bay Leaves as tools
            of prophecy, success, and spiritual clarity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Bay Leaves contain aromatic essential oils and plant compounds that
            contribute to their scent and traditional culinary and herbal use.
          </p>

          <p>
            Common Constituents: Essential Oils, Aromatic Compounds
          </p>
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
            Bay Leaves are generally used in culinary amounts. Essential oils
            and concentrated forms should be used with care. If pregnant,
            nursing, managing a condition, or taking medication, consult a
            trusted professional source before ingesting any herb. This
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