// app/grimoire/herbs/licorice/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function LicoricePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Licorice" subtitle="Glycyrrhiza glabra">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-LICORICE-HERO-IMAGE-URL"
              alt="Licorice"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Licorice bends influence: sweeten the outcome, strengthen your
              voice, and draw power where it belongs.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Licorice is a perennial root native to parts of Europe and Asia,
            long valued for its distinctive sweetness and use in traditional
            herbal preparations. The root has been used for centuries in teas,
            tonics, and syrups.
          </p>

          <p>
            In practical herbal tradition, Licorice is associated with soothing
            support and harmonizing blends. Energetically, it carries a current
            of attraction, influence, and persuasive strength.
          </p>

          <p>
            In witchcraft, Licorice is used for domination work, influence,
            persuasion, confidence, and sweetening outcomes. It is chosen when
            the goal is to strengthen your position and guide energy in your
            favor.
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
                <Link href="/grimoire/elements/fire">Fire</Link>,{" "}
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
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
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/05-throat-chakra">
                  Throat Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/black-obsidian">
                  Black Obsidian
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Licorice in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LICORICE-WITCHCRAFT-IMAGE-URL"
              alt="Licorice in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Influence, persuasion, domination work, sweetening spells,
                strengthening authority, confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Weak boundaries, loss of authority, being overlooked, energetic
                manipulation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional throat support, soothing blends, digestive comfort
                preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Licorice amplifies intention.
                <br />
                <br />
                Add to spell jars when you need your influence to carry weight.
                <br />
                <br />
                In sweetening work, combine with honey or sugar to soften
                outcomes while maintaining control.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when asserting authority or
                reclaiming personal power.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Licorice
          </h2>

          <p>
            Licorice root can be used dried and chopped in spell jars, charm
            bags, and sweetening blends.
          </p>

          <p>
            Add to ritual teas when focusing on confidence and persuasive
            clarity.
          </p>

          <p>
            Incorporate into influence work when you need your voice and
            presence to be recognized.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Licorice is a practical choice when stepping into leadership,
            negotiation, or advocacy roles. It strengthens resolve and presence.
          </p>

          <p>
            Work with it when you need to shift dynamics in your favor without
            aggression, guiding energy through confident persuasion.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-LICORICE-FOLKLORE-IMAGE-URL"
              alt="Licorice Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Licorice has a long history in both Eastern and Western traditions
            as a harmonizing root used in complex herbal blends. Its sweetness
            and strength shaped its symbolic associations with influence and
            cohesion.
          </p>

          <p>
            In modern witchcraft, Licorice remains an herb of controlled power:
            sweet on the surface, strong at the root.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Licorice root contains naturally sweet compounds and plant
            constituents traditionally associated with soothing support.
          </p>

          <p>
            Common Constituents: Glycyrrhizin, Flavonoids, Saponins, Coumarins
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
            Licorice may raise blood pressure and should not be used in large
            amounts for extended periods. It may not be appropriate for people
            with hypertension, kidney issues, or certain heart conditions. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting herbal
            preparations. This grimoire is written for spiritual and educational
            purposes and is not medical advice.
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