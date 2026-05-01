// app/grimoire/herbs/comfrey/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function ComfreyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Comfrey" subtitle="Symphytum officinale">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-COMFREY-HERO-IMAGE-URL"
              alt="Comfrey"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Comfrey restores what is broken: it grounds the body, steadies the
              spirit, and supports repair at the root.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Comfrey is a perennial herb traditionally known for its association
            with restoration and repair. Native to Europe and parts of Asia, it
            has been carried through generations of household practice as a plant
            linked to mending, protection, and grounded support.
          </p>

          <p>
            In practical tradition, Comfrey is often discussed in the context of
            external use and traditional folk preparations. In spiritual work,
            that same current translates into stabilizing the field, knitting
            energy back together, and reinforcing what has been weakened.
          </p>

          <p>
            In witchcraft, Comfrey is used when you need steady restoration. It
            is often chosen for healing work, protection, safe travel, and any
            working where the goal is to rebuild strength instead of forcing
            speed.
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
                <Link href="PASTE-BRIGID-DEITY-ROUTE">Brigid</Link>,{" "}
                <Link href="PASTE-DEMETER-DEITY-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-GAIA-DEITY-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-ASKLEPIOS-DEITY-ROUTE">Asclepius</Link>,{" "}
                <Link href="PASTE-ISIS-DEITY-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-OSANYIN-DEITY-ROUTE">Osanyin</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">
                  Taurus
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
                <Link href="/grimoire/chakras/01-root-chakra">Root Chakra</Link>
                ,{" "}
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
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
                <Link href="/grimoire/crystals-stones/quartz/smoky-quartz">
                  Smoky Quartz
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/quartz/clear-quartz">
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
          <h2 className="grimoire-subheading">Comfrey in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-COMFREY-WITCHCRAFT-IMAGE-URL"
              alt="Comfrey in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Healing, restoration, protection, grounding, stability, safe
                travel, rebuilding strength
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic depletion, instability, lingering stress, weakened
                boundaries, emotional fracture
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional external use, soothing support, folk preparations for
                comfort
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Comfrey is a mender. It is often used when your energy feels
                frayed, scattered, or worn down by sustained pressure.
                <br />
                <br />
                In protection work, it reinforces the parts of the field that
                have been weakened: the places where stress created cracks.
                <br />
                <br />
                In healing workings, Comfrey supports rebuilding after the
                release. It helps the system return to steadiness rather than
                snapping back into survival mode.
                <br />
                <br />
                For safe travel work, it is traditionally carried for protection
                on the road and for the strength to return whole.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Comfrey</h2>

          <p>
            Comfrey can be worked with as dried leaf or root, often used in charm
            bags, protection sachets, and restoration blends. It is commonly used
            in work focused on rebuilding strength, reinforcing boundaries, and
            supporting a steady return to baseline.
          </p>

          <p>
            For protection, add Comfrey to a warding sachet with stones that
            anchor the body and calm the nervous system. Place it near your bed,
            in a travel bag, or near thresholds when you need steadiness to hold.
          </p>

          <p>
            For restoration work, combine Comfrey with grounding herbs and keep
            the intention simple: repair, stability, and a return to wholeness
            that does not require force.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Comfrey is a practical choice when you need to rebuild. Use it after
            burnout, after conflict, after grief, or after any season where you
            have been carrying more than your system can comfortably hold.
          </p>

          <p>
            It is also useful when your boundaries have softened under pressure.
            Comfrey strengthens the base so your next move comes from steadiness,
            not exhaustion.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-COMFREY-FOLKLORE-IMAGE-URL"
              alt="Comfrey Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            Comfrey has long been carried through folk practice as a plant of
            mending. Its traditional reputation is tied to the idea of knitting
            together: restoring what has been strained or weakened over time.
          </p>

          <p>
            In modern witchcraft, that current translates into repair work,
            protection after hardship, and stabilization rites. It is less about
            speed and more about structure: rebuilding the field so it can hold.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Comfrey is often discussed as containing plant compounds used in
            traditional preparations. This section is the place to list
            additional nutritional components such as vitamins and minerals when
            applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Plant Compounds, Aromatic Components</p>
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
            Comfrey is traditionally associated with external use. If pregnant,
            nursing, managing a condition, or taking medication, check safety
            details with a trusted professional source before ingesting any herb.
            This grimoire is written for spiritual and educational purposes and
            is not medical advice.
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