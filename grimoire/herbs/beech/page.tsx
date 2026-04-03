// app/grimoire/herbs/beech/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BeechPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Beech" subtitle="Fagus sylvatica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BEECH-HERO-IMAGE-URL"
              alt="Beech"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Beech holds the memory of forests: knowledge rooted in patience,
              wisdom carved into living wood.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Beech is a long-living hardwood tree native to Europe and parts of
            North America. Its smooth bark and wide canopy make it a defining
            presence in many forests.
          </p>

          <p>
            Historically, Beech wood was used for tools, carving, and early
            writing tablets. The word “book” itself traces linguistic roots to
            the Beech tree, reflecting its association with knowledge and
            record-keeping.
          </p>

          <p>
            In witchcraft, Beech is treated as a wisdom tree. It supports study,
            ancestral memory, grounded authority, and long-term understanding.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-SARASWATI-ROUTE">Saraswati</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-COYOLXAUHQUI-ROUTE">Coyolxauhqui</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
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
          <h2 className="grimoire-subheading">Beech in Witchcraft</h2>

             <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BEECH-WITCHCRAFT-IMAGE-URL"
            alt="Beech in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Wisdom, study, ancestral connection, long-term planning,
                grounding knowledge, disciplined growth
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Impulsiveness, scattered thinking, forgetfulness, spiritual
                instability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional wood use, structural crafting, supportive forest
                presence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Work with Beech when studying or preserving knowledge. Keep a
                piece of Beech wood on your desk during structured learning.
                <br />
                <br />
                In ancestral rites, Beech reinforces the continuity of lineage
                and the preservation of memory.
                <br />
                <br />
                When building something meant to last, call on Beech’s slow and
                disciplined energy rather than rushing the process.
                <br />
                <br />
                This is a tree of patience. Its power accumulates through time.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Beech</h2>

          <p>
            Beech wood can be incorporated into talismans, carved tools, or
            ritual writing tablets for long-term projects.
          </p>

          <p>
            Sit beneath a Beech tree during meditation focused on wisdom,
            memory, and grounded authority.
          </p>

          <p>
            Use Beech in rituals centered on study, structure, and building
            lasting foundations.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Beech is used when something must endure. It strengthens the
            practitioner&apos;s relationship to time, patience, and accumulated
            knowledge.
          </p>

          <p>
            It pairs well with Saturn-focused work and disciplined spiritual
            training.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Beech Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folklore, Beech trees were associated with learning and
            literacy. Early runic carvings and records were sometimes made on
            Beech wood.
          </p>

          <p>
            Modern witchcraft continues this association, honoring Beech as a
            tree of preserved knowledge and disciplined growth.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Beech wood and leaves contain natural plant compounds typical of
            hardwood species. This section may be expanded if focusing on
            specific herbal preparations.
          </p>

          <p>Common Constituents: Plant Compounds, Natural Tannins</p>
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
            Beech is primarily worked with as wood rather than consumed as an
            herb. If preparing any plant material for ingestion, verify safety
            through trusted professional sources. This grimoire is written for
            spiritual and educational purposes and is not medical advice.
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