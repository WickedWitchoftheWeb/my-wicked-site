// app/grimoire/herbs/myrrh/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function MyrrhPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Myrrh" subtitle="Commiphora myrrha">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-MYRRH-HERO-IMAGE-URL"
              alt="Myrrh"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Myrrh sanctifies what has been broken: seal the wound, cleanse
              the space, and consecrate what comes next.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Myrrh is a fragrant resin collected from Commiphora trees native to
            regions of Northeast Africa and the Arabian Peninsula. Its deep,
            bitter scent has made it one of the most historically sacred resins
            in ritual, temple work, and funerary traditions.
          </p>

          <p>
            In traditional practice, Myrrh has been used in incense, perfumes,
            and preparations associated with purification and preservation. It
            carries a reputation for cleansing what is heavy and sanctifying
            what is sacred.
          </p>

          <p>
            In witchcraft, Myrrh is used for purification, protection, ancestor
            work, banishing, healing from grief, and consecration. It is chosen
            when the goal is spiritual cleansing with depth and reverence.
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
                <Link href="/grimoire/elements/earth">Earth</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-OSIRIS-ROUTE">Osiris</Link>,{" "}
                <Link href="PASTE-ANUBIS-ROUTE">Anubis</Link>,{" "}
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-INANNA-ROUTE">Inanna</Link>
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
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/06-jupiter">
                  Jupiter
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/08-pluto">Pluto</Link>
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
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
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
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
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
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Myrrh in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MYRRH-WITCHCRAFT-IMAGE-URL"
              alt="Myrrh in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Purification, banishing, ancestor work, grief rituals,
                consecration, protection
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Spiritual residue, heavy energy, unwanted spirits, emotional
                decay, lingering attachment
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional mouth rinses, incense use, cleansing preparations
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Myrrh is for sacred endings and sacred beginnings.
                <br />
                <br />
                Burn as incense when cleansing a space after grief, conflict,
                or spiritual intrusion.
                <br />
                <br />
                Use in ancestor rites to create a clean, protected channel for
                communication.
                <br />
                <br />
                Pair with Crown Chakra focus when consecrating tools and
                aligning with higher purpose.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Myrrh</h2>

          <p>
            Myrrh is most often worked with as resin for incense, smoke
            cleansing, and altar offerings.
          </p>

          <p>
            Burn small pieces on charcoal to cleanse a space and consecrate it
            afterward.
          </p>

          <p>
            Add to protection jars or ritual oils when sealing boundaries and
            removing spiritual residue.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Myrrh is a practical choice when you need cleansing with depth. It
            is not light, airy purification: it is sanctification.
          </p>

          <p>
            Work with it during ancestral rites, grief recovery, banishing, and
            consecration of new tools or sacred spaces.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE &amp; TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-MYRRH-FOLKLORE-IMAGE-URL"
              alt="Myrrh Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Myrrh was traded across ancient routes as a sacred resin used in
            temple incense, embalming traditions, and ritual perfumes. It became
            strongly associated with death rites, purification, and divine
            devotion.
          </p>

          <p>
            In modern witchcraft, it remains a cornerstone resin for cleansing,
            banishing, and ancestor work.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Myrrh resin contains aromatic compounds and plant constituents
            responsible for its scent and traditional cleansing applications.
          </p>

          <p>Common Constituents: Resin Acids, Terpenes, Volatile Oils</p>
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
            Myrrh should be used cautiously in pregnancy and may interact with
            certain medications and conditions. Resin smoke may irritate
            sensitive airways. If pregnant, nursing, managing a condition, or
            taking medication, consult a qualified professional before
            ingesting herbal preparations. This grimoire is written for
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