// app/grimoire/herbs/cumin/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function CuminPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Cumin" subtitle="Cuminum cyminum">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-CUMIN-HERO-IMAGE-URL"
              alt="Cumin"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Cumin anchors and protects: it steadies the field, strengthens
              loyalty, and guards what must remain intact.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Cumin is the dried seed of Cuminum cyminum, cultivated for thousands
            of years across the Mediterranean, North Africa, the Middle East,
            and India. It has long been valued for its warming, grounding
            qualities in both culinary and traditional practice.
          </p>

          <p>
            In household tradition, Cumin appears in food, remedies, and
            protective customs. Its steady heat translates spiritually into
            loyalty, safeguarding, and reinforcement of what already exists.
          </p>

          <p>
            In witchcraft, Cumin is used for protection, fidelity, grounding,
            and strengthening bonds. It is often chosen when the goal is to
            preserve stability rather than initiate change.
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
                <Link href="/grimoire/elements/fire">Fire</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Deities</p>
              <p className="grimoire-correspondence-value">
                <Link href="PASTE-HESTIA-DEITY-ROUTE">Hestia</Link>,{" "}
                <Link href="PASTE-DEMETER-DEITY-ROUTE">Demeter</Link>,{" "}
                <Link href="PASTE-ISIS-DEITY-ROUTE">Isis</Link>,{" "}
                <Link href="PASTE-ANUBIS-DEITY-ROUTE">Anubis</Link>,{" "}
                <Link href="PASTE-FRIGG-DEITY-ROUTE">Frigg</Link>,{" "}
                <Link href="PASTE-LAKSHMI-DEITY-ROUTE">Lakshmi</Link>
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
                <Link href="/grimoire/crystals-stones/hematite">Hematite</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/carnelian">
                  Carnelian
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/garnet">Garnet</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Cumin in Witchcraft</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-CUMIN-WITCHCRAFT-IMAGE-URL"
              alt="Cumin in Witchcraft artwork"
              className="grimoire-img"
            />
          </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, loyalty, grounding, fidelity, strengthening
                commitments, stability
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Infidelity, instability, drifting intentions, emotional
                detachment, weakened bonds
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming comfort, traditional aromatic use
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Cumin is often used to keep what is already yours intact.
                <br />
                <br />
                In protection work, it reinforces loyalty and strengthens the
                structure of existing bonds rather than drawing something new.
                <br />
                <br />
                In grounding rituals, it supports steadiness when energy feels
                scattered or uncertain.
                <br />
                <br />
                Pair it with Root Chakra focus and clear intention: secure,
                anchored, and unwavering.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Cumin</h2>

          <p>
            Cumin can be worked with as whole seeds or ground spice. It is
            commonly added to protection sachets, loyalty-focused jar work,
            and grounding blends.
          </p>

          <p>
            For fidelity or relationship reinforcement, combine Cumin with
            herbs aligned with trust and stability, and keep the intention
            centered on mutual strength rather than control.
          </p>

          <p>
            In grounding rites, use Cumin alongside Earth-aligned stones to
            stabilize energy and reinforce commitment to the chosen path.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Cumin is a practical choice when loyalty and steadiness are the
            priority. Use it when reinforcing commitments, protecting
            relationships, or anchoring a long-term goal.
          </p>

          <p>
            It is also useful when your energy feels scattered or uncertain.
            Cumin helps bring attention back into the body and into the
            promise you intend to keep.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
            <img
              src="PASTE-YOUR-CUMIN-FOLKLORE-IMAGE-URL"
              alt="Cumin Folklore Illustration"
              className="grimoire-img"
            />
          </div>

          <p>
            In parts of Europe and the Middle East, Cumin was traditionally
            associated with fidelity and protection. It was sometimes placed
            in wedding customs or carried to guard loyalty.
          </p>

          <p>
            In modern witchcraft, this current remains: preserve what matters,
            secure the bond, and protect what has already been built.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Cumin is often described as containing aromatic essential oils and
            plant compounds that contribute to its traditional warming and
            grounding reputation. This section is the place to list additional
            nutritional components such as vitamins and minerals when
            applicable to the herb being profiled.
          </p>

          <p>Common Constituents: Aromatic Oils, Plant Compounds</p>
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
            Cumin is generally used in culinary amounts. Larger amounts may
            cause digestive discomfort in some individuals. If pregnant,
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