// app/grimoire/colors/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function ColorsPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Colors" subtitle="The language of energy in form">
        {/* HERO IMAGE */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/colors/colors-landing.png"
            alt="Colors cover image"
            className="grimoire-hero-img"
          />
        </section>

        {/* INTRO COPY */}
        <section className="grimoire-section grimoire-text">
          <p>
            Color is one of the fastest ways energy communicates. It signals
            intention, emotion, and spiritual frequency before words ever land.
            In magick, color is not decoration. Color is direction.
          </p>

          <p>
            Work with color as a tool of alignment. Choose it with precision.
            Use it to amplify what you are calling in, and to clarify what you
            are closing out.
          </p>
        </section>

        <div className="grimoire-divider" />

        {/* COLORS GRID */}
        <section className="grimoire-grid">
          {/* WHITE */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/01-white" className="wicked-link">
              <h2 className="grimoire-card-title">White</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/white.png"
                alt="White"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* RED */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/02-red" className="wicked-link">
              <h2 className="grimoire-card-title">Red</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/red.png"
                alt="Red"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* PINK */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/03-pink" className="wicked-link">
              <h2 className="grimoire-card-title">Pink</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/pink.png"
                alt="Pink"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* ORANGE */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/04-orange" className="wicked-link">
              <h2 className="grimoire-card-title">Orange</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/orange.png"
                alt="Orange"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* GOLD */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/05-gold" className="wicked-link">
              <h2 className="grimoire-card-title">Gold</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/gold.png"
                alt="Gold"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* YELLOW */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/06-yellow" className="wicked-link">
              <h2 className="grimoire-card-title">Yellow</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/yellow.png"
                alt="Yellow"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* GREEN */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/07-green" className="wicked-link">
              <h2 className="grimoire-card-title">Green</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/green.png"
                alt="Green"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* BLUE */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/08-blue" className="wicked-link">
              <h2 className="grimoire-card-title">Blue</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/blue.png"
                alt="Blue"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* INDIGO */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/09-indigo" className="wicked-link">
              <h2 className="grimoire-card-title">Indigo</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/indigo.png"
                alt="Indigo"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* PURPLE */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/10-purple" className="wicked-link">
              <h2 className="grimoire-card-title">Purple</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/purple.png"
                alt="Purple"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* SILVER */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/11-silver" className="wicked-link">
              <h2 className="grimoire-card-title">Silver</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/silver.png"
                alt="Silver"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* GREY */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/12-grey" className="wicked-link">
              <h2 className="grimoire-card-title">Grey</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/grey.png"
                alt="Grey"
                className="grimoire-card-img"
              />
            </Link>
            <div className="grimoire-divider" />
          </div>

          {/* BLACK */}
          <div className="grimoire-card">
            <Link href="/grimoire/colors/13-black" className="wicked-link">
              <h2 className="grimoire-card-title">Black</h2>
              <img
                src="https://ik.imagekit.io/w1ck3d/colors/black.png"
                alt="Black"
                className="grimoire-card-img"
              />
            </Link>
          </div>
        </section>

        <div className="grimoire-divider" />

        {/* FOOTER LINKS */}
        <footer className="grimoire-footer">
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