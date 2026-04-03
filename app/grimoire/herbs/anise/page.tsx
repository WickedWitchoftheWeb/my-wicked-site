// app/grimoire/herbs/anise/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AnisePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Anise" subtitle="Pimpinella anisum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ANISE-HERO-IMAGE-URL"
              alt="Anise"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Anise clears the channel: it sweetens the air, sharpens insight,
              and helps the message land.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Anise is an aromatic herb cultivated for its small seeds, prized for
            their distinctive licorice-like flavor and bright, uplifting scent.
            It has been used across culinary and traditional practice as a
            warming spice and clarifier.
          </p>

          <p>
            Native to the eastern Mediterranean region and Southwest Asia,
            Anise spread widely through trade and household cultivation. Over
            time, it became associated with comfort, clarity, and mental focus.
          </p>

          <p>
            In witchcraft, Anise is treated as a mental and spiritual clarifier.
            It supports clean communication, sharpened intuition, and protection
            against confusion or interference.
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
                <Link href="PASTE-GANESHA-ROUTE">Ganesha</Link>,{" "}
                <Link href="PASTE-SARASWATI-ROUTE">Saraswati</Link>,{" "}
                <Link href="PASTE-LUGH-ROUTE">Lugh</Link>,{" "}
                <Link href="PASTE-ESHU-ROUTE">Eshu</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/lapis-lazuli">
                  Lapis Lazuli
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/fluorite">
                  Fluorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/selenite">
                  Selenite
                </Link>
              </p>
            </div>

          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Anise in Witchcraft</h2>

               <div className="grimoire-image">
          <img
            src="PASTE-YOUR-ANISE-WITCHCRAFT-IMAGE-URL"
            alt="Anise in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Clarity, communication, divination, cleansing, focus, protection,
                dream work, truth work
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Confusion, mixed signals, manipulation, mental fog, unwanted
                influence, gossip
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive comfort, traditional soothing support for tension,
                breath freshening, warming spice use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Anise is a clarifier. Use it when you need the truth to be easy
                to hear and hard to distort.
                <br />
                <br />
                In communication work, pair it with Throat Chakra intention and
                keep the goal clean: say what is true, say it simply, and let it
                land without extra charge.
                <br />
                <br />
                In divination, Anise supports signal over noise. It helps cut
                through emotional static so the message comes through with less
                distortion.
                <br />
                <br />
                For protection, Anise is especially useful against confusion and
                interference. It reinforces clarity as a boundary.
              </p>
            </div>

          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Anise</h2>

          <p>
            Anise can be worked with as whole seeds or ground spice. It is
            commonly used in candle dressing blends, sachets, and ritual baths
            focused on clarity and clean communication.
          </p>

          <p>
            For divination support, place a small amount of Anise near your
            reading tools or add it to a cleansing blend used before your
            session.
          </p>

          <p>
            For truth work, Anise can be included in a focused charm meant to
            support direct speech, clear decisions, and consistent messaging.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Anise is used when you need to remove confusion from a situation.
            It supports clean perception and helps you notice what is being
            implied, what is being avoided, and what is actually true.
          </p>

          <p>
            It also works well when you are preparing for a difficult
            conversation. The goal is clarity that does not wobble.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Anise Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Anise has been carried through household tradition as a spice of
            comfort and clarity. Its strong aroma and familiar warmth made it a
            staple in kitchens and folk practice alike.
          </p>

          <p>
            In modern witchcraft, its reputation often translates into
            communication work, divination support, and protection through clear
            perception.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Anise is often described as containing aromatic essential oils and
            plant compounds that contribute to its traditional warming and
            soothing reputation.
          </p>

          <p>
            Common Constituents: Aromatic Oils, Plant Compounds
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
            Anise is commonly used in culinary amounts. Larger amounts may cause
            digestive discomfort in some individuals. If pregnant, nursing,
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