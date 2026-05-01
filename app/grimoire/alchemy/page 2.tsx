// app/grimoire/alchemy/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function AlchemyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Alchemy" subtitle="The technology of transformation">
        {/* HERO IMAGE + INTRO */}
        <section className="grimoire-subhero">
          <img
            src="https://ik.imagekit.io/w1ck3d/alchemy/alchemy.png"
            alt="Alchemy cover image"
            className="grimoire-subhero-img"
          />

          <div className="grimoire-intro">
            <p>
              Alchemy is the study of how one state becomes another. It is not
              metaphor, superstition, or fantasy: it is the operating system of
              transformation itself. Every system of magick, psychology, and
              power relies on alchemical law whether it names it or not.
            </p>

            <p>
              To practice alchemy is to understand breakdown, refinement, and
              reconstruction as intentional acts. Nothing changes by accident.
              Everything transforms by process.
            </p>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* LANDING ENTRIES */}
        <section className="grimoire-grid">
          <div className="grimoire-card">
            <Link href="/grimoire/alchemy/alchemical-process" className="wicked-link">
              <h2 className="grimoire-card-title">The Alchemical Process</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/alchemy/alchemical-process.png"
                alt="The Alchemical Process"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/alchemy/inner-alchemy" className="wicked-link">
              <h2 className="grimoire-card-title">Inner Alchemy</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/alchemy/inner-alchemy.png"
                alt="Inner Alchemy"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/alchemy/outer-alchemy" className="wicked-link">
              <h2 className="grimoire-card-title">Outer Alchemy</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/alchemy/outer-alchemy.png"
                alt="Outer Alchemy"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/alchemy/symbolic-alchemy" className="wicked-link">
              <h2 className="grimoire-card-title">Symbolic Alchemy</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/alchemy/symbolic-alchemy.png"
                alt="Symbolic Alchemy"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>

          <div className="grimoire-card">
            <Link href="/grimoire/alchemy/alchemist-archetype" className="wicked-link">
              <h2 className="grimoire-card-title">The Alchemist Archetype</h2>

              <img
                src="https://ik.imagekit.io/w1ck3d/alchemy/alchemist-archetype.png"
                alt="The Alchemist Archetype"
                className="grimoire-card-img"
              />
            </Link>
                      <div className="grimoire-divider" />
          </div>
        </section>

        {/* FOOTER */}
     <footer className="grimoire-footer">
  <p>
    <Link href="/grimoire" className="grimoire-footer-link">
      ← Back to the Wicked Grimoire
    </Link>
  </p>
</footer>
      </SectionPage>
    </>
  );
}