// app/grimoire/herbs/hawthorn/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function HawthornPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Hawthorn" subtitle="Crataegus monogyna">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-HAWTHORN-HERO-IMAGE-URL"
              alt="Hawthorn"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Hawthorn guards the heart: it protects love, strengthens
              boundaries, and stands at the threshold between worlds.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Hawthorn is a thorned tree or shrub found across Europe, North
            Africa, and Western Asia. It has long held a powerful place in
            folklore, especially as a boundary plant tied to protection and the
            liminal spaces of the land.
          </p>

          <p>
            In practical tradition, Hawthorn is widely discussed for heart
            support and tonic use. In spiritual work, that connection becomes
            emotional protection, resilience, and guarded devotion.
          </p>

          <p>
            In witchcraft, Hawthorn is used for protection, love work, boundary
            reinforcement, and threshold magic. It is often chosen when the
            goal is to protect the heart without closing it.
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
                <Link href="PASTE-HECATE-DEITY-ROUTE">Hecate</Link>,{" "}
                <Link href="PASTE-FREYJA-DEITY-ROUTE">Freyja</Link>,{" "}
                <Link href="PASTE-AINE-DEITY-ROUTE">Áine</Link>,{" "}
                <Link href="PASTE-PAN-DEITY-ROUTE">Pan</Link>,{" "}
                <Link href="PASTE-GAIA-DEITY-ROUTE">Gaia</Link>,{" "}
                <Link href="PASTE-OSHUN-DEITY-ROUTE">Oshun</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/02-taurus">Taurus</Link>
                ,{" "}
                <Link href="/grimoire/astrology/01-zodiacs/04-cancer">Cancer</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Planet</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/02-planets/04-venus">Venus</Link>,{" "}
                <Link href="/grimoire/astrology/02-planets/02-moon">Moon</Link>
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
                <Link href="/grimoire/chakras/04-heart-chakra">Heart Chakra</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/rose-quartz">Rose Quartz</Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/rhodonite">Rhodonite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/green-aventurine">
                  Green Aventurine
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/moonstone">Moonstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/black-tourmaline">
                  Black Tourmaline
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Hawthorn in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HAWTHORN-WITCHCRAFT-IMAGE-URL"
              alt="Hawthorn in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, love work, emotional resilience, boundary
                reinforcement, home wards, threshold magic
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Heartbreak residue, emotional intrusion, unhealthy attachment,
                envy, spiritual trespass
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Traditional heart support, tonic use, soothing support for
                emotional strain
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Hawthorn is both protector and threshold. It helps guard the
                heart without turning it to stone.
                <br />
                <br />
                In love work, it supports devotion with boundaries: tenderness
                that still knows when to say no.
                <br />
                <br />
                In protection rites, it reinforces the idea of sacred space: a
                boundary that must be respected.
                <br />
                <br />
                Pair it with Heart Chakra focus when the goal is resilience,
                steadiness, and protected openness.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Hawthorn</h2>

          <p>
            Hawthorn can be worked with as dried berries, leaf, or flower. It is
            commonly used in protection charms, love blends, and boundary
            workings.
          </p>

          <p>
            For protection, place Hawthorn near doorways or incorporate it into
            a warding sachet focused on keeping space respected.
          </p>

          <p>
            For emotional resilience, use Hawthorn in a ritual tea or bath and
            focus on strengthening the heart while releasing unhealthy
            attachment.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Hawthorn is a practical choice when you need to protect love and
            still remain open. Use it after heartbreak, during relationship
            transitions, or when emotional boundaries must be reinforced.
          </p>

          <p>
            It is also useful in home wards. Hawthorn supports the message that
            the threshold is sacred and not all energy is welcome.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-HAWTHORN-FOLKLORE-IMAGE-URL"
              alt="Hawthorn Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In Celtic and British folklore, Hawthorn is deeply tied to fae lore
            and liminal places. It was often treated as a boundary tree and
            approached with respect, especially when growing alone.
          </p>

          <p>
            In modern witchcraft, Hawthorn remains a staple in threshold magic,
            protection work, and heart-centered resilience rites. The current is
            sacred: protect the boundary, honor the heart.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Hawthorn is often described as containing flavonoids and plant
            compounds traditionally associated with heart support. This section
            is the place to list additional nutritional components such as
            vitamins and minerals when applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Flavonoids, Plant Compounds</p>
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
            Hawthorn may interact with certain medications and conditions,
            especially those related to the heart and blood pressure. If
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