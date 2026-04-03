// app/grimoire/herbs/allspice/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function AllspicePage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Allspice" subtitle="Pimenta dioica">
        {/* HERO */}
        <section className="grimoire-hero">
          <div className="grimoire-hero-image">
            <img
              src="PASTE-YOUR-ALLSPICE-HERO-IMAGE-URL"
              alt="Allspice"
              className="grimoire-hero-img"
            />
          </div>

          <div className="grimoire-quote">
            <p className="grimoire-quote-text">
              “Allspice carries a warm, protective force: it strengthens will,
              stokes courage, and helps your energy hold its ground.”
            </p>
            <span className="wicked-signature">-Wicked</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Overview</h2>

          <p>
            Allspice is the dried berry of Pimenta dioica, a tree native to the
            Caribbean and parts of Central America. Its name comes from its
            aroma, which can suggest clove, cinnamon, and nutmeg at once.
          </p>

          <p>
            In practical tradition, Allspice is valued as a warming spice used
            for comfort, digestive support, and household remedies. In spiritual
            work, that same warmth translates into protection, momentum, and
            energetic reinforcement.
          </p>

          <p>
            In witchcraft, Allspice is used when you need heat that is focused
            and steady. It is often chosen for protection work, success
            workings, courage-building, and any spell that needs a stronger push
            forward.
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
                <Link href="PASTE-MARS-DEITY-ROUTE">Mars</Link>,{" "}
                <Link href="PASTE-THOR-DEITY-ROUTE">Thor</Link>,{" "}
                <Link href="PASTE-OGUN-DEITY-ROUTE">Ogun</Link>,{" "}
                <Link href="PASTE-SEKHMET-DEITY-ROUTE">Sekhmet</Link>,{" "}
                <Link href="PASTE-DURGA-DEITY-ROUTE">Durga</Link>,{" "}
                <Link href="PASTE-GUAN-YU-DEITY-ROUTE">Guan Yu</Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Zodiac</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/astrology/01-zodiacs/09-sagittarius">
                  Sagittarius
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
                <Link href="/grimoire/chakras/03-solar-plexus-chakra">
                  Solar Plexus Chakra
                </Link>
              </p>
            </div>

            <div className="grimoire-correspondence">
              <p className="grimoire-correspondence-label">Crystals</p>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/crystals-stones/carnelian">Carnelian</Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/citrine">Citrine</Link>,{" "}
                <Link href="/grimoire/crystals-stones/sunstone">Sunstone</Link>,{" "}
                <Link href="/grimoire/crystals-stones/tigers-eye">
                  Tiger&apos;s Eye
                </Link>
                ,{" "}
                <Link href="/grimoire/crystals-stones/pyrite">Pyrite</Link>
              </p>
            </div>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WITCHCRAFT */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Allspice in Witchcraft</h2>

                <div className="grimoire-image">
          <img
            src="PASTE-YOUR-ALLSPICE-WITCHCRAFT-IMAGE-URL"
            alt="Allspice in Witchcraft artwork"
            className="grimoire-img"
          />
        </div>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Good for</h3>
              <p className="grimoire-correspondence-value">
                Protection, courage, success, stamina, confidence, banishing,
                motivation, personal power
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Protects Against</h3>
              <p className="grimoire-correspondence-value">
                Energetic intrusion, intimidation, fear spirals, hesitation,
                stagnation, hostile intention
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">Natural Remedies</h3>
              <p className="grimoire-correspondence-value">
                Digestive support, warming comfort, mild soothing support for
                tension, traditional household use for freshness
              </p>
            </div>

            <div className="grimoire-correspondence">
              <h3 className="grimoire-correspondence-label">
                Magickal{"\u00A0"}Tips
              </h3>
              <p className="grimoire-correspondence-value">
                Allspice is a power-builder. It is especially useful when your
                energy needs to feel solid, decisive, and hard to push around.
                <br />
                <br />
                In protection work, it is often used to heat up wards so they
                feel alert and responsive. Think of it as a warming edge that
                reinforces boundaries.
                <br />
                <br />
                In success workings, Allspice supports follow-through. It helps
                you keep moving when motivation drops and doubt tries to slow
                the work down.
                <br />
                <br />
                For confidence work, pair it with Solar Plexus focus and keep
                the intention simple: clear choice, steady action, and a field
                that does not fold.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* WAYS TO WORK WITH THE HERB */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Ways to Work With Allspice</h2>

          <p>
            Allspice can be worked with as whole berries or ground spice. It is
            commonly used in jar work, charm bags, candle dressing blends, and
            protection powders.
          </p>

          <p>
            For protection, add Allspice to a warding sachet with stones that
            reinforce will and boundaries. Place it near thresholds or carry it
            when you need your energy to feel less permeable.
          </p>

          <p>
            For success, use it in a focused working that supports action. Keep
            the goal clear, keep the timeline realistic, and let the herb act as
            steady pressure that moves the work forward.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* IN PRACTICE */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">In Practice</h2>

          <p>
            Allspice is a practical choice when you need to strengthen your
            backbone. Use it when you are stepping into leadership, setting a
            boundary that must hold, or moving through a situation that demands
            courage and consistency.
          </p>

          <p>
            It is also useful when your field feels cooled down by doubt or
            pressure from other people. Allspice brings your energy back into
            your body and back into your decision, so your next move comes from
            clarity rather than reaction.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* FOLKLORE & TRADITION */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Folklore &amp; Tradition</h2>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Allspice Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <div className="grimoire-image">
  <img
    src="PASTE-YOUR-HERB-FOLKLORE-IMAGE-URL"
    alt="Allspice Folklore Illustration"
    className="grimoire-img"
  />
</div>

          <p>
            Allspice is deeply tied to kitchen practice and household tradition.
            It has a long history of being used to warm, preserve, and comfort.
          </p>

          <p>
            In modern witchcraft, it is commonly used in protection blends,
            success work, and courage rites. The current is direct: heat, focus,
            and a stronger sense of personal authority.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CONSTITUENTS */}
        <section className="grimoire-section grimoire-text">
          <h2 className="grimoire-subheading">Constituents</h2>

          <p>
            Allspice is often described as containing aromatic essential oils and
            plant compounds that contribute to its traditional warming and
            soothing reputation. This section is the place to list additional
            nutritional components such as vitamins and minerals when applicable
            to the herb being profiled.
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
            Allspice is generally used in small culinary amounts. Larger amounts
            may cause digestive discomfort in some individuals. If pregnant,
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