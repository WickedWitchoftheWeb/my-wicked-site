// app/grimoire/herbs/belladonna/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function BelladonnaPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Belladonna" subtitle="Atropa belladonna">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-BELLADONNA-HERO-IMAGE-URL"
              alt="Belladonna"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Belladonna stands at the threshold: dangerous, powerful, and
              deeply transformative when approached with respect.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Belladonna, also known as Deadly Nightshade, is a highly toxic plant
            native to Europe, North Africa, and Western Asia. It has long been
            associated with mystery, danger, and occult practice.
          </p>

          <p>
            Historically, Belladonna was used in medicinal, cosmetic, and
            visionary contexts, though always with risk. Its name “Atropa”
            references the Greek Fate who cuts the thread of life, reflecting
            the plant’s lethal nature.
          </p>

          <p>
            In witchcraft, Belladonna is considered a baneful and liminal herb.
            It is associated with shadow work, psychic boundary crossing, death
            symbolism, and deep transformation. It is never treated casually.
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
                <Link href="PASTE-HECATE-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-PERSEPHONE-ROUTE">Persephone</Link>,{" "}
                <Link href="PASTE-ATROPOS-ROUTE">Atropos</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-ERESH-KIGAL-ROUTE">Ereshkigal</Link>,{" "}
                <Link href="PASTE-MORRIGAN-ROUTE">The Morrigan</Link>,{" "}
                <Link href="PASTE-SANTA-MUERTE-ROUTE">Santa Muerte</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/08-scorpio">
                  Scorpio
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/09-pluto">
                  Pluto
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
                <Link href="/grimoire/chakras/06-third-eye-chakra">
                  Third Eye Chakra
                </Link>
                ,{" "}
                <Link href="/grimoire/chakras/07-crown-chakra">
                  Crown Chakra
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
                <Link href="/grimoire/crystals-stones/labradorite">
                  Labradorite
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/amethyst">
                  Amethyst
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">
            Belladonna in Witchcraft
          </h2>

                <div className="grimoire-image">
          <img
            src="PASTE-YOUR-BELLADONNA-WITCHCRAFT-IMAGE-URL"
            alt="Belladonna in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Shadow work, psychic boundaries, transformation, baneful work,
                liminal rites, protection through fearlessness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Protects Against
              </h3>
              <p className="grimoire-correspondence-value">
                Psychic intrusion, spiritual attack, illusion, manipulation
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Natural Remedies
              </h3>
              <p className="grimoire-correspondence-value">
                Historically used in controlled medicinal contexts. Not safe for
                home remedy use.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Belladonna is not a beginner herb. It represents threshold work
                and deep transformation.
                <br />
                <br />
                It is often honored symbolically rather than handled physically.
                Shadow rites, ancestor work, and liminal ceremonies may call on
                its archetypal current.
                <br />
                <br />
                When invoking its energy, maintain clear intention and strong
                protection practices.
                <br />
                <br />
                Respect is mandatory. This is a plant of power and consequence.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">
            Ways to Work With Belladonna
          </h2>

          <p>
            Belladonna is typically worked with symbolically rather than
            physically. Artwork, sigils, or meditative focus may be used to
            connect with its archetypal energy.
          </p>

          <p>
            In shadow work, it represents confrontation with hidden fears and
            transformation through darkness.
          </p>

          <p>
            Avoid physical ingestion or casual handling. This herb is toxic and
            should only be studied through reputable sources.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Belladonna is invoked when working with death symbolism, deep
            transformation, and psychic boundaries.
          </p>

          <p>
            It pairs with Pluto-focused rituals and Scorpio-aligned shadow
            practice.
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
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Belladonna Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            In European folklore, Belladonna was associated with witches and
            flying ointments. It was also used cosmetically to dilate pupils,
            giving rise to the name “beautiful lady.”
          </p>

          <p>
            Its mythic association with fate and death has secured its place as
            one of the most infamous occult plants in Western tradition.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Belladonna contains potent alkaloids including atropine,
            scopolamine, and hyoscyamine.
          </p>

          <p>
            Chemical Constituents: Tropane Alkaloids, Atropine, Scopolamine,
            Hyoscyamine
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
            Belladonna is highly toxic and can be fatal if ingested. Do not
            consume or handle this plant without professional knowledge and
            training. This grimoire is written for spiritual and educational
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