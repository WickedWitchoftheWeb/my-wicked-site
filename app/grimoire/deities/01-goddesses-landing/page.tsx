// app/grimoire/deities/goddesses-landing/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GoddessesLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Goddesses"
        coverImage="/deities/goddess-cover.png"
        subtitle="Click a Goddess to Enter Her Page"
      >
        <section className="zodiac-intro">
          <p>
            Goddesses are not “lesser counterparts.” They are primordial forces —
            creation, transformation, sovereignty, love, war, wisdom, death, and
            rebirth — expressed through symbol, myth, and living archetype.
          </p>
          <p className="wicked-signature">— Wicked</p>
        </section>

        <div>
          <div className="zodiac-divider"></div>

          <Link href="/grimoire/deities/aphrodite-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Aphrodite</h1>
              <img src="/deities/aphrodite/aphrodite.png" alt="Aphrodite" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/artemis-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Artemis</h1>
              <img src="/deities/artemis/artemis.png" alt="Artemis" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/asteria-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Asteria</h1>
              <img src="/deities/asteria/asteria.png" alt="Asteria" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/athena-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Athena</h1>
              <img src="/deities/athena/athena.png" alt="Athena" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/demeter-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Demeter</h1>
              <img src="/deities/demeter/demeter.png" alt="Demeter" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/diana-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Diana</h1>
              <img src="/deities/diana/diana.png" alt="Diana" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/freya-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Freya</h1>
              <img src="/deities/freya/freya.png" alt="Freya" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/gaia-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Gaia</h1>
              <img src="/deities/gaia/gaia.png" alt="Gaia" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hathor-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hathor</h1>
              <img src="/deities/hathor/hathor.png" alt="Hathor" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hecate-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hecate</h1>
              <img src="/deities/hecate/hecate.png" alt="Hecate" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hera-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hera</h1>
              <img src="/deities/hera/hera.png" alt="Hera" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hestia-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hestia</h1>
              <img src="/deities/hestia/hestia.png" alt="Hestia" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/iris-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Iris</h1>
              <img src="/deities/iris/iris.png" alt="Iris" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/juno-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Juno</h1>
              <img src="/deities/juno/juno.png" alt="Juno" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/kaali-maa">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Kaali Maa</h1>
              <img src="/deities/kaali-maa/kaali-maa.png" alt="Kaali Maa" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/lilith-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Lilith</h1>
              <img src="/deities/lilith/lilith.png" alt="Lilith" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/luna-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Luna</h1>
              <img src="/deities/luna/luna.png" alt="Luna" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/medusa-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Medusa</h1>
              <img src="/deities/medusa/medusa.png" alt="Medusa" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/nemesis-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Nemesis</h1>
              <img src="/deities/nemesis/nemesis.png" alt="Nemesis" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/nyx-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Nyx</h1>
              <img src="/deities/nyx/nyx.png" alt="Nyx" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/persephone-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Persephone</h1>
              <img src="/deities/persephone/persephone.png" alt="Persephone" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/sekhmet-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Sekhmet</h1>
              <img src="/deities/sekhmet/sekhmet.png" alt="Sekhmet" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/the-morrigan-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">The Morrigan</h1>
              <img src="/deities/the-morrigan/the-morrigan.png" alt="The Morrigan" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/venus-goddess">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Venus</h1>
              <img src="/deities/venus/venus.png" alt="Venus" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>
        </div>

        <section className="zodiac-footer-links">
          <p>
            <Link href="/grimoire/deities" className="zodiac-footer-link">
              ← Back to Deities
            </Link>
          </p>
          <p>
            <Link href="/grimoire" className="zodiac-footer-link">
              ← Back to The Wicked Grimoire
            </Link>
          </p>
        </section>
      </SectionPage>
    </>
  );
}