// app/grimoire/deities/02-god-landing/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../../components/grimoire/SectionPage";

export default function GodsLandingPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage
        title="Gods"
        coverImage="/deities/god-cover.png"
        subtitle="Click a God to Enter His Page"
      >
        {/* Intro */}
        <section className="zodiac-intro">
          <p>
            Gods move through the Grimoire as forces of order, motion,
            manifestation, discipline, storm, sea, sky, death, and divine law —
            expressed through myth, symbol, and living archetype.
          </p>
          <p className="wicked-signature">— Wicked</p>
        </section>

        <div>
          <div className="zodiac-divider"></div>

          <Link href="/grimoire/deities/apollo-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Apollo</h1>
              <img src="/deities/apollo/apollo.png" alt="Apollo" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/ares-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Ares</h1>
              <img src="/deities/ares/ares.png" alt="Ares" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/caelus-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Caelus</h1>
              <img src="/deities/caelus/caelus.png" alt="Caelus" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hades-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hades</h1>
              <img src="/deities/hades/hades.png" alt="Hades" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/hermes-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Hermes</h1>
              <img src="/deities/hermes/hermes.png" alt="Hermes" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/jupiter-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Jupiter</h1>
              <img src="/deities/jupiter/jupiter.png" alt="Jupiter" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/kronos-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Kronos</h1>
              <img src="/deities/kronos/kronos.png" alt="Kronos" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/mars-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Mars</h1>
              <img src="/deities/mars/mars.png" alt="Mars" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/08-deities/mercury-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Mercury</h1>
              <img src="/deities/mercury/mercury.png" alt="Mercury" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/neptune-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Neptune</h1>
              <img src="/deities/neptune/neptune.png" alt="Neptune" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/ouranos-uranus-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Ouranos / Uranus</h1>
              <img src="/deities/uranus/uranus.png" alt="Ouranos / Uranus" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/perses-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Perses</h1>
              <img src="/deities/perses/perses.png" alt="Perses" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/pluto-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Pluto</h1>
              <img src="/deities/pluto/pluto.png" alt="Pluto" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/poseidon-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Poseidon</h1>
              <img src="/deities/poseidon/poseidon.png" alt="Poseidon" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/saturn-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Saturn</h1>
              <img src="/deities/saturn/saturn.png" alt="Saturn" className="zodiac-img" />
              <div className="zodiac-divider"></div>
            </div>
          </Link>

          <Link href="/grimoire/deities/zeus-god">
            <div className="zodiac-section">
              <h1 className="zodiac-name">Zeus</h1>
              <img src="/deities/zeus/zeus.png" alt="Zeus" className="zodiac-img" />
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