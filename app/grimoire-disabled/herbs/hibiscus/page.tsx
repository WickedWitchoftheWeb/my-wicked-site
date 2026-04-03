// app/grimoire/herbs/hibiscus/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HibiscusPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hibiscus" subtitle="Hibiscus sabdariffa">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-HIBISCUS-HERO-IMAGE-URL"
              alt="Hibiscus"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Hibiscus awakens the heart: passion, beauty, and bold devotion
              blooming without apology.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Hibiscus is a vibrant flowering plant native to tropical and
            subtropical regions across Africa, Asia, and the Caribbean. Its
            deep red calyx is widely used in teas, culinary traditions, and
            herbal preparations.
          </p>

          <p>
            Traditionally known for its tart flavor and cooling properties,
            Hibiscus is often associated with circulation and heart support.
            Energetically, this translates to movement, emotional intensity,
            and the courage to feel deeply.
          </p>

          <p>
            In witchcraft, Hibiscus is worked with for love, attraction,
            passion, beauty, and heart-centered empowerment. It amplifies
            sensual confidence and encourages emotional boldness.
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
                <Link href="PASTE-APHRODITE-ROUTE">Aphrodite</Link>,{" "}
                <Link href="PASTE-OSHUN-ROUTE">Oshun</Link>,{" "}
                <Link href="PASTE-ISIS-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-LAKSHMI-ROUTE">Lakshmi</Link>,{" "}
                <Link href="PASTE-FREYJA-ROUTE">Freyja</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">
                  Cancer
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/12-pisces">
                  Pisces
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/07-libra">
                  Libra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">
                  Venus
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/02-moon">
                  Moon
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
                <Link href="/grimoire/chakras/04-heart-chakra">
                  Heart Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/02-sacral-chakra">
                  Sacral Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">
                  Rose Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/ruby">Ruby</Link>,{" "}
                <Link href="/grimoire/crystals-stones/garnet">
                  Garnet
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">
                  Moonstone
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Hibiscus in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HIBISCUS-WITCHCRAFT-IMAGE-URL"
              alt="Hibiscus in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Love spells, attraction work, passion rites, beauty rituals,
                confidence magic, heart awakening
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Emotional stagnation, self-doubt, fear of intimacy, blocked
                desire
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Traditionally used for circulatory support, cooling the body,
                and gentle heart-focused herbal teas
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Hibiscus is bold and visible. It does not whisper.
                <br />
                <br />
                Use it when you want your energy to be felt and your presence
                to be remembered.
                <br />
                <br />
                In love workings, it amplifies attraction and sensual
                confidence.
                <br />
                <br />
                Pair with Venus work for magnetism, or with Moon rituals when
                emotional vulnerability is part of the spell.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Hibiscus
          </h2>

          <p>
            Hibiscus can be used as dried petals in teas, love sachets, bath
            blends, and attraction powders.
          </p>

          <p>
            Add to ritual baths for confidence and sensual empowerment.
          </p>

          <p>
            Include in love spell jars, self-love rites, or beauty-focused
            glamour workings when the intention is bold heart energy.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Hibiscus is not subtle energy. It is vibrant, visible, and
            emotionally alive.
          </p>

          <p>
            Work with it when you are ready to open the heart fully and express
            desire without shrinking. It supports passion with softness rather
            than aggression.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Folklore &amp; Tradition
          </h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HIBISCUS-FOLKLORE-IMAGE-URL"
              alt="Hibiscus Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In many tropical cultures, Hibiscus symbolizes beauty, femininity,
            fertility, and celebration. It is worn in the hair, offered in
            rituals, and brewed into ceremonial drinks.
          </p>

          <p>
            Its association with love and attraction crosses continents,
            appearing in African, Caribbean, Indian, and Mediterranean
            traditions.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Hibiscus is known for containing antioxidants, plant acids, and
            compounds traditionally associated with circulatory and heart
            support.
          </p>

          <p>
            Common Constituents: Anthocyanins, Vitamin C, Organic Acids,
            Flavonoids
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
            Hibiscus may affect blood pressure and blood sugar levels. If
            pregnant, nursing, managing a condition, or taking medication,
            consult a qualified professional before ingesting. This grimoire is
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