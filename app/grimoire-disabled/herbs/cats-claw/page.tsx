// app/grimoire/herbs/cats-claw/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CatsClawPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cat&apos;s Claw" subtitle="Uncaria tomentosa">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CATS-CLAW-HERO-IMAGE-URL"
              alt="Cat&apos;s Claw"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cat&apos;s Claw teaches strength with precision: it grips what
              matters, defends the boundary, and restores endurance.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cat&apos;s Claw is a woody vine native to the Amazon rainforest and
            other tropical regions of Central and South America. Named for its
            hook-like thorns, it has a long history of traditional use among
            Indigenous peoples.
          </p>

          <p>
            In herbal practice, Cat&apos;s Claw is often associated with immune
            support and long-term resilience. Its reputation is rooted in
            endurance, recovery, and strengthening the system over time.
          </p>

          <p>
            In witchcraft, Cat&apos;s Claw is worked with for protection,
            strengthening boundaries, energetic resilience, and deep
            restoration after prolonged stress.
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
                <Link href="PASTE-JAGUAR-GODDESS-ROUTE">Jaguar Goddess</Link>,{" "}
                <Link href="PASTE-IXCHEL-ROUTE">Ixchel</Link>,{" "}
                <Link href="PASTE-ARTEMIS-ROUTE">Artemis</Link>,{" "}
                <Link href="PASTE-DURGA-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-OGUN-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-KALI-ROUTE">Kali</Link>
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
                <Link href="/grimoire/astrology/02-planets/07-saturn">
                  Saturn
                </Link>
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/09-pluto">
                  Pluto
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
                <Link href="/grimoire/chakras/01-root-chakra">
                  Root Chakra
                </Link>
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
                <Link href="/grimoire/crystals-stones/obsidian">
                  Obsidian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
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
          <h2 className="grimoire-subheading">Cat&apos;s Claw in Witchcraft</h2>


        <div className="grimoire-image">
          <img
            src="PASTE-YOUR-CATS-CLAW-WITCHCRAFT-IMAGE-URL"
            alt="Cat&apos;s Claw in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, boundary strength, resilience, recovery, endurance,
                energetic fortification
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic depletion, psychic intrusion, weakness, lingering
                negativity, burnout
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional immune support, recovery work, long-term vitality
                support
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Cat&apos;s Claw is powerful for rebuilding the field after
                prolonged stress. It supports recovery as a process, not a
                moment.
                <br />
                <br />
                In protection work, it reinforces boundaries and helps the
                practitioner hold the line without exhaustion.
                <br />
                <br />
                Pair it with Root Chakra work when you need endurance and a
                stronger sense of safety.
                <br />
                <br />
                This herb is best used consistently, with patience and clear
                intention.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cat&apos;s Claw</h2>

          <p>
            Work with Cat&apos;s Claw in protective blends focused on endurance
            and boundary reinforcement.
          </p>

          <p>
            Add it to long-term resilience rituals where the goal is steady
            strengthening rather than quick relief.
          </p>

          <p>
            Use it as a symbol of holding the line: a reminder that protection
            is sometimes persistence.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cat&apos;s Claw is used when recovery and protection must happen
            together. It strengthens boundaries while rebuilding stamina.
          </p>

          <p>
            It pairs well with Saturn structure and Pluto transformation work
            centered on restoring power over time.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Cats Claw Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Cat&apos;s Claw has a long history in Indigenous Amazonian
            traditions. Its reputation is rooted in endurance, protection, and
            strengthening the body through sustained use.
          </p>

          <p>
            In modern witchcraft, this translates into resilience rituals,
            boundary work, and deep restoration after prolonged struggle.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cat&apos;s Claw is often described as containing oxindole alkaloids
            and plant compounds associated with its traditional herbal
            reputation.
          </p>

          <p>
            Common Constituents: Oxindole Alkaloids, Plant Compounds
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
            Cat&apos;s Claw may interact with certain medications and may not be
            appropriate for everyone. If pregnant, nursing, managing a
            condition, or taking medication, consult a trusted professional
            source before ingesting any herb. This grimoire is written for
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