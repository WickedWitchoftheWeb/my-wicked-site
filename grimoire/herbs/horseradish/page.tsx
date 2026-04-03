// app/grimoire/herbs/horseradish/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HorseradishPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Horseradish" subtitle="Armoracia rusticana">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-HORSERADISH-HERO-IMAGE-URL"
              alt="Horseradish"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Horseradish is a blade in root form: it cuts through stagnation,
              burns away decay, and clears the path with fierce honesty.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Horseradish is a pungent root plant native to parts of Eastern
            Europe and Western Asia, now widely grown across many temperate
            regions. It is best known as a culinary ingredient with sharp heat
            that rises quickly and clears the head.
          </p>

          <p>
            In practical tradition, Horseradish is associated with warming,
            stimulating support and old household remedies that focus on
            clearing. Energetically, it carries the same message: break
            stagnation, move what is stuck, and drive out what does not belong.
          </p>

          <p>
            In witchcraft, Horseradish is used for protection, banishing,
            uncrossing, and aggressive cleansing. It is chosen when you need
            fast action, strong boundaries, and zero tolerance for lingering
            influence.
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
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-THOR-ROUTE">Thor</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/01-aries">Aries</Link>,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/black-obsidian">
                  Black Obsidian
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
          <h2 className="grimoire-subheading">Horseradish in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HORSERADISH-WITCHCRAFT-IMAGE-URL"
              alt="Horseradish in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Banishing, uncrossing, strong protection, cutting cords,
                cleansing heavy energy, breaking stagnation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual attachment, lingering influence, energetic stagnation,
                psychic fog, unwanted attention, crossed conditions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional warming support, old household clearing remedies,
                seasonal comfort blends used in small amounts
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Horseradish is not gentle. It clears by force.
                <br />
                <br />
                Use it when you need fast separation: cutting what is stuck to
                you, pushing energy out, and reclaiming your space.
                <br />
                <br />
                In protection work, it strengthens the boundary by making the
                boundary uncomfortable to cross.
                <br />
                <br />
                Pair with Solar Plexus Chakra focus for courage, refusal, and
                personal authority.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Horseradish
          </h2>

          <p>
            Horseradish can be worked with as fresh root, dried root, or in
            small amounts in protective blends. It is most often used for
            cleansing and banishing rather than gentle attraction work.
          </p>

          <p>
            For uncrossing, add a small amount to a floor wash or cleansing bath
            and visualize stagnant energy breaking apart and leaving your field.
          </p>

          <p>
            For cord cutting, place Horseradish in a jar spell or protection
            packet with the intention of making attachment impossible to
            maintain.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Horseradish is a practical choice when you are done negotiating with
            a situation. It supports decisive action, clean endings, and strong
            boundaries.
          </p>

          <p>
            Work with it after draining interactions, after conflict, or when a
            space feels stagnant and you need the energy to move immediately.
            This is the herb for hard resets.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HORSERADISH-FOLKLORE-IMAGE-URL"
              alt="Horseradish Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Horseradish has a long culinary and household history, especially in
            Eastern European traditions where it is valued for its intense heat
            and clearing bite. That physical intensity shaped its energetic
            reputation: it drives out what is stale.
          </p>

          <p>
            In modern witchcraft, Horseradish is used as a spiritual irritant
            and cleanser. It is worked with when you want energy to leave, not
            linger.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Horseradish is known for containing pungent compounds that create
            its sharp heat and traditional clearing reputation. This section is
            the place to list additional nutritional components when applicable.
          </p>

          <p>
            Common Constituents: Glucosinolates, Isothiocyanates, Vitamin C,
            Volatile Oils
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
            Horseradish can be irritating to the stomach and may not be
            appropriate for ulcers, reflux, or sensitive digestion. It may also
            irritate the eyes and skin when handled. If pregnant, nursing,
            managing a condition, or taking medication, check safety details
            with a trusted professional source before ingesting any herb. This
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