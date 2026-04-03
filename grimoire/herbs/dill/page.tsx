// app/grimoire/herbs/dill/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function DillPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Dill" subtitle="Anethum graveolens">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-DILL-HERO-IMAGE-URL"
              alt="Dill"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Dill quiets the field: it softens tension, clears the mind, and
              protects peace where it is fragile.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Dill is an aromatic herb cultivated across Europe, North Africa, and
            Western Asia for thousands of years. It has long been valued in
            household tradition for both culinary use and its association with
            comfort and calm.
          </p>

          <p>
            In practical tradition, Dill appears in food, teas, and folk
            preparations linked to soothing and digestive support. In spiritual
            work, that same gentleness translates into calming the mind,
            softening conflict, and protecting the peace of a home.
          </p>

          <p>
            In witchcraft, Dill is used for protection, calming work, clarity,
            and restful energy. It is often chosen when the goal is to settle
            tension and restore steadiness without escalation.
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
                <Link href="PASTE-HESTIA-DEITY-ROUTE">Hestia</Link>,{" "}
                <Link href="PASTE-VESTA-DEITY-ROUTE">Vesta</Link>,{" "}
                <Link href="PASTE-FRIGG-DEITY-ROUTE">Frigg</Link>,{" "}
                <Link href="PASTE-BRIGID-DEITY-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-SELENE-DEITY-ROUTE">Selene</Link>,{" "}
                <Link href="PASTE-ARTHUR-DEITY-ROUTE">Artemis</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">Pisces</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/chakras/05-throat-chakra">Throat Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/aquamarine">
                  Aquamarine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sodalite">Sodalite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">Amethyst</Link>,{" "}
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
          <h2 className="grimoire-subheading">Dill in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DILL-WITCHCRAFT-IMAGE-URL"
              alt="Dill in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, calming, peace work, clarity, sleep support, home
                harmony, gentle cleansing
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Conflict escalation, anxiety spirals, harsh words, mental
                clutter, restless energy
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive comfort, traditional soothing support, aromatic calm
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Dill is a quiet protector. It helps create peace that holds,
                rather than peace that collapses under pressure.
                <br />
                <br />
                In conflict work, it softens harsh edges so communication can
                return to clarity.
                <br />
                <br />
                In sleep rites, Dill supports a calmer field. Pair it with Moon
                energy and keep the intention simple: settle, release, rest.
                <br />
                <br />
                Use it in home work when the goal is harmony and gentle
                protection rather than banishing.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Dill</h2>

          <p>
            Dill can be worked with as dried seed or fresh herb. It is commonly
            used in peaceful home blends, calming sachets, and gentle cleansing
            mixes where the goal is steadiness rather than intensity.
          </p>

          <p>
            For home harmony, add Dill to a sachet with soothing stones and keep
            it near the bed or in the kitchen to protect peace.
          </p>

          <p>
            For clarity work, incorporate Dill into a ritual tea or bath and
            focus on releasing mental clutter. Keep the spell simple: soften,
            settle, see clearly.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Dill is a practical choice when you need calm to be protected. Use
            it after conflict, during stress, or when the home feels brittle and
            easily triggered.
          </p>

          <p>
            It is also useful when the mind will not quiet. Dill helps soften
            the field so your next move comes from clarity rather than pressure.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DILL-FOLKLORE-IMAGE-URL"
              alt="Dill Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In European folk tradition, Dill was often associated with
            protection and calming. It appeared in household customs where the
            goal was to ward off harsh influence and keep peace in the home.
          </p>

          <p>
            In modern witchcraft, Dill is commonly used in calming rites, home
            protection blends, and gentle clarity work. The current is steady:
            protect peace, soften conflict, and let the mind settle.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Dill is often described as containing aromatic essential oils and
            plant compounds that contribute to its traditional soothing and
            digestive reputation. This section is the place to list additional
            nutritional components such as vitamins and minerals when applicable
            to the herb being profiled.
          </p>

          <p>Common Constituents: Aromatic Oils, Plant Compounds</p>
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
            Dill is generally used in culinary amounts. Larger amounts may cause
            digestive discomfort in some individuals. If pregnant, nursing,
            managing a condition, or taking medication, check safety details with
            a trusted professional source before ingesting any herb. This grimoire
            is written for spiritual and educational purposes and is not medical
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