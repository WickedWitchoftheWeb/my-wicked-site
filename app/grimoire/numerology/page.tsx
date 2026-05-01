// app/grimoire/numerology/page.tsx
import Link from "next/link";
import SecondaryHeader from "../../../components/grimoire/SecondaryHeader";
import SectionPage from "../../../components/grimoire/SectionPage";

export default function NumerologyPage() {
  return (
    <>
      <SecondaryHeader />

      <SectionPage title="Numerology" subtitle="The magick of numbers">
        {/* HERO IMAGE + INTRO (Grimoire system) */}
        <section className="grimoire-hero">
          <img
            src="https://ik.imagekit.io/w1ck3d/numerology/numerology-cover-photo.png"
            alt="Numerology cover image"
            className="grimoire-hero-img-wide"
          />

          <section className="grimoire-intro">
            <p>
              Numbers are more than symbols: they are living energies that shape
              our world and guide our souls. In numerology, each number holds a
              vibration, a lesson, and a spiritual key that reveals hidden truths
              about who we are and the cycles we move through. From the infinite
              potential of zero to the wisdom of nine, numerology offers a map of
              self-discovery, destiny, and cosmic harmony.
            </p>
          </section>
        </section>

        <div className="grimoire-divider" />

        {/* NUMEROLOGY GRID */}
        <section className="grimoire-section">
          <div className="grimoire-grid">
            {/* ZERO */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/0-zero" className="wicked-link">
                <h2 className="grimoire-card-title">ZERO</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/zero.png"
                  alt="The number zero"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">Infinity - Divine Source - Nothingness</p>
              <p className="grimoire-card-text">
                “The silence before all creation. The womb where Spirit dreams the
                world awake.”
              </p>
            </article>

            {/* ONE */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/01-one" className="wicked-link">
                <h2 className="grimoire-card-title">ONE</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/one.png"
                  alt="The number one"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">I</p>
              <p className="grimoire-card-text">Action - Independence - Power</p>
              <p className="grimoire-card-text">
                “The spark that breaks the darkness. The first light rising from the
                dream.”
              </p>
            </article>

            {/* TWO */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/02-two" className="wicked-link">
                <h2 className="grimoire-card-title">TWO</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/two.png"
                  alt="The number two"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">II</p>
              <p className="grimoire-card-text">Intuition - Flexibility - Gentleness</p>
              <p className="grimoire-card-text">
                “The sacred dance of balance and partnership. The moment creation
                sees itself reflected.”
              </p>
            </article>

            {/* THREE */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/03-three" className="wicked-link">
                <h2 className="grimoire-card-title">THREE</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/three.png"
                  alt="The number three"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">III</p>
              <p className="grimoire-card-text">Creativity - Optimism - Exhilaration</p>
              <p className="grimoire-card-text">
                “The breath that carries light into form. The voice of creation
                breaking into song.”
              </p>
            </article>

            {/* FOUR */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/04-four" className="wicked-link">
                <h2 className="grimoire-card-title">FOUR</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/four.png"
                  alt="The number four"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">IV</p>
              <p className="grimoire-card-text">Reliability - Discipline - Patience</p>
              <p className="grimoire-card-text">
                “The hands that shape the world into form. The bones of creation
                settling into the strength of structure.”
              </p>
            </article>

            {/* FIVE */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/05-five" className="wicked-link">
                <h2 className="grimoire-card-title">FIVE</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/five.png"
                  alt="The number five"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">V</p>
              <p className="grimoire-card-text">Stimulation - Curiosity - Adaptability</p>
              <p className="grimoire-card-text">
                “The wind that stirs the stillness into motion. The restless pulse
                that seeks freedom in all directions.”
              </p>
            </article>

            {/* SIX */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/06-six" className="wicked-link">
                <h2 className="grimoire-card-title">SIX</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/six.png"
                  alt="The number six"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">VI</p>
              <p className="grimoire-card-text">Harmony - Sacrifice - Love</p>
              <p className="grimoire-card-text">
                “The warmth that gathers all things closer. The heart of creation
                learning the shape of love.”
              </p>
            </article>

            {/* SEVEN */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/07-seven" className="wicked-link">
                <h2 className="grimoire-card-title">SEVEN</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/seven.png"
                  alt="The number seven"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">VII</p>
              <p className="grimoire-card-text">Spirituality - Mysticism - Solitude</p>
              <p className="grimoire-card-text">
                “The quiet path that turns inward again. The soul of creation
                listening for its deeper truth.”
              </p>
            </article>

            {/* EIGHT */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/08-eight" className="wicked-link">
                <h2 className="grimoire-card-title">EIGHT</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/eight.png"
                  alt="The number eight"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">VIII</p>
              <p className="grimoire-card-text">Ambition - Order - Efficiency</p>
              <p className="grimoire-card-text">
                “The force that shapes wisdom into mastery. The power of creation
                accepting its own responsibility.”
              </p>
            </article>

            {/* NINE */}
            <article className="grimoire-card">
              <Link href="/grimoire/numerology/09-nine" className="wicked-link">
                <h2 className="grimoire-card-title">NINE</h2>
                <img
                  src="https://ik.imagekit.io/w1ck3d/numerology/nine.png"
                  alt="The number nine"
                  className="grimoire-card-img"
                />
              </Link>

              <p className="grimoire-card-text">IX</p>
              <p className="grimoire-card-text">Consciousness - Idealism - Selflessness</p>
              <p className="grimoire-card-text">
                “The flame that completes the circle of becoming. The light of
                creation choosing compassion as its legacy.”
              </p>
            </article>
          </div>
        </section>

        {/* FOOTER LINKS (Grimoire footer system) */}
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