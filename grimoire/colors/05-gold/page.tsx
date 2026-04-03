// app/grimoire/colors/05-gold/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GoldPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Gold"
        subtitle="Sovereignty, blessing, and Source in form"
      >
        {/* HERO IMAGE + QUOTE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/gold.png"
            alt="Abstract gold energy field"
            className="grimoire-hero-img"
          />

          <section className="grimoire-quote">
            <p className="grimoire-quote-text">
              &ldquo;Gold is the frequency of blessing: power that does not need
              to prove itself.&rdquo;
            </p>
            <span className="wicked-signature">-Wicked</span>
          </section>
        </section>

        {/* DESCRIPTION */}
        <section className="grimoire-section grimoire-text">
          <p>
            Gold is the color of sovereignty. It carries the energy of value,
            authority, and spiritual wealth that cannot be taken. Gold does not
            beg. Gold does not chase. Gold holds.
          </p>

          <p>
            In magick, gold is used for blessing work, protection through
            strength, success that lasts, and the kind of confidence that comes
            from alignment with Source. Gold amplifies what is already true.
          </p>

          <p>
            Use gold when you are stepping into leadership, claiming your
            purpose, or sealing a life upgrade you are ready to sustain. Use
            gold when you want your field to read as chosen, protected, and
            uncompromising.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* CORRESPONDENCES */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Correspondences</h2>

          <section className="grimoire-correspondences">
            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Element</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/source">Source</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Divine origin, highest alignment, the current behind all form.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">Chakra</span>
              <p className="grimoire-correspondence-value">
                <Link href="/grimoire/chakras/07-crown-chakra">Crown Chakra</Link>
              </p>
              <p className="grimoire-correspondence-description">
                Connection to Source, spiritual clarity, guidance, and blessing.
              </p>
            </div>

            <div className="grimoire-correspondence">
              <span className="grimoire-correspondence-label">
                Magickal Functions
              </span>
              <p className="grimoire-correspondence-value">
                Blessing, success, protection, prestige, authority, purpose
              </p>
              <p className="grimoire-correspondence-description">
                Gold amplifies what is aligned and seals it into reality.
              </p>
            </div>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* GOLD IN PRACTICE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Gold in Practice</h2>

          <div className="grimoire-text">
            <p>
              Gold candles: blessing work, success, and protection through
              strength.
            </p>
            <p>Gold ink: signatures, seals, and commitment statements that hold.</p>
            <p>Gold cloth: altar empowerment and high-standard boundary work.</p>
            <p>Gold jewelry: sovereignty anchors and confidence reinforcement.</p>
            <p>Sunlight: charging rituals and purpose alignment work.</p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* WHEN TO USE GOLD */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">When to Use Gold</h2>

          <div className="grimoire-text">
            <p>Use gold when you are:</p>
            <p>Stepping into leadership or a new level of visibility.</p>
            <p>Calling in success that must be sustained.</p>
            <p>Sealing a boundary that protects your value.</p>
            <p>Building confidence through alignment rather than performance.</p>
            <p>
              Blessing a space, tool, or pathway with Source-backed authority.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* COMMON MISUSE */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Common Misuse</h2>

          <div className="grimoire-text">
            <p>
              Gold can become ego inflation if it is used to compensate for
              insecurity. Sovereignty is quiet. It does not need witnesses.
            </p>

            <p>
              Gold can also attract attention you are not prepared to hold. Use
              it when your foundation is stable and your standards are clear.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* KEYWORDS */}
        <section className="grimoire-section">
          <h2 className="grimoire-subheading">Keywords</h2>

          <div className="grimoire-text">
            <p>
              Sovereignty • Blessing • Success • Authority • Value • Protection •
              Purpose • Prestige • Alignment
            </p>
          </div>
        </section>

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
          <p>
            <Link href="/grimoire/colors" className="grimoire-footer-link">
              ← Back to Colors
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