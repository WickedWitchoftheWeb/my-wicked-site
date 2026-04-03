// app/grimoire/herbs/vervain/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function VervainPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Vervain" subtitle="Verbena officinalis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-VERVAIN-HERO-IMAGE-URL"
              alt="Vervain"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Vervain consecrates the ground: cleanse with purpose, speak with power, walk in sacred intention.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Vervain, also known as common verbena, is a slender flowering herb
            long associated with ritual and sacred rites. Revered in ancient
            Europe and the Mediterranean, it has carried a reputation as a
            plant of priests and magicians.
          </p>

          <p>
            In traditional herbal practice, Vervain has been linked to nervous
            system support, tension easing, and gentle relaxation. Its energy is
            both calming and clarifying.
          </p>

          <p>
            In witchcraft, Vervain is used for purification, protection,
            consecration, prophecy, and spiritual authority. It is chosen when
            the goal is to align action with sacred will.
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
                <Link href="/grimoire/elements/air">Air</Link>,{" "}
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/11-aquarius">
                  Aquarius
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
                </Link>
                ,{" "}
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
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
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
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Vervain in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VERVAIN-WITCHCRAFT-IMAGE-URL"
              alt="Vervain in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Purification, protection, consecration, prophecy, spiritual
                authority, focused intention
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Spiritual confusion, psychic interference, scattered energy,
                weakened intention
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Nervous system support, tension easing, calming infusions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Use Vervain in cleansing baths before major rituals.
                <br />
                <br />
                Add to consecration blends when dedicating tools or space.
                <br />
                <br />
                Carry during divination to sharpen perception.
                <br />
                <br />
                Pair with Third Eye Chakra focus when seeking clarity of
                insight and purpose.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Vervain</h2>

          <p>
            Brew as a ritual tea before divination or focused magical work.
          </p>

          <p>
            Add to floor washes when cleansing and consecrating sacred space.
          </p>

          <p>
            Incorporate into charm bags for protection and spiritual authority.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Vervain is a practical ally when ritual must be precise and
            intention unwavering. It strengthens spiritual discipline.
          </p>

          <p>
            Work with it during initiation rites, cleansing ceremonies, and
            moments when you must stand in spiritual authority.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-VERVAIN-FOLKLORE-IMAGE-URL"
              alt="Vervain Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Vervain was sacred to the Druids and later associated with Roman
            and medieval ritual practices. It was used to purify altars and
            bless sacred tools.
          </p>

          <p>
            In magical tradition, it is known as an herb of holy work: clear,
            disciplined, and devoted to purpose.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Vervain contains plant compounds traditionally associated with
            calming and supportive effects.
          </p>

          <p>
            Common Constituents: Iridoid Glycosides, Flavonoids, Tannins,
            Volatile Oils
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
            Vervain may not be suitable in large quantities and should be used
            with awareness. If pregnant, nursing, managing a condition, or
            taking medication, consult a qualified professional before
            ingesting herbal preparations. This grimoire is written for
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