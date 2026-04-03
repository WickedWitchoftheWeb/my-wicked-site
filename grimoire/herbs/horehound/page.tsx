// app/grimoire/herbs/horehound/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HorehoundPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Horehound" subtitle="Marrubium vulgare">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-HOREHOUND-HERO-IMAGE-URL"
              alt="Horehound"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Horehound clears what clings: it breaks stagnation, steadies the
              breath, and sends unwanted influence back into silence.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Horehound is a hardy, bitter herb in the mint family that has been
            used for centuries in traditional herbalism, especially in
            preparations focused on the lungs and throat. It grows readily in
            dry soils and sunny places, and it has a reputation for being
            resilient, cleansing, and tough.
          </p>

          <p>
            In practical tradition, Horehound is best known in old cough
            remedies, syrups, and teas. Energetically, that same current becomes
            clearing, purifying, and cutting through what blocks the voice and
            breath.
          </p>

          <p>
            In witchcraft, Horehound is used for protection, banishing,
            uncrossing, and spiritual cleansing. It is chosen when a space feels
            heavy, when influence feels intrusive, or when you need your words
            to carry clean power.
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
                <Link href="/grimoire/elements/air">Air</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HERMES-ROUTE">Hermes</Link>,{" "}
                <Link href="PASTE-THOTH-ROUTE">Thoth</Link>,{" "}
                <Link href="PASTE-ODIN-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-BRIGID-ROUTE">Brigid</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">
                  Gemini
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/06-virgo">Virgo</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/03-mercury">
                  Mercury
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
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/sodalite">Sodalite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Horehound in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HOREHOUND-WITCHCRAFT-IMAGE-URL"
              alt="Horehound in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, banishing, uncrossing, cleansing, ward renewal,
                truth-speaking, clearing the voice
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual residue, heavy atmospheres, unwanted influence,
                manipulation, gossip, energetic stagnation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional support for the throat and lungs, bitter tonic use,
                old-style syrups and teas for seasonal discomfort
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Horehound is a clearer. It is for what sticks and will not move.
                <br />
                <br />
                Use it in floor washes and smoke cleansing when a space feels
                crowded, heavy, or emotionally loud.
                <br />
                <br />
                In banishing, it supports clean separation: removing influence
                without leaving a door open behind you.
                <br />
                <br />
                Pair it with Throat Chakra work when you need your words to be
                direct, protected, and hard to twist.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Horehound</h2>

          <p>
            Horehound can be worked with as dried leaf in cleansing blends,
            banishing sachets, and protective washes.
          </p>

          <p>
            For home clearing, steep Horehound and use the cooled infusion in a
            floor wash focused on removing heaviness and restoring clean space.
          </p>

          <p>
            For voice and truth work, add Horehound to a spell candle dressing
            blend and speak your intention out loud, steady and uncompromised.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Horehound is a practical choice when you need to clear a space
            quickly and keep it clear. It is especially useful after conflict,
            after visitors, or after a period of emotional turbulence.
          </p>

          <p>
            It also supports boundary work that is verbal: saying no, naming the
            truth, and refusing to be pulled into noise. This is breath and
            voice as protection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HOREHOUND-FOLKLORE-IMAGE-URL"
              alt="Horehound Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Horehound appears in many old-world household traditions as a bitter
            herb used to clear the chest and steady the breath. That practical
            use created an energetic reputation: if it clears the lungs, it can
            clear the space.
          </p>

          <p>
            In modern witchcraft, Horehound remains a staple for uncrossing,
            banishing, and purification. It is often chosen when the work needs
            to be clean, direct, and final.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Horehound is often described as containing bitter compounds and
            plant constituents traditionally associated with respiratory support
            and tonic use.
          </p>

          <p>
            Common Constituents: Marrubiin, Volatile Oils, Tannins, Flavonoids
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
            Horehound may not be appropriate during pregnancy. It may also
            affect blood sugar and blood pressure in some people. If pregnant,
            nursing, managing a condition, or taking medication, check safety
            details with a trusted professional source before ingesting any
            herb. This grimoire is written for spiritual and educational
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