// app/grimoire/herbs/dandelion/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function DandelionPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Dandelion" subtitle="Taraxacum officinale">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-DANDELION-HERO-IMAGE-URL"
              alt="Dandelion"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Dandelion persists and purifies: it clears what clings, roots
              deep into truth, and rises again without apology.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Dandelion is a hardy perennial found across Europe, Asia, and North
            America. Often dismissed as a weed, it has long been valued in folk
            tradition for resilience, purification, and renewal.
          </p>

          <p>
            In practical herbalism, Dandelion appears in traditional
            preparations connected to cleansing and digestive support. In
            spiritual work, that cleansing current translates into energetic
            clearing and truth-seeking.
          </p>

          <p>
            In witchcraft, Dandelion is used for purification, divination,
            resilience, and honest self-reflection. It is often chosen when the
            goal is to clear residue and stand rooted in clarity.
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
                <Link href="PASTE-HECATE-DEITY-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-APOLLO-DEITY-ROUTE">Apollo</Link>,{" "}
                <Link href="PASTE-DEMETER-DEITY-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-ODIN-DEITY-ROUTE">Odin</Link>,{" "}
                <Link href="PASTE-GAIA-DEITY-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-OSANYIN-DEITY-ROUTE">Osanyin</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/03-gemini">Gemini</Link>
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
                ,{" "}
                <Link href="/grimoire/astrology/02-planets/01-sun">Sun</Link>
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
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/clear-quartz">
                  Clear Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Dandelion in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DANDELION-WITCHCRAFT-IMAGE-URL"
              alt="Dandelion in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Purification, resilience, divination, clarity, truth work,
                renewal, confidence
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic residue, dishonesty, self-doubt, stagnation, emotional
                buildup
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional cleansing support, digestive comfort, tonic use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Dandelion is a purifier. It is often used when the field feels
                heavy and needs clearing before any new work begins.
                <br />
                <br />
                In divination work, its association with wishes and wind
                currents makes it useful for truth-seeking and intuitive focus.
                <br />
                <br />
                In confidence rites, Dandelion supports resilience: bend,
                release, and rise again.
                <br />
                <br />
                Pair it with Solar Plexus focus when the goal is clarity rooted
                in personal truth.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Dandelion</h2>

          <p>
            Dandelion can be worked with as dried leaf, root, or flower. It is
            commonly used in purification blends, clarity rituals, and
            intention-setting practices.
          </p>

          <p>
            For cleansing work, combine Dandelion with other clearing herbs and
            use in a ritual bath or floor wash when you need a full energetic
            reset.
          </p>

          <p>
            For resilience rites, incorporate Dandelion into jar work focused on
            strength and honest self-reflection.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Dandelion is a practical choice when you need to clear emotional
            buildup and return to truth. Use it when circumstances have left
            you feeling tangled or uncertain.
          </p>

          <p>
            It is also useful when resilience is required. Dandelion reminds
            you that even what is overlooked can root deep and rise again.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-DANDELION-FOLKLORE-IMAGE-URL"
              alt="Dandelion Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In European folklore, Dandelion was associated with wishes and
            divination. Blowing its seeds into the wind became symbolic of
            releasing intention and trusting unseen currents.
          </p>

          <p>
            In modern witchcraft, Dandelion is often used in purification and
            clarity rites. The current is honest: clear the residue, root into
            truth, and let what is ready be carried forward.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Dandelion is often described as containing plant compounds
            traditionally associated with cleansing and tonic properties. This
            section is the place to list additional nutritional components such
            as vitamins and minerals when applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Plant Compounds, Bitter Principles</p>
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
            Dandelion is generally considered safe in traditional use. If
            pregnant, nursing, managing a condition, or taking medication,
            check safety details with a trusted professional source before
            ingesting any herb. This grimoire is written for spiritual and
            educational purposes and is not medical advice.
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