// app/grimoire/herbs/borage/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BoragePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Borage" subtitle="Borago officinalis">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BORAGE-HERO-IMAGE-URL"
              alt="Borage"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Borage restores courage to the heart: steady, bright, and quietly
              protective.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Borage is a fast-growing herb known for its star-shaped blue flowers
            and cooling, cucumber-like leaves. Native to the Mediterranean
            region, it has long been cultivated for both culinary and herbal use.
          </p>

          <p>
            Historically, Borage was associated with courage and emotional
            fortitude. It appeared in traditional preparations intended to lift
            the spirits and steady the heart.
          </p>

          <p>
            In witchcraft, Borage is worked with for bravery, emotional
            resilience, clarity under pressure, and strengthening the heart’s
            resolve.
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
                <Link href="PASTE-MARS-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-ATHENA-ROUTE">Athena</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>,{" "}
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
                <Link href="/grimoire/astrology/01-zodiacs/05-leo">
                  Leo
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
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
                <Link href="/grimoire/crystals-stones/bloodstone">
                  Bloodstone
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
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
          <h2 className="grimoire-subheading">Borage in Witchcraft</h2>

             <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BORAGE-WITCHCRAFT-IMAGE-URL"
            alt="Borage in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Courage, emotional resilience, confidence, heart strength,
                facing challenges, protective bravery
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Fear, hesitation, emotional overwhelm, self-doubt, weakness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional mood support, calming tonics, herbal nourishment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Borage is often used before difficult conversations or
                confrontations where steady courage is required.
                <br />
                <br />
                In Heart Chakra work, it supports strength without emotional
                shutdown.
                <br />
                <br />
                Pair Borage with Mars-aligned rituals when the goal is
                controlled bravery rather than impulsive action.
                <br />
                <br />
                It strengthens the heart so action can follow clearly.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Borage</h2>

          <p>
            Borage can be used in sachets carried for courage or added to ritual
            baths focused on emotional strength.
          </p>

          <p>
            Incorporate it into protection blends when confidence and heart
            steadiness are required.
          </p>

          <p>
            Use Borage in rituals centered on stepping forward despite fear.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Borage is used when bravery must come from the heart rather than
            aggression. It steadies action and softens panic.
          </p>

          <p>
            It pairs well with Fire element work and rituals of controlled
            strength.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Borage Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In medieval Europe, Borage was said to bring courage to warriors and
            lift melancholy. It appeared in traditional drinks meant to fortify
            the spirit.
          </p>

          <p>
            Modern witchcraft carries this association forward, honoring Borage
            as a heart-strengthening herb.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Borage contains fatty acids and plant compounds associated with its
            traditional herbal reputation.
          </p>

          <p>
            Common Constituents: Fatty Acids, Plant Compounds
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
            Some parts of the Borage plant may contain compounds that require
            cautious use. Research preparation methods carefully and consult
            trusted professional sources before ingesting. This grimoire is
            written for spiritual and educational purposes and is not medical
            advice.
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