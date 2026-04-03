// app/grimoire/herbs/peppermint/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PeppermintPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Peppermint" subtitle="Mentha × piperita">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PEPPERMINT-HERO-IMAGE-URL"
              alt="Peppermint"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Peppermint clears the path: sharpen the mind, refresh the field,
              and move forward clean.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Peppermint is a hybrid mint known for its bright, cooling aroma and
            invigorating taste. It has long been used in culinary, herbal, and
            aromatic traditions for clarity and refreshment.
          </p>

          <p>
            In traditional herbalism, Peppermint is commonly associated with
            digestive comfort, mental alertness, and cooling relief. Its scent
            alone can feel like a reset.
          </p>

          <p>
            In witchcraft, Peppermint is used for cleansing, clarity, healing,
            protection, prosperity, and mental focus. It is chosen when the
            goal is refreshing stagnant energy and sharpening intention.
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
                <Link href="/grimoire/elements/water">Water</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-APOLLO-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-HERA-ROUTE">Hera</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">
                  Virgo
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
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
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
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/aquamarine">
                  Aquamarine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Peppermint in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PEPPERMINT-WITCHCRAFT-IMAGE-URL"
              alt="Peppermint in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Cleansing, mental clarity, protection, healing, prosperity,
                focus, communication magic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Mental fog, stagnation, confusion, low energy, emotional
                heaviness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional digestive support, cooling relief, mental
                alertness, tension easing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Peppermint refreshes energy quickly.
                <br />
                <br />
                Use in floor washes to clear stagnant or heavy spaces.
                <br />
                <br />
                Add to study blends and spell work requiring sharp focus.
                <br />
                <br />
                Pair with Throat Chakra focus when clearing blocked
                communication and restoring confidence in your voice.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Peppermint</h2>

          <p>
            Peppermint can be used fresh or dried in teas, spell jars, and
            cleansing blends.
          </p>

          <p>
            Diffuse Peppermint oil to refresh the energy of a room and sharpen
            focus.
          </p>

          <p>
            Add to prosperity sachets when combining clarity with financial
            intention.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Peppermint is a practical ally when your mind feels dull or your
            environment feels stale. It helps clear quickly and cleanly.
          </p>

          <p>
            Work with it during study, planning, cleansing rituals, and any
            spell that requires mental sharpness and fresh momentum.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PEPPERMINT-FOLKLORE-IMAGE-URL"
              alt="Peppermint Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Mint plants have long been associated with hospitality, prosperity,
            and cleansing across cultures. Their spreading growth symbolizes
            expansion and abundance.
          </p>

          <p>
            In modern witchcraft, Peppermint remains a staple for clarity and
            energetic reset: clear the air, steady the mind, begin again.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Peppermint contains aromatic compounds responsible for its cooling
            and invigorating qualities.
          </p>

          <p>
            Common Constituents: Menthol, Menthone, Flavonoids, Volatile Oils
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
            Peppermint oil is concentrated and should be diluted before
            topical use. Large amounts may not be suitable for young children
            or certain medical conditions. If pregnant, nursing, managing a
            condition, or taking medication, consult a qualified professional
            before ingesting herbal preparations. This grimoire is written for
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