// app/grimoire/herbs/pepper/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function PepperPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Pepper" subtitle="Piper nigrum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-PEPPER-HERO-IMAGE-URL"
              alt="Pepper"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Pepper sharpens the edge: awaken protection, cut through
              illusion, and act with force.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Pepper refers most commonly to black pepper, the dried fruit of
            Piper nigrum. Native to South Asia and traded globally for
            centuries, Pepper became one of the most valuable spices in the
            world.
          </p>

          <p>
            In traditional herbal practice, Pepper is associated with warmth,
            circulation, and stimulation. Its sharp bite makes it a symbol of
            alertness and active force.
          </p>

          <p>
            In witchcraft, Pepper is used for protection, banishing, courage,
            warding, and breaking stagnation. It is chosen when the goal is to
            energize a spell or strengthen boundaries with heat.
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
                <Link href="PASTE-ARES-ROUTE">Ares</Link>,{" "}
                <Link href="PASTE-SEKHMET-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-PELÉ-ROUTE">Pelé</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>
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
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">
                  Mars
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
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/red-jasper">
                  Red Jasper
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Pepper in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PEPPER-WITCHCRAFT-IMAGE-URL"
              alt="Pepper in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, warding, banishing, courage, energy activation,
                breaking stagnation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Negativity, psychic attack, lethargy, fear, weak boundaries,
                spiritual intrusion
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditional warming support, digestive stimulation, circulatory
                activation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Pepper intensifies whatever it touches.
                <br />
                <br />
                Add to protection jars when strengthening defensive energy.
                <br />
                <br />
                Use sparingly in banishing work to break lingering attachments.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus when reclaiming personal
                power and courage.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Pepper</h2>

          <p>
            Pepper can be added to protection blends, warding sachets, and
            banishing powders.
          </p>

          <p>
            Sprinkle lightly across thresholds to reinforce energetic
            boundaries.
          </p>

          <p>
            Use in ritual cooking when invoking courage and decisive action.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Pepper is a practical ally when something must be cut, pushed, or
            awakened. It is not subtle; it is direct.
          </p>

          <p>
            Work with it during protection rituals, conflict resolution, and
            any working that requires bold, immediate energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-PEPPER-FOLKLORE-IMAGE-URL"
              alt="Pepper Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Pepper was once so valuable it functioned as currency in trade
            routes spanning continents. Its heat symbolized both wealth and
            power.
          </p>

          <p>
            In folk magic, Pepper has long been used in protective and
            banishing rites, valued for its sharp and disruptive energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Pepper contains compounds responsible for its pungency and warming
            properties.
          </p>

          <p>
            Common Constituents: Piperine, Volatile Oils, Alkaloids
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
            Pepper may irritate the skin, eyes, and digestive tract if used in
            excess. Avoid direct contact with eyes and wash hands after
            handling. If pregnant, nursing, managing a condition, or taking
            medication, consult a qualified professional before ingesting
            herbal preparations. This grimoire is written for spiritual and
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