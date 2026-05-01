// app/grimoire/herbs/aloe/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AloePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Aloe" subtitle="Aloe vera">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ALOE-HERO-IMAGE-URL"
              alt="Aloe"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Aloe soothes what burns, seals what breaks, and restores balance
              where heat has gone too far.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Aloe is a succulent plant long valued for its cooling gel and
            restorative properties. Native to arid regions, it stores water in
            its thick leaves and has been cultivated across cultures for both
            practical and ritual use.
          </p>

          <p>
            Traditionally associated with soothing burns and irritation, Aloe
            carries a reputation for repair and protection. Its cooling nature
            makes it a counterbalance to excess heat, inflammation, and
            overstimulation.
          </p>

          <p>
            In witchcraft, Aloe is treated as a stabilizer and healer. It is
            worked with when emotional or energetic heat has caused damage and
            when the field needs restoration rather than force.
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
                <Link href="PASTE-ISIS-DEITY-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-BRIGID-DEITY-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-KUAN-YIN-DEITY-ROUTE">Kuan Yin</Link>,{" "}
                <Link href="PASTE-DHANVANTARI-DEITY-ROUTE">Dhanvantari</Link>,{" "}
                <Link href="PASTE-YEMAYA-DEITY-ROUTE">Yemaya</Link>,{" "}
                <Link href="PASTE-ASCLepius-DEITY-ROUTE">Asclepius</Link>,{" "}
                <Link href="PASTE-BABALU-AYE-DEITY-ROUTE">Babalú-Ayé</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,
                {" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">Selenite</Link>,
                {" "}
                <Link href="/grimoire/crystals-stones/emerald">Emerald</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Aloe in Witchcraft</h2>

                  <div className="grimoire-image">
          <img
            src="PASTE-YOUR-ALOE-WITCHCRAFT-IMAGE-URL"
            alt="Aloe in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Healing, protection, emotional recovery, soothing conflict,
                cleansing, stability, restoration
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional overwhelm, energetic inflammation, lingering tension,
                household negativity
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Skin soothing, burn relief, hydration support, digestive support
                when prepared properly
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Aloe is best used when something needs calming rather than
                intensifying.
                <br />
                <br />
                In protection work, it creates a soft shield rather than a sharp
                barrier. It protects by stabilizing and cooling excess charge.
                <br />
                <br />
                In emotional healing, pair it with Heart Chakra focus to help
                repair after conflict or burnout.
                <br />
                <br />
                Aloe is especially useful in home work, where its presence
                supports steadiness and emotional equilibrium.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Aloe</h2>

          <p>
            Aloe can be worked with as a living plant, fresh gel, or prepared
            infusion depending on the goal. In protection work, it is often
            placed in the home to absorb and stabilize unwanted charge.
          </p>

          <p>
            For emotional healing rituals, Aloe gel can be incorporated into
            anointing blends where the intention is restoration and repair.
          </p>

          <p>
            In cleansing work, Aloe is used not to forcefully remove, but to
            cool and rebalance after heavy clearing practices.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Aloe is used when the field has been overheated by conflict, stress,
            or prolonged intensity. It restores equilibrium so future action can
            be taken from clarity rather than reaction.
          </p>

          <p>
            It pairs well with Water element rituals when the intention is
            repair rather than confrontation.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Aloe Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Aloe has been cultivated for thousands of years and appears in
            traditional practices across cultures as a plant of protection and
            healing.
          </p>

          <p>
            In household folk use, it is often kept near entryways or grown in
            kitchens and windows as a stabilizing presence.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Aloe contains polysaccharides, vitamins, enzymes, and plant compounds
            that contribute to its traditional soothing and restorative
            reputation.
          </p>

          <p>
            Common Constituents: Polysaccharides, Vitamins, Enzymes, Plant
            Compounds
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
            Aloe preparations vary widely. Some forms are intended for external
            use only. Internal use should be researched carefully and used with
            caution. If pregnant, nursing, managing a condition, or taking
            medication, consult a trusted professional source before ingesting
            any herb. This grimoire is written for spiritual and educational
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