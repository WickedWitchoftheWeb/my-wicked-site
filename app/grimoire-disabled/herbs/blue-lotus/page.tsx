// app/grimoire/herbs/blue-lotus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BlueLotusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Blue Lotus" subtitle="Nymphaea caerulea">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BLUE-LOTUS-HERO-IMAGE-URL"
              alt="Blue Lotus"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Blue Lotus softens the veil: it quiets the mind, opens the inner
              temple, and invites sacred vision.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Blue Lotus is an aquatic flower historically associated with
            trance, devotion, and altered states. It is most famously connected
            to ancient Egyptian culture, where it appeared in art, ritual, and
            symbolism tied to rebirth and divine ecstasy.
          </p>

          <p>
            As a water plant that opens and closes with light cycles, Blue Lotus
            carries a natural symbolism of awakening and return. Its fragrance
            and presence have long been treated as soothing, sensual, and
            spiritually expansive.
          </p>

          <p>
            In witchcraft, Blue Lotus is worked with for dream work, trance,
            devotion, sensuality, and inner vision. It supports rituals that
            involve liminal states, meditation, and sacred connection.
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
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-HATHOR-ROUTE">Hathor</Link>,{" "}
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>,{" "}
                <Link href="PASTE-NEFERTEM-ROUTE">Nefertem</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-SARASWATI-ROUTE">Saraswati</Link>,{" "}
                <Link href="PASTE-KUAN-YIN-ROUTE">Kuan Yin</Link>,{" "}
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
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
          <h2 className="grimoire-subheading">Blue Lotus in Witchcraft</h2>

               <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BLUE-LOTUS-WITCHCRAFT-IMAGE-URL"
            alt="Blue Lotus in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Dream work, trance, meditation, devotion, sensuality, psychic
                opening, inner vision
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Mental noise, emotional turbulence, blocked intuition,
                spiritual dryness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional calming support, relaxation rituals, ceremonial use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Blue Lotus is best approached as a ritual plant: slow, intentional,
                and tied to devotion.
                <br />
                <br />
                In dream work, keep it near the bed or incorporate it into a
                calming pre-sleep routine focused on remembrance and clarity.
                <br />
                <br />
                In meditation, it supports soft opening rather than forced
                breakthrough.
                <br />
                <br />
                Pair it with Moon-focused rites when the goal is vision, trance,
                and sacred inner connection.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Blue Lotus</h2>

          <p>
            Blue Lotus can be worked with as dried petals in altar offerings,
            dream sachets, or ritual blends used to support meditation and
            trance.
          </p>

          <p>
            In devotional practice, it may be offered to deities associated with
            love, beauty, rebirth, and sacred vision.
          </p>

          <p>
            Keep the work slow and respectful. This plant responds best to
            steadiness and reverence.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Blue Lotus is used when you want the veil to soften without losing
            your grounding. It supports vision that remains calm and clean.
          </p>

          <p>
            It pairs well with Moon rituals and Water element practices focused
            on intuitive clarity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Blue Lotus Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In ancient Egypt, Blue Lotus appeared in art and ceremonial contexts
            associated with rebirth, sensuality, and sacred trance. It was a
            symbol of awakening and divine beauty.
          </p>

          <p>
            Modern witchcraft carries these associations forward, treating Blue
            Lotus as a devotional plant for vision, dream work, and liminal
            states.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Blue Lotus is often described as containing plant alkaloids and
            aromatic compounds associated with its traditional ceremonial use.
          </p>

          <p>
            Common Constituents: Plant Alkaloids, Aromatic Compounds
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
            Blue Lotus is sometimes used in ceremonial contexts and may have
            mild psychoactive effects depending on preparation and sensitivity.
            Use caution, research legality and safety, and consult trusted
            sources before ingesting. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before using any herb. This grimoire is written for
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