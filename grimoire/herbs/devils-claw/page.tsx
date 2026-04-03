// app/grimoire/herbs/devils-claw/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function DevilsClawPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Devil&apos;s Claw" subtitle="Harpagophytum procumbens">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-DEVILS-CLAW-HERO-IMAGE-URL"
              alt="Devil&apos;s Claw"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Devil&apos;s Claw carries a hard truth current: it breaks
              stagnation, pulls pain to the surface, and forces the body back
              into motion.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Devil&apos;s Claw is a plant native to Southern Africa, traditionally
            used in regional herbal practice and later adopted more widely for
            its reputation in supporting comfort and mobility.
          </p>

          <p>
            In practical tradition, Devil&apos;s Claw is commonly discussed in
            the context of inflammatory discomfort and joint support. In
            spiritual work, that same current translates into breaking
            stagnation and restoring movement where energy has locked.
          </p>

          <p>
            In witchcraft, Devil&apos;s Claw is used when you need a forceful
            shift. It is often chosen for uncrossing work, breaking energetic
            stagnation, and rituals focused on returning agency and forward
            motion.
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
                <Link href="PASTE-HECATE-DEITY-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-KALI-DEITY-ROUTE">Kali</Link>,{" "}
                <Link href="PASTE-SEKHMET-DEITY-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-OGUN-DEITY-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-MORRIGAN-DEITY-ROUTE">The Morrigan</Link>,{" "}
                <Link href="PASTE-ANUBIS-DEITY-ROUTE">Anubis</Link>,{" "}
                <Link href="PASTE-ERESHKIGAL-DEITY-ROUTE">Ereshkigal</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/10-capricorn">
                  Capricorn
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
                <Link href="/grimoire/astrology/02-planets/07-saturn">Saturn</Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/05-mars">Mars</Link>
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/obsidian">Obsidian</Link>,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>,{" "}
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
          <h2 className="grimoire-subheading">Devil&apos;s Claw in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DEVILS-CLAW-WITCHCRAFT-IMAGE-URL"
              alt="Devil&apos;s Claw in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Uncrossing, breaking stagnation, protection, returning agency,
                endurance, restoring momentum
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic blockages, stagnant patterns, oppressive influence,
                long-term depletion, locked emotions
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Joint support, inflammatory discomfort support, mobility support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Devil&apos;s Claw is a breaker. It is often used when energy
                feels locked and you need movement restored.
                <br />
                <br />
                In uncrossing work, it supports the release of stubborn residue
                that has clung for too long.
                <br />
                <br />
                In endurance rites, it reinforces the will to keep going when
                the road is heavy.
                <br />
                <br />
                Pair it with Saturn focus for discipline, and Mars focus for the
                push to move.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Devil&apos;s Claw</h2>

          <p>
            Devil&apos;s Claw can be worked with as dried root in protection
            blends, uncrossing work, and endurance-focused rituals. It is
            commonly used when the goal is to break through heaviness and
            restore forward motion.
          </p>

          <p>
            For uncrossing work, combine Devil&apos;s Claw with cleansing herbs
            and use it in a targeted ritual bath or floor wash. Keep the
            intention simple: remove what is not yours and restore movement.
          </p>

          <p>
            For endurance, incorporate it into a sachet or charm that supports
            discipline and steady effort rather than bursts of intensity.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Devil&apos;s Claw is a practical choice when you need to break a
            long-standing block. Use it when patterns repeat, when the body
            feels stuck, or when you are ready to shift a heavy cycle.
          </p>

          <p>
            It is also useful when endurance is required. Devil&apos;s Claw
            supports the will to keep moving until the stagnation finally
            releases.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DEVILS-CLAW-FOLKLORE-IMAGE-URL"
              alt="Devil&apos;s Claw Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Devil&apos;s Claw is rooted in Southern African traditional use and
            carries a reputation for strength and stubborn persistence. Its name
            reflects the hooked seed pods, which suggest a gripping, catching
            energy.
          </p>

          <p>
            In modern witchcraft, this symbolism often translates into breaker
            work: gripping what must be pulled free, dragging stagnation to the
            surface, and restoring motion where energy has locked.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Devil&apos;s Claw is often described as containing iridoid
            glycosides and plant compounds associated with its traditional use.
            This section is the place to list additional nutritional components
            such as vitamins and minerals when applicable to the herb being
            profiled.
          </p>

          <p>Common Constituents: Iridoid Glycosides, Plant Compounds</p>
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
            Devil&apos;s Claw may interact with certain medications and is often
            discussed with caution for pregnancy and specific conditions. If
            pregnant, nursing, managing a condition, or taking medication, check
            safety details with a trusted professional source before ingesting
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